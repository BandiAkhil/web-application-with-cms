<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Contributions extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('contributions');

        Schema::create('contributions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('identifier');
            $table->integer('cost_cents');
            $table->timestamps();

            $table->unique('identifier');
        });

        Schema::create('member_contributions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('contribution_id');
            $table->unsignedBigInteger('member_id');
            $table->string('payment_method');
            $table->timestamps();

            $table->foreign('contribution_id')
                ->references('id')
                ->on('contributions')
                ->onDelete('cascade');

            $table->foreign('member_id')
                ->references('id')
                ->on('members')
                ->onDelete('cascade');

            $table->unique(['contribution_id', 'member_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('member_contributions');
        Schema::dropIfExists('contributions');

        Schema::create('contributions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('member_id');
            $table->unsignedInteger('contribution_number');
            $table->boolean('paid');
            $table->string('payment_method');

            $table->foreign('member_id')
                ->references('id')
                ->on('members')
                ->onDelete('cascade');
        });
    }
}
