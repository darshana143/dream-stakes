(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "app"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".app[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByaXZhdGVcXE55cm9iZW9ua2FcXGRyZWFtLXN0YWtlcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSIsIi5hcHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui-containers/top-bar/top-bar.component */ "./src/app/ui-containers/top-bar/top-bar.component.ts");
/* harmony import */ var _ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui-containers/left-panal/left-panal.component */ "./src/app/ui-containers/left-panal/left-panal.component.ts");
/* harmony import */ var _ds_components_ds_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ds-components/ds-components.module */ "./src/app/ds-components/ds-components.module.ts");
/* harmony import */ var _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./enter-screen/enter-screen.component */ "./src/app/enter-screen/enter-screen.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _ui_containers_right_panal_right_panal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui-containers/right-panal/right-panal.component */ "./src/app/ui-containers/right-panal/right-panal.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");














// -------------------------------- PrimeNG ----------------------------------------



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
            _ds_components_ds_components_module__WEBPACK_IMPORTED_MODULE_9__["DsComponentsModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"],
        _ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_8__["LeftPanalComponent"],
        _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_10__["EnterScreenComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
        _ui_containers_right_panal_right_panal_component__WEBPACK_IMPORTED_MODULE_12__["RightPanalComponent"],
        _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
        _ds_components_ds_components_module__WEBPACK_IMPORTED_MODULE_9__["DsComponentsModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"],
                    _ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_8__["LeftPanalComponent"],
                    _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_10__["EnterScreenComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                    _ui_containers_right_panal_right_panal_component__WEBPACK_IMPORTED_MODULE_12__["RightPanalComponent"],
                    _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
                    _ds_components_ds_components_module__WEBPACK_IMPORTED_MODULE_9__["DsComponentsModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__["DropdownModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.types.ts":
/*!******************************!*\
  !*** ./src/app/app.types.ts ***!
  \******************************/
/*! exports provided: MainViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViews", function() { return MainViews; });
var MainViews;
(function (MainViews) {
    MainViews[MainViews["enterScreen"] = 0] = "enterScreen";
    MainViews[MainViews["dashboard"] = 1] = "dashboard";
    MainViews[MainViews["userProfile"] = 2] = "userProfile";
})(MainViews || (MainViews = {}));


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ds-components/ds-types */ "./src/app/ds-components/ds-types.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ds_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ds-components/popup/popup.component */ "./src/app/ds-components/popup/popup.component.ts");







function DashboardComponent_div_2_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} if (rf & 2) {
    const aCard_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", aCard_r7.infoIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_2_img_7_Template, 1, 1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const aCard_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", aCard_r7.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", aCard_r7.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", aCard_r7.info, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", aCard_r7.infoIcon);
} }
function DashboardComponent_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { "currentRoom": a0 }; };
function DashboardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_9_ng_container_1_Template, 1, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.currentRoom));
} }
function DashboardComponent_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function DashboardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_10_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function DashboardComponent_ng_template_12_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14);
} }
function DashboardComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Starting Bid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Highest Bid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total Bids");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_12_Template_div_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.showPlaceBid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Custom Bid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ol", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DashboardComponent_ng_template_12_li_32_Template, 2, 1, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currentRoom_r12 = ctx.currentRoom;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", currentRoom_r12.houseImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", currentRoom_r12.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", currentRoom_r12.info.startBid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", currentRoom_r12.info.heighestBid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currentRoom_r12.info.totalBids);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", currentRoom_r12.biddingInfo.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", currentRoom_r12.biddingInfo.desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currentRoom_r12.biddingInfo.list);
} }
function DashboardComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Coming Soon\n");
} }
class DashboardComponent {
    constructor() {
        this.placeBid = false;
        this.currentPopopWindowIdx = 0;
        this.cards = [
            {
                icon: './assets/dasboard/home.png',
                title: 'Auction Houses',
                info: '35',
                infoIcon: './assets/dasboard/info.png'
            },
            {
                icon: './assets/dasboard/users.png',
                title: 'Online Users',
                info: '13,986',
                infoIcon: ''
            },
            {
                icon: './assets/dasboard/settings.png',
                title: 'Last Winnig Bid',
                info: '$4,564',
                infoIcon: ''
            },
            {
                icon: './assets/dasboard/timer.png',
                title: 'Ending Soon',
                info: '187',
                infoIcon: ''
            }
        ];
        this.houses = [
            {
                label: 'Auction House 1',
                value: {
                    id: 1,
                    name: 'Auction House 1'
                }
            },
            {
                label: 'Auction House 2',
                value: {
                    id: 2,
                    name: 'Auction House 2'
                }
            }
        ];
        this.rooms = [
            {
                houseImage: './assets/dasboard/house.png',
                title: 'Heffel Fine Art Auction House',
                info: {
                    startBid: '50.00',
                    heighestBid: '4575.00',
                    totalBids: '89'
                },
                biddingInfo: {
                    title: 'Duplex Auction House',
                    desc: `Duplex means that we select two winners from this house by
                holding two auctions, means two bidding rooms. One bidding room at a time
                will start at 50$. The entrants will have to place their first bid for 50$ or
                greater to be the first occupant (Winning Spot). The next highest bidder will
                become the next occupant. After the number of paid entrants reach 50,000 a
                48 hour clock starts counting down for when this bidding room ends. Highest
                bidder after the 48 hour clock runs out moves on the Eligibility. In that Auction
                House, the first bidding room is in Pending Status. Those 49,999+ from the
                first bidding room are automatically moved to the final bidding room that
                starts at 50$ and a 21 day timer automatically begins.`,
                    list: ['Duplex', '100$ entry fee', '2 total bidding rooms, 1 at a time.', 'After 50000 entrants, 48 hour countdown till end', '49,999+ rollover to 2nd bidding room.']
                },
                type: 1
            },
            {
                type: 0
            }
        ];
    }
    ngOnInit() {
        this.popupData = [
            {
                header: 'Place Bid',
                contentHeader: '',
                content: ``,
                bckButton: false,
                nxtButton: false,
                customContents: 'placeBid',
                showFooter: false
            },
            {
                header: 'Place Bid',
                contentHeader: '',
                content: `
          <div style="width: 100%; text-align: center;">

            <div style="font-family: 'Open Sans'; font-style: normal; font-weight: 700; font-size: 32px; line-height: 28px; color: #2C2C2C; margin-bottom: 15px;">
                Heffel Fine Art Auction House
            </div>

            <div style="font-family: 'Open Sans'; font-style: normal; font-weight: 600; font-size: 20px; line-height: 28px; color: #2C2C2C; margin-bottom: 20px;">
                Duplex Auction House
            </div>

            <div style="font-family: 'Open Sans'; font-style: normal; font-weight: 400; font-size: 20px; line-height: 28px; color: #2C2C2C; margin-bottom: 40px;">
                Current Bid : $4575
            </div>

          </div>

          <div style="width: 100%; height: 0px; border: 1px solid rgba(44, 44, 44, 0.2); margin-bottom: 56px;"></div>

          <div style="width: 100%;display: flex; flex-direction: column; justify-content: flex-start; align-items: center;">

            <label style="
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 42px;
                line-height: 28px;
                color: #F9A369;
            ">
                Success
            </label>

            <label style="
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 28px;
                text-align: justify;
                color: #2C2C2C;
                margin-top: 21px;
            ">
                Your Bid for $4800 is now live
            </label>

            <label style="
                font-family: 'Open Sans';
                font-style: normal;
                font-weight: 700;
                font-size: 20px;
                line-height: 28px;
                text-align: justify;
                color: #2C2C2C;
                margin-top: 80px;
            ">
                Share Your Ask
            </label>

            <div style="display: flex; flex-direction: row; justify-content: space-between; width: 267px; height: 48px; margin-top: 35px;">

              <img style="width: 48px; height: 48px;" src="./assets/dasboard/icons/fb.png">
  
              <img style="width: 48px; height: 48px;" src="./assets/dasboard/icons/twitter.png">
  
              <img style="width: 48px; height: 48px;" src="./assets/dasboard/icons/pinterest.png">
  
              <img style="width: 48px; height: 48px;" src="./assets/dasboard/icons/google_plus.png">
  
            </div>

          </div>

        `,
                bckButton: false,
                nxtButton: false,
                showFooter: true,
                customFooterButton: 'finish'
            }
        ];
        this.currentPopupPage = this.popupData[0];
        this.selectedHouse = this.houses[0].value;
        this.currentRoom = this.rooms[0];
    }
    showPlaceBid() {
        this.placeBid = true;
    }
    setRoom() {
        let idx = this.houses.findIndex(el => el.value.id === this.selectedHouse.id);
        this.currentRoom = this.rooms[idx];
    }
    recieveFromPopupDialog(e) {
        switch (e.command) {
            case _ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].close:
                this.currentPopopWindowIdx = 0;
                this.placeBid = false;
                break;
            case _ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].reviewBid:
                this.currentPopopWindowIdx++;
                break;
        }
        this.currentPopupPage = this.popupData[this.currentPopopWindowIdx];
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 16, vars: 9, consts: [[1, "container"], [1, "cards-area"], ["class", "a-card", 4, "ngFor", "ngForOf"], [1, "rooms-area"], [1, "room-count"], [1, "drpdwn-area"], [3, "options", "ngModel", "ngModelChange", "onChange"], [1, "count-area"], [4, "ngIf"], [3, "display", "popupData", "notifyParent"], ["room", ""], ["conclude", ""], [1, "a-card"], [1, "icon"], [3, "src"], [1, "title"], [1, "info"], [3, "src", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [1, "bidding-area"], [1, "left"], [1, "right"], [1, "start"], [1, "info-title"], [1, "desc"], [1, "high"], [1, "total"], [1, "buttons-area"], [1, "custom-bid-btn", 3, "click"], [1, "bidding-info"], ["src", "./assets/dasboard/info.png"], ["type", "a"], [4, "ngFor", "ngForOf"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 8, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_p_dropdown_ngModelChange_6_listener($event) { return ctx.selectedHouse = $event; })("onChange", function DashboardComponent_Template_p_dropdown_onChange_6_listener() { return ctx.setRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DashboardComponent_div_9_Template, 2, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-popup", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParent", function DashboardComponent_Template_app_popup_notifyParent_11_listener($event) { return ctx.recieveFromPopupDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_ng_template_12_Template, 33, 8, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_ng_template_14_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.houses)("ngModel", ctx.selectedHouse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Room ", ctx.selectedHouse.id, " Of ", ctx.houses.length, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRoom.type == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRoom.type == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", ctx.placeBid)("popupData", ctx.currentPopupPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ds_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__["PopupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 40px 40px 0px 40px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  height: 200px;\n  max-width: 787px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 174px;\n  height: 188px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  padding: 10px 0px 10px 0px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #79778A;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 23px;\n  line-height: 20px;\n  color: #95CED1;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin-left: 3px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .room-count[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 75px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .room-count[_ngcontent-%COMP%]   .drpdwn-area[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .room-count[_ngcontent-%COMP%]   .count-area[_ngcontent-%COMP%] {\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  color: #95CED1;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 200px;\n  margin-bottom: 55px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 200px;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 169px;\n  height: 169px;\n  border-radius: 10px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 100%;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 28px;\n  color: #95CED1;\n  margin-bottom: 23px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-bottom: 18px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .high[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: 55px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 20px;\n  color: #9997AE;\n  margin-bottom: 5px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 24px;\n  color: #231F20;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .buttons-area[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .buttons-area[_ngcontent-%COMP%]   .custom-bid-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 109px;\n  height: 32px;\n  border-radius: 5px;\n  border: 2px solid #F9A369;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 24px;\n  text-align: center;\n  color: #F9A369;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-info[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-grow: 1;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-info[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 28px;\n  color: #95CED1;\n  margin-bottom: 18px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-info[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin-left: 3px;\n  margin-top: 5px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 32px;\n  text-align: justify;\n  color: #2C2C2C;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  -webkit-padding-start: 18px;\n          padding-inline-start: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0FKO0FERUk7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdRO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNGWjtBRElZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGaEI7QURJZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0ZwQjtBRE1ZO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0poQjtBRE9ZO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05oQjtBRFFnQjtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQcEI7QURjSTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDYlI7QURlUTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2RaO0FEZ0JZO0VBQ0ksa0JBQUE7QUNkaEI7QURpQlk7RUFFSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDaEJoQjtBRHFCUTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNwQlo7QUR1Qlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3JCaEI7QUR1QmdCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ3JCcEI7QUR5Qlk7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDeEJoQjtBRDBCZ0I7RUFFSSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDekJwQjtBRDZCZ0I7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUM1QnBCO0FEOEJvQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDNUJ4QjtBRCtCb0I7RUFFSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUM5QnhCO0FEa0NvQjtFQUVJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNqQ3hCO0FEdUNnQjtFQUVJLFdBQUE7QUN0Q3BCO0FEd0NvQjtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDdkN4QjtBRGdEUTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FDL0NaO0FEaURZO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ2hEaEI7QURrRGdCO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNqRHBCO0FEc0RZO0VBRUksV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ3JEaEI7QUR1RGdCO0VBQ0ksMkJBQUE7VUFBQSwwQkFBQTtBQ3JEcEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDQwcHggNDBweCAwcHggNDBweDtcclxuXHJcbiAgICAuY2FyZHMtYXJlYSB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDc4N3B4O1xyXG5cclxuICAgICAgICAuYS1jYXJkIHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTc0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTg4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xyXG5cclxuICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmUgVmlldG5hbSBQcm8nO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3OTc3OEE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbmZvIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlIFZpZXRuYW0gUHJvJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTVDRUQxO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucm9vbXMtYXJlYSB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5yb29tLWNvdW50IHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuXHJcbiAgICAgICAgICAgIC5kcnBkd24tYXJlYSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb3VudC1hcmVhe1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmUgVmlldG5hbSBQcm8nO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5NUNFRDE7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmlkZGluZy1hcmVhIHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTY5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJpZ2h0IHtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5NUNFRDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjNweDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmluZm8ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0LCAuaGlnaCwgLnRvdGFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmluZm8tdGl0bGUge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCZSBWaWV0bmFtIFBybyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk3QUU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZGVzYyB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlIFZpZXRuYW0gUHJvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIzMUYyMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnV0dG9ucy1hcmVhIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tYmlkLWJ0biB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0Y5QTM2OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCZSBWaWV0bmFtIFBybyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0Y5QTM2OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJpZGRpbmctaW5mb3tcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgICAgICAgICAuaW5mby10aXRsZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTVDRUQxO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGVzY3tcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJDMkMyQztcclxuXHJcbiAgICAgICAgICAgICAgICBvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNDBweCA0MHB4IDBweCA0MHB4O1xufVxuLmNvbnRhaW5lciAuY2FyZHMtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1heC13aWR0aDogNzg3cHg7XG59XG4uY29udGFpbmVyIC5jYXJkcy1hcmVhIC5hLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NHB4O1xuICBoZWlnaHQ6IDE4OHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbn1cbi5jb250YWluZXIgLmNhcmRzLWFyZWEgLmEtY2FyZCAuaWNvbiB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG4uY29udGFpbmVyIC5jYXJkcy1hcmVhIC5hLWNhcmQgLmljb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIgLmNhcmRzLWFyZWEgLmEtY2FyZCAudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzc5Nzc4QTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuY2FyZHMtYXJlYSAuYS1jYXJkIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogXCJCZSBWaWV0bmFtIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjOTVDRUQxO1xufVxuLmNvbnRhaW5lciAuY2FyZHMtYXJlYSAuYS1jYXJkIC5pbmZvIGltZyB7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnJvb21zLWFyZWEgLnJvb20tY291bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1cHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5yb29tLWNvdW50IC5kcnBkd24tYXJlYSB7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbn1cbi5jb250YWluZXIgLnJvb21zLWFyZWEgLnJvb20tY291bnQgLmNvdW50LWFyZWEge1xuICBmb250LWZhbWlseTogXCJCZSBWaWV0bmFtIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjOTVDRUQxO1xufVxuLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWFyZWEgLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIgLnJvb21zLWFyZWEgLmJpZGRpbmctYXJlYSAubGVmdCBpbWcge1xuICB3aWR0aDogMTY5cHg7XG4gIGhlaWdodDogMTY5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWFyZWEgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1hcmVhIC5yaWdodCAudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgY29sb3I6ICM5NUNFRDE7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWFyZWEgLnJpZ2h0IC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWFyZWEgLnJpZ2h0IC5pbmZvIC5zdGFydCwgLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1hcmVhIC5yaWdodCAuaW5mbyAuaGlnaCwgLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1hcmVhIC5yaWdodCAuaW5mbyAudG90YWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tcmlnaHQ6IDU1cHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWFyZWEgLnJpZ2h0IC5pbmZvIC5pbmZvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzk5OTdBRTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1hcmVhIC5yaWdodCAuaW5mbyAuZGVzYyB7XG4gIGZvbnQtZmFtaWx5OiBcIkJlIFZpZXRuYW0gUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICMyMzFGMjA7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWFyZWEgLnJpZ2h0IC5idXR0b25zLWFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnJvb21zLWFyZWEgLmJpZGRpbmctYXJlYSAucmlnaHQgLmJ1dHRvbnMtYXJlYSAuY3VzdG9tLWJpZC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwOXB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAycHggc29saWQgI0Y5QTM2OTtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRjlBMzY5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1ncm93OiAxO1xufVxuLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1pbmZvIC5pbmZvLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiAjOTVDRUQxO1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1pbmZvIC5pbmZvLXRpdGxlIGltZyB7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jb250YWluZXIgLnJvb21zLWFyZWEgLmJpZGRpbmctaW5mbyAuZGVzYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogIzJDMkMyQztcbn1cbi5jb250YWluZXIgLnJvb21zLWFyZWEgLmJpZGRpbmctaW5mbyAuZGVzYyBvbCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxOHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ds-components/card-slider/card-slider.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ds-components/card-slider/card-slider.component.ts ***!
  \********************************************************************/
/*! exports provided: CardSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSliderComponent", function() { return CardSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardSliderComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardSliderComponent.ɵfac = function CardSliderComponent_Factory(t) { return new (t || CardSliderComponent)(); };
CardSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardSliderComponent, selectors: [["app-card-slider"]], decls: 16, vars: 0, consts: [[1, "card"], [1, "icon-area"], ["src", "./assets/icons8_circled_user_female_skin_type_7 1.png"], [1, "btn"], ["src", "./assets/small-icon.png"], [1, "dots-area"], [1, "dot-1"], [1, "dot-2"], [1, "dot-3"]], template: function CardSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "24 Hours Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Serving All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "50 United States");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding-top: 17px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 30px;\n}\n.card[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 20px;\n}\n.card[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 59px;\n  height: 59px;\n}\n.card[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 66px;\n  text-transform: capitalize;\n  color: #282A2E;\n  margin-top: -15px;\n}\n.card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 189px;\n  height: 50px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  margin-left: 9px;\n  align-items: center;\n}\n.card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 31px;\n  margin-left: 19px;\n}\n.card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  padding-left: 15px;\n}\n.card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.045em;\n  text-transform: capitalize;\n  color: #282A2E;\n  margin-left: 15px;\n}\n.card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  margin-top: 27px;\n}\n.card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%]   .dot-1[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%]   .dot-2[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%]   .dot-3[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n}\n.card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%]   .dot-1[_ngcontent-%COMP%] {\n  margin-left: 74px;\n  border-radius: 100px;\n  background-color: #F37121;\n}\n.card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%]   .dot-2[_ngcontent-%COMP%] {\n  margin-left: 19px;\n  border-radius: 100px;\n  background-color: #32004B;\n}\n.card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%]   .dot-3[_ngcontent-%COMP%] {\n  margin-left: 19px;\n  border-radius: 100px;\n  background-color: #22B24C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHMtY29tcG9uZW50cy9jYXJkLXNsaWRlci9EOlxcUHJpdmF0ZVxcTnlyb2Jlb25rYVxcZHJlYW0tc3Rha2VzL3NyY1xcYXBwXFxkcy1jb21wb25lbnRzXFxjYXJkLXNsaWRlclxcY2FyZC1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RzLWNvbXBvbmVudHMvY2FyZC1zbGlkZXIvY2FyZC1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NaO0FERVE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FaO0FESUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGUjtBRElRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZaO0FES1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIWjtBREtZO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0hoQjtBRFVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNSUjtBRFVRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNSWjtBRFdRO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDVFo7QURZUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ1ZaO0FEYVE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNYWiIsImZpbGUiOiJzcmMvYXBwL2RzLWNvbXBvbmVudHMvY2FyZC1zbGlkZXIvY2FyZC1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDE3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cclxuICAgIC5pY29uLWFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDU5cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTlweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNjZweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjgyQTJFO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiAxODlweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMxcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzFweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE5cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0NWVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI4MkEyRTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmRvdHMtYXJlYSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjdweDtcclxuXHJcbiAgICAgICAgLmRvdC0xLCAuZG90LTIsIC5kb3QtMyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvdC0xIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDc0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM3MTIxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvdC0yIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIwMDRCO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvdC0zIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCMjRDO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn0iLCIuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbi5jYXJkIC5pY29uLWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmNhcmQgLmljb24tYXJlYSBpbWcge1xuICB3aWR0aDogNTlweDtcbiAgaGVpZ2h0OiA1OXB4O1xufVxuLmNhcmQgLmljb24tYXJlYSBkaXYge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDY2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogIzI4MkEyRTtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG4uY2FyZCAuYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDE4OXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogOXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmQgLmJ0biBpbWcge1xuICB3aWR0aDogMzFweDtcbiAgaGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tbGVmdDogMTlweDtcbn1cbi5jYXJkIC5idG4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5jYXJkIC5idG4gZGl2IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNDVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjMjgyQTJFO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5jYXJkIC5kb3RzLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjdweDtcbn1cbi5jYXJkIC5kb3RzLWFyZWEgLmRvdC0xLCAuY2FyZCAuZG90cy1hcmVhIC5kb3QtMiwgLmNhcmQgLmRvdHMtYXJlYSAuZG90LTMge1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDlweDtcbn1cbi5jYXJkIC5kb3RzLWFyZWEgLmRvdC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDc0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM3MTIxO1xufVxuLmNhcmQgLmRvdHMtYXJlYSAuZG90LTIge1xuICBtYXJnaW4tbGVmdDogMTlweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjAwNEI7XG59XG4uY2FyZCAuZG90cy1hcmVhIC5kb3QtMyB7XG4gIG1hcmdpbi1sZWZ0OiAxOXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyQjI0Qztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-slider',
                templateUrl: './card-slider.component.html',
                styleUrls: ['./card-slider.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ds-components/common-slider/common-slider.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/ds-components/common-slider/common-slider.component.ts ***!
  \************************************************************************/
/*! exports provided: CommonSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSliderComponent", function() { return CommonSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function CommonSliderComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.currentHeader2, " ");
} }
function CommonSliderComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonSliderComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const aSlide_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setContent(aSlide_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const aSlide_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", aSlide_r2.dotPeref.color);
} }
const selectedDotColor = "#F9A369";
class CommonSliderComponent {
    constructor() {
        this.currentContentIndex = -1;
    }
    ngOnInit() {
        let defaultSlide = this.sliderData.find(el => el.default);
        this.currentContent = defaultSlide.content;
        this.currentHeader = defaultSlide.header;
        this.currentHeader2 = defaultSlide.header2;
        defaultSlide.dotPeref.color = selectedDotColor;
        // this.currentContentIndex = 0;
    }
    setContent(aSlide, idx) {
        this.currentContent = aSlide.content;
        this.currentHeader = aSlide.header;
        this.currentHeader2 = aSlide.header2;
        this.sliderData.forEach((el, index) => {
            if (index === idx)
                el.dotPeref.color = selectedDotColor;
            else
                el.dotPeref.color = aSlide.dotPeref.defaultColor;
        });
    }
}
CommonSliderComponent.ɵfac = function CommonSliderComponent_Factory(t) { return new (t || CommonSliderComponent)(); };
CommonSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonSliderComponent, selectors: [["app-common-slider"]], inputs: { sliderData: "sliderData" }, decls: 9, vars: 8, consts: [[1, "container"], [1, "content"], [1, "header"], ["class", "header", 4, "ngIf"], [1, "dot-area"], ["class", "a-dot", 3, "background-color", "click", 4, "ngFor", "ngForOf"], [1, "a-dot", 3, "click"]], template: function CommonSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CommonSliderComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CommonSliderComponent_div_8_Template, 1, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 555, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentHeader, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentHeader2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentContent, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", 555, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sliderData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding-left: 80px;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-grow: 1;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 29px;\n  text-align: justify;\n  color: #2C2C2C;\n  margin-top: 27px;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 38px;\n  color: #F9A369;\n}\n.container[_ngcontent-%COMP%]   .dot-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 30px;\n}\n.container[_ngcontent-%COMP%]   .dot-area[_ngcontent-%COMP%]   .a-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 100%;\n  margin: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHMtY29tcG9uZW50cy9jb21tb24tc2xpZGVyL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXGRzLWNvbXBvbmVudHNcXGNvbW1vbi1zbGlkZXJcXGNvbW1vbi1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RzLWNvbXBvbmVudHMvY29tbW9uLXNsaWRlci9jb21tb24tc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQVI7QURFUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBWjtBREtJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSFI7QURNUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0paIiwiZmlsZSI6InNyYy9hcHAvZHMtY29tcG9uZW50cy9jb21tb24tc2xpZGVyL2NvbW1vbi1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICBjb2xvcjogIzJDMkMyQztcclxuICAgICAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG5cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRjlBMzY5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmRvdC1hcmVhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG5cclxuICAgICAgICAuYS1kb3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogOXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDlweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogIzJDMkMyQztcbiAgbWFyZ2luLXRvcDogMjdweDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQgLmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGNvbG9yOiAjRjlBMzY5O1xufVxuLmNvbnRhaW5lciAuZG90LWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbn1cbi5jb250YWluZXIgLmRvdC1hcmVhIC5hLWRvdCB7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogOXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-common-slider',
                templateUrl: './common-slider.component.html',
                styleUrls: ['./common-slider.component.scss']
            }]
    }], function () { return []; }, { sliderData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ds-components/ds-components.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/ds-components/ds-components.module.ts ***!
  \*******************************************************/
/*! exports provided: DsComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DsComponentsModule", function() { return DsComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-slider/common-slider.component */ "./src/app/ds-components/common-slider/common-slider.component.ts");
/* harmony import */ var _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-slider/card-slider.component */ "./src/app/ds-components/card-slider/card-slider.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/ds-components/popup/popup.component.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-radiobutton.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../safe-html.pipe */ "./src/app/safe-html.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");












class DsComponentsModule {
}
DsComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DsComponentsModule });
DsComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DsComponentsModule_Factory(t) { return new (t || DsComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__["CheckboxModule"],
            primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__["RadioButtonModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DsComponentsModule, { declarations: [_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__["CommonSliderComponent"], _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_3__["CardSliderComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"], _safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeHtmlPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__["CheckboxModule"],
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__["RadioButtonModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]], exports: [_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__["CommonSliderComponent"],
        _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_3__["CardSliderComponent"],
        _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DsComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__["CommonSliderComponent"], _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_3__["CardSliderComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"], _safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeHtmlPipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
                    primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__["CheckboxModule"],
                    primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__["RadioButtonModule"],
                    primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
                ],
                exports: [
                    _common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__["CommonSliderComponent"],
                    _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_3__["CardSliderComponent"],
                    _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ds-components/ds-types.ts":
/*!*******************************************!*\
  !*** ./src/app/ds-components/ds-types.ts ***!
  \*******************************************/
/*! exports provided: IPopupCpmmands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPopupCpmmands", function() { return IPopupCpmmands; });
var IPopupCpmmands;
(function (IPopupCpmmands) {
    IPopupCpmmands["close"] = "close";
    IPopupCpmmands["next"] = "next";
    IPopupCpmmands["back"] = "back";
    IPopupCpmmands["showTearms"] = "showTearms";
    IPopupCpmmands["showPrivacyPolicy"] = "showPrivacyPolicy";
    IPopupCpmmands["submit"] = "submit";
    IPopupCpmmands["reviewBid"] = "reviewBid";
})(IPopupCpmmands || (IPopupCpmmands = {}));


/***/ }),

/***/ "./src/app/ds-components/popup/popup.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ds-components/popup/popup.component.ts ***!
  \********************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ds_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ds-types */ "./src/app/ds-components/ds-types.ts");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-radiobutton.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../safe-html.pipe */ "./src/app/safe-html.pipe.ts");











function PopupComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.popupData.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PopupComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus et lacus at maximus. Vivamus dignissim tincidunt turpis, eu lacinia justo tempor eu. Morbi aliquam nulla non porta tincidunt. Vivamus at ultricies enim, eget tempus quam. Etiam nisi felis, ultricies ut eros nec, accumsan luctus lectus. Donec justo enim, venenatis ac tellus quis, congue ultrices arcu. In feugiat nec dolor non vehicula. Proin id tincidunt erat.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Nullam consectetur interdum mollis. Morbi in lacus sapien. Vivamus aliquet massa sed lacus pretium lacinia. Maecenas quis leo sed tortor maximus eleifend. Sed sit amet facilisis neque. Proin tempus massa sit amet lorem sagittis, at ultricies quam auctor. Suspendisse quis nulla commodo, elementum felis vel, pellentesque justo. In mi sem, fringilla at fermentum at, vulputate suscipit sapien. Vivamus at tincidunt libero, id rutrum nulla. Curabitur auctor lectus sit amet ex imperdiet consequat. Donec tempor magna sapien, tempus ultricies neque ultricies sed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Proin auctor ex quis sollicitudin semper.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Aliquam semper enim nec laoreet mattis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Vivamus interdum elit vitae condimentum pretium.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nullam vel ligula semper, viverra nulla in, pulvinar turpis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Curabitur non elit congue, rutrum massa ut, tempor orci.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "p-checkbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_7_Template_label_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.sendCommandToParent("showTearms"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Terms and Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "p-checkbox", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_7_Template_label_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.sendCommandToParent("showPrivacyPolicy"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopupComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Card number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Expiry date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CVC/CVV");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cardholder name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p-radioButton", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "p-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopupComponent_div_8_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-radioButton", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopupComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-radioButton", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PopupComponent_div_8_Template_p_radioButton_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.paymenttype = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopupComponent_div_8_div_4_Template, 34, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-radioButton", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PopupComponent_div_8_Template_p_radioButton_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.paymenttype = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PopupComponent_div_8_div_6_Template, 12, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.paymenttype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.paymenttype == "cc");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.paymenttype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.paymenttype == "paypal");
} }
function PopupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Heffel Fine Art Auction House ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Duplex Auction House ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Current Bid : $4575 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " The bid you enter must be higher than the highest bid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " $ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enter Bid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Highest Bid is 500$* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Bid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Your Bid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " $0.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Authentication Fee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Free ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Total (USD) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " $0.00 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Pay via Dream Coins ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_9_Template_div_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.sendCommandToParent("reviewBid"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Review Bid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopupComponent_p_footer_10_img_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_p_footer_10_img_3_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.sendCommandToParent("submit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopupComponent_p_footer_10_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_p_footer_10_img_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.sendCommandToParent("next"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopupComponent_p_footer_10_img_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_p_footer_10_img_5_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.sendCommandToParent("close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopupComponent_p_footer_10_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_p_footer_10_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.sendCommandToParent("back"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PopupComponent_p_footer_10_img_3_Template, 1, 0, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopupComponent_p_footer_10_img_4_Template, 1, 0, "img", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PopupComponent_p_footer_10_img_5_Template, 1, 0, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r4.popupData.bckButton ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.popupData.customFooterButton == null ? null : ctx_r4.popupData.customFooterButton.includes("submit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.popupData.nxtButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.popupData.customFooterButton == null ? null : ctx_r4.popupData.customFooterButton.includes("finish"));
} }
class PopupComponent {
    constructor() {
        this.display = false;
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paymenttype = '';
    }
    ngOnInit() {
    }
    close(customClose) {
        this.sendCommandToParent(_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].close, customClose);
    }
    sendCommandToParent(command, customCommand = false) {
        switch (command) {
            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].close:
                this.notifyParent.emit({ command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].close, customCommand: 'closeTearms' });
                break;
            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].next:
                this.notifyParent.emit({ command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].next });
                break;
            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].back:
                this.notifyParent.emit({ command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].back });
                break;
            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showTearms:
                this.notifyParent.emit({ command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showTearms });
                break;
            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showPrivacyPolicy:
                this.notifyParent.emit({ command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showPrivacyPolicy, customCommand: 'closePrivacyPolicy' });
                break;
            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].submit:
                this.notifyParent.emit({ command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].submit });
                break;
            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].reviewBid:
                this.notifyParent.emit({ command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].reviewBid });
                break;
        }
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(); };
PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["app-popup"]], inputs: { display: "display", popupData: "popupData" }, outputs: { notifyParent: "notifyParent" }, decls: 11, vars: 10, consts: [[1, "container", "popup-cotroller"], ["position", "top", 3, "visible", "draggable", "transitionOptions", "visibleChange", "onHide"], [1, "content-header"], [3, "innerHTML", 4, "ngIf"], [4, "ngIf"], ["class", "place-bid", 4, "ngIf"], [3, "innerHTML"], ["name", "groupname", "value", "val1", "label", "I agree with the"], [2, "margin-left", "3px", "cursor", "pointer", "font-family", "Open Sans", "font-style", "normal", "font-weight", "600", "font-size", "15px", "line-height", "24px", "text-decoration-line", "underline", "color", "#F9A369", 3, "click"], ["name", "groupname", "value", "val2", "label", "I agree with For"], [2, "position", "relative", "top", "2px", "left", "5px", "cursor", "pointer", "font-family", "Open Sans", "font-style", "normal", "font-weight", "600", "font-size", "15px", "line-height", "24px", "text-decoration-line", "underline", "color", "#F9A369", 3, "click"], ["name", "groupname", "value", "cc", "label", "Credit & Debit Cards", 3, "ngModel", "ngModelChange"], ["style", "width: 410px;", 4, "ngIf"], ["name", "groupname", "value", "paypal", "label", "Paypal", 3, "ngModel", "ngModelChange"], ["style", "width: 475px;", 4, "ngIf"], [2, "width", "410px"], [1, "input-wrapper"], [1, "button-label"], [1, "ui-inputgroup"], ["type", "text", "pInputText", "", "placeholder", "0000 0000 0000 0000", 1, "common-txt"], [1, "ui-inputgroup-addon", 2, "padding-top", "13px"], ["src", "./assets/popup-btns/cc.png", 2, "width", "22px", "height", "15px"], [2, "display", "flex", "justify-content", "space-between"], [1, "input-wrapper", 2, "width", "200px"], ["type", "text", "pInputText", "", "placeholder", "MM/YY", 1, "common-txt"], [1, "ui-inputgroup-addon"], ["src", "./assets/popup-btns/calender.png", 2, "width", "18px", "height", "19px", "position", "relative", "top", "8px"], ["type", "text", "pInputText", "", "placeholder", "...", 1, "common-txt"], ["src", "./assets/popup-btns/info.png", 2, "width", "16px", "height", "16px", "position", "relative", "top", "8px"], [1, "ui-inputgroup", 2, "margin-bottom", "22px"], ["type", "text", "pInputText", "", "placeholder", "Enter cardholder\u2019s full name", 1, "common-txt", 2, "width", "100%"], ["name", "groupname", "value", "val2", "label", "Save card"], [2, "margin-top", "25px", "margin-bottom", "65px"], ["label", "Add card", 1, "p-button-warning"], [2, "width", "475px"], ["type", "text", "pInputText", "", "placeholder", "Enter your paypal email address", 1, "common-txt"], ["name", "groupname", "value", "val2", "label", "Save paypal"], [2, "margin-top", "45px"], ["label", "Add paypal", 1, "p-button-warning"], [1, "place-bid"], [2, "width", "100%", "text-align", "center"], [2, "font-family", "Open Sans", "font-style", "normal", "font-weight", "700", "font-size", "32px", "line-height", "28px", "color", "#2C2C2C", "margin-bottom", "15px"], [2, "font-family", "Open Sans", "font-style", "normal", "font-weight", "600", "font-size", "20px", "line-height", "28px", "color", "#2C2C2C", "margin-bottom", "20px"], [2, "font-family", "Open Sans", "font-style", "normal", "font-weight", "400", "font-size", "20px", "line-height", "28px", "color", "#2C2C2C", "margin-bottom", "40px"], [2, "width", "100%", "height", "0px", "border", "1px solid rgba(44, 44, 44, 0.2)", "margin-bottom", "56px"], [2, "display", "flex", "flex-direction", "row", "align-items", "center"], [2, "width", "515px"], ["src", "./assets/dasboard/placebid/bidding-house.png", 2, "width", "100%", "height", "555px"], [2, "display", "flex", "flex-direction", "column", "flex-grow", "1", "height", "555px", "padding", "10px 0px 0px 50px"], [2, "font-family", "Open Sans", "font-style", "normal", "font-weight", "600", "font-size", "20px", "line-height", "28px", "text-align", "justify", "color", "#2C2C2C", "margin-bottom", "30px"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between", "align-items", "center", "max-width", "450px"], [2, "font-family", "Open Sans", "font-style", "normal", "font-weight", "600", "font-size", "50px", "line-height", "68px", "text-align", "center", "color", "#2C2C2C"], [2, "width", "284px", "height", "54px"], [1, "ui-float-label", 2, "margin-left", "-7px"], ["id", "float-input", "type", "text", "size", "30", "pInputText", "", 1, "common-txt"], ["for", "float-input"], [2, "font-family", "Open Sans", "font-style", "normal", "font-weight", "400", "font-size", "16px", "line-height", "22px", "text-align", "start", "margin-top", "5px", "color", "#FF0000"], [2, "position", "relative", "top", "-3px", "width", "97px", "height", "53px"], [2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center", "width", "100%", "height", "100%", "background", "#F9A369", "border-radius", "10px", "font-family", "Be Vietnam Pro", "font-style", "normal", "font-weight", "600", "font-size", "16px", "line-height", "24px", "text-align", "center", "color", "#FFFFFF"], [1, "details"], [1, "item"], [1, "title-area"], [1, "val"], [1, "hr-line"], [2, "font-weight", "600"], [2, "max-width", "590px", "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center", "margin-top", "60px"], [2, "font-family", "Poppins", "font-style", "normal", "font-weight", "500", "font-size", "17px", "line-height", "26px", "text-decoration-line", "underline", "color", "#F9A369"], [2, "display", "flex", "flex-direction", "row", "justify-content", "flex-end", "flex-grow", "1"], [2, "display", "flex", "align-items", "center", "justify-content", "center", "width", "170px", "height", "52px", "background", "rgba(249, 163, 105, 0.5)", "font-family", "Poppins", "font-style", "normal", "font-weight", "500", "font-size", "17px", "line-height", "26px", "color", "#FCFCFC", "cursor", "pointer", 3, "click"], ["src", "./assets/popup-btns/back-arrow.png", 3, "click"], ["class", "submit-btn", "src", "./assets/popup-btns/submit-btn.png", 3, "click", 4, "ngIf"], ["src", "./assets/popup-btns/next-arrao.png", 3, "click", 4, "ngIf"], ["style", "width: 170px; height: 52px;", "src", "./assets/dasboard/finish.png", 3, "click", 4, "ngIf"], ["src", "./assets/popup-btns/submit-btn.png", 1, "submit-btn", 3, "click"], ["src", "./assets/popup-btns/next-arrao.png", 3, "click"], ["src", "./assets/dasboard/finish.png", 2, "width", "170px", "height", "52px", 3, "click"]], template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-dialog", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function PopupComponent_Template_p_dialog_visibleChange_1_listener($event) { return ctx.display = $event; })("onHide", function PopupComponent_Template_p_dialog_onHide_1_listener() { return ctx.close(ctx.popupData.customContents); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PopupComponent_div_6_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PopupComponent_div_7_Template, 31, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PopupComponent_div_8_Template, 7, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PopupComponent_div_9_Template, 55, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PopupComponent_p_footer_10_Template, 6, 5, "p-footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.display)("draggable", false)("transitionOptions", "200ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.popupData.header, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.popupData.contentHeader, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.popupData.customContents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popupData.customContents == "agreement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popupData.customContents == "payments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popupData.customContents == "placeBid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popupData.showFooter);
    } }, directives: [primeng_dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["Header"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__["RadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["Button"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["Footer"]], pipes: [_safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeHtmlPipe"]], styles: [".container {\n  width: 100%;\n  height: 100%;\n}\n.container p-dialog .content-header {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 27px;\n  color: #2C2C2C;\n  margin-top: 15px;\n  margin-bottom: 30px;\n}\n.container p-dialog p-footer div {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.container p-dialog p-footer div img {\n  width: 50px;\n  height: 50px;\n  margin-top: 30px;\n  cursor: pointer;\n}\n.container p-dialog p-footer div .submit-btn {\n  width: 256px;\n  height: 52px;\n  margin-top: 30px;\n  cursor: pointer;\n}\n.container p-dialog .input-wrapper {\n  margin-bottom: 10px;\n}\n.container p-dialog .input-wrapper .button-label {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 26px;\n  text-align: justify;\n  letter-spacing: 0.01em;\n  color: #F9A369;\n  background-color: #fcfcfc;\n  position: relative;\n  top: 13px;\n  left: 15px;\n}\n.container p-dialog .input-wrapper .ui-inputgroup .ui-inputgroup-addon {\n  position: relative;\n  right: 46px;\n  border: none;\n  background-color: unset;\n}\n.container p-dialog .common-txt {\n  height: 51.44px;\n  border: 1px solid rgba(74, 137, 152, 0.4);\n  border-radius: 10px;\n  padding-left: 15px;\n  padding-right: 48px;\n}\n.container p-dialog input::-moz-placeholder {\n  width: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 26px;\n  text-align: justify;\n  letter-spacing: 0.075em;\n  color: rgba(57, 58, 61, 0.5);\n  background-color: transparent;\n}\n.container p-dialog input[type=text], .container p-dialog input::placeholder {\n  width: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 26px;\n  text-align: justify;\n  letter-spacing: 0.075em;\n  color: rgba(57, 58, 61, 0.5);\n  background-color: transparent;\n}\n.container p-dialog input[type=text]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #8dcdff;\n}\n.container p-dialog p-button {\n  width: 375.42px;\n  height: 52px;\n}\n.container p-dialog p-button button {\n  width: 100%;\n  height: 52px;\n  background: #F9A369;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 26px;\n  color: #FCFCFC;\n}\n.container p-dialog p-button ui-button:enabled:active {\n  background-color: #F9A369;\n  color: #ffffff;\n  border-color: #F9A369;\n}\n.container p-dialog p-button .ui-button:enabled:hover {\n  background-color: #F9A369;\n  color: #ffffff;\n  border-color: #F9A369;\n}\n.container p-dialog p-button .ui-button:enabled:focus {\n  outline: 0 none;\n  outline-offset: 0px;\n  box-shadow: 0 0 0 0.2em #F9A369;\n}\n.container p-dialog .place-bid .details {\n  max-width: 450px;\n  margin-top: 95px;\n}\n.container p-dialog .place-bid .details .item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  height: 32px;\n  margin-bottom: 22px;\n}\n.container p-dialog .place-bid .details .item .title-area {\n  display: flex;\n}\n.container p-dialog .place-bid .details .item .title-area label {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 27px;\n  text-align: center;\n  color: #2C2C2C;\n}\n.container p-dialog .place-bid .details .item .val {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 27px;\n  text-align: center;\n  color: #2C2C2C;\n}\n.container p-dialog .place-bid .details .hr-line {\n  width: 100%;\n  height: 0px;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n  margin-bottom: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHMtY29tcG9uZW50cy9wb3B1cC9EOlxcUHJpdmF0ZVxcTnlyb2Jlb25rYVxcZHJlYW0tc3Rha2VzL3NyY1xcYXBwXFxkcy1jb21wb25lbnRzXFxwb3B1cFxccG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RzLWNvbXBvbmVudHMvcG9wdXAvcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FER1E7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RaO0FET1k7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDTmhCO0FEUWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNOcEI7QURTZ0I7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1BwQjtBRGNRO0VBRUksbUJBQUE7QUNiWjtBRGVZO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNiaEI7QURrQmdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDaEJwQjtBRHVCUTtFQUNJLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ3JCWjtBRHdCUTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ3RCWjtBRFlRO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDdEJaO0FEeUJRO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FDdkJaO0FEMkJRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUMxQlo7QUQ0Qlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUMxQmhCO0FENkJZO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUMzQmhCO0FEOEJZO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUM1QmhCO0FEK0JZO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBR0EsK0JBQUE7QUM3QmhCO0FEcUNZO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtBQ3BDaEI7QURzQ2dCO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDckNwQjtBRHVDb0I7RUFFSSxhQUFBO0FDdEN4QjtBRHdDd0I7RUFFSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUN2QzVCO0FENkNvQjtFQUVJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQzVDeEI7QURtRGdCO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDakRwQiIsImZpbGUiOiJzcmMvYXBwL2RzLWNvbXBvbmVudHMvcG9wdXAvcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIHAtZGlhbG9nIHtcclxuXHJcbiAgICAgICAgLmNvbnRlbnQtaGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMkMyQzJDO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAtZm9vdGVyIHtcclxuXHJcbiAgICAgICAgICAgIGRpdiB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5wdXQtd3JhcHBlciB7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgLmJ1dHRvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRjlBMzY5O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxM3B4OyBcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51aS1pbnB1dGdyb3VwIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLnVpLWlucHV0Z3JvdXAtYWRkb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogNDZweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbW1vbi10eHQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUxLjQ0cHg7IFxyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDc0LCAxMzcsIDE1MiwgMC40KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNzVlbTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoNTcsIDU4LCA2MSwgMC41KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMTQxLCAyMDUsIDI1NSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcC1idXR0b24ge1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDM3NS40MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjlBMzY5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGQ0ZDRkM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVpLWJ1dHRvbjplbmFibGVkOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlBMzY5O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNGOUEzNjk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51aS1idXR0b246ZW5hYmxlZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlBMzY5O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNGOUEzNjk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51aS1idXR0b246ZW5hYmxlZDpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAwIG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogMHB4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJlbSAjRjlBMzY5O1xyXG4gICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCAwLjJlbSAjRjlBMzY5O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4yZW0gI0Y5QTM2OTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGxhY2UtYmlkIHtcclxuXHJcbiAgICAgICAgICAgIC5kZXRhaWxzIHtcclxuXHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOTVweDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5pdGVtIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZS1hcmVhIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyQzJDMkM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLnZhbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMkMyQzJDO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaHItbGluZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIC5jb250ZW50LWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGNvbG9yOiAjMkMyQzJDO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyBwLWZvb3RlciBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyBwLWZvb3RlciBkaXYgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyBwLWZvb3RlciBkaXYgLnN1Ym1pdC1idG4ge1xuICB3aWR0aDogMjU2cHg7XG4gIGhlaWdodDogNTJweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyAuaW5wdXQtd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIC5pbnB1dC13cmFwcGVyIC5idXR0b24tbGFiZWwge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogI0Y5QTM2OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEzcHg7XG4gIGxlZnQ6IDE1cHg7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIC5pbnB1dC13cmFwcGVyIC51aS1pbnB1dGdyb3VwIC51aS1pbnB1dGdyb3VwLWFkZG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgLmNvbW1vbi10eHQge1xuICBoZWlnaHQ6IDUxLjQ0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzQsIDEzNywgMTUyLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQ4cHg7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIGlucHV0W3R5cGU9dGV4dF0sIC5jb250YWluZXIgcC1kaWFsb2cgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA3NWVtO1xuICBjb2xvcjogcmdiYSg1NywgNTgsIDYxLCAwLjUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjOGRjZGZmO1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyBwLWJ1dHRvbiB7XG4gIHdpZHRoOiAzNzUuNDJweDtcbiAgaGVpZ2h0OiA1MnB4O1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyBwLWJ1dHRvbiBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MnB4O1xuICBiYWNrZ3JvdW5kOiAjRjlBMzY5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBjb2xvcjogI0ZDRkNGQztcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgcC1idXR0b24gdWktYnV0dG9uOmVuYWJsZWQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QTM2OTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI0Y5QTM2OTtcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgcC1idXR0b24gLnVpLWJ1dHRvbjplbmFibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QTM2OTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI0Y5QTM2OTtcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgcC1idXR0b24gLnVpLWJ1dHRvbjplbmFibGVkOmZvY3VzIHtcbiAgb3V0bGluZTogMCBub25lO1xuICBvdXRsaW5lLW9mZnNldDogMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMmVtICNGOUEzNjk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMC4yZW0gI0Y5QTM2OTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4yZW0gI0Y5QTM2OTtcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgLnBsYWNlLWJpZCAuZGV0YWlscyB7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIG1hcmdpbi10b3A6IDk1cHg7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIC5wbGFjZS1iaWQgLmRldGFpbHMgLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIC5wbGFjZS1iaWQgLmRldGFpbHMgLml0ZW0gLnRpdGxlLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyAucGxhY2UtYmlkIC5kZXRhaWxzIC5pdGVtIC50aXRsZS1hcmVhIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJDMkMyQztcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgLnBsYWNlLWJpZCAuZGV0YWlscyAuaXRlbSAudmFsIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJDMkMyQztcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgLnBsYWNlLWJpZCAuZGV0YWlscyAuaHItbGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup',
                templateUrl: './popup.component.html',
                styleUrls: ['./popup.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popupData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], notifyParent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/enter-screen/enter-screen.component.ts":
/*!********************************************************!*\
  !*** ./src/app/enter-screen/enter-screen.component.ts ***!
  \********************************************************/
/*! exports provided: EnterScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterScreenComponent", function() { return EnterScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ds-components/ds-types */ "./src/app/ds-components/ds-types.ts");
/* harmony import */ var _ds_components_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ds-components/common-slider/common-slider.component */ "./src/app/ds-components/common-slider/common-slider.component.ts");
/* harmony import */ var _ds_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ds-components/popup/popup.component */ "./src/app/ds-components/popup/popup.component.ts");





