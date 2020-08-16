<?php


namespace App\Policies;


use App\Entities\Member;

class FlexibleColumnPolicy
{
    public function all() {
        return true;
    }

    public function find() {
        return true;
    }

    public function create(Member $member) {
        return $member->isBoard();
    }

    public function update(Member $member) {
        return $member->isBoard();
    }

    public function delete(Member $member) {
        return $member->isBoard();
    }
}
