<?php


namespace study_program;


use App\Entities\StudyProgram;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class DeleteStudyProgramTest extends TestCase {

    use DatabaseTransactions;

    private $studyProgram;

    protected function setUp(): void
    {
        parent::setUp();
        $this->studyProgram = factory(StudyProgram::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('DELETE', '/api/v1/study-programs/' . $this->studyProgram->id);
    }

    public function testPolicy() {
        $request = ['DELETE', '/api/v1/study-programs/' . $this->studyProgram->id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testUnknownStudyProgram() {
        $this->deleteStudyProgram(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\StudyProgram] -1'
            ]);
    }

    public function testDeleteStudyProgram() {
        $this->deleteStudyProgram($this->studyProgram->id)
            ->seeStatusCode(204);

        $this->notSeeInDatabase('study_programs', $this->studyProgram->toArray());
    }

    private function deleteStudyProgram(int $id) {
        return $this->asBoard('DELETE', "/api/v1/study-programs/$id");
    }
}
