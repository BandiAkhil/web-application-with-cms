<?php


namespace App\Http\Controllers;


use App\Entities\UploadedFile;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

/**
 * @group Uploaded File
 *
 * API for managing uploaded files
 *
 */
class UploadedFileController extends Controller {

    /**
     * Update an uploaded file
     *
     * Depending on to what the file was uploaded to, requires role `board member` or higher (`activity`) or `committee member` of the committee or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the uploaded file. Example: 1
     * @bodyParam name string The name of the file. Example: document.pdf
     * @response {
     *  "id": 1,
     *  "name": "document.pdf",
     *  "path": "uploaded-files/cee203401a555594c59bc02666398758/img20190523_20220715 (1).png",
     *  "created_at": "2020-04-03 18:38:37",
     *  "updated_at": "2020-04-03 18:38:37"
     * }
     */
    public function update(int $id, Request $request) {
        $file = UploadedFile::findOrFail($id);
        if ($request->has('name')) {
            $file->name = $request->input('name');
            $file->save();
        }
        return $file;
    }

    /**
     * Delete an uploaded file
     *
     * Depending on to what the file was uploaded to, requires role `board member` or higher (`activity`) or `committee member` of the committee or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the uploaded file. Example: 1
     * @response 204
     */
    public function delete(int $id) {
        $file = UploadedFile::findOrFail($id);
        $file->delete();
        return response('', 204);
    }
}