class EnterScreenComponent {
    constructor() {
        this.showDialogUI = false;
        this.currentPopopWindowIdx = 0;
        this.showTearms = false;
        this.showPrivacyPolicy = false;
    }
    ngOnInit() {
        this.sliderData = [
            {
                header: "Header 1",
                content: "Content 1",
                dotPeref: {
                    color: 'rgba(237, 166, 115, 0.5)',
                    defaultColor: 'rgba(237, 166, 115, 0.5)'
                }
            },
            {
                header: "Welcome to",
                header2: 'Our Auction Center',
                content: "This is where Auction Houses are posted by our administration team. When one room closes another one opens for our multi-room Houses. When a room is ready to close, it means that the room is full and the timer will be activated to conclude the bidding session. Any addtional rooms will open automatically with a 21 day timer until it conculdes.",
                dotPeref: {
                    color: 'rgba(237, 166, 115, 0.5)',
                    defaultColor: 'rgba(237, 166, 115, 0.5)'
                },
                default: true
            },
            {
                header: "Header 3",
                content: "Content 3.",
                dotPeref: {
                    color: 'rgba(237, 166, 115, 0.5)',
                    defaultColor: 'rgba(237, 166, 115, 0.5)'
                }
            }
        ];
        this.popupData = [
            {
                header: 'DreamStakes Rules & Regulation',
                contentHeader: 'DreamStakes Contract',
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus et lacus at maximus. Vivamus dignissim tincidunt turpis, eu lacinia justo tempor eu. Morbi aliquam nulla non porta tincidunt. Vivamus at ultricies enim, eget tempus quam. Etiam nisi felis, ultricies ut eros nec, accumsan luctus lectus. Donec justo enim, venenatis ac tellus quis, congue ultrices arcu. In feugiat nec dolor non vehicula. Proin id tincidunt erat.<br><br>
        Nullam consectetur interdum mollis. Morbi in lacus sapien. Vivamus aliquet massa sed lacus pretium lacinia. Maecenas quis leo sed tortor maximus eleifend. Sed sit amet facilisis neque. Proin tempus massa sit amet lorem sagittis, at ultricies quam auctor. Suspendisse quis nulla commodo, elementum felis vel, pellentesque justo. In mi sem, fringilla at fermentum at, vulputate suscipit sapien. Vivamus at tincidunt libero, id rutrum nulla. Curabitur auctor lectus sit amet ex imperdiet consequat. Donec tempor magna sapien, tempus ultricies neque ultricies sed.<br><br>
        Proin nec magna justo. Proin vel pretium enim, eget sollicitudin nisi. Proin mattis rutrum lorem ut consequat. Quisque eget magna ex. Proin vestibulum, metus eu dictum congue, lorem lectus ultricies enim, quis semper orci lacus sit amet dui. Pellentesque eget neque lobortis, tincidunt lectus eu, hendrerit orci. Etiam at risus tristique ante hendrerit consequat. Sed eleifend erat sed auctor blandit. Curabitur vehicula sapien bibendum odio malesuada, vitae egestas nunc dictum. Cras bibendum egestas neque. Donec imperdiet eget nisi ut semper. Sed eu tempor enim.<br><br>
        Duis magna sapien, malesuada sit amet felis eu, convallis rhoncus elit. Donec hendrerit urna non eros rutrum efficitur. Quisque a luctus diam. Sed vel laoreet odio. Cras accumsan tristique mauris et faucibus. Praesent sit amet dapibus dolor. Nam facilisis lacus at lectus volutpat imperdiet. Etiam tincidunt eros erat, id rutrum risus venenatis non. Aliquam ornare semper lacus at tempor. Suspendisse potenti. Curabitur tempus, nisi eget vehicula fermentum, justo tortor venenatis turpis, ac cursus nunc tortor eget augue. Duis finibus, arcu vel condimentum auctor, lectus eros placerat massa, ut facilisis odio lacus pulvinar tortor. Vivamus dictum vulputate fermentum. Integer vitae egestas mi. Etiam a tellus eu leo laoreet hendrerit.<br><br>
        Sed condimentum odio in dolor cursus consequat. Nam auctor suscipit nisi, sed egestas arcu bibendum nec. Nullam quis nibh sit amet massa interdum sollicitudin. Sed lorem nisi, iaculis placerat massa at, placerat semper sapien. Nulla dictum dapibus arcu ut condimentum. Vivamus at dapibus tellus. Duis ut augue maximus, mattis nisi ut, elementum enim. Maecenas sed aliquet lacus, eget condimentum nisi. Fusce suscipit consequat risus consequat scelerisque. Donec sodales, turpis nec scelerisque suscipit, magna ipsum eleifend magna, id aliquam sapien arcu quis urna. Cras vel mattis sapien. Etiam scelerisque venenatis fermentum. Donec at turpis a lorem vulputate sodales sed in tellus. Donec volutpat libero vitae gravida molestie. Ut sed ante neque.`,
                bckButton: false,
                nxtButton: true,
                showFooter: true
            },
            {
                header: 'DreamStakes Rules & Regulation',
                contentHeader: 'Non-Refundable $100 Entry Fee',
                content: ``,
                bckButton: true,
                nxtButton: true,
                customContents: 'agreement',
                showFooter: true
            },
            {
                header: 'DreamStakes Rules & Regulation',
                contentHeader: 'Choose Your Payment Method',
                content: ``,
                bckButton: true,
                nxtButton: false,
                customContents: 'payments',
                customFooterButton: 'submit',
                showFooter: true
            },
        ];
        this.customPopupContents = [
            {
                header: 'Terms and conditions',
                contentHeader: 'Terms and conditions ',
                content: `These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Dreamstakes.com accessible at www.dreamstakes.com.<br><br>
        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions. These Terms and Conditions have been generated with the help of the Terms And Conditiions Sample Generator.<br><br>
        Minors or people below 18 years old are not allowed to use this Website.<br><br>
        Your Privacy<br>
        Please read Privacy Policy.<br><br>
        No warranties<br>
        This Website is provided "as is," with all faults, and Dream stakes express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.<br><br>
        Limitation of liability<br>
        In no event shall Dream stakes, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Dream stakes, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.<br><br>
        Indemnification<br>
        You hereby indemnify to the fullest extent Dream stakes from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.<br><br>
        Severability<br>
        If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.<br><br>
        Variation of Terms<br>
        Dream stakes is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.<br><br>
        Assignment<br>
        The Dream stakes is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.<br><br>
        Entire Agreement<br>
        These Terms constitute the entire agreement between Dream stakes and you in relation to your use of this Website, and supersede all prior agreements and understandings.<br><br>
        Governing Law & Jurisdiction<br>
        These Terms will be governed by and interpreted in accordance with the laws of the State of af, and you submit to the non-exclusive jurisdiction of the state and federal courts located in af for the resolution of any disputes.
        `,
                bckButton: false,
                nxtButton: false,
                showFooter: true
            },
            {
                header: 'Privacy Policy',
                contentHeader: 'Privacy Policy',
                content: `

          Last updated: 2020-11-06 11:35:26<br>

          We value your privacy very highly. Please read this Privacy Policy carefully before using the www.theloremipsumco.com Website (the "Website") operated by The Lorem Ipsum Company, a(n) Corporation formed in California, United States ("us," "we," "our") as this Privacy Policy contains important information regarding your privacy and how we may use the information we collect about you.
          <br>
          Your access to and use of the Website is conditional upon your acceptance of and compliance with this Privacy Policy. This Privacy Policy applies to everyone, including, but not limited to: visitors, users, and others, who wish to access or use the Website.
          <br>
          By accessing or using the Website, you agree to be bound by this Privacy Policy. If you disagree with any part of the Privacy Policy, then you do not have our permission to access or use the Website.
          <br>
          We collect any and all information that you enter on this Website. We collect the following information about you:
          <br>

          Category of information	Specific piece of information
          <ul>
            <li>Identifying information	Name</li>
            <li>Identifying information	Phone number</li>
            <li>Identifying information	IP address</li>
            <li>Identifying information	Email address</li>
            <li>Internet or other electronic activity	Browsing history</li>
            <li>Internet or other electronic activity	Search history</li>
            <li>Internet or other electronic activity	Information regarding your interaction with our website or application</li>
            <li>How we may use your information</li>
          </ul>
          <br>

          We may use the information that you provide us for the following:
          <ul>
            <li>Marketing and advertising;</li>
            <li>Participation in surveys and contests;</li>
            <li>Performing services;</li>
            <li>Providing customer service;</li>
            <li>Resolving disputes;</li>
            <li>Verifying customer information;</li>
            <li>Analytics.</li>
            <li>With whom we share your information</li>
          </ul>

          <br>

          We share your personal information with the following categories of third parties:
          <ul>
            <li>Content management systems;</li>
            <li>Customer management systems;</li>
            <li>Email marketing vendors;</li>
            <li>Parties that need to operate the website;</li>
            <li>Subsidiaries;</li>
            <li>Data analytics providers;</li>
            <li>Social networks.</li>
          </ul>
        `,
                bckButton: false,
                nxtButton: false,
                showFooter: true
            }
        ];
        this.currentPopupPage = this.popupData[this.currentPopopWindowIdx];
    }
    showDialog() {
        this.showDialogUI = true;
    }
    recieveFromPopupDialog(e) {
        switch (e.command) {
            case src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].close:
                if (!e.customCommand) {
                    this.currentPopopWindowIdx = 0;
                    this.showDialogUI = false;
                }
                else {
                    if (e.customCommand === 'closeTearms') {
                        this.showTearms = false;
                    }
                    else {
                        this.showPrivacyPolicy = false;
                    }
                }
                break;
            case src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].next:
                this.currentPopopWindowIdx++;
                break;
            case src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].back:
                this.currentPopopWindowIdx--;
                break;
            case src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showTearms:
                this.showTearms = true;
                break;
            case src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showPrivacyPolicy:
                this.showPrivacyPolicy = true;
                break;
            case src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].submit:
                this.currentPopopWindowIdx = 0;
                this.showDialogUI = false;
                break;
        }
        if (e.command !== src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showTearms || e.command !== src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showPrivacyPolicy)
            this.currentPopupPage = this.popupData[this.currentPopopWindowIdx];
    }
}
EnterScreenComponent.ɵfac = function EnterScreenComponent_Factory(t) { return new (t || EnterScreenComponent)(); };
EnterScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnterScreenComponent, selectors: [["app-enter-screen"]], decls: 34, vars: 7, consts: [[1, "container"], [1, "slider-wrapper"], [1, "slider-btns"], [1, "left"], ["src", "./assets/btn-icons/icons8_back 1.png"], [1, "right"], ["src", "./assets/btn-icons/icons8_next 2.png"], [1, "slider"], [1, "card", "card-pol-1"], [1, "card", "card-pol-2"], [1, "content"], [1, "header"], [1, "middle-txt"], [1, "btn"], [1, "bottom-txt", 3, "click"], [1, "card", "card-pol-3"], [1, "info-area"], [3, "sliderData"], [1, "img-area"], [1, "txt"], [1, "big-txt"], [1, "small-txt"], ["src", "./assets/white-star.png"], ["src", "./assets/house-info.png"], [3, "display", "popupData", "notifyParent"]], template: function EnterScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " DreamStakes Duplex Auction House ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " ROOM 1.1-2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " $100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnterScreenComponent_Template_div_click_17_listener() { return ctx.showDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Enter Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-common-slider", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 500+ Contractors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 4.9 (5.8k review) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-popup", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParent", function EnterScreenComponent_Template_app_popup_notifyParent_31_listener($event) { return ctx.recieveFromPopupDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-popup", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParent", function EnterScreenComponent_Template_app_popup_notifyParent_32_listener($event) { return ctx.recieveFromPopupDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-popup", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParent", function EnterScreenComponent_Template_app_popup_notifyParent_33_listener($event) { return ctx.recieveFromPopupDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sliderData", ctx.sliderData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", ctx.showDialogUI)("popupData", ctx.currentPopupPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", ctx.showTearms)("popupData", ctx.customPopupContents[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", ctx.showPrivacyPolicy)("popupData", ctx.customPopupContents[1]);
    } }, directives: [_ds_components_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__["CommonSliderComponent"], _ds_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_3__["PopupComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding-right: 45px;\n  padding-top: 20px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 363px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 952px;\n  height: 100%;\n  position: absolute;\n  z-index: 9;\n  padding: 0px 35px 0px 35px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider-btns[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 952px;\n  height: 100%;\n  background: #FCFCFC;\n  border-radius: 16px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 476px;\n  height: 298px;\n  background: linear-gradient(96.87deg, #85DFE3 0%, #95CED1 80.78%), linear-gradient(96.87deg, #95CED1 0%, #95CED1 80.78%);\n  border-radius: 6px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-1[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(0 0, 100% 7%, 100% 92%, 0% 100%);\n          clip-path: polygon(0 0, 100% 7%, 100% 92%, 0% 100%);\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  z-index: 9;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 150px;\n  height: 256px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  text-align: center;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .middle-txt[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  border: 1px solid #FFFFFF;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bottom-txt[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #FFFFFF;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-3[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(0 7%, 100% 0, 100% 100%, 0 92%);\n          clip-path: polygon(0 7%, 100% 0, 100% 100%, 0 92%);\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-grow: 1;\n  margin-top: 20px;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 380px;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%] {\n  width: 365px;\n  height: 380px;\n  flex-shrink: 0;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 697px;\n  margin-left: 13px;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   .big-txt[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   .small-txt[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  margin-top: 5px;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   .small-txt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 17px;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50ZXItc2NyZWVuL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXGVudGVyLXNjcmVlblxcZW50ZXItc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbnRlci1zY3JlZW4vZW50ZXItc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0FSO0FERVE7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQ0RaO0FER1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RoQjtBREtRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0haO0FES1k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdIQUFBO0VBQ0Esa0JBQUE7QUNIaEI7QURNWTtFQUVJLDJEQUFBO1VBQUEsbURBQUE7QUNMaEI7QURTWTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNSaEI7QURVZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNScEI7QURVb0I7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxjQUFBO0FDUnhCO0FEV29CO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1R4QjtBRFlvQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1Z4QjtBRGFvQjtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1h4QjtBRGlCWTtFQUVJLDBEQUFBO1VBQUEsa0RBQUE7QUNoQmhCO0FEeUJJO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ3hCUjtBRDBCUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDeEJaO0FEMkJRO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDMUJaO0FENEJZO0VBRUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUMzQmhCO0FENkJnQjtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUMzQnBCO0FEOEJnQjtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQzVCcEI7QUQ4Qm9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUM1QnhCO0FEa0NZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNoQ2hCIiwiZmlsZSI6InNyYy9hcHAvZW50ZXItc2NyZWVuL2VudGVyLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG4gICAgLnNsaWRlci13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDM2M3B4O1xyXG5cclxuICAgICAgICAuc2xpZGVyLWJ0bnMge1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogOTUycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMzVweCAwcHggMzVweDsgXHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDk1MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGQ0ZDRkM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ3NnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOThweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5Ni44N2RlZywgIzg1REZFMyAwJSwgIzk1Q0VEMSA4MC43OCUpLCBsaW5lYXItZ3JhZGllbnQoOTYuODdkZWcsICM5NUNFRDEgMCUsICM5NUNFRDEgODAuNzglKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5jYXJkLXBvbC0xIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSA3JSwgMTAwJSA5MiUsIDAlIDEwMCUpOyBcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmNhcmQtcG9sLTIge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1pZGRsZS10eHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5ib3R0b20tdHh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuY2FyZC1wb2wtMyB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDclLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCA5MiUpOyBcclxuXHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuaW5mby1hcmVhIHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltZy1hcmVhIHtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAzNjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICAgICAgICAgICAudHh0IHtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDY5N3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmJpZy10eHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNtYWxsLXR4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2M3B4O1xufVxuLmNvbnRhaW5lciAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTUycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xuICBwYWRkaW5nOiAwcHggMzVweCAwcHggMzVweDtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItYnRucyBpbWcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmNvbnRhaW5lciAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTUycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0ZDRkNGQztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIC5zbGlkZXIgLmNhcmQge1xuICB3aWR0aDogNDc2cHg7XG4gIGhlaWdodDogMjk4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5Ni44N2RlZywgIzg1REZFMyAwJSwgIzk1Q0VEMSA4MC43OCUpLCBsaW5lYXItZ3JhZGllbnQoOTYuODdkZWcsICM5NUNFRDEgMCUsICM5NUNFRDEgODAuNzglKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmNvbnRhaW5lciAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlciAuY2FyZC1wb2wtMSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgNyUsIDEwMCUgOTIlLCAwJSAxMDAlKTtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIC5zbGlkZXIgLmNhcmQtcG9sLTIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xufVxuLmNvbnRhaW5lciAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlciAuY2FyZC1wb2wtMiAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1NnB4O1xufVxuLmNvbnRhaW5lciAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlciAuY2FyZC1wb2wtMiAuY29udGVudCAuaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIC5zbGlkZXIgLmNhcmQtcG9sLTIgLmNvbnRlbnQgLm1pZGRsZS10eHQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIC5zbGlkZXIgLmNhcmQtcG9sLTIgLmNvbnRlbnQgLmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIC5zbGlkZXIgLmNhcmQtcG9sLTIgLmNvbnRlbnQgLmJvdHRvbS10eHQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlciAuY2FyZC1wb2wtMyB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDclLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCA5MiUpO1xufVxuLmNvbnRhaW5lciAuaW5mby1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLmluZm8tYXJlYSAuc2xpZGVyIHtcbiAgZmxleC1ncm93OiAxO1xuICBoZWlnaHQ6IDM4MHB4O1xufVxuLmNvbnRhaW5lciAuaW5mby1hcmVhIC5pbWctYXJlYSB7XG4gIHdpZHRoOiAzNjVweDtcbiAgaGVpZ2h0OiAzODBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uY29udGFpbmVyIC5pbmZvLWFyZWEgLmltZy1hcmVhIC50eHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjk3cHg7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuLmNvbnRhaW5lciAuaW5mby1hcmVhIC5pbWctYXJlYSAudHh0IC5iaWctdHh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uY29udGFpbmVyIC5pbmZvLWFyZWEgLmltZy1hcmVhIC50eHQgLnNtYWxsLXR4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbmZvLWFyZWEgLmltZy1hcmVhIC50eHQgLnNtYWxsLXR4dCBpbWcge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxN3B4O1xufVxuLmNvbnRhaW5lciAuaW5mby1hcmVhIC5pbWctYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnterScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-enter-screen',
                templateUrl: './enter-screen.component.html',
                styleUrls: ['./enter-screen.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.types */ "./src/app/app.types.ts");
/* harmony import */ var ng_interconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-interconnect */ "./node_modules/ng-interconnect/__ivy_ngcc__/fesm2015/ng-interconnect.js");
/* harmony import */ var _ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui-containers/left-panal/left-panal.component */ "./src/app/ui-containers/left-panal/left-panal.component.ts");
/* harmony import */ var _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui-containers/top-bar/top-bar.component */ "./src/app/ui-containers/top-bar/top-bar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enter-screen/enter-screen.component */ "./src/app/enter-screen/enter-screen.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _ui_containers_right_panal_right_panal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui-containers/right-panal/right-panal.component */ "./src/app/ui-containers/right-panal/right-panal.component.ts");











function HomeComponent_app_enter_screen_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-enter-screen");
} }
function HomeComponent_app_dashboard_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard");
} }
function HomeComponent_app_user_profile_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-profile");
} }
function HomeComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-right-panal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(interconnect) {
        this.interconnect = interconnect;
        this.title = 'dream-stakes';
        this.currentMainView = _app_types__WEBPACK_IMPORTED_MODULE_1__["MainViews"].enterScreen;
        this.rightPanal = false;
        this._MainViews = _app_types__WEBPACK_IMPORTED_MODULE_1__["MainViews"];
    }
    ngOnInit() {
        //--------------- Home UI Listeners --------------------//
        this.interconnect.createListener('home/changeView', (_connection, command) => {
            this.currentMainView = command.mainView;
            if (this.currentMainView === this._MainViews.dashboard)
                this.rightPanal = true;
            else
                this.rightPanal = false;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_interconnect__WEBPACK_IMPORTED_MODULE_2__["Interconnect"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 4, consts: [[1, "home"], [1, "left-panal"], [1, "content"], [1, "top-bar"], [1, "client-area"], [4, "ngIf"], ["class", "right-panal", 4, "ngIf"], [1, "right-panal"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-left-panal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_app_enter_screen_7_Template, 1, 0, "app-enter-screen", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_app_dashboard_8_Template, 1, 0, "app-dashboard", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_app_user_profile_9_Template, 1, 0, "app-user-profile", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMainView === ctx._MainViews.enterScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMainView === ctx._MainViews.dashboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMainView === ctx._MainViews.userProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rightPanal);
    } }, directives: [_ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_3__["LeftPanalComponent"], _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__["TopBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_6__["EnterScreenComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"], _ui_containers_right_panal_right_panal_component__WEBPACK_IMPORTED_MODULE_9__["RightPanalComponent"]], styles: [".home[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.home[_ngcontent-%COMP%]   .left-panal[_ngcontent-%COMP%] {\n  width: 230px;\n  float: left;\n  height: 100%;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 100%;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .client-area[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 875px;\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n}\n.home[_ngcontent-%COMP%]   .right-panal[_ngcontent-%COMP%] {\n  width: 343px;\n  height: 100%;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUHJpdmF0ZVxcTnlyb2Jlb25rYVxcZHJlYW0tc3Rha2VzL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjtBREVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQVI7QURJSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRlI7QURJUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGWjtBRE9JO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxuICAgIC5sZWZ0LXBhbmFse1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5jbGllbnQtYXJlYXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogODc1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJpZ2h0LXBhbmFsIHtcclxuICAgICAgICB3aWR0aDogMzQzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgfVxyXG5cclxufSIsIi5ob21lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ob21lIC5sZWZ0LXBhbmFsIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmhvbWUgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ob21lIC5jb250ZW50IC5jbGllbnQtYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDg3NXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvbWUgLnJpZ2h0LXBhbmFsIHtcbiAgd2lkdGg6IDM0M3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: ng_interconnect__WEBPACK_IMPORTED_MODULE_2__["Interconnect"] }]; }, null); })();


/***/ }),

/***/ "./src/app/safe-html.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/safe-html.pipe.ts ***!
  \***********************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SafeHtmlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui-containers/left-panal/left-panal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ui-containers/left-panal/left-panal.component.ts ***!
  \******************************************************************/
/*! exports provided: LeftPanalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPanalComponent", function() { return LeftPanalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.types */ "./src/app/app.types.ts");
/* harmony import */ var ng_interconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-interconnect */ "./node_modules/ng-interconnect/__ivy_ngcc__/fesm2015/ng-interconnect.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ds_components_card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ds-components/card-slider/card-slider.component */ "./src/app/ds-components/card-slider/card-slider.component.ts");






function LeftPanalComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card-slider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LeftPanalComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DreamStakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Auction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "4.9 (5.8k review)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "show-background": a0 }; };
class LeftPanalComponent {
    constructor(interconnect, elem) {
        this.interconnect = interconnect;
        this.elem = elem;
        this._MainViews = src_app_app_types__WEBPACK_IMPORTED_MODULE_1__["MainViews"];
        this.showBackground = false;
        this.showCards = true;
        this.enterBtn = './assets/btn-icons/icons8_enter 1.png';
        this.dashboardBtn = './assets/btn-icons/user.png';
        this.lockerBtn = './assets/btn-icons/icons8_key 1.png';
        this.settingsBtn = './assets/btn-icons/settings.png';
        this.changeView = interconnect.connectToListener('home/changeView', 'leftbar');
        if (this.changeView['then']) {
            this.changeView['then']((notifier) => this.changeView = notifier);
        }
    }
    ngOnInit() {
        this.interconnect.createListener('leftbar/changeView', (_connection, command) => {
            // Notify home
            this.changeView.emit({ mainView: command.viewId });
            // UI elements
            this.showBackground = command.showBackground;
            this.showCards = command.showCards;
            // Reset button icons
            this.enterBtn = './assets/btn-icons/icons8_enter 1-gray.png';
            this.dashboardBtn = './assets/btn-icons/user.png';
            this.lockerBtn = './assets/btn-icons/icons8_key 1.png';
            this.settingsBtn = './assets/btn-icons/settings.png';
            // Remove selected items
            Array.from(this.elem.nativeElement.querySelectorAll('.main-btns')).forEach((btn) => btn.classList.remove('select'));
        });
    }
    userChangeView(viewId, showBackground, showCards) {
        this.changeView.emit({ mainView: viewId });
        // UI elements
        this.showBackground = showBackground;
        this.showCards = showCards;
        this.buttonsIconChange(viewId);
    }
    buttonsIconChange(viewId) {
        let leftbarButtons = Array.from(this.elem.nativeElement.querySelectorAll('.main-btns'));
        leftbarButtons.forEach((btn) => {
            let btnId = +btn.id;
            if (btnId === viewId && btnId !== 999) {
                switch (viewId) {
                    case this._MainViews.enterScreen:
                        this.enterBtn = './assets/btn-icons/icons8_enter 1.png';
                        this.dashboardBtn = './assets/btn-icons/user.png';
                        this.lockerBtn = './assets/btn-icons/icons8_key 1.png';
                        this.settingsBtn = './assets/btn-icons/settings.png';
                        break;
                    case this._MainViews.dashboard:
                        this.dashboardBtn = './assets/btn-icons/dashboard-white.png';
                        this.enterBtn = './assets/btn-icons/icons8_enter 1-gray.png';
                        this.lockerBtn = './assets/btn-icons/icons8_key 1.png';
                        this.settingsBtn = './assets/btn-icons/settings.png';
                        break;
                }
                btn.classList.add('select');
            }
            else
                btn.classList.remove('select');
        });
    }
}
LeftPanalComponent.ɵfac = function LeftPanalComponent_Factory(t) { return new (t || LeftPanalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_interconnect__WEBPACK_IMPORTED_MODULE_2__["Interconnect"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LeftPanalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftPanalComponent, selectors: [["app-left-panal"]], decls: 27, vars: 9, consts: [[1, "container", 3, "ngClass"], [1, "fixed-area"], [1, "logo"], ["src", "./assets/LOGO@3xDecision 2 1.png"], ["id", "0", 1, "main-btns", "select", 3, "click"], [3, "src"], ["id", "1", 1, "main-btns", 3, "click"], ["id", "2", 1, "main-btns"], ["id", "3", 1, "main-btns"], ["class", "card-1", 4, "ngIf"], ["class", "card-2", 4, "ngIf"], [1, "grow-area"], ["id", "999", 1, "main-btns", "logout-btn"], ["src", "./assets/btn-icons/logout.png"], [1, "card-1"], [1, "card-2"], [1, "icon-area"], ["src", "./assets/home-icon2.png"], [1, "title"], [1, "ratings"], ["src", "./assets/star.png"]], template: function LeftPanalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftPanalComponent_Template_div_click_4_listener() { return ctx.userChangeView(ctx._MainViews.enterScreen, false, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftPanalComponent_Template_div_click_8_listener() { return ctx.userChangeView(ctx._MainViews.dashboard, true, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Key Locker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LeftPanalComponent_div_20_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LeftPanalComponent_div_21_Template, 12, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.showBackground));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.enterBtn, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.dashboardBtn, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.lockerBtn, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.settingsBtn, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ds_components_card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_4__["CardSliderComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 230px;\n  height: 100%;\n  background: #FFFFFF;\n  align-items: center;\n  flex-shrink: 0;\n}\n.container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 178px;\n  height: 48px;\n  border-radius: 16px;\n  margin-bottom: 17px;\n  padding: 0px 0px 0px 16px;\n  font-family: \"Open Sans\";\n}\n.container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  margin-right: 22px;\n}\n.container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #727272;\n}\n.container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  background: #95CED1;\n}\n.container[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #FFFFFF !important;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  margin-top: 34px;\n  text-align: center;\n  margin-bottom: 46px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-1[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  width: 208px;\n  height: 227px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%] {\n  margin-top: 39px;\n  width: 208px;\n  height: 201px;\n  background: #0093B2;\n  border-radius: 30px;\n  padding-top: 29px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 20px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-left: 20px;\n  margin-top: 10px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  padding-left: 20px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 17px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 47px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  margin-left: 5px;\n  margin-top: 5px;\n}\n.container[_ngcontent-%COMP%]   .grow-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  flex-grow: 1;\n}\n.container[_ngcontent-%COMP%]   .grow-area[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  margin-bottom: unset;\n}\n.container[_ngcontent-%COMP%]   .grow-area[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.container[_ngcontent-%COMP%]   .grow-area[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 19px;\n  color: rgba(5, 44, 78, 0.6);\n}\n.show-background[_ngcontent-%COMP%] {\n  background: url('assets/background-flip.png');\n  background-repeat: no-repeat;\n  background-position-y: 280px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY29udGFpbmVycy9sZWZ0LXBhbmFsL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXHVpLWNvbnRhaW5lcnNcXGxlZnQtcGFuYWxcXGxlZnQtcGFuYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLWNvbnRhaW5lcnMvbGVmdC1wYW5hbC9sZWZ0LXBhbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ0NSO0FERVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQVo7QURHUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNEWjtBRE9JO0VBQ0ksZUFBQTtBQ0xSO0FEUUk7RUFDSSxtQkFBQTtBQ05SO0FEUVE7RUFDSSx5QkFBQTtBQ05aO0FEV0k7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1ZSO0FEWVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1ZaO0FEWVk7RUFDSSxZQUFBO0FDVmhCO0FEY1E7RUFFSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDYlo7QURnQlE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDZFo7QURnQlk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNkaEI7QURnQmdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNkcEI7QURtQlk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2pCaEI7QURtQmdCO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDakJwQjtBRHFCWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDbkJoQjtBRHFCZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ25CcEI7QURzQmdCO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDcEJwQjtBRDJCSTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQzFCUjtBRDRCUTtFQUVJLG9CQUFBO0FDM0JaO0FENkJZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUMzQmhCO0FEOEJZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUM1QmhCO0FEc0NBO0VBQ0ksNkNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FDbkNKIiwiZmlsZSI6InNyYy9hcHAvdWktY29udGFpbmVycy9sZWZ0LXBhbmFsL2xlZnQtcGFuYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICAubWFpbi1idG5zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTc4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuXHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzI3MjcyO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWJ0bnMsIC5tYWluLWJ0bnMgPiBsYWJlbDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM5NUNFRDE7XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5maXhlZC1hcmVhIHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NnB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuY2FyZC0xIHtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMjdweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuY2FyZC0yIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzlweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5M0IyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjlweDtcclxuICAgIFxyXG4gICAgICAgICAgICAuaWNvbi1hcmVhIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAucmF0aW5ncyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3ctYXJlYSB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgICAgICAgLmxvZ291dC1idG57XHJcblxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcclxuICAgIFxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDUsIDQ0LCA3OCwgMC42KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbi5zaG93LWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdeYXNzZXRzL2JhY2tncm91bmQtZmxpcC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDI4MHB4O1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDIzMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmNvbnRhaW5lciAubWFpbi1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuLmNvbnRhaW5lciAubWFpbi1idG5zIGltZyB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogMjJweDtcbn1cbi5jb250YWluZXIgLm1haW4tYnRucyBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjNzI3MjcyO1xufVxuLmNvbnRhaW5lciAubWFpbi1idG5zLCAuY29udGFpbmVyIC5tYWluLWJ0bnMgPiBsYWJlbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLnNlbGVjdCB7XG4gIGJhY2tncm91bmQ6ICM5NUNFRDE7XG59XG4uY29udGFpbmVyIC5zZWxlY3QgbGFiZWwge1xuICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuZml4ZWQtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmZpeGVkLWFyZWEgLmxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NnB4O1xuICBtYXJnaW4tdG9wOiAzNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQ2cHg7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5sb2dvIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIgLmZpeGVkLWFyZWEgLmNhcmQtMSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHdpZHRoOiAyMDhweDtcbiAgaGVpZ2h0OiAyMjdweDtcbn1cbi5jb250YWluZXIgLmZpeGVkLWFyZWEgLmNhcmQtMiB7XG4gIG1hcmdpbi10b3A6IDM5cHg7XG4gIHdpZHRoOiAyMDhweDtcbiAgaGVpZ2h0OiAyMDFweDtcbiAgYmFja2dyb3VuZDogIzAwOTNCMjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZy10b3A6IDI5cHg7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5jYXJkLTIgLmljb24tYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5jYXJkLTIgLmljb24tYXJlYSBpbWcge1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xufVxuLmNvbnRhaW5lciAuZml4ZWQtYXJlYSAuY2FyZC0yIC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5jYXJkLTIgLnRpdGxlIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5jYXJkLTIgLnJhdGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmNvbnRhaW5lciAuZml4ZWQtYXJlYSAuY2FyZC0yIC5yYXRpbmdzIGltZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE3cHg7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5jYXJkLTIgLnJhdGluZ3MgbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jb250YWluZXIgLmdyb3ctYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5jb250YWluZXIgLmdyb3ctYXJlYSAubG9nb3V0LWJ0biB7XG4gIG1hcmdpbi1ib3R0b206IHVuc2V0O1xufVxuLmNvbnRhaW5lciAuZ3Jvdy1hcmVhIC5sb2dvdXQtYnRuIGltZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uY29udGFpbmVyIC5ncm93LWFyZWEgLmxvZ291dC1idG4gbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogcmdiYSg1LCA0NCwgNzgsIDAuNik7XG59XG5cbi5zaG93LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJeYXNzZXRzL2JhY2tncm91bmQtZmxpcC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMjgwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftPanalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-left-panal',
                templateUrl: './left-panal.component.html',
                styleUrls: ['./left-panal.component.scss']
            }]
    }], function () { return [{ type: ng_interconnect__WEBPACK_IMPORTED_MODULE_2__["Interconnect"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui-containers/right-panal/right-panal.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui-containers/right-panal/right-panal.component.ts ***!
  \********************************************************************/
/*! exports provided: RightPanalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPanalComponent", function() { return RightPanalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RightPanalComponent {
    constructor() { }
    ngOnInit() {
    }
}
RightPanalComponent.ɵfac = function RightPanalComponent_Factory(t) { return new (t || RightPanalComponent)(); };
RightPanalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RightPanalComponent, selectors: [["app-right-panal"]], decls: 49, vars: 0, consts: [[1, "container"], [1, "profile"], [1, "pro-pic"], ["src", "./assets/profile/pro-pic.png", 1, "pic"], ["src", "./assets/profile/edit.png", 1, "icon"], [1, "name"], [1, "username"], [1, "joined"], [1, "address"], [1, "details"], [1, "item"], [1, "icon-area"], ["src", "./assets/profile/icons/entries.png"], [1, "val"], ["src", "./assets/profile/icons/bids.png"], ["src", "./assets/profile/icons/coins.png"], ["src", "./assets/profile/icons/cash.png"], [1, "val", "diff"]], template: function RightPanalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " William Fancyson ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " @thomasdox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Join on 24 March 2017 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " St George's Ln Singapore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Entries: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Bids Placed: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Contracts Won: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Cash Spent: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Successful Invites ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: #FFFFFF;\n  background-image: url('assets/background.png');\n  background-repeat: no-repeat;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 434px;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .pro-pic[_ngcontent-%COMP%] {\n  width: 119px;\n  height: 120px;\n  border-radius: 100px;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .pro-pic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .pro-pic[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 83px;\n  top: 170px;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 26px;\n  line-height: 35px;\n  text-align: center;\n  color: #2C2C2C;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #818181;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .joined[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #95CED1;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  color: #AFAFAF;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  height: 32px;\n  padding: 30px;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%] {\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  margin-right: 10px;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 32px;\n  color: #2C2C2C;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 32px;\n  color: #79778A;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%] {\n  color: #95CED1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY29udGFpbmVycy9yaWdodC1wYW5hbC9EOlxcUHJpdmF0ZVxcTnlyb2Jlb25rYVxcZHJlYW0tc3Rha2VzL3NyY1xcYXBwXFx1aS1jb250YWluZXJzXFxyaWdodC1wYW5hbFxccmlnaHQtcGFuYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLWNvbnRhaW5lcnMvcmlnaHQtcGFuYWwvcmlnaHQtcGFuYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSw0QkFBQTtBQ0NKO0FEQ0k7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNBUjtBREVRO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ0RaO0FER1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RoQjtBRElZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0ZoQjtBRE1RO0VBRUksZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNMWjtBRFNRO0VBRUksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1JaO0FEWVE7RUFFSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNYWjtBRGVRO0VBRUksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNkWjtBRG9CSTtFQUVJLFlBQUE7RUFDQSxXQUFBO0FDbkJSO0FEcUJRO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNwQlo7QURzQlk7RUFFSSxhQUFBO0FDckJoQjtBRHVCZ0I7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDdEJwQjtBRDBCZ0I7RUFFSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDekJwQjtBRCtCWTtFQUVJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUM5QmhCO0FEa0NZO0VBQ0ksY0FBQTtBQ2hDaEIiLCJmaWxlIjoic3JjL2FwcC91aS1jb250YWluZXJzL3JpZ2h0LXBhbmFsL3JpZ2h0LXBhbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnXmFzc2V0cy9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICAucHJvZmlsZXtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MzRweDtcclxuXHJcbiAgICAgICAgLnByby1waWMge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgd2lkdGg6IDExOXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHJcbiAgICAgICAgICAgIC5waWMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA4M3B4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICMyQzJDMkM7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXJuYW1lIHtcclxuXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzgxODE4MTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuam9pbmVkIHtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzk1Q0VEMTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkcmVzcyB7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNBRkFGQUY7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlscyB7XHJcblxyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLml0ZW0ge1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgLmljb24tYXJlYSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyQzJDMkM7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZhbCB7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3OTc3OEE7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGlmZiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk1Q0VEMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIl5hc3NldHMvYmFja2dyb3VuZC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uY29udGFpbmVyIC5wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQzNHB4O1xufVxuLmNvbnRhaW5lciAucHJvZmlsZSAucHJvLXBpYyB7XG4gIHdpZHRoOiAxMTlweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG4uY29udGFpbmVyIC5wcm9maWxlIC5wcm8tcGljIC5waWMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciAucHJvZmlsZSAucHJvLXBpYyAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDgzcHg7XG4gIHRvcDogMTcwcHg7XG59XG4uY29udGFpbmVyIC5wcm9maWxlIC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJDMkMyQztcbn1cbi5jb250YWluZXIgLnByb2ZpbGUgLnVzZXJuYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4MTgxODE7XG59XG4uY29udGFpbmVyIC5wcm9maWxlIC5qb2luZWQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzk1Q0VEMTtcbn1cbi5jb250YWluZXIgLnByb2ZpbGUgLmFkZHJlc3Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0FGQUZBRjtcbn1cbi5jb250YWluZXIgLmRldGFpbHMge1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLml0ZW0gLmljb24tYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5pdGVtIC5pY29uLWFyZWEgaW1nIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAuaXRlbSAuaWNvbi1hcmVhIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6ICMyQzJDMkM7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5pdGVtIC52YWwge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogIzc5Nzc4QTtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLml0ZW0gLmRpZmYge1xuICBjb2xvcjogIzk1Q0VEMTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightPanalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-right-panal',
                templateUrl: './right-panal.component.html',
                styleUrls: ['./right-panal.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ui-containers/top-bar/top-bar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ui-containers/top-bar/top-bar.component.ts ***!
  \************************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.types */ "./src/app/app.types.ts");
/* harmony import */ var ng_interconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-interconnect */ "./node_modules/ng-interconnect/__ivy_ngcc__/fesm2015/ng-interconnect.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");





class TopBarComponent {
    constructor(interconnect) {
        this.interconnect = interconnect;
        this._MainViews = src_app_app_types__WEBPACK_IMPORTED_MODULE_1__["MainViews"];
        this.changeView = interconnect.connectToListener('leftbar/changeView', 'topbar');
        if (this.changeView['then']) {
            this.changeView['then']((notifier) => this.changeView = notifier);
        }
    }
    ngOnInit() {
    }
    userChangeView(viewId, showBackground, showCards) {
        this.changeView.emit({ viewId, showBackground, showCards });
    }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_interconnect__WEBPACK_IMPORTED_MODULE_2__["Interconnect"])); };
TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 14, vars: 0, consts: [[1, "container"], [1, "section-1"], [1, "ui-inputgroup"], [1, "ui-inputgroup-addon"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Search for frequently asked questions"], [1, "section-2"], [1, "section-3"], [1, "profile", 3, "click"], ["src", "./assets/profile/pro-pic.png"], [1, "notifications"], ["src", "./assets/notify-icon.png"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_Template_div_click_8_listener() { return ctx.userChangeView(ctx._MainViews.userProfile, true, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "William Fancysone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputText"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 90px;\n  padding: 32px 45px 0px 40px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%] {\n  width: 525px;\n  background: #FFFFFF;\n  box-shadow: 8px 10px 54px rgba(15, 13, 35, 0.03);\n  border-radius: 16px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%] {\n  width: 557px;\n  height: 48px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-top-left-radius: 16px;\n  border-bottom-left-radius: 16px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   .ui-inputgroup-addon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #FFFFFF;\n  border: none;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n  left: 14px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  position: relative;\n  left: -32px;\n  background-color: #FFFFFF;\n  border: none;\n  outline: none;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 24px;\n  color: #79778A;\n  padding-left: 50px;\n  padding-right: 25px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 24px;\n  color: #79778A;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 24px;\n  color: #79778A;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > .p-inputtext[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 0.02rem green !important;\n}\n.container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 251px;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 183px;\n  height: 48px;\n  background: #FFFFFF;\n  box-shadow: 8px 10px 54px rgba(15, 13, 35, 0.03);\n  border-radius: 16px;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  color: #2C2C2C;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 16px;\n  width: 52px;\n  height: 48px;\n  background: #FFFFFF;\n  box-shadow: 8px 10px 54px rgba(15, 13, 35, 0.03);\n  border-radius: 16px;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%] {\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY29udGFpbmVycy90b3AtYmFyL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXHVpLWNvbnRhaW5lcnNcXHRvcC1iYXJcXHRvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLWNvbnRhaW5lcnMvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NKO0FEQ0k7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FDQ1I7QURDUTtFQUVJLFlBQUE7RUFDQSxZQUFBO0FDQVo7QURFWTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUNBaEI7QURHWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNEaEI7QURJWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGaEI7QURLWTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNIaEI7QURIWTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNIaEI7QURRUTtFQUNJLDBDQUFBO0FDTlo7QURXSTtFQUNJLFlBQUE7QUNUUjtBRFlJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1ZSO0FEWVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDVlo7QURZWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDVmhCO0FEYVk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1hoQjtBRGVRO0VBQ0ksZUFBQTtBQ2JaO0FEZ0JRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FDZFo7QURnQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2RoQjtBRG1CSTtFQUNJLFlBQUE7QUNqQlIiLCJmaWxlIjoic3JjL2FwcC91aS1jb250YWluZXJzL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHBhZGRpbmc6IDMycHggNDVweCAwcHggNDBweDtcclxuXHJcbiAgICAuc2VjdGlvbi0xIHtcclxuICAgICAgICB3aWR0aDogNTI1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICBib3gtc2hhZG93OiA4cHggMTBweCA1NHB4IHJnYmEoMTUsIDEzLCAzNSwgMC4wMyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuXHJcbiAgICAgICAgLnVpLWlucHV0Z3JvdXB7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNTU3cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51aS1pbnB1dGdyb3VwLWFkZG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0zMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlIFZpZXRuYW0gUHJvJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzk3NzhBO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmUgVmlldG5hbSBQcm8nO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3OTc3OEE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuID4gLnAtaW5wdXR0ZXh0OmhvdmVye1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjAycmVtIGdyZWVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi0yIHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24tMyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiAyNTFweDtcclxuXHJcbiAgICAgICAgLnByb2ZpbGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxODNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA4cHggMTBweCA1NHB4IHJnYmEoMTUsIDEzLCAzNSwgMC4wMyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyQzJDMkM7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9maWxlOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDhweCAxMHB4IDU0cHggcmdiYSgxNSwgMTMsIDM1LCAwLjAzKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi0xLCAuc2VjdGlvbi0yLCAuc2VjdGlvbi0zIHtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB9XHJcblxyXG59IiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIHBhZGRpbmc6IDMycHggNDVweCAwcHggNDBweDtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMSB7XG4gIHdpZHRoOiA1MjVweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogOHB4IDEwcHggNTRweCByZ2JhKDE1LCAxMywgMzUsIDAuMDMpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0xIC51aS1pbnB1dGdyb3VwIHtcbiAgd2lkdGg6IDU1N3B4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTEgLnVpLWlucHV0Z3JvdXAgc3BhbiB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTEgLnVpLWlucHV0Z3JvdXAgLnVpLWlucHV0Z3JvdXAtYWRkb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMTRweDtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMSAudWktaW5wdXRncm91cCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJCZSBWaWV0bmFtIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjNzk3NzhBO1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTEgLnVpLWlucHV0Z3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzc5Nzc4QTtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMSBzcGFuID4gLnAtaW5wdXR0ZXh0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wMnJlbSBncmVlbiAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0yIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDI1MXB4O1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0zIC5wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDE4M3B4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDhweCAxMHB4IDU0cHggcmdiYSgxNSwgMTMsIDM1LCAwLjAzKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTMgLnByb2ZpbGUgaW1nIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMyAucHJvZmlsZSBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzJDMkMyQztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0zIC5wcm9maWxlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0zIC5ub3RpZmljYXRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiA4cHggMTBweCA1NHB4IHJnYmEoMTUsIDEzLCAzNSwgMC4wMyk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTMgLm5vdGlmaWNhdGlvbnMgaW1nIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMSwgLmNvbnRhaW5lciAuc2VjdGlvbi0yLCAuY29udGFpbmVyIC5zZWN0aW9uLTMge1xuICBoZWlnaHQ6IDQ4cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-bar',
                templateUrl: './top-bar.component.html',
                styleUrls: ['./top-bar.component.scss']
            }]
    }], function () { return [{ type: ng_interconnect__WEBPACK_IMPORTED_MODULE_2__["Interconnect"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");




function UserProfileComponent_div_2_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const aCard_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", aCard_r1.infoIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function UserProfileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserProfileComponent_div_2_img_7_Template, 1, 1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const aCard_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", aCard_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", aCard_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", aCard_r1.info, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", aCard_r1.infoIcon);
} }
class UserProfileComponent {
    constructor() {
        this.cards = [
            {
                icon: './assets/dasboard/home.png',
                title: 'Entries',
                info: '35',
                infoIcon: ''
            },
            {
                icon: './assets/dasboard/users.png',
                title: 'Cash Spent',
                info: '$3,435',
                infoIcon: ''
            },
            {
                icon: './assets/dasboard/users.png',
                title: 'Successful Invites',
                info: '189',
                infoIcon: ''
            },
            {
                icon: './assets/dasboard/settings.png',
                title: 'Bid Placed',
                info: '50',
                infoIcon: ''
            },
            {
                icon: './assets/dasboard/send.png',
                title: 'Contracts Won',
                info: '187',
                infoIcon: ''
            }
        ];
    }
    ngOnInit() {
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 66, vars: 1, consts: [[1, "container"], [1, "cards-area"], ["class", "a-card", 4, "ngFor", "ngForOf"], [1, "user-info"], [1, "pro-pic-large"], [1, "pic"], ["src", "./assets/profile/pro-pic.png"], [1, "info"], [1, "username"], [1, "desc"], [1, "item"], [1, "title"], [1, "value"], ["id", "input", "type", "text", "size", "30", "pInputText", ""], [1, "item", 2, "margin-bottom", "40px", "margin-top", "40px"], [1, "sub-text"], [1, "image-area"], [1, "actions"], ["id", "input", "type", "text", "size", "30", "pInputText", "", 2, "background", "#D9D9D9"], [1, "edit"], [1, "btn-area"], ["src", "./assets/profile/save-btn.png"], [1, "a-card"], [1, "icon"], [3, "src"], [3, "src", 4, "ngIf"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UserProfileComponent_div_2_Template, 8, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " William Fancyson ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Update your photo and personal details. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Email Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Your Photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " This will be displayed on your profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Phone Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Change ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Change ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Date of Birth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Change ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Change ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_2__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 40px 40px 0px 40px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  height: 200px;\n  max-width: 1130px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 174px;\n  height: 188px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  padding: 10px 0px 10px 0px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #79778A;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 23px;\n  line-height: 20px;\n  color: #95CED1;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin-left: 3px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 95px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .pro-pic-large[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding-left: 40px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .pro-pic-large[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  border-radius: 100px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .pro-pic-large[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .pro-pic-large[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-bottom: 15px;\n  padding-left: 40px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .pro-pic-large[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 26px;\n  line-height: 35px;\n  color: #2C2C2C;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .pro-pic-large[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n  color: #95CED1;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 35px;\n  margin-bottom: 30px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 200px;\n  height: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #444B5C;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .sub-text[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 14px;\n  color: #444B5C;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .image-area[_ngcontent-%COMP%] {\n  width: 285px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .image-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 100px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #444B5C;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 100%;\n  max-width: 455px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #444B5C;\n  background: #F4F4F4;\n  border: 1px solid #DADADA;\n  border-radius: 10px;\n  width: 435px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #444B5C;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #F9A369;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .btn-area[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXHVzZXItcHJvZmlsZVxcdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0FKO0FERUk7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNEUjtBREdRO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNGWjtBRElZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGaEI7QURJZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0ZwQjtBRE1ZO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0poQjtBRE9ZO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05oQjtBRFFnQjtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQcEI7QURjSTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDYlI7QURlUTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDZFo7QURnQlk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDZGhCO0FEZ0JnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDZHBCO0FEa0JZO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDakJoQjtBRG1CZ0I7RUFFSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDbEJwQjtBRHNCZ0I7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDcEJwQjtBRDJCUTtFQUVJLGdCQUFBO0FDMUJaO0FENEJZO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUMzQmhCO0FENkJnQjtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDNUJwQjtBRDhCb0I7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDNUJ4QjtBRGlDZ0I7RUFFSSxZQUFBO0FDaENwQjtBRGtDb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDaEN4QjtBRG9DZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDbENwQjtBRG9Db0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNsQ3hCO0FEdUNnQjtFQUVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUN0Q3BCO0FEd0NvQjtFQUVJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDdkN4QjtBRDRDZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQzFDcEI7QUQ2Q2dCO0VBQ0ksdUNBQUE7VUFBQSwrQkFBQTtFQUNBLGNBQUE7QUMzQ3BCO0FEZ0RZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQzlDaEIiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDQwcHggNDBweCAwcHggNDBweDtcclxuXHJcbiAgICAuY2FyZHMtYXJlYSB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMzBweDtcclxuXHJcbiAgICAgICAgLmEtY2FyZCB7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDE3NHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4OHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcclxuXHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlIFZpZXRuYW0gUHJvJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzk3NzhBO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5mbyB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCZSBWaWV0bmFtIFBybyc7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk1Q0VEMTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItaW5mb3tcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDk1cHg7XHJcblxyXG4gICAgICAgIC5wcm8tcGljLWxhcmdle1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgLnBpYyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbmZvIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAudXNlcm5hbWUge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMkMyQzJDO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGVzYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk1Q0VEMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5mb3tcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICAuaXRlbXtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NDRCNUM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NEI1QztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pbWFnZS1hcmVhIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI4NXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NEI1QztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudmFsdWUge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDU1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NEI1QztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RBREFEQTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQzNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmVkaXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NEI1QztcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmVkaXQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGOUEzNjk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLWFyZWEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNDBweCA0MHB4IDBweCA0MHB4O1xufVxuLmNvbnRhaW5lciAuY2FyZHMtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1heC13aWR0aDogMTEzMHB4O1xufVxuLmNvbnRhaW5lciAuY2FyZHMtYXJlYSAuYS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNzRweDtcbiAgaGVpZ2h0OiAxODhweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XG59XG4uY29udGFpbmVyIC5jYXJkcy1hcmVhIC5hLWNhcmQgLmljb24ge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuLmNvbnRhaW5lciAuY2FyZHMtYXJlYSAuYS1jYXJkIC5pY29uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIC5jYXJkcy1hcmVhIC5hLWNhcmQgLnRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIkJlIFZpZXRuYW0gUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM3OTc3OEE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLmNhcmRzLWFyZWEgLmEtY2FyZCAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzk1Q0VEMTtcbn1cbi5jb250YWluZXIgLmNhcmRzLWFyZWEgLmEtY2FyZCAuaW5mbyBpbWcge1xuICB3aWR0aDogMTNweDtcbiAgaGVpZ2h0OiAxM3B4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogOTVweDtcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyAucHJvLXBpYy1sYXJnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyAucHJvLXBpYy1sYXJnZSAucGljIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyAucHJvLXBpYy1sYXJnZSAucGljIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIC51c2VyLWluZm8gLnByby1waWMtbGFyZ2UgLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5wcm8tcGljLWxhcmdlIC5pbmZvIC51c2VybmFtZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGNvbG9yOiAjMkMyQzJDO1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5wcm8tcGljLWxhcmdlIC5pbmZvIC5kZXNjIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICM5NUNFRDE7XG59XG4uY29udGFpbmVyIC51c2VyLWluZm8gLmluZm8ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5pbmZvIC5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5pbmZvIC5pdGVtIC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM0NDRCNUM7XG59XG4uY29udGFpbmVyIC51c2VyLWluZm8gLmluZm8gLml0ZW0gLnRpdGxlIC5zdWItdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGNvbG9yOiAjNDQ0QjVDO1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5pbmZvIC5pdGVtIC5pbWFnZS1hcmVhIHtcbiAgd2lkdGg6IDI4NXB4O1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5pbmZvIC5pdGVtIC5pbWFnZS1hcmVhIGltZyB7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5pbmZvIC5pdGVtIC5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM0NDRCNUM7XG59XG4uY29udGFpbmVyIC51c2VyLWluZm8gLmluZm8gLml0ZW0gLmFjdGlvbnMgbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5pbmZvIC5pdGVtIC52YWx1ZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDQ1NXB4O1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5pbmZvIC5pdGVtIC52YWx1ZSBpbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjNDQ0QjVDO1xuICBiYWNrZ3JvdW5kOiAjRjRGNEY0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjREFEQURBO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNDM1cHg7XG59XG4uY29udGFpbmVyIC51c2VyLWluZm8gLmluZm8gLml0ZW0gLmVkaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzQ0NEI1QztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5pbmZvIC5pdGVtIC5lZGl0OmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcbiAgY29sb3I6ICNGOUEzNjk7XG59XG4uY29udGFpbmVyIC51c2VyLWluZm8gLmluZm8gLmJ0bi1hcmVhIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Private\Nyrobeonka\dream-stakes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map