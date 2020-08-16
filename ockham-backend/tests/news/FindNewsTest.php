<?php


namespace news;


use App\Entities\News;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class FindNewsTest extends TestCase {

    use DatabaseTransactions;

    /** @var News $news */
    private $news;

    protected function setUp(): void
    {
        parent::setUp();
        $this->news = factory(News::class)->create();
    }

    public function testRoute() {
        $this->doesntRequireAuth('GET', '/api/v1/news/' . $this->news->id);
    }

    public function testStructure() {
        $this->findNews($this->news->id)
            ->seeStatusCode(200)
            ->seeJsonStructure([
                'id',
                'title',
                'content',
                'created_at',
                'updated_at',
                'files',
                'flexible_columns'
            ]);
    }

    public function testUnknownNews() {
        $this->findNews(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\News] -1'
            ]);
    }

    public function testAmount() {
        $this->findNews($this->news->id)->seeJsonLength(1);
    }

    public function testWhenLoggedIn() {
        $this->asGeneralMember('GET', '/api/v1/news/' . $this->news->id)
            ->seeStatusCode(200)
            ->seeJsonStructure([
                'id',
                'title',
                'content',
                'created_at',
                'updated_at'
            ]);
    }

    private function findNews(int $id) {
        return $this->json('GET', '/api/v1/news/' . $id);
    }
}
