<?php


namespace App\Http\Controllers;


use App\Entities\ActivityRegistration;
use App\Entities\BankAccount;
use App\Entities\Committee;
use App\Entities\Member;
use App\Entities\Role;
use App\Entities\Student;
use App\Entities\StudyProgram;
use App\Entities\Teacher;
use App\Services\AuthService;
use App\Mail\RegistrationMailer;
use App\Services\MailchimpService;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Laravel\Lumen\Routing\Controller;
use League\Csv\Reader;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\ConflictHttpException;
use Watson\Validating\ValidationException;

/**
 * @group Member
 *
 * API for managing members
 */
class MemberController extends Controller {

    private $authService;

    /** @var MailchimpService $mailchimpService */
    private $mailchimpService;

    public function __construct(AuthService $authService, MailchimpService $mailchimpService) {
        $this->authService = $authService;
        $this->mailchimpService = $mailchimpService;
    }

    const IMPORT_EXPORT_COLUMNS = [
        'id', 'last_name', 'insertion', 'first_name', 'initials', 'email', 'role', 'address', 'zip_code',
        'residence', 'country', 'phone_number', 'date_of_membership', 'remark', 'photos_allowed', 'location_signup',
        'member_type', 'study_program_short', 'study_program_full', 'batch_bhp', 'batch_mhp', 'student_number',
        'department', 'employee_number', 'has_bank_account', 'authorization_contribution', 'authorization_other',
        'debtor_name', 'iban', 'bic'
    ];

    /**
     * Get all members
     *
     * Requires role `committee member` or higher.
     *
     * @authenticated
     * @queryParam q Search term to filter members. Example: Tom
     * @queryParam offset Offset to be used for pagination. Example: 20
     * @queryParam limit Limits the amount of results, to be used for pagination. Example: 10
     * @response {
     *  "total": 167,
     *  "data": [
     *      {
     *          "id": 167,
     *          "email": "john.doe@example.com",
     *          "created_at": "2020-04-07 21:03:43",
     *          "updated_at": "2020-04-07 21:03:43",
     *          "last_name": "Doe",
     *          "insertion": null,
     *          "first_name": "John",
     *          "initials": "JD",
     *          "address": null,
     *          "zip_code": null,
     *          "residence": null,
     *          "country": null,
     *          "phone_number": null,
     *          "date_of_membership": "2020-04-07",
     *          "remark": null,
     *          "photos_allowed": false,
     *          "location_signup": "Enschede",
     *          "memberable_type": "student",
     *          "archived_at": null,
     *          "role": {
     *              "id": 4,
     *              "name": "general_member"
     *          },
     *          "bank_account": null,
     *          "memberable": {
     *              "id": 94,
     *              "batch_bhp": 11,
     *              "batch_mhp": null,
     *              "student_number": "s12345678",
     *              "created_at": "2020-04-07 21:03:43",
     *              "updated_at": "2020-04-07 21:03:43",
     *              "study_program": {
     *                  "id": 1,
     *                  "short_name": "TCS",
     *                  "full_name": "Technical Computer Science"
     *              }
     *          }
     *      },
     *      {
     *          "id": 166,
     *          "email": "jane.doe@example.com",
     *          "created_at": "2020-04-07 17:50:55",
     *          "updated_at": "2020-04-07 17:50:55",
     *          "last_name": "Doe",
     *          "insertion": null,
     *          "first_name": "Jane",
     *          "initials": "JD",
     *          "address": null,
     *          "zip_code": null,
     *          "residence": null,
     *          "country": null,
     *          "phone_number": null,
     *          "date_of_membership": "2020-04-07",
     *          "remark": null,
     *          "photos_allowed": false,
     *          "location_signup": "Enschede",
     *          "memberable_type": "teacher",
     *          "archived_at": null,
     *          "role": {
     *              "id": 4,
     *              "name": "general_member"
     *          },
     *          "bank_account": null,
     *          "memberable": {
     *              "id": 91,
     *              "department": "EEMCS",
     *              "employee_number": "m12345678",
     *              "created_at": "2020-04-07 17:50:55",
     *              "updated_at": "2020-04-07 17:50:55"
     *          }
     *      }
     *  ]
     * }
     */
    public function all(Request $request) {
        $members = Member::query()->orderBy('created_at', 'desc');
        $total = $members->count();
        if ($request->has('q')) {
            $q = $request->input('q');
            $members->whereRaw("concat_ws(' ', first_name, insertion, last_name) ILIKE ?", ["%$q%"])
                ->orWhere('email', 'ilike', "%$q%")->get();
            $total = $members->count();
        }

        if ($request->has('offset')) {
            $members->offset($request->input('offset'));
        }

        if ($request->has('limit')) {
            $members->limit($request->input('limit'));
        }
        return [
            'total' => $total,
            'data' => $members->get()
        ];
    }

