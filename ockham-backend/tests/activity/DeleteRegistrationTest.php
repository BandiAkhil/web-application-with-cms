<?php


namespace activity;


use App\Entities\Activity;
use App\Entities\ActivityRegistration;
use App\Entities\Member;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class DeleteRegistrationTest extends TestCase
{

    use DatabaseTransactions;


    protected $activity;
    protected $member;
    protected $registration;
    protected $committee;


    protected function setUp(): void
    {
        parent::setUp();
        $this->activity = factory(Activity::class)->state('no_options')->create();
        $this->committee = $this->activity->committee()->first();
        $this->member = factory(Member::class)->create();
        $this->registration = new ActivityRegistration;
        $this->registration->member_id = $this->member->id;
        $this->registration->activity_id = $this->activity->id;
        $this->registration->save();
    }

    private function request($activity_id=null, $registration_id=null) {
        if ($registration_id == null) $registration_id = $this->registration->id;
        if ($activity_id == null) $activity_id = $this->activity->id;
        return ["DELETE", "/api/v1/activities/$activity_id/registrations/$registration_id"];
    }

    public function testRoute() {
        $this->requiresAuth(...$this->request());
    }

    public function testPolicyBoard() {
        $this->accessibleAsBoard(...$this->request());
    }
    public function testPolicyAdmin() {
        $this->accessibleAsAdmin(...$this->request());
    }

    public function testPolicySameCommitteeMember() {
        $this->accessibleAsCommitteeMember($this->committee, ...$this->request());
    }

    public function testPolicyRandomMember() {
        $this->notAccessibleBy(factory(Member::class)->state('general_member')->create(), ...$this->request());
    }

    public function testUnknownActivity() {
        $this->asAdmin(...$this->request(-1, $this->registration->id))
            ->seeStatusCode(404);
    }

    public function testUnknownRegistrationId() {
        $this->asAdmin(...$this->request($this->activity->id, -1))
            ->seeStatusCode(404);
    }

    public function testValid() {
        $this->asAdmin(...$this->request())
            ->seeStatusCode(200);
        $this->notSeeInDatabase('activity_registrations', [
            'activity_id' => $this->activity->id,
            'member_id' => $this->member->id
        ]);
    }



}
