<?php


namespace page_group;


use App\Entities\PageGroup;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class FindPageGroupTest extends TestCase {

    use DatabaseTransactions;

    /** @var PageGroup $pageGroup */
    private $pageGroup;

    protected function setUp(): void
    {
        parent::setUp();
        $this->pageGroup = factory(PageGroup::class)->create();
    }

    public function testRoute() {
        $this->doesntRequireAuth('GET', '/api/v1/page-groups/' . $this->pageGroup->id);
    }

    public function testStructure() {
        $this->findPageGroup($this->pageGroup->id)
            ->seeStatusCode(200)
            ->seeJsonStructure([
                'id',
                'name',
                'pages' => [
                    '*' => [
                        'page_group_id',
                        'slug',
                        'title'
                    ]
                ]
            ]);
    }

    public function testUnknownPageGroup() {
        $this->findPageGroup(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\PageGroup] -1'
            ]);
    }

    public function testAmount() {
        $this->findPageGroup($this->pageGroup->id)->seeJsonLength(1);
    }

    private function findPageGroup(int $id) {
        return $this->json('GET', "/api/v1/page-groups/$id");
    }
}
