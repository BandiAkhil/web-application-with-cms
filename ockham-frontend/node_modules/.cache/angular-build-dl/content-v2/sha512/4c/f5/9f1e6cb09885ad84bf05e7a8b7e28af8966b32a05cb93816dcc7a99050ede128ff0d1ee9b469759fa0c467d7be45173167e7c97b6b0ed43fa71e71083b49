(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-members-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/members/add-member-modal/add-member-modal.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/members/add-member-modal/add-member-modal.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Member created</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>Member with ID <b>{{ id }}</b> created.</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\">Close</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/members/archive-member-modal/archive-member-modal.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/members/archive-member-modal/archive-member-modal.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Archive member</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>Are you sure you want to archive {{ member.first_name + ' ' + (member.insertion ? member.insertion + ' ' : '') + member.last_name }}?</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-archive\" (click)=\"onArchive()\">Archive</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/members/member-form/member-form.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/members/member-form/member-form.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"member && member.archived_at\">\n  <div class=\"col-12\">\n    <div class=\"alert alert-archive\">\n      This member has been archived at {{ member.archived_at }}.\n    </div>\n  </div>\n</div>\n<app-arrow-back routerLink=\"/admin/members\"></app-arrow-back>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h1 *ngIf=\"isEditRoute()\">Edit Member</h1>\n    <h1 *ngIf=\"isAddRoute()\">Add Member</h1>\n  </div>\n</div>\n<form [formGroup]=\"memberForm\" (ngSubmit)=\"onSave()\">\n  <div class=\"row\">\n    <div class=\"col-md-5 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"first-name\">First name*</label>\n        <input id=\"first-name\" type=\"text\" class=\"form-control\" formControlName=\"first_name\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.first_name.errors }\">\n        <div *ngIf=\"submitted && f.first_name.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.first_name.errors.required\">First name is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-2 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"insertion\">Insertion</label>\n        <input id=\"insertion\" type=\"text\" class=\"form-control\" formControlName=\"insertion\">\n      </div>\n    </div>\n    <div class=\"col-md-5 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"last-name\">Last name*</label>\n        <input id=\"last-name\" type=\"text\" class=\"form-control\" formControlName=\"last_name\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.last_name.errors }\">\n        <div *ngIf=\"submitted && f.last_name.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.last_name.errors.required\">Last name is required</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"initials\">Initials*</label>\n        <input id=\"initials\" type=\"text\" class=\"form-control\" formControlName=\"initials\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.initials.errors }\">\n        <div *ngIf=\"submitted && f.initials.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.initials.errors.required\">Initials is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"phone-number\">Phone number</label>\n        <input id=\"phone-number\" type=\"tel\" class=\"form-control\" formControlName=\"phone_number\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"address\">Address</label>\n        <input id=\"address\" type=\"text\" class=\"form-control\" formControlName=\"address\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"zip-code\">Zip code</label>\n        <input id=\"zip-code\" type=\"text\" class=\"form-control\" formControlName=\"zip_code\">\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"residence\">Residence</label>\n        <input id=\"residence\" type=\"text\" class=\"form-control\" formControlName=\"residence\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"country\">Country</label>\n        <input id=\"country\" type=\"text\" class=\"form-control\" formControlName=\"country\">\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email*</label>\n        <input id=\"email\" type=\"email\" class=\"form-control\" formControlName=\"email\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n          <div *ngIf=\"f.email.errors.email\">Invalid email</div>\n          <div *ngIf=\"f.email.errors.alreadyInUse\">Email is already registered</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr/>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"memberable_type\" id=\"student\" value=\"student\" formControlName=\"memberable_type\">\n        <label class=\"form-check-label\" for=\"student\">Student</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"memberable_type\" id=\"teacher\" value=\"teacher\" formControlName=\"memberable_type\">\n        <label class=\"form-check-label\" for=\"teacher\">Teacher</label>\n      </div>\n    </div>\n  </div>\n\n  <div [hidden]=\"memberType !== 'student'\" [formGroup]=\"studentForm\" class=\"pt-4\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <div class=\"form-group\">\n          <label for=\"study-program\">Study program*</label>\n          <select id=\"study-program\" class=\"form-control\" formControlName=\"study_program_id\"\n                  [ngClass]=\"{ 'is-invalid': studentSubmitted && sf.study_program_id.errors }\">\n            <option *ngFor=\"let p of studyPrograms\" [value]=\"p.id\">\n              {{ p.full_name }} ({{ p.short_name }})\n            </option>\n          </select>\n          <div *ngIf=\"studentSubmitted && sf.study_program_id.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"sf.study_program_id.errors.required\">Study program is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <div class=\"form-group\">\n          <label for=\"student-number\">Student number*</label>\n          <input id=\"student-number\" type=\"text\" class=\"form-control\" formControlName=\"student_number\"\n                 [ngClass]=\"{ 'is-invalid': studentSubmitted && sf.student_number.errors }\">\n          <div *ngIf=\"studentSubmitted && sf.student_number.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"sf.student_number.errors.required\">Student number is required</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <div class=\"form-group\">\n          <label for=\"programme\">Group Honours programme*</label>\n          <div>\n            <div class=\"form-check form-check-inline\">\n              <input id=\"bachelor\" class=\"form-check-input\" type=\"radio\" name=\"track\" value=\"bachelor\" formControlName=\"track\"\n                     [ngClass]=\"{ 'is-invalid': studentSubmitted && sf.track.errors }\">\n              <label class=\"form-check-label\" for=\"bachelor\">BSc</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input id=\"master\" class=\"form-check-input\" type=\"radio\" name=\"track\" value=\"master\" formControlName=\"track\"\n                     [ngClass]=\"{ 'is-invalid': studentSubmitted && sf.track.errors }\">\n              <label class=\"form-check-label\" for=\"master\">MSc</label>\n            </div>\n            <div class=\"form-group\">\n              <input id=\"programme\" type=\"number\" class=\"form-control\" formControlName=\"track_number\"\n                     [ngClass]=\"{ 'is-invalid': studentSubmitted && sf.track_number.errors }\">\n              <div *ngIf=\"studentSubmitted && sf.track_number.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"sf.track_number.errors.required\">Track number is required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div [hidden]=\"memberType !== 'teacher'\" [formGroup]=\"teacherForm\" class=\"pt-4\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <div class=\"form-group\">\n          <label for=\"department\">Department/Chair*</label>\n          <input id=\"department\" type=\"text\" class=\"form-control\" formControlName=\"department\"\n                 [ngClass]=\"{ 'is-invalid': teacherSubmitted && tf.department.errors }\">\n          <div *ngIf=\"teacherSubmitted && tf.department.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"tf.department.errors.required\">Department is required</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <div class=\"form-group\">\n          <label for=\"employee-number\">Employee number*</label>\n          <input id=\"employee-number\" type=\"text\" class=\"form-control\" formControlName=\"employee_number\"\n                 [ngClass]=\"{ 'is-invalid': teacherSubmitted && tf.employee_number.errors }\">\n          <div *ngIf=\"teacherSubmitted && tf.employee_number.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"tf.employee_number.errors.required\">Employee number is required</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr/>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-check\">\n        <input id=\"photos-allowed\" type=\"checkbox\" class=\"form-check-input\" formControlName=\"photos_allowed\">\n        <label class=\"form-check-label\" for=\"photos-allowed\">Allow H.V. Ockham to take pictures during activities and publish these on the website.</label>\n      </div>\n    </div>\n  </div>\n  <div class=\"row pt-4\">\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"place\">Place*</label>\n        <input id=\"place\" type=\"text\" class=\"form-control\" formControlName=\"location_signup\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.location_signup.errors }\">\n        <div *ngIf=\"submitted && f.location_signup.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.location_signup.errors.required\">Place is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"date-of-membership\">Date of membership*</label>\n        <div class=\"input-group\">\n          <input id=\"date-of-membership\" class=\"form-control date-picker-input\" matInput [matDatepicker]=\"picker\" formControlName=\"date_of_membership\"\n                 [ngClass]=\"{ 'is-invalid': submitted && f.date_of_membership.errors }\">\n          <div *ngIf=\"submitted && f.date_of_membership.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.date_of_membership.errors.required\">Date of membership is required</div>\n          </div>\n          <div class=\"input-group-prepend\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr/>\n  <div class=\"row\" *ngIf=\"!sepa && (bankAccountForm.value.iban || bankAccountForm.value.debtor_name || bankAccountForm.value.bic)\">\n    <div class=\"col-md-12\">\n      <div class=\"alert alert-warning\">\n        <i class=\"material-icons text-icon\">\n          warning\n        </i>\n        Unchecking SEPA Authorization will delete it.\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"form-check\">\n        <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"sepa\" (change)=\"sepa = !sepa\">\n        <h5>SEPA Authorization (Optional)</h5>\n      </div>\n    </div>\n  </div>\n  <div class=\"container sepa-container\" [hidden]=\"!sepa\" [formGroup]=\"bankAccountForm\">\n    <div class=\"row pb-4\">\n      <div class=\"col-md-12\">\n        <div class=\"form-check\">\n          <input id=\"authorization-contribution\" type=\"checkbox\" class=\"form-check-input\" formControlName=\"authorization_contribution\">\n          <label class=\"form-check-label\" for=\"authorization-contribution\">\n            I authorize HONOURS VERENIGING OCKHAM to send recurrent collection instructions to my bank to debit my account and\n            I authorize my bank to debit my account on a recurrent basis in accordance with the contribution collection instructions\n            from HONOURS VERENIGING OCKHAM. As part of your rights, you are entitled to a refund from your bank under the terms\n            and conditions of your agreement with your bank. A refund must be claimed within 8 weeks starting from the date on\n            which your account was debited.\n          </label>\n        </div>\n      </div>\n    </div>\n    <div class=\"row pt-4\">\n      <div class=\"col-md-12\">\n        <div class=\"form-check\">\n          <input id=\"authorization-other\" type=\"checkbox\" class=\"form-check-input\" formControlName=\"authorization_other\">\n          <label class=\"form-check-label\" for=\"authorization-other\">\n            I also want to authorize HONOURS VERENIGING OCKHAM to send recurrent collection instructions to my bank concerning\n            debt other than contribution.\n          </label>\n        </div>\n      </div>\n    </div>\n    <div class=\"row pt-4\">\n      <div class=\"col-md-6 col-sm-12\">\n        <div class=\"form-group\">\n          <label for=\"debtor-name\">Debtor name*</label>\n          <input id=\"debtor-name\" type=\"text\" class=\"form-control\" formControlName=\"debtor_name\"\n                 [ngClass]=\"{ 'is-invalid': sepaSubmitted && bf.debtor_name.errors }\">\n          <div *ngIf=\"sepaSubmitted && bf.debtor_name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"bf.debtor_name.errors.required\">Debtor name is required</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-8 col-sm-12\">\n        <label for=\"iban\">IBAN*</label>\n        <input id=\"iban\" type=\"text\" class=\"form-control\" formControlName=\"iban\"\n               [ngClass]=\"{ 'is-invalid': sepaSubmitted && bf.iban.errors }\">\n        <div *ngIf=\"sepaSubmitted && bf.iban.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"bf.iban.errors.required\">IBAN is required</div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-12\">\n        <label for=\"bic\">BIC</label>\n        <input id=\"bic\" type=\"text\" class=\"form-control\" formControlName=\"bic\">\n      </div>\n    </div>\n  </div>\n  <hr/>\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"remark\">Remark</label>\n        <textarea rows=\"4\" id=\"remark\" type=\"text\" class=\"form-control\" formControlName=\"remark\"></textarea>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"role\">Role*</label>\n        <select id=\"role\" class=\"form-control\" formControlName=\"role_id\" [ngClass]=\"{ 'is-invalid': submitted && f.role_id.errors }\">>\n          <option *ngFor=\"let r of roles\" [value]=\"r.id\">\n            {{ r.name | snakeCaseToText }}\n          </option>\n        </select>\n        <div *ngIf=\"submitted && f.role_id.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.role_id.errors.required\">Role is required</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr/>\n  <app-flexible-column-form model=\"members\" formControlName=\"flexible_column_values\"></app-flexible-column-form>\n  <div class=\"row pt-3\">\n    <div class=\"col-auto\">\n      <button type=\"submit\" class=\"btn btn-success\">Save</button>\n    </div>\n    <div class=\"col-auto\" *ngIf=\"isAddRoute()\">\n      <button class=\"btn btn-success\" type=\"button\" (click)=\"onSave(true)\">Save and add another member</button>\n    </div>\n    <div class=\"col-auto\" *ngIf=\"isEditRoute()\">\n      <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteMember()\">Delete this member</button>\n    </div>\n    <div class=\"col-auto\" *ngIf=\"isEditRoute()\">\n      <button class=\"btn btn-archive\" type=\"button\" (click)=\"archiveMember()\">Archive this member</button>\n    </div>\n    <div class=\"col-auto ml-auto\">\n      <button class=\"btn btn-primary\" type=\"button\" routerLink=\"/admin/members\">Cancel</button>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/members/members.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/members/members.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-arrow-back routerLink=\"/admin\"></app-arrow-back>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h1>Manage members</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-pagination-table \n      [data]=\"members\" \n      [headers]=\"headers\" \n      [keys]=\"columns\" \n      [showActionColumn]=\"true\" [showArchiveButton]=\"true\"\n      (edit)=\"editMember($event)\" \n      (delete)=\"deleteMember($event)\"\n      (archive)=\"archiveMember($event)\"></app-pagination-table>\n  </div>\n</div>\n\n<div class=\"row pt-4\">\n  <div class=\"col-auto\">\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"add\">\n      <i class=\"material-icons btn-icon\">\n        add\n      </i>\n      Add member\n    </button>\n  </div>\n  <div class=\"col-auto ml-auto\">\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"columns\">\n      <i class=\"material-icons btn-icon\">\n        storage\n      </i>\n      Manage extra columns\n    </button>\n  </div>\n  <div class=\"col-auto\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"fileUpload.click()\">\n      <i class=\"material-icons btn-icon\">\n        cloud_upload\n      </i>\n      Import members\n    </button>\n  </div>\n  <div class=\"col-auto\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"getMembersExport()\">\n      <i class=\"material-icons btn-icon\">\n        cloud_download\n      </i>\n      Export members\n    </button>\n  </div>\n</div>\n\n<div class=\"d-none\">\n  <input type=\"file\" #fileUpload accept=\"text/csv\" (change)=\"onMembersImport($event.target.files)\">\n</div>\n");

