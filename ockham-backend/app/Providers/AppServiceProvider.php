<?php

namespace App\Providers;

use App\Entities\Activity;
use App\Entities\Committee;
use App\Entities\Member;
use App\Entities\News;
use App\Entities\Page;
use App\Entities\Student;
use App\Entities\Teacher;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Relation::morphMap([
            'student' => Student::class,
            'teacher' => Teacher::class,
            'member' => Member::class,
            'activity' => Activity::class,
            'news' => News::class,
            'committee' => Committee::class,
            'page' => Page::class
        ]);
    }
}
