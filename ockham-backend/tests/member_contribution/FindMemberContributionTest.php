<?php


namespace member_contribution;


use App\Entities\Contribution;
use App\Entities\Member;
use App\Entities\MemberContribution;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class FindMemberContributionTest extends TestCase {

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
        $this->requiresAuth('GET', '/api/v1/members/' . $this->memberContribution->member_id . '/contributions/' . $this->memberContribution->contribution_id);
    }

    public function testPolicy() {
        $request = ['GET', '/api/v1/members/' . $this->memberContribution->member_id . '/contributions/' . $this->memberContribution->contribution_id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
        $this->notAccessibleBy($this->memberContribution->member, ...$request);
    }

    public function testStructure() {
        $this->findMemberContribution($this->memberContribution->contribution_id)
            ->seeStatusCode(200)
            ->seeJsonStructure([
                'contribution',
                'member_id',
                'payment_method',
                'created_at',
                'updated_at'
            ]);
    }

    public function testUnknownContribution() {
        $this->findMemberContribution(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\MemberContribution].'
            ]);
    }

    private function findMemberContribution(int $cid) {
        return $this->asBoard('GET', '/api/v1/members/' . $this->memberContribution->member_id . '/contributions/' . $cid);
    }
}
