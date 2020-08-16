<?php


namespace study_program;


use App\Entities\StudyProgram;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class AllStudyProgramsTest extends TestCase {

    use DatabaseTransactions;

    public function testRoute() {
        $this->requiresAuth('GET', '/api/v1/study-programs');
    }

    public function testPolicy() {
        $request = ['GET', '/api/v1/study-programs'];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testStructure() {
        $this->getStudyPrograms()
            ->seeStatusCode(200)
            ->seeJsonStructure([
                '*' => [
                    'id',
                    'short_name',
                    'full_name'
                ]
            ]);
    }

    public function testAmount() {
        $res = $this->getStudyPrograms()->seeStatusCode(200)->response->getContent();
        $this->assertCount(StudyProgram::all()->count(), json_decode($res, true));
    }

    private function getStudyPrograms() {
        return $this->asBoard('GET', '/api/v1/study-programs');
    }
}
