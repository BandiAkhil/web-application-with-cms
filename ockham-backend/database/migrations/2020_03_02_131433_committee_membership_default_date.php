<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CommitteeMembershipDefaultDate extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('committee_memberships', function (Blueprint $table) {
            $table->dropColumn('joined_at');
        });
        Schema::table('committee_memberships', function (Blueprint $table) {
            $table->timestamp('joined_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('committee_memberships', function (Blueprint $table) {
            $table->dropColumn('joined_at');
        });
        Schema::table('committee_memberships', function (Blueprint $table) {
            $table->dateTime('joined_at');
        });
    }
}
