<?php


namespace contribution;


use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class CreateContributionTest extends TestCase {

    use DatabaseTransactions;

    public function testRoute() {
        $this->requiresAuth('POST', '/api/v1/contributions');
    }

    public function testPolicy() {
        $request = ['POST', '/api/v1/contributions'];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testWithoutRequiredFields() {
        $this->createContribution([])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'identifier' => [
                        'The identifier field is required.'
                    ],
                    'cost_cents' => [
                        'The cost cents field is required.'
                    ]
                ]
            ]);
    }

    public function testWithoutIdentifier() {
        $this->createContribution(['cost_cents' => 1000])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'identifier' => [
                        'The identifier field is required.'
                    ]
                ]
            ]);
    }

    public function testWithoutCostCents() {
        $this->createContribution(['identifier' => 'Test' . time()])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'cost_cents' => [
                        'The cost cents field is required.'
                    ]
                ]
            ]);
    }

    public function testValidContribution() {
        $identifier = 'Test' . time();
        $cost_cents = 1000;
        $this->createContribution(['identifier' => $identifier, 'cost_cents' => $cost_cents])
            ->seeStatusCode(201)
            ->seeJsonContains([
                'identifier' => $identifier,
                'cost_cents' => $cost_cents
            ])->seeJsonStructure([
                'id',
                'identifier',
                'cost_cents',
                'created_at',
                'updated_at'
            ]);

        $this->seeInDatabase('contributions', ['identifier' => $identifier, 'cost_cents' => $cost_cents]);
    }

    private function createContribution(array $body = []) {
        return $this->asBoard('POST', '/api/v1/contributions', $body);
    }
}
