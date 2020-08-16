(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-account-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/account-information/account-information.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/account-information/account-information.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAccountAccountInformationAccountInformationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Information</h3>\n<form [formGroup]=\"accountForm\">\n  <div class=\"form-row\">\n    <div class=\"col-md-8 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"first-name\">First name</label>\n        <input id=\"first-name\" type=\"text\" class=\"form-control\" formControlName=\"first_name\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.first_name.errors }\">\n        <div *ngIf=\"submitted && f.first_name.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.first_name.errors.required\">First name is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"insertion\">Insertion</label>\n        <input id=\"insertion\" type=\"text\" class=\"form-control\" formControlName=\"insertion\">\n      </div>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col-md-8 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"last-name\">Last name</label>\n        <input id=\"last-name\" type=\"text\" class=\"form-control\" formControlName=\"last_name\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.last_name.errors }\">\n        <div *ngIf=\"submitted && f.last_name.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.last_name.errors.required\">Last name is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"initials\">Initials</label>\n        <input id=\"initials\" type=\"text\" class=\"form-control\" formControlName=\"initials\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.initials.errors }\">\n        <div *ngIf=\"submitted && f.initials.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.initials.errors.required\">Initials is required</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col-md-6 col-xs-12\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input id=\"email\" type=\"email\" class=\"form-control\" formControlName=\"email\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\n        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.email.errors.required\">Email is required</div>\n          <div *ngIf=\"f.email.errors.email\">Invalid email</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-xs-12\">\n      <div class=\"form-group\">\n        <label for=\"phone-number\">Phone number</label>\n        <input id=\"phone-number\" type=\"tel\" class=\"form-control\" formControlName=\"phone_number\">\n      </div>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col-md-8 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"address\">Address</label>\n        <input id=\"address\" type=\"text\" class=\"form-control\" formControlName=\"address\">\n      </div>\n    </div>\n    <div class=\"col-md-4 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"zip-code\">Zip code</label>\n        <input id=\"zip-code\" type=\"text\" class=\"form-control\" formControlName=\"zip_code\">\n      </div>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"residence\">Residence</label>\n        <input id=\"residence\" type=\"text\" class=\"form-control\" formControlName=\"residence\">\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"residence\">Country</label>\n        <input id=\"country\" type=\"text\" class=\"form-control\" formControlName=\"country\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-auto\">\n      <button class=\"btn btn-success\" (click)=\"onUpdate()\">Update</button>\n    </div>\n    <div class=\"col-auto ml-auto\">\n      <button class=\"btn btn-outline-primary\" routerLink=\"/\">Cancel</button>\n    </div>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/account.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/account.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAccountAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"custom-padding\">\n  <div class=\"container\">\n    <h1 class=\"page-title\">My Account</h1>\n\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link pointer active\" data-toggle=\"tab\" (click)=\"setActive('details')\">Details</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link pointer\" data-toggle=\"tab\" (click)=\"setActive('mailing_lists')\">Mailing lists</a>\n      </li>\n    </ul>\n\n    <div class=\"row pt-4\" *ngIf=\"isActive('details')\">\n      <div class=\"col-md-6 col-sm-12\">\n        <app-account-information></app-account-information>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <app-change-password></app-change-password>\n      </div>\n    </div>\n\n    <div class=\"row pt-4\" *ngIf=\"isActive('mailing_lists')\">\n      <div class=\"col-12\">\n        <app-mailing-lists></app-mailing-lists>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/change-password/change-password.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/change-password/change-password.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAccountChangePasswordChangePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Change password</h3>\n<form [formGroup]=\"passwordForm\">\n  <div class=\"form-row\">\n    <div class=\"col\">\n      <div class=\"form-group\">\n        <label for=\"old-password\">Old password*</label>\n        <input id=\"old-password\" type=\"password\" class=\"form-control\" formControlName=\"old_password\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.old_password.errors }\">\n        <div *ngIf=\"submitted && f.old_password.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.old_password.errors.required\">Old password is required</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col\">\n      <div class=\"form-group\">\n        <label for=\"new-password\">New password*</label>\n        <input id=\"new-password\" type=\"password\" class=\"form-control\" formControlName=\"new_password\"\n               [ngClass]=\"{ 'is-invalid': submitted && (f.new_password.errors || passwordForm.errors?.notSame) }\">\n        <div *ngIf=\"submitted && (f.new_password.errors || passwordForm.errors?.notSame)\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.new_password.errors?.required; else newPasswordSame\">New password is required</div>\n          <ng-template #newPasswordSame>\n            <div *ngIf=\"passwordForm.errors?.notSame\">Passwords don't match</div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col\">\n      <div class=\"form-group\">\n        <label for=\"repeat-password\">Repeat password*</label>\n        <input id=\"repeat-password\" type=\"password\" class=\"form-control\" formControlName=\"repeat_new_password\"\n               [ngClass]=\"{ 'is-invalid': submitted &&  (f.repeat_new_password.errors || passwordForm.errors?.notSame) }\">\n        <div *ngIf=\"submitted && (f.repeat_new_password.errors || passwordForm.errors?.notSame)\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.repeat_new_password.errors?.required; else repeatPasswordSame\">Repeat password is required</div>\n          <ng-template #repeatPasswordSame>\n            <div *ngIf=\"passwordForm.errors?.notSame\">Passwords don't match</div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-auto\">\n      <button class=\"btn btn-success\" (click)=\"onChangePassword()\">Change password</button>\n    </div>\n  </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/mailing-lists/mailing-lists.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/mailing-lists/mailing-lists.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAccountMailingListsMailingListsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3 class=\"pb-4\">Mailing lists</h3>\n<table class=\"table w-100\"> \n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let mailingList of mailingLists\">\n      <td>\n        {{ mailingList.name }}\n        &nbsp;<span class=\"badge badge-success\" *ngIf=\"mailingList.subscribed\">Subscribed</span>\n      </td>\n      <td>\n        <button type=\"button\" class=\"btn btn-sm btn-success\" *ngIf=\"!mailingList.subscribed\" (click)=\"subscribeToMailingList(mailingList)\">Subscribe</button>\n        <button type=\"button\" class=\"btn btn-sm btn-danger\" *ngIf=\"mailingList.subscribed\" (click)=\"unsubscribeFromMailingList(mailingList)\">Unsubscribe</button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n";
    /***/
  },

  /***/
  "./src/app/core/services/mailing-list.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/services/mailing-list.service.ts ***!
    \*******************************************************/

  /*! exports provided: MailingListService */

  /***/
  function srcAppCoreServicesMailingListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailingListService", function () {
      return MailingListService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let MailingListService = class MailingListService {
      // private cache$: Observable<MailingList[]> = of([
      //   {
      //     id: 'c20e394ceb',
      //     name: 'Test',
      //     subscribed: true
      //   },
      //   {
      //     id: 'c20e394ceb',
      //     name: 'Test 2',
      //     subscribed: false
      //   },
      //   {
      //     id: 'c20e394ceb',
      //     name: 'Test 3',
      //     subscribed: false
      //   },
      //   {
      //     id: 'c20e394ceb',
      //     name: 'Test 4',
      //     subscribed: true
      //   },
      //   {
      //     id: 'c20e394ceb',
      //     name: 'Test 5',
      //     subscribed: true
      //   }
      // ]);
      constructor(http) {
        this.http = http;
        this.baseUrl = 'api/v1/mailing-lists';
      }

      get mailingLists() {
        if (!this.cache$) {
          this.cache$ = this.fetchMailingLists().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        }

        return this.cache$;
      }

      fetchMailingLists() {
        return this.http.get(this.baseUrl);
      }

      subscribeToMailingList(list_id) {
        return this.http.post("".concat(this.baseUrl, "/").concat(list_id, "/subscribe"), null);
      }

      unsubscribeFromMailingList(list_id) {
        return this.http.post("".concat(this.baseUrl, "/").concat(list_id, "/unsubscribe"), null);
      }

    };

    MailingListService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    MailingListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], MailingListService);
    /***/
  },

  /***/
  "./src/app/modules/account/account-information/account-information.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/modules/account/account-information/account-information.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAccountAccountInformationAccountInformationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9hY2NvdW50LWluZm9ybWF0aW9uL2FjY291bnQtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/account/account-information/account-information.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/account/account-information/account-information.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: AccountInformationComponent */

  /***/
  function srcAppModulesAccountAccountInformationAccountInformationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountInformationComponent", function () {
      return AccountInformationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var src_app_core_services_member_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/services/member.service */
    "./src/app/core/services/member.service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);

    let AccountInformationComponent = class AccountInformationComponent {
      constructor(notifierService, authService, memberService) {
        this.notifierService = notifierService;
        this.authService = authService;
        this.memberService = memberService;
        this.accountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          insertion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          initials: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          zip_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          residence: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        });
        this.submitted = false;
      }

      ngOnInit() {
        this.authService.getUser().subscribe(user => {
          this.user = user;
          this.accountForm.patchValue(user);
        });
      }

      get f() {
        return this.accountForm.controls;
      }

      onUpdate() {
        this.submitted = true;

        if (this.accountForm.invalid) {
          return;
        }

        const user = Object.assign(Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.user), this.accountForm.value);
        this.memberService.updateMember(user, user.id).subscribe(member => {
          this.notifierService.notify('default', 'Your account has been updated.');
          this.authService.setUser(member);
        });
      }

    };

    AccountInformationComponent.ctorParameters = () => [{
      type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]
    }, {
      type: src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
    }, {
      type: src_app_core_services_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"]
    }];

    AccountInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account-information',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account-information.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/account-information/account-information.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account-information.component.scss */
      "./src/app/modules/account/account-information/account-information.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"], src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], src_app_core_services_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"]])], AccountInformationComponent);
    /***/
  },

  /***/
  "./src/app/modules/account/account-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/account/account-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: AccountRoutingModule */

  /***/
  function srcAppModulesAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function () {
      return AccountRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./account.component */
    "./src/app/modules/account/account.component.ts");

    const routes = [{
      path: '',
      component: _account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"]
    }];
    let AccountRoutingModule = class AccountRoutingModule {};
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccountRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/account/account.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/modules/account/account.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAccountAccountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/account/account.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/modules/account/account.component.ts ***!
    \******************************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppModulesAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AccountComponent = class AccountComponent {
      constructor() {
        this.active = 'details';
      }

      ngOnInit() {}

      isActive(tab) {
        return this.active === tab;
      }

      setActive(tab) {
        if (this.active === tab) return;
        this.active = tab;
      }

    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/account.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.component.scss */
      "./src/app/modules/account/account.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AccountComponent);
    /***/
  },

  /***/
  "./src/app/modules/account/account.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/account/account.module.ts ***!
    \***************************************************/

  /*! exports provided: AccountModule */

  /***/
  function srcAppModulesAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
      return AccountModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./account-routing.module */
    "./src/app/modules/account/account-routing.module.ts");
    /* harmony import */


    var _account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./account.component */
    "./src/app/modules/account/account.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/modules/account/change-password/change-password.component.ts");
    /* harmony import */


    var _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./account-information/account-information.component */
    "./src/app/modules/account/account-information/account-information.component.ts");
    /* harmony import */


    var _mailing_lists_mailing_lists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./mailing-lists/mailing-lists.component */
    "./src/app/modules/account/mailing-lists/mailing-lists.component.ts");

    let AccountModule = class AccountModule {};
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"], _account_information_account_information_component__WEBPACK_IMPORTED_MODULE_7__["AccountInformationComponent"], _mailing_lists_mailing_lists_component__WEBPACK_IMPORTED_MODULE_8__["MailingListsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], AccountModule);
    /***/
  },

  /***/
  "./src/app/modules/account/change-password/change-password.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/account/change-password/change-password.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAccountChangePasswordChangePasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/account/change-password/change-password.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/modules/account/change-password/change-password.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppModulesAccountChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var _core_services_member_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/services/member.service */
    "./src/app/core/services/member.service.ts");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var src_app_shared_validators_same_passwords_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/validators/same-passwords.validator */
    "./src/app/shared/validators/same-passwords.validator.ts");

    let ChangePasswordComponent = class ChangePasswordComponent {
      constructor(authService, memberService, notifierService) {
        this.authService = authService;
        this.memberService = memberService;
        this.notifierService = notifierService;
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          old_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
          repeat_new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, {
          validators: src_app_shared_validators_same_passwords_validator__WEBPACK_IMPORTED_MODULE_7__["samePasswords"]
        });
        this.submitted = false;
      }

      ngOnInit() {}

      get f() {
        return this.passwordForm.controls;
      }

      onChangePassword() {
        this.submitted = true;

        if (this.passwordForm.invalid) {
          return;
        }

        const data = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.passwordForm.value);
        delete data.repeat_password; // Not needed

        this.authService.getUser().subscribe(u => {
          this.memberService.changePassword(u, data).subscribe(() => {
            this.notifierService.notify('default', 'Your password has been changed.');
          }, error => {
            this.notifierService.notify('error', 'The old password is incorrect.');
          });
        });
      }

    };

    ChangePasswordComponent.ctorParameters = () => [{
      type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
    }, {
      type: _core_services_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"]
    }, {
      type: angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"]
    }];

    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/change-password/change-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-password.component.scss */
      "./src/app/modules/account/change-password/change-password.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _core_services_member_service__WEBPACK_IMPORTED_MODULE_5__["MemberService"], angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"]])], ChangePasswordComponent);
    /***/
  },

  /***/
  "./src/app/modules/account/mailing-lists/mailing-lists.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/account/mailing-lists/mailing-lists.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAccountMailingListsMailingListsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWNjb3VudC9tYWlsaW5nLWxpc3RzL21haWxpbmctbGlzdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/account/mailing-lists/mailing-lists.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/account/mailing-lists/mailing-lists.component.ts ***!
    \**************************************************************************/

  /*! exports provided: MailingListsComponent */

  /***/
  function srcAppModulesAccountMailingListsMailingListsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailingListsComponent", function () {
      return MailingListsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var src_app_core_services_mailing_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/mailing-list.service */
    "./src/app/core/services/mailing-list.service.ts");

    let MailingListsComponent = class MailingListsComponent {
      constructor(mailingListService, notifierService) {
        this.mailingListService = mailingListService;
        this.notifierService = notifierService;
      }

      ngOnInit() {
        this.getMailingLists();
      }

      getMailingLists() {
        this.mailingListService.mailingLists.subscribe(mailingLists => this.mailingLists = mailingLists);
      }

      subscribeToMailingList(mailingList) {
        this.mailingListService.subscribeToMailingList(mailingList.id).subscribe(() => {
          this.notifierService.notify('default', "You are now subscribed to ".concat(mailingList.name, "."));
          this.mailingListService.fetchMailingLists().subscribe(mailingLists => this.mailingLists = mailingLists);
        }, error => {
          this.notifierService.notify('error', "An error occurred: ".concat(error.error.message));
        });
      }

      unsubscribeFromMailingList(mailingList) {
        this.mailingListService.unsubscribeFromMailingList(mailingList.id).subscribe(() => {
          this.notifierService.notify('default', "You are now unsubscribed from ".concat(mailingList.name, "."));
          this.mailingListService.fetchMailingLists().subscribe(mailingLists => this.mailingLists = mailingLists);
        }, error => {
          this.notifierService.notify('error', "An error occurred: ".concat(error.error.message));
        });
      }

    };

    MailingListsComponent.ctorParameters = () => [{
      type: src_app_core_services_mailing_list_service__WEBPACK_IMPORTED_MODULE_3__["MailingListService"]
    }, {
      type: angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]
    }];

    MailingListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mailing-lists',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mailing-lists.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/account/mailing-lists/mailing-lists.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mailing-lists.component.scss */
      "./src/app/modules/account/mailing-lists/mailing-lists.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_mailing_list_service__WEBPACK_IMPORTED_MODULE_3__["MailingListService"], angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]])], MailingListsComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-account-account-module-es5.js.map