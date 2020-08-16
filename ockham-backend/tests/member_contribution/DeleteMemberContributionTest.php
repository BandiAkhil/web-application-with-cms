<?php


namespace member_contribution;


use App\Entities\Contribution;
use App\Entities\Member;
use App\Entities\MemberContribution;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class DeleteMemberContributionTest extends TestCase {

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
        $this->requiresAuth('DELETE', '/api/v1/members/' . $this->memberContribution->member_id . '/contributions/' . $this->memberContribution->contribution_id);
    }

    public function testPolicy() {
        $request = ['DELETE', '/api/v1/members/' . $this->memberContribution->member_id . '/contributions/' . $this->memberContribution->contribution_id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
        $this->notAccessibleBy($this->memberContribution->member, ...$request);
    }

    public function testDeleteUnknownMemberContribution() {
        $this->deleteMemberContribution(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\MemberContribution].'
            ]);
    }

    public function testDeleteMemberContribution() {
        $this->deleteMemberContribution($this->memberContribution->contribution_id)
            ->seeStatusCode(204);


        $this->notSeeInDatabase('member_contributions', ['member_id' => $this->memberContribution->member_id, 'contribution_id' => $this->memberContribution->contribution_id]);
    }

    private function deleteMemberContribution(int $contribution_id) {
        return $this->asBoard('DELETE', '/api/v1/members/' . $this->memberContribution->member_id . '/contributions/' . $contribution_id);
    }
}
