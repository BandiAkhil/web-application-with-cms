<?php

namespace App\Console;

use App\Console\Commands\CreateAdminCommand;
use App\Console\Commands\PrepareDemoCommand;
use App\Console\Commands\UserTestOne;
use App\Console\Commands\UserTestTwo;
use Illuminate\Console\Scheduling\Schedule;
use Laravel\Lumen\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        CreateAdminCommand::class,
        UserTestOne::class,
        UserTestTwo::class,
        PrepareDemoCommand::class
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        //
    }
}
