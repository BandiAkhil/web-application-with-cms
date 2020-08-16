<?php


use App\Entities\Member;
use Laravel\Lumen\Testing\DatabaseTransactions;

class LoginTest extends TestCase
{
    use DatabaseTransactions;

    /** @var Member $member  */
    private $member;

    protected function setUp(): void
    {
        parent::setUp();
        $this->member = factory(Member::class)->create();
    }

    public function testCorrectLogin() {
        $this->login(['email' => $this->member->email, 'password' => self::PASSWORD])
            ->seeStatusCode(200)
            ->seeJsonStructure([
                'token'
            ]);
    }

    public function testMissingEmailAndPassword() {
        $this->login([])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'Email or password missing.'
            ]);
    }

    public function testMissingEmail() {
        $this->login(['password' => self::PASSWORD])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'Email or password missing.'
            ]);
    }

    public function testMissingPassword() {
        $this->login(['email' => $this->member->email])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'Email or password missing.'
            ]);
    }

    public function testIncorrectEmailAndPassword() {
        $this->login(['email' => 'a', 'password' => 'wrongpassword'])
            ->seeStatusCode(401)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'Email or password incorrect.'
            ]);
    }

    public function testIncorrectEmail() {
        $this->login(['email' => 'a', 'password' => self::PASSWORD])
            ->seeStatusCode(401)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'Email or password incorrect.'
            ]);
    }

    public function testIncorrectPassword() {
        $this->login(['email' => $this->member->email, 'password' => 'wrongpassword'])
            ->seeStatusCode(401)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'Email or password incorrect.'
            ]);
    }

    public function testArchivedMemberLogin() {
        $this->member->archive();
        $this->login(['email' => $this->member->email, 'password' => self::PASSWORD])
            ->seeStatusCode(401)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'Your account has been archived. Contact the board for more information.'
            ]);
    }
}