/***/ }),

/***/ "./src/app/core/services/default-batch.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/default-batch.service.ts ***!
  \********************************************************/
/*! exports provided: DefaultBatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBatchService", function() { return DefaultBatchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");



let DefaultBatchService = class DefaultBatchService {
    constructor() {
        this.baseYear = new Date(2019, 9, 1);
        this.defaultBatchNumber = 11;
    }
    setValue(batch) {
        this.defaultBatchNumber = batch;
    }
    getValue() {
        return this.defaultBatchNumber + Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["differenceInYears"])(new Date(), this.baseYear);
    }
};
DefaultBatchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DefaultBatchService);



/***/ }),

/***/ "./src/app/core/services/role.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/role.service.ts ***!
  \***********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let RoleService = class RoleService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = '/api/v1/roles';
    }
    get roles() {
        if (!this.cache$) {
            this.cache$ = this.fetchRoles().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        }
        return this.cache$;
    }
    fetchRoles() {
        return this.httpClient.get(this.baseUrl);
    }
};
RoleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RoleService);



/***/ }),

/***/ "./src/app/core/services/study-program.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/study-program.service.ts ***!
  \********************************************************/
/*! exports provided: StudyProgramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyProgramService", function() { return StudyProgramService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let StudyProgramService = class StudyProgramService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = '/api/v1/study-programs';
    }
    get studyPrograms() {
        if (!this.cache$) {
            this.cache$ = this.fetchStudyPrograms().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        }
        return this.cache$;
    }
    fetchStudyPrograms() {
        return this.httpClient.get(this.baseUrl);
    }
};
StudyProgramService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
StudyProgramService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], StudyProgramService);



/***/ }),

