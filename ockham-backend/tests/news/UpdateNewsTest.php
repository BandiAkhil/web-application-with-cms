<?php


namespace news;


use App\Entities\FlexibleColumns\ColumnType;
use App\Entities\FlexibleColumns\FlexibleColumn;
use App\Entities\FlexibleColumns\FlexibleTable;
use App\Entities\News;
use Illuminate\Http\UploadedFile;
use Laravel\Lumen\Testing\DatabaseTransactions;
use TestCase;

class UpdateNewsTest extends TestCase {

    use DatabaseTransactions;

    /** @var News $news */
    private $news;

    protected function setUp(): void
    {
        parent::setUp();
        $this->news = factory(News::class)->create();
    }

    public function testRoute() {
        $this->requiresAuth('PUT', '/api/v1/news/' . $this->news->id);
    }

    public function testPolicy() {
        $request = ['PUT', '/api/v1/news/' . $this->news->id];
        $this->accessibleAsAdmin(...$request);
        $this->accessibleAsBoard(...$request);
        $this->notAccessibleAsGeneralMember(...$request);
    }

    public function testUnknownNews() {
        $this->asBoard('PUT', '/api/v1/news/-1')
            ->seeStatusCode(404)
            ->seeJsonEquals([
                'error' => true,
                'message' => 'No query results for model [App\\Entities\\News] -1'
            ]);
    }

    public function testEmptyBody() {
        $this->updateNews([])
            ->seeStatusCode(200)
            ->seeJsonContains($this->news->toArray());
    }

    public function testUpdateTitle() {
        $new_title = 'Test Title of News of ' . time();
        $expected = $this->news->toArray();
        $expected['title'] = $new_title;
        unset($expected['updated_at']);

        $this->updateNews(['title' => $new_title])
            ->seeStatusCode(200)
            ->seeJsonContains($expected);

        $this->notSeeInDatabase('news', ['id' => $this->news->id, 'title' => $this->news->title]);
        $this->seeInDatabase('news', ['id' => $this->news->id, 'title' => $new_title]);
    }

    public function testUpdateContent() {
        $new_content = 'This is the content of today, ' . time();
        $expected = $this->news->toArray();
        $expected['content'] = $new_content;
        unset($expected['updated_at']);

        $this->updateNews(['content' => $new_content])
            ->seeStatusCode(200)
            ->seeJsonContains($expected);

        $this->notSeeInDatabase('news', ['id' => $this->news->id, 'content' => $this->news->content]);
        $this->seeInDatabase('news', ['id' => $this->news->id, 'content' => $new_content]);
    }

    public function testUpdateTitleAndContent() {
        $new_title = 'Test Title of News of ' . time();
        $new_content = 'This is the content of today, ' . time();
        $expected = $this->news->toArray();
        $expected['title'] = $new_title;
        $expected['content'] = $new_content;
        unset($expected['updated_at']);

        $this->updateNews(['title' => $new_title, 'content' => $new_content])
            ->seeStatusCode(200)
            ->seeJsonContains($expected);

        $this->notSeeInDatabase('news', ['id' => $this->news->id, 'title' => $this->news->title, 'content' => $this->news->content]);
        $this->seeInDatabase('news', ['id' => $this->news->id, 'title' => $new_title, 'content' => $new_content]);
    }

    public function testWithFiles() {
        $files = [];
        for ($i = 0; $i < 3; $i++) {
            $files[] = UploadedFile::fake()->create('Test' . $i);
        }

        $headers = ['Authorization' => 'Bearer ' . $this->tokenWithRole('admin')];
        $res = $this->call('PUT', '/api/v1/news/' . $this->news->id,
        [], [], ['files' => $files], $this->transformHeadersToServerVars($headers));

        $this->seeStatusCode(200);

        $id = json_decode($res->getContent(), true)['id'];
        foreach ($files as $file) {
            /** @var UploadedFile $file */
            $this->seeInDatabase('uploaded_files', ['fileable_id' => $id, 'fileable_type' => 'news', 'name' => $file->getClientOriginalName()]);
        }
    }

    public function testUpdateFlexibleColumnValues() {
        $column = new FlexibleColumn();
        $column->name = 'Favorite color';
        $column->type_id = ColumnType::whereName('string')->first()->id;
        $column->flexible_table_id = FlexibleTable::news()->id;
        $column->save();

        $flexible_column_values = [
            [
                'column_id' => $column->id,
                'value' => 'Green'
            ]
        ];


        $this->updateNews(['flexible_column_values' => $flexible_column_values])
            ->seeStatusCode(200);

        $this->news = $this->news->refresh();

        $this->assertCount(1, $this->news->flexible_column_values);
        $this->assertEquals($flexible_column_values, $this->news->flexible_column_values->toArray());
    }

    public function testUpdateExistingFlexibleColumnValues() {
        $columns = [];
        foreach (['Favorite color', 'Sport', 'Favorite shape'] as $column_name) {
            $column = new FlexibleColumn();
            $column->name = $column_name;
            $column->type_id = ColumnType::whereName('string')->first()->id;
            $column->flexible_table_id = FlexibleTable::news()->id;
            $column->save();

            $columns[] = $column;
        }

        $this->news->flexible_column_values()->createMany([['column_id' => $columns[0]->id, 'value' => 'red'], ['column_id' => $columns[1]->id, 'value' => 'nonexisting']]);
        $this->news->save();

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

        $this->updateNews(['flexible_column_values' => $flexible_column_values])
            ->seeStatusCode(200);

        $this->news = $this->news->refresh();

        $this->assertCount(3, $this->news->flexible_column_values);
        $this->assertEquals($flexible_column_values, $this->news->flexible_column_values->toArray());
    }

    public function testDeleteFlexibleColumnValues() {
        $column = new FlexibleColumn();
        $column->name = 'Favorite color';
        $column->type_id = ColumnType::whereName('string')->first()->id;
        $column->flexible_table_id = FlexibleTable::news()->id;
        $column->save();

        $this->news->flexible_column_values()->create(['column_id' => $column->id, 'value' => 'Green']);

        $this->updateNews(['flexible_column_values' => []])
            ->seeStatusCode(200);

        $this->news = $this->news->refresh();

        $this->assertCount(0, $this->news->flexible_column_values);
        $this->assertEquals([], $this->news->flexible_column_values->toArray());
    }

    private function updateNews(array $parameters = []) {
        return $this->asBoard('PUT', '/api/v1/news/' . $this->news->id, $parameters);
    }
}
