<?php


namespace activity_option;


use App\Entities\Activity;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class OptionDeleteTest extends TestCase
{

    use DatabaseTransactions;


    protected $activity;

    protected function setUp(): void
    {
        parent::setUp();
        $this->activity = factory(Activity::class)->create();
        self::assertNotEquals(0, $this->activity->options()->count());
    }

    public function request($aid=null, $oid=null) {
        $aid = $aid ?: $this->activity->id;
        $oid = $oid ?: $this->activity->options()->first()->id;
        return ['DELETE', "/api/v1/activities/$aid/options/$oid"];
    }

    public function testRoute() {
        $this->requiresAuth(...$this->request());
    }

    public function testPolicy() {
        $request = $this->request();
        $committee_that_created_activity = $this->activity->committee()->first();
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->accessibleAsCommitteeMember($committee_that_created_activity, ...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testDelete() {
        $old_count = $this->activity->options()->count();
        $this->asAdmin(...$this->request());
        self::assertEquals($old_count - 1, $this->activity->options()->count());
    }

    public function testUnknownActivityId() {
        $this->asAdmin(...$this->request(-1, $this->activity->options()->first()->id))
            ->seeJson([
                'error' => true,
            ])
            ->seeStatusCode(404);
    }

    public function testUnknownOptionId() {
        $this->asAdmin(...$this->request($this->activity->id, -1))
            ->seeJson([
                'error' => true,
            ])
            ->seeStatusCode(404);
    }

}