/***/ "./src/app/modules/admin/members/add-member-modal/add-member-modal.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/admin/members/add-member-modal/add-member-modal.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVtYmVycy9hZGQtbWVtYmVyLW1vZGFsL2FkZC1tZW1iZXItbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/members/add-member-modal/add-member-modal.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/members/add-member-modal/add-member-modal.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddMemberModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMemberModalComponent", function() { return AddMemberModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let AddMemberModalComponent = class AddMemberModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    close() {
        this.activeModal.close();
    }
};
AddMemberModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AddMemberModalComponent.prototype, "delete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AddMemberModalComponent.prototype, "id", void 0);
AddMemberModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-member-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-member-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/members/add-member-modal/add-member-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-member-modal.component.scss */ "./src/app/modules/admin/members/add-member-modal/add-member-modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], AddMemberModalComponent);



/***/ }),

/***/ "./src/app/modules/admin/members/archive-member-modal/archive-member-modal.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/members/archive-member-modal/archive-member-modal.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVtYmVycy9hcmNoaXZlLW1lbWJlci1tb2RhbC9hcmNoaXZlLW1lbWJlci1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/members/archive-member-modal/archive-member-modal.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin/members/archive-member-modal/archive-member-modal.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ArchiveMemberModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveMemberModalComponent", function() { return ArchiveMemberModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ArchiveMemberModalComponent = class ArchiveMemberModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.archive = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onArchive() {
        this.archive.emit();
    }
    close() {
        this.activeModal.close();
    }
};
ArchiveMemberModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ArchiveMemberModalComponent.prototype, "member", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ArchiveMemberModalComponent.prototype, "archive", void 0);
ArchiveMemberModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-archive-member-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./archive-member-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/members/archive-member-modal/archive-member-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./archive-member-modal.component.scss */ "./src/app/modules/admin/members/archive-member-modal/archive-member-modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], ArchiveMemberModalComponent);



