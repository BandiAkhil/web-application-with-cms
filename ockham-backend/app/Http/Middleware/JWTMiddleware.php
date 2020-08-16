<?php


namespace App\Http\Middleware;


use App\Entities\Member;
use Closure;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class JWTMiddleware
{

    public function handle(Request $request, Closure $next) {
        $header = $request->header('Authorization');
        if (null == $header) {
            throw $this->unauthorized('Missing \'Authorization\' header');
        }

        if (strlen($header) < strlen('Bearer ') || strpos($header, 'Bearer ') === false) {
            throw $this->unauthorized('Invalid format: token should start with \'Bearer \'');
        }

        $token = substr($header, strlen('Bearer '));

        try {
            $decoded = JWT::decode($token, env('JWT_KEY'), ['HS256']);
        } catch (ExpiredException $e) {
            throw $this->unauthorized('Token is expired');
        } catch (\Exception $e) {
            throw $this->unauthorized('Invalid token '. $e);
        }

        $user = Member::query()->find($decoded->sub);
        if (null == $user) {
            throw $this->unauthorized('User not found');
        }

        if ($user->isArchived()) {
            throw $this->unauthorized('The user is archived.');
        }

        $request->auth = $user;
        return $next($request);
    }

    private function unauthorized(String $message): UnauthorizedHttpException {
        return new UnauthorizedHttpException('Bearer', $message);
    }
}
