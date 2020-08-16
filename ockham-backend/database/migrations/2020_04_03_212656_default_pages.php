<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DefaultPages extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $files = ['page_groups.sql', 'pages.sql', 'uploaded_files.sql'];

        foreach ($files as $file) {
            $path = realpath(join(DIRECTORY_SEPARATOR, [__DIR__, '..', 'sql', $file]));
            \Illuminate\Support\Facades\DB::unprepared(file_get_contents($path));
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

    }
}
