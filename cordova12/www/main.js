(self["webpackChunkng16"] = self["webpackChunkng16"] || []).push([["main"],{

/***/ 2030:
/*!***********************************************************************!*\
  !*** ./src/app/activity/activity-detail/activity-detail.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityDetailComponent: () => (/* binding */ ActivityDetailComponent),
/* harmony export */   Model: () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var src_app_service_func_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/func.services */ 6624);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);









function ActivityDetailComponent_div_8_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_div_8_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](47);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.openFullscreen(_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Not Visit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ActivityDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ActivityDetailComponent_div_8_button_1_Template, 2, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.item.x_is_visited != "f");
  }
}
function ActivityDetailComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_div_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.takeOrder());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Take Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ActivityDetailComponent_div_37_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const x_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", x_r19.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, x_r19.invoice_date), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 5, x_r19.amount_total), " ");
  }
}
function ActivityDetailComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29)(1, "table", 30)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Invoice No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ActivityDetailComponent_div_37_tr_11_Template, 9, 7, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.ar);
  }
}
function ActivityDetailComponent_div_38_img_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 40);
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r20.item.x_photo_url_check_in, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function ActivityDetailComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33)(1, "div", 10)(2, "div", 12)(3, "div", 34)(4, "div", 14)(5, "div", 35)(6, "div", 36)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " CHECK IN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 38)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 15)(15, "div")(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "x_visit_reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15)(20, "div")(21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "x_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ActivityDetailComponent_div_38_img_25_Template, 1, 1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 5, ctx_r3.item.x_check_in_date), ", ", ctx_r3.item.x_check_in_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.item.x_visit_reason, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.item.x_note, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.item.x_photo_url_check_in);
  }
}
function ActivityDetailComponent_div_39_img_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 40);
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r21.item.x_photo_url_check_out, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function ActivityDetailComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33)(1, "div", 10)(2, "div", 12)(3, "div", 34)(4, "div", 14)(5, "div", 35)(6, "div", 36)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " CHECK OUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 38)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 15)(15, "div")(16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "x_summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ActivityDetailComponent_div_39_img_20_Template, 1, 1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 4, ctx_r4.item.x_check_out_date), ", ", ctx_r4.item.x_check_out_time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.item.x_summary, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.item.x_photo_url_check_out);
  }
}
function ActivityDetailComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33)(1, "div", 10)(2, "div", 12)(3, "div", 34)(4, "div", 14)(5, "div", 35)(6, "div", 36)(7, "strong", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "NOT VISIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 15)(10, "div")(11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "x_not_visit_reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.item.x_not_visit_reason, " ");
  }
}
function ActivityDetailComponent_footer_41_div_1_div_3_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_footer_41_div_1_div_3_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](45);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.openFullscreen(_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Check In");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ActivityDetailComponent_footer_41_div_1_div_3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_footer_41_div_1_div_3_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](43);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.openFullscreen(_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Check Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ActivityDetailComponent_footer_41_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ActivityDetailComponent_footer_41_div_1_div_3_button_1_Template, 2, 0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ActivityDetailComponent_footer_41_div_1_div_3_button_2_Template, 2, 0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.item.x_activity_status == "OPEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.item.x_activity_status == "CHECKIN");
  }
}
function ActivityDetailComponent_footer_41_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46)(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ActivityDetailComponent_footer_41_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "div", 10)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ActivityDetailComponent_footer_41_div_1_div_3_Template, 3, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ActivityDetailComponent_footer_41_div_1_div_4_Template, 3, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.expired == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.expired == true);
  }
}
function ActivityDetailComponent_footer_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ActivityDetailComponent_footer_41_div_1_Template, 5, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.item.x_is_visited != "f");
  }
}
function ActivityDetailComponent_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52)(1, "strong", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Check Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_ng_template_42_Template_a_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const modal_r31 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r31.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 56)(6, "div", 15)(7, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 15)(12, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "textarea", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ActivityDetailComponent_ng_template_42_Template_textarea_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.model.x_summary = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 61)(16, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_ng_template_42_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.getGeo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "NEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r8.item.x_customer_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r8.model.x_summary);
  }
}
function ActivityDetailComponent_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52)(1, "strong", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Check In");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_ng_template_44_Template_a_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const modal_r36 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r36.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 56)(6, "div", 15)(7, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 15)(12, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Visit Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "textarea", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ActivityDetailComponent_ng_template_44_Template_textarea_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r39.model.x_visit_reason = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 15)(16, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "textarea", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ActivityDetailComponent_ng_template_44_Template_textarea_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r40.model.x_note = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 61)(20, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_ng_template_44_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r41.getGeo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "NEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r10.item.x_customer_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r10.model.x_visit_reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r10.model.x_note);
  }
}
function ActivityDetailComponent_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 52)(1, "strong", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Not Visit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_ng_template_46_Template_a_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const modal_r42 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](modal_r42.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 56)(6, "div", 15)(7, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 15)(12, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "x_not_visit_reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "textarea", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ActivityDetailComponent_ng_template_46_Template_textarea_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r45.model.x_not_visit_reason = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 61)(16, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_ng_template_46_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r46.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r12.item.x_customer_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r12.model.x_not_visit_reason);
  }
}
class Model {
  constructor(x_activity_type_id, x_note, x_summary, x_visit_reason, x_not_visit_reason) {
    this.x_activity_type_id = x_activity_type_id;
    this.x_note = x_note;
    this.x_summary = x_summary;
    this.x_visit_reason = x_visit_reason;
    this.x_not_visit_reason = x_not_visit_reason;
  }
}
class ActivityDetailComponent {
  constructor(http, router, activeRoute, configService, ngZone, modalService, funcService) {
    this.http = http;
    this.router = router;
    this.activeRoute = activeRoute;
    this.configService = configService;
    this.ngZone = ngZone;
    this.modalService = modalService;
    this.funcService = funcService;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.today = '';
    this.expired = false;
    this.ar = [];
    this.totalAR = 0;
    this.model = new Model("", "", "", "", "");
    this.id = "";
    this.item = [];
    this.active = 1;
    this.geoData = [];
    this.images = "";
    this.initPhoto = false;
    this.cameraSuccess = imagesData => {
      this.initPhoto = true;
      this.loading = false;
      this.ngZone.run(() => {
        this.images = 'data:image/png;base64,' + imagesData;
        console.log(imagesData);
        if (imagesData.length < 20) {
          alert("No photo");
          console.log("belum ambil photo");
        } else {
          this.saveImages();
        }
      });
    };
    this.cameraError = e => {
      console.log('error Camera', e);
      this.initPhoto = false;
      this.modalService.dismissAll();
    };
  }
  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.today = this.funcService.formatDate();
    this.httpGet();
  }
  httpGet() {
    this.modalService.dismissAll();
    this.loading = true;
    this.http.get(this.api + this.configService.getAppCode() + 'activities/detail/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      console.log(data);
      this.item = data['item'];
      this.ar = data['ar'];
      this.totalAR = data['totalAR'];
      this.model.x_activity_type_id = data['item']['x_activity_type_id'];
      this.model.x_note = data['item']['x_note'];
      this.model.x_summary = data['item']['x_summary'];
      console.log(this.today, this.item['x_schedule_date']);
      if (Date.parse(this.today) > Date.parse(this.item['x_schedule_date'])) {
        this.expired = true;
      }
      // console.log('Epoch ',Date.parse(this.today) , Date.parse(this.item['x_schedule_date']))
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  remove() {
    const body = {
      id: this.id,
      model: this.model
    };
    if (confirm("is not visit this activity?")) {
      this.http.post(this.api + this.configService.getAppCode() + 'activities/remove', body, {
        headers: this.configService.headers()
      }).subscribe(data => {
        this.modalService.dismissAll();
        console.log(data);
        history.back();
      }, e => {
        console.log(e);
        this.note = "Error Server!";
      });
    }
  }
  checkIn() {
    const body = {
      id: this.id,
      model: this.model,
      geoData: this.geoData
    };
    console.log(body);
    this.http.post(this.api + this.configService.getAppCode() + 'activities/checkIn', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cam === true) {
        //  this.takePhoto();
      }
      this.httpGet();
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  getGeo() {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cam == true) {
      let self = this;
      var onSuccess = function (position) {
        console.log('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: ' + position.coords.longitude + '\n' + 'Altitude: ' + position.coords.altitude + '\n');
        self.geoData = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
          timestamp: position.timestamp
        };
        if (self.item.x_activity_status == 'OPEN') {
          self.checkIn();
        } else {
          self.checkOut();
        }
      };
      function onError(error) {
        console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
        //self.checkIn();
        alert("GPS ERROR, PLEASE SET PERMISSION!");
      }
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      this.geoData = {
        lat: 0,
        long: 0,
        timestamp: 0
      };
      if (this.item.x_activity_status == 'OPEN') {
        this.checkIn();
      } else {
        this.checkOut();
      }
    }
  }
  back() {
    history.back();
  }
  checkOut_DEL() {
    const body = {
      id: this.id,
      model: this.model,
      geoData: this.geoData
    };
    console.log(body);
    this.http.post(this.api + this.configService.getAppCode() + 'activities/checkOut', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cam === true) {
        this.takePhoto();
      }
      this.httpGet();
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  checkOut() {
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.cam === true) {
      this.takePhoto();
    } else {
      this.httpCheckOut();
    }
  }
  httpCheckOut() {
    const body = {
      id: this.id,
      model: this.model,
      geoData: this.geoData
    };
    console.log(body);
    this.http.post(this.api + this.configService.getAppCode() + 'activities/checkOut', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.modalService.dismissAll();
      this.httpGet();
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  takePhoto() {
    const options = {
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 50,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true
    };
    let self = this;
    navigator.camera.getPicture(this.cameraSuccess, this.cameraError, options);
  }
  saveImages() {
    // this.initPhoto = true;
    if (this.initPhoto == true) {
      this.loading = true;
      const body = {
        id: this.id,
        base64Images: this.images,
        status: this.item.x_activity_status
        //base64Images : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADj0lEQVR4nO2XXUhTYRjHX7woqPuu6s4+2ZVu03AaarqJ84M0SKICi6ACiYgsMEtUsgaBTILa2Xaim0xNc1Zgku6sD/NrfpsfQzMhsek0O7tx2xPvu7mdLbedHS266IU/55znPef9/57n/WBD6F9sOrFxjzbWeJaKNRVTYlMhfv4rxtXRr7ZTYkZNiRkHJWaAI/ysxv3hxsjqXY5W9q9cwdeIzG8hiKLERoNGwoC2dALoYRbo707QD7Ggq7QAjlMSphm/F2ocpXllSmleAaV5eSIiAE2s8QzOVvdoFmibC+jPdtDVz7vvbS7QP5xdr8apMACwrsgApMwHKr/HSS+6DXXqGaCkjBcAx7X5PWBIawHXtXI/OfPOgVOWQ8QFcMiy29cScrJ4AWilDKursngNddXTJGO91emL3bEAHd/hD1B0E5xHjhFzq0ThB2CVKtxgCdmVEQPoa7+5S17QB/So3QcQ1w7Ok5fcwpl7zLFGRYlw4uUIMS9oGYZRUZK3b02Wq+Q3BUsuH4RhASh5J+jr5gHHtfndYIh/6h00ULgCmpg0KL1QBpqYo7AokXP734auQKzpNFmEj+d8886Rjp4jFZk4fD0oAIGQKmBMlBRoDg5Zzo/w21DCNGMTbck40IMs0AtOctVWTOEtCK3xenDIckMChFLYdfDs0PA2SmyspuJM3EMIKKkJbhSPQXb3st8i4yu58QukGAb4b8uKbhuotLNw+54FLtZMw/F262+DpndZ4WDjIJG8yxo0ltE5D8lNvUS8AcosLKhm7HB1/GfQrA48HwB0t4EI3weLyTtmhAFMsg4YWnVsGiC9Y1oYwLTdAeNscABc4v0N/UTr5d4o9scAlDwlGGCCdcCgZwokrRaIUjUSSVstEcUEA6hm7HB+dJUMsq/e7J1bfB9JTBBAyRQLhSNucywpN7M3lohiggCUm5z3Ta8BpcBDZ8sA8joXXEL2/EZKa5sk5hl1H128AYpeDNi2AiCz2wrJzWYCUKh5vcwbQK1uLOd16NT3wd4n7yClbZIcuVyRzD3mWFVV+vC/iritUt/2PtTiyuy1QUrLoNcglIrv13YiIe1BTWPZ5ab+pcA1gaUwfQ1pKq//5MJljzjz/y2g7UQI4f+FIoSQBCGUiBBKRQjJEUIKfGR4JPco1fOOxPMN/nYHEth2cQw2KzyWoIbpd3MqIEMIpXAyDqwA7sPvrFcAfxuyAr8A50v6ENvkmUMAAAAASUVORK5CYII="
      };

      console.log(body);
      this.http.post(this.api + this.configService.getAppCode() + 'activities/takePhoto', body, {
        headers: this.configService.headers()
      }).subscribe(data => {
        console.log(data);
        this.loading = false;
        this.httpCheckOut();
      }, e => {
        console.log(e);
        this.note = "Error Server!";
      });
    }
  }
  openFullscreen(content) {
    this.modalService.open(content, {
      fullscreen: true
    });
  }
  takeOrder(x = []) {
    let objCustomer = [];
    const body = {
      item: this.item
    };
    this.http.post(this.api + this.configService.getAppCode() + 'activities/takeOrder', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.router.navigate(['carts']);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
}
ActivityDetailComponent.ɵfac = function ActivityDetailComponent_Factory(t) {
  return new (t || ActivityDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_func_services__WEBPACK_IMPORTED_MODULE_2__.FuncService));
};
ActivityDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ActivityDetailComponent,
  selectors: [["app-activity-detail"]],
  decls: 48,
  vars: 17,
  consts: [[1, "fixed-top", "bg-white", "shadow-sm", "border-bottom", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-4"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-4", "align-self-center", "text-center"], ["src", "./assets/gif/icons8-loading.gif", 3, "hidden"], ["class", "col-4 align-self-center   text-end ", 4, "ngIf"], [1, "container-fluid", "mt-3"], [1, "row"], ["class", "col-12 mb-2 d-grid", 4, "ngIf"], [1, "col-12"], [1, "card", "mb-3"], [1, "card-body"], [1, "mb-2"], [1, "lh-sm", "mb-2"], [1, "lh-1"], ["class", "bg-white", 4, "ngIf"], ["class", "container-fluid mb-3", 4, "ngIf"], ["class", "bg-white border-top shadow-sm", 4, "ngIf"], ["contentCheckOut", ""], ["contentCheckIn", ""], ["contentNotVisit", ""], [1, "col-4", "align-self-center", "text-end"], ["class", "btn btn-danger btn-sm px-2", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "px-2", 3, "click"], [1, "col-12", "mb-2", "d-grid"], [1, "btn", "btn-primary", 3, "click"], [1, "bg-white"], [1, "table", "table-sm"], [4, "ngFor", "ngForOf"], [1, "text-end"], [1, "container-fluid", "mb-3"], [1, "card"], [1, "row", "g-1", "mb-2"], [1, "col-5"], [1, "bi", "bi-check-circle"], [1, "col-7", "text-end"], ["class", "w-100 p-1 bg-white border", 3, "src", 4, "ngIf"], [1, "w-100", "p-1", "bg-white", "border", 3, "src"], [1, "text-danger"], [1, "bg-white", "border-top", "shadow-sm"], ["class", "container", 4, "ngIf"], [1, "container"], ["class", "d-grid py-2", 4, "ngIf"], [1, "d-grid", "py-2"], ["class", "btn btn-success rounded-pill", 3, "click", 4, "ngIf"], ["class", "btn btn-info rounded-pill", 3, "click", 4, "ngIf"], [1, "btn", "btn-success", "rounded-pill", 3, "click"], [1, "btn", "btn-info", "rounded-pill", 3, "click"], ["disabled", "", 1, "btn", "btn-light", "rounded-pill"], [1, "modal-header"], [1, "modal-title"], [3, "click"], [1, "bi", "bi-x-lg"], [1, "modal-body"], ["for", "x_customer_name", 1, "form-label"], [1, "form-control"], ["for", "x_summary", 1, "form-label"], ["rows", "5", "name", "x_summary", "id", "x_summary", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer", "d-grid"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["for", "x_visit_reason", 1, "form-label"], ["rows", "5", "name", "x_visit_reason", "id", "x_visit_reason", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_note", 1, "form-label"], ["rows", "5", "name", "x_note", "id", "x_note", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["for", "x_not_visit_reason", 1, "form-label"], ["rows", "5", "name", "x_not_visit_reason", "id", "x_not_visit_reason", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
  template: function ActivityDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ActivityDetailComponent_div_8_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9)(10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ActivityDetailComponent_div_11_Template, 3, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12)(13, "div", 13)(14, "div", 14)(15, "div", 15)(16, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Customer Information");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16)(21, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15)(24, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Schedule Date :");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 17)(27, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 15)(31, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " AR Info");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div")(34, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, ActivityDetailComponent_div_37_Template, 12, 1, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, ActivityDetailComponent_div_38_Template, 26, 7, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, ActivityDetailComponent_div_39_Template, 21, 6, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ActivityDetailComponent_div_40_Template, 14, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, ActivityDetailComponent_footer_41_Template, 2, 1, "footer", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, ActivityDetailComponent_ng_template_42_Template, 18, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, ActivityDetailComponent_ng_template_44_Template, 22, 3, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ActivityDetailComponent_ng_template_46_Template, 18, 2, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.x_activity_status != "CLOSE");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.x_customer_id != null);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.item.x_customer_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.item.x_route_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](29, 12, ctx.item.x_schedule_date, "d MMM y"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total AR : ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](36, 15, ctx.totalAR), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.totalAR > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.x_check_in_date);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.x_check_out_date);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.x_is_visited == "f");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.x_activity_status != "CLOSE");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 1914:
/*!*************************************************************************!*\
  !*** ./src/app/activity/activity-history/activity-history.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityHistoryComponent: () => (/* binding */ ActivityHistoryComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);





class ActivityHistoryComponent {
  constructor(http, router, configService) {
    this.http = http;
    this.router = router;
    this.configService = configService;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.items = [];
  }
  ngOnInit() {
    this.httpGet();
  }
  back() {
    history.back();
  }
  httpGet() {
    this.http.get(this.api + this.configService.getAppCode() + 'activities/index', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      this.items = data['items'];
      console.log(data);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  fnAdd() {
    const body = {
      insert: true,
      user: this.configService.account()
    };
    this.http.post(this.api + this.configService.getAppCode() + 'activities/fnAdd', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      this.router.navigate(['activity/detail', data['post']['user']['account']['id']]);
      console.log(data);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
}
ActivityHistoryComponent.ɵfac = function ActivityHistoryComponent_Factory(t) {
  return new (t || ActivityHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
};
ActivityHistoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ActivityHistoryComponent,
  selectors: [["app-activity-history"]],
  decls: 21,
  vars: 0,
  consts: [[1, "fixed-top", "bg-gray-100", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1", "align-self-center"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-7", "align-self-center"], [1, "p-0", "m-0", "ms-3"], [1, "row", "mt-2"], [1, "col"], ["type", "button", 1, "btn", "btn-outline-dark", "py-2", "rounded-pill", "mx-1"], [1, "main-content", "position-relative", "max-height-vh-100", "h-100", "border-radius-lg"], [1, "container-fluid", "py-4"], [1, "row"], [1, "col-12"], [1, "my-5", "text-center"]],
  template: function ActivityHistoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityHistoryComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " History");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "30 Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "main", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " coming soon ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5929:
/*!***********************************************************************!*\
  !*** ./src/app/activity/activity-insert/activity-insert.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityInsertComponent: () => (/* binding */ ActivityInsertComponent),
/* harmony export */   Model: () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);







function ActivityInsertComponent_h5_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Add Manual Activity Schedule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ActivityInsertComponent_input_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ActivityInsertComponent_input_8_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.model.schedule_date = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.model.schedule_date);
  }
}
function ActivityInsertComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Schedule Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ActivityInsertComponent_div_15_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.model.schedule_date = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.model.schedule_date);
  }
}
function ActivityInsertComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Search Customer by Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ActivityInsertComponent_div_16_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.searchCustomer = $event);
    })("keydown.enter", function ActivityInsertComponent_div_16_Template_input_keydown_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "small")(5, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 20)(9, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityInsertComponent_div_16_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Search by name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.searchCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 2, ctx_r3.totalAll), " customer in database");
  }
}
function ActivityInsertComponent_div_17_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityInsertComponent_div_17_a_4_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const x_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.onSelectCustomer(x_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 26)(5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r14.street);
  }
}
function ActivityInsertComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ActivityInsertComponent_div_17_a_4_Template, 7, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Search Customer by keyword \"", ctx_r4.searchCustomer, "\", total search ", ctx_r4.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.res_partner);
  }
}
class Model {
  constructor(schedule_date, customerId, x_salesperson_id, x_sales_activity_schedule_id) {
    this.schedule_date = schedule_date;
    this.customerId = customerId;
    this.x_salesperson_id = x_salesperson_id;
    this.x_sales_activity_schedule_id = x_sales_activity_schedule_id;
  }
}
class ActivityInsertComponent {
  constructor(http, router, activeRoute, configService) {
    this.http = http;
    this.router = router;
    this.activeRoute = activeRoute;
    this.configService = configService;
    this.date = new Date();
    this.show_res_partner = false;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.searchCustomer = "";
    this.model = new Model(this.date.getFullYear() + '-' + ("0" + (this.date.getMonth() + 1)).slice(-2) + '-' + ("0" + this.date.getDate()).slice(-2), "", "", "");
    this.id = "";
    this.item = [];
    this.res_partner = [];
    this.total = 0;
    this.totalAll = 0;
    this.objCustomer = [];
  }
  ngOnInit() {
    this.httpGet();
    this.model.x_salesperson_id = this.configService.accountId();
    this.model.x_sales_activity_schedule_id = this.activeRoute.snapshot.queryParams['activityScheduleId'];
  }
  httpGet() {
    this.http.get(this.api + this.configService.getAppCode() + 'Res_partner', {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.totalAll = data['total'];
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  onSearch() {
    this.show_res_partner = true;
    const body = {
      name: this.searchCustomer
    };
    this.http.get(this.api + this.configService.getAppCode() + 'Res_partner/searchCustomer', {
      headers: this.configService.headers(),
      params: {
        name: this.searchCustomer
      }
    }).subscribe(data => {
      console.log(data);
      this.total = data['total'];
      this.res_partner = data['res_partner'];
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  onSelectCustomer(x) {
    this.objCustomer = x;
    console.log(this.objCustomer);
    if (confirm("Add Activity ?")) {
      this.model.customerId = this.objCustomer['id'];
      const body = {
        model: this.model,
        customer: this.objCustomer
      };
      this.http.post(this.api + this.configService.getAppCode() + 'activities/createActivity', body, {
        headers: this.configService.headers()
      }).subscribe(data => {
        console.log(data);
        history.back();
      }, e => {
        console.log(e);
        this.note = "Error Server!";
      });
    }
  }
  back() {
    if (this.show_res_partner) {
      this.show_res_partner = false;
    } else {
      history.back();
    }
  }
}
ActivityInsertComponent.ɵfac = function ActivityInsertComponent_Factory(t) {
  return new (t || ActivityInsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
};
ActivityInsertComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ActivityInsertComponent,
  selectors: [["app-activity-insert"]],
  decls: 25,
  vars: 8,
  consts: [[1, "fixed-top", "bg-white", "shadow-sm", "border-bottom", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-10", "align-self-center", "text-center"], ["class", "p-0 m-0  ms-3", 4, "ngIf"], ["type", "date", "class", "form-control", "name", "schedule_date", "id", "schedule_date", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "card", "my-4"], [1, "card-body"], ["class", "mb-2", 4, "ngIf"], [1, "p-0", "m-0", "ms-3"], ["type", "date", "name", "schedule_date", "id", "schedule_date", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "mb-2"], ["for", "schedule_date", 1, "form-label"], ["for", "searchCustomer", 1, "form-label"], ["type", "text", "name", "searchCustomer", "minlength", "4", "id", "searchCustomer", "required", "", "placeholder", "min 4 char", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "mt-3", "d-grid"], ["type", "button", 1, "btn", "btn-lg", "btn-info", 3, "click"], [1, "form-label", "mb-2"], [1, "list-group"], ["href", "javascript:;", "class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], ["href", "javascript:;", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "lh-sm"]],
  template: function ActivityInsertComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityInsertComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ActivityInsertComponent_h5_7_Template, 2, 0, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ActivityInsertComponent_input_8_Template, 1, 1, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 1)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ActivityInsertComponent_div_15_Template, 4, 1, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ActivityInsertComponent_div_16_Template, 11, 4, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ActivityInsertComponent_div_17_Template, 5, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Dev mode :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.show_res_partner);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.show_res_partner);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.show_res_partner);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.show_res_partner);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.show_res_partner);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 6, ctx.model));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 3357:
