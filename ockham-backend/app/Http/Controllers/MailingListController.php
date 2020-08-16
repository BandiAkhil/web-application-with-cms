<?php


namespace App\Http\Controllers;


use App\Exceptions\MailchimpAPIError;
use App\Services\MailchimpService;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;

/**
 * @group Mailing List
 *
 * API for mailing lists
 *
 */
class MailingListController extends Controller {

    /** @var MailchimpService $mailchimpService */
    private $mailchimpService;

    public function __construct(MailchimpService $mailchimpService) {
        $this->mailchimpService = $mailchimpService;
    }

    /**
     * Get all mailing lists
     *
     * @response [
     *  {
     *      "id": "c20e394ceb",
     *      "name": "Default",
     *      "subscribed": true
     *  },
     *  {
     *      "id": "a86d5c61de",
     *      "name": "Alumni",
     *      "subscribed": false
     *  }
     * ]
     */
    public function all(Request $request) {
        $lists = $this->mailchimpService->lists()['lists'];
        if (!$this->mailchimpService->success()) {
            throw new MailchimpAPIError('Could not get mailing lists.');
        }

        $email = $request->auth->email;
        return array_map(function($list) use ($email) {
            $res = $this->mailchimpService->isSubscribed($list['id'], $email);

            if ($this->mailchimpService->success()) {
                $isSubscribed = $res['status'] === 'subscribed';
            } else {
                $isSubscribed = false;
            }

            $list['subscribed'] = $isSubscribed;
            return $list;
        }, $lists);
    }

    /**
     * Subscribe to a mailing list
     *
     * Subscribes the logged in member to the mailing list.
     *
     * @authenticated
     * @urlParam list_id required The ID of the mailing list to subscribe to. Example: c20e394ceb
     * @response 201
     * @response 409 {
     *  "error": true,
     *  "message": "You are already subscribed to this mailing list."
     * }
     * @response 502 {
     *  "error": true,
     *  "message": "Could not subscribe to this mailing list."
     * }
     */
    public function subscribe(string $list_id, Request $request) {
        $member = $request->auth;
        $res = $this->mailchimpService->subscribe($list_id, $member->email);

        if (!$this->mailchimpService->success()) {
            if ($res['title'] === 'Member Exists') {
                throw new ConflictHttpException('You are already subscribed to this mailing list.');
            } else {
                throw new MailchimpAPIError('Could not subscribe to this mailing list.');
            }
        }
        return response('', 201);
    }

    /**
     * Unsubscribe from a mailing list
     *
     * Unsubscribes the logged in member from the mailing list.
     *
     * @authenticated
     * @urlParam list_id required The ID of the mailing list to unsubscribe from. Example: c20e394ceb
     * @response 201
     * @response 502 {
     *  "error": true,
     *  "message": "Could not unsubscribe from this mailing list."
     * }
     */
    public function unsubscribe(string $list_id, Request $request) {
        $member = $request->auth;
        $this->mailchimpService->unsubscribe($list_id, $member->email);

        if (!$this->mailchimpService->success()) {
            throw new MailchimpAPIError('Could not unsubscribe from this mailing list.');
        }
        return response('', 201);
    }
}
