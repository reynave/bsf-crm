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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _service_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/safe.pipe */ 9263);








function ActivityDetailComponent_img_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 36);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.item.x_photo_url, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function ActivityDetailComponent_button_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_button_75_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.getGeo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Check In");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ActivityDetailComponent_button_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_button_76_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.getGeo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Check Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
class Model {
  constructor(x_activity_type_id, x_note, x_summary) {
    this.x_activity_type_id = x_activity_type_id;
    this.x_note = x_note;
    this.x_summary = x_summary;
  }
}
class ActivityDetailComponent {
  constructor(http, router, activeRoute, configService, ngZone) {
    this.http = http;
    this.router = router;
    this.activeRoute = activeRoute;
    this.configService = configService;
    this.ngZone = ngZone;
    this.loading = false;
    this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
    this.note = "";
    this.model = new Model("", "", "");
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
        this.saveImages();
      });
    };
    this.cameraError = e => {
      console.log('error Camera', e);
      this.initPhoto = false;
    };
  }
  ngOnInit() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.httpGet();
  }
  httpGet() {
    this.loading = true;
    this.http.get(this.api + 'activities/detail/' + this.id, {
      headers: this.configService.headers()
    }).subscribe(data => {
      this.loading = false;
      console.log(data);
      this.item = data['item'];
      this.model.x_activity_type_id = data['item']['x_activity_type_id'];
      this.model.x_note = data['item']['x_note'];
      this.model.x_summary = data['item']['x_summary'];
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  remove() {
    const body = {
      id: this.id
    };
    if (confirm("Remove this activity?")) {
      this.http.post(this.api + 'activities/remove', body, {
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
  checkIn() {
    const body = {
      id: this.id,
      model: this.model,
      geoData: this.geoData
    };
    console.log(body);
    this.http.post(this.api + 'activities/checkIn', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.httpGet();
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  checkOut() {
    const body = {
      id: this.id,
      model: this.model,
      geoData: this.geoData
    };
    console.log(body);
    this.http.post(this.api + 'activities/checkOut', body, {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
      this.back();
    }, e => {
      console.log(e);
      this.note = "Error Server!";
    });
  }
  getGeo() {
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
  }
  back() {
    history.back();
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
        base64Images: this.images
        //base64Images : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADj0lEQVR4nO2XXUhTYRjHX7woqPuu6s4+2ZVu03AaarqJ84M0SKICi6ACiYgsMEtUsgaBTILa2Xaim0xNc1Zgku6sD/NrfpsfQzMhsek0O7tx2xPvu7mdLbedHS266IU/55znPef9/57n/WBD6F9sOrFxjzbWeJaKNRVTYlMhfv4rxtXRr7ZTYkZNiRkHJWaAI/ysxv3hxsjqXY5W9q9cwdeIzG8hiKLERoNGwoC2dALoYRbo707QD7Ggq7QAjlMSphm/F2ocpXllSmleAaV5eSIiAE2s8QzOVvdoFmibC+jPdtDVz7vvbS7QP5xdr8apMACwrsgApMwHKr/HSS+6DXXqGaCkjBcAx7X5PWBIawHXtXI/OfPOgVOWQ8QFcMiy29cScrJ4AWilDKursngNddXTJGO91emL3bEAHd/hD1B0E5xHjhFzq0ThB2CVKtxgCdmVEQPoa7+5S17QB/So3QcQ1w7Ok5fcwpl7zLFGRYlw4uUIMS9oGYZRUZK3b02Wq+Q3BUsuH4RhASh5J+jr5gHHtfndYIh/6h00ULgCmpg0KL1QBpqYo7AokXP734auQKzpNFmEj+d8886Rjp4jFZk4fD0oAIGQKmBMlBRoDg5Zzo/w21DCNGMTbck40IMs0AtOctVWTOEtCK3xenDIckMChFLYdfDs0PA2SmyspuJM3EMIKKkJbhSPQXb3st8i4yu58QukGAb4b8uKbhuotLNw+54FLtZMw/F262+DpndZ4WDjIJG8yxo0ltE5D8lNvUS8AcosLKhm7HB1/GfQrA48HwB0t4EI3weLyTtmhAFMsg4YWnVsGiC9Y1oYwLTdAeNscABc4v0N/UTr5d4o9scAlDwlGGCCdcCgZwokrRaIUjUSSVstEcUEA6hm7HB+dJUMsq/e7J1bfB9JTBBAyRQLhSNucywpN7M3lohiggCUm5z3Ta8BpcBDZ8sA8joXXEL2/EZKa5sk5hl1H128AYpeDNi2AiCz2wrJzWYCUKh5vcwbQK1uLOd16NT3wd4n7yClbZIcuVyRzD3mWFVV+vC/iritUt/2PtTiyuy1QUrLoNcglIrv13YiIe1BTWPZ5ab+pcA1gaUwfQ1pKq//5MJljzjz/y2g7UQI4f+FIoSQBCGUiBBKRQjJEUIKfGR4JPco1fOOxPMN/nYHEth2cQw2KzyWoIbpd3MqIEMIpXAyDqwA7sPvrFcAfxuyAr8A50v6ENvkmUMAAAAASUVORK5CYII="
      };

      console.log(body);
      this.http.post(this.api + 'activities/takePhoto', body, {
        headers: this.configService.headers()
      }).subscribe(data => {
        console.log(data);
        this.loading = false;
        this.item['x_photo_url'] = data['x_photo_url'];
      }, e => {
        console.log(e);
        this.note = "Error Server!";
      });
    }
  }
}
ActivityDetailComponent.ɵfac = function ActivityDetailComponent_Factory(t) {
  return new (t || ActivityDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};
ActivityDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ActivityDetailComponent,
  selectors: [["app-activity-detail"]],
  decls: 77,
  vars: 22,
  consts: [[1, "fixed-top", "bg-white", "shadow-sm", "border-bottom", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-10", "align-self-center", "text-center"], [1, "p-0", "m-0", "ms-3"], ["src", "./assets/gif/icons8-loading.gif", 3, "hidden"], [1, "col-1", "align-self-center", "text-center"], ["type", "button", 1, "navbar-toggler", "text-danger", 3, "click"], [1, "bi", "bi-trash3-fill"], [1, "row"], [1, "col-12"], [1, "card", "mb-3"], [1, "card-body"], [1, "mb-2"], [1, "lh-sm", "mb-2"], [1, "lh-1"], [1, "bg-white", "py-1", "border-top"], ["width", "100%", "height", "250", "frameborder", "0", "scrolling", "no", "marginheight", "0", "marginwidth", "0", 3, "src"], [1, "container-fluid", "bg-white", "border-bottom", "mb-3"], [1, "col", "text-center"], [1, "bi", "bi-check-circle"], [1, "container-fluid", "mb-6"], [1, "mb-2", "d-grid"], ["for", "x_summary", 1, "form-label"], ["class", "w-100 p-1 bg-white border", 3, "src", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", "rounded-pill", 3, "click"], [1, "bi", "bi-camera-fill", "mx-1"], ["rows", "5", "name", "x_summary", "id", "x_summary", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "bg-white", "border-top", "shadow-sm"], [1, "container"], [1, "d-grid", "py-2"], ["class", "btn btn-success rounded-pill", 3, "click", 4, "ngIf"], ["class", "btn btn-info rounded-pill", 3, "click", 4, "ngIf"], [1, "w-100", "p-1", "bg-white", "border", 3, "src"], [1, "btn", "btn-success", "rounded-pill", 3, "click"], [1, "btn", "btn-info", "rounded-pill", 3, "click"]],
  template: function ActivityDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Today ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9)(11, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_Template_button_click_11_listener() {
        return ctx.remove();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 1)(14, "div", 12)(15, "div", 13)(16, "div", 14)(17, "div", 15)(18, "div", 16)(19, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Customer Information");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17)(24, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 16)(27, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Schedule Date :");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 18)(30, "small");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "iframe", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "safe");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 21)(37, "div", 2)(38, "div", 22)(39, "div")(40, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " CHECK IN");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div")(44, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](46, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 22)(48, "div")(49, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " CHECK OUT");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div")(52, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 24)(56, "div", 12)(57, "div", 13)(58, "div", 25)(59, "div")(60, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Photo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, ActivityDetailComponent_img_62_Template, 1, 1, "img", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ActivityDetailComponent_Template_button_click_63_listener() {
        return ctx.takePhoto();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "strong", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " Take Photo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 16)(67, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Summary / Note");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "textarea", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ActivityDetailComponent_Template_textarea_ngModelChange_69_listener($event) {
        return ctx.model.x_summary = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "footer", 31)(71, "div", 32)(72, "div", 12)(73, "div", 13)(74, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, ActivityDetailComponent_button_75_Template, 2, 0, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, ActivityDetailComponent_button_76_Template, 2, 0, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.item.x_customer);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.item.x_route_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](32, 13, ctx.item.x_schedule_date, "d MMM y"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 16, "https://maps.google.com/maps?q=" + ctx.item.x_cust_latitude + "," + ctx.item.x_cust_longitude + "&hl=id&z=13&output=embed"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeResourceUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](46, 18, ctx.item.x_check_in_date), ", ", ctx.item.x_check_in_time, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 20, ctx.item.x_check_out_date), ", ", ctx.item.x_check_out_time, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.x_photo_url);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.model.x_summary);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.x_activity_status == "OPEN");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.item.x_activity_status == "CHECKIN");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _service_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe],
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
    this.http.get(this.api + 'activities/index', {
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
    this.http.post(this.api + 'activities/fnAdd', body, {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", x_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r1.x_name);
  }
}
class Model {
  constructor(x_route_id, x_name, x_schedule_date) {
    this.x_route_id = x_route_id;
    this.x_name = x_name;
    this.x_schedule_date = x_schedule_date;
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
    this.note = "";
    this.model = new Model("", "", this.date.getFullYear() + '-' + ("0" + (this.date.getMonth() + 1)).slice(-2) + '-' + this.date.getDate());
    this.id = "";
    this.item = [];
    this.x_route = [];
  }
  ngOnInit() {
    this.selectActivitySchedule();
  }
  selectActivitySchedule() {
    this.http.get(this.api + 'activities/selectActivitySchedule', {
      headers: this.configService.headers()
    }).subscribe(data => {
      console.log(data);
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
    this.http.post(this.api + 'activities/createActivitySchedule', body, {
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
  decls: 37,
  vars: 5,
  consts: [[1, "fixed-top", "bg-white", "shadow-sm", "border-bottom", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-10", "align-self-center", "text-center"], [1, "p-0", "m-0", "ms-3"], [1, "row"], [1, "col-12"], [1, "card", "my-4"], [1, "card-body"], [1, "mb-2"], ["for", "x_schedule_date", 1, "form-label"], ["type", "date", "name", "x_schedule_date", "id", "x_schedule_date", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_name", 1, "form-label"], ["type", "text", "name", "x_name", "id", "x_name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "x_route_id", 1, "form-label"], ["name", "route", "id", "route", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "", 3, "hidden"], [3, "value", 4, "ngFor", "ngForOf"], [1, "bg-white", "border-top", "shadow-sm"], [1, "d-grid", "py-2"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", 3, "click"], [3, "value"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 1)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "x_schedule_date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ActivityScheduleComponent_Template_input_ngModelChange_18_listener($event) {
        return ctx.model.x_schedule_date = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "x_name");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ActivityScheduleComponent_Template_input_ngModelChange_22_listener($event) {
        return ctx.model.x_name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12)(24, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "x_route_id");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ActivityScheduleComponent_Template_select_ngModelChange_26_listener($event) {
        return ctx.model.x_route_id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ActivityScheduleComponent_option_29_Template, 2, 2, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "footer", 21)(31, "div", 1)(32, "div", 8)(33, "div", 9)(34, "div", 22)(35, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityScheduleComponent_Template_button_click_35_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "SUBMIT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_schedule_date);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model.x_route_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.model.x_route_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.x_route);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 8650);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);






const _c0 = function (a1) {
  return ["/activity/detail/", a1];
};
function ActivityComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 22)(7, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 24)(10, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 25)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("card mb-3  border-", x_r1.x_activity_status == "OPEN" ? "info border-3" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, x_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r1.x_customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r1.x_activity_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r1.x_route_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Schdule Date : ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 8, x_r1.x_schedule_date, "d MMM y"), "");
  }
}
const _c1 = function () {
  return ["/activity/history"];
};
const _c2 = function () {
  return ["/activity/schedule"];
};
class ActivityComponent {
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
    this.http.get(this.api + 'activities/index', {
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
    this.http.post(this.api + 'activities/fnAdd', body, {
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
ActivityComponent.ɵfac = function ActivityComponent_Factory(t) {
  return new (t || ActivityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
};
ActivityComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ActivityComponent,
  selectors: [["app-activity"]],
  decls: 20,
  vars: 5,
  consts: [[1, "fixed-top", "bg-gray-100", "py-2"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-1", "align-self-center"], [1, "navbar-brand", "h2", 3, "click"], [1, "bi", "bi-arrow-left"], [1, "col-7", "align-self-center"], [1, "p-0", "m-0", "ms-3"], [1, "col-4", "text-end"], [1, "btn", "btn-info", "rounded-pill", 3, "routerLink"], [1, "main-content", "position-relative", "max-height-vh-100", "h-100", "border-radius-lg"], [1, "container-fluid", "py-4"], [1, "row"], [1, "col-12"], [3, "class", "routerLink", 4, "ngFor", "ngForOf"], [1, "floating_footer"], [1, "display-1", 3, "routerLink"], [1, "bi", "bi-plus-circle-fill"], [3, "routerLink"], [1, "card-body"], [1, "row", "g-0"], [1, "col-9"], [1, "col-3", "text-end"], [1, "badge", "bg-secondary"], [1, "lh-sm", "mb-2"], [1, "lh-sm"]],
  template: function ActivityComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ActivityComponent_Template_a_click_4_listener() {
        return ctx.back();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Activites schedule");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "History");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "main", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ActivityComponent_div_16_Template, 16, 13, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15)(18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c2));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activity/activity.component */ 8742);
/* harmony import */ var _service_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth.guard */ 9164);
/* harmony import */ var _login_relogin_relogin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/relogin/relogin.component */ 2059);
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notfound/notfound.component */ 5848);
/* harmony import */ var _activity_activity_detail_activity_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activity/activity-detail/activity-detail.component */ 2030);
/* harmony import */ var _activity_activity_schedule_activity_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activity/activity-schedule/activity-schedule.component */ 3357);
/* harmony import */ var _activity_activity_history_activity_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./activity/activity-history/activity-history.component */ 1914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);












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
  path: "activity",
  component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_2__.ActivityComponent,
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
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1722);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 2014);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity/activity.component */ 8742);
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notfound/notfound.component */ 5848);
/* harmony import */ var _global_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/header/header.component */ 7043);
/* harmony import */ var _login_relogin_relogin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/relogin/relogin.component */ 2059);
/* harmony import */ var _activity_activity_detail_activity_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./activity/activity-detail/activity-detail.component */ 2030);
/* harmony import */ var _activity_activity_schedule_activity_schedule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./activity/activity-schedule/activity-schedule.component */ 3357);
/* harmony import */ var _global_header_back_header_back_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/header-back/header-back.component */ 6101);
/* harmony import */ var _activity_activity_history_activity_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./activity/activity-history/activity-history.component */ 1914);
/* harmony import */ var _service_safe_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/safe.pipe */ 9263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);


















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _activity_activity_component__WEBPACK_IMPORTED_MODULE_4__.ActivityComponent, _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_5__.NotfoundComponent, _global_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _login_relogin_relogin_component__WEBPACK_IMPORTED_MODULE_7__.ReloginComponent, _activity_activity_detail_activity_detail_component__WEBPACK_IMPORTED_MODULE_8__.ActivityDetailComponent, _activity_activity_schedule_activity_schedule_component__WEBPACK_IMPORTED_MODULE_9__.ActivityScheduleComponent, _global_header_back_header_back_component__WEBPACK_IMPORTED_MODULE_10__.HeaderBackComponent, _activity_activity_history_activity_history_component__WEBPACK_IMPORTED_MODULE_11__.ActivityHistoryComponent, _service_safe_pipe__WEBPACK_IMPORTED_MODULE_12__.SafePipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule]
  });
})();

/***/ }),

/***/ 6101:
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
  decls: 13,
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " asdf ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/config.service */ 8650);




class HeaderComponent {
  constructor(http, router, configService) {
    this.http = http;
    this.router = router;
    this.configService = configService;
  }
  logout() {
    this.configService.removeToken().subscribe(data => {
      if (data == true) {
        this.router.navigate(['login']);
      }
    });
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 23,
  vars: 0,
  consts: [["aria-label", "Light offcanvas navbar", 1, "navbar", "bg-body-tertiary", "fixed-top"], [1, "container-fluid"], [1, "navbar-brand"], ["type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasNavbarLight", "aria-controls", "offcanvasNavbarLight", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "bi", "bi-list"], ["tabindex", "-1", "id", "offcanvasNavbarLight", "aria-labelledby", "offcanvasNavbarLightLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "offcanvasNavbarLightLabel", 1, "offcanvas-title"], ["data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, ""], [1, "bi", "bi-x-lg"], [1, "offcanvas-body"], [1, "navbar-nav", "justify-content-end", "flex-grow-1", "pe-3"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link"], ["data-bs-dismiss", "offcanvas", 1, "nav-link", 3, "click"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "BSF CRM");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Offcanvas");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "ul", 11)(14, "li", 12)(15, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 12)(18, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 12)(21, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_21_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Log Out");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
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
  return ["/activity"];
};
class HomeComponent {
  constructor(http, config, ngZone) {
    this.http = http;
    this.config = config;
    this.ngZone = ngZone;
    this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    this.gpsInfo = [];
    this.cameraSuccess = imagesData => {
      console.log("cameraSuccess : ", imagesData);
      this.ngZone.run(() => {
        console.log('data:image/png;base64,' + imagesData);
      });
    };
    this.cameraError = e => {
      console.log('error Camera', e);
    };
    this.note = "";
  }
  ngOnInit() {
    console.log(this.config.account());
  }
  gps() {
    console.log("GEO is :");
    let self = this;
    var onSuccess = function (position) {
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
    this.http.get("http://systemapk.bsfar.com:41021/bsf-portal/index.php/mobile_api/product").subscribe(data => {
      console.log(data);
      this.note = "Success";
    }, e => {
      console.log(e);
      this.note = "Error";
    });
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 29,
  vars: 9,
  consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "my-5"], [1, "d-grid"], [1, "btn", "btn-lg", "btn-primary", 3, "routerLink"], [1, "col-12", "my-2"], [1, "btn", "btn-lg", "btn-dark", 3, "click"], [1, "mt-1"], [1, "btn", "btn-lg", "btn-info", 3, "click"], [1, "btn", "btn-lg", "btn-warning", 3, "click"], [1, "col-12"], [1, "lh-1", "my-3", "alert", "alert-light"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Activty");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "div", 3)(9, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_9_listener() {
        return ctx.portal1();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Test Call Products");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "code", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5)(14, "div", 3)(15, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_15_listener() {
        return ctx.cam();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Test Camera Allowed");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5)(18, "div", 3)(19, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_19_listener() {
        return ctx.gps();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Test GPS Allowed");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "code", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 10)(25, "div", 11)(26, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.note, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 4, ctx.gpsInfo), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 6, ctx.env), "");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _global_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.JsonPipe],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);








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
  }
  ngOnInit() {
    this.model.serialNumber = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? "" : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serialNumber;
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
    this.http.post(this.api + 'login/auth', body).subscribe(data => {
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
  decls: 79,
  vars: 9,
  consts: [[1, "fixed-top"], [1, "container"], [1, "row"], [1, "col-12"], [1, "navbar", "navbar-expand-lg", "blur", "blur-rounded", "top-0", "z-index-3", "shadow", "position-absolute", "my-3", "py-2", "start-0", "end-0", "mx-4"], [1, "container-fluid", "pe-0"], ["href", "../pages/dashboard.html", 1, "navbar-brand", "font-weight-bolder", "ms-lg-0", "ms-3"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navigation", "aria-controls", "navigation", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "shadow-none", "ms-2"], [1, "navbar-toggler-icon", "mt-2"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "navigation", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto", "ms-xl-auto", "me-xl-7"], [1, "nav-item"], ["aria-current", "page", "href", "../pages/dashboard.html", 1, "nav-link", "d-flex", "align-items-center", "me-2", "active"], [1, "fa", "fa-chart-pie", "opacity-6", "text-dark", "me-1"], [1, "nav-link", "me-2"], [1, "fa", "fa-user", "opacity-6", "text-dark", "me-1"], [1, "fas", "fa-user-circle", "opacity-6", "text-dark", "me-1"], [1, "fas", "fa-key", "opacity-6", "text-dark", "me-1"], [1, "my-2"], [1, "main-content", "mt-0"], [1, "page-header", "min-vh-75"], [1, "col-xl-4", "col-lg-5", "col-md-6", "d-flex", "flex-column", "mx-auto"], [1, "card", "card-plain", "mt-8"], [1, "card-header", "pb-0", "text-left", "bg-transparent"], [1, "font-weight-bolder", "text-info", "text-gradient"], [1, "mb-0"], [1, "card-body"], ["autocomplete", "off", 3, "ngSubmit"], ["myForm", "ngForm"], [1, "mb-3"], ["type", "email", "id", "email", "placeholder", "name@example.com", "required", "", "name", "email", "email", "", "autocomplete", "false", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "text-danger", 3, "hidden"], ["type", "password", "id", "floatingPassword", "placeholder", "Password", "required", "", "name", "passw", "autocomplete", "false", 1, "form-control", 3, "ngModel", "ngModelChange"], ["passw", "ngModel"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "rememberMe", "checked", "", 1, "form-check-input"], ["for", "rememberMe", 1, "form-check-label"], [1, "text-center"], ["type", "submit", 1, "btn", "bg-gradient-info", "w-100", "mt-4", "mb-0", 3, "disabled"], [1, "card-footer", "text-center", "pt-0", "px-lg-2", "px-1"], [1, "mb-4", "text-sm", "mx-auto"], [1, "col-md-6"], [1, "oblique", "position-absolute", "top-0", "h-100", "d-md-block", "d-none", "me-n8"], [1, "oblique-image", "bg-cover", "position-absolute", "fixed-top", "ms-auto", "h-100", "z-index-0", "ms-n6", 2, "background-image", "url('../assets/img/curved-images/curved6.jpg')"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "div", 5)(6, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " BSF Sales Activity ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7)(9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span", 9)(11, "span", 10)(12, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12)(14, "ul", 13)(15, "li", 14)(16, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Dashboard ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li", 14)(20, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Profile ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li", 14)(24, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Sign Up ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li", 14)(28, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Sign In ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 21)(32, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "json");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "main", 22)(36, "section")(37, "div", 23)(38, "div", 1)(39, "div", 2)(40, "div", 24)(41, "div", 25)(42, "div", 26)(43, "h3", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Welcome back");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Enter your email and password to sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 29)(48, "form", 30, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_48_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 32)(53, "input", 33, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_53_listener($event) {
        return ctx.model.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div")(56, "small", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " Email is required ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 32)(61, "input", 36, 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_61_listener($event) {
        return ctx.model.passw = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div")(64, "small", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " Password is required ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Remember me");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 41)(71, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 43)(74, "p", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 45)(77, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](49);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](54);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 7, ctx.env), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.model.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.model.passw);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r0.form.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.note, " ");
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_7__.JsonPipe],
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
    if (this.config.getToken()) {
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);



class ConfigService {
  constructor() {
    this.tokenKey = "bsfJwtToken01";
  }
  setToken(token) {
    try {
      localStorage.setItem(this.tokenKey, token);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true); // Mengembalikan Observable yang mengirimkan nilai boolean true
    } catch (error) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false); // Mengembalikan Observable yang mengirimkan nilai boolean false jika terjadi kesalahan
    }
  }

  removeToken() {
    try {
      localStorage.removeItem(this.tokenKey);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true); // Mengembalikan Observable yang mengirimkan nilai boolean true
    } catch (error) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false); // Mengembalikan Observable yang mengirimkan nilai boolean false jika terjadi kesalahan
    }
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  headers() {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
      'Content-Type': 'application/json',
      'Token': this.getToken()
    });
  }
  account() {
    const jwtObj = this.getToken().split(".");
    return JSON.parse(atob(jwtObj[1]));
  }
}
ConfigService.ɵfac = function ConfigService_Factory(t) {
  return new (t || ConfigService)();
};
ConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ConfigService,
  factory: ConfigService.ɵfac,
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
  version: "V1 Staging",
  production: false,
  api: "http://192.168.1.111/app/bsf/public/",
  serialNumber: false
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map