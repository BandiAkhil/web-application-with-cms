<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Entities\FlexibleColumns\FlexibleColumn::class, 30)->create();
        factory(App\Entities\StudyProgram::class, 10)->create();
        factory(App\Entities\Member::class, 100)->create();
//        factory(App\Entities\BankAccount::class, 60)->create();
        factory(App\Entities\Committee::class, 10)->create();
        factory(App\Entities\News::class, 50)->create();
        factory(App\Entities\Activity::class, 50)->create();
        factory(App\Entities\Contribution::class, 5)->create();
        factory(App\Entities\MemberContribution::class)->create();
    }
}