    /**
     * Get a member by ID
     *
     * Requires role `committee member` or higher. Also accessible by the member with the ID.
     *
     * @authenticated
     * @urlParam id required the ID of the member. Example: 1
     * @response {
     *  "id": 1,
     *  "email": "john.doe@example.com",
     *  "created_at": "2020-04-07 12:12:41",
     *  "updated_at": "2020-04-07 12:12:41",
     *  "last_name": "Doe",
     *  "insertion": null,
     *  "first_name": "John",
     *  "initials": "JD",
     *  "address": "Drienerlolaan 5",
     *  "zip_code": "7522 NB",
     *  "residence": "Enschede",
     *  "country": "Netherlands",
     *  "phone_number": "06-12345678",
     *  "date_of_membership": "2020-04-07",
     *  "remark": "The best student",
     *  "photos_allowed": true,
     *  "location_signup": "Enschede",
     *  "memberable_type": "student",
     *  "archived_at": null,
     *  "flexible_columns": [
     *      {
     *          "id": 3,
     *          "name": "Birthday",
     *          "value": null,
     *          "type": {
     *              "id": 1,
     *              "name": "string"
     *          }
     *      }
     *  ],
     *  "role": {
     *      "id": 1,
     *      "name": "admin"
     *  },
     *  "bank_account": {
     *      "id": 1,
     *      "member_id": 1,
     *      "debtor_name": "Hr J Doe",
     *      "iban": "NL91ABNA0417164300",
     *      "bic": null,
     *      "authorization_contribution": true,
     *      "authorization_other": true,
     *      "created_at": "2020-04-07 12:12:41",
     *      "updated_at": "2020-04-07 12:12:41"
     *  },
     *  "memberable": {
     *      "id": 1,
     *      "batch_bhp": 3,
     *      "batch_mhp": null,
     *      "student_number": "s1234567",
     *      "created_at": "2020-04-07 12:12:41",
     *      "updated_at": "2020-04-07 12:12:41",
     *      "study_program": {
     *          "id": 1,
     *          "short_name": "TCS",
     *          "full_name": "Technical Computer Science"
     *      }
     *  },
     *  "committees": []
     * }
     */
    public function find(int $id) {
        return Member::query()->with('committees')->findOrFail($id)->append('flexible_columns');
    }

    /**
     * Get the committees of a member.
     *
     * Requires role `committee member` or higher. Also accessible by the member with the ID.
     *
     * @authenticated
     * @urlParam id required the ID of the member. Example: 1
     * @response [
     *  {
     *      "id": 1,
     *      "name": "TechniCie",
     *      "description": "This is an example committee",
     *      "created_at": "2020-04-01 18:27:34",
     *      "updated_at": "2020-04-01 18:27:34"
     *  },
     *  {
     *      "id": 2,
     *      "name": "Accie",
     *      "description": "This is another example committee",
     *      "created_at": "2020-04-01 18:27:34",
     *      "updated_at": "2020-04-01 18:27:34"
     *  }
     * ]
     */
    public function committees(int $id) {
        $member = $this->find($id);
        if ($member->isBoard()) {
            return Committee::all();
        }
        return $member->committees;
    }

