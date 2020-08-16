(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-management-activity-management-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/activity-management.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/activity-management.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-arrow-back routerLink=\"/admin\"></app-arrow-back>\n<div class=\"row justify-content-between\">\n  <div class=\"col-6\">\n    <h1>Manage activities</h1>\n  </div>\n  <div class=\"col-5\">\n    <div class=\"row justify-content-end\">\n      <div class=\"col-6\">\n        <select id=\"committee\" class=\"form-control\" [ngModel]=\"defaultCommittee\" (ngModelChange)=\"onSelectChange($event)\">\n          <option *ngFor=\"let c of committees\" [ngValue]=\"c\">\n            {{ c.name }}\n          </option>\n        </select>\n      </div>\n      <div class=\"col-auto\">\n        <button type=\"button\" class=\"btn btn-primary\" routerLink=\"./add\">\n          <i class=\"material-icons btn-icon\">\n            add\n          </i>\n          Add activity\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <!--<app-activity-list [activities]=\"activities\"></app-activity-list>-->\n    <app-pagination-table (delete)=\"onDeleteActivity($event)\" (edit)=\"editActivity($event)\"\n      [data]=\"activities\"\n      [headers]=\"['Title', 'Description', 'Start Date', 'End Date', 'Location']\"\n      [keys]=\"['title', 'description', 'start_date', 'end_date', 'location']\"\n      [showActionColumn]=\"true\"\n      [columnDefs]=\"columnDefs\"\n    >\n    </app-pagination-table>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-auto\">\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"columns\">\n      <i class=\"material-icons btn-icon\">\n        storage\n      </i>\n      Manage extra columns\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/components/activity-form/activity-form.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/components/activity-form/activity-form.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"editForm\" [formGroup]=\"activityForm\">\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-12\">\n      <label for=\"title\">Title*</label>\n      <input id=\"title\" type=\"text\" class=\"form-control\" formControlName=\"title\"\n             [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" placeholder=\"Title\">\n      <div *ngIf=\"f.title.errors && submitted\" class=\"invalid-feedback\">\n        Title is required!\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"description\">Description*</label>\n    <!-- <md-editor id=\"description\" name=\"Content\" formControlName=\"description\" [height]=\"'400px'\"\n      [options]=\"editorOptions\" required maxlength=\"1000\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\">\n    </md-editor> -->\n    <app-html-editor id=\"description\" name=\"description\" formControlName=\"description\" required\n                     [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\">\n    </app-html-editor>\n    <div *ngIf=\"f.description.errors && submitted\" class=\"invalid-feedback\">\n      Description is required!\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col\">\n      <label for=\"location\">Location*</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"location\"\n             [ngClass]=\"{ 'is-invalid': submitted && f.location.errors }\" id=\"location\">\n      <div *ngIf=\"f.location.errors && submitted\" class=\"invalid-feedback\">\n        Location is required!\n      </div>\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label for=\"start_date\">Start Date*</label>\n      <div class=\"input-group\">\n        <input class=\"form-control\" id=\"start_date\" formControlName=\"start_date\" [owlDateTime]=\"dt1\"\n               [owlDateTimeTrigger]=\"dt1\" placeholder=\"Date Time\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.start_date.errors }\">\n        <owl-date-time #dt1></owl-date-time>\n        <div *ngIf=\"f.start_date.errors && submitted\" class=\"invalid-feedback\">\n          Start date is required!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label for=\"end_date\">End Date*</label>\n      <div class=\"input-group\">\n        <input id=\"end_date\" class=\"form-control\" formControlName=\"end_date\" [owlDateTime]=\"dt2\"\n               [owlDateTimeTrigger]=\"dt2\" placeholder=\"Date Time\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.end_date.errors }\">\n        <owl-date-time #dt2></owl-date-time>\n        <div *ngIf=\"f.end_date.errors && submitted\" class=\"invalid-feedback\">\n          end date is required!\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-4\">\n      <label for=\"price\">Price*</label>\n      <input id=\"price\" type=\"number\" min=\"0\" placeholder=\"0.00€\" class=\"form-control\" formControlName=\"price\"\n             [ngClass]=\"{ 'is-invalid': submitted && f.price.errors }\">\n      <div *ngIf=\"f.price.errors && submitted\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.price.errors.pattern\">\n          Invalid price! Price should be an integer or have upto two decimal places\n        </div>\n        <div *ngIf=\"f.price.errors.required\">\n          Price is required!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group col-4\">\n      <label for=\"committee\">Committee*</label>\n      <select id=\"committee\" class=\"form-control\" formControlName=\"committee_id\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.committee_id.errors }\">\n        <option *ngFor=\"let c of committees\" [value]=\"c.id\"\n                [selected]=\"_activity ? _activity.committee.id == c.id : ''\">\n          {{ c.name }}\n        </option>\n      </select>\n      <div *ngIf=\"f.committee_id.errors && submitted\" class=\"invalid-feedback\">\n        Committee is required!\n      </div>\n    </div>\n  </div>\n  <div class=\"form-row\">\n\n    <div class=\"form-group col-md-4\">\n      <label for=\"registration_opens\">Registration opens:*</label>\n      <div class=\"input-group\">\n        <input class=\"form-control\" id=\"registration_opens\" formControlName=\"registration_opens\" [owlDateTime]=\"dt3\"\n               [owlDateTimeTrigger]=\"dt3\" placeholder=\"Date Time\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.registration_opens.errors }\">\n        <owl-date-time #dt3></owl-date-time>\n        <div *ngIf=\"f.registration_opens.errors && submitted\" class=\"invalid-feedback\">\n          registration opens is required!\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label for=\"registration_closes\">Registration closes:*</label>\n      <div class=\"input-group\">\n        <input id=\"end_date\" class=\"form-control\" formControlName=\"registration_closes\" [owlDateTime]=\"dt4\"\n               [owlDateTimeTrigger]=\"dt4\" placeholder=\"Date Time\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.registration_closes.errors }\">\n        <owl-date-time #dt4></owl-date-time>\n        <div *ngIf=\"f.registration_closes.errors && submitted\" class=\"invalid-feedback\">\n          end date is required!\n        </div>\n      </div>\n    </div>\n\n  </div>\n</form>\n<div *ngIf=\"_activity\" fxLayout=\"row\">\n  <button type=\"submit\" [disabled]=\"!formDirty\" class=\"btn btn-success\" (click)=\"onSave()\">Save changes</button>\n  <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end\">\n    <ng-content></ng-content>\n    <button class=\"btn btn-primary\" routerLink=\"/admin/activities\">Cancel</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Editing activity option</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <app-option-form #optionForm [action]=\"'edit'\" [option]=\"activityOption\" (submit)=\"editOption($event)\"></app-option-form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"save()\">Save&Close</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/components/option-form/option-form.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/components/option-form/option-form.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"optionsForm\">\n  <div [ngClass]=\"{'form-row': action == 'add'}\">\n    <div [ngClass]=\"{'form-group': true, 'col-6': action == 'add', 'col': action == 'edit'}\">\n      <label>Question</label>\n      <input type=\"text\" class=\"form-control\" formControlName=\"question\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.question.errors }\" id=\"inputCity\">\n      <div *ngIf=\"f.question.errors && submitted\" class=\"invalid-feedback\">\n        Question is required!\n      </div>\n    </div>\n    <div class=\"form-group col\">\n      <label>Type</label>\n      <select id=\"committee\" class=\"form-control\" formControlName=\"type\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\">\n        <option *ngFor=\"let t of option_types\" [value]=\"t\">\n          {{ t }}\n        </option>\n      </select>\n      <div *ngIf=\"f.type.errors && submitted\" class=\"invalid-feedback\">\n        Type is required!\n      </div>\n    </div>\n    <div class=\"form-row col align-items-center\">\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" [value]=\"false\" formControlName=\"required\" id=\"defaultCheck1\">\n        <label class=\"form-check-label\" for=\"defaultCheck1\">\n          Required\n        </label>\n      </div>\n    </div>\n    <div class=\"form-group col \">\n      <button *ngIf=\"action == 'add'\" fxFlex=\"0 0 auto\" fxFlexAlign=\"end\" type=\"button\" class=\"btn btn-primary\"\n        (click)=\"onSubmit()\">\n        <i class=\"material-icons btn-icon\">\n          add\n        </i>\n        Add option\n      </button>\n    </div>\n  </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/components/option-list/option-list.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/components/option-list/option-list.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Activity options\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently {{ options.length }} options added\n      </mat-panel-description>\n\n    </mat-expansion-panel-header>\n    <table *ngIf=\"options.length !== 0\" class=\"table table-striped table-light table-bordered w-100\">\n      <tr>\n        <th>Question</th>\n        <th>Type</th>\n        <th>Required</th>\n        <th>Actions</th>\n      </tr>\n      <tr *ngFor=\"let option of options\">\n        <td>{{ option.question }}</td>\n        <td>{{ option.type }}</td>\n        <td>{{ option.required }}</td>\n        <td>\n          <i class=\"material-icons pointer text-danger\" (click)=\"delete(option)\">\n            delete\n          </i>\n          <i class=\"material-icons pointer text-warning\" (click)=\"edit(option)\">\n            edit\n          </i>\n        </td>\n      </tr>\n    </table>\n  </mat-expansion-panel>\n</mat-accordion>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/pages/activity-overview/activity-overview.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/pages/activity-overview/activity-overview.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-activity-form (save)=\"editActivity($event)\" [activity]=\"activity\">\n  <button class=\"btn btn-danger mr-2\" (click)=\"onDelete('activity')\">Delete</button>\n</app-activity-form>\n<hr>\n<h4>Activity Options<small>(optional)</small></h4>\n<app-option-form (submit)=\"addOption($event)\" [action]=\"'add'\"></app-option-form>\n<app-option-list (editEmitter)=\"onEditOption($event)\" (deleteEmitter)=\"onDelete('option', $event)\"\n  [options]=\"activityOptions\"></app-option-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/pages/activity-registrations/activity-registrations.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/pages/activity-registrations/activity-registrations.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div fxLayout=\"row\">\n  <h6 fxFlexAlign=\"center\">Current registrations:</h6>\n  <span fxFlex></span>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"onRegisterMember()\">\n    <i class=\"material-icons btn-icon\">\n      add\n    </i>\n    Register memeber\n  </button>\n</div>\n<br>\n<app-pagination-table \n  (delete)=\"onDelete($event)\" \n  (edit)=\"onEdit($event)\" \n  [data]=\"registrations\"\n  [headers]=\"['Member', 'Notes', 'Paid']\"\n  [keys]=\"['member.email', 'notes', 'paid']\" \n  [showActionColumn]=\"true\">\n</app-pagination-table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/pages/activity-wrapper/activity-wrapper.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/pages/activity-wrapper/activity-wrapper.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-arrow-back routerLink=\"/admin/activities\"></app-arrow-back>\n<br>\n<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"details-tab\" data-toggle=\"tab\" [routerLink]=\"['./']\" \n      routerLinkActive=\"active-link\" role=\"tab\"\n     [routerLinkActiveOptions]=\"{exact:true}\">Details</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" id=\"registration-tab\" data-toggle=\"tab\" [routerLink]=\"['./registrations']\" routerLinkActive=\"active-link\" role=\"tab\"\n      aria-controls=\"registration\" aria-selected=\"false\">Registration</a>\n  </li>\n</ul>\n<div class=\"tab-content\" id=\"myTabContent\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/pages/add-activity/add-activity.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/pages/add-activity/add-activity.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-arrow-back routerLink=\"/admin/activities\"></app-arrow-back>\n<div class=\"row\">\n  <div class=\"col\">\n    <h1>Add activity</h1>\n  </div>\n</div>\n<app-activity-form #activityForm (save)=\"createActivity($event)\"></app-activity-form>\n<hr>\n<h4>Activity Options<small>(optional)</small></h4>\n<app-option-form (submit)=\"addOption($event)\" [action]=\"'add'\"></app-option-form>\n<app-option-list (editEmitter)=\"onEditOption($event)\" (deleteEmitter)=\"deleteOption($event)\" [options]=\"activityOptions\"></app-option-list>\n<div class=\"row pt-3\">\n  <div class=\"col-auto\">\n    <button type=\"submit\" class=\"btn btn-success\" (click)=\"onSave()\">Create activity</button>\n  </div>\n  <div class=\"col-auto ml-auto\">\n    <button class=\"btn btn-danger\" routerLink=\"/admin/activities\">Cancel</button>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/admin/activity-management/activity-management-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/activity-management-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ActivityManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityManagementRoutingModule", function() { return ActivityManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _activity_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-management.component */ "./src/app/modules/admin/activity-management/activity-management.component.ts");
/* harmony import */ var _pages_add_activity_add_activity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/add-activity/add-activity.component */ "./src/app/modules/admin/activity-management/pages/add-activity/add-activity.component.ts");
/* harmony import */ var _pages_activity_overview_activity_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/activity-overview/activity-overview.component */ "./src/app/modules/admin/activity-management/pages/activity-overview/activity-overview.component.ts");
/* harmony import */ var _pages_activity_wrapper_activity_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/activity-wrapper/activity-wrapper.component */ "./src/app/modules/admin/activity-management/pages/activity-wrapper/activity-wrapper.component.ts");
/* harmony import */ var _pages_activity_registrations_activity_registrations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/activity-registrations/activity-registrations.component */ "./src/app/modules/admin/activity-management/pages/activity-registrations/activity-registrations.component.ts");








