<?php


namespace member_contribution;


use App\Entities\Contribution;
use App\Entities\Member;
use App\Entities\MemberContribution;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class UpdateMemberContributionTest extends TestCase {

    use DatabaseTransactions;

    /** @var MemberContribution $memberContribution */
    private $memberContribution;

    protected function setUp(): void
    {
        parent::setUp();
        $this->memberContribution = MemberContribution::create([
            'contribution_id' => factory(Contribution::class)->create()->id,
            'member_id' => factory(Member::class)->state('general_member')->create()->id,
            'payment_method' => 'iDeal'
        ]);
    }

    public function testRoute() {
        $this->requiresAuth('PUT', '/api/v1/members/' . $this->memberContribution->member_id . '/contributions/' . $this->memberContribution->contribution_id);
    }

    public function testPolicy() {
        $request = ['PUT', '/api/v1/members/' . $this->memberContribution->member_id . '/contributions/' . $this->memberContribution->contribution_id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
        $this->notAccessibleBy($this->memberContribution->member, ...$request);
    }

    public function testUnknownMemberContribution() {
        $this->updateMemberContribution(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\MemberContribution].'
            ]);
    }

    public function testEmptyBody() {
        $this->updateMemberContribution($this->memberContribution->contribution_id, [])
            ->seeStatusCode(200)
            ->seeJsonContains($this->expected());
    }

    public function testUpdateContributionID() {
        $this->updateMemberContribution($this->memberContribution->contribution_id,
            ['contribution_id' => $this->memberContribution->contribution_id])
            ->seeStatusCode(200)
            ->seeJsonContains($this->expected());

        // contribution_id is not updatable.
        $this->seeInDatabase('member_contributions', $this->memberContribution->toArray());
    }

    public function testUpdateMemberID() {
        $this->updateMemberContribution($this->memberContribution->contribution_id,
            ['member_id' => -1])
            ->seeStatusCode(200)
            ->seeJsonContains($this->expected());

        // member_id is not updatable.
        $this->seeInDatabase('member_contributions', $this->memberContribution->toArray());
    }

    public function testUpdatePaymentMethod() {
        $new_payment_method = 'cash';

        $this->updateMemberContribution($this->memberContribution->contribution_id,
            ['payment_method' => $new_payment_method])
            ->seeStatusCode(200)
            ->seeJsonContains($this->expected(['payment_method' => $new_payment_method]));

        $this->notSeeInDatabase('member_contributions', ['id' => $this->memberContribution->id, 'payment_method' => $this->memberContribution->payment_method]);
        $this->seeInDatabase('member_contributions', ['id' => $this->memberContribution->id, 'payment_method' => $new_payment_method]);
    }

    private function updateMemberContribution(int $contribution_id, array $body = []) {
        return $this->asBoard('PUT', '/api/v1/members/' . $this->memberContribution->member_id . '/contributions/' . $contribution_id, $body);
    }

    private function expected(array $fields = []): array {
        $expected = $this->memberContribution->toArray();
        foreach ($fields as $key => $value) {
            $expected[$key] = $value;
        }
        unset($expected['contribution']);
        unset($expected['updated_at']);
        return $expected;
    }
}
