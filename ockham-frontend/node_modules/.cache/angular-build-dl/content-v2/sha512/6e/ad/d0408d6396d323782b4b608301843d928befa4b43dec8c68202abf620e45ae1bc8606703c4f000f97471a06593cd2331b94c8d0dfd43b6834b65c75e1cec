(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contributions-contributions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/components/contribution-export/contribution-export.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/components/contribution-export/contribution-export.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Export contribution</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"exportForm\" (ngSubmit)=\"onSave()\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"form-group\">\n          <label for=\"category\">Category*</label>\n          <input id=\"category\" type=\"text\" class=\"form-control\" formControlName=\"category\"\n                 [ngClass]=\"{ 'is-invalid': submitted && f.category.errors }\">\n          <div *ngIf=\"submitted && f.category.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.category.errors.required\">Category is required</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"form-group\">\n          <label for=\"contribution_id\">Contribution*</label>\n          <select id=\"contribution_id\" class=\"form-control\" formControlName=\"contribution_id\"\n                  [ngClass]=\"{ 'is-invalid': submitted && f.contribution_id.errors }\">\n            <option *ngFor=\"let c of contributions\" [value]=\"c.id\">\n              {{ c.identifier }}\n            </option>\n          </select>\n          <div *ngIf=\"submitted && f.contribution_id.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.contribution_id.errors.required\">Contribution is required</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"form-group\">\n          <label for=\"programme\">Group Honours programme*</label>\n          <div>\n            <div class=\"form-check form-check-inline\">\n              <input id=\"bachelor\" class=\"form-check-input\" type=\"radio\" name=\"track\" value=\"bachelor\" formControlName=\"track\"\n                     [ngClass]=\"{ 'is-invalid': submitted && f.track.errors }\">\n              <label class=\"form-check-label\" for=\"bachelor\">BSc</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input id=\"master\" class=\"form-check-input\" type=\"radio\" name=\"track\" value=\"master\" formControlName=\"track\"\n                     [ngClass]=\"{ 'is-invalid': submitted && f.track.errors }\">\n              <label class=\"form-check-label\" for=\"master\">MSc</label>\n            </div>\n            <div class=\"form-group\">\n              <input id=\"programme\" type=\"number\" class=\"form-control\" formControlName=\"track_number\"\n                     [ngClass]=\"{ 'is-invalid': submitted && f.track_number.errors }\">\n              <div *ngIf=\"submitted && f.track_number.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.track_number.errors.required\">Track number is required</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"export()\">Export</button>\n  <button type=\"button\" class=\"btn btn-primary ml-auto\" (click)=\"close()\">Close</button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/components/contribution-form/contribution-form.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/components/contribution-form/contribution-form.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"contributionForm\" (ngSubmit)=\"onSave()\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"identifier\">Identifier*</label>\n        <input id=\"identifier\" type=\"text\" class=\"form-control\" formControlName=\"identifier\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.identifier.errors }\">\n        <div *ngIf=\"submitted && f.identifier.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.identifier.errors.required\">Identifier is required</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"form-group\">\n        <label for=\"cost-cents\">Cost in cents*</label>\n        <input id=\"cost-cents\" type=\"number\" class=\"form-control\" formControlName=\"cost_cents\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.cost_cents.errors }\">\n        <div *ngIf=\"submitted && f.cost_cents.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.cost_cents.errors.required\">Cost is required</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-auto\">\n      <button type=\"submit\" class=\"btn btn-success\">Save</button>\n    </div>\n    <div class=\"col-auto ml-auto\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\n    </div>\n  </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/contributions.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/contributions.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-arrow-back routerLink=\"/admin\"></app-arrow-back>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h1>Manage contributions</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-pagination-table \n      [data]=\"contributions\" \n      [headers]=\"['ID', 'Identifier', 'Cost']\"\n      [keys]=\"['id', 'identifier', 'cost_cents']\" \n      [columnDefs]=\"columnDefs\"\n      [showActionColumn]=\"true\" \n      (edit)=\"onEdit($event)\" \n      (delete)=\"onDelete($event)\">\n    </app-pagination-table>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-auto\">\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"add\">\n      <i class=\"material-icons btn-icon\">\n        add\n      </i>\n      Add contribution\n    </button>\n  </div>\n  <div class=\"col-auto ml-auto\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onExport()\">\n      <i class=\"material-icons btn-icon\">\n        cloud_download\n      </i>\n      Export contribution\n    </button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/pages/add-contribution/add-contribution.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/pages/add-contribution/add-contribution.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-arrow-back routerLink=\"/admin/contributions\"></app-arrow-back>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h1>Add contribution</h1>\n  </div>\n</div>\n<app-contribution-form (save)=\"onSave($event)\" (cancel)=\"onCancel()\"></app-contribution-form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/pages/edit-contribution/edit-contribution.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/pages/edit-contribution/edit-contribution.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-arrow-back routerLink=\"/admin/contributions\"></app-arrow-back>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h1>Edit contribution</h1>\n  </div>\n</div>\n<app-contribution-form *ngIf=\"contribution\" [contribution]=\"contribution\" (save)=\"onSave($event)\" (cancel)=\"onCancel()\"></app-contribution-form>\n");