const routes = [
    {
        path: '', component: _activity_management_component__WEBPACK_IMPORTED_MODULE_3__["ActivityManagementComponent"]
    },
    {
        path: 'add', component: _pages_add_activity_add_activity_component__WEBPACK_IMPORTED_MODULE_4__["AddActivityComponent"]
    },
    {
        path: 'columns',
        loadChildren: () => Promise.all(/*! import() | columns-columns-module */[__webpack_require__.e("common"), __webpack_require__.e("columns-columns-module")]).then(__webpack_require__.bind(null, /*! ../columns/columns.module */ "./src/app/modules/admin/columns/columns.module.ts")).then(m => m.ColumnsModule),
        data: {
            model: 'activities'
        }
    },
    {
        path: ':id/edit',
        component: _pages_activity_wrapper_activity_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["ActivityWrapperComponent"],
        children: [
            {
                path: '',
                component: _pages_activity_overview_activity_overview_component__WEBPACK_IMPORTED_MODULE_5__["ActivityOverviewComponent"]
            },
            {
                path: 'registrations',
                component: _pages_activity_registrations_activity_registrations_component__WEBPACK_IMPORTED_MODULE_7__["ActivityRegistrationsComponent"]
            }
        ]
    },
];
let ActivityManagementRoutingModule = class ActivityManagementRoutingModule {
};
ActivityManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ActivityManagementRoutingModule);



