<?php


namespace App\Http\Controllers;


use App\Entities\StudyProgram;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

/**
 * @group Study Program
 *
 * API for study programs
 *
 */
class StudyProgramController extends Controller {

    /**
     * Get all study programs
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @response [
     *  {
     *      "id": 1,
     *      "short_name": "TCS",
     *      "full_name": "Technical Computer Science"
     *  },
     *  {
     *      "id": 2,
     *      "short_name": "BIT",
     *      "full_name": "Business & IT"
     *  }
     * ]
     */
    public function all() {
        return StudyProgram::all();
    }

    /**
     * Get a study program by ID
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the study program. Example: 1
     * @response {
     *  "id": 1,
     *  "short_name": "TCS",
     *  "full_name": "Technical Computer Science"
     * }
     */
    public function find(int $id) {
        return StudyProgram::query()->findOrFail($id);
    }

    /**
     * Create a study program
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @bodyParam short_name string required The short name. This field should be unique. Example: TCS
     * @bodyParam full_name string required The full name. Example: Technical Computer Science
     * @response {
     *  "id": 1,
     *  "short_name": "TCS",
     *  "full_name": "Technical Computer Science"
     * }
     */
    public function create(Request $request) {
        $studyProgram = StudyProgram::create($request->all());
        return response()->json($studyProgram, 201);
    }

    /**
     * Update a study program
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the study program. Example: 1
     * @bodyParam short_name string The short name. This field should be unique. Example: TCS
     * @bodyParam full_name string The full name. Example: Technical Computer Science
     * @response {
     *  "id": 1,
     *  "short_name": "TCS",
     *  "full_name": "Technical Computer Science"
     * }
     */
    public function update(int $id, Request $request) {
        $studyProgram = $this->find($id);
        $studyProgram->update($request->all());
        return $studyProgram;
    }

    /**
     * Delete a study program
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the study program. Example: 1
     * @response 204
     */
    public function delete(int $id) {
        $studyProgram = $this->find($id);
        $studyProgram->delete();
        return response('', 204);
    }
}
