<?php


namespace contribution;


use App\Entities\Contribution;
use App\Entities\Member;
use App\Entities\MemberContribution;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class DeleteContributionTest extends TestCase {

    use DatabaseTransactions;

    /** @var Contribution $contribution */
    private $contribution;

    protected function setUp(): void
    {
        parent::setUp();
        $this->contribution = factory(Contribution::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('DELETE', '/api/v1/contributions/' . $this->contribution->id);
    }

    public function testPolicy() {
        $request = ['DELETE', '/api/v1/contributions/' . $this->contribution->id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testDeleteUnknownContribution() {
        $this->deleteContribution(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\Contribution] -1'
            ]);
    }

    public function testDeleteContribution() {
        for ($i = 0; $i < 5; $i++) {
            MemberContribution::create([
                'contribution_id' => $this->contribution->id,
                'member_id' => factory(Member::class)->create()->id,
                'payment_method' => 'iDeal'
            ]);
        }

        $this->seeInDatabase('member_contributions', ['contribution_id' => $this->contribution->id]);

        $this->deleteContribution($this->contribution->id)
            ->seeStatusCode(204);

        $this->notSeeInDatabase('contributions', ['id' => $this->contribution->id]);
        $this->notSeeInDatabase('member_contributions', ['contribution_id' => $this->contribution->id]);
    }

    private function deleteContribution(int $id) {
        return $this->asBoard('DELETE', '/api/v1/contributions/' . $id);
    }
}
