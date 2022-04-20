(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page.component */ "./src/app/pages/page.component.ts");




var routes = [
    {
        path: '',
        component: _pages_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"],
        data: { title: 'Home Page' }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pp-main-block {\n    padding-left: 10em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcC1tYWluLWJsb2NrIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"pp-app-block\">\n  <app-header-navbar></app-header-navbar>\n  <div class=\"pp-main-block\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pankaj-portfolio';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page.component */ "./src/app/pages/page.component.ts");
/* harmony import */ var _header_navbar_header_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header-navbar/header-navbar.component */ "./src/app/header-navbar/header-navbar.component.ts");
/* harmony import */ var _util_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util/timeline/timeline.component */ "./src/app/util/timeline/timeline.component.ts");
/* harmony import */ var _util_cards_cards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/cards/cards.component */ "./src/app/util/cards/cards.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pages_page_component__WEBPACK_IMPORTED_MODULE_7__["PageComponent"],
                _header_navbar_header_navbar_component__WEBPACK_IMPORTED_MODULE_8__["HeaderNavbarComponent"],
                _util_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_9__["TimelineComponent"],
                _util_cards_cards_component__WEBPACK_IMPORTED_MODULE_10__["CardsComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header-navbar/header-navbar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/header-navbar/header-navbar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pp-header-navbar {\n    width: 10em;\n    height: 100%;\n    position: fixed;\n    left: 0;\n    top: 0;\n    background: rgb(9 9 9 / 90%);\n}\n\n.pp-header-navbar .pp-logo {\n    width: 100%;\n    height: 90px;\n    margin: 30px 0;\n    background: url('logo.png') no-repeat center center;\n    background-size: contain;\n}\n\n.pp-navbar-link{\n    color: #fff;\n    font-size: 1.1em;\n    text-decoration: none;\n    padding: 10px;\n    text-align: center;\n    border: solid 1px rgb(90, 89, 89);\n    border-left: 0;\n    border-right: 0;\n    cursor: pointer;\n}\n\n.pp-navbar-link a{\n    color: #fff;\n    text-decoration: none;\n}\n\n.pp-navbar-link .pp-social-media-links {\n    display: flex;\n    justify-content: center;\n    gap: 14px;\n}\n\n.pp-navbar-link:hover{\n    background: rgb(90, 89, 89);\n}\n\n.pp-author-name {\n    text-align: center;\n    color: white;\n    padding-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLW5hdmJhci9oZWFkZXItbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixPQUFPO0lBQ1AsTUFBTTtJQUNOLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLG1EQUFtRTtJQUNuRSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1uYXZiYXIvaGVhZGVyLW5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBwLWhlYWRlci1uYXZiYXIge1xuICAgIHdpZHRoOiAxMGVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiKDkgOSA5IC8gOTAlKTtcbn1cblxuLnBwLWhlYWRlci1uYXZiYXIgLnBwLWxvZ28ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTBweDtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLnBwLW5hdmJhci1saW5re1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYig5MCwgODksIDg5KTtcbiAgICBib3JkZXItbGVmdDogMDtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHAtbmF2YmFyLWxpbmsgYXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5wcC1uYXZiYXItbGluayAucHAtc29jaWFsLW1lZGlhLWxpbmtzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTRweDtcbn1cblxuLnBwLW5hdmJhci1saW5rOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHJnYig5MCwgODksIDg5KTtcbn1cblxuLnBwLWF1dGhvci1uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header-navbar/header-navbar.component.html":
/*!************************************************************!*\
  !*** ./src/app/header-navbar/header-navbar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pp-header-navbar\">\n  <div class=\"pp-logo\"></div>\n  <div class=\"pp-author-name\">Pankaj Prajapati</div>\n  <div class=\"pp-navbar-link\">\n    <a href=\"#projects_section\">Projects</a>\n  </div>\n  <div class=\"pp-navbar-link\">\n    <a href=\"#about_section\">About</a>\n  </div>\n  <div class=\"pp-navbar-link\">\n    <a href=\"#timeline_section\">Progress</a>\n  </div>\n  <div class=\"pp-navbar-link\">\n    <a href=\"#articles_section\">Articles</a>\n  </div>\n  <div class=\"pp-navbar-link\">\n    <a href=\"#contact_section\">Contact</a>\n  </div>\n  <div class=\"pp-navbar-link\">\n    <div class=\"pp-social-media-links\">\n      <a href=\"https://github.com/paprajapati9\" target=\"_blank\">\n        <i class=\"fa fa-github\"></i>\n      </a>\n      <a href=\"https://www.linkedin.com/in/pankaj-prajapati-668982163/\" target=\"_blank\">\n        <i class=\"fa fa-linkedin-square\"></i>\n      </a>\n      <a href=\"https://stackoverflow.com/users/11807615/pankaj-prajapati\" target=\"_blank\">\n        <i class=\"fa fa-stack-overflow\"></i>\n      </a>\n    </div>\n  </div>\n<div>\n"

/***/ }),

