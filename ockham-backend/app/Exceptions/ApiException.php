<?php


namespace App\Exceptions;


use Exception;
use phpDocumentor\Reflection\Types\Array_;
use Throwable;

class ApiException extends Exception
{

    /**
     * @var mixed
     */
    protected $payload;

    function __construct($message, $httpCode = 500, $payload=null)
    {
        parent::__construct($message, $httpCode, null);
        $this->payload = $payload;
    }

    public function getPayload() {
        return $this->payload;
    }
}
