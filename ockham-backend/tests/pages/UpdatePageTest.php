<?php


namespace pages;


use App\Entities\Page;
use App\Entities\PageGroup;
use Illuminate\Http\UploadedFile;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class UpdatePageTest extends TestCase {

    use DatabaseTransactions;

    /** @var Page $page */
    private $page;

    protected function setUp(): void
    {
        parent::setUp();
        $this->page = factory(Page::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('PUT', '/api/v1/pages/' . $this->page->slug);
    }

    public function testPolicy() {
        $request = ['PUT', '/api/v1/pages/' . $this->page->slug];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testUnknownPage() {
        $this->asBoard('PUT', '/api/v1/pages/unknown')
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\Page].'
            ]);
    }

    public function testEmptyBody() {
        $this->updatePage([])
            ->seeStatusCode(200)
            ->seeJsonContains($this->page->toArray());
    }

    public function testUpdateInvalidSlug() {
        $this->updatePage(['slug' => 'This is forbidden'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'slug' => [
                        'The slug may only contain letters, numbers, and dashes.'
                    ]
                ]
            ]);
    }

    public function testUpdateExistingSlug() {
        $slug = factory(Page::class)->create()->slug;

        $this->updatePage(['slug' => $slug])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'slug' => [
                        'The slug has already been taken.'
                    ]
                ]
            ]);
    }

    public function testUpdateSlug() {
        $new_slug = 'this-is-a-new-slug-' . time();
        $expected = $this->expected(['slug' => $new_slug]);

        $this->updatePage(['slug' => $new_slug])
            ->seeStatusCode(200)
            ->seeJsonContains($expected);

        $this->notSeeInDatabase('pages', ['slug' => $this->page->slug]);
        $this->seeInDatabase('pages', ['slug' => $new_slug]);

        $this->json('GET', '/api/v1/pages/' . $this->page->slug)
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\Page].'
            ]);

        $this->json('GET', '/api/v1/pages/' . $new_slug)
            ->seeStatusCode(200)
            ->seeJsonContains($expected);
    }

    public function testUpdateTitle() {
        $new_title = 'This is a new title' . time();
        $expected = $this->expected(['title' => $new_title]);

        $this->updatePage(['title' => $new_title])
            ->seeStatusCode(200)
            ->seeJsonContains($expected);

        $this->notSeeInDatabase('pages', ['slug' => $this->page->slug, 'title' => $this->page->title]);
        $this->seeInDatabase('pages', ['slug' => $this->page->slug, 'title' => $new_title]);
    }

    public function testUpdateContent() {
        $content = 'This is a new content' . time();
        $expected = $this->expected(['content' => $content]);

        $this->updatePage(['content' => $content])
            ->seeStatusCode(200)
            ->seeJsonContains($expected);

        $this->notSeeInDatabase('pages', ['slug' => $this->page->slug, 'content' => $this->page->content]);
        $this->seeInDatabase('pages', ['slug' => $this->page->slug, 'content' => $content]);
    }

    public function testUpdateWithValidPageGroupID() {
        $page_group_id = factory(PageGroup::class)->create()->id;
        $expected = $this->expected(['page_group_id' => $page_group_id]);

        $this->updatePage(['page_group_id' => $page_group_id])
            ->seeStatusCode(200)
            ->seeJsonContains($expected);

        $this->notSeeInDatabase('pages', ['slug' => $this->page->slug, 'page_group_id' => $this->page->page_group_id]);
        $this->seeInDatabase('pages', ['slug' => $this->page->slug, 'page_group_id' => $page_group_id]);
    }

    public function testUpdateWithInvalidPageGroupID() {
        $this->updatePage(['page_group_id' => -1])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'page_group_id' => [
                        'The selected page group id is invalid.'
                    ]
                ]
            ]);

        // Assert nothing changed
        $this->seeInDatabase('pages', $this->page->toArray());
    }

    public function testWithFiles() {
        $files = [];
        for ($i = 0; $i < 3; $i++) {
            $files[] = UploadedFile::fake()->create('Test' . $i);
        }

        $headers = ['Authorization' => 'Bearer ' . $this->tokenWithRole('admin')];
        $res = $this->call('PUT', '/api/v1/pages/' . $this->page->slug,
            [], [], ['files' => $files], $this->transformHeadersToServerVars($headers));

        $this->seeStatusCode(200);

        $id = json_decode($res->getContent(), true)['id'];
        foreach ($files as $file) {
            /** @var UploadedFile $file */
            $this->seeInDatabase('uploaded_files', ['fileable_id' => $id, 'fileable_type' => 'page', 'name' => $file->getClientOriginalName()]);
        }
    }

    private function updatePage(array $parameters = []) {
        return $this->asBoard('PUT', '/api/v1/pages/' . $this->page->slug, $parameters);
    }

    private function expected(array $fields = []): array {
        $expected = $this->page->toArray();
        foreach ($fields as $key => $value) {
            $expected[$key] = $value;
        }
        unset($expected['files']);
        unset($expected['updated_at']);
        return $expected;
    }
}
