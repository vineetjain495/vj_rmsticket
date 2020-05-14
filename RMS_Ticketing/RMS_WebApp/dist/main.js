(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"src-app-dashboard-dashboard-module"
	],
	"src/app/forgotPassword/forgotPassword.module": [
		"./src/app/forgotPassword/forgotPassword.module.ts",
		"common",
		"src-app-forgotPassword-forgotPassword-module"
	],
	"src/app/login/login.module": [
		"./src/app/login/login.module.ts",
		"common",
		"src-app-login-login-module"
	],
	"src/app/resetPassword/resetPassword.module": [
		"./src/app/resetPassword/resetPassword.module.ts",
		"src-app-resetPassword-resetPassword-module"
	],
	"src/app/ticketViewer/createTicket/createTicket.module": [
		"./src/app/ticketViewer/createTicket/createTicket.module.ts",
		"default~src-app-ticketViewer-createTicket-createTicket-module~src-app-ticketViewer-crudOpsTicket-cru~e0d58778",
		"common",
		"src-app-ticketViewer-createTicket-createTicket-module"
	],
	"src/app/ticketViewer/crudOpsTicket/crudOpsTicket.module": [
		"./src/app/ticketViewer/crudOpsTicket/crudOpsTicket.module.ts",
		"default~src-app-ticketViewer-createTicket-createTicket-module~src-app-ticketViewer-crudOpsTicket-cru~e0d58778",
		"common",
		"src-app-ticketViewer-crudOpsTicket-crudOpsTicket-module"
	],
	"src/app/ticketViewer/ticketViewer.module": [
		"./src/app/ticketViewer/ticketViewer.module.ts",
		"src-app-ticketViewer-ticketViewer-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/CMSHttpInterceptor.ts":
/*!***************************************!*\
  !*** ./src/app/CMSHttpInterceptor.ts ***!
  \***************************************/
/*! exports provided: CMSHttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMSHttpInterceptor", function() { return CMSHttpInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ErrorDialogService } from './services/ErrorDialogService';
var CMSHttpInterceptor = /** @class */ (function () {
    function CMSHttpInterceptor(injector) {
        this.injector = injector;
    }
    CMSHttpInterceptor.prototype.intercept = function (request, next) {
        var token = localStorage.getItem('access_token');
        if (token) {
            //if (request.headers.has('content-type')) {
            request = request.clone({
                setHeaders: {
                    //'content-type': 'application/json',
                    Authorization: "" + token
                }
            });
        }
        //else {
        //  request = request.clone({
        //    setHeaders: {
        //      'content-type': 'application/json',
        //      Authorization: `${token}`
        //    }
        //  });
        //}
        //request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        //}
        //if (!request.headers.has('Content-Type')) {
        //  request = request.clone({ headers: request.headers.set('Content-Type', 'application/x-www-form-urlencoded;application/json') });
        //}
        //request = request.clone({ headers: request.headers.set('Accept', 'application/json, text / plain' ) });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (event) {
            //if (event instanceof HttpResponse) {
            //  console.log('event--->>>', event);
            //}
            return event;
        }));
    };
    CMSHttpInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], CMSHttpInterceptor);
    return CMSHttpInterceptor;
}());



/***/ }),

/***/ "./src/app/Employee/addEmployee.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Employee/addEmployee.service.ts ***!
  \*************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _GlobalShareCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GlobalShareCode */ "./src/app/GlobalShareCode.ts");
