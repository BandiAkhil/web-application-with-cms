<?php


namespace activity;


use App\Entities\Activity;
use App\Entities\Member;
use Laravel\Lumen\Testing\DatabaseTransactions;

class DeleteActivityTest extends \TestCase
{
    use DatabaseTransactions;

    protected $activity;

    protected function setUp(): void
    {
        parent::setUp();
        $this->newActivity();
    }

    private function newActivity() {
        $this->activity = factory(Activity::class)->create();
        return $this->request($this->activity->id);
    }

    private function request($activity_id) {
        return ['DELETE', "/api/v1/activities/$activity_id"];
    }

    public function testRoute() {
        $this->requiresAuth(...$this->request($this->activity->id));
    }

    public function testPolicy() {
        $request = $this->newActivity();
        $this->accessibleAsCommitteeMember($this->activity->committee()->first(), ...$request);

        $this->accessibleAsBoard(...$this->newActivity());

        $this->accessibleAsAdmin(...$this->newActivity());

        $request = $this->newActivity();
        $randomMember = factory(Member::class)->state('general_member')->create();
        self::assertFalse($randomMember->isCommitteeMemberOf($this->activity->committee()->first()));
        $this->notAccessibleBy($randomMember, ...$request);
    }

    public function testSuccess() {
        $request = $this->request($this->activity->id);
        $this->asBoard(...$request)
            ->seeStatusCode(200);
        $this->notSeeInDatabase('activities', [
            'id' => $this->activity->id
        ]);
    }

    public function testNonExisting() {
        $id = -1;
        $this->notSeeInDatabase('activities', [
            'id' => $id
        ]);

        $request = $this->request($id);
        $this->asAdmin(...$request)
            ->seeStatusCode(404);
    }

}