/*!***************************************************************************!*\
  !*** ./src/app/activity/activity-schedule/activity-schedule.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityScheduleComponent: () => (/* binding */ ActivityScheduleComponent),
/* harmony export */   Model: () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);







function ActivityScheduleComponent_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const n_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", n_r6.x_employee_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", n_r6.x_name, " ");
  }
}
function ActivityScheduleComponent_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", x_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r7.x_name);
  }
}
class Model {
  constructor(x_route_id, x_schedule_date, x_salesperson_id) {
    this.x_route_id = x_route_id;
    this.x_schedule_date = x_schedule_date;
    this.x_salesperson_id = x_salesperson_id;
  }
}
class ActivityScheduleComponent {
  constructor(http, router, activeRoute, configService) {
    this.http = http;
    this.router = router;
    this.activeRoute = activeRoute;
    this.configService = configService;
    this.date = new Date();
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.prod = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production;
    this.note = "";
    this.model = new Model("", this.date.getFullYear() + '-' + ("0" + (this.date.getMonth() + 1)).slice(-2) + '-' + ("0" + this.date.getDate()).slice(-2), "");
    this.id = "";
    this.item = [];
    this.x_route = [];
    this.x_mobile_users = [];
  }
  ngOnInit() {
    this.model.x_salesperson_id = this.configService.accountId();
    this.selectActivitySchedule();
  }
  selectActivitySchedule() {
    this.model.x_route_id = "";
    this.http.get(this.api + this.configService.getAppCode() + 'activities/selectActivitySchedule/' + this.model.x_salesperson_id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.x_mobile_users = data['x_mobile_users'];
      this.x_route = data['x_route'];
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  onSubmit() {
    const body = {
      model: this.model
    };
    this.http.post(this.api + this.configService.getAppCode() + 'activities/createActivitySchedule', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      history.back();
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  back() {
    history.back();
  }
}
ActivityScheduleComponent.ɵfac = function ActivityScheduleComponent_Factory(t) {
  return new (t || ActivityScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
};
ActivityScheduleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ActivityScheduleComponent,
  selectors: [["app-activity-schedule"]],
  decls: 56,
  vars: 13,
  consts: [[1, "fixed-top", "bg-white", "shadow-sm", "border-bottom", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-10", "align-self-center", "text-center"], [1, "p-0", "m-0", "ms-3"], [3, "ngSubmit"], ["heroForm", "ngForm"], [1, "row"], [1, "col-12"], [1, "card", "my-4"], [1, "card-body"], [1, "mb-2"], ["for", "x_schedule_date", 1, "form-label"], ["type", "date", "name", "x_schedule_date", "id", "x_schedule_date", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["x_schedule_date", "ngModel"], [1, "text-danger", "fs-6", 3, "hidden"], ["for", "x_name", 1, "form-label"], ["disabled", "", "name", "x_salesperson_id", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["x_salesperson_id", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "x_route_id", 1, "form-label"], ["name", "route", "id", "route", "name", "x_route_id", 1, "form-control", 3, "ngModel", "ngModelChange"], ["x_route_id", "ngModel"], ["value", ""], [1, "col-12", 3, "hidden"], [1, "bg-white", "border-top", "shadow-sm"], [1, "d-grid", "py-2"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", 3, "disabled"], [3, "value"]],
  template: function ActivityScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityScheduleComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Activity Schedule ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ActivityScheduleComponent_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 1)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "x_schedule_date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ActivityScheduleComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.model.x_schedule_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " x_schedule_date is required ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14)(25, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "x_salesperson_id");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "select", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ActivityScheduleComponent_Template_select_ngModelChange_27_listener($event) {
        return ctx.model.x_salesperson_id = $event;
      })("change", function ActivityScheduleComponent_Template_select_change_27_listener() {
        return ctx.selectActivitySchedule();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ActivityScheduleComponent_option_29_Template, 2, 2, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " x_salesperson_id is required ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 14)(33, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "x_route_id");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "select", 24, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ActivityScheduleComponent_Template_select_ngModelChange_35_listener($event) {
        return ctx.model.x_route_id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " - Manual -");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ActivityScheduleComponent_option_39_Template, 2, 2, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " x_route_id is required ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 27)(43, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Dev mode :");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div")(46, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](48, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "footer", 28)(50, "div", 1)(51, "div", 10)(52, "div", 11)(53, "div", 29)(54, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "SUBMIT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_schedule_date);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_salesperson_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.x_mobile_users);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_route_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.x_route);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r4.valid || _r4.pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.prod);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](48, 11, ctx.model));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.form.valid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8742:
/*!************************************************!*\
  !*** ./src/app/activity/activity.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivityComponent: () => (/* binding */ ActivityComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _service_func_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/func.services */ 6624);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);







function ActivityComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ActivityComponent_div_16_div_1_small_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("badge bg-", x_r5.x_activity_status != "CLOSE" ? "secondary" : "info", " mx-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r5.x_activity_status);
  }
}
function ActivityComponent_div_16_div_1_small_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Expired");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a1) {
  return ["/activity/detail/", a1];
};
function ActivityComponent_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ActivityComponent_div_16_div_1_small_7_Template, 2, 4, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ActivityComponent_div_16_div_1_small_8_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 24)(10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 25)(13, "div", 26)(14, "div", 27)(15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Schdule Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 27)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 26)(22, "div", 27)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 27)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const x_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate2"]("card mb-3  border-", x_r5.x_activity_status == "OPEN" ? "success border-3" : "", " border-", x_r5.x_activity_status == "CHECKIN" ? "info border-3" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c0, x_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r5.x_customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.fnCheckExp(x_r5.x_schedule_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.fnCheckExp(x_r5.x_schedule_date));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c0, x_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r5.x_route_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c0, x_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](20, 13, x_r5.x_schedule_date, "d MMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](28, 16, x_r5.create_date, "medium"));
  }
}
function ActivityComponent_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 19)(2, "div", 29)(3, "div", 21)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 8)(7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 30)(10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 31)(13, "div", 26)(14, "div", 27)(15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Schdule Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 27)(18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 26)(22, "div", 27)(23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 27)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const x_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate2"]("card mb-3 disabled  border-", x_r9.x_activity_status == "OPEN" ? "success border-3" : "", " border-", x_r9.x_activity_status == "CHECKIN" ? "info border-3" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r9.x_customer_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("badge bg-", x_r9.x_activity_status != "CLOSE" ? "secondary" : "info", " mx-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r9.x_activity_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r9.x_route_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](20, 12, x_r9.x_schedule_date, "d MMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](28, 15, x_r9.create_date, "medium"));
  }
}
function ActivityComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ActivityComponent_div_16_div_1_Template, 29, 25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ActivityComponent_div_16_div_2_Template, 29, 18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.itemsLock);
  }
}
const _c1 = function () {
  return ["/activity/insert"];
};
const _c2 = function (a0) {
  return {
    activityScheduleId: a0
  };
};
function ActivityComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c2, ctx_r2.id));
  }
}
class ActivityComponent {
  constructor(http, router, configService, activeRouter, funcService) {
    this.http = http;
    this.router = router;
    this.configService = configService;
    this.activeRouter = activeRouter;
    this.funcService = funcService;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.items = [];
    this.itemsLock = [];
    this.id = "";
    this.today = '';
    this.expired = false;
  }
  ngOnInit() {
    this.today = this.funcService.formatDate();
    this.id = this.activeRouter.snapshot.queryParams['id'];
    this.httpGet();
  }
  back() {
    history.back();
  }
  httpGet() {
    this.loading = true;
    console.log(this.activeRouter.snapshot.queryParams);
    this.http.get(this.api + this.configService.getAppCode() + 'activities/index', {
      headers: this.configService.headers(),
      params: this.activeRouter.snapshot.queryParams
    }).subscribe(data => {
      this.loading = false;
      this.items = data['items'];
      this.itemsLock = data['itemsLock'];
      console.log(data);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  fnAdd() {
    const body = {
      insert: true,
      user: this.configService.account()
    };
    this.http.post(this.api + this.configService.getAppCode() + 'activities/fnAdd', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      this.router.navigate(['activity/detail', data['post']['user']['account']['id']]);
      console.log(data);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  fnRemove(x) {
    const body = {
      item: x
    };
    if (confirm("Delete this activity?")) {
      this.http.post(this.api + this.configService.getAppCode() + 'activities/fnRemove', body, {
        headers: this.configService.headers()
      }).subscribe(data => {
        this.loading = false;
        this.httpGet();
      }, e => {
        console.log(e);
        this.note = "Error Server!";
      });
    }
  }
  fnCancelActiviesSchedule() {
    const body = {
      id: this.id
    };
    if (confirm("Cancel this activities schedule ? ")) {
      this.http.post(this.api + this.configService.getAppCode() + 'activities/fnCancelActiviesSchedule', body, {
        headers: this.configService.headers(),
        params: this.activeRouter.snapshot.queryParams
      }).subscribe(data => {
        this.loading = false;
        this.items = data['items'];
        console.log(data);
        history.back();
      }, e => {
        console.log(e);
        this.note = "Error Server!";
      });
    }
  }
  fnCheckExp(date) {
    if (Date.parse(this.today) > Date.parse(date)) {
      return true;
    } else {
      return false;
    }
  }
}
ActivityComponent.ɵfac = function ActivityComponent_Factory(t) {
  return new (t || ActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_func_services__WEBPACK_IMPORTED_MODULE_2__.FuncService));
};
ActivityComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ActivityComponent,
  selectors: [["app-activity"]],
  decls: 18,
  vars: 3,
  consts: [[1, "fixed-top", "bg-gray-100", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1", "align-self-center"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-8", "align-self-center"], [1, "p-0", "m-0", "ms-3"], [1, "col-3", "text-end"], [1, "btn", "btn-danger", "rounded-pill", 3, "click"], [1, "main-content", "position-relative", "max-height-vh-100", "h-100", "border-radius-lg"], [1, "container-fluid", "py-4"], [1, "row"], ["class", "col-12", 4, "ngIf"], ["class", "floating_footer", 4, "ngIf"], [1, "col-12"], [1, "text-center", "my-5"], ["src", "./assets/gif/loadingIntro.gif", "width", "80%"], [3, "class", 4, "ngFor", "ngForOf"], [1, "card-body"], [1, "row", "g-0", 3, "routerLink"], [1, "col-9"], [3, "class", 4, "ngIf"], ["class", "badge bg-light mx-1", 4, "ngIf"], [1, "lh-sm", "mb-2", 3, "routerLink"], [1, "row", "mb-2", 3, "routerLink"], [1, "col"], [1, "lh-sm"], [1, "badge", "bg-light", "mx-1"], [1, "row", "g-0"], [1, "lh-sm", "mb-2"], [1, "row", "mb-2"], [1, "floating_footer"], [1, "display-1", 3, "routerLink", "queryParams"], [1, "bi", "bi-plus-circle-fill", "text-info"]],
  template: function ActivityComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Activites");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityComponent_Template_a_click_10_listener() {
        return ctx.fnCancelActiviesSchedule();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "main", 10)(13, "div", 11)(14, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ActivityComponent_div_15_Template, 3, 0, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ActivityComponent_div_16_Template, 3, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ActivityComponent_div_17_Template, 3, 5, "div", 14);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.id);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: [".disabled[_ngcontent-%COMP%]{\n    opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZWR7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activity/activity.component */ 8742);
/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth.guard */ 9164);
/* harmony import */ var _login_relogin_relogin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/relogin/relogin.component */ 2059);
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notfound/notfound.component */ 5848);
/* harmony import */ var _activity_activity_detail_activity_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity/activity-detail/activity-detail.component */ 2030);
/* harmony import */ var _activity_activity_schedule_activity_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activity/activity-schedule/activity-schedule.component */ 3357);
/* harmony import */ var _activity_activity_history_activity_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./activity/activity-history/activity-history.component */ 1914);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product.component */ 4368);
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product-detail/product-detail.component */ 1981);
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/product-list/product-list.component */ 936);
/* harmony import */ var _schedule_activities_schedule_activities_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./schedule-activities/schedule-activities.component */ 4215);
/* harmony import */ var _activity_activity_insert_activity_insert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./activity/activity-insert/activity-insert.component */ 5929);
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order/order.component */ 727);
/* harmony import */ var _modal_customer_modal_customer_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modal/customer-modal/customer-modal.component */ 7890);
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customer/customer.component */ 965);
/* harmony import */ var _customer_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customer/customer-detail/customer-detail.component */ 6189);
/* harmony import */ var _sql_query_sql_query_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sql-query/sql-query.component */ 69);
/* harmony import */ var _customer_customer_insert_customer_insert_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customer/customer-insert/customer-insert.component */ 8325);
/* harmony import */ var _order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./order/order-detail/order-detail.component */ 8861);
/* harmony import */ var _carts_carts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./carts/carts.component */ 8645);
/* harmony import */ var _carts_carts_detail_carts_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./carts/carts-detail/carts-detail.component */ 2772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 1699);


























const routes = [{
  path: "",
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  data: {
    active: "home"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "login",
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: "relogin",
  component: _login_relogin_relogin_component__WEBPACK_IMPORTED_MODULE_4__.ReloginComponent
}, {
  path: "home",
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  data: {
    active: "home"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "scheduleAcivities",
  component: _schedule_activities_schedule_activities_component__WEBPACK_IMPORTED_MODULE_12__.ScheduleActivitiesComponent,
  data: {
    active: "scheduleAcivities"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "activity",
  component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_2__.ActivityComponent,
  data: {
    active: "activity"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "activity/insert",
  component: _activity_activity_insert_activity_insert_component__WEBPACK_IMPORTED_MODULE_13__.ActivityInsertComponent,
  data: {
    active: "activity"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "activity/schedule",
  component: _activity_activity_schedule_activity_schedule_component__WEBPACK_IMPORTED_MODULE_7__.ActivityScheduleComponent,
  data: {
    active: "activity"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "activity/history",
  component: _activity_activity_history_activity_history_component__WEBPACK_IMPORTED_MODULE_8__.ActivityHistoryComponent,
  data: {
    active: "activity"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "activity/detail/:id",
  component: _activity_activity_detail_activity_detail_component__WEBPACK_IMPORTED_MODULE_6__.ActivityDetailComponent,
  data: {
    active: "activity"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "product",
  component: _product_product_component__WEBPACK_IMPORTED_MODULE_9__.ProductComponent,
  data: {
    active: "product"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "product/list",
  component: _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_11__.ProductListComponent,
  data: {
    active: "product"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "product/detail",
  component: _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__.ProductDetailComponent,
  data: {
    active: "product"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "modal/customer",
  component: _modal_customer_modal_customer_modal_component__WEBPACK_IMPORTED_MODULE_15__.CustomerModalComponent,
  data: {
    active: "customer"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "customer",
  component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_16__.CustomerComponent,
  data: {
    active: "customer"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "customer/detail/:id",
  component: _customer_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_17__.CustomerDetailComponent,
  data: {
    active: "customer"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "customer/insert",
  component: _customer_customer_insert_customer_insert_component__WEBPACK_IMPORTED_MODULE_19__.CustomerInsertComponent,
  data: {
    active: "customer"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "carts",
  component: _carts_carts_component__WEBPACK_IMPORTED_MODULE_21__.CartsComponent,
  data: {
    active: "cart"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "cart",
  component: _carts_carts_component__WEBPACK_IMPORTED_MODULE_21__.CartsComponent,
  data: {
    active: "cart"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "carts/detail",
  component: _carts_carts_detail_carts_detail_component__WEBPACK_IMPORTED_MODULE_22__.CartsDetailComponent,
  data: {
    active: "cart"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
},
//{ path:"cart", component:CartComponent , data: { active: "cart" },  canActivate:[authGuard]},
{
  path: "order",
  component: _order_order_component__WEBPACK_IMPORTED_MODULE_14__.OrderComponent,
  data: {
    active: "order"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "order/detail",
  component: _order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_20__.OrderDetailComponent,
  data: {
    active: "order"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "sql",
  component: _sql_query_sql_query_component__WEBPACK_IMPORTED_MODULE_18__.SqlQueryComponent,
  data: {
    active: "sql"
  },
  canActivate: [_service_auth_guard__WEBPACK_IMPORTED_MODULE_3__.authGuard]
}, {
  path: "**",
  component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__.NotfoundComponent,
  data: {
    active: "404"
  },
  canActivate: []
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



class AppComponent {
  constructor() {
    this.title = 'Bsf ng16';
    console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment);
  }
  ngOnInit() {
    let onDeviceReady = () => {
      screen.orientation.lock('portrait');
      console.log("Cordova Ready! ver 1.0.1 Stable");
      console.log('cordova ', device.cordova);
      console.log('model ', device.model);
      console.log('platform ', device.platform);
      console.log('uuid ', device.uuid);
      console.log('manufacturer ', device.manufacturer);
      console.log('isVirtual ', device.isVirtual);
      console.log('serial ', device.serial);
    };
    document.addEventListener('deviceready', onDeviceReady, false);
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
  encapsulation: 2
});


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity/activity.component */ 8742);
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notfound/notfound.component */ 5848);
/* harmony import */ var _global_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/header/header.component */ 7043);
/* harmony import */ var _login_relogin_relogin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/relogin/relogin.component */ 2059);
/* harmony import */ var _activity_activity_detail_activity_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./activity/activity-detail/activity-detail.component */ 2030);
/* harmony import */ var _activity_activity_schedule_activity_schedule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./activity/activity-schedule/activity-schedule.component */ 3357);
/* harmony import */ var _global_header_back_header_back_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/header-back/header-back.component */ 4412);
/* harmony import */ var _activity_activity_history_activity_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./activity/activity-history/activity-history.component */ 1914);
/* harmony import */ var _service_safe_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/safe.pipe */ 9263);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product/product.component */ 4368);
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product/product-detail/product-detail.component */ 1981);
/* harmony import */ var _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/product-list/product-list.component */ 936);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-datatables */ 8588);
/* harmony import */ var _schedule_activities_schedule_activities_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./schedule-activities/schedule-activities.component */ 4215);
/* harmony import */ var _activity_activity_insert_activity_insert_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./activity/activity-insert/activity-insert.component */ 5929);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cart/cart.component */ 9537);
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./order/order.component */ 727);
/* harmony import */ var _modal_customer_modal_customer_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modal/customer-modal/customer-modal.component */ 7890);
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./customer/customer.component */ 965);
/* harmony import */ var _customer_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./customer/customer-detail/customer-detail.component */ 6189);
/* harmony import */ var _sql_query_sql_query_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sql-query/sql-query.component */ 69);
/* harmony import */ var _customer_customer_insert_customer_insert_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./customer/customer-insert/customer-insert.component */ 8325);
/* harmony import */ var _order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./order/order-detail/order-detail.component */ 8861);
/* harmony import */ var _carts_carts_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./carts/carts.component */ 8645);
/* harmony import */ var _carts_carts_detail_carts_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./carts/carts-detail/carts-detail.component */ 2772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 1699);


































class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_16__.DataTablesModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _activity_activity_component__WEBPACK_IMPORTED_MODULE_4__.ActivityComponent, _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__.NotfoundComponent, _global_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _login_relogin_relogin_component__WEBPACK_IMPORTED_MODULE_7__.ReloginComponent, _activity_activity_detail_activity_detail_component__WEBPACK_IMPORTED_MODULE_8__.ActivityDetailComponent, _activity_activity_schedule_activity_schedule_component__WEBPACK_IMPORTED_MODULE_9__.ActivityScheduleComponent, _global_header_back_header_back_component__WEBPACK_IMPORTED_MODULE_10__.HeaderBackComponent, _activity_activity_history_activity_history_component__WEBPACK_IMPORTED_MODULE_11__.ActivityHistoryComponent, _service_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe, _product_product_component__WEBPACK_IMPORTED_MODULE_13__.ProductComponent, _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__.ProductDetailComponent, _product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_15__.ProductListComponent, _schedule_activities_schedule_activities_component__WEBPACK_IMPORTED_MODULE_17__.ScheduleActivitiesComponent, _activity_activity_insert_activity_insert_component__WEBPACK_IMPORTED_MODULE_18__.ActivityInsertComponent, _cart_cart_component__WEBPACK_IMPORTED_MODULE_19__.CartComponent, _order_order_component__WEBPACK_IMPORTED_MODULE_20__.OrderComponent, _modal_customer_modal_customer_modal_component__WEBPACK_IMPORTED_MODULE_21__.CustomerModalComponent, _customer_customer_component__WEBPACK_IMPORTED_MODULE_22__.CustomerComponent, _customer_customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_23__.CustomerDetailComponent, _sql_query_sql_query_component__WEBPACK_IMPORTED_MODULE_24__.SqlQueryComponent, _customer_customer_insert_customer_insert_component__WEBPACK_IMPORTED_MODULE_25__.CustomerInsertComponent, _order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_26__.OrderDetailComponent, _carts_carts_component__WEBPACK_IMPORTED_MODULE_27__.CartsComponent, _carts_carts_detail_carts_detail_component__WEBPACK_IMPORTED_MODULE_28__.CartsDetailComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_31__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_32__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_16__.DataTablesModule]
  });
})();

