<?php


namespace activity_registration;


use App\Entities\Activity;
use App\Entities\ActivityRegistration;
use App\Entities\FlexibleColumns\ColumnType;
use App\Entities\Member;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class EditRegistrationTest extends TestCase
{

    use DatabaseTransactions;


    protected $activity;
    protected $member;
    protected $registration;
    protected $firstOption;
    protected $secondOption;

    protected function setUp(): void
    {
        parent::setUp();
        $this->activity = factory(Activity::class)->create([
            'options' => []
        ]);

        $this->activity->options()->create([
           'type_id' => ColumnType::boolean()->id,
           'question' => 'beer?',
           'required' => false
        ]);

        $this->activity->options()->create([
            'type_id' => ColumnType::string()->id,
            'question' => 'To be or not to be?',
            'required' => true
        ]);

        $this->member = factory(Member::class)->state('general_member')->create();

        $this->registration = new ActivityRegistration;
        $this->registration->activity_id = $this->activity->id;
        $this->registration->member_id = $this->member->id;
        $this->registration->save();

        $this->firstOption = $this->activity->options()->first();
        $this->secondOption = $this->activity->options()->skip(1)->first();
    }

    private function request($aid=null, $rid=null, $data=null) {
        if ($aid == null) $aid = $this->activity->id;
        if ($rid == null) $rid = $this->registration->id;
        $r = ["PUT", "/api/v1/activities/$aid/registrations/$rid"];
        if ($data != null) array_push($r, $data);
        return $r;
    }

    public function testRoute() {
        $this->requiresAuth(...$this->request());
    }

    public function testPolicy() {
        $this->accessibleAsAdmin(...$this->request());
        $this->accessibleAsBoard(...$this->request());
        $this->accessibleAsCommitteeMember($this->activity->committee()->first(), ...$this->request());
        $this->accessibleBy($this->member, ...$this->request());
        $this->notAccessibleAsGeneralMember(...$this->request());
    }

    public function testEditUnknownActivity() {
        $this->asAdmin(...$this->request(-1))
            ->seeJson([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\Activity] -1'
            ])
            ->seeStatusCode(404);
    }

    public function testEditUnknownRegistration() {
        $this->asAdmin(...$this->request($this->activity->id, -1))
            ->seeJson([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\ActivityRegistration].'
            ])
            ->seeStatusCode(404);
    }

    public function testEmpty() {
        sleep(2);
        $this->asAdmin(...$this->request())->seeStatusCode(200);
    }

    public function testUpdateValid()
    {
        $this->asAdmin(...$this->request(null, null, [
            'answers' => [
                [
                    'option_id' => $this->firstOption->id,
                    'answer' => true
                ]
            ]
        ]))
            ->seeStatusCode(200);

        $this->seeInDatabase('activity_option_answers', [
            'registration_id' => $this->registration->id,
            'option_id' => $this->firstOption->id,
            'answer' => true
        ]);

        $this->asAdmin(...$this->request(null, null, [
            'answers' => [
                [
                    'option_id' => $this->secondOption->id,
                    'answer' => "To be"
                ]
            ]
        ]))
            ->seeStatusCode(200);

        $this->seeInDatabase('activity_option_answers', [
            'registration_id' => $this->registration->id,
            'option_id' => $this->secondOption->id,
            'answer' => 'To be'
        ]);

    }



    public function testUpdateInvalid() {
        $this->asAdmin(...$this->request(null, null, [
            'answers' => [
                [
                    'option_id' => $this->firstOption->id,
                    'answer' => 'hello'
                ]
            ]
        ]))
            ->seeJson([
                'payload' => [
                    'answer' => [
                        'The provided answer is of invalid type'

                    ]
                ]
            ])
            ->seeStatusCode(400);
    }


    public function testUpdatePaid() {
        $request = $this->request(null, null, [
            'paid' => true
        ]);
        $this->asMember($this->member, ...$request)
            ->seeStatusCode(200);
        $this->seeInDatabase('activity_registrations', [
            'activity_id' => $this->activity->id,
            'member_id' => $this->member->id,
            'paid' => false
        ]);

        $this->asAdmin(...$request)
            ->seeStatusCode(200);

        $this->seeInDatabase('activity_registrations', [
            'activity_id' => $this->activity->id,
            'member_id' => $this->member->id,
            'paid' => true
        ]);
    }


}