/***/ }),

/***/ "./src/app/modules/admin/activity-management/activity-management.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/activity-management.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWN0aXZpdHktbWFuYWdlbWVudC9hY3Rpdml0eS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/activity-management/activity-management.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/activity-management.component.ts ***!
  \************************************************************************************/
/*! exports provided: ActivityManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityManagementComponent", function() { return ActivityManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/activity.service */ "./src/app/core/services/activity.service.ts");
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/delete-modal/delete-modal.component */ "./src/app/shared/components/delete-modal/delete-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_core_services_member_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/member.service */ "./src/app/core/services/member.service.ts");
/* harmony import */ var src_app_shared_pipes_html_to_text_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/pipes/html-to-text.pipe */ "./src/app/shared/pipes/html-to-text.pipe.ts");
/* harmony import */ var src_app_core_services_committee_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/committee.service */ "./src/app/core/services/committee.service.ts");










let ActivityManagementComponent = class ActivityManagementComponent {
    constructor(activityService, authService, memberService, cs, router, modalService, htmlToTextPipe) {
        this.activityService = activityService;
        this.authService = authService;
        this.memberService = memberService;
        this.cs = cs;
        this.router = router;
        this.modalService = modalService;
        this.htmlToTextPipe = htmlToTextPipe;
        this.columnDefs = [
            {
                key: 'description',
                format: d => this.htmlToTextPipe.transform(d)
            }
        ];
    }
    ngOnInit() {
        const member = this.authService._getUser();
        if (!member) {
            return;
        }
        this.getCommittees(member);
    }
    getCommittees(member) {
        return this.cs.committees.subscribe(committees => {
            this.committees = committees;
            this.defaultCommittee = this.committees[0];
            if (this.defaultCommittee) {
                this.getActivities(this.defaultCommittee.id);
            }
        });
    }
    getActivities(committeeId) {
        this.activityService.getActivities(committeeId).subscribe(activities => {
            this.activities = activities;
        });
    }
    onSelectChange(committee) {
        this.getActivities(committee.id);
    }
    onDeleteActivity(activity) {
        const modalRef = this.modalService.open(src_app_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteModalComponent"]);
        modalRef.componentInstance.objRef = "this Activity";
        modalRef.componentInstance.delete.subscribe(() => {
            this.deleteActivity(activity.id);
        });
    }
    editActivity(activity) {
        this.router.navigate([`/admin/activities/${activity.id}/edit`]);
    }
    deleteActivity(id) {
        this.activityService.deleteActivity(id).subscribe(() => {
            console.log('deleted');
            this.activities = this.activities.filter(a => a.id !== id);
        }, error => {
            console.log("Error while deleting activity", error);
        });
    }
};
ActivityManagementComponent.ctorParameters = () => [
    { type: src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_2__["ActivityService"] },
    { type: src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: src_app_core_services_member_service__WEBPACK_IMPORTED_MODULE_7__["MemberService"] },
    { type: src_app_core_services_committee_service__WEBPACK_IMPORTED_MODULE_9__["CommitteeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: src_app_shared_pipes_html_to_text_pipe__WEBPACK_IMPORTED_MODULE_8__["HtmlToTextPipe"] }
];
ActivityManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/activity-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activity-management.component.scss */ "./src/app/modules/admin/activity-management/activity-management.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_2__["ActivityService"],
        src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        src_app_core_services_member_service__WEBPACK_IMPORTED_MODULE_7__["MemberService"],
        src_app_core_services_committee_service__WEBPACK_IMPORTED_MODULE_9__["CommitteeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
        src_app_shared_pipes_html_to_text_pipe__WEBPACK_IMPORTED_MODULE_8__["HtmlToTextPipe"]])
], ActivityManagementComponent);



