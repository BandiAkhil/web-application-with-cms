<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Entities\Activity;
use App\Entities\ActivityOption;
use App\Entities\Committee;
use App\Entities\Contribution;
use App\Entities\FlexibleColumns\ColumnType;
use App\Entities\FlexibleColumns\FlexibleColumn;
use App\Entities\FlexibleColumns\FlexibleColumnValue;
use App\Entities\FlexibleColumns\FlexibleTable;
use App\Entities\Member;
use App\Entities\MemberContribution;
use App\Entities\News;
use App\Entities\Page;
use App\Entities\PageGroup;
use App\Entities\Role;
use App\Entities\Student;
use App\Entities\StudyProgram;
use App\Entities\Teacher;
use App\Entities\UploadedFile;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Relations\Relation;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Member::class, function (Faker $faker) {
    $memberable_type = $faker->randomElement([Student::class, Teacher::class]);
    $memberable = factory($memberable_type)->create();

    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'email' => 'test' . $faker->numberBetween() . '@example.com',
        'password' => \Illuminate\Support\Facades\Hash::make('password'),
        'role_id' => Role::all()->random()->id, // No need to use factory since one of our migrations puts roles in db.
        'initials' => $faker->randomLetter . $faker->randomLetter,
        'address' => $faker->address,
        'zip_code' => $faker->randomNumber(4) . $faker->randomLetter . $faker->randomLetter,
        'residence' => $faker->city,
        'country' => $faker->country,
        'phone_number' => $faker->phoneNumber,
        'date_of_membership' => $faker->date(),
        'remark' => $faker->sentence,
        'photos_allowed' => $faker->boolean,
        'location_signup' => $faker->city,
        'memberable_id' => $memberable->id,
        'memberable_type' => array_search($memberable_type, Relation::$morphMap)
    ];
});

//$factory->afterCreating(Member::class, function (Member $member, Faker $faker) {
//    if (mt_rand(0, 100) > 80) {
//        return [];
//    }
//
//    if (!function_exists('columnWithType')) {
//        function columnWithType(ColumnType $type) {
//            $columns = FlexibleColumn::whereTypeId($type->id)
//                ->where('flexible_table_id', FlexibleTable::members()->id)->get();
//            if ($columns->isEmpty()) {
//                return factory(FlexibleColumn::class)->create(['type_id' => $type->id, 'flexible_table_id' => FlexibleTable::members()->id]);
//            }
//            return $columns->random();
//        }
//    }
//
//    $elements = [
//        [
//            'column_id' => columnWithType(ColumnType::string())->id,
//            'value' => $faker->word
//        ],
//        [
//            'column_id' => columnWithType(ColumnType::boolean())->id,
//            'value' => $faker->boolean
//        ],
//        [
//            'column_id' => columnWithType(ColumnType::integer())->id,
//            'value' => mt_rand(1, 999)
//        ],
//        [
//            'column_id' => columnWithType(ColumnType::double())->id,
//            'value' => mt_rand() / mt_getrandmax() * mt_rand()
//        ],
//        [
//            'column_id' => columnWithType(ColumnType::date())->id,
//            'value' => $faker->date()
//        ]
//    ];
//
//    $chosen = array_rand($elements, mt_rand(1, count($elements)));
//    if (!is_array($chosen)) {
//        return [$elements[$chosen]];
//    }
//
//    return array_map(function($index) use ($elements, $member) {
//        $member->flexible_column_values()->create($elements[$index]);
//    }, $chosen);
//});

$factory->define(Student::class, function (Faker $faker) {
    $bachelor = $faker->boolean;

    return [
        'batch_bhp' => $bachelor ? $faker->numberBetween(0, 10) : null,
        'batch_mhp' => $bachelor ? null : $faker->numberBetween(0, 10),
        'student_number' => 's' . $faker->numberBetween(1000000, 9999999),
        'study_program_id' =>
            function () { // Use one in a database or create a mock one
                if (StudyProgram::all()->count() == 0) {
                    return factory(StudyProgram::class)->create()->id;
                }
                else {
                    return StudyProgram::all()->random()->id;
                }
            }
    ];
});

$factory->define(Teacher::class, function (Faker $faker) {
    return [
        'department' => $faker->word,
        'employee_number' => 'm' . $faker->numberBetween(1000000, 9999999)
    ];
});


$factory->state(Member::class, 'general_member', function ($faker) {
    return [
        'role_id' => Role::whereName('general_member')->first()->id
    ];
});

