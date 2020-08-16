<?php

use App\Entities\ActivityOption;
use App\Entities\FlexibleColumns\ColumnType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class LinkColumnTypeToActivityOption extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('activity_options', function (Blueprint $table) {
            $table->bigInteger('type_id')->nullable();

            $table->foreign('type_id')
                ->references('id')
                ->on('column_types');
        });

        foreach (ActivityOption::all() as $option) {
            switch ($option->type) {
                case 'text':
                    $option->type_id = ColumnType::string()->id;
                    break;
                case 'yes_no':
                    $option->type_id = ColumnType::boolean()->id;
                    break;
                case 'number':
                    $option->type_id = ColumnType::double()->id;
                    break;
                case 'datetime':
                    $option->type_id = ColumnType::date()->id;
                    break;
            }
            $option->forceSave();
        }

        Schema::table('activity_options', function (Blueprint $table) {
            $table->bigInteger('type_id')->nullable(false)->change();
            $table->dropColumn('type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('activity_options', function (Blueprint $table) {
            $table->string('type')->nullable();
        });

        foreach (ActivityOption::all() as $option) {
            switch ($option->type_id) {
                case ColumnType::string()->id:
                    $option->type = 'text';
                    break;
                case ColumnType::boolean()->id:
                    $option->type = 'yes_no';
                    break;
                case ColumnType::double()->id:
                    $option->type = 'number';
                    break;
                case ColumnType::date():
                    $option->type = 'datetime';
                    break;
            }
            $option->forceSave();
        }

        Schema::table('activity_options', function (Blueprint $table) {
            $table->string('type')->nullable(false)->change();
            $table->dropColumn('type_id');
        });
    }
}
