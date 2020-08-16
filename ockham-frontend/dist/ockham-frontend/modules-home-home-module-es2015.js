(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"slider\">\n  <app-slider [slides]=\"slides\"></app-slider>\n</div>\n<div class=\"custom-padding section-one\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-8\">\n       <app-welcome></app-welcome>\n      </div>\n      <div class=\"col-12 col-sm-4\">\n        <div fxLayout=\"column\" fxFlexFill fxLayoutGap=\"10px\">\n          <div class=\"contact-room\">\n            <h4>OCKHAM ROOM</h4>\n            <p>You find us at <span class=\"emphasize-text\">Technohal 1334 C.</span></p>\n          </div>\n          <div>\n            <h4>OUR SPONSORS</h4>\n            <br>\n            <img class=\"thales-logo w-100\" src=\"assets/img/Logo/ThalesLogo.png\" alt=\"Ockham\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"custom-padding bg-dark-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-8\">\n        <h3>LATEST NEWS</h3>\n        <br>\n        <app-news-list [newsList]=\"news\"></app-news-list>\n        <br>\n        <button class=\"btn btn-primary\" routerLink=\"/news\">Checkout all the news</button>\n      </div>\n      <div class=\"col-12 col-sm-4\">\n        <h3>UPCOMING ACTIVITIES</h3>\n        <br>\n        <app-activity-list [activities]=\"activities\"></app-activity-list>\n        <br>\n        <button class=\"btn btn-primary\" routerLink=\"/activities\">Checkout all the activities</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/slider/slider.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/slider/slider.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"carouselHomePage\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol  class=\"carousel-indicators\">\n      <li *ngFor=\"let slide of slides; let i = index\" data-target=\"#carouselHomePage\" [attr.data-slide-to]=\"i\" [class.active]=\"slide.showFirst\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n        <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.showFirst\">\n          <img class=\"d-block w-100\" src=\"{{slide.imgSrc}}\" alt=\"First slide\">\n          <div class=\"carousel-caption d-none d-lg-flex flex-column justify-content-center\">\n            <h5>{{slide.title}}</h5>\n            <p>{{slide.subTitle}}</p>\n            <button routerLink =\"{{slide.navigateRoute}}\" class=\"btn btn-primary align-self-center\">Read more</button>\n          </div>\n        </div> \n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselHomePage\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselHomePage\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/welcome/welcome.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/welcome/welcome.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>WELCOME TO H.V OCKHAM</h3>\n<br>\n<p>\n  H.V. Ockham is the honours association for students of the Honours Programme of the University of Twente. We\n  are\n  involved in anything and everything that has to do with the Honours Programme and all that is related to it.\n  For\n  more information about the programme itself, we advise you to look at this subsite of the University.We foster\n  the honours community by organising all kinds of activities for our members, such as monthly drinks, lunch\n  lectures and excursions. We also have our very own association room, known as the Ockham Room (Technohal\n  1443C).\n  Feel free to drop by sometime for a cup of coffee, snacks or a chat!\n</p>");

/***/ }),

/***/ "./src/app/modules/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");




const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/modules/home/home.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/news.service */ "./src/app/core/services/news.service.ts");
/* harmony import */ var src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/activity.service */ "./src/app/core/services/activity.service.ts");




let HomeComponent = class HomeComponent {
    constructor(newsService, activityService) {
        this.newsService = newsService;
        this.activityService = activityService;
        this.slides = [
            {
                title: 'Activities',
                subTitle: 'Find out what\'s currently on the agenda',
                navigateRoute: '/activities',
                showFirst: true,
                imgSrc: 'assets/img/slide-image-1.jpg'
            },
            {
                title: 'Companies',
                subTitle: 'Discover our sponsors',
                navigateRoute: '/companies',
                showFirst: false,
                imgSrc: 'assets/img/slide-image-2.jpg'
            },
            {
                title: 'The board',
                subTitle: 'Meet the 11th Board of H.V.Ockham!',
                navigateRoute: '/board',
                showFirst: false,
                imgSrc: 'assets/img/slide-image-3.jpg'
            }
        ];
        this.news = [];
        this.activities = [];
    }
    ngOnInit() {
        this.newsService.getNews(5).subscribe(news => this.news = news);
        this.activityService.getRecentActivities(4).subscribe(activities => this.activities = activities);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] },
    { type: src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_3__["ActivityService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"], src_app_core_services_activity_service__WEBPACK_IMPORTED_MODULE_3__["ActivityService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/modules/home/slider/slider.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/modules/home/welcome/welcome.component.ts");







let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"]],
        imports: [
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/modules/home/slider/slider.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/modules/home/slider/slider.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carousel-caption {\n  top: 0;\n}\n\np {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ha2hpbGJhbmRpL0Rlc2t0b3AvRGVzaWduIFByb2plY3Qvb2NraGFtLWZyb250ZW5kL3NyYy9hcHAvbW9kdWxlcy9ob21lL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaG9tZS9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksTUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIHRvcDogMDtcbn1cblxucCB7XG4gICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcbn0iLCIuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHRvcDogMDtcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/home/slider/slider.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/home/slider/slider.component.ts ***!
  \*********************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SliderComponent = class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], SliderComponent.prototype, "slides", void 0);
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/slider/slider.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slider.component.scss */ "./src/app/modules/home/slider/slider.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SliderComponent);



/***/ }),

/***/ "./src/app/modules/home/welcome/welcome.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/welcome/welcome.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/home/welcome/welcome.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/home/welcome/welcome.component.ts ***!
  \***********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/welcome/welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.scss */ "./src/app/modules/home/welcome/welcome.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WelcomeComponent);



/***/ })

}]);
//# sourceMappingURL=modules-home-home-module-es2015.js.map