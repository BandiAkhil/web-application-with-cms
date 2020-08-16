<?php


namespace App\Policies;


class MailingListPolicy {

    public function all() {
        return true;
    }

    public function subscribe() {
        return true;
    }

    public function unsubscribe() {
        return true;
    }
}
