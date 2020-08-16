<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DeleteActivitiesOnCommitteeDelete extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::table('activities', function (Blueprint $table) {
            $table->dropForeign('activities_committee_id_foreign');
            $table->foreign('committee_id')
                ->references('id')->on('committees')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::table('activities', function (Blueprint $table) {
            $table->dropForeign('activities_committee_id_foreign');
            $table->foreign('committee_id')
                ->references('id')->on('committees')->onDelete('set null');
        });
    }
}
