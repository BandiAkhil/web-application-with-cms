<?php


namespace App\Http\Controllers;


use App\Entities\BankAccount;
use App\Entities\Contribution;
use App\Entities\Student;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * @group Contribution
 *
 * API for contributions
 *
 */
class ContributionController extends Controller {

    /**
     * Get all contributions
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @response [
     *  {
     *      "id": 1,
     *      "identifier": "2019-2020",
     *      "cost_cents": 1000,
     *      "created_at": "2019-04-01 18:30:27",
     *      "updated_at": "2019-04-01 18:30:27"
     *  },
     *  {
     *      "id": 2,
     *      "identifier": "2020-2021",
     *      "cost_cents": 1250,
     *      "created_at": "2020-04-01 18:30:27",
     *      "updated_at": "2020-04-01 18:30:27"
     *  }
     * ]
     */
    public function all() {
        return Contribution::all();
    }

    /**
     * Get a contribution by ID
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the contribution. Example: 1
     * @response {
     *  "id": 1,
     *  "identifier": "2019-2020",
     *  "cost_cents": 1000,
     *  "created_at": "2019-04-01 18:30:27",
     *  "updated_at": "2019-04-01 18:30:27"
     * }
     */
    public function find(int $id) {
        return Contribution::findOrFail($id);
    }

    /**
     * Create a contribution
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @bodyParam identifier string required The identifier of the contribution. Example: 2019-2020
     * @bodyParam cost_cents int required The cost in cents of the contribution. Example: 1000
     * @response 201 {
     *  "id": 1,
     *  "identifier": "2019-2020",
     *  "cost_cents": 1000,
     *  "created_at": "2019-04-01 18:30:27",
     *  "updated_at": "2019-04-01 18:30:27"
     * }
     */
    public function create(Request $request) {
        $contribution = Contribution::create($request->all());
        return response()->json($contribution, 201);
    }

    /**
     * Update a contribution
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the contribution. Example: 1
     * @bodyParam identifier string The identifier of the contribution. Example: 2019-2020
     * @bodyParam cost_cents int The cost in cents of the contribution. Example: 1000
     * @response 200 {
     *  "id": 1,
     *  "identifier": "2019-2020",
     *  "cost_cents": 1000,
     *  "created_at": "2019-04-01 18:30:27",
     *  "updated_at": "2019-04-01 18:30:27"
     * }
     */
    public function update(int $id, Request $request) {
        $contribution = $this->find($id);
        $contribution->update($request->all());
        return $contribution;
    }

    /**
     * Delete a contribution
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the contribution. Example: 1
     * @response 204
     */
    public function delete(int $id) {
        $contribution = $this->find($id);
        $contribution->delete();
        return response('', 204);
    }

    /**
     * Export a contribution for a specific batch of members in CSV format
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the contribution. Example: 1
     * @bodyParam category string required The category of the export. Example: Contribution 2020
     * @bodyParam batch_bhp int The bachelor bach number. Should be absent if `match_mhp` is set. Either `batch_bhp` or `batch_mhp` is required. Example: 3
     * @bodyParam batch_mhp int The master bach number. Should be absent if `batch_bhp` is set. Either `batch_bhp` or `batch_mhp` is required. Example: 3
     * @response <CSV file>
     */
    public function export(int $id, Request $request) {
        $contribution = $this->find($id);
        if (!$request->has('category')) {
            throw new BadRequestHttpException('Category is required.');
        }

        if ((!$request->has('batch_bhp') && !$request->has('batch_mhp')) || $request->has(['batch_bhp', 'batch_mhp'])) {
            throw new BadRequestHttpException('Please provide either \'batch_bhp\' or \'batch_mhp\'.');
        }

        $category = $request->input('category');

        $bankAccounts = BankAccount::whereAuthorizationContribution(true)
            ->whereHas('member', function ($query) use ($request, $contribution) {
                /** @var Builder $query */
                $query->whereHasMorph('memberable', Student::class, function ($query) use ($request) {
                        /** @var Builder $query */
                        if ($request->has('batch_bhp')) {
                            $query->where('batch_bhp', $request->input('batch_bhp'));
                        } else {
                            $query->where('batch_mhp', $request->input('batch_mhp'));
                        }
                    });

                $query->whereDoesntHave('member_contributions', function ($query) use ($contribution) {
                    /** @var Builder $query */
                    $query->where('contribution_id', $contribution->id);
                });
            })->get();

        $file_name = 'contributions-' . $contribution->identifier . '-' .
            ($request->has('batch_bhp')
                ? 'bhp-' . $request->input('batch_bhp')
                : 'mhp-' . $request->input('batch_mhp'));
        $file_name .= '_' . str_replace([' ', ':'], ['_', '-'], Carbon::now()->toDateTimeString());
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename=' . $file_name .'.csv',
            'Pragma' => 'no-cache',
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Expires' => '0'
        ];
        $columns = ['Kenmerk machtiging', 'Naam betaler', 'Rekeningnummer', 'Bedrag', 'Valuta', 'Categorie', 'Landcode betaler',
            'Type machtiging', 'Ondertekend op'];

        $callback = function() use ($bankAccounts, $columns, $category, $contribution) {
            $file = fopen('php://output', 'w');
            fputcsv($file, $columns);

            foreach ($bankAccounts as $bankAccount) {
                fputcsv($file, [
                    $bankAccount->member->id,
                    $bankAccount->debtor_name,
                    str_replace(' ', '', $bankAccount->iban),
                    number_format($contribution->cost_cents / 100, 2, ',', ''),
                    'EUR',
                    $category,
                    substr($bankAccount->iban, 0, 2),
                    'Doorlopend',
                    Carbon::parse($bankAccount->member->date_of_membership)->format('d-m-Y')
                ]);
            }
            fclose($file);
        };
        return response()->stream($callback, 200, $headers);
    }
}