/***/ }),

/***/ "./src/app/modules/admin/activity-management/activity-management.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/activity-management.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ActivityManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityManagementModule", function() { return ActivityManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _activity_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activity-management-routing.module */ "./src/app/modules/admin/activity-management/activity-management-routing.module.ts");
/* harmony import */ var _activity_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activity-management.component */ "./src/app/modules/admin/activity-management/activity-management.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_add_activity_add_activity_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/add-activity/add-activity.component */ "./src/app/modules/admin/activity-management/pages/add-activity/add-activity.component.ts");
/* harmony import */ var _components_edit_option_modal_edit_option_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/edit-option-modal/edit-option-modal.component */ "./src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component.ts");
/* harmony import */ var _components_option_list_option_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/option-list/option-list.component */ "./src/app/modules/admin/activity-management/components/option-list/option-list.component.ts");
/* harmony import */ var _pages_activity_overview_activity_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/activity-overview/activity-overview.component */ "./src/app/modules/admin/activity-management/pages/activity-overview/activity-overview.component.ts");
/* harmony import */ var _components_activity_form_activity_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/activity-form/activity-form.component */ "./src/app/modules/admin/activity-management/components/activity-form/activity-form.component.ts");
/* harmony import */ var _components_option_form_option_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/option-form/option-form.component */ "./src/app/modules/admin/activity-management/components/option-form/option-form.component.ts");
/* harmony import */ var _pages_activity_wrapper_activity_wrapper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/activity-wrapper/activity-wrapper.component */ "./src/app/modules/admin/activity-management/pages/activity-wrapper/activity-wrapper.component.ts");
/* harmony import */ var _pages_activity_registrations_activity_registrations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/activity-registrations/activity-registrations.component */ "./src/app/modules/admin/activity-management/pages/activity-registrations/activity-registrations.component.ts");













let ActivityManagementModule = class ActivityManagementModule {
};
ActivityManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _activity_management_component__WEBPACK_IMPORTED_MODULE_3__["ActivityManagementComponent"],
            _pages_add_activity_add_activity_component__WEBPACK_IMPORTED_MODULE_5__["AddActivityComponent"],
            _components_option_list_option_list_component__WEBPACK_IMPORTED_MODULE_7__["OptionListComponent"],
            _pages_activity_overview_activity_overview_component__WEBPACK_IMPORTED_MODULE_8__["ActivityOverviewComponent"],
            _components_activity_form_activity_form_component__WEBPACK_IMPORTED_MODULE_9__["ActivityFormComponent"],
            _components_option_form_option_form_component__WEBPACK_IMPORTED_MODULE_10__["OptionFormComponent"],
            _components_edit_option_modal_edit_option_modal_component__WEBPACK_IMPORTED_MODULE_6__["EditOptionModalComponent"],
            _pages_activity_wrapper_activity_wrapper_component__WEBPACK_IMPORTED_MODULE_11__["ActivityWrapperComponent"],
            _pages_activity_registrations_activity_registrations_component__WEBPACK_IMPORTED_MODULE_12__["ActivityRegistrationsComponent"],
        ],
        imports: [
            _activity_management_routing_module__WEBPACK_IMPORTED_MODULE_2__["ActivityManagementRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ],
        entryComponents: [
            _components_edit_option_modal_edit_option_modal_component__WEBPACK_IMPORTED_MODULE_6__["EditOptionModalComponent"]
        ]
    })
], ActivityManagementModule);



/***/ }),

/***/ "./src/app/modules/admin/activity-management/components/activity-form/activity-form.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/components/activity-form/activity-form.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWN0aXZpdHktbWFuYWdlbWVudC9jb21wb25lbnRzL2FjdGl2aXR5LWZvcm0vYWN0aXZpdHktZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/activity-management/components/activity-form/activity-form.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/components/activity-form/activity-form.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ActivityFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityFormComponent", function() { return ActivityFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_services_committee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/committee.service */ "./src/app/core/services/committee.service.ts");
/* harmony import */ var src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_pipes_eur_to_cents_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/pipes/eur-to-cents.pipe */ "./src/app/shared/pipes/eur-to-cents.pipe.ts");
/* harmony import */ var _shared_pipes_cents_to_eur_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/pipes/cents-to-eur.pipe */ "./src/app/shared/pipes/cents-to-eur.pipe.ts");










