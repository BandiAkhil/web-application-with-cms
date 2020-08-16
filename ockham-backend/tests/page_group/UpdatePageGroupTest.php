<?php


namespace page_group;


use App\Entities\PageGroup;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class UpdatePageGroupTest extends TestCase {

    use DatabaseTransactions;

    /** @var PageGroup $pageGroup */
    private $pageGroup;

    protected function setUp(): void
    {
        parent::setUp();
        $this->pageGroup = factory(PageGroup::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('PUT', '/api/v1/page-groups/' . $this->pageGroup->id);
    }

    public function testPolicy() {
        $request = ['PUT', '/api/v1/page-groups/' . $this->pageGroup->id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testUnknownPageGroup() {
        $this->asBoard('PUT', '/api/v1/page-groups/-1')
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\PageGroup] -1'
            ]);
    }

    public function testEmptyBody() {
        $this->updatePageGroup([])
            ->seeStatusCode(200)
            ->seeJsonEquals($this->pageGroup->load('pages')->toArray());
    }

    public function testUpdateExistingName() {
        $name = factory(PageGroup::class)->create()->name;
        $this->updatePageGroup(['name' => $name])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'name' => [
                        'The name has already been taken.'
                    ]
                ]
            ]);

        // Assert not updated
        $this->seeInDatabase('page_groups', $this->pageGroup->toArray());
    }

    public function testUpdatePageGroup() {
        $new_name = 'New test' . time();
        $expected = $this->pageGroup->load('pages')->toArray();
        $expected['name'] = $new_name;
        unset($expected['updated_at']);

        $this->updatePageGroup(['name' => $new_name])
            ->seeStatusCode(200)
            ->seeJsonContains($expected);

        $this->seeInDatabase('page_groups', ['id' => $this->pageGroup->id, 'name' => $new_name]);
    }

    private function updatePageGroup(array $parameters = []) {
        return $this->asBoard('PUT', '/api/v1/page-groups/' . $this->pageGroup->id, $parameters);
    }
}