/***/ }),

/***/ "./src/app/core/services/contribution.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/contribution.service.ts ***!
  \*******************************************************/
/*! exports provided: ContributionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionService", function() { return ContributionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ContributionService = class ContributionService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/api/v1/contributions';
    }
    getContributions() {
        return this.http.get(this.baseUrl);
    }
    getContributionExport(id, data) {
        return this.http.get(`${this.baseUrl}/${id}/export`, {
            responseType: 'arraybuffer', observe: 'response',
            params: data
        });
    }
    getContribution(id) {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    createContribution(contribution) {
        return this.http.post(this.baseUrl, contribution);
    }
    updateContribution(contribution, id) {
        return this.http.put(`${this.baseUrl}/${id}`, contribution);
    }
    deleteContribution(id) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
};
ContributionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContributionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ContributionService);



/***/ }),

/***/ "./src/app/modules/admin/contributions/components/contribution-export/contribution-export.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/admin/contributions/components/contribution-export/contribution-export.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29udHJpYnV0aW9ucy9jb21wb25lbnRzL2NvbnRyaWJ1dGlvbi1leHBvcnQvY29udHJpYnV0aW9uLWV4cG9ydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/contributions/components/contribution-export/contribution-export.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/admin/contributions/components/contribution-export/contribution-export.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ContributionExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionExportComponent", function() { return ContributionExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_contribution_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/contribution.service */ "./src/app/core/services/contribution.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");





