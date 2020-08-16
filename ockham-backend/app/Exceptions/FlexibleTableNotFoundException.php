<?php


namespace App\Exceptions;


class FlexibleTableNotFoundException extends ApiException
{

    public function __construct($table)
    {
        $message = "Table '$table' is not flexible or does not exist.";
        parent::__construct($message, 404);
    }

}
