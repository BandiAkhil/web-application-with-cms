<?php


namespace page_group;


use App\Entities\PageGroup;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class DeletePageGroupTest extends TestCase {

    use DatabaseTransactions;

    /** @var PageGroup $pageGroup */
    private $pageGroup;

    protected function setUp(): void
    {
        parent::setUp();
        $this->pageGroup = factory(PageGroup::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('DELETE', '/api/v1/page-groups/' . $this->pageGroup->id);
    }

    public function testPolicy() {
        $request = ['DELETE', '/api/v1/page-groups/' . $this->pageGroup->id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testDeleteUnknownPageGroup() {
        $this->deletePageGroup(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\PageGroup] -1'
            ]);
    }

    public function testDeletePageGroup() {
        $this->deletePageGroup($this->pageGroup->id)
            ->seeStatusCode(204);

        $this->notSeeInDatabase('page_groups', ['id' => $this->pageGroup->id]);
    }

    private function deletePageGroup(int $id) {
        return $this->asBoard('DELETE', '/api/v1/page-groups/' . $id);
}
}
