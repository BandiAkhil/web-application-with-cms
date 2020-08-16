<?php


namespace news;


use App\Entities\FlexibleColumns\ColumnType;
use App\Entities\FlexibleColumns\FlexibleColumn;
use App\Entities\FlexibleColumns\FlexibleTable;
use Illuminate\Http\UploadedFile;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class CreateNewsTest extends TestCase {

    use DatabaseTransactions;

    public function testRoute() {
        $this->requiresAuth('POST', '/api/v1/news');
    }

    public function testPolicy() {
        $request = ['POST', '/api/v1/news'];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testWithoutRequiredFields() {
        $this->createNews([])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'title' => [
                        'The title field is required.'
                    ],
                    'content' => [
                        'The content field is required.'
                    ]
                ]
            ]);
    }

    public function testWithoutTitle() {
        $this->createNews(['title' => 'Test News'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'content' => [
                        'The content field is required.'
                    ]
                ]
            ]);
    }

    public function testWithoutDescription() {
        $this->createNews(['content' => 'This is the content of the news article.'])
            ->seeStatusCode(400)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'The given data was invalid.',
                'payload' => [
                    'title' => [
                        'The title field is required.'
                    ]
                ]
            ]);
    }

    public function testValidNews() {
        $title = 'Test News Title ' . time();
        $content = 'This is the content of the Test News.';
        $this->notSeeInDatabase('news', ['title' => $title, 'content' => $content]);

        $this->createNews(['title' => $title, 'content' => $content])
            ->seeStatusCode(201)
            ->seeJsonContains([
                'title' => $title,
                'content' => $content
            ])->seeJsonStructure([
                'id',
                'title',
                'content',
                'created_at',
                'updated_at',
                'files',
                'flexible_columns'
            ]);

        $this->seeInDatabase('news', ['title' => $title, 'content' => $content]);
    }

    public function testWithFiles() {
        $files = [];
        for ($i = 0; $i < 3; $i++) {
            $files[] = UploadedFile::fake()->create('Test' . $i);
        }

        $headers = ['Authorization' => 'Bearer ' . $this->tokenWithRole('admin')];
        $res = $this->call('POST', '/api/v1/news', [
            'title' => 'Test Title',
            'content' => 'Test Content.'
        ], [], ['files' => $files], $this->transformHeadersToServerVars($headers));

        $this->seeStatusCode(201);

        $id = json_decode($res->getContent(), true)['id'];
        $this->seeInDatabase('news', ['id' => $id]);
        foreach ($files as $file) {
            /** @var UploadedFile $file */
            $this->seeInDatabase('uploaded_files', ['fileable_id' => $id, 'fileable_type' => 'news', 'name' => $file->getClientOriginalName()]);
        }
    }

    public function testFlexibleColumnValues() {
        $columns = [];
        foreach (['Favorite color', 'Sport', 'Favorite shape'] as $column_name) {
            $column = new FlexibleColumn();
            $column->name = $column_name;
            $column->type_id = ColumnType::whereName('string')->first()->id;
            $column->flexible_table_id = FlexibleTable::news()->id;
            $column->save();

            $columns[] = $column;
        }

        $fields = [
            'title' => 'Test' . time(),
            'content' => 'Test Content',
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

        $this->createNews($fields)
            ->seeStatusCode(201);

        $id = json_decode($this->response->getContent(), true)['id'];

        $this->seeInDatabase('news', ['id' => $id]);
        foreach ($fields['flexible_column_values'] as $flexible_column_value) {
            $this->seeInDatabase('flexible_column_values', $flexible_column_value);
        }
    }

    public function testFlexibleColumnValuesWrongType() {
        $column = new FlexibleColumn();
        $column->name = 'Test column ' . time();
        $column->type_id = ColumnType::whereName('integer')->first()->id;
        $column->flexible_table_id = FlexibleTable::news()->id;
        $column->save();

        $fields = [
            'title' => 'Test' . time(),
            'content' => 'Test Content',
            'flexible_column_values' => [
                [
                    'column_id' => $column->id,
                    'value' => 'Green'
                ]
            ]
        ];

        $this->createNews($fields)
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

        $fields = [
            'title' => 'Test' . time(),
            'content' => 'Test Content',
            'flexible_column_values' => [
                [
                    'column_id' => $column->id,
                    'value' => 'Green'
                ]
            ]
        ];

        $this->createNews($fields)
            ->seeStatusCode(400)
            ->seeJsonEquals([
                "error" => true,
                "message" => "The given data was invalid.",
                "payload" => [
                    "column_id" => ["Invalid column: column not part of this table."]
                ]
            ]);
    }

    public function testFlexibleColumnValuesStringified() {
        $columns = [];
        foreach (['Favorite color', 'Sport', 'Favorite shape'] as $column_name) {
            $column = new FlexibleColumn();
            $column->name = $column_name;
            $column->type_id = ColumnType::whereName('string')->first()->id;
            $column->flexible_table_id = FlexibleTable::news()->id;
            $column->save();

            $columns[] = $column;
        }

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

        $fields = [
            'title' => 'Test' . time(),
            'content' => 'Test Content',
            'flexible_column_values' => json_encode($flexible_column_values)
        ];

        $this->createNews($fields)
            ->seeStatusCode(201);

        $id = json_decode($this->response->getContent(), true)['id'];

        $this->seeInDatabase('news', ['id' => $id]);
        foreach ($flexible_column_values as $flexible_column_value) {
            $this->seeInDatabase('flexible_column_values', $flexible_column_value);
        }
    }

    private function createNews(array $parameters = []) {
        return $this->asBoard('POST', '/api/v1/news', $parameters);
    }
}