/***/ }),

/***/ "./src/app/modules/admin/members/member-form/member-form.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin/members/member-form/member-form.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVtYmVycy9tZW1iZXItZm9ybS9tZW1iZXItZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/members/member-form/member-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin/members/member-form/member-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: MemberFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberFormComponent", function() { return MemberFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/member.service */ "./src/app/core/services/member.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _add_member_modal_add_member_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../add-member-modal/add-member-modal.component */ "./src/app/modules/admin/members/add-member-modal/add-member-modal.component.ts");
/* harmony import */ var src_app_core_services_role_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/role.service */ "./src/app/core/services/role.service.ts");
/* harmony import */ var _core_services_study_program_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/services/study-program.service */ "./src/app/core/services/study-program.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _core_services_default_batch_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/default-batch.service */ "./src/app/core/services/default-batch.service.ts");
/* harmony import */ var src_app_core_services_column_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/column.service */ "./src/app/core/services/column.service.ts");













let MemberFormComponent = class MemberFormComponent {
    constructor(memberService, roleService, studyProgramService, columnService, route, router, notifierService, modalService, defaultBatchService) {
        this.memberService = memberService;
        this.roleService = roleService;
        this.studyProgramService = studyProgramService;
        this.columnService = columnService;
        this.route = route;
        this.router = router;
        this.notifierService = notifierService;
        this.modalService = modalService;
        this.defaultBatchService = defaultBatchService;
        this.studyPrograms = [];
        this.roles = [];
        this.extraColumns = [];
        this.memberForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            insertion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            initials: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            zip_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            residence: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            photos_allowed: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            date_of_membership: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            role_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            location_signup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            memberable_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('student', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            flexible_column_values: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([])
        });
        this.studentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            study_program_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            student_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            track: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('bachelor', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            track_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.teacherForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            employee_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.bankAccountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            authorization_contribution: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            authorization_other: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            debtor_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            iban: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            bic: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.sepa = false;
        this.submitted = false;
        this.sepaSubmitted = false;
        this.studentSubmitted = false;
        this.teacherSubmitted = false;
    }
    ngOnInit() {
        this.route.data.subscribe(({ mode }) => {
            this.mode = mode;
            if (this.isEditRoute()) {
                this.route.paramMap.subscribe(params => {
                    this.memberService.getMember(params.get('id'))
                        .subscribe(member => {
                        this.member = member;
                        this.memberForm.patchValue(member);
                        this.memberForm.patchValue({
                            flexible_column_values: member.flexible_columns
                        });
                        this.memberForm.patchValue({
                            role_id: member.role.id
                        });
                        if (member.bank_account) {
                            this.sepa = true;
                            this.bankAccountForm.patchValue(member.bank_account);
                        }
                        if (member.memberable_type === 'student') {
                            this.studentForm.patchValue(member.memberable);
                            this.studentForm.patchValue({
                                track: member.memberable.batch_bhp ? 'bachelor' : 'master',
                                track_number: member.memberable.batch_bhp || member.memberable.batch_mhp,
                                study_program_id: member.memberable.study_program.id
                            });
                        }
                        else {
                            this.teacherForm.patchValue(member.memberable);
                        }
                    });
                });
            }
            else {
                this.studentForm.patchValue({
                    track_number: this.defaultBatchService.getValue()
                });
                this.columnService.getColumns('members').subscribe(columns => this.memberForm.patchValue({ flexible_column_values: columns }));
            }
        });
        this.roleService.roles.subscribe(roles => {
            this.roles = roles;
            if (!this.memberForm.value.role_id) {
                this.memberForm.patchValue({ role_id: roles.find(r => r.name === 'general_member').id });
            }
        });
        this.studyProgramService.studyPrograms.subscribe(studyPrograms => this.studyPrograms = studyPrograms);
    }
    get f() { return this.memberForm.controls; }
    get bf() { return this.bankAccountForm.controls; }
    get sf() { return this.studentForm.controls; }
    get tf() { return this.teacherForm.controls; }
    get memberType() {
        return this.memberForm.value.memberable_type;
    }
    onSave(addAnother = false) {
        this.submitted = true;
        this.sepaSubmitted = this.sepa;
        this.studentSubmitted = this.memberType === 'student';
        this.teacherSubmitted = this.memberType === 'teacher';
        if (this.memberForm.invalid ||
            (this.sepa && this.bankAccountForm.invalid) ||
            (this.memberType === 'student' && this.studentForm.invalid) ||
            (this.memberType === 'teacher' && this.teacherForm.invalid)) {
            return;
        }
        const member = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.memberForm.value);
        member.bank_account = this.sepa ? this.bankAccountForm.value : null;
        if (member.memberable_type === 'student') {
            const memberable = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["cloneDeep"])(this.studentForm.value);
            if (memberable.track === 'bachelor') {
                memberable.batch_bhp = memberable.track_number;
            }
            else {
                memberable.batch_mhp = memberable.track_number;
            }
            delete memberable.track;
            delete memberable.track_number;
            member.memberable = memberable;
        }
        else if (member.memberable_type === 'teacher') {
            member.memberable = this.teacherForm.value;
        }
        else {
            // Should never occur
            console.error("Unknown type: " + member.memberable_type);
        }
        for (const key in member) {
            if (member.hasOwnProperty(key) && member[key] === '') {
                member[key] = null; // Ensures that no empty values are sent to the backend, but null values
            }
        }
        if (this.isAddRoute()) {
            this.defaultBatchService.setValue(+this.studentForm.value.track_number);
            this.memberService.createMember(member)
                .subscribe(({ id }) => {
                const modalRef = this.modalService.open(_add_member_modal_add_member_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddMemberModalComponent"]);
                modalRef.componentInstance.id = id;
                modalRef.result.then(() => {
                    if (addAnother) {
                        // TODO: change?
                        window.location.reload();
                    }
                    else {
                        this.router.navigate(['/admin/members']);
                    }
                });
            }, error => {
                // TODO: better way of checking error?
                if (error.status === 400) {
                    this.f.email.setErrors({ 'alreadyInUse': true });
                    this.notifierService.notify('error', 'The email address is already registered.');
                }
                else {
                    this.notifierService.notify('error', 'Could not register member. Please try again later.');
                }
            });
        }
        else {
            this.memberService.updateMember(member, this.member.id)
                .subscribe(() => {
                this.router.navigate(['/admin/members']).then(() => {
                    this.notifierService.notify('default', 'The member has been updated.');
                });
            }, error => {
                // TODO: better way of checking error?
                if (error.status === 400) {
                    this.f.email.setErrors({ 'alreadyInUse': true });
                    this.notifierService.notify('error', 'The email address is already registered.');
                }
                else {
                    this.notifierService.notify('error', 'Could not update member. Please try again later.');
                }
            });
        }
    }
    deleteMember() {
        this.memberService.deleteMember(this.member.id)
            .subscribe(() => {
            this.router.navigate(['/admin/members']).then(() => {
                this.notifierService.notify('default', 'The member has been deleted.');
            });
        });
    }
    archiveMember() {
        this.memberService.archiveMember(this.member.id)
            .subscribe(() => {
            this.router.navigate(['/admin/members']).then(() => {
                this.notifierService.notify('default', 'The member has been deleted.');
            });
        });
    }
    isAddRoute() {
        return this.mode === 'add';
    }
    isEditRoute() {
        return this.mode === 'edit';
    }
};
MemberFormComponent.ctorParameters = () => [
    { type: src_app_core_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"] },
    { type: src_app_core_services_role_service__WEBPACK_IMPORTED_MODULE_8__["RoleService"] },
    { type: _core_services_study_program_service__WEBPACK_IMPORTED_MODULE_9__["StudyProgramService"] },
    { type: src_app_core_services_column_service__WEBPACK_IMPORTED_MODULE_12__["ColumnService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _core_services_default_batch_service__WEBPACK_IMPORTED_MODULE_11__["DefaultBatchService"] }
];
MemberFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/members/member-form/member-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-form.component.scss */ "./src/app/modules/admin/members/member-form/member-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"],
        src_app_core_services_role_service__WEBPACK_IMPORTED_MODULE_8__["RoleService"],
        _core_services_study_program_service__WEBPACK_IMPORTED_MODULE_9__["StudyProgramService"],
        src_app_core_services_column_service__WEBPACK_IMPORTED_MODULE_12__["ColumnService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
        _core_services_default_batch_service__WEBPACK_IMPORTED_MODULE_11__["DefaultBatchService"]])
], MemberFormComponent);



