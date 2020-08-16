<?php


namespace page_group;


use App\Entities\PageGroup;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class AllPageGroupsTest extends TestCase {

    use DatabaseTransactions;

    public function testRoute() {
        $this->doesntRequireAuth('GET', '/api/v1/pages-groups');
    }

    public function testStructure() {
        $this->getAllPageGroups()
            ->seeStatusCode(200)
            ->seeJsonStructure([
                '*' => [
                    'id',
                    'name',
                    'pages' => [
                        '*' => [
                            'page_group_id',
                            'slug',
                            'title'
                        ]
                    ]
                ]
            ]);
    }

    public function testAmount() {
        $count = PageGroup::query()->count();
        $res = $this->getAllPageGroups()->response->getContent();
        self::assertCount($count, json_decode($res, true));
    }

    private function getAllPageGroups() {
        return $this->json('GET', '/api/v1/page-groups');
    }
}
