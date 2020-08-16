<?php


namespace App\Policies;


use App\Entities\Member;

class RolePolicy {

    public function all(Member $member) {
        return $member->isBoard();
    }
}