/* harmony import */ var _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.commonFunctionality */ "./src/app/app.commonFunctionality.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*After that we write all methods related to consume web in employee.service.ts  */
var EmployeeService = /** @class */ (function () {
    //url = 'https://localhost:44315/Api/Employee';  
    function EmployeeService(http, cf) {
        this.http = http;
        this.cf = cf;
        this.empCode = "";
        this.getUserDetail();
    }
    /* getAllEmployee(): Observable< Employee[]> {
       return this.http.get<Employee[]>(baseUrl + '/AllEmployeeDetails');
     }
     getAllEmployee2() {
       return this.http.get(baseUrl + '/AllEmployeelimited');
     }*/
    EmployeeService.prototype.getRolesDetail = function () {
        return this.http.get(_GlobalShareCode__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'Employee/RolesDetail');
    };
    EmployeeService.prototype.getLocationDetail = function () {
        return this.http.get(_GlobalShareCode__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'Employee/LocatioDetail');
    };
    EmployeeService.prototype.getEmployeeLimited = function () {
        return this.http.get(_GlobalShareCode__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'Employee/Employeelimited');
    };
    EmployeeService.prototype.getEmployeeLimitedByID = function (employee_code) {
        return this.http.get(_GlobalShareCode__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'Employee/EmployeelimitedById/?employeeId=' + employee_code);
    };
    EmployeeService.prototype.getEmployeeById = function (employee_code) {
        // return this.http.get<Employee>(this.url + '/GetEmployeeDetailsById/' + employeeId);
        return this.http.get(_GlobalShareCode__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'Employee/EmployeeDetailsById/?employeeId=' + employee_code);
    };
    EmployeeService.prototype.getUserDetail = function () {
        var _this = this;
        //console.log("user");
        this.cf.GetUserDetails().subscribe(function (data) {
            if (data.Success) {
                // console.log(data + " " + data.Entity + " " + data.Entity.EmpCode);
                _this.empCode = data.Entity.EmpCode;
                console.log(_this.empCode);
            }
        });
    };
    // getEmployeeById2(employeeId: string){  
    //   console.log(this.url + '/GetEmployeeDetailsById/' + employeeId);
    //   return this.http.get(this.url + '/GetEmployeeDetailsById/' + employeeId);  
    // }  
    EmployeeService.prototype.createEmployee = function (employee) {
        console.log(employee);
        // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
        //console.log(employee.MspCategory)
        // return this.http.post<Employee>(this.url + '/InsertEmployeeDetails',   employee, httpOptions); 
        return this.http.post(_GlobalShareCode__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'Employee/NewEmployee', employee);
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
        // return this.http.put<Employee>(this.url + '/UpdateEmployeeDetails/',  
        // employee, httpOptions);  
        //console.log(employee);
        return this.http.put('../Employee/UpdateEmployeeDetails', employee);
    };
    EmployeeService.prototype.deleteEmployeeById = function (employeeid) {
        // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
        return this.http.delete(_GlobalShareCode__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + '/DeleteEmployeeDetails?emp_code=' + employeeid);
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_3__["CommonFunctionality"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/Employee/addEmployee/addEmployee.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Employee/addEmployee/addEmployee.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textboxheight {\r\n  height: 30px;\r\n}\r\n\r\n.topTable {\r\n  border: 1px solid #07002A;\r\n}\r\n\r\n.topTable-table {\r\n  width: 100%\r\n}\r\n\r\n.topTable-table-th {\r\n  height: 20px;\r\n  text-align: center;\r\n  background-color: dodgerblue;\r\n  color: white\r\n}\r\n\r\n.topTable-table-td {\r\n  text-align: center;\r\n}\r\n\r\n.ng-select.ng-invalid.ng-touched .ng-select-container {\r\n  border-color: #dc3545;\r\n}\r\n\r\n.ng-select.ng-valid.ng-touched .ng-select-container {\r\n  border-color: #2ecc71;\r\n  color: #2ecc71;\r\n}\r\n\r\n.ng-select .ng-select-container {\r\n  min-height: 29px;\r\n}\r\n\r\n.ng-select.ng-select-single .ng-select-container {\r\n  height: 29px;\r\n}\r\n\r\n.ng-select .ng-select-container .ng-value-container {\r\n  padding-top: 4px;\r\n}\r\n\r\n.ng-select .ng-clear-wrapper {\r\n  padding-top: 4px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRW1wbG95ZWUvYWRkRW1wbG95ZWUvYWRkRW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0NBQ2hCOztBQUlEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvRW1wbG95ZWUvYWRkRW1wbG95ZWUvYWRkRW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94aGVpZ2h0IHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi50b3BUYWJsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzA3MDAyQTtcclxufVxyXG5cclxuLnRvcFRhYmxlLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG4udG9wVGFibGUtdGFibGUtdGgge1xyXG4gIGhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBjb2xvcjogd2hpdGVcclxufVxyXG5cclxuLnRvcFRhYmxlLXRhYmxlLXRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3QubmctdmFsaWQubmctdG91Y2hlZCAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmVjYzcxO1xyXG4gIGNvbG9yOiAjMmVjYzcxO1xyXG59XHJcblxyXG5cclxuXHJcbi5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDI5cHg7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAyOXB4O1xyXG59XHJcblxyXG4ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3QgLm5nLWNsZWFyLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/Employee/addEmployee/addEmployee.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Employee/addEmployee/addEmployee.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Create Employee'\" [blockClass]=\"'tran-data'\"  [showRightSection]=\"'false'\"  [cardToggle]=\"cardToggleGrid\">\r\n\r\n  <!------ Include the above in your HEAD tag ---------->\r\n  <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onFormSubmit()\">\r\n    <p *ngIf=\"dataSaved\" style=\"color:rgb(0, 128, 0);font-size:20px;font-weight:bold\"\r\n       Class=\"success\">\r\n      {{massage}}\r\n    </p>\r\n    <span *ngIf=\"errorFound\">\r\n      <span class=\"alert-danger\"> {{massage}} </span>\r\n    </span>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Employee Code<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" formControlName=\"Type_EmpCode\" id=\"Type_EmpCode\"\r\n                   class=\"form-control input-sm\" (blur)=\"checkCode($event)\" placeholder=\"Code *\" required>\r\n            <div *ngIf=\"codeAvailable\">\r\n              <div class=\"alert-danger\"> This Code is Available </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Employee Name<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" formControlName=\"EmployeeName\" id=\"EmployeeName\"\r\n                   class=\"form-control input-sm\" placeholder=\"Name *\" required>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Mobile Number<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"number\" formControlName=\"MobileNumber\" id=\"MobileNumber\"\r\n                   class=\"form-control input-sm\" placeholder=\"Mobile *\" required>\r\n            <div *ngIf=\"employeeForm.get('MobileNumber').value && !employeeForm.get('MobileNumber').valid\">\r\n              <div class=\"alert-danger\"> Enter 10 digit Mobile Number </div>\r\n            </div>\r\n            <div *ngIf=\"!employeeForm.get('MobileNumber').value && employeeForm.get('MobileNumber').touched\">\r\n              <div class=\"alert-danger\"> Enter Mobile Number </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--#incidentDate #disputeAmount #AtmID-->\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Email Address<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"email\" formControlName=\"EmailId\" id=\"EmailId\"\r\n                   class=\"form-control input-sm\" placeholder=\"Email *\" required email>\r\n            <div *ngIf=\"!employeeForm.get('EmailId').value && employeeForm.get('EmailId').touched\">\r\n              <div class=\"alert-danger\"> Enter Email ID </div>\r\n            </div>\r\n            <div *ngIf=\"employeeForm.get('EmailId').value && !employeeForm.get('EmailId').valid\">\r\n              <div class=\"alert-danger\"> Enter valid email address </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Rights</label>\r\n          <div class=\"col-sm-12\">\r\n            <select class=\"form-control\" formControlName=\"RightsCode\">\r\n              <option *ngFor=\"let rl of rights\" [value]=\"rl[0]\">{{ rl[1] }}</option>\r\n             \r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Roles</label>\r\n          <div class=\"col-sm-12\">\r\n            <select class=\"form-control\" (change)=\"RolesInput($event)\"\r\n                    formControlName=\"RoleCode\">\r\n              <option *ngFor=\"let rl of roles\" [value]=\"rl[0]\">{{ rl[1] }}</option>\r\n              \r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\" *ngIf=\"isMSPSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">MSP Category<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" formControlName=\"MspCategory\" id=\"mspcategory\"\r\n                   *ngIf=\"isMSPSelected\" class=\"form-control input-sm\" placeholder=\"MSP Category\">\r\n            <div *ngIf=\"isMSPSelected && !employeeForm.get('MspCategory').value && employeeForm.get('MspCategory').touched\">\r\n              <div class=\"alert-danger\"> Enter MSP Catogory </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\" *ngIf=\"isLocationSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Region<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-multiselect-dropdown name=\"region\"\r\n                                     [placeholder]=\"'Select Region'\" [data]=\"Countries2\" formControlName=\"Region\"\r\n                                     [settings]=\"dropdownSettings2\" (onDeSelect)=\"removeCountry($event)\" (onSelect)=\"changeCountry($event)\">\r\n            </ng-multiselect-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\" *ngIf=\"isLocationSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Region<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"region\"\r\n                                     [placeholder]=\"'Select Location'\" [data]=\"states2\" formControlName=\"Location\"\r\n                                     [settings]=\"dropdownSettings2\" (onDeSelect)=\"removeState($event)\" (onSelect)=\"changeState($event)\">\r\n            </ng-multiselect-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\" *ngIf=\"isLocationSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Region<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"hub\"\r\n                                     [placeholder]=\"'Select Hub'\" [data]=\"cities2\" formControlName=\"Hub\"\r\n                                     [settings]=\"dropdownSettings\">\r\n            </ng-multiselect-dropdown>\r\n            <div *ngIf=\"isLocationSelected && !employeeForm.get('Hub').value && employeeForm.get('Hub').touched\">\r\n              <div class=\"alert-danger\"> Enter Hub Catogory </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            <input type=\"submit\" [disabled]=\"!employeeForm.valid\" value=\"Add\"\r\n                   class=\"btn btn-info \">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </form>\r\n</app-card>\r\n\r\n\r\n\r\n\r\n  <!--<div class=\"container\">\r\n    <div class=\"row centered-form\">\r\n      <div class=\"col-xs-12 col-sm-10 col-md-6 col-lg-offset-2 col-md-offset-3\">\r\n        <button class=\"btn btn-primary\" (click)=\"goToPage('/show_data');\">Show</button>\r\n        <button class=\"btn btn-primary\" (click)=\"goToPage('/create_element');\">Create</button>\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n          \r\n            <h2 class=\"text-center\"> Add Employee Detail </h2>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onFormSubmit()\">\r\n              <p *ngIf=\"dataSaved\" style=\"color:rgb(0, 128, 0);font-size:20px;font-weight:bold\"\r\n                 Class=\"success\">\r\n                {{massage}}\r\n              </p>\r\n              <span *ngIf=\"errorFound\">\r\n                <span class=\"alert-danger\"> {{massage}} </span>\r\n              </span>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" formControlName=\"EmployeeName\" id=\"EmployeeName\"\r\n                       class=\"form-control input-sm\" placeholder=\"Name *\" required>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"number\" formControlName=\"MobileNumber\" id=\"MobileNumber\"\r\n                           class=\"form-control input-sm\" placeholder=\"Mobile *\" required>\r\n                    <span *ngIf=\"employeeForm.get('MobileNumber').value && !employeeForm.get('MobileNumber').valid\">\r\n                      <span class=\"alert-danger\"> Enter valid Mobile Number </span>\r\n                    </span>\r\n                    <span *ngIf=\"!employeeForm.get('MobileNumber').value && employeeForm.get('MobileNumber').touched\">\r\n                      <span class=\"alert-danger\"> Enter Mobile Number </span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"email\" formControlName=\"EmailId\" id=\"EmailId\"\r\n                           class=\"form-control input-sm\" placeholder=\"Email *\" required email>\r\n                    <span *ngIf=\"!employeeForm.get('EmailId').value && employeeForm.get('EmailId').touched\">\r\n                      <span class=\"alert-danger\"> Enter Email ID </span>\r\n                    </span>\r\n                    <span *ngIf=\"employeeForm.get('EmailId').value && !employeeForm.get('EmailId').valid\">\r\n                      <span class=\"alert-danger\"> Enter valid email address </span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" formControlName=\"Type_EmpCode\" id=\"Type_EmpCode\"\r\n                           class=\"form-control input-sm\" placeholder=\"Code *\" required>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <select class=\"form-control\" (change)=\"RolesInput($event)\"\r\n                            formControlName=\"RoleCode\">\r\n                      <option selected=\"\">Roles</option>\r\n                      <option value=\"1\">ADMIN</option>\r\n                      <option value=\"2\">HO</option>\r\n                      <option value=\"3\">MSP</option>\r\n                      <option value=\"4\">Location</option>\r\n                      <option value=\"5\">HO_Manager</option>\r\n                      <option value=\"6\">Location_Manager</option>\r\n                      <option value=\"7\">MIS_User</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" formControlName=\"MspCategory\" id=\"mspcategory\"\r\n                           *ngIf=\"isMSPSelected\" class=\"form-control input-sm\" placeholder=\"MSP Category\">\r\n                    <span *ngIf=\"isMSPSelected && !employeeForm.get('MspCategory').value && employeeForm.get('MspCategory').touched\">\r\n                      <span class=\"alert-danger\"> Enter MSP Catogory </span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"region\"\r\n                                             [placeholder]=\"'Select Region'\" [data]=\"Countries2\" formControlName=\"Region\"\r\n                                             [settings]=\"dropdownSettings2\" (onDeSelect)=\"removeCountry($event)\" (onSelect)=\"changeCountry($event)\">\r\n                    </ng-multiselect-dropdown>\r\n                   \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                \r\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                      <div class=\"form-group\">\r\n                        <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"region\"\r\n                                                 [placeholder]=\"'Select Location'\" [data]=\"states2\" formControlName=\"Location\"\r\n                                                 [settings]=\"dropdownSettings2\" (onDeSelect)=\"removeState($event)\" (onSelect)=\"changeState($event)\">\r\n\r\n                        </ng-multiselect-dropdown>\r\n                       \r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n\r\n                      <div class=\"form-group\">\r\n                        <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"hub\"\r\n                                                 [placeholder]=\"'Select Hub'\" [data]=\"cities2\" formControlName=\"Hub\"\r\n                                                 [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\">\r\n                        </ng-multiselect-dropdown>\r\n                        <span *ngIf=\"isLocationSelected && !employeeForm.get('Hub').value && employeeForm.get('Hub').touched\">\r\n                          <span class=\"alert-danger\">\"> Enter Hub Catogory </span>\r\n                        </span>\r\n                      \r\n                      </div>\r\n                    </div>\r\n\r\n\r\n              </div>\r\n\r\n\r\n\r\n              <input type=\"submit\" [disabled]=\"!employeeForm.valid\" value=\"Add\"\r\n                     class=\"btn btn-info btn-block\">\r\n            </form>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n   \r\n  </div>-->\r\n"

/***/ }),

/***/ "./src/app/Employee/addEmployee/addEmployee.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Employee/addEmployee/addEmployee.component.ts ***!
  \***************************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _addEmployee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addEmployee.service */ "./src/app/Employee/addEmployee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_DataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/DataService */ "./src/app/services/DataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



////import { HttpClient } from '@angular/common/http';


var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(formbulider, 
    //  private httpService: HttpClient,
    router, ds, employeeService) {
        var _this = this;
        this.formbulider = formbulider;
        this.router = router;
        this.ds = ds;
        this.employeeService = employeeService;
        this.dataSaved = false;
        this.employeeIdUpdate = null;
        this.massage = null;
        this.submitted = false;
        this.Countries2 = [];
        this.selectedCountry = "--Choose Country--";
        this.states2 = [];
        this.cities2 = [];
        this.roles = [];
        this.rights = [];
        //roles2: Array<any> = [];
        //rights2: Array<any> = [];
        this.disabled = false;
        this.ShowFilter = false;
        this.limitSelection = false;
        this.errorFound = false;
        this.codeAvailable = false;
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownSettings2 = {};
        this.emp_code = "";
        // maps the local data column to fields property
        this.localFields = { text: 'Name', value: 'Code' };
        // set the placeholder to MultiSelect Dropdown input element
        this.localWaterMark = 'Select countries';
        //console.log("addemp");
        this.isLocationSelected = false;
        this.isMSPSelected = false;
        this.ds.ShowHideToasty({
            title: 'Loading...',
            msg: '',
            showClose: false,
            theme: 'bootstrap',
            type: 'wait',
            closeOther: true
        });
        this.employeeService.getRolesDetail().subscribe(function (res) {
            //res;
            res.forEach(function (element) {
                if (element.Type == "Roles") {
                    //console.log(element);
                    _this.roles.push([element.TypeCode, element.Type_EmpCode]);
                }
                if (element.Type == "Rights") {
                    //console.log(element);
                    _this.rights.push([element.TypeCode, element.Type_EmpCode]);
                }
            });
        });
        // console.log(this.roles)
        this.employeeService.getLocationDetail().subscribe(function (res) {
            // console.log(res);
            _this.ds.ShowHideToasty({
                title: 'Create Employee Here',
                msg: '',
                showClose: true,
                theme: 'bootstrap',
                type: 'success',
                closeOther: true,
                timeout: 3000
            });
            _this.Countries = res;
            _this.Countries.forEach(function (element) {
                _this.Countries2.push(element.RoName);
            });
            _this.Countries2 = _this.Countries2.filter(function (el, i, a) { return i === a.indexOf(el); });
            //this.employeeService.getUserDetail();
        });
    }
    // cities2: Array<any>;
    AddEmployeeComponent.prototype.getLocation = function () {
    };
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.employeeForm = this.formbulider.group({
            Type_EmpCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            EmployeeName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            MobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(6000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
            EmailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            MspCategory: [''],
            RoleCode: [''],
            RightsCode: [''],
            Region: [''],
            Location: [''],
            Hub: ['']
        });
        this.loadAllEmployees();
        console.log("user " + this.employeeService.getUserDetail());
        this.dropdownSettings = {
            singleSelection: false,
            // idField: 'item_id',
            // textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: this.ShowFilter
        };
        this.dropdownSettings2 = {
            singleSelection: false,
            // idField: 'item_id',
            // textField: 'item_text',
            enableCheckAll: false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: this.ShowFilter
        };
    };
    Object.defineProperty(AddEmployeeComponent.prototype, "f", {
        get: function () { return this.employeeForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddEmployeeComponent.prototype.loadAllEmployees = function () {
        //  this.allEmployees = this.employeeService.getAllEmployee();
    };
    AddEmployeeComponent.prototype.onFormSubmit = function () {
        console.log("sec");
        this.submitted = true;
        this.dataSaved = false;
        var employee = this.employeeForm.value;
        console.log(employee);
        this.CreateEmployee(employee);
        this.employeeForm.reset();
    };
    AddEmployeeComponent.prototype.changeCountry = function (country) {
        var _this = this;
        this.states = this.Countries.filter(function (cntry) { return cntry.RoName == country; });
        this.states.forEach(function (element) {
            // console.log(element.LocationName);
            _this.states2.push(element.LocationName);
            // this.empList.push(customObj);
        });
        this.states2 = this.states2.filter(function (el, i, a) { return i === a.indexOf(el); });
        // console.log(this.states);
    };
    AddEmployeeComponent.prototype.removeCountry = function (country) {
        var _this = this;
        this.states = this.Countries.filter(function (cntry) { return cntry.RoName == country; });
        this.states.forEach(function (element) {
            console.log("remove" + element.LocationName);
            var index = _this.states2.indexOf(element.LocationName);
            if (index > -1) {
                _this.states2.splice(index, 1);
            }
            // this.states2.pop(element.LocationName);
            // this.empList.push(customObj);
        });
        this.states2 = this.states2.filter(function (el, i, a) { return i === a.indexOf(el); });
    };
    AddEmployeeComponent.prototype.removeState = function (state) {
        var _this = this;
        this.cities = this.states.filter(function (cntry) { return cntry.LocationName == state; });
        this.cities.forEach(function (element) {
            //  console.log("remove" + element.HubLocationName);
            var index = _this.cities2.indexOf(element.HubLocationName);
            if (index > -1) {
                _this.cities2.splice(index, 1);
            }
            // this.states2.pop(element.LocationName);
            // this.empList.push(customObj);
        });
        this.cities2 = this.cities2.filter(function (el, i, a) { return i === a.indexOf(el); });
    };
    AddEmployeeComponent.prototype.changeState = function (state) {
        var _this = this;
        this.cities = this.states.filter(function (cntry) { return cntry.LocationName == state; });
        this.cities.forEach(function (element) {
            //console.log(element.HubLocationName);
            _this.cities2.push(element.HubLocationName);
            // this.empList.push(customObj);
        });
        this.cities2 = this.cities2.filter(function (el, i, a) { return i === a.indexOf(el); });
        //console.log(this.cities2);
    };
    AddEmployeeComponent.prototype.CreateEmployee = function (employee) {
        var _this = this;
        this.ds.ShowHideToasty({
            title: 'Please Wait...',
            msg: '',
            showClose: false,
            theme: 'bootstrap',
            type: 'wait',
            closeOther: true
        });
        console.log("sec");
        if (this.employeeIdUpdate == null) {
            this.employeeService.getEmployeeById(employee.Type_EmpCode).subscribe(function (response) {
                if (response != null) {
                    _this.codeAvailable = true;
                    _this.errorFound = true;
                    _this.massage = "This code is already available";
                    _this.ds.ShowHideToasty({
                        title: 'Failure..',
                        msg: 'This code is already available',
                        showClose: true,
                        theme: 'bootstrap',
                        type: 'error',
                        closeOther: true,
                    });
                    _this.cities = [];
                    _this.cities2 = [];
                    _this.Countries = [];
                    _this.Countries2 = [];
                    _this.states = [];
                    _this.states2 = [];
                }
                else {
                    console.log(_this.employeeService.getUserDetail());
                    employee.createdBy = _this.employeeService.empCode;
                    _this.employeeService.createEmployee(employee).subscribe(function () {
                        // console.log("sec");
                        _this.dataSaved = true;
                        _this.massage = 'Record saved Successfully';
                        console.log("sec");
                        _this.ds.ShowHideToasty({
                            title: 'Record saved Successfully',
                            msg: '',
                            showClose: true,
                            theme: 'bootstrap',
                            type: 'success',
                            closeOther: true,
                            timeout: 5000
                        });
                        console.log(_this.massage);
                        // this.loadAllEmployees();  
                        _this.employeeIdUpdate = null;
                        // this.employeeForm.reset();
                        _this.router.navigateByUrl('/Employee');
                    });
                }
            });
            // console.log(this.data_exist + "dfcds");
        }
        else {
            employee.Type_EmpCode = this.employeeIdUpdate;
            /* this.employeeService.updateEmployee(employee).subscribe(() => {
               this.dataSaved = true;
               this.massage = 'Record Updated Successfully';
               this.loadAllEmployees();
               this.employeeIdUpdate = null;
               // this.employeeForm.reset();
             });*/
        }
    };
    AddEmployeeComponent.prototype.checkCode = function (event) {
        var _this = this;
        console.log(event.target.value);
        if (event.target.value != "") {
            this.employeeService.getEmployeeById(event.target.value).subscribe(function (response) {
                _this.massage = null;
                // console.log(response)
                if (response != null) {
                    _this.codeAvailable = true;
                    _this.ds.ShowHideToasty({
                        title: 'Note..',
                        msg: 'This code is already available',
                        showClose: true,
                        theme: 'bootstrap',
                        type: 'error',
                        closeOther: true,
                        timeout: 10000
                    });
                    _this.massage = "This code is already available";
                    _this.cities = [];
                    _this.cities2 = [];
                    _this.Countries = [];
                    _this.Countries2 = [];
                    _this.states = [];
                    _this.states2 = [];
                    _this.employeeForm.setErrors({ 'incorrect': true });
                }
                else {
                    _this.codeAvailable = false;
                    _this.employeeForm.setErrors(null);
                }
            });
        }
    };
    AddEmployeeComponent.prototype.RolesInput = function (event) {
        var selected = event.target.value;
        if (selected == "2") {
            this.isMSPSelected = true;
        }
        else {
            this.isMSPSelected = false;
        }
        if (selected == "4" || selected == "6") {
            this.isLocationSelected = true;
        }
        else {
            this.isLocationSelected = false;
        }
    };
    AddEmployeeComponent.prototype.resetForm = function () {
        this.employeeForm.reset();
        this.massage = null;
        this.dataSaved = false;
    };
    AddEmployeeComponent.prototype.onItemSelect = function (item) {
        console.log('onItemSelect', item);
    };
    AddEmployeeComponent.prototype.onSelectAll = function (items) {
        console.log('onSelectAll', items);
    };
    AddEmployeeComponent.prototype.goToPage = function (pageName) {
        console.log(pageName);
        this.router.navigate(["" + pageName]);
    };
    AddEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addEmployee',
            template: __webpack_require__(/*! ./addEmployee.component.html */ "./src/app/Employee/addEmployee/addEmployee.component.html"),
            styles: [__webpack_require__(/*! ./addEmployee.component.css */ "./src/app/Employee/addEmployee/addEmployee.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_DataService__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _addEmployee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/Employee/editemp/editemp.component.css":
/*!********************************************************!*\
  !*** ./src/app/Employee/editemp/editemp.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0VtcGxveWVlL2VkaXRlbXAvZWRpdGVtcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Employee/editemp/editemp.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Employee/editemp/editemp.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Edit Employee Detail'\" [blockClass]=\"'tran-data'\" [showRightSection]=\"'false'\"  [cardToggle]=\"cardToggleGrid\">\r\n\r\n  <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onFormSubmit()\">\r\n    <p *ngIf=\"dataSaved\" style=\"color:rgb(0, 128, 0);font-size:20px;font-weight:bold\"\r\n       Class=\"success\">\r\n      {{massage}}\r\n    </p>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Employee Code<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" [attr.disabled]=\"true\" formControlName=\"Type_EmpCode\" id=\"Type_EmpCode\"\r\n                   class=\"form-control input-sm\" placeholder=\"Code *\" required>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Employee Name<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" [attr.disabled]=\"true\" formControlName=\"EmployeeName\" id=\"EmployeeName\"\r\n                   class=\"form-control input-sm\" placeholder=\"Name *\" required>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Mobile Number<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"number\" formControlName=\"MobileNumber\" id=\"MobileNumber\"\r\n                   class=\"form-control input-sm\" placeholder=\"Mobile *\" required>\r\n            <div *ngIf=\"employeeForm.get('MobileNumber').value && !employeeForm.get('MobileNumber').valid\">\r\n              <div class=\"alert-danger\"> Enter  10 digit Mobile Number </div>\r\n            </div>\r\n            <div *ngIf=\"!employeeForm.get('MobileNumber').value && employeeForm.get('MobileNumber').touched\">\r\n              <div class=\"alert-danger\"> Enter Mobile Number </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--#incidentDate #disputeAmount #AtmID-->\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Email Address<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"email\" formControlName=\"EmailId\" id=\"EmailId\"\r\n                   class=\"form-control input-sm\" placeholder=\"Email *\" required email>\r\n            <div *ngIf=\"!employeeForm.get('EmailId').value && employeeForm.get('EmailId').touched\">\r\n              <div class=\"alert-danger\"> Enter Email ID </div>\r\n            </div>\r\n            <div *ngIf=\"employeeForm.get('EmailId').value && !employeeForm.get('EmailId').valid\">\r\n              <div class=\"alert-danger\"> Enter valid email address </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Rights</label>\r\n          <div class=\"col-sm-12\">\r\n            <select class=\"form-control\" formControlName=\"RightsCode\">\r\n              <option *ngFor=\"let rl of rights\" [value]=\"rl[0]\">{{ rl[1] }}</option>\r\n\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Roles</label>\r\n          <div class=\"col-sm-12\">\r\n            <select class=\"form-control\" (change)=\"RolesInput($event)\"\r\n                    formControlName=\"RoleCode\">\r\n              <option *ngFor=\"let rl of roles\" [value]=\"rl[0]\">{{ rl[1] }}</option>\r\n\r\n             \r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\" *ngIf=\"isMSPSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">MSP Category<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" formControlName=\"MspCategory\" id=\"mspcategory\"\r\n                   *ngIf=\"isMSPSelected\" class=\"form-control input-sm\" placeholder=\"MSP Category\">\r\n            <div *ngIf=\"isMSPSelected && !employeeForm.get('MspCategory').value && employeeForm.get('MspCategory').touched\">\r\n              <div class=\"alert-danger\"> Enter MSP Catogory </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\" *ngIf=\"isLocationSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Region<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-multiselect-dropdown name=\"region\"\r\n                                     [placeholder]=\"'Select Region'\" [data]=\"Countries2\" formControlName=\"Region\"\r\n                                     [settings]=\"dropdownSettings2\" (onDeSelect)=\"removeCountry($event)\" (onSelect)=\"changeCountry($event)\">\r\n            </ng-multiselect-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\" *ngIf=\"isLocationSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Region<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"region\"\r\n                                     [placeholder]=\"'Select Location'\" [data]=\"states2\" formControlName=\"Location\"\r\n                                     [settings]=\"dropdownSettings2\" (onDeSelect)=\"removeState($event)\" (onSelect)=\"changeState($event)\">\r\n            </ng-multiselect-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\" *ngIf=\"isLocationSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Region<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"hub\"\r\n                                     [placeholder]=\"'Select Hub'\" [data]=\"cities2\" formControlName=\"Hub\"\r\n                                     [settings]=\"dropdownSettings\">\r\n            </ng-multiselect-dropdown>\r\n            <div *ngIf=\"isLocationSelected && !employeeForm.get('Hub').value && employeeForm.get('Hub').touched\">\r\n              <div class=\"alert-danger\"> Enter Hub Catogory </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <input type=\"checkbox\" formControlName=\"IsActive\" data-md-icheck (change)=\"toggleVisibility($event)\" />\r\n        <span *ngIf=\"active\"> Active</span><span *ngIf=\"!active\"> InActive</span>\r\n\r\n        <span class=\"checkmark\"></span>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            <input type=\"submit\" [disabled]=\"!employeeForm.valid\" value=\"Update\"\r\n                   class=\"btn btn-info\">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </form>\r\n</app-card>\r\n\r\n\r\n\r\n<!--<div class=\"container\">\r\n  <div class=\"row centered-form\">\r\n    <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\r\n      <button class=\"btn btn-primary\" (click)=\"goToPage('/show_data');\">Show</button>\r\n      <button class=\"btn btn-primary\" (click)=\"goToPage('/create_element');\">Create</button>\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h2 class=\"text-center\"> Edit Data</h2>\r\n          <a class=\"nav-item nav-link-edit\" [routerLink]=\"['/show_data']\">Back</a>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <p *ngIf=\"dataSaved\" style=\"color:rgb(0, 128, 0);font-size:20px;font-weight:bold\" Class=\"success\"\r\n             align=\"left\">\r\n            {{massage}}\r\n          </p>\r\n          <span *ngIf=\"errorFound\">\r\n            <span class=\"alert-danger\"> {{massage}} </span>\r\n          </span>\r\n          <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onFormSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" [attr.disabled]=\"true\" formControlName=\"EmployeeName\" id=\"EmployeeName\"\r\n                     class=\"form-control input-sm\" placeholder=\"Name *\" required>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"number\" formControlName=\"MobileNumber\" id=\"MobileNumber\"\r\n                         class=\"form-control input-sm\" placeholder=\"Mobile *\" required>\r\n                  <span *ngIf=\"!employeeForm.get('MobileNumber').value && employeeForm.get('MobileNumber').touched\">\r\n                    <span class=\"alert-danger\"> Enter Mobile Number </span>\r\n                  </span>\r\n                  <span *ngIf=\"employeeForm.get('MobileNumber').value && !employeeForm.get('MobileNumber').valid\">\r\n                    <span class=\"alert-danger\"> Enter valid Mobile Number </span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" formControlName=\"EmailId\" id=\"EmailId\"\r\n                         class=\"form-control input-sm\" placeholder=\"Email *\" required email>\r\n                  <span *ngIf=\"!employeeForm.get('EmailId').value && employeeForm.get('EmailId').touched\">\r\n                    <span class=\"alert-danger\"> Enter Email ID </span>\r\n                  </span>\r\n                  <span *ngIf=\"employeeForm.get('EmailId').value && !employeeForm.get('EmailId').valid\">\r\n                    <span class=\"alert-danger\"> Enter valid email address </span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" [attr.disabled]=\"true\" formControlName=\"Type_EmpCode\"\r\n                         id=\"Type_EmpCode\" class=\"form-control input-sm\" placeholder=\"Code *\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" formControlName=\"Password\" id=\"Password\"\r\n                         class=\"form-control input-sm\" placeholder=\"Password\">\r\n                  <span *ngIf=\"employeeForm.get('Password').value && !employeeForm.get('Password').valid\">\r\n                    <span class=\"alert-danger\"> Password must contain minimum 6 letter </span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <select class=\"form-control\" formControlName=\"RoleCode\">\r\n                    <option selected=\"\">Roles</option>\r\n                    <option value=\"1\">ADMIN</option>\r\n                    <option value=\"2\">HO</option>\r\n                    <option value=\"3\">MSP</option>\r\n                    <option value=\"4\">Location</option>\r\n                    <option value=\"5\">HO_Manager</option>\r\n                    <option value=\"6\">Location_Manager</option>\r\n                    <option value=\"7\">MIS_User</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <select class=\"form-control\" formControlName=\"RightsCode\">\r\n                    <option selected=\"\">Rights</option>\r\n                    <option value=\"1\">View</option>\r\n                    <option value=\"2\">Edit</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <input type=\"checkbox\" formControlName=\"IsActive\" data-md-icheck (change)=\"toggleVisibility($event)\" />\r\n            <span *ngIf=\"active\"> Active</span><span *ngIf=\"!active\"> InActive</span>\r\n\r\n            <span class=\"checkmark\"></span>\r\n            <input type=\"submit\" [disabled]=\"!employeeForm.valid\" value=\"Update\"\r\n                   class=\"btn btn-info btn-block\">\r\n\r\n            <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"deleteEmployee(employeeForm.get('Type_EmpCode').value)\">Delete</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div-->\r\n"

/***/ }),

/***/ "./src/app/Employee/editemp/editemp.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Employee/editemp/editemp.component.ts ***!
  \*******************************************************/
/*! exports provided: EditempComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditempComponent", function() { return EditempComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _addEmployee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addEmployee.service */ "./src/app/Employee/addEmployee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_DataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/DataService */ "./src/app/services/DataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HttpClient } from '@angular/common/http';  




var EditempComponent = /** @class */ (function () {
    function EditempComponent(formbulider, 
    //   private httpService: HttpClient,
    route, router, ds, employeeService) {
        var _this = this;
        this.formbulider = formbulider;
        this.route = route;
        this.router = router;
        this.ds = ds;
        this.employeeService = employeeService;
        this.dataSaved = false;
        this.employeeIdUpdate = null;
        this.massage = null;
        this.active = true;
        this.Countries2 = [];
        this.selectedCountry = "--Choose Country--";
        this.states2 = [];
        this.cities2 = [];
        this.roles = [];
        this.rights = [];
        this.disabled = false;
        this.ShowFilter = false;
        this.limitSelection = false;
        this.errorFound = false;
        this.isLocationSelected = false;
        this.isMSPSelected = false;
        this.ds.ShowHideToasty({
            title: 'Loading...',
            msg: '',
            showClose: false,
            theme: 'bootstrap',
            type: 'wait',
            closeOther: true
        });
        this.employeeService.getRolesDetail().subscribe(function (res) {
            //res;
            res.forEach(function (element) {
                if (element.Type == "Roles") {
                    //console.log(element);
                    _this.roles.push([element.TypeCode, element.Type_EmpCode]);
                }
                if (element.Type == "Rights") {
                    //console.log(element);
                    _this.rights.push([element.TypeCode, element.Type_EmpCode]);
                }
            });
        });
        this.employeeService.getLocationDetail().subscribe(function (res) {
            // console.log(res);
            _this.ds.ShowHideToasty({
                title: 'Edit Employee Here',
                msg: '',
                showClose: true,
                theme: 'bootstrap',
                type: 'success',
                closeOther: true,
                timeout: 3000
            });
            _this.Countries = res;
            _this.Countries.forEach(function (element) {
                _this.Countries2.push(element.RoName);
            });
            _this.Countries2 = _this.Countries2.filter(function (el, i, a) { return i === a.indexOf(el); });
        });
    }
    EditempComponent.prototype.ngOnInit = function () {
        // alert(this.route.snapshot.params.id);
        this.employeeForm = this.formbulider.group({
            Type_EmpCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            EmployeeName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            MobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(6000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
            EmailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            RoleCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            RightsCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            IsActive: [true],
            MspCategory: [''],
            Region: [''],
            Location: [''],
            Hub: ['']
        });
        this.loadEmployeeToEdit(this.route.snapshot.params.id);
    };
    EditempComponent.prototype.UpdateEmployee = function (employee) {
        var _this = this;
        //  console.log("1");
        //     employee.Type_EmpCode = this.employeeIdUpdate;  
        //     console.log("1");
        this.ds.ShowHideToasty({
            title: 'Please Wait...',
            msg: '',
            showClose: false,
            theme: 'bootstrap',
            type: 'wait',
            closeOther: true
        });
        employee.createdBy = this.employeeService.empCode;
        this.employeeService.updateEmployee(employee).subscribe(function (response) {
            console.log(response);
            if (response == "0") {
                _this.dataSaved = false;
                _this.errorFound = true;
                _this.massage = "Ticket is assigned to Employee " + employee.Type_EmpCode + "  You can not change location and Active";
                // this.loadEmployeeToEdit(this.route.snapshot.params.id);
            }
            if (response == null) {
                _this.dataSaved = false;
                _this.errorFound = true;
                _this.massage = "Error in update";
            }
            else {
                _this.ds.ShowHideToasty({
                    title: 'Record Updated Successfully',
                    msg: '',
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'success',
                    closeOther: true,
                    timeout: 5000
                });
                _this.dataSaved = true;
                _this.massage = 'Record Updated Successfully';
                // this.loadAllEmployees();  
                _this.employeeIdUpdate = null;
                // this.employeeForm.reset();
                _this.router.navigateByUrl('/Employee');
            }
        });
    };
    EditempComponent.prototype.loadEmployeeToEdit = function (employeeId) {
        var _this = this;
        this.employeeService.getEmployeeById(employeeId).subscribe(function (response) {
            console.log(response);
            _this.massage = null;
            _this.dataSaved = false;
            _this.employeeIdUpdate = response.Type_EmpCode;
            _this.employeeForm.controls['EmployeeName'].setValue(response.EmployeeName);
            _this.employeeForm.controls['MobileNumber'].setValue(response.MobileNumber);
            _this.employeeForm.controls['EmailId'].setValue(response.EmailID);
            _this.employeeForm.controls['Password'].setValue(response.Password);
            _this.employeeForm.controls['RoleCode'].setValue(response.RoleCode);
            _this.employeeForm.controls['RightsCode'].setValue(response.RightsCode);
            _this.employeeForm.controls['Type_EmpCode'].setValue(response.Type_EmpCode);
            _this.employeeForm.controls['IsActive'].setValue(response.IsActive);
            if (response.RoleCode == "2") {
                _this.employeeForm.controls['MspCategory'].setValue(response.MspCategory);
                _this.isMSPSelected = true;
            }
            // console.log(response.IsActive);
            // this.employeeForm.controls['EmpCode'].setValue(employee.EmpCode);  
        });
    };
    EditempComponent.prototype.onFormSubmit = function () {
        this.dataSaved = false;
        var employee = this.employeeForm.value;
        this.UpdateEmployee(employee);
        this.employeeForm.reset();
    };
    EditempComponent.prototype.resetForm = function () {
        this.employeeForm.reset();
        this.massage = null;
        this.dataSaved = false;
    };
    EditempComponent.prototype.toggleVisibility = function (e) {
        this.active = e.target.checked;
    };
    EditempComponent.prototype.deleteEmployee = function (employeeId) {
        var _this = this;
        if (confirm("Are you sure you want to delete this ?")) {
            console.log(employeeId);
            this.employeeService.deleteEmployeeById(employeeId).subscribe(function () {
                _this.dataSaved = true;
                _this.massage = 'Record Deleted Succefully';
                // this.loadAllEmployees();  
                _this.employeeIdUpdate = null;
                _this.employeeForm.reset();
            });
        }
    };
    EditempComponent.prototype.changeCountry = function (country) {
        var _this = this;
        this.states = this.Countries.filter(function (cntry) { return cntry.RoName == country; });
        this.states.forEach(function (element) {
            // console.log(element.LocationName);
            _this.states2.push(element.LocationName);
            // this.empList.push(customObj);
        });
        this.states2 = this.states2.filter(function (el, i, a) { return i === a.indexOf(el); });
        // console.log(this.states);
    };
    EditempComponent.prototype.removeCountry = function (country) {
        var _this = this;
        this.states = this.Countries.filter(function (cntry) { return cntry.RoName == country; });
        this.states.forEach(function (element) {
            console.log("remove" + element.LocationName);
            var index = _this.states2.indexOf(element.LocationName);
            if (index > -1) {
                _this.states2.splice(index, 1);
            }
            // this.states2.pop(element.LocationName);
            // this.empList.push(customObj);
        });
        this.states2 = this.states2.filter(function (el, i, a) { return i === a.indexOf(el); });
    };
    EditempComponent.prototype.removeState = function (state) {
        var _this = this;
        this.cities = this.states.filter(function (cntry) { return cntry.LocationName == state; });
        this.cities.forEach(function (element) {
            console.log("remove" + element.HubLocationName);
            var index = _this.cities2.indexOf(element.HubLocationName);
            if (index > -1) {
                _this.cities2.splice(index, 1);
            }
            // this.states2.pop(element.LocationName);
            // this.empList.push(customObj);
        });
        this.cities2 = this.cities2.filter(function (el, i, a) { return i === a.indexOf(el); });
    };
    EditempComponent.prototype.changeState = function (state) {
        var _this = this;
        this.cities = this.states.filter(function (cntry) { return cntry.LocationName == state; });
        this.cities.forEach(function (element) {
            //console.log(element.HubLocationName);
            _this.cities2.push(element.HubLocationName);
            // this.empList.push(customObj);
        });
        this.cities2 = this.cities2.filter(function (el, i, a) { return i === a.indexOf(el); });
        console.log(this.cities2);
    };
    EditempComponent.prototype.RolesInput = function (event) {
        var selected = event.target.value;
        if (selected == "2") {
            this.isMSPSelected = true;
        }
        else {
            this.isMSPSelected = false;
        }
        if (selected == "4" || selected == "6") {
            this.isLocationSelected = false;
        }
        else {
            this.isLocationSelected = false;
        }
    };
    EditempComponent.prototype.goToPage = function (pageName) {
        console.log(pageName);
        this.router.navigate(["" + pageName]);
    };
    EditempComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editemp',
            template: __webpack_require__(/*! ./editemp.component.html */ "./src/app/Employee/editemp/editemp.component.html"),
            styles: [__webpack_require__(/*! ./editemp.component.css */ "./src/app/Employee/editemp/editemp.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_DataService__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _addEmployee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], EditempComponent);
    return EditempComponent;
}());



/***/ }),

/***/ "./src/app/Employee/showemployee/showemployee.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Employee/showemployee/showemployee.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topleft {\r\n  position: absolute;\r\n  top: 8px;\r\n  left: 16px;\r\n  font-size: 18px;\r\n}\r\n\r\n\r\n.addButton {\r\n  font-size: 30px;\r\n  margin-left: 115px;\r\n  color: green;\r\n}\r\n\r\n\r\n.icon_color {\r\n  color: green;\r\n}\r\n\r\n\r\n.k-chat {\r\n  height: 622px;\r\n}\r\n\r\n\r\n.add_hover {\r\n  position: relative;\r\n}\r\n\r\n\r\n.add_text {\r\n  visibility: hidden;\r\n  width: 68px;\r\n  background-color: #fff;\r\n  color: #007bff;\r\n  text-align: left;\r\n  font-size: 15px;\r\n  position: absolute;\r\n  top: 11px;\r\n  left: -70px;\r\n}\r\n\r\n\r\n.add_hover:hover .add_text {\r\n  visibility: visible;\r\n}\r\n\r\n\r\n.form-control {\r\n  font-size: 11px !important;\r\n}\r\n\r\n\r\n.textboxheight {\r\n  height: 28px;\r\n}\r\n\r\n\r\n.resetbtn {\r\n  width: 45px;\r\n}\r\n\r\n\r\n.space {\r\n  margin-top: 7px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRW1wbG95ZWUvc2hvd2VtcGxveWVlL3Nob3dlbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0NBQ2pCOzs7QUFHRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtDQUNkOzs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7OztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOzs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtDQUNiOzs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7O0FBRUQ7RUFDRSwyQkFBMkI7Q0FDNUI7OztBQUVEO0VBQ0UsYUFBYTtDQUNkOzs7QUFFRDtFQUNFLFlBQVk7Q0FDYjs7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9FbXBsb3llZS9zaG93ZW1wbG95ZWUvc2hvd2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wbGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOHB4O1xyXG4gIGxlZnQ6IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5cclxuLmFkZEJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMTVweDtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5pY29uX2NvbG9yIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5rLWNoYXQge1xyXG4gIGhlaWdodDogNjIycHg7XHJcbn1cclxuXHJcbi5hZGRfaG92ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFkZF90ZXh0IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgd2lkdGg6IDY4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMXB4O1xyXG4gIGxlZnQ6IC03MHB4O1xyXG59XHJcblxyXG4uYWRkX2hvdmVyOmhvdmVyIC5hZGRfdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0Ym94aGVpZ2h0IHtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbi5yZXNldGJ0biB7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbn1cclxuXHJcbi5zcGFjZSB7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/Employee/showemployee/showemployee.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Employee/showemployee/showemployee.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Employee Viewer'\" [blockClass]=\"'tran-data'\" [showRightSection]=\"'false'\"\r\n          [showBack]=\"mainGridShow\" \r\n          [cardToggle]=\"cardToggleGrid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <form [formGroup]=\"searchForm\" (ngSubmit)=\"onFormSubmit()\">\r\n       \r\n          <div class=\"row\">\r\n            <div class=\"col-lg-2\">\r\n              <label class=\"col-lg-12 col-form-label\">Employee ID</label>\r\n              <input type=\"text\" formControlName=\"Type_EmpCode\" id=\"Type_EmpCode\"\r\n                     class=\"form-control input-sm\" placeholder=\"Code *\" required>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"row space\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 text-center\">\r\n                  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </form>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-12 \">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"icofont-2x\" style=\"color:dodgerblue\">Employee Details</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\" [hidden]=\"hidefromLocation\">\r\n            <div class=\"col-sm-12\">\r\n              <a href=\"javascript:void(0);\" (click)=\"goToPage('/Employee/CreateEmployee');\">\r\n                <i class=\"icofont icofont-contact-add float-right icofont-3x icon_color add_hover\">\r\n                  <span class=\"add_text\">Create Employee</span>\r\n                </i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!--  <button class=\"btn btn-primary\" (click)=\"goToPage('/Employee/CreateEmployee');\">Create</button>-->\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <jqxGrid jqx-grid-energyblue #myGrid [width]=getWidth()\r\n                     [source]=\"dataAdapter\" [autoheight]=\"true\"\r\n                     [altrows]=\"true\" [columns]=\"columns\"\r\n                     (onCellselect)=\"myGridOnCellSelect($event)\"\r\n                     [filterable]=\"false\" [columnsresize]=\"true\"\r\n                     [sortable]=\"false\" [autoshowloadelement]=\"true\"\r\n                     [height]='620' [showheader]=\"false\"\r\n                     [theme]=\"'energyblue'\" [rowsheight]=\"75\"\r\n                     [pageable]=\"true\" [pagesizeoptions]=\"['10', '20', '30']\"\r\n                     [selectionmode]=\"'multiplecellsadvanced'\">\r\n            </jqxGrid>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/Employee/showemployee/showemployee.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Employee/showemployee/showemployee.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShowemployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowemployeeComponent", function() { return ShowemployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _addEmployee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addEmployee.service */ "./src/app/Employee/addEmployee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_DataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/DataService */ "./src/app/services/DataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { HttpClient } from '@angular/common/http';



var ShowemployeeComponent = /** @class */ (function () {
    function ShowemployeeComponent(employeeService, formbulider, ds, router) {
        this.employeeService = employeeService;
        this.formbulider = formbulider;
        this.ds = ds;
        this.router = router;
        this.source = {
            localdata: null,
            datafields: [
                { name: 'ID', type: 'number' },
                { name: 'Type_EmpCode', type: 'string' },
                { name: 'IsActive', type: 'boolean' },
                { name: 'Viewcomment', type: 'string' },
            ],
            datatype: 'json'
        };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.codeCellrenderer = function (row, column, value, defaulthtml, columnproperties, rowselect) {
            return '<a style="color:dodgerblue;margin: 10px; font-size: small;margin-left: 8px; float: left; position: relative;cursor:pointer;"> ' + value + '<br></a>';
        };
        this.detailCellrenderer = function (row, column, value, defaulthtml, columnproperties, rowselect) {
            console.log(rowselect + " " + rowselect.IsActive);
            if (value != "") {
                switch (rowselect.IsActive) {
                    case true:
                        return value + '<br>&nbsp;<i class="icofont icofont-square" style="font-size: 15px;color:limegreen">&nbsp;Active</i></a>';
                        break;
                    default:
                        return value + '<br>&nbsp;<i class="icofont icofont-square" style="font-size: 15px;color:red">&nbsp;InActive</i></a>';
                        break;
                }
            }
        };
        this.columns = [
            //{ text: 'ID', datafield: 'ID', align: 'centre', cellsalign: 'centre', width: 50 },
            { text: 'Employee Code', datafield: 'Type_EmpCode', align: 'centre', cellsalign: 'centre', cellsrenderer: this.codeCellrenderer, width: 200 },
            { text: 'Details', datafield: 'Viewcomment', align: 'centre', cellsalign: 'centre', cellsrenderer: this.detailCellrenderer },
        ];
        this.searchForm = this.formbulider.group({
            Type_EmpCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    ShowemployeeComponent.prototype.onFormSubmit = function () {
        var _this = this;
        this.ds.ShowHideToasty({
            title: 'Searching..',
            msg: '',
            showClose: false,
            theme: 'bootstrap',
            type: 'wait',
            closeOther: true,
        });
        var employeeID = this.searchForm.value;
        console.log(employeeID.Type_EmpCode);
        if (employeeID.Type_EmpCode == "") {
            this.employeeService.getEmployeeLimited().subscribe(function (res) {
                // console.log(res)
                _this.source.localdata = res;
                _this.myGrid.updatebounddata();
                _this.ds.ShowHideToasty({
                    title: 'Search Completed',
                    msg: '',
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'success',
                    closeOther: true,
                    timeout: 5000
                });
            });
        }
        else {
            this.employeeService.getEmployeeLimitedByID(employeeID.Type_EmpCode).subscribe(function (res) {
                // console.log(res)
                _this.source.localdata = res;
                _this.myGrid.updatebounddata();
                _this.ds.ShowHideToasty({
                    title: 'Search Completed',
                    msg: '',
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'success',
                    closeOther: true,
                    timeout: 5000
                });
            });
        }
    };
    ShowemployeeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.myGrid.showloadelement();
        // this.getData();
        // console.log(this.employeeService.getAllEmployee2());
        this.employeeService.getEmployeeLimited().subscribe(function (res) {
            // console.log(res)
            _this.source.localdata = res;
            _this.myGrid.updatebounddata();
        });
    };
    ShowemployeeComponent.prototype.getWidth = function () {
        return '98%';
    };
    ShowemployeeComponent.prototype.myGridOnCellSelect = function (event) {
        if (event.args.datafield == "Type_EmpCode") {
            this.ticketViewDetailsCallBack(this.myGrid.getcellvalue(event.args.rowindex, 'Type_EmpCode'));
            // localStorage.setItem('OldTicketIdView', 'false'); 
        }
    };
    ShowemployeeComponent.prototype.ticketViewDetailsCallBack = function (requestEmpId) {
        // console.log();
        this.router.navigateByUrl('/Employee/edit_element/' + requestEmpId);
        // localStorage.setItem('TicketId', requestTicketId);    
    };
    ShowemployeeComponent.prototype.goToPage = function (pageName) {
        console.log(pageName);
        this.router.navigate(["" + pageName]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('myGrid'),
        __metadata("design:type", jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_1__["jqxGridComponent"])
    ], ShowemployeeComponent.prototype, "myGrid", void 0);
    ShowemployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showemployee',
            template: __webpack_require__(/*! ./showemployee.component.html */ "./src/app/Employee/showemployee/showemployee.component.html"),
            styles: [__webpack_require__(/*! ./showemployee.component.css */ "./src/app/Employee/showemployee/showemployee.component.css")]
        }),
        __metadata("design:paramtypes", [_addEmployee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_services_DataService__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ShowemployeeComponent);
    return ShowemployeeComponent;
}());



/***/ }),

/***/ "./src/app/GlobalShareCode.ts":
/*!************************************!*\
  !*** ./src/app/GlobalShareCode.ts ***!
  \************************************/
/*! exports provided: baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
//import { serverBaseUrl }
var baseUrl = '../';
//declare var baseUrl: string;
//declare var loginEmpRoleID: number;


/***/ }),

/***/ "./src/app/app.commonFunctionality.ts":
/*!********************************************!*\
  !*** ./src/app/app.commonFunctionality.ts ***!
  \********************************************/
/*! exports provided: CommonFunctionality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonFunctionality", function() { return CommonFunctionality; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_enums_globalEnums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/enums/globalEnums */ "./src/app/shared/enums/globalEnums.ts");
/* harmony import */ var _GlobalShareCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GlobalShareCode */ "./src/app/GlobalShareCode.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CommonFunctionality = /** @class */ (function () {
    function CommonFunctionality(toastyService, http, datePipe, router) {
        this.toastyService = toastyService;
        this.http = http;
        this.datePipe = datePipe;
        this.router = router;
        this.position = 'top-center';
        this.showClose = true;
        this.timeout = 120000;
        this.theme = 'bootstrap';
        this.type = 'default';
        this.closeOther = false;
        this.DateType = _shared_enums_globalEnums__WEBPACK_IMPORTED_MODULE_4__["DateType"];
        this.getCompanyActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + '/Base/GetCompany';
        this.getUserDetailsUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + '/Base/GetUserDetails';
        this.getSessionUserDetailsUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + '/Base/GetSessionUserDetails';
        this.getAssignedRoleRegionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_5__["baseUrl"] + '/Admin/EmployeeMaster/GetAssignedRoleRegion';
    }
    CommonFunctionality.prototype.DisplayDotNetDateToDDMMMYYYY = function (dateValue, dateType) {
        if (!dateValue)
            return;
        if (!dateType) {
            dateType = _shared_enums_globalEnums__WEBPACK_IMPORTED_MODULE_4__["DateType"].DotNet;
        }
        switch (dateType) {
            case _shared_enums_globalEnums__WEBPACK_IMPORTED_MODULE_4__["DateType"].DotNet:
                return this.datePipe.transform(this.ConvertDotNetDateToJavaScriptDate(dateValue), 'dd-MMM-yyyy');
            case _shared_enums_globalEnums__WEBPACK_IMPORTED_MODULE_4__["DateType"].StringWithT:
                return this.datePipe.transform(new Date(dateValue), 'dd-MMM-yyyy');
        }
        //var results = /Date\(([^)]+)\)/.exec(dateValue);
        //var month_names = ["Jan", "Feb", "Mar",
        //    "Apr", "May", "Jun",
        //    "Jul", "Aug", "Sep",
        //    "Oct", "Nov", "Dec"];
        //var dt = new Date(parseFloat(results[1]));
        //return ('0' + dt.getDate()).slice(-2) + "-" +
        //    month_names[dt.getMonth()] + "-" +
        //    dt.getFullYear();
        //+ 
        //   ('0' + dt.getHours()).slice(-2) + ':' +
        //   ('0' + dt.getMinutes()).slice(-2) + ':' +
        //   ('0' + dt.getSeconds()).slice(-2);
    };
    CommonFunctionality.prototype.ConvertDotNetDateToJavaScriptDate = function (dateValue) {
        if (!dateValue)
            return;
        var results = /Date\(([^)]+)\)/.exec(dateValue);
        return new Date(parseFloat(results[1]));
    };
    CommonFunctionality.prototype.addToast = function (options) {
        if (options.closeOther) {
            this.toastyService.clearAll();
        }
        //this.position = options.position ? options.position : this.position;
        var toastOptions = {
            title: options.title,
            msg: options.msg,
            showClose: options.showClose,
            timeout: options.timeout,
            theme: options.theme,
            onAdd: function (toast) {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function (toast) {
                console.log('Toast ' + toast.id + ' has been added removed!');
            }
        };
        switch (options.type) {
            case 'default':
                this.toastyService.default(toastOptions);
                break;
            case 'info':
                this.toastyService.info(toastOptions);
                break;
            case 'success':
                this.toastyService.success(toastOptions);
                break;
            case 'wait':
                this.toastyService.wait(toastOptions);
                break;
            case 'error':
                this.toastyService.error(toastOptions);
                break;
            case 'warning':
                this.toastyService.warning(toastOptions);
                break;
        }
    };
    CommonFunctionality.prototype.closeAllToast = function () {
        this.toastyService.clearAll();
    };
    CommonFunctionality.prototype.getCompany = function () {
        return this.CallHttp(this.getCompanyActionUrl, null, null);
    };
    CommonFunctionality.prototype.GetAssignedRoleRegion = function (empCodeObj) {
        return this.CallHttp(this.getAssignedRoleRegionUrl, empCodeObj, null);
    };
    CommonFunctionality.prototype.GetUserDetails = function () {
        return this.CallHttp(this.getUserDetailsUrl, null, null);
    };
    CommonFunctionality.prototype.GetSessionUserDetails = function () {
        return this.CallHttp(this.getSessionUserDetailsUrl, null, null);
    };
    CommonFunctionality.prototype.CallHttp = function (url, itemData, headers) {
        return this.http.post(url, itemData, {
            headers: headers
        });
    };
    CommonFunctionality.prototype.GetTemplate = function (url) {
        var template;
        return this.http.get(url).subscribe(function (res) { return res; });
    };
    CommonFunctionality.prototype.SessionTime = function () {
        var _this = this;
        setInterval(function () {
            _this.check();
        }, 1200000);
    };
    CommonFunctionality.prototype.check = function () {
        var now = Date.now();
        var timeleft = 1 * 60 * 2400000;
        var diff = timeleft - now;
        var isTimeout = diff < 0;
        if (isTimeout) {
            localStorage.clear();
            this.router.navigate(['/Login']);
        }
    };
    CommonFunctionality = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ng2_toasty__WEBPACK_IMPORTED_MODULE_1__["ToastyService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], CommonFunctionality);
    return CommonFunctionality;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.commonFunctionality */ "./src/app/app.commonFunctionality.ts");
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/DataService */ "./src/app/services/DataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="GlobalShareCode.ts"/>



var AppComponent = /** @class */ (function () {
    function AppComponent(ds, commonFunctionality) {
        var _this = this;
        this.ds = ds;
        this.commonFunctionality = commonFunctionality;
        this.position = "top-center";
        this.name = 'Angular';
        this.subscription = this.ds.getToastyData().subscribe(function (x) {
            if (!x) {
                _this.commonFunctionality.closeAllToast();
            }
            else {
                _this.commonFunctionality.addToast(x);
            }
        });
    }
    AppComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.template.html */ "./src/app/app.template.html"),
        }),
        __metadata("design:paramtypes", [_services_DataService__WEBPACK_IMPORTED_MODULE_2__["DataService"], _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_1__["CommonFunctionality"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _mainLayout_mainLayout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainLayout/mainLayout.component */ "./src/app/mainLayout/mainLayout.component.ts");
/* harmony import */ var _externalLayout_externalLayout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./externalLayout/externalLayout.component */ "./src/app/externalLayout/externalLayout.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/breadcrumbs/breadcrumbs.component */ "./src/app/shared/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _shared_title_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/title/title.component */ "./src/app/shared/title/title.component.ts");
/* harmony import */ var _scroll_scroll_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scroll/scroll.module */ "./src/app/scroll/scroll.module.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.commonFunctionality */ "./src/app/app.commonFunctionality.ts");
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/DataService */ "./src/app/services/DataService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_Security_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/Security/auth.guard */ "./src/app/shared/Security/auth.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _CMSHttpInterceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./CMSHttpInterceptor */ "./src/app/CMSHttpInterceptor.ts");
/* harmony import */ var _services_AutoLogoutService__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/AutoLogoutService */ "./src/app/services/AutoLogoutService.ts");
/* harmony import */ var _services_AutoLogoutComponent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/AutoLogoutComponent */ "./src/app/services/AutoLogoutComponent.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _progress_kendo_angular_conversational_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @progress/kendo-angular-conversational-ui */ "./node_modules/@progress/kendo-angular-conversational-ui/dist/fesm5/index.js");
/* harmony import */ var _ticketViewer_commentsComponent_commentsComponent_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ticketViewer/commentsComponent/commentsComponent.module */ "./src/app/ticketViewer/commentsComponent/commentsComponent.module.ts");
/* harmony import */ var jqwidgets_scripts_jqwidgets_ts_angular_jqxform__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! jqwidgets-scripts/jqwidgets-ts/angular_jqxform */ "./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxform.ts");
/* harmony import */ var _picklist_picklist_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./picklist/picklist.component */ "./src/app/picklist/picklist.component.ts");
/* harmony import */ var _shared_components_LinkViewRef_Component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/components/LinkViewRef.Component */ "./src/app/shared/components/LinkViewRef.Component.ts");
/* harmony import */ var _shared_components_linkView_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/components/linkView.component */ "./src/app/shared/components/linkView.component.ts");
/* harmony import */ var _Employee_addEmployee_addEmployee_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Employee/addEmployee/addEmployee.component */ "./src/app/Employee/addEmployee/addEmployee.component.ts");
/* harmony import */ var _Employee_showemployee_showemployee_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Employee/showemployee/showemployee.component */ "./src/app/Employee/showemployee/showemployee.component.ts");
/* harmony import */ var _Employee_editemp_editemp_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Employee/editemp/editemp.component */ "./src/app/Employee/editemp/editemp.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { HeaderTokenInterceptor } from './app.headerTokenInterceptor';































