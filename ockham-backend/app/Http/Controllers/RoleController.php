<?php


namespace App\Http\Controllers;


use App\Entities\Role;
use Laravel\Lumen\Routing\Controller;

/**
 * @group Role
 *
 * API for roles
 *
 */
class RoleController extends Controller {

    /**
     * Get all roles
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @response [
     *  {
     *      "id": 1,
     *      "name": "admin"
     *  },
     *  {
     *      "id": 2,
     *      "name": "board"
     *  },
     *  {
     *      "id": 4,
     *      "name": "general_member"
     *  }
     * ]
     */
    public function all() {
        return Role::all();
    }
}
