<?php


namespace App\Services;


use DrewM\MailChimp\MailChimp;

class MailchimpService {

    /** @var MailChimp $mailchimp */
    private $mailchimp;

    public function __construct() {
        $this->mailchimp = new MailChimp(env('MAILCHIMP_API_KEY'));
    }

    public function lists() {
        return $this->mailchimp->get('lists?fields=lists.id,lists.name');
    }

    public function subscribe(string $list_id, string $email, array $parameters = []) {
        return $this->mailchimp->post(
            "lists/$list_id/members",
            array_merge($parameters, ['email_address' => $email, 'status' => 'subscribed'])
        );
    }

    public function unsubscribe(string $list_id, string $email) {
        $subscriber_hash = $this->subscriberHash($email);
        return $this->mailchimp->delete(
            "lists/$list_id/members/$subscriber_hash"
        );
    }

    public function isSubscribed(string $list_id, string $email) {
        $subscriber_hash = $this->subscriberHash($email);
        return $this->mailchimp->get(
            "lists/$list_id/members/$subscriber_hash"
        );
    }

    public function success() {
        return $this->mailchimp->success();
    }

    private function subscriberHash(string $email): string {
        return md5(strtolower($email));
    }
}
