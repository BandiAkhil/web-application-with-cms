<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ActivityPaidDefaultFalse extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('activity_registrations', function (Blueprint $table) {
            $table->boolean('paid')->default(false)->nullable(false)->change();
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
            $table->boolean('paid')->default(NULL)->nullable(false)->change();
        });
    }
}