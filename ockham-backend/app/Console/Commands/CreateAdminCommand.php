<?php

namespace App\Console\Commands;


use App\Entities\BankAccount;
use App\Entities\Member;
use App\Entities\Role;
use App\Entities\Student;
use App\Entities\StudyProgram;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class CreateAdminCommand extends Command {

    protected $signature = "admin:create {--first_name=} {--last_name=} {--email=} {--password=}";

    protected $description = "Creates and inserts an admin";

    public function handle() {
        $first_name = $this->option('first_name');
        $last_name = $this->option('last_name');
        $email = $this->option('email');
        $password = $this->option('password');

        while (empty($first_name)) {
            $first_name = $this->ask('First name');
        }

        while (empty($last_name)) {
            $last_name = $this->ask('Last name');
        }

        while (empty($email)) {
            $email = $this->ask('Email');
        }

        while (empty($password)) {
            $password = $this->ask('Password');
        }

        if (Member::query()->where('email', $email)->exists()) {
            $this->error("Member with email '" . $email . "' already exists!");
            return;
        }

        $student = new Student();
        $student->study_program_id = StudyProgram::query()->firstOrCreate([], [
            'short_name' => 'TCS',
            'full_name' => 'Technical Computer Science'
        ])->id;
        $student->batch_bhp = 3;
        $student->student_number = 's1234567';
        $student->save();

        $member = new Member();
        $member->first_name = $first_name;
        $member->last_name = $last_name;
        $member->initials = $first_name[0] . $last_name[0];
        $member->address = 'Drienerlolaan 5';
        $member->zip_code = '7522 NB';
        $member->residence = 'Enschede';
        $member->country = 'Netherlands';
        $member->phone_number = '06-12345678';
        $member->date_of_membership = Carbon::now();
        $member->remark = 'The best student';
        $member->photos_allowed = true;
        $member->email = $email;
        $member->password = Hash::make($password);
        $member->role_id = Role::query()->where('name', 'admin')->first()->id;
        $member->location_signup = 'Enschede';
        $member->memberable()->associate($student);
        $member->save();

        $bank_account = new BankAccount();
        $bank_account->debtor_name = 'Hr M J Roelink';
        $bank_account->iban = 'NL91ABNA0417164300';
        $bank_account->member_id = $member->id;
        $bank_account->authorization_contribution = true;
        $bank_account->authorization_other = true;
        $bank_account->save();

        $this->info("Admin with id " . $member->id . " created successfully!");
    }

}
