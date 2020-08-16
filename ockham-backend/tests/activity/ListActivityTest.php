<?php


namespace activity;


use App\Entities\Activity;
use App\Entities\Committee;
use Carbon\Carbon;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class ListActivityTest extends TestCase
{

    use DatabaseTransactions;

    protected function setUp(): void
    {
        parent::setUp();
        factory(Activity::class)->create();
    }

    public function testRoute() {
        $this->doesntRequireAuth('GET', '/api/v1/activities')
            ->seeStatusCode(200);
    }

    public function testPolicy() {
        $request = ['GET', '/api/v1/activities'];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->accessibleAsGeneralMember(...$request);
    }

    public function testAmount() {
        $data = $this->json('GET', '/api/v1/activities')
            ->seeStatusCode(200)->response->getContent();
        self::assertCount(Activity::all()->count(), json_decode($data, true));
    }

    public function testCommitteeQuery() {
        $committee_id = Committee::all()->random()->id;
        $data = $this->json('GET', '/api/v1/activities?committee_id=' . $committee_id)
            ->seeStatusCode(200)->response->getContent();
        self::assertCount(Activity::whereCommitteeId($committee_id)->get()->count(), json_decode($data, true));
    }

    public function testUpcomingOnlyQuery() {
        $data = $this->json('GET', '/api/v1/activities?upcoming_only=true')
            ->seeStatusCode(200)->response->getContent();
        self::assertCount(Activity::query()->where('end_date', '>', Carbon::now())->count(), json_decode($data, true));
    }

    public function testUpcomingOnlyFalseQuery() {
        $data = $this->json('GET', '/api/v1/activities?upcoming_only=false')
            ->seeStatusCode(200)->response->getContent();
        self::assertCount(Activity::all()->count(), json_decode($data, true));
    }

    public function testLimitQuery() {
        $limit = mt_rand(0, Activity::all()->count());
        $data = $this->json('GET', '/api/v1/activities?limit=' . $limit)
            ->seeStatusCode(200)->response->getContent();
        self::assertCount($limit, json_decode($data, true));
    }

    public function testUnkownCommitteeQuery() {
        $this->json('GET', '/api/v1/activities?committee_id=-1')
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\Committee].'
            ]);
    }
}