$factory->state(Member::class, 'board', function ($faker) {
    return [
        'role_id' => Role::whereName('board')->first()->id
    ];
});


$factory->state(Member::class, 'student', function () {
   return [
       'memberable_type' => 'student',
       'memberable_id' => factory(Student::class)->create()->id
   ];
});

$factory->state(Member::class, 'teacher', function () {
    return [
        'memberable_type' => 'teacher',
        'memberable_id' => factory(Teacher::class)->create()->id
    ];
});

$factory->define(StudyProgram::class, function (Faker $faker) {
    return [
        'short_name' => $faker->unique()->name,
        'full_name' => $faker->word . ' ' . $faker->word . ' ' . $faker->word
    ];
});

$factory->define(Committee::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->name,
        'description' => $faker->paragraph
    ];
});

$factory->afterCreating(Committee::class, function (Committee $committee, $faker) {
    $committee->addMember(factory(Member::class)->state('general_member')->create());
});


$factory->define(ActivityOption::class, function (Faker $faker) {
    $d =  [
        'type_id' => ColumnType::all()->random()->id,
        'question' => $faker->sentence,
        'required' => false
    ];
    return $d;
});

$factory->define(Activity::class, function (Faker $faker) {
    $start_date = $faker->dateTime;
    $end_date = clone $start_date;
    $end_date->add(new DateInterval("P2D")); // + 2 Days
    $regopens = clone $start_date;
    $regopens->sub(new DateInterval("P1M"));
    return [
        'title' => $faker->name,
        'description' => $faker->paragraph,
        'start_date' => $start_date,
        'end_date' => $end_date,
        'location' => $faker->text,
        'price_cents' => $faker->numberBetween(),
        'committee_id' => function () {
            $c = factory(Committee::class)->create();
            return $c->id;
        },
        'options' => factory(ActivityOption::class, 3)->make()->all(),
        'registration_opens' => $regopens, // + 1 Month
        'registration_closes' => $start_date
    ];
});

$factory->state(Activity::class, 'no_options', function (Faker $faker) {
    return [
        'options' => []
    ];
});

$factory->define(News::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'content' => $faker->realText(1000),
        'created_at' => $faker->dateTimeThisDecade,
        'updated_at' => $faker->dateTimeThisMonth
    ];
});

$factory->define(FlexibleColumn::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->name,
        'type_id' => ColumnType::all()->random()->id,
        'flexible_table_id' => FlexibleTable::all()->random()->id
    ];
});

$factory->define(UploadedFile::class, function (Faker $faker) {
    $fileable_type = $faker->randomElement([Activity::class, News::class, Page::class]);
    $fileable_id = factory($fileable_type)->create()->id;

    return [
        'name' => $faker->word . '.' . $faker->fileExtension,
        'path' => $faker->md5,
        'fileable_type' => array_search($fileable_type, Relation::$morphMap),
        'fileable_id' => $fileable_id
    ];
});

$factory->state(UploadedFile::class, 'activity', function () {
    return [
        'fileable_type' => 'activity',
        'fileable_id' => factory(Activity::class)->create()->id
    ];
});

$factory->state(UploadedFile::class, 'news', function () {
    return [
        'fileable_type' => 'news',
        'fileable_id' => factory(News::class)->create()->id
    ];
});

$factory->define(Contribution::class, function (Faker $faker) {
    return [
        'identifier' => $faker->unique()->name,
        'cost_cents' => $faker->numberBetween(100, 10000)
    ];
});

$factory->define(MemberContribution::class, function (Faker $faker) {
    $contribution_id = Contribution::all()->count() > 0 ? Contribution::all()->random()->id : factory(Contribution::class)->create()->id;
    $member = Member::query()->whereDoesntHave('member_contributions', function ($query) use ($contribution_id) {
        $query->where('contribution_id', $contribution_id);
    });

    if (!$member->exists()) {
        $member = factory(Member::class)->create();
    } else {
        $member = $member->get()->random();
    }
    return [
        'payment_method' => $faker->randomElement(['cash', 'iDeal', 'credit card']),
        'member_id' => $member->id,
        'contribution_id' => $contribution_id
    ];
});

$factory->define(Page::class, function (Faker $faker) {
    $title = $faker->unique()->word . ' ' . $faker->unique()->word . ' ' . $faker->unique()->word;
    return [
        'title' => $title,
        'slug' => str_replace(' ', '-', $title),
        'content' => $faker->realText(1000),
        'page_group_id' => factory(PageGroup::class)->create()->id
    ];
});

$factory->define(PageGroup::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->word
    ];
});