    /**
     * Register a member
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @bodyParam first_name string required The first name. Example: Jan
     * @bodyParam last_name string required The last name. Example: Jong
     * @bodyParam initials string required The initials. Example: JJ
     * @bodyParam email string required The email address. This field should be unique. Example: jan.jong@example.com
     * @bodyParam date_of_membership string required The date of membership. Example: 02-04-2020
     * @bodyParam location_signup string required The location of the signup. Example: Enschede
     * @bodyParam role_id int required The role ID, an existing ID in the `roles` table. Example: 1
     * @bodyParam memberable_type string required The type of member, either `student` or `teacher`. Example: student
     * @bodyParam memberable object required Depending on the `memberable_type`, either a `student` object or a `teacher` object.
     * @bodyParam insertion string The insertion. Example: de
     * @bodyParam address string The address. Example: Drienerlolaan 5
     * @bodyParam zip_code string The ZIP code. Example: 7522 NB
     * @bodyParam residence string The residence. Example: Enschede
     * @bodyParam country string The country. Example: Netherlands
     * @bodyParam phone_number string The phone number. Example: 06-12345678
     * @bodyParam remark string A remark about the member. Example: The best student
     * @bodyParam photos_allowed boolean Whether the member allows photos of him/her to be taken. Defaults to `false`. Example: true
     * @bodyParam bank_account object The bankaccount.
     * @bodyParam flexible_column_values array An array of flexible column values, in the following format:<br>{<br>&nbsp;&nbsp;"column_id": "<flexible_column_id\>",<br>&nbsp;&nbsp;"value": "<value\>"<br>}
     * @response 201 {
     *  "id": 1,
     *  "email": "john.doe@example.com",
     *  "created_at": "2020-04-07 12:12:41",
     *  "updated_at": "2020-04-07 12:12:41",
     *  "last_name": "Doe",
     *  "insertion": null,
     *  "first_name": "John",
     *  "initials": "JD",
     *  "address": "Drienerlolaan 5",
     *  "zip_code": "7522 NB",
     *  "residence": "Enschede",
     *  "country": "Netherlands",
     *  "phone_number": "06-12345678",
     *  "date_of_membership": "2020-04-07",
     *  "remark": "The best student",
     *  "photos_allowed": true,
     *  "location_signup": "Enschede",
     *  "memberable_type": "student",
     *  "archived_at": null,
     *  "flexible_columns": [
     *      {
     *          "id": 3,
     *          "name": "Birthday",
     *          "value": null,
     *          "type": {
     *              "id": 1,
     *              "name": "string"
     *          }
     *      }
     *  ],
     *  "role": {
     *      "id": 1,
     *      "name": "admin"
     *  },
     *  "bank_account": {
     *      "id": 1,
     *      "member_id": 1,
     *      "debtor_name": "Hr J Doe",
     *      "iban": "NL91ABNA0417164300",
     *      "bic": null,
     *      "authorization_contribution": true,
     *      "authorization_other": true,
     *      "created_at": "2020-04-07 12:12:41",
     *      "updated_at": "2020-04-07 12:12:41"
     *  },
     *  "memberable": {
     *      "id": 1,
     *      "batch_bhp": 3,
     *      "batch_mhp": null,
     *      "student_number": "s1234567",
     *      "created_at": "2020-04-07 12:12:41",
     *      "updated_at": "2020-04-07 12:12:41",
     *      "study_program": {
     *          "id": 1,
     *          "short_name": "TCS",
     *          "full_name": "Technical Computer Science"
     *      }
     *  },
     *  "committees": []
     * }
     * @response 400 {
     *  "error": true,
     *  "message": "Unknown memberable type: <type>"
     * }
     */
    public function create(Request $request) {
        if (!$request->has(['memberable_type', 'memberable'])) {
            throw new BadRequestHttpException("'memberable_type' and/or 'memberable' missing.");
        }

        $member = new Member();
        $member->fill($request->all());

        $memberable_type = $request->input('memberable_type');

        if (!in_array($memberable_type, ['student', 'teacher'])) {
            throw new BadRequestHttpException("Unknown memberable type: $memberable_type.");
        }

        DB::transaction(function() use ($member, $memberable_type, $request) {
            $memberable = Relation::getMorphedModel($memberable_type)::create($request->input('memberable'));
            $member->memberable()->associate($memberable);

            $token = $member->createPasswordResetToken();

            if ($request->has('flexible_column_values')) {
                $member->flexible_column_values()->createMany($request->input('flexible_column_values'));
            }

            if ($request->has('bank_account') && null != $request->input('bank_account')) {
                $bank_account = new BankAccount();
                $bank_account->fill($request->input('bank_account'));
                $bank_account->member_id = $member->id;
                $bank_account->save();
            }

            Mail::send(new RegistrationMailer($member, $token));
        });

        $this->mailchimpService->subscribe(env('DEFAULT_MAILING_LIST_ID'), $member->email);

        return response()->json($member->append('flexible_columns')->load('bank_account'), 201);
    }