//import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            providers: [
                //HeaderTokenInterceptor,
                //   {
                //     provide: HTTP_INTERCEPTORS,
                //     useClass: HeaderTokenInterceptor,
                //     multi: true
                //   },
                //  {provide: LocationStrategy, useClass: HashLocationStrategy},
                _CMSHttpInterceptor__WEBPACK_IMPORTED_MODULE_19__["CMSHttpInterceptor"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _CMSHttpInterceptor__WEBPACK_IMPORTED_MODULE_19__["CMSHttpInterceptor"],
                    multi: true
                },
                _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"],
                _services_DataService__WEBPACK_IMPORTED_MODULE_15__["DataService"], _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_14__["CommonFunctionality"], _shared_Security_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], _services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthRouteService"],
                _services_AutoLogoutService__WEBPACK_IMPORTED_MODULE_20__["AutoLogoutService"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routes__WEBPACK_IMPORTED_MODULE_9__["appRouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _scroll_scroll_module__WEBPACK_IMPORTED_MODULE_12__["ScrollModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_13__["Ng2Webstorage"],
                _angular_http__WEBPACK_IMPORTED_MODULE_22__["HttpModule"],
                ng_sidebar__WEBPACK_IMPORTED_MODULE_23__["SidebarModule"].forRoot(),
                _progress_kendo_angular_conversational_ui__WEBPACK_IMPORTED_MODULE_24__["ChatModule"],
                _ticketViewer_commentsComponent_commentsComponent_module__WEBPACK_IMPORTED_MODULE_25__["CrudTicketCommentsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_33__["NgMultiSelectDropDownModule"],
                ng2_toasty__WEBPACK_IMPORTED_MODULE_34__["ToastyModule"].forRoot()
                // jqxGridModule
            ],
            exports: [_scroll_scroll_module__WEBPACK_IMPORTED_MODULE_12__["ScrollModule"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _mainLayout_mainLayout_component__WEBPACK_IMPORTED_MODULE_7__["MainLayoutComponent"],
                _externalLayout_externalLayout_component__WEBPACK_IMPORTED_MODULE_8__["ExternalLayoutComponent"],
                _shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsComponent"],
                _shared_title_title_component__WEBPACK_IMPORTED_MODULE_11__["TitleComponent"],
                _services_AutoLogoutComponent__WEBPACK_IMPORTED_MODULE_21__["AutoLogoutComponent"],
                jqwidgets_scripts_jqwidgets_ts_angular_jqxform__WEBPACK_IMPORTED_MODULE_26__["jqxFormComponent"],
                _picklist_picklist_component__WEBPACK_IMPORTED_MODULE_27__["PicklistComponent"],
                _shared_components_LinkViewRef_Component__WEBPACK_IMPORTED_MODULE_28__["LinkViewRefComponent"],
                _shared_components_linkView_component__WEBPACK_IMPORTED_MODULE_29__["LinkViewComponent"],
                _Employee_addEmployee_addEmployee_component__WEBPACK_IMPORTED_MODULE_30__["AddEmployeeComponent"],
                _Employee_showemployee_showemployee_component__WEBPACK_IMPORTED_MODULE_31__["ShowemployeeComponent"],
                _Employee_editemp_editemp_component__WEBPACK_IMPORTED_MODULE_32__["EditempComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouterModule", function() { return appRouterModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mainLayout_mainLayout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainLayout/mainLayout.component */ "./src/app/mainLayout/mainLayout.component.ts");
/* harmony import */ var _externalLayout_externalLayout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./externalLayout/externalLayout.component */ "./src/app/externalLayout/externalLayout.component.ts");
/* harmony import */ var _shared_Security_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/Security/auth.guard */ "./src/app/shared/Security/auth.guard.ts");
/* harmony import */ var _Employee_addEmployee_addEmployee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Employee/addEmployee/addEmployee.component */ "./src/app/Employee/addEmployee/addEmployee.component.ts");
/* harmony import */ var _Employee_showemployee_showemployee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Employee/showemployee/showemployee.component */ "./src/app/Employee/showemployee/showemployee.component.ts");
/* harmony import */ var _Employee_editemp_editemp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Employee/editemp/editemp.component */ "./src/app/Employee/editemp/editemp.component.ts");







// Route config let's you map routes to components
var routes = [
    {
        path: '',
        component: _externalLayout_externalLayout_component__WEBPACK_IMPORTED_MODULE_2__["ExternalLayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: '/Login',
                pathMatch: 'full'
            },
            {
                path: 'ResetPassword',
                loadChildren: 'src/app/resetPassword/resetPassword.module#ResetPasswordModule'
            },
            {
                path: 'Login',
                loadChildren: 'src/app/login/login.module#LoginModule'
            },
            {
                path: 'Login/ForgotPassword',
                loadChildren: 'src/app/forgotPassword/forgotPassword.module#ForgotPasswordModule'
            },
        ]
    },
    {
        path: '',
        component: _mainLayout_mainLayout_component__WEBPACK_IMPORTED_MODULE_1__["MainLayoutComponent"],
        children: [
            //{ 
            //    path: '',
            //    redirectTo: 'Dashboard',
            //    pathMatch: 'full'
            //},
            {
                path: 'Dashboard',
                loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule',
                canActivate: [_shared_Security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'TicketViewer',
                loadChildren: 'src/app/ticketViewer/ticketViewer.module#TicketViewerModule',
                canActivate: [_shared_Security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'TicketViewer/CreateTicket',
                loadChildren: 'src/app/ticketViewer/createTicket/createTicket.module#CreateTicketModule',
                canActivate: [_shared_Security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'TicketViewer/TicketSummary',
                loadChildren: 'src/app/ticketViewer/crudOpsTicket/crudOpsTicket.module#CrudOpsTicketModule',
                canActivate: [_shared_Security_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'Employee/CreateEmployee', component: _Employee_addEmployee_addEmployee_component__WEBPACK_IMPORTED_MODULE_4__["AddEmployeeComponent"]
            },
            {
                path: 'Employee', component: _Employee_showemployee_showemployee_component__WEBPACK_IMPORTED_MODULE_5__["ShowemployeeComponent"]
            },
            {
                path: 'Employee/edit_element/:id', component: _Employee_editemp_editemp_component__WEBPACK_IMPORTED_MODULE_6__["EditempComponent"]
            },
        ]
    }
];
var appRouterModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/app.template.html":
/*!***********************************!*\
  !*** ./src/app/app.template.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet><spinner></spinner></router-outlet>\r\n<ng2-toasty [position]=\"position\"></ng2-toasty>"

/***/ }),

/***/ "./src/app/externalLayout/externalLayout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/externalLayout/externalLayout.component.ts ***!
  \************************************************************/
/*! exports provided: ExternalLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalLayoutComponent", function() { return ExternalLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExternalLayoutComponent = /** @class */ (function () {
    function ExternalLayoutComponent() {
    }
    ExternalLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: '<router-outlet><spinner></spinner></router-outlet>'
        })
    ], ExternalLayoutComponent);
    return ExternalLayoutComponent;
}());



/***/ }),

