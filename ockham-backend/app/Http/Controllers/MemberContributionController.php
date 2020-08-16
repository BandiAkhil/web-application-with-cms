<?php


namespace App\Http\Controllers;


use App\Entities\MemberContribution;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

/**
 * @group Member Contributions
 *
 * API for managing contributions of members
 *
 */
class MemberContributionController extends Controller {

    /**
     * Get all paid contributions of a member
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam mid required The member ID for which the contributions need to be fetched. Example: 1
     * @response [
     *  {
     *      "member_id": 1,
     *      "payment_method": "Cash",
     *      "created_at": "2020-04-02 14:38:49",
     *      "updated_at": "2020-04-02 14:38:49",
     *      "contribution": {
     *          "id": 1,
     *          "identifier": "2019-2020",
     *          "cost_cents": 1000,
     *          "created_at": "2019-04-01 18:30:27",
     *          "updated_at": "2019-04-01 18:30:27"
     *      }
     *  },
     *  {
     *      "member_id": 1,
     *      "payment_method": "iDeal",
     *      "created_at": "2020-04-02 14:38:49",
     *      "updated_at": "2020-04-02 14:38:49",
     *      "contribution": {
     *          "id": 2,
     *          "identifier": "2020-2021",
     *          "cost_cents": 1250,
     *          "created_at": "2020-04-02 14:38:49",
     *          "updated_at": "2020-04-02 14:38:49"
     *      }
     *  }
     * ]
     */
    public function all(int $mid) {
        return MemberContribution::whereMemberId($mid)->get();
    }

    /**
     * Get a paid contribution of a member by ID
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam mid required The member ID. Example: 1
     * @urlParam cid required The contribution ID. Example: 1
     * @response {
     *  "member_id": 1,
     *  "payment_method": "Cash",
     *  "created_at": "2020-04-02 14:38:49",
     *  "updated_at": "2020-04-02 14:38:49",
     *  "contribution": {
     *      "id": 1,
     *      "identifier": "2019-2020",
     *      "cost_cents": 1000,
     *      "created_at": "2019-04-01 18:30:27",
     *      "updated_at": "2019-04-01 18:30:27"
     *  }
     * }
     */
    public function find(int $mid, int $cid) {
        return MemberContribution::query()
            ->where('contribution_id', $cid)
            ->where('member_id', $mid)
            ->firstOrFail();
    }

    /**
     * Register a paid contribution of a member
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam mid required The member ID of the paid contribution. Example: 1
     * @bodyParam contribution_id int required The contribution ID, an existing ID in the `contributions` table. Example: 1
     * @bodyParam payment_method string required The payment method. Example: Cash
     * @response {
     *  "member_id": 1,
     *  "payment_method": "Cash",
     *  "created_at": "2020-04-02 14:38:49",
     *  "updated_at": "2020-04-02 14:38:49",
     *  "contribution": {
     *      "id": 1,
     *      "identifier": "2019-2020",
     *      "cost_cents": 1000,
     *      "created_at": "2019-04-01 18:30:27",
     *      "updated_at": "2019-04-01 18:30:27"
     *  }
     * }
     */
    public function create(int $mid, Request $request) {
        $memberContribution = MemberContribution::create(
            array_merge($request->all(), ['member_id' => $mid])
        );
        return response()->json($memberContribution->load('contribution'), 201);
    }

    /**
     * Update a paid contribution of a member
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam mid required The member ID of the paid contribution. Example: 1
     * @urlParam cid required The contribution ID. Example: 1
     * @bodyParam payment_method string The payment method. Example: Cash
     * @response {
     *  "member_id": 1,
     *  "payment_method": "Cash",
     *  "created_at": "2020-04-02 14:38:49",
     *  "updated_at": "2020-04-02 14:38:49",
     *  "contribution": {
     *      "id": 1,
     *      "identifier": "2019-2020",
     *      "cost_cents": 1000,
     *      "created_at": "2019-04-01 18:30:27",
     *      "updated_at": "2019-04-01 18:30:27"
     *  }
     * }
     */
    public function update(int $mid, int $cid, Request $request) {
        $memberContribution = $this->find($mid, $cid);
        if ($request->has('payment_method')) {
            $memberContribution->payment_method = $request->input('payment_method');
            $memberContribution->save();
        }
        return $memberContribution;
    }

    /**
     * Delete a contribution of a member
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam mid required The member ID of the contribution. Example: 1
     * @urlParam cid required The contribution ID. Example: 1
     * @response 204
     */
    public function delete(int $mid, int $cid) {
        $memberContribution = $this->find($mid, $cid);
        $memberContribution->delete();
        return response('', 204);
    }
}
