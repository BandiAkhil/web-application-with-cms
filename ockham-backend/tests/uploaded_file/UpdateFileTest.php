<?php


namespace uploaded_file;


use App\Entities\UploadedFile;
use TestCase;

class UpdateFileTest extends TestCase {

    /** @var UploadedFile $file */
    private $file;

    protected function setUp(): void
    {
        parent::setUp();
        $this->file = factory(UploadedFile::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('PUT', '/api/v1/uploaded-files/' . $this->file->id);
    }

    public function testActivityPolicy() {
        $file = $this->file;
        if ($file->fileable_type !== 'activity') {
            $file = factory(UploadedFile::class)->state('activity')->create();
        }

        $request = ['PUT', '/api/v1/uploaded-files/' . $file->id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
        $this->accessibleAsCommitteeMember($file->fileable->committee, ...$request);
    }

    public function testNewsPolicy() {
        $file = $this->file;
        if ($file->fileable_type !== 'news') {
            $file = factory(UploadedFile::class)->state('news')->create();
        }

        $request = ['PUT', '/api/v1/uploaded-files/' . $file->id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testUpdateName() {
        $new_name = 'New File Name';
        $expected = $this->file->toArray();
        $expected['name'] = $new_name;
        unset($expected['updated_at']);

        $this->updateFile($this->file->id, ['name' => $new_name])
            ->seeStatusCode(200)
            ->seeJsonContains($expected);

        $this->notSeeInDatabase('uploaded_files', $this->file->toArray());
        $this->seeInDatabase('uploaded_files', $expected);
    }

    /* Should not be updatable */
    public function testUpdatePath() {
        $new_path = '/foo/bar';

        $this->updateFile($this->file->id, ['path' => $new_path])
            ->seeStatusCode(200)
            ->seeJsonEquals($this->file->toArray());

        $this->notSeeInDatabase('uploaded_files', ['id' => $this->file->id, 'path' => $new_path]);
        $this->seeInDatabase('uploaded_files', $this->file->toArray());
    }

    public function testUnkownFile() {
        $this->updateFile(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\UploadedFile] -1'
            ]);
    }

    private function updateFile(int $id, array $body = []) {
        return $this->asBoard('PUT', '/api/v1/uploaded-files/' . $id, $body);
    }
}
