<?php


namespace App\Exceptions;


use App\Entities\FlexibleColumns\FlexibleTable;

class FlexibleColumnNotFoundException extends ApiException
{

    public function __construct(int $id, FlexibleTable $table)
    {
        $message = "Flexible column of table '$table->name' with id $id not found.";
        parent::__construct($message, 404);
    }

}
