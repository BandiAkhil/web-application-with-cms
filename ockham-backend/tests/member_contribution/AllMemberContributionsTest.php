<?php


namespace member_contribution;


use App\Entities\Contribution;
use App\Entities\Member;
use App\Entities\MemberContribution;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class AllMemberContributionsTest extends TestCase {

    use DatabaseTransactions;

    /** @var Member $member */
    private $member;

    protected function setUp(): void
    {
        parent::setUp();
        $this->member = factory(Member::class)->state('general_member')->create();
        for ($i = 0; $i < 5; $i++) {
            MemberContribution::create([
                'contribution_id' => factory(Contribution::class)->create()->id,
                'member_id' => $this->member->id,
                'payment_method' => 'iDeal'
            ]);
        }
    }

    public function testRoute() {
        $this->requiresAuth('GET', '/api/v1/members/' . $this->member->id . '/contributions');
    }

    public function testPolicy() {
        $request = ['GET', '/api/v1/members/' . $this->member->id . '/contributions'];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
        $this->notAccessibleBy($this->member, ...$request);
    }

    public function testStructure() {
        $this->getAllMemberContributions()
            ->seeStatusCode(200)
            ->seeJsonStructure([
                '*' => [
                    'contribution',
                    'member_id',
                    'payment_method',
                    'created_at',
                    'updated_at'
                ]
            ]);
    }

    public function testAmount() {
        $count = MemberContribution::whereMemberId($this->member->id)->count();
        $res = $this->getAllMemberContributions()->response->getContent();
        self::assertCount($count, json_decode($res, true));
    }

    private function getAllMemberContributions() {
        return $this->asBoard('GET', '/api/v1/members/' . $this->member->id . '/contributions');
    }
}
