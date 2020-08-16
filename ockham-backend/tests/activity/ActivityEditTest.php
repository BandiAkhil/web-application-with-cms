<?php


namespace activity;


use App\Entities\Activity;
use App\Entities\Committee;
use App\Entities\FlexibleColumns\ColumnType;
use App\Entities\FlexibleColumns\FlexibleColumn;
use App\Entities\FlexibleColumns\FlexibleTable;
use App\Entities\Member;
use Illuminate\Http\UploadedFile;
use Laravel\Lumen\Testing\DatabaseTransactions;

class ActivityEditTest extends \TestCase
{

    use DatabaseTransactions;

    protected $activity;
    protected $committee;

    protected function setUp(): void
    {
        parent::setUp();
        $this->committee = factory(Committee::class)->create();
        $this->activity = factory(Activity::class)->create([
            'committee_id' => $this->committee->id,
        ]);
        $member = factory(Member::class)->create();
        $this->committee->members()->save($member);
    }

    protected function url() {
        $id = $this->activity->id;
        return "/api/v1/activities/$id";
    }

    public function testRoute() {
        $this->requiresAuth('PUT', $this->url());
    }

    public function testPolicy() {
        $request = ['PUT', $this->url()];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->accessibleBy($this->committee->members()->first(), ...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testEditValid() {
        $this->asAdmin('PUT', $this->url(), [
            'description' => 'New description'
        ])
            ->seeStatusCode(200);
        $this->activity->refresh();
        self::assertEquals('New description', $this->activity->description);
    }


    public function testEditInvalid() {
        $this->asAdmin('PUT', $this->url(), [
            'start_date' => 'not_a_valid_date'
        ])
            ->seeStatusCode(400);
    }

    public function testEditUnknownField() {
        $this->asAdmin('PUT', $this->url(), [
            'some_nonexisting_field' => 'random value here'
        ])
            ->seeStatusCode(200); # Do we want to get 400 here instead? Not sure
    }

    public function testEditNoChanges() {
        $this->asAdmin('PUT', $this->url(), [])
            ->seeStatusCode(200); # Do we want to get 400 here instead? Not sure
    }

    public function testWithFiles() {
        $files = [];
        for ($i = 0; $i < 3; $i++) {
            $files[] = UploadedFile::fake()->create('Test' . $i);
        }

        $headers = ['Authorization' => 'Bearer ' . $this->tokenWithRole('admin')];
        $res = $this->call('PUT', '/api/v1/activities/' . $this->activity->id,
            [], [], ['files' => $files], $this->transformHeadersToServerVars($headers));

        $this->seeStatusCode(200);

        $id = json_decode($res->getContent(), true)['id'];
        foreach ($files as $file) {
            /** @var UploadedFile $file */
            $this->seeInDatabase('uploaded_files', ['fileable_id' => $id, 'fileable_type' => 'activity', 'name' => $file->getClientOriginalName()]);
        }
    }

    public function testUpdateFlexibleColumnValues() {
        $column = new FlexibleColumn();
        $column->name = 'Favorite color';
        $column->type_id = ColumnType::whereName('string')->first()->id;
        $column->flexible_table_id = FlexibleTable::activities()->id;
        $column->save();

        $flexible_column_values = [
            [
                'column_id' => $column->id,
                'value' => 'Green'
            ]
        ];

        $this->asAdmin('PUT', $this->url(), [
            'flexible_column_values' => $flexible_column_values
        ])->seeStatusCode(200);

        $this->activity = $this->activity->refresh();

        $this->assertCount(1, $this->activity->flexible_column_values);
        $this->assertEquals($flexible_column_values, $this->activity->flexible_column_values->toArray());
    }

    public function testUpdateExistingFlexibleColumnValues() {
        $columns = [];
        foreach (['Favorite color', 'Sport', 'Favorite shape'] as $column_name) {
            $column = new FlexibleColumn();
            $column->name = $column_name;
            $column->type_id = ColumnType::whereName('string')->first()->id;
            $column->flexible_table_id = FlexibleTable::activities()->id;
            $column->save();

            $columns[] = $column;
        }

        $this->activity->flexible_column_values()->createMany([['column_id' => $columns[0]->id, 'value' => 'red'], ['column_id' => $columns[1]->id, 'value' => 'nonexisting']]);
        $this->activity->save();

        $flexible_column_values = [
            [
                'column_id' => $columns[0]->id,
                'value' => 'Green'
            ],
            [
                'column_id' => $columns[1]->id,
                'value' => 'Soccer'
            ],
            [
                'column_id' => $columns[2]->id,
                'value' => 'Triangle'
            ]
        ];

        $this->asAdmin('PUT', $this->url(), [
            'flexible_column_values' => $flexible_column_values
        ])->seeStatusCode(200);

        $this->activity = $this->activity->refresh();

        $this->assertCount(3, $this->activity->flexible_column_values);
        $this->assertEquals($flexible_column_values, $this->activity->flexible_column_values->toArray());
    }

    public function testDeleteFlexibleColumnValues() {
        $column = new FlexibleColumn();
        $column->name = 'Favorite color';
        $column->type_id = ColumnType::whereName('string')->first()->id;
        $column->flexible_table_id = FlexibleTable::activities()->id;
        $column->save();

        $this->activity->flexible_column_values()->create(['column_id' => $column->id, 'value' => 'Green']);

        $this->asAdmin('PUT', $this->url(), [
            'flexible_column_values' => []
        ])->seeStatusCode(200);

        $this->activity = $this->activity->refresh();

        $this->assertCount(0, $this->activity->flexible_column_values);
        $this->assertEquals([], $this->activity->flexible_column_values->toArray());
    }
}
