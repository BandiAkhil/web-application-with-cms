<?php


namespace activity;


use App\Entities\Activity;
use Laravel\Lumen\Testing\DatabaseTransactions;

class GetActivityTest extends \TestCase
{

    use DatabaseTransactions;

    protected $activity;

    protected function setUp(): void
    {
        parent::setUp();
        $this->activity = factory(Activity::class)->create();
    }

    public function testRoute() {
        $id = $this->activity->id;
        $this->doesntRequireAuth('GET', "/api/v1/activities/$id")
            ->seeStatusCode(200)
            ->seeJson([
                "id" => $id,
                "title" => $this->activity->title
            ]);
    }

    public function testPolicy() {
        $id = $this->activity->id;
        $request = ['GET', "/api/v1/activities/$id"];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->accessibleAsGeneralMember(...$request);
    }

    public function testNonExisting() {
        $this->get('/api/v1/activities/-1')
            ->seeStatusCode(404);
    }


    public function testExisting() {
        $id = $this->activity->id;
        $this->get("/api/v1/activities/$id")
            ->seeStatusCode(200)
            ->seeJson([
                'id' => $id,
                'title' => $this->activity->title
            ]);
    }
}
