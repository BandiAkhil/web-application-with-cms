<?php


namespace study_program;


use App\Entities\StudyProgram;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class UpdateStudyProgramTest extends TestCase {

    use DatabaseTransactions;

    private $studyProgram;

    protected function setUp(): void
    {
        parent::setUp();
        $this->studyProgram = factory(StudyProgram::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('PUT', '/api/v1/study-programs/' . $this->studyProgram->id);
    }

    public function testPolicy() {
        $request = ['PUT', '/api/v1/study-programs/' . $this->studyProgram->id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testUnkownStudyProgram() {
        $this->updateStudyProgram(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\StudyProgram] -1'
            ]);
    }

    public function testEmptyBody() {
        $this->updateStudyProgram($this->studyProgram->id, [])
            ->seeStatusCode(200)
            ->seeJsonEquals($this->studyProgram->toArray());

        $this->seeInDatabase('study_programs', $this->studyProgram->toArray());
    }

    public function testUpdateShortName() {
        $new_short_name = 'U' . time();
        $expected = $this->studyProgram->toArray();
        $expected['short_name'] = $new_short_name;

        $this->updateStudyProgram($this->studyProgram->id, ['short_name' => $new_short_name])
            ->seeStatusCode(200)
            ->seeJsonEquals($expected);

        $this->seeInDatabase('study_programs', $expected);
        $this->notSeeInDatabase('study_programs', $this->studyProgram->toArray());
    }

    public function testUpdateFullName() {
        $new_full_name = 'TEST' . time();
        $expected = $this->studyProgram->toArray();
        $expected['full_name'] = $new_full_name;

        $this->updateStudyProgram($this->studyProgram->id, ['full_name' => $new_full_name])
            ->seeStatusCode(200)
            ->seeJsonEquals($expected);

        $this->seeInDatabase('study_programs', $expected);
        $this->notSeeInDatabase('study_programs', $this->studyProgram->toArray());
    }

    public function testUpdateNonUniqueShortName() {
        $short_name = 'T' . time();
        StudyProgram::create(['short_name' => $short_name, 'full_name' => 'TEST']);

        $this->updateStudyProgram($this->studyProgram->id, ['short_name' => $short_name])
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

        $this->seeInDatabase('study_programs', $this->studyProgram->toArray());
        $this->notSeeInDatabase('study_programs', array_merge($this->studyProgram->toArray(), ['short_name' => $short_name]));
    }

    private function updateStudyProgram(int $id, array $body = []) {
        return $this->asBoard('PUT', "/api/v1/study-programs/$id", $body);
    }
}
