<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ExtendMember extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // All nullable fields are optional according to the registration form
        Schema::table('members', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->string('last_name');
            $table->string('insertion')->nullable();
            $table->string('first_name');
            $table->string('initials');
            $table->string('address')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('residence')->nullable();
            $table->string('country')->nullable();
            $table->string('phone_number')->nullable();
            $table->unsignedBigInteger('study_program_id');
            $table->integer('batch_bhp')->nullable();
            $table->integer('batch_mhp')->nullable();
            $table->string('student_number');
            $table->date('date_of_membership');
            $table->text('remark')->nullable();
            $table->boolean('photos_allowed');

            $table->foreign('study_program_id')
                ->references('id')->on('study_programs')
                ->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('members', function (Blueprint $table) {
           $table->dropColumn(['last_name', 'insertion', 'first_name', 'initials', 'address', 'zip_code', 'residence',
               'country', 'phone_number', 'study_program_id', 'batch_bhp', 'batch_mhp', 'student_number',
               'date_of_membership', 'remark', 'photos_allowed']);

           $table->string('name')->default('');
        });
    }
}