    /**
     * Change password of a member.
     *
     * Only accessible by the member with the ID.
     *
     * @authenticated
     * @bodyParam old_password string required The old password.
     * @bodyParam new_password string required The new password. The new password should contain at least one letter, one number and one special character. Also, it must consist of at least eight characters.
     * @response 204 {}
     * @response 400 {
     *  "error": true,
     *  "message": "Old password or new password missing."
     * }
     * @response 400 {
     *  "error": true,
     *  "message": "The new password must have a length of at least 8 characters and must contain at least one letter, number and special character."
     * }
     * @response 409 {
     *  "error": true,
     *  "message": "Incorrect old password."
     * }
     */
    public function changePassword(Request $request, int $id) {
        if (!$request->has(['old_password', 'new_password'])) {
            throw new BadRequestHttpException('Old password or new password missing.');
        }

        $member = Member::query()->find($id);
        if (null == $member) {
            throw $this->notFound($id);
        }
        $old_password = $request->input('old_password');

        if (!Hash::check($old_password, $member->password)) {
            throw new ConflictHttpException('Incorrect old password.');
        }

        $new_password = $request->input('new_password');
        if (!$this->authService->isValidPassword($new_password)) {
            throw new BadRequestHttpException('The new password must have a length of at least 8 characters and must contain at least one letter, number and special character.');
        }

        $member->password = Hash::make($new_password);
        $member->save();
        return response('', 204);
    }

