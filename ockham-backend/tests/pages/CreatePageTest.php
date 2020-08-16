<?php


namespace pages;


use App\Entities\Page;
use App\Entities\PageGroup;
use Illuminate\Http\UploadedFile;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class CreatePageTest extends TestCase {

    use DatabaseTransactions;

    public function testRoute() {
        $this->requiresAuth('POST', '/api/v1/pages');
    }

    public function testPolicy() {
        $request = ['POST', '/api/v1/pages'];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testWithoutFields() {
        $this->createPage([])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'content' => [
                        'The content field is required.'
                    ],
                    'page_group_id' => [
                        'The page group id field is required.'
                    ],
                    'slug' => [
                        'The slug field is required.'
                    ],
                    'title' => [
                        'The title field is required.'
                    ]
                ]
            ]);
    }

    public function testWithoutRequiredField() {
        $required_fields = array_keys($this->fields());
        foreach ($required_fields as $missing_field) {
            $fields = $this->fields();
            unset($fields[$missing_field]);

            $this->createPage($fields)
                ->seeStatusCode(400)
                ->seeJsonEquals([
                    'error' => true,
                    'message' => 'The given data was invalid.',
                    'payload' => [
                        $missing_field => [
                            'The ' . str_replace('_', ' ', $missing_field) . ' field is required.'
                        ]
                    ]
                ]);
        }
    }

    public function testExistingSlug() {
        $slug = factory(Page::class)->create()->slug;
        $fields = $this->fields();
        $fields['slug'] = $slug;

        $this->createPage($fields)
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

    public function testInvalidPageGroupID() {
        $fields = $this->fields();
        $fields['page_group_id'] = -1;

        $this->createPage($fields)
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
    }

    public function testInvalidSlug() {
        $fields = $this->fields();
        $fields['slug'] = 'This is forbidden';

        $this->createPage($fields)
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

    public function testValidPage() {
        $fields = $this->fields();
        $this->createPage($fields)
            ->seeStatusCode(201)
            ->seeJsonContains($fields);

        $this->seeInDatabase('pages', $fields);
    }

    public function testWithFiles() {
        $files = [];
        for ($i = 0; $i < 3; $i++) {
            $files[] = UploadedFile::fake()->create('Test' . $i);
        }

        $headers = ['Authorization' => 'Bearer ' . $this->tokenWithRole('admin')];
        $res = $this->call('POST', '/api/v1/pages', $this->fields(), [], ['files' => $files], $this->transformHeadersToServerVars($headers));

        $this->seeStatusCode(201);

        $id = json_decode($res->getContent(), true)['id'];
        $this->seeInDatabase('pages', ['id' => $id]);
        foreach ($files as $file) {
            /** @var UploadedFile $file */
            $this->seeInDatabase('uploaded_files', ['fileable_id' => $id, 'fileable_type' => 'page', 'name' => $file->getClientOriginalName()]);
        }
    }

    private function createPage(array $parameters) {
        return $this->asAdmin('POST', '/api/v1/pages', $parameters);
    }

    private function fields() {
        $title = 'Test' . time();
        return [
            'title' => $title,
            'slug' => str_replace(' ', '-', $title),
            'content' => 'This is a test.',
            'page_group_id' => factory(PageGroup::class)->create()->id
        ];
    }
}
