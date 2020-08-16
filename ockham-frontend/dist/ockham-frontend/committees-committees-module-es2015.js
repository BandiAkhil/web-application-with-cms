(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["committees-committees-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/committees.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/committees.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-arrow-back routerLink=\"/admin\"></app-arrow-back>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h1>Manage committees</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-pagination-table (delete)=\"deleteCommittee($event)\" (edit)=\"editCommittee($event)\"\n      [data]=\"committees\"\n      [headers]=\"['ID', 'Name', 'Description']\"\n      [keys]=\"['id', 'name', 'description']\"\n      [showActionColumn]=\"true\">\n    </app-pagination-table>\n  </div>\n</div>\n<div class=\"row\" *showIfRole=\"'board'\">\n  <div class=\"col-auto\">\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"add\">\n      <i class=\"material-icons btn-icon\">\n        add\n      </i>\n      Add committee\n    </button>\n  </div>\n  <div class=\"col-auto ml-auto\">\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"columns\">\n      <i class=\"material-icons btn-icon\">\n        storage\n      </i>\n      Manage extra columns\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/components/committee-form/committee-form.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/components/committee-form/committee-form.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"committeeForm\" (ngSubmit)=\"onSave()\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name*</label>\n            <input id=\"name\" type=\"text\" class=\"form-control\" formControlName=\"name\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\">\n            <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.name.errors.required\">Name is required</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <label for=\"description\">Description</label>\n            <textarea rows=\"10\" id=\"description\" type=\"text\" class=\"form-control\" formControlName=\"description\" ></textarea>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <div fxLayout=\"row\">\n        <h6 fxFlexAlign=\"center\">Committee Members:</h6>\n        <span fxFlex></span>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addMembers()\">\n          <i class=\"material-icons btn-icon\">\n            add\n          </i>\n          Add members\n        </button>\n      </div>\n      <br>\n      <app-pagination-table\n        (delete)=\"deleteMember($event)\"\n        (edit)=\"addMembers($event)\"\n        [data]=\"committeeMembers\"\n        [headers]=\"['Firstname', 'Lastname']\"\n        [keys]=\"['first_name', 'last_name']\"\n        [showActionColumn]=\"true\">\n      </app-pagination-table>\n    </div>\n  </div>\n  <div class=\"row pt-3\">\n    <div class=\"col-auto\">\n      <button type=\"submit\" class=\"btn btn-success\">Save</button>\n    </div>\n    <div class=\"col-auto ml-auto\">\n      <button class=\"btn btn-danger\" routerLink=\"/admin/committees\">Cancel</button>\n    </div>\n  </div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/components/committee-member-modal/committee-member-modal.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/components/committee-member-modal/committee-member-modal.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Add members</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismiss()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <app-member-search (memberSelected)=\"onSelectMember($event)\"></app-member-search>\n  <hr>\n  <p><b>Selected Members:</b></p>\n  <div *ngFor=\"let m of committeeMembers\">\n    <p>{{m.first_name}} {{m.last_name}}</p>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"save()\">Save</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/pages/add-committee/add-committee.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/pages/add-committee/add-committee.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-arrow-back routerLink=\"/admin/committees\"></app-arrow-back>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h1>Add committee</h1>\n  </div>\n</div>\n<app-committee-form (save)=\"onSave($event)\"></app-committee-form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/pages/edit-committee/edit-committee.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/pages/edit-committee/edit-committee.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-arrow-back routerLink=\"/admin/committees\"></app-arrow-back>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h1>Edit committee</h1>\n  </div>\n</div>\n<app-committee-form (save)=\"onSave($event)\" [committee]=\"committee\"></app-committee-form>\n");

/***/ }),

/***/ "./src/app/modules/admin/committees/committees-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/admin/committees/committees-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CommitteesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteesRoutingModule", function() { return CommitteesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _committees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./committees.component */ "./src/app/modules/admin/committees/committees.component.ts");
/* harmony import */ var _pages_add_committee_add_committee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/add-committee/add-committee.component */ "./src/app/modules/admin/committees/pages/add-committee/add-committee.component.ts");
/* harmony import */ var src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/guards/role.guard */ "./src/app/core/guards/role.guard.ts");
/* harmony import */ var _pages_edit_committee_edit_committee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/edit-committee/edit-committee.component */ "./src/app/modules/admin/committees/pages/edit-committee/edit-committee.component.ts");







