<?php


namespace news;


use App\Entities\News;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class DeleteNewsTest extends TestCase {

    use DatabaseTransactions;

    /** @var News $news */
    private $news;

    protected function setUp(): void
    {
        parent::setUp();
        $this->news = factory(News::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('DELETE', '/api/v1/news/' . $this->news->id);
    }

    public function testPolicy() {
        $request = ['DELETE', '/api/v1/news/' . $this->news->id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testDeleteUnknownNews() {
        $this->deleteNews(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\News] -1'
            ]);
    }

    public function testDeleteNews() {
        $this->deleteNews($this->news->id)
            ->seeStatusCode(204);

        $this->notSeeInDatabase('news', ['id' => $this->news->id]);
    }

    private function deleteNews(int $id) {
        return $this->asBoard('DELETE', '/api/v1/news/' . $id);
    }
}
