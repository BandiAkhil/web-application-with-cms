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

class CreateActivityTest extends \TestCase
{

    use DatabaseTransactions;

    private $randomCommitteeMember;

    protected function setUp(): void
    {
        parent::setUp();
        $this->randomCommitteeMember = factory(Member::class)->state('general_member')->create();
        $this->randomCommitteeMember->addToCommittee(factory(Committee::class)->create());
    }

    private function request($data=null)
    {
        $r = ['POST', '/api/v1/activities'];
        if ($data != null) {
            array_push($r, $data);
        }
        return $r;
    }

    public function testRoute() {
        $this->requiresAuth(...$this->request());
    }

    public function testPolicy() {
        $this->accessibleAsBoard(...$this->request());
        // Not testing if its accessible by committee members/general members here because that depends on what's inside the request.
    }

    public function testCreateForWrongCommittee() {
        $data = [
            'committee_id' => factory(Committee::class)->create()->id
        ];
        $this->notAccessibleBy($this->randomCommitteeMember, ...$this->request($data));
    }

    public function testValid() {
        $committee = $this->randomCommitteeMember->committees()->first();
        $activity = factory(Activity::class)->make();
        $activity->committee_id = $committee->id;
        $data = [
            'title' => $activity->title,
            'description' => $activity->description,
            'start_date' => '2020-03-03 20:00:00',
            'end_date' => '2020-03-03 21:00:00',
            'price_cents' => $activity->price_cents,
            'committee_id' => $activity->committee_id,
            'location' => $activity->location,
            'registration_opens' => '2019-01-01 00:00:00',
            'registration_closes' => '2019-12-31 23:59:59'
        ];
        $this->asMember($this->randomCommitteeMember, ...$this->request($data))
            ->seeStatusCode(201);
    }

    public function testMissingFields() {
        $data = [
            'committee_id' => $this->randomCommitteeMember->committees()->first()->id,
            'title' => 'Random event',
            'description' => 'Lauren Ipsum Dollar Sid Ahmed'
        ];
        $this->asMember($this->randomCommitteeMember, ...$this->request($data))
            ->seeStatusCode(400);
    }


    public function _testWithOptionType($option_type) {
        $committee = $this->randomCommitteeMember->committees()->first();
        $activity = factory(Activity::class)->make();
        $activity->committee_id = $committee->id;
        return $this->asMember($this->randomCommitteeMember, ...$this->request([
            'title' => $activity->title,
            'description' => $activity->description,
            'start_date' => '2020-03-03 20:00:00',
            'end_date' => '2020-03-03 21:00:00',
            'price_cents' => $activity->price_cents,
            'committee_id' => $activity->committee_id,
            'location' => $activity->location,
            'registration_opens' => '2019-01-01 00:00:00',
            'registration_closes' => '2019-12-31 23:59:59',
            'options' => [
                0 => [
                    'question' => 'aaa?',
                    'type_id' => $option_type,
                    'required' => true
                ]
            ]
        ]));
    }

    public function testWithValidOptionTypes() {
        foreach (ColumnType::all() as $type) {
            $this->_testWithOptionType($type->id)
                ->seeStatusCode(201);
        }
    }


    public function testWithInvalidOptionTypes() {
        $valid_types = [-1, 0, ColumnType::query()->max('id') + 1];
        foreach ($valid_types as $type) {
            $this->_testWithOptionType($type)
                ->seeStatusCode(400);
        }
    }

    public function testWithFiles() {
        $files = [];
        for ($i = 0; $i < 3; $i++) {
            $files[] = UploadedFile::fake()->create('Test' . $i);
        }

        $committee = $this->randomCommitteeMember->committees()->first();
        $activity = factory(Activity::class)->make();
        $activity->committee_id = $committee->id;

        $headers = ['Authorization' => 'Bearer ' . $this->tokenWithRole('admin')];
        $res = $this->call('POST', '/api/v1/activities', [
            'title' => $activity->title,
            'description' => $activity->description,
            'start_date' => '2020-03-03 20:00:00',
            'end_date' => '2020-03-03 21:00:00',
            'price_cents' => $activity->price_cents,
            'committee_id' => $activity->committee_id,
            'location' => $activity->location,
            'registration_opens' => '2019-01-01 00:00:00',
            'registration_closes' => '2019-12-31 23:59:59'
        ], [], ['files' => $files], $this->transformHeadersToServerVars($headers));

        $this->seeStatusCode(201);

        $id = json_decode($res->getContent(), true)['id'];
        $this->seeInDatabase('activities', ['id' => $id]);
        foreach ($files as $file) {
            /** @var UploadedFile $file */
            $this->seeInDatabase('uploaded_files', ['fileable_id' => $id, 'fileable_type' => 'activity', 'name' => $file->getClientOriginalName()]);
        }
    }