let ActivityFormComponent = class ActivityFormComponent {
    constructor(formBuilder, committeeService, authService) {
        this.formBuilder = formBuilder;
        this.committeeService = committeeService;
        this.authService = authService;
        this.submitted = false;
        this.formDirty = false;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //For markdown editor
        this.editorOptions = {
            showBorder: true,
            scrollPastEnd: 2,
            enablePreviewContentClick: false,
        };
        this.committees = [];
        this.activityForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            start_date: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^\\d+(?:\\.\\d{0,2})?$')]],
            committee_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            registration_opens: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            registration_closes: [, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    set activity(activity) {
        if (activity) {
            this._activity = activity;
            this.activityForm.patchValue(activity);
            this.activityForm.patchValue({
                price: new _shared_pipes_cents_to_eur_pipe__WEBPACK_IMPORTED_MODULE_9__["CentsToEurPipe"]().transform(activity.price_cents),
                start_date: this.toDateObj(activity.start_date),
                end_date: this.toDateObj(activity.end_date),
                registration_closes: this.toDateObj(activity.registration_closes),
                registration_opens: this.toDateObj(activity.registration_opens)
            });
            this.activityForm.patchValue({ committee_id: activity.committee.id });
            this.listenOnFormChanges();
        }
    }
    ngOnInit() {
        const member = this.authService._getUser();
        if (!member) {
            return;
        }
        this.getCommittees(member);
    }
    listenOnFormChanges() {
        this.activityForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(value => {
            this.formDirty = true;
        });
    }
    getCommittees(member) {
        this.committeeService.committees.subscribe(committees => {
            this.committees = committees;
        });
    }
    /*
      Transforms a string format of a date
      to a Date object acceptable by datetime-picker.
    */
    toDateObj(date) {
        return new Date(date);
    }
    /*
      Formats a date object to a string format
      acceptable by back-end.
    */
    format(date) {
        return new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-GB').transform(date, 'yyyy-MM-dd HH:mm:ss', 'GMT+1');
    }
    get f() {
        return this.activityForm.controls;
    }
    onSave() {
        this.submitted = true;
        if (this.activityForm.invalid) {
            return;
        }
        let activity = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["cloneDeep"])(this.activityForm.value);
        if (this._activity) {
            activity.id = this._activity.id;
        }
        activity.price_cents = new src_app_shared_pipes_eur_to_cents_pipe__WEBPACK_IMPORTED_MODULE_8__["EurToCentsPipe"]().transform(activity.price);
        delete activity.price;
        activity.start_date = this.format(activity.start_date);
        activity.end_date = this.format(activity.end_date);
        activity.registration_opens = this.format(activity.registration_opens);
        activity.registration_closes = this.format(activity.registration_closes);
        this.save.emit(activity);
    }
};
ActivityFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_core_services_committee_service__WEBPACK_IMPORTED_MODULE_4__["CommitteeService"] },
    { type: src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ActivityFormComponent.prototype, "save", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], ActivityFormComponent.prototype, "activity", null);
ActivityFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/components/activity-form/activity-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activity-form.component.scss */ "./src/app/modules/admin/activity-management/components/activity-form/activity-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_core_services_committee_service__WEBPACK_IMPORTED_MODULE_4__["CommitteeService"],
        src_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
], ActivityFormComponent);



/***/ }),

/***/ "./src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWN0aXZpdHktbWFuYWdlbWVudC9jb21wb25lbnRzL2VkaXQtb3B0aW9uLW1vZGFsL2VkaXQtb3B0aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: EditOptionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOptionModalComponent", function() { return EditOptionModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _option_form_option_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../option-form/option-form.component */ "./src/app/modules/admin/activity-management/components/option-form/option-form.component.ts");




let EditOptionModalComponent = class EditOptionModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.editOptionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /*
      The method called when the save emitter
      of the child OptionFormComponent has emitted
      the option object to be saved.
    */
    editOption(optionObject) {
        this.editOptionEmitter.emit(optionObject);
    }
    /*
      This function calls the AddOptionFormCompontent's submit
      button.
    */
    save() {
        this.optionForm.onSubmit();
        this.activeModal.close();
    }
    dismiss() {
        this.activeModal.dismiss();
    }
};
EditOptionModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('optionForm', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _option_form_option_form_component__WEBPACK_IMPORTED_MODULE_3__["OptionFormComponent"])
], EditOptionModalComponent.prototype, "optionForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], EditOptionModalComponent.prototype, "editOptionEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EditOptionModalComponent.prototype, "activityOption", void 0);
EditOptionModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-option-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-option-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-option-modal.component.scss */ "./src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], EditOptionModalComponent);



/***/ }),

/***/ "./src/app/modules/admin/activity-management/components/option-form/option-form.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/components/option-form/option-form.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWN0aXZpdHktbWFuYWdlbWVudC9jb21wb25lbnRzL29wdGlvbi1mb3JtL29wdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/activity-management/components/option-form/option-form.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/components/option-form/option-form.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: OptionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionFormComponent", function() { return OptionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let OptionFormComponent = class OptionFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.option_types = ['text', 'yes_no', 'number', 'datetime'];
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
        this.optionsForm = this.formBuilder.group({
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: ['text', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            required: [false]
        });
    }
    set option(option) {
        this._option = option;
        this.optionsForm.patchValue(this._option);
    }
    ;
    ngOnInit() {
    }
    get f() {
        return this.optionsForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (this.optionsForm.invalid) {
            return;
        }
        let optionObj = this.optionsForm.value;
        if (this.action == 'edit') {
            optionObj.id = this._option.id;
        }
        this.submit.emit(optionObj);
        this.optionsForm.reset({
            question: '',
            type: '',
            required: false
        });
        this.submitted = false;
    }
};
OptionFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], OptionFormComponent.prototype, "submit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], OptionFormComponent.prototype, "action", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], OptionFormComponent.prototype, "option", null);
OptionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-option-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./option-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/components/option-form/option-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./option-form.component.scss */ "./src/app/modules/admin/activity-management/components/option-form/option-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], OptionFormComponent);



/***/ }),