/***/ "./src/app/mainLayout/mainLayout.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mainLayout/mainLayout.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\r\n\r\n.header-navbar .navbar-wrapper .navbar-logo {\r\n  height: 3.5rem !important;\r\n  width: 109px !important;\r\n}\r\n\r\naside.pcoded-slider.ng-sidebar {\r\n  top: 56px;\r\n}\r\n\r\n.slimscroll-wrapper, .scroll-window {\r\n    width: 100% !important;\r\n}\r\n\r\n.userlist-box.show {\r\n    display: -webkit-box;\r\n}\r\n\r\n.userlist-box.hide {\r\n    display: none;\r\n}\r\n\r\n.header-navbar {\r\n  min-height: 3em !important;\r\n}\r\n\r\n.pcoded[theme-layout=\"vertical\"][vertical-nav-type=\"expanded\"] .pcoded-navbar {\r\n  width: 125px !important;\r\n}\r\n\r\n.pcoded .pcoded-navbar .pcoded-item > li > a {\r\n  font-size: 12px !important;\r\n}\r\n\r\n.page-body {\r\n  margin-right: -24px;\r\n  margin-left: -45px;\r\n  margin-top: -14px;\r\n}\r\n\r\n.pcoded[theme-layout=\"vertical\"] .pcoded-header .sidebar_toggle a {\r\n  top: 2px !important;\r\n}\r\n\r\na {\r\n  font-size: 13px !important;\r\n}\r\n\r\n.btntype {\r\n  border-radius: 6px !important;\r\n  font-size: 9px !important;\r\n  height: 25px;\r\n  width: 50px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbkxheW91dC9tYWluTGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFOztBQUUvRTtFQUNFLDBCQUEwQjtFQUMxQix3QkFBd0I7Q0FDekI7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0VBQ0UsMkJBQTJCO0NBQzVCOztBQUVEO0VBQ0Usd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0UsMkJBQTJCO0NBQzVCOztBQUVEO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSwyQkFBMkI7Q0FDNUI7O0FBRUQ7RUFDRSw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixZQUFZO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9tYWluTGF5b3V0L21haW5MYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbi5oZWFkZXItbmF2YmFyIC5uYXZiYXItd3JhcHBlciAubmF2YmFyLWxvZ28ge1xyXG4gIGhlaWdodDogMy41cmVtICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmFzaWRlLnBjb2RlZC1zbGlkZXIubmctc2lkZWJhciB7XHJcbiAgdG9wOiA1NnB4O1xyXG59XHJcblxyXG4uc2xpbXNjcm9sbC13cmFwcGVyLCAuc2Nyb2xsLXdpbmRvdyB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXNlcmxpc3QtYm94LnNob3cge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbn1cclxuXHJcbi51c2VybGlzdC1ib3guaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyLW5hdmJhciB7XHJcbiAgbWluLWhlaWdodDogM2VtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wY29kZWRbdGhlbWUtbGF5b3V0PVwidmVydGljYWxcIl1bdmVydGljYWwtbmF2LXR5cGU9XCJleHBhbmRlZFwiXSAucGNvZGVkLW5hdmJhciB7XHJcbiAgd2lkdGg6IDEyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wY29kZWQgLnBjb2RlZC1uYXZiYXIgLnBjb2RlZC1pdGVtID4gbGkgPiBhIHtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZ2UtYm9keSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjRweDtcclxuICBtYXJnaW4tbGVmdDogLTQ1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbn1cclxuXHJcbi5wY29kZWRbdGhlbWUtbGF5b3V0PVwidmVydGljYWxcIl0gLnBjb2RlZC1oZWFkZXIgLnNpZGViYXJfdG9nZ2xlIGEge1xyXG4gIHRvcDogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRudHlwZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/mainLayout/mainLayout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mainLayout/mainLayout.component.ts ***!
  \****************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.commonFunctionality */ "./src/app/app.commonFunctionality.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/DataService */ "./src/app/services/DataService.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent(menuItems, cf, router, ds, sessionStorageService) {
        var _this = this;
        this.menuItems = menuItems;
        this.cf = cf;
        this.router = router;
        this.ds = ds;
        this.sessionStorageService = sessionStorageService;
        this.deviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.isCollapsedMobile = 'no-block';
        this.isCollapsedSideBar = 'no-block';
        this.toggleOn = true;
        var scrollHeight = window.screen.height - 150;
        this.innerHeight = scrollHeight + 'px';
        this.windowWidth = window.innerWidth;
        this.setMenuAttributs(this.windowWidth);
        var userDetails = JSON.parse(this.sessionStorageService.retrieve('userdetails'));
        //var menu = {
        //  label: '',
        //  main: [
        //    {
        //      state: 'Dashboard',
        //      name: 'Dashboard',
        //      type: 'link',
        //      icon: 'ti-dashboard'
        //    },
        //    {
        //      state: 'TicketViewer',
        //      name: 'Ticket Viewer',
        //      type: 'link',
        //      icon: 'ti-view-grid'
        //    },
        //  ],
        //};
        //this.menuItems.clearAll();
        //this.menuItems.add(menu);
        cf.GetUserDetails().subscribe(function (data) {
            if (data.Success) {
                //alert(data.Entity.AssignedRoleID);
                //console.log(data.Entity.AssignedRoleID);
                _this.loginEmpRoleID = data.Entity.AssignedRoleID;
                _this.empFullName = data.Entity.EmpFullName + ' (' + data.Entity.UserType + ')';
                var menu = {
                    label: '',
                    main: [
                        //{
                        //  state: 'Dashboard',
                        //  name: 'Dashboard',
                        //  type: 'link',
                        //  icon: 'ti-dashboard'
                        //},
                        {
                            state: 'TicketViewer',
                            name: 'Ticket Viewer',
                            type: 'link',
                            icon: 'ti-view-grid'
                        },
                        {
                            state: 'Employee',
                            name: 'Employee',
                            type: 'link',
                            icon: 'ti-view-grid'
                        },
                    ],
                };
                _this.menuItems.clearAll();
                _this.menuItems.add(menu);
            }
            else {
                _this.ds.ShowHideToasty({
                    title: 'Session Expired',
                    msg: data.Message,
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'error',
                    closeOther: true,
                    timeout: 5000
                });
                _this.router.navigateByUrl('/Login');
            }
        });
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    MainLayoutComponent.prototype.onClickedOutside = function (e) {
        //if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
        //    this.toggleOn = true;
        //    this.verticalNavType = 'offcanvas';
        //}
        //this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
    };
    MainLayoutComponent.prototype.onResize = function (event) {
        this.innerHeight = event.target.innerHeight + 'px';
        /*   responsive */
        this.windowWidth = event.target.innerWidth;
        var reSizeFlag = true;
        if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        if (reSizeFlag) {
            this.setMenuAttributs(this.windowWidth);
        }
    };
    MainLayoutComponent.prototype.setMenuAttributs = function (windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.deviceType = 'tablet';
            this.verticalNavType = 'collapsed';
            this.verticalEffect = 'push';
        }
        else if (windowWidth < 768) {
            this.deviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.deviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
        }
    };
    MainLayoutComponent.prototype.toggleOpened = function () {
        if (this.windowWidth < 768) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
            this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
        }
        else {
            this.verticalNavType = this.verticalNavType === 'expanded' ? 'collapsed' : 'expanded';
        }
    };
    MainLayoutComponent.prototype.toggleOpenedSidebar = function () {
        this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
    };
    MainLayoutComponent.prototype.onMobileMenu = function () {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    };
    MainLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./mainLayout.template.html */ "./src/app/mainLayout/mainLayout.template.html"),
            styles: [__webpack_require__(/*! ./mainLayout.component.css */ "./src/app/mainLayout/mainLayout.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('mobileMenuTop', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('no-block, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        overflow: 'hidden',
                        height: '0px',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('yes-block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AUTO_STYLE"],
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('no-block <=> yes-block', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"], _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_4__["CommonFunctionality"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_DataService__WEBPACK_IMPORTED_MODULE_6__["DataService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_7__["SessionStorageService"]])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/mainLayout/mainLayout.template.html":
/*!*****************************************************!*\
  !*** ./src/app/mainLayout/mainLayout.template.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"pcoded\" (window:resize)=\"onResize($event)\" class=\"pcoded iscollapsed\" theme-layout=\"vertical\" vertical-placement=\"left\"\r\n     vertical-layout=\"wide\" [attr.pcoded-device-type]=\"deviceType\" [attr.vertical-nav-type]=\"verticalNavType\"\r\n     [attr.vertical-effect]=\"verticalEffect\" vnavigation-view=\"view1\">\r\n    <div class=\"pcoded-overlay-box\"></div>\r\n    <div class=\"pcoded-container navbar-wrapper\">\r\n        <nav class=\"navbar header-navbar pcoded-header\" header-theme=\"theme4\">\r\n            <div class=\"navbar-wrapper\">\r\n              <div class=\"navbar-logo\" navbar-theme=\"theme4\">\r\n                <a class=\"mobile-menu\" id=\"mobile-collapse\" href=\"javascript:;\" (click)=\"toggleOpened()\"\r\n                   [exclude]=\"'#main_navbar, .navbar-logo'\"\r\n                   (clickOutside)=\"onClickedOutside($event)\">\r\n                  <i class=\"ti-menu\"></i>\r\n                </a>\r\n                <a [routerLink]=\"['/TicketViewer']\">\r\n                  <h6> Agile </h6>\r\n                </a>\r\n                <a (click)=\"onMobileMenu()\" class=\"mobile-options\">\r\n                  <i class=\"ti-more\"></i>\r\n                </a>\r\n               \r\n               \r\n              </div>\r\n                <div class=\"navbar-container\">\r\n                  <div>\r\n                    <ul class=\"nav-left\">\r\n                      <li>\r\n                        <div class=\"sidebar_toggle\"><a href=\"javascript:;\" (click)=\"toggleOpened()\"><i class=\"ti-menu f-18\"></i></a></div>\r\n                      </li>\r\n                     \r\n                    </ul>\r\n                    <ul [@mobileMenuTop]=\"isCollapsedMobile\" class=\"nav-right\" [ngClass]=\"isCollapsedMobile\">\r\n\r\n                      <li class=\"user-profile header-notification\">\r\n                        <a [routerLink]=\"['/TicketViewer']\">\r\n\r\n                          <span>Welcome {{empFullName}}</span>\r\n                          <i class=\"ti-angle-down\"></i>\r\n                        </a>\r\n\r\n                        <ul class=\"show-notification profile-notification\">\r\n\r\n                          <li>\r\n                            <a [routerLink]=\"['/ResetPassword']\">\r\n                              <i class=\"ti-unlock\"></i> Reset Password\r\n                            </a>\r\n                          </li>\r\n                          <li>\r\n                            <a [routerLink]=\"['/Login']\">\r\n                              <i class=\"ti-layout-sidebar-left\"></i> Logout\r\n                            </a>\r\n                          </li>\r\n                          <li>\r\n\r\n                          </li>\r\n                        </ul>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n\r\n\r\n        <div class=\"pcoded-main-container\">\r\n            <div class=\"pcoded-wrapper\">\r\n                <nav id=\"main_navbar\" class=\" pcoded-navbar\" navbar-theme=\"theme1\" active-item-theme=\"theme5\" sub-item-theme=\"theme2\"\r\n                     active-item-style=\"style0\" pcoded-navbar-position=\"absolute\"\r\n                     (clickOutside)=\"onClickedOutside($event)\"\r\n                     [exclude]=\"'#mobile-collapse'\">\r\n                    <div class=\"sidebar_toggle\"><a href=\"javascript:;\"><i class=\"icon-close icons\"></i></a></div>\r\n                    <div class=\"pcoded-inner-navbar main-menu\" appAccordion slimScroll width=\"100%\" height=\"100%\" size=\"4px\" color=\"#fff\" opacity=\"0.3\"\r\n                         allowPageScroll=\"false\">\r\n                        <div class=\"\">\r\n                        </div>\r\n                        <div>\r\n                            <div *ngFor=\"let asideItems of menuItems.getAll()\">\r\n                                <div class=\"pcoded-navigatio-lavel\" menu-title-theme=\"theme5\">{{asideItems.label}}</div>\r\n                                <ul class=\"pcoded-item pcoded-left-item\" item-border=\"none\" item-border-style=\"solid\" subitem-border=\"solid\" *ngFor=\"let asideItem of asideItems.main\" appAccordionLink group=\"{{asideItem.state}}\">\r\n                                    <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'external'\" appAccordionLink group=\"{{asideItem.state}}\">\r\n                                        <a href=\"{{asideItem.external}}\" target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle>\r\n                                            <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i></span>\r\n                                            <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                                            <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                                            <span class=\"pcoded-mcaret\"></span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'link'\" appAccordionLink group=\"{{asideItem.state}}\">\r\n                                        <a [routerLink]=\"['/', asideItem.main_state, asideItem.state]\" target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle *ngIf=\"asideItem.main_state; else: mainContent\">\r\n                                            <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i></span>\r\n                                            <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                                            <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                                            <span class=\"pcoded-mcaret\"></span>\r\n                                        </a>\r\n                                        <ng-template #mainContent>\r\n                                            <a [routerLink]=\"['/', asideItem.state]\" target=\"{{asideItem.target ? '_blank' : '_self'}}\" appAccordionToggle>\r\n                                                <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i></span>\r\n                                                <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                                                <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                                                <span class=\"pcoded-mcaret\"></span>\r\n                                            </a>\r\n                                        </ng-template>\r\n                                    </li>\r\n                                    <li [routerLinkActive]=\"['active']\" *ngIf=\"asideItem.type === 'sub'\" class=\"pcoded-hasmenu\" dropdown-icon=\"style3\" subitem-icon=\"style6\" appAccordionLink group=\"{{asideItem.state}}\">\r\n                                        <a [routerLinkActive]=\"['active']\" href=\"javascript:;\" appAccordionToggle>\r\n                                            <span class=\"pcoded-micon\"><i class=\"{{ asideItem.icon }}\"></i></span>\r\n                                            <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\r\n                                            <span *ngFor=\"let asideBadge of asideItem.badge\" class=\"pcoded-badge label label-{{ asideBadge.type }}\">{{asideBadge.value}}</span>\r\n                                            <span class=\"pcoded-mcaret\"></span>\r\n                                        </a>\r\n                                        <ul class=\"pcoded-submenu\">\r\n                                            <ng-template ngFor let-asideChildren [ngForOf]=\"asideItem.children\">\r\n                                                <li [routerLinkActive]=\"['active']\" *ngIf=\"asideChildren.type !== 'sub' && asideChildren.type !== 'clubChild'\">\r\n                                                    <a [routerLink]=\"['/', asideItem.state, asideChildren.state]\" target=\"{{asideChildren.target ? '_blank' : '_self'}}\">\r\n                                                        <span class=\"pcoded-micon\"><i class=\"ti-angle-right\"></i></span>\r\n                                                        <span class=\"pcoded-mtext\">{{ asideChildren.name }} </span>\r\n                                                        <span *ngFor=\"let asideChildrenBadge of asideChildren.badge\" class=\"pcoded-badge label label-{{ asideChildrenBadge.type }}\">{{asideChildrenBadge.value}}</span>\r\n                                                        <span class=\"pcoded-mcaret\"></span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li [routerLinkActive]=\"['active']\" *ngIf=\"asideChildren.type == 'clubChild'\">\r\n                                                    <a [routerLink]=\"['/', asideItem.state, asideChildren.state, asideChildren.children[0].state]\"\r\n                                                       target=\"{{asideChildren.target ? '_blank' : '_self'}}\">\r\n                                                        <span class=\"pcoded-micon\"><i class=\"ti-angle-right\"></i></span>\r\n                                                        <span class=\"pcoded-mtext\">{{ asideChildren.name }} </span>\r\n                                                        <span *ngFor=\"let asideChildrenBadge of asideChildren.badge\" class=\"pcoded-badge label label-{{ asideChildrenBadge.type }}\">{{asideChildrenBadge.value}}</span>\r\n                                                        <span class=\"pcoded-mcaret\"></span>\r\n                                                    </a>\r\n                                                </li>\r\n                                                <li [routerLinkActive]=\"['active']\" class=\"pcoded-hasmenu\" dropdown-icon=\"style3\" subitem-icon=\"style6\" *ngIf=\"asideChildren.type === 'sub'\" appAccordionLink group=\"sub-toggled\">\r\n                                                    <a href=\"javascript:;\" appAccordionToggle>\r\n                                                        <span class=\"pcoded-micon\"><i class=\"ti-direction-alt\"></i></span>\r\n                                                        <span class=\"pcoded-mtext\">{{ asideChildren.name }}</span>\r\n                                                        <span *ngFor=\"let asideChildrenBadge of asideChildren.badge\" class=\"pcoded-badge label label-{{ asideChildrenBadge.type }}\">{{asideChildrenBadge.value}}</span>\r\n                                                        <span class=\"pcoded-mcaret\"></span>\r\n                                                    </a>\r\n                                                    <ul class=\"pcoded-submenu\">\r\n                                                        <ng-template ngFor let-asideChildrenSub [ngForOf]=\"asideChildren.children\">\r\n                                                            <li [routerLinkActive]=\"['active']\">\r\n                                                                <a [routerLink]=\"['/', asideItem.state, asideChildren.state, asideChildrenSub.state]\" target=\"{{asideChildrenSub.target ? '_blank' : '_self'}}\">\r\n                                                                    <span class=\"pcoded-micon\"><i class=\"ti-angle-right\"></i></span>\r\n                                                                    <span class=\"pcoded-mtext\">{{ asideChildrenSub.name }}</span>\r\n                                                                    <span *ngFor=\"let asideChildrenSubBadge of asideChildrenSub.badge\" class=\"pcoded-badge label label-{{ asideChildrenSubBadge.type }}\">{{asideChildrenSubBadge.value}}</span>\r\n                                                                    <span class=\"pcoded-mcaret\"></span>\r\n                                                                </a>\r\n                                                            </li>\r\n                                                        </ng-template>\r\n                                                    </ul>\r\n                                                </li>\r\n                                            </ng-template>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n                <div class=\"pcoded-content\">\r\n                    <div class=\"pcoded-inner-content\">\r\n                        <div class=\"main-body\">\r\n                            <div class=\"page-wrapper\">\r\n                                <app-title></app-title>\r\n                                <app-breadcrumbs></app-breadcrumbs>\r\n                                <div class=\"page-body\">\r\n                                    <router-outlet><spinner></spinner></router-outlet>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/picklist/picklist.component.css":
/*!*************************************************!*\
  !*** ./src/app/picklist/picklist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Important part */\r\n.modal-dialog {\r\n    overflow-y: initial !important\r\n}\r\n.modal-body {\r\n    /*height: 80%;*/\r\n    max-height: calc(100vh - 160px);\r\n    overflow-y: auto;\r\n}\r\n.modal-footer, .modal-header {\r\n    padding: 0.5rem 1rem 0.5rem 1rem;\r\n}\r\n:host /deep/ table {\r\n    display: table-caption !important;\r\n    border-collapse: inherit !important;\r\n    background-color: #fff;\r\n    box-shadow: 1px 1px 1px 1px #f3f3f3;\r\n    max-width: 40% !important;\r\n    border-top: 4px solid #07002A;\r\n    width: 100%;\r\n    min-width: 100%;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n/*@media (min-width: 1000px) {\r\n    :host /deep/ table {\r\n        min-width: 900px;\r\n    }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n    :host /deep/ table {\r\n        min-width: 450px;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    :host /deep/ table {\r\n        min-width: 750px;\r\n    }\r\n}*/\r\n:host /deep/ .page-body {\r\n    overflow-x: scroll;\r\n}\r\n:host /deep/ a {\r\n    color: #000 !important;\r\n    font-weight: 500;\r\n}\r\n:host /deep/ table tr {\r\n    box-shadow: 0px 1px 0px #eae9e9;\r\n}\r\n:host /deep/ table tbody {\r\n    box-shadow: 0px 0px 3px 0px #828181;\r\n}\r\n:host /deep/ table th {\r\n    font-size: 10px;\r\n}\r\n:host /deep/ h1 {\r\n    font-weight: 600;\r\n    color: #4a6076;\r\n    font-size: 20px;\r\n}\r\n:host /deep/ .page-link-prev {\r\n    font-size: 14px !important;\r\n}\r\n:host /deep/ .page-link-next {\r\n    font-size: 14px !important;\r\n}\r\n:host /deep/ .ng2-smart-filter[_ngcontent-c7] input,\r\n[_nghost-c7] .ng2-smart-filter[_ngcontent-c7] select {\r\n    width: 100%;\r\n    line-height: normal;\r\n    padding: .375em .75em;\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n}\r\n/****************************************************/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlja2xpc3QvcGlja2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEI7SUFDSSw4QkFBOEI7Q0FDakM7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0NBQ3BCO0FBRUQ7SUFDSSxpQ0FBaUM7Q0FDcEM7QUFFRDtJQUNJLGtDQUFrQztJQUNsQyxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUg7SUFDSSxtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLGdDQUFnQztDQUNuQztBQUVEO0lBQ0ksb0NBQW9DO0NBQ3ZDO0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBRUQ7SUFDSSwyQkFBMkI7Q0FDOUI7QUFFRDtJQUNJLDJCQUEyQjtDQUM5QjtBQUVEOztJQUVJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7QUFDRCxzREFBc0QiLCJmaWxlIjoic3JjL2FwcC9waWNrbGlzdC9waWNrbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW1wb3J0YW50IHBhcnQgKi9cclxuLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBvdmVyZmxvdy15OiBpbml0aWFsICFpbXBvcnRhbnRcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gICAgLypoZWlnaHQ6IDgwJTsqL1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE2MHB4KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIsIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDFyZW07XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyB0YWJsZSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jYXB0aW9uICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAxcHggI2YzZjNmMztcclxuICAgIG1heC13aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzA3MDAyQTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLypAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICA6aG9zdCAvZGVlcC8gdGFibGUge1xyXG4gICAgICAgIG1pbi13aWR0aDogOTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgOmhvc3QgL2RlZXAvIHRhYmxlIHtcclxuICAgICAgICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIDpob3N0IC9kZWVwLyB0YWJsZSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA3NTBweDtcclxuICAgIH1cclxufSovXHJcblxyXG46aG9zdCAvZGVlcC8gLnBhZ2UtYm9keSB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyBhIHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gdGFibGUgdHIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggI2VhZTllOTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIHRhYmxlIHRib2R5IHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDBweCAjODI4MTgxO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gdGFibGUgdGgge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjNGE2MDc2O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnBhZ2UtbGluay1wcmV2IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLnBhZ2UtbGluay1uZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLm5nMi1zbWFydC1maWx0ZXJbX25nY29udGVudC1jN10gaW5wdXQsXHJcbltfbmdob3N0LWM3XSAubmcyLXNtYXJ0LWZpbHRlcltfbmdjb250ZW50LWM3XSBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgcGFkZGluZzogLjM3NWVtIC43NWVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/picklist/picklist.component.ts":
/*!************************************************!*\
  !*** ./src/app/picklist/picklist.component.ts ***!
  \************************************************/
/*! exports provided: PicklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicklistComponent", function() { return PicklistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/DataService */ "./src/app/services/DataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PicklistComponent = /** @class */ (function () {
    function PicklistComponent(bsModalRef, http, ds) {
        this.bsModalRef = bsModalRef;
        this.http = http;
        this.ds = ds;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PicklistComponent.prototype.isRowSelected = function () {
        return true;
    };
    PicklistComponent.prototype.selectItem = function () {
        this.event.emit(this.selectedRowItem);
        this.bsModalRef.hide();
    };
    PicklistComponent.prototype.onRowSelect = function (smTbObject) {
        this.selectedRowItem = smTbObject.isSelected ? smTbObject.data : undefined;
    };
    PicklistComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.token && this.serverID) {
            //const headers = new Headers();
            //headers.append('AccessToken', `${this.token}`);
            //headers.append('ServerID', `${this.serverID}`);
            //const options = new RequestOptions({
            //  headers: headers
            //});
            //const connection = new XHRBackend(new BrowserXhr(), new ResponseOptions(), new CookieXSRFStrategy());
            //this.http = new Http(connection, options);
        }
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["ServerDataSource"](this.http, this.dataSourceConfig);
        this.source.onChanged().subscribe(function () {
            try {
                _this.ds.ShowHideToasty();
                setTimeout(function () {
                    var row = _this.grdTags.grid.dataSet;
                    row.willSelect = "";
                    row.deselectAll();
                }, 1000);
            }
            catch (_a) { }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('grdTags'),
        __metadata("design:type", Object)
    ], PicklistComponent.prototype, "grdTags", void 0);
    PicklistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-picklist',
            template: __webpack_require__(/*! ./picklist.template.html */ "./src/app/picklist/picklist.template.html"),
            styles: [__webpack_require__(/*! ./picklist.component.css */ "./src/app/picklist/picklist.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_DataService__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], PicklistComponent);
    return PicklistComponent;
}());



/***/ }),

/***/ "./src/app/picklist/picklist.template.html":
/*!*************************************************!*\
  !*** ./src/app/picklist/picklist.template.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{title}}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n\r\n    <ng2-smart-table #grdTags [settings]=\"settings\" [source]=\"source\" (userRowSelect)=\"onRowSelect($event)\"></ng2-smart-table>\r\n\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"selectItem()\"\r\n            [ngClass]=\"{ 'disabled': !selectedRowItem }\"\r\n            [disabled]=\"!selectedRowItem\">\r\n        Select\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./src/app/scroll/scroll.module.ts":
/*!*****************************************!*\
  !*** ./src/app/scroll/scroll.module.ts ***!
  \*****************************************/
/*! exports provided: ScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollModule", function() { return ScrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_directives_slimscroll_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/directives/slimscroll.directive */ "./src/app/shared/directives/slimscroll.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScrollModule = /** @class */ (function () {
    function ScrollModule() {
    }
    ScrollModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_shared_directives_slimscroll_directive__WEBPACK_IMPORTED_MODULE_2__["SlimScroll"]],
            exports: [_shared_directives_slimscroll_directive__WEBPACK_IMPORTED_MODULE_2__["SlimScroll"]]
        })
    ], ScrollModule);
    return ScrollModule;
}());