    public function testDateValidation() {
        $data = [
            'title' => 'title',
            'description' => 'description',
            'start_date' => '2020-01-02 00:00:00',
            'end_date' => '2020-01-01 00:00:00', // Here is the problem! end date must be after start date
            'location' => 'not sure',
            'price_cents' => 100,
            'committee_id' => factory(Committee::class)->create()->id,
            'registration_opens' => '2019-01-01 00:00:00',
            'registration_closes' => '2019-12-31 23:59:00'
        ];
        $this->asAdmin(...$this->request($data))
            ->seeJson([
                'end_date' => [
                    'The end date must be a date after start date.'
                ]
            ])->seeStatusCode(400);

        $data['end_date'] = '2020-01-03 00:00:00'; // Now the problem is fixed
        $this->asAdmin(...$this->request($data))
            ->seeStatusCode(201);
    }

    public function testFlexibleColumnValues() {
        $columns = [];
        foreach (['Favorite color', 'Sport', 'Favorite shape'] as $column_name) {
            $column = new FlexibleColumn();
            $column->name = $column_name;
            $column->type_id = ColumnType::whereName('string')->first()->id;
            $column->flexible_table_id = FlexibleTable::activities()->id;
            $column->save();

            $columns[] = $column;
        }

        $committee = $this->randomCommitteeMember->committees()->first();
        $activity = factory(Activity::class)->make();
        $activity->committee_id = $committee->id;

        $data = [
            'title' => $activity->title,
            'description' => $activity->description,
            'start_date' => '2020-03-03 20:00:00',
            'end_date' => '2020-03-03 21:00:00',
            'price_cents' => $activity->price_cents,
            'committee_id' => $activity->committee_id,
            'location' => $activity->location,
            'registration_opens' => '2019-01-01 00:00:00',
            'registration_closes' => '2019-12-31 23:59:59',
            'flexible_column_values' => [
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
            ]
        ];

        $this->asMember($this->randomCommitteeMember, ...$this->request($data))
            ->seeStatusCode(201);

        $id = json_decode($this->response->getContent(), true)['id'];

        $this->seeInDatabase('activities', ['id' => $id]);
        foreach ($data['flexible_column_values'] as $flexible_column_value) {
            $this->seeInDatabase('flexible_column_values', $flexible_column_value);
        }
    }

    public function testFlexibleColumnValuesWrongType() {
        $column = new FlexibleColumn();
        $column->name = 'Test column ' . time();
        $column->type_id = ColumnType::whereName('integer')->first()->id;
        $column->flexible_table_id = FlexibleTable::activities()->id;
        $column->save();

        $committee = $this->randomCommitteeMember->committees()->first();
        $activity = factory(Activity::class)->make();
        $activity->committee_id = $committee->id;

        $data = [
            'title' => $activity->title,
            'description' => $activity->description,
            'start_date' => '2020-03-03 20:00:00',
            'end_date' => '2020-03-03 21:00:00',
            'price_cents' => $activity->price_cents,
            'committee_id' => $activity->committee_id,
            'location' => $activity->location,
            'registration_opens' => '2019-01-01 00:00:00',
            'registration_closes' => '2019-12-31 23:59:59',
            'flexible_column_values' => [
                [
                    'column_id' => $column->id,
                    'value' => 'Green'
                ]
            ]
        ];

        $this->asMember($this->randomCommitteeMember, ...$this->request($data))
            ->seeStatusCode(400)
            ->seeJsonEquals([
                "error" => true,
                "message" => "The given data was invalid.",
                "payload" => [
                    "value" => ["Invalid type"]
                ]
            ]);
    }

    public function testFlexibleColumnValuesWrongTable() {
        $column = new FlexibleColumn();
        $column->name = 'Test column ' . time();
        $column->type_id = ColumnType::whereName('string')->first()->id;
        $column->flexible_table_id = FlexibleTable::committees()->id;
        $column->save();

        $committee = $this->randomCommitteeMember->committees()->first();
        $activity = factory(Activity::class)->make();
        $activity->committee_id = $committee->id;

        $data = [
            'title' => $activity->title,
            'description' => $activity->description,
            'start_date' => '2020-03-03 20:00:00',
            'end_date' => '2020-03-03 21:00:00',
            'price_cents' => $activity->price_cents,
            'committee_id' => $activity->committee_id,
            'location' => $activity->location,
            'registration_opens' => '2019-01-01 00:00:00',
            'registration_closes' => '2019-12-31 23:59:59',
            'flexible_column_values' => [
                [
                    'column_id' => $column->id,
                    'value' => 'Green'
                ]
            ]
        ];

        $this->asMember($this->randomCommitteeMember, ...$this->request($data))
            ->seeStatusCode(400)
            ->seeJsonEquals([
                "error" => true,
                "message" => "The given data was invalid.",
                "payload" => [
                    "column_id" => ["Invalid column: column not part of this table."]
                ]
            ]);
    }
}
