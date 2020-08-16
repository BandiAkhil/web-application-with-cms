<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ActivityRegistrationConstraints extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('activity_registrations', function (Blueprint $table) {
            $table->unique(['member_id', 'activity_id']);
        });
        Schema::table('activity_option_answers', function (Blueprint $table) {
            $table->unique(['registration_id', 'option_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('activity_registrations', function (Blueprint $table) {
            $table->dropUnique(['member_id', 'activity_id']);
        });
        Schema::table('activity_option_answers', function (Blueprint $table) {
            $table->dropUnique(['registration_id', 'option_id']);
        });
    }
}
