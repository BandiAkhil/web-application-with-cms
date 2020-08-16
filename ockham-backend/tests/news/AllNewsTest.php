<?php


namespace news;


use App\Entities\News;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class AllNewsTest extends TestCase {

    use DatabaseTransactions;

    public function testRoute() {
        $this->doesntRequireAuth('GET', '/api/v1/news');
    }

    public function testStructure() {
        $this->getAllNews()
            ->seeStatusCode(200)
            ->seeJsonStructure([
                '*' => [
                    'id',
                    'title',
                    'content',
                    'created_at',
                    'updated_at'
                ]
            ]);
    }

    public function testAmount() {
        $count = News::query()->count();
        $res = $this->getAllNews()->response->getContent();
        self::assertCount($count, json_decode($res, true));
    }

    public function testLimitQueryParam() {
        $limit = mt_rand(0, News::query()->count());
        $data = $this->json('GET', '/api/v1/news?limit=' . $limit)
            ->seeStatusCode(200)->response->getContent();
        self::assertCount($limit, json_decode($data, true));
    }

    public function testWhenLoggedIn() {
        $this->asGeneralMember('GET', '/api/v1/news')
            ->seeStatusCode(200)
            ->seeJsonStructure([
                '*' => [
                    'id',
                    'title',
                    'content',
                    'created_at',
                    'updated_at'
                ]
            ]);
    }

    private function getAllNews() {
        return $this->json('GET', '/api/v1/news');
    }
}
