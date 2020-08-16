<?php


namespace activity_option;


use App\Entities\Activity;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class OptionListTest extends TestCase
{

    use DatabaseTransactions;

    protected $activity;

    protected function setUp(): void
    {
        parent::setUp();
        $this->activity = factory(Activity::class)->create();
        $this->assertNotEmpty($this->activity->options()->get()->all());
    }

    protected function url() {
        $id = $this->activity->id;
        return "/api/v1/activities/$id/options";
    }

    public function testRoute() {
        $this->requiresAuth('GET', $this->url());
    }

    public function testPolicy() {
        $request = ['GET', $this->url()];
        $committee_that_created_activity = $this->activity->committee()->first();
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->accessibleAsCommitteeMember($committee_that_created_activity, ...$request);
        $this->accessibleAsGeneralMember(...$request);
    }

    public function testList() {
        $this->asAdmin('GET', $this->url())
            ->seeStatusCode(200)
            ->seeJsonLength($this->activity->options()->count());
    }

    public function testStructure() {
        $this->asAdmin('GET', $this->url())
            ->seeStatusCode(200)
            ->seeJsonStructure([
                '*' => [
                    'id',
                    'type',
                    'question',
                    'required'
                ]
        ]);
    }

}
