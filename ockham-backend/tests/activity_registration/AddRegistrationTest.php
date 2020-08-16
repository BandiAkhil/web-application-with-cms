<?php


namespace activity;


use App\Entities\Activity;
use App\Entities\ActivityOption;
use App\Entities\ActivityRegistration;
use App\Entities\Committee;
use App\Entities\FlexibleColumns\ColumnType;
use App\Entities\Member;
use Carbon\Carbon;
use Laravel\Lumen\Testing\DatabaseTransactions;

class AddRegistrationTest extends \TestCase
{

    use DatabaseTransactions;

    public $activity;
    public $committee;

    protected function setUp(): void
    {
        parent::setUp();
        $this->committee = factory(Committee::class)->create();
        $this->activity = factory(Activity::class)->create([
            'committee_id' => $this->committee->id,
            'registration_closes' => Carbon::now()->addDay()->format("Y-m-d H:i:s")
        ]);
        $member = factory(Member::class)->create();
        $this->committee->members()->save($member);
    }


    private function request($data=null) {
        $id = $this->activity->id;
        $r = ['POST', "/api/v1/activities/$id/registrations"];
        if ($data != null) array_push($r, $data);
        return $r;
    }

    public function testRoute() {
        $this->requiresAuth(...$this->request());
    }

    public function testPolicy() {
        $request = $this->request();
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->accessibleBy($this->committee->members()->first(), ...$request);
        $this->accessibleAsGeneralMember(...$request);
    }

    public function testValidYourself() {
        $this->asGeneralMember(...$this->request())
            ->seeStatusCode(200);
    }

    public function testValidSomeoneElse() {
        $data = [
            "member_id" => factory(Member::class)->create()->id
        ];
        $request = $this->request($data);
        $this->notAccessibleAsGeneralMember(...$request);
        $this->asBoard(...$request)
            ->seeStatusCode(200);
    }

    public function testRegistrationClosed() {
        $this->activity->registration_opens = Carbon::now()->subCenturies(2)->format("Y-m-d H:i:s");
        $this->activity->registration_closes = Carbon::now()->subCenturies(1)->format("Y-m-d H:i:s");
        $this->activity->save();
        $this->asGeneralMember(...$this->request())
            ->seeStatusCode(400)
            ->seeJson([
                'error' => true,
                'message' => 'Registration to this activity is now closed. You can ask a committee member or board to sign you up.'
            ]);
    }

    public function testRegistrationClosedButForAdmin() {
        $this->activity->registration_opens = Carbon::now()->subCenturies(2)->format("Y-m-d H:i:s");
        $this->activity->registration_closes = Carbon::now()->subCenturies(1)->format("Y-m-d H:i:s");
        $this->activity->save();
        $this->asAdmin(...$this->request())
            ->seeStatusCode(200);
    }


    public function testDuplicate() {
        $member = factory(Member::class)->create();

        $r = new ActivityRegistration;
        $r->activity_id = $this->activity->id;
        $r->member_id = $member->id;
        $r->save();

        $this->seeInDatabase('activity_registrations', [
            'activity_id' => $this->activity->id,
            'member_id' => $member->id
        ]);

        $this->asAdmin('POST', '/api/v1/activities/'.$this->activity->id.'/registrations', [
            'member_id' => $member->id
        ])
            ->seeJson([
                'error' => true,
                'payload' => [
                    'activity_id' => [
                        'Already exists'
                    ],
                    'member_id' => [
                        'Already exists'
                    ]
                ]
            ])
            ->seeStatusCode(400);
    }

    public function testMissingRequiredAnswers() {
        $member = factory(Member::class)->create();
        $opt = new ActivityOption;
        $opt->type_id = ColumnType::boolean()->id;
        $opt->question = "A very important question";
        $opt->required = true;
        $this->activity->options()->save($opt);

        $this->asAdmin('POST', '/api/v1/activities/'.$this->activity->id.'/registrations', [
            'member_id' => $member->id
        ])
            ->seeJson([
                'error' => true,
                'message' => "Missing answer for required activity option: $opt->question, option_id=$opt->id"
            ])
            ->seeStatusCode(400);
    }

    public function testWithNotes() {
        $member = factory(Member::class)->create();
        $this->asAdmin('POST', '/api/v1/activities/'.$this->activity->id.'/registrations', [
            'member_id' => $member->id,
            'notes' => 'A simple note',
            'paid' => true
        ])
            ->seeStatusCode(200);

        $this->seeInDatabase('activity_registrations', [
            'activity_id' => $this->activity->id,
            'member_id' => $member->id,
            'notes' => 'A simple note',
            'paid' => true
        ]);
    }

    public function testCreatePaid() {
        $member = factory(Member::class)->state('general_member')->create();
        $request = ['POST', '/api/v1/activities/'.$this->activity->id.'/registrations', [
            'member_id' => $member->id,
            'notes' => 'A simple note',
            'paid' => true
        ]];
        $this->asMember($member, ...$request)->seeStatusCode(200);
        $this->seeInDatabase('activity_registrations', [
            'activity_id' => $this->activity->id,
            'member_id' => $member->id,
            'notes' => 'A simple note',
            'paid' => false
        ]);


        $member = factory(Member::class)->state('general_member')->create();
        $request[2]['member_id'] = $member->id;
        $this->asAdmin(...$request)
            ->seeStatusCode(200);

        $this->seeInDatabase('activity_registrations', [
            'activity_id' => $this->activity->id,
            'member_id' => $member->id,
            'notes' => 'A simple note',
            'paid' => true
        ]);
    }
}
