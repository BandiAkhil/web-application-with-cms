<?php


namespace App\Policies;


use App\Entities\Member;

class ActivityOptionPolicy
{

    public function all() {
        return true;
    }

    public function find() {
        return true;
    }

    public function create(Member $currentMember, $params) {
        return ActivityPolicy::canMemberEditActivity($currentMember, $params['aid']);
    }

    public function delete(Member $currentMember, $params) {
        return ActivityPolicy::canMemberEditActivity($currentMember, $params['aid']);
    }
}

