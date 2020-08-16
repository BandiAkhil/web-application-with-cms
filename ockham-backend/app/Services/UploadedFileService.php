<?php


namespace App\Services;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;

class UploadedFileService {

    public function saveFiles(Model $model, array $files) {
        foreach ($files as $file) {
            /** @var UploadedFile $file */
            $name = $file->getClientOriginalName();
            $path = $this->store($file);
            $model->files()->create([
                'name' => $name,
                'path' => $path
            ]);
        }
    }

    private function store(UploadedFile $file): string {
        $name = $file->getClientOriginalName();
        $path = join(DIRECTORY_SEPARATOR, [base_path('public'), 'uploaded-files', md5($file->hashName($name . time()))]);
        $file_path = $file->move($path, $name);
        return ltrim(substr($file_path, strlen(base_path('public'))), '/');
    }
}
