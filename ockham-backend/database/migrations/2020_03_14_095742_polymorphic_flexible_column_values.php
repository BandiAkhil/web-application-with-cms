<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PolymorphicFlexibleColumnValues extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('members', function (Blueprint $table) {
            $table->dropColumn('flexible_column_values');
        });

        Schema::create('flexible_column_values', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('column_id');
            $table->string('value');
            $table->morphs('flexible');

            $table->foreign('column_id')
                ->references('id')
                ->on('flexible_columns')->onDelete('cascade');

            $table->unique(['column_id', 'flexible_id', 'flexible_type']);
        });
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
