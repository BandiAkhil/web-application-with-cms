<?php


namespace App\Services;


class AuthService {

    public function isValidPassword(string $password): bool {
        $containsLetter  = preg_match('/[a-zA-Z]/',    $password);
        $containsDigit   = preg_match('/\d/',          $password);
        $containsSpecial = preg_match('/[^a-zA-Z\d]/', $password);
        return strlen($password) >= 8 && $containsLetter && $containsDigit && $containsSpecial;
    }
}
