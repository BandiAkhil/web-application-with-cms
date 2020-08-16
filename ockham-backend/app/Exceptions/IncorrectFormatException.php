<?php


namespace App\Exceptions;


class IncorrectFormatException extends ApiException
{

    public function __construct($validatorErrors)
    {

        parent::__construct($validatorErrors, 400);
    }

}
