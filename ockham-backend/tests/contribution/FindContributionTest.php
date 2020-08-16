<?php


namespace contribution;


use App\Entities\Contribution;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class FindContributionTest extends TestCase {

    use DatabaseTransactions;

    /** @var Contribution $contribution */
    private $contribution;

    protected function setUp(): void
    {
        parent::setUp();
        $this->contribution = factory(Contribution::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('GET', '/api/v1/contributions/' . $this->contribution->id);
    }

    public function testPolicy() {
        $request = ['GET', '/api/v1/contributions/' . $this->contribution->id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testStructure() {
        $this->findContribution($this->contribution->id)
            ->seeStatusCode(200)
            ->seeJsonStructure([
                'id',
                'identifier',
                'cost_cents',
                'created_at',
                'updated_at'
            ]);
    }

    public function testUnknownContribution() {
        $this->findContribution(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\Contribution] -1'
            ]);
    }

    private function findContribution(int $id) {
        return $this->asBoard('GET', '/api/v1/contributions/' . $id);
    }
}
