<?php


namespace activity_registration;


use App\Entities\Activity;
use App\Entities\ActivityOption;
use App\Entities\FlexibleColumns\ColumnType;
use App\Entities\Member;
use Carbon\Carbon;

class AddRegistrationWithOptionsTest extends \TestCase
{

    protected $activity;
    protected $option;
    protected $member;

    protected function setUp(): void
    {
        parent::setUp();
        $this->activity = factory(Activity::class)->create([
            'options' => [],
            'start_date' => Carbon::now()->addDays(2),
            'end_date' => Carbon::now()->addDays(3),
            'registration_opens' => Carbon::now(),
            'registration_closes' => Carbon::now()->addDay()
        ]);

        $this->option = factory(ActivityOption::class)->create([
            'type_id' => ColumnType::boolean()->id,
            'required' => false,
            'activity_id' => $this->activity->id
        ]);

        $this->member = factory(Member::class)->create();
    }


    public function request($data = null) {
        $aid = $this->activity->id;
        $r = ["POST", "/api/v1/activities/$aid/registrations/"];
        if ($data != null) array_push($r, $data);
        return $r;
    }

    public function testRegisterValid() {
        $this->asMember($this->member, ...$this->request([
            'answers' => [
                [
                    'option_id' => $this->option->id,
                    'answer' => true
                ]
            ]
        ]))
            ->seeStatusCode(200);
        $this->seeInDatabase('activity_registrations', [
           'member_id' => $this->member->id,
            'activity_id' => $this->activity->id
        ]);

        $r = $this->activity->registrations()->whereMemberId($this->member->id)->first();

        $this->seeInDatabase('activity_option_answers', [
            'registration_id' => $r->id,
            'option_id' => $this->option->id,
            'answer' => true
        ]);
    }

    public function testRegisterWrongAnswerType() {
        $this->asMember($this->member, ...$this->request([
            'answers' => [
                [
                    'option_id' => $this->option->id,
                    'answer' => 'Not a boolean for sure'
                ]
            ]
        ]))
            ->seeStatusCode(400);
    }

}
