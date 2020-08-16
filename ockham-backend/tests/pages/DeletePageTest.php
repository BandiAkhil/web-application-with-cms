<?php


namespace pages;


use App\Entities\Page;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class DeletePageTest extends TestCase {

    use DatabaseTransactions;

    /** @var Page $page */
    private $page;

    protected function setUp(): void
    {
        parent::setUp();
        $this->page = factory(Page::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('DELETE', '/api/v1/pages/' . $this->page->slug);
    }

    public function testPolicy() {
        $request = ['DELETE', '/api/v1/pages/' . $this->page->slug];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testDeleteUnknownPage() {
        $this->deletePage('unknown' . time())
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\Page].'
            ]);
    }

    public function testDeletePage() {
        $this->deletePage($this->page->slug)
            ->seeStatusCode(204);

        $this->notSeeInDatabase('pages', ['slug' => $this->page->slug]);
    }

    private function deletePage(string $slug) {
        return $this->asBoard('DELETE', '/api/v1/pages/' . $slug);
    }
}
