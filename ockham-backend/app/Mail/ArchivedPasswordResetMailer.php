<?php

namespace App\Mail;


use App\Entities\Member;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ArchivedPasswordResetMailer extends Mailable
{
    use Queueable, SerializesModels;

    /** @var Member $member */
    public $member;

    public function __construct(Member $member)
    {
        $this->member = $member;
    }

    public function build()
    {
        return $this
            ->subject('You requested a password reset at hv-ockham.nl')
            ->to($this->member->email)
            ->view('emails.archived_password_reset');
    }

}
