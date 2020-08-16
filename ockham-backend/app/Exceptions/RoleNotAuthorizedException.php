<?php

namespace App\Exceptions;


class RoleNotAuthorizedException extends ApiException
{
    public function __construct()
    {
        parent::__construct('You are not allowed to access this.', 403);
    }

}