<?php


namespace App\Http\Controllers;


use App\Entities\ActivityRegistration;
use App\Mail\ActivityPaymentMailer;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Mail;
use Stripe\PaymentIntent;

class StripeController extends Controller {

    function newIntentActivity(Request $request) {
        $registration = ActivityRegistration::findOrFail($request->input('registration_id'));
        $intent = PaymentIntent::create([
            'amount' => $registration->activity()->first()->price_cents,
            'currency' => 'eur',
            'payment_method_types' => ['ideal'],
            'metadata' => [
                'activity_id' => $registration->activity()->first()->id,
                'registration_id' => $registration->id,
            ]
        ]);
        return $intent->jsonSerialize();
    }

    function handleIntent($clientSecret) {
        $pi = PaymentIntent::retrieve($clientSecret);
        $meta = $pi->metadata->toArray();
        $reg = ActivityRegistration::query()->whereActivityId($meta['activity_id'])->whereId($meta['registration_id'])->firstOrFail();
        if ($pi->status == 'succeeded') {
            $reg->paid = true;
            $reg->save();

            Mail::send(new ActivityPaymentMailer($reg, $pi->id));

        } else {
            $reg = ActivityRegistration::query()->whereActivityId($meta['activity_id'])->whereId($meta['registration_id'])->firstOrFail();
            $reg->delete();
        }
        return ['status' => $pi->status,
            'activity_id' => $meta['activity_id'],
            'registration_id' => $meta['registration_id']
        ];
    }

}
