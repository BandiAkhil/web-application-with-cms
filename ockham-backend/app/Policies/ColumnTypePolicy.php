<?php


namespace App\Policies;


use App\Entities\Member;

class ColumnTypePolicy {

    public function all(Member $member) {
        return $member->isCommitteeMember();
    }
}
