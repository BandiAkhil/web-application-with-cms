<?php


namespace App\Console\Commands;


use App\Entities\Activity;
use App\Entities\Committee;
use App\Entities\Contribution;
use App\Entities\FlexibleColumns\ColumnType;
use App\Entities\FlexibleColumns\FlexibleColumn;
use App\Entities\Member;
use App\Entities\News;
use App\Entities\StudyProgram;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class PrepareDemoCommand extends Command {

    protected $signature = 'demo:prepare';

    protected $description = 'Prepares the database for the final demo.';

    public function handle() {
        // Delete all flexible columns
        FlexibleColumn::query()->delete();

        // Delete all activities
        Activity::query()->delete();

        // Delete all committees
        Committee::query()->delete();

        // Delete all contributions
        Contribution::query()->delete();

        // Delete all study programs
        StudyProgram::query()->delete();

        StudyProgram::create([
            'short_name' => 'TCS',
            'full_name' => 'Technical Computer Science'
        ]);

        StudyProgram::create([
            'short_name' => 'BIT',
            'full_name' => 'Business & IT'
        ]);

        StudyProgram::create([
            'short_name' => 'CREATE',
            'full_name' => 'Creative Technology'
        ]);

        StudyProgram::create([
            'short_name' => 'TBK',
            'full_name' => 'Technische Bedrijfskunde'
        ]);

        StudyProgram::create([
            'short_name' => 'ME',
            'full_name' => 'Mechanical Engineering'
        ]);

        StudyProgram::create([
            'short_name' => 'CE',
            'full_name' => 'Chemical Engineering'
        ]);

        // General member
        factory(Member::class)->state('general_member')->create([
            'email' => 'general-member@example.com',
            'password' => Hash::make('ockham'),
            'first_name' => 'General',
            'last_name' => 'Member'
        ]);

        factory(Member::class)->state('board')->create([
            'email' => 'board-member@example.com',
            'password' => Hash::make('ockham'),
            'first_name' => 'Board',
            'last_name' => 'Member'
        ]);

        // Committee member
        $committee_member = factory(Member::class)->state('general_member')->create([
            'email' => 'committee-member@example.com',
            'password' => Hash::make('ockham'),
            'first_name' => 'Committee',
            'last_name' => 'Member'
        ]);

        $techicie = Committee::create([
            'name' => 'TechniCie',
            'description' => 'The best committee.'
        ]);

        $techicie->members()->attach($committee_member->id);

        $borrelcie = Committee::create([
            'name' => 'BorrelCie',
            'description' => 'The drink committee.'
        ]);

        // Add some activity
        /** @var Activity $activity */
        $activity = Activity::create([
            'title' => 'Bowling',
            'description' => 'Wanna go bowling with us? Then register for this activity!',
            'start_date' => '2020-04-18 16:00',
            'end_date' => '2020-04-18 19:00',
            'registration_opens' => Carbon::yesterday(),
            'registration_closes' => Carbon::tomorrow()->subSecond(),
            'price_cents' => 200,
            'committee_id' => $techicie->id,
            'location' => 'Bowling Enschede'
        ]);

        $activity->options()->create([
            'type_id' => ColumnType::integer()->id,
            'question' => 'How many bitterballen do you want?',
            'required' => true
        ]);

        Activity::create([
            'title' => 'Egg hunt',
            'description' => "It's nearly Easter, so time for an egg hun!",
            'start_date' => '2020-04-12 12:00',
            'end_date' => '2020-04-12 18:00',
            'registration_opens' => '2020-04-10 00:00',
            'registration_closes' => '2020-04-10 23:59',
            'price_cents' => 150,
            'committee_id' => $borrelcie->id,
            'location' => 'Ockham room'
        ]);

        Activity::create([
            'title' => 'Digital drink',
            'description' => 'Because of the corona virus, the usual drink will be done via Discord.',
            'start_date' => '2020-04-21 16:00',
            'end_date' => '2020-04-21 22:00',
            'registration_opens' => Carbon::yesterday(),
            'registration_closes' => Carbon::tomorrow()->subSecond(),
            'price_cents' => 0,
            'committee_id' => $borrelcie->id,
            'location' => 'At home'
        ]);

        News::create([
            'title' => 'Changed opening hours',
            'content' => 'Closed until further noticed.'
        ]);

        News::create([
            'title' => 'New website released!',
            'content' => 'The Design Project went well, and the new website is successfully deployed.'
        ]);

        $news = News::create([
            'title' => 'Happy Easter',
            'content' => 'From us to you: Happy Easter!'
        ]);

        $news->created_at = Carbon::parse('2020-04-12 09:00');
        $news->updated_at = Carbon::parse('2020-04-12 09:00');
        $news->save();

        Contribution::create([
            'identifier' => '2019 / 2020',
            'cost_cents' => 1000
        ]);

        Contribution::create([
            'identifier' => '2020 / 2021',
            'cost_cents' => 1250
        ]);

        $this->info('Preparing database was successful.');
    }
}
