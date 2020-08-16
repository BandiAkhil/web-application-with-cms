<?php

namespace App\Http\Controllers;

use App\Entities\Member;
use App\Exceptions\ApiException;
use App\Services\AuthService;
use App\Mail\ArchivedPasswordResetMailer;
use App\Mail\FailedPasswordResetMailer;
use App\Mail\PasswordResetMailer;
use Carbon\Carbon;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Laravel\Lumen\Routing\Controller;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;

/**
 * @group Auth
 *
 * API for authentication
 *
 */
class AuthController extends Controller {

    const JWT_EXPIRE_MINUTES = 120;

    private $authService;

    public function __construct(AuthService $authService) {
        $this->authService = $authService;
    }

    /**
     * Login
     *
     * @bodyParam email string required The email.
     * @bodyParam password string required The password.
     * @response {
     *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
     * }
     * @response 400 {
     *  "error": true,
     *  "message": "Email or password missing."
     * }
     * @response 401 {
     *  "error": true,
     *  "message": "Email or password incorrect."
     * }
     */
    public function login(Request $request) {
        if (!$request->has(['email', 'password'])) {
            throw new BadRequestHttpException('Email or password missing.');
        }

        $email = $request->get('email');
        $password = $request->get('password');

        $user = Member::whereEmail($email)->first();

        if (null == $user || null == $user->password || !Hash::check($password, $user->password)) {
            throw new ApiException('Email or password incorrect.', 401);
        }

        if ($user->isArchived()) {
            throw new ApiException('Your account has been archived. Contact the board for more information.', 401);
        }

        return [
            'token' => $this->generateToken($user)
        ];
    }

    /**
     * Request the currently logged in user
     *
     * @authenticated
     * @response {
     *  "id": 1,
     *  "email": "john.doe@example.com",
     *  "created_at": "2020-04-07 12:12:41",
     *  "updated_at": "2020-04-07 12:12:41",
     *  "last_name": "Doe",
     *  "insertion": null,
     *  "first_name": "John",
     *  "initials": "JD",
     *  "address": "Drienerlolaan 5",
     *  "zip_code": "7522 NB",
     *  "residence": "Enschede",
     *  "country": "Netherlands",
     *  "phone_number": "06-12345678",
     *  "date_of_membership": "2020-04-07",
     *  "remark": "The best student",
     *  "photos_allowed": true,
     *  "location_signup": "Enschede",
     *  "memberable_type": "student",
     *  "archived_at": null,
     *  "role": {
     *      "id": 1,
     *      "name": "admin"
     *  },
     *  "bank_account": {
     *      "id": 1,
     *      "member_id": 1,
     *      "debtor_name": "Hr J Doe",
     *      "iban": "NL91ABNA0417164300",
     *      "bic": null,
     *      "authorization_contribution": true,
     *      "authorization_other": true,
     *      "created_at": "2020-04-07 12:12:41",
     *      "updated_at": "2020-04-07 12:12:41"
     *  },
     *  "memberable": {
     *      "id": 1,
     *      "batch_bhp": 3,
     *      "batch_mhp": null,
     *      "student_number": "s1234567",
     *      "created_at": "2020-04-07 12:12:41",
     *      "updated_at": "2020-04-07 12:12:41",
     *      "study_program": {
     *          "id": 1,
     *          "short_name": "TCS",
     *          "full_name": "Technical Computer Science"
     *      }
     *  }
     * }
     */
    public function me(Request $request) {
        return $request->auth;
    }

    /**
     * Request a password reset
     *
     * @bodyParam email string required The email of the account
     * @response 204
     * @response 400 {
     *   "error": true,
     *   "message": "Email missing"
     * }
     */
    public function requestPasswordReset(Request $request) {
        if (!$request->has(['email'])) {
            throw new BadRequestHttpException('Email missing.');
        }

        $member = Member::whereEmail(trim($request->input('email')))->first();
        if (null == $member) {
            Mail::send(new FailedPasswordResetMailer($request->input('email')));
        } else if ($member->isArchived()) {
            Mail::send(new ArchivedPasswordResetMailer($member));
        } else {
            $token = $member->createPasswordResetToken();

            Mail::send(new PasswordResetMailer($member, $token));
        }
        return response('', 204);
    }

    /**
     * Resets the password of a member
     *
     * @bodyParam new_password string required The new password.
     * @bodyParam token string required The password reset token.
     * @response {
     *  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
     * }
     * @response 400 {
     *  "error": true,
     *  "message": "New password or token missing."
     * }
     * @response 400 {
     *  "error": true,
     *  "message": "Invalid token."
     * }
     * @response 400 {
     *  "error": true,
     *  "message": "Token expired."
     * }
     * @response 400 {
     *  "error": true,
     *  "message": "The new password must have a length of at least 8 characters and must contain at least one letter, number and special character."
     * }
     * @response 409 {
     *  "error": true,
     *  "message": "This member is archived and can thus not reset its password."
     * }
     */
    public function resetPassword(Request $request) {
        if (!$request->has(['new_password', 'token'])) {
            throw new BadRequestHttpException('New password or token missing.');
        }

        $member = Member::wherePasswordResetToken(hash('sha256', $request->input('token')))->first();
        if (null == $member) {
            throw new BadRequestHttpException('Invalid token.');
        }

        if ($member->isArchived()) {
            throw new ConflictHttpException('This member is archived and can thus not reset its password.');
        }

        // Password reset tokens are valid for one day
        if (Carbon::parse($member->password_reset_timestamp)->addDay()->lt(Carbon::now())) {
            throw new BadRequestHttpException('Token expired.');
        }

        $new_password = $request->input('new_password');
        if (!$this->authService->isValidPassword($new_password)) {
            throw new BadRequestHttpException('The new password must have a length of at least 8 characters and must contain at least one letter, number and special character.');
        }

        $member->password_reset_token = null;
        $member->password_reset_timestamp = null;
        $member->password = Hash::make($request->input('new_password'));
        $member->save();
        return [
            'token' => $this->generateToken($member)
        ];
    }

    public static function generateToken(Member $user): string {
        $payload = [
            'iss' => 'ockham-backend',
            'iat' => time(),
            'exp' => time() + self::JWT_EXPIRE_MINUTES * 60,
            'sub' => $user->id
        ];
        return JWT::encode($payload, env('JWT_KEY'));
    }
}
