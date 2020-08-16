<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

/**
 * @var \Laravel\Lumen\Routing\Router $router;
 */
$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => '/api/v1'], function() use ($router) {
    // Define all unprotected routes in here

    $router->group(['prefix' => 'auth'], function() use ($router) {
        $router->post('/login', 'AuthController@login');
        $router->post('/password-reset/request', 'AuthController@requestPasswordReset');
        $router->post('/password-reset', 'AuthController@resetPassword');
    });

    $router->post('/contact', 'ContactController@contact');

    $router->group(['prefix' => 'activities'], function() use ($router) {
        $router->get('', 'ActivityController@all');
        $router->get('{id}', 'ActivityController@find');
    });

    $router->group(['prefix' => 'news'], function() use ($router) {
        $router->get('', 'NewsController@all');
        $router->get('/{id}', 'NewsController@find');
    });

    $router->group(['prefix' => 'committees'], function() use ($router) {
        $router->get('', 'CommitteeController@all');
    });

    $router->group(['prefix' => 'pages'], function() use ($router) {
        $router->get('', 'PageController@all');
        $router->get('/{slug}', 'PageController@find');
    });

    $router->group(['prefix' => 'page-groups'], function() use ($router) {
        $router->get('', 'PageGroupController@all');
        $router->get('/{id}', 'PageGroupController@find');
    });

    $router->group(['middleware' => 'auth'], function() use ($router) {
        // Define all protected routes here
        // In principle, no routes require authentication without a policy.
        // So, the routes you want to add are likely needing the 'policy' middleware
        // and should thus be added below.

        $router->get('/auth/me', 'AuthController@me');

        // Any registered user should be able to access these. So, no policy.
        $router->group(['prefix' => 'stripe'], function () use ($router) {
            $router->post('', 'StripeController@newIntentActivity');
            $router->get('{clientSecret}', 'StripeController@handleIntent');
        });

        $router->group(['middleware' => 'policy'], function() use ($router) {
            // Define all routes with policies here

            $router->group(['prefix' => 'members'], function() use ($router) {
                $router->group(['prefix' => '{mid}/contributions'], function() use ($router) {
                    $router->get('', 'MemberContributionController@all');
                    $router->get('/{cid}', 'MemberContributionController@find');
                    $router->post('', 'MemberContributionController@create');
                    $router->put('/{cid}', 'MemberContributionController@update');
                    $router->delete('/{cid}', 'MemberContributionController@delete');
                });

                $router->post('/import', 'MemberController@import');
                $router->get('/export', 'MemberController@export');
                $router->get('', 'MemberController@all');
                $router->get('/{id}', 'MemberController@find');
                $router->get('/{id}/committees', 'MemberController@committees');
                $router->post('', 'MemberController@create');
                $router->put('/{id}', 'MemberController@update');
                $router->post('/{id}/password', 'MemberController@changePassword');
                $router->delete('/{id}', 'MemberController@delete');
                $router->get('/{id}/registrations', 'MemberController@registrations');
                $router->post('/{id}/archive', 'MemberController@archive');
            });

            $router->group(['prefix' => 'committees'], function() use ($router) {
                $router->get('/{id}', 'CommitteeController@find');
                $router->post('', 'CommitteeController@create');
                $router->put('/{id}', 'CommitteeController@update');
                $router->delete('/{id}', 'CommitteeController@delete');
            });

            $router->group(['prefix' => 'news'], function() use ($router) {
                $router->post('', 'NewsController@create');
                $router->put('/{id}', 'NewsController@update');
                $router->delete('/{id}', 'NewsController@delete');
            });

            $router->group(['prefix' => 'contributions'], function() use ($router) {
                $router->get('/{id}/export', 'ContributionController@export');

                $router->get('', 'ContributionController@all');
                $router->get('/{id}', 'ContributionController@find');
                $router->post('', 'ContributionController@create');
                $router->put('/{id}', 'ContributionController@update');
                $router->delete('/{id}', 'ContributionController@delete');
            });

            $router->group(['prefix' => 'activities'], function() use ($router) {
                $router->post('', 'ActivityController@create');
                $router->put('{id}', 'ActivityController@update');
                $router->delete('{id}', 'ActivityController@delete');
                $router->get('{aid}/registrations', 'ActivityController@registrations');
                $router->post('{aid}/registrations', 'ActivityController@register');
                $router->get('{aid}/registrations/{rid}', 'ActivityController@findRegistration');
                $router->put('{aid}/registrations/{rid}', 'ActivityController@updateRegistration');
                $router->delete('{id}/registrations/{rid}', 'ActivityController@unregister');

                $router->get('{aid}/options', 'ActivityOptionController@all');
                $router->get('{aid}/options/{option_id}', 'ActivityOptionController@find');
                $router->post('{aid}/options', 'ActivityOptionController@create');
                $router->delete('{aid}/options/{option_id}', 'ActivityOptionController@delete');
            });

            $router->get('column-types', 'ColumnTypeController@all');

            $router->group(['prefix' => 'columns/{table}'], function() use ($router) {
                $router->get('', 'FlexibleColumnController@all');
                $router->get('/{id}', 'FlexibleColumnController@find');
                $router->post('', 'FlexibleColumnController@create');
                $router->put('/{id}', 'FlexibleColumnController@update');
                $router->delete('/{id}', 'FlexibleColumnController@delete');
            });

            $router->get('roles', 'RoleController@all');

            $router->group(['prefix' => 'study-programs'], function() use ($router) {
                $router->get('', 'StudyProgramController@all');
                $router->get('/{id}', 'StudyProgramController@find');
                $router->post('', 'StudyProgramController@create');
                $router->put('/{id}', 'StudyProgramController@update');
                $router->delete('/{id}', 'StudyProgramController@delete');
            });

            $router->group(['prefix' => 'uploaded-files'], function() use ($router) {
                $router->put('/{id}', 'UploadedFileController@update');
                $router->delete('/{id}', 'UploadedFileController@delete');
            });

            $router->group(['prefix' => 'mailing-lists'], function() use ($router) {
                $router->get('', 'MailingListController@all');
                $router->post('/{list_id}/subscribe', 'MailingListController@subscribe');
                $router->post('/{list_id}/unsubscribe', 'MailingListController@unsubscribe');
            });

            $router->group(['prefix' => 'pages'], function() use ($router) {
                $router->post('', 'PageController@create');
                $router->put('/{slug}', 'PageController@update');
                $router->delete('/{slug}', 'PageController@delete');
            });

            $router->group(['prefix' => 'page-groups'], function() use ($router) {
                $router->post('', 'PageGroupController@create');
                $router->put('/{id}', 'PageGroupController@update');
                $router->delete('/{id}', 'PageGroupController@delete');
            });
        });
    });
});
