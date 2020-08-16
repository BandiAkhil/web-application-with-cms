<?php

use App\Entities\Member;
use Carbon\Carbon;
use Laravel\Lumen\Testing\DatabaseTransactions;

class PasswordResetTest extends TestCase {

    use DatabaseTransactions;

    /** @var Member $member */
    private $member;

    /** @var string $token */
    private $token;

    public function setUp(): void
    {
        parent::setUp();
        $this->member = factory(Member::class)->create();
        $this->token = $this->member->createPasswordResetToken();
    }

    public function testRoute() {
        $this->doesntRequireAuth('POST', '/api/v1/auth/password-reset');
    }

    public function testWithoutTokenAndEmail() {
        $this->resetPassword([])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'New password or token missing.'
            ]);

        $this->member->refresh();
        $this->assertNotNull($this->member->password_reset_token);
        $this->assertNotNull($this->member->password_reset_timestamp);
    }

    public function testWithoutNewPassword() {
        $this->resetPassword(['token' => $this->member->password_reset_token])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'New password or token missing.'
            ]);

        $this->member->refresh();
        $this->assertNotNull($this->member->password_reset_token);
        $this->assertNotNull($this->member->password_reset_timestamp);
    }

    public function testWithoutToken() {
        $this->resetPassword(['new_password' => 'new_password'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'New password or token missing.'
            ]);

        $this->member->refresh();
        $this->assertNotNull($this->member->password_reset_token);
        $this->assertNotNull($this->member->password_reset_timestamp);
    }

    public function testWithInvalidToken() {
        $token = 'a';
        $this->resetPassword(['token' => $token, 'new_password' => 'new_password'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'Invalid token.'
            ]);

        $this->member->refresh();
        $this->assertNotNull($this->member->password_reset_token);
        $this->assertNotNull($this->member->password_reset_timestamp);
    }

    public function testWithExpiredToken() {
        $this->member->password_reset_timestamp = Carbon::now()->subYear();
        $this->member->save();

        $this->resetPassword(['token' => $this->token, 'new_password' => 'new_password'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'Token expired.'
            ]);

        $this->member->refresh();
        $this->assertNotNull($this->member->password_reset_token);
        $this->assertNotNull($this->member->password_reset_timestamp);
    }

    public function testWithHashedToken() {
        $this->resetPassword(['token' => $this->member->password_reset_token, 'new_password' => 'new_password'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'Invalid token.'
            ]);

        $this->member->refresh();
        $this->assertNotNull($this->member->password_reset_token);
        $this->assertNotNull($this->member->password_reset_timestamp);
    }

    public function testWithTokenAndEmail() {
        $new_password = 'new_password@123';
        $this->resetPassword(['token' => $this->token, 'new_password' => $new_password])
            ->seeStatusCode(200)
            ->seeJsonStructure(['token']);

        $this->member->refresh();
        $this->assertNull($this->member->password_reset_token);
        $this->assertNull($this->member->password_reset_timestamp);

        $this->login(['email' => $this->member->email, 'password' => $new_password])
            ->seeStatusCode(200)
            ->seeJsonStructure([
                'token'
            ]);

        $this->login(['email' => $this->member->email, 'password' => 'password'])
            ->seeStatusCode(401)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'Email or password incorrect.'
            ]);
    }

    public function testTooShortNewPassword() {
        $this->resetPassword(['token' => $this->token, 'new_password' => 'n@1'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The new password must have a length of at least 8 characters and must contain at least one letter, number and special character.'
            ]);
    }

    public function testNewPasswordWithoutLetter() {
        $this->resetPassword(['token' => $this->token, 'new_password' => '1234567899@'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The new password must have a length of at least 8 characters and must contain at least one letter, number and special character.'
            ]);
    }

    public function testNewPasswordWithoutNumber() {
        $this->resetPassword(['token' => $this->token, 'new_password' => 'abcdefghij@'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The new password must have a length of at least 8 characters and must contain at least one letter, number and special character.'
            ]);
    }

    public function testNewPasswordWithoutSpecialCharacter() {
        $this->resetPassword(['token' => $this->token, 'new_password' => 'password123'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The new password must have a length of at least 8 characters and must contain at least one letter, number and special character.'
            ]);
    }

    public function testArchivedMember() {
        $this->member->archive();
        $this->resetPassword(['token' => $this->token, 'new_password' => 'new_password@123'])
            ->seeStatusCode(409)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'This member is archived and can thus not reset its password.'
            ]);
    }

    private function resetPassword(array $parameters = []) {
        return $this->json('POST', '/api/v1/auth/password-reset', $parameters);
    }
}
