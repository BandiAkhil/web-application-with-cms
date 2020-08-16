<?php

use App\Entities\FlexibleColumns\ColumnType;
use App\Entities\FlexibleColumns\FlexibleTable;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlexibleColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('member_details');

        Schema::create('column_types', function(Blueprint $table) {
           $table->bigIncrements('id');
           $table->string('name')->unique();

           $table->index('name');
        });

        foreach (['string', 'boolean', 'integer', 'double', 'date'] as $name) {
            $type = new ColumnType();
            $type->name = $name;
            $type->save();
        }

        Schema::create('flexible_tables', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->unique();

            $table->index('name');
        });

        foreach (['members', 'committees', 'activities'] as $name) {
            $flexible_table = new FlexibleTable();
            $flexible_table->name = $name;
            $flexible_table->save();
        }

        Schema::create('flexible_columns', function(Blueprint $table) {
            // ID is added since having a string primary key requires more configuration, which would make it more complex.
            $table->bigIncrements('id');
            $table->string('name');
            $table->bigInteger('type_id');
            $table->bigInteger('flexible_table_id');

            $table->foreign('type_id')
                ->references('id')
                ->on('column_types')
                ->onDelete('cascade');

            $table->foreign('flexible_table_id')
                ->references('id')
                ->on('flexible_tables')
                ->onDelete('cascade');

            $table->unique(['name', 'flexible_table_id']);
        });

        Schema::table('members', function (Blueprint $table) {
            $table->jsonb('flexible_column_values')->default('[]');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('members', function (Blueprint $table) {
            $table->dropColumn('flexible_column_values');
        });

        Schema::dropIfExists('flexible_columns');
        Schema::dropIfExists('flexible_tables');
        Schema::dropIfExists('column_types');

        Schema::create('member_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('key');
            $table->string('value');
            $table->unsignedBigInteger('member_id');
            $table->foreign('member_id')
                ->references('id')->on('members')
                ->onDelete('cascade'); # Deleting a Member should also delete all its details.
            $table->timestamps();
        });
    }
}
