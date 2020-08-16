<?php


namespace pages;


use App\Entities\Page;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class AllPagesTest extends TestCase {

    use DatabaseTransactions;

    public function testRoute() {
        $this->doesntRequireAuth('GET', '/api/v1/pages');
    }

    public function testStructure() {
        $this->getAllPages()
            ->seeStatusCode(200)
            ->seeJsonStructure([
                '*' => [
                    'id',
                    'slug',
                    'title',
                    'page_group_id',
                    'created_at',
                    'updated_at'
                ]
            ])
            ->dontSeeJsonStructure(['content', 'files']);
    }

    public function testAmount() {
        $count = Page::query()->count();
        $res = $this->getAllPages()->response->getContent();
        self::assertCount($count, json_decode($res, true));
    }

    private function getAllPages() {
        return $this->json('GET', '/api/v1/pages');
    }
}