let ContributionExportComponent = class ContributionExportComponent {
    constructor(contributionService, activeModal) {
        this.contributionService = contributionService;
        this.activeModal = activeModal;
        this.exportForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            contribution_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            track: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('bachelor', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            track_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.submitted = false;
    }
    ngOnInit() {
    }
    get f() { return this.exportForm.controls; }
    export() {
        this.submitted = true;
        if (this.exportForm.invalid) {
            return;
        }
        const { category, contribution_id, track, track_number } = this.exportForm.value;
        const data = track === 'bachelor' ? { batch_bhp: track_number } : { batch_mhp: track_number };
        data.category = category;
        this.contributionService.getContributionExport(contribution_id, data)
            .subscribe(response => {
            const blob = new Blob([response.body], { type: 'text/csv' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = this.getFileName(response);
            link.click();
        });
    }
    close() {
        this.activeModal.close();
    }
    getFileName(httpResponse) {
        const contentDispositionHeader = httpResponse.headers.get('Content-Disposition');
        const result = contentDispositionHeader.split(';')[1].trim().split('=')[1];
        return result.replace(/"/g, '');
    }
};
ContributionExportComponent.ctorParameters = () => [
    { type: src_app_core_services_contribution_service__WEBPACK_IMPORTED_MODULE_2__["ContributionService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ContributionExportComponent.prototype, "contributions", void 0);
ContributionExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contribution-export',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contribution-export.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/components/contribution-export/contribution-export.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contribution-export.component.scss */ "./src/app/modules/admin/contributions/components/contribution-export/contribution-export.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_contribution_service__WEBPACK_IMPORTED_MODULE_2__["ContributionService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbActiveModal"]])
], ContributionExportComponent);



/***/ }),

/***/ "./src/app/modules/admin/contributions/components/contribution-form/contribution-form.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/admin/contributions/components/contribution-form/contribution-form.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29udHJpYnV0aW9ucy9jb21wb25lbnRzL2NvbnRyaWJ1dGlvbi1mb3JtL2NvbnRyaWJ1dGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/contributions/components/contribution-form/contribution-form.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin/contributions/components/contribution-form/contribution-form.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ContributionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionFormComponent", function() { return ContributionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




let ContributionFormComponent = class ContributionFormComponent {
    constructor() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contributionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            identifier: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            cost_cents: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.submitted = false;
    }
    ngOnInit() {
        if (this.contribution) {
            this.contributionForm.patchValue(this.contribution);
        }
    }
    get f() { return this.contributionForm.controls; }
    onSave() {
        this.submitted = true;
        if (this.contributionForm.invalid) {
            return;
        }
        const contribution = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.contributionForm.value);
        this.save.emit(contribution);
    }
    onCancel() {
        this.cancel.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContributionFormComponent.prototype, "contribution", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ContributionFormComponent.prototype, "save", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ContributionFormComponent.prototype, "cancel", void 0);
ContributionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contribution-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contribution-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/components/contribution-form/contribution-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contribution-form.component.scss */ "./src/app/modules/admin/contributions/components/contribution-form/contribution-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ContributionFormComponent);



/***/ }),

/***/ "./src/app/modules/admin/contributions/contributions-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin/contributions/contributions-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ContributionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionsRoutingModule", function() { return ContributionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contributions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contributions.component */ "./src/app/modules/admin/contributions/contributions.component.ts");
/* harmony import */ var _pages_add_contribution_add_contribution_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/add-contribution/add-contribution.component */ "./src/app/modules/admin/contributions/pages/add-contribution/add-contribution.component.ts");
/* harmony import */ var _pages_edit_contribution_edit_contribution_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/edit-contribution/edit-contribution.component */ "./src/app/modules/admin/contributions/pages/edit-contribution/edit-contribution.component.ts");






const routes = [
    {
        path: '',
        component: _contributions_component__WEBPACK_IMPORTED_MODULE_3__["ContributionsComponent"]
    },
    {
        path: 'add',
        component: _pages_add_contribution_add_contribution_component__WEBPACK_IMPORTED_MODULE_4__["AddContributionComponent"]
    },
    {
        path: ':id/edit',
        component: _pages_edit_contribution_edit_contribution_component__WEBPACK_IMPORTED_MODULE_5__["EditContributionComponent"]
    }
];
let ContributionsRoutingModule = class ContributionsRoutingModule {
};
ContributionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ContributionsRoutingModule);



/***/ }),

/***/ "./src/app/modules/admin/contributions/contributions.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/contributions/contributions.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29udHJpYnV0aW9ucy9jb250cmlidXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/contributions/contributions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/contributions/contributions.component.ts ***!
  \************************************************************************/
/*! exports provided: ContributionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionsComponent", function() { return ContributionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_contribution_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/contribution.service */ "./src/app/core/services/contribution.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
/* harmony import */ var src_app_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/delete-modal/delete-modal.component */ "./src/app/shared/components/delete-modal/delete-modal.component.ts");
/* harmony import */ var _components_contribution_export_contribution_export_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contribution-export/contribution-export.component */ "./src/app/modules/admin/contributions/components/contribution-export/contribution-export.component.ts");








