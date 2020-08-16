<?php


namespace App\Mail;


use App\Entities\Member;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RegistrationMailer extends Mailable
{
    use Queueable, SerializesModels;

    /** @var Member $member */
    public $member;

    /** @var string $token */
    public $token;

    public function __construct($member, $token)
    {
        $this->member = $member;
        $this->token = $token;
    }

    public function build()
    {
        return $this
            ->subject('Your registration at H.V. Ockham')
            ->to($this->member->email)
            ->view('emails.register');
    }

}
