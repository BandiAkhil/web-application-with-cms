<?php


namespace page_group;


use App\Entities\PageGroup;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class CreatePageGroupTest extends TestCase {

    use DatabaseTransactions;

    public function testRoute() {
        $this->requiresAuth('POST', '/api/v1/page-groups');
    }

    public function testPolicy() {
        $request = ['POST', '/api/v1/page-groups'];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testWithoutFields() {
        $this->createPageGroup([])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'name' => [
                        'The name field is required.'
                    ]
                ]
            ]);
    }

    public function testExistingName() {
        $name = factory(PageGroup::class)->create()->name;
        $this->createPageGroup(['name' => $name])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'name' => [
                        'The name has already been taken.'
                    ]
                ]
            ]);
    }

    public function testValidPageGroup() {
        $fields = ['name' => 'Test' . time()];
        $this->createPageGroup($fields)
            ->seeStatusCode(201)
            ->seeJsonContains($fields);

        $this->seeInDatabase('page_groups', $fields);
    }

    private function createPageGroup(array $parameters = []) {
        return $this->asBoard('POST', '/api/v1/page-groups', $parameters);
    }
}
