<?php


namespace App\Providers;


use App\Entities\ActivityOption;
use App\Entities\FlexibleColumns\FlexibleColumn;
use App\Entities\FlexibleColumns\FlexibleTable;
use App\Entities\PageGroup;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;
use InvalidArgumentException;

class ValidatorServiceProvider extends ServiceProvider
{

    public function boot() {
        Validator::extend('correctType', function($attribute, $value, $parameters, $validator) {
            $column_id = $validator->getData()['column_id'];
            $type = FlexibleColumn::query()->find($column_id)->type;

            return $type->parse($value) !== null;
        }, 'Invalid type');

        Validator::extend('correctTable', function($attribute, $value, $parameters, $validator) {
            $data = $validator->getData();
            $column_id = $data['column_id'];
            $flexible_type = $data['flexible_type'];

            $model = Relation::$morphMap[$flexible_type];
            return FlexibleColumn::find($column_id)->flexible_table->id === FlexibleTable::whereName($model::getTableName())->first()->id;
        }, 'Invalid column: column not part of this table.');

        /**
         * Validates that two object are unique with two columns
         */
        Validator::extend('unique_multiple', function  ($attribute, $value, $parameters, $validator)
        {
            //if this is for an update then don't validate
            //todo: this might be an issue if we allow people to "update" one of the columns..but currently these are getting set on create only
            if (isset($validator->getData()['id'])) return true;

            // Get table name from first parameter
            $table = array_shift($parameters);

            // Build the query
            $query = DB::table($table);

            // Add the field conditions
            foreach ($parameters as $i => $field){
                if (!isset($validator->getData()[$field])) {
                    return true; // Something else is wrong and this error does not apply
                }
                $query->where($field, $validator->getData()[$field]);
            }

            // Validation result will be false if any rows match the combination
            return ($query->count() == 0);

        }, 'Already exists');

        Validator::extend('valid_answer', function ($attribute, $value, $parameters, $validator) {

            if ($attribute != 'answer') {
                throw new InvalidArgumentException("This validator rule can only be used on ActivityOptionAnswer.answer field");
            }
            $data = $validator->getData();
            $option_id = $data['option_id'];
            $option = ActivityOption::findOrFail($option_id);
            return $option->type()->first()->parse($value) != null;
        }, "The provided answer is of invalid type");
    }
}