let ContributionsComponent = class ContributionsComponent {
    constructor(contributionService, router, modalService, notifierService) {
        this.contributionService = contributionService;
        this.router = router;
        this.modalService = modalService;
        this.notifierService = notifierService;
        this.columnDefs = [
            {
                key: 'cost_cents',
                format: c => '€ ' + (c / 100).toFixed(2)
            }
        ];
    }
    ngOnInit() {
        this.getContributions();
    }
    getContributions() {
        this.contributionService.getContributions()
            .subscribe(contributions => this.contributions = contributions);
    }
    onEdit(row) {
        this.router.navigate([`/admin/contributions/${row.id}/edit`]);
    }
    onDelete(row) {
        const modalRef = this.openDeleteModal();
        modalRef.componentInstance.objRef = 'contribution';
        modalRef.componentInstance.delete.subscribe(() => {
            this.contributionService.deleteContribution(row.id).subscribe(() => {
                this.notifierService.notify('default', 'Contribution successfully deleted.');
                this.getContributions();
            });
        });
    }
    onExport() {
        const modalRef = this.modalService.open(_components_contribution_export_contribution_export_component__WEBPACK_IMPORTED_MODULE_7__["ContributionExportComponent"]);
        modalRef.componentInstance.contributions = this.contributions;
    }
    openDeleteModal() {
        return this.modalService.open(src_app_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_6__["DeleteModalComponent"]);
    }
};
ContributionsComponent.ctorParameters = () => [
    { type: src_app_core_services_contribution_service__WEBPACK_IMPORTED_MODULE_2__["ContributionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"] }
];
ContributionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contributions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contributions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/contributions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contributions.component.scss */ "./src/app/modules/admin/contributions/contributions.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_contribution_service__WEBPACK_IMPORTED_MODULE_2__["ContributionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"]])
], ContributionsComponent);



/***/ }),

/***/ "./src/app/modules/admin/contributions/contributions.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/admin/contributions/contributions.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContributionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributionsModule", function() { return ContributionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _contributions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contributions-routing.module */ "./src/app/modules/admin/contributions/contributions-routing.module.ts");
/* harmony import */ var _contributions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contributions.component */ "./src/app/modules/admin/contributions/contributions.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_contribution_form_contribution_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contribution-form/contribution-form.component */ "./src/app/modules/admin/contributions/components/contribution-form/contribution-form.component.ts");
/* harmony import */ var _pages_add_contribution_add_contribution_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/add-contribution/add-contribution.component */ "./src/app/modules/admin/contributions/pages/add-contribution/add-contribution.component.ts");
/* harmony import */ var _pages_edit_contribution_edit_contribution_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/edit-contribution/edit-contribution.component */ "./src/app/modules/admin/contributions/pages/edit-contribution/edit-contribution.component.ts");
/* harmony import */ var _components_contribution_export_contribution_export_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contribution-export/contribution-export.component */ "./src/app/modules/admin/contributions/components/contribution-export/contribution-export.component.ts");









let ContributionsModule = class ContributionsModule {
};
ContributionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_contributions_component__WEBPACK_IMPORTED_MODULE_3__["ContributionsComponent"], _components_contribution_form_contribution_form_component__WEBPACK_IMPORTED_MODULE_5__["ContributionFormComponent"], _pages_add_contribution_add_contribution_component__WEBPACK_IMPORTED_MODULE_6__["AddContributionComponent"], _pages_edit_contribution_edit_contribution_component__WEBPACK_IMPORTED_MODULE_7__["EditContributionComponent"], _components_contribution_export_contribution_export_component__WEBPACK_IMPORTED_MODULE_8__["ContributionExportComponent"]],
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _contributions_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContributionsRoutingModule"]
        ],
        entryComponents: [
            _components_contribution_export_contribution_export_component__WEBPACK_IMPORTED_MODULE_8__["ContributionExportComponent"]
        ]
    })
], ContributionsModule);



/***/ }),

