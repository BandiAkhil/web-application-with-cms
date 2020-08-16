<?php


namespace study_program;


use App\Entities\StudyProgram;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class CreateStudyProgramTest extends TestCase {

    use DatabaseTransactions;

    public function testRoute() {
        $this->requiresAuth('POST', '/api/v1/study-programs');
    }

    public function testPolicy() {
        $request = ['POST', '/api/v1/study-programs'];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testWithoutShortName() {
        $full_name = 'Test' . time();
        $this->createStudyProgram(['full_name' => $full_name])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'short_name' => [
                        'The short name field is required.'
                    ]
                ]
            ]);

        $this->notSeeInDatabase('study_programs', ['full_name' => $full_name]);
    }

    public function testWithoutFullName() {
        $short_name = 'T' . time();
        $this->createStudyProgram(['short_name' => $short_name])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'full_name' => [
                        'The full name field is required.'
                    ]
                ]
            ]);

        $this->notSeeInDatabase('study_programs', ['short_name' => $short_name]);
    }

    public function testWithoutUniqueShortName() {
        $short_name = 'T' . time();
        StudyProgram::create(['short_name' => $short_name, 'full_name' => 'TEST']);

        $full_name = 'Test' . time();
        $this->createStudyProgram(['full_name' => $full_name, 'short_name' => $short_name])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'short_name' => [
                        'The short name has already been taken.'
                    ]
                ]
            ]);

        $this->notSeeInDatabase('study_programs', ['short_name' => $short_name, 'full_name' => $full_name]);
        $this->seeInDatabase('study_programs', ['short_name' => $short_name]);
    }

    public function testValidStudyProgram() {
        $short_name = 'T' . time();
        $full_name = 'Test' . time();

        $this->createStudyProgram(['full_name' => $full_name, 'short_name' => $short_name])
            ->seeStatusCode(201)
            ->seeJsonContains([
                'short_name' => $short_name,
                'full_name' => $full_name
            ]);

        $this->seeInDatabase('study_programs', ['short_name' => $short_name, 'full_name' => $full_name]);
    }

    private function createStudyProgram(array $parameters = []) {
        return $this->asBoard('POST', '/api/v1/study-programs', $parameters);
    }
}
