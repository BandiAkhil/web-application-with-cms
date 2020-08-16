<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;
use Laravel\Lumen\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        AuthorizationException::class,
        HttpException::class,
        ModelNotFoundException::class,
        ValidationException::class,
    ];

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response|\Illuminate\Http\JsonResponse
     */
    public function render($request, Exception $exception)
    {

        $response = [
            'error' => true,
            'message' => $exception->getMessage()
        ];

        $statusCode = 500;
        if ($exception instanceof NotFoundHttpException) {
            $statusCode = 404;
            $response['message'] = 'Unknown route.';
        }
        else if ($this->isHttpException($exception)) {
            $statusCode = $exception->getStatusCode();
        }
        else if ($exception instanceof ApiException) {
            $statusCode = $exception->getCode();
            if ($exception->getPayload() != null) {
                $response['payload'] = $exception->getPayload();
            }
        }
        else if ($exception instanceof ModelNotFoundException) {
            $statusCode = 404;
        }

        // Only for automatic model validation
        else if ($exception instanceof \Watson\Validating\ValidationException) {
            $statusCode = 400;
            $response['payload'] = $exception->getErrors();
        }

        return response()->json($response, $statusCode);
    }
}
