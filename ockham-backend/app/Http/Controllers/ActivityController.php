<?php


namespace App\Http\Controllers;


use App\Entities\Activity;
use App\Entities\ActivityOptionAnswer;
use App\Entities\ActivityRegistration;
use App\Entities\Committee;
use App\Policies\ActivityPolicy;
use App\Services\FlexibleColumnValueService;
use App\Services\UploadedFileService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Laravel\Lumen\Routing\Controller;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * @group Activity management
 * @package App\Http\Controllers
 */
class ActivityController extends Controller
{
    private $uploadedFileService;

    private $flexibleColumnValueService;

    public function __construct(UploadedFileService $uploadedFileService, FlexibleColumnValueService $flexibleColumnValueService) {
        $this->uploadedFileService = $uploadedFileService;
        $this->flexibleColumnValueService = $flexibleColumnValueService;
    }

    /** List activities present in the system
     * @queryParam committee_id int to only list activities of one specified committee. Example: 1
     * @queryParam upcoming_only boolean whether to only return activities in the future. Example: false
     * @queryParam limit int maximum number of activities to return. Example: 1
     * @responseFile responses/activities.get.json
     * @responseFile 404 responses/activities.get.unknown_committee.json
     */
    public function all(Request $request) {
        $activities = Activity::with('committee', 'options');
        if ($request->has('committee_id')) {
            $committee_id = $request->input('committee_id');
            Committee::whereId($committee_id)->firstOrFail(); // Fails with 404 if not found
            $activities->where('committee_id', $committee_id);
        }

        if ($request->has('upcoming_only') && $request->input('upcoming_only') !== 'false') {
            $activities->where('end_date', '>', Carbon::now());
        }

        if ($request->has('limit')) {
            $activities->limit($request->input('limit'));
        }
        return $activities->orderBy('start_date', 'asc')->get();
    }

    /**
     * Get one activity by its ID.
     * @urlParam id required - id of activity. Example: 169
     * @responseFile responses/activities.get.id.json
     * @responseFile responses/activities.get.id.404.json
     */
    public function find($id) {
        return Activity::whereId($id)->with('files')->firstOrFail()->append('flexible_columns');
    }

    /** Create an activity
     * Requires role committee_member or higher
     * @authenticated
     * @bodyParam title string required. Example: New Year Celebration
     * @bodyParam description string required. Example: Let's all come together and celebrate. Gifts welcome!
     * @bodyParam start_date string required when does this activity start? Example: 2020-12-01 15:00:00
     * @bodyParam end_date string required when does this activity end? Example: 2020-12-01 20:00:00
     * @bodyParam location string required. Example: University of Twente
     * @bodyParam price_cents int required Price of the activity, in cents. Can be zero for a free activity. Example: 500
     * @bodyParam committee_id int required id of a committee that this activity will belong to. Example: 1
     * @bodyParam options array optional array of options
     * @bodyParam options.*.question string Text of the question. Example: Would you like pizza?
     * @bodyParam options.*.type_id int. Example: 2
     * @bodyParam options.*.required boolean Whether answering this question should be required when registering for this activity. Example: true
     * @bodyParam registration_opens string required when does registration for this activity open? Example: 2020-11-01 00:00:00
     * @bodyParam registration_closes string required when does registration for this activity close? Example: 2020-11-30 23:59:59
     * @responseFile responses/activities.post.json
     */
    public function create(Request $request) {
        $activity = DB::transaction(function() use ($request) {
            $options = $request->input('options');
            if (!is_array($options)) {
                $options = json_decode($options, true);
            }

            $fields = $request->all();
            $fields['options'] = $options;

            $activity = Activity::create($fields);

            if ($request->hasFile('files')) {
                $this->uploadedFileService->saveFiles($activity, $request->file('files'));
            }

            if ($request->has('flexible_column_values')) {
                $this->flexibleColumnValueService->save($activity, $request->input('flexible_column_values'));
            }

            return $activity;
        });

        $activity = Activity::whereId($activity->id)->with('files')->first()->append('flexible_columns');
        return response()->json($activity, 201);
    }

    /** Edit an activity
     * Requires role committee_member or higher
     * Member issuing this request should be a member of the committee that this activity belongs to.
     * @authenticated
     * @bodyParam title string No-example
     * @bodyParam description string. Example: new description
     * @bodyParam start_date string  when does this activity start? No-example
     * @bodyParam end_date string  when does this activity end? Example: No-example
     * @bodyParam location string . Example: At home
     * @bodyParam price_cents int  Price of the activity, in cents. Can be zero for a free activity. No-example
     * @bodyParam committee_id int  id of a committee that this activity will belong to. No-example
     * @bodyParam options array optional array of options. No-example
     * @bodyParam options.*.question string Text of the question. No-example
     * @bodyParam options.*.type_id int. No-example
     * @bodyParam options.*.required boolean Whether answering this question should be required when registering for this activity. No-example
     * @bodyParam registration_opens string  when does registration for this activity open? No-example
     * @bodyParam registration_closes string  when does registration for this activity close? No-example
     * @responseFile responses/activities.put.json
     */
    public function update($id, Request $request) {
        $activity = Activity::whereId($id)->firstOrFail();
        DB::transaction(function() use ($request, $activity) {
            $activity->update($request->except('options'));

            if ($request->hasFile('files')) {
                $this->uploadedFileService->saveFiles($activity, $request->file('files'));
            }

            if ($request->has('flexible_column_values')) {
                $activity->flexible_column_values()->delete();
                $this->flexibleColumnValueService->save($activity, $request->input('flexible_column_values'));
            }
        });

        return $activity->load('files')->append('flexible_columns');
    }