/***/ }),

/***/ 9537:
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartComponent: () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);








function CartComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " CART EMPTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function CartComponent_div_11_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 18)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 19)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 11)(11, "div", 20)(12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 20)(18, "div", 22)(19, "div", 23)(20, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_div_11_div_10_Template_a_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const x_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.removeCart(x_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 23)(23, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CartComponent_div_11_div_10_Template_input_ngModelChange_23_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const x_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](x_r4.x_qty = $event);
    })("change", function CartComponent_div_11_div_10_Template_input_change_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const x_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.updateQty(x_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const x_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", x_r4.x_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, x_r4.x_unitprice), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 6, x_r4.x_subtotal), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", x_r4.x_qty);
  }
}
const _c0 = function () {
  return ["/modal/customer"];
};
const _c1 = function (a0) {
  return {
    id: a0,
    requestFrom: "cart"
  };
};
function CartComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 15)(2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Select Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 16)(5, "div")(6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CartComponent_div_11_div_10_Template, 24, 8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c1, ctx_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.customer.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.customer.street);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.item);
  }
}
function CartComponent_footer_12_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r9.total), "");
  }
}
function CartComponent_footer_12_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CartComponent_footer_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 27)(1, "div", 28)(2, "div", 11)(3, "div", 29)(4, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CartComponent_footer_12_span_7_Template, 3, 3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CartComponent_footer_12_span_8_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 20)(10, "div", 31)(11, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_footer_12_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.onCloseCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "ORDER");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.customer.id == 0);
  }
}
class CartComponent {
  constructor(http, router, configService, activeRoute, modalService) {
    this.http = http;
    this.router = router;
    this.configService = configService;
    this.activeRoute = activeRoute;
    this.modalService = modalService;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.item = [];
    this.id = "";
    this.total = 0;
    this.customer = [];
  }
  ngOnInit() {
    this.httpGet();
  }
  httpGet() {
    this.loading = true;
    this.http.get(this.api + this.configService.getAppCode() + 'cart', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.customer = data['customer'];
      this.loading = false;
      this.item = data['item'];
      this.id = data['id'];
      console.log(data);
      this.total = data['total'];
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  updateQty(x) {
    this.loading = true;
    const body = {
      item: x
    };
    this.http.post(this.api + this.configService.getAppCode() + 'cart/updateQty', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      this.httpGet();
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  back() {
    history.back();
  }
  open(content) {
    this.modalService.open(content, {
      fullscreen: true
    });
  }
  removeCart(x) {
    if (confirm("Remove this item ?")) {
      const body = {
        item: x
      };
      this.loading = true;
      this.http.post(this.api + this.configService.getAppCode() + 'cart/removeCart', body, {
        headers: this.configService.headers()
      }).subscribe(data => {
        this.loading = false;
        this.httpGet();
      }, e => {
        console.log(e);
        this.note = "Error Server!";
      });
    }
  }
  onCloseCart() {
    const body = {
      id: this.id
    };
    this.http.post(this.api + this.configService.getAppCode() + 'cart/onCloseCart', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.router.navigate(['order']);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
}
CartComponent.ɵfac = function CartComponent_Factory(t) {
  return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal));
};
CartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CartComponent,
  selectors: [["app-cart"]],
  decls: 13,
  vars: 3,
  consts: [[1, "fixed-top", "py-2", "bg-white", "shadow-sm"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1", "align-self-center"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-10", "align-self-center", "text-center"], [2, "margin-bottom", "100px"], ["class", "row", 4, "ngIf"], ["class", "row g-1", 4, "ngIf"], ["class", "bg-white border-top shadow-sm", 4, "ngIf"], [1, "row"], [1, "col-12"], [1, "alert", "alert-warning", "text-center", "my-5"], [1, "text-white"], [1, "col-12", "my-4"], [1, "form-control", 3, "routerLink", "queryParams"], ["class", "col-12 ", 4, "ngFor", "ngForOf"], [1, "bg-white", "p-4", "border-bottom"], [1, "mb-3"], [1, "col-6", "align-self-center"], [1, "lh-1"], [1, "d-flex", "justify-content-end"], [1, "mx-1", "align-self-center"], [3, "click"], [1, "bi", "bi-trash3"], ["type", "number", "name", "x_qty", 1, "form-control", "form-control-lg", "py-1", "text-center", 2, "width", "80px", 3, "ngModel", "ngModelChange", "change"], [1, "bg-white", "border-top", "shadow-sm"], [1, "container", "py-2"], [1, "col-6", "align-self-center", "lh-1"], [4, "ngIf"], [1, "d-grid", "py-2"], [1, "btn", "btn-info", "rounded-pill", 3, "disabled", "click"]],
  template: function CartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "CART");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CartComponent_div_10_Template, 5, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CartComponent_div_11_Template, 11, 8, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CartComponent_footer_12_Template, 13, 3, "footer", 10);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.length != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.length != 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2772:
/*!**************************************************************!*\
  !*** ./src/app/carts/carts-detail/carts-detail.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartsDetailComponent: () => (/* binding */ CartsDetailComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);








function CartsDetailComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function CartsDetailComponent_div_13_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 8)(2, "div", 30)(3, "strong")(4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Product name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div")(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 31)(10, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartsDetailComponent_div_13_div_48_Template_a_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const x_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.fnDeleteDetail(x_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2)(13, "div", 33)(14, "strong")(15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Grand Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 34)(21, "strong")(22, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Num. Of Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div")(25, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CartsDetailComponent_div_13_div_48_Template_input_ngModelChange_25_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const x_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](x_r3.x_qty = $event);
    })("change", function CartsDetailComponent_div_13_div_48_Template_input_change_25_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const x_r3 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.updateQty(x_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 36)(27, "strong")(28, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Grand Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const x_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r3.x_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 4, x_r3.x_unitprice), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", x_r3.x_qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 6, x_r3.x_subtotal), " ");
  }
}
const _c0 = function () {
  return ["/customer"];
};
const _c1 = function (a0) {
  return {
    cardId: a0
  };
};
const _c2 = function () {
  return ["/product"];
};
function CartsDetailComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 2)(3, "div", 16)(4, "strong")(5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 17)(11, "strong")(12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div")(15, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 17)(18, "strong")(19, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Magic Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8)(25, "div", 14)(26, "strong")(27, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 18)(30, "div", 19)(31, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 2)(34, "div", 20)(35, "strong")(36, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Grand Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 22)(42, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartsDetailComponent_div_13_Template_a_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div")(46, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Order detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, CartsDetailComponent_div_13_div_48_Template, 33, 8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 26)(50, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "ADD ITEM");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 26)(53, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartsDetailComponent_div_13_Template_a_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.onCloseCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "CLOSE CARD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.header.x_order_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.header.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.header.x_is_magic_order == "t" ? "TRUE" : "FALSE", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c1, ctx_r1.header.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.header.x_customer, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 10, ctx_r1.header.totalAmount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c1, ctx_r1.header.id));
  }
}
class CartsDetailComponent {
  constructor(http, router, configService, activeRoute, modalService) {
    this.http = http;
    this.router = router;
    this.configService = configService;
    this.activeRoute = activeRoute;
    this.modalService = modalService;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.items = [];
    this.header = [];
    this.id = "";
    this.total = 0;
    this.customer = [];
  }
  ngOnInit() {
    this.id = this.activeRoute.snapshot.queryParams['id'];
    this.httpGet();
  }
  httpGet() {
    this.loading = true;
    this.http.get(this.api + this.configService.getAppCode() + 'carts/detail', {
      headers: this.configService.headers(),
      params: {
        id: this.activeRoute.snapshot.queryParams['id']
      }
    }).subscribe(data => {
      this.loading = false;
      this.items = data['items'];
      this.header = data['header'][0];
      this.id = data['id'];
      console.log(data);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  updateQty(x) {
    this.loading = true;
    const body = {
      item: x
    };
    this.http.post(this.api + this.configService.getAppCode() + 'carts/updateQty', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      this.httpGet();
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  fnDeleteDetail(id) {
    if (confirm("Delete this item ? ")) {
      const body = {
        id: id
      };
      this.http.post(this.api + this.configService.getAppCode() + 'carts/fnDeleteDetail', body, {
        headers: this.configService.headers()
      }).subscribe(data => {
        this.loading = true;
        this.httpGet();
      }, e => {
        console.log(e);
        this.note = "Error Server!";
      });
    }
  }
  back() {
    history.back();
  }
  open(content) {
    this.modalService.open(content, {
      fullscreen: true
    });
  }
  removeCart(x) {
    if (confirm("Remove this item ?")) {
      const body = {
        item: x
      };
      this.loading = true;
      this.http.post(this.api + this.configService.getAppCode() + 'cart/removeCart', body, {
        headers: this.configService.headers()
      }).subscribe(data => {
        this.loading = false;
        this.httpGet();
      }, e => {
        console.log(e);
        this.note = "Error Server!";
      });
    }
  }
  remove() {
    if (confirm("Remove this item ?")) {
      const body = {
        item: {
          id: this.activeRoute.snapshot.queryParams['id']
        }
      };
      this.loading = true;
      this.http.post(this.api + this.configService.getAppCode() + 'carts/removeCart', body, {
        headers: this.configService.headers()
      }).subscribe(data => {
        this.loading = false;
        history.back();
      }, e => {
        console.log(e);
        this.note = "Error Server!";
      });
    }
  }
  onCloseCart() {
    const body = {
      id: this.activeRoute.snapshot.queryParams['id']
    };
    this.http.post(this.api + this.configService.getAppCode() + 'carts/onCloseCart', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.router.navigate(['home']);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
}
CartsDetailComponent.ɵfac = function CartsDetailComponent_Factory(t) {
  return new (t || CartsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal));
};
CartsDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CartsDetailComponent,
  selectors: [["app-carts-detail"]],
  decls: 14,
  vars: 3,
  consts: [[1, "fixed-top", "py-2", "bg-white", "shadow-sm"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1", "align-self-center"], [1, "navbar-brand", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-10", "align-self-center", "text-center"], [1, "main-content", "position-relative", "max-height-vh-100", "h-100", "border-radius-lg"], [1, "row"], ["class", "col-12 mb-3", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "col-12", "mb-3"], [1, "text-center", "my-5"], ["src", "./assets/gif/loadingIntro.gif", "width", "80%"], [1, "col-12"], [1, "px-3", "py-2", "mb-3"], [1, "col-6"], [1, "col-3", "text-end"], [3, "routerLink", "queryParams"], [1, "form-control", "form-control-sm", "border"], [1, "col-6", "align-self-center"], [1, "lh-1"], [1, "col-6", "align-self-center", "text-end"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "bi", "bi-trash3"], ["class", "bg-white px-3 py-2 border  mb-3", 4, "ngFor", "ngForOf"], [1, "d-grid", "mb-2"], [1, "btn", "btn-lg", "btn-primary", 3, "routerLink", "queryParams"], [1, "btn", "btn-lg", "btn-success", 3, "click"], [1, "bg-white", "px-3", "py-2", "border", "mb-3"], [1, "col-10"], [1, "col-2", "text-end"], [3, "click"], [1, "col-4", "align-self-center"], [1, "col-3", "align-self-center", "text-center"], ["type", "number", "name", "x_qty", 1, "form-control", "text-center", 3, "ngModel", "ngModelChange", "change"], [1, "col-5", "align-self-center", "text-end"]],
  template: function CartsDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartsDetailComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "main", 7)(10, "div", 1)(11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CartsDetailComponent_div_12_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CartsDetailComponent_div_13_Template, 55, 18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("ORDER ID : ", ctx.header.id, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
  styles: [".bi[_ngcontent-%COMP%]{\n    font-size:0.8rem !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FydHMvY2FydHMtZGV0YWlsL2NhcnRzLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYml7XHJcbiAgICBmb250LXNpemU6MC44cmVtICFpbXBvcnRhbnQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 8645:
/*!******************************************!*\
  !*** ./src/app/carts/carts.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartsComponent: () => (/* binding */ CartsComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);







function CartsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return ["/carts/detail"];
};
const _c1 = function (a0) {
  return {
    id: a0
  };
};
function CartsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "a", 20)(4, "strong")(5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 21)(12, "a", 20)(13, "strong")(14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div")(17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 21)(20, "a", 20)(21, "strong")(22, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Magic Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div")(25, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 8)(28, "div", 10)(29, "a", 20)(30, "strong")(31, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Customer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div")(34, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 2)(37, "div", 22)(38, "a", 20)(39, "strong")(40, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Grand Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 24)(46, "strong")(47, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Num. Of Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 25)(52, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartsComponent_div_16_Template_a_click_52_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const x_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.removeCart(x_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const x_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c1, x_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 16, x_r2.x_order_date, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](24, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c1, x_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](27, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c1, x_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", x_r2.x_is_magic_order == "t" ? "TRUE" : "FALSE", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](31, _c1, x_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", x_r2.x_customer, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](33, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](34, _c1, x_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 19, x_r2.totalAmount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", x_r2.qty, " ");
  }
}
class CartsComponent {
  constructor(http, router, configService, activeRoute, modalService) {
    this.http = http;
    this.router = router;
    this.configService = configService;
    this.activeRoute = activeRoute;
    this.modalService = modalService;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.items = [];
    this.header = [];
    this.id = "";
    this.total = 0;
    this.customer = [];
  }
  ngOnInit() {
    this.httpGet();
  }
  httpGet() {
    this.loading = true;
    this.http.get(this.api + this.configService.getAppCode() + 'carts', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.items = data['x_customer_po'];
      this.loading = false;
      console.log(data);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  back() {
    history.back();
  }
  open(content) {
    this.modalService.open(content, {
      fullscreen: true
    });
  }
  removeCart(x) {
    if (confirm("Remove this item ?")) {
      const body = {
        item: x
      };
      this.loading = true;
      this.http.post(this.api + this.configService.getAppCode() + 'carts/removeCart', body, {
        headers: this.configService.headers()
      }).subscribe(data => {
        this.loading = false;
        this.httpGet();
      }, e => {
        console.log(e);
        this.note = "Error Server!";
      });
    }
  }
  onCloseCart() {
    const body = {
      id: this.id
    };
    this.http.post(this.api + this.configService.getAppCode() + 'cart/onCloseCart', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.router.navigate(['order']);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  newOrder() {
    const body = {
      status: true
    };
    this.http.post(this.api + this.configService.getAppCode() + 'carts/newOrder', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.httpGet();
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
}
CartsComponent.ɵfac = function CartsComponent_Factory(t) {
  return new (t || CartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal));
};
CartsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CartsComponent,
  selectors: [["app-carts"]],
  decls: 21,
  vars: 2,
  consts: [[1, "fixed-top", "py-2", "bg-white", "shadow-sm"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1", "align-self-center"], [1, "navbar-brand", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-10", "align-self-center", "text-center"], [1, "main-content", "position-relative", "max-height-vh-100", "h-100", "border-radius-lg"], [1, "row"], ["class", "col-12 mb-3", 4, "ngIf"], [1, "col-12"], ["class", "bg-white px-3 py-2 border  mb-3", 4, "ngFor", "ngForOf"], [1, "d-grid"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "col-12", "mb-3"], [1, "text-center", "my-5"], ["src", "./assets/gif/loadingIntro.gif", "width", "80%"], [1, "bg-white", "px-3", "py-2", "border", "mb-3"], [1, "row", "g-2"], [1, "col-6"], [3, "routerLink", "queryParams"], [1, "col-3", "text-end"], [1, "col-6", "align-self-center"], [1, "lh-1"], [1, "col-4", "align-self-center", "text-center"], [1, "col-2", "align-self-center", "text-end"], [1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-trash3"]],
  template: function CartsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartsComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "ORDERS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "main", 7)(10, "div", 1)(11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CartsComponent_div_12_Template, 3, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Carts ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CartsComponent_div_16_Template, 54, 36, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10)(18, "div", 12)(19, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartsComponent_Template_button_click_19_listener() {
        return ctx.newOrder();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "New Order");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: [".bi[_ngcontent-%COMP%]{\n    font-size:0.8rem !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FydHMvY2FydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJpe1xyXG4gICAgZm9udC1zaXplOjAuOHJlbSAhaW1wb3J0YW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6189:
/*!***********************************************************************!*\
  !*** ./src/app/customer/customer-detail/customer-detail.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerDetailComponent: () => (/* binding */ CustomerDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CustomerDetailComponent {}
CustomerDetailComponent.ɵfac = function CustomerDetailComponent_Factory(t) {
  return new (t || CustomerDetailComponent)();
};
CustomerDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CustomerDetailComponent,
  selectors: [["app-customer-detail"]],
  decls: 2,
  vars: 0,
  template: function CustomerDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "customer-detail works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8325:
/*!***********************************************************************!*\
  !*** ./src/app/customer/customer-insert/customer-insert.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerInsertComponent: () => (/* binding */ CustomerInsertComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);






class Hero {
  constructor(x_customersequence, name, x_short_name, x_customertype, phone, email, x_ktp, l10n_id_pkp, x_npwp, x_alamat_npwp, vat, x_pbf, x_is_bsf_group, x_aks, x_cabangutama, x_cabangpembantu, street, x_kodeareaid, x_kodearea, x_namaarea, x_wilayah, x_kodewilayah, x_provinsi, x_kecamatan, x_kabupaten, x_salesman, x_collector, x_delivery) {
    this.x_customersequence = x_customersequence;
    this.name = name;
    this.x_short_name = x_short_name;
    this.x_customertype = x_customertype;
    this.phone = phone;
    this.email = email;
    this.x_ktp = x_ktp;
    this.l10n_id_pkp = l10n_id_pkp;
    this.x_npwp = x_npwp;
    this.x_alamat_npwp = x_alamat_npwp;
    this.vat = vat;
    this.x_pbf = x_pbf;
    this.x_is_bsf_group = x_is_bsf_group;
    this.x_aks = x_aks;
    this.x_cabangutama = x_cabangutama;
    this.x_cabangpembantu = x_cabangpembantu;
    this.street = street;
    this.x_kodeareaid = x_kodeareaid;
    this.x_kodearea = x_kodearea;
    this.x_namaarea = x_namaarea;
    this.x_wilayah = x_wilayah;
    this.x_kodewilayah = x_kodewilayah;
    this.x_provinsi = x_provinsi;
    this.x_kecamatan = x_kecamatan;
    this.x_kabupaten = x_kabupaten;
    this.x_salesman = x_salesman;
    this.x_collector = x_collector;
    this.x_delivery = x_delivery;
  }
}
class CustomerInsertComponent {
  constructor(http, configService, activeRouter) {
    this.http = http;
    this.configService = configService;
    this.activeRouter = activeRouter;
    this.note = "";
    this.gpsInfo = [];
    this.model = new Hero('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
  }
  onSubmit() {
    console.log(this.model);
    this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + this.configService.getAppCode() + "Res_partner/onSubmit", this.model, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  back() {
    history.back();
  }
  gps() {
    console.log("GEO is :");
    let self = this;
    var onSuccess = function (position) {
      self.note = "GPS Success ";
      console.log('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: ' + position.coords.longitude + '\n' + 'Altitude: ' + position.coords.altitude + '\n' + 'Accuracy: ' + position.coords.accuracy + '\n' + 'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' + 'Heading: ' + position.coords.heading + '\n' + 'Speed: ' + position.coords.speed + '\n' + 'Timestamp: ' + position.timestamp + '\n');
      self.gpsInfo = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
        timestamp: position.timestamp
      };
    };
    // onError Callback receives a PositionError object
    //
    function onError(error) {
      console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }
}
CustomerInsertComponent.ɵfac = function CustomerInsertComponent_Factory(t) {
  return new (t || CustomerInsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
CustomerInsertComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CustomerInsertComponent,
  selectors: [["app-customer-insert"]],
  decls: 119,
  vars: 23,
  consts: [[1, "fixed-top", "bg-white", "shadow-sm", "border-bottom", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-10", "align-self-center", "text-center"], [1, "p-0", "m-0", "ms-3"], [1, "row"], [1, "col-12"], [3, "ngSubmit"], ["heroForm", "ngForm"], [1, "card", "my-4"], [1, "card-body"], [1, "mb-2"], ["for", "x_customersequence", 1, "form-label"], ["type", "text", "name", "x_customersequence", "id", "x_customersequence", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "name", 1, "form-label"], ["type", "text", "name", "name", "id", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_short_name", 1, "form-label"], ["type", "text", "name", "x_short_name", "id", "x_short_name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_customertype", 1, "form-label"], ["type", "text", "name", "x_customertype", "id", "x_customertype", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "phone", 1, "form-label"], ["type", "tel", "name", "phone", "id", "phone", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email", 1, "form-label"], ["type", "email", "name", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_ktp", 1, "form-label"], ["type", "number", "name", "x_ktp", "id", "x_ktp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_npwp", 1, "form-label"], ["type", "text", "name", "x_npwp", "id", "x_npwp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_alamat_npwp", 1, "form-label"], ["type", "text", "name", "x_alamat_npwp", "id", "x_alamat_npwp", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_cabangutama", 1, "form-label"], ["type", "text", "name", "x_cabangutama", "id", "x_cabangutama", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_cabangpembantu", 1, "form-label"], ["type", "text", "name", "x_cabangpembantu", "id", "x_cabangpembantu", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "street", 1, "form-label"], ["name", "street", "id", "street", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_kodeareaid", 1, "form-label"], ["type", "text", "name", "x_kodeareaid", "id", "x_kodeareaid", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_kodearea", 1, "form-label"], ["type", "text", "name", "x_kodearea", "id", "x_kodearea", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_namaarea", 1, "form-label"], ["type", "text", "name", "x_namaarea", "id", "x_namaarea", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_wilayah", 1, "form-label"], ["type", "text", "name", "x_wilayah", "id", "x_wilayah", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_kodewilayah", 1, "form-label"], ["type", "text", "name", "x_kodewilayah", "id", "x_kodewilayah", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_provinsi", 1, "form-label"], ["type", "text", "name", "x_provinsi", "id", "x_provinsi", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_kecamatan", 1, "form-label"], ["type", "text", "name", "x_kecamatan", "id", "x_kecamatan", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_kabupaten", 1, "form-label"], ["type", "text", "name", "x_kabupaten", "id", "x_kabupaten", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_salesman", 1, "form-label"], ["type", "text", "name", "x_salesman", "id", "x_salesman", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_collector", 1, "form-label"], ["type", "text", "name", "x_collector", "id", "x_collector", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_delivery", 1, "form-label"], ["type", "text", "name", "x_delivery", "id", "x_delivery", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "my-3", "d-grid"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary"]],
  template: function CustomerInsertComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerInsertComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " New Customer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 1)(11, "div", 8)(12, "div", 9)(13, "form", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CustomerInsertComponent_Template_form_ngSubmit_13_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "div", 14)(18, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Customer ID");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.model.x_customersequence = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "small")(22, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Customer name required");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14)(25, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Display Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_27_listener($event) {
        return ctx.model.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "small")(29, "em");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "name required");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 14)(32, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "x_short_name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_34_listener($event) {
        return ctx.model.x_short_name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 14)(36, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Customer Type (x_customertype)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_38_listener($event) {
        return ctx.model.x_customertype = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 14)(40, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "input", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_42_listener($event) {
        return ctx.model.phone = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 14)(44, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_46_listener($event) {
        return ctx.model.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 14)(48, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "x_ktp");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_50_listener($event) {
        return ctx.model.x_ktp = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 14)(52, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "x_npwp");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_54_listener($event) {
        return ctx.model.x_npwp = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 14)(56, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "x_alamat_npwp");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_58_listener($event) {
        return ctx.model.x_alamat_npwp = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 14)(60, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "x_cabangutama");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_62_listener($event) {
        return ctx.model.x_cabangutama = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 14)(64, "div", 14)(65, "label", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "x_cabangpembantu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_67_listener($event) {
        return ctx.model.x_cabangpembantu = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 14)(69, "label", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "street");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "textarea", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_textarea_ngModelChange_71_listener($event) {
        return ctx.model.x_customersequence = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 14)(73, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "x_kodeareaid");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_75_listener($event) {
        return ctx.model.x_kodeareaid = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 14)(77, "label", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "x_kodearea");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_79_listener($event) {
        return ctx.model.x_kodearea = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 14)(81, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "x_namaarea");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_83_listener($event) {
        return ctx.model.x_namaarea = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 14)(85, "label", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "x_wilayah");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_87_listener($event) {
        return ctx.model.x_wilayah = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 14)(89, "label", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "x_kodewilayah");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "input", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_91_listener($event) {
        return ctx.model.x_kodewilayah = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 14)(93, "label", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "x_provinsi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_95_listener($event) {
        return ctx.model.x_provinsi = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 14)(97, "label", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "x_kecamatan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_99_listener($event) {
        return ctx.model.x_kecamatan = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 14)(101, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "x_kabupaten");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_103_listener($event) {
        return ctx.model.x_kabupaten = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 14)(105, "label", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "x_salesman");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "input", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_107_listener($event) {
        return ctx.model.x_salesman = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 14)(109, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "x_collector");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "input", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_111_listener($event) {
        return ctx.model.x_collector = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 14)(113, "label", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "x_delivery");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "input", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerInsertComponent_Template_input_ngModelChange_115_listener($event) {
        return ctx.model.x_delivery = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 61)(117, "button", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "SAVE");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_customersequence);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_short_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_customertype);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.phone);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_ktp);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_npwp);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_alamat_npwp);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_cabangutama);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_cabangpembantu);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_customersequence);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_kodeareaid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_kodearea);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_namaarea);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_wilayah);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_kodewilayah);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_provinsi);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_kecamatan);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_kabupaten);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_salesman);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_collector);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_delivery);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 965:
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerComponent: () => (/* binding */ CustomerComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);







function CustomerComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Search Customer by Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerComponent_div_15_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.searchCustomer = $event);
    })("keydown.enter", function CustomerComponent_div_15_Template_input_keydown_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "small")(5, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 19)(9, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerComponent_div_15_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Search by name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.searchCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 2, ctx_r0.totalAll), " customer in database");
  }
}
function CustomerComponent_div_16_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerComponent_div_16_a_4_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const x_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.onSelectCustomer(x_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 25)(5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r7.street);
  }
}
function CustomerComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CustomerComponent_div_16_a_4_Template, 7, 2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Search Customer by keyword \"", ctx_r1.searchCustomer, "\", total search ", ctx_r1.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.res_partner);
  }
}
const _c0 = function () {
  return ["/customer/insert"];
};
class CustomerComponent {
  constructor(http, router, activeRoute, configService) {
    this.http = http;
    this.router = router;
    this.activeRoute = activeRoute;
    this.configService = configService;
    this.date = new Date();
    this.show_res_partner = false;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.searchCustomer = "";
    this.id = "";
    this.item = [];
    this.res_partner = [];
    this.total = 0;
    this.totalAll = 0;
    this.objCustomer = [];
  }
  ngOnInit() {
    this.httpGet();
  }
  httpGet() {
    this.http.get(this.api + this.configService.getAppCode() + 'Res_partner', {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.totalAll = data['total'];
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  onSearch() {
    this.show_res_partner = true;
    const body = {
      name: this.searchCustomer
    };
    this.http.get(this.api + this.configService.getAppCode() + 'Res_partner/searchCustomer', {
      headers: this.configService.headers(),
      params: {
        name: this.searchCustomer
      }
    }).subscribe(data => {
      console.log(data);
      this.total = data['total'];
      this.res_partner = data['res_partner'];
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  onSelectCustomer(x) {
    this.objCustomer = x;
    console.log(this.objCustomer);
    if (this.activeRoute.snapshot.queryParams['cardId']) {
      const body = {
        id: this.activeRoute.snapshot.queryParams['cardId'],
        item: x
      };
      this.http.post(this.api + this.configService.getAppCode() + "carts/updateCustomer", body, {
        headers: this.configService.headers()
      }).subscribe(data => {
        console.log(data);
        history.back();
      }, error => {
        console.log(error);
      });
    }
  }
  back() {
    if (this.show_res_partner) {
      this.show_res_partner = false;
    } else {
      history.back();
    }
  }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) {
  return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
};
CustomerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CustomerComponent,
  selectors: [["app-customer"]],
  decls: 20,
  vars: 4,
  consts: [[1, "fixed-top", "bg-white", "shadow-sm", "border-bottom", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-10", "align-self-center", "text-center"], [1, "p-0", "m-0", "ms-3"], [1, "row"], [1, "col-12"], [1, "card", "my-4"], [1, "card-body"], ["class", "mb-2", 4, "ngIf"], [1, "floating_footer"], [1, "display-1", 3, "routerLink"], [1, "bi", "bi-plus-circle-fill", "text-info"], [1, "mb-2"], ["for", "searchCustomer", 1, "form-label"], ["type", "text", "name", "searchCustomer", "minlength", "4", "id", "searchCustomer", "required", "", "placeholder", "min 4 char", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "mt-3", "d-grid"], ["type", "button", 1, "btn", "btn-lg", "btn-info", 3, "click"], [1, "form-label", "mb-2"], [1, "list-group"], ["href", "javascript:;", "class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], ["href", "javascript:;", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "lh-sm"]],
  template: function CustomerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Search Customer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 1)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CustomerComponent_div_15_Template, 11, 4, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CustomerComponent_div_16_Template, 5, 3, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13)(18, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.show_res_partner);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.show_res_partner);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4412:
/*!*************************************************************!*\
  !*** ./src/app/global/header-back/header-back.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderBackComponent: () => (/* binding */ HeaderBackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HeaderBackComponent {
  back() {
    history.back();
  }
}
HeaderBackComponent.ɵfac = function HeaderBackComponent_Factory(t) {
  return new (t || HeaderBackComponent)();
};
HeaderBackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderBackComponent,
  selectors: [["app-header-back"]],
  decls: 12,
  vars: 0,
  consts: [[1, "navbar", "fixed-top"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1", "align-self-center"], [1, "navbar-brand", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-5"], [1, "navbar-brand"], [1, "col-6", "text-end"]],
  template: function HeaderBackComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderBackComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Activites schedule");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 7043:
/*!***************************************************!*\
  !*** ./src/app/global/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);





class HeaderComponent {
  constructor(http, router, configService) {
    this.http = http;
    this.router = router;
    this.configService = configService;
    this.account = [];
    this.ver = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
  }
  ngOnInit() {
    this.account = this.configService.account()['account'];
    console.log(this.account);
  }
  logout() {
    this.configService.removeToken().subscribe(data => {
      if (data == true) {
        this.router.navigate(['relogin']);
      }
    });
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 23,
  vars: 2,
  consts: [[1, "fixed-top", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1"], [1, "col-10", "align-self-center", "text-center"], [1, "col-1", "align-self-center", "text-center"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasNavbarLight", "aria-controls", "offcanvasNavbarLight", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "bi", "bi-list"], ["tabindex", "-1", "id", "offcanvasNavbarLight", "aria-labelledby", "offcanvasNavbarLightLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "offcanvasNavbarLightLabel", 1, "offcanvas-title"], ["data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, ""], [1, "bi", "bi-x-lg"], [1, "offcanvas-body"], [1, "navbar-nav", "justify-content-end", "flex-grow-1", "pe-3"], [1, "nav-item"], ["data-bs-dismiss", "offcanvas", 1, "nav-link", 3, "click"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ul", 14)(19, "li", 15)(20, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_20_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Log Out");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.ver, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Hi, ", ctx.account["x_name"], " ");
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _global_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global/header/header.component */ 7043);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);







const _c0 = function () {
  return ["/scheduleAcivities"];
};
const _c1 = function () {
  return ["/activity"];
};
const _c2 = function () {
  return ["/product"];
};
const _c3 = function () {
  return ["/carts"];
};
const _c4 = function () {
  return ["/order"];
};
const _c5 = function () {
  return ["/customer"];
};
class HomeComponent {
  constructor(http, config, ngZone) {
    this.http = http;
    this.config = config;
    this.ngZone = ngZone;
    this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.gpsInfo = [];
    this.note = "";
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.clock = {
      clickIn: "loading...",
      clickOut: "loading..."
    };
    this.cameraSuccess = imagesData => {
      console.log("cameraSuccess : ", imagesData);
      this.ngZone.run(() => {
        console.log('data:image/png;base64,' + imagesData);
      });
    };
    this.cameraError = e => {
      this.note = 'Error Camera ';
      console.log('error Camera', e);
    };
  }
  ngOnInit() {
    console.log(this.config.account());
    this.getClockDate();
    this.timer = setInterval(() => {
      this.getClockDate();
    }, 1000 * 60 * 60);
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  getClockDate() {
    console.log("runing");
    this.http.get(this.api + this.config.getAppCode() + "Attendance/today", {
      headers: this.config.headers()
    }).subscribe(data => {
      this.clock['clickIn'] = data['items']['x_clock_in'];
      this.clock['clickOut'] = data['items']['x_clock_out'];
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  callApi() {
    //http://systemapk.bsfar.com:41021/api-dev/v1/
    this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + this.config.getAppCode()).subscribe(data => {
      console.log(data);
      this.note = "Call Success ";
    }, e => {
      console.log(e);
      this.note = "Error";
    });
  }
  gps() {
    console.log("GEO is :");
    let self = this;
    var onSuccess = function (position) {
      self.note = "GPS Success ";
      console.log('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: ' + position.coords.longitude + '\n' + 'Altitude: ' + position.coords.altitude + '\n' + 'Accuracy: ' + position.coords.accuracy + '\n' + 'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' + 'Heading: ' + position.coords.heading + '\n' + 'Speed: ' + position.coords.speed + '\n' + 'Timestamp: ' + position.timestamp + '\n');
      self.gpsInfo = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
        timestamp: position.timestamp
      };
    };
    // onError Callback receives a PositionError object
    //
    function onError(error) {
      console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }
  cam() {
    const options = {
      destinationType: Camera.DestinationType.DATA_URL,
      quality: 100,
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true
    };
    let self = this;
    navigator.camera.getPicture(this.cameraSuccess, this.cameraError, options);
  }
  portal1() {
    this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "bsf-portal/index.php/mobile_api/product").subscribe(data => {
      console.log(data);
      this.note = "Success";
    }, e => {
      console.log(e);
      this.note = "Error";
    });
  }
  clockIn() {
    const body = {
      error: false
    };
    this.http.post(this.api + this.config.getAppCode() + "Attendance/clockIn", body, {
      headers: this.config.headers()
    }).subscribe(data => {
      console.log(data);
      this.getClockDate();
    }, error => {
      console.log(error);
    });
  }
  clockOut() {
    const body = {
      error: false
    };
    this.http.post(this.api + this.config.getAppCode() + "Attendance/clockOut", body, {
      headers: this.config.headers()
    }).subscribe(data => {
      console.log(data);
      this.getClockDate();
    }, error => {
      console.log(error);
    });
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 120,
  vars: 22,
  consts: [[1, "main1"], [1, "container-fluid"], [1, "row"], [1, "col-12", "py-3"], ["src", "./assets/img/logo.png", "width", "40%"], [1, "row", "g-3", "mb-3"], [1, "col-12"], [1, "col-6"], [1, "bg-white", "rounded", "shadow-sm", "text-center", 3, "click"], [1, "lh-1", "py-2"], [1, "mb-0"], [1, "bi", "bi-box-arrow-in-right"], [1, "mt-1"], [1, "text-primary"], [1, "bi", "bi-box-arrow-right"], [1, "col-4"], [1, "bg-white", "rounded", "shadow-sm", "text-center", 3, "routerLink"], [1, "bi", "bi-calendar3"], [1, "bi", "bi-pin-map"], [1, "bi", "bi-box2"], [1, "row", "g-3", "mb-5"], [1, "bi", "bi-cart3"], [1, "bi", "bi-archive"], [1, "bi", "bi-person-vcard"], [1, "row", "g-3"], [1, "bi", "bi-database-up"], [1, "bi", "bi-camera2"], [1, "bi", "bi-braces-asterisk"], [1, "bg-light", "rounded", "p-2"], [1, "row", 3, "hidden"], [1, "lh-1", "my-3", "alert", "bg-light"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "small")(9, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Clock In and Out");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7)(12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_12_listener() {
        return ctx.clockIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9)(14, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Clock In ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12)(19, "code", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 7)(22, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_22_listener() {
        return ctx.clockOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 9)(24, "h2", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Clock Out ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 12)(29, "code", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 5)(32, "div", 6)(33, "small")(34, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Main Menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 15)(37, "div", 16)(38, "div", 9)(39, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Schedule ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 15)(44, "div", 16)(45, "div", 9)(46, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Activty");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 15)(51, "div", 16)(52, "div", 9)(53, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " Product ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 20)(58, "div", 15)(59, "div", 16)(60, "div", 9)(61, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Order ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 15)(66, "div", 16)(67, "div", 9)(68, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " History ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 15)(73, "div", 16)(74, "div", 9)(75, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, " Customer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 24)(80, "div", 6)(81, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Check Device Only");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 15)(84, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_84_listener() {
        return ctx.callApi();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 9)(86, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "i", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "small")(89, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Test Oddo Server");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 15)(92, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_92_listener() {
        return ctx.cam();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 9)(94, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "small")(97, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Test Camera Allowed");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 15)(100, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_100_listener() {
        return ctx.gps();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 9)(102, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](103, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "small")(105, "a");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "Test GPS Allowed");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 6)(108, "div", 28)(109, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](113, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 29)(115, "div", 6)(116, "div", 30)(117, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](119, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.clock["clickIn"], " \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.clock["clickOut"], " \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.note, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](113, 12, ctx.gpsInfo), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.env.production == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](119, 14, ctx.env), "");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _global_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.JsonPipe],
  styles: [".main1[_ngcontent-%COMP%]{\n    background: url('bgn.jpg') top center no-repeat;\n    background-size: contain;\n   margin-top: -58px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQ0FBZ0U7SUFDaEUsd0JBQXdCO0dBQ3pCLGlCQUFpQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluMXtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9iZ24uanBnJykgdG9wIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgIG1hcmdpbi10b3A6IC01OHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2014:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Login: () => (/* binding */ Login),
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ 6552);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);








function LoginComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", x_r4.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r4.label);
  }
}
class Login {
  constructor(email, passw, serialNumber) {
    this.email = email;
    this.passw = passw;
    this.serialNumber = serialNumber;
  }
}
class LoginComponent {
  constructor(http, router, configService) {
    this.http = http;
    this.router = router;
    this.configService = configService;
    this.model = new Login('', '', '');
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.note = "";
    this.app = "";
    this.selectApp = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appSelect;
  }
  ngOnInit() {
    this.model.serialNumber = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? "" : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serialNumber;
    this.app = localStorage.getItem("appCodeManasol");
    this.fnCheckSessionLogin();
  }
  fnCheckSessionLogin() {
    if (this.configService.getToken() != "" && this.configService.getToken() != null) {
      this.router.navigate(['home']);
    }
  }
  updateApp() {
    localStorage.setItem("appCodeManasol", this.app);
  }
  onSubmit() {
    this.loading = true;
    this.note = "Loading..!";
    const hash = crypto_js__WEBPACK_IMPORTED_MODULE_1__.MD5(crypto_js__WEBPACK_IMPORTED_MODULE_1__.enc.Latin1.parse(btoa(this.model['passw'])));
    const md5 = hash.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__.enc.Hex);
    const body = {
      serialNumber: this.model.serialNumber,
      email: this.model['email'],
      password: md5,
      player_id: "player_id45553434"
    };
    console.log(body);
    this.http.post(this.api + this.app + 'login/auth', body).subscribe(data => {
      this.loading = false;
      console.log(data);
      if (data['error'] !== true) {
        // window.location.reload();
        this.note = "Login Success ";
        this.configService.setToken(data['token']).subscribe(data => {
          console.log(data);
          if (data) {
            console.log('Token set successfully');
            this.router.navigate(['home']);
          } else {
            console.error('Failed to set token');
          }
        });
      } else {
        this.note = "Login fail!";
      }
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 62,
  vars: 9,
  consts: [[1, "fixed-top"], [1, "container"], [1, "row"], [1, "col-12"], [1, "navbar", "blur", "blur-rounded", "top-0", "z-index-3", "shadow", "position-absolute", "my-3", "py-2", "start-0", "end-0", "mx-4"], [1, "container-fluid", "pe-0"], ["href", "../pages/dashboard.html", 1, "navbar-brand", "font-weight-bolder", "ms-lg-0", "ms-3"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navigation", "aria-controls", "navigation", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "shadow-none", "ms-2"], [1, "navbar-toggler-icon", "mt-2"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "navigation", 1, "collapse", "navbar-collapse"], [1, "my-2"], [1, "main-content", "mt-0"], [1, "page-header", "min-vh-75"], [1, "col-12", "d-flex", "flex-column", "mx-auto"], [1, "card", "card-plain", "mt-8"], [1, "card-header", "pb-0", "text-left", "bg-transparent"], [1, "font-weight-bolder", "text-info", "text-gradient"], [1, "mb-0"], [1, "card-body"], [1, "mb-3"], [1, "form-control", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["autocomplete", "off", 3, "ngSubmit"], ["myForm", "ngForm"], ["type", "email", "id", "email", "placeholder", "name@example.com", "required", "", "name", "email", "email", "", "autocomplete", "false", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "text-danger", 3, "hidden"], ["type", "password", "id", "floatingPassword", "placeholder", "Password", "required", "", "name", "passw", "autocomplete", "false", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passw", "ngModel"], [1, "text-center"], ["type", "submit", 1, "btn", "bg-gradient-info", "w-100", "mt-4", "mb-0", 3, "disabled"], [1, "card-footer", "text-center", "pt-0", "px-lg-2", "px-1"], [1, "mb-4", "text-sm", "mx-auto"], [1, "col-md-6"], [1, "oblique", "position-absolute", "top-0", "h-100", "d-md-block", "d-none", "me-n8"], [1, "oblique-image", "bg-cover", "position-absolute", "fixed-top", "ms-auto", "h-100", "z-index-0", "ms-n6", 2, "background-image", "url('../assets/img/curved-images/curved6.jpg')"], [3, "value"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "div", 5)(6, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Sales Activity ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7)(9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 9)(11, "span", 10)(12, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "main", 14)(18, "section")(19, "div", 15)(20, "div", 1)(21, "div", 2)(22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "h3", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Welcome back");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Enter your email and password to sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 21)(30, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "APP Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 22)(33, "select", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function LoginComponent_Template_select_change_33_listener() {
        return ctx.updateApp();
      })("ngModelChange", function LoginComponent_Template_select_ngModelChange_33_listener($event) {
        return ctx.app = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, LoginComponent_option_34_Template, 2, 2, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "form", 25, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_35_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 22)(40, "input", 27, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_40_listener($event) {
        return ctx.model.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div")(43, "small", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Email is required ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 22)(48, "input", 30, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_48_listener($event) {
        return ctx.model.passw = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div")(51, "small", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " Password is required ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 32)(54, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 34)(57, "p", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 36)(60, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](36);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](41);
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Ver ", ctx.env.version, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.app);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.selectApp);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.model.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.model.passw);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r1.form.valid || !ctx.app);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.note, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 2059:
/*!****************************************************!*\
  !*** ./src/app/login/relogin/relogin.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReloginComponent: () => (/* binding */ ReloginComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);





class ReloginComponent {
  constructor(http, router, configService) {
    this.http = http;
    this.router = router;
    this.configService = configService;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.items = [];
  }
  ngOnInit() {}
  relogin() {
    localStorage.removeItem(this.configService.getToken());
    this.configService.removeToken().subscribe(() => {
      this.router.navigate(['./login']);
    });
  }
}
ReloginComponent.ɵfac = function ReloginComponent_Factory(t) {
  return new (t || ReloginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
};
ReloginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ReloginComponent,
  selectors: [["app-relogin"]],
  decls: 5,
  vars: 0,
  consts: [[1, "container"], [1, "row"], [1, "col-12", "py-5", "text-center"], ["type", "button", 1, "btn", "btn-lg", "btn-warning", 3, "click"]],
  template: function ReloginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReloginComponent_Template_button_click_3_listener() {
        return ctx.relogin();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Relogin");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 7890:
/*!******************************************************************!*\
  !*** ./src/app/modal/customer-modal/customer-modal.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerModalComponent: () => (/* binding */ CustomerModalComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);







function CustomerModalComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Search Customer by Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerModalComponent_div_15_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.searchCustomer = $event);
    })("keydown.enter", function CustomerModalComponent_div_15_Template_input_keydown_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "small")(5, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 16)(9, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerModalComponent_div_15_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Search by name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.searchCustomer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 2, ctx_r0.totalAll), " customer in database");
  }
}
function CustomerModalComponent_div_16_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerModalComponent_div_16_a_4_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const x_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.onSelectCustomer(x_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div")(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 22)(5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const x_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r7.street);
  }
}
function CustomerModalComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CustomerModalComponent_div_16_a_4_Template, 7, 2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Search Customer by keyword \"", ctx_r1.searchCustomer, "\", total search ", ctx_r1.total, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.res_partner);
  }
}
class CustomerModalComponent {
  constructor(http, router, activeRoute, configService) {
    this.http = http;
    this.router = router;
    this.activeRoute = activeRoute;
    this.configService = configService;
    this.date = new Date();
    this.show_res_partner = false;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.searchCustomer = "";
    this.id = "";
    this.item = [];
    this.res_partner = [];
    this.total = 0;
    this.totalAll = 0;
    this.objCustomer = [];
  }
  ngOnInit() {
    this.httpGet();
  }
  httpGet() {
    this.http.get(this.api + this.configService.getAppCode() + 'Res_partner', {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.totalAll = data['total'];
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  onSearch() {
    this.show_res_partner = true;
    const body = {
      name: this.searchCustomer
    };
    this.http.get(this.api + this.configService.getAppCode() + 'Res_partner/searchCustomer', {
      headers: this.configService.headers(),
      params: {
        name: this.searchCustomer
      }
    }).subscribe(data => {
      console.log(data);
      this.total = data['total'];
      this.res_partner = data['res_partner'];
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  onSelectCustomer(x) {
    this.objCustomer = x;
    console.log(this.objCustomer);
    const body = {
      customer: this.objCustomer,
      requestFrom: this.activeRoute.snapshot.queryParams['requestFrom'],
      id: this.activeRoute.snapshot.queryParams['id']
    };
    console.log(body);
    this.http.post(this.api + this.configService.getAppCode() + 'Res_partner/modal', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      history.back();
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  back() {
    if (this.show_res_partner) {
      this.show_res_partner = false;
    } else {
      history.back();
    }
  }
}
CustomerModalComponent.ɵfac = function CustomerModalComponent_Factory(t) {
  return new (t || CustomerModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
};
CustomerModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CustomerModalComponent,
  selectors: [["app-customer-modal"]],
  decls: 17,
  vars: 2,
  consts: [[1, "fixed-top", "bg-white", "shadow-sm", "border-bottom", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-10", "align-self-center", "text-center"], [1, "p-0", "m-0", "ms-3"], [1, "row"], [1, "col-12"], [1, "card", "my-4"], [1, "card-body"], ["class", "mb-2", 4, "ngIf"], [1, "mb-2"], ["for", "searchCustomer", 1, "form-label"], ["type", "text", "name", "searchCustomer", "minlength", "4", "id", "searchCustomer", "required", "", "placeholder", "min 4 char", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "mt-3", "d-grid"], ["type", "button", 1, "btn", "btn-lg", "btn-info", 3, "click"], [1, "form-label", "mb-2"], [1, "list-group"], ["href", "javascript:;", "class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], ["href", "javascript:;", 1, "list-group-item", "list-group-item-action", 3, "click"], [1, "lh-sm"]],
  template: function CustomerModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerModalComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Search Customer ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 1)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CustomerModalComponent_div_15_Template, 11, 4, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CustomerModalComponent_div_16_Template, 5, 3, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.show_res_partner);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.show_res_partner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 5848:
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotfoundComponent: () => (/* binding */ NotfoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class NotfoundComponent {}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) {
  return new (t || NotfoundComponent)();
};
NotfoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NotfoundComponent,
  selectors: [["app-notfound"]],
  decls: 4,
  vars: 0,
  consts: [[1, "container"], [1, "row"], [1, "col-12", "py-5", "text-center"]],
  template: function NotfoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " not found ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 8861:
/*!**************************************************************!*\
  !*** ./src/app/order/order-detail/order-detail.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderDetailComponent: () => (/* binding */ OrderDetailComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);






function OrderDetailComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 6)(2, "div")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10)(6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Unit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div")(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div")(16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11)(20, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div")(23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10)(27, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div")(30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const x_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r1.x_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 7, x_r1.x_unitprice), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 9, x_r1.x_qty));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !x_r1.x_discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 11, x_r1.x_discount), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 13, x_r1.x_subtotal), "");
  }
}
class OrderDetailComponent {
  constructor(http, router, configService, activeRoute) {
    this.http = http;
    this.router = router;
    this.configService = configService;
    this.activeRoute = activeRoute;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.item = [];
    this.id = "";
    this.total = 0;
    this.detail = [];
  }
  ngOnInit() {
    this.id = this.activeRoute.snapshot.queryParams['id'];
    this.httpGet();
  }
  httpGet() {
    this.detail = [];
    this.loading = true;
    this.http.get(this.api + this.configService.getAppCode() + 'order/detail/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      console.log(data);
      this.detail = data['detail'];
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  back() {
    history.back();
  }
}
OrderDetailComponent.ɵfac = function OrderDetailComponent_Factory(t) {
  return new (t || OrderDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
OrderDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: OrderDetailComponent,
  selectors: [["app-order-detail"]],
  decls: 10,
  vars: 2,
  consts: [[1, "bg-white", "p-2", "shadow-md", "border"], [1, "row"], [1, "col-12", "text-end"], [3, "click"], ["class", "row  border-bottom py-4", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "row", 3, "hidden"], [1, "col-12"], [1, "text-center", "my-5"], ["src", "./assets/gif/icons8-loading.gif", "width", "50"], [1, "row", "border-bottom", "py-4", 3, "hidden"], [1, "col", "text-end"], [1, "col", "text-end", 3, "hidden"]],
  template: function OrderDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderDetailComponent_Template_a_click_3_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Close");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, OrderDetailComponent_div_5_Template, 33, 15, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.detail);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 727:
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderComponent: () => (/* binding */ OrderComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);







function OrderComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderComponent_div_12_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const x_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.goToDetail(x_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14)(2, "div", 15)(3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 16)(7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 18)(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 19)(13, "div", 20)(14, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 2)(17, "div", 21)(18, "div")(19, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Total Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 22)(26, "div")(27, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div")(30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Order Date : ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 6, x_r1.x_order_date, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r1.x_submit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r1.street);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 9, x_r1.totalItem));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 11, x_r1.totalAmount), "");
  }
}
class OrderComponent {
  constructor(http, router, configService, activeRoute, modalService) {
    this.http = http;
    this.router = router;
    this.configService = configService;
    this.activeRoute = activeRoute;
    this.modalService = modalService;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.item = [];
    this.id = "";
    this.total = 0;
    this.detail = [];
  }
  ngOnInit() {
    this.httpGet();
  }
  httpGet() {
    this.loading = true;
    this.http.get(this.api + this.configService.getAppCode() + 'order', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      this.item = data['item'];
      console.log(data);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  back() {
    history.back();
  }
  open(content, item) {
    this.detail = [];
    this.modalService.open(content, {
      fullscreen: true
    });
    this.loading = true;
    this.http.get(this.api + this.configService.getAppCode() + 'order/detail/' + item['id'], {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      console.log(data);
      this.detail = data['detail'];
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  goToDetail(item) {
    this.router.navigate(['./order/detail'], {
      queryParams: {
        id: item['id']
      }
    });
  }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) {
  return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal));
};
OrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: OrderComponent,
  selectors: [["app-order"]],
  decls: 16,
  vars: 3,
  consts: [[1, "fixed-top", "py-2", "bg-white", "shadow-sm"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1", "align-self-center"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-10", "align-self-center", "text-center"], [1, "main-content", "position-relative", "max-height-vh-100", "h-100", "border-radius-lg"], [1, "row"], [1, "col-12", 3, "hidden"], ["class", "border bg-white shadow p-3 ", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-center", "my-5"], ["src", "./assets/gif/icons8-loading.gif", "width", "50"], [1, "border", "bg-white", "shadow", "p-3", 3, "click"], [1, "row", "g-0", "mb-2"], [1, "col-9"], [1, "col-3", "text-end"], [1, "badge", "bg-secondary"], [1, "col-12"], [1, "lh-sm", "mb-2"], [1, "mb-1"], [1, "col"], [1, "col", "text-end"]],
  template: function OrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "main", 7)(10, "div", 8)(11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, OrderComponent_div_12_Template, 33, 13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9)(14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.item);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 1981:
/*!********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailComponent: () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);








const _c0 = function () {
  return ["/cart"];
};
function ProductDetailComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "a", 25)(2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
  }
}
function ProductDetailComponent_footer_35_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "div", 33)(4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_footer_35_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](37);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.open(_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "ORDER");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
}
function ProductDetailComponent_footer_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductDetailComponent_footer_35_div_1_Template, 6, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.item.x_is_visited != "f");
  }
}
function ProductDetailComponent_ng_template_36_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", x_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("[", x_r9.id, "] ", x_r9.x_customer, "");
  }
}
function ProductDetailComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35)(1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_ng_template_36_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const modal_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r7.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 31)(4, "div", 37)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 38)(11, "h2", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "QTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductDetailComponent_ng_template_36_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.qty = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 41)(15, "h2", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Order ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductDetailComponent_ng_template_36_Template_select_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.cardId = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ProductDetailComponent_ng_template_36_option_18_Template, 2, 3, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 44)(20, "div", 45)(21, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_ng_template_36_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.addToCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 5, ctx_r3.item.list_price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.cardId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.x_customer_po);
  }
}
class ProductDetailComponent {
  constructor(http, router, configService, activeRoute, modalService) {
    this.http = http;
    this.router = router;
    this.configService = configService;
    this.activeRoute = activeRoute;
    this.modalService = modalService;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.item = [];
    this.id = "";
    this.location_id = "";
    this.cardId = "";
    this.itemQty = 0;
    this.qty = 1;
    this.totalAmount = 0;
    this.x_customer_po = [];
  }
  ngOnInit() {
    this.id = this.activeRoute.snapshot.queryParams['id'];
    this.location_id = this.activeRoute.snapshot.queryParams['location_id'];
    this.cardId = this.activeRoute.snapshot.queryParams['cardId'];
    this.httpGet();
  }
  httpGet() {
    this.http.get(this.api + this.configService.getAppCode() + 'product/detail', {
      headers: this.configService.headers(),
      params: this.activeRoute.snapshot.queryParams
    }).subscribe(data => {
      this.loading = false;
      this.item = data['item'];
      this.itemQty = data['qty'];
      this.x_customer_po = data['x_customer_po'];
      console.log(data);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  addToCard() {
    const body = {
      id: this.id,
      item: this.item,
      qty: this.qty,
      cardId: this.activeRoute.snapshot.queryParams['cardId'],
      account: this.configService.account()['account'],
      x_customer_id: this.activeRoute.snapshot.queryParams['x_customer_id'] ? this.activeRoute.snapshot.queryParams['x_customer_id'] : ''
    };
    console.log(body);
    this.http.post(this.api + this.configService.getAppCode() + 'product/addToCard', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      console.log(data);
      this.router.navigate(['carts/detail'], {
        queryParams: {
          id: this.activeRoute.snapshot.queryParams['cardId']
        }
      });
      this.modalService.dismissAll();
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  back() {
    history.back();
  }
  open(content) {
    this.modalService.open(content, {
      fullscreen: true
    });
  }
}
ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) {
  return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal));
};
ProductDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductDetailComponent,
  selectors: [["app-product-detail"]],
  decls: 38,
  vars: 11,
  consts: [[1, "fixed-top", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-6", "align-self-center"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], ["class", "col-6 text-end", 4, "ngIf"], [1, "container-fluid", 2, "margin-top", "-40px"], [1, "page-header", "min-height-200", "border-radius-xl", "mt-4", 2, "background-image", "url('../assets/img/curved-images/curved0.jpg')", "background-position-y", "50%"], [1, "mask", "bg-gradient-primary", "opacity-6"], [1, "card", "card-body", "blur", "shadow-blur", "mx-4", "mt-n6", "overflow-hidden"], [1, "row", "gx-4"], [1, "col-auto", "my-auto"], [1, "h-100"], [1, "mb-1"], [1, "mb-0", "font-weight-bold", "text-sm"], [1, "col-lg-4", "col-md-6", "my-sm-auto", "ms-sm-auto", "me-sm-0", "mx-auto", "mt-3"], [1, "nav-wrapper", "position-relative", "end-0"], ["role", "tablist", 1, "nav", "nav-pills", "nav-fill", "p-1", "bg-transparent"], [1, "nav-item"], ["data-bs-toggle", "tab", "href", "javascript:;", "role", "tab", "aria-selected", "false", 1, "nav-link", "mb-0", "px-0", "py-1"], [1, "ms-1"], ["class", "bg-white border-top shadow-sm", 4, "ngIf"], ["content", ""], [1, "col-6", "text-end"], [3, "routerLink"], [1, "badge", "bg-info"], [1, "bi", "bi-basket"], [1, "bg-white", "border-top", "shadow-sm"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-12"], [1, "d-grid", "py-2"], [1, "btn", "btn-info", "rounded-pill", 3, "click"], [1, "modal-body"], [1, "h2", 3, "click"], [1, "col-12", "text-center", "my-5"], [1, "col-12", "text-center", "mb-5"], [1, "mb-3"], ["type", "number", 1, "form-control", "form-control-lg", "fs-1", "text-center", 3, "ngModel", "ngModelChange"], [1, "col-12", "text-center"], [1, "form-control", "form-control-lg", "text-center", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], [1, "d-grid"], [1, "btn", "btn-primary", "rounded-pill", 3, "click"], [3, "value"]],
  template: function ProductDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductDetailComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProductDetailComponent_div_6_Template, 5, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "div", 13)(14, "h5", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 16)(19, "div", 17)(20, "ul", 18)(21, "li", 19)(22, "a", 20)(23, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Qty");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li", 19)(29, "a", 20)(30, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Price");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ProductDetailComponent_footer_35_Template, 2, 1, "footer", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ProductDetailComponent_ng_template_36_Template, 23, 7, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalAmount > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.item.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.item.default_code, " [", ctx.location_id, "] ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 7, ctx.itemQty));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 9, ctx.item.list_price), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item.x_activity_status != "CLOSE");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
  styles: [".modal-footer[_ngcontent-%COMP%]{\n    display: block !important;\n}\n\noption[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{\n    font-size: 1.2rem ;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWZvb3RlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm9wdGlvbiwgc2VsZWN0e1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW0gO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 936:
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListComponent: () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 8588);






class ProductListComponent {
  constructor(http, configService, routes, activatedRoute) {
    this.http = http;
    this.configService = configService;
    this.routes = routes;
    this.activatedRoute = activatedRoute;
    this.dtOptions = {};
    this.search = "";
    this.total = "";
  }
  ngOnInit() {
    this.search = this.activatedRoute.snapshot.queryParams['search'];
    this.mytable();
    this.httpGet();
  }
  mytable() {
    let self = this;
    this.dtOptions = {
      //   serverSide: true,     // Set the flag 
      ajax: {
        url: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + self.configService.getAppCode() + 'product/datatable',
        data: this.activatedRoute.snapshot.queryParams,
        type: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Token': this.configService.getToken()
        }
      },
      ordering: false,
      lengthMenu: [50, 100, 200, 500],
      lengthChange: false,
      columns: [{
        title: 'Name',
        data: 'name',
        render: function (data, type, full) {
          let price = new Intl.NumberFormat().format(full['list_price']);
          let customer = self.activatedRoute.snapshot.queryParams['x_customer_id'] != null ? "x_customer_id=" + self.activatedRoute.snapshot.queryParams['x_customer_id'] : "";
          //    let url = full['qty_available'] > 0 ?  "#/product/detail?id="+full['id']+"&location_id="+full['location_id']:"javascript:;";
          let url = "#/product/detail?id=" + full['id'] + "&location_id=" + full['location_id'] + '&' + customer + "&cardId=" + self.activatedRoute.snapshot.queryParams['cardId'];
          let a = `
            <a href="${url}">
                <div >${data}</div>
                <div class="row">
                    <div class="col text-monospace text-info">${full['default_code']}</div>
                    <div class="col text-end text-primary">Rp ${price}</div>
                </div>
                <div class="row">
                <div class="col">
                <span class="badge badge-sm bg-${full['qty_available'] > 0 ? "success" : "light"}">${full['qty_available'] > 0 ? "Avaiable" : "Not Avaiable"}</span>
              </div>
                  <div class="col text-end"> <small>Qty : ${full['qty_available'] < 0 ? 0 : full['qty_available']}<small>  </div>
                 
                </div>
             </a>`;
          return a;
        }
      }]
    };
  }
  httpGet() {
    this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + this.configService.getAppCode() + 'product/datatable?search=' + this.search, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.total = data['total'];
    }, e => {
      console.log(e);
    });
  }
  back() {
    history.back();
  }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
  return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
};
ProductListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProductListComponent,
  selectors: [["app-product-list"]],
  decls: 22,
  vars: 3,
  consts: [[1, "fixed-top", "py-2", "bg-white", "shadow-sm"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1", "align-self-center"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-11", "align-self-center"], [1, "main-content", "position-relative", "max-height-vh-100", "h-100", "border-radius-lg"], [1, "container-fluid", "py-4"], [1, "row"], [1, "col-12"], [1, "card", "mb-4"], [1, "card-body"], [1, "list-item"], ["datatable", "", 1, "table", "w-100", "datatable-no-head", 3, "dtOptions"]],
  template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductListComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Search Product \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\", total ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "main", 7)(15, "div", 8)(16, "div", 9)(17, "div", 10)(18, "div", 11)(19, "div", 12)(20, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "table", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.search);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.total);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions);
    }
  },
  dependencies: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4368:
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductComponent: () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);







function ProductComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Min 3 character");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ProductComponent {
  constructor(http, router, configService, activeRouter) {
    this.http = http;
    this.router = router;
    this.configService = configService;
    this.activeRouter = activeRouter;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.items = [];
    this.search = "";
  }
  ngOnInit() {
    this.httpGet();
  }
  httpGet() {
    this.http.get(this.api + this.configService.getAppCode() + 'product', {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      this.items = data['items'];
      console.log(data);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  onSearch() {
    if (this.search.length >= 3) {
      const body = {
        search: this.search,
        accountId: this.configService.accountId(),
        x_customer_id: this.activeRouter.snapshot.queryParams['x_customer_id'],
        cardId: this.activeRouter.snapshot.queryParams['cardId']
      };
      console.log(body);
      this.router.navigate(['product/list'], {
        queryParams: body
      });
    }
  }
  back() {
    history.back();
  }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) {
  return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};
ProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductComponent,
  selectors: [["app-product"]],
  decls: 23,
  vars: 3,
  consts: [[1, "fixed-top", "bg-white", "py-2", "shadow-sm", "border"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1", "align-self-center"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-10", "align-self-center", "text-center"], [1, "p-0", "m-0", "ms-3"], [1, "main-content", "position-relative", "max-height-vh-100", "h-100", "border-radius-lg"], [1, "container-fluid", "py-4"], [1, "row"], [1, "col-12"], [1, "form-group"], [1, "mb-2"], ["type", "text", "placeholder", "min 3 char", 1, "form-control", "form-control-lg", "mb-2", 3, "ngModel", "ngModelChange", "keyup.enter"], ["class", "mb-2", 4, "ngIf"], [1, "d-grid", "my-4"], ["type", "button", 1, "btn", "btn-lg", "btn-success", 3, "disabled", "click"], [1, "bi", "bi-arrow-right"]],
  template: function ProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Product");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "main", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Search Product base on NAME ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.search = $event;
      })("keyup.enter", function ProductComponent_Template_input_keyup_enter_17_listener() {
        return ctx.onSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ProductComponent_div_18_Template, 3, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16)(20, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_20_listener() {
        return ctx.onSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "SEARCH ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.search);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.search.length < 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.search.length < 3);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4215:
/*!**********************************************************************!*\
  !*** ./src/app/schedule-activities/schedule-activities.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScheduleActivitiesComponent: () => (/* binding */ ScheduleActivitiesComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);







const _c0 = function () {
  return ["/activity"];
};
const _c1 = function (a0) {
  return {
    id: a0
  };
};
function ScheduleActivitiesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "div", 2)(3, "div", 43)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 44)(7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 46)(10, "div", 47)(11, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Schedule Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 47)(14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 46)(18, "div", 47)(19, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "x_route_id");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 47)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c1, x_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r1.x_salesperson);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !x_r1.x_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", x_r1.x_status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](16, 8, x_r1.x_schedule_date, "d MMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", x_r1.x_route_id_name, " [", x_r1.x_route_id, "]");
  }
}
const _c2 = function () {
  return ["/activity/schedule"];
};
class ScheduleActivitiesComponent {
  constructor(http, router, configService) {
    this.http = http;
    this.router = router;
    this.configService = configService;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.items = [];
    this.noteSelect = "Today";
    this.selectDate = "0";
  }
  ngOnInit() {
    this.httpGet();
  }
  back() {
    history.back();
  }
  httpGet(data = []) {
    this.http.get(this.api + this.configService.getAppCode() + 'activities/schedules', {
      headers: this.configService.headers(),
      params: data
    }).subscribe(data => {
      this.loading = false;
      this.items = data['items'];
      console.log(data);
      this.noteSelect = data['noteSelect'];
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  fnAdd() {
    const body = {
      insert: true,
      user: this.configService.account()
    };
    this.http.post(this.api + this.configService.getAppCode() + 'activities/fnAdd', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      this.router.navigate(['activity/detail', data['post']['user']['account']['id']]);
      console.log(data);
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  updateDate() {
    console.log(this.selectDate);
    const body = {
      selectDate: this.selectDate,
      type: 'range'
    };
    this.httpGet(body);
    // this.router.navigate(['scheduleAcivities'],{queryParams:body}).then(
    //   ()=>{
    //   }
    // )
  }
}

ScheduleActivitiesComponent.ɵfac = function ScheduleActivitiesComponent_Factory(t) {
  return new (t || ScheduleActivitiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
};
ScheduleActivitiesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ScheduleActivitiesComponent,
  selectors: [["app-schedule-activities"]],
  decls: 61,
  vars: 9,
  consts: [[1, "fixed-top", "bg-gray-100", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1", "align-self-center"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-10", "align-self-center", "text-center"], [1, "p-0", "m-0", "ms-3"], [1, "col-1", "text-end", "align-self-center"], ["data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasBottom", "aria-controls", "offcanvasBottom", 1, "h4"], [1, "bi", "bi-calendar-range"], [1, "main-content", "position-relative", "max-height-vh-100", "h-100", "border-radius-lg"], [1, "container-fluid", "py-4"], [1, "row"], [1, "col-12"], ["class", "card mb-2  ", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [1, "floating_footer"], [1, "display-1", 3, "routerLink"], [1, "bi", "bi-plus-circle-fill"], ["tabindex", "-1", "id", "offcanvasBottom", "aria-labelledby", "offcanvasBottomLabel", 1, "offcanvas", "offcanvas-bottom"], [1, "offcanvas-header"], ["id", "offcanvasBottomLabel", 1, "offcanvas-title"], ["data-bs-dismiss", "offcanvas", "aria-label", "Close"], [1, "bi", "bi-x-lg"], [1, "offcanvas-body", "small"], [1, "row", "border-bottom", 3, "click"], [1, "col-10", "align-self-center"], ["for", "allSchedule"], [1, "col-2", "text-end", "align-self-center"], ["type", "radio", "name", "selectDate", "value", "a", "id", "allSchedule", 3, "ngModel", "ngModelChange"], [1, "row", "border-bottom", "mt-2", 3, "click"], ["for", "dateToday"], ["type", "radio", "name", "selectDate", "value", "0", "id", "dateToday", 3, "ngModel", "ngModelChange"], ["for", "date7day"], ["type", "radio", "name", "selectDate", "value", "1", "id", "date7day", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "selectDate", "value", "7", "id", "date7day", 3, "ngModel", "ngModelChange"], ["for", "date30day"], ["type", "radio", "name", "selectDate", "value", "30", "id", "date30day", 3, "ngModel", "ngModelChange"], [1, "offcanvas-bottom"], [1, "d-grid", "p-2"], ["type", "button", "data-bs-dismiss", "offcanvas", 1, "btn", "btn-success", 3, "click"], [1, "card", "mb-2", 3, "routerLink", "queryParams"], [1, "card-body"], [1, "col-10", "mb-2"], [1, "col-2", "mb-2"], [1, "badge", "bg-danger", 3, "hidden"], [1, "col"], [1, "lh-sm"]],
  template: function ScheduleActivitiesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScheduleActivitiesComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "main", 11)(13, "div", 12)(14, "div", 13)(15, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ScheduleActivitiesComponent_div_16_Template, 24, 14, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 16)(18, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 19)(21, "div", 20)(22, "h5", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Select Ranges Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 24)(27, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScheduleActivitiesComponent_Template_div_click_27_listener() {
        return ctx.selectDate = "a";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 26)(29, "h6", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Today and Next Schedule ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 28)(32, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ScheduleActivitiesComponent_Template_input_ngModelChange_32_listener($event) {
        return ctx.selectDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScheduleActivitiesComponent_Template_div_click_33_listener() {
        return ctx.selectDate = "0";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 26)(35, "h6", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Today");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 28)(38, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ScheduleActivitiesComponent_Template_input_ngModelChange_38_listener($event) {
        return ctx.selectDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScheduleActivitiesComponent_Template_div_click_39_listener() {
        return ctx.selectDate = "1";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 26)(41, "h6", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Yesterday");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 28)(44, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ScheduleActivitiesComponent_Template_input_ngModelChange_44_listener($event) {
        return ctx.selectDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScheduleActivitiesComponent_Template_div_click_45_listener() {
        return ctx.selectDate = "7";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 26)(47, "h6", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Last 7 Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 28)(50, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ScheduleActivitiesComponent_Template_input_ngModelChange_50_listener($event) {
        return ctx.selectDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScheduleActivitiesComponent_Template_div_click_51_listener() {
        return ctx.selectDate = "30";
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 26)(53, "h6", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Last 30 Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 28)(56, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ScheduleActivitiesComponent_Template_input_ngModelChange_56_listener($event) {
        return ctx.selectDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 38)(58, "div", 39)(59, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ScheduleActivitiesComponent_Template_button_click_59_listener() {
        return ctx.updateDate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Schedule ", ctx.noteSelect, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectDate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: [".offcanvas.offcanvas-bottom[_ngcontent-%COMP%] {\n    height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2NoZWR1bGUtYWN0aXZpdGllcy9zY2hlZHVsZS1hY3Rpdml0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiLm9mZmNhbnZhcy5vZmZjYW52YXMtYm90dG9tIHtcclxuICAgIGhlaWdodDogNTB2aDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 9164:
/*!***************************************!*\
  !*** ./src/app/service/auth.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.service */ 8650);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



class authGuard {
  constructor(config, router) {
    this.config = config;
    this.router = router;
  }
  canActivate(next, state) {
    if (this.config.getToken() != "" && this.config.getToken() != null) {
      // console.log("guard ",true, this.config.getToken() );
      return true;
    } else {
      this.router.navigate(['relogin']);
      return false;
    }
  }
}
authGuard.ɵfac = function authGuard_Factory(t) {
  return new (t || authGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
authGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: authGuard,
  factory: authGuard.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 8650:
/*!*******************************************!*\
  !*** ./src/app/service/config.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigService: () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




class ConfigService {
  constructor() {
    this.tokenKey = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.tokenName;
  }
  setToken(token) {
    try {
      localStorage.setItem(this.tokenKey, token);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true); // Mengembalikan Observable yang mengirimkan nilai boolean true
    } catch (error) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false); // Mengembalikan Observable yang mengirimkan nilai boolean false jika terjadi kesalahan
    }
  }

  removeToken() {
    try {
      localStorage.removeItem(this.tokenKey);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(true); // Mengembalikan Observable yang mengirimkan nilai boolean true
    } catch (error) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false); // Mengembalikan Observable yang mengirimkan nilai boolean false jika terjadi kesalahan
    }
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  getAppCode() {
    return localStorage.getItem("appCodeManasol");
  }
  headers() {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Content-Type': 'application/json',
      'Token': this.getToken()
    });
  }
  account() {
    const jwtObj = this.getToken().split(".");
    return JSON.parse(atob(jwtObj[1]));
  }
  accountId() {
    return this.account()['account']['id'];
  }
}
ConfigService.ɵfac = function ConfigService_Factory(t) {
  return new (t || ConfigService)();
};
ConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ConfigService,
  factory: ConfigService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 6624:
/*!******************************************!*\
  !*** ./src/app/service/func.services.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuncService: () => (/* binding */ FuncService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FuncService {
  constructor() {}
  formatDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }
}
FuncService.ɵfac = function FuncService_Factory(t) {
  return new (t || FuncService)();
};
FuncService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FuncService,
  factory: FuncService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 9263:
/*!**************************************!*\
  !*** ./src/app/service/safe.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafePipe: () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);


class SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
SafePipe.ɵfac = function SafePipe_Factory(t) {
  return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
};
SafePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safe",
  type: SafePipe,
  pure: true
});


/***/ }),

/***/ 69:
/*!**************************************************!*\
  !*** ./src/app/sql-query/sql-query.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SqlQueryComponent: () => (/* binding */ SqlQueryComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/config.service */ 8650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);





class SqlQueryComponent {
  constructor(configService, http) {
    this.configService = configService;
    this.http = http;
    this.query = "";
  }
  run() {
    const body = {
      query: this.query,
      token: "0Iq8nd06QVIltc8PH4uL0HZmrsAxJ6RJhS0Cz9OQAlY7ncw2fg"
    };
    this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + this.configService.getAppCode() + "table/sql", body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
SqlQueryComponent.ɵfac = function SqlQueryComponent_Factory(t) {
  return new (t || SqlQueryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
SqlQueryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SqlQueryComponent,
  selectors: [["app-sql-query"]],
  decls: 7,
  vars: 1,
  consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "mb-2"], ["rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-12", "d-grid", "mb-2"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
  template: function SqlQueryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "textarea", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SqlQueryComponent_Template_textarea_ngModelChange_3_listener($event) {
        return ctx.query = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SqlQueryComponent_Template_button_click_5_listener() {
        return ctx.run();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "RUN QUERY");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.query);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  version: (__webpack_require__(/*! ../../package.json */ 4147).version) + '-prod',
  production: false,
  api: api,
  serialNumber: false,
  cam: true,
  tokenName: 'bsfJwtToken01',
  appSelect: appSelect
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"ng16","version":"1.35.8","scripts":{"ng":"ng","start":"ng serve","build":"ng build","watch":"ng build --watch --configuration development","test":"ng test"},"private":true,"dependencies":{"@angular/animations":"^16.0.0","@angular/common":"^16.0.0","@angular/compiler":"^16.0.0","@angular/core":"^16.0.0","@angular/forms":"^16.0.0","@angular/platform-browser":"^16.0.0","@angular/platform-browser-dynamic":"^16.0.0","@angular/router":"^16.0.0","@ng-bootstrap/ng-bootstrap":"^15.0.1","@popperjs/core":"^2.11.6","angular-datatables":"^16.0.0","bootstrap":"^5.3.0","bootstrap-icons":"^1.10.5","crypto-js":"^4.1.1","datatables.net":"^1.11.3","datatables.net-bs5":"^1.11.3","jquery":"^3.6.0","rxjs":"~7.8.0","tslib":"^2.3.0","zone.js":"~0.13.0"},"devDependencies":{"@angular-devkit/build-angular":"^16.0.5","@angular/cli":"~16.0.5","@angular/compiler-cli":"^16.0.0","@angular/localize":"^16.0.0","@types/crypto-js":"^4.1.1","@types/datatables.net":"^1.10.21","@types/jasmine":"~4.3.0","@types/jquery":"^3.5.9","jasmine-core":"~4.6.0","karma":"~6.4.0","karma-chrome-launcher":"~3.2.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.0.0","typescript":"~5.0.2"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map