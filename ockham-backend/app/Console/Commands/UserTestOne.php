<?php


namespace App\Console\Commands;


use App\Entities\Activity;
use App\Entities\Committee;
use App\Entities\FlexibleColumns\ColumnType;
use App\Entities\Member;
use App\Entities\News;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class UserTestOne extends Command {

    protected $signature = "user-test:one {nr}";

    protected $description = "Generates all data needed for user test 1";

    public function handle() {
        $nr = $this->argument('nr');

        /**
         * 1
         */
        if (!News::whereTitle('New website released!')->exists()) {
            News::create([
                'title' => 'New website released!',
                'content' => "Our new website has been released. Next to visual changes, it also contains a custom backend. Browse the website and see the improvements for yourself!
                        <br><br>Four Technical Computer Science students had the challenge of building a complete website from the ground up for their Design Project.
                        They did an amazing job!
                        <figure class=\"image\" style='text-align: center'><img src=\"https://sayingimages.com/wp-content/uploads/good-job-i-did-meme.jpg\" alt=\"Afbeeldingsresultaat voor good job meme\"></figure>"
            ]);
        }

        /**
         * 2a
         */
        factory(Member::class)->state('general_member')->create([
            'email' => "general-member-$nr@example.com",
            'password' => Hash::make('password@123'),
            'first_name' => 'Tets',
            'last_name' => 'User'
        ]);

        /**
         * 2c
         */
        /** @var Activity $activity */
        $activity = factory(Activity::class)->create([
            'title' => 'Bowling',
            'description' => 'Wanna go bowling with us? Then register for this activity!',
            'start_date' => Carbon::tomorrow(),
            'end_date' => Carbon::tomorrow()->addDay(),
            'registration_opens' => Carbon::yesterday(),
            'registration_closes' => Carbon::tomorrow()->subSecond()
        ]);

        $activity->options()->delete();
        $activity->options()->create([
            'type_id' => ColumnType::integer()->id,
            'question' => 'How many bitterballen do you want?',
            'required' => true
        ]);

        /**
         * 3a
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
         * 3c
         */
        factory(Member::class)->state('general_member')->create([
            'email' => "harrie-puttah@example.com",
            'password' => Hash::make('password@1234'),
            'first_name' => 'Harrie',
            'last_name' => 'Puttah'
        ]);

        /**
         * 4a
         */
        factory(Member::class)->state('board')->create([
            'email' => "board-member-$nr@example.com",
            'password' => Hash::make('password@123'),
            'first_name' => 'Board',
            'last_name' => 'User'
        ]);

        $this->info("User test with number $nr created successfully!");
    }
}

