(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["news-news-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/news/components/news-form/news-form.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/news/components/news-form/news-form.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"newsForm\" (ngSubmit)=\"onSave()\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"form-group\">\n        <label for=\"title\">Title*</label>\n        <input id=\"title\" type=\"text\" class=\"form-control\" formControlName=\"title\"\n               [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\">\n        <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.title.errors.required\">Title is required</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"form-group\">\n        <label for=\"content\">Content*</label>\n        <app-html-editor id=\"content\" name=\"content\" formControlName=\"content\" [ngClass]=\"{ 'is-invalid': submitted && f.content.errors }\"></app-html-editor>\n        <div *ngIf=\"submitted && f.content.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.content.errors.required\">Content is required</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-auto\">\n      <button type=\"submit\" class=\"btn btn-success\">Save</button>\n    </div>\n    <div class=\"col-auto ml-auto\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"onCancel()\">Cancel</button>\n    </div>\n  </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/news/news.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/news/news.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-arrow-back routerLink=\"/admin\"></app-arrow-back>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h1>Manage news</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-pagination-table [data]=\"news\" [headers]=\"['Title', 'Created at', 'Updated at']\"\n      [keys]=\"['title', 'created_at', 'updated_at']\" [showActionColumn]=\"true\" (edit)=\"onEdit($event)\" (delete)=\"onDelete($event)\">\n    </app-pagination-table>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-auto\">\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"add\">\n      <i class=\"material-icons btn-icon\">\n        add\n      </i>\n      Post news\n    </button>\n  </div>\n  <div class=\"col-auto ml-auto\">\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"columns\">\n      <i class=\"material-icons btn-icon\">\n        storage\n      </i>\n      Manage extra columns\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/news/pages/add-news/add-news.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/news/pages/add-news/add-news.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-arrow-back routerLink=\"/admin/news\"></app-arrow-back>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h1>Add news</h1>\n  </div>\n</div>\n<app-news-form (save)=\"onSave($event)\" (cancel)=\"onCancel()\"></app-news-form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/news/pages/edit-news/edit-news.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/news/pages/edit-news/edit-news.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-arrow-back routerLink=\"/admin/news\"></app-arrow-back>\n<div class=\"row\">\n  <div class=\"col-12\">\n    <h1>Edit news item</h1>\n  </div>\n</div>\n<app-news-form *ngIf=\"news\" [news]=\"news\" (save)=\"onSave($event)\" (cancel)=\"onCancel()\"></app-news-form>\n");

/***/ }),

/***/ "./src/app/modules/admin/news/components/news-form/news-form.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin/news/components/news-form/news-form.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbmV3cy9jb21wb25lbnRzL25ld3MtZm9ybS9uZXdzLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/news/components/news-form/news-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/admin/news/components/news-form/news-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFormComponent", function() { return NewsFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




let NewsFormComponent = class NewsFormComponent {
    constructor() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.submitted = false;
    }
    ngOnInit() {
        if (this.news) {
            this.newsForm.patchValue(this.news);
        }
    }
    get f() { return this.newsForm.controls; }
    onSave() {
        this.submitted = true;
        if (this.newsForm.invalid) {
            return;
        }
        const news = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.newsForm.value);
        this.save.emit(news);
    }
    onCancel() {
        this.cancel.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NewsFormComponent.prototype, "news", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], NewsFormComponent.prototype, "save", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], NewsFormComponent.prototype, "cancel", void 0);
NewsFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/news/components/news-form/news-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news-form.component.scss */ "./src/app/modules/admin/news/components/news-form/news-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NewsFormComponent);



/***/ }),

/***/ "./src/app/modules/admin/news/news-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/admin/news/news-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NewsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function() { return NewsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.component */ "./src/app/modules/admin/news/news.component.ts");
/* harmony import */ var _pages_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/add-news/add-news.component */ "./src/app/modules/admin/news/pages/add-news/add-news.component.ts");
/* harmony import */ var _pages_edit_news_edit_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/edit-news/edit-news.component */ "./src/app/modules/admin/news/pages/edit-news/edit-news.component.ts");






const routes = [
    {
        path: '',
        component: _news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"]
    },
    {
        path: 'add',
        component: _pages_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_4__["AddNewsComponent"]
    },
    {
        path: ':id/edit',
        component: _pages_edit_news_edit_news_component__WEBPACK_IMPORTED_MODULE_5__["EditNewsComponent"]
    },
    {
        path: 'columns',
        loadChildren: () => Promise.all(/*! import() | columns-columns-module */[__webpack_require__.e("common"), __webpack_require__.e("columns-columns-module")]).then(__webpack_require__.bind(null, /*! ../columns/columns.module */ "./src/app/modules/admin/columns/columns.module.ts")).then(m => m.ColumnsModule),
        data: {
            model: 'news'
        }
    }
];
let NewsRoutingModule = class NewsRoutingModule {
};
NewsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], NewsRoutingModule);



/***/ }),

/***/ "./src/app/modules/admin/news/news.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/admin/news/news.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/news/news.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/admin/news/news.component.ts ***!
  \******************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/news.service */ "./src/app/core/services/news.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/delete-modal/delete-modal.component */ "./src/app/shared/components/delete-modal/delete-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");







