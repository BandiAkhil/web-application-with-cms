<?php

namespace App\Policies;


use App\Entities\Member;

class MemberPolicy
{
    public function all(Member $currentMember) {
        return $currentMember->isCommitteeMember();
    }

    public function find(Member $currentMember, array $parameters) {
        return $currentMember->id == $parameters['id'] || $currentMember->isCommitteeMember();
    }

    public function committees(Member $currentMember, array $parameters) {
        return $currentMember->id == $parameters['id'] || $currentMember->isBoard();
    }

    public function create(Member $currentMember) {
        return $currentMember->isBoard();
    }

    public function changePassword(Member $currentMember, array $parameters) {
        return $currentMember->id == $parameters['id'];
    }

    public function update(Member $currentMember, array $parameters) {
        return $currentMember->id == $parameters['id'] || $currentMember->isBoard();
    }

    public function delete(Member $currentMember) {
        return $currentMember->isBoard();
    }

    public function archive(Member $currentMember) {
        return $currentMember->isBoard();
    }

    public function import(Member $currentMember) {
        return $currentMember->isBoard();
    }

    public function export(Member $currentMember) {
        return $currentMember->isBoard();
    }

    public function registrations(Member $currentMember, array $parameters) {
        return $currentMember->id == $parameters['id'] || $currentMember->isBoard();
    }

}
