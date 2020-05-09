(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GlobalShareCode */ "./src/app/GlobalShareCode.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.commonFunctionality */ "./src/app/app.commonFunctionality.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG } from 'constants';
var LoginService = /** @class */ (function () {
    function LoginService(commonFunc) {
        this.commonFunc = commonFunc;
        this.getLoginActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/Login/Login';
        this.forgotPasswordActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/Login/ForgotPassword';
    }
    LoginService.prototype.getLogin = function (itemName) {
        return this.commonFunc.CallHttp(this.getLoginActionUrl, itemName, null);
    };
    LoginService.prototype.getCompany = function () {
        return this.commonFunc.getCompany();
    };
    LoginService.prototype.forgotPassword = function (itemName) {
        return this.commonFunc.CallHttp(this.forgotPasswordActionUrl, itemName, null);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_app_commonFunctionality__WEBPACK_IMPORTED_MODULE_2__["CommonFunctionality"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map