/***/ }),

/***/ "./src/app/modules/admin/members/members-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin/members/members-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MembersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersRoutingModule", function() { return MembersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members.component */ "./src/app/modules/admin/members/members.component.ts");
/* harmony import */ var _member_form_member_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./member-form/member-form.component */ "./src/app/modules/admin/members/member-form/member-form.component.ts");





const routes = [
    {
        path: '',
        component: _members_component__WEBPACK_IMPORTED_MODULE_3__["MembersComponent"]
    },
    {
        path: 'add',
        component: _member_form_member_form_component__WEBPACK_IMPORTED_MODULE_4__["MemberFormComponent"],
        data: {
            mode: 'add'
        }
    },
    {
        path: ':id/edit',
        component: _member_form_member_form_component__WEBPACK_IMPORTED_MODULE_4__["MemberFormComponent"],
        data: {
            mode: 'edit'
        }
    },
    {
        path: 'columns',
        loadChildren: () => Promise.all(/*! import() | columns-columns-module */[__webpack_require__.e("common"), __webpack_require__.e("columns-columns-module")]).then(__webpack_require__.bind(null, /*! ../columns/columns.module */ "./src/app/modules/admin/columns/columns.module.ts")).then(m => m.ColumnsModule),
        data: {
            model: 'members'
        }
    }
];
let MembersRoutingModule = class MembersRoutingModule {
};
MembersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MembersRoutingModule);



