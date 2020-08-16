<?php


namespace App\Http\Controllers;


use App\Mail\ContactMailer;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Laravel\Lumen\Routing\Controller;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

/**
 * @group Contact
 *
 * API for contacting the board
 *
 */
class ContactController extends Controller {

    /**
     * Send a request for contact
     *
     * @bodyParam name string required The name of the contacter.
     * @bodyParam email string required The email of the contacter.
     * @bodyParam subject string required The subject of the email.
     * @bodyParam message string required The message of the contacter.
     * @bodyParam recaptcha_token string required reCAPTCHA token to protect against bots.
     * @response 204
     */
    public function contact(Request $request) {
        if (!$request->has(['name', 'email', 'subject', 'message', 'recaptcha_token'])) {
            throw new BadRequestHttpException('One or more attributes are missing.');
        }

        // First check the recaptcha token
        $client = new Client();
        $response = $client->request('POST', 'https://www.google.com/recaptcha/api/siteverify', [
            'query' => [
                'secret' => env('RECAPTCHA_SECRET_KEY'),
                'response' => $request->get('recaptcha_token')
            ]
        ]);

        $response = json_decode($response->getBody()->getContents(), true);
        if ($response['success'] !== true || $response['action'] !== 'contact') {
            throw new BadRequestHttpException('The provided reCAPTCHA token is invalid.');
        }

        if ($response['score'] < 0.5) {
            throw new BadRequestHttpException('You are a robot and not allowed to perform this action.');
        }

        /**
         * @var string $name
         * @var string $email
         * @var string $subject
         * @var string $message
         */
        extract($request->all(['name', 'email', 'subject', 'message']));

        Mail::send(new ContactMailer($name, $email, $subject, $message));
        return response("", 204);
    }

}