/***/ }),

/***/ "./src/app/services/AutoLogoutComponent.ts":
/*!*************************************************!*\
  !*** ./src/app/services/AutoLogoutComponent.ts ***!
  \*************************************************/
/*! exports provided: AutoLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoLogoutComponent", function() { return AutoLogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _AutoLogoutService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoLogoutService */ "./src/app/services/AutoLogoutService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
///<reference path="../GlobalShareCode.ts"/>


var AutoLogoutComponent = /** @class */ (function () {
    function AutoLogoutComponent(autoLogoutService) {
        this.autoLogoutService = autoLogoutService;
    }
    AutoLogoutComponent.prototype.ngOnInit = function () {
        console.log('lastAction updated');
        localStorage.setItem('lastAction', Date.now().toString());
    };
    AutoLogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auto-logout',
            template: "<expire></expire>",
            providers: [_AutoLogoutService__WEBPACK_IMPORTED_MODULE_1__["AutoLogoutService"]]
        }),
        __metadata("design:paramtypes", [_AutoLogoutService__WEBPACK_IMPORTED_MODULE_1__["AutoLogoutService"]])
    ], AutoLogoutComponent);
    return AutoLogoutComponent;
}());



/***/ }),

/***/ "./src/app/services/AutoLogoutService.ts":
/*!***********************************************!*\
  !*** ./src/app/services/AutoLogoutService.ts ***!
  \***********************************************/
/*! exports provided: AutoLogoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoLogoutService", function() { return AutoLogoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MINUTES_UNITL_AUTO_LOGOUT = 1; // in mins
var CHECK_INTERVAL = 15000; // in ms
var STORE_KEY = 'lastAction';
var AutoLogoutService = /** @class */ (function () {
    function AutoLogoutService(router) {
        this.router = router;
        console.log('object created');
        this.check();
        this.initListener();
        this.initInterval();
    }
    AutoLogoutService.prototype.getLastAction = function () {
        return parseInt(localStorage.getItem(STORE_KEY));
    };
    AutoLogoutService.prototype.setLastAction = function (lastAction) {
        localStorage.setItem(STORE_KEY, lastAction.toString());
    };
    AutoLogoutService.prototype.initListener = function () {
        var _this = this;
        console.log('event updated');
        document.body.addEventListener('click', function () { return _this.reset(); });
        document.body.addEventListener('mouseover', function () { return _this.reset(); });
        document.body.addEventListener('mouseout', function () { return _this.reset(); });
        document.body.addEventListener('keydown', function () { return _this.reset(); });
        document.body.addEventListener('keyup', function () { return _this.reset(); });
        document.body.addEventListener('keypress', function () { return _this.reset(); });
    };
    AutoLogoutService.prototype.reset = function () {
        console.log('reset updated');
        this.setLastAction(Date.now());
    };
    AutoLogoutService.prototype.initInterval = function () {
        var _this = this;
        setInterval(function () {
            _this.check();
        }, CHECK_INTERVAL);
    };
    AutoLogoutService.prototype.check = function () {
        console.log('check');
        var now = Date.now();
        var timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
        var diff = timeleft - now;
        var isTimeout = diff < 0;
        if (isTimeout) {
            localStorage.clear();
            this.router.navigate(['/Login']);
        }
    };
    AutoLogoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AutoLogoutService);
    return AutoLogoutService;
}());



/***/ }),

/***/ "./src/app/services/DataService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/DataService.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//reference https://stackblitz.com/edit/passing-data-between-components-in-router-outlet-to-outside?file=app%2Fdata.service.ts


var DataService = /** @class */ (function () {
    function DataService() {
        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    DataService.prototype.ShowHideToasty = function (message) {
        this.subject.next(message);
    };
    //clearData() {
    //    this.subject.next();
    //}
    DataService.prototype.getToastyData = function () {
        return this.subject.asObservable();
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthRouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRouteService", function() { return AuthRouteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
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



var AuthRouteService = /** @class */ (function () {
    //public authTokenStale: string = 'stale_auth_token';
    //public authTokenNew: string = 'new_auth_token';
    //public currentToken: string;
    function AuthRouteService(_commonFunctionality) {
        this._commonFunctionality = _commonFunctionality;
        //this.currentToken = this.authTokenStale
    }
    AuthRouteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_commonFunctionality__WEBPACK_IMPORTED_MODULE_2__["CommonFunctionality"]])
    ], AuthRouteService);
    return AuthRouteService;
}());



/***/ }),

/***/ "./src/app/shared/Security/auth.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/Security/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authservice, Router) {
        this.authservice = authservice;
        this.Router = Router;
        this.isLoggedIn = false;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        this.redirectURl = state.url;
        return this.CheckLogin(this.redirectURl);
    };
    AuthGuard.prototype.CheckLogin = function (url) {
        if (localStorage.getItem('access_token')) {
            return true;
        }
        this.Router.navigate(['login']);
        return false;
        //return true;
        //if (this.isLoggedIn)
        //{
        //  this.authservice.isLoggedIn().subscribe(
        //    res => {
        //      if (res.Entity != null) {
        //        this.Router.navigateByUrl(url);
        //        this.isLoggedIn = true;
        //        //  this._commonFunctionality.SessionTime();
        //      }
        //      else {
        //        this.Router.navigateByUrl('/Login');
        //        this.isLoggedIn = false;
        //      }
        //    },
        //    err => {
        //      this.isLoggedIn = false;
        //      this.authservice.redirectUrl = url;
        //      this.Router.navigateByUrl('/Login');
        //      return false;
        //      //  this.Router.navigateByUrl(url);
        //    }
        //  )
        //  return true;
        //}
        //else
        //{
        //  this.authservice.isLoggedIn().subscribe(
        //    res => {
        //      if (res.Success) {
        //        this.Router.navigateByUrl(url);
        //        this.isLoggedIn = true;
        //      }
        //      else {
        //        this.Router.navigateByUrl('/Login');
        //        this.isLoggedIn = false;
        //      }
        //    },
        //    err => {
        //      this.isLoggedIn = false;
        //      this.authservice.redirectUrl = url;
        //      this.Router.navigateByUrl('/Login');
        //      return false;
        //      //  this.Router.navigateByUrl(url);
        //    }
        //  )
        //};
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthRouteService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordion.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
        this.countState = 0;
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.countState++;
        if ((openLink.group !== 'sub-toggled' || openLink.group !== 'main-toggled') && this.countState === 1) {
            if (window.innerWidth < 768) {
                document.querySelector('#pcoded').setAttribute('vertical-nav-type', 'offcanvas');
                var toggled_element = document.querySelector('#mobile-collapse');
                toggled_element.click();
            }
            else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
                document.querySelector('#pcoded').setAttribute('vertical-nav-type', 'collapsed');
                /*const toggled_element = <HTMLElement>document.querySelector('#mobile-collapse');
                toggled_element.click();*/
            }
        }
        this.navlinks.forEach(function (link) {
            if (link !== openLink && (link.group === 'sub-toggled' || openLink.group !== 'sub-toggled')) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AccordionDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            _this.countState = 0;
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    AccordionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordion]',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AccordionDirective);
    return AccordionDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionanchor.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = /** @class */ (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordionToggle]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])),
        __metadata("design:paramtypes", [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]])
    ], AccordionAnchorDirective);
    return AccordionAnchorDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionlink.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            /*for slimscroll on and off*/
            document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        /*for slimscroll on and off*/
        document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
        this.open = !this.open;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.pcoded-trigger'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AccordionLinkDirective.prototype, "open", null);
    AccordionLinkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordionLink]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])),
        __metadata("design:paramtypes", [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]])
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "./src/app/shared/breadcrumbs/breadcrumbs.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/breadcrumbs/breadcrumbs.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-active {\r\n    pointer-events: none;\r\n    cursor: default;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90LWFjdGl2ZSB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/breadcrumbs/breadcrumbs.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/breadcrumbs/breadcrumbs.component.ts ***!
  \*************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent(router, route, titleService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })
            .subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (routes) {
                    if (routes.outlet === 'primary') {
                        var routeSnapshot = routes.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        if (routes.snapshot.data.breadcrumb !== undefined) {
                            var status_1 = true;
                            if (routes.snapshot.data.status !== undefined) {
                                status_1 = routes.snapshot.data.status;
                            }
                            _this.breadcrumbs.push({
                                label: routes.snapshot.data.breadcrumb,
                                status: status_1,
                                url: url,
                                icon: routes.snapshot.data.icon,
                            });
                        }
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
        });
    }
    BreadcrumbsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.template.html */ "./src/app/shared/breadcrumbs/breadcrumbs.template.html"),
            styles: [__webpack_require__(/*! ./breadcrumbs.component.css */ "./src/app/shared/breadcrumbs/breadcrumbs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/app/shared/breadcrumbs/breadcrumbs.template.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/breadcrumbs/breadcrumbs.template.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--<div class=\"page-header\">\r\n    <div class=\"page-header-title\">\r\n        <span *ngFor=\"let breadcrumb of breadcrumbs; let last = last\">\r\n            <h4 *ngIf=\"last\">{{ breadcrumb.label }}</h4>\r\n        </span>\r\n    </div>\r\n    <div class=\"page-header-breadcrumb\">\r\n        <ul class=\"breadcrumb-title\">\r\n            <li class=\"breadcrumb-item\">\r\n                <a [routerLink]=\"'/Dashboard'\">\r\n                    <i class=\"icofont icofont-home\"></i>\r\n                </a>\r\n            </li>\r\n            <li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs\">\r\n                <a [ngClass]=\"breadcrumb.status === false ? 'not-active': ''\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>-->\r\n"

/***/ }),

/***/ "./src/app/shared/card/card-animation.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card-animation.ts ***!
  \***********************************************/
/*! exports provided: cardToggle, cardClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardToggle", function() { return cardToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardClose", function() { return cardClose; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var cardToggle = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardToggle', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        overflow: 'hidden',
        height: '0px',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"],
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('collapsed <=> expanded', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
    ])
]);
var cardClose = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardClose', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        display: 'none'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms')),
]);


/***/ }),

/***/ "./src/app/shared/card/card-refresh.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/card/card-refresh.directive.ts ***!
  \*******************************************************/
/*! exports provided: CardRefreshDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardRefreshDirective", function() { return CardRefreshDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardRefreshDirective = /** @class */ (function () {
    function CardRefreshDirective(el) {
        this.el = el;
    }
    CardRefreshDirective.prototype.open = function () {
        this.el.nativeElement.classList.add('rotate-refresh');
    };
    CardRefreshDirective.prototype.close = function () {
        this.el.nativeElement.classList.remove('rotate-refresh');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CardRefreshDirective.prototype, "open", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CardRefreshDirective.prototype, "close", null);
    CardRefreshDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[cardRefresh]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CardRefreshDirective);
    return CardRefreshDirective;
}());



/***/ }),

/***/ "./src/app/shared/card/card-toggle.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/card/card-toggle.directive.ts ***!
  \******************************************************/
/*! exports provided: CardToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardToggleDirective", function() { return CardToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardToggleDirective = /** @class */ (function () {
    function CardToggleDirective(el) {
        this.el = el;
    }
    CardToggleDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.el.nativeElement.classList.toggle('icon-up');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CardToggleDirective.prototype, "onToggle", null);
    CardToggleDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[cardToggleEvent]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], CardToggleDirective);
    return CardToggleDirective;
}());



/***/ }),

/***/ "./src/app/shared/card/card.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/card/card.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header-right {\r\n    z-index: 999;\r\n}\r\n\r\n\r\n\r\n.download_hover {\r\n  position: relative;\r\n}\r\n\r\n\r\n\r\n.download_text {\r\n  visibility: hidden;\r\n  width: 105px;\r\n  background-color: #fff;\r\n  text-align: left;\r\n  font-size: 15px;\r\n  position: absolute;\r\n  top: 5px;\r\n  left: -110px;\r\n}\r\n\r\n\r\n\r\n.download_hover:hover .download_text {\r\n  visibility: visible;\r\n}\r\n\r\n\r\n\r\n.comment_hover {\r\n  position: relative;\r\n}\r\n\r\n\r\n\r\n.comment_text {\r\n  visibility: hidden;\r\n  width: 105px;\r\n  background-color: #fff;\r\n  text-align: left;\r\n  font-size: 15px;\r\n  position: absolute;\r\n  top: 5px;\r\n  left: -110px;\r\n}\r\n\r\n\r\n\r\n.comment_hover:hover .comment_text {\r\n  visibility: visible;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtDQUNoQjs7OztBQUlEO0VBQ0UsbUJBQW1CO0NBQ3BCOzs7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtDQUNkOzs7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7Ozs7QUFHRDtFQUNFLG1CQUFtQjtDQUNwQjs7OztBQUdEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7Q0FDZDs7OztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyLXJpZ2h0IHtcclxuICAgIHotaW5kZXg6IDk5OTtcclxufVxyXG5cclxuXHJcblxyXG4uZG93bmxvYWRfaG92ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRvd25sb2FkX3RleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogMTA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgbGVmdDogLTExMHB4O1xyXG59XHJcblxyXG4uZG93bmxvYWRfaG92ZXI6aG92ZXIgLmRvd25sb2FkX3RleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcblxyXG4uY29tbWVudF9ob3ZlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuLmNvbW1lbnRfdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICBsZWZ0OiAtMTEwcHg7XHJcbn1cclxuXHJcbi5jb21tZW50X2hvdmVyOmhvdmVyIC5jb21tZW50X3RleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _card_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-animation */ "./src/app/shared/card/card-animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.classHeader = false;
        this.showRightSection = true;
        this.showClose = false;
        this.showRefresh = false;
        this.showBack = false;
        this.cardToggle = 'expanded';
        this.showExternalUpload = false;
        this.showDownload = false;
        this.onDownload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBack = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onExternalUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._showUpload = false;
        this.cardClose = 'open';
    }
    Object.defineProperty(CardComponent.prototype, "showUpload", {
        get: function () {
            return this._showUpload;
        },
        set: function (value) {
            this._showUpload = value;
        },
        enumerable: true,
        configurable: true
    });
    CardComponent.prototype.ngOnInit = function () {
        //console.log(this.showUpload);
    };
    CardComponent.prototype.onRefreshClickEvent = function () {
        this.onRefresh.emit();
    };
    ;
    CardComponent.prototype.onBackClickEvent = function () {
        this.onBack.emit();
    };
    ;
    CardComponent.prototype.onDownloadClickEvent = function () {
        this.onDownload.emit();
    };
    ;
    CardComponent.prototype.onUploadClickEvent = function () {
        this.onUpload.emit();
    };
    ;
    CardComponent.prototype.externalUploadClickEvent = function () {
        this.onExternalUpload.emit();
    };
    ;
    CardComponent.prototype.toggleCard = function () {
        this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
    };
    CardComponent.prototype.closeCard = function () {
        this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "headerContent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "blockClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "cardClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "classHeader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "showRightSection", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "showClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "showRefresh", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "showBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "cardToggle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "showExternalUpload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "showDownload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CardComponent.prototype, "onDownload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CardComponent.prototype, "onUpload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CardComponent.prototype, "onRefresh", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CardComponent.prototype, "onBack", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CardComponent.prototype, "onExternalUpload", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], CardComponent.prototype, "showUpload", null);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.template.html */ "./src/app/shared/card/card.template.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/shared/card/card.component.css")],
            animations: [_card_animation__WEBPACK_IMPORTED_MODULE_1__["cardToggle"], _card_animation__WEBPACK_IMPORTED_MODULE_1__["cardClose"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/shared/card/card.template.html":
/*!************************************************!*\
  !*** ./src/app/shared/card/card.template.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card\" [@cardClose]=\"cardClose\" [ngClass]=\"cardClass\">\r\n    <div class=\"card-header\" *ngIf=\"title\">\r\n        <h5>{{ title }}</h5>\r\n        <span *ngIf=\"!classHeader\">{{ headerContent }}</span>\r\n        <span *ngIf=\"classHeader\">\r\n            <ng-content select=\".code-header\"></ng-content>\r\n        </span>\r\n        <div class=\"card-header-right\" *ngIf=\"showRightSection\">\r\n\r\n          <a href=\"javascript:void(0);\" (click)=\"onBackClickEvent($event)\" *ngIf=\"showBack\">\r\n            <i class=\"icofont icofont-circled-left icofont-2x\"></i>\r\n          </a>\r\n\r\n          <a href=\"javascript:void(0);\" (click)=\"onDownloadClickEvent($event)\" *ngIf=\"showDownload\">\r\n            <i class=\"icofont icofont-download-alt icofont-2x download_hover\">\r\n              <span class=\"download_text\">Download Ticket</span>\r\n            </i>\r\n          </a>\r\n\r\n          <a href=\"javascript:void(0);\" (click)=\"externalUploadClickEvent($event)\" *ngIf=\"showExternalUpload\">\r\n            <i class=\"icofont icofont-exchange icofont-2x comment_hover\">\r\n              <span class=\"comment_text\">Comments</span>\r\n            </i>\r\n          </a>\r\n\r\n          <a href=\"javascript:void(0);\" cardToggleEvent (click)=\"toggleCard($event)\">\r\n            <i class=\"icofont icofont-rounded-down icofont-2x \"></i> <!--(click)=\"toggleCard($event)-->\r\n          </a>\r\n\r\n\r\n\r\n\r\n          <a href=\"javascript:void(0);\" (click)=\"onRefreshClickEvent($event)\" *ngIf=\"showRefresh\">\r\n            <i class=\"icofont icofont-refresh\"></i>\r\n          </a>\r\n\r\n\r\n\r\n          <a href=\"javascript:void(0);\" (click)=\"onUploadClickEvent($event)\" *ngIf=\"showUpload\">\r\n            <i class=\"icofont icofont-upload-alt\"></i>\r\n          </a>\r\n\r\n\r\n\r\n          <a href=\"javascript:void(0);\" (click)=\"closeCard($event)\" *ngIf=\"showClose\">\r\n            <i class=\"icofont icofont-close-circled\"></i>\r\n          </a>\r\n\r\n        </div>\r\n    </div>\r\n    <div [@cardToggle]=\"cardToggle\">\r\n        <div class=\"card-body\" [ngClass]=\"blockClass\">\r\n            <ng-content></ng-content>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/LinkViewRef.Component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/LinkViewRef.Component.ts ***!
  \************************************************************/
/*! exports provided: LinkViewRefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkViewRefComponent", function() { return LinkViewRefComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/DataService */ "./src/app/services/DataService.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinkViewRefComponent = /** @class */ (function () {
    //@Output() save: EventEmitter<any> = new EventEmitter();
    function LinkViewRefComponent(ds, modalService) {
        this.ds = ds;
        this.modalService = modalService;
        this.pathvalue = false;
    }
    LinkViewRefComponent.prototype.ngOnInit = function () {
        this.renderValue = this.value.toString().toUpperCase();
    };
    LinkViewRefComponent.prototype.onClick = function () {
        this.openUploadModel(this.rowData);
        //this.save.emit(this.rowData);
    };
    LinkViewRefComponent.prototype.openUploadModel = function (data) {
        var _this = this;
        this.ds.ShowHideToasty({
            title: 'Loading Data...Wait!!',
            msg: '',
            showClose: false,
            theme: 'bootstrap',
            type: 'wait',
            closeOther: true
        });
        var config = {
            class: 'modal-lg',
            backdrop: true,
            ignoreBackdropClick: true,
            initialState: {
                title: 'Upload Deposit Slip',
                closeLoading: function () {
                    _this.ds.ShowHideToasty();
                },
                model: data,
            }
        };
        this.modalRef = this.modalService.show(null, config);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LinkViewRefComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LinkViewRefComponent.prototype, "rowData", void 0);
    LinkViewRefComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'link-view',
            template: "\n    <a (click)=\"onClick()\" class=\"link\">{{ renderValue }}</a>\n  ",
        }),
        __metadata("design:paramtypes", [_services_DataService__WEBPACK_IMPORTED_MODULE_1__["DataService"], ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]])
    ], LinkViewRefComponent);
    return LinkViewRefComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/linkView.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/linkView.component.ts ***!
  \*********************************************************/
/*! exports provided: LinkViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkViewComponent", function() { return LinkViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinkViewComponent = /** @class */ (function () {
    function LinkViewComponent() {
        //renderValue: string;
        this.pathvalue = false;
        //onClick() {
        //    this.save.emit(this.rowData);
        //}
    }
    //@Output() save: EventEmitter<any> = new EventEmitter();
    LinkViewComponent.prototype.ngOnInit = function () {
        //this.renderValue = this.value.toString().toUpperCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LinkViewComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LinkViewComponent.prototype, "rowData", void 0);
    LinkViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'link-view',
            template: "\n <a href=\"{{value}}\" *ngIf=\"value?.length > 0\" target=\"_blank\" class=\"icofont icofont-download-alt\"> <span *ngIf=\"rowData?.Count > 0\">({{rowData.Count}})</span></a>\n  ",
        })
    ], LinkViewComponent);
    return LinkViewComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/slimscroll.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/slimscroll.directive.ts ***!
  \***********************************************************/
