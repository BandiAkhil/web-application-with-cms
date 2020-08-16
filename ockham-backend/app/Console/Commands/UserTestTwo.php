<?php


namespace App\Console\Commands;


use App\Entities\Activity;
use App\Entities\Committee;
use App\Entities\Contribution;
use App\Entities\FlexibleColumns\ColumnType;
use App\Entities\FlexibleColumns\FlexibleColumn;
use App\Entities\FlexibleColumns\FlexibleTable;
use App\Entities\Member;
use App\Entities\News;
use App\Entities\Page;
use App\Entities\PageGroup;
use App\Entities\StudyProgram;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class UserTestTwo extends Command {

    protected $signature = "user-test:two {nr}";

    protected $description = "Generates all data needed for user test 2";

    public function handle() {
        $nr = $this->argument('nr');

        /**
         * 1a
         */
        $committee_member = factory(Member::class)->state('general_member')->create([
            'email' => "committee-member-$nr@example.com",
            'password' => Hash::make('password@123'),
            'first_name' => 'Committee',
            'last_name' => 'User'
        ]);

        if (Committee::whereName('TechniCie')->exists()) {
            Committee::whereName('TechniCie')->delete();
        }

        /** @var Committee $committee */
        $committee = factory(Committee::class)->create([
            'name' => 'TechniCie',
            'description' => 'The best committee.'
        ]);

        $committee->members()->attach($committee_member->id);

        /**
         * 2a
         */
        factory(Member::class)->state('board')->create([
            'email' => "board-member-$nr@example.com",
            'password' => Hash::make('password@123'),
            'first_name' => 'Board',
            'last_name' => 'User'
        ]);

        /**
         * 2b
         */
        if (StudyProgram::whereShortName('BIT')->exists()) {
            StudyProgram::whereShortName('BIT')->delete();
        }

        /**
         * 2c
         */

        // To avoid confusion
        Contribution::query()->delete();

        factory(Contribution::class)->create([
            'identifier' => '2020'
        ]);

        /**
         * 2d
         */
        $petah = factory(Member::class)->state('student')->create([
            'email' => 'petah-griffah@example.com',
            'password' => Hash::make('password@1234'),
            'first_name' => 'Petah',
            'last_name' => 'Griffah',
            'initials' => 'JP'
        ]);

        $petah->memberable->batch_mhp = null;
        $petah->memberable->batch_bhp = 9;
        $petah->memberable->save();

        $petah->bank_account()->create([
            'authorization_contribution' => true,
            'authorization_other' => false,
            'debtor_name' => 'J.P. Griffah',
            'iban' => 'NL91ABNA0417164300'
        ]);

        /**
         * 2e
         */
        if (PageGroup::whereName('Important notices')->exists()) {
            PageGroup::whereName('Important notices')->delete();
        }

        // Remove flexible columns as they only confuse now
        FlexibleColumn::query()->delete();

        $this->info("User test with number $nr created successfully!");
    }
}

