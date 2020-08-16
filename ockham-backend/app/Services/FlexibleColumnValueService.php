<?php


namespace App\Services;


use App\Entities\FlexibleModel;

class FlexibleColumnValueService {

    public function save(FlexibleModel $model, $flexible_column_values) {
        if (!is_array($flexible_column_values)) {
            $flexible_column_values = json_decode($flexible_column_values, true);
        }
        $model->flexible_column_values()->createMany($flexible_column_values);
    }

}
