<?php


namespace activity_registration;


use App\Entities\Activity;
use App\Entities\ActivityRegistration;
use App\Entities\Member;
use Laravel\Lumen\Testing\DatabaseTransactions;

class ListRegistrationsByActivity extends \TestCase
{
    use DatabaseTransactions;

    protected $activity;
    protected $committee_member;

    protected function setUp(): void
    {
        parent::setUp();
        $this->activity = factory(Activity::class)->create();
        $this->committee_member = factory(Member::class)->create();
        $this->activity = Activity::whereId($this->activity->id)->first();
        $committee = $this->activity->committee()->first();
        $committee->members()->save($this->committee_member);

    }

    public function testRoute() {
        $id = $this->activity->id;
        $this->requiresAuth('GET', "/api/v1/activities/$id/registrations");
    }

    public function testPolicy() {
        $id = $this->activity->id;
        $request = ['GET', "/api/v1/activities/$id/registrations"];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->accessibleBy($this->committee_member, ...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testAll() {

        $count = ActivityRegistration::all()->count();

        $id = $this->activity->id;
        $member = factory(Member::class)->create();
        $request = ['GET', "/api/v1/activities/$id/registrations"];
        $activity_registration = new ActivityRegistration;
        $activity_registration->member_id = $member->id;
        $activity_registration->activity_id = $id;
        $activity_registration->save();

        $this->asAdmin(...$request)
            ->seeStatusCode(200)
            ->seeJsonLength($count + 1);
    }

    public function testForMember() {
        $id = $this->activity->id;

        $member = factory(Member::class)->state('general_member')->create();
        $request = ['GET', "/api/v1/activities/$id/registrations?member_id=$member->id"];
        $this->asMember($member, ...$request)
            ->seeStatusCode(200)
            ->seeJsonLength(1);
    }


}