/***/ }),

/***/ "./src/app/modules/admin/members/members.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/admin/members/members.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbGJhbmRpL0Rlc2t0b3AvRGVzaWduIFByb2plY3Qvb2NraGFtLWZyb250ZW5kL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi9tZW1iZXJzL21lbWJlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/admin/members/members.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/admin/members/members.component.ts ***!
  \************************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/member.service */ "./src/app/core/services/member.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/delete-modal/delete-modal.component */ "./src/app/shared/components/delete-modal/delete-modal.component.ts");
/* harmony import */ var _archive_member_modal_archive_member_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./archive-member-modal/archive-member-modal.component */ "./src/app/modules/admin/members/archive-member-modal/archive-member-modal.component.ts");








let MembersComponent = class MembersComponent {
    constructor(memberService, notifierService, router, modalService) {
        this.memberService = memberService;
        this.notifierService = notifierService;
        this.router = router;
        this.modalService = modalService;
        this.members = [];
        this.columnNames = [
            { key: 'id', name: 'ID' }, { key: 'first_name', name: 'First name' }, { key: 'insertion', name: 'Insertion' },
            { key: 'last_name', name: 'Last name' }, { key: 'initials', name: 'Initials' }, { key: 'email', name: 'Email' },
            { key: 'role.name', name: 'Role' }
        ];
    }
    get columns() {
        return this.columnNames.map(c => c.key);
    }
    get headers() {
        return this.columnNames.map(c => c.name);
    }
    ngOnInit() {
        this.getMembers();
    }
    getMembers() {
        this.memberService.getMembers()
            .subscribe(members => {
            this.members = members;
        });
    }
    getMembersExport() {
        this.memberService.getMembersExport()
            .subscribe(response => {
            const blob = new Blob([response.body], { type: 'text/csv' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = this.getFileName(response);
            link.click();
        });
    }
    onMembersImport(files) {
        const file = files.item(0);
        this.memberService.importMembers(file)
            .subscribe(() => {
            this.notifierService.notify('default', 'The members have been successfully imported.');
            this.getMembers();
        }, error => {
            this.notifierService.notify('error', `An error occurred: ${error.error.message}`);
        });
    }
    getFileName(httpResponse) {
        const contentDispositionHeader = httpResponse.headers.get('Content-Disposition');
        const result = contentDispositionHeader.split(';')[1].trim().split('=')[1];
        return result.replace(/"/g, '');
    }
    editMember(row) {
        this.router.navigate([`/admin/members/${row.id}/edit`]);
    }
    deleteMember(row) {
        const modalRef = this.openDeleteModal();
        modalRef.componentInstance.objRef = 'this member';
        modalRef.componentInstance.delete.subscribe(() => {
            this.memberService.deleteMember(row.id).subscribe(() => {
                this.notifierService.notify('default', 'Member successfully deleted.');
                this.getMembers();
            });
        });
    }
    archiveMember(row) {
        const modalRef = this.openArchiveModal();
        modalRef.componentInstance.member = row;
        modalRef.componentInstance.archive.subscribe(() => {
            this.memberService.archiveMember(row.id).subscribe(() => {
                modalRef.close();
                this.notifierService.notify('default', 'Member successfully archived.');
                this.getMembers();
            });
        });
    }
    openDeleteModal() {
        return this.modalService.open(src_app_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_6__["DeleteModalComponent"]);
    }
    openArchiveModal() {
        return this.modalService.open(_archive_member_modal_archive_member_modal_component__WEBPACK_IMPORTED_MODULE_7__["ArchiveMemberModalComponent"]);
    }
};
MembersComponent.ctorParameters = () => [
    { type: _core_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
];
MembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-members',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./members.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/members/members.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./members.component.scss */ "./src/app/modules/admin/members/members.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
], MembersComponent);



/***/ }),

