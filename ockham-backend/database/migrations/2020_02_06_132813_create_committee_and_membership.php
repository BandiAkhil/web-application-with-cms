<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommitteeAndMembership extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('committees', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->unique();
            $table->string('description')->nullable();
            $table->timestamps();
        });
        Schema::create('committee_memberships', function (Blueprint $table) {
           $table->bigIncrements('id');

           $table->unsignedBigInteger('committee_id');
           $table->foreign('committee_id')
               ->references('id')->on('committees')->onDelete('cascade');

           $table->unsignedBigInteger('member_id');
           $table->foreign('member_id')
               ->references('id')->on('members')->onDelete('cascade');

           $table->timestamps(); # Use this for joined_at
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('committee_memberships');
        Schema::dropIfExists('committees');
    }
}