    /** List registrations of an activity.
     * Requires role committee_member or higher.
     * Member issuing this request must be a member of committee that the specified activity belongs to.
     * @authenticated
     * @urlParam aid required ID of activity to get registrations for. Example: 1
     * @queryParam member_id int optional Only get registration for the given member (if exists). No-example
     * @responseFile responses/activities.get.registrations.json
     */
    public function registrations($aid, Request $request) {
        $registrations = Activity::whereId($aid)->firstOrFail()->registrations();
        if ($request->has('member_id')) {
            $registrations->whereMemberId($request->input('member_id'));
        }
        return $registrations->get();
    }

    /** Get one registration from an activity
     * It must either be your registration, you belong to the committee that owns the activity or you are board/admin.
     * @authenticated
     * @urlParam aid required Activity ID. Example: 1
     * @urlParam rid required Registration ID. Example: 1
     * @responseFile responses/activities.find.registration.json
     */
    public function findRegistration($aid, $rid) {
        return ActivityRegistration::query()->whereActivityId($aid)->whereId($rid)->firstOrFail();
    }

    /** Register a user for an activity.
     * Registration is a link between a member and an activity, indicating intent to attend.
     *
     * For every required activity option, an answer needs to be provided.
     * Does not require any special role to add a registration for yourself. In order to register someone else, you must be a member of the same committee this activity belongs to (or higher).
     * @authenticated
     * @urlParam aid required activity ID to register for
     * @bodyParam member_id int optional Only if registering someone else. Example: 1
     * @bodyParam notes string optional Any additional info member wants to communicate. No-example
     * @bodyParam answers array optional
     * @bodyParam answers.*.option_id int ID of activity option that is answered Example: 1
     * @bodyParam answers.*.answer Mixed. Type must match the type of activity option specified. Example: true
     * @responseFile responses/activities.register.json
     */
    public function register($aid, Request $request) {
        return DB::transaction(function () use ($aid, $request) {

            $activity = Activity::whereId($aid)->firstOrFail();
            if (!$activity->registrationOpenToPublic() && !ActivityPolicy::canMemberEditActivity($request->auth, $aid)) {
                throw new BadRequestHttpException("Registration to this activity is now closed. You can ask a committee member or board to sign you up.");
            }
            if (!$request->auth->isCommitteeMember()) {
                $data = $request->except('paid');
            }
            else $data = $request->all();

            $registration = new ActivityRegistration;
            $registration->activity_id = $aid;
            $registration->member_id = array_key_exists('member_id', $data) ? $data['member_id'] : $request->auth->id;
            $registration->fill($data);
            $registration->save();


            $answers_dict = array();
            foreach (@$data["answers"] ?: [] as $answer) {
                $answers_dict[$answer["option_id"]] = $answer;
            }
            foreach ($activity->requiredOptions()->get() as $opt) {
                if (!array_key_exists($opt->id, $answers_dict)) {
                    throw new BadRequestHttpException("Missing answer for required activity option: $opt->question, option_id=$opt->id");
                }
            }

            return response()->json(ActivityRegistration::find($registration->id), 200);
        });
    }

    /** Unregister member from an activity
     * You can only delete your own registration as a general member.
     * To unregister others, you must either be in the committee that owns this committee or be a board/admin.
     * @authenticated
     * @urlParam id required Activity id that you want to delete registration for
     * @urlParam rid required Registration id that you want to delete. Find it in `GET /api/v1/activities/<aid>/registrations?member_id=<member_id>`
     * @response
     */
    public function unregister($id, $rid) {
        $registration = ActivityRegistration::query()->whereId($rid)->whereActivityId($id)->firstOrFail();
        $registration->delete();
    }

    /** Deletes the activity. All registrations are deleted too.
     * Requires role committee_member or higher.
     * User issuing this request must be a member of committee this activity belongs to.
     * @authenticated
     * @urlParam id required ID of activity to delete. Example: 1
     * @responsebo
     */
    public function delete($id) {
        Activity::whereId($id)->firstOrFail()->delete();
    }

    /** Change registration for an activity
     * In order to modify a registration for your own, no special role is needed.
     * To modify a registration of someone else, you need to be in the same committee this activity belongs to or higher (board/admin).
     * @authenticated
     * @urlParam aid required activity ID. Example: 1
     * @urlParam rid required registration ID. Can be retrieved from GET `/api/v1/activities/<aid>/registrations/` Example: 1
     *
     * @bodyParam notes string optional Any additional info member wants to communicate. Example: I'm vegetarian
     * @bodyParam answers array optional
     * @bodyParam answers.*.option_id int ID of activity option that is answered Example: 1
     * @bodyParam answers.*.answer Mixed. Type must match the type of activity option specified. Example: false
     * @responseFile responses/activities.register.edit.json
     */
    public function updateRegistration($aid, $rid, Request $request) {
        $activity = Activity::findOrFail($aid);
        $registration = $activity->registrations()->whereId($rid)->firstOrFail();
        $data = $request->auth->isCommitteeMember() ? $request->all() : $request->except('paid');
        $registration->update($data);
        $registration->save();
        foreach ($request->input('answers', []) as $answer) {
            $answer['registration_id'] = $rid;
            $a = ActivityOptionAnswer::firstOrCreate([
                'option_id' => $answer['option_id'],
                'registration_id' => $rid
            ], $answer);
            $registration->answers()->save($a);
        }
        return $registration;
    }


}