/***/ "./src/app/modules/admin/activity-management/components/option-list/option-list.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/components/option-list/option-list.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWN0aXZpdHktbWFuYWdlbWVudC9jb21wb25lbnRzL29wdGlvbi1saXN0L29wdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/activity-management/components/option-list/option-list.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/components/option-list/option-list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: OptionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionListComponent", function() { return OptionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OptionListComponent = class OptionListComponent {
    constructor() {
        this.deleteEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    /*delete an option */
    delete(option) {
        this.deleteEmitter.emit(option);
    }
    edit(option) {
        this.editEmitter.emit(option);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], OptionListComponent.prototype, "options", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], OptionListComponent.prototype, "deleteEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], OptionListComponent.prototype, "editEmitter", void 0);
OptionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-option-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./option-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/components/option-list/option-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./option-list.component.scss */ "./src/app/modules/admin/activity-management/components/option-list/option-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], OptionListComponent);



/***/ }),

/***/ "./src/app/modules/admin/activity-management/pages/activity-overview/activity-overview.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/pages/activity-overview/activity-overview.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr {\n  border-top: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbGJhbmRpL0Rlc2t0b3AvRGVzaWduIFByb2plY3Qvb2NraGFtLWZyb250ZW5kL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi9hY3Rpdml0eS1tYW5hZ2VtZW50L3BhZ2VzL2FjdGl2aXR5LW92ZXJ2aWV3L2FjdGl2aXR5LW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FjdGl2aXR5LW1hbmFnZW1lbnQvcGFnZXMvYWN0aXZpdHktb3ZlcnZpZXcvYWN0aXZpdHktb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hY3Rpdml0eS1tYW5hZ2VtZW50L3BhZ2VzL2FjdGl2aXR5LW92ZXJ2aWV3L2FjdGl2aXR5LW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuIiwiaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/admin/activity-management/pages/activity-overview/activity-overview.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/pages/activity-overview/activity-overview.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ActivityOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityOverviewComponent", function() { return ActivityOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/activity.service */ "./src/app/core/services/activity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/delete-modal/delete-modal.component */ "./src/app/shared/components/delete-modal/delete-modal.component.ts");
/* harmony import */ var _components_edit_option_modal_edit_option_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/edit-option-modal/edit-option-modal.component */ "./src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");








let ActivityOverviewComponent = class ActivityOverviewComponent {
    constructor(activityService, route, modalService, router, notifierService) {
        this.activityService = activityService;
        this.route = route;
        this.modalService = modalService;
        this.router = router;
        this.notifierService = notifierService;
        this.activityOptions = [];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.activityService.getActivity(params.id).subscribe(activity => {
                this.activity = activity;
                this.activityOptions = this.activity.options;
            }, error => {
                console.log("Error", error);
            });
        });
    }
    onDelete(type, option) {
        const modalRef = this.openDeleteModal();
        modalRef.componentInstance.objRef = type;
        modalRef.componentInstance.delete.subscribe(() => {
            type === 'activity' ? this.deleteActivity() : this.deleteOption(option);
        });
    }
    deleteActivity() {
        this.activityService.deleteActivity(this.activity.id).subscribe(() => {
            this.router.navigate(['/activities']);
            this.notifierService.notify('default', 'Activity deleted successfully');
        }, error => {
            console.log(error);
            this.notifierService.notify('error', 'Could not delete activity. Please try again later.');
        });
    }
    editActivity(activity) {
        this.activityService.editActivity(activity).subscribe(activity => {
            this.activity = activity;
            this.notifierService.notify('default', 'Activity updated successfully');
            this.router.navigate(['/admin/activities']);
        }, error => {
            console.log("Error while editing Activity", error);
            this.notifierService.notify('error', 'Could not edit activity. Please try again later.');
        });
    }
    /*
      Opens delete modal
      returns: modalReference
    */
    openDeleteModal() {
        return this.modalService.open(src_app_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteModalComponent"]);
    }
    /*
      Opens edit modal
      returns: modalReference
    */
    openEditModal() {
        return this.modalService.open(_components_edit_option_modal_edit_option_modal_component__WEBPACK_IMPORTED_MODULE_6__["EditOptionModalComponent"]);
    }
    addOption(option) {
        let opt = Object.assign({}, option);
        this.activityService.addOption(this.activity.id, opt).subscribe(option => {
            this.activityOptions.push(option);
        }, error => {
            console.log("Error while adding option", error);
        });
    }
    deleteOption(option) {
        this.activityService.deleteOption(this.activity.id, option).subscribe(() => {
            this.activityOptions = this.activityOptions.filter(o => o.id !== option.id);
        }, error => {
            console.log("Error when deleting option", error);
        });
    }
    onEditOption(option) {
        const modalRef = this.openEditModal();
        modalRef.componentInstance.activityOption = option;
        modalRef.componentInstance.editOptionEmitter.subscribe((option) => {
            this.editOption(option);
        });
    }
    editOption(option) {
        this.activityService.editOption(this.activity.id, option).subscribe(updatedOption => {
            this.updateOptionArray(updatedOption);
        }, error => {
            console.log("error while editing option", error);
        });
    }
    updateOptionArray(opt) {
        const option = this.activityOptions.find(o => o.id === opt.id);
        const index = this.activityOptions.indexOf(option);
        this.activityOptions[index] = option;
    }
};
ActivityOverviewComponent.ctorParameters = () => [
    { type: src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_2__["ActivityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierService"] }
];
ActivityOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity-overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/pages/activity-overview/activity-overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activity-overview.component.scss */ "./src/app/modules/admin/activity-management/pages/activity-overview/activity-overview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_2__["ActivityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_7__["NotifierService"]])
], ActivityOverviewComponent);



/***/ }),

