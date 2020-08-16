<?php


namespace contribution;


use App\Entities\Contribution;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class AllContributionsTest extends TestCase {

    use DatabaseTransactions;

    public function testRoute() {
        $this->requiresAuth('GET', '/api/v1/contributions');
    }

    public function testPolicy() {
        $request = ['GET', '/api/v1/contributions'];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testStructure() {
        $this->getAllContributions()
            ->seeStatusCode(200)
            ->seeJsonStructure([
                '*' => [
                    'id',
                    'identifier',
                    'cost_cents',
                    'created_at',
                    'updated_at'
                ]
            ]);
    }

    public function testAmount() {
        $count = Contribution::query()->count();
        $res = $this->getAllContributions()->response->getContent();
        self::assertCount($count, json_decode($res, true));
    }

    private function getAllContributions() {
        return $this->asBoard('GET', '/api/v1/contributions');
    }
}
