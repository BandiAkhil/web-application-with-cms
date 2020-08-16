(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-news-news-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news-item/news-item.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news-item/news-item.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-padding\">\n  <div class=\"container\">\n    <app-arrow-back routerLink=\"/news\"></app-arrow-back>\n    <div class=\"content\" *ngIf=\"newsItem\">\n      <h2 class=\"article-title\">{{ newsItem.title }}</h2>\n      <p><small>\n        Posted: {{ newsItem.created_at }}\n        <br>\n        Last updated: {{ newsItem.updated_at }}\n      </small></p>\n      <p [innerHTML]=\"content\"></p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-padding\">\n  <div class=\"container\">\n    <div class=\"content\">\n      <h1>News</h1>\n      <br>\n      <app-news-list [newsList]=\"news | slice: (paginationPage-1) * paginationSize : (paginationPage-1) * paginationSize + paginationSize\"></app-news-list>\n      <ngb-pagination class=\"justify-content-center d-flex\"\n                      [(page)]=\"paginationPage\"\n                      [pageSize]=\"paginationSize\"\n                      [collectionSize]=\"news.length\"\n                      [maxSize]=\"7\"\n                      [rotate]=\"true\"></ngb-pagination>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/modules/news/news-item/news-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/news/news-item/news-item.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmV3cy9uZXdzLWl0ZW0vbmV3cy1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/news/news-item/news-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/news/news-item/news-item.component.ts ***!
  \***************************************************************/
/*! exports provided: NewsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemComponent", function() { return NewsItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/news.service */ "./src/app/core/services/news.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let NewsItemComponent = class NewsItemComponent {
    constructor(route, router, newsService, notifierService, sanitizer) {
        this.route = route;
        this.router = router;
        this.newsService = newsService;
        this.notifierService = notifierService;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.getNewsItem(params.get('id'));
        });
    }
    getNewsItem(id) {
        this.newsService.getNewsItem(id)
            .subscribe(item => {
            this.newsItem = item;
        }, () => {
            this.router.navigate(['/news']).then(() => {
                this.notifierService.notify('warning', 'The news item does not exist.');
            });
        });
    }
    get content() {
        // return this.sanitizer.sanitize(SecurityContext.HTML, this.newsItem.content);
        return this.sanitizer.bypassSecurityTrustHtml(this.newsItem.content);
    }
};
NewsItemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] },
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
NewsItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news-item/news-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news-item.component.scss */ "./src/app/modules/news/news-item/news-item.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"],
        angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
], NewsItemComponent);



/***/ }),

/***/ "./src/app/modules/news/news-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/news/news-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NewsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function() { return NewsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.component */ "./src/app/modules/news/news.component.ts");
/* harmony import */ var _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-item/news-item.component */ "./src/app/modules/news/news-item/news-item.component.ts");





const routes = [
    {
        path: '',
        component: _news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"]
    },
    {
        path: ':id',
        component: _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_4__["NewsItemComponent"]
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

/***/ "./src/app/modules/news/news.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/news/news.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/news/news.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/news/news.component.ts ***!
  \************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/news.service */ "./src/app/core/services/news.service.ts");



let NewsComponent = class NewsComponent {
    constructor(newsService) {
        this.newsService = newsService;
        this.news = [];
        this.paginationPage = 0;
        this.paginationSize = 10;
    }
    ngOnInit() {
        this.getNews();
    }
    getNews() {
        this.newsService.getNews()
            .subscribe(news => this.news = news);
    }
};
NewsComponent.ctorParameters = () => [
    { type: src_app_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] }
];
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/news/news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./news.component.scss */ "./src/app/modules/news/news.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]])
], NewsComponent);



/***/ }),

/***/ "./src/app/modules/news/news.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/news/news.module.ts ***!
  \*********************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-routing.module */ "./src/app/modules/news/news-routing.module.ts");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news.component */ "./src/app/modules/news/news.component.ts");
/* harmony import */ var _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-item/news-item.component */ "./src/app/modules/news/news-item/news-item.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let NewsModule = class NewsModule {
};
NewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"], _news_item_news_item_component__WEBPACK_IMPORTED_MODULE_5__["NewsItemComponent"]],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _news_routing_module__WEBPACK_IMPORTED_MODULE_3__["NewsRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"]
        ]
    })
], NewsModule);



/***/ })

}]);
//# sourceMappingURL=modules-news-news-module-es2015.js.map