/***/ "./src/app/modules/admin/members/members.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/admin/members/members.module.ts ***!
  \*********************************************************/
/*! exports provided: MembersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersModule", function() { return MembersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _members_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members-routing.module */ "./src/app/modules/admin/members/members-routing.module.ts");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members.component */ "./src/app/modules/admin/members/members.component.ts");
/* harmony import */ var _member_form_member_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./member-form/member-form.component */ "./src/app/modules/admin/members/member-form/member-form.component.ts");
/* harmony import */ var _add_member_modal_add_member_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-member-modal/add-member-modal.component */ "./src/app/modules/admin/members/add-member-modal/add-member-modal.component.ts");
/* harmony import */ var _archive_member_modal_archive_member_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./archive-member-modal/archive-member-modal.component */ "./src/app/modules/admin/members/archive-member-modal/archive-member-modal.component.ts");








let MembersModule = class MembersModule {
};
MembersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_members_component__WEBPACK_IMPORTED_MODULE_4__["MembersComponent"], _member_form_member_form_component__WEBPACK_IMPORTED_MODULE_5__["MemberFormComponent"], _add_member_modal_add_member_modal_component__WEBPACK_IMPORTED_MODULE_6__["AddMemberModalComponent"], _archive_member_modal_archive_member_modal_component__WEBPACK_IMPORTED_MODULE_7__["ArchiveMemberModalComponent"]],
        imports: [
            _members_routing_module__WEBPACK_IMPORTED_MODULE_3__["MembersRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ],
        entryComponents: [
            _add_member_modal_add_member_modal_component__WEBPACK_IMPORTED_MODULE_6__["AddMemberModalComponent"],
            _archive_member_modal_archive_member_modal_component__WEBPACK_IMPORTED_MODULE_7__["ArchiveMemberModalComponent"]
        ]
    })
], MembersModule);



/***/ })

}]);
//# sourceMappingURL=members-members-module-es2015.js.map