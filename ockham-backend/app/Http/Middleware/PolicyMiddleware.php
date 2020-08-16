<?php

namespace App\Http\Middleware;


use App\Exceptions\ApiException;
use App\Exceptions\RoleNotAuthorizedException;
use Illuminate\Http\Request;
use Closure;

class PolicyMiddleware
{

    public function handle(Request $request, Closure $next) {
        $route = $request->route()[1]['uses'];
        list($controller, $action) = explode('@', $route);

        $policyClass = str_replace('App\Http\Controllers\\', 'App\Policies\\', $controller);
        if (substr($policyClass, -strlen('Controller')) === 'Controller') {
            $policyClass = substr($policyClass, 0, -strlen('Controller'));
        }
        $policyClass .= 'Policy';

        if (!class_exists($policyClass)) {
            throw new ApiException("Controller '$controller' has no associated policy class.");
        }

        if (!method_exists($policyClass, $action)) {
            throw new ApiException("Policy class '$policyClass' has no method named '$action'.");
        }

        $policy = new $policyClass();
        $parameters = $request->route()[2];
        if ($policy->{$action}($request->auth, $parameters, $request) !== true) {
            throw new RoleNotAuthorizedException();
        }

        return $next($request);
    }

}