<?php


namespace App\Mail;


use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactMailer extends Mailable
{
    use Queueable, SerializesModels;

    public $name;

    public $email;

    public $msgSubject;

    public $msg;

    public function __construct(string $name, string $email, string $msgSubject, string $msg)
    {
        $this->name = $name;
        $this->email = $email;
        $this->msgSubject = $msgSubject;
        $this->msg = $msg;
    }

    public function build()
    {
        return $this
            ->subject($this->name . ' sent you a message')
            ->to(env('CONTACT_MAIL_TO'))
            ->view('emails.contact');
    }

}