/***/ "./src/app/modules/admin/activity-management/pages/activity-registrations/activity-registrations.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/pages/activity-registrations/activity-registrations.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWN0aXZpdHktbWFuYWdlbWVudC9wYWdlcy9hY3Rpdml0eS1yZWdpc3RyYXRpb25zL2FjdGl2aXR5LXJlZ2lzdHJhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/activity-management/pages/activity-registrations/activity-registrations.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/pages/activity-registrations/activity-registrations.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ActivityRegistrationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityRegistrationsComponent", function() { return ActivityRegistrationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/activity.service */ "./src/app/core/services/activity.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_shared_components_activity_helpers_register_modal_register_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/activity-helpers/register-modal/register-modal.component */ "./src/app/shared/components/activity-helpers/register-modal/register-modal.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
/* harmony import */ var _shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/delete-modal/delete-modal.component */ "./src/app/shared/components/delete-modal/delete-modal.component.ts");








let ActivityRegistrationsComponent = class ActivityRegistrationsComponent {
    constructor(route, activityService, modalService, notifierService) {
        this.route = route;
        this.activityService = activityService;
        this.modalService = modalService;
        this.notifierService = notifierService;
    }
    ngOnInit() {
        this.route.parent.params.subscribe(params => {
            this.activityId = parseInt(params.id);
            this.getActivityRegistrations(params.id);
            this.getActivityOptions();
        });
    }
    getActivityOptions() {
        return this.activityService.getOptions(this.activityId).subscribe(options => {
            console.log("Options", options);
            this.activityOptions = options;
        }, error => {
            console.log("Error while fetching options", error);
        });
    }
    getActivityRegistrations(activityId) {
        this.activityService.getRegistrations(activityId).subscribe(registrations => {
            console.log(registrations);
            this.registrations = registrations;
        }, error => {
            console.log("Error while fetching registrations", error);
        });
    }
    onRegisterMember() {
        const modalRef = this.modalService.open(src_app_shared_components_activity_helpers_register_modal_register_modal_component__WEBPACK_IMPORTED_MODULE_5__["RegisterModalComponent"], { backdrop: 'static' });
        modalRef.componentInstance.activityId = this.activityId;
        modalRef.componentInstance.activityOptions = this.activityOptions;
        modalRef.componentInstance.register.subscribe(data => {
            this.registerMember(data);
        });
    }
    registerMember(data) {
        console.log(data);
        this.activityService.registerMember(data).subscribe(registration => {
            this.registrations.push(registration);
            console.log(registration);
            this.notifierService.notify('default', 'Member has been registered successfully');
        }, error => {
            console.log("Error while registering", error);
            this.notifierService.notify('error', 'Could not register member. Please try again later.');
        });
    }
    onEdit(registration) {
        const modalRef = this.modalService.open(src_app_shared_components_activity_helpers_register_modal_register_modal_component__WEBPACK_IMPORTED_MODULE_5__["RegisterModalComponent"], { backdrop: 'static' });
        modalRef.componentInstance.activityId = this.activityId;
        modalRef.componentInstance.activityOptions = registration.answers;
        modalRef.componentInstance.selectedMember = registration.member;
        modalRef.componentInstance.showSearchbar = false;
        modalRef.componentInstance.action = 'edit ';
        modalRef.componentInstance.register.subscribe(data => {
            data['id'] = registration.id;
            this.editRegistration(data);
            modalRef.close();
        });
    }
    editRegistration(data) {
        this.activityService.editRegistration(this.activityId, data).subscribe(response => {
            console.log("Edit is successfuly", response);
            this.notifierService.notify('default', 'Registration updated successfully');
            this.getActivityRegistrations(this.activityId);
        }, error => {
            console.log("Error while editing", error);
            this.notifierService.notify('error', 'Could not edit registration. Please try again later.');
        });
    }
    onDelete(registration) {
        const modalRef = this.modalService.open(_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_7__["DeleteModalComponent"]);
        modalRef.componentInstance.objRef = 'this registration';
        modalRef.componentInstance.delete.subscribe(() => {
            this.deleteRegistration(registration.id);
        });
    }
    deleteRegistration(registrationId) {
        this.activityService.deleteRegistration(this.activityId, registrationId).subscribe(() => {
            this.notifierService.notify('default', 'Member has been unregistered successfully');
            this.getActivityRegistrations(this.activityId);
        }, error => {
            console.log('Error while deleting registration', error);
            this.notifierService.notify('error', 'Could not unregister member. Please try again later.');
        });
    }
};
ActivityRegistrationsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_3__["ActivityService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"] }
];
ActivityRegistrationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity-registrations',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity-registrations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/pages/activity-registrations/activity-registrations.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activity-registrations.component.scss */ "./src/app/modules/admin/activity-management/pages/activity-registrations/activity-registrations.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_3__["ActivityService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"]])
], ActivityRegistrationsComponent);



/***/ }),

/***/ "./src/app/modules/admin/activity-management/pages/activity-wrapper/activity-wrapper.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/pages/activity-wrapper/activity-wrapper.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tab-content {\n  padding-top: 5px;\n}\n\n.active-link {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbGJhbmRpL0Rlc2t0b3AvRGVzaWduIFByb2plY3Qvb2NraGFtLWZyb250ZW5kL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi9hY3Rpdml0eS1tYW5hZ2VtZW50L3BhZ2VzL2FjdGl2aXR5LXdyYXBwZXIvYWN0aXZpdHktd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hY3Rpdml0eS1tYW5hZ2VtZW50L3BhZ2VzL2FjdGl2aXR5LXdyYXBwZXIvYWN0aXZpdHktd3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSx1QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi9hY3Rpdml0eS1tYW5hZ2VtZW50L3BhZ2VzL2FjdGl2aXR5LXdyYXBwZXIvYWN0aXZpdHktd3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmFjdGl2ZS1saW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iLCIudGFiLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uYWN0aXZlLWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin/activity-management/pages/activity-wrapper/activity-wrapper.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/pages/activity-wrapper/activity-wrapper.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ActivityWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityWrapperComponent", function() { return ActivityWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ActivityWrapperComponent = class ActivityWrapperComponent {
    constructor() { }
    ngOnInit() { }
};
ActivityWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity-wrapper',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./activity-wrapper.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/pages/activity-wrapper/activity-wrapper.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./activity-wrapper.component.scss */ "./src/app/modules/admin/activity-management/pages/activity-wrapper/activity-wrapper.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ActivityWrapperComponent);



/***/ }),

