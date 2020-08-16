<?php


namespace column_types;


use App\Entities\FlexibleColumns\ColumnType;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class AllColumnTypesTest extends TestCase {

    use DatabaseTransactions;

    public function testRoute() {
        return $this->requiresAuth('GET', '/api/v1/column-types');
    }

    public function testPolicy() {
        $request = ['GET', '/api/v1/column-types'];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testStructure() {
        $this->getAllColumnTypes()
            ->seeStatusCode(200)
            ->seeJsonStructure([
                '*' => [
                    'id',
                    'name'
                ]
            ]);
    }

    public function testAmount() {
        $count = ColumnType::all()->count();
        $data = $this->getAllColumnTypes()
            ->seeStatusCode(200)->response->getContent();
        self::assertCount($count, json_decode($data, true));
    }

    private function getAllColumnTypes() {
        return $this->asBoard('GET', '/api/v1/column-types');
    }
}