let NewsComponent = class NewsComponent {
    constructor(newsService, router, modalService, notifierService) {
        this.newsService = newsService;
        this.router = router;
        this.modalService = modalService;
        this.notifierService = notifierService;
        this.news = [];
    }
    ngOnInit() {
        this.getNews();
    }
    getNews() {
        this.newsService.getNews()
            .subscribe(news => this.news = news);
    }
    onEdit(row) {
        this.router.navigate([`/admin/news/${row.id}/edit`]);
    }
    onDelete(row) {
        const modalRef = this.openDeleteModal();
        modalRef.componentInstance.objRef = 'news';
        modalRef.componentInstance.delete.subscribe(() => {
            this.newsService.deleteNewsItem(row.id).subscribe(() => {
                this.notifierService.notify('default', 'News item successfully deleted.');
                this.getNews();
            });
        });
    }
    openDeleteModal() {
        return this.modalService.open(src_app_shared_components_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_4__["DeleteModalComponent"]);
    }
};
NewsComponent.ctorParameters = () => [
    { type: _core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"] }
];
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/news/news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.component.scss */ "./src/app/modules/admin/news/news.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"]])
], NewsComponent);



/***/ }),

/***/ "./src/app/modules/admin/news/news.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/admin/news/news.module.ts ***!
  \***************************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-routing.module */ "./src/app/modules/admin/news/news-routing.module.ts");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.component */ "./src/app/modules/admin/news/news.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/add-news/add-news.component */ "./src/app/modules/admin/news/pages/add-news/add-news.component.ts");
/* harmony import */ var _components_news_form_news_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/news-form/news-form.component */ "./src/app/modules/admin/news/components/news-form/news-form.component.ts");
/* harmony import */ var _pages_edit_news_edit_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/edit-news/edit-news.component */ "./src/app/modules/admin/news/pages/edit-news/edit-news.component.ts");








let NewsModule = class NewsModule {
};
NewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"], _pages_add_news_add_news_component__WEBPACK_IMPORTED_MODULE_5__["AddNewsComponent"], _components_news_form_news_form_component__WEBPACK_IMPORTED_MODULE_6__["NewsFormComponent"], _pages_edit_news_edit_news_component__WEBPACK_IMPORTED_MODULE_7__["EditNewsComponent"]],
        imports: [
            _news_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewsRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], NewsModule);



/***/ }),

/***/ "./src/app/modules/admin/news/pages/add-news/add-news.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/news/pages/add-news/add-news.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbmV3cy9wYWdlcy9hZGQtbmV3cy9hZGQtbmV3cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/news/pages/add-news/add-news.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin/news/pages/add-news/add-news.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewsComponent", function() { return AddNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/news.service */ "./src/app/core/services/news.service.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");





let AddNewsComponent = class AddNewsComponent {
    constructor(newsService, router, notifierService) {
        this.newsService = newsService;
        this.router = router;
        this.notifierService = notifierService;
    }
    ngOnInit() {
    }
    onSave(news) {
        this.newsService.createNewsItem(news).subscribe(() => {
            this.router.navigate(['/admin/news']).then(() => {
                this.notifierService.notify('default', 'News item successfully created.');
            });
        });
    }
    onCancel() {
        this.router.navigate(['/admin/news']);
    }
};
AddNewsComponent.ctorParameters = () => [
    { type: src_app_core_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"] }
];
AddNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/news/pages/add-news/add-news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-news.component.scss */ "./src/app/modules/admin/news/pages/add-news/add-news.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
], AddNewsComponent);



/***/ }),

/***/ "./src/app/modules/admin/news/pages/edit-news/edit-news.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin/news/pages/edit-news/edit-news.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vbmV3cy9wYWdlcy9lZGl0LW5ld3MvZWRpdC1uZXdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/news/pages/edit-news/edit-news.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/admin/news/pages/edit-news/edit-news.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditNewsComponent", function() { return EditNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/news.service */ "./src/app/core/services/news.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");





let EditNewsComponent = class EditNewsComponent {
    constructor(newsService, route, router, notifierService) {
        this.newsService = newsService;
        this.route = route;
        this.router = router;
        this.notifierService = notifierService;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.newsService.getNewsItem(params.get('id')).subscribe(news => {
                this.news = news;
            });
        });
    }
    onSave(news) {
        this.newsService.updateNewsItem(news, this.news.id).subscribe(() => {
            this.router.navigate(['/admin/news']).then(() => {
                this.notifierService.notify('default', 'News item successfully updated.');
            });
        });
    }
    onCancel() {
        this.router.navigate(['/admin/news']);
    }
};
EditNewsComponent.ctorParameters = () => [
    { type: src_app_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"] }
];
EditNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/news/pages/edit-news/edit-news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-news.component.scss */ "./src/app/modules/admin/news/pages/edit-news/edit-news.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]])
], EditNewsComponent);



/***/ })

}]);
//# sourceMappingURL=news-news-module-es2015.js.map