/***/ "./src/app/modules/admin/activity-management/pages/add-activity/add-activity.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/pages/add-activity/add-activity.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  color: #757575 !important;\n}\n\n.editForm ::ng-deep h1, .editForm ::ng-deep h1, .editForm ::ng-deep h3, .editForm ::ng-deep h4, .editForm ::ng-deep h5, .editForm ::ng-deep h6, .editForm ::ng-deep p {\n  color: inherit;\n}\n\nhr {\n  border-top: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbGJhbmRpL0Rlc2t0b3AvRGVzaWduIFByb2plY3Qvb2NraGFtLWZyb250ZW5kL3NyYy9hcHAvbW9kdWxlcy9hZG1pbi9hY3Rpdml0eS1tYW5hZ2VtZW50L3BhZ2VzL2FkZC1hY3Rpdml0eS9hZGQtYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYWRtaW4vYWN0aXZpdHktbWFuYWdlbWVudC9wYWdlcy9hZGQtYWN0aXZpdHkvYWRkLWFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURJSTtFQUNFLGNBQUE7QUNETjs7QURPQTtFQUNFLDJCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluL2FjdGl2aXR5LW1hbmFnZW1lbnQvcGFnZXMvYWRkLWFjdGl2aXR5L2FkZC1hY3Rpdml0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBjb2xvcjogIzc1NzU3NSAhaW1wb3J0YW50O1xufVxuXG4uZWRpdEZvcm0ge1xuICA6Om5nLWRlZXAge1xuICAgIGgxLGgxLGgzLGg0LGg1LGg2LHAge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICB9XG59XG5cblxuaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG59IiwicCB7XG4gIGNvbG9yOiAjNzU3NTc1ICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0Rm9ybSA6Om5nLWRlZXAgaDEsIC5lZGl0Rm9ybSA6Om5nLWRlZXAgaDEsIC5lZGl0Rm9ybSA6Om5nLWRlZXAgaDMsIC5lZGl0Rm9ybSA6Om5nLWRlZXAgaDQsIC5lZGl0Rm9ybSA6Om5nLWRlZXAgaDUsIC5lZGl0Rm9ybSA6Om5nLWRlZXAgaDYsIC5lZGl0Rm9ybSA6Om5nLWRlZXAgcCB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5ociB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/admin/activity-management/pages/add-activity/add-activity.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/activity-management/pages/add-activity/add-activity.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddActivityComponent", function() { return AddActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_edit_option_modal_edit_option_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/edit-option-modal/edit-option-modal.component */ "./src/app/modules/admin/activity-management/components/edit-option-modal/edit-option-modal.component.ts");
/* harmony import */ var _components_activity_form_activity_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/activity-form/activity-form.component */ "./src/app/modules/admin/activity-management/components/activity-form/activity-form.component.ts");
/* harmony import */ var src_app_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/delete-modal/delete-modal.component */ "./src/app/shared/components/delete-modal/delete-modal.component.ts");
/* harmony import */ var src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/activity.service */ "./src/app/core/services/activity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");









let AddActivityComponent = class AddActivityComponent {
    constructor(modalService, activityService, router, notifierService) {
        this.modalService = modalService;
        this.activityService = activityService;
        this.router = router;
        this.notifierService = notifierService;
        this.submitted = false;
        this.activityOptions = [];
    }
    ngOnInit() { }
    addOption(option) {
        let opt = Object.assign({}, option);
        this.activityOptions.push(opt);
    }
    deleteOption(option) {
        const modalRef = this.openDeleteModal();
        modalRef.componentInstance.objRef = "option";
        modalRef.componentInstance.delete.subscribe(() => {
            this.activityOptions = this.activityOptions.filter(o => o != option);
        });
    }
    openDeleteModal() {
        return this.modalService.open(src_app_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteModalComponent"]);
    }
    onEditOption(activityOption) {
        const modalRef = this.modalService.open(_components_edit_option_modal_edit_option_modal_component__WEBPACK_IMPORTED_MODULE_3__["EditOptionModalComponent"]);
        modalRef.componentInstance.activityOption = activityOption;
        let index = this.activityOptions.indexOf(activityOption);
        modalRef.componentInstance.editOptionEmitter.subscribe((option) => {
            this.editOption(option, index);
        });
    }
    editOption(option, index) {
        this.activityOptions[index] = option;
    }
    createActivity(activityObj) {
        let activity = Object.assign({}, activityObj);
        activity.options = this.activityOptions;
        this.activityService.createActivity(activity).subscribe(response => {
            console.log('Activity response', response);
            this.notifierService.notify('default', 'Activity created successfully');
            this.router.navigate(['/admin/activities']);
        }, error => {
            console.log('Error while creating activity', error);
            this.notifierService.notify('error', 'Could not create activity. Please try again later.');
        });
    }
    /*
      Calls the ActivityFormComponent's onSave method.
    */
    onSave() {
        this.activityForm.onSave();
    }
};
AddActivityComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('activityForm', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _components_activity_form_activity_form_component__WEBPACK_IMPORTED_MODULE_4__["ActivityFormComponent"])
], AddActivityComponent.prototype, "activityForm", void 0);
AddActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-activity',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-activity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/activity-management/pages/add-activity/add-activity.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-activity.component.scss */ "./src/app/modules/admin/activity-management/pages/add-activity/add-activity.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"],
        src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"]])
], AddActivityComponent);



/***/ })

}]);
//# sourceMappingURL=activity-management-activity-management-module-es2015.js.map