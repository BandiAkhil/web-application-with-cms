<?php


namespace App\Mail;


use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ActivityPaymentMailer extends Mailable
{

    use Queueable, SerializesModels;

    private $registration;
    private $stripePi;

    /**
     * ActivityPaymentMailer constructor.
     * @param $registration - ActivityRegistration paid for
     * @param $stripePi - ID of a successful payment intent
     */
    public function __construct($registration, $stripePi)
    {
        $this->registration = $registration;
        $this->stripePi = $stripePi;
    }

    public function build()
    {
        $activity = $this->registration->activity()->first();
        $member = $this->registration->member()->first();
        return $this
            ->subject("Your payment for $activity->title")
            ->to($member->email)
            ->view('emails.activity_payment', [
                'member' => $member,
                'activity' => $activity,
                'pi' => $this->stripePi
            ]);
    }

}
