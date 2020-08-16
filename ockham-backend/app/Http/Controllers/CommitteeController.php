<?php


namespace App\Http\Controllers;


use App\Entities\Committee;
use App\Entities\CommitteeMembership;
use App\Entities\Member;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Laravel\Lumen\Routing\Controller;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * @group Committee
 *
 * API for committees
 *
 */
class CommitteeController extends Controller {

    /**
     * Get all committees
     *
     * @response [
     *  {
     *      "id": 1,
     *      "name": "TechniCie",
     *      "description": "This is an example committee",
     *      "created_at": "2020-04-01 18:27:34",
     *      "updated_at": "2020-04-01 18:27:34"
     *  },
     *  {
     *      "id": 2,
     *      "name": "Accie",
     *      "description": "This is another example committee",
     *      "created_at": "2020-04-01 18:27:34",
     *      "updated_at": "2020-04-01 18:27:34"
     *  }
     * ]
     */
    public function all() {
        return Committee::all();
    }

    /**
     * Get a committee by ID
     *
     * Requires role `committee member` of the committee or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the committee. Example: 62
     * @response {
     *  "id": 62,
     *  "name": "TechniCie",
     *  "description": "This is an example committee",
     *  "created_at": "2020-04-01 18:30:18",
     *  "updated_at": "2020-04-01 18:30:18",
     *  "flexible_columns": "[Flexible Column Objects]",
     *  "memberships": [
     *      {
     *          "id": 1,
     *          "committee_id": 62,
     *          "member_id": 102,
     *          "joined_at": "2020-04-01 18:30:18",
     *          "member": "[Member Object]"
     *      }
     *  ]
     * }
     */
    public function find(int $id) {
        return Committee::query()->with('memberships', 'memberships.member')->findOrFail($id)->append('flexible_columns');
    }

    /**
     * Create a committee
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @bodyParam name string required The name of the committee. Example: TechniCie
     * @bodyParam description string The description of the committee. Example: An example committee
     * @bodyParam members array An array of member IDs, indicating the members that should be added to the committee. Example: [1]
     * @bodyParam flexible_column_values array An array of flexible column values, in the following format:<br>{<br>&nbsp;&nbsp;"column_id": "<flexible_column_id\>",<br>&nbsp;&nbsp;"value": "<value\>"<br>}
     * @response 201 {
     *  "id": 62,
     *  "name": "TechniCie",
     *  "description": "An example committee",
     *  "created_at": "2020-04-01 20:18:39",
     *  "updated_at": "2020-04-01 20:18:39",
     *  "flexible_columns": "[Flexible Column Objects]",
     *  "memberships": [
     *      {
     *          "id": 100,
     *          "committee_id": 62,
     *          "member_id": 1,
     *          "joined_at": "2020-04-01 20:18:39",
     *          "member": "[Member Object]"
     *      }
     *  ]
     * }
     */
    public function create(Request $request) {
        $committee = DB::transaction(function () use ($request) {
            /** @var Committee $committee */
            $committee = Committee::create($request->all());

            if ($request->has('members')) {
                $members = $request->input('members');
                if (!is_array($members)) {
                    throw new BadRequestHttpException("members: Expected array, got " . gettype($members) . '.');
                }
                foreach ($members as $member_id) {
                    $committee->addMember(Member::whereId($member_id)->firstOrFail());
                }
            }

            if ($request->has('flexible_column_values')) {
                $committee->flexible_column_values()->createMany($request->input('flexible_column_values'));
            }

            return $committee;
        });

        return response()->json($committee->load(['memberships', 'memberships.member'])->append('flexible_columns'), 201);
    }

    /**
     * Updates a committee
     *
     * Requires role `committee member` of the committee or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the committee. Example: 62
     * @bodyParam name string The name of the committee.
     * @bodyParam description string The description of the committee.
     * @bodyParam members array An array of member IDs, indicating the members that should be in the committee. Omitting members will remove them from the committee.
     * @bodyParam flexible_column_values array An array of flexible column values, in the following format:<br>{<br>&nbsp;&nbsp;"column_id": "<flexible_column_id\>",<br>&nbsp;&nbsp;"value": "<value\>"<br>}<br>Omitting flexible column values will remove them.
     * @response {
     *  "id": 62,
     *  "name": "TechniCie",
     *  "description": "An example committee",
     *  "created_at": "2020-04-01 20:18:39",
     *  "updated_at": "2020-04-01 20:18:39",
     *  "flexible_columns": "[Flexible Column Objects]",
     *  "memberships": [
     *      {
     *          "id": 100,
     *          "committee_id": 62,
     *          "member_id": 1,
     *          "joined_at": "2020-04-01 20:18:39",
     *          "member": "[Member Object]"
     *      }
     *  ]
     * }
     */
    public function update(int $id, Request $request) {
        /** @var Committee $committee */
        $committee = $this->find($id);

        DB::transaction(function () use ($committee, $request) {
            $committee->update($request->all());

            if ($request->has('members')) {
                $members = $request->input('members');
                if (!is_array($members)) {
                    throw new BadRequestHttpException("members: Expected array, got " . gettype($members) . '.');
                }
                foreach ($members as $member_id) {
                    $member = Member::whereId($member_id)->firstOrFail();
                    if (CommitteeMembership::query()
                        ->where('member_id', $member_id)
                        ->where('committee_id', $committee->id)
                        ->exists()) {
                        continue;
                    }
                    $committee->addMember($member);
                }
                // Delete all members not mentioned
                CommitteeMembership::query()
                    ->where('committee_id', $committee->id)
                    ->whereNotIn('member_id', $members)
                    ->delete();
            }

            if ($request->has('flexible_column_values')) {
                $committee->flexible_column_values()->delete();
                $committee->flexible_column_values()->createMany($request->input('flexible_column_values'));
            }
        });
        return $committee->load(['memberships', 'memberships.member'])->append('flexible_columns');
    }

    /**
     * Delete a committee
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the committee. Example: 62
     * @response 204
     */
    public function delete(int $id) {
        $committee = $this->find($id);

        $committee->delete();
        return response('', 204);
    }
}
