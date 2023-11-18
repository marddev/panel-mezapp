function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-forms-basic-elements-basic-elements-module-ngfactory"], {
  /***/
  "./src/app/components/forms/basic-elements/basic-elements-routing.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/forms/basic-elements/basic-elements-routing.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: BasicElementsRoutingModule, ɵ0 */

  /***/
  function srcAppComponentsFormsBasicElementsBasicElementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicElementsRoutingModule", function () {
      return BasicElementsRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _basic_elements_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./basic-elements.component */
    "./src/app/components/forms/basic-elements/basic-elements.component.ts");

    var ɵ0 = {
      breadcrumb: 'Form Components',
      status: true
    };
    var routes = [{
      path: '',
      component: _basic_elements_component__WEBPACK_IMPORTED_MODULE_1__["BasicElementsComponent"],
      data: ɵ0
    }];

    var BasicElementsRoutingModule = function BasicElementsRoutingModule() {
      _classCallCheck(this, BasicElementsRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/components/forms/basic-elements/basic-elements.component.ngfactory.js":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/forms/basic-elements/basic-elements.component.ngfactory.js ***!
    \***************************************************************************************/

  /*! exports provided: RenderType_BasicElementsComponent, View_BasicElementsComponent_0, View_BasicElementsComponent_Host_0, BasicElementsComponentNgFactory */

  /***/
  function srcAppComponentsFormsBasicElementsBasicElementsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_BasicElementsComponent", function () {
      return RenderType_BasicElementsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BasicElementsComponent_0", function () {
      return View_BasicElementsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BasicElementsComponent_Host_0", function () {
      return View_BasicElementsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicElementsComponentNgFactory", function () {
      return BasicElementsComponentNgFactory;
    });
    /* harmony import */


    var _basic_elements_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./basic-elements.component.scss.shim.ngstyle */
    "./src/app/components/forms/basic-elements/basic-elements.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/card/card.component.ngfactory */
    "./src/app/shared/card/card.component.ngfactory.js");
    /* harmony import */


    var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/card/card.component */
    "./src/app/shared/card/card.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _basic_elements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./basic-elements.component */
    "./src/app/components/forms/basic-elements/basic-elements.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_BasicElementsComponent = [_basic_elements_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_BasicElementsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_BasicElementsComponent,
      data: {}
    });

    function View_BasicElementsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 403, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 402, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 213, "app-card", [], null, null, null, _shared_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _shared_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], [], {
        title: [0, "title"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 1, 1, "h4", [["class", "sub-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Basic Inputs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 1, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add class of "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [".form-control"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" with "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["<input>"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" tag"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 1, 107, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Simple Input"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "input", [["class", "form-control"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Placeholder"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Type your title in Placeholder"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "Password input"], ["type", "password"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Read only"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "You can't change me"], ["readonly", ""], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Disable Input"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 0, "input", [["class", "form-control"], ["disabled", ""], ["placeholder", "Disabled text"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Predefine Input"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 0, "input", [["class", "form-control"], ["type", "text"], ["value", "Enter yout content after me"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 36, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Select Box"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 33, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 32, "select", [["class", "form-control"], ["name", "select"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 3, "option", [["value", "opt1"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Select One Value Only"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 3, "option", [["value", "opt2"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type 2"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 3, "option", [["value", "opt3"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type 3"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 3, "option", [["value", "opt4"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type 4"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 3, "option", [["value", "opt5"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type 5"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 3, "option", [["value", "opt6"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type 6"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 3, "option", [["value", "opt7"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type 7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 3, "option", [["value", "opt8"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Type 8"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Round Input"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 0, "input", [["class", "form-control form-control-round"], ["placeholder", ".form-control-round"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Maximum Length"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](95, 0, null, null, 0, "input", [["class", "form-control"], ["maxlength", "6"], ["placeholder", "Content must be in 6 characters"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Disable Autocomplete"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 0, "input", [["autocomplete", "off"], ["class", "form-control"], ["placeholder", "Autocomplete Off"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 5, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Static Text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 2, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 1, "div", [["class", "form-control-static"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Hello !... This is static text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Color"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, null, 0, "input", [["class", "form-control"], ["type", "color"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Upload File"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 0, "input", [["class", "form-control"], ["type", "file"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Textarea"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 0, "textarea", [["class", "form-control"], ["cols", "5"], ["placeholder", "Default textarea"], ["rows", "5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, 1, 42, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 16, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 0, null, null, 1, "h4", [["class", "sub-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Input Sizes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](126, 0, null, null, 13, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](127, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](128, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, null, 2, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](132, 0, null, null, 1, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 0, "input", [["class", "form-control form-control-lg"], ["placeholder", ".form-control-lg"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 2, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](135, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", ".form-control"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](137, 0, null, null, 2, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, null, 1, "div", [["class", "col-sm-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, null, 0, "input", [["class", "form-control form-control-sm"], ["placeholder", ".form-control-sm"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](140, 0, null, null, 24, "div", [["class", "col-sm-6 mobile-inputs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](141, 0, null, null, 1, "h4", [["class", "sub-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Color Inputs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](143, 0, null, null, 21, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 145).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 145).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](144, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](145, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](147, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](148, 0, null, null, 1, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](149, 0, null, null, 0, "input", [["class", "form-control form-control-primary"], ["placeholder", ".form-control-primary"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](150, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, null, 0, "input", [["class", "form-control form-control-warning"], ["placeholder", ".form-control-warning"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](154, 0, null, null, 0, "input", [["class", "form-control form-control-default"], ["placeholder", ".form-control-default"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](155, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](157, 0, null, null, 0, "input", [["class", "form-control form-control-danger"], ["placeholder", ".form-control-danger"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](159, 0, null, null, 0, "input", [["class", "form-control form-control-success"], ["placeholder", ".form-control-success"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](161, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](162, 0, null, null, 0, "input", [["class", "form-control form-control-inverse"], ["placeholder", ".form-control-inverse"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](163, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](164, 0, null, null, 0, "input", [["class", "form-control form-control-info"], ["placeholder", ".form-control-info"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](165, 0, null, 1, 50, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](166, 0, null, null, 24, "div", [["class", "col-sm-6 mobile-inputs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](167, 0, null, null, 1, "h4", [["class", "sub-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Text-color"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](169, 0, null, null, 21, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](170, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](171, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](173, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](174, 0, null, null, 1, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](175, 0, null, null, 0, "input", [["class", "form-control form-txt-primary"], ["placeholder", ".form-txt-primary"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](176, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](177, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](178, 0, null, null, 0, "input", [["class", "form-control form-txt-warning"], ["placeholder", ".form-txt-warning"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](179, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](180, 0, null, null, 0, "input", [["class", "form-control form-txt-default"], ["placeholder", ".form-txt-default"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](181, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](182, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](183, 0, null, null, 0, "input", [["class", "form-control form-txt-danger"], ["placeholder", ".form-txt-danger"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](184, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](185, 0, null, null, 0, "input", [["class", "form-control form-txt-success"], ["placeholder", ".form-txt-success"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](186, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](187, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](188, 0, null, null, 0, "input", [["class", "form-control form-txt-inverse"], ["placeholder", ".form-txt-inverse"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](189, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](190, 0, null, null, 0, "input", [["class", "form-control form-txt-info"], ["placeholder", ".form-txt-info"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](191, 0, null, null, 24, "div", [["class", "col-sm-6 mobile-inputs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](192, 0, null, null, 1, "h4", [["class", "sub-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Background-color"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](194, 0, null, null, 21, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 196).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 196).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](195, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](196, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](198, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](199, 0, null, null, 1, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](200, 0, null, null, 0, "input", [["class", "form-control form-bg-primary"], ["placeholder", ".form-bg-primary"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](201, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](202, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](203, 0, null, null, 0, "input", [["class", "form-control form-bg-warning"], ["placeholder", ".form-bg-warning"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](204, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](205, 0, null, null, 0, "input", [["class", "form-control form-bg-default"], ["placeholder", ".form-bg-default"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](206, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](207, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](208, 0, null, null, 0, "input", [["class", "form-control form-bg-danger"], ["placeholder", ".form-bg-danger"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](209, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](210, 0, null, null, 0, "input", [["class", "form-control form-bg-success"], ["placeholder", ".form-bg-success"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](211, 0, null, null, 4, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](212, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](213, 0, null, null, 0, "input", [["class", "form-control form-bg-inverse"], ["placeholder", ".form-bg-inverse"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](214, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](215, 0, null, null, 0, "input", [["class", "form-control form-bg-info"], ["placeholder", ".form-bg-info"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](216, 0, null, null, 84, "app-card", [], null, null, null, _shared_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _shared_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](217, 114688, null, 0, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], [], {
        title: [0, "title"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](218, 0, null, 1, 1, "h4", [["class", "sub-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Basic Inputs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](220, 0, null, 1, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add class of "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](222, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [".form-control"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" with "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](225, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["<input>"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" tag"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](228, 0, null, 1, 37, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 230).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 230).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](229, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](230, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](232, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](233, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](234, 0, null, null, 1, "div", [["class", "col-sm-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](235, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-1"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](236, 0, null, null, 1, "div", [["class", "col-sm-11"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](237, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-11"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](238, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](239, 0, null, null, 1, "div", [["class", "col-sm-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](240, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-2"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](241, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](242, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-10"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](243, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](244, 0, null, null, 1, "div", [["class", "col-sm-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](245, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-3"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](246, 0, null, null, 1, "div", [["class", "col-sm-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](247, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-9"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](248, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](249, 0, null, null, 1, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](250, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-4"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](251, 0, null, null, 1, "div", [["class", "col-sm-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](252, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-8"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](253, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](254, 0, null, null, 1, "div", [["class", "col-sm-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](255, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-5"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](256, 0, null, null, 1, "div", [["class", "col-sm-7"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](257, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-7"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](258, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](259, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](260, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-6"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](261, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](262, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-6"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](263, 0, null, null, 2, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](264, 0, null, null, 1, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](265, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-12"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](266, 0, null, 1, 1, "h4", [["class", "sub-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Flex Inputs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](268, 0, null, 1, 32, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 270).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 270).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](269, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](270, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](272, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](273, 0, null, null, 6, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](274, 0, null, null, 1, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](275, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](276, 0, null, null, 1, "div", [["class", "col-sm-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](277, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-4"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](278, 0, null, null, 1, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](279, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](280, 0, null, null, 6, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](281, 0, null, null, 1, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](282, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](283, 0, null, null, 1, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](284, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-6"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](285, 0, null, null, 1, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](286, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](287, 0, null, null, 6, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](288, 0, null, null, 1, "div", [["class", "col-sm-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](289, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-8"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](290, 0, null, null, 1, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](291, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](292, 0, null, null, 1, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](293, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](294, 0, null, null, 6, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](295, 0, null, null, 1, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](296, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](297, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](298, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col-sm-10"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](299, 0, null, null, 1, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](300, 0, null, null, 0, "input", [["class", "form-control"], ["placeholder", "col"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](301, 0, null, null, 35, "app-card", [], null, null, null, _shared_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _shared_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](302, 114688, null, 0, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], [], {
        title: [0, "title"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](303, 0, null, 1, 1, "h4", [["class", "sub-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Input Validation"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](305, 0, null, 1, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add class of "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](307, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [".form-control"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" with "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](310, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["<input>"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" tag"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](313, 0, null, 1, 7, "div", [["class", "form-group has-success row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](314, 0, null, null, 2, "div", [["class", "col-sm-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](315, 0, null, null, 1, "label", [["class", "col-form-label"], ["for", "inputSuccess1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Input with success"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](317, 0, null, null, 3, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](318, 0, null, null, 0, "input", [["class", "form-control form-control-success"], ["id", "inputSuccess1"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](319, 0, null, null, 1, "div", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Success! You've done it."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](321, 0, null, 1, 7, "div", [["class", "form-group has-warning row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](322, 0, null, null, 2, "div", [["class", "col-sm-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](323, 0, null, null, 1, "label", [["class", "col-form-label"], ["for", "inputWarning1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Input with warning"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](325, 0, null, null, 3, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](326, 0, null, null, 0, "input", [["class", "form-control form-control-warning"], ["id", "inputWarning1"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](327, 0, null, null, 1, "div", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Shucks, check the formatting of that and try again."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](329, 0, null, 1, 7, "div", [["class", "form-group has-danger row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](330, 0, null, null, 2, "div", [["class", "col-sm-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](331, 0, null, null, 1, "label", [["class", "col-form-label"], ["for", "inputDanger1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Input with danger"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](333, 0, null, null, 3, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](334, 0, null, null, 0, "input", [["class", "form-control form-control-danger"], ["id", "inputDanger1"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](335, 0, null, null, 1, "div", [["class", "col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sorry, that username's taken. Try another?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](337, 0, null, null, 66, "app-card", [], null, null, null, _shared_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CardComponent_0"], _shared_card_card_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](338, 114688, null, 0, _shared_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], [], {
        title: [0, "title"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](339, 0, null, 1, 1, "h4", [["class", "sub-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Input Alignment"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](341, 0, null, 1, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add class of "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](343, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [".form-control"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" with "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](346, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["<input>"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" tag"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](349, 0, null, 1, 54, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 351).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 351).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](350, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](351, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](353, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](354, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](355, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Normal Text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](357, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](358, 0, null, null, 0, "input", [["class", "form-control form-control-normal"], ["placeholder", ".form-control-normal"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](359, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](360, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Bold Text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](362, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](363, 0, null, null, 0, "input", [["class", "form-control form-control-bold"], ["placeholder", ".form-control-bold"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](364, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](365, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Capitalize Text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](367, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](368, 0, null, null, 0, "input", [["class", "form-control form-control-capitalize"], ["placeholder", ".form-control-capitalize"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](369, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](370, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Uppercase Text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](372, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](373, 0, null, null, 0, "input", [["class", "form-control form-control-uppercase"], ["placeholder", ".form-control-uppercase"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](374, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](375, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Lowercase Text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](377, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](378, 0, null, null, 0, "input", [["class", "form-control form-control-lowercase"], ["placeholder", ".form-control-lowercase"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](379, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](380, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Varient Text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](382, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](383, 0, null, null, 0, "input", [["class", "form-control form-control-variant"], ["placeholder", ".form-control-variant"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](384, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](385, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Left-Align Text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](387, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](388, 0, null, null, 0, "input", [["class", "form-control form-control-left"], ["placeholder", ".form-control-left"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](389, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](390, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Center-Align Text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](392, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](393, 0, null, null, 0, "input", [["class", "form-control form-control-center"], ["placeholder", ".form-control-center"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](394, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](395, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Right-Align Text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](397, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](398, 0, null, null, 0, "input", [["class", "form-control form-control-right"], ["placeholder", ".form-control-right"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](399, 0, null, null, 4, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](400, 0, null, null, 1, "label", [["class", "col-sm-2 col-form-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["RTL Text"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](402, 0, null, null, 1, "div", [["class", "col-sm-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](403, 0, null, null, 0, "input", [["class", "form-control form-control-rtl"], ["placeholder", ".form-control-rtl"], ["type", "text"]], null, null, null, null, null))], function (_ck, _v) {
        var currVal_0 = "Basic Form Inputs";

        _ck(_v, 3, 0, currVal_0);

        var currVal_8 = "opt1";

        _ck(_v, 55, 0, currVal_8);

        var currVal_9 = "opt1";

        _ck(_v, 56, 0, currVal_9);

        var currVal_10 = "opt2";

        _ck(_v, 59, 0, currVal_10);

        var currVal_11 = "opt2";

        _ck(_v, 60, 0, currVal_11);

        var currVal_12 = "opt3";

        _ck(_v, 63, 0, currVal_12);

        var currVal_13 = "opt3";

        _ck(_v, 64, 0, currVal_13);

        var currVal_14 = "opt4";

        _ck(_v, 67, 0, currVal_14);

        var currVal_15 = "opt4";

        _ck(_v, 68, 0, currVal_15);

        var currVal_16 = "opt5";

        _ck(_v, 71, 0, currVal_16);

        var currVal_17 = "opt5";

        _ck(_v, 72, 0, currVal_17);

        var currVal_18 = "opt6";

        _ck(_v, 75, 0, currVal_18);

        var currVal_19 = "opt6";

        _ck(_v, 76, 0, currVal_19);

        var currVal_20 = "opt7";

        _ck(_v, 79, 0, currVal_20);

        var currVal_21 = "opt7";

        _ck(_v, 80, 0, currVal_21);

        var currVal_22 = "opt8";

        _ck(_v, 83, 0, currVal_22);

        var currVal_23 = "opt8";

        _ck(_v, 84, 0, currVal_23);

        var currVal_52 = "Input Grid";

        _ck(_v, 217, 0, currVal_52);

        var currVal_67 = "Input Validation";

        _ck(_v, 302, 0, currVal_67);

        var currVal_68 = "Input Alignment";

        _ck(_v, 338, 0, currVal_68);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassUntouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassTouched;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassPristine;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassDirty;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassValid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassInvalid;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).ngClassPending;

        _ck(_v, 14, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassUntouched;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassTouched;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassPristine;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassDirty;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassValid;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassInvalid;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).ngClassPending;

        _ck(_v, 126, 0, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30);

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).ngClassUntouched;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).ngClassTouched;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).ngClassPristine;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).ngClassDirty;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).ngClassValid;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).ngClassInvalid;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 147).ngClassPending;

        _ck(_v, 143, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37);

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).ngClassUntouched;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).ngClassTouched;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).ngClassPristine;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).ngClassDirty;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).ngClassValid;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).ngClassInvalid;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 173).ngClassPending;

        _ck(_v, 169, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44);

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassUntouched;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassTouched;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassPristine;

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassDirty;

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassValid;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassInvalid;

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassPending;

        _ck(_v, 194, 0, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51);

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 232).ngClassUntouched;

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 232).ngClassTouched;

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 232).ngClassPristine;

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 232).ngClassDirty;

        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 232).ngClassValid;

        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 232).ngClassInvalid;

        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 232).ngClassPending;

        _ck(_v, 228, 0, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59);

        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 272).ngClassUntouched;

        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 272).ngClassTouched;

        var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 272).ngClassPristine;

        var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 272).ngClassDirty;

        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 272).ngClassValid;

        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 272).ngClassInvalid;

        var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 272).ngClassPending;

        _ck(_v, 268, 0, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66);

        var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 353).ngClassUntouched;

        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 353).ngClassTouched;

        var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 353).ngClassPristine;

        var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 353).ngClassDirty;

        var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 353).ngClassValid;

        var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 353).ngClassInvalid;

        var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 353).ngClassPending;

        _ck(_v, 349, 0, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75);
      });
    }

    function View_BasicElementsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-basic-elements", [], null, null, null, View_BasicElementsComponent_0, RenderType_BasicElementsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _basic_elements_component__WEBPACK_IMPORTED_MODULE_5__["BasicElementsComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var BasicElementsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-basic-elements", _basic_elements_component__WEBPACK_IMPORTED_MODULE_5__["BasicElementsComponent"], View_BasicElementsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/forms/basic-elements/basic-elements.component.scss.shim.ngstyle.js":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/forms/basic-elements/basic-elements.component.scss.shim.ngstyle.js ***!
    \***********************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentsFormsBasicElementsBasicElementsComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
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


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvYmFzaWMtZWxlbWVudHMvYmFzaWMtZWxlbWVudHMuY29tcG9uZW50LnNjc3MifQ== */"];
    /***/
  },

  /***/
  "./src/app/components/forms/basic-elements/basic-elements.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/forms/basic-elements/basic-elements.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: BasicElementsComponent */

  /***/
  function srcAppComponentsFormsBasicElementsBasicElementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicElementsComponent", function () {
      return BasicElementsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BasicElementsComponent = /*#__PURE__*/function () {
      function BasicElementsComponent() {
        _classCallCheck(this, BasicElementsComponent);
      }

      _createClass(BasicElementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicElementsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/forms/basic-elements/basic-elements.module.ngfactory.js":
  /*!************************************************************************************!*\
    !*** ./src/app/components/forms/basic-elements/basic-elements.module.ngfactory.js ***!
    \************************************************************************************/

  /*! exports provided: BasicElementsModuleNgFactory */

  /***/
  function srcAppComponentsFormsBasicElementsBasicElementsModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicElementsModuleNgFactory", function () {
      return BasicElementsModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _basic_elements_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./basic-elements.module */
    "./src/app/components/forms/basic-elements/basic-elements.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _basic_elements_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-elements.component.ngfactory */
    "./src/app/components/forms/basic-elements/basic-elements.component.ngfactory.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
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
    /*! ../../../shared/menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/todo/todo.service */
    "./src/app/shared/todo/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _basic_elements_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./basic-elements-routing.module */
    "./src/app/components/forms/basic-elements/basic-elements-routing.module.ts");
    /* harmony import */


    var ng2_toasty__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng2-toasty */
    "./node_modules/ng2-toasty/index.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! angular2-notifications/dist/src/simple-notifications.module */
    "./node_modules/angular2-notifications/dist/src/simple-notifications.module.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! css-animator/angular/animator.module */
    "./node_modules/css-animator/angular/animator.module.js");
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng-click-outside/lib/click-outside.module */
    "./node_modules/ng-click-outside/lib/click-outside.module.js");
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _basic_elements_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./basic-elements.component */
    "./src/app/components/forms/basic-elements/basic-elements.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var BasicElementsModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_basic_elements_module__WEBPACK_IMPORTED_MODULE_1__["BasicElementsModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _basic_elements_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["BasicElementsComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵuNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵvNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵmNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵrNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ɵsNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["ɵw"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyService"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["toastyServiceFactory"], [ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToService"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToService"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_12__["MapsAPILoader"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["LazyMapsAPILoader"], [[2, _agm_core__WEBPACK_IMPORTED_MODULE_12__["LAZY_MAPS_API_CONFIG"]], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵc"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["ɵd"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_13__["MenuItems"], _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_13__["MenuItems"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_14__["TodoService"], _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_14__["TodoService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _basic_elements_routing_module__WEBPACK_IMPORTED_MODULE_16__["BasicElementsRoutingModule"], _basic_elements_routing_module__WEBPACK_IMPORTED_MODULE_16__["BasicElementsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_toasty__WEBPACK_IMPORTED_MODULE_17__["ToastyModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_17__["ToastyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_18__["SimpleNotificationsModule"], angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_18__["SimpleNotificationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_19__["AnimatorModule"], css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_19__["AnimatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_11__["ScrollToModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_20__["ClickOutsideModule"], ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_20__["ClickOutsideModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PerfectScrollbarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PerfectScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_22__["NgxSkeletonLoaderModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_22__["NgxSkeletonLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_24__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_24__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _basic_elements_module__WEBPACK_IMPORTED_MODULE_1__["BasicElementsModule"], _basic_elements_module__WEBPACK_IMPORTED_MODULE_1__["BasicElementsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () {
        return [[{
          path: "",
          component: _basic_elements_component__WEBPACK_IMPORTED_MODULE_25__["BasicElementsComponent"],
          data: _basic_elements_routing_module__WEBPACK_IMPORTED_MODULE_16__["ɵ0"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _agm_core__WEBPACK_IMPORTED_MODULE_12__["LAZY_MAPS_API_CONFIG"], {
        apiKey: "AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_21__["PERFECT_SCROLLBAR_CONFIG"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_24__["ɵ0"], [])]);
    });
    /***/

  },

  /***/
  "./src/app/components/forms/basic-elements/basic-elements.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/forms/basic-elements/basic-elements.module.ts ***!
    \**************************************************************************/

  /*! exports provided: BasicElementsModule */

  /***/
  function srcAppComponentsFormsBasicElementsBasicElementsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicElementsModule", function () {
      return BasicElementsModule;
    });

    var BasicElementsModule = function BasicElementsModule() {
      _classCallCheck(this, BasicElementsModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=components-forms-basic-elements-basic-elements-module-ngfactory-es5.js.map