<?php


namespace App\Http\Controllers;


use App\Entities\FlexibleColumns\ColumnType;
use Illuminate\Routing\Controller;

/**
 * @group Column Type
 *
 * API for column types
 *
 */
class ColumnTypeController extends Controller {

    /**
     * Get all column types
     *
     * Requires role `committee member` or higher.
     *
     * @authenticated
     * @response [
     *  {
     *      "id": 1,
     *      "name": "string"
     *  },
     *  {
     *      "id": 2,
     *      "name": "boolean"
     *  },
     *  {
     *      "id": 3,
     *      "name": "integer"
     *  },
     *  {
     *      "id": 4,
     *      "name": "double"
     *  },
     *  {
     *      "id": 5,
     *      "name": "date"
     *  }
     * ]
     */
    public function all() {
        return ColumnType::all();
    }
}
