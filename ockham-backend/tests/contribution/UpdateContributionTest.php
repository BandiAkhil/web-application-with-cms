<?php


namespace contribution;


use App\Entities\Contribution;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class UpdateContributionTest extends TestCase {

    use DatabaseTransactions;

    /** @var Contribution $contribution */
    private $contribution;

    protected function setUp(): void
    {
        parent::setUp();
        $this->contribution = factory(Contribution::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('PUT', '/api/v1/contributions/' . $this->contribution->id);
    }

    public function testPolicy() {
        $request = ['PUT', '/api/v1/contributions/' . $this->contribution->id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testUnknownContribution() {
        $this->updateContribution(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\Contribution] -1'
            ]);
    }

    public function testEmptyBody() {
        $this->updateContribution($this->contribution->id, [])
            ->seeStatusCode(200)
            ->seeJsonEquals($this->contribution->toArray());
    }

    public function testUpdateIdentifier() {
        $new_identifier = 'New Test' . time();
        $expected = $this->contribution->toArray();
        $expected['identifier'] = $new_identifier;
        unset($expected['updated_at']);

        $this->updateContribution($this->contribution->id, ['identifier' => $new_identifier])
            ->seeStatusCode(200)
            ->seeJsonContains($expected);

        $this->notSeeInDatabase('contributions', ['id' => $this->contribution->id, 'identifier' => $this->contribution->identifier]);
        $this->seeInDatabase('contributions', ['id' => $this->contribution->id, 'identifier' => $new_identifier]);
    }

    public function testUpdateCostCents() {
        $new_cost_cents = 3141;
        $expected = $this->contribution->toArray();
        $expected['cost_cents'] = $new_cost_cents;
        unset($expected['updated_at']);

        $this->updateContribution($this->contribution->id, ['cost_cents' => $new_cost_cents])
            ->seeStatusCode(200)
            ->seeJsonContains($expected);

        $this->notSeeInDatabase('contributions', ['id' => $this->contribution->id, 'cost_cents' => $this->contribution->cost_cents]);
        $this->seeInDatabase('contributions', ['id' => $this->contribution->id, 'cost_cents' => $new_cost_cents]);
    }

    public function testUpdateIdentifierAndCostCents() {
        $new_identifier = 'New Test' . time();
        $new_cost_cents = 3141;
        $expected = $this->contribution->toArray();
        $expected['identifier'] = $new_identifier;
        $expected['cost_cents'] = $new_cost_cents;
        unset($expected['updated_at']);

        $this->updateContribution($this->contribution->id, ['identifier' => $new_identifier, 'cost_cents' => $new_cost_cents])
            ->seeStatusCode(200)
            ->seeJsonContains($expected);

        $this->notSeeInDatabase('contributions', ['id' => $this->contribution->id, 'identifier' => $this->contribution->identifier, 'cost_cents' => $this->contribution->cost_cents]);
        $this->seeInDatabase('contributions', ['id' => $this->contribution->id, 'identifier' => $new_identifier, 'cost_cents' => $new_cost_cents]);
    }

    private function updateContribution(int $id, array $body = []) {
        return $this->asBoard('PUT', '/api/v1/contributions/' . $id, $body);
    }
}
