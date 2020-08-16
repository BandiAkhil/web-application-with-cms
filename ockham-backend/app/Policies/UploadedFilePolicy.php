<?php


namespace App\Policies;


use App\Entities\Activity;
use App\Entities\Member;
use App\Entities\UploadedFile;

class UploadedFilePolicy {

    public function update(Member $member, array $parameters) {
        return self::canAccess($member, $parameters['id']);
    }

    public function delete(Member $member, array $parameters) {
        return self::canAccess($member, $parameters['id']);
    }

    public static function canAccess(Member $member, int $id) {
        $file = UploadedFile::find($id);
        if (null == $file) {
            return true;
        }

        if ($file->fileable_type === 'activity') {
            return $member->isCommitteeMemberOf($file->fileable->committee);
        }
        return $member->isBoard();
    }
}
