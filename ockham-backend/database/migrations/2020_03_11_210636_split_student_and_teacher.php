<?php

use App\Entities\Member;
use App\Entities\Student;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SplitStudentAndTeacher extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('batch_bhp')->nullable();
            $table->integer('batch_mhp')->nullable();
            $table->string('student_number');
            $table->unsignedBigInteger('study_program_id')->nullable(); // Nullable because of on delete
            $table->timestamps();

            $table->foreign('study_program_id')
                ->references('id')->on('study_programs')
                ->onDelete('set null');
        });

        Schema::create('teachers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('department');
            $table->string('employee_number');
            $table->timestamps();
        });

        Schema::table('members', function (Blueprint $table) {
            $table->morphs('memberable');
        });

        $members = Member::all();
        foreach ($members as $member) {
            $student = Student::create([
                'batch_bhp' => $member->batch_bhp,
                'batch_mhp' => $member->batch_mhp,
                'student_number' => $member->student_number,
                'study_program_id' => $member->study_program_id
            ]);
            $member->memberable()->associate($student);
        }

        Schema::table('members', function (Blueprint $table) {
            $table->dropColumn('batch_bhp');
            $table->dropColumn('batch_mhp');
            $table->dropColumn('student_number');
            $table->dropColumn('study_program_id');
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
            $table->integer('batch_bhp')->nullable();
            $table->integer('batch_mhp')->nullable();
            $table->string('student_number')->nullable();
            $table->bigInteger('study_program_id')->nullable();

            $table->foreign('study_program_id')
                ->references('id')->on('study_programs')
                ->onDelete('set null');

            $table->dropMorphs('memberable');
        });

        Schema::dropIfExists('teachers');
        Schema::dropIfExists('students');
    }
}
