<?php


namespace App\Http\Controllers;


use App\Entities\Activity;
use App\Entities\ActivityOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Laravel\Lumen\Routing\Controller;

/**
 * @group Activity options
 * Class ActivityOptionController
 * @package App\Http\Controllers
 */
class ActivityOptionController extends Controller
{

    /** List options of a given activity
     * No special roles required.
     * @authenticated
     * @urlParam aid required activity ID. Example: 1
     * @responseFile responses/options.list.json
     */
    public function all($aid) {
        return ActivityOption::whereActivityId($aid)->get()->all();
    }

    /** Retrieve one activity option
    No special roles required.
     * @authenticated
     * @urlParam aid required Activity ID. Example: 1
     * @urlParam option_id required option ID. Find it in `GET /api/v1/activities/<aid>/options`. Example: 1
     * @responseFile responses/options.create.json
     */
    public function find($aid, $option_id, Request $request) {
        return Activity::whereId($aid)->firstOrFail()->options()->findOrFail($option_id);
    }

    /** Create a new option for a given activity.
     * Issuer must be a member of the same committee this activity belongs to or higher (board/admin).
     * @authenticated
     * @urlParam aid int Activity ID. Example: 1
     * @bodyParam type_id int required ID of type of this answer. Example: 1
     * @bodyParam question string required Text of the question. Example: Beer or Cola?
     * @bodyParam required boolean required. Whether answering this question should be required when registering for an activity. Example: true
     * @responseFile responses/options.create.json
     */
    public function create($aid, Request $request) {
        $option = DB::transaction(function () use ($aid, $request) {
            $option = ActivityOption::make($request->all());
            $option->refresh();
            return $option;
        });
        Activity::whereId($aid)->first()->options()->save($option);
        $option->refresh();
        return response(ActivityOption::whereId($option->id)->first(), 201);
    }

    /** Delete one option from an activity
     * No special roles required.
     * @authenticated
     * @urlParam aid required activity ID to delete an option from. Example: 1
     * @urlParam option_id required ID of option to delete. Find it in `GET /api/v1/activities/<aid>/options`. Example: 2
     * @response
     */
    public function delete($aid, $option_id) {
        ActivityOption::query()->whereId($option_id)->whereActivityId($aid)->firstOrFail()->delete();
    }
}