/*! exports provided: SlimScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlimScroll", function() { return SlimScroll; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var defaults = {
    width: "auto",
    height: "250px",
    size: "7px",
    color: "#000",
    position: "right",
    distance: "1px",
    start: "top",
    opacity: .4,
    transition: .3,
    alwaysVisible: false,
    disableFadeOut: false,
    railVisible: false,
    railColor: "#333",
    railOpacity: .2,
    railClass: "slimScrollRail",
    barClass: "slimScrollBar",
    wrapperClass: "slimScrollDiv",
    allowPageScroll: false,
    wheelStep: 20,
    touchScrollStep: 200,
    borderRadius: "7px",
    railBorderRadius: "7px",
    scrollTo: 0,
    autoScrollToBottom: false,
    maxHeightBeforeEnable: undefined,
};
var SlimScroll = /** @class */ (function () {
    function SlimScroll(rendererFactory, elementRef) {
        var _this = this;
        this._minBarHeight = 30;
        this._releaseScroll = false;
        this.trackPanelHeightChanged = function () {
            _this._previousHeight = _this._me.scrollHeight;
            _this._changesTracker = window.setInterval(function () {
                if (_this._previousHeight !== _this._me.scrollHeight) {
                    _this._previousHeight = _this._me.scrollHeight;
                    _this.init();
                    if (_this._options.autoScrollToBottom) {
                        _this._renderer.setStyle(_this._bar, "top", _this._me.offsetHeight - _this._bar.offsetHeight + "px");
                        _this.scrollContent(0, true);
                    }
                }
            }, 1000);
        };
        this._renderer = rendererFactory.createRenderer(null, null);
        this._me = elementRef.nativeElement;
        this._options = __assign({}, defaults);
        this.showBar = this.showBar.bind(this);
        this.hideBar = this.hideBar.bind(this);
        this.onWheel = this.onWheel.bind(this);
        this.barMouseMove = this.barMouseMove.bind(this);
        this.barMouseUp = this.barMouseUp.bind(this);
        this.barMouseDown = this.barMouseDown.bind(this);
        this.railMouseDown = this.railMouseDown.bind(this);
    }
    SlimScroll.prototype.ngOnInit = function () {
        this.init();
    };
    SlimScroll.prototype.ngOnDestroy = function () {
        if (this._changesTracker) {
            clearInterval(this._changesTracker);
        }
        if (window.removeEventListener) {
            window.removeEventListener("DOMMouseScroll", this.onWheel);
            window.removeEventListener("mousewheel", this.onWheel);
        }
        else {
            document.removeEventListener("mousewheel", this.onWheel);
        }
        document.removeEventListener("mousemove", this.barMouseMove, false);
        document.removeEventListener("mouseup", this.barMouseUp, false);
    };
    SlimScroll.prototype.onResize = function () {
        this.init();
    };
    Object.defineProperty(SlimScroll.prototype, "width", {
        set: function (value) {
            this._options.width = value || defaults.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "height", {
        set: function (value) {
            this._options.height = value || defaults.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "size", {
        set: function (value) {
            this._options.size = value || defaults.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "color", {
        set: function (value) {
            this._options.color = value || defaults.color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "position", {
        set: function (value) {
            this._options.position = value || defaults.position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "distance", {
        set: function (value) {
            this._options.distance = value || defaults.distance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "start", {
        set: function (value) {
            this._options.start = value || defaults.start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "opacity", {
        set: function (value) {
            this._options.opacity = value || defaults.opacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "transition", {
        set: function (value) {
            this._options.transition = value || defaults.transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "alwaysVisible", {
        set: function (value) {
            this._options.alwaysVisible = value || defaults.alwaysVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "disableFadeOut", {
        set: function (value) {
            this._options.disableFadeOut = value || defaults.disableFadeOut;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "railVisible", {
        set: function (value) {
            this._options.railVisible = value || defaults.railVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "railColor", {
        set: function (value) {
            this._options.railColor = value || defaults.railColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "railOpacity", {
        set: function (value) {
            this._options.railOpacity = value || defaults.railOpacity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "railClass", {
        set: function (value) {
            this._options.railClass = value || defaults.railClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "barClass", {
        set: function (value) {
            this._options.barClass = value || defaults.barClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "wrapperClass", {
        set: function (value) {
            this._options.wrapperClass = value || defaults.wrapperClass;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "allowPageScroll", {
        set: function (value) {
            this._options.allowPageScroll = value || defaults.allowPageScroll;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "wheelStep", {
        set: function (value) {
            this._options.wheelStep = value || defaults.wheelStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "touchScrollStep", {
        set: function (value) {
            this._options.touchScrollStep = value || defaults.touchScrollStep;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "borderRadius", {
        set: function (value) {
            this._options.borderRadius = value || defaults.borderRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "railBorderRadius", {
        set: function (value) {
            this._options.railBorderRadius = value || defaults.railBorderRadius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "scrollTo", {
        set: function (value) {
            this._options.scrollTo = value || defaults.scrollTo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "autoScrollToBottom", {
        set: function (value) {
            this._options.autoScrollToBottom = value || defaults.autoScrollToBottom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimScroll.prototype, "maxHeightBeforeEnable", {
        set: function (value) {
            this._options.maxHeightBeforeEnable = value || defaults.maxHeightBeforeEnable;
        },
        enumerable: true,
        configurable: true
    });
    SlimScroll.prototype.init = function () {
        // ensure we are not binding it again
        if (this._bar && this._rail) {
            this.refresh();
        }
        else {
            this.setup();
        }
    };
    SlimScroll.prototype.hasParentClass = function (e, className) {
        if (!e) {
            return false;
        }
        if (e.classList.contains(this._options.wrapperClass)) {
            return true;
        }
        return this.hasParentClass(e.parentElement, className);
    };
    ;
    SlimScroll.prototype.onWheel = function (e) {
        // use mouse wheel only when mouse is over
        if (!this._isOverPanel) {
            return;
        }
        var delta = 0;
        if (e.deltaY) {
            delta = -e.deltaY / 120;
        }
        if (e.detail) {
            delta = e.detail / 3;
        }
        var target = (e.target || e.currentTarget || e.relatedTarget);
        if (this.hasParentClass(target, this._options.wrapperClass)) {
            // scroll content
            this.scrollContent(delta, true);
        }
        // stop window scroll
        if (e.preventDefault && !this._releaseScroll) {
            e.preventDefault();
        }
        if (!this._releaseScroll) {
            e.returnValue = false;
        }
    };
    ;
    SlimScroll.prototype.attachWheel = function (target) {
        if (window.addEventListener) {
            target.addEventListener("DOMMouseScroll", this.onWheel, false);
            target.addEventListener("mousewheel", this.onWheel, false);
        }
        else {
            document.addEventListener("mousewheel", this.onWheel, false);
        }
    };
    ;
    SlimScroll.prototype.showBar = function () {
        // recalculate bar height
        this.getBarHeight();
        clearTimeout(this._queueHide || 0);
        // when bar reached top or bottom
        if (this._percentScroll === ~~this._percentScroll) {
            // release wheel
            this._releaseScroll = this._options.allowPageScroll;
        }
        else {
            this._releaseScroll = false;
        }
        this._lastScroll = this._percentScroll;
        // show only when required
        if (this._barHeight >= this._me.offsetHeight) {
            // allow window scroll
            this._releaseScroll = true;
            return;
        }
        this._renderer.setStyle(this._bar, "opacity", this._options.opacity.toString());
        this._renderer.setStyle(this._rail, "opacity", this._options.railOpacity.toString());
    };
    ;
    SlimScroll.prototype.hideBar = function () {
        var _this = this;
        // only hide when options allow it
        if (!this._options.alwaysVisible
            && !(this._options.disableFadeOut && this._isOverPanel)
            && !this._isOverBar
            && !this._isDragg) {
            this._queueHide = window.setTimeout(function () {
                _this._renderer.setStyle(_this._bar, "opacity", "0");
                _this._renderer.setStyle(_this._rail, "opacity", "0");
            }, 1000);
        }
    };
    ;
    SlimScroll.prototype.scrollContent = function (y, isWheel, isJump) {
        if (isJump === void 0) { isJump = false; }
        this._releaseScroll = false;
        var delta = y;
        var maxTop = this._me.offsetHeight - this._bar.offsetHeight;
        if (isWheel) {
            // move bar with mouse wheel
            delta = parseInt(this._bar.style.top, 10) + y * this._options.wheelStep / 100 * this._bar.offsetHeight;
            // move bar, make sure it doesn"t go out
            delta = Math.min(Math.max(delta, 0), maxTop);
            // if scrolling down, make sure a fractional change to the
            // scroll position isn"t rounded away when the scrollbar"s CSS is set
            // this flooring of delta would happened automatically when
            // bar.css is set below, but we floor here for clarity
            delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);
            // scroll the scrollbar
            this._renderer.setStyle(this._bar, "top", delta + "px");
        }
        // calculate actual scroll amount
        this._percentScroll = parseInt(this._bar.style.top, 10) / (this._me.offsetHeight - this._bar.offsetHeight);
        delta = this._percentScroll * (this._me.scrollHeight - this._me.offsetHeight);
        if (isJump) {
            delta = y;
            var offsetTop = delta / this._me.scrollHeight * this._me.offsetHeight;
            offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
            this._renderer.setStyle(this._bar, "top", offsetTop + "px");
        }
        // scroll content
        this._me.scrollTop = delta;
        // ensure bar is visible
        this.showBar();
        // trigger hide when scroll is stopped
        this.hideBar();
    };
    ;
    SlimScroll.prototype.getBarHeight = function () {
        // calculate scrollbar height and make sure it is not too small
        this._barHeight = Math.max(this._me.offsetHeight / (this._me.scrollHeight === 0 ? 1 : this._me.scrollHeight) * this._me.offsetHeight, this._minBarHeight);
        this._renderer.setStyle(this._bar, "height", this._barHeight + "px");
        // hide scrollbar if content is not long enough
        var display = this._barHeight === this._me.offsetHeight ? "none" : "block";
        this._renderer.setStyle(this._bar, "display", display);
    };
    SlimScroll.prototype.refresh = function () {
        this.getBarHeight();
        // Pass height: auto to an existing slimscroll object to force a resize after contents have changed
        if ("height" in this._options && this._options.height === "auto") {
            this._renderer.setStyle(this._me.parentElement, "height", "auto");
            this._renderer.setStyle(this._me, "height", "auto");
            var height = this._me.parentElement.clientHeight;
            this._renderer.setStyle(this._me.parentElement, "height", height + "px");
            this._renderer.setStyle(this._me, "height", height + "px");
        }
        else if ("height" in this._options) {
            var h = this._options.height;
            this._renderer.setStyle(this._me.parentElement, "height", h);
            this._renderer.setStyle(this._me, "height", h);
        }
    };
    SlimScroll.prototype.railMouseDown = function (event) {
        var clientRects = this._rail.getBoundingClientRect();
        var elementOffsetTop = clientRects.top + window.scrollY;
        var moveTo = event.pageY - elementOffsetTop - (this._barHeight / 2);
        var scrollTo = this._me.scrollHeight * (moveTo / clientRects.height);
        this._renderer.setStyle(this._bar, "top", (moveTo >= 0 ? moveTo : 0) + "px");
        this.scrollContent(scrollTo, false, true);
    };
    ;
    SlimScroll.prototype.barMouseMove = function (event) {
        var currTop = this._startBarTop + event.pageY - this._barMouseDownPageY;
        this._renderer.setStyle(this._bar, "top", (currTop >= 0 ? currTop : 0) + "px");
        var position = this._bar.getClientRects()[0];
        if (position) {
            this.scrollContent(0, position.top > 0);
        }
    };
    ;
    SlimScroll.prototype.barMouseUp = function () {
        this._isDragg = false;
        // return normal text selection
        var body = document.body;
        this._renderer.setStyle(body, "-webkit-user-select", "initial");
        this._renderer.setStyle(body, "-moz-user-select", "initial");
        this._renderer.setStyle(body, "-ms-user-select", "initial");
        this._renderer.setStyle(body, "user-select", "initial");
        this.hideBar();
        document.removeEventListener("mousemove", this.barMouseMove, false);
        document.removeEventListener("mouseup", this.barMouseUp, false);
    };
    ;
    SlimScroll.prototype.barMouseDown = function (e) {
        this._isDragg = true;
        // disable text selection
        var body = document.body;
        this._renderer.setStyle(body, "-webkit-user-select", "none");
        this._renderer.setStyle(body, "-moz-user-select", "none");
        this._renderer.setStyle(body, "-ms-user-select", "none");
        this._renderer.setStyle(body, "user-select", "none");
        this._barMouseDownPageY = e.pageY;
        this._startBarTop = parseFloat(this._bar.style.top);
        document.addEventListener("mousemove", this.barMouseMove, false);
        document.addEventListener("mouseup", this.barMouseUp, false);
        return false;
    };
    SlimScroll.prototype.setup = function () {
        var _this = this;
        // check whether it changes in content
        this.trackPanelHeightChanged();
        if (this._options.maxHeightBeforeEnable && this._me.scrollHeight <= this._options.maxHeightBeforeEnable) {
            return;
        }
        // wrap content
        var wrapper = document.createElement("div");
        this._renderer.addClass(wrapper, this._options.wrapperClass);
        this._renderer.setStyle(wrapper, "position", "relative");
        this._renderer.setStyle(wrapper, "overflow", "hidden");
        this._renderer.setStyle(wrapper, "width", this._options.width);
        this._renderer.setStyle(wrapper, "height", this._options.height);
        // update style for the div
        this._renderer.setStyle(this._me, "overflow", "hidden");
        this._renderer.setStyle(this._me, "width", this._options.width);
        this._renderer.setStyle(this._me, "height", this._options.height);
        // create scrollbar rail
        this._rail = document.createElement("div");
        this._renderer.addClass(this._rail, this._options.railClass);
        this._renderer.setStyle(this._rail, "width", this._options.size);
        this._renderer.setStyle(this._rail, "height", "100%");
        this._renderer.setStyle(this._rail, "position", "absolute");
        this._renderer.setStyle(this._rail, "top", "0");
        this._renderer.setStyle(this._rail, "display", this._options.railVisible ? "block" : "none");
        this._renderer.setStyle(this._rail, "border-radius", this._options.railBorderRadius);
        this._renderer.setStyle(this._rail, "background", this._options.railColor);
        this._renderer.setStyle(this._rail, "opacity", this._options.railOpacity.toString());
        this._renderer.setStyle(this._rail, "transition", "opacity " + this._options.transition + "s");
        this._renderer.setStyle(this._rail, "z-index", "90");
        // create scrollbar
        this._bar = document.createElement("div");
        this._renderer.addClass(this._bar, this._options.barClass);
        this._renderer.setStyle(this._bar, "background", this._options.color);
        this._renderer.setStyle(this._bar, "width", this._options.size);
        this._renderer.setStyle(this._bar, "position", "absolute");
        this._renderer.setStyle(this._bar, "top", "0");
        this._renderer.setStyle(this._bar, "opacity", this._options.opacity.toString());
        this._renderer.setStyle(this._bar, "transition", "opacity " + this._options.transition + "s");
        this._renderer.setStyle(this._bar, "display", this._options.alwaysVisible ? "block" : "none");
        this._renderer.setStyle(this._bar, "border-radius", this._options.borderRadius);
        this._renderer.setStyle(this._bar, "webkit-border-radius", this._options.borderRadius);
        this._renderer.setStyle(this._bar, "moz-border-radius", this._options.borderRadius);
        this._renderer.setStyle(this._bar, "z-index", "99");
        // set position
        if (this._options.position === "right") {
            this._renderer.setStyle(this._rail, "right", this._options.distance);
            this._renderer.setStyle(this._bar, "right", this._options.distance);
        }
        else {
            this._renderer.setStyle(this._rail, "left", this._options.distance);
            this._renderer.setStyle(this._bar, "left", this._options.distance);
        }
        // wrap it
        this._me.parentElement.insertBefore(wrapper, this._me);
        wrapper.appendChild(this._me);
        if (this._options.scrollTo > 0) {
            // jump to a static point
            this.scrollContent(this._options.scrollTo, false, true);
        }
        // append to parent div
        this._me.parentElement.appendChild(this._bar);
        this._me.parentElement.appendChild(this._rail);
        this._bar.addEventListener("mousedown", this.barMouseDown, false);
        // on rail over
        this._rail.addEventListener("mouseenter", this.showBar, false);
        this._rail.addEventListener("mouseleave", this.hideBar, false);
        this._rail.addEventListener("mousedown", this.railMouseDown, false);
        // on bar over
        this._bar.addEventListener("mouseenter", function () { return _this._isOverBar = true; }, false);
        this._bar.addEventListener("mouseleave", function () { return _this._isOverBar = false; }, false);
        // show on parent mouseover
        this._me.addEventListener("mouseenter", function () {
            _this._isOverPanel = true;
            _this.showBar();
            _this.hideBar();
        }, false);
        this._me.addEventListener("mouseleave", function () {
            _this._isOverPanel = false;
            _this.hideBar();
        }, false);
        // support for mobile
        this._me.addEventListener("touchstart", function (e) {
            if (e.touches.length) {
                // record where touch started
                _this._touchDif = e.touches[0].pageY;
            }
        }, false);
        this._me.addEventListener("touchmove", function (e) {
            // prevent scrolling the page if necessary
            if (!_this._releaseScroll) {
                e.preventDefault();
            }
            if (e.touches.length) {
                // see how far user swiped
                var diff = (_this._touchDif - e.touches[0].pageY) / _this._options.touchScrollStep;
                // scroll content
                _this.scrollContent(diff, true);
                _this._touchDif = e.touches[0].pageY;
            }
        }, false);
        // set up initial height
        this.getBarHeight();
        // hide bar on init if alwaysVisible equal false
        this.hideBar();
        // check start position
        if (this._options.start === "bottom") {
            // scroll content to bottom
            this._renderer.setStyle(this._bar, "top", this._me.offsetHeight - this._bar.offsetHeight + "px");
            this.scrollContent(0, true);
        }
        // attach scroll events
        this.attachWheel(window);
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SlimScroll.prototype, "onResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimScroll.prototype, "width", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimScroll.prototype, "height", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimScroll.prototype, "size", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimScroll.prototype, "color", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimScroll.prototype, "position", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimScroll.prototype, "distance", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimScroll.prototype, "start", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SlimScroll.prototype, "opacity", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SlimScroll.prototype, "transition", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SlimScroll.prototype, "alwaysVisible", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SlimScroll.prototype, "disableFadeOut", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SlimScroll.prototype, "railVisible", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimScroll.prototype, "railColor", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SlimScroll.prototype, "railOpacity", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimScroll.prototype, "railClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimScroll.prototype, "barClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimScroll.prototype, "wrapperClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SlimScroll.prototype, "allowPageScroll", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SlimScroll.prototype, "wheelStep", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SlimScroll.prototype, "touchScrollStep", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimScroll.prototype, "borderRadius", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SlimScroll.prototype, "railBorderRadius", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SlimScroll.prototype, "scrollTo", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SlimScroll.prototype, "autoScrollToBottom", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SlimScroll.prototype, "maxHeightBeforeEnable", null);
    SlimScroll = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[slimScroll]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SlimScroll);
    return SlimScroll;
}());



/***/ }),

/***/ "./src/app/shared/elements/parent-remove.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/elements/parent-remove.directive.ts ***!
  \************************************************************/
/*! exports provided: ParentRemoveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentRemoveDirective", function() { return ParentRemoveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParentRemoveDirective = /** @class */ (function () {
    function ParentRemoveDirective(elements) {
        this.elements = elements;
    }
    ParentRemoveDirective.prototype.onToggle = function ($event) {
        $event.preventDefault();
        this.alert_parent = (this.elements).nativeElement.parentElement;
        this.alert_parent.remove();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ParentRemoveDirective.prototype, "onToggle", null);
    ParentRemoveDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[parentRemove]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ParentRemoveDirective);
    return ParentRemoveDirective;
}());



/***/ }),

/***/ "./src/app/shared/enums/globalEnums.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/enums/globalEnums.ts ***!
  \*********************************************/
/*! exports provided: DateType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateType", function() { return DateType; });
var DateType = {
    DotNet: 1,
    StringWithT: 2
};


/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
//{
//    label: '',
//    main: [
//        {
//            state: 'Dashboard',
//            name: 'Dashboard',
//            type: 'link',
//            icon: 'ti-dashboard'
//        },
//        //{
//        //    state: 'GeneratePin',
//        //    name: 'Generate Pin',
//        //    type: 'link',
//        //    icon: 'ti-key'
//        //},
//        //{
//        //    state: 'PinTransactions',
//        //    name: 'Transactions',
//        //    type: 'link',
//        //    icon: 'ti-view-list-alt'
//        //},
//        {
//            state: 'DepositSlipTransactions',
//            name: 'DS Transactions',
//            type: 'link',
//            icon: 'ti-view-list-alt'
//        },
//        {
//            state: 'Admin',
//            name: 'Admin',
//            type: 'sub',
//            icon: 'ti-layout-grid2-alt',
//            children: [
//                {
//                    state: 'RoleMaster',
//                    name: 'RoleMaster'
//                },
//                {
//                    state: 'AssignRoleRegions',
//                    name: 'AssignRoleRegions',
//                    type: 'clubChild',
//                    children: [{ state:'View', name:'View'}]
//                }
//            ]
//        }
//        //,
//        //{
//        //    state: 'basic',
//        //    name: 'Basic Components',
//        //    type: 'sub',
//        //    icon: 'ti-layout-grid2-alt',
//        //    children: [
//        //        {
//        //            state: 'breadcrumb',
//        //            name: 'Breadcrumbs'
//        //        },
//        //        {
//        //            state: 'button',
//        //            name: 'Button'
//        //        },
//        //        {
//        //            state: 'typography',
//        //            name: 'Typography'
//        //        }
//        //    ]
//        //},
//        //{
//        //    state: 'advance',
//        //    name: 'Notifications',
//        //    type: 'link',
//        //    icon: 'ti-crown'
//        //},
//    ]
//}
//,
//{
//    label: 'FORMS & TABLES',
//    main: [
//        {
//            state: 'forms',
//            name: 'Form Components',
//            type: 'link',
//            icon: 'ti-layers'
//        },
//        {
//            state: 'bootstrap-table',
//            name: 'Bootstrap Table',
//            type: 'link',
//            icon: 'ti-receipt'
//        }
//    ],
//},
//{
//    label: 'Chart And Map',
//    main: [
//        {
//            state: 'map',
//            name: 'Maps',
//            type: 'link',
//            icon: 'ti-map-alt'
//        },
//        {
//            state: 'authentication',
//            name: 'Authentication',
//            type: 'sub',
//            icon: 'ti-id-badge',
//            children: [
//                {
//                    state: 'login',
//                    type: 'link',
//                    name: 'Login',
//                    target: true
//                },
//                {
//                    state: 'forgot',
//                    name: 'Forgot Password',
//                    target: true
//                },
//                {
//                    state: 'lock-screen',
//                    name: 'Lock Screen',
//                    target: true
//                },
//            ]
//        },
//        {
//            state: 'error',
//            external: 'http://lite.codedthemes.com/flatable/error.html',
//            name: 'Error',
//            type: 'external',
//            icon: 'ti-layout-list-post',
//            target: true
//        },
//        {
//            state: 'simple-page',
//            name: 'Simple Page',
//            type: 'link',
//            icon: 'ti-layout-sidebar-left'
//        }
//    ]
//},
//{
//    label: 'Other',
//    main: [
//        {
//            state: '',
//            name: 'Menu Levels',
//            type: 'sub',
//            icon: 'ti-direction-alt',
//            children: [
//                {
//                    state: '',
//                    name: 'Menu Level 2.1',
//                    target: true
//                }, {
//                    state: '',
//                    name: 'Menu Level 2.2',
//                    type: 'sub',
//                    children: [
//                        {
//                            state: '',
//                            name: 'Menu Level 2.2.1',
//                            target: true
//                        },
//                        {
//                            state: '',
//                            name: 'Menu Level 2.2.2',
//                            target: true
//                        }
//                    ]
//                }, {
//                    state: '',
//                    name: 'Menu Level 2.3',
//                    target: true
//                }, {
//                    state: '',
//                    name: 'Menu Level 2.4',
//                    type: 'sub',
//                    children: [
//                        {
//                            state: '',
//                            name: 'Menu Level 2.4.1',
//                            target: true
//                        },
//                        {
//                            state: '',
//                            name: 'Menu Level 2.4.2',
//                            target: true
//                        }
//                    ]
//                }
//            ]
//        }
//    ]
//}
];
var MenuItems = /** @class */ (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItems.prototype.add = function (menu) {
        MENUITEMS.push(menu);
    };
    MenuItems.prototype.clearAll = function () {
        MENUITEMS.length = 0;
    };
    MenuItems = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MenuItems);
    return MenuItems;
}());



/***/ }),

/***/ "./src/app/shared/pipes/CountdownPipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/CountdownPipe.ts ***!
  \***********************************************/
/*! exports provided: CountdownPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownPipe", function() { return CountdownPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CountdownPipe = /** @class */ (function () {
    function CountdownPipe() {
    }
    CountdownPipe.prototype.transform = function (text, args) {
        var maxLength = args || 140;
        var length = text.length;
        return (maxLength - length);
    };
    CountdownPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'countdown',
            pure: false
        })
    ], CountdownPipe);
    return CountdownPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _accordion_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion/index */ "./src/app/shared/accordion/index.ts");
/* harmony import */ var _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/card-refresh.directive */ "./src/app/shared/card/card-refresh.directive.ts");
/* harmony import */ var _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card-toggle.directive */ "./src/app/shared/card/card-toggle.directive.ts");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _elements_parent_remove_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elements/parent-remove.directive */ "./src/app/shared/elements/parent-remove.directive.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ng2_toasty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-toasty */ "./node_modules/ng2-toasty/index.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _pipes_CountdownPipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/CountdownPipe */ "./src/app/shared/pipes/CountdownPipe.ts");
/* harmony import */ var jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"].forRoot(),
                ng2_toasty__WEBPACK_IMPORTED_MODULE_13__["ToastyModule"].forRoot(),
                ng_click_outside__WEBPACK_IMPORTED_MODULE_12__["ClickOutsideModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__["AngularMultiSelectModule"]
            ],
            declarations: [
                _accordion_index__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
                _accordion_index__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
                _accordion_index__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"],
                _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_4__["CardRefreshDirective"],
                _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_5__["CardToggleDirective"],
                _elements_parent_remove_directive__WEBPACK_IMPORTED_MODULE_8__["ParentRemoveDirective"],
                _shared_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"],
                _pipes_CountdownPipe__WEBPACK_IMPORTED_MODULE_15__["CountdownPipe"],
                jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_16__["jqxGridComponent"],
            ],
            exports: [
                _accordion_index__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
                _accordion_index__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
                _accordion_index__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"],
                _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_4__["CardRefreshDirective"],
                _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_5__["CardToggleDirective"],
                _elements_parent_remove_directive__WEBPACK_IMPORTED_MODULE_8__["ParentRemoveDirective"],
                _shared_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"],
                _pipes_CountdownPipe__WEBPACK_IMPORTED_MODULE_15__["CountdownPipe"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"],
                ng2_toasty__WEBPACK_IMPORTED_MODULE_13__["ToastyModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_12__["ClickOutsideModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__["AngularMultiSelectModule"],
                jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_16__["jqxGridComponent"],
            ],
            providers: [
                _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/title/title.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/title/title.component.ts ***!
  \*************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TitleComponent = /** @class */ (function () {
    function TitleComponent(router, route, titleService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })
            .subscribe(function (event) {
            var currentRoute = _this.route.root;
            var title = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (routes) {
                    if (routes.outlet === 'primary') {
                        title = routes.snapshot.data.breadcrumb;
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
            _this.titleService.setTitle('CMS Workflow | ' + title);
        });
    }
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: '<span></span>'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/app/spinner/spinkit-css/sk-chasing-dots.css":
/*!*********************************************************!*\
  !*** ./src/app/spinner/spinkit-css/sk-chasing-dots.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-chasing-dots {\n    top: 50%;\n    margin: auto;\n    width: 40px;\n    height: 40px;\n    position: relative;\n    text-align: center;\n    -webkit-animation: sk-chasingDotsRotate 2s infinite linear;\n    animation: sk-chasingDotsRotate 2s infinite linear;\n}\n\n.sk-chasing-dots .sk-child {\n    width: 60%;\n    height: 60%;\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    border-radius: 100%;\n    -webkit-animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n    animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n}\n\n.sk-chasing-dots .sk-dot2 {\n    top: auto;\n    bottom: 0;\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n\n@-webkit-keyframes sk-chasingDotsRotate {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes sk-chasingDotsRotate {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@-webkit-keyframes sk-chasingDotsBounce {\n    0%, 100% {\n        transform: scale(0);\n    }\n    50% {\n        transform: scale(1);\n    }\n}\n\n@keyframes sk-chasingDotsBounce {\n    0%, 100% {\n        transform: scale(0);\n    }\n    50% {\n        transform: scale(1);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1jaGFzaW5nLWRvdHMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkRBQTJEO0lBQzNELG1EQUFtRDtDQUN0RDs7QUFFRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1Asb0JBQW9CO0lBQ3BCLGdFQUFnRTtJQUNoRSx3REFBd0Q7Q0FDM0Q7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSTtRQUVJLDBCQUEwQjtLQUM3QjtDQUNKOztBQUVEO0lBQ0k7UUFFSSwwQkFBMEI7S0FDN0I7Q0FDSjs7QUFFRDtJQUNJO1FBRUksb0JBQW9CO0tBQ3ZCO0lBQ0Q7UUFFSSxvQkFBb0I7S0FDdkI7Q0FDSjs7QUFFRDtJQUNJO1FBRUksb0JBQW9CO0tBQ3ZCO0lBQ0Q7UUFFSSxvQkFBb0I7S0FDdkI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stY2hhc2luZy1kb3RzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1jaGFzaW5nLWRvdHMge1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY2hhc2luZ0RvdHNSb3RhdGUgMnMgaW5maW5pdGUgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogc2stY2hhc2luZ0RvdHNSb3RhdGUgMnMgaW5maW5pdGUgbGluZWFyO1xufVxuXG4uc2stY2hhc2luZy1kb3RzIC5zay1jaGlsZCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jaGFzaW5nRG90c0JvdW5jZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IHNrLWNoYXNpbmdEb3RzQm91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4uc2stY2hhc2luZy1kb3RzIC5zay1kb3QyIHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1jaGFzaW5nRG90c1JvdGF0ZSB7XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2stY2hhc2luZ0RvdHNSb3RhdGUge1xuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stY2hhc2luZ0RvdHNCb3VuY2Uge1xuICAgIDAlLCAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWNoYXNpbmdEb3RzQm91bmNlIHtcbiAgICAwJSwgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/spinner/spinkit-css/sk-cube-grid.css":
/*!******************************************************!*\
  !*** ./src/app/spinner/spinkit-css/sk-cube-grid.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-cube-grid {\n    position: relative;\n    top: 50%;\n    width: 40px;\n    height: 40px;\n    margin: auto;\n}\n\n.sk-cube-grid .sk-cube {\n    width: 33%;\n    height: 33%;\n    float: left;\n    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n\n.sk-cube-grid .sk-cube1 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n.sk-cube-grid .sk-cube2 {\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s;\n}\n\n.sk-cube-grid .sk-cube3 {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n}\n\n.sk-cube-grid .sk-cube4 {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n\n.sk-cube-grid .sk-cube5 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n.sk-cube-grid .sk-cube6 {\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s;\n}\n\n.sk-cube-grid .sk-cube7 {\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n}\n\n.sk-cube-grid .sk-cube8 {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n\n.sk-cube-grid .sk-cube9 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n@-webkit-keyframes sk-cubeGridScaleDelay {\n    0%, 70%, 100% {\n        transform: scale3D(1, 1, 1);\n    }\n    35% {\n        transform: scale3D(0, 0, 1);\n    }\n}\n\n@keyframes sk-cubeGridScaleDelay {\n    0%, 70%, 100% {\n        transform: scale3D(1, 1, 1);\n    }\n    35% {\n        transform: scale3D(0, 0, 1);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1jdWJlLWdyaWQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixtRUFBbUU7SUFDbkUsMkRBQTJEO0NBQzlEOztBQUVEO0lBQ0ksOEJBQThCO0lBQzlCLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLDhCQUE4QjtJQUM5QixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksOEJBQThCO0lBQzlCLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLDhCQUE4QjtJQUM5QixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksNEJBQTRCO0lBQzVCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLDhCQUE4QjtJQUM5QixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0k7UUFFSSw0QkFBNEI7S0FDL0I7SUFDRDtRQUVJLDRCQUE0QjtLQUMvQjtDQUNKOztBQUVEO0lBQ0k7UUFFSSw0QkFBNEI7S0FDL0I7SUFDRDtRQUVJLDRCQUE0QjtLQUMvQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1jdWJlLWdyaWQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLWN1YmUtZ3JpZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmUge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgaGVpZ2h0OiAzMyU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWN1YmVHcmlkU2NhbGVEZWxheSAxLjNzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmUxIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmUyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmUzIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU0IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XG59XG5cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU1IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU2IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU3IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTgge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbn1cblxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTkge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWN1YmVHcmlkU2NhbGVEZWxheSB7XG4gICAgMCUsIDcwJSwgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgfVxuICAgIDM1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWN1YmVHcmlkU2NhbGVEZWxheSB7XG4gICAgMCUsIDcwJSwgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgfVxuICAgIDM1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/spinner/spinkit-css/sk-double-bounce.css":
/*!**********************************************************!*\
  !*** ./src/app/spinner/spinkit-css/sk-double-bounce.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-double-bounce {\n    top: 50%;\n    width: 40px;\n    height: 40px;\n    position: relative;\n    margin: auto;\n}\n\n.double-bounce1, .double-bounce2 {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n    animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.double-bounce2 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-bounce {\n    0%, 100% {\n        -webkit-transform: scale(0.0)\n    }\n    50% {\n        -webkit-transform: scale(1.0)\n    }\n}\n\n@keyframes sk-bounce {\n    0%, 100% {\n        transform: scale(0.0);\n        -webkit-transform: scale(0.0);\n    }\n    50% {\n        transform: scale(1.0);\n        -webkit-transform: scale(1.0);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1kb3VibGUtYm91bmNlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtJQUNSLHVEQUF1RDtJQUN2RCwrQ0FBK0M7Q0FDbEQ7O0FBRUQ7SUFDSSwrQkFBK0I7SUFDL0IsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0k7UUFDSSw2QkFBNkI7S0FDaEM7SUFDRDtRQUNJLDZCQUE2QjtLQUNoQztDQUNKOztBQUVEO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIsOEJBQThCO0tBQ2pDO0lBQ0Q7UUFDSSxzQkFBc0I7UUFDdEIsOEJBQThCO0tBQ2pDO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWRvdWJsZS1ib3VuY2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLWRvdWJsZS1ib3VuY2Uge1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZG91YmxlLWJvdW5jZTEsIC5kb3VibGUtYm91bmNlMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4uZG91YmxlLWJvdW5jZTIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlIHtcbiAgICAwJSwgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApXG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApXG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gICAgMCUsIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/spinner/spinkit-css/sk-line-material.css":
/*!**********************************************************!*\
  !*** ./src/app/spinner/spinkit-css/sk-line-material.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-line-material {\r\n    top: 0  ;\r\n    position: relative;\r\n    margin: auto;\r\n    width: 100%;\r\n}\r\n\r\n.sk-line-material .sk-child {\r\n    width: 100%;\r\n    height: 4px;\r\n    position: absolute;\r\n    top:0;\r\n    display: inline-block;\r\n    transform-origin: 0% 0%;\r\n    -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\r\n    animation: sk-line-material 2s ease-in-out 0s infinite both;\r\n}\r\n\r\n@-webkit-keyframes sk-line-material {\r\n    0%, 80%, 100% {\r\n        transform: scaleX(0);\r\n    }\r\n    40% {\r\n        transform: scaleX(1);\r\n    }\r\n}\r\n\r\n@keyframes sk-line-material {\r\n    0% {\r\n        transform: scaleX(0);\r\n    }\r\n    100% {\r\n        transform: scaleX(1);\r\n    }\r\n}\r\n\r\n#http-loader {\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 9999;\r\n}\r\n\r\n.loader-bg {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    filter: alpha(opacity=70);\r\n    opacity: 1;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n.colored-parent, .colored > div {\r\n    background-color: rgba(26, 188, 156, 0.80);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLE1BQU07SUFDTixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLG9FQUFvRTtJQUNwRSw0REFBNEQ7Q0FDL0Q7O0FBRUQ7SUFDSTtRQUVJLHFCQUFxQjtLQUN4QjtJQUNEO1FBRUkscUJBQXFCO0tBQ3hCO0NBQ0o7O0FBRUQ7SUFDSTtRQUVJLHFCQUFxQjtLQUN4QjtJQUNEO1FBRUkscUJBQXFCO0tBQ3hCO0NBQ0o7O0FBRUQ7SUFDSSxPQUFPO0lBQ1AsUUFBUTtJQUNSLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLGdDQUFnQztDQUNuQzs7QUFFRDtJQUNJLDJDQUEyQztDQUM5QyIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stbGluZS1tYXRlcmlhbC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stbGluZS1tYXRlcmlhbCB7XHJcbiAgICB0b3A6IDAgIDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2stbGluZS1tYXRlcmlhbCAuc2stY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xyXG4gICAgYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcclxuICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNodHRwLWxvYWRlciB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4ubG9hZGVyLWJnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xyXG59XHJcblxyXG4uY29sb3JlZC1wYXJlbnQsIC5jb2xvcmVkID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDE4OCwgMTU2LCAwLjgwKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/spinner/spinkit-css/sk-rotating-plane.css":
/*!***********************************************************!*\
  !*** ./src/app/spinner/spinkit-css/sk-rotating-plane.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-rotating-plane {\n    position: relative;\n    top: 50%;\n    width: 40px;\n    height: 40px;\n    margin: auto;\n    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n    animation: sk-rotateplane 1.2s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-rotateplane {\n    0% {\n        -webkit-transform: perspective(120px)\n    }\n    50% {\n        -webkit-transform: perspective(120px) rotateY(180deg)\n    }\n    100% {\n        -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)\n    }\n}\n\n@keyframes sk-rotateplane {\n    0% {\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n    }\n    50% {\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n    }\n    100% {\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1yb3RhdGluZy1wbGFuZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxvREFBb0Q7Q0FDdkQ7O0FBRUQ7SUFDSTtRQUNJLHFDQUFxQztLQUN4QztJQUNEO1FBQ0kscURBQXFEO0tBQ3hEO0lBQ0Q7UUFDSSxxRUFBcUU7S0FDeEU7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksMERBQTBEO1FBQzFELGlFQUFpRTtLQUNwRTtJQUNEO1FBQ0ksK0RBQStEO1FBQy9ELHNFQUFzRTtLQUN6RTtJQUNEO1FBQ0ksa0VBQWtFO1FBQ2xFLDBFQUEwRTtLQUM3RTtDQUNKIiwiZmlsZSI6InNyYy9hcHAvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1yb3RhdGluZy1wbGFuZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stcm90YXRpbmctcGxhbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1yb3RhdGVwbGFuZSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweClcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZylcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpIHJvdGF0ZVgoMTgwZGVnKVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZyk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpXG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/spinner/spinkit-css/sk-spinner-pulse.css":
/*!**********************************************************!*\
  !*** ./src/app/spinner/spinkit-css/sk-spinner-pulse.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-spinner-pulse {\n    position: relative;\n    top: 50%;\n    width: 40px;\n    height: 40px;\n    margin: auto;\n    border-radius: 100%;\n    -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;\n    animation: sk-pulseScaleOut 1s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-pulseScaleOut {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n        opacity: 0;\n    }\n}\n\n@keyframes sk-pulseScaleOut {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n        opacity: 0;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1zcGlubmVyLXB1bHNlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLDREQUE0RDtJQUM1RCxvREFBb0Q7Q0FDdkQ7O0FBRUQ7SUFDSTtRQUVJLG9CQUFvQjtLQUN2QjtJQUNEO1FBRUksb0JBQW9CO1FBQ3BCLFdBQVc7S0FDZDtDQUNKOztBQUVEO0lBQ0k7UUFFSSxvQkFBb0I7S0FDdkI7SUFDRDtRQUVJLG9CQUFvQjtRQUNwQixXQUFXO0tBQ2Q7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stc3Bpbm5lci1wdWxzZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stc3Bpbm5lci1wdWxzZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stcHVsc2VTY2FsZU91dCAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IHNrLXB1bHNlU2NhbGVPdXQgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1wdWxzZVNjYWxlT3V0IHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2stcHVsc2VTY2FsZU91dCB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/spinner/spinkit-css/sk-three-bounce.css":
/*!*********************************************************!*\
  !*** ./src/app/spinner/spinkit-css/sk-three-bounce.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-three-bounce {\n    top: 50%;\n    position: relative;\n    margin: auto;\n    width: 80px;\n    text-align: center;\n}\n\n.sk-three-bounce .sk-child {\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\n    animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\n}\n\n.sk-three-bounce .sk-bounce1 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n}\n\n.sk-three-bounce .sk-bounce2 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-three-bounce {\n    0%, 80%, 100% {\n        transform: scale(0);\n    }\n    40% {\n        transform: scale(1);\n    }\n}\n\n@keyframes sk-three-bounce {\n    0%, 80%, 100% {\n        transform: scale(0);\n    }\n    40% {\n        transform: scale(1);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlua2l0LWNzcy9zay10aHJlZS1ib3VuY2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixxRUFBcUU7SUFDckUsNkRBQTZEO0NBQ2hFOztBQUVEO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdCQUF3QjtDQUMzQjs7QUFFRDtJQUNJLGdDQUFnQztJQUNoQyx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSTtRQUVJLG9CQUFvQjtLQUN2QjtJQUNEO1FBRUksb0JBQW9CO0tBQ3ZCO0NBQ0o7O0FBRUQ7SUFDSTtRQUVJLG9CQUFvQjtLQUN2QjtJQUNEO1FBRUksb0JBQW9CO0tBQ3ZCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLXRocmVlLWJvdW5jZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stdGhyZWUtYm91bmNlIHtcbiAgICB0b3A6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNrLXRocmVlLWJvdW5jZSAuc2stY2hpbGQge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stdGhyZWUtYm91bmNlIDEuNHMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcbiAgICBhbmltYXRpb246IHNrLXRocmVlLWJvdW5jZSAxLjRzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XG59XG5cbi5zay10aHJlZS1ib3VuY2UgLnNrLWJvdW5jZTEge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG59XG5cbi5zay10aHJlZS1ib3VuY2UgLnNrLWJvdW5jZTIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay10aHJlZS1ib3VuY2Uge1xuICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2stdGhyZWUtYm91bmNlIHtcbiAgICAwJSwgODAlLCAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/spinner/spinkit-css/sk-wandering-cubes.css":
/*!************************************************************!*\
  !*** ./src/app/spinner/spinkit-css/sk-wandering-cubes.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-wandering-cubes {\n    top: 50%;\n    margin: auto;\n    width: 40px;\n    height: 40px;\n    position: relative;\n}\n\n.sk-wandering-cubes .sk-cube {\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\n    animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\n}\n\n.sk-wandering-cubes .sk-cube2 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n\n@-webkit-keyframes sk-wanderingCube {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: translateX(30px) rotate(-90deg) scale(0.5);\n    }\n    50% {\n        /* Hack to make FF rotate in the right direction */\n        transform: translateX(30px) translateY(30px) rotate(-179deg);\n    }\n    50.1% {\n        transform: translateX(30px) translateY(30px) rotate(-180deg);\n    }\n    75% {\n        transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n    }\n    100% {\n        transform: rotate(-360deg);\n    }\n}\n\n@keyframes sk-wanderingCube {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: translateX(30px) rotate(-90deg) scale(0.5);\n    }\n    50% {\n        /* Hack to make FF rotate in the right direction */\n        transform: translateX(30px) translateY(30px) rotate(-179deg);\n    }\n    50.1% {\n        transform: translateX(30px) translateY(30px) rotate(-180deg);\n    }\n    75% {\n        transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n    }\n    100% {\n        transform: rotate(-360deg);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlua2l0LWNzcy9zay13YW5kZXJpbmctY3ViZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0lBQ1IseUVBQXlFO0lBQ3pFLGlFQUFpRTtDQUNwRTs7QUFFRDtJQUNJLCtCQUErQjtJQUMvQix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSTtRQUVJLHdCQUF3QjtLQUMzQjtJQUNEO1FBRUksc0RBQXNEO0tBQ3pEO0lBQ0Q7UUFDSSxtREFBbUQ7UUFFbkQsNkRBQTZEO0tBQ2hFO0lBQ0Q7UUFFSSw2REFBNkQ7S0FDaEU7SUFDRDtRQUVJLHFFQUFxRTtLQUN4RTtJQUNEO1FBRUksMkJBQTJCO0tBQzlCO0NBQ0o7O0FBRUQ7SUFDSTtRQUVJLHdCQUF3QjtLQUMzQjtJQUNEO1FBRUksc0RBQXNEO0tBQ3pEO0lBQ0Q7UUFDSSxtREFBbUQ7UUFFbkQsNkRBQTZEO0tBQ2hFO0lBQ0Q7UUFFSSw2REFBNkQ7S0FDaEU7SUFDRDtRQUVJLHFFQUFxRTtLQUN4RTtJQUNEO1FBRUksMkJBQTJCO0tBQzlCO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLXdhbmRlcmluZy1jdWJlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2std2FuZGVyaW5nLWN1YmVzIHtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNrLXdhbmRlcmluZy1jdWJlcyAuc2stY3ViZSB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2std2FuZGVyaW5nQ3ViZSAxLjhzIGVhc2UtaW4tb3V0IC0xLjhzIGluZmluaXRlIGJvdGg7XG4gICAgYW5pbWF0aW9uOiBzay13YW5kZXJpbmdDdWJlIDEuOHMgZWFzZS1pbi1vdXQgLTEuOHMgaW5maW5pdGUgYm90aDtcbn1cblxuLnNrLXdhbmRlcmluZy1jdWJlcyAuc2stY3ViZTIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2std2FuZGVyaW5nQ3ViZSB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIC8qIEhhY2sgdG8gbWFrZSBGRiByb3RhdGUgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvbiAqL1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMTc5ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xNzlkZWcpO1xuICAgIH1cbiAgICA1MC4xJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xODBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE4MGRlZyk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLXdhbmRlcmluZ0N1YmUge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICAvKiBIYWNrIHRvIG1ha2UgRkYgcm90YXRlIGluIHRoZSByaWdodCBkaXJlY3Rpb24gKi9cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE3OWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMTc5ZGVnKTtcbiAgICB9XG4gICAgNTAuMSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xODBkZWcpO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/spinner/spinkit-css/sk-wave.css":
/*!*************************************************!*\
  !*** ./src/app/spinner/spinkit-css/sk-wave.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-wave {\n    position: relative;\n    top: 50%;\n    margin: auto;\n    width: 50px;\n    height: 40px;\n    text-align: center;\n    font-size: 10px;\n}\n\n.sk-wave .sk-rect {\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n    -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n    animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n}\n\n.sk-wave .sk-rect1 {\n    -webkit-animation-delay: -1.2s;\n    animation-delay: -1.2s;\n}\n\n.sk-wave .sk-rect2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n}\n\n.sk-wave .sk-rect3 {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n\n.sk-wave .sk-rect5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n}\n\n.sk-wave .sk-rect4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n\n@-webkit-keyframes sk-waveStretchDelay {\n    0%, 40%, 100% {\n        transform: scaleY(0.4);\n    }\n    20% {\n        transform: scaleY(1);\n    }\n}\n\n@keyframes sk-waveStretchDelay {\n    0%, 40%, 100% {\n        transform: scaleY(0.4);\n    }\n    20% {\n        transform: scaleY(1);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlua2l0LWNzcy9zay13YXZlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGlFQUFpRTtJQUNqRSx5REFBeUQ7Q0FDNUQ7O0FBRUQ7SUFDSSwrQkFBK0I7SUFDL0IsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksK0JBQStCO0lBQy9CLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSwrQkFBK0I7SUFDL0IsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksK0JBQStCO0lBQy9CLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJO1FBRUksdUJBQXVCO0tBQzFCO0lBQ0Q7UUFFSSxxQkFBcUI7S0FDeEI7Q0FDSjs7QUFFRDtJQUNJO1FBRUksdUJBQXVCO0tBQzFCO0lBQ0Q7UUFFSSxxQkFBcUI7S0FDeEI7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2std2F2ZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2std2F2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnNrLXdhdmUgLnNrLXJlY3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2std2F2ZVN0cmV0Y2hEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogc2std2F2ZVN0cmV0Y2hEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4uc2std2F2ZSAuc2stcmVjdDEge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4ycztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjJzO1xufVxuXG4uc2std2F2ZSAuc2stcmVjdDIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xufVxuXG4uc2std2F2ZSAuc2stcmVjdDMge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG5cbi5zay13YXZlIC5zay1yZWN0NSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG59XG5cbi5zay13YXZlIC5zay1yZWN0NCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay13YXZlU3RyZXRjaERlbGF5IHtcbiAgICAwJSwgNDAlLCAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2std2F2ZVN0cmV0Y2hEZWxheSB7XG4gICAgMCUsIDQwJSwgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/spinner/spinkits.ts":
/*!*************************************!*\
  !*** ./src/app/spinner/spinkits.ts ***!
  \*************************************/
/*! exports provided: Spinkit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinkit", function() { return Spinkit; });
var Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
    skLine: 'sk-line-material'
};


/***/ }),

/***/ "./src/app/spinner/spinner.component.css":
/*!***********************************************!*\
  !*** ./src/app/spinner/spinner.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#http-loader {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    z-index: 9999;\n}\n\n.loader-bg {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    filter: alpha(opacity=70);\n    opacity: .7;\n    background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n    background-color: #333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxPQUFPO0lBQ1AsUUFBUTtJQUNSLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2h0dHAtbG9hZGVyIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk7XG59XG5cbi5sb2FkZXItYmcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgICBvcGFjaXR5OiAuNztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uY29sb3JlZC1wYXJlbnQsIC5jb2xvcmVkID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spinkits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinkits */ "./src/app/spinner/spinkits.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"];
        this.backgroundColor = '#07002A';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"].skCubeGrid;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                _this.isSpinnerVisible = false;
            }
        }, function (error) {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "spinner", void 0);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spinner',
            template: __webpack_require__(/*! ./spinner.template.html */ "./src/app/spinner/spinner.template.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/spinner/spinner.component.css"), __webpack_require__(/*! ./spinkit-css/sk-double-bounce.css */ "./src/app/spinner/spinkit-css/sk-double-bounce.css"), __webpack_require__(/*! ./spinkit-css/sk-chasing-dots.css */ "./src/app/spinner/spinkit-css/sk-chasing-dots.css"), __webpack_require__(/*! ./spinkit-css/sk-cube-grid.css */ "./src/app/spinner/spinkit-css/sk-cube-grid.css"), __webpack_require__(/*! ./spinkit-css/sk-rotating-plane.css */ "./src/app/spinner/spinkit-css/sk-rotating-plane.css"), __webpack_require__(/*! ./spinkit-css/sk-spinner-pulse.css */ "./src/app/spinner/spinkit-css/sk-spinner-pulse.css"), __webpack_require__(/*! ./spinkit-css/sk-three-bounce.css */ "./src/app/spinner/spinkit-css/sk-three-bounce.css"), __webpack_require__(/*! ./spinkit-css/sk-wandering-cubes.css */ "./src/app/spinner/spinkit-css/sk-wandering-cubes.css"), __webpack_require__(/*! ./spinkit-css/sk-wave.css */ "./src/app/spinner/spinkit-css/sk-wave.css"), __webpack_require__(/*! ./spinkit-css/sk-line-material.css */ "./src/app/spinner/spinkit-css/sk-line-material.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Document])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.template.html":
/*!***********************************************!*\
  !*** ./src/app/spinner/spinner.template.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\r\n    <div class=\"loader-bg\">\r\n        <!--sk-cube-grid-->\r\n        <div class=\"sk-cube-grid\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skCubeGrid\">\r\n            <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube3\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube4\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube5\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube6\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube7\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube8\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube9\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n        <!--sk-rotating-plane-->\r\n        <div class=\"sk-rotating-plane colored-parent\" *ngIf=\"spinner === Spinkit.skRotatingPlane\" [style.background-color]='backgroundColor'></div>\r\n        <!--sk-double-bounce-->\r\n        <div class=\"sk-double-bounce\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skDoubleBounce\">\r\n            <div class=\"double-bounce1\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"double-bounce2\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n        <!--sk-wave-->\r\n        <div class=\"sk-wave\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skWave\">\r\n            <div class=\"sk-rect sk-rect1\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-rect sk-rect2\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-rect sk-rect3\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-rect sk-rect4\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-rect sk-rect5\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n        <!--sk-wandering-cubes-->\r\n        <div class=\"sk-wandering-cubes\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skWanderingCubes\">\r\n            <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n        <!--sk-spinner-pulse-->\r\n        <div class=\"sk-spinner sk-spinner-pulse colored-parent\" *ngIf=\"spinner === Spinkit.skSpinnerPulse\" [style.background-color]='backgroundColor'></div>\r\n        <!--sk-chasing-dots-->\r\n        <div class=\"sk-chasing-dots\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skChasingDots\">\r\n            <div class=\"sk-child sk-dot1\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-child sk-dot2\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n        <!--sk-three-bounce-->\r\n        <div class=\"sk-three-bounce\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skThreeBounce\">\r\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-child sk-bounce2\" [style.background-color]='backgroundColor'></div>\r\n            <div class=\"sk-child sk-bounce3\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n        <!-- material-line -->\r\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\r\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ticketViewer/commentsComponent/CommentsComponent.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/ticketViewer/commentsComponent/CommentsComponent.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".k-input {\r\n  color:blue;\r\n}\r\n\r\n.k-message-box .k-button{\r\n  color:orangered;\r\n}\r\n\r\n.icon_color_close {\r\n  color: red;\r\n  padding-top: 9px;\r\n}\r\n\r\n/*.k-chat {\r\n  height: 622px;\r\n}*/\r\n\r\n.k-chat .k-message-group.k-alt {\r\n  font-size: 12px;\r\n}\r\n\r\n.comment_hover {\r\n  position: relative;\r\n}\r\n\r\n.close_comment_text {\r\n  visibility: hidden;\r\n  width: 103px;\r\n  background-color: #fff;\r\n  color: #007bff;\r\n  text-align: left;\r\n  font-size: 15px;\r\n  position: absolute;\r\n  top: -1px;\r\n  left: -45px;\r\n}\r\n\r\n.comment_hover:hover .close_comment_text {\r\n  visibility: visible;\r\n}\r\n\r\n.k-chat .k-message-group:not(.k-alt) .k-message-time {\r\n  margin-top: 41px;\r\n  color: blue;\r\n  left: 0;\r\n}\r\n\r\n.k-chat .k-message-list-content {\r\n  width: 337px;\r\n}\r\n\r\n.k-chat .k-message {\r\n  max-width: 96%;\r\n}\r\n\r\n.k-chat .k-alt .k-bubble {\r\n  border-color: #87ceeb;\r\n  color: black;\r\n  background-color: #87ceeb;\r\n}\r\n\r\n.k-chat .k-bubble {\r\n  border-color: #C0C0C0;\r\n  color: #656565;\r\n  background-color: #C0C0C0;\r\n}\r\n\r\n/*.message {\r\n  border-radius: 50px;\r\n  margin: 0 15px 10px;\r\n  padding: 15px 20px;\r\n  position: relative;\r\n  font-weight: bold;\r\n}\r\n.message.to {\r\n    background-color: #2095FE;\r\n    color: #fff;\r\n    margin-left: 100px;\r\n    text-align: right;\r\n\r\n}\r\n.message.from {\r\n    background-color: #E5E4E9;\r\n    color: #363636;\r\n    margin-right: 100px;\r\n  }\r\n\r\n.message.to + .message.to,\r\n.message.from + .message.from {\r\n      margin-top: -10px;\r\n    }*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0Vmlld2VyL2NvbW1lbnRzQ29tcG9uZW50L0NvbW1lbnRzQ29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0NBQ1o7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0NBQ2xCOztBQUNEOztHQUVHOztBQUNIO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUdEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFFBQVE7Q0FDVDs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFHRDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsMEJBQTBCO0NBQzNCOztBQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVCSyIsImZpbGUiOiJzcmMvYXBwL3RpY2tldFZpZXdlci9jb21tZW50c0NvbXBvbmVudC9Db21tZW50c0NvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmstaW5wdXQge1xyXG4gIGNvbG9yOmJsdWU7XHJcbn1cclxuXHJcbi5rLW1lc3NhZ2UtYm94IC5rLWJ1dHRvbntcclxuICBjb2xvcjpvcmFuZ2VyZWQ7XHJcbn1cclxuXHJcbi5pY29uX2NvbG9yX2Nsb3NlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIHBhZGRpbmctdG9wOiA5cHg7XHJcbn1cclxuLyouay1jaGF0IHtcclxuICBoZWlnaHQ6IDYyMnB4O1xyXG59Ki9cclxuLmstY2hhdCAuay1tZXNzYWdlLWdyb3VwLmstYWx0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jb21tZW50X2hvdmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uY2xvc2VfY29tbWVudF90ZXh0IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTFweDtcclxuICBsZWZ0OiAtNDVweDtcclxufVxyXG5cclxuLmNvbW1lbnRfaG92ZXI6aG92ZXIgLmNsb3NlX2NvbW1lbnRfdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmstY2hhdCAuay1tZXNzYWdlLWdyb3VwOm5vdCguay1hbHQpIC5rLW1lc3NhZ2UtdGltZSB7XHJcbiAgbWFyZ2luLXRvcDogNDFweDtcclxuICBjb2xvcjogYmx1ZTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uay1jaGF0IC5rLW1lc3NhZ2UtbGlzdC1jb250ZW50IHtcclxuICB3aWR0aDogMzM3cHg7XHJcbn1cclxuXHJcblxyXG4uay1jaGF0IC5rLW1lc3NhZ2Uge1xyXG4gIG1heC13aWR0aDogOTYlO1xyXG59XHJcblxyXG4uay1jaGF0IC5rLWFsdCAuay1idWJibGUge1xyXG4gIGJvcmRlci1jb2xvcjogIzg3Y2VlYjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3Y2VlYjtcclxufVxyXG5cclxuLmstY2hhdCAuay1idWJibGUge1xyXG4gIGJvcmRlci1jb2xvcjogI0MwQzBDMDtcclxuICBjb2xvcjogIzY1NjU2NTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzBDMEMwO1xyXG59XHJcbiAgLyoubWVzc2FnZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBtYXJnaW46IDAgMTVweCAxMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLm1lc3NhZ2UudG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwOTVGRTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG59XHJcbi5tZXNzYWdlLmZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTRFOTtcclxuICAgIGNvbG9yOiAjMzYzNjM2O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuICB9XHJcblxyXG4ubWVzc2FnZS50byArIC5tZXNzYWdlLnRvLFxyXG4ubWVzc2FnZS5mcm9tICsgLm1lc3NhZ2UuZnJvbSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgfSovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ticketViewer/commentsComponent/CommentsComponent.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/ticketViewer/commentsComponent/CommentsComponent.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"icofont-2x\" style=\"color:dodgerblue\">Comments</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"col-sm-12\">\r\n            <a href=\"javascript:void(0);\" (click)=\"onCloseClickEvent($event)\" *ngIf=\"showClose\" >\r\n              <i class=\"icofont icofont-close icofont-2x float-right icon_color_close comment_hover\">\r\n                <span class=\"close_comment_text\">Close Comments</span>\r\n              </i>\r\n              </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\" >\r\n\r\n\r\n          <kendo-chat class=\"float-right\" [messages]=\"feed | async\"\r\n                      [user]=\"user\"\r\n                      (sendMessage)=\"sendMessage($event)\">\r\n          </kendo-chat>\r\n\r\n\r\n          <!--<mat-card>\r\n    <div *ngFor=\"let message of messages | async\">\r\n\r\n      <div class=\"message\">\r\n        {{message.content}}\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </mat-card>\r\n  <textarea [(ngModel)]=\"formValue\" (keydown.tab)=\"sendMessage()\" type=\"text\" placeholder=\"Type your Comments\"></textarea><br />\r\n  <button (click)=\"sendMessage()\">Send</button>-->\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ticketViewer/commentsComponent/commentsComponent.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/ticketViewer/commentsComponent/commentsComponent.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CommentsComponentComponent, MessageCustome, UserCustome, AddCommentsModel, commentsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponentComponent", function() { return CommentsComponentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCustome", function() { return MessageCustome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCustome", function() { return UserCustome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentsModel", function() { return AddCommentsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentsView", function() { return commentsView; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _commentsComponent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentsComponent.service */ "./src/app/ticketViewer/commentsComponent/commentsComponent.service.ts");
/* harmony import */ var _ticketViewer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ticketViewer.service */ "./src/app/ticketViewer/ticketViewer.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_app_commonFunctionality__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.commonFunctionality */ "./src/app/app.commonFunctionality.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CommentsComponentComponent = /** @class */ (function () {
    //sendMessage() {
    //  this.services.converse(this.formValue);
    //  this.formValue = '';
    //}
    function CommentsComponentComponent(_eref, services, commentsServices, sanitize, cf) {
        var _this = this;
        this._eref = _eref;
        this.services = services;
        this.commentsServices = commentsServices;
        this.sanitize = sanitize;
        this.cf = cf;
        this.showClose = false;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.commentsModel = new commentsView();
        this.user = {
            id: 1,
            name: '',
        };
        this.bot = {
            id: 0,
            name: '',
        };
        this.local = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.usersArray = [];
        this.messagesArray = [];
        this.cf.GetUserDetails().subscribe(function (data) {
            if (data.Success) {
                _this.EmployeeName = data.Entity.EmpFullName;
            }
        });
        //const hello: Message = {
        //  author: this.bot,
        //  text: 'Hello, this is a demo bot.I dont do much, but I can count symbols!',
        //  timestamp: new Date(),
        //};
        //this.feed = merge(
        //  this.local,
        //).pipe(
        //  // ... and emit an array of all messages
        //  scan((acc: Message[], x: Message) => [...acc, x], [])
        //);
    }
    CommentsComponentComponent.prototype.onClick = function (event) {
        //if (!this._eref.nativeElement.contains(event.target)) // or some similar check
        //{
        //}
    };
    CommentsComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentsServices.CallComments(this.commentTicketID).subscribe(function (result) {
            var length = result.Entity.TableList.length;
            for (var i = 0; i < length; i++) {
                _this.users = new UserCustome();
                _this.messages = new MessageCustome();
                switch (result.Entity.TableList[i].CustCommentsType) {
                    case 'MSP':
                    case 'msp':
                    case 'Msp':
                        _this.users.id = 0;
                        _this.users.name = result.Entity.TableList[i].AssignedTo;
                        _this.usersArray.push(_this.users);
                        //console.log('MSP User Pusing=>');
                        //console.log(this.usersArray)
                        _this.messages.author = _this.usersArray[i];
                        _this.messages.text = result.Entity.TableList[i].CustComments;
                        _this.messages.timestamp = new Date(result.Entity.TableList[i].CreatedDate);
                        //this.messagePosting(this.messages);
                        _this.messagesArray.push(_this.messages);
                        //console.log('MSP messageArray Pusing=>');
                        //console.log(this.messagesArray);
                        break;
                    case 'ADMIN':
                    case 'admin':
                    case 'Admin':
                        _this.users.id = 0;
                        _this.users.name = result.Entity.TableList[i].AssignedTo;
                        _this.usersArray.push(_this.users);
                        //console.log('MSP User Pusing=>');
                        //console.log(this.usersArray)
                        _this.messages.author = _this.usersArray[i];
                        _this.messages.text = result.Entity.TableList[i].CustComments;
                        _this.messages.timestamp = new Date(result.Entity.TableList[i].CreatedDate);
                        //this.messagePosting(this.messages);
                        _this.messagesArray.push(_this.messages);
                        //console.log('MSP messageArray Pusing=>');
                        //console.log(this.messagesArray);
                        break;
                    case 'HO':
                    case 'ho':
                    case 'Ho':
                        _this.users.id = 0;
                        _this.users.name = result.Entity.TableList[i].AssignedTo;
                        _this.usersArray.push(_this.users);
                        //console.log('HO User Pusing=>');
                        //console.log(this.usersArray)
                        _this.messages.author = _this.usersArray[i];
                        _this.messages.text = result.Entity.TableList[i].CustComments;
                        _this.messages.timestamp = new Date(result.Entity.TableList[i].CreatedDate);
                        //this.messagePosting(this.messages);
                        _this.messagesArray.push(_this.messages);
                        //console.log('HO messageArray Pusing=>');
                        //console.log(this.messagesArray);
                        break;
                    default:
                        _this.users.id = 0;
                        _this.users.name = result.Entity.TableList[i].AssignedTo;
                        _this.usersArray.push(_this.users);
                        //console.log('HO User Pusing=>');
                        //console.log(this.usersArray)
                        _this.messages.author = _this.usersArray[i];
                        _this.messages.text = result.Entity.TableList[i].CustComments;
                        _this.messages.timestamp = new Date(result.Entity.TableList[i].CreatedDate);
                        //this.messagePosting(this.messages);
                        _this.messagesArray.push(_this.messages);
                        //console.log('HO messageArray Pusing=>');
                        //console.log(this.messagesArray);
                        break;
                }
            }
            //console.log(this.messageArray);
            _this.feed = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(_this.messagesArray), _this.local).pipe(
            // ... and emit an array of all messages
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (acc, x) { return acc.concat([x]); }, []));
        });
    };
    CommentsComponentComponent.prototype.messagePosting = function (messages) {
        //this.feed = merge(
        //  from([messages]),
        //  this.local,
        //).pipe(
        //  // ... and emit an array of all messages
        //  scan((acc: Message[], x: Message) => [...acc, x], [])
        //);
    };
    CommentsComponentComponent.prototype.sendMessage = function (e) {
        this.user.id = 0;
        this.user.name = this.EmployeeName;
        this.local.next(e.message);
        this.commentsModel.TicketID = this.commentTicketID;
        this.commentsModel.CustComments = e.message.text;
        this.services.CallUpdateComments(this.commentsModel).subscribe();
    };
    CommentsComponentComponent.prototype.onCloseClickEvent = function () {
        this.onClose.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentsComponentComponent.prototype, "commentTicketID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CommentsComponentComponent.prototype, "showClose", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommentsComponentComponent.prototype, "onClose", void 0);
    CommentsComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'CommentsComponent',
            template: __webpack_require__(/*! ./CommentsComponent.component.html */ "./src/app/ticketViewer/commentsComponent/CommentsComponent.component.html"),
            styles: [__webpack_require__(/*! ./CommentsComponent.component.css */ "./src/app/ticketViewer/commentsComponent/CommentsComponent.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _commentsComponent_service__WEBPACK_IMPORTED_MODULE_3__["CommentsComponentService"], _ticketViewer_service__WEBPACK_IMPORTED_MODULE_4__["TicketViewerServices"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], src_app_app_commonFunctionality__WEBPACK_IMPORTED_MODULE_6__["CommonFunctionality"]])
    ], CommentsComponentComponent);
    return CommentsComponentComponent;
}());

var MessageCustome = /** @class */ (function () {
    function MessageCustome() {
    }
    return MessageCustome;
}());

var UserCustome = /** @class */ (function () {
    function UserCustome() {
    }
    return UserCustome;
}());

var AddCommentsModel = /** @class */ (function () {
    function AddCommentsModel() {
    }
    return AddCommentsModel;
}());

var commentsView = /** @class */ (function () {
    function commentsView() {
    }
    return commentsView;
}());



/***/ }),

/***/ "./src/app/ticketViewer/commentsComponent/commentsComponent.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ticketViewer/commentsComponent/commentsComponent.module.ts ***!
  \****************************************************************************/
/*! exports provided: CrudTicketCommentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudTicketCommentsModule", function() { return CrudTicketCommentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _commentsComponent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentsComponent.component */ "./src/app/ticketViewer/commentsComponent/commentsComponent.component.ts");
/* harmony import */ var _commentsComponent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentsComponent.service */ "./src/app/ticketViewer/commentsComponent/commentsComponent.service.ts");
/* harmony import */ var _progress_kendo_angular_conversational_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-conversational-ui */ "./node_modules/@progress/kendo-angular-conversational-ui/dist/fesm5/index.js");
/* harmony import */ var _ticketViewer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ticketViewer.service */ "./src/app/ticketViewer/ticketViewer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { CommentsComponentRoutingModule } from './commentsComponent-routing.module';





var CrudTicketCommentsModule = /** @class */ (function () {
    function CrudTicketCommentsModule() {
    }
    CrudTicketCommentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _commentsComponent_component__WEBPACK_IMPORTED_MODULE_1__["CommentsComponentComponent"]
            ],
            imports: [
                //CommentsComponentRoutingModule,
                _progress_kendo_angular_conversational_ui__WEBPACK_IMPORTED_MODULE_3__["ChatModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            ],
            exports: [_commentsComponent_component__WEBPACK_IMPORTED_MODULE_1__["CommentsComponentComponent"]],
            providers: [_commentsComponent_service__WEBPACK_IMPORTED_MODULE_2__["CommentsComponentService"], _ticketViewer_service__WEBPACK_IMPORTED_MODULE_4__["TicketViewerServices"]],
            bootstrap: [_commentsComponent_component__WEBPACK_IMPORTED_MODULE_1__["CommentsComponentComponent"]]
        })
    ], CrudTicketCommentsModule);
    return CrudTicketCommentsModule;
}());



/***/ }),

/***/ "./src/app/ticketViewer/commentsComponent/commentsComponent.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ticketViewer/commentsComponent/commentsComponent.service.ts ***!
  \*****************************************************************************/
/*! exports provided: CommentsComponentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponentService", function() { return CommentsComponentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var src_app_GlobalShareCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/GlobalShareCode */ "./src/app/GlobalShareCode.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommentsComponentService = /** @class */ (function () {
    function CommentsComponentService(http) {
        this.http = http;
        this.commentUpdateActionUrl = src_app_GlobalShareCode__WEBPACK_IMPORTED_MODULE_3__["baseUrl"] + '/TicketViewer/CommentUpdate';
    }
    CommentsComponentService.prototype.CallUpdateComments = function (itemName) {
        return this.CallHttpPost(this.commentUpdateActionUrl, itemName, null);
    };
    CommentsComponentService.prototype.CallHttpPost = function (url, itemData, headers) {
        return this.http.post(url, itemData, {
            headers: headers
        });
    };
    CommentsComponentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], CommentsComponentService);
    return CommentsComponentService;
}());

//export class Message {
//constructor(public content:string,public sentBy:string) {}
//}


/***/ }),

/***/ "./src/app/ticketViewer/ticketViewer.service.ts":
/*!******************************************************!*\
  !*** ./src/app/ticketViewer/ticketViewer.service.ts ***!
  \******************************************************/
/*! exports provided: TicketViewerServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketViewerServices", function() { return TicketViewerServices; });
/* harmony import */ var _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../GlobalShareCode */ "./src/app/GlobalShareCode.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.commonFunctionality */ "./src/app/app.commonFunctionality.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TicketViewerServices = /** @class */ (function () {
    function TicketViewerServices(commonFunc, http) {
        this.commonFunc = commonFunc;
        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'multipart/form-data') };
        this.commentActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/TicketViewer/GetTicketComments';
        this.ticketDetailsActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/TicketViewer/GetTicketDetailsView';
        this.queryandCategoryTypeActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/TicketViewer/GetQueryandCategoryType';
        this.errorCodeTypeActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/TicketViewer/GetErrorCodeandTypes';
        //this.queryCategoryActionUrl = baseUrl + '/TicketViewer/GetQueryCategory';
        this.getEmailAdressActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/TicketViewer/GetEmailAdress';
        this.getMasterDataActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/TicketViewer/GetMasterData';
        this.createTicketActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/TicketViewer/CreateTicket';
        this.getJustificationTicketActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/TicketViewer/GetJustification';
        this.updateTicketActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/TicketViewer/UpdateTicket';
        this.runRuleEngineActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/TicketViewer/RunRuleEngine';
        this.fileUploadActionUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/TicketViewer/EditingFileUpload';
    }
    TicketViewerServices.prototype.CallComments = function (itemName) {
        return this.CallHttpGet(this.commentActionUrl, itemName, null);
    };
    TicketViewerServices.prototype.getQueryType = function () {
        return this.CallHttpGet(this.queryandCategoryTypeActionUrl, null, null);
    };
    TicketViewerServices.prototype.editingFileUpload = function (itemName) {
        return this.CallHttpPost(this.fileUploadActionUrl, itemName, null);
    };
    //public getQueryCategory<T>(): Observable<T> {
    //  return this.CallHttpGet<T>(this.queryCategoryActionUrl, null, null);
    //}
    //public getEmailAdress<T>(): Observable<T> {
    //  return this.CallHttpGet<T>(this.getEmailAdressActionUrl, null, null);
    //}
    TicketViewerServices.prototype.getMasterData = function (itemName) {
        return this.CallHttpPost(this.getMasterDataActionUrl, itemName, null);
    };
    TicketViewerServices.prototype.getErrorCode = function (itemName) {
        return this.CallHttpPost(this.errorCodeTypeActionUrl, itemName, null);
    };
    TicketViewerServices.prototype.createTicket = function (itemName) {
        return this.CallHttpPost(this.createTicketActionUrl, itemName, null);
    };
    TicketViewerServices.prototype.updateTicket = function (itemName) {
        return this.CallHttpPost(this.updateTicketActionUrl, itemName, null);
    };
    TicketViewerServices.prototype.runRuleEngine = function (itemName) {
        return this.CallHttpPost(this.runRuleEngineActionUrl, itemName, null);
    };
    TicketViewerServices.prototype.CallTicketDetails = function (itemName) {
        return this.CallHttpGet(this.ticketDetailsActionUrl, itemName, null);
    };
    TicketViewerServices.prototype.CallTicketJustification_Rejection = function (itemName) {
        return this.CallHttpPost(this.getJustificationTicketActionUrl, itemName, null);
    };
    TicketViewerServices.prototype.CallHttpPost = function (url, itemData, headers) {
        return this.http.post(url, itemData, {
            headers: headers
        });
    };
    TicketViewerServices.prototype.CallHttpGet = function (url, itemData, headers) {
        if (itemData != null) {
            return this.http.get(url, {
                headers: headers,
                params: { 'Value': itemData }
            });
        }
        else {
            return this.http.get(url, {
                headers: headers
            });
        }
    };
    TicketViewerServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_app_commonFunctionality__WEBPACK_IMPORTED_MODULE_2__["CommonFunctionality"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], TicketViewerServices);
    return TicketViewerServices;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");



//import { environment } from './environments/environment';
//if (environment.production) {
Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
//}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\RMS_Ticketing\RMS_Ticketing\RMS_WebApp\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map