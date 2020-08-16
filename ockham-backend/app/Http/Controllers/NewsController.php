<?php


namespace App\Http\Controllers;


use App\Entities\News;
use App\Services\UploadedFileService;
use App\Services\FlexibleColumnValueService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Laravel\Lumen\Routing\Controller;

/**
 * @group News
 *
 * API for news
 *
 */
class NewsController extends Controller {

    private $uploadedFileService;

    private $flexibleColumnValueService;

    public function __construct(UploadedFileService $uploadedFileService, FlexibleColumnValueService $flexibleColumnValueService) {
        $this->uploadedFileService = $uploadedFileService;
        $this->flexibleColumnValueService = $flexibleColumnValueService;
    }

    /**
     * Get all news
     *
     * @queryParam limit Limits the amount of results. Example: 2
     * @response [
     *  {
     *      "id": 5,
     *      "title": "New website released!",
     *      "content": "Our new website is online.",
     *      "created_at": "2020-02-25 12:09:19",
     *      "updated_at": "2020-03-26 04:10:23"
     *  },
     *  {
     *      "id": 4,
     *      "title": "New activities",
     *      "content": "Check out the activities of this week!",
     *      "created_at": "2020-02-25 12:09:19",
     *      "updated_at": "2020-03-26 04:10:23"
     *  }
     * ]
     */
    public function all(Request $request) {
        $news = News::orderBy('created_at', 'desc');

        if ($request->has('limit') && is_numeric($request->get('limit'))) {
            $news = $news->limit(intval($request->get('limit')));
        }
        return $news->get();
    }

    /**
     * Get a news item by ID
     *
     * @urlParam id required The ID of the news item. Example: 5
     * @response {
     *  "id": 5,
     *  "title": "New website released!",
     *  "content": "Our new website is online.",
     *  "created_at": "2020-02-25 12:09:19",
     *  "updated_at": "2020-03-26 04:10:23",
     *  "flexible_columns": [
     *      {
     *          "id": 5,
     *          "name": "Author",
     *          "value": "Matthijs",
     *          "type": {
     *              "id": 1,
     *              "name": "string"
     *          }
     *      }
     *  ],
     *  "files": [
     *      {
     *          "id": 1,
     *          "name": "goat-50290_1920.jpg",
     *          "path": "uploaded-files/103b80338710ffebc28c4f22e9bbc666/goat-50290_1920.jpg",
     *          "created_at": "2020-04-02 20:02:42",
     *          "updated_at": "2020-04-02 20:02:42"
     *      }
     *  ]
     * }
     */
    public function find(int $id) {
        return News::query()->findOrFail($id)->load('files')->append('flexible_columns');
    }

    /**
     * Create a news item
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @bodyParam title string required The title of the news item. Example: New website released!
     * @bodyParam content string required The content of the news item. Example: Our new website is online.
     * @bodyParam files array An array of files to be uploaded with this news item.
     * @bodyParam flexible_column_values array An array (or stringified array) of flexible column values, in the following format:<br>{<br>&nbsp;&nbsp;"column_id": "<flexible_column_id\>",<br>&nbsp;&nbsp;"value": "<value\>"<br>}
     * @response 201 {
     *  "id": 5,
     *  "title": "New website released!",
     *  "content": "Our new website is online.",
     *  "created_at": "2020-02-25 12:09:19",
     *  "updated_at": "2020-03-26 04:10:23",
     *  "flexible_columns": [
     *      {
     *          "id": 5,
     *          "name": "Author",
     *          "value": "Matthijs",
     *          "type": {
     *              "id": 1,
     *              "name": "string"
     *          }
     *      }
     *  ],
     *  "files": [
     *      {
     *          "id": 1,
     *          "name": "goat-50290_1920.jpg",
     *          "path": "uploaded-files/103b80338710ffebc28c4f22e9bbc666/goat-50290_1920.jpg",
     *          "created_at": "2020-04-02 20:02:42",
     *          "updated_at": "2020-04-02 20:02:42"
     *      }
     *  ]
     * }
     */
    public function create(Request $request) {
        $news = DB::transaction(function() use ($request) {
            $news = News::create($request->all());

            if ($request->hasFile('files')) {
                $this->uploadedFileService->saveFiles($news, $request->file('files'));
            }

            if ($request->has('flexible_column_values')) {
                $this->flexibleColumnValueService->save($news, $request->input('flexible_column_values'));
            }

            return $news;
        });
        return response()->json($news->load('files')->append('flexible_columns'), 201);
    }

    /**
     * Update a news item
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @bodyParam title string The title of the news item. Example: New website released!
     * @bodyParam content string The content of the news item. Example: Our new website is online.
     * @bodyParam files array An array of files to be uploaded with this news item.
     * @bodyParam flexible_column_values array An array (or stringified array) of flexible column values, in the following format:<br>{<br>&nbsp;&nbsp;"column_id": "<flexible_column_id\>",<br>&nbsp;&nbsp;"value": "<value\>"<br>}
     * @response {
     *  "id": 5,
     *  "title": "New website released!",
     *  "content": "Our new website is online.",
     *  "created_at": "2020-02-25 12:09:19",
     *  "updated_at": "2020-03-26 04:10:23",
     *  "flexible_columns": [
     *      {
     *          "id": 5,
     *          "name": "Author",
     *          "value": "Matthijs",
     *          "type": {
     *              "id": 1,
     *              "name": "string"
     *          }
     *      }
     *  ],
     *  "files": [
     *      {
     *          "id": 1,
     *          "name": "goat-50290_1920.jpg",
     *          "path": "uploaded-files/103b80338710ffebc28c4f22e9bbc666/goat-50290_1920.jpg",
     *          "created_at": "2020-04-02 20:02:42",
     *          "updated_at": "2020-04-02 20:02:42"
     *      }
     *  ]
     * }
     */
    public function update(int $id, Request $request) {
        return DB::transaction(function() use ($request, $id) {
            $news = $this->find($id);
            $news->update($request->all());

            if ($request->hasFile('files')) {
                $this->uploadedFileService->saveFiles($news, $request->file('files'));
            }

            if ($request->has('flexible_column_values')) {
                $news->flexible_column_values()->delete();
                $this->flexibleColumnValueService->save($news, $request->input('flexible_column_values'));
            }
            return $news->load('files')->append('flexible_columns');
        });
    }

    /**
     * Delete a news item.
     *
     * Requires role `board member` or higher. Will also delete uploaded files associated to the news item.
     *
     * @authenticated
     * @urlParam id required The ID of the news item. Example: 1
     * @response 204
     */
    public function delete(int $id) {
        $news = $this->find($id);
        foreach ($news->files as $file) {
            $file->delete();
        }
        $news->delete();
        return response('', 204);
    }
}