    /**
     * Update a member
     *
     * Requires role `board member` or higher. Some fields can be updated by the member with the ID.
     *
     * @authenticated
     * @bodyParam first_name string The first name. Example: Jan
     * @bodyParam last_name string The last name. Example: Jong
     * @bodyParam initials string The initials. Example: JJ
     * @bodyParam email string The email address. This field should be unique. Example: jan.jong@example.com
     * @bodyParam date_of_membership string The date of membership. Example: 02-04-2020
     * @bodyParam location_signup string The location of the signup. Example: Enschede
     * @bodyParam role_id int The role ID, an existing ID in the `roles` table. Example: 1
     * @bodyParam memberable_type string The type of member, either `student` or `teacher`. Example: student
     * @bodyParam memberable object Depending on the `memberable_type`, either a `student` object or a `teacher` object.
     * @bodyParam insertion string The insertion. Example: de
     * @bodyParam address string The address. Example: Drienerlolaan 5
     * @bodyParam zip_code string The ZIP code. Example: 7522 NB
     * @bodyParam residence string The residence. Example: Enschede
     * @bodyParam country string The country. Example: Netherlands
     * @bodyParam phone_number string The phone number. Example: 06-12345678
     * @bodyParam remark string A remark about the member. Example: The best student
     * @bodyParam photos_allowed boolean Whether the member allows photos of him/her to be taken. Defaults to `false`. Example: true
     * @bodyParam bank_account object The bankaccount.
     * @bodyParam flexible_column_values array An array of flexible column values, in the following format:<br>{<br>&nbsp;&nbsp;"column_id": "<flexible_column_id\>",<br>&nbsp;&nbsp;"value": "<value\>"<br>}
     * @response {
     *  "id": 1,
     *  "email": "john.doe@example.com",
     *  "created_at": "2020-04-07 12:12:41",
     *  "updated_at": "2020-04-07 12:12:41",
     *  "last_name": "Doe",
     *  "insertion": null,
     *  "first_name": "John",
     *  "initials": "JD",
     *  "address": "Drienerlolaan 5",
     *  "zip_code": "7522 NB",
     *  "residence": "Enschede",
     *  "country": "Netherlands",
     *  "phone_number": "06-12345678",
     *  "date_of_membership": "2020-04-07",
     *  "remark": "The best student",
     *  "photos_allowed": true,
     *  "location_signup": "Enschede",
     *  "memberable_type": "student",
     *  "archived_at": null,
     *  "flexible_columns": [
     *      {
     *          "id": 3,
     *          "name": "Birthday",
     *          "value": null,
     *          "type": {
     *              "id": 1,
     *              "name": "string"
     *          }
     *      }
     *  ],
     *  "role": {
     *      "id": 1,
     *      "name": "admin"
     *  },
     *  "bank_account": {
     *      "id": 1,
     *      "member_id": 1,
     *      "debtor_name": "Hr J Doe",
     *      "iban": "NL91ABNA0417164300",
     *      "bic": null,
     *      "authorization_contribution": true,
     *      "authorization_other": true,
     *      "created_at": "2020-04-07 12:12:41",
     *      "updated_at": "2020-04-07 12:12:41"
     *  },
     *  "memberable": {
     *      "id": 1,
     *      "batch_bhp": 3,
     *      "batch_mhp": null,
     *      "student_number": "s1234567",
     *      "created_at": "2020-04-07 12:12:41",
     *      "updated_at": "2020-04-07 12:12:41",
     *      "study_program": {
     *          "id": 1,
     *          "short_name": "TCS",
     *          "full_name": "Technical Computer Science"
     *      }
     *  },
     *  "committees": []
     * }
     * @response 400 {
     *  "error": true,
     *  "message": "Unknown memberable type: <type>"
     * }
     */
    public function update(Request $request, int $id) {
        $member = $this->find($id);

        DB::beginTransaction();

        $fillable = $request->auth->isBoard()
            ? $request->all()
            : $request->all(['first_name', 'insertion', 'last_name', 'initials', 'email', 'phone_number',
                             'address', 'zip_code', 'residence', 'country']);

        $member->update($fillable);

        // Only board members can update some attributes
        if ($request->auth->isBoard()) {
            $member->update($request->all());

            if ($request->has(['memberable'])) {
                $memberable_type = $request->input('memberable_type');

                if (null == $memberable_type || $memberable_type === $member->memberable_type) {
                    $member->memberable->update($request->input('memberable'));
                } elseif ($memberable_type === 'student' || $memberable_type === 'teacher') {
                    $member->memberable->delete();
                    $memberable = Relation::getMorphedModel($memberable_type)::create($request->input('memberable'));
                    $member->memberable()->associate($memberable);
                } else {
                    throw new BadRequestHttpException('Unknown memberable type: ' . $memberable_type);
                }
            }

            if ($request->has('bank_account')) {
                $bank_account = $member->bank_account;

                if (null == $request->input('bank_account')) {
                    if (null != $bank_account) {
                        $bank_account->delete();
                    }
                } else {
                    if (null == $bank_account) {
                        $bank_account = new BankAccount();
                        $bank_account->member_id = $member->id;
                    }
                    $bank_account->fill($request->input('bank_account'));
                    $bank_account->save();
                }
            }
        }

        if ($request->has('flexible_column_values')) {
            $member->flexible_column_values()->delete();
            $member->flexible_column_values()->createMany($request->input('flexible_column_values'));
        }

        $member->save();

        DB::commit();
        return $member->load('bank_account')->append('flexible_columns');
    }

    /**
     * Delete a member
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @urlParam id required The ID of the member. Example: 1
     * @response 204
     */
    public function delete(int $id) {
        $member = $this->find($id);

        $member->delete();
        $member->memberable->delete();
        return response("", 204);
    }

    /**
     * Archive a member
     *
     * Requires role `board member` or higher. Disables the ability to login for this member and deletes certain fields from the database.
     *
     * @authenticated
     * @urlParam id required The ID of the member. Example: 1
     * @response 200 {}
     */
    public function archive(int $id) {
        $member = $this->find($id);
        if ($member->isArchived()) {
            throw new ConflictHttpException('The members is already archived.');
        }
        $member->archive();
        return $member;
    }

