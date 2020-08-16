<?php


namespace member_contribution;


use App\Entities\Contribution;
use App\Entities\Member;
use App\Entities\MemberContribution;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class CreateMemberContributionTest extends TestCase {

    use DatabaseTransactions;

    /** @var Member $member */
    private $member;

    protected function setUp(): void
    {
        parent::setUp();
        $this->member = factory(Member::class)->state('general_member')->create();
    }

    public function testRoute() {
        $this->requiresAuth('POST', '/api/v1/members/' . $this->member->id . '/contributions');
    }

    public function testPolicy() {
        $request = ['POST', '/api/v1/members/' . $this->member->id . '/contributions'];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
        $this->notAccessibleBy($this->member, ...$request);
    }

    public function testWithoutRequiredFields() {
        $this->createMemberContribution([])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'contribution_id' => [
                        'The contribution id field is required.'
                    ],
                    'payment_method' => [
                        'The payment method field is required.'
                    ]
                ]
            ]);
    }

    public function testWithoutContributionID() {
        $this->createMemberContribution(['payment_method' => 'iDeal'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'contribution_id' => [
                        'The contribution id field is required.'
                    ]
                ]
            ]);
    }

    public function testWithoutPaymentMethod() {
        $this->createMemberContribution(['contribution_id' => factory(Contribution::class)->create()->id])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'payment_method' => [
                        'The payment method field is required.'
                    ]
                ]
            ]);
    }

    public function testExistingContributionID() {
        $contribution_id = factory(Contribution::class)->create()->id;
        MemberContribution::create(['contribution_id' => $contribution_id, 'member_id' => $this->member->id, 'payment_method' => 'iDeal']);

        $this->createMemberContribution(['contribution_id' => $contribution_id, 'payment_method' => 'iDeal'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'contribution_id' => [
                        'Already exists'
                    ]
                ]
            ]);
    }

    public function testInvalidContributionID() {
        $this->createMemberContribution(['contribution_id' => -1, 'payment_method' => 'iDeal'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'contribution_id' => [
                        'The selected contribution id is invalid.'
                    ]
                ]
            ]);
    }

    public function testValid() {
        $contribution_id = factory(Contribution::class)->create()->id;
        $payment_method = 'iDeal';
        $this->createMemberContribution(['contribution_id' => $contribution_id, 'payment_method' => $payment_method])
            ->seeStatusCode(201)
            ->seeJsonContains([
                'payment_method' => $payment_method
            ])
            ->seeJsonStructure([
                'member_id',
                'contribution',
                'payment_method',
                'created_at',
                'updated_at'
            ]);

        $this->seeInDatabase('member_contributions', ['contribution_id' => $contribution_id, 'member_id' => $this->member->id, 'payment_method' => $payment_method]);
    }

    private function createMemberContribution(array $body = []) {
        return $this->asBoard('POST', '/api/v1/members/' . $this->member->id . '/contributions', $body);
    }
}
