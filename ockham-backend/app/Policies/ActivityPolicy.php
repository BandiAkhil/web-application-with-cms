<?php


namespace App\Policies;


use App\Entities\Activity;
use App\Entities\ActivityRegistration;
use App\Entities\Committee;
use App\Entities\Member;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ActivityPolicy {

    public function create(Member $currentMember, array $params, $request) {
        $committee = Committee::whereId($request["committee_id"])->firstOrFail();
        return $currentMember->isCommitteeMemberOf($committee) || $currentMember->isBoard();
    }

    public function update(Member $currentMember, array $params) {
        return self::canMemberEditActivity($currentMember, $params['id']);
    }

    public function delete(Member $currentMember, array $params) {
        return self::canMemberEditActivity($currentMember, $params['id']);
    }

    public function registrations(Member $currentMember, array $params, $request) {
        return self::canMemberEditActivity($currentMember, $params['aid']) || ($request->has('member_id') && $currentMember->id == $request->input('member_id'));
    }

    public function findRegistration(Member $currentMember, array $params) {
        $registration = ActivityRegistration::query()->whereId($params['rid'])->whereActivityId($params['aid'])->firstOrFail();
        return self::canMemberEditActivity($currentMember, $params['aid']) || $currentMember->id == $registration->member_id;
    }

    public function register(Member $currentMember, array $params, $request) {
        $activity = Activity::findOrFail($params["aid"]);
        $member_id_to_subscribe = $request['member_id'] ?: $currentMember->id;
        if ($currentMember->id != $member_id_to_subscribe) {
            return self::canMemberEditActivity($currentMember, $activity->id);
        }
        else {
            return true;
        }
    }

    public function updateRegistration(Member $currentMember, array $params) {
        $activity = Activity::findOrFail($params["aid"]);
        $registration = $activity->registrations()->whereId($params["rid"])->firstOrFail();
        return $currentMember->id  == $registration->member_id || self::canMemberEditActivity($currentMember, $activity->id);
    }

    public function unregister(Member $currentMember, array $params) {
        $aid = $params['id'];
        $rid = $params['rid'];
        $activity = Activity::findOrFail($aid);
        $registered_member = $activity->registrations()->whereId($rid)->firstOrFail()->member()->first();
        return $currentMember->id == $registered_member->id || self::canMemberEditActivity($currentMember, $activity->id);
    }

    public static function canMemberEditActivity(Member $member, $activity_id) {
        try {
            $committee = Activity::whereId($activity_id)->firstOrFail()->committee()->first();
            return $member->isCommitteeMemberOf($committee); // also gives true if member is in board
        } catch (ModelNotFoundException $e) {
            return true;
        }
    }

}
