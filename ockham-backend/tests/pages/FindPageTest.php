<?php


namespace pages;


use App\Entities\Page;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class FindPageTest extends TestCase {

    use DatabaseTransactions;

    /** @var Page page */
    private $page;

    protected function setUp(): void
    {
        parent::setUp();
        $this->page = factory(Page::class)->create();
    }

    public function testRoute() {
        $this->doesntRequireAuth('GET', '/api/v1/pages/' . $this->page->slug);
    }

    public function testStructure() {
        $this->findPage($this->page->slug)
            ->seeStatusCode(200)
            ->seeJsonStructure([
                'id',
                'slug',
                'title',
                'content',
                'page_group_id',
                'created_at',
                'updated_at',
                'files'
            ]);
    }

    public function testUnknownPage() {
        $this->findPage('unknown')
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\Page].'
            ]);
    }

    public function testAmount() {
        $this->findPage($this->page->slug)->seeJsonLength(1);
    }

    private function findPage(string $slug) {
        return $this->json('GET', "/api/v1/pages/$slug");
    }
}