const routes = [
    {
        path: '',
        component: _committees_component__WEBPACK_IMPORTED_MODULE_3__["CommitteesComponent"]
    },
    {
        path: 'add',
        component: _pages_add_committee_add_committee_component__WEBPACK_IMPORTED_MODULE_4__["AddCommitteeComponent"],
        canActivate: [src_app_core_guards_role_guard__WEBPACK_IMPORTED_MODULE_5__["RoleGuard"]],
        data: { role: 'board' }
    },
    {
        path: 'columns',
        loadChildren: () => Promise.all(/*! import() | columns-columns-module */[__webpack_require__.e("common"), __webpack_require__.e("columns-columns-module")]).then(__webpack_require__.bind(null, /*! ../columns/columns.module */ "./src/app/modules/admin/columns/columns.module.ts")).then(m => m.ColumnsModule),
        data: {
            model: 'committees'
        }
    },
    {
        path: ':id/edit',
        component: _pages_edit_committee_edit_committee_component__WEBPACK_IMPORTED_MODULE_6__["EditCommitteeComponent"]
    }
];
let CommitteesRoutingModule = class CommitteesRoutingModule {
};
CommitteesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CommitteesRoutingModule);



/***/ }),

/***/ "./src/app/modules/admin/committees/committees.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/committees/committees.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tbWl0dGVlcy9jb21taXR0ZWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/committees/committees.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/admin/committees/committees.component.ts ***!
  \******************************************************************/
/*! exports provided: CommitteesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteesComponent", function() { return CommitteesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_committee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/committee.service */ "./src/app/core/services/committee.service.ts");
/* harmony import */ var _core_services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/member.service */ "./src/app/core/services/member.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/delete-modal/delete-modal.component */ "./src/app/shared/components/delete-modal/delete-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");









let CommitteesComponent = class CommitteesComponent {
    constructor(committeeService, memberService, authService, modalService, router, notifierService) {
        this.committeeService = committeeService;
        this.memberService = memberService;
        this.authService = authService;
        this.modalService = modalService;
        this.router = router;
        this.notifierService = notifierService;
        this.committees = [];
    }
    ngOnInit() {
        const member = this.authService._getUser();
        if (!member) {
            return;
        }
        this.getCommittees(member);
    }
    getCommittees(member) {
        this.committeeService.fetchCommittees()
            .subscribe(committees => {
            this.committees = committees;
        });
    }
    editCommittee(committee) {
        this.router.navigate([`/admin/committees/${committee.id}/edit`]);
    }
    deleteCommittee(committee) {
        const modalRef = this.modalService.open(_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteModalComponent"]);
        modalRef.componentInstance.objRef = 'this Committee';
        modalRef.componentInstance.delete.subscribe(() => {
            this.committeeService.deleteCommittee(committee.id).subscribe(() => {
                this.committees = this.committees.filter(c => c.id !== committee.id);
                this.notifierService.notify('default', `Committee deleted successfully`);
            }, error => {
                console.log('Error while deleting committee', error);
                this.notifierService.notify('error', `Could not delete committee, try again later`);
            });
        });
    }
};
CommitteesComponent.ctorParameters = () => [
    { type: _core_services_committee_service__WEBPACK_IMPORTED_MODULE_2__["CommitteeService"] },
    { type: _core_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"] },
    { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"] }
];
CommitteesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-committees',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./committees.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/committees.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./committees.component.scss */ "./src/app/modules/admin/committees/committees.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_committee_service__WEBPACK_IMPORTED_MODULE_2__["CommitteeService"],
        _core_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"],
        _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierService"]])
], CommitteesComponent);



/***/ }),

/***/ "./src/app/modules/admin/committees/committees.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/admin/committees/committees.module.ts ***!
  \***************************************************************/
/*! exports provided: CommitteesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteesModule", function() { return CommitteesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _committees_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./committees-routing.module */ "./src/app/modules/admin/committees/committees-routing.module.ts");
/* harmony import */ var _committees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./committees.component */ "./src/app/modules/admin/committees/committees.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_add_committee_add_committee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/add-committee/add-committee.component */ "./src/app/modules/admin/committees/pages/add-committee/add-committee.component.ts");
/* harmony import */ var _pages_edit_committee_edit_committee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/edit-committee/edit-committee.component */ "./src/app/modules/admin/committees/pages/edit-committee/edit-committee.component.ts");
/* harmony import */ var _components_committee_form_committee_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/committee-form/committee-form.component */ "./src/app/modules/admin/committees/components/committee-form/committee-form.component.ts");
/* harmony import */ var _components_committee_member_modal_committee_member_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/committee-member-modal/committee-member-modal.component */ "./src/app/modules/admin/committees/components/committee-member-modal/committee-member-modal.component.ts");









