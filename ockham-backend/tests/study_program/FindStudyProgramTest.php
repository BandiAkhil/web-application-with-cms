<?php


namespace study_program;


use App\Entities\StudyProgram;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class FindStudyProgramTest extends TestCase {

    use DatabaseTransactions;

    private $studyProgram;

    protected function setUp(): void
    {
        parent::setUp();
        $this->studyProgram = factory(StudyProgram::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('GET', '/api/v1/study-programs/' . $this->studyProgram->id);
    }

    public function testPolicy() {
        $request = ['GET', '/api/v1/study-programs/' . $this->studyProgram->id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testStructure() {
        $this->findMember($this->studyProgram->id)
            ->seeStatusCode(200)
            ->seeJsonStructure([
                'id',
                'short_name',
                'full_name'
            ]);
    }

    public function testUnknownStudyProgram() {
        $this->findMember(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\StudyProgram] -1'
            ]);
    }

    private function findMember(int $id) {
        return $this->asBoard('GET', "/api/v1/study-programs/$id");
    }
}