    /**
     * Import members from a CSV file
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @bodyParam data file required The CSV file to be imported.
     * @response 204
     * @response 400 {
     *  "error": true,
     *  "message": "The file is missing."
     * }
     * @response 400 {
     *  "error": true,
     *  "message": "Error processing row <row index>: <reason>. No data was imported."
     * }
     */
    public function import(Request $request) {
        $members = [];
        DB::transaction(function () use ($request, $members) {
            if (!$request->hasFile('data')) {
                throw new BadRequestHttpException('The file is missing.');
            }

            $path = $request->file('data')->getRealPath();

            /** @var Reader $csv */
            $csv = Reader::createFromPath($path, 'r');
            $csv->setHeaderOffset(0);

            $rowIndex = 1; // Index starts at 1 to be easier understandable.

            $requiredColumns = ['email', 'role', 'last_name', 'first_name', 'initials', 'date_of_membership',
                'location_signup', 'member_type'];

            foreach ($csv as $row) {
                foreach ($requiredColumns as $column) {
                    if (!array_key_exists($column, $row) || empty($row[$column])) {
                        throw $this->importError($rowIndex, "column '$column' does not exist or is empty");
                    }
                }

                foreach ($row as &$value) {
                    if (empty($value)) {
                        $value = null;
                    }
                }

                if (Member::whereEmail($row['email'])->exists()) {
                    throw $this->importError($rowIndex, "the email address '${$row['email']}' is already registered");
                }

                if (!Role::whereName($row['role'])->exists()) {
                    throw $this->importError($rowIndex, "the role '{$row['role']}' is unknown");
                }

                $member = new Member();
                $member->fill($row);
                $member->role_id = Role::whereName($row['role'])->first()->id;

                $member_type = $row['member_type'];
                if ($member_type === 'teacher') {
                    try {
                        $teacher = Teacher::create([
                            'department' => $row['department'] ?? null,
                            'employee_number' => $row['employee_number'] ?? null
                        ]);
                        $member->memberable()->associate($teacher);
                    } catch (ValidationException $e) {
                        throw $this->importError($rowIndex, 'invalid teacher attributes');
                    }

                } elseif ($member_type === 'student') {
                    if (empty($row['study_program_short']) || empty($row['study_program_full'])) {
                        throw $this->importError($rowIndex, "'study_program_short' or 'study_program_full' is missing");
                    }

                    $study_program = StudyProgram::whereShortName($row['study_program_short'])->firstOrCreate([
                        'short_name' => $row['study_program_short'],
                        'full_name' => $row['study_program_full']
                    ]);

                    try {
                        $student = Student::create([
                            'study_program_id' => $study_program->id,
                            'student_number' => $row['student_number'] ?? null,
                            'batch_bhp' => is_numeric($row['batch_bhp']) ? intval($row['batch_bhp']) : null,
                            'batch_mhp' => is_numeric($row['batch_mhp']) ? intval($row['batch_mhp']) : null,
                        ]);
                        $member->memberable()->associate($student);
                    } catch (ValidationException $e) {
                        throw $this->importError($rowIndex, 'invalid student attributes');
                    }
                } else {
                    throw $this->importError($rowIndex, "member type '$member_type' is invalid");
                }

                $member->save();

                if (isset($row['has_bank_account']) && $row['has_bank_account'] === 'true') {
                    try {
                        $member->bank_account()->create([
                            'authorization_contribution' => boolval($row['authorization_contribution']) ?? null,
                            'authorization_other' => boolval($row['authorization_other']) ?? null,
                            'debtor_name' => $row['debtor_name'] ?? null,
                            'iban' => $row['iban'] ?? null,
                            'bic' => $row['bic'] ?? null
                        ]);
                    } catch (ValidationException $e) {
                        throw $this->importError($rowIndex, 'invalid bank account');
                    }
                }

                $members[] = $member;
                $rowIndex++;
            }
        });

        foreach ($members as $member) {
            $token = $member->createPasswordResetToken();
            try {
                Mail::send(new RegistrationMailer($member, $token));
            } catch (\Exception $e) {
                // Ignore exception thrown, as the members are already saved.
            }
            $this->mailchimpService->subscribe(env('DEFAULT_MAILING_LIST_ID'), $member->email);
        }

        return response('', 204);
    }

    private function importError(int $rowIndex, string $message) {
        return new BadRequestHttpException("Error processing row $rowIndex: $message. No data was imported.");
    }

    /**
     * Export members to a CSV file
     *
     * Requires role `board member` or higher.
     *
     * @authenticated
     * @response file
     */
    public function export() {
        $file_name = str_replace([' ', ':'], ['_', '-'], Carbon::now()->toDateTimeString());
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename=export-' . $file_name .'.csv',
            'Pragma' => 'no-cache',
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Expires' => '0'
        ];