/***/ "./src/app/header-navbar/header-navbar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/header-navbar/header-navbar.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavbarComponent", function() { return HeaderNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderNavbarComponent = /** @class */ (function () {
    function HeaderNavbarComponent() {
    }
    HeaderNavbarComponent.prototype.ngOnInit = function () {
    };
    HeaderNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-navbar',
            template: __webpack_require__(/*! ./header-navbar.component.html */ "./src/app/header-navbar/header-navbar.component.html"),
            styles: [__webpack_require__(/*! ./header-navbar.component.css */ "./src/app/header-navbar/header-navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderNavbarComponent);
    return HeaderNavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pp-intro-heading {\n    padding-top: 60px;\n    color: white;\n}\n\n.pp-intro-description {\n    width: 80%;\n    line-height: 1.7em;\n}\n\n.pp-about-container {\n    display: flex;\n    flex-direction: row;\n}\n\n.pp-image-container {\n    padding-top: 80px;\n    padding-right: 40px;\n}\n\n.pp-image-container img {\n    border-radius: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcC1pbnRyby1oZWFkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcC1pbnRyby1kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XG59XG5cbi5wcC1hYm91dC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnBwLWltYWdlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLnBwLWltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pp-about-container\">\n  <div class=\"pp-intro-heading\">\n    <h2>Me, <span class=\"pp-accent-300\">Myself & I</span></h2>\n    <p class=\"pp-intro-description\">Since the time I started as a\n      python developer I have come a long way as I worked with a lot of\n      different technologies and frameworks which makes a wide spectrum.<br><br>\n      I have been very <span class=\"pp-primary-400\">passionate</span> about\n      <span class=\"pp-primary-400\">Software Development</span> as a whole and\n      am always looking to learn new things and improve my skills.<br><br>\n      Working in a company and open source organization have made me interact\n      and learm from a lot of different people across the globe.<br><br>\n      As a lot of work I have done has been related to \n      <span class=\"pp-primary-400\">Web Development, Machine Learning and DataScience</span>, these\n      are the major areas I have knowledge in but I have\n      never tried to limit myself to one particular technology and always tried to\n      learn new things as they come up.<br><br>\n    </p>\n  </div>\n  <div class=\"pp-image-container\">\n    <img src=\"../../../assets/images/photo.png\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pp-contact-container {\n    background-color: white;\n    box-shadow: 0 0 15px #dcdcdc;\n    width: 60%;\n    margin: auto;\n    padding: 40px;\n    position: absolute;\n    top: 230px;\n    left: 220px;\n}\n\n.pp-contact-container h2 {\n    font-size: 2.7em;\n    text-align: center;\n    color: var(--primary-500);\n}\n\n.pp-form-container {\n    text-align: center;\n    padding-top: 40px;\n    display: grid;\n    grid-gap: 20px;\n}\n\n.pp-form-container form {\n    display: grid;\n    grid-gap: 20px;\n}\n\n.pp-form-container .form-group,\n.pp-form-container .form-group button[type=\"submit\"] {\n    width: 320px;\n    margin: auto;\n}\n\n.pp-form-container .form-group input,\n.pp-form-container .form-group textarea,\n.pp-form-container .form-group button[type=\"submit\"] {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #DCDCDC;\n    border-radius: 5px;\n    font-size: 1.1em;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.pp-form-container .form-group textarea {\n    height: 100px;\n    resize: none;\n}\n\n.pp-form-container .form-group button[type=\"submit\"] {\n    background-color: #00BFFF;\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n    width: 342px;\n}\n\n.pp-form-container .form-group button[type=\"submit\"]:disabled {\n    background-color: #DCDCDC;\n    color: white;\n    font-weight: bold;\n    cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBwLWNvbnRhY3QtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCAjZGNkY2RjO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjMwcHg7XG4gICAgbGVmdDogMjIwcHg7XG59XG5cbi5wcC1jb250YWN0LWNvbnRhaW5lciBoMiB7XG4gICAgZm9udC1zaXplOiAyLjdlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTtcbn1cblxuLnBwLWZvcm0tY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMjBweDtcbn1cblxuLnBwLWZvcm0tY29udGFpbmVyIGZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDIwcHg7XG59XG5cbi5wcC1mb3JtLWNvbnRhaW5lciAuZm9ybS1ncm91cCxcbi5wcC1mb3JtLWNvbnRhaW5lciAuZm9ybS1ncm91cCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgd2lkdGg6IDMyMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnBwLWZvcm0tY29udGFpbmVyIC5mb3JtLWdyb3VwIGlucHV0LFxuLnBwLWZvcm0tY29udGFpbmVyIC5mb3JtLWdyb3VwIHRleHRhcmVhLFxuLnBwLWZvcm0tY29udGFpbmVyIC5mb3JtLWdyb3VwIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQ0RDREM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xufVxuXG4ucHAtZm9ybS1jb250YWluZXIgLmZvcm0tZ3JvdXAgdGV4dGFyZWEge1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4ucHAtZm9ybS1jb250YWluZXIgLmZvcm0tZ3JvdXAgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEJGRkY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMzQycHg7XG59XG5cbi5wcC1mb3JtLWNvbnRhaW5lciAuZm9ybS1ncm91cCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RDRENEQztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pp-contact-container\">\n  <h2 class=\"text-center\">Reach out and say Hi! 👋</h2>\n  <div class=\"pp-form-container\">\n    <form [formGroup]=\"FormData\" (ngSubmit)=\"submitContactForm(FormData)\">\n      <div class=\"form-group\">\n        <input required type=\"text\" class=\"form-control\" name=\"Fullname\" placeholder=\"What's your name?\" formControlName=\"Fullname\">\n      </div>\n      <div class=\"form-group\">\n        <input required type=\"email\" class=\"form-control\" name=\"Email\" aria-describedby=\"emailHelp\" placeholder=\"What's your email?\"formControlName=\"Email\">\n      </div>\n      <div class=\"form-group\">\n        <textarea required placeholder=\"Message\" class=\"form-control\" formControlName=\"Comment\" name=\"Comment\">\n        </textarea>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!FormData.valid\">Submit</button>\n      </div>\n    </form>\n    <small id=\"help\" class=\"form-text text-muted\">Don't worry you information is safe here.</small>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_mailing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/mailing.service */ "./src/app/services/mailing.service.ts");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(formBuilder, mailingService) {
        this.formBuilder = formBuilder;
        this.mailingService = mailingService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.FormData = this.formBuilder.group({
            Fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])]),
            Comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    ContactComponent.prototype.submitContactForm = function (contactForm) {
        if (contactForm.valid) {
            this.mailingService.sendMail(contactForm);
        }
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_mailing_service__WEBPACK_IMPORTED_MODULE_3__["MailingService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/page.component.css":
/*!******************************************!*\
  !*** ./src/app/pages/page.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pp-background-container {\n    font-family: sans-serif;\n    padding: 60px;\n    background-color: var(--neutral-500);\n}\n\n.pp-heading-block {\n    color: #fff;\n    padding-top: 80px;\n    padding-bottom: 80px;\n    min-height: 80vh;\n}\n\n.pp-heading-block-description {\n    color: rgb(161, 161, 161);\n    font-size: 1.4em;\n    margin: 0;\n    padding-top: 40px;\n}\n\n.pp-secondary-button {\n    background: transparent;\n    border-color: var(--primary-400);\n    color: var(--primary-400);\n    cursor: pointer;\n    font-size: 1.1em;\n    letter-spacing: 1px;\n    margin-top: 50px;\n    padding: 12px 34px;\n}\n\n.pp-secondary-button a {\n    color: var(--primary-400);\n    text-decoration: none;\n}\n\n.pp-secondary-button:hover {\n    background: var(--primary-600);\n    color: #fff;\n}\n\n.pp-projects-container {\n    color: #fff;\n    padding-top: 0px;\n    position: relative;\n    overflow: hidden;\n}\n\n.pp-projects-description {\n    text-align: center;\n    border-top: dashed 2px var(--primary-400);\n    padding-top: 60px;\n}\n\n.pp-right-background-text {\n    position: absolute;\n    bottom: 0.0em;\n    right: -1.9em;\n    z-index: 0;\n    color: rgba(255,255,255,0.04);\n    font-size: 30em;\n}\n\n.pp-timeline-container {\n    position: relative;\n    overflow: hidden;\n}\n\n.pp-left-background-text {\n    position: absolute;\n    top: 0.25em;\n    left: 0em;\n    z-index: 0;\n    color: rgba(255,255,255,0.04);\n    font-size: 30em;\n}\n\n.pp-blogs-container {\n    position: relative;\n    overflow: hidden;\n}\n\n.pp-articles-heading {\n    text-align: center;\n    color: #fff;\n}\n\n.pp-contact-container {\n    padding: 60px 0;\n    position: relative;\n    height: 750px;\n}\n\n.pp-contact-background {\n    height: 420px;\n    background: url('/assets/images/download.png');\n}\n\n.pp-contact-background  h2 {\n    font-size: 2.8em;\n    text-align: center;\n    padding-top: 60px;\n}\n\n.pp-footer-container {\n    background-color: var(--neutral-500);\n    color: #fff;\n    text-align: center;\n    padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHAtYmFja2dyb3VuZC1jb250YWluZXIge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV1dHJhbC01MDApO1xufVxuXG4ucHAtaGVhZGluZy1ibG9jayB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XG4gICAgbWluLWhlaWdodDogODB2aDtcbn1cblxuLnBwLWhlYWRpbmctYmxvY2stZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiByZ2IoMTYxLCAxNjEsIDE2MSk7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5wcC1zZWNvbmRhcnktYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBwYWRkaW5nOiAxMnB4IDM0cHg7XG59XG5cbi5wcC1zZWNvbmRhcnktYnV0dG9uIGEge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucHAtc2Vjb25kYXJ5LWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS02MDApO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ucHAtcHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHAtcHJvamVjdHMtZGVzY3JpcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiBkYXNoZWQgMnB4IHZhcigtLXByaW1hcnktNDAwKTtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbn1cblxuLnBwLXJpZ2h0LWJhY2tncm91bmQtdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMC4wZW07XG4gICAgcmlnaHQ6IC0xLjllbTtcbiAgICB6LWluZGV4OiAwO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICAgIGZvbnQtc2l6ZTogMzBlbTtcbn1cblxuLnBwLXRpbWVsaW5lLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcC1sZWZ0LWJhY2tncm91bmQtdGV4dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMC4yNWVtO1xuICAgIGxlZnQ6IDBlbTtcbiAgICB6LWluZGV4OiAwO1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO1xuICAgIGZvbnQtc2l6ZTogMzBlbTtcbn1cblxuLnBwLWJsb2dzLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcC1hcnRpY2xlcy1oZWFkaW5nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5wcC1jb250YWN0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNjBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDc1MHB4O1xufVxuXG4ucHAtY29udGFjdC1iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDQyMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvZG93bmxvYWQucG5nJyk7XG59XG5cbi5wcC1jb250YWN0LWJhY2tncm91bmQgIGgyIHtcbiAgICBmb250LXNpemU6IDIuOGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbn1cblxuLnBwLWZvb3Rlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtNTAwKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/page.component.html":
/*!*******************************************!*\
  !*** ./src/app/pages/page.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pp-background-container pp-heading-block\">\n  <h1>Hi,\n    <br>\n    I'm <span class=\"pp-accent-400\">{{name}}</span>\n  </h1>\n  <p class=\"pp-heading-block-description\">\n    Software Developer / Full Stack Web Developer / <br><br>\n    Open Source Contributor / AI-ML Enthusiast\n  </p>\n  <button class=\"pp-secondary-button\">\n    <a href=\"#contact_section\">\n      Get in touch!\n    </a>\n  </button>\n</div>\n<section class=\"pp-background-container pp-projects-container\">\n  <a id=\"projects_section\"></a>\n  <div class=\"pp-projects-description\">\n    <h2>My <span class=\"pp-accent-300\">Projects</span></h2>\n    <p>Here is a list of a few projects I have done during the last 3 years.</p>\n  </div>\n  <app-cards [cardsData]=\"projectsData\"></app-cards>\n  <div class=\"pp-right-background-text\">Projects</div>\n</section>\n<section class=\"pp-background-container pp-intro-container\">\n  <a id=\"about_section\"></a>\n  <hr class=\"pp-seperator dotted\">\n  <app-about></app-about>\n</section>\n<section class=\"pp-background-container pp-timeline-container\">\n  <a id=\"timeline_section\"></a>\n  <hr class=\"pp-seperator dotted\">\n  <app-timeline></app-timeline>\n  <div class=\"pp-left-background-text\">Timeline</div>\n</section>\n<section class=\"pp-background-container pp-blogs-container\">\n  <a id=\"articles_section\"></a>\n  <h2 class=\"pp-articles-heading\">My <span class=\"pp-accent-300\">Articles</span></h2>\n  <app-cards [articleCard]=\"True\"\n             [cardsData]=\"blogsData\">\n  </app-cards>\n  <div class=\"pp-right-background-text\">Articles</div>\n</section>\n<section class=\"pp-background-container pp-contact-container\">\n  <a id=\"contact_section\"></a>\n  <div class=\"pp-contact-background\">\n    <h2>Let's build something amazing together!</h2>\n  </div>\n  <app-contact></app-contact>\n</section>\n<footer class=\"pp-footer-container\">\n  Made with <i class=\"fa fa-heart\" style=\"color:rgb(255, 0, 0);\"></i> by Pankaj\n</footer>"

/***/ }),

/***/ "./src/app/pages/page.component.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/page.component.ts ***!
  \*****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageComponent = /** @class */ (function () {
    function PageComponent() {
        this.page = {
            title: 'Home',
            subtitle: 'Welcome Home!',
            content: 'Some home content.',
            image: 'assets/images/algoviz.png'
        };
        this.name = 'Pankaj';
        this.projectsData = [
            {
                name: 'AlgoViz',
                image: 'assets/images/algoviz.png'
            },
            {
                name: 'Chatterbox',
                image: 'assets/images/chatterbox.png'
            },
            {
                name: 'Kronos Website',
                image: 'assets/images/kronos.png'
            },
            {
                name: 'Youtube Downloader',
                image: 'assets/images/youtube-downloader.png'
            },
            {
                name: 'Movie Recommendation System',
                image: 'assets/images/movie-recommendation.png'
            },
        ];
        this.blogsData = [
            {
                name: 'Auto Changing Theme',
                image: 'assets/images/light-dark.png',
                link: 'https://towardsdev.com/creating-an-auto-changing-theme-website-based-on-user-time-785d22c63705'
            },
            {
                name: 'Chatterbox',
                image: 'assets/images/chatterbox.png'
            },
            {
                name: 'Kronos Website',
                image: 'assets/images/kronos.png'
            },
            {
                name: 'Youtube Downloader',
                image: 'assets/images/youtube-downloader.png'
            },
            {
                name: 'Movie Recommendation System',
                image: 'assets/images/movie-recommendation.png'
            },
        ];
        this.contactImage = 'assets/images/sky.png';
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/pages/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/pages/page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/services/mailing.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/mailing.service.ts ***!
  \*********************************************/
/*! exports provided: MailingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailingService", function() { return MailingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var MailingService = /** @class */ (function () {
    function MailingService(http) {
        this.http = http;
        this.mailApiId = 'xoqreyoj';
        this.apiUrl = 'https://formspree.io/';
    }
    MailingService.prototype.sendMail = function (form) {
        var email = form.value;
        console.log(email, "email");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        this.http.post(this.apiUrl + this.mailApiId, { name: email.Fullname, replyto: email.Email, message: email.Comment }, { 'headers': headers }).subscribe(function (response) {
            console.log(response);
        });
    };
    MailingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MailingService);
    return MailingService;
}());



/***/ }),

/***/ "./src/app/util/cards/cards.component.css":
/*!************************************************!*\
  !*** ./src/app/util/cards/cards.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pp-cards-container {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-row-gap: 20px;\n    margin-top: 40px;\n}\n\n.pp-card-details {\n    height: 240px;\n    width: 260px;\n    position: relative;\n}\n\n.pp-card-header {\n    position: absolute;\n    top: 110px;\n    text-align: center;\n    z-index: 10;\n    width: 100%;\n}\n\n.pp-card-background {\n    position: absolute;\n    width: 260px;\n    height: 240px;\n    top: 0;\n    background: rgb(20 27 65 / 41%);\n}\n\n.pp-card-image {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbC9jYXJkcy9jYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsTUFBTTtJQUNOLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQW1CO09BQW5CLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3V0aWwvY2FyZHMvY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcC1jYXJkcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICBncmlkLXJvdy1nYXA6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLnBwLWNhcmQtZGV0YWlscyB7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHAtY2FyZC1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDExMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnBwLWNhcmQtYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNjBweDtcbiAgICBoZWlnaHQ6IDI0MHB4O1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAgMjcgNjUgLyA0MSUpO1xufVxuXG4ucHAtY2FyZC1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG59Il19 */"

/***/ }),

/***/ "./src/app/util/cards/cards.component.html":
/*!*************************************************!*\
  !*** ./src/app/util/cards/cards.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pp-cards-container\" *ngIf=\"cardsData\">\n  <div *ngFor=\"let card of cardsData\" [routerLink]=\"\">\n      <div class=\"pp-card-details\">\n        <mat-card-header class=\"pp-card-header\">\n          <mat-card-title>{{card.name}}</mat-card-title>\n        </mat-card-header>\n        <div class=\"pp-card-background\"></div>\n        <img class=\"pp-card-image\" *ngIf=\"card.image\" src=\"{{card.image}}\">\n      </div>\n  <div>\n</div>"

/***/ }),