/***/ "./src/app/modules/admin/contributions/pages/add-contribution/add-contribution.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin/contributions/pages/add-contribution/add-contribution.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29udHJpYnV0aW9ucy9wYWdlcy9hZGQtY29udHJpYnV0aW9uL2FkZC1jb250cmlidXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/contributions/pages/add-contribution/add-contribution.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/contributions/pages/add-contribution/add-contribution.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddContributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddContributionComponent", function() { return AddContributionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_contribution_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/contribution.service */ "./src/app/core/services/contribution.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");





let AddContributionComponent = class AddContributionComponent {
    constructor(contributionService, router, notifierService) {
        this.contributionService = contributionService;
        this.router = router;
        this.notifierService = notifierService;
    }
    ngOnInit() {
    }
    onSave(contribution) {
        this.contributionService.createContribution(contribution).subscribe(() => {
            this.router.navigate(['/admin/contributions']).then(() => {
                this.notifierService.notify('default', 'Contribution successfully created.');
            });
        }, error => {
            if (error.status === 400) {
                this.notifierService.notify('error', 'The identifier is already registered.');
            }
            else {
                this.notifierService.notify('error', 'Could not create contribution. Please try again later.');
            }
        });
    }
    onCancel() {
        this.router.navigate(['/admin/contributions']);
    }
};
AddContributionComponent.ctorParameters = () => [
    { type: src_app_core_services_contribution_service__WEBPACK_IMPORTED_MODULE_2__["ContributionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"] }
];
AddContributionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-contribution',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-contribution.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/pages/add-contribution/add-contribution.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-contribution.component.scss */ "./src/app/modules/admin/contributions/pages/add-contribution/add-contribution.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_contribution_service__WEBPACK_IMPORTED_MODULE_2__["ContributionService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
], AddContributionComponent);



/***/ }),

/***/ "./src/app/modules/admin/contributions/pages/edit-contribution/edit-contribution.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/admin/contributions/pages/edit-contribution/edit-contribution.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29udHJpYnV0aW9ucy9wYWdlcy9lZGl0LWNvbnRyaWJ1dGlvbi9lZGl0LWNvbnRyaWJ1dGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/contributions/pages/edit-contribution/edit-contribution.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin/contributions/pages/edit-contribution/edit-contribution.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditContributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContributionComponent", function() { return EditContributionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_contribution_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/contribution.service */ "./src/app/core/services/contribution.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");





let EditContributionComponent = class EditContributionComponent {
    constructor(contributionService, route, router, notifierService) {
        this.contributionService = contributionService;
        this.route = route;
        this.router = router;
        this.notifierService = notifierService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.contributionService.getContribution(params.get('id')).subscribe(contribution => {
                this.contribution = contribution;
            });
        });
    }
    onSave(contribution) {
        this.contributionService.updateContribution(contribution, this.contribution.id).subscribe(() => {
            this.router.navigate(['/admin/contributions']).then(() => {
                this.notifierService.notify('default', 'Contribution successfully updated.');
            });
        }, error => {
            if (error.status === 400) {
                this.notifierService.notify('error', 'The identifier is already registered.');
            }
            else {
                this.notifierService.notify('error', 'Could not create contribution. Please try again later.');
            }
        });
    }
    onCancel() {
        this.router.navigate(['admin/contributions']);
    }
};
EditContributionComponent.ctorParameters = () => [
    { type: src_app_core_services_contribution_service__WEBPACK_IMPORTED_MODULE_2__["ContributionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"] }
];
EditContributionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-contribution',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-contribution.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/contributions/pages/edit-contribution/edit-contribution.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-contribution.component.scss */ "./src/app/modules/admin/contributions/pages/edit-contribution/edit-contribution.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_contribution_service__WEBPACK_IMPORTED_MODULE_2__["ContributionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
], EditContributionComponent);



/***/ })

}]);
//# sourceMappingURL=contributions-contributions-module-es2015.js.map