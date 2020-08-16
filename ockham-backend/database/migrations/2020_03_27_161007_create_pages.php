<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('page_groups', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');

            $table->unique('name');
        });

        Schema::create('pages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('slug');
            $table->string('title');
            $table->text('content');
            $table->unsignedBigInteger('page_group_id');
            $table->timestamps();

            $table->foreign('page_group_id')
                ->references('id')
                ->on('page_groups')
                ->onDelete('cascade');

            $table->unique('slug');
            $table->index('slug');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pages');
        Schema::dropIfExists('page_groups');
    }
}
