<?php

namespace App\Mail;


use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FailedPasswordResetMailer extends Mailable
{
    use Queueable, SerializesModels;

    /** @var string $email */
    public $email;

    public function __construct(string $email)
    {
        $this->email = $email;
    }

    public function build()
    {
        return $this
            ->subject('You requested a password reset at hv-ockham.nl')
            ->to($this->email)
            ->view('emails.failed_password_reset');
    }

}