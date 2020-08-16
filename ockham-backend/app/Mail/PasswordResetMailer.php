<?php

namespace App\Mail;


use App\Entities\Member;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PasswordResetMailer extends Mailable
{
    use Queueable, SerializesModels;

    /** @var Member $member */
    public $member;

    /** @var string $token */
    public $token;

    public function __construct(Member $member, string $token)
    {
        $this->member = $member;
        $this->token = $token;
    }

    public function build()
    {
        return $this
            ->subject('You requested a password reset at hv-ockham.nl')
            ->to($this->member->email)
            ->view('emails.password_reset');
    }

}