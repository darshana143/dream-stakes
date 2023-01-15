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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ui-containers/top-bar/top-bar.component */
    "./src/app/ui-containers/top-bar/top-bar.component.ts");
    /* harmony import */


    var _ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./ui-containers/left-panal/left-panal.component */
    "./src/app/ui-containers/left-panal/left-panal.component.ts");
    /* harmony import */


    var _ds_components_ds_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./ds-components/ds-components.module */
    "./src/app/ds-components/ds-components.module.ts");
    /* harmony import */


    var _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./enter-screen/enter-screen.component */
    "./src/app/enter-screen/enter-screen.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _ui_containers_right_panal_right_panal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./ui-containers/right-panal/right-panal.component */
    "./src/app/ui-containers/right-panal/right-panal.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _key_locker_key_locker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./key-locker/key-locker.component */
    "./src/app/key-locker/key-locker.component.ts");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/checkbox */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
    /* harmony import */


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/tabview */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js");
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/chart */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chart.js"); // -------------------------------- PrimeNG ----------------------------------------


    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"], _ds_components_ds_components_module__WEBPACK_IMPORTED_MODULE_9__["DsComponentsModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__["CheckboxModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_19__["TabViewModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__["AgGridModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_20__["ChartModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"], _ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_8__["LeftPanalComponent"], _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_10__["EnterScreenComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], _ui_containers_right_panal_right_panal_component__WEBPACK_IMPORTED_MODULE_12__["RightPanalComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"], _key_locker_key_locker_component__WEBPACK_IMPORTED_MODULE_14__["KeyLockerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"], _ds_components_ds_components_module__WEBPACK_IMPORTED_MODULE_9__["DsComponentsModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__["CheckboxModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_19__["TabViewModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__["AgGridModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_20__["ChartModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"], _ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_8__["LeftPanalComponent"], _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_10__["EnterScreenComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], _ui_containers_right_panal_right_panal_component__WEBPACK_IMPORTED_MODULE_12__["RightPanalComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_13__["UserProfileComponent"], _key_locker_key_locker_component__WEBPACK_IMPORTED_MODULE_14__["KeyLockerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__["InputTextModule"], _ds_components_ds_components_module__WEBPACK_IMPORTED_MODULE_9__["DsComponentsModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_17__["DropdownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_18__["CheckboxModule"], primeng_tabview__WEBPACK_IMPORTED_MODULE_19__["TabViewModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__["AgGridModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_20__["ChartModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.types.ts":
  /*!******************************!*\
    !*** ./src/app/app.types.ts ***!
    \******************************/

  /*! exports provided: MainViews */

  /***/
  function srcAppAppTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainViews", function () {
      return MainViews;
    });

    var MainViews;

    (function (MainViews) {
      MainViews[MainViews["enterScreen"] = 0] = "enterScreen";
      MainViews[MainViews["dashboard"] = 1] = "dashboard";
      MainViews[MainViews["keyLocker"] = 2] = "keyLocker";
      MainViews[MainViews["userProfile"] = 3] = "userProfile";
    })(MainViews || (MainViews = {}));
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ds-components/ds-types */
    "./src/app/ds-components/ds-types.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ds_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../ds-components/popup/popup.component */
    "./src/app/ds-components/popup/popup.component.ts");

    function DashboardComponent_div_2_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
      }

      if (rf & 2) {
        var aCard_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", aCard_r7.infoIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function DashboardComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var aCard_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", aCard_r7.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", aCard_r7.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", aCard_r7.info, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", aCard_r7.infoIcon);
      }
    }

    function DashboardComponent_div_9_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "currentRoom": a0
      };
    };

    function DashboardComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_9_ng_container_1_Template, 1, 0, "ng-container", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.currentRoom));
      }
    }

    function DashboardComponent_div_10_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function DashboardComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_10_ng_container_1_Template, 1, 0, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r5);
      }
    }

    function DashboardComponent_ng_template_12_li_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14);
      }
    }

    function DashboardComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_12_Template_div_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.showPlaceBid();
        });

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
      }

      if (rf & 2) {
        var currentRoom_r12 = ctx.currentRoom;

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
      }
    }

    function DashboardComponent_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Coming Soon\n");
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);

        this.placeBid = false;
        this.currentPopopWindowIdx = 0;
        this.cards = [{
          icon: './assets/dasboard/home.png',
          title: 'Auction Houses',
          info: '35',
          infoIcon: './assets/dasboard/info.png'
        }, {
          icon: './assets/dasboard/users.png',
          title: 'Online Users',
          info: '13,986',
          infoIcon: ''
        }, {
          icon: './assets/dasboard/settings.png',
          title: 'Last Winnig Bid',
          info: '$4,564',
          infoIcon: ''
        }, {
          icon: './assets/dasboard/timer.png',
          title: 'Ending Soon',
          info: '187',
          infoIcon: ''
        }];
        this.houses = [{
          label: 'Auction House 1',
          value: {
            id: 1,
            name: 'Auction House 1'
          }
        }, {
          label: 'Auction House 2',
          value: {
            id: 2,
            name: 'Auction House 2'
          }
        }];
        this.rooms = [{
          houseImage: './assets/dasboard/house.png',
          title: 'Heffel Fine Art Auction House',
          info: {
            startBid: '50.00',
            heighestBid: '4575.00',
            totalBids: '89'
          },
          biddingInfo: {
            title: 'Duplex Auction House',
            desc: "Duplex means that we select two winners from this house by\n                holding two auctions, means two bidding rooms. One bidding room at a time\n                will start at 50$. The entrants will have to place their first bid for 50$ or\n                greater to be the first occupant (Winning Spot). The next highest bidder will\n                become the next occupant. After the number of paid entrants reach 50,000 a\n                48 hour clock starts counting down for when this bidding room ends. Highest\n                bidder after the 48 hour clock runs out moves on the Eligibility. In that Auction\n                House, the first bidding room is in Pending Status. Those 49,999+ from the\n                first bidding room are automatically moved to the final bidding room that\n                starts at 50$ and a 21 day timer automatically begins.",
            list: ['Duplex', '100$ entry fee', '2 total bidding rooms, 1 at a time.', 'After 50000 entrants, 48 hour countdown till end', '49,999+ rollover to 2nd bidding room.']
          },
          type: 1
        }, {
          type: 0
        }];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.popupData = [{
            header: 'Place Bid',
            contentHeader: '',
            content: "",
            bckButton: false,
            nxtButton: false,
            customContents: 'placeBid',
            showFooter: false
          }, {
            header: 'Place Bid',
            contentHeader: '',
            content: "\n          <div style=\"width: 100%; text-align: center;\">\n\n            <div style=\"font-family: 'Open Sans'; font-style: normal; font-weight: 700; font-size: 32px; line-height: 28px; color: #2C2C2C; margin-bottom: 15px;\">\n                Heffel Fine Art Auction House\n            </div>\n\n            <div style=\"font-family: 'Open Sans'; font-style: normal; font-weight: 600; font-size: 20px; line-height: 28px; color: #2C2C2C; margin-bottom: 20px;\">\n                Duplex Auction House\n            </div>\n\n            <div style=\"font-family: 'Open Sans'; font-style: normal; font-weight: 400; font-size: 20px; line-height: 28px; color: #2C2C2C; margin-bottom: 40px;\">\n                Current Bid : $4575\n            </div>\n\n          </div>\n\n          <div style=\"width: 100%; height: 0px; border: 1px solid rgba(44, 44, 44, 0.2); margin-bottom: 56px;\"></div>\n\n          <div style=\"width: 100%;display: flex; flex-direction: column; justify-content: flex-start; align-items: center;\">\n\n            <label style=\"\n                font-family: 'Open Sans';\n                font-style: normal;\n                font-weight: 700;\n                font-size: 42px;\n                line-height: 28px;\n                color: #F9A369;\n            \">\n                Success\n            </label>\n\n            <label style=\"\n                font-family: 'Open Sans';\n                font-style: normal;\n                font-weight: 600;\n                font-size: 20px;\n                line-height: 28px;\n                text-align: justify;\n                color: #2C2C2C;\n                margin-top: 21px;\n            \">\n                Your Bid for $4800 is now live\n            </label>\n\n            <label style=\"\n                font-family: 'Open Sans';\n                font-style: normal;\n                font-weight: 700;\n                font-size: 20px;\n                line-height: 28px;\n                text-align: justify;\n                color: #2C2C2C;\n                margin-top: 80px;\n            \">\n                Share Your Ask\n            </label>\n\n            <div style=\"display: flex; flex-direction: row; justify-content: space-between; width: 267px; height: 48px; margin-top: 35px;\">\n\n              <img style=\"width: 48px; height: 48px;\" src=\"./assets/dasboard/icons/fb.png\">\n  \n              <img style=\"width: 48px; height: 48px;\" src=\"./assets/dasboard/icons/twitter.png\">\n  \n              <img style=\"width: 48px; height: 48px;\" src=\"./assets/dasboard/icons/pinterest.png\">\n  \n              <img style=\"width: 48px; height: 48px;\" src=\"./assets/dasboard/icons/google_plus.png\">\n  \n            </div>\n\n          </div>\n\n        ",
            bckButton: false,
            nxtButton: false,
            showFooter: true,
            customFooterButton: 'finish'
          }];
          this.currentPopupPage = this.popupData[0];
          this.selectedHouse = this.houses[0].value;
          this.currentRoom = this.rooms[0];
        }
      }, {
        key: "showPlaceBid",
        value: function showPlaceBid() {
          this.placeBid = true;
        }
      }, {
        key: "setRoom",
        value: function setRoom() {
          var _this = this;

          var idx = this.houses.findIndex(function (el) {
            return el.value.id === _this.selectedHouse.id;
          });
          this.currentRoom = this.rooms[idx];
        }
      }, {
        key: "recieveFromPopupDialog",
        value: function recieveFromPopupDialog(e) {
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
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 16,
      vars: 9,
      consts: [[1, "container"], [1, "cards-area"], ["class", "a-card", 4, "ngFor", "ngForOf"], [1, "rooms-area"], [1, "room-count"], [1, "drpdwn-area"], [3, "options", "ngModel", "ngModelChange", "onChange"], [1, "count-area"], [4, "ngIf"], [3, "display", "popupData", "notifyParent"], ["room", ""], ["conclude", ""], [1, "a-card"], [1, "icon"], [3, "src"], [1, "title"], [1, "info"], [3, "src", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [1, "bidding-area"], [1, "left"], [1, "right"], [1, "start"], [1, "info-title"], [1, "desc"], [1, "high"], [1, "total"], [1, "buttons-area"], [1, "custom-bid-btn", 3, "click"], [1, "bidding-info"], ["src", "./assets/dasboard/info.png"], ["type", "a"], [4, "ngFor", "ngForOf"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_2_Template, 8, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-dropdown", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_p_dropdown_ngModelChange_6_listener($event) {
            return ctx.selectedHouse = $event;
          })("onChange", function DashboardComponent_Template_p_dropdown_onChange_6_listener() {
            return ctx.setRoom();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParent", function DashboardComponent_Template_app_popup_notifyParent_11_listener($event) {
            return ctx.recieveFromPopupDialog($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_ng_template_12_Template, 33, 8, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_ng_template_14_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ds_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_5__["PopupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 40px 40px 0px 40px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  height: 200px;\n  max-width: 787px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 174px;\n  height: 188px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  padding: 10px 0px 10px 0px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #79778A;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 23px;\n  line-height: 20px;\n  color: #95CED1;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin-left: 3px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .room-count[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 75px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .room-count[_ngcontent-%COMP%]   .drpdwn-area[_ngcontent-%COMP%] {\n  margin-right: 32px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .room-count[_ngcontent-%COMP%]   .count-area[_ngcontent-%COMP%] {\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 20px;\n  color: #95CED1;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 200px;\n  margin-bottom: 55px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 200px;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 169px;\n  height: 169px;\n  border-radius: 10px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 100%;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 28px;\n  color: #95CED1;\n  margin-bottom: 23px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-bottom: 18px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .high[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-right: 55px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 20px;\n  color: #9997AE;\n  margin-bottom: 5px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 24px;\n  color: #231F20;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .buttons-area[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-area[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .buttons-area[_ngcontent-%COMP%]   .custom-bid-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 109px;\n  height: 32px;\n  border-radius: 5px;\n  border: 2px solid #F9A369;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 24px;\n  text-align: center;\n  color: #F9A369;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-info[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-grow: 1;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-info[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 28px;\n  color: #95CED1;\n  margin-bottom: 18px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-info[_ngcontent-%COMP%]   .info-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin-left: 3px;\n  margin-top: 5px;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 32px;\n  text-align: justify;\n  color: #2C2C2C;\n}\n.container[_ngcontent-%COMP%]   .rooms-area[_ngcontent-%COMP%]   .bidding-info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  -webkit-padding-start: 18px;\n          padding-inline-start: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0FKO0FERUk7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdRO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNGWjtBRElZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGaEI7QURJZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0ZwQjtBRE1ZO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0poQjtBRE9ZO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ05oQjtBRFFnQjtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQcEI7QURjSTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDYlI7QURlUTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2RaO0FEZ0JZO0VBQ0ksa0JBQUE7QUNkaEI7QURpQlk7RUFFSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDaEJoQjtBRHFCUTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNwQlo7QUR1Qlk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3JCaEI7QUR1QmdCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ3JCcEI7QUR5Qlk7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDeEJoQjtBRDBCZ0I7RUFFSSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDekJwQjtBRDZCZ0I7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUM1QnBCO0FEOEJvQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDNUJ4QjtBRCtCb0I7RUFFSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUM5QnhCO0FEa0NvQjtFQUVJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNqQ3hCO0FEdUNnQjtFQUVJLFdBQUE7QUN0Q3BCO0FEd0NvQjtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDdkN4QjtBRGdEUTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FDL0NaO0FEaURZO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ2hEaEI7QURrRGdCO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNqRHBCO0FEc0RZO0VBRUksV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ3JEaEI7QUR1RGdCO0VBQ0ksMkJBQUE7VUFBQSwwQkFBQTtBQ3JEcEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDQwcHggNDBweCAwcHggNDBweDtcclxuXHJcbiAgICAuY2FyZHMtYXJlYSB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDc4N3B4O1xyXG5cclxuICAgICAgICAuYS1jYXJkIHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTc0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTg4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xyXG5cclxuICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDY0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmUgVmlldG5hbSBQcm8nO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3OTc3OEE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbmZvIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlIFZpZXRuYW0gUHJvJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTVDRUQxO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucm9vbXMtYXJlYSB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5yb29tLWNvdW50IHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzVweDtcclxuXHJcbiAgICAgICAgICAgIC5kcnBkd24tYXJlYSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb3VudC1hcmVhe1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmUgVmlldG5hbSBQcm8nO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5NUNFRDE7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmlkZGluZy1hcmVhIHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1NXB4O1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC5sZWZ0IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTY5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnJpZ2h0IHtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5NUNFRDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjNweDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmluZm8ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0LCAuaGlnaCwgLnRvdGFsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmluZm8tdGl0bGUge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCZSBWaWV0bmFtIFBybyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5OTk3QUU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZGVzYyB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlIFZpZXRuYW0gUHJvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIzMUYyMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnV0dG9ucy1hcmVhIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jdXN0b20tYmlkLWJ0biB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0Y5QTM2OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCZSBWaWV0bmFtIFBybyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0Y5QTM2OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJpZGRpbmctaW5mb3tcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgICAgICAgICAuaW5mby10aXRsZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTVDRUQxO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGVzY3tcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzJDMkMyQztcclxuXHJcbiAgICAgICAgICAgICAgICBvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNDBweCA0MHB4IDBweCA0MHB4O1xufVxuLmNvbnRhaW5lciAuY2FyZHMtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1heC13aWR0aDogNzg3cHg7XG59XG4uY29udGFpbmVyIC5jYXJkcy1hcmVhIC5hLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NHB4O1xuICBoZWlnaHQ6IDE4OHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbn1cbi5jb250YWluZXIgLmNhcmRzLWFyZWEgLmEtY2FyZCAuaWNvbiB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG4uY29udGFpbmVyIC5jYXJkcy1hcmVhIC5hLWNhcmQgLmljb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIgLmNhcmRzLWFyZWEgLmEtY2FyZCAudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzc5Nzc4QTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuY2FyZHMtYXJlYSAuYS1jYXJkIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogXCJCZSBWaWV0bmFtIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjOTVDRUQxO1xufVxuLmNvbnRhaW5lciAuY2FyZHMtYXJlYSAuYS1jYXJkIC5pbmZvIGltZyB7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnJvb21zLWFyZWEgLnJvb20tY291bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1cHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5yb29tLWNvdW50IC5kcnBkd24tYXJlYSB7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbn1cbi5jb250YWluZXIgLnJvb21zLWFyZWEgLnJvb20tY291bnQgLmNvdW50LWFyZWEge1xuICBmb250LWZhbWlseTogXCJCZSBWaWV0bmFtIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjOTVDRUQxO1xufVxuLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDU1cHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWFyZWEgLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIgLnJvb21zLWFyZWEgLmJpZGRpbmctYXJlYSAubGVmdCBpbWcge1xuICB3aWR0aDogMTY5cHg7XG4gIGhlaWdodDogMTY5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWFyZWEgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1hcmVhIC5yaWdodCAudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgY29sb3I6ICM5NUNFRDE7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWFyZWEgLnJpZ2h0IC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWFyZWEgLnJpZ2h0IC5pbmZvIC5zdGFydCwgLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1hcmVhIC5yaWdodCAuaW5mbyAuaGlnaCwgLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1hcmVhIC5yaWdodCAuaW5mbyAudG90YWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tcmlnaHQ6IDU1cHg7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWFyZWEgLnJpZ2h0IC5pbmZvIC5pbmZvLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzk5OTdBRTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1hcmVhIC5yaWdodCAuaW5mbyAuZGVzYyB7XG4gIGZvbnQtZmFtaWx5OiBcIkJlIFZpZXRuYW0gUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICMyMzFGMjA7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWFyZWEgLnJpZ2h0IC5idXR0b25zLWFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLnJvb21zLWFyZWEgLmJpZGRpbmctYXJlYSAucmlnaHQgLmJ1dHRvbnMtYXJlYSAuY3VzdG9tLWJpZC1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwOXB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAycHggc29saWQgI0Y5QTM2OTtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRjlBMzY5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5yb29tcy1hcmVhIC5iaWRkaW5nLWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1ncm93OiAxO1xufVxuLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1pbmZvIC5pbmZvLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiAjOTVDRUQxO1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuLmNvbnRhaW5lciAucm9vbXMtYXJlYSAuYmlkZGluZy1pbmZvIC5pbmZvLXRpdGxlIGltZyB7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jb250YWluZXIgLnJvb21zLWFyZWEgLmJpZGRpbmctaW5mbyAuZGVzYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogIzJDMkMyQztcbn1cbi5jb250YWluZXIgLnJvb21zLWFyZWEgLmJpZGRpbmctaW5mbyAuZGVzYyBvbCB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAxOHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [];
      }, null);
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
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/checkbox */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
    /* harmony import */


    var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! primeng/radiobutton */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-radiobutton.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../safe-html.pipe */
    "./src/app/safe-html.pipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

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
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__["CheckboxModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__["RadioButtonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DsComponentsModule, {
        declarations: [_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__["CommonSliderComponent"], _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_3__["CardSliderComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"], _safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeHtmlPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__["CheckboxModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__["RadioButtonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
        exports: [_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__["CommonSliderComponent"], _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_3__["CardSliderComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DsComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_common_slider_common_slider_component__WEBPACK_IMPORTED_MODULE_2__["CommonSliderComponent"], _card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_3__["CardSliderComponent"], _popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"], _safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeHtmlPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_6__["CheckboxModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_7__["RadioButtonModule"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
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
      IPopupCpmmands["showTearms"] = "showTearms";
      IPopupCpmmands["showPrivacyPolicy"] = "showPrivacyPolicy";
      IPopupCpmmands["submit"] = "submit";
      IPopupCpmmands["reviewBid"] = "reviewBid";
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
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/checkbox */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-checkbox.js");
    /* harmony import */


    var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/radiobutton */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-radiobutton.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-button.js");
    /* harmony import */


    var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../safe-html.pipe */
    "./src/app/safe-html.pipe.ts");

    function PopupComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r0.popupData == null ? null : ctx_r0.popupData.content), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function PopupComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "p-checkbox", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_7_Template_label_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.sendCommandToParent("showTearms");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Terms and Conditions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "p-checkbox", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_7_Template_label_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.sendCommandToParent("showPrivacyPolicy");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Privacy Policy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PopupComponent_div_8_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Card number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Expiry date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CVC/CVV");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cardholder name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p-radioButton", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "p-button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PopupComponent_div_8_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p-radioButton", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p-button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PopupComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-radioButton", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PopupComponent_div_8_Template_p_radioButton_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.paymenttype = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopupComponent_div_8_div_4_Template, 34, 0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-radioButton", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PopupComponent_div_8_Template_p_radioButton_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.paymenttype = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PopupComponent_div_8_div_6_Template, 12, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.paymenttype);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.paymenttype == "cc");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.paymenttype);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.paymenttype == "paypal");
      }
    }

    function PopupComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Heffel Fine Art Auction House ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Duplex Auction House ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Current Bid : $4575 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " The bid you enter must be higher than the highest bid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " $ ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enter Bid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Highest Bid is 500$* ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Bid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Your Bid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " $0.00 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Authentication Fee ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Free ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Total (USD) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " $0.00 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Pay via Dream Coins ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_9_Template_div_click_53_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.sendCommandToParent("reviewBid");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Review Bid ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PopupComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-checkbox", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-checkbox", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-checkbox", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-checkbox", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p-checkbox", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-checkbox", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_10_Template_img_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.sendCommandToParent("submit");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Your changes are live after admin approvel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Admin will sent you a link to update your phone number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PopupComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-checkbox", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-checkbox", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-checkbox", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-checkbox", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p-checkbox", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_div_11_Template_img_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.sendCommandToParent("submit");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Your changes are live after admin approvel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Admin will sent you a link to update your phone number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PopupComponent_p_footer_12_img_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_p_footer_12_img_3_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r24.sendCommandToParent("submit");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PopupComponent_p_footer_12_img_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_p_footer_12_img_4_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.sendCommandToParent("next");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PopupComponent_p_footer_12_img_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_p_footer_12_img_5_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r28.sendCommandToParent("close");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PopupComponent_p_footer_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupComponent_p_footer_12_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.sendCommandToParent("back");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PopupComponent_p_footer_12_img_3_Template, 1, 0, "img", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PopupComponent_p_footer_12_img_4_Template, 1, 0, "img", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PopupComponent_p_footer_12_img_5_Template, 1, 0, "img", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", (ctx_r6.popupData == null ? null : ctx_r6.popupData.bckButton) ? "visible" : "hidden");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.popupData == null ? null : ctx_r6.popupData.customFooterButton == null ? null : ctx_r6.popupData.customFooterButton.includes("submit"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.popupData == null ? null : ctx_r6.popupData.nxtButton);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.popupData == null ? null : ctx_r6.popupData.customFooterButton == null ? null : ctx_r6.popupData.customFooterButton.includes("finish"));
      }
    }

    var PopupComponent = /*#__PURE__*/function () {
      function PopupComponent() {
        _classCallCheck(this, PopupComponent);

        this.display = false;
        this.notifyParent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.paymenttype = '';
      }

      _createClass(PopupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close(customClose) {
          this.sendCommandToParent(_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].close, customClose);
        }
      }, {
        key: "sendCommandToParent",
        value: function sendCommandToParent(command) {
          var customCommand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          switch (command) {
            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].close:
              this.notifyParent.emit({
                command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].close,
                customCommand: 'closeTearms'
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

            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showTearms:
              this.notifyParent.emit({
                command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showTearms
              });
              break;

            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showPrivacyPolicy:
              this.notifyParent.emit({
                command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showPrivacyPolicy,
                customCommand: 'closePrivacyPolicy'
              });
              break;

            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].submit:
              this.notifyParent.emit({
                command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].submit
              });
              break;

            case _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].reviewBid:
              this.notifyParent.emit({
                command: _ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].reviewBid
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
        popupData: "popupData",
        width: "width",
        height: "height"
      },
      outputs: {
        notifyParent: "notifyParent"
      },
      decls: 13,
      vars: 16,
      consts: [[1, "container", "popup-cotroller"], ["position", "top", 3, "visible", "draggable", "transitionOptions", "visibleChange", "onHide"], [1, "content-header"], [3, "innerHTML", 4, "ngIf"], [4, "ngIf"], ["class", "place-bid", 4, "ngIf"], ["class", "profile-popups", 4, "ngIf"], [3, "innerHTML"], ["name", "groupname", "value", "val1", "label", "I agree with the"], [2, "margin-left", "3px", "cursor", "pointer", "font-family", "Open Sans", "font-style", "normal", "font-weight", "600", "font-size", "15px", "line-height", "24px", "text-decoration-line", "underline", "color", "#F9A369", 3, "click"], ["name", "groupname", "value", "val2", "label", "I agree with For"], [2, "position", "relative", "top", "2px", "left", "5px", "cursor", "pointer", "font-family", "Open Sans", "font-style", "normal", "font-weight", "600", "font-size", "15px", "line-height", "24px", "text-decoration-line", "underline", "color", "#F9A369", 3, "click"], ["name", "groupname", "value", "cc", "label", "Credit & Debit Cards", 3, "ngModel", "ngModelChange"], ["style", "width: 410px;", 4, "ngIf"], ["name", "groupname", "value", "paypal", "label", "Paypal", 3, "ngModel", "ngModelChange"], ["style", "width: 475px;", 4, "ngIf"], [2, "width", "410px"], [1, "input-wrapper"], [1, "button-label"], [1, "ui-inputgroup"], ["type", "text", "pInputText", "", "placeholder", "0000 0000 0000 0000", 1, "common-txt"], [1, "ui-inputgroup-addon", 2, "padding-top", "13px"], ["src", "./assets/popup-btns/cc.png", 2, "width", "22px", "height", "15px"], [2, "display", "flex", "justify-content", "space-between"], [1, "input-wrapper", 2, "width", "200px"], ["type", "text", "pInputText", "", "placeholder", "MM/YY", 1, "common-txt"], [1, "ui-inputgroup-addon"], ["src", "./assets/popup-btns/calender.png", 2, "width", "18px", "height", "19px", "position", "relative", "top", "8px"], ["type", "text", "pInputText", "", "placeholder", "...", 1, "common-txt"], ["src", "./assets/popup-btns/info.png", 2, "width", "16px", "height", "16px", "position", "relative", "top", "8px"], [1, "ui-inputgroup", 2, "margin-bottom", "22px"], ["type", "text", "pInputText", "", "placeholder", "Enter cardholder\u2019s full name", 1, "common-txt", 2, "width", "100%"], ["name", "groupname", "value", "val2", "label", "Save card"], [2, "margin-top", "25px", "margin-bottom", "65px"], ["label", "Add card", 1, "p-button-warning"], [2, "width", "475px"], ["type", "text", "pInputText", "", "placeholder", "Enter your paypal email address", 1, "common-txt"], ["name", "groupname", "value", "val2", "label", "Save paypal"], [2, "margin-top", "45px"], ["label", "Add paypal", 1, "p-button-warning"], [1, "place-bid"], [2, "width", "100%", "text-align", "center"], [2, "font-family", "Open Sans", "font-style", "normal", "font-weight", "700", "font-size", "32px", "line-height", "28px", "color", "#2C2C2C", "margin-bottom", "15px"], [2, "font-family", "Open Sans", "font-style", "normal", "font-weight", "600", "font-size", "20px", "line-height", "28px", "color", "#2C2C2C", "margin-bottom", "20px"], [2, "font-family", "Open Sans", "font-style", "normal", "font-weight", "400", "font-size", "20px", "line-height", "28px", "color", "#2C2C2C", "margin-bottom", "40px"], [2, "width", "100%", "height", "0px", "border", "1px solid rgba(44, 44, 44, 0.2)", "margin-bottom", "56px"], [2, "display", "flex", "flex-direction", "row", "align-items", "center"], [2, "width", "515px"], ["src", "./assets/dasboard/placebid/bidding-house.png", 2, "width", "100%", "height", "555px"], [2, "display", "flex", "flex-direction", "column", "flex-grow", "1", "height", "555px", "padding", "10px 0px 0px 50px"], [2, "font-family", "Open Sans", "font-style", "normal", "font-weight", "600", "font-size", "20px", "line-height", "28px", "text-align", "justify", "color", "#2C2C2C", "margin-bottom", "30px"], [2, "display", "flex", "flex-direction", "row", "justify-content", "space-between", "align-items", "center", "max-width", "450px"], [2, "font-family", "Open Sans", "font-style", "normal", "font-weight", "600", "font-size", "50px", "line-height", "68px", "text-align", "center", "color", "#2C2C2C"], [2, "width", "284px", "height", "54px"], [1, "ui-float-label", 2, "margin-left", "-7px"], ["id", "float-input", "type", "text", "size", "30", "pInputText", "", 1, "common-txt"], ["for", "float-input"], [2, "font-family", "Open Sans", "font-style", "normal", "font-weight", "400", "font-size", "16px", "line-height", "22px", "text-align", "start", "margin-top", "5px", "color", "#FF0000"], [2, "position", "relative", "top", "-3px", "width", "97px", "height", "53px"], [2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center", "width", "100%", "height", "100%", "background", "#F9A369", "border-radius", "10px", "font-family", "Be Vietnam Pro", "font-style", "normal", "font-weight", "600", "font-size", "16px", "line-height", "24px", "text-align", "center", "color", "#FFFFFF"], [1, "details"], [1, "item"], [1, "title-area"], [1, "val"], [1, "hr-line"], [2, "font-weight", "600"], [2, "max-width", "590px", "display", "flex", "flex-direction", "row", "justify-content", "center", "align-items", "center", "margin-top", "60px"], [2, "font-family", "Poppins", "font-style", "normal", "font-weight", "500", "font-size", "17px", "line-height", "26px", "text-decoration-line", "underline", "color", "#F9A369"], [2, "display", "flex", "flex-direction", "row", "justify-content", "flex-end", "flex-grow", "1"], [2, "display", "flex", "align-items", "center", "justify-content", "center", "width", "170px", "height", "52px", "background", "rgba(249, 163, 105, 0.5)", "font-family", "Poppins", "font-style", "normal", "font-weight", "500", "font-size", "17px", "line-height", "26px", "color", "#FCFCFC", "cursor", "pointer", 3, "click"], [1, "profile-popups"], ["name", "group1", "value", "I changed my primary number", "label", "I changed my primary number", "inputId", "ny"], ["name", "group1", "value", "I lost my phone", "label", "I lost my phone", "inputId", "ny"], ["name", "group1", "value", "This is not my primary number", "label", "This is not my primary number", "inputId", "ny"], ["name", "group1", "value", "I made a typing error", "label", "I made a typing error", "inputId", "ny"], ["name", "group1", "value", "My number is suspended", "label", "My number is suspended", "inputId", "ny"], ["name", "group1", "value", "Other", "label", "Other", "inputId", "ny"], [1, "submit-btn"], ["src", "./assets/profile/submit-btn.png", 3, "click"], [1, "ins"], ["name", "group1", "value", "I changed my home", "label", "I changed my home", "inputId", "ny"], ["name", "group1", "value", "I moved to another country", "label", "I moved to another country", "inputId", "ny"], ["name", "group1", "value", "This is not my primary address", "label", "This is not my primary address", "inputId", "ny"], ["src", "./assets/popup-btns/back-arrow.png", 3, "click"], ["class", "submit-btn", "src", "./assets/popup-btns/submit-btn.png", 3, "click", 4, "ngIf"], ["src", "./assets/popup-btns/next-arrao.png", 3, "click", 4, "ngIf"], ["style", "width: 170px; height: 52px;", "src", "./assets/dasboard/finish.png", 3, "click", 4, "ngIf"], ["src", "./assets/popup-btns/submit-btn.png", 1, "submit-btn", 3, "click"], ["src", "./assets/popup-btns/next-arrao.png", 3, "click"], ["src", "./assets/dasboard/finish.png", 2, "width", "170px", "height", "52px", 3, "click"]],
      template: function PopupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-dialog", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function PopupComponent_Template_p_dialog_visibleChange_1_listener($event) {
            return ctx.display = $event;
          })("onHide", function PopupComponent_Template_p_dialog_onHide_1_listener() {
            return ctx.close(ctx.popupData == null ? null : ctx.popupData.customContents);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PopupComponent_div_10_Template, 17, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PopupComponent_div_11_Template, 16, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PopupComponent_p_footer_12_Template, 6, 5, "p-footer", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width ? ctx.width : "initial", "px")("height", ctx.height ? ctx.height : "initial", "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.display)("draggable", false)("transitionOptions", "200ms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.popupData == null ? null : ctx.popupData.header, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.popupData == null ? null : ctx.popupData.contentHeader, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.popupData == null ? null : ctx.popupData.customContents));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.popupData == null ? null : ctx.popupData.customContents) == "agreement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.popupData == null ? null : ctx.popupData.customContents) == "payments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.popupData == null ? null : ctx.popupData.customContents) == "placeBid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.popupData == null ? null : ctx.popupData.customContents) == "change-phone-number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.popupData == null ? null : ctx.popupData.customContents) == "change-address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.popupData == null ? null : ctx.popupData.showFooter);
        }
      },
      directives: [primeng_dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["Header"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], primeng_checkbox__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_6__["RadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], primeng_button__WEBPACK_IMPORTED_MODULE_8__["Button"], primeng_api__WEBPACK_IMPORTED_MODULE_3__["Footer"]],
      pipes: [_safe_html_pipe__WEBPACK_IMPORTED_MODULE_9__["SafeHtmlPipe"]],
      styles: [".container {\n  width: 100%;\n  height: 100%;\n}\n.container p-dialog .content-header {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 27px;\n  color: #2C2C2C;\n  margin-top: 15px;\n  margin-bottom: 30px;\n}\n.container p-dialog p-footer div {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.container p-dialog p-footer div img {\n  width: 50px;\n  height: 50px;\n  margin-top: 30px;\n  cursor: pointer;\n}\n.container p-dialog p-footer div .submit-btn {\n  width: 256px;\n  height: 52px;\n  margin-top: 30px;\n  cursor: pointer;\n}\n.container p-dialog .input-wrapper {\n  margin-bottom: 10px;\n}\n.container p-dialog .input-wrapper .button-label {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 26px;\n  text-align: justify;\n  letter-spacing: 0.01em;\n  color: #F9A369;\n  background-color: #fcfcfc;\n  position: relative;\n  top: 13px;\n  left: 15px;\n}\n.container p-dialog .input-wrapper .ui-inputgroup .ui-inputgroup-addon {\n  position: relative;\n  right: 46px;\n  border: none;\n  background-color: unset;\n}\n.container p-dialog .common-txt {\n  height: 51.44px;\n  border: 1px solid rgba(74, 137, 152, 0.4);\n  border-radius: 10px;\n  padding-left: 15px;\n  padding-right: 48px;\n}\n.container p-dialog input::-moz-placeholder {\n  width: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 26px;\n  text-align: justify;\n  letter-spacing: 0.075em;\n  color: rgba(57, 58, 61, 0.5);\n  background-color: transparent;\n}\n.container p-dialog input[type=text], .container p-dialog input::placeholder {\n  width: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 26px;\n  text-align: justify;\n  letter-spacing: 0.075em;\n  color: rgba(57, 58, 61, 0.5);\n  background-color: transparent;\n}\n.container p-dialog input[type=text]:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px #8dcdff;\n}\n.container p-dialog p-button {\n  width: 375.42px;\n  height: 52px;\n}\n.container p-dialog p-button button {\n  width: 100%;\n  height: 52px;\n  background: #F9A369;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 26px;\n  color: #FCFCFC;\n}\n.container p-dialog p-button ui-button:enabled:active {\n  background-color: #F9A369;\n  color: #ffffff;\n  border-color: #F9A369;\n}\n.container p-dialog p-button .ui-button:enabled:hover {\n  background-color: #F9A369;\n  color: #ffffff;\n  border-color: #F9A369;\n}\n.container p-dialog p-button .ui-button:enabled:focus {\n  outline: 0 none;\n  outline-offset: 0px;\n  box-shadow: 0 0 0 0.2em #F9A369;\n}\n.container p-dialog .place-bid .details {\n  max-width: 450px;\n  margin-top: 95px;\n}\n.container p-dialog .place-bid .details .item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  height: 32px;\n  margin-bottom: 22px;\n}\n.container p-dialog .place-bid .details .item .title-area {\n  display: flex;\n}\n.container p-dialog .place-bid .details .item .title-area label {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 27px;\n  text-align: center;\n  color: #2C2C2C;\n}\n.container p-dialog .place-bid .details .item .val {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 27px;\n  text-align: center;\n  color: #2C2C2C;\n}\n.container p-dialog .place-bid .details .hr-line {\n  width: 100%;\n  height: 0px;\n  border: 1px dashed rgba(0, 0, 0, 0.4);\n  margin-bottom: 22px;\n}\n.container p-dialog .profile-popups {\n  display: flex;\n  flex-direction: column;\n}\n.container p-dialog .profile-popups p-checkbox {\n  margin-left: 25px;\n  margin-bottom: 10px;\n}\n.container p-dialog .profile-popups p-checkbox label {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 20px;\n  color: #444B5C;\n  margin-left: 22px;\n}\n.container p-dialog .profile-popups p-checkbox .ui-chkbox .ui-chkbox {\n  background-color: #F9F9F9;\n}\n.container p-dialog .profile-popups .submit-btn {\n  width: 88px;\n  height: 32px;\n  margin-top: 30px;\n}\n.container p-dialog .profile-popups .submit-btn img {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.container p-dialog .profile-popups .ins {\n  margin-top: 33px;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 20px;\n  color: #444B5C;\n}\n.container p-dialog .profile-popups .ins span {\n  color: #FF0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHMtY29tcG9uZW50cy9wb3B1cC9EOlxcUHJpdmF0ZVxcTnlyb2Jlb25rYVxcZHJlYW0tc3Rha2VzL3NyY1xcYXBwXFxkcy1jb21wb25lbnRzXFxwb3B1cFxccG9wdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RzLWNvbXBvbmVudHMvcG9wdXAvcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FER1E7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RaO0FET1k7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDTmhCO0FEUWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNOcEI7QURTZ0I7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1BwQjtBRGNRO0VBRUksbUJBQUE7QUNiWjtBRGVZO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNiaEI7QURrQmdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDaEJwQjtBRHVCUTtFQUNJLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ3JCWjtBRHdCUTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ3RCWjtBRFlRO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDdEJaO0FEeUJRO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0FDdkJaO0FEMkJRO0VBRUksZUFBQTtFQUNBLFlBQUE7QUMxQlo7QUQ0Qlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUMxQmhCO0FENkJZO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUMzQmhCO0FEOEJZO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUM1QmhCO0FEK0JZO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBR0EsK0JBQUE7QUM3QmhCO0FEcUNZO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtBQ3BDaEI7QURzQ2dCO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDckNwQjtBRHVDb0I7RUFFSSxhQUFBO0FDdEN4QjtBRHdDd0I7RUFFSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUN2QzVCO0FENkNvQjtFQUVJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQzVDeEI7QURtRGdCO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0FDakRwQjtBRHVEUTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtBQ3REWjtBRHdEWTtFQUVJLGlCQUFBO0VBQ0EsbUJBQUE7QUN2RGhCO0FEeURnQjtFQUVJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ3hEcEI7QUQ2RG9CO0VBQ0kseUJBQUE7QUMzRHhCO0FEaUVZO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2hFaEI7QURrRWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDaEVwQjtBRG9FWTtFQUVJLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ25FaEI7QURxRWdCO0VBQ0ksY0FBQTtBQ25FcEIiLCJmaWxlIjoic3JjL2FwcC9kcy1jb21wb25lbnRzL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBwLWRpYWxvZyB7XHJcblxyXG4gICAgICAgIC5jb250ZW50LWhlYWRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzJDMkMyQztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwLWZvb3RlciB7XHJcblxyXG4gICAgICAgICAgICBkaXYge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnN1Ym1pdC1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTZweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlucHV0LXdyYXBwZXIge1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICAgIC5idXR0b24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0Y5QTM2OTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTNweDsgXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudWktaW5wdXRncm91cCB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC51aS1pbnB1dGdyb3VwLWFkZG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb21tb24tdHh0IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MS40NHB4OyBcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3NCwgMTM3LCAxNTIsIDAuNCk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDc1ZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDU3LCA1OCwgNjEsIDAuNSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDE0MSwgMjA1LCAyNTUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHAtYnV0dG9uIHtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAzNzUuNDJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y5QTM2OTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkNGQ0ZDO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1aS1idXR0b246ZW5hYmxlZDphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QTM2OTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjlBMzY5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudWktYnV0dG9uOmVuYWJsZWQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QTM2OTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjlBMzY5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudWktYnV0dG9uOmVuYWJsZWQ6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogMCBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IDBweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4yZW0gI0Y5QTM2OTtcclxuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDAgMC4yZW0gI0Y5QTM2OTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMmVtICNGOUEzNjk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBsYWNlLWJpZCB7XHJcblxyXG4gICAgICAgICAgICAuZGV0YWlscyB7XHJcblxyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDk1cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAudGl0bGUtYXJlYSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMkMyQzJDO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC52YWwge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJDMkMyQztcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhyLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2ZpbGUtcG9wdXBzIHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICBwLWNoZWNrYm94IHtcclxuXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0QjVDO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC51aS1jaGtib3gge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAudWktY2hrYm94IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjlGOTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3VibWl0LWJ0biB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDg4cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmlucyB7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ0QjVDO1xyXG5cclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyAuY29udGVudC1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBjb2xvcjogIzJDMkMyQztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgcC1mb290ZXIgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgcC1mb290ZXIgZGl2IGltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgcC1mb290ZXIgZGl2IC5zdWJtaXQtYnRuIHtcbiAgd2lkdGg6IDI1NnB4O1xuICBoZWlnaHQ6IDUycHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgLmlucHV0LXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyAuaW5wdXQtd3JhcHBlciAuYnV0dG9uLWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICNGOUEzNjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxM3B4O1xuICBsZWZ0OiAxNXB4O1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyAuaW5wdXQtd3JhcHBlciAudWktaW5wdXRncm91cCAudWktaW5wdXRncm91cC1hZGRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDQ2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIC5jb21tb24tdHh0IHtcbiAgaGVpZ2h0OiA1MS40NHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDc0LCAxMzcsIDE1MiwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0OHB4O1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyBpbnB1dFt0eXBlPXRleHRdLCAuY29udGFpbmVyIHAtZGlhbG9nIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNzVlbTtcbiAgY29sb3I6IHJnYmEoNTcsIDU4LCA2MSwgMC41KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIGlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggIzhkY2RmZjtcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgcC1idXR0b24ge1xuICB3aWR0aDogMzc1LjQycHg7XG4gIGhlaWdodDogNTJweDtcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgcC1idXR0b24gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTJweDtcbiAgYmFja2dyb3VuZDogI0Y5QTM2OTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgY29sb3I6ICNGQ0ZDRkM7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIHAtYnV0dG9uIHVpLWJ1dHRvbjplbmFibGVkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUEzNjk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNGOUEzNjk7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIHAtYnV0dG9uIC51aS1idXR0b246ZW5hYmxlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGOUEzNjk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNGOUEzNjk7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIHAtYnV0dG9uIC51aS1idXR0b246ZW5hYmxlZDpmb2N1cyB7XG4gIG91dGxpbmU6IDAgbm9uZTtcbiAgb3V0bGluZS1vZmZzZXQ6IDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjJlbSAjRjlBMzY5O1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCAwIDAuMmVtICNGOUEzNjk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMmVtICNGOUEzNjk7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIC5wbGFjZS1iaWQgLmRldGFpbHMge1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW4tdG9wOiA5NXB4O1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyAucGxhY2UtYmlkIC5kZXRhaWxzIC5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyAucGxhY2UtYmlkIC5kZXRhaWxzIC5pdGVtIC50aXRsZS1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jb250YWluZXIgcC1kaWFsb2cgLnBsYWNlLWJpZCAuZGV0YWlscyAuaXRlbSAudGl0bGUtYXJlYSBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyQzJDMkM7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIC5wbGFjZS1iaWQgLmRldGFpbHMgLml0ZW0gLnZhbCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyQzJDMkM7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIC5wbGFjZS1iaWQgLmRldGFpbHMgLmhyLWxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIC5wcm9maWxlLXBvcHVwcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIC5wcm9maWxlLXBvcHVwcyBwLWNoZWNrYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29udGFpbmVyIHAtZGlhbG9nIC5wcm9maWxlLXBvcHVwcyBwLWNoZWNrYm94IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM0NDRCNUM7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyAucHJvZmlsZS1wb3B1cHMgcC1jaGVja2JveCAudWktY2hrYm94IC51aS1jaGtib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGOUY5O1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyAucHJvZmlsZS1wb3B1cHMgLnN1Ym1pdC1idG4ge1xuICB3aWR0aDogODhweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyAucHJvZmlsZS1wb3B1cHMgLnN1Ym1pdC1idG4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyAucHJvZmlsZS1wb3B1cHMgLmlucyB7XG4gIG1hcmdpbi10b3A6IDMzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNDQ0QjVDO1xufVxuLmNvbnRhaW5lciBwLWRpYWxvZyAucHJvZmlsZS1wb3B1cHMgLmlucyBzcGFuIHtcbiAgY29sb3I6ICNGRjAwMDA7XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-popup',
          templateUrl: './popup.component.html',
          styleUrls: ['./popup.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
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
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        height: [{
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
        this.showTearms = false;
        this.showPrivacyPolicy = false;
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
            nxtButton: true,
            showFooter: true
          }, {
            header: 'DreamStakes Rules & Regulation',
            contentHeader: 'Non-Refundable $100 Entry Fee',
            content: "",
            bckButton: true,
            nxtButton: true,
            customContents: 'agreement',
            showFooter: true
          }, {
            header: 'DreamStakes Rules & Regulation',
            contentHeader: 'Choose Your Payment Method',
            content: "",
            bckButton: true,
            nxtButton: false,
            customContents: 'payments',
            customFooterButton: 'submit',
            showFooter: true
          }];
          this.customPopupContents = [{
            header: 'Terms and conditions',
            contentHeader: 'Terms and conditions ',
            content: "These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Dreamstakes.com accessible at www.dreamstakes.com.<br><br>\n        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions. These Terms and Conditions have been generated with the help of the Terms And Conditiions Sample Generator.<br><br>\n        Minors or people below 18 years old are not allowed to use this Website.<br><br>\n        Your Privacy<br>\n        Please read Privacy Policy.<br><br>\n        No warranties<br>\n        This Website is provided \"as is,\" with all faults, and Dream stakes express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.<br><br>\n        Limitation of liability<br>\n        In no event shall Dream stakes, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Dream stakes, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.<br><br>\n        Indemnification<br>\n        You hereby indemnify to the fullest extent Dream stakes from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.<br><br>\n        Severability<br>\n        If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.<br><br>\n        Variation of Terms<br>\n        Dream stakes is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.<br><br>\n        Assignment<br>\n        The Dream stakes is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.<br><br>\n        Entire Agreement<br>\n        These Terms constitute the entire agreement between Dream stakes and you in relation to your use of this Website, and supersede all prior agreements and understandings.<br><br>\n        Governing Law & Jurisdiction<br>\n        These Terms will be governed by and interpreted in accordance with the laws of the State of af, and you submit to the non-exclusive jurisdiction of the state and federal courts located in af for the resolution of any disputes.\n        ",
            bckButton: false,
            nxtButton: false,
            showFooter: true
          }, {
            header: 'Privacy Policy',
            contentHeader: 'Privacy Policy',
            content: "\n\n          Last updated: 2020-11-06 11:35:26<br>\n\n          We value your privacy very highly. Please read this Privacy Policy carefully before using the www.theloremipsumco.com Website (the \"Website\") operated by The Lorem Ipsum Company, a(n) Corporation formed in California, United States (\"us,\" \"we,\" \"our\") as this Privacy Policy contains important information regarding your privacy and how we may use the information we collect about you.\n          <br>\n          Your access to and use of the Website is conditional upon your acceptance of and compliance with this Privacy Policy. This Privacy Policy applies to everyone, including, but not limited to: visitors, users, and others, who wish to access or use the Website.\n          <br>\n          By accessing or using the Website, you agree to be bound by this Privacy Policy. If you disagree with any part of the Privacy Policy, then you do not have our permission to access or use the Website.\n          <br>\n          We collect any and all information that you enter on this Website. We collect the following information about you:\n          <br>\n\n          Category of information\tSpecific piece of information\n          <ul>\n            <li>Identifying information\tName</li>\n            <li>Identifying information\tPhone number</li>\n            <li>Identifying information\tIP address</li>\n            <li>Identifying information\tEmail address</li>\n            <li>Internet or other electronic activity\tBrowsing history</li>\n            <li>Internet or other electronic activity\tSearch history</li>\n            <li>Internet or other electronic activity\tInformation regarding your interaction with our website or application</li>\n            <li>How we may use your information</li>\n          </ul>\n          <br>\n\n          We may use the information that you provide us for the following:\n          <ul>\n            <li>Marketing and advertising;</li>\n            <li>Participation in surveys and contests;</li>\n            <li>Performing services;</li>\n            <li>Providing customer service;</li>\n            <li>Resolving disputes;</li>\n            <li>Verifying customer information;</li>\n            <li>Analytics.</li>\n            <li>With whom we share your information</li>\n          </ul>\n\n          <br>\n\n          We share your personal information with the following categories of third parties:\n          <ul>\n            <li>Content management systems;</li>\n            <li>Customer management systems;</li>\n            <li>Email marketing vendors;</li>\n            <li>Parties that need to operate the website;</li>\n            <li>Subsidiaries;</li>\n            <li>Data analytics providers;</li>\n            <li>Social networks.</li>\n          </ul>\n        ",
            bckButton: false,
            nxtButton: false,
            showFooter: true
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
              if (!e.customCommand) {
                this.currentPopopWindowIdx = 0;
                this.showDialogUI = false;
              } else {
                if (e.customCommand === 'closeTearms') {
                  this.showTearms = false;
                } else {
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

          if (e.command !== src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showTearms || e.command !== src_app_ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].showPrivacyPolicy) this.currentPopupPage = this.popupData[this.currentPopopWindowIdx];
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
      decls: 34,
      vars: 7,
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-popup", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParent", function EnterScreenComponent_Template_app_popup_notifyParent_32_listener($event) {
            return ctx.recieveFromPopupDialog($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "app-popup", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParent", function EnterScreenComponent_Template_app_popup_notifyParent_33_listener($event) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", ctx.showTearms)("popupData", ctx.customPopupContents[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", ctx.showPrivacyPolicy)("popupData", ctx.customPopupContents[1]);
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


    var _app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app.types */
    "./src/app/app.types.ts");
    /* harmony import */


    var ng_interconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-interconnect */
    "./node_modules/ng-interconnect/__ivy_ngcc__/fesm2015/ng-interconnect.js");
    /* harmony import */


    var _ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ui-containers/left-panal/left-panal.component */
    "./src/app/ui-containers/left-panal/left-panal.component.ts");
    /* harmony import */


    var _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../ui-containers/top-bar/top-bar.component */
    "./src/app/ui-containers/top-bar/top-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../enter-screen/enter-screen.component */
    "./src/app/enter-screen/enter-screen.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../user-profile/user-profile.component */
    "./src/app/user-profile/user-profile.component.ts");
    /* harmony import */


    var _key_locker_key_locker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../key-locker/key-locker.component */
    "./src/app/key-locker/key-locker.component.ts");
    /* harmony import */


    var _ui_containers_right_panal_right_panal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../ui-containers/right-panal/right-panal.component */
    "./src/app/ui-containers/right-panal/right-panal.component.ts");

    function HomeComponent_app_enter_screen_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-enter-screen");
      }
    }

    function HomeComponent_app_dashboard_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard");
      }
    }

    function HomeComponent_app_user_profile_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-profile");
      }
    }

    function HomeComponent_app_key_locker_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-key-locker");
      }
    }

    function HomeComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-right-panal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(interconnect) {
        _classCallCheck(this, HomeComponent);

        this.interconnect = interconnect;
        this.title = 'dream-stakes';
        this.currentMainView = _app_types__WEBPACK_IMPORTED_MODULE_1__["MainViews"].dashboard;
        this.rightPanal = false;
        this._MainViews = _app_types__WEBPACK_IMPORTED_MODULE_1__["MainViews"];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          //--------------- Home UI Listeners --------------------//
          this.interconnect.createListener('home/changeView', function (_connection, command) {
            _this2.currentMainView = command.mainView;
            if (_this2.currentMainView === _this2._MainViews.dashboard) _this2.rightPanal = true;else _this2.rightPanal = false;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_interconnect__WEBPACK_IMPORTED_MODULE_2__["Interconnect"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 12,
      vars: 5,
      consts: [[1, "home"], [1, "left-panal"], [1, "content"], [1, "top-bar"], [1, "client-area"], [4, "ngIf"], ["class", "right-panal", 4, "ngIf"], [1, "right-panal"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_app_enter_screen_7_Template, 1, 0, "app-enter-screen", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_app_dashboard_8_Template, 1, 0, "app-dashboard", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_app_user_profile_9_Template, 1, 0, "app-user-profile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HomeComponent_app_key_locker_10_Template, 1, 0, "app-key-locker", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_11_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMainView === ctx._MainViews.enterScreen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMainView === ctx._MainViews.dashboard);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMainView === ctx._MainViews.userProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMainView === ctx._MainViews.keyLocker);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rightPanal);
        }
      },
      directives: [_ui_containers_left_panal_left_panal_component__WEBPACK_IMPORTED_MODULE_3__["LeftPanalComponent"], _ui_containers_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_4__["TopBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _enter_screen_enter_screen_component__WEBPACK_IMPORTED_MODULE_6__["EnterScreenComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"], _key_locker_key_locker_component__WEBPACK_IMPORTED_MODULE_9__["KeyLockerComponent"], _ui_containers_right_panal_right_panal_component__WEBPACK_IMPORTED_MODULE_10__["RightPanalComponent"]],
      styles: [".home[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n.home[_ngcontent-%COMP%]   .left-panal[_ngcontent-%COMP%] {\n  width: 230px;\n  float: left;\n  height: 100%;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 100%;\n}\n.home[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .client-area[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 875px;\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: relative;\n}\n.home[_ngcontent-%COMP%]   .right-panal[_ngcontent-%COMP%] {\n  width: 343px;\n  height: 100%;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUHJpdmF0ZVxcTnlyb2Jlb25rYVxcZHJlYW0tc3Rha2VzL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSjtBREVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQVI7QURJSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDRlI7QURJUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNGWjtBRE9JO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxuICAgIC5sZWZ0LXBhbmFse1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5jbGllbnQtYXJlYXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogODc1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJpZ2h0LXBhbmFsIHtcclxuICAgICAgICB3aWR0aDogMzQzcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgfVxyXG5cclxufSIsIi5ob21lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ob21lIC5sZWZ0LXBhbmFsIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmhvbWUgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ob21lIC5jb250ZW50IC5jbGllbnQtYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDg3NXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhvbWUgLnJpZ2h0LXBhbmFsIHtcbiAgd2lkdGg6IDM0M3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xufSJdfQ== */"]
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
        return [{
          type: ng_interconnect__WEBPACK_IMPORTED_MODULE_2__["Interconnect"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/key-locker/key-locker.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/key-locker/key-locker.component.ts ***!
    \****************************************************/

  /*! exports provided: KeyLockerComponent */

  /***/
  function srcAppKeyLockerKeyLockerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyLockerComponent", function () {
      return KeyLockerComponent;
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


    var primeng_tabview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! primeng/tabview */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-tabview.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
    /* harmony import */


    var primeng_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! primeng/chart */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-chart.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");

    var _c0 = ["agGrid"];

    function KeyLockerComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-tabView");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-tabPanel", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ag-grid-angular", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p-tabPanel", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ag-grid-angular", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx_r0.activeRowData)("columnDefs", ctx_r0.activeColumnDefs);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx_r0.closeRowData)("columnDefs", ctx_r0.closeColumnDefs);
      }
    }

    function KeyLockerComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-chart", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.data)("height", 550)("options", ctx_r1.chartOptions);
      }
    }

    function KeyLockerComponent_div_4_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var anInvite_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", anInvite_r9.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", anInvite_r9.email, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", anInvite_r9.status == "Pending" ? "#D9534F" : "#5CB85C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", anInvite_r9.status, " ");
      }
    }

    function KeyLockerComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Successful Invites ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sent Invites ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, KeyLockerComponent_div_4_div_7_Template, 8, 5, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Referrals ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Refer a friend Give $10, Get $10 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Spread the Summersalt love! You\u2019ll get $10 for each friend who orders. Only new customers are valid for the referral. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.invites);
      }
    }

    function KeyLockerComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bid Placed ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function KeyLockerComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contracts Won ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function KeyLockerComponent_div_8_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 39);
      }

      if (rf & 2) {
        var aCard_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", aCard_r10.infoIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function KeyLockerComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KeyLockerComponent_div_8_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var aCard_r10 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.viewChange(aCard_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, KeyLockerComponent_div_8_img_7_Template, 1, 1, "img", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var aCard_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", aCard_r10.background ? "selected-item" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", aCard_r10.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", aCard_r10.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", aCard_r10.info, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", aCard_r10.infoIcon);
      }
    }

    var KeyLockerComponent = /*#__PURE__*/function () {
      function KeyLockerComponent() {
        _classCallCheck(this, KeyLockerComponent);

        this.currentView = "Entries";
        this.activeColumnDefs = [{
          headerName: '#ID',
          field: 'ID',
          width: 100,
          resizable: true,
          sort: 'asc'
        }, {
          headerName: 'Room Number',
          field: 'RoomNumber',
          width: 200,
          resizable: true,
          sort: 'asc'
        }, {
          headerName: 'Highest Bid',
          field: 'HighestBid',
          width: 200,
          resizable: true,
          sort: 'asc'
        }, {
          headerName: 'Capacity Meter',
          field: 'CapacityMeter',
          width: 200,
          resizable: true,
          sort: 'asc'
        }, {
          headerName: 'Timer',
          field: 'Timer',
          width: 200,
          resizable: true,
          sort: 'asc'
        }, {
          headerName: '',
          field: 'actBtn',
          width: 200,
          resizable: true,
          sort: 'asc',
          cellRenderer: this.buttonRenderer
        }];
        this.activeRowData = [{
          ID: '1.1',
          RoomNumber: '1.1-4',
          HighestBid: '$629.43',
          CapacityMeter: '100%',
          Timer: '28:36:17'
        }, {
          ID: '8.2',
          RoomNumber: '8.2-3',
          HighestBid: '$231.50',
          CapacityMeter: '80%',
          Timer: '-'
        }, {
          ID: '1.1',
          RoomNumber: '1.1-4',
          HighestBid: '$629.43',
          CapacityMeter: '100%',
          Timer: '28:36:17'
        }, {
          ID: '8.2',
          RoomNumber: '8.2-3',
          HighestBid: '$231.50',
          CapacityMeter: '80%',
          Timer: '-'
        }, {
          ID: '1.1',
          RoomNumber: '1.1-4',
          HighestBid: '$629.43',
          CapacityMeter: '100%',
          Timer: '28:36:17'
        }, {
          ID: '8.2',
          RoomNumber: '8.2-3',
          HighestBid: '$231.50',
          CapacityMeter: '80%',
          Timer: '-'
        }, {
          ID: '1.1',
          RoomNumber: '1.1-4',
          HighestBid: '$629.43',
          CapacityMeter: '100%',
          Timer: '28:36:17'
        }, {
          ID: '8.2',
          RoomNumber: '8.2-3',
          HighestBid: '$231.50',
          CapacityMeter: '80%',
          Timer: '-'
        }];
        this.closeColumnDefs = [{
          headerName: '#ID',
          field: 'ID',
          width: 100,
          resizable: true,
          sort: 'asc'
        }, {
          headerName: 'Room Number',
          field: 'RoomNumber',
          width: 200,
          resizable: true,
          sort: 'asc'
        }, {
          headerName: 'Winning Bid',
          field: 'WinningBid',
          width: 200,
          resizable: true,
          sort: 'asc'
        }, {
          headerName: 'Total Bids',
          field: 'TotalBids',
          width: 200,
          resizable: true,
          sort: 'asc'
        }, {
          headerName: 'Closed',
          field: 'Closed',
          width: 200,
          resizable: true,
          sort: 'asc',
          cellRenderer: this.buttonRenderer
        }, {
          headerName: 'Claim Status',
          field: 'ClaimStatus',
          width: 200,
          resizable: true,
          sort: 'asc',
          cellRenderer: this.buttonRenderer
        }];
        this.closeRowData = [{
          ID: '1.2',
          RoomNumber: '1.2-4',
          WinningBid: '$629.43',
          TotalBids: '100',
          Closed: '',
          ClaimStatus: 'Pending'
        }, {
          ID: '1.2',
          RoomNumber: '1.2-4',
          WinningBid: '$629.43',
          TotalBids: '100',
          Closed: '',
          ClaimStatus: 'Pending'
        }, {
          ID: '1.2',
          RoomNumber: '1.2-4',
          WinningBid: '$629.43',
          TotalBids: '100',
          Closed: '',
          ClaimStatus: 'Pending'
        }, {
          ID: '1.2',
          RoomNumber: '1.2-4',
          WinningBid: '$629.43',
          TotalBids: '100',
          Closed: '',
          ClaimStatus: 'Claimed'
        }, {
          ID: '1.2',
          RoomNumber: '1.2-4',
          WinningBid: '$629.43',
          TotalBids: '100',
          Closed: '',
          ClaimStatus: 'Pending'
        }, {
          ID: '1.2',
          RoomNumber: '1.2-4',
          WinningBid: '$629.43',
          TotalBids: '100',
          Closed: '',
          ClaimStatus: 'Claimed'
        }, {
          ID: '1.2',
          RoomNumber: '1.2-4',
          WinningBid: '$629.43',
          TotalBids: '100',
          Closed: '',
          ClaimStatus: 'Claimed'
        }, {
          ID: '1.2',
          RoomNumber: '1.2-4',
          WinningBid: '$629.43',
          TotalBids: '100',
          Closed: '',
          ClaimStatus: 'Pending'
        }];
        this.cards = [{
          icon: './assets/dasboard/home.png',
          title: 'Entries',
          info: '35',
          infoIcon: '',
          background: './assets/key-locker/selected-background.png'
        }, {
          icon: './assets/dasboard/users.png',
          title: 'Cash Spent',
          info: '$3,435',
          infoIcon: ''
        }, {
          icon: './assets/dasboard/users.png',
          title: 'Successful Invites',
          info: '189',
          infoIcon: ''
        }, {
          icon: './assets/dasboard/settings.png',
          title: 'Bid Placed',
          info: '50',
          infoIcon: ''
        }, {
          icon: './assets/dasboard/send.png',
          title: 'Contracts Won',
          info: '187',
          infoIcon: ''
        }];
        this.invites = [{
          name: 'Sasha Manin',
          email: 'Sashamaanin@hotmail.com',
          status: 'Joined'
        }, {
          name: 'Sasha Manin',
          email: 'Sashamaanin@hotmail.com',
          status: 'Pending'
        }, {
          name: 'Sasha Manin',
          email: 'Sashamaanin@hotmail.com',
          status: 'Joined'
        }, {
          name: 'Sasha Manin',
          email: 'Sashamaanin@hotmail.com',
          status: 'Joined'
        }, {
          name: 'Sasha Manin',
          email: 'Sashamaanin@hotmail.com',
          status: 'Pending'
        }, {
          name: 'Sasha Manin',
          email: 'Sashamaanin@hotmail.com',
          status: 'Joined'
        }];
        this.data = {
          labels: ['08/2023', '09/2023', '10/2023', '11/2023', '12/2023', '13/2023', '14/2023'],
          datasets: [{
            data: [50, 150, 150, 200, 500, 500, 800],
            fill: false,
            borderColor: '#F9A369',
            pointBackgroundColor: '#72CDC2',
            pointBorderColor: '#72CDC2',
            lineTension: 0
          }]
        };
        this.chartOptions = {
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          scales: {
            x: [{
              ticks: {
                padding: {
                  left: 20
                }
              }
            }]
          }
        };
      }

      _createClass(KeyLockerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.agGrid) this.agGrid.getRowHeight = function () {
            return 55;
          };
        }
      }, {
        key: "buttonRenderer",
        value: function buttonRenderer(params) {
          var ui = document.createElement('div');
          ui.style['display'] = 'flex';
          ui.style['flex-direction'] = 'column';
          ui.style['align-items'] = 'center';
          ui.style['justify-content'] = 'center';
          ui.style.width = '100%';
          ui.style['text-align'] = 'center';
          ui.style['font-family'] = 'Open Sans';
          ui.style['font-style'] = 'normal';
          ui.style['font-weight'] = '600';
          ui.style['font-size'] = '16px';
          ui.style['line-height'] = '22px';
          ui.style['letter-spacing'] = '0.01em';
          ui.style['text-decoration-line'] = 'underline';
          ui.style['color'] = '#F9A369';
          ui.style['cursor'] = 'pointer';
          if (params.colDef.field === 'actBtn') ui.innerHTML = 'Observe';else if (params.colDef.field === 'Closed') {
            ui.innerHTML = 'Review';
          } else if (params.colDef.field === 'ClaimStatus') {
            if (params.data.ClaimStatus.toLowerCase() === 'pending') ui.style['color'] = '#D9534F';else ui.style['color'] = '#5CB85C';
            ui.innerHTML = params.data.ClaimStatus;
            ui.style['text-decoration-line'] = 'unset';
          }
          return ui;
        }
      }, {
        key: "viewChange",
        value: function viewChange(aCard) {
          this.currentView = aCard.title;
          this.cards.forEach(function (el) {
            if (el.title === aCard.title) el.background = './assets/key-locker/selected-background.png';else el.background = '';
          });
        }
      }]);

      return KeyLockerComponent;
    }();

    KeyLockerComponent.ɵfac = function KeyLockerComponent_Factory(t) {
      return new (t || KeyLockerComponent)();
    };

    KeyLockerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KeyLockerComponent,
      selectors: [["app-key-locker"]],
      viewQuery: function KeyLockerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.agGrid = _t.first);
        }
      },
      decls: 9,
      vars: 6,
      consts: [[1, "keylocaker-container"], [1, "details-area"], ["class", "entries", "style", "height: 100%;", 4, "ngIf"], ["class", "cash-spent", "style", "height: 100%;", 4, "ngIf"], ["class", "invites", "style", "height: 100%;", 4, "ngIf"], ["style", "height: 100%;", 4, "ngIf"], [1, "cards-area"], ["class", "a-card", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "entries", 2, "height", "100%"], ["header", "Your Active Bidding Rooms"], [1, "common-ag-grid-styles", 2, "width", "100%", "height", "100%"], [1, "ag-theme-alpine", 2, "width", "100%", "height", "100%", "font-size", "12px", 3, "rowData", "columnDefs"], ["agGrid", ""], ["header", "Closed Stats"], [1, "cash-spent", 2, "height", "100%"], ["type", "line", 3, "data", "height", "options"], [1, "invites", 2, "height", "100%"], [1, "list-area"], [1, "header"], [1, "sub-header"], [1, "list"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "ref-area"], [1, "send-invites"], [1, "title"], [1, "info"], [1, "act-area"], ["id", "input", "type", "text", "size", "30", "pInputText", "", "placeholder", "Your Friends\u2019 emails (separated by commas)"], ["src", "./assets/key-locker/btn-send.png"], [1, "line"], [1, "share"], ["src", "./assets/key-locker/social-media-icons.png"], [1, "item"], [1, "username"], [1, "email"], [1, "status"], [2, "height", "100%"], [1, "a-card", 3, "ngClass", "click"], [1, "icon"], [3, "src"], [3, "src", 4, "ngIf"]],
      template: function KeyLockerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KeyLockerComponent_div_2_Template, 10, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, KeyLockerComponent_div_3_Template, 2, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KeyLockerComponent_div_4_Template, 22, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KeyLockerComponent_div_5_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, KeyLockerComponent_div_6_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, KeyLockerComponent_div_8_Template, 8, 5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentView == "Entries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentView == "Cash Spent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentView == "Successful Invites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentView == "Bid Placed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentView == "Contracts Won");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], primeng_tabview__WEBPACK_IMPORTED_MODULE_2__["TabView"], primeng_tabview__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridAngular"], primeng_chart__WEBPACK_IMPORTED_MODULE_4__["UIChart"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".keylocaker-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 40px 40px 0px 40px;\n}\n.keylocaker-container .top-bar {\n  width: 100%;\n  height: 45px;\n}\n.keylocaker-container .details-area {\n  width: 100%;\n  flex-grow: 1;\n}\n.keylocaker-container .details-area .entries p-tabview .ui-tabview {\n  height: 93%;\n}\n.keylocaker-container .details-area .entries p-tabview .ui-tabview .ui-tabview-nav li.ui-state-active {\n  background-color: unset;\n  border: unset;\n  border-bottom: 2px solid #95CED1;\n}\n.keylocaker-container .details-area .entries p-tabview .ui-tabview .ui-tabview-nav li.ui-state-active .ui-tabview-title {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 22px;\n  letter-spacing: 0.01em;\n  color: #393A3D !important;\n}\n.keylocaker-container .details-area .entries p-tabview .ui-tabview .ui-tabview-nav li {\n  background-color: unset;\n  border: none;\n}\n.keylocaker-container .details-area .entries p-tabview .ui-tabview .ui-tabview-nav li:hover {\n  background-color: unset;\n  border: none;\n}\n.keylocaker-container .details-area .entries p-tabview .ui-tabview .ui-tabview-panels {\n  height: 100%;\n  padding: unset;\n}\n.keylocaker-container .details-area .entries p-tabview .ui-tabview .ui-tabview-panels .ui-tabview-panel {\n  height: 100%;\n}\n.keylocaker-container .details-area .invites {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n.keylocaker-container .details-area .invites .list-area {\n  width: 50%;\n}\n.keylocaker-container .details-area .invites .list-area .header {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 20px;\n  color: #2E2E2E;\n}\n.keylocaker-container .details-area .invites .list-area .sub-header {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 22px;\n  letter-spacing: 0.01em;\n  color: #0B1023;\n  margin-top: 77px;\n  margin-left: 33px;\n}\n.keylocaker-container .details-area .invites .list-area .list {\n  overflow-y: auto;\n}\n.keylocaker-container .details-area .invites .list-area .list .item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  height: 38px;\n  margin-bottom: 25px;\n  max-width: 425px;\n  margin-left: 33px;\n  margin-top: 26px;\n}\n.keylocaker-container .details-area .invites .list-area .list .item .details-area {\n  flex-grow: 1;\n}\n.keylocaker-container .details-area .invites .list-area .list .item .details-area .username {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  color: #F9A369;\n}\n.keylocaker-container .details-area .invites .list-area .list .item .details-area .email {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 15px;\n  color: #393A3D;\n}\n.keylocaker-container .details-area .invites .list-area .list .item .status {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 50px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n}\n.keylocaker-container .details-area .invites .ref-area {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n}\n.keylocaker-container .details-area .invites .ref-area .header {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 30px;\n  line-height: 22px;\n  letter-spacing: 0.01em;\n  color: #0B1023;\n  margin-bottom: 48px;\n  margin-top: -15px;\n}\n.keylocaker-container .details-area .invites .ref-area .send-invites {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 459px;\n  height: 302px;\n  background: #FFEBEB;\n}\n.keylocaker-container .details-area .invites .ref-area .send-invites .title {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 22px;\n  letter-spacing: 0.01em;\n  color: #F9A369;\n  margin-bottom: 38px;\n}\n.keylocaker-container .details-area .invites .ref-area .send-invites .info {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 22px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #2E2E2E;\n  margin-bottom: 32px;\n}\n.keylocaker-container .details-area .invites .ref-area .send-invites .act-area {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 39px;\n  margin-bottom: 22px;\n}\n.keylocaker-container .details-area .invites .ref-area .send-invites .act-area input {\n  width: 294px;\n  height: 39px;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 22px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #5B5B5B;\n}\n.keylocaker-container .details-area .invites .ref-area .send-invites .act-area img {\n  width: 99px;\n  height: 39px;\n}\n.keylocaker-container .details-area .invites .ref-area .send-invites .line {\n  width: 393px;\n  height: 1px;\n  background-color: rgba(44, 44, 44, 0.2);\n  margin-bottom: 22px;\n}\n.keylocaker-container .details-area .invites .ref-area .send-invites .share {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.keylocaker-container .cards-area {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 235px;\n  max-width: 1050px;\n  padding: 3px;\n  justify-content: space-between;\n}\n.keylocaker-container .cards-area .a-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 174px;\n  height: 188px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  padding: 10px 0px 10px 0px;\n  cursor: pointer;\n}\n.keylocaker-container .cards-area .a-card .icon {\n  width: 64px;\n  height: 64px;\n}\n.keylocaker-container .cards-area .a-card .icon img {\n  width: 100%;\n  height: 100%;\n}\n.keylocaker-container .cards-area .a-card .title {\n  width: 100%;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #79778A;\n  text-align: center;\n}\n.keylocaker-container .cards-area .a-card .info {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 23px;\n  line-height: 20px;\n  color: #95CED1;\n}\n.keylocaker-container .cards-area .a-card .info img {\n  width: 13px;\n  height: 13px;\n  margin-left: 3px;\n}\n.keylocaker-container .cards-area .selected-item {\n  background-image: url('assets/key-locker/selected-background.png');\n}\n.keylocaker-container .cards-area .selected-item .title {\n  color: #0093B2 !important;\n}\n.keylocaker-container .cards-area .selected-item .info {\n  color: #0093B2 !important;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2V5LWxvY2tlci9EOlxcUHJpdmF0ZVxcTnlyb2Jlb25rYVxcZHJlYW0tc3Rha2VzL3NyY1xcYXBwXFxrZXktbG9ja2VyXFxrZXktbG9ja2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9rZXktbG9ja2VyL2tleS1sb2NrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FDQUo7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQVI7QURHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRFI7QURPZ0I7RUFDSSxXQUFBO0FDTHBCO0FET29CO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUNMeEI7QURPd0I7RUFFSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDTjVCO0FEVW9CO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FDUnhCO0FEV29CO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FDVHhCO0FEWW9CO0VBRUksWUFBQTtFQUNBLGNBQUE7QUNYeEI7QURhd0I7RUFDSSxZQUFBO0FDWDVCO0FEd0JRO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ3ZCWjtBRHlCWTtFQUVJLFVBQUE7QUN4QmhCO0FEMEJnQjtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUN4QnBCO0FEMkJnQjtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUN6QnBCO0FENEJnQjtFQUVJLGdCQUFBO0FDM0JwQjtBRDZCb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUMzQnhCO0FENkJ3QjtFQUVJLFlBQUE7QUM1QjVCO0FEOEI0QjtFQUVJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUM3QmhDO0FEa0M0QjtFQUVJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNqQ2hDO0FEd0N3QjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3RDNUI7QUQ4Q1k7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQzdDaEI7QUQrQ2dCO0VBRUksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQzlDcEI7QURrRGdCO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNqRHBCO0FEbURvQjtFQUVJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDbER4QjtBRHNEb0I7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDcER4QjtBRHVEb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ3JEeEI7QUR1RHdCO0VBRUksWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ3RENUI7QUR5RHdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUN2RDVCO0FEMkRvQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7RUFDQSxtQkFBQTtBQ3pEeEI7QUQ0RG9CO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUMxRHhCO0FEc0VJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ3BFUjtBRHNFUTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ3JFWjtBRHVFWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDckVoQjtBRHVFZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ3JFcEI7QUR5RVk7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDdkVoQjtBRDBFWTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUN6RWhCO0FEMkVnQjtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUMxRXBCO0FEZ0ZRO0VBQ0ksa0VBQUE7QUM5RVo7QURnRlk7RUFDSSx5QkFBQTtBQzlFaEI7QURpRlk7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FDL0VoQiIsImZpbGUiOiJzcmMvYXBwL2tleS1sb2NrZXIva2V5LWxvY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rZXlsb2Nha2VyLWNvbnRhaW5lciB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDQwcHggNDBweCAwcHggNDBweDtcclxuXHJcbiAgICAudG9wLWJhciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWxzLWFyZWEge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgICAgICAgLmVudHJpZXMge1xyXG5cclxuICAgICAgICAgICAgcC10YWJ2aWV3IHtcclxuXHJcbiAgICAgICAgICAgICAgICAudWktdGFidmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5MyU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC51aS10YWJ2aWV3LW5hdiBsaS51aS1zdGF0ZS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5NUNFRDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudWktdGFidmlldy10aXRsZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzkzQTNEICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC51aS10YWJ2aWV3LW5hdiBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudWktdGFidmlldy1uYXYgbGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC51aS10YWJ2aWV3LXBhbmVscyB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiB1bnNldDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudWktdGFidmlldy1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmludml0ZXMge1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAubGlzdC1hcmVhIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyRTJFMkU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5zdWItaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwQjEwMjM7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNzdweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmxpc3Qge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjZweDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbHMtYXJlYSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXNlcm5hbWUge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRjlBMzY5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lbWFpbCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzOTNBM0Q7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmVmLWFyZWEge1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMEIxMDIzO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zZW5kLWludml0ZXMge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDU5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZFQkVCO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGl0bGUge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRjlBMzY5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyRTJFMkU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYWN0LWFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjJweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjk0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1QjVCNUI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzkzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ0LCA0NCwgNDQsIDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuc2hhcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZHMtYXJlYXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMzVweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwNTBweDtcclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAuYS1jYXJkIHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTc0cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTg4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjRweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCZSBWaWV0bmFtIFBybyc7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc5Nzc4QTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmluZm8ge1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmUgVmlldG5hbSBQcm8nO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5NUNFRDE7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VsZWN0ZWQtaXRlbSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnXmFzc2V0cy9rZXktbG9ja2VyL3NlbGVjdGVkLWJhY2tncm91bmQucG5nJyk7XHJcblxyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwOTNCMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwOTNCMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiLmtleWxvY2FrZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNDBweCA0MHB4IDBweCA0MHB4O1xufVxuLmtleWxvY2FrZXItY29udGFpbmVyIC50b3AtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDVweDtcbn1cbi5rZXlsb2Nha2VyLWNvbnRhaW5lciAuZGV0YWlscy1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5rZXlsb2Nha2VyLWNvbnRhaW5lciAuZGV0YWlscy1hcmVhIC5lbnRyaWVzIHAtdGFidmlldyAudWktdGFidmlldyB7XG4gIGhlaWdodDogOTMlO1xufVxuLmtleWxvY2FrZXItY29udGFpbmVyIC5kZXRhaWxzLWFyZWEgLmVudHJpZXMgcC10YWJ2aWV3IC51aS10YWJ2aWV3IC51aS10YWJ2aWV3LW5hdiBsaS51aS1zdGF0ZS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgYm9yZGVyOiB1bnNldDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM5NUNFRDE7XG59XG4ua2V5bG9jYWtlci1jb250YWluZXIgLmRldGFpbHMtYXJlYSAuZW50cmllcyBwLXRhYnZpZXcgLnVpLXRhYnZpZXcgLnVpLXRhYnZpZXctbmF2IGxpLnVpLXN0YXRlLWFjdGl2ZSAudWktdGFidmlldy10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzkzQTNEICFpbXBvcnRhbnQ7XG59XG4ua2V5bG9jYWtlci1jb250YWluZXIgLmRldGFpbHMtYXJlYSAuZW50cmllcyBwLXRhYnZpZXcgLnVpLXRhYnZpZXcgLnVpLXRhYnZpZXctbmF2IGxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5rZXlsb2Nha2VyLWNvbnRhaW5lciAuZGV0YWlscy1hcmVhIC5lbnRyaWVzIHAtdGFidmlldyAudWktdGFidmlldyAudWktdGFidmlldy1uYXYgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgYm9yZGVyOiBub25lO1xufVxuLmtleWxvY2FrZXItY29udGFpbmVyIC5kZXRhaWxzLWFyZWEgLmVudHJpZXMgcC10YWJ2aWV3IC51aS10YWJ2aWV3IC51aS10YWJ2aWV3LXBhbmVscyB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogdW5zZXQ7XG59XG4ua2V5bG9jYWtlci1jb250YWluZXIgLmRldGFpbHMtYXJlYSAuZW50cmllcyBwLXRhYnZpZXcgLnVpLXRhYnZpZXcgLnVpLXRhYnZpZXctcGFuZWxzIC51aS10YWJ2aWV3LXBhbmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmtleWxvY2FrZXItY29udGFpbmVyIC5kZXRhaWxzLWFyZWEgLmludml0ZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbn1cbi5rZXlsb2Nha2VyLWNvbnRhaW5lciAuZGV0YWlscy1hcmVhIC5pbnZpdGVzIC5saXN0LWFyZWEge1xuICB3aWR0aDogNTAlO1xufVxuLmtleWxvY2FrZXItY29udGFpbmVyIC5kZXRhaWxzLWFyZWEgLmludml0ZXMgLmxpc3QtYXJlYSAuaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICMyRTJFMkU7XG59XG4ua2V5bG9jYWtlci1jb250YWluZXIgLmRldGFpbHMtYXJlYSAuaW52aXRlcyAubGlzdC1hcmVhIC5zdWItaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwQjEwMjM7XG4gIG1hcmdpbi10b3A6IDc3cHg7XG4gIG1hcmdpbi1sZWZ0OiAzM3B4O1xufVxuLmtleWxvY2FrZXItY29udGFpbmVyIC5kZXRhaWxzLWFyZWEgLmludml0ZXMgLmxpc3QtYXJlYSAubGlzdCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ua2V5bG9jYWtlci1jb250YWluZXIgLmRldGFpbHMtYXJlYSAuaW52aXRlcyAubGlzdC1hcmVhIC5saXN0IC5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBtYXgtd2lkdGg6IDQyNXB4O1xuICBtYXJnaW4tbGVmdDogMzNweDtcbiAgbWFyZ2luLXRvcDogMjZweDtcbn1cbi5rZXlsb2Nha2VyLWNvbnRhaW5lciAuZGV0YWlscy1hcmVhIC5pbnZpdGVzIC5saXN0LWFyZWEgLmxpc3QgLml0ZW0gLmRldGFpbHMtYXJlYSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5rZXlsb2Nha2VyLWNvbnRhaW5lciAuZGV0YWlscy1hcmVhIC5pbnZpdGVzIC5saXN0LWFyZWEgLmxpc3QgLml0ZW0gLmRldGFpbHMtYXJlYSAudXNlcm5hbWUge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgY29sb3I6ICNGOUEzNjk7XG59XG4ua2V5bG9jYWtlci1jb250YWluZXIgLmRldGFpbHMtYXJlYSAuaW52aXRlcyAubGlzdC1hcmVhIC5saXN0IC5pdGVtIC5kZXRhaWxzLWFyZWEgLmVtYWlsIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjMzkzQTNEO1xufVxuLmtleWxvY2FrZXItY29udGFpbmVyIC5kZXRhaWxzLWFyZWEgLmludml0ZXMgLmxpc3QtYXJlYSAubGlzdCAuaXRlbSAuc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1MHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5rZXlsb2Nha2VyLWNvbnRhaW5lciAuZGV0YWlscy1hcmVhIC5pbnZpdGVzIC5yZWYtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNTAlO1xufVxuLmtleWxvY2FrZXItY29udGFpbmVyIC5kZXRhaWxzLWFyZWEgLmludml0ZXMgLnJlZi1hcmVhIC5oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzBCMTAyMztcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG4ua2V5bG9jYWtlci1jb250YWluZXIgLmRldGFpbHMtYXJlYSAuaW52aXRlcyAucmVmLWFyZWEgLnNlbmQtaW52aXRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDU5cHg7XG4gIGhlaWdodDogMzAycHg7XG4gIGJhY2tncm91bmQ6ICNGRkVCRUI7XG59XG4ua2V5bG9jYWtlci1jb250YWluZXIgLmRldGFpbHMtYXJlYSAuaW52aXRlcyAucmVmLWFyZWEgLnNlbmQtaW52aXRlcyAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogI0Y5QTM2OTtcbiAgbWFyZ2luLWJvdHRvbTogMzhweDtcbn1cbi5rZXlsb2Nha2VyLWNvbnRhaW5lciAuZGV0YWlscy1hcmVhIC5pbnZpdGVzIC5yZWYtYXJlYSAuc2VuZC1pbnZpdGVzIC5pbmZvIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzJFMkUyRTtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbi5rZXlsb2Nha2VyLWNvbnRhaW5lciAuZGV0YWlscy1hcmVhIC5pbnZpdGVzIC5yZWYtYXJlYSAuc2VuZC1pbnZpdGVzIC5hY3QtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzOXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuLmtleWxvY2FrZXItY29udGFpbmVyIC5kZXRhaWxzLWFyZWEgLmludml0ZXMgLnJlZi1hcmVhIC5zZW5kLWludml0ZXMgLmFjdC1hcmVhIGlucHV0IHtcbiAgd2lkdGg6IDI5NHB4O1xuICBoZWlnaHQ6IDM5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICM1QjVCNUI7XG59XG4ua2V5bG9jYWtlci1jb250YWluZXIgLmRldGFpbHMtYXJlYSAuaW52aXRlcyAucmVmLWFyZWEgLnNlbmQtaW52aXRlcyAuYWN0LWFyZWEgaW1nIHtcbiAgd2lkdGg6IDk5cHg7XG4gIGhlaWdodDogMzlweDtcbn1cbi5rZXlsb2Nha2VyLWNvbnRhaW5lciAuZGV0YWlscy1hcmVhIC5pbnZpdGVzIC5yZWYtYXJlYSAuc2VuZC1pbnZpdGVzIC5saW5lIHtcbiAgd2lkdGg6IDM5M3B4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NCwgNDQsIDQ0LCAwLjIpO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xufVxuLmtleWxvY2FrZXItY29udGFpbmVyIC5kZXRhaWxzLWFyZWEgLmludml0ZXMgLnJlZi1hcmVhIC5zZW5kLWludml0ZXMgLnNoYXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ua2V5bG9jYWtlci1jb250YWluZXIgLmNhcmRzLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMzVweDtcbiAgbWF4LXdpZHRoOiAxMDUwcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmtleWxvY2FrZXItY29udGFpbmVyIC5jYXJkcy1hcmVhIC5hLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3NHB4O1xuICBoZWlnaHQ6IDE4OHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmtleWxvY2FrZXItY29udGFpbmVyIC5jYXJkcy1hcmVhIC5hLWNhcmQgLmljb24ge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuLmtleWxvY2FrZXItY29udGFpbmVyIC5jYXJkcy1hcmVhIC5hLWNhcmQgLmljb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5rZXlsb2Nha2VyLWNvbnRhaW5lciAuY2FyZHMtYXJlYSAuYS1jYXJkIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogXCJCZSBWaWV0bmFtIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNzk3NzhBO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ua2V5bG9jYWtlci1jb250YWluZXIgLmNhcmRzLWFyZWEgLmEtY2FyZCAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzk1Q0VEMTtcbn1cbi5rZXlsb2Nha2VyLWNvbnRhaW5lciAuY2FyZHMtYXJlYSAuYS1jYXJkIC5pbmZvIGltZyB7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG4ua2V5bG9jYWtlci1jb250YWluZXIgLmNhcmRzLWFyZWEgLnNlbGVjdGVkLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJeYXNzZXRzL2tleS1sb2NrZXIvc2VsZWN0ZWQtYmFja2dyb3VuZC5wbmdcIik7XG59XG4ua2V5bG9jYWtlci1jb250YWluZXIgLmNhcmRzLWFyZWEgLnNlbGVjdGVkLWl0ZW0gLnRpdGxlIHtcbiAgY29sb3I6ICMwMDkzQjIgIWltcG9ydGFudDtcbn1cbi5rZXlsb2Nha2VyLWNvbnRhaW5lciAuY2FyZHMtYXJlYSAuc2VsZWN0ZWQtaXRlbSAuaW5mbyB7XG4gIGNvbG9yOiAjMDA5M0IyICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyLockerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-key-locker',
          templateUrl: './key-locker.component.html',
          styleUrls: ['./key-locker.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [];
      }, {
        agGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['agGrid', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/safe-html.pipe.ts":
  /*!***********************************!*\
    !*** ./src/app/safe-html.pipe.ts ***!
    \***********************************/

  /*! exports provided: SafeHtmlPipe */

  /***/
  function srcAppSafeHtmlPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function () {
      return SafeHtmlPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var SafeHtmlPipe = /*#__PURE__*/function () {
      function SafeHtmlPipe(sanitized) {
        _classCallCheck(this, SafeHtmlPipe);

        this.sanitized = sanitized;
      }

      _createClass(SafeHtmlPipe, [{
        key: "transform",
        value: function transform(value) {
          return this.sanitized.bypassSecurityTrustHtml(value);
        }
      }]);

      return SafeHtmlPipe;
    }();

    SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
      return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safeHtml'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
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


    var src_app_app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.types */
    "./src/app/app.types.ts");
    /* harmony import */


    var ng_interconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-interconnect */
    "./node_modules/ng-interconnect/__ivy_ngcc__/fesm2015/ng-interconnect.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ds_components_card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../ds-components/card-slider/card-slider.component */
    "./src/app/ds-components/card-slider/card-slider.component.ts");

    function LeftPanalComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-card-slider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LeftPanalComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
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
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "show-background": a0
      };
    };

    var LeftPanalComponent = /*#__PURE__*/function () {
      function LeftPanalComponent(interconnect, elem) {
        var _this3 = this;

        _classCallCheck(this, LeftPanalComponent);

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
          this.changeView['then'](function (notifier) {
            return _this3.changeView = notifier;
          });
        }
      }

      _createClass(LeftPanalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.interconnect.createListener('leftbar/changeView', function (_connection, command) {
            // Notify home
            _this4.changeView.emit({
              mainView: command.viewId
            }); // UI elements


            _this4.showBackground = command.showBackground;
            _this4.showCards = command.showCards; // Reset button icons

            _this4.enterBtn = './assets/btn-icons/icons8_enter 1-gray.png';
            _this4.dashboardBtn = './assets/btn-icons/user.png';
            _this4.lockerBtn = './assets/btn-icons/icons8_key 1.png';
            _this4.settingsBtn = './assets/btn-icons/settings.png'; // Remove selected items

            Array.from(_this4.elem.nativeElement.querySelectorAll('.main-btns')).forEach(function (btn) {
              return btn.classList.remove('select');
            });
          });
        }
      }, {
        key: "userChangeView",
        value: function userChangeView(viewId, showBackground, showCards) {
          this.changeView.emit({
            mainView: viewId
          }); // UI elements

          this.showBackground = showBackground;
          this.showCards = showCards;
          this.buttonsIconChange(viewId);
        }
      }, {
        key: "buttonsIconChange",
        value: function buttonsIconChange(viewId) {
          var _this5 = this;

          var leftbarButtons = Array.from(this.elem.nativeElement.querySelectorAll('.main-btns'));
          leftbarButtons.forEach(function (btn) {
            var btnId = +btn.id;

            if (btnId === viewId && btnId !== 999) {
              switch (viewId) {
                case _this5._MainViews.enterScreen:
                  _this5.enterBtn = './assets/btn-icons/icons8_enter 1.png';
                  _this5.dashboardBtn = './assets/btn-icons/user.png';
                  _this5.lockerBtn = './assets/btn-icons/icons8_key 1.png';
                  _this5.settingsBtn = './assets/btn-icons/settings.png';
                  break;

                case _this5._MainViews.dashboard:
                  _this5.dashboardBtn = './assets/btn-icons/dashboard-white.png';
                  _this5.enterBtn = './assets/btn-icons/icons8_enter 1-gray.png';
                  _this5.lockerBtn = './assets/btn-icons/icons8_key 1.png';
                  _this5.settingsBtn = './assets/btn-icons/settings.png';
                  break;

                case _this5._MainViews.keyLocker:
                  _this5.dashboardBtn = './assets/btn-icons/user.png';
                  _this5.enterBtn = './assets/btn-icons/icons8_enter 1-gray.png';
                  _this5.lockerBtn = './assets/btn-icons/locker-white.png';
                  _this5.settingsBtn = './assets/btn-icons/settings.png';
                  break;
              }

              btn.classList.add('select');
            } else btn.classList.remove('select');
          });
        }
      }]);

      return LeftPanalComponent;
    }();

    LeftPanalComponent.ɵfac = function LeftPanalComponent_Factory(t) {
      return new (t || LeftPanalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_interconnect__WEBPACK_IMPORTED_MODULE_2__["Interconnect"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    LeftPanalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeftPanalComponent,
      selectors: [["app-left-panal"]],
      decls: 27,
      vars: 9,
      consts: [[1, "container", 3, "ngClass"], [1, "fixed-area"], [1, "logo"], ["src", "./assets/LOGO@3xDecision 2 1.png"], ["id", "0", 1, "main-btns", "select", 3, "click"], [3, "src"], ["id", "1", 1, "main-btns", 3, "click"], ["id", "2", 1, "main-btns", 3, "click"], ["id", "3", 1, "main-btns"], ["class", "card-1", 4, "ngIf"], ["class", "card-2", 4, "ngIf"], [1, "grow-area"], ["id", "999", 1, "main-btns", "logout-btn"], ["src", "./assets/btn-icons/logout.png"], [1, "card-1"], [1, "card-2"], [1, "icon-area"], ["src", "./assets/home-icon2.png"], [1, "title"], [1, "ratings"], ["src", "./assets/star.png"]],
      template: function LeftPanalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftPanalComponent_Template_div_click_4_listener() {
            return ctx.userChangeView(ctx._MainViews.enterScreen, false, true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftPanalComponent_Template_div_click_8_listener() {
            return ctx.userChangeView(ctx._MainViews.dashboard, true, false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftPanalComponent_Template_div_click_12_listener() {
            return ctx.userChangeView(ctx._MainViews.keyLocker, true, false);
          });

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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ds_components_card_slider_card_slider_component__WEBPACK_IMPORTED_MODULE_4__["CardSliderComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 230px;\n  height: 100%;\n  background: #FFFFFF;\n  align-items: center;\n  flex-shrink: 0;\n}\n.container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 178px;\n  height: 48px;\n  border-radius: 16px;\n  margin-bottom: 17px;\n  padding: 0px 0px 0px 16px;\n  font-family: \"Open Sans\";\n}\n.container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  margin-right: 22px;\n}\n.container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #727272;\n}\n.container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .main-btns[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  background: #95CED1;\n}\n.container[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #FFFFFF !important;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  margin-top: 34px;\n  text-align: center;\n  margin-bottom: 46px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-1[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  width: 208px;\n  height: 227px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%] {\n  margin-top: 39px;\n  width: 208px;\n  height: 201px;\n  background: #0093B2;\n  border-radius: 30px;\n  padding-top: 29px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 20px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-left: 20px;\n  margin-top: 10px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  padding-left: 20px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 17px;\n}\n.container[_ngcontent-%COMP%]   .fixed-area[_ngcontent-%COMP%]   .card-2[_ngcontent-%COMP%]   .ratings[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Roboto\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 47px;\n  text-transform: capitalize;\n  color: #FFFFFF;\n  margin-left: 5px;\n  margin-top: 5px;\n}\n.container[_ngcontent-%COMP%]   .grow-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  flex-grow: 1;\n}\n.container[_ngcontent-%COMP%]   .grow-area[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  margin-bottom: unset;\n}\n.container[_ngcontent-%COMP%]   .grow-area[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.container[_ngcontent-%COMP%]   .grow-area[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 19px;\n  color: rgba(5, 44, 78, 0.6);\n}\n.show-background[_ngcontent-%COMP%] {\n  background: url('assets/background-flip.png');\n  background-repeat: no-repeat;\n  background-position-y: 280px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY29udGFpbmVycy9sZWZ0LXBhbmFsL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXHVpLWNvbnRhaW5lcnNcXGxlZnQtcGFuYWxcXGxlZnQtcGFuYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLWNvbnRhaW5lcnMvbGVmdC1wYW5hbC9sZWZ0LXBhbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ0NSO0FERVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQVo7QURHUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNEWjtBRE9JO0VBQ0ksZUFBQTtBQ0xSO0FEUUk7RUFDSSxtQkFBQTtBQ05SO0FEUVE7RUFDSSx5QkFBQTtBQ05aO0FEV0k7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1ZSO0FEWVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1ZaO0FEWVk7RUFDSSxZQUFBO0FDVmhCO0FEY1E7RUFFSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDYlo7QURnQlE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDZFo7QURnQlk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNkaEI7QURnQmdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNkcEI7QURtQlk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2pCaEI7QURtQmdCO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDakJwQjtBRHFCWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDbkJoQjtBRHFCZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ25CcEI7QURzQmdCO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDcEJwQjtBRDJCSTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQzFCUjtBRDRCUTtFQUVJLG9CQUFBO0FDM0JaO0FENkJZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUMzQmhCO0FEOEJZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUM1QmhCO0FEc0NBO0VBQ0ksNkNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FDbkNKIiwiZmlsZSI6InNyYy9hcHAvdWktY29udGFpbmVycy9sZWZ0LXBhbmFsL2xlZnQtcGFuYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgICAubWFpbi1idG5zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTc4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuXHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzI3MjcyO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWJ0bnMsIC5tYWluLWJ0bnMgPiBsYWJlbDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWxlY3Qge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM5NUNFRDE7XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5maXhlZC1hcmVhIHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzRweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NnB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuY2FyZC0xIHtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMjdweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuY2FyZC0yIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzlweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIwOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5M0IyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjlweDtcclxuICAgIFxyXG4gICAgICAgICAgICAuaWNvbi1hcmVhIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAucmF0aW5ncyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdyb3ctYXJlYSB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgICAgICAgLmxvZ291dC1idG57XHJcblxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcclxuICAgIFxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDUsIDQ0LCA3OCwgMC42KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbi5zaG93LWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdeYXNzZXRzL2JhY2tncm91bmQtZmxpcC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDI4MHB4O1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDIzMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLmNvbnRhaW5lciAubWFpbi1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDE3OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xufVxuLmNvbnRhaW5lciAubWFpbi1idG5zIGltZyB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1yaWdodDogMjJweDtcbn1cbi5jb250YWluZXIgLm1haW4tYnRucyBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjNzI3MjcyO1xufVxuLmNvbnRhaW5lciAubWFpbi1idG5zLCAuY29udGFpbmVyIC5tYWluLWJ0bnMgPiBsYWJlbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLnNlbGVjdCB7XG4gIGJhY2tncm91bmQ6ICM5NUNFRDE7XG59XG4uY29udGFpbmVyIC5zZWxlY3QgbGFiZWwge1xuICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuZml4ZWQtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5jb250YWluZXIgLmZpeGVkLWFyZWEgLmxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NnB4O1xuICBtYXJnaW4tdG9wOiAzNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQ2cHg7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5sb2dvIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIgLmZpeGVkLWFyZWEgLmNhcmQtMSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHdpZHRoOiAyMDhweDtcbiAgaGVpZ2h0OiAyMjdweDtcbn1cbi5jb250YWluZXIgLmZpeGVkLWFyZWEgLmNhcmQtMiB7XG4gIG1hcmdpbi10b3A6IDM5cHg7XG4gIHdpZHRoOiAyMDhweDtcbiAgaGVpZ2h0OiAyMDFweDtcbiAgYmFja2dyb3VuZDogIzAwOTNCMjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZy10b3A6IDI5cHg7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5jYXJkLTIgLmljb24tYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5jYXJkLTIgLmljb24tYXJlYSBpbWcge1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xufVxuLmNvbnRhaW5lciAuZml4ZWQtYXJlYSAuY2FyZC0yIC50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5jYXJkLTIgLnRpdGxlIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5jYXJkLTIgLnJhdGluZ3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmNvbnRhaW5lciAuZml4ZWQtYXJlYSAuY2FyZC0yIC5yYXRpbmdzIGltZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE3cHg7XG59XG4uY29udGFpbmVyIC5maXhlZC1hcmVhIC5jYXJkLTIgLnJhdGluZ3MgbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jb250YWluZXIgLmdyb3ctYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5jb250YWluZXIgLmdyb3ctYXJlYSAubG9nb3V0LWJ0biB7XG4gIG1hcmdpbi1ib3R0b206IHVuc2V0O1xufVxuLmNvbnRhaW5lciAuZ3Jvdy1hcmVhIC5sb2dvdXQtYnRuIGltZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uY29udGFpbmVyIC5ncm93LWFyZWEgLmxvZ291dC1idG4gbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogcmdiYSg1LCA0NCwgNzgsIDAuNik7XG59XG5cbi5zaG93LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJeYXNzZXRzL2JhY2tncm91bmQtZmxpcC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMjgwcHg7XG59Il19 */"]
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
        return [{
          type: ng_interconnect__WEBPACK_IMPORTED_MODULE_2__["Interconnect"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ui-containers/right-panal/right-panal.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/ui-containers/right-panal/right-panal.component.ts ***!
    \********************************************************************/

  /*! exports provided: RightPanalComponent */

  /***/
  function srcAppUiContainersRightPanalRightPanalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RightPanalComponent", function () {
      return RightPanalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RightPanalComponent = /*#__PURE__*/function () {
      function RightPanalComponent() {
        _classCallCheck(this, RightPanalComponent);
      }

      _createClass(RightPanalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RightPanalComponent;
    }();

    RightPanalComponent.ɵfac = function RightPanalComponent_Factory(t) {
      return new (t || RightPanalComponent)();
    };

    RightPanalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RightPanalComponent,
      selectors: [["app-right-panal"]],
      decls: 49,
      vars: 0,
      consts: [[1, "container"], [1, "profile"], [1, "pro-pic"], ["src", "./assets/profile/pro-pic.png", 1, "pic"], ["src", "./assets/profile/edit.png", 1, "icon"], [1, "name"], [1, "username"], [1, "joined"], [1, "address"], [1, "details"], [1, "item"], [1, "icon-area"], ["src", "./assets/profile/icons/entries.png"], [1, "val"], ["src", "./assets/profile/icons/bids.png"], ["src", "./assets/profile/icons/coins.png"], ["src", "./assets/profile/icons/cash.png"], [1, "val", "diff"]],
      template: function RightPanalComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
      },
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: #FFFFFF;\n  background-image: url('assets/background.png');\n  background-repeat: no-repeat;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 434px;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .pro-pic[_ngcontent-%COMP%] {\n  width: 119px;\n  height: 120px;\n  border-radius: 100px;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .pro-pic[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .pro-pic[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 83px;\n  top: 170px;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 26px;\n  line-height: 35px;\n  text-align: center;\n  color: #2C2C2C;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #818181;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .joined[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #95CED1;\n}\n.container[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: center;\n  color: #AFAFAF;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  height: 32px;\n  padding: 30px;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%] {\n  display: flex;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  margin-right: 10px;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon-area[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 32px;\n  color: #2C2C2C;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 32px;\n  color: #79778A;\n}\n.container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .diff[_ngcontent-%COMP%] {\n  color: #95CED1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY29udGFpbmVycy9yaWdodC1wYW5hbC9EOlxcUHJpdmF0ZVxcTnlyb2Jlb25rYVxcZHJlYW0tc3Rha2VzL3NyY1xcYXBwXFx1aS1jb250YWluZXJzXFxyaWdodC1wYW5hbFxccmlnaHQtcGFuYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLWNvbnRhaW5lcnMvcmlnaHQtcGFuYWwvcmlnaHQtcGFuYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSw0QkFBQTtBQ0NKO0FEQ0k7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNBUjtBREVRO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ0RaO0FER1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0RoQjtBRElZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0ZoQjtBRE1RO0VBRUksZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNMWjtBRFNRO0VBRUksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1JaO0FEWVE7RUFFSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNYWjtBRGVRO0VBRUksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNkWjtBRG9CSTtFQUVJLFlBQUE7RUFDQSxXQUFBO0FDbkJSO0FEcUJRO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNwQlo7QURzQlk7RUFFSSxhQUFBO0FDckJoQjtBRHVCZ0I7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDdEJwQjtBRDBCZ0I7RUFFSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDekJwQjtBRCtCWTtFQUVJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUM5QmhCO0FEa0NZO0VBQ0ksY0FBQTtBQ2hDaEIiLCJmaWxlIjoic3JjL2FwcC91aS1jb250YWluZXJzL3JpZ2h0LXBhbmFsL3JpZ2h0LXBhbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnXmFzc2V0cy9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHJcbiAgICAucHJvZmlsZXtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MzRweDtcclxuXHJcbiAgICAgICAgLnByby1waWMge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgd2lkdGg6IDExOXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHJcbiAgICAgICAgICAgIC5waWMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA4M3B4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICMyQzJDMkM7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVzZXJuYW1lIHtcclxuXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzgxODE4MTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuam9pbmVkIHtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzk1Q0VEMTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWRkcmVzcyB7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNBRkFGQUY7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlscyB7XHJcblxyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgLml0ZW0ge1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgLmljb24tYXJlYSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyQzJDMkM7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnZhbCB7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3OTc3OEE7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGlmZiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk1Q0VEMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIl5hc3NldHMvYmFja2dyb3VuZC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4uY29udGFpbmVyIC5wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQzNHB4O1xufVxuLmNvbnRhaW5lciAucHJvZmlsZSAucHJvLXBpYyB7XG4gIHdpZHRoOiAxMTlweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG4uY29udGFpbmVyIC5wcm9maWxlIC5wcm8tcGljIC5waWMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciAucHJvZmlsZSAucHJvLXBpYyAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDgzcHg7XG4gIHRvcDogMTcwcHg7XG59XG4uY29udGFpbmVyIC5wcm9maWxlIC5uYW1lIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJDMkMyQztcbn1cbi5jb250YWluZXIgLnByb2ZpbGUgLnVzZXJuYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4MTgxODE7XG59XG4uY29udGFpbmVyIC5wcm9maWxlIC5qb2luZWQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzk1Q0VEMTtcbn1cbi5jb250YWluZXIgLnByb2ZpbGUgLmFkZHJlc3Mge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0FGQUZBRjtcbn1cbi5jb250YWluZXIgLmRldGFpbHMge1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLml0ZW0gLmljb24tYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5pdGVtIC5pY29uLWFyZWEgaW1nIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNvbnRhaW5lciAuZGV0YWlscyAuaXRlbSAuaWNvbi1hcmVhIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgY29sb3I6ICMyQzJDMkM7XG59XG4uY29udGFpbmVyIC5kZXRhaWxzIC5pdGVtIC52YWwge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogIzc5Nzc4QTtcbn1cbi5jb250YWluZXIgLmRldGFpbHMgLml0ZW0gLmRpZmYge1xuICBjb2xvcjogIzk1Q0VEMTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightPanalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-right-panal',
          templateUrl: './right-panal.component.html',
          styleUrls: ['./right-panal.component.scss']
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


    var src_app_app_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app.types */
    "./src/app/app.types.ts");
    /* harmony import */


    var ng_interconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-interconnect */
    "./node_modules/ng-interconnect/__ivy_ngcc__/fesm2015/ng-interconnect.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");

    var TopBarComponent = /*#__PURE__*/function () {
      function TopBarComponent(interconnect) {
        var _this6 = this;

        _classCallCheck(this, TopBarComponent);

        this.interconnect = interconnect;
        this._MainViews = src_app_app_types__WEBPACK_IMPORTED_MODULE_1__["MainViews"];
        this.changeView = interconnect.connectToListener('leftbar/changeView', 'topbar');

        if (this.changeView['then']) {
          this.changeView['then'](function (notifier) {
            return _this6.changeView = notifier;
          });
        }
      }

      _createClass(TopBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "userChangeView",
        value: function userChangeView(viewId, showBackground, showCards) {
          this.changeView.emit({
            viewId: viewId,
            showBackground: showBackground,
            showCards: showCards
          });
        }
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.ɵfac = function TopBarComponent_Factory(t) {
      return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_interconnect__WEBPACK_IMPORTED_MODULE_2__["Interconnect"]));
    };

    TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopBarComponent,
      selectors: [["app-top-bar"]],
      decls: 14,
      vars: 0,
      consts: [[1, "container"], [1, "section-1"], [1, "ui-inputgroup"], [1, "ui-inputgroup-addon"], [1, "pi", "pi-search"], ["type", "text", "pInputText", "", "placeholder", "Search for frequently asked questions"], [1, "section-2"], [1, "section-3"], [1, "profile", 3, "click"], ["src", "./assets/profile/pro-pic.png"], [1, "notifications"], ["src", "./assets/notify-icon.png"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopBarComponent_Template_div_click_8_listener() {
            return ctx.userChangeView(ctx._MainViews.userProfile, true, false);
          });

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
        }
      },
      directives: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputText"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 90px;\n  padding: 32px 45px 0px 40px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%] {\n  width: 525px;\n  background: #FFFFFF;\n  box-shadow: 8px 10px 54px rgba(15, 13, 35, 0.03);\n  border-radius: 16px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%] {\n  width: 557px;\n  height: 48px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-top-left-radius: 16px;\n  border-bottom-left-radius: 16px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   .ui-inputgroup-addon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #FFFFFF;\n  border: none;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n  left: 14px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  position: relative;\n  left: -32px;\n  background-color: #FFFFFF;\n  border: none;\n  outline: none;\n  width: 100%;\n  height: 100%;\n  border-radius: 16px;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 24px;\n  color: #79778A;\n  padding-left: 50px;\n  padding-right: 25px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 24px;\n  color: #79778A;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .ui-inputgroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 24px;\n  color: #79778A;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    > .p-inputtext[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 0 0.02rem green !important;\n}\n.container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 251px;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 183px;\n  height: 48px;\n  background: #FFFFFF;\n  box-shadow: 8px 10px 54px rgba(15, 13, 35, 0.03);\n  border-radius: 16px;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  color: #2C2C2C;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-left: 16px;\n  width: 52px;\n  height: 48px;\n  background: #FFFFFF;\n  box-shadow: 8px 10px 54px rgba(15, 13, 35, 0.03);\n  border-radius: 16px;\n}\n.container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%]   .notifications[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .section-3[_ngcontent-%COMP%] {\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktY29udGFpbmVycy90b3AtYmFyL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXHVpLWNvbnRhaW5lcnNcXHRvcC1iYXJcXHRvcC1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VpLWNvbnRhaW5lcnMvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0NKO0FEQ0k7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FDQ1I7QURDUTtFQUVJLFlBQUE7RUFDQSxZQUFBO0FDQVo7QURFWTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUNBaEI7QURHWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUNEaEI7QURJWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNGaEI7QURLWTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNIaEI7QURIWTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNIaEI7QURRUTtFQUNJLDBDQUFBO0FDTlo7QURXSTtFQUNJLFlBQUE7QUNUUjtBRFlJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1ZSO0FEWVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDVlo7QURZWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDVmhCO0FEYVk7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1hoQjtBRGVRO0VBQ0ksZUFBQTtBQ2JaO0FEZ0JRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FDZFo7QURnQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2RoQjtBRG1CSTtFQUNJLFlBQUE7QUNqQlIiLCJmaWxlIjoic3JjL2FwcC91aS1jb250YWluZXJzL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIHBhZGRpbmc6IDMycHggNDVweCAwcHggNDBweDtcclxuXHJcbiAgICAuc2VjdGlvbi0xIHtcclxuICAgICAgICB3aWR0aDogNTI1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICBib3gtc2hhZG93OiA4cHggMTBweCA1NHB4IHJnYmEoMTUsIDEzLCAzNSwgMC4wMyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuXHJcbiAgICAgICAgLnVpLWlucHV0Z3JvdXB7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogNTU3cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51aS1pbnB1dGdyb3VwLWFkZG9uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0zMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlIFZpZXRuYW0gUHJvJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzk3NzhBO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmUgVmlldG5hbSBQcm8nO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3OTc3OEE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuID4gLnAtaW5wdXR0ZXh0OmhvdmVye1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjAycmVtIGdyZWVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi0yIHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24tMyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiAyNTFweDtcclxuXHJcbiAgICAgICAgLnByb2ZpbGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxODNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiA4cHggMTBweCA1NHB4IHJnYmEoMTUsIDEzLCAzNSwgMC4wMyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyQzJDMkM7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9maWxlOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDhweCAxMHB4IDU0cHggcmdiYSgxNSwgMTMsIDM1LCAwLjAzKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VjdGlvbi0xLCAuc2VjdGlvbi0yLCAuc2VjdGlvbi0zIHtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB9XHJcblxyXG59IiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIHBhZGRpbmc6IDMycHggNDVweCAwcHggNDBweDtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMSB7XG4gIHdpZHRoOiA1MjVweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogOHB4IDEwcHggNTRweCByZ2JhKDE1LCAxMywgMzUsIDAuMDMpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0xIC51aS1pbnB1dGdyb3VwIHtcbiAgd2lkdGg6IDU1N3B4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTEgLnVpLWlucHV0Z3JvdXAgc3BhbiB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTEgLnVpLWlucHV0Z3JvdXAgLnVpLWlucHV0Z3JvdXAtYWRkb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMTRweDtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMSAudWktaW5wdXRncm91cCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMzJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJCZSBWaWV0bmFtIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjNzk3NzhBO1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTEgLnVpLWlucHV0Z3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiQmUgVmlldG5hbSBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzc5Nzc4QTtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMSBzcGFuID4gLnAtaW5wdXR0ZXh0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4wMnJlbSBncmVlbiAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0yIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDI1MXB4O1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0zIC5wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDE4M3B4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDhweCAxMHB4IDU0cHggcmdiYSgxNSwgMTMsIDM1LCAwLjAzKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTMgLnByb2ZpbGUgaW1nIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMyAucHJvZmlsZSBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBjb2xvcjogIzJDMkMyQztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0zIC5wcm9maWxlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuc2VjdGlvbi0zIC5ub3RpZmljYXRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiA4cHggMTBweCA1NHB4IHJnYmEoMTUsIDEzLCAzNSwgMC4wMyk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4uY29udGFpbmVyIC5zZWN0aW9uLTMgLm5vdGlmaWNhdGlvbnMgaW1nIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5jb250YWluZXIgLnNlY3Rpb24tMSwgLmNvbnRhaW5lciAuc2VjdGlvbi0yLCAuY29udGFpbmVyIC5zZWN0aW9uLTMge1xuICBoZWlnaHQ6IDQ4cHg7XG59Il19 */"]
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
        return [{
          type: ng_interconnect__WEBPACK_IMPORTED_MODULE_2__["Interconnect"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user-profile/user-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/user-profile/user-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ds-components/ds-types */
    "./src/app/ds-components/ds-types.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var _ds_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../ds-components/popup/popup.component */
    "./src/app/ds-components/popup/popup.component.ts");

    function UserProfileComponent_div_2_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 26);
      }

      if (rf & 2) {
        var aCard_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", aCard_r2.infoIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function UserProfileComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserProfileComponent_div_2_img_7_Template, 1, 1, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var aCard_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", aCard_r2.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", aCard_r2.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", aCard_r2.info, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", aCard_r2.infoIcon);
      }
    }

    function UserProfileComponent_app_popup_66_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-popup", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("notifyParent", function UserProfileComponent_app_popup_66_Template_app_popup_notifyParent_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.recieveFromPopupDialog($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("display", ctx_r1.showPopupWindow)("popupData", ctx_r1.currentPopupPage)("width", ctx_r1.width)("height", ctx_r1.height);
      }
    }

    var UserProfileComponent = /*#__PURE__*/function () {
      function UserProfileComponent() {
        _classCallCheck(this, UserProfileComponent);

        this.cards = [{
          icon: './assets/dasboard/home.png',
          title: 'Entries',
          info: '35',
          infoIcon: ''
        }, {
          icon: './assets/dasboard/users.png',
          title: 'Cash Spent',
          info: '$3,435',
          infoIcon: ''
        }, {
          icon: './assets/dasboard/users.png',
          title: 'Successful Invites',
          info: '189',
          infoIcon: ''
        }, {
          icon: './assets/dasboard/settings.png',
          title: 'Bid Placed',
          info: '50',
          infoIcon: ''
        }, {
          icon: './assets/dasboard/send.png',
          title: 'Contracts Won',
          info: '187',
          infoIcon: ''
        }];
        this.showPopupWindow = false;
        this.width = 500;
        this.height = 500;
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.popupData = [{
            header: 'Change Phone Number',
            contentHeader: 'Choose a reason',
            content: "phone",
            bckButton: false,
            nxtButton: false,
            customContents: 'change-phone-number',
            showFooter: false
          }, {
            header: 'Change Address',
            contentHeader: 'Choose a reason',
            content: "address",
            bckButton: false,
            nxtButton: false,
            customContents: 'change-address',
            showFooter: false
          }];
        }
      }, {
        key: "recieveFromPopupDialog",
        value: function recieveFromPopupDialog(e) {
          switch (e.command) {
            case _ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].close:
              this.showPopupWindow = false;
              break;

            case _ds_components_ds_types__WEBPACK_IMPORTED_MODULE_1__["IPopupCpmmands"].submit:
              this.showPopupWindow = false;
              break;
          }
        }
      }, {
        key: "changeAddress",
        value: function changeAddress() {
          this.currentPopupPage = this.popupData[1];
          this.showPopupWindow = true;
        }
      }, {
        key: "changePhoneNumber",
        value: function changePhoneNumber() {
          this.currentPopupPage = this.popupData[0];
          this.showPopupWindow = true;
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
      return new (t || UserProfileComponent)();
    };

    UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserProfileComponent,
      selectors: [["app-user-profile"]],
      decls: 67,
      vars: 2,
      consts: [[1, "container"], [1, "cards-area"], ["class", "a-card", 4, "ngFor", "ngForOf"], [1, "user-info"], [1, "pro-pic-large"], [1, "pic"], ["src", "./assets/profile/pro-pic.png"], [1, "info"], [1, "username"], [1, "desc"], [1, "item"], [1, "title"], [1, "value"], ["id", "input", "type", "text", "size", "30", "pInputText", ""], [1, "item", 2, "margin-bottom", "40px", "margin-top", "40px"], [1, "sub-text"], [1, "image-area"], [1, "actions"], ["id", "input", "type", "text", "size", "30", "pInputText", "", 2, "background", "#D9D9D9"], [1, "edit", 3, "click"], [1, "edit"], [1, "btn-area"], ["src", "./assets/profile/save-btn.png"], [3, "display", "popupData", "width", "height", "notifyParent", 4, "ngIf"], [1, "a-card"], [1, "icon"], [3, "src"], [3, "src", 4, "ngIf"], [3, "display", "popupData", "width", "height", "notifyParent"]],
      template: function UserProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_Template_div_click_41_listener() {
            return ctx.changePhoneNumber();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_Template_div_click_48_listener() {
            return ctx.changeAddress();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Change ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, UserProfileComponent_app_popup_66_Template, 1, 4, "app-popup", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPopupWindow);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__["InputText"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ds_components_popup_popup_component__WEBPACK_IMPORTED_MODULE_4__["PopupComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 40px 40px 0px 40px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  height: 200px;\n  max-width: 1130px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 174px;\n  height: 188px;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  padding: 10px 0px 10px 0px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #79778A;\n  text-align: center;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  font-family: \"Be Vietnam Pro\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 23px;\n  line-height: 20px;\n  color: #95CED1;\n}\n.container[_ngcontent-%COMP%]   .cards-area[_ngcontent-%COMP%]   .a-card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin-left: 3px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 95px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .pro-pic-large[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding-left: 40px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .pro-pic-large[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  border-radius: 100px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .pro-pic-large[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .pro-pic-large[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-bottom: 15px;\n  padding-left: 40px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .pro-pic-large[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 26px;\n  line-height: 35px;\n  color: #2C2C2C;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .pro-pic-large[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 15px;\n  line-height: 24px;\n  color: #95CED1;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 35px;\n  margin-bottom: 30px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 200px;\n  height: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #444B5C;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .sub-text[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 14px;\n  color: #444B5C;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .image-area[_ngcontent-%COMP%] {\n  width: 285px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .image-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 100px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #444B5C;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 100%;\n  max-width: 455px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #444B5C;\n  background: #F4F4F4;\n  border: 1px solid #DADADA;\n  border-radius: 10px;\n  width: 435px;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  color: #444B5C;\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #F9A369;\n}\n.container[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .btn-area[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL0Q6XFxQcml2YXRlXFxOeXJvYmVvbmthXFxkcmVhbS1zdGFrZXMvc3JjXFxhcHBcXHVzZXItcHJvZmlsZVxcdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUVBLDJCQUFBO0FDREo7QURHSTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0ZSO0FESVE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQ0haO0FES1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0hoQjtBREtnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSHBCO0FET1k7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDTGhCO0FEUVk7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUGhCO0FEU2dCO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1JwQjtBRGVJO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNkUjtBRGdCUTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDZlo7QURpQlk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDZmhCO0FEaUJnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDZnBCO0FEbUJZO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDbEJoQjtBRG9CZ0I7RUFFSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDbkJwQjtBRHVCZ0I7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDckJwQjtBRDRCUTtFQUVJLGdCQUFBO0FDM0JaO0FENkJZO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUM1QmhCO0FEOEJnQjtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDN0JwQjtBRCtCb0I7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDN0J4QjtBRGtDZ0I7RUFFSSxZQUFBO0FDakNwQjtBRG1Db0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDakN4QjtBRHFDZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDbkNwQjtBRHFDb0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNuQ3hCO0FEd0NnQjtFQUVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUN2Q3BCO0FEeUNvQjtFQUVJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDeEN4QjtBRDZDZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQzNDcEI7QUQ4Q2dCO0VBQ0ksdUNBQUE7VUFBQSwrQkFBQTtFQUNBLGNBQUE7QUM1Q3BCO0FEaURZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQy9DaEIiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDQwcHggNDBweCAwcHggNDBweDtcclxuXHJcbiAgICAuY2FyZHMtYXJlYSB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMzBweDtcclxuXHJcbiAgICAgICAgLmEtY2FyZCB7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDE3NHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4OHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDBweDtcclxuXHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlIFZpZXRuYW0gUHJvJztcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzk3NzhBO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW5mbyB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCZSBWaWV0bmFtIFBybyc7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk1Q0VEMTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnVzZXItaW5mb3tcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDk1cHg7XHJcblxyXG4gICAgICAgIC5wcm8tcGljLWxhcmdle1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgLnBpYyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbmZvIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAudXNlcm5hbWUge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMkMyQzJDO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGVzYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk1Q0VEMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5mb3tcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICAuaXRlbXtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NDRCNUM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NEI1QztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5pbWFnZS1hcmVhIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI4NXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NEI1QztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudmFsdWUge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDU1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NEI1QztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y0RjRGNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0RBREFEQTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQzNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmVkaXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NEI1QztcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmVkaXQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGOUEzNjk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLWFyZWEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDQwcHggNDBweCAwcHggNDBweDtcbn1cbi5jb250YWluZXIgLmNhcmRzLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDExMzBweDtcbn1cbi5jb250YWluZXIgLmNhcmRzLWFyZWEgLmEtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTc0cHg7XG4gIGhlaWdodDogMTg4cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xufVxuLmNvbnRhaW5lciAuY2FyZHMtYXJlYSAuYS1jYXJkIC5pY29uIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cbi5jb250YWluZXIgLmNhcmRzLWFyZWEgLmEtY2FyZCAuaWNvbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciAuY2FyZHMtYXJlYSAuYS1jYXJkIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogXCJCZSBWaWV0bmFtIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNzk3NzhBO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5jYXJkcy1hcmVhIC5hLWNhcmQgLmluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIkJlIFZpZXRuYW0gUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICM5NUNFRDE7XG59XG4uY29udGFpbmVyIC5jYXJkcy1hcmVhIC5hLWNhcmQgLmluZm8gaW1nIHtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDk1cHg7XG59XG4uY29udGFpbmVyIC51c2VyLWluZm8gLnByby1waWMtbGFyZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG4uY29udGFpbmVyIC51c2VyLWluZm8gLnByby1waWMtbGFyZ2UgLnBpYyB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG4uY29udGFpbmVyIC51c2VyLWluZm8gLnByby1waWMtbGFyZ2UgLnBpYyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5wcm8tcGljLWxhcmdlIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyAucHJvLXBpYy1sYXJnZSAuaW5mbyAudXNlcm5hbWUge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogIzJDMkMyQztcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyAucHJvLXBpYy1sYXJnZSAuaW5mbyAuZGVzYyB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjOTVDRUQxO1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5pbmZvIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyAuaW5mbyAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyAuaW5mbyAuaXRlbSAudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjNDQ0QjVDO1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5pbmZvIC5pdGVtIC50aXRsZSAuc3ViLXRleHQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogIzQ0NEI1Qztcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyAuaW5mbyAuaXRlbSAuaW1hZ2UtYXJlYSB7XG4gIHdpZHRoOiAyODVweDtcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyAuaW5mbyAuaXRlbSAuaW1hZ2UtYXJlYSBpbWcge1xuICB3aWR0aDogNTJweDtcbiAgaGVpZ2h0OiA1MnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyAuaW5mbyAuaXRlbSAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjNDQ0QjVDO1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5pbmZvIC5pdGVtIC5hY3Rpb25zIGxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyAuaW5mbyAuaXRlbSAudmFsdWUge1xuICBmbGV4LWdyb3c6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0NTVweDtcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyAuaW5mbyAuaXRlbSAudmFsdWUgaW5wdXQge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzQ0NEI1QztcbiAgYmFja2dyb3VuZDogI0Y0RjRGNDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RBREFEQTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDQzNXB4O1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5pbmZvIC5pdGVtIC5lZGl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM0NDRCNUM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLnVzZXItaW5mbyAuaW5mbyAuaXRlbSAuZWRpdDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjRjlBMzY5O1xufVxuLmNvbnRhaW5lciAudXNlci1pbmZvIC5pbmZvIC5idG4tYXJlYSB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-profile',
          templateUrl: './user-profile.component.html',
          styleUrls: ['./user-profile.component.scss']
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