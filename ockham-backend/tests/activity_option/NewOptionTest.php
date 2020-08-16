<?php


namespace activity_option;


use App\Entities\Activity;
use App\Entities\ActivityOption;
use App\Entities\FlexibleColumns\ColumnType;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class NewOptionTest extends TestCase
{

    use DatabaseTransactions;

    protected $activity;

    protected function setUp(): void
    {
        parent::setUp();
        $this->activity = factory(Activity::class)->create();
    }

    public function request($data = []) {
        $id = $this->activity->id;
        return ['POST', "/api/v1/activities/$id/options", $data];
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

    public function testCreateValid() {
        $request = $this->request([
            'type_id' => ColumnType::boolean()->id,
            'question' => 'Are you ok?',
            'required' => false
        ]);
        $data = $this->asAdmin(...$request)
            ->seeStatusCode(201)->response->getContent();
        $created = ActivityOption::whereId(json_decode($data)->id)->firstOrFail();
        self::assertEquals($this->activity->id, $created->activity_id);
        self::assertEquals(ColumnType::boolean(), $created->type);
        self::assertEquals('Are you ok?', $created->question);
        self::assertEquals(false, $created->required);
    }

}
