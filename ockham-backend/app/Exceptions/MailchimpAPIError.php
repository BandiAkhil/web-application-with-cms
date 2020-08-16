<?php


namespace App\Exceptions;


class MailchimpAPIError extends ApiException {

    public function __construct($message)
    {
        parent::__construct($message, 502);
    }

}
