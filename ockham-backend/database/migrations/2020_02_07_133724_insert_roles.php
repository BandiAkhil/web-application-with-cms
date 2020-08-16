<?php

use App\Entities\Member;
use App\Entities\Role;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InsertRoles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $roles = [
            [
                'name' => 'admin',
                'description' => ''
            ],
            [
                'name' => 'board',
                'description' => ''
            ],
            [
                'name' => 'committee_member',
                'description' => ''
            ],
            [
                'name' => 'general_member',
                'description' => ''
            ]
        ];

        foreach ($roles as $r) {
            if (!Role::query()->where('name', $r['name'])->exists()) {
                $role = new Role();
                $role->name = $r['name'];
                $role->description = $r['description'];
                $role->save();
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        foreach (Role::query()->get() as $role) {
            if (count($role->members) === 0) {
                $role->delete();
            }
        }
    }
}
