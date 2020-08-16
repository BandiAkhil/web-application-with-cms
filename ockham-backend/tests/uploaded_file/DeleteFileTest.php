<?php


namespace uploaded_file;


use App\Entities\UploadedFile;
use TestCase;

class DeleteFileTest extends TestCase {

    /** @var UploadedFile $file */
    private $file;

    protected function setUp(): void
    {
        parent::setUp();
        $this->file = factory(UploadedFile::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('DELETE', '/api/v1/uploaded-files/' . $this->file->id);
    }

    public function testActivityPolicy() {
        $file = factory(UploadedFile::class)->state('activity')->create();
        $request = ['DELETE', '/api/v1/uploaded-files/' . $file->id];
        $this->accessibleAsAdmin(...$request);

        $file = factory(UploadedFile::class)->state('activity')->create();
        $request = ['DELETE', '/api/v1/uploaded-files/' . $file->id];
        $this->accessibleAsBoard(...$request);

        $file = factory(UploadedFile::class)->state('activity')->create();
        $request = ['DELETE', '/api/v1/uploaded-files/' . $file->id];
        $this->notAccessibleAsGeneralMember(...$request);

        $file = factory(UploadedFile::class)->state('activity')->create();
        $request = ['DELETE', '/api/v1/uploaded-files/' . $file->id];
        $this->accessibleAsCommitteeMember($file->fileable->committee, ...$request);
    }

    public function testNewsPolicy() {
        $file = factory(UploadedFile::class)->state('news')->create();
        $request = ['DELETE', '/api/v1/uploaded-files/' . $file->id];
        $this->accessibleAsAdmin(...$request);

        $file = factory(UploadedFile::class)->state('news')->create();
        $request = ['DELETE', '/api/v1/uploaded-files/' . $file->id];
        $this->accessibleAsBoard(...$request);

        $file = factory(UploadedFile::class)->state('news')->create();
        $request = ['DELETE', '/api/v1/uploaded-files/' . $file->id];
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testUnkownFile() {
        $this->deleteFile(-1)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\UploadedFile] -1'
            ]);
    }

    private function deleteFile(int $id) {
        return $this->asBoard('DELETE', '/api/v1/uploaded-files/' . $id);
    }
}