        $members = Member::all();

        $callback = function() use ($members) {
            $file = fopen('php://output', 'w');
            fputcsv($file, self::IMPORT_EXPORT_COLUMNS);

            foreach ($members as $member) {
                $fields = [
                    $member->id,
                    $member->last_name,
                    $member->insertion,
                    $member->first_name,
                    $member->initials,
                    $member->email,
                    $member->role->name,
                    $member->address,
                    $member->zip_code,
                    $member->residence,
                    $member->country,
                    $member->phone_number,
                    $member->date_of_membership,
                    $member->remark,
                    $member->photos_allowed ? 'true' : 'false',
                    $member->location_signup,
                    $member->memberable_type
                ];

                $is_teacher = $member->memberable_type === 'teacher';

                $fields[] = $is_teacher ? '' : $member->memberable->study_program->short_name ?? '';
                $fields[] = $is_teacher ? '' : $member->memberable->study_program->full_name ?? '';
                $fields[] = $is_teacher ? '' : $member->memberable->batch_bhp;
                $fields[] = $is_teacher ? '' : $member->memberable->batch_mhp;
                $fields[] = $is_teacher ? '' : $member->memberable->student_number;

                $fields[] = $is_teacher ? $member->memberable->department : '';
                $fields[] = $is_teacher ? $member->memberable->employee_number : '';

                $has_bank_account = $member->bank_account()->exists();
                $fields[] = $has_bank_account ? 'true' : 'false';

                if ($member->bank_account()->exists()) {
                    $bank_account = $member->bank_account;
                    array_push($fields, ...[
                        $bank_account->authorization_contribution ? 'true' : 'false',
                        $bank_account->authorization_other ? 'true' : 'false',
                        $bank_account->debtor_name,
                        $bank_account->iban,
                        $bank_account->bic
                    ]);
                } else {
                    for ($i = 0; $i < 5; $i++) {
                        $fields[] = '';
                    }
                }

                fputcsv($file, $fields);
            }
            fclose($file);
        };
        return response()->stream($callback, 200, $headers);
    }

    /**
     * Get the activity registrations of a member.
     *
     * Requires role `committee member` or higher. Also accessible by the member with the ID.
     *
     * @authenticated
     * @urlParam id required The ID of the member. Example: 1
     * @response [
     *  {
     *      "id": 1,
     *      "notes": "I want my bitterballen vegan!",
     *      "paid": false,
     *      "created_at": "2020-04-02 17:25:12",
     *      "updated_at": "2020-04-02 17:25:12",
     *      "answers": [
     *          {
     *              "question": "How many bitterballen do you want?",
     *              "required": false,
     *              "type": {
     *                  "id": 3,
     *                  "name": "integer"
     *              },
     *              "answer": 12,
     *              "option_id": 139,
     *              "created_at": "2020-04-02 17:25:12",
     *              "updated_at": "2020-04-02 17:25:12"
     *          }
     *      ],
     *      "activity": "<Activity Object>"
     *  },
     *  {
     *      "id": 2,
     *      "notes": null,
     *      "paid": true,
     *      "created_at": "2020-04-02 17:25:12",
     *      "updated_at": "2020-04-02 17:25:12",
     *      "answers": [
     *          {
     *              "question": "Do you want food?",
     *              "required": true,
     *              "type": {
     *                  "id": 2,
     *                  "name": "boolean"
     *              },
     *              "answer": true,
     *              "option_id": 140,
     *              "created_at": "2020-04-02 17:25:12",
     *              "updated_at": "2020-04-02 17:25:12"
     *          }
     *      ],
     *      "activity": "<Activity Object>"
     *  }
     * ]
     */
    public function registrations($id, Request $request) {
        $registrations = ActivityRegistration::query()
            ->where('member_id', $id)
            ->leftJoin('activities', 'activity_id', '=', 'activities.id')
            ->orderBy('start_date', 'desc');

        if ($request->has('upcoming_only') && $request->input('upcoming_only') !== 'false') {
            $registrations = $registrations->where('end_date', '>', Carbon::now());
        }

        return $registrations
            ->select('activity_registrations.*')
            ->with('activity')
            ->without('member')
            ->get();
    }
}
