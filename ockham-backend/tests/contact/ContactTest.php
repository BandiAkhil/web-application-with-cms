<?php


use App\Mail\ContactMailer;
use Illuminate\Support\Facades\Mail;

class ContactTest extends TestCase
{
    const exampleAttr = [
        'email' => 'a@example.com',
        'name' => 'Example User',
        'subject' => 'Test',
        'message' => 'This is a test',
        'recaptcha_token' => 'bla'
    ];

    public function setUp(): void
    {
        parent::setUp();
        Mail::fake();
        Mail::assertNothingSent();
    }

    public function testRoute() {
        $this->doesntRequireAuth('POST', '/api/v1/contact', self::exampleAttr);
    }

    public function testContactWithoutFields() {
        $this->contact([])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'One or more attributes are missing.'
            ]);
        Mail::assertNothingSent();
    }

    public function testContactWithoutEmail() {
        $attr = self::exampleAttr;
        unset($attr['email']);
        $this->contact($attr)
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'One or more attributes are missing.'
            ]);
        Mail::assertNothingSent();
    }

    public function testContactWithoutName() {
        $attr = self::exampleAttr;
        unset($attr['name']);
        $this->contact($attr)
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'One or more attributes are missing.'
            ]);
        Mail::assertNothingSent();
    }

    public function testContactWithoutSubject() {
        $attr = self::exampleAttr;
        unset($attr['subject']);
        $this->contact($attr)
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'One or more attributes are missing.'
            ]);
        Mail::assertNothingSent();
    }

    public function testContactWithoutMessage() {
        $attr = self::exampleAttr;
        unset($attr['message']);
        $this->contact($attr)
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'One or more attributes are missing.'
            ]);
        Mail::assertNothingSent();
    }

    public function testContactWithoutRecaptchaToken() {
        $attr = self::exampleAttr;
        unset($attr['recaptcha_token']);
        $this->contact($attr)
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'One or more attributes are missing.'
            ]);
        Mail::assertNothingSent();
    }

    public function testInvalidRecaptchaToken() {
        $this->contact(self::exampleAttr)
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The provided reCAPTCHA token is invalid.'
            ]);
    }

    // Not possible anymore, since now recaptcha is used.
//    public function testContactEmail() {
//        $this->contact(self::exampleAttr)
//            ->seeStatusCode(204);
//
//        Mail::assertSent(ContactMailer::class, function ($mail) {
//            /**
//             * @var ContactMailer $mail
//             * @var string $name
//             * @var string $email
//             * @var string $subject
//             * @var string $message
//             */
//            extract(self::exampleAttr);
//            return $mail->name === $name          &&
//                   $mail->email === $email        &&
//                   $mail->msgSubject === $subject &&
//                   $mail->msg === $message;
//        });
//    }

    private function contact(array $parameters = []) {
        return $this->json('POST', '/api/v1/contact', $parameters);
    }
}