let CommitteesModule = class CommitteesModule {
};
CommitteesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_committees_component__WEBPACK_IMPORTED_MODULE_3__["CommitteesComponent"], _pages_add_committee_add_committee_component__WEBPACK_IMPORTED_MODULE_5__["AddCommitteeComponent"], _pages_edit_committee_edit_committee_component__WEBPACK_IMPORTED_MODULE_6__["EditCommitteeComponent"], _components_committee_form_committee_form_component__WEBPACK_IMPORTED_MODULE_7__["CommitteeFormComponent"], _components_committee_member_modal_committee_member_modal_component__WEBPACK_IMPORTED_MODULE_8__["CommitteeMemberModalComponent"]],
        imports: [
            _committees_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommitteesRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ],
        entryComponents: [_components_committee_member_modal_committee_member_modal_component__WEBPACK_IMPORTED_MODULE_8__["CommitteeMemberModalComponent"]]
    })
], CommitteesModule);



/***/ }),

/***/ "./src/app/modules/admin/committees/components/committee-form/committee-form.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin/committees/components/committee-form/committee-form.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tbWl0dGVlcy9jb21wb25lbnRzL2NvbW1pdHRlZS1mb3JtL2NvbW1pdHRlZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/committees/components/committee-form/committee-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/admin/committees/components/committee-form/committee-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CommitteeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteeFormComponent", function() { return CommitteeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _committee_member_modal_committee_member_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../committee-member-modal/committee-member-modal.component */ "./src/app/modules/admin/committees/components/committee-member-modal/committee-member-modal.component.ts");
/* harmony import */ var _shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/delete-modal/delete-modal.component */ "./src/app/shared/components/delete-modal/delete-modal.component.ts");







let CommitteeFormComponent = class CommitteeFormComponent {
    constructor(formBuilder, modalService) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.submitted = false;
        this.formDirty = false;
        this.committeeMembers = [];
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.committeeForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['']
        });
    }
    set committee(committee) {
        if (committee) {
            this._committee = committee;
            this._committee.memberships.forEach(function (m) {
                this.push(m['member']);
            }, this.committeeMembers);
            this.committeeForm.patchValue(committee);
            this.listenOnFormChanges();
        }
    }
    ngOnInit() {
    }
    listenOnFormChanges() {
        this.committeeForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(value => {
            this.formDirty = true;
        });
    }
    get f() {
        return this.committeeForm.controls;
    }
    addMembers(editMember) {
        const modalRef = this.modalService.open(_committee_member_modal_committee_member_modal_component__WEBPACK_IMPORTED_MODULE_5__["CommitteeMemberModalComponent"], { backdrop: 'static' });
        modalRef.componentInstance.add.subscribe(members => {
            members.forEach(function (member) {
                if (this.findIndex(m => m.id === member.id) === -1) {
                    this.push(member);
                }
            }, this.committeeMembers);
            if (editMember) {
                this.committeeMembers = this.committeeMembers.filter(m => m !== editMember);
            }
        });
    }
    deleteMember(member) {
        const modalRef = this.openDeleteModal();
        modalRef.componentInstance.objRef = 'this member from this committee';
        modalRef.componentInstance.delete.subscribe(() => {
            this.committeeMembers = this.committeeMembers.filter(members => members.id !== member.id);
        });
    }
    openDeleteModal() {
        return this.modalService.open(_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_6__["DeleteModalComponent"]);
    }
    onSave() {
        this.submitted = true;
        if (this.committeeForm.invalid) {
            return;
        }
        const committee = Object.assign({}, this.committeeForm.value);
        committee.members = [];
        if (this._committee) {
            committee.id = this._committee.id;
        }
        this.committeeMembers.forEach((m) => {
            committee.members.push(m.id);
        });
        this.save.emit(committee);
    }
};
CommitteeFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], CommitteeFormComponent.prototype, "save", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], CommitteeFormComponent.prototype, "committee", null);
CommitteeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-committee-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./committee-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/components/committee-form/committee-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./committee-form.component.scss */ "./src/app/modules/admin/committees/components/committee-form/committee-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], CommitteeFormComponent);



/***/ }),

