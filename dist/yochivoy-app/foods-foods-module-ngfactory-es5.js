function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foods-foods-module-ngfactory"], {
  /***/
  "./src/app/foods/foods-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/foods/foods-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: FoodsPageRoutingModule */

  /***/
  function srcAppFoodsFoodsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodsPageRoutingModule", function () {
      return FoodsPageRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _foods_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./foods.page */
    "./src/app/foods/foods.page.ts");

    var routes = [{
      path: '',
      component: _foods_page__WEBPACK_IMPORTED_MODULE_1__["FoodsPage"]
    }];

    var FoodsPageRoutingModule = function FoodsPageRoutingModule() {
      _classCallCheck(this, FoodsPageRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/foods/foods.module.ngfactory.js":
  /*!*************************************************!*\
    !*** ./src/app/foods/foods.module.ngfactory.js ***!
    \*************************************************/

  /*! exports provided: FoodsPageModuleNgFactory */

  /***/
  function srcAppFoodsFoodsModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodsPageModuleNgFactory", function () {
      return FoodsPageModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _foods_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./foods.module */
    "./src/app/foods/foods.module.ts");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _foods_page_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./foods.page.ngfactory */
    "./src/app/foods/foods.page.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-toasty/src/toasty.service */
    "./node_modules/ng2-toasty/src/toasty.service.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular2-notifications/dist/src/simple-notifications/services/notifications.service */
    "./node_modules/angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! css-animator/angular/animation.service */
    "./node_modules/css-animator/angular/animation.service.js");
    /* harmony import */


    var css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @nicky-lenaers/ngx-scroll-to */
    "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../shared/menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../shared/todo/todo.service */
    "./src/app/shared/todo/todo.service.ts");
    /* harmony import */


    var ng2_toasty__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ng2-toasty */
    "./node_modules/ng2-toasty/index.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! angular2-notifications/dist/src/simple-notifications.module */
    "./node_modules/angular2-notifications/dist/src/simple-notifications.module.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! css-animator/angular/animator.module */
    "./node_modules/css-animator/angular/animator.module.js");
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_17__);
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng-click-outside/lib/click-outside.module */
    "./node_modules/ng-click-outside/lib/click-outside.module.js");
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _foods_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./foods-routing.module */
    "./src/app/foods/foods-routing.module.ts");
    /* harmony import */


    var _foods_page__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./foods.page */
    "./src/app/foods/foods.page.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var FoodsPageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_foods_module__WEBPACK_IMPORTED_MODULE_1__["FoodsPageModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵsNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _foods_page_ngfactory__WEBPACK_IMPORTED_MODULE_4__["FoodsPageNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyService"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["toastyServiceFactory"], [ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToService"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToService"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["MapsAPILoader"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["LazyMapsAPILoader"], [[2, _agm_core__WEBPACK_IMPORTED_MODULE_12__["LAZY_MAPS_API_CONFIG"]], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_13__["MenuItems"], _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_13__["MenuItems"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_14__["TodoService"], _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_14__["TodoService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_toasty__WEBPACK_IMPORTED_MODULE_15__["ToastyModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_15__["ToastyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_16__["SimpleNotificationsModule"], angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_16__["SimpleNotificationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_17__["AnimatorModule"], css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_17__["AnimatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_18__["ClickOutsideModule"], ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_18__["ClickOutsideModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_20__["NgxSkeletonLoaderModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_20__["NgxSkeletonLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _foods_routing_module__WEBPACK_IMPORTED_MODULE_24__["FoodsPageRoutingModule"], _foods_routing_module__WEBPACK_IMPORTED_MODULE_24__["FoodsPageRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _foods_module__WEBPACK_IMPORTED_MODULE_1__["FoodsPageModule"], _foods_module__WEBPACK_IMPORTED_MODULE_1__["FoodsPageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _agm_core__WEBPACK_IMPORTED_MODULE_12__["LAZY_MAPS_API_CONFIG"], {
        apiKey: "AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PERFECT_SCROLLBAR_CONFIG"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_22__["ɵ0"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTES"], function () {
        return [[{
          path: "",
          component: _foods_page__WEBPACK_IMPORTED_MODULE_25__["FoodsPage"]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/foods/foods.module.ts":
  /*!***************************************!*\
    !*** ./src/app/foods/foods.module.ts ***!
    \***************************************/

  /*! exports provided: FoodsPageModule */

  /***/
  function srcAppFoodsFoodsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodsPageModule", function () {
      return FoodsPageModule;
    });

    var FoodsPageModule = function FoodsPageModule() {
      _classCallCheck(this, FoodsPageModule);
    };
    /***/

  },

  /***/
  "./src/app/foods/foods.page.ngfactory.js":
  /*!***********************************************!*\
    !*** ./src/app/foods/foods.page.ngfactory.js ***!
    \***********************************************/

  /*! exports provided: RenderType_FoodsPage, View_FoodsPage_0, View_FoodsPage_Host_0, FoodsPageNgFactory */

  /***/
  function srcAppFoodsFoodsPageNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_FoodsPage", function () {
      return RenderType_FoodsPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FoodsPage_0", function () {
      return View_FoodsPage_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FoodsPage_Host_0", function () {
      return View_FoodsPage_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodsPageNgFactory", function () {
      return FoodsPageNgFactory;
    });
    /* harmony import */


    var _foods_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./foods.page.scss.shim.ngstyle */
    "./src/app/foods/foods.page.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _foods_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./foods.page */
    "./src/app/foods/foods.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_venue_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services-venue/apis.service */
    "./src/app/services-venue/apis.service.ts");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng2-toasty/src/toasty.service */
    "./node_modules/ng2-toasty/src/toasty.service.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_FoodsPage = [_foods_page_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_FoodsPage = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_FoodsPage,
      data: {}
    });

    function View_FoodsPage_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "h2", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).transform("No Foods Found"));

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_FoodsPage_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "label", [["class", "veg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Veg"]))], null, null);
    }

    function View_FoodsPage_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "label", [["class", "nonVeg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Non Veg"]))], null, null);
    }

    function View_FoodsPage_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "span", [["class", "card_div"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.foodsInfo(_v.parent.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [["alt", ""], ["class", "back_image"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 13, "div", [["class", "content_div"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "label", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "label", [["class", "small"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FoodsPage_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FoodsPage_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "label", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", " ", ""]))], function (_ck, _v) {
        var currVal_3 = _v.parent.context.$implicit.veg;

        _ck(_v, 10, 0, currVal_3);

        var currVal_4 = !_v.parent.context.$implicit.veg;

        _ck(_v, 12, 0, currVal_4);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.parent.context.$implicit.cover;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _v.parent.context.$implicit.name;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.parent.context.$implicit.desc;

        _ck(_v, 7, 0, currVal_2);

        var currVal_5 = _co.getCurrency();

        var currVal_6 = _v.parent.context.$implicit.price;

        _ck(_v, 15, 0, currVal_5, currVal_6);
      });
    }

    function View_FoodsPage_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FoodsPage_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.id == _v.context.$implicit.cid.id;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_FoodsPage_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "label", [["class", "head_lbl"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FoodsPage_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.foods;

        _ck(_v, 4, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_FoodsPage_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 14, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 13, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 12, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "button", [["class", "btn btn-primary btn-round"], ["style", "margin: 3px;"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.showPanelCreated() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "div", [["class", "mainContent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FoodsPage_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FoodsPage_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = !(_co.categories == null ? null : _co.categories.length);

        _ck(_v, 13, 0, currVal_2);

        var currVal_3 = _co.categories;

        _ck(_v, 15, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("Food"));

        _ck(_v, 5, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transform("Add New Food"));

        _ck(_v, 8, 0, currVal_1);
      });
    }

    function View_FoodsPage_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-foods", [], null, null, null, View_FoodsPage_0, RenderType_FoodsPage)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _foods_page__WEBPACK_IMPORTED_MODULE_4__["FoodsPage"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_venue_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"], _services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_9__["ToastyService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var FoodsPageNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-foods", _foods_page__WEBPACK_IMPORTED_MODULE_4__["FoodsPage"], View_FoodsPage_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/foods/foods.page.scss.shim.ngstyle.js":
  /*!*******************************************************!*\
    !*** ./src/app/foods/foods.page.scss.shim.ngstyle.js ***!
    \*******************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppFoodsFoodsPageScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".mainContent[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.mainContent[_ngcontent-%COMP%]   .head_lbl[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 20px;\n  display: block;\n  margin-bottom: 10px;\n}\n.mainContent[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 15px;\n}\n.mainContent[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .back_image[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.mainContent[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.mainContent[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  display: flex;\n}\n.mainContent[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n.mainContent[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 14px;\n}\n.mainContent[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .veg[_ngcontent-%COMP%] {\n  color: green;\n}\n.mainContent[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .nonVeg[_ngcontent-%COMP%] {\n  color: red;\n}\n.mainContent[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .content_div[_ngcontent-%COMP%]   .lonveg[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZHMvRDpcXHByb3llY3Rvc1xcUmVzdGF1cmFudGVcXHlvY2hpdm95XFxBZG1pbl9wYW5lbC9zcmNcXGFwcFxcZm9vZHNcXGZvb2RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZHMvZm9vZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEeUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDdkNSO0FENENJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQzFDUjtBRDJDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUN6Q1o7QUQyQ1E7RUFDSSxrQkFBQTtBQ3pDWjtBRDBDWTtFQUNJLGFBQUE7QUN4Q2hCO0FEMkNZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDekNoQjtBRDJDWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDekNoQjtBRDJDWTtFQUNJLFlBQUE7QUN6Q2hCO0FEMkNZO0VBQ0ksVUFBQTtBQ3pDaEI7QUQyQ1k7RUFDSSwrQkFBQTtBQ3pDaEIiLCJmaWxlIjoic3JjL2FwcC9mb29kcy9mb29kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkNvbnRlbnR7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvLyAuY2F0ZU5hbWV7XG4gICAgLy8gICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC8vICAgICBjb2xvcjogYmxhY2s7XG4gICAgLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vIH1cbiAgICAvLyAuZm9vZHN7XG4gICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvLyAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAvLyAgICAgcGFkZGluZzogMTBweDtcbiAgICAvLyAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxNHB4IDJweCBsaWdodGdyZXk7XG4gICAgLy8gICAgIC5iZ0NvdmVye1xuICAgIC8vICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgLy8gICAgICAgICBoZWlnaHQ6IDkwcHg7XG4gICAgLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAvLyAgICAgfSBcbiAgICAvLyAgICAgLm5hbWV7XG4gICAgLy8gICAgICAgICBtYXJnaW46IDBweDtcbiAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIC8vICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLy8gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIC5kZXNjcmlwdGlvbntcbiAgICAvLyAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIC5wcmljZXtcbiAgICAvLyAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIC5jYXRle1xuICAgIC8vICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgLy8gICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgLy8gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG5cbiAgICAuaGVhZF9sYmx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG5cblxuICAgIC5jYXJkX2RpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAgNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnRfZGl2e1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGx7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnZlZ3tcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubm9uVmVne1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9udmVne1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4iLCIubWFpbkNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5Db250ZW50IC5oZWFkX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jb250ZW50X2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNvbnRlbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jb250ZW50X2RpdiAudGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jb250ZW50X2RpdiAuc21hbGwge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY29udGVudF9kaXYgLnZlZyB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNvbnRlbnRfZGl2IC5ub25WZWcge1xuICBjb2xvcjogcmVkO1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY29udGVudF9kaXYgLmxvbnZlZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/foods/foods.page.ts":
  /*!*************************************!*\
    !*** ./src/app/foods/foods.page.ts ***!
    \*************************************/

  /*! exports provided: FoodsPage */

  /***/
  function srcAppFoodsFoodsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodsPage", function () {
      return FoodsPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FoodsPage = /*#__PURE__*/function () {
      function FoodsPage(router, api, util, spinner, toastyService) {
        _classCallCheck(this, FoodsPage);

        this.router = router;
        this.api = api;
        this.util = util;
        this.spinner = spinner;
        this.toastyService = toastyService;
        this.foods = [];
        this.categories = [];
        this.dummy = Array(50);
      }

      _createClass(FoodsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFoods();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getFoods();
        }
      }, {
        key: "error",
        value: function error(message) {
          var toastOptions = {
            title: this.api.translate('Error'),
            msg: message,
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: function onAdd(toast) {
              console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function onRemove(toast) {
              console.log('Toast ' + toast.id + ' has been removed!');
            }
          }; // Add see all possible types in one shot

          this.toastyService.error(toastOptions);
        }
      }, {
        key: "getFoods",
        value: function getFoods() {
          var _this = this;

          this.api.getVenueCategories(localStorage.getItem('uid')).then(function (data) {
            console.log(data);
            _this.dummy = [];

            if (data) {
              _this.categories = data;

              _this.api.getFoods(localStorage.getItem('uid')).then(function (data) {
                console.log(data);

                if (data) {
                  _this.foods = data;
                }
              }, function (error) {
                console.log(error);
                _this.dummy = [];

                _this.spinner.hide();

                console.log(error);

                _this.error(_this.api.translate('Something went wrong'));
              })["catch"](function (error) {
                _this.dummy = [];
                console.log(error);

                _this.spinner.hide();

                console.log(error);

                _this.error(_this.api.translate('Something went wrong'));
              });
            }
          }, function (error) {
            console.log(error);
            _this.dummy = [];

            _this.spinner.hide();

            console.log(error);

            _this.error(_this.api.translate('Something went wrong'));
          })["catch"](function (error) {
            console.log(error);
            _this.dummy = [];

            _this.spinner.hide();

            console.log(error);

            _this.error(_this.api.translate('Something went wrong'));
          });
        }
      }, {
        key: "addnew",
        value: function addnew() {
          this.router.navigate(['/add-new-foods']);
        }
      }, {
        key: "foodsInfo",
        value: function foodsInfo(item) {
          console.log(item);
          var navData = {
            queryParams: {
              id: item.id
            }
          };
          this.router.navigate(['venue', 'add-new-foods'], navData);
        }
      }, {
        key: "getCurrency",
        value: function getCurrency() {
          return this.util.getCurrecySymbol();
        }
      }, {
        key: "showPanelCreated",
        value: function showPanelCreated() {
          var navData = {
            queryParams: {
              register: true
            }
          };
          this.router.navigate(['venue', 'add-new-foods'], navData);
        }
      }]);

      return FoodsPage;
    }();
    /***/

  }
}]);
//# sourceMappingURL=foods-foods-module-ngfactory-es5.js.map