/***/ "./src/app/util/cards/cards.component.ts":
/*!***********************************************!*\
  !*** ./src/app/util/cards/cards.component.ts ***!
  \***********************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
        this.articleCard = false;
    }
    CardsComponent.prototype.ngOnInit = function () {
        console.log(this.cardsData, "cardsData");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CardsComponent.prototype, "cardsData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CardsComponent.prototype, "articleCard", void 0);
    CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/util/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.css */ "./src/app/util/cards/cards.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/util/timeline/timeline.component.css":
/*!******************************************************!*\
  !*** ./src/app/util/timeline/timeline.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    box-sizing: border-box;\n  }\n  \n  /* Set a background color */\n  \n  body {\n    background-color: #474e5d;\n    font-family: Helvetica, sans-serif;\n  }\n  \n  .timeline-heading h1 {\n    font-size: 3em;\n    margin: 0;\n  }\n  \n  .timeline h2 {\n    font-size: 1.5em;\n    margin: 0;\n  }\n  \n  .timeline-heading {\n    color: #fff;\n    margin: 50px 0;\n    text-align: center;\n  }\n  \n  /* The actual timeline (the vertical ruler) */\n  \n  .timeline {\n    position: relative;\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n  \n  /* The actual timeline (the vertical ruler) */\n  \n  .timeline::after {\n    content: '';\n    position: absolute;\n    width: 6px;\n    background-color: white;\n    top: 0;\n    bottom: 0;\n    left: 50%;\n    margin-left: -3px;\n  }\n  \n  /* Container around content */\n  \n  .container {\n    padding: 10px 40px;\n    position: relative;\n    background-color: inherit;\n    width: 50%;\n  }\n  \n  /* The circles on the timeline */\n  \n  .container::after {\n    content: '';\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    right: -17px;\n    background-color: white;\n    border: 4px solid #FF9F55;\n    top: 15px;\n    border-radius: 50%;\n    z-index: 1;\n  }\n  \n  /* Place the container to the left */\n  \n  .left {\n    left: 0;\n  }\n  \n  /* Place the container to the right */\n  \n  .right {\n    left: 50%;\n  }\n  \n  /* Add arrows to the left container (pointing right) */\n  \n  .left::before {\n    content: \" \";\n    height: 0;\n    position: absolute;\n    top: 22px;\n    width: 0;\n    z-index: 1;\n    right: 30px;\n    border: medium solid white;\n    border-width: 10px 0 10px 10px;\n    border-color: transparent transparent transparent white;\n  }\n  \n  /* Add arrows to the right container (pointing left) */\n  \n  .right::before {\n    content: \" \";\n    height: 0;\n    position: absolute;\n    top: 22px;\n    width: 0;\n    z-index: 1;\n    left: 30px;\n    border: medium solid white;\n    border-width: 10px 10px 10px 0;\n    border-color: transparent white transparent transparent;\n  }\n  \n  /* Fix the circle for containers on the right side */\n  \n  .right::after {\n    left: -16px;\n  }\n  \n  /* The actual content */\n  \n  .content {\n    padding: 20px 30px;\n    background-color: white;\n    position: relative;\n    border-radius: 6px;\n  }\n  \n  /* Media queries - Responsive timeline on screens less than 600px wide */\n  \n  @media screen and (max-width: 600px) {\n  /* Place the timelime to the left */\n    .timeline::after {\n      left: 31px;\n    }\n  \n  /* Full-width containers */\n    .container {\n      width: 100%;\n      padding-left: 70px;\n      padding-right: 25px;\n    }\n  \n  /* Make sure that all arrows are pointing leftwards */\n    .container::before {\n      left: 60px;\n      border: medium solid white;\n      border-width: 10px 10px 10px 0;\n      border-color: transparent white transparent transparent;\n    }\n  \n  /* Make sure all circles are at the same spot */\n    .left::after, .right::after {\n      left: 15px;\n    }\n  \n  /* Make all right containers behave like the left ones */\n    .right {\n      left: 0%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0VBQ3hCOztFQUVBLDJCQUEyQjs7RUFDM0I7SUFDRSx5QkFBeUI7SUFDekIsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsY0FBYztJQUNkLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQSw2Q0FBNkM7O0VBQzdDO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBLDZDQUE2Qzs7RUFDN0M7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFNBQVM7SUFDVCxTQUFTO0lBQ1QsaUJBQWlCO0VBQ25COztFQUVBLDZCQUE2Qjs7RUFDN0I7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7O0VBRUEsZ0NBQWdDOztFQUNoQztJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQSxvQ0FBb0M7O0VBQ3BDO0lBQ0UsT0FBTztFQUNUOztFQUVBLHFDQUFxQzs7RUFDckM7SUFDRSxTQUFTO0VBQ1g7O0VBRUEsc0RBQXNEOztFQUN0RDtJQUNFLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHVEQUF1RDtFQUN6RDs7RUFFQSxzREFBc0Q7O0VBQ3REO0lBQ0UsWUFBWTtJQUNaLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsdURBQXVEO0VBQ3pEOztFQUVBLG9EQUFvRDs7RUFDcEQ7SUFDRSxXQUFXO0VBQ2I7O0VBRUEsdUJBQXVCOztFQUN2QjtJQUNFLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQSx3RUFBd0U7O0VBQ3hFO0VBQ0EsbUNBQW1DO0lBQ2pDO01BQ0UsVUFBVTtJQUNaOztFQUVGLDBCQUEwQjtJQUN4QjtNQUNFLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsbUJBQW1CO0lBQ3JCOztFQUVGLHFEQUFxRDtJQUNuRDtNQUNFLFVBQVU7TUFDViwwQkFBMEI7TUFDMUIsOEJBQThCO01BQzlCLHVEQUF1RDtJQUN6RDs7RUFFRiwrQ0FBK0M7SUFDN0M7TUFDRSxVQUFVO0lBQ1o7O0VBRUYsd0RBQXdEO0lBQ3REO01BQ0UsUUFBUTtJQUNWO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC91dGlsL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICAvKiBTZXQgYSBiYWNrZ3JvdW5kIGNvbG9yICovXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzRlNWQ7XG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC50aW1lbGluZS1oZWFkaW5nIGgxIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAudGltZWxpbmUgaDIge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLnRpbWVsaW5lLWhlYWRpbmcge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogNTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBcbiAgLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuICAudGltZWxpbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgLyogVGhlIGFjdHVhbCB0aW1lbGluZSAodGhlIHZlcnRpY2FsIHJ1bGVyKSAqL1xuICAudGltZWxpbmU6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcbiAgfVxuICBcbiAgLyogQ29udGFpbmVyIGFyb3VuZCBjb250ZW50ICovXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIFxuICAvKiBUaGUgY2lyY2xlcyBvbiB0aGUgdGltZWxpbmUgKi9cbiAgLmNvbnRhaW5lcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgcmlnaHQ6IC0xN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICNGRjlGNTU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAvKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSBsZWZ0ICovXG4gIC5sZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIFxuICAvKiBQbGFjZSB0aGUgY29udGFpbmVyIHRvIHRoZSByaWdodCAqL1xuICAucmlnaHQge1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxuICBcbiAgLyogQWRkIGFycm93cyB0byB0aGUgbGVmdCBjb250YWluZXIgKHBvaW50aW5nIHJpZ2h0KSAqL1xuICAubGVmdDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICB3aWR0aDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogMTBweCAwIDEwcHggMTBweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlO1xuICB9XG4gIFxuICAvKiBBZGQgYXJyb3dzIHRvIHRoZSByaWdodCBjb250YWluZXIgKHBvaW50aW5nIGxlZnQpICovXG4gIC5yaWdodDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjJweDtcbiAgICB3aWR0aDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgYm9yZGVyOiBtZWRpdW0gc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgd2hpdGUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC8qIEZpeCB0aGUgY2lyY2xlIGZvciBjb250YWluZXJzIG9uIHRoZSByaWdodCBzaWRlICovXG4gIC5yaWdodDo6YWZ0ZXIge1xuICAgIGxlZnQ6IC0xNnB4O1xuICB9XG4gIFxuICAvKiBUaGUgYWN0dWFsIGNvbnRlbnQgKi9cbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG4gIFxuICAvKiBNZWRpYSBxdWVyaWVzIC0gUmVzcG9uc2l2ZSB0aW1lbGluZSBvbiBzY3JlZW5zIGxlc3MgdGhhbiA2MDBweCB3aWRlICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC8qIFBsYWNlIHRoZSB0aW1lbGltZSB0byB0aGUgbGVmdCAqL1xuICAgIC50aW1lbGluZTo6YWZ0ZXIge1xuICAgICAgbGVmdDogMzFweDtcbiAgICB9XG4gIFxuICAvKiBGdWxsLXdpZHRoIGNvbnRhaW5lcnMgKi9cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICB9XG4gIFxuICAvKiBNYWtlIHN1cmUgdGhhdCBhbGwgYXJyb3dzIGFyZSBwb2ludGluZyBsZWZ0d2FyZHMgKi9cbiAgICAuY29udGFpbmVyOjpiZWZvcmUge1xuICAgICAgbGVmdDogNjBweDtcbiAgICAgIGJvcmRlcjogbWVkaXVtIHNvbGlkIHdoaXRlO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4IDEwcHggMTBweCAwO1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB3aGl0ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICB9XG4gIFxuICAvKiBNYWtlIHN1cmUgYWxsIGNpcmNsZXMgYXJlIGF0IHRoZSBzYW1lIHNwb3QgKi9cbiAgICAubGVmdDo6YWZ0ZXIsIC5yaWdodDo6YWZ0ZXIge1xuICAgICAgbGVmdDogMTVweDtcbiAgICB9XG4gIFxuICAvKiBNYWtlIGFsbCByaWdodCBjb250YWluZXJzIGJlaGF2ZSBsaWtlIHRoZSBsZWZ0IG9uZXMgKi9cbiAgICAucmlnaHQge1xuICAgICAgbGVmdDogMCU7XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/util/timeline/timeline.component.html":
/*!*******************************************************!*\
  !*** ./src/app/util/timeline/timeline.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timeline-heading\">\n  <h1>{{title}}</h1>\n</div>\n<div class=\"timeline\">\n  <div class=\"container right\">\n    <div class=\"content\">\n      <h2>2022 : Member @Oppia Foundation</h2>\n      <p>In recognition to my contributions I was made a member at Oppia Foundation in January and started working on improving\n        learner and creator experience. I joined the internationalisation team and work on a project which involved 1500+ lines\n        of code changes.<br>\n      <br>And the journey continues ............</p>\n    </div>\n  </div>\n  <div class=\"container left\">\n    <div class=\"content\">\n      <h2>2021 : Collaborator @Oppia Foundation</h2>\n      <p>Starting working on my personal projects and exploring various domains.<br><br>\n        In the later half of the year I started my journey in the Open Source Field where I started contributing to the Oppia Foundation\n        where I was later made a collaborator.<br></p>\n    </div>\n  </div>\n  <div class=\"container right\">\n    <div class=\"content\">\n      <h2>2020-2021 : Software Developer @pykih</h2>\n      <p>Worked on multiple website building projects<br><br>\n        Majorly on <span style=\"font-weight: 800;\">The Humame Sites</span> web product which is actually a WordPress plugin and theme system that\n        helps people create humane websites. I was majorly working in creating multiple views, end to end interactions, \n        visualisations, integrations and was leading the subscription and payment gateway integration part of the project.\n      </p>\n    </div>\n  </div>\n  <div class=\"container left\">\n    <div class=\"content\">\n      <h2>2019-2020 : Software Intern @pykih</h2>\n      <p>Dropped out of IIT Delhi and joined Pykih as a Software Intern.<br>\n        <br>Created a <span style=\"font-weight: 800;\">Machine Learning</span>\n          model for which is currently helping <span style=\"font-weight: 800;\">Operation Asha</span> health workers better deliver medicnes.<br>\n        <br>Started learning about <span style=\"font-weight: 800;\">Bad Data</span> and created a <span style=\"font-weight: 800;\">Data Cleaner Package with R</span> which identified bad data \n          and provided options to clean it.</p>\n    </div>\n  </div>\n  <div class=\"container right\">\n    <div class=\"content\">\n      <h2>2017 : Joined IITD</h2>\n      <p>Cleared JEE Advanced and took admission in BTech in Industrial and Production Engineering at IIT Delhi.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/util/timeline/timeline.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/util/timeline/timeline.component.ts ***!
  \*****************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
        this.title = 'My Progress';
    };
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/util/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/util/timeline/timeline.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rajesh/P/Projects/pankaj-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map