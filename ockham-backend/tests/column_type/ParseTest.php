<?php


namespace column_type;


use App\Entities\FlexibleColumns\ColumnType;
use Carbon\Carbon;
use TestCase;

class ParseTest extends TestCase {

    public function testValidString() {
        $type = ColumnType::string();
        $value = 'Test';
        $this->assertNotNull($type->parse($value));
        $this->assertEquals($value, $type->parse($value));
    }

    public function testValidBoolean() {
        $type = ColumnType::boolean();
        $value = true;
        $parsed = $type->parse($value);
        $this->assertNotNull($parsed);
        $this->assertEquals($value, $parsed);
    }

    public function testValidInteger() {
        $type = ColumnType::integer();
        $value = 42;
        $parsed = $type->parse($value);
        $this->assertNotNull($parsed);
        $this->assertEquals($value, $parsed);
    }

    public function testValidDouble() {
        $type = ColumnType::double();
        $value = 3.14;
        $parsed = $type->parse($value);
        $this->assertNotNull($parsed);
        $this->assertEquals($value, $parsed);
    }

    public function testValidDate() {
        $type = ColumnType::date();
        $value = Carbon::now();
        $parsed = $type->parse($value);
        $this->assertNotNull($parsed);
        $this->assertEquals($value, $parsed);
    }

    public function testParseValidBoolean() {
        $type = ColumnType::boolean();

        foreach (['true', '1'] as $value) {
            $parsed = $type->parse($value);
            $this->assertNotNull($parsed);
            $this->assertEquals(true, $parsed);
        }

        foreach (['false', '0'] as $value) {
            $parsed = $type->parse($value);
            $this->assertNotNull($parsed);
            $this->assertEquals(false, $parsed);
        }
    }

    public function testInvalidBoolean() {
        $type = ColumnType::boolean();

        foreach (['Hello', 42, 3.14, Carbon::now(), null] as $value) {
            $parsed = $type->parse($value);
            $this->assertNull($parsed);
        }
    }

    public function testParseValidInteger() {
        $type = ColumnType::integer();
        $value = '42';
        $parsed = $type->parse($value);
        $this->assertNotNull($parsed);
        $this->assertEquals(intval($value), $parsed);
        $this->assertTrue(is_int($parsed));

        $value = '-22';
        $parsed = $type->parse($value);
        $this->assertNotNull($parsed);
        $this->assertEquals(intval($value), $parsed);
        $this->assertTrue(is_int($parsed));
    }

    public function testInvalidInteger() {
        $type = ColumnType::integer();

        foreach (['Hello', 3.14, '3.14', Carbon::now(), null] as $value) {
            $parsed = $type->parse($value);
            $this->assertNull($parsed);
        }
    }

    public function testParseValidDouble() {
        $type = ColumnType::double();

        $value = '3.14';
        $parsed = $type->parse($value);
        $this->assertNotNull($parsed);
        $this->assertEquals(doubleval($value), $parsed);

        $value = '3';
        $parsed = $type->parse($value);
        $this->assertNotNull($parsed);
        $this->assertEquals(doubleval($value), $parsed);
    }

    public function testInvalidDouble() {
        $type = ColumnType::double();

        foreach (['Hello', Carbon::now(), null] as $value) {
            $parsed = $type->parse($value);
            $this->assertNull($parsed);
        }
    }

    public function testParseValidDate() {
        $type = ColumnType::date();

        $value = '01-01-2020';
        $parsed = $type->parse($value);
        $this->assertNotNull($value);
        $this->assertEquals(Carbon::parse($value), $parsed);
    }

    public function testInvalidDate() {
        $type = ColumnType::date();
        $value = 'Hello';
        foreach (['Hello', null] as $value) {
            $parsed = $type->parse($value);
            $this->assertNull($parsed);
        }
    }
}
