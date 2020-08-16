<?php

use App\Entities\FlexibleColumns\FlexibleTable;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InsertFlexibleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $flexible_table = new FlexibleTable();
        $flexible_table->name = 'news';
        $flexible_table->save();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        FlexibleTable::whereName('news')->delete();
    }
}
