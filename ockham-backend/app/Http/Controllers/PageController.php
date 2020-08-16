<?php


namespace App\Http\Controllers;


use App\Entities\Page;
use App\Services\UploadedFileService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

/**
 * @group Page
 *
 * API for pages
 *
 */
class PageController extends Controller {

    private $uploadedFileService;

    public function __construct(UploadedFileService $uploadedFileService) {
        $this->uploadedFileService = $uploadedFileService;
    }

    /**
     * Get all pages
     *
     * @response [
     *  {
     *      "id": 1,
     *      "slug": "vision",
     *      "title": "Vision",
     *      "page_group_id": 1,
     *      "created_at": "2020-04-03 11:35:58",
     *      "updated_at": "2020-04-03 11:35:58"
     *  },
     *  {
     *      "id": 2,
     *      "slug": "board",
     *      "title": "Board",
     *      "page_group_id": 1,
     *      "created_at": "2020-04-03 11:35:58",
     *      "updated_at": "2020-04-03 11:35:58"
     *  }
     * ]
     */
    public function all() {
        return Page::query()->orderBy('slug')->get()->makeHidden('content');
    }

    /**
     * Get a page by slug
     *
     * @urlParam slug required The slug of the page. Example: vision
     * @response {
     *  "id": 1,
     *  "slug": "vision",
     *  "title": "Vision",
     *  "content": "<p>Some content</p>",
     *  "page_group_id": 1,
     *  "created_at": "2020-04-03 11:35:58",
     *  "updated_at": "2020-04-03 11:35:58",
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
    public function find(string $slug) {
        return Page::whereSlug($slug)->firstOrFail()->load('files');
    }

    /**
     * Create a page
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @bodyParam slug string required The slug of the page. This field can consist only of letters, numbers, dashes and underscores and should be unique. Example: vision
     * @bodyParam title string required The title of the page. Example: Vision
     * @bodyParam content string required The content of the page. Example: <p>Some content</p>
     * @bodyParam page_group_id int required The page group ID, an existing ID in the `page_groups` table. Example: 1
     * @bodyParam files array An array of files to be uploaded with this page.
     * @response {
     *  "id": 1,
     *  "slug": "vision",
     *  "title": "Vision",
     *  "content": "<p>Some content</p>",
     *  "page_group_id": 1,
     *  "created_at": "2020-04-03 11:35:58",
     *  "updated_at": "2020-04-03 11:35:58",
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
        $page = DB::transaction(function() use ($request) {
            $page = Page::create($request->all());

            if ($request->hasFile('files')) {
                $this->uploadedFileService->saveFiles($page, $request->file('files'));
            }
            return $page;
        });
        return response()->json($page->load('files'), 201);
    }

    /**
     * Update a page
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam slug required The slug of the page. Example: vision
     * @bodyParam slug string The new slug of the page. This field can consist only of letters, numbers, dashes and underscores and should be unique. Example: vision
     * @bodyParam title string The title of the page. Example: Vision
     * @bodyParam content string The content of the page. Example: <p>Some content</p>
     * @bodyParam page_group_id int The page group ID, an existing ID in the `page_groups` table. Example: 1
     * @bodyParam files array An array of files to be uploaded with this page.
     * @response {
     *  "id": 1,
     *  "slug": "vision",
     *  "title": "Vision",
     *  "content": "<p>Some content</p>",
     *  "page_group_id": 1,
     *  "created_at": "2020-04-03 11:35:58",
     *  "updated_at": "2020-04-03 11:35:58",
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
    public function update(string $slug, Request $request) {
        return DB::transaction(function() use ($slug, $request) {
            $page = $this->find($slug);
            $page->update($request->all());

            if ($request->hasFile('files')) {
                $this->uploadedFileService->saveFiles($page, $request->file('files'));
            }
            return $page;
        });
    }

    /**
     * Delete a page
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam slug required The slug of the page. Example: vision
     * @response 204
     */
    public function delete(string $slug) {
        $page = $this->find($slug);
        $page->delete();
        return response('', 204);
    }
}
