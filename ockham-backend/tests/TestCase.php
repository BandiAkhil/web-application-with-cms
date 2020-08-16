<?php

use App\Entities\Committee;
use App\Entities\Member;
use App\Entities\Role;
use Laravel\Lumen\Testing\DatabaseTransactions;
use Laravel\Lumen\Testing\TestCase as BaseTestCase;
use PHPUnit\Framework\Assert as PHPUnit;

abstract class TestCase extends BaseTestCase
{

    use DatabaseTransactions;

    const PASSWORD = 'password';

    const MEMBER_ATTR = [
        'id', 'email', 'created_at', 'updated_at', 'role', 'last_name',
        'insertion', 'first_name', 'initials', 'address', 'zip_code', 'residence',
        'country', 'phone_number', 'date_of_membership', 'remark', 'photos_allowed',
        'location_signup', 'bank_account', 'memberable_type', 'memberable'
    ];

    /**
     * Creates the application.
     *
     * @return \Laravel\Lumen\Application
     */
    public function createApplication()
    {
        return require __DIR__.'/../bootstrap/app.php';
    }

    protected function login(array $parameters = []) {
        return $this->json('POST', '/api/v1/auth/login', $parameters);
    }

    protected function tokenWithRole($role) {
        $role_obj = Role::whereName($role)->first();
        $member = factory(Member::class)->create([
            'role_id' => $role_obj->id
        ]);
        $this->assertEquals($role, $role_obj->name);
        return $this->token($member);
    }

    protected function token(Member $member) {
        return json_decode($this->call('POST', '/api/v1/auth/login', ['email' => $member->email, 'password' => self::PASSWORD])->content(), true)['token'];
    }

    protected function asAdmin($method, $path, $parameters = [], $headers = []) {
        return $this->asRole('admin', $method, $path, $parameters, $headers);
    }

    protected function asBoard($method, $path, $parameters = [], $headers = []) {
        return $this->asRole('board', $method, $path, $parameters, $headers);
    }

    protected function asGeneralMember($method, $path, $parameters = [], $headers = []) {
        return $this->asRole('general_member', $method, $path, $parameters, $headers);
    }

    protected function asRole($role, $method, $path, $parameters = [], $headers = []) {
        $headers['Authorization'] = 'Bearer ' . $this->tokenWithRole($role);
        return $this->json($method, $path, $parameters, $headers);
    }

    protected function asMember(Member $member, $method, $path, $parameters = [], $headers = []) {
        $headers['Authorization'] = 'Bearer ' . $this->token($member);
        return $this->json($method, $path, $parameters, $headers);
    }

    /** @deprecated  */
    protected function withAuth($method, $path, $parameters = [], $headers = []) {
        $headers['Authorization'] = 'Bearer ' . $this->tokenWithRole('general_member');
        return $this->json($method, $path, $parameters, $headers);
    }

    protected function requiresAuth($method, $path, $parameters = [], $headers = []) {
        $this->json($method, $path, $parameters, $headers);
        $this->assertEquals(401, $this->response->status());
        return $this;
    }

    protected function doesntRequireAuth($method, $path, $parameters = [], $headers = []) {
        $this->json($method, $path, $parameters, $headers);
        $this->assertNotEquals(401, $this->response->status());
        return $this;
    }

    protected function accessibleAsAdmin(...$params) {
        $this->asAdmin(...$params);
        $this->assertNotEquals(403, $this->response->status(), $this->response->content());
    }

    protected function accessibleAsBoard(...$params) {
        $this->asBoard(...$params);
        $this->assertNotEquals(403, $this->response->status(), $this->response->content());
    }

    protected function accessibleAsGeneralMember(...$params) {
        $this->asGeneralMember(...$params);
        $this->assertNotEquals(403, $this->response->status(), $this->response->content());
    }

    protected function notAccessibleAsAdmin(...$params) {
        $this->asAdmin(...$params);
        $this->assertEquals(403, $this->response->status());
    }

    protected function notAccessibleAsBoard(...$params) {
        $this->asBoard(...$params);
        $this->assertEquals(403, $this->response->status());
    }

    protected function notAccessibleAsGeneralMember(...$params) {
        $this->asGeneralMember(...$params);
        $this->assertEquals(403, $this->response->status());
    }

    protected function accessibleBy(Member $member, ...$params) {
        $this->asMember($member, ...$params);
        $this->assertNotEquals(403, $this->response->status(), $this->response->content());
    }

    protected function accessibleAsCommitteeMember(Committee $committee, ...$params) {
        $member = $committee->members()->firstOr(function() {return factory(\App\Entities\Member::class)->state('general_member')->create();});
        return $this->accessibleBy($member, ...$params);
    }

    /**
     * Assert that the JSON response does not have a given structure.
     * Negation of seeJsonStructure in \Laravel\Lumen\Testing\Concerns\MakesHttpRequests.
     *
     * @param  array|null  $structure
     * @param  array|null  $responseData
     * @return $this
     */
    public function dontSeeJsonStructure(array $structure = null, $responseData = null) {
        if (is_null($structure)) {
            return $this->dontSeeJson();
        }

        if (!is_array($responseData)) {
            $responseData = json_decode($this->response->getContent(), true);
        }

        foreach ($structure as $key => $value) {
            if (is_array($value) && $key === '*') {
                PHPUnit::assertIsArray($responseData);

                foreach ($responseData as $responseDataItem) {
                    $this->dontSeeJsonStructure($structure['*'], $responseDataItem);
                }
            } elseif (is_array($value)) {
                PHPUnit::assertArrayNotHasKey($key, $responseData);
                $this->dontSeeJsonStructure($structure[$key], $responseData[$key]);
            } else {
                PHPUnit::assertArrayNotHasKey($value, $responseData);
            }
        }

        return $this;
    }

    protected function notAccessibleBy(Member $member, ...$params) {
        $this->asMember($member, ...$params);
        $this->assertEquals(403, $this->response->status(), $this->response->content());
    }

    public function seeJsonLength(int $length, array $responseData = null) {
        if ($length < 0) {
            return;
        }

        if (!is_array($responseData)) {
            $responseData = json_decode($this->response->getContent(), true);
        }
        // Difference between sequential and associative arrays
        $actualLength = array_keys($responseData) === range(0, count($responseData) - 1) ? count($responseData) : 1;

        PHPUnit::assertEquals($length, $actualLength);
    }

    public function seeJsonLongerThan(int $length, array $responseData = null) {
        if ($length < 0) {
            return;
        }

        if (!is_array($responseData)) {
            $responseData = json_decode($this->response->getContent(), true);
        }
        // Difference between sequential and associative arrays
        $actualLength = array_keys($responseData) === range(0, count($responseData) - 1) ? count($responseData) : 1;

        PHPUnit::assertGreaterThan($length, $actualLength);
    }

    public function arrayWithoutKeys($keys, array $array): array {
        if (!is_array($keys)) {
            $keys = [$keys];
        }

        foreach ($keys as $key) {
            unset($array[$key]);
        }
        return $array;
    }
}
