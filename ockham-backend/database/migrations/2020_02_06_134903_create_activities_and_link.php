<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivitiesAndLink extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->text('description');
            $table->string('image');
            $table->dateTimeTz('start_date');
            $table->dateTimeTz('end_date');
            $table->text('location');
            $table->unsignedInteger('price_cents');

            # Activity--Committee
            $table->unsignedBigInteger('committee_id');
            $table->foreign('committee_id')
                ->references('id')->on('committees')->onDelete('set null'); # When deleting a committee don't delete its activities!
            $table->timestamps();
        });

        Schema::create('activity_options', function (Blueprint $table) {
           $table->bigIncrements('id');
           $table->text('question');
           $table->enum('type', ['text', 'yes_no', 'number', 'datetime']);

           # ActivityOption--Activity
           $table->unsignedBigInteger('activity_id');
           $table->foreign('activity_id')
               ->references('id')->on('activities')->onDelete('cascade');

        });

        Schema::create('activity_registrations', function (Blueprint $table) {
           $table->bigIncrements('id');
           $table->text('notes')->nullable();
           $table->boolean('paid');

           # Acttivity--Registration
           $table->unsignedBigInteger('activity_id');
           $table->foreign('activity_id')
               ->references('id')->on('activities')->onDelete('cascade');

           # Activity--Member
           $table->unsignedBigInteger('member_id');
           $table->foreign('member_id')
               ->references('id')->on('members')->onDelete('cascade');

           $table->timestamps();
        });

        Schema::create('activity_option_answers', function (Blueprint $table) {
           $table->bigIncrements('id');

           $table->text('answer');

           # ActivityOptionAnswer--ActivityRegistration
           $table->unsignedBigInteger('registration_id');
           $table->foreign('registration_id')
               ->references('id')->on('activity_registrations')->onDelete('cascade');

           # ActivityOptionAnsert--ActivityOption
           $table->unsignedBigInteger('option_id');
           $table->foreign('option_id')
               ->references('id')->on('activity_options')->onDelete('cascade');
           $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activity_option_answers');
        Schema::dropIfExists('activity_registrations');
        Schema::dropIfExists('activity_options');
        Schema::dropIfExists('activities');

    }
}