/***/ "./src/app/modules/admin/committees/components/committee-member-modal/committee-member-modal.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/admin/committees/components/committee-member-modal/committee-member-modal.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tbWl0dGVlcy9jb21wb25lbnRzL2NvbW1pdHRlZS1tZW1iZXItbW9kYWwvY29tbWl0dGVlLW1lbWJlci1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/committees/components/committee-member-modal/committee-member-modal.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/admin/committees/components/committee-member-modal/committee-member-modal.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CommitteeMemberModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteeMemberModalComponent", function() { return CommitteeMemberModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let CommitteeMemberModalComponent = class CommitteeMemberModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.committeeMembers = [];
    }
    ngOnInit() {
    }
    dismiss() {
        this.activeModal.dismiss();
    }
    onSelectMember(member) {
        if (this.committeeMembers.indexOf(member) === -1) {
            this.committeeMembers.push(member);
        }
    }
    save() {
        this.add.emit(this.committeeMembers);
        this.activeModal.dismiss();
    }
};
CommitteeMemberModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], CommitteeMemberModalComponent.prototype, "add", void 0);
CommitteeMemberModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-committee-member-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./committee-member-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/components/committee-member-modal/committee-member-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./committee-member-modal.component.scss */ "./src/app/modules/admin/committees/components/committee-member-modal/committee-member-modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], CommitteeMemberModalComponent);



/***/ }),

/***/ "./src/app/modules/admin/committees/pages/add-committee/add-committee.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/admin/committees/pages/add-committee/add-committee.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tbWl0dGVlcy9wYWdlcy9hZGQtY29tbWl0dGVlL2FkZC1jb21taXR0ZWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/committees/pages/add-committee/add-committee.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/admin/committees/pages/add-committee/add-committee.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddCommitteeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommitteeComponent", function() { return AddCommitteeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_committee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/committee.service */ "./src/app/core/services/committee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");





let AddCommitteeComponent = class AddCommitteeComponent {
    constructor(router, committeeService, notifierService) {
        this.router = router;
        this.committeeService = committeeService;
        this.notifierService = notifierService;
    }
    ngOnInit() {
    }
    onSave(committee) {
        this.committeeService.createCommittee(committee).subscribe(() => {
            this.router.navigate(['/admin/committees']);
            this.notifierService.notify('default', `Committee created successfully`);
        }, error => {
            console.log('Error while creating activity', error);
            this.notifierService.notify('error', `Could not create committee, try again later`);
        });
    }
};
AddCommitteeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_committee_service__WEBPACK_IMPORTED_MODULE_2__["CommitteeService"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"] }
];
AddCommitteeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-committee',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-committee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/pages/add-committee/add-committee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-committee.component.scss */ "./src/app/modules/admin/committees/pages/add-committee/add-committee.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_core_services_committee_service__WEBPACK_IMPORTED_MODULE_2__["CommitteeService"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
], AddCommitteeComponent);



/***/ }),

/***/ "./src/app/modules/admin/committees/pages/edit-committee/edit-committee.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/admin/committees/pages/edit-committee/edit-committee.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY29tbWl0dGVlcy9wYWdlcy9lZGl0LWNvbW1pdHRlZS9lZGl0LWNvbW1pdHRlZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/committees/pages/edit-committee/edit-committee.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/admin/committees/pages/edit-committee/edit-committee.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: EditCommitteeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCommitteeComponent", function() { return EditCommitteeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_committee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/committee.service */ "./src/app/core/services/committee.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");





let EditCommitteeComponent = class EditCommitteeComponent {
    constructor(committeeService, route, router, notifierService) {
        this.committeeService = committeeService;
        this.route = route;
        this.router = router;
        this.notifierService = notifierService;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.committeeService.getCommittee(params.id).subscribe(committee => {
                this.committee = committee;
            });
        });
    }
    onSave(committee) {
        this.committeeService.updateCommittee(committee).subscribe(() => {
            this.router.navigate(['/admin/committees']);
            this.notifierService.notify('default', `Committee updated successfully`);
        }, error => {
            console.log('Error while editing Committee', error);
            this.notifierService.notify('error', `Could not update committee, try again later`);
        });
    }
};
EditCommitteeComponent.ctorParameters = () => [
    { type: _core_services_committee_service__WEBPACK_IMPORTED_MODULE_3__["CommitteeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"] }
];
EditCommitteeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-activity-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-committee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/committees/pages/edit-committee/edit-committee.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-committee.component.scss */ "./src/app/modules/admin/committees/pages/edit-committee/edit-committee.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_committee_service__WEBPACK_IMPORTED_MODULE_3__["CommitteeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
], EditCommitteeComponent);



/***/ })

}]);
//# sourceMappingURL=committees-committees-module-es2015.js.map