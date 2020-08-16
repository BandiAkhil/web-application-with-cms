<?php


namespace App\Http\Controllers;


use App\Entities\PageGroup;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

/**
 * @group Page Group
 *
 * API for page groups
 *
 */
class PageGroupController extends Controller {

    /**
     * Get all page groups
     *
     * @response [
     *  {
     *      "id": 1,
     *      "name": "Association",
     *      "pages": [
     *          {
     *              "page_group_id": 1,
     *              "slug": "vision",
     *              "title": "Vision"
     *          }
     *      ]
     *  },
     *  {
     *      "id": 2,
     *      "name": "Companies",
     *      "pages": [
     *          {
     *              "page_group_id": 2,
     *              "slug": "all-companies",
     *              "title": "All Companies"
     *          }
     *      ]
     *  }
     * ]
     */
    public function all() {
        return PageGroup::query()->orderBy('name')->get();
    }

    /**
     * Get a page group by ID
     *
     * @urlparam id required The ID of the page group. Example: 1
     * @response {
     *  "id": 1,
     *  "name": "Association",
     *  "pages": [
     *      {
     *          "page_group_id": 1,
     *          "slug": "vision",
     *          "title": "Vision"
     *      }
     *  ]
     * }
     */
    public function find(int $id) {
        return PageGroup::findOrFail($id);
    }

    /**
     * Create a page group
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @bodyParam name string required The name of the page group. Example: Association
     * @response {
     *  "id": 1,
     *  "name": "Association"
     * }
     */
    public function create(Request $request) {
        $group = PageGroup::create($request->all());
        return response()->json($group, 201);
    }

    /**
     * Update a page group
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlparam id required The ID of the page group. Example: 1
     * @bodyParam name string The name of the page group. Example: Association
     * @response {
     *  "id": 1,
     *  "name": "Association",
     *  "pages": [
     *      {
     *          "page_group_id": 1,
     *          "slug": "vision",
     *          "title": "Vision"
     *      }
     *  ]
     * }
     */
    public function update(int $id, Request $request) {
        $group = $this->find($id);
        $group->update($request->all());
        return $group;
    }

    /**
     * Delete a page group
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the page group. Example: 1
     * @response 204
     */
    public function delete(int $id) {
        $group = $this->find($id);
        $group->delete();
        return response('', 204);
    }
}
