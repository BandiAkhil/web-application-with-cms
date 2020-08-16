<?php


namespace App\Policies;


use App\Entities\Committee;
use App\Entities\Member;

class CommitteePolicy
{

    public function find(Member $member, array $parameters) {
        return $member->isCommitteeMemberOf(Committee::query()->findOrFail($parameters['id']));
    }

    public function create(Member $member) {
        return $member->isBoard();
    }

    public function update(Member $member, array $parameters) {
        return $member->isCommitteeMemberOf(Committee::query()->findOrFail($parameters['id']));
    }

    public function delete(Member $member) {
        return $member->isBoard();
    }
}
