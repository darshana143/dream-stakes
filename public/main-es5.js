function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "app"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".app[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByaXZhdGVcXE55cm9iZW9ua2FcXGRyZWFtLXN0YWtlcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSIsIi5hcHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ui-containers/top-bar/top-bar.component */
    "./src/app/ui-containers/top-bar/top-bar.component.ts");
    /* harmony import */


    var _ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ui-containers/left-panal/left-panal.component */
    "./src/app/ui-containers/left-panal/left-panal.component.ts");
    /* harmony import */


    var _ds_components_ds_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ds-components/ds-components.module */
    "./src/app/ds-components/ds-components.module.ts");
    /* harmony import */


    var _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./enter-screen/enter-screen.component */
    "./src/app/enter-screen/enter-screen.component.ts");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js"); // -------------------------------- PrimeNG ----------------------------------------


    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"], _ds_components_ds_components_module__WEBPACK_IMPORTED_MODULE_8__["DsComponentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__["TopBarComponent"], _ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_7__["LeftPanalComponent"], _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_9__["EnterScreenComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"], _ds_components_ds_components_module__WEBPACK_IMPORTED_MODULE_8__["DsComponentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__["TopBarComponent"], _ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_7__["LeftPanalComponent"], _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_9__["EnterScreenComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"], _ds_components_ds_components_module__WEBPACK_IMPORTED_MODULE_8__["DsComponentsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ds-components/card-slider/card-slider.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/ds-components/card-slider/card-slider.component.ts ***!
    \********************************************************************/

  /*! exports provided: CardSliderComponent */

  /***/
  function srcAppDsComponentsCardSliderCardSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardSliderComponent", function () {
      return CardSliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardSliderComponent = /*#__PURE__*/function () {
      function CardSliderComponent() {
        _classCallCheck(this, CardSliderComponent);
      }

      _createClass(CardSliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardSliderComponent;
    }();

    CardSliderComponent.ɵfac = function CardSliderComponent_Factory(t) {
      return new (t || CardSliderComponent)();
    };

    CardSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardSliderComponent,
      selectors: [["app-card-slider"]],
      decls: 16,
      vars: 0,
      consts: [[1, "card"], [1, "icon-area"], ["src", "./assets/icons8_circled_user_female_skin_type_7 1.png"], [1, "btn"], ["src", "./assets/small-icon.png"], [1, "dots-area"], [1, "dot-1"], [1, "dot-2"], [1, "dot-3"]],
      template: function CardSliderComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: [".card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding-top: 17px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 30px;\n}\n.card[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 20px;\n}\n.card[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 59px;\n  height: 59px;\n}\n.card[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 66px;\n  text-transform: capitalize;\n  color: #282A2E;\n  margin-top: -15px;\n}\n.card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 189px;\n  height: 50px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  margin-left: 9px;\n  align-items: center;\n}\n.card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 31px;\n  margin-left: 19px;\n}\n.card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  padding-left: 15px;\n}\n.card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.045em;\n  text-transform: capitalize;\n  color: #282A2E;\n  margin-left: 15px;\n}\n.card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  margin-top: 27px;\n}\n.card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%]   .dot-1[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%]   .dot-2[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%]   .dot-3[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n}\n.card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%]   .dot-1[_ngcontent-%COMP%] {\n  margin-left: 74px;\n  border-radius: 100px;\n  background-color: #F37121;\n}\n.card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%]   .dot-2[_ngcontent-%COMP%] {\n  margin-left: 19px;\n  border-radius: 100px;\n  background-color: #32004B;\n}\n.card[_ngcontent-%COMP%]   .dots-area[_ngcontent-%COMP%]   .dot-3[_ngcontent-%COMP%] {\n  margin-left: 19px;\n  border-radius: 100px;\n  background-color: #22B24C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHMtY29tcG9uZW50cy9jYXJkLXNsaWRlci9EOlxcUHJpdmF0ZVxcTnlyb2Jlb25rYVxcZHJlYW0tc3Rha2VzL3NyY1xcYXBwXFxkcy1jb21wb25lbnRzXFxjYXJkLXNsaWRlclxcY2FyZC1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RzLWNvbXBvbmVudHMvY2FyZC1zbGlkZXIvY2FyZC1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NaO0FERVE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FaO0FESUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNGUjtBRElRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZaO0FES1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNIWjtBREtZO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0hoQjtBRFVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNSUjtBRFVRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUNSWjtBRFdRO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDVFo7QURZUTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ1ZaO0FEYVE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNYWiIsImZpbGUiOiJzcmMvYXBwL2RzLWNvbXBvbmVudHMvY2FyZC1zbGlkZXIvY2FyZC1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDE3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cclxuICAgIC5pY29uLWFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDU5cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTlweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNjZweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjgyQTJFO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiAxODlweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMxcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzFweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE5cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0NWVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI4MkEyRTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmRvdHMtYXJlYSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjdweDtcclxuXHJcbiAgICAgICAgLmRvdC0xLCAuZG90LTIsIC5kb3QtMyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvdC0xIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDc0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM3MTIxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvdC0yIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzIwMDRCO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRvdC0zIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJCMjRDO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn0iLCIuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbi5jYXJkIC5pY29uLWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmNhcmQgLmljb24tYXJlYSBpbWcge1xuICB3aWR0aDogNTlweDtcbiAgaGVpZ2h0OiA1OXB4O1xufVxuLmNhcmQgLmljb24tYXJlYSBkaXYge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDY2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogIzI4MkEyRTtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG4uY2FyZCAuYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDE4OXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogOXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNhcmQgLmJ0biBpbWcge1xuICB3aWR0aDogMzFweDtcbiAgaGVpZ2h0OiAzMXB4O1xuICBtYXJnaW4tbGVmdDogMTlweDtcbn1cbi5jYXJkIC5idG4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5jYXJkIC5idG4gZGl2IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNDVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjMjgyQTJFO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5jYXJkIC5kb3RzLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjdweDtcbn1cbi5jYXJkIC5kb3RzLWFyZWEgLmRvdC0xLCAuY2FyZCAuZG90cy1hcmVhIC5kb3QtMiwgLmNhcmQgLmRvdHMtYXJlYSAuZG90LTMge1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDlweDtcbn1cbi5jYXJkIC5kb3RzLWFyZWEgLmRvdC0xIHtcbiAgbWFyZ2luLWxlZnQ6IDc0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjM3MTIxO1xufVxuLmNhcmQgLmRvdHMtYXJlYSAuZG90LTIge1xuICBtYXJnaW4tbGVmdDogMTlweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjAwNEI7XG59XG4uY2FyZCAuZG90cy1hcmVhIC5kb3QtMyB7XG4gIG1hcmdpbi1sZWZ0OiAxOXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyQjI0Qztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card-slider',
          templateUrl: './card-slider.component.html',
          styleUrls: ['./card-slider.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ds-components/common-slider/common-slider.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/ds-components/common-slider/common-slider.component.ts ***!
    \************************************************************************/

  /*! exports provided: CommonSliderComponent */

  /***/
  function srcAppDsComponentsCommonSliderCommonSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonSliderComponent", function () {
      return CommonSliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CommonSliderComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.currentHeader2, " ");
      }
    }

    function CommonSliderComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonSliderComponent_div_8_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var aSlide_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.setContent(aSlide_r2, i_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var aSlide_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", aSlide_r2.dotPeref.color);
      }
    }

    var selectedDotColor = "#F9A369";

    var CommonSliderComponent = /*#__PURE__*/function () {
      function CommonSliderComponent() {
        _classCallCheck(this, CommonSliderComponent);

        this.currentContentIndex = -1;
      }

      _createClass(CommonSliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var defaultSlide = this.sliderData.find(function (el) {
            return el["default"];
          });
          this.currentContent = defaultSlide.content;
          this.currentHeader = defaultSlide.header;
          this.currentHeader2 = defaultSlide.header2;
          defaultSlide.dotPeref.color = selectedDotColor; // this.currentContentIndex = 0;
        }
      }, {
        key: "setContent",
        value: function setContent(aSlide, idx) {
          this.currentContent = aSlide.content;
          this.currentHeader = aSlide.header;
          this.currentHeader2 = aSlide.header2;
          this.sliderData.forEach(function (el, index) {
            if (index === idx) el.dotPeref.color = selectedDotColor;else el.dotPeref.color = aSlide.dotPeref.defaultColor;
          });
        }
      }]);

      return CommonSliderComponent;
    }();

    CommonSliderComponent.ɵfac = function CommonSliderComponent_Factory(t) {
      return new (t || CommonSliderComponent)();
    };

    CommonSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommonSliderComponent,
      selectors: [["app-common-slider"]],
      inputs: {
        sliderData: "sliderData"
      },
      decls: 9,
      vars: 8,
      consts: [[1, "container"], [1, "content"], [1, "header"], ["class", "header", 4, "ngIf"], [1, "dot-area"], ["class", "a-dot", 3, "background-color", "click", 4, "ngFor", "ngForOf"], [1, "a-dot", 3, "click"]],
      template: function CommonSliderComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding-left: 80px;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-grow: 1;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 29px;\n  text-align: justify;\n  color: #2C2C2C;\n  margin-top: 27px;\n}\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 38px;\n  color: #F9A369;\n}\n.container[_ngcontent-%COMP%]   .dot-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 30px;\n}\n.container[_ngcontent-%COMP%]   .dot-area[_ngcontent-%COMP%]   .a-dot[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 100%;\n  margin: 10px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHMtY29tcG9uZW50cy9jb21tb24tc2xpZGVyL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXGRzLWNvbXBvbmVudHNcXGNvbW1vbi1zbGlkZXJcXGNvbW1vbi1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RzLWNvbXBvbmVudHMvY29tbW9uLXNsaWRlci9jb21tb24tc2xpZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQVI7QURFUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBWjtBREtJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSFI7QURNUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0paIiwiZmlsZSI6InNyYy9hcHAvZHMtY29tcG9uZW50cy9jb21tb24tc2xpZGVyL2NvbW1vbi1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICBjb2xvcjogIzJDMkMyQztcclxuICAgICAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG5cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRjlBMzY5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmRvdC1hcmVhIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xyXG5cclxuICAgICAgICAuYS1kb3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogOXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDlweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogIzJDMkMyQztcbiAgbWFyZ2luLXRvcDogMjdweDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQgLmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGNvbG9yOiAjRjlBMzY5O1xufVxuLmNvbnRhaW5lciAuZG90LWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbn1cbi5jb250YWluZXIgLmRvdC1hcmVhIC5hLWRvdCB7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogOXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-common-slider',
          templateUrl: './common-slider.component.html',
          styleUrls: ['./common-slider.component.scss']
        }]
      }], function () {
        return [];
      }, {
        sliderData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/ds-components/ds-components.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ds-components/ds-components.module.ts ***!
    \*******************************************************/

  /*! exports provided: DsComponentsModule */

  /***/
  function srcAppDsComponentsDsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DsComponentsModule", function () {
      return DsComponentsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./common-slider/common-slider.component */
    "./src/app/ds-components/common-slider/common-slider.component.ts");
    /* harmony import */


    var _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card-slider/card-slider.component */
    "./src/app/ds-components/card-slider/card-slider.component.ts");
    /* harmony import */


    var _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./popup/popup.component */
    "./src/app/ds-components/popup/popup.component.ts");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");

    var DsComponentsModule = /*#__PURE__*/_createClass(function DsComponentsModule() {
      _classCallCheck(this, DsComponentsModule);
    });

    DsComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DsComponentsModule
    });
    DsComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DsComponentsModule_Factory(t) {
        return new (t || DsComponentsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DsComponentsModule, {
        declarations: [_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__["CommonSliderComponent"], _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_3__["CardSliderComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"]],
        exports: [_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__["CommonSliderComponent"], _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_3__["CardSliderComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DsComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__["CommonSliderComponent"], _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_3__["CardSliderComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"]],
          exports: [_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__["CommonSliderComponent"], _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_3__["CardSliderComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/ds-components/ds-types.ts":
  /*!*******************************************!*\
    !*** ./src/app/ds-components/ds-types.ts ***!
    \*******************************************/

  /*! exports provided: IPopupCpmmands */

  /***/
  function srcAppDsComponentsDsTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IPopupCpmmands", function () {
      return IPopupCpmmands;
    });

    var IPopupCpmmands;

    (function (IPopupCpmmands) {
      IPopupCpmmands["close"] = "close";
      IPopupCpmmands["next"] = "next";
      IPopupCpmmands["back"] = "back";
    })(IPopupCpmmands || (IPopupCpmmands = {}));
    /***/

  },

  /***/
  "./src/app/ds-components/popup/popup.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/ds-components/popup/popup.component.ts ***!
    \********************************************************/

  /*! exports provided: PopupComponent */

  /***/
  function srcAppDsComponentsPopupPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupComponent", function () {
      return PopupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ds_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ds-types */
    "./src/app/ds-components/ds-types.ts");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dialog.js");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js");

    var PopupComponent = /*#__PURE__*/function () {
      function PopupComponent() {
        _classCallCheck(this, PopupComponent);

        this.display = false;
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.sendCommandToParent(_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].close);
        }
      }, {
        key: "sendCommandToParent",
        value: function sendCommandToParent(command) {
          switch (command) {
            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].close:
              this.notifyParent.emit({
                command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].close
              });
              break;

            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].next:
              this.notifyParent.emit({
                command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].next
              });
              break;

            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].back:
              this.notifyParent.emit({
                command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].back
              });
              break;
          }
        }
      }]);

      return PopupComponent;
    }();

    PopupComponent.ɵfac = function PopupComponent_Factory(t) {
      return new (t || PopupComponent)();
    };

    PopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopupComponent,
      selectors: [["app-popup"]],
      inputs: {
        display: "display",
        popupData: "popupData"
      },
      outputs: {
        notifyParent: "notifyParent"
      },
      decls: 11,
      vars: 10,
      consts: [[1, "container"], ["position", "top", 3, "visible", "draggable", "transitionOptions", "visibleChange", "onHide"], [1, "content-header"], [3, "innerHTML"], ["src", "./assets/popup-btns/back-arrow.png", 3, "click"], ["src", "./assets/popup-btns/next-arrao.png", 3, "click"]],
      template: function PopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-dialog", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function PopupComponent_Template_p_dialog_visibleChange_1_listener($event) {
            return ctx.display = $event;
          })("onHide", function PopupComponent_Template_p_dialog_onHide_1_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_Template_img_click_9_listener() {
            return ctx.sendCommandToParent("back");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_Template_img_click_10_listener() {
            return ctx.sendCommandToParent("next");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.display)("draggable", false)("transitionOptions", "200ms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.popupData.header, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.popupData.contentHeader, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.popupData.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.popupData.bckButton ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.popupData.nxtButton ? "visible" : "hidden");
        }
      },
      directives: [primeng_dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["Header"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["Footer"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   p-dialog[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 27px;\n  color: #2C2C2C;\n  margin-top: 15px;\n  margin-bottom: 30px;\n}\n.container[_ngcontent-%COMP%]   p-dialog[_ngcontent-%COMP%]   p-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.container[_ngcontent-%COMP%]   p-dialog[_ngcontent-%COMP%]   p-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin-top: 30px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHMtY29tcG9uZW50cy9wb3B1cC9EOlxcUHJpdmF0ZVxcTnlyb2Jlb25rYVxcZHJlYW0tc3Rha2VzL3NyY1xcYXBwXFxkcy1jb21wb25lbnRzXFxwb3B1cFxccG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RzLWNvbXBvbmVudHMvcG9wdXAvcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FER1E7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RaO0FET1k7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDTmhCO0FEUWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNOcEIiLCJmaWxlIjoic3JjL2FwcC9kcy1jb21wb25lbnRzL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBwLWRpYWxvZyB7XHJcblxyXG4gICAgICAgIC5jb250ZW50LWhlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzJDMkMyQztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwLWZvb3RlciB7XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgLmNvbnRlbnQtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgY29sb3I6ICMyQzJDMkM7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIHAtZm9vdGVyIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIHAtZm9vdGVyIGRpdiBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-popup',
          templateUrl: './popup.component.html',
          styleUrls: ['./popup.component.scss']
        }]
      }], function () {
        return [];
      }, {
        display: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        popupData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        notifyParent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/enter-screen/enter-screen.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/enter-screen/enter-screen.component.ts ***!
    \********************************************************/

  /*! exports provided: EnterScreenComponent */

  /***/
  function srcAppEnterScreenEnterScreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnterScreenComponent", function () {
      return EnterScreenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/ds-components/ds-types */
    "./src/app/ds-components/ds-types.ts");
    /* harmony import */


    var _ds_components_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ds-components/common-slider/common-slider.component */
    "./src/app/ds-components/common-slider/common-slider.component.ts");
    /* harmony import */


    var _ds_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ds-components/popup/popup.component */
    "./src/app/ds-components/popup/popup.component.ts");

    var EnterScreenComponent = /*#__PURE__*/function () {
      function EnterScreenComponent() {
        _classCallCheck(this, EnterScreenComponent);

        this.showDialogUI = false;
        this.currentPopopWindowIdx = 0;
      }

      _createClass(EnterScreenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.sliderData = [{
            header: "Header 1",
            content: "Content 1",
            dotPeref: {
              color: 'rgba(237, 166, 115, 0.5)',
              defaultColor: 'rgba(237, 166, 115, 0.5)'
            }
          }, {
            header: "Welcome to",
            header2: 'Our Auction Center',
            content: "This is where Auction Houses are posted by our administration team. When one room closes another one opens for our multi-room Houses. When a room is ready to close, it means that the room is full and the timer will be activated to conclude the bidding session. Any addtional rooms will open automatically with a 21 day timer until it conculdes.",
            dotPeref: {
              color: 'rgba(237, 166, 115, 0.5)',
              defaultColor: 'rgba(237, 166, 115, 0.5)'
            },
            "default": true
          }, {
            header: "Header 3",
            content: "Content 3.",
            dotPeref: {
              color: 'rgba(237, 166, 115, 0.5)',
              defaultColor: 'rgba(237, 166, 115, 0.5)'
            }
          }];
          this.popupData = [{
            header: 'DreamStakes Rules & Regulation',
            contentHeader: 'DreamStakes Contract',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus et lacus at maximus. Vivamus dignissim tincidunt turpis, eu lacinia justo tempor eu. Morbi aliquam nulla non porta tincidunt. Vivamus at ultricies enim, eget tempus quam. Etiam nisi felis, ultricies ut eros nec, accumsan luctus lectus. Donec justo enim, venenatis ac tellus quis, congue ultrices arcu. In feugiat nec dolor non vehicula. Proin id tincidunt erat.<br><br>\n        Nullam consectetur interdum mollis. Morbi in lacus sapien. Vivamus aliquet massa sed lacus pretium lacinia. Maecenas quis leo sed tortor maximus eleifend. Sed sit amet facilisis neque. Proin tempus massa sit amet lorem sagittis, at ultricies quam auctor. Suspendisse quis nulla commodo, elementum felis vel, pellentesque justo. In mi sem, fringilla at fermentum at, vulputate suscipit sapien. Vivamus at tincidunt libero, id rutrum nulla. Curabitur auctor lectus sit amet ex imperdiet consequat. Donec tempor magna sapien, tempus ultricies neque ultricies sed.<br><br>\n        Proin nec magna justo. Proin vel pretium enim, eget sollicitudin nisi. Proin mattis rutrum lorem ut consequat. Quisque eget magna ex. Proin vestibulum, metus eu dictum congue, lorem lectus ultricies enim, quis semper orci lacus sit amet dui. Pellentesque eget neque lobortis, tincidunt lectus eu, hendrerit orci. Etiam at risus tristique ante hendrerit consequat. Sed eleifend erat sed auctor blandit. Curabitur vehicula sapien bibendum odio malesuada, vitae egestas nunc dictum. Cras bibendum egestas neque. Donec imperdiet eget nisi ut semper. Sed eu tempor enim.<br><br>\n        Duis magna sapien, malesuada sit amet felis eu, convallis rhoncus elit. Donec hendrerit urna non eros rutrum efficitur. Quisque a luctus diam. Sed vel laoreet odio. Cras accumsan tristique mauris et faucibus. Praesent sit amet dapibus dolor. Nam facilisis lacus at lectus volutpat imperdiet. Etiam tincidunt eros erat, id rutrum risus venenatis non. Aliquam ornare semper lacus at tempor. Suspendisse potenti. Curabitur tempus, nisi eget vehicula fermentum, justo tortor venenatis turpis, ac cursus nunc tortor eget augue. Duis finibus, arcu vel condimentum auctor, lectus eros placerat massa, ut facilisis odio lacus pulvinar tortor. Vivamus dictum vulputate fermentum. Integer vitae egestas mi. Etiam a tellus eu leo laoreet hendrerit.<br><br>\n        Sed condimentum odio in dolor cursus consequat. Nam auctor suscipit nisi, sed egestas arcu bibendum nec. Nullam quis nibh sit amet massa interdum sollicitudin. Sed lorem nisi, iaculis placerat massa at, placerat semper sapien. Nulla dictum dapibus arcu ut condimentum. Vivamus at dapibus tellus. Duis ut augue maximus, mattis nisi ut, elementum enim. Maecenas sed aliquet lacus, eget condimentum nisi. Fusce suscipit consequat risus consequat scelerisque. Donec sodales, turpis nec scelerisque suscipit, magna ipsum eleifend magna, id aliquam sapien arcu quis urna. Cras vel mattis sapien. Etiam scelerisque venenatis fermentum. Donec at turpis a lorem vulputate sodales sed in tellus. Donec volutpat libero vitae gravida molestie. Ut sed ante neque.",
            bckButton: false,
            nxtButton: true
          }, {
            header: 'DreamStakes Rules & Regulation',
            contentHeader: 'Non-Refundable $100 Entry Fee',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus et lacus at maximus. Vivamus dignissim tincidunt turpis, eu lacinia justo tempor eu. Morbi aliquam nulla non porta tincidunt. Vivamus at ultricies enim, eget tempus quam. Etiam nisi felis, ultricies ut eros nec, accumsan luctus lectus. Donec justo enim, venenatis ac tellus quis, congue ultrices arcu. In feugiat nec dolor non vehicula. Proin id tincidunt erat.<br><br>\n\n        Nullam consectetur interdum mollis. Morbi in lacus sapien. Vivamus aliquet massa sed lacus pretium lacinia. Maecenas quis leo sed tortor maximus eleifend. Sed sit amet facilisis neque. Proin tempus massa sit amet lorem sagittis, at ultricies quam auctor. Suspendisse quis nulla commodo, elementum felis vel, pellentesque justo. In mi sem, fringilla at fermentum at, vulputate suscipit sapien. Vivamus at tincidunt libero, id rutrum nulla. Curabitur auctor lectus sit amet ex imperdiet consequat. Donec tempor magna sapien, tempus ultricies neque ultricies sed.<br><br>\n        \n        <ul>\n          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n          <li>Proin auctor ex quis sollicitudin semper.</li>\n          <li>Aliquam semper enim nec laoreet mattis.</li>\n          <li>Vivamus interdum elit vitae condimentum pretium.</li>\n          <li>Nullam vel ligula semper, viverra nulla in, pulvinar turpis.</li>\n          <li>Curabitur non elit congue, rutrum massa ut, tempor orci.</li>\n        </ul>\n        ",
            bckButton: true,
            nxtButton: true
          }];
          this.currentPopupPage = this.popupData[this.currentPopopWindowIdx];
        }
      }, {
        key: "showDialog",
        value: function showDialog() {
          this.showDialogUI = true;
        }
      }, {
        key: "recieveFromPopupDialog",
        value: function recieveFromPopupDialog(e) {
          switch (e.command) {
            case src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].close:
              this.currentPopopWindowIdx = 0;
              this.showDialogUI = false;
              break;

            case src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].next:
              this.currentPopopWindowIdx++;
              break;

            case src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].back:
              this.currentPopopWindowIdx--;
              break;
          }

          this.currentPopupPage = this.popupData[this.currentPopopWindowIdx];
        }
      }]);

      return EnterScreenComponent;
    }();

    EnterScreenComponent.ɵfac = function EnterScreenComponent_Factory(t) {
      return new (t || EnterScreenComponent)();
    };

    EnterScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EnterScreenComponent,
      selectors: [["app-enter-screen"]],
      decls: 32,
      vars: 3,
      consts: [[1, "container"], [1, "slider-wrapper"], [1, "slider-btns"], [1, "left"], ["src", "./assets/btn-icons/icons8_back 1.png"], [1, "right"], ["src", "./assets/btn-icons/icons8_next 2.png"], [1, "slider"], [1, "card", "card-pol-1"], [1, "card", "card-pol-2"], [1, "content"], [1, "header"], [1, "middle-txt"], [1, "btn"], [1, "bottom-txt", 3, "click"], [1, "card", "card-pol-3"], [1, "info-area"], [3, "sliderData"], [1, "img-area"], [1, "txt"], [1, "big-txt"], [1, "small-txt"], ["src", "./assets/white-star.png"], ["src", "./assets/house-info.png"], [3, "display", "popupData", "notifyParent"]],
      template: function EnterScreenComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnterScreenComponent_Template_div_click_17_listener() {
            return ctx.showDialog();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParent", function EnterScreenComponent_Template_app_popup_notifyParent_31_listener($event) {
            return ctx.recieveFromPopupDialog($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sliderData", ctx.sliderData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", ctx.showDialogUI)("popupData", ctx.currentPopupPage);
        }
      },
      directives: [_ds_components_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__["CommonSliderComponent"], _ds_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_3__["PopupComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding-right: 45px;\n  padding-top: 20px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 363px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 952px;\n  height: 100%;\n  position: absolute;\n  z-index: 9;\n  padding: 0px 35px 0px 35px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider-btns[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 952px;\n  height: 100%;\n  background: #FCFCFC;\n  border-radius: 16px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 476px;\n  height: 298px;\n  background: linear-gradient(96.87deg, #85DFE3 0%, #95CED1 80.78%), linear-gradient(96.87deg, #95CED1 0%, #95CED1 80.78%);\n  border-radius: 6px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-1[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(0 0, 100% 7%, 100% 92%, 0% 100%);\n          clip-path: polygon(0 0, 100% 7%, 100% 92%, 0% 100%);\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  z-index: 9;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 150px;\n  height: 256px;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  text-align: center;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .middle-txt[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  border: 1px solid #FFFFFF;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-2[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bottom-txt[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 19px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #FFFFFF;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .slider-wrapper[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%]   .card-pol-3[_ngcontent-%COMP%] {\n  -webkit-clip-path: polygon(0 7%, 100% 0, 100% 100%, 0 92%);\n          clip-path: polygon(0 7%, 100% 0, 100% 100%, 0 92%);\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-grow: 1;\n  margin-top: 20px;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .slider[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 380px;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%] {\n  width: 365px;\n  height: 380px;\n  flex-shrink: 0;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 697px;\n  margin-left: 13px;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   .big-txt[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   .small-txt[_ngcontent-%COMP%] {\n  display: flex;\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  margin-top: 5px;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   .small-txt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 17px;\n}\n.container[_ngcontent-%COMP%]   .info-area[_ngcontent-%COMP%]   .img-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50ZXItc2NyZWVuL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXGVudGVyLXNjcmVlblxcZW50ZXItc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbnRlci1zY3JlZW4vZW50ZXItc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0FSO0FERVE7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQ0RaO0FER1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RoQjtBREtRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0haO0FES1k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdIQUFBO0VBQ0Esa0JBQUE7QUNIaEI7QURNWTtFQUVJLDJEQUFBO1VBQUEsbURBQUE7QUNMaEI7QURTWTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNSaEI7QURVZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNScEI7QURVb0I7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxjQUFBO0FDUnhCO0FEV29CO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1R4QjtBRFlvQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1Z4QjtBRGFvQjtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1h4QjtBRGlCWTtFQUVJLDBEQUFBO1VBQUEsa0RBQUE7QUNoQmhCO0FEeUJJO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ3hCUjtBRDBCUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDeEJaO0FEMkJRO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDMUJaO0FENEJZO0VBRUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUMzQmhCO0FENkJnQjtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUMzQnBCO0FEOEJnQjtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQzVCcEI7QUQ4Qm9CO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUM1QnhCO0FEa0NZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNoQ2hCIiwiZmlsZSI6InNyYy9hcHAvZW50ZXItc2NyZWVuL2VudGVyLXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcblxyXG4gICAgLnNsaWRlci13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDM2M3B4O1xyXG5cclxuICAgICAgICAuc2xpZGVyLWJ0bnMge1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogOTUycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMzVweCAwcHggMzVweDsgXHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zbGlkZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDk1MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGQ0ZDRkM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ3NnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyOThweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5Ni44N2RlZywgIzg1REZFMyAwJSwgIzk1Q0VEMSA4MC43OCUpLCBsaW5lYXItZ3JhZGllbnQoOTYuODdkZWcsICM5NUNFRDEgMCUsICM5NUNFRDEgODAuNzglKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5jYXJkLXBvbC0xIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSA3JSwgMTAwJSA5MiUsIDAlIDEwMCUpOyBcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmNhcmQtcG9sLTIge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTZweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1pZGRsZS10eHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5ib3R0b20tdHh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuY2FyZC1wb2wtMyB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDclLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCA5MiUpOyBcclxuXHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuaW5mby1hcmVhIHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgICAgICAuc2xpZGVyIHtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltZy1hcmVhIHtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAzNjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzODBweDtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICAgICAgICAgICAudHh0IHtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDY5N3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmJpZy10eHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnNtYWxsLXR4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2M3B4O1xufVxuLmNvbnRhaW5lciAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlci1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTUycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xuICBwYWRkaW5nOiAwcHggMzVweCAwcHggMzVweDtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIC5zbGlkZXItYnRucyBpbWcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmNvbnRhaW5lciAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTUycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0ZDRkNGQztcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIC5zbGlkZXIgLmNhcmQge1xuICB3aWR0aDogNDc2cHg7XG4gIGhlaWdodDogMjk4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5Ni44N2RlZywgIzg1REZFMyAwJSwgIzk1Q0VEMSA4MC43OCUpLCBsaW5lYXItZ3JhZGllbnQoOTYuODdkZWcsICM5NUNFRDEgMCUsICM5NUNFRDEgODAuNzglKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmNvbnRhaW5lciAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlciAuY2FyZC1wb2wtMSB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgNyUsIDEwMCUgOTIlLCAwJSAxMDAlKTtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIC5zbGlkZXIgLmNhcmQtcG9sLTIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xufVxuLmNvbnRhaW5lciAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlciAuY2FyZC1wb2wtMiAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1NnB4O1xufVxuLmNvbnRhaW5lciAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlciAuY2FyZC1wb2wtMiAuY29udGVudCAuaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIC5zbGlkZXIgLmNhcmQtcG9sLTIgLmNvbnRlbnQgLm1pZGRsZS10eHQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIC5zbGlkZXIgLmNhcmQtcG9sLTIgLmNvbnRlbnQgLmJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5jb250YWluZXIgLnNsaWRlci13cmFwcGVyIC5zbGlkZXIgLmNhcmQtcG9sLTIgLmNvbnRlbnQgLmJvdHRvbS10eHQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuc2xpZGVyLXdyYXBwZXIgLnNsaWRlciAuY2FyZC1wb2wtMyB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDclLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCA5MiUpO1xufVxuLmNvbnRhaW5lciAuaW5mby1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jb250YWluZXIgLmluZm8tYXJlYSAuc2xpZGVyIHtcbiAgZmxleC1ncm93OiAxO1xuICBoZWlnaHQ6IDM4MHB4O1xufVxuLmNvbnRhaW5lciAuaW5mby1hcmVhIC5pbWctYXJlYSB7XG4gIHdpZHRoOiAzNjVweDtcbiAgaGVpZ2h0OiAzODBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uY29udGFpbmVyIC5pbmZvLWFyZWEgLmltZy1hcmVhIC50eHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjk3cHg7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xufVxuLmNvbnRhaW5lciAuaW5mby1hcmVhIC5pbWctYXJlYSAudHh0IC5iaWctdHh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uY29udGFpbmVyIC5pbmZvLWFyZWEgLmltZy1hcmVhIC50eHQgLnNtYWxsLXR4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uY29udGFpbmVyIC5pbmZvLWFyZWEgLmltZy1hcmVhIC50eHQgLnNtYWxsLXR4dCBpbWcge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxN3B4O1xufVxuLmNvbnRhaW5lciAuaW5mby1hcmVhIC5pbWctYXJlYSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnterScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-enter-screen',
          templateUrl: './enter-screen.component.html',
          styleUrls: ['./enter-screen.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ui-containers/left-panal/left-panal.component */
    "./src/app/ui-containers/left-panal/left-panal.component.ts");
    /* harmony import */


    var _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ui-containers/top-bar/top-bar.component */
    "./src/app/ui-containers/top-bar/top-bar.component.ts");
    /* harmony import */


    var _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../enter-screen/enter-screen.component */
    "./src/app/enter-screen/enter-screen.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.title = 'dream-stakes';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 8,
      vars: 0,
      consts: [[1, "home"], [1, "left-panal"], [1, "right-panal"], [1, "top-bar"], [1, "client-area"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-left-panal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-top-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-enter-screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_1__["LeftPanalComponent"], _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_2__["TopBarComponent"], _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_3__["EnterScreenComponent"]],
      styles: [".home[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.home[_ngcontent-%COMP%]   .left-panal[_ngcontent-%COMP%] {\n  width: 230px;\n  float: left;\n  height: 100%;\n}\n.home[_ngcontent-%COMP%]   .right-panal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 100%;\n}\n.home[_ngcontent-%COMP%]   .right-panal[_ngcontent-%COMP%]   .client-area[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUHJpdmF0ZVxcTnlyb2Jlb25rYVxcZHJlYW0tc3Rha2VzL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjtBREVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQVI7QURJSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRlI7QURJUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZaIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWV7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICAubGVmdC1wYW5hbHtcclxuICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucmlnaHQtcGFuYWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNsaWVudC1hcmVhe1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsIi5ob21lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ob21lIC5sZWZ0LXBhbmFsIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmhvbWUgLnJpZ2h0LXBhbmFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaG9tZSAucmlnaHQtcGFuYWwgLmNsaWVudC1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui-containers/left-panal/left-panal.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/ui-containers/left-panal/left-panal.component.ts ***!
    \******************************************************************/

  /*! exports provided: LeftPanalComponent */

  /***/
  function srcAppUiContainersLeftPanalLeftPanalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeftPanalComponent", function () {
      return LeftPanalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ds_components_card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../ds-components/card-slider/card-slider.component */
    "./src/app/ds-components/card-slider/card-slider.component.ts");

    var LeftPanalComponent = /*#__PURE__*/function () {
      function LeftPanalComponent() {
        _classCallCheck(this, LeftPanalComponent);
      }

      _createClass(LeftPanalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LeftPanalComponent;
    }();

    LeftPanalComponent.ɵfac = function LeftPanalComponent_Factory(t) {
      return new (t || LeftPanalComponent)();
    };

    LeftPanalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeftPanalComponent,
      selectors: [["app-left-panal"]],
      decls: 39,
      vars: 0,
      consts: [[1, "container"], [1, "fixed-area"], [1, "logo"], ["src", "./assets/LOGO@3xDecision 2 1.png"], [1, "main-btns", "select"], ["src", "./assets/btn-icons/icons8_enter 1.png"], [1, "main-btns"], ["src", "./assets/btn-icons/user.png"], ["src", "./assets/btn-icons/icons8_key 1.png"], ["src", "./assets/btn-icons/settings.png"], [1, "card-1"], [1, "card-2"], [1, "icon-area"], ["src", "./assets/home-icon2.png"], [1, "title"], [1, "ratings"], ["src", "./assets/star.png"], [1, "grow-area"], [1, "main-btns", "logout-btn"], ["src", "./assets/btn-icons/logout.png"]],
      template: function LeftPanalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Key Locker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-card-slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "DreamStakes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Auction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "4.9 (5.8k review)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ds_components_card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_1__["CardSliderComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 230px;\n  height: 100%;\n  background: #FFFFFF;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 178px;\n  height: 48px;\n  border-radius: 16px;\n  margin-bottom: 17px;\n  padding: 0px 0px 0px 16px;\n  font-family: \"Open Sans\";\n}\n.container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  margin-right: 22px;\n}\n.container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #727272;\n}\n.container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  background: #95CED1;\n}\n.container[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #FFFFFF !important;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  margin-top: 34px;\n  text-align: center;\n  margin-bottom: 46px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-1[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  width: 208px;\n  height: 227px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%] {\n  margin-top: 39px;\n  width: 208px;\n  height: 201px;\n  background: #0093B2;\n  border-radius: 30px;\n  padding-top: 29px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 20px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-left: 20px;\n  margin-top: 10px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  padding-left: 20px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 17px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 47px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  margin-left: 5px;\n  margin-top: 5px;\n}\n.container[_ngcontent-%COMP%]   .grow-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  flex-grow: 1;\n}\n.container[_ngcontent-%COMP%]   .grow-area[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  margin-bottom: unset;\n}\n.container[_ngcontent-%COMP%]   .grow-area[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.container[_ngcontent-%COMP%]   .grow-area[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 19px;\n  color: rgba(5, 44, 78, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY29udGFpbmVycy9sZWZ0LXBhbmFsL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXHVpLWNvbnRhaW5lcnNcXGxlZnQtcGFuYWxcXGxlZnQtcGFuYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLWNvbnRhaW5lcnMvbGVmdC1wYW5hbC9sZWZ0LXBhbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FDQ1I7QURFUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBWjtBREdRO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RaO0FET0k7RUFDSSxlQUFBO0FDTFI7QURRSTtFQUNJLG1CQUFBO0FDTlI7QURRUTtFQUNJLHlCQUFBO0FDTlo7QURhUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDWFo7QURhWTtFQUNJLFlBQUE7QUNYaEI7QURlUTtFQUVJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNkWjtBRGlCUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNmWjtBRGlCWTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ2ZoQjtBRGlCZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2ZwQjtBRG9CWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDbEJoQjtBRG9CZ0I7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNsQnBCO0FEc0JZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNwQmhCO0FEc0JnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDcEJwQjtBRHVCZ0I7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNyQnBCO0FENEJJO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDM0JSO0FENkJRO0VBRUksb0JBQUE7QUM1Qlo7QUQ4Qlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzVCaEI7QUQrQlk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQzdCaEIiLCJmaWxlIjoic3JjL2FwcC91aS1jb250YWluZXJzL2xlZnQtcGFuYWwvbGVmdC1wYW5hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAubWFpbi1idG5zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTc4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuXHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzI3MjcyO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWJ0bnMsIC5tYWluLWJ0bnMgPiBsYWJlbDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM5NUNFRDE7XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5maXhlZC1hcmVhIHtcclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzNHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ2cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5jYXJkLTEge1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIyN3B4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5jYXJkLTIge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzOXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjA4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDkzQjI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyOXB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5pY29uLWFyZWEge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5yYXRpbmdzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZ3Jvdy1hcmVhIHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICAgICAubG9nb3V0LWJ0bntcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHVuc2V0O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoNSwgNDQsIDc4LCAwLjYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciAubWFpbi1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuLmNvbnRhaW5lciAubWFpbi1idG5zIGltZyB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogMjJweDtcbn1cbi5jb250YWluZXIgLm1haW4tYnRucyBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjNzI3MjcyO1xufVxuLmNvbnRhaW5lciAubWFpbi1idG5zLCAuY29udGFpbmVyIC5tYWluLWJ0bnMgPiBsYWJlbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLnNlbGVjdCB7XG4gIGJhY2tncm91bmQ6ICM5NUNFRDE7XG59XG4uY29udGFpbmVyIC5zZWxlY3QgbGFiZWwge1xuICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuZml4ZWQtYXJlYSAubG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ2cHg7XG4gIG1hcmdpbi10b3A6IDM0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNDZweDtcbn1cbi5jb250YWluZXIgLmZpeGVkLWFyZWEgLmxvZ28gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciAuZml4ZWQtYXJlYSAuY2FyZC0xIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgd2lkdGg6IDIwOHB4O1xuICBoZWlnaHQ6IDIyN3B4O1xufVxuLmNvbnRhaW5lciAuZml4ZWQtYXJlYSAuY2FyZC0yIHtcbiAgbWFyZ2luLXRvcDogMzlweDtcbiAgd2lkdGg6IDIwOHB4O1xuICBoZWlnaHQ6IDIwMXB4O1xuICBiYWNrZ3JvdW5kOiAjMDA5M0IyO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMjlweDtcbn1cbi5jb250YWluZXIgLmZpeGVkLWFyZWEgLmNhcmQtMiAuaWNvbi1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5jb250YWluZXIgLmZpeGVkLWFyZWEgLmNhcmQtMiAuaWNvbi1hcmVhIGltZyB7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDUycHg7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5jYXJkLTIgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jb250YWluZXIgLmZpeGVkLWFyZWEgLmNhcmQtMiAudGl0bGUgbGFiZWwge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5jb250YWluZXIgLmZpeGVkLWFyZWEgLmNhcmQtMiAucmF0aW5ncyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5jYXJkLTIgLnJhdGluZ3MgaW1nIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMTdweDtcbn1cbi5jb250YWluZXIgLmZpeGVkLWFyZWEgLmNhcmQtMiAucmF0aW5ncyBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmNvbnRhaW5lciAuZ3Jvdy1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmNvbnRhaW5lciAuZ3Jvdy1hcmVhIC5sb2dvdXQtYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XG59XG4uY29udGFpbmVyIC5ncm93LWFyZWEgLmxvZ291dC1idG4gaW1nIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5jb250YWluZXIgLmdyb3ctYXJlYSAubG9nb3V0LWJ0biBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiByZ2JhKDUsIDQ0LCA3OCwgMC42KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftPanalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-left-panal',
          templateUrl: './left-panal.component.html',
          styleUrls: ['./left-panal.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui-containers/top-bar/top-bar.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/ui-containers/top-bar/top-bar.component.ts ***!
    \************************************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcAppUiContainersTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");

    var TopBarComponent = /*#__PURE__*/function () {
      function TopBarComponent() {
        _classCallCheck(this, TopBarComponent);
      }

      _createClass(TopBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
      return new (t || TopBarComponent)();
    };

    TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBarComponent,
      selectors: [["app-top-bar"]],
      decls: 14,
      vars: 0,
      consts: [[1, "container"], [1, "section-1"], [1, "ui-inputgroup"], [1, "ui-inputgroup-addon"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Search for frequently asked questions"], [1, "section-2"], [1, "section-3"], [1, "profile"], ["src", "./assets/profile-icon.png"], [1, "notifications"], ["src", "./assets/notify-icon.png"]],
      template: function TopBarComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Angelia Jasmine");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__["InputText"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 90px;\n  padding: 32px 45px 0px 40px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%] {\n  width: 525px;\n  background: #FFFFFF;\n  box-shadow: 8px 10px 54px rgba(15, 13, 35, 0.03);\n  border-radius: 16px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%] {\n  width: 557px;\n  height: 48px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-top-left-radius: 16px;\n  border-bottom-left-radius: 16px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   .ui-inputgroup-addon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #FFFFFF;\n  border: none;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n  left: 14px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  position: relative;\n  left: -32px;\n  background-color: #FFFFFF;\n  border: none;\n  outline: none;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 24px;\n  color: #79778A;\n  padding-left: 50px;\n  padding-right: 25px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 24px;\n  color: #79778A;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 24px;\n  color: #79778A;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > .p-inputtext[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 0.02rem green !important;\n}\n.container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 251px;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 183px;\n  height: 48px;\n  background: #FFFFFF;\n  box-shadow: 8px 10px 54px rgba(15, 13, 35, 0.03);\n  border-radius: 16px;\n  align-items: center;\n  justify-content: space-around;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 36px;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  color: #2C2C2C;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 16px;\n  width: 52px;\n  height: 48px;\n  background: #FFFFFF;\n  box-shadow: 8px 10px 54px rgba(15, 13, 35, 0.03);\n  border-radius: 16px;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%] {\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY29udGFpbmVycy90b3AtYmFyL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXHVpLWNvbnRhaW5lcnNcXHRvcC1iYXJcXHRvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLWNvbnRhaW5lcnMvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NKO0FEQ0k7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FDQ1I7QURDUTtFQUVJLFlBQUE7RUFDQSxZQUFBO0FDQVo7QURFWTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUNBaEI7QURHWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNEaEI7QURJWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGaEI7QURLWTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNIaEI7QURIWTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNIaEI7QURRUTtFQUNJLDBDQUFBO0FDTlo7QURXSTtFQUNJLFlBQUE7QUNUUjtBRFlJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1ZSO0FEWVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDVlo7QURZWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDVmhCO0FEYVk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDWGhCO0FEZVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7QUNiWjtBRGVZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNiaEI7QURrQkk7RUFDSSxZQUFBO0FDaEJSIiwiZmlsZSI6InNyYy9hcHAvdWktY29udGFpbmVycy90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nOiAzMnB4IDQ1cHggMHB4IDQwcHg7XHJcblxyXG4gICAgLnNlY3Rpb24tMSB7XHJcbiAgICAgICAgd2lkdGg6IDUyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogOHB4IDEwcHggNTRweCByZ2JhKDE1LCAxMywgMzUsIDAuMDMpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblxyXG4gICAgICAgIC51aS1pbnB1dGdyb3Vwe1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDU1N3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudWktaW5wdXRncm91cC1hZGRvbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMzJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCZSBWaWV0bmFtIFBybyc7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc5Nzc4QTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlIFZpZXRuYW0gUHJvJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzk3NzhBO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3BhbiA+IC5wLWlucHV0dGV4dDpob3ZlcntcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4wMnJlbSBncmVlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24tMiB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWN0aW9uLTMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogMjUxcHg7XHJcblxyXG4gICAgICAgIC5wcm9maWxle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICB3aWR0aDogMTgzcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogOHB4IDEwcHggNTRweCByZ2JhKDE1LCAxMywgMzUsIDAuMDMpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyQzJDMkM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ub3RpZmljYXRpb25zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA4cHggMTBweCA1NHB4IHJnYmEoMTUsIDEzLCAzNSwgMC4wMyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24tMSwgLnNlY3Rpb24tMiwgLnNlY3Rpb24tMyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG5cclxufSIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHB4O1xuICBwYWRkaW5nOiAzMnB4IDQ1cHggMHB4IDQwcHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTEge1xuICB3aWR0aDogNTI1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDhweCAxMHB4IDU0cHggcmdiYSgxNSwgMTMsIDM1LCAwLjAzKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMSAudWktaW5wdXRncm91cCB7XG4gIHdpZHRoOiA1NTdweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0xIC51aS1pbnB1dGdyb3VwIHNwYW4ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0xIC51aS1pbnB1dGdyb3VwIC51aS1pbnB1dGdyb3VwLWFkZG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDE0cHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTEgLnVpLWlucHV0Z3JvdXAgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzc5Nzc4QTtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0xIC51aS1pbnB1dGdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkJlIFZpZXRuYW0gUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICM3OTc3OEE7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTEgc3BhbiA+IC5wLWlucHV0dGV4dDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMDJyZW0gZ3JlZW4gIWltcG9ydGFudDtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMiB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAyNTFweDtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMyAucHJvZmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxODNweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiA4cHggMTBweCA1NHB4IHJnYmEoMTUsIDEzLCAzNSwgMC4wMyk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTMgLnByb2ZpbGUgaW1nIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzZweDtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMyAucHJvZmlsZSBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzJDMkMyQztcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMyAubm90aWZpY2F0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgd2lkdGg6IDUycHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogOHB4IDEwcHggNTRweCByZ2JhKDE1LCAxMywgMzUsIDAuMDMpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0zIC5ub3RpZmljYXRpb25zIGltZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTEsIC5jb250YWluZXIgLnNlY3Rpb24tMiwgLmNvbnRhaW5lciAuc2VjdGlvbi0zIHtcbiAgaGVpZ2h0OiA0OHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-bar',
          templateUrl: './top-bar.component.html',
          styleUrls: ['./top-bar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Private\Nyrobeonka\dream-stakes\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map