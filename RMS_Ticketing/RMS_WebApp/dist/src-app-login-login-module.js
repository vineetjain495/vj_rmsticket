(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-login-login-module"],{

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topleft {\r\n  position: absolute;\r\n  top: 8px;\r\n  left: 16px;\r\n  font-size: 18px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsV0FBVztFQUNYLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wbGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOHB4O1xyXG4gIGxlZnQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GlobalShareCode */ "./src/app/GlobalShareCode.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DataService */ "./src/app/services/DataService.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_model_Credential__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/model/Credential */ "./src/app/shared/model/Credential.ts");
/* harmony import */ var _shared_model_EmployeeMaster__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/model/EmployeeMaster */ "./src/app/shared/model/EmployeeMaster.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginComponent = /** @class */ (function () {
    function LoginComponent(_service, ds, router, sessionStorageService) {
        this._service = _service;
        this.ds = ds;
        this.router = router;
        this.sessionStorageService = sessionStorageService;
        this.model = new _shared_model_Credential__WEBPACK_IMPORTED_MODULE_5__["Credential"]();
        this.modelEmployeeMaster = new _shared_model_EmployeeMaster__WEBPACK_IMPORTED_MODULE_6__["EmployeeMaster"]();
        this.logo = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + "/assets/images/CMS_RMS_logo.jpg";
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('access_token');
        //console.log(baseUrl);
        //this.ds.ShowHideToasty({
        //    title: 'Loading Data...Wait!!',
        //    msg: '',
        //    showClose: false,
        //    theme: 'bootstrap',
        //    type: 'wait',
        //    closeOther: true
        //});
        //this._service.getCompany().subscribe((response: BaseResponseWithData<any>) => {
        //    if (response.Success) {
        //        if (response.Entity != null) {
        //            this.lCompanys = response.Entity;
        //        }
        //    }
        //    this.ds.ShowHideToasty();
        //});
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.ds.ShowHideToasty({
                title: 'Please Wait...',
                msg: '',
                showClose: false,
                theme: 'bootstrap',
                type: 'wait',
                closeOther: true
            });
            var form = new FormData();
            //form.append("CompanyID", this.model.CompanyID);
            form.append("Entity.UserID", this.model.UserID);
            form.append("Entity.Password", this.model.Password);
            this._service.getLogin(form).subscribe(function (response) {
                if (response.Success) {
                    localStorage.setItem("access_token", response.UserToken.AccessToken);
                    if (response.Entity != null) {
                        //this.modelEmployeeMaster = response.Entity;
                        _this.sessionStorageService.store('userdetails', JSON.stringify(response.Entity));
                        _this.ds.ShowHideToasty({
                            title: 'Login Successfully..',
                            msg: '',
                            showClose: true,
                            theme: 'bootstrap',
                            type: 'success',
                            closeOther: true,
                            timeout: 5000
                        });
                        // this.router.navigateByUrl('/TicketViewer');
                        _this.router.navigateByUrl('/Employee/EmployeeViewer');
                    }
                    //if (this.modelEmployeeMaster.ResetPassword) {
                    //            this.router.navigateByUrl('/ResetPassword');
                    //        }
                    //        else {
                    //            this.router.navigateByUrl('/Dashboard');
                    //        }
                }
                else {
                    _this.ds.ShowHideToasty({
                        title: 'Login Failure..',
                        msg: 'Incorrect Credentials, Kindly Input Correct Credentials',
                        showClose: true,
                        theme: 'bootstrap',
                        type: 'error',
                        closeOther: true,
                    });
                }
            });
            //this._service.getLogin(form).subscribe((response: BaseResponseWithData<any>) => {
            //    if (response.Success) {
            //        if (response.Entity != null) {
            //            this.modelEmployeeMaster = response.Entity;
            //            this.sessionStorageService.store('userdetails', JSON.stringify(response.Entity));
            //            this.ds.ShowHideToasty({
            //                title: 'Login Successfully..',
            //                msg: '',
            //                showClose: true,
            //                theme: 'bootstrap',
            //                type: 'success',
            //                closeOther: true,
            //                timeout: 5000
            //            });
            //            if (this.modelEmployeeMaster.ResetPassword) {
            //                this.router.navigateByUrl('/ResetPassword');
            //            }
            //            else {
            //                this.router.navigateByUrl('/Dashboard');
            //            }
            //        } else {
            //            this.ds.ShowHideToasty({
            //                title: 'Login Failure..',
            //                msg: 'Incorrect Credentials, Kindly Input Correct Credentials',
            //                showClose: true,
            //                theme: 'bootstrap',
            //                type: 'error',
            //                closeOther: true,
            //            });
            //        }
            //    }
            //    else {
            //        this.ds.ShowHideToasty({
            //            title: 'Login Failure..',
            //            msg: response.Message,
            //            showClose: true,
            //            theme: 'bootstrap',
            //            type: 'error',
            //            closeOther: true,
            //        });
            //    }
            //});
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"])
    ], LoginComponent.prototype, "form", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.template.html */ "./src/app/login/login.template.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: [_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _services_DataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__["SessionStorageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.routing */ "./src/app/login/login.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { DashboardComponent } from '../dashboard/dashbkcoard.component';
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_login_routing__WEBPACK_IMPORTED_MODULE_4__["routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login.routing.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.routing.ts ***!
  \****************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");


var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"],
        data: {
            breadcrumb: 'Login',
        },
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/login/login.template.html":
/*!*******************************************!*\
  !*** ./src/app/login/login.template.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--bg-secondary-->\r\n<section class=\"login p-fixed d-flex text-center  common-img-bg\">\r\n  <!-- starts -->\r\n  <!--<img src=\"http://www.cms.com/wp-content/themes/cms/images/cms_footer_logo.jpg\" class=\"topleft\" width=\"322\" height=\"70\">-->\r\n  <div class=\"auth-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <!-- Authentication card start -->\r\n        <div class=\"login-card card-body auth-body\">\r\n          <form class=\"md-float-material\" novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"text-center\">\r\n\r\n            </div>\r\n            <div class=\"auth-box\">\r\n\r\n              <div class=\"row m-b-20\">\r\n                <div class=\"col-md-12\">\r\n                  <img src=\"{{logo}}\" />\r\n                </div>\r\n              </div>\r\n\r\n                <div class=\"row m-b-20\">\r\n                  <div class=\"col-md-12\">\r\n                    <h3 class=\"text-center txt-primary\">LogIn</h3>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"input-group\">\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.UserID\" name=\"userID\"\r\n                         required\r\n                         #userID=\"ngModel\"\r\n                         [ngClass]=\"{ 'form-control-danger': userID.invalid && userID.dirty, 'form-control-success': userID.valid && userID.dirty}\"\r\n                         placeholder=\"Username\">\r\n                  <span class=\"md-line\"></span>\r\n                </div>\r\n                <div class=\"input-group\">\r\n                  <input type=\"password\" class=\"form-control\" name=\"password\"\r\n                         [(ngModel)]=\"model.Password\"\r\n                         required\r\n                         #password=\"ngModel\"\r\n                         [ngClass]=\"{ 'form-control-danger': password.invalid && password.dirty, 'form-control-success': password.valid && password.dirty }\"\r\n                         placeholder=\"password\">\r\n                  <span class=\"md-line\"></span>\r\n                </div>\r\n                <div class=\"row m-t-25 text-left\">\r\n                  <div class=\"col-sm-6 col-xs-12\">\r\n                    <div class=\"checkbox-fade fade-in-primary\">\r\n                      <label>\r\n                        <input type=\"checkbox\" value=\"\">\r\n                        <span class=\"cr\"><i class=\"cr-icon icofont icofont-ui-check txt-primary\"></i></span>\r\n                        <span class=\"text-inverse\">Remember me</span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-6 col-xs-12 forgot-phone text-right\">\r\n                    <a [routerLink]=\"['/Login/ForgotPassword']\" class=\"text-right f-w-600 text-inverse\"> Forget Password?</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row m-t-30\">\r\n                  <div class=\"col-md-12\">\r\n                    <button type=\"submit\" class=\"btn btn-primary btn-md btn-block waves-effect text-center m-b-20\"\r\n                            [ngClass]=\"{ 'disabled': !f.form.valid }\"\r\n                            [disabled]=\"!f.form.valid\">\r\n                      LOGIN\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n</form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/shared/model/Credential.ts":
/*!********************************************!*\
  !*** ./src/app/shared/model/Credential.ts ***!
  \********************************************/
/*! exports provided: Credential */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credential", function() { return Credential; });
var Credential = /** @class */ (function () {
    function Credential() {
    }
    return Credential;
}());



/***/ }),

/***/ "./src/app/shared/model/EmployeeMaster.ts":
/*!************************************************!*\
  !*** ./src/app/shared/model/EmployeeMaster.ts ***!
  \************************************************/
/*! exports provided: EmployeeMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeMaster", function() { return EmployeeMaster; });
var EmployeeMaster = /** @class */ (function () {
    function EmployeeMaster() {
    }
    return EmployeeMaster;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-login-login-module.js.map