<?php


namespace activity_option;


use App\Entities\Activity;
use Laravel\Lumen\Testing\DatabaseTransactions;

class OptionFindTest extends \TestCase
{

    use DatabaseTransactions;

    protected $activity;
    protected $options;

    protected function setUp(): void
    {
        parent::setUp();
        $this->activity = factory(Activity::class)->create();
        $this->options = $this->activity->options()->get();
    }

    private function request($option) {
        $activity_id = $this->activity->id;
        return ["GET", "/api/v1/activities/$activity_id/options/$option->id"];
    }

    public function testRoute() {
        $this->requiresAuth(...$this->request($this->options->random()));
    }

    public function testPolicy() {
        $request = $this->request($this->options->random());
        $this->accessibleAsBoard(...$request);
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsGeneralMember(...$request);
    }


}
