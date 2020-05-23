(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-Employee-addEmployee-addEmployee-module"],{

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

module.exports = "<app-card [title]=\"'Create Employee'\" [blockClass]=\"'tran-data'\"  [showRightSection]=\"'false'\"  [cardToggle]=\"cardToggleGrid\">\r\n\r\n  <!------ Include the above in your HEAD tag ---------->\r\n  <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onFormSubmit()\">\r\n    <p *ngIf=\"dataSaved\" style=\"color:rgb(0, 128, 0);font-size:20px;font-weight:bold\"\r\n       Class=\"success\">\r\n      {{massage}}\r\n    </p>\r\n    <span *ngIf=\"errorFound\">\r\n      <span class=\"alert-danger\"> {{massage}} </span>\r\n    </span>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Employee Code<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" formControlName=\"Type_EmpCode\" id=\"Type_EmpCode\"\r\n                   class=\"form-control input-sm\" (blur)=\"checkCode($event)\" placeholder=\"Code *\" required>\r\n            <div *ngIf=\"codeAvailable\">\r\n              <div class=\"alert-danger\"> This Code is Available </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Employee Name<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" formControlName=\"EmployeeName\" id=\"EmployeeName\"\r\n                   class=\"form-control input-sm\" placeholder=\"Name *\" required>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Mobile Number<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" formControlName=\"MobileNumber\" id=\"MobileNumber\"\r\n                   class=\"form-control input-sm\" placeholder=\"Mobile *\" required>\r\n            <div *ngIf=\"employeeForm.get('MobileNumber').value && employeeForm.get('MobileNumber').errors?.pattern\">\r\n              <div class=\"alert-danger\"> Enter 10 digit Mobile Number </div>\r\n            </div>\r\n            <div *ngIf=\"!employeeForm.get('MobileNumber').value && employeeForm.get('MobileNumber').touched\">\r\n              <div class=\"alert-danger\"> Enter Mobile Number </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--#incidentDate #disputeAmount #AtmID-->\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Email Address<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"email\" formControlName=\"EmailId\" id=\"EmailId\"\r\n                   class=\"form-control input-sm\" placeholder=\"Email *\" required email>\r\n            <div *ngIf=\"!employeeForm.get('EmailId').value && employeeForm.get('EmailId').touched\">\r\n              <div class=\"alert-danger\"> Enter Email ID </div>\r\n            </div>\r\n            <div *ngIf=\"employeeForm.get('EmailId').value && !employeeForm.get('EmailId').valid\">\r\n              <div class=\"alert-danger\"> Enter valid email address </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Rights</label>\r\n          <div class=\"col-sm-12\">\r\n            <select class=\"form-control\" formControlName=\"RightsCode\">\r\n              <option *ngFor=\"let rl of rights\" [value]=\"rl[0]\">{{ rl[1] }}</option>\r\n             \r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Roles</label>\r\n          <div class=\"col-sm-12\">\r\n            <select class=\"form-control\" (change)=\"RolesInput($event)\"\r\n                    formControlName=\"RoleCode\">\r\n              <option *ngFor=\"let rl of roles\" [value]=\"rl[0]\">{{ rl[1] }}</option>\r\n              \r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\" *ngIf=\"isMSPSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">MSP Category<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" formControlName=\"MspCategory\" id=\"mspcategory\"\r\n                   *ngIf=\"isMSPSelected\" class=\"form-control input-sm\" placeholder=\"MSP Category\">\r\n            <div *ngIf=\"isMSPSelected && !employeeForm.get('MspCategory').value && employeeForm.get('MspCategory').touched\">\r\n              <div class=\"alert-danger\"> Enter MSP Catogory </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\" *ngIf=\"isLocationSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Region<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-multiselect-dropdown name=\"region\"\r\n                                     [placeholder]=\"'Select Region'\" [data]=\"Countries2\" formControlName=\"Region\" [(ngModel)]=\"selected_region\"\r\n                                     [settings]=\"dropdownSettings2\" (onDeSelect)=\"removeCountry($event)\" (onSelect)=\"changeCountry($event)\">\r\n            </ng-multiselect-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\" *ngIf=\"isLocationSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Location<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"region\" [(ngModel)]=\"selected_loc\"\r\n                                     [placeholder]=\"'Select Location'\" [data]=\"states2\" formControlName=\"Location\"\r\n                                     [settings]=\"dropdownSettings2\" (onDeSelect)=\"removeState($event)\" (onSelect)=\"changeState($event)\">\r\n            </ng-multiselect-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\" *ngIf=\"isLocationSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Hub<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"hub\" [(ngModel)]=\"selected_hub\"\r\n                                     [placeholder]=\"'Select Hub'\" [data]=\"cities2\" formControlName=\"Hub\"\r\n                                     [settings]=\"dropdownSettings\">\r\n            </ng-multiselect-dropdown>\r\n            <div *ngIf=\"isLocationSelected && !employeeForm.get('Hub').value && employeeForm.get('Hub').touched\">\r\n              <div class=\"alert-danger\"> Enter Hub Catogory </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            <input type=\"submit\" [disabled]=\"!employeeForm.valid\" value=\"Add\"\r\n                   class=\"btn btn-info \">\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </form>\r\n</app-card>\r\n\r\n\r\n\r\n\r\n  <!--<div class=\"container\">\r\n    <div class=\"row centered-form\">\r\n      <div class=\"col-xs-12 col-sm-10 col-md-6 col-lg-offset-2 col-md-offset-3\">\r\n        <button class=\"btn btn-primary\" (click)=\"goToPage('/show_data');\">Show</button>\r\n        <button class=\"btn btn-primary\" (click)=\"goToPage('/create_element');\">Create</button>\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n          \r\n            <h2 class=\"text-center\"> Add Employee Detail </h2>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onFormSubmit()\">\r\n              <p *ngIf=\"dataSaved\" style=\"color:rgb(0, 128, 0);font-size:20px;font-weight:bold\"\r\n                 Class=\"success\">\r\n                {{massage}}\r\n              </p>\r\n              <span *ngIf=\"errorFound\">\r\n                <span class=\"alert-danger\"> {{massage}} </span>\r\n              </span>\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" formControlName=\"EmployeeName\" id=\"EmployeeName\"\r\n                       class=\"form-control input-sm\" placeholder=\"Name *\" required>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"number\" formControlName=\"MobileNumber\" id=\"MobileNumber\"\r\n                           class=\"form-control input-sm\" placeholder=\"Mobile *\" required>\r\n                    <span *ngIf=\"employeeForm.get('MobileNumber').value && !employeeForm.get('MobileNumber').valid\">\r\n                      <span class=\"alert-danger\"> Enter valid Mobile Number </span>\r\n                    </span>\r\n                    <span *ngIf=\"!employeeForm.get('MobileNumber').value && employeeForm.get('MobileNumber').touched\">\r\n                      <span class=\"alert-danger\"> Enter Mobile Number </span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"email\" formControlName=\"EmailId\" id=\"EmailId\"\r\n                           class=\"form-control input-sm\" placeholder=\"Email *\" required email>\r\n                    <span *ngIf=\"!employeeForm.get('EmailId').value && employeeForm.get('EmailId').touched\">\r\n                      <span class=\"alert-danger\"> Enter Email ID </span>\r\n                    </span>\r\n                    <span *ngIf=\"employeeForm.get('EmailId').value && !employeeForm.get('EmailId').valid\">\r\n                      <span class=\"alert-danger\"> Enter valid email address </span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" formControlName=\"Type_EmpCode\" id=\"Type_EmpCode\"\r\n                           class=\"form-control input-sm\" placeholder=\"Code *\" required>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <select class=\"form-control\" (change)=\"RolesInput($event)\"\r\n                            formControlName=\"RoleCode\">\r\n                      <option selected=\"\">Roles</option>\r\n                      <option value=\"1\">ADMIN</option>\r\n                      <option value=\"2\">HO</option>\r\n                      <option value=\"3\">MSP</option>\r\n                      <option value=\"4\">Location</option>\r\n                      <option value=\"5\">HO_Manager</option>\r\n                      <option value=\"6\">Location_Manager</option>\r\n                      <option value=\"7\">MIS_User</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" formControlName=\"MspCategory\" id=\"mspcategory\"\r\n                           *ngIf=\"isMSPSelected\" class=\"form-control input-sm\" placeholder=\"MSP Category\">\r\n                    <span *ngIf=\"isMSPSelected && !employeeForm.get('MspCategory').value && employeeForm.get('MspCategory').touched\">\r\n                      <span class=\"alert-danger\"> Enter MSP Catogory </span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"region\"\r\n                                             [placeholder]=\"'Select Region'\" [data]=\"Countries2\" formControlName=\"Region\"\r\n                                             [settings]=\"dropdownSettings2\" (onDeSelect)=\"removeCountry($event)\" (onSelect)=\"changeCountry($event)\">\r\n                    </ng-multiselect-dropdown>\r\n                   \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                \r\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                      <div class=\"form-group\">\r\n                        <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"region\"\r\n                                                 [placeholder]=\"'Select Location'\" [data]=\"states2\" formControlName=\"Location\"\r\n                                                 [settings]=\"dropdownSettings2\" (onDeSelect)=\"removeState($event)\" (onSelect)=\"changeState($event)\">\r\n\r\n                        </ng-multiselect-dropdown>\r\n                       \r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n\r\n                      <div class=\"form-group\">\r\n                        <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"hub\"\r\n                                                 [placeholder]=\"'Select Hub'\" [data]=\"cities2\" formControlName=\"Hub\"\r\n                                                 [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\">\r\n                        </ng-multiselect-dropdown>\r\n                        <span *ngIf=\"isLocationSelected && !employeeForm.get('Hub').value && employeeForm.get('Hub').touched\">\r\n                          <span class=\"alert-danger\">\"> Enter Hub Catogory </span>\r\n                        </span>\r\n                      \r\n                      </div>\r\n                    </div>\r\n\r\n\r\n              </div>\r\n\r\n\r\n\r\n              <input type=\"submit\" [disabled]=\"!employeeForm.valid\" value=\"Add\"\r\n                     class=\"btn btn-info btn-block\">\r\n            </form>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n   \r\n  </div>-->\r\n"

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
/* harmony import */ var _Employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Employee.service */ "./src/app/Employee/Employee.service.ts");
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
        this.selected_region = [];
        this.selected_loc = [];
        this.selected_hub = [];
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
            res.Entity.forEach(function (element) {
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
            console.log(res);
            _this.ds.ShowHideToasty({
                title: 'Create Employee Here',
                msg: '',
                showClose: true,
                theme: 'bootstrap',
                type: 'success',
                closeOther: true,
                timeout: 3000
            });
            _this.Countries = res.Entity;
            console.log(" add " + _this.Countries);
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
            MobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
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
            //console.log("remove" + element.LocationName);
            var index = _this.states2.indexOf(element.LocationName);
            if (index > -1) {
                _this.states2.splice(index, 1);
                var index_selection = _this.selected_loc.indexOf(element.LocationName);
                console.log("index" + index_selection);
                if (index_selection > -1) {
                    _this.selected_loc.splice(index_selection, 1);
                }
                // console.log(this.selected_loc);
                _this.removeState(element.LocationName);
            }
            // this.states2.pop(element.LocationName);
            // this.empList.push(customObj);
        });
        this.states2 = this.states2.filter(function (el, i, a) { return i === a.indexOf(el); });
        this.selected_loc = this.selected_loc.filter(function (el, i, a) { return i === a.indexOf(el); });
    };
    AddEmployeeComponent.prototype.removeState = function (state) {
        var _this = this;
        this.cities = this.states.filter(function (cntry) { return cntry.LocationName == state; });
        this.cities.forEach(function (element) {
            console.log("remove" + element.HubLocationName);
            var index = _this.cities2.indexOf(element.HubLocationName);
            if (index > -1) {
                _this.cities2.splice(index, 1);
                var index_selection = _this.selected_hub.indexOf(element.HubLocationName);
                if (index_selection > -1) {
                    _this.selected_hub.splice(index_selection, 1);
                }
                console.log(_this.selected_hub);
                //this.removeState(element.LocationName);
            }
            // this.states2.pop(element.LocationName);
            // this.empList.push(customObj);
        });
        this.selected_hub = this.selected_hub.filter(function (el, i, a) { return i === a.indexOf(el); });
        this.cities2 = this.cities2.filter(function (el, i, a) { return i === a.indexOf(el); });
    };
    AddEmployeeComponent.prototype.changeState = function (state) {
        var _this = this;
        this.cities = this.Countries.filter(function (cntry) { return cntry.LocationName == state; });
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
        console.log(this.employeeService.getUserDetail());
        employee.createdBy = this.employeeService.empCode;
        this.employeeService.createEmployee(employee).subscribe(function (response) {
            if (response.Success) {
                // console.log("sec");
                _this.dataSaved = true;
                _this.massage = 'Record saved Successfully';
                console.log("sec");
                _this.ds.ShowHideToasty({
                    title: response.Message,
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
                _this.router.navigateByUrl('/Employee/EmployeeViewer');
            }
            else {
                _this.codeAvailable = true;
                _this.errorFound = true;
                _this.massage = response.Message;
                _this.ds.ShowHideToasty({
                    title: 'Failure..',
                    msg: response.Message,
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'error',
                    closeOther: true,
                });
            }
        });
    };
    AddEmployeeComponent.prototype.checkCode = function (event) {
        var _this = this;
        console.log(event.target.value);
        if (event.target.value != "") {
            this.employeeService.getEmployeeById(event.target.value).subscribe(function (response) {
                _this.massage = null;
                // console.log(response)
                if (response.Success) {
                    _this.codeAvailable = true;
                    _this.ds.ShowHideToasty({
                        title: 'Note..',
                        msg: response.Message,
                        showClose: true,
                        theme: 'bootstrap',
                        type: 'error',
                        closeOther: true,
                        timeout: 5000
                    });
                    _this.massage = "This code is already available";
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
            _Employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/Employee/addEmployee/addEmployee.module.ts":
/*!************************************************************!*\
  !*** ./src/app/Employee/addEmployee/addEmployee.module.ts ***!
  \************************************************************/
/*! exports provided: AddEmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeModule", function() { return AddEmployeeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _addEmployee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addEmployee.component */ "./src/app/Employee/addEmployee/addEmployee.component.ts");
/* harmony import */ var _addEmployee_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addEmployee.routing */ "./src/app/Employee/addEmployee/addEmployee.routing.ts");
/* harmony import */ var _Employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Employee.service */ "./src/app/Employee/Employee.service.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { HttpClientModule } from '@angular/common/http';
//import { HttpModule } from '@angular/http';




var AddEmployeeModule = /** @class */ (function () {
    function AddEmployeeModule() {
    }
    AddEmployeeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _addEmployee_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                // HttpClientModule,
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
            ],
            entryComponents: [],
            declarations: [
                _addEmployee_component__WEBPACK_IMPORTED_MODULE_4__["AddEmployeeComponent"]
            ],
            providers: [_Employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]],
        })
    ], AddEmployeeModule);
    return AddEmployeeModule;
}());



/***/ }),

/***/ "./src/app/Employee/addEmployee/addEmployee.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/Employee/addEmployee/addEmployee.routing.ts ***!
  \*************************************************************/
/*! exports provided: routing, AddEmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeRoutingModule", function() { return AddEmployeeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addEmployee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addEmployee.component */ "./src/app/Employee/addEmployee/addEmployee.component.ts");


//import { AuthGuard } from '../shared/Security/auth.guard';
var routes = [
    {
        path: '',
        component: _addEmployee_component__WEBPACK_IMPORTED_MODULE_1__["AddEmployeeComponent"],
        data: {
            breadcrumb: 'CreateEmployee',
            icon: 'icofont-dashboard bg-c-blue',
            status: false
        },
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
var AddEmployeeRoutingModule = /** @class */ (function () {
    function AddEmployeeRoutingModule() {
    }
    return AddEmployeeRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-Employee-addEmployee-addEmployee-module.js.map