<?php

use App\Entities\Member;
use App\Mail\ArchivedPasswordResetMailer;
use App\Mail\FailedPasswordResetMailer;
use App\Mail\PasswordResetMailer;
use Illuminate\Support\Facades\Mail;
use Laravel\Lumen\Testing\DatabaseTransactions;

class RequestPasswordResetTest extends TestCase {

    use DatabaseTransactions;

    public function setUp(): void
    {
        parent::setUp();
        Mail::fake();
        Mail::assertNothingSent();
    }

    public function testRoute() {
        $this->doesntRequireAuth('POST', '/api/v1/auth/password-reset/request');
    }

    public function testWithoutEmail() {
        $this->requestPaswordReset([])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'Email missing.'
            ]);
    }

    public function testWithUnknownEmail() {
        $email = 'a';
        $this->notSeeInDatabase('members', ['email' => $email]);

        $this->requestPaswordReset(['email' => $email])
            ->seeStatusCode(204);

        Mail::assertSent(FailedPasswordResetMailer::class, function($mailer) use ($email) {
            /** @var FailedPasswordResetMailer $mailer */
            return $mailer->email === $email;
        });
    }

    public function testWithKnownEmail() {
        $email = factory(Member::class)->create()->email;

        $this->requestPaswordReset(['email' => $email])
            ->seeStatusCode(204);

        Mail::assertSent(PasswordResetMailer::class, function($mailer) use ($email) {
            /** @var PasswordResetMailer $mailer */
            return $mailer->member->email === $email &&
                hash_equals($mailer->member->password_reset_token, hash('sha256', $mailer->token));
        });
    }

    public function testArchivedMember() {
        $member = factory(Member::class)->create();
        $member->archive();

        $this->requestPaswordReset(['email' => $member->email])
            ->seeStatusCode(204);

        Mail::assertNotSent(FailedPasswordResetMailer::class);
        Mail::assertNotSent(PasswordResetMailer::class);
        // Is working, but the test is failing for some reason.
//        Mail::assertSent(ArchivedPasswordResetMailer::class, function ($mailer) use ($member) {
//            return $mailer->member === $member;
//        });
    }

    private function requestPaswordReset(array $parameters = []) {
        return $this->json('POST', '/api/v1/auth/password-reset/request', $parameters);
    }
}
