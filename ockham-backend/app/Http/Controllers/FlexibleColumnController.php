<?php


namespace App\Http\Controllers;


use App\Entities\FlexibleColumns\FlexibleColumn;
use App\Entities\FlexibleColumns\FlexibleTable;
use App\Exceptions\FlexibleColumnNotFoundException;
use App\Exceptions\FlexibleTableNotFoundException;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;

/**
 * @group Flexible Column
 *
 * API for flexible columns
 *
 */
class FlexibleColumnController extends Controller {

    /**
     * Get all flexible columns of a table
     *
     * @authenticated
     * @urlParam table required The table. Should be one of the following: `members`, `activities`, `committees`, `news`. Example: members
     * @response [
     *  {
     *      "id": 1,
     *      "name": "Birthdate",
     *      "type": {
     *          "id": 5,
     *          "name": "date"
     *      }
     *  },
     *  {
     *      "id": 2,
     *      "name": "Nickname",
     *      "type": {
     *          "id": 1,
     *          "name": "string"
     *      }
     *  }
     * ]
     */
    public function all(string $table) {
        $flexible_table = $this->getFlexibleTable($table);
        return FlexibleColumn::whereFlexibleTableId($flexible_table->id)->get();
    }

    /**
     * Get a flexible column of a table by ID
     *
     * @authenticated
     * @urlParam table required The table. Should be one of the following: `members`, `activities`, `committees`, `news`. Example: members
     * @urlParam id required The ID of the flexible column. Example: 1
     * @response {
     *  "id": 1,
     *  "name": "Birthdate",
     *  "type": {
     *      "id": 5,
     *      "name": "date"
     *  }
     * }
     */
    public function find(string $table, int $id) {
        $flexible_table = $this->getFlexibleTable($table);
        $column = FlexibleColumn::whereFlexibleTableId($flexible_table->id)->find($id);
        if (null == $column) {
            throw new FlexibleColumnNotFoundException($id, $flexible_table);
        }
        return $column;
    }

    /**
     * Create a flexible column
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam table required The table. Should be one of the following: `members`, `activities`, `committees`, `news`. Example: members
     * @bodyParam name string required The name of the column. Example: birthdate
     * @bodyParam type_id int required The type ID, an existing ID in the `column_types` table. Example: 5
     * @response 201 {
     *  "id": 1,
     *  "name": "Birthdate",
     *  "type": {
     *      "id": 5,
     *      "name": "date"
     *  }
     * }
     */
    public function create(string $table, Request $request) {
        $flexible_table = $this->getFlexibleTable($table);

        $column = new FlexibleColumn();
        $column->fill($request->all());

        if (FlexibleColumn::query()
            ->where('name', $column->name)
            ->where('flexible_table_id', $flexible_table->id)
            ->exists()) {
            throw new ConflictHttpException("Column with name '$column->name' already exists in table '$flexible_table->name'.");
        }

        $column->flexible_table_id = $flexible_table->id;
        $column->save();
        return response()->json($column->load('type'), 201);
    }

    /**
     * Update a flexible column
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam table required The table. Should be one of the following: `members`, `activities`, `committees`, `news`. Example: members
     * @urlParam id required The ID of the flexible column. Example: 1
     * @bodyParam name string The name of the column. Example: birthdate
     * @bodyParam type_id int The type ID, an existing ID in the `column_types` table. Example: 5
     * @response {
     *  "id": 1,
     *  "name": "Birthdate",
     *  "type": {
     *      "id": 5,
     *      "name": "date"
     *  }
     * }
     */
    public function update(string $table, int $id, Request $request) {
        $column = $this->find($table, $id);
        $column->fill($request->all());
        if (FlexibleColumn::query()
            ->where('id', '!=', $column->id)
            ->where('name', $column->name)
            ->where('flexible_table_id', $column->flexible_table_id)
            ->exists()) {
            throw new ConflictHttpException("Column with name '$column->name' already exists in table '{$column->flexible_table->name}'.");
        }
        $column->save();
        return $column->refresh();
    }

    /**
     * Delete a flexible column
     *
     * Required role `board member` or higher.
     *
     * @authenticated
     * @urlParam table required The table. Should be one of the following: `members`, `activities`, `committees`, `news`. Example: members
     * @urlParam id required The ID of the flexible column. Example: 1
     * @response 204
     *
     */
    public function delete(string $table, int $id) {
        $column = $this->find($table, $id);
        $column->delete();
        return response('', 204);
    }

    private function getFlexibleTable(string $table) {
        $flexible_table = FlexibleTable::whereName($table)->first();
        if (null == $flexible_table) {
            throw new FlexibleTableNotFoundException($table);
        }
        return $flexible_table;
    }
}
