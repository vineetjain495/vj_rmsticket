(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-Employee-editemp-editemp-module"],{

/***/ "./src/app/Employee/editemp/editemp.component.css":
/*!********************************************************!*\
  !*** ./src/app/Employee/editemp/editemp.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.largerCheckbox {\n  width: 30px;\n  height: 20px;\n  display: inline-block;\n}\n.active-group span {\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRW1wbG95ZWUvZWRpdGVtcC9lZGl0ZW1wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0Usc0JBQXNCO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvRW1wbG95ZWUvZWRpdGVtcC9lZGl0ZW1wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5sYXJnZXJDaGVja2JveCB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hY3RpdmUtZ3JvdXAgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Employee/editemp/editemp.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Employee/editemp/editemp.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Edit Employee Detail'\" [blockClass]=\"'tran-data'\" [showRightSection]=\"'false'\"\r\n          [cardToggle]=\"cardToggleGrid\">\r\n\r\n  <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onFormSubmit()\">\r\n    <p *ngIf=\"dataSaved\" style=\"color:rgb(0, 128, 0);font-size:20px;font-weight:bold\" Class=\"success\">\r\n      {{massage}}\r\n    </p>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Employee Code<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" [attr.disabled]=\"true\" formControlName=\"Type_EmpCode\" id=\"Type_EmpCode\"\r\n                   class=\"form-control input-sm\" placeholder=\"Code *\" required>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Employee Name<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" [attr.disabled]=\"true\" formControlName=\"EmployeeName\" id=\"EmployeeName\"\r\n                   class=\"form-control input-sm\" placeholder=\"Name *\" required>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Mobile Number<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" formControlName=\"MobileNumber\" id=\"MobileNumber\" class=\"form-control input-sm\"\r\n                   placeholder=\"Mobile *\" required>\r\n            <div *ngIf=\"employeeForm.get('MobileNumber').value && employeeForm.get('MobileNumber').errors?.pattern\">\r\n              <div class=\"alert-danger\"> Enter 10 digit Mobile Number </div>\r\n            </div>\r\n            <div *ngIf=\"!employeeForm.get('MobileNumber').value && employeeForm.get('MobileNumber').touched\">\r\n              <div class=\"alert-danger\"> Enter Mobile Number </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--#incidentDate #disputeAmount #AtmID-->\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Email Address<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"email\" formControlName=\"EmailId\" id=\"EmailId\" class=\"form-control input-sm\"\r\n                   placeholder=\"Email *\" required email>\r\n            <div *ngIf=\"!employeeForm.get('EmailId').value && employeeForm.get('EmailId').touched\">\r\n              <div class=\"alert-danger\"> Enter Email ID </div>\r\n            </div>\r\n            <div *ngIf=\"employeeForm.get('EmailId').value  && employeeForm.get('EmailId').touched && !employeeForm.get('EmailId').valid\">\r\n              <div class=\"alert-danger\"> Enter valid email address </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Rights</label>\r\n          <div class=\"col-sm-12\">\r\n            <select class=\"form-control\" formControlName=\"RightsCode\">\r\n              <option *ngFor=\"let rl of rights\" [value]=\"rl[0]\">{{ rl[1] }}</option>\r\n\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Roles</label>\r\n          <div class=\"col-sm-12\">\r\n            <select class=\"form-control\" (change)=\"RolesInput($event)\" formControlName=\"RoleCode\">\r\n              <option *ngFor=\"let rl of roles\" [value]=\"rl[0]\">{{ rl[1] }}</option>\r\n\r\n\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-lg-12 col-form-label\">Manager Code</label>\r\n          <div class=\"col-sm-12\">\r\n\r\n            <ng-multiselect-dropdown name=\"MgrCode\" [(ngModel)]=\"selected_manager\" [disabled]=\"hideSubmitButton\"\r\n                                     [placeholder]=\"'Select Employee'\" [data]=\"Emp_details\" formControlName=\"MGRCODE\"\r\n                                     [settings]=\"dropdownSettings3\">\r\n            </ng-multiselect-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\" *ngIf=\"isMSPSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">MSP Category<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <select class=\"form-control\" formControlName=\"MspCategory\" id=\"mspcategory\" *ngIf=\"isMSPSelected\" placeholder=\"MSP Category\">\r\n              <option *ngFor=\"let rl of MSP\" [value]=\"rl\">{{ rl }}</option>\r\n\r\n            </select>\r\n            <div *ngIf=\"isMSPSelected && employeeForm.get('MspCategory').invalid && employeeForm.get('MspCategory').touched\">\r\n              <div class=\"alert-danger\"> Select MSP Catogory </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\" *ngIf=\"isLocationSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Region<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-multiselect-dropdown name=\"region\" [placeholder]=\"'Select Region'\" [data]=\"Countries2\"  [disabled]=\"hideSubmitButton\"\r\n                                     formControlName=\"Region\" [(ngModel)]=\"selected_region\" [settings]=\"dropdownSettings2\"\r\n                                     (onDeSelect)=\"removeCountry($event)\" (onSelect)=\"changeCountry($event)\">\r\n            </ng-multiselect-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-4\" *ngIf=\"isLocationSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Location<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"region\" [placeholder]=\"'Select Location'\"  [disabled]=\"hideSubmitButton\"\r\n                                     [data]=\"states2\" formControlName=\"Location\" [(ngModel)]=\"selected_loc\" [settings]=\"dropdownSettings2\"\r\n                                     (onDeSelect)=\"removeState($event)\" (onSelect)=\"changeState($event)\">\r\n            </ng-multiselect-dropdown>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\" *ngIf=\"isLocationSelected\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Select Hub<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-multiselect-dropdown *ngIf=\"isLocationSelected\" name=\"hub\" [(ngModel)]=\"selected_hub\"  [disabled]=\"hideSubmitButton\"\r\n                                     [placeholder]=\"'Select Hub'\" [data]=\"cities2\" formControlName=\"Hub\" [settings]=\"dropdownSettings\">\r\n            </ng-multiselect-dropdown>\r\n            <div *ngIf=\"isLocationSelected && !employeeForm.get('Hub').value && employeeForm.get('Hub').touched\">\r\n              <div class=\"alert-danger\"> Enter Hub Catogory </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" [hidden]=\"hideSubmitButton\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-12\">\r\n\r\n            <input type=\"checkbox\" formControlName=\"IsActive\" class=\"largerCheckbox\" (change)=\"toggleVisibility($event)\" />\r\n\r\n            <span *ngIf=\"active\" (click)=\"togglebutton(false)\" class=\"[ btn btn-success ]\"> Active</span><span *ngIf=\"!active\" (click)=\"togglebutton(true)\"  class=\"[ btn btn-default ]\"> InActive</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-sm-6 text-center\">\r\n            <input type=\"submit\" [disabled]=\"!employeeForm.valid\" value=\"Updates\" class=\"btn btn-info\">\r\n          </div>\r\n          <div class=\"col-sm-6 text-center\">\r\n            <button type=\"button\" class=\"btn btn-inverse \" (click)=\"resetForm()\">Reset</button>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"isTicketAvailable\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"form-group row\">\r\n\r\n          <div class=\"col-sm-12\">\r\n\r\n            <div class=\"alert alert-info\">\r\n\r\n              To assign ticket to other user click on button\r\n\r\n              <button type=\"button\" class=\"btn btn-danger \" (click)=\"goto_update()\">Allocate ticket</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</app-card>\r\n\r\n\r\n<!--<div class=\"container\">\r\n  <div class=\"row centered-form\">\r\n    <div class=\"col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3\">\r\n      <button class=\"btn btn-primary\" (click)=\"goToPage('/show_data');\">Show</button>\r\n      <button class=\"btn btn-primary\" (click)=\"goToPage('/create_element');\">Create</button>\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h2 class=\"text-center\"> Edit Data</h2>\r\n          <a class=\"nav-item nav-link-edit\" [routerLink]=\"['/show_data']\">Back</a>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <p *ngIf=\"dataSaved\" style=\"color:rgb(0, 128, 0);font-size:20px;font-weight:bold\" Class=\"success\"\r\n             align=\"left\">\r\n            {{massage}}\r\n          </p>\r\n          <span *ngIf=\"errorFound\">\r\n            <span class=\"alert-danger\"> {{massage}} </span>\r\n          </span>\r\n          <form [formGroup]=\"employeeForm\" (ngSubmit)=\"onFormSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" [attr.disabled]=\"true\" formControlName=\"EmployeeName\" id=\"EmployeeName\"\r\n                     class=\"form-control input-sm\" placeholder=\"Name *\" required>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"number\" formControlName=\"MobileNumber\" id=\"MobileNumber\"\r\n                         class=\"form-control input-sm\" placeholder=\"Mobile *\" required>\r\n                  <span *ngIf=\"!employeeForm.get('MobileNumber').value && employeeForm.get('MobileNumber').touched\">\r\n                    <span class=\"alert-danger\"> Enter Mobile Number </span>\r\n                  </span>\r\n                  <span *ngIf=\"employeeForm.get('MobileNumber').value && !employeeForm.get('MobileNumber').valid\">\r\n                    <span class=\"alert-danger\"> Enter valid Mobile Number </span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" formControlName=\"EmailId\" id=\"EmailId\"\r\n                         class=\"form-control input-sm\" placeholder=\"Email *\" required email>\r\n                  <span *ngIf=\"!employeeForm.get('EmailId').value && employeeForm.get('EmailId').touched\">\r\n                    <span class=\"alert-danger\"> Enter Email ID </span>\r\n                  </span>\r\n                  <span *ngIf=\"employeeForm.get('EmailId').value && !employeeForm.get('EmailId').valid\">\r\n                    <span class=\"alert-danger\"> Enter valid email address </span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" [attr.disabled]=\"true\" formControlName=\"Type_EmpCode\"\r\n                         id=\"Type_EmpCode\" class=\"form-control input-sm\" placeholder=\"Code *\" required>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <input type=\"text\" formControlName=\"Password\" id=\"Password\"\r\n                         class=\"form-control input-sm\" placeholder=\"Password\">\r\n                  <span *ngIf=\"employeeForm.get('Password').value && !employeeForm.get('Password').valid\">\r\n                    <span class=\"alert-danger\"> Password must contain minimum 6 letter </span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <select class=\"form-control\" formControlName=\"RoleCode\">\r\n                    <option selected=\"\">Roles</option>\r\n                    <option value=\"1\">ADMIN</option>\r\n                    <option value=\"2\">HO</option>\r\n                    <option value=\"3\">MSP</option>\r\n                    <option value=\"4\">Location</option>\r\n                    <option value=\"5\">HO_Manager</option>\r\n                    <option value=\"6\">Location_Manager</option>\r\n                    <option value=\"7\">MIS_User</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-6 col-sm-6 col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <select class=\"form-control\" formControlName=\"RightsCode\">\r\n                    <option selected=\"\">Rights</option>\r\n                    <option value=\"1\">View</option>\r\n                    <option value=\"2\">Edit</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <input type=\"checkbox\" formControlName=\"IsActive\" data-md-icheck (change)=\"toggleVisibility($event)\" />\r\n            <span *ngIf=\"active\"> Active</span><span *ngIf=\"!active\"> InActive</span>\r\n\r\n            <span class=\"checkmark\"></span>\r\n            <input type=\"submit\" [disabled]=\"!employeeForm.valid\" value=\"Update\"\r\n                   class=\"btn btn-info btn-block\">\r\n\r\n            <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"deleteEmployee(employeeForm.get('Type_EmpCode').value)\">Delete</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div-->\r\n"

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
/* harmony import */ var _Employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Employee.service */ "./src/app/Employee/Employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_DataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/DataService */ "./src/app/services/DataService.ts");
/* harmony import */ var _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.commonFunctionality */ "./src/app/app.commonFunctionality.ts");
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
    route, router, ds, cf, employeeService) {
        var _this = this;
        this.formbulider = formbulider;
        this.route = route;
        this.router = router;
        this.ds = ds;
        this.cf = cf;
        this.employeeService = employeeService;
        //Decalaration
        this.dataSaved = false;
        this.employeeIdUpdate = null;
        this.massage = null;
        this.active = true;
        this.Emp_details = [];
        this.Countries2 = [];
        this.selected_region = [];
        this.selected_loc = [];
        this.selected_hub = [];
        this.selected_manager = [];
        this.selectedCountry = "--Choose Country--";
        this.states2 = [];
        this.cities2 = [];
        this.roles = [];
        this.rights = [];
        this.MSP = [];
        this.dropdownSettings = {};
        this.dropdownSettings2 = {};
        this.dropdownSettings3 = {};
        this.disabled = false;
        this.ShowFilter = false;
        this.limitSelection = false;
        this.errorFound = false;
        this.hideSubmitButton = false;
        this.isLocationSelected = false;
        this.isMSPSelected = false;
        this.isTicketAvailable = false;
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
    }
    EditempComponent.prototype.ngOnInit = function () {
        var _this = this;
        // alert(this.route.snapshot.params.id);
        this.employeeForm = this.formbulider.group({
            Type_EmpCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            EmployeeName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            MobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            EmailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            RoleCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            RightsCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            MGRCODE: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            IsActive: [true],
            MspCategory: [''],
            Region: [''],
            Location: [''],
            Hub: ['']
        });
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
        this.dropdownSettings3 = {
            singleSelection: false,
            enableCheckAll: false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            limitSelection: 1,
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.loadEmployeeToEdit(this.route.snapshot.params.id);
        // console.log(res);
        this.cf.GetUserDetails().subscribe(function (data) {
            if (data.Success) {
                _this.filedPopAccRole_Rights(data.Entity.AssignedRoleID, data.Entity.AssignedRightsID);
                //if (this.rolesParameter != 1) {
                //  if ((this.model.CustomerActions == "ACCEPT" || this.model.CustomerActions == "REJECT") && this.model.CMSStatus == "CLOSED") {
                //    this.ticketSummaryForm.disable();
                //    this.hideSubmitButton = true;
                //    this.hideAttachment = true;
                //    this.hideFileEditing = true;
                //  }
                //}
            }
        });
    };
    EditempComponent.prototype.filedPopAccRole_Rights = function (Roles, Rights) {
        //this.rolesParameter = Roles;
        if (Rights == 1) {
            this.employeeForm.disable();
            this.hideSubmitButton = true;
        }
        else {
            this.hideSubmitButton = false;
        }
    };
    EditempComponent.prototype.UpdateEmployee = function (employee) {
        var _this = this;
        console.log(employee);
        this.ds.ShowHideToasty({
            title: 'Please Wait...',
            msg: '',
            showClose: false,
            theme: 'bootstrap',
            type: 'wait',
            closeOther: true
        });
        employee.createdBy = this.employeeService.empCode;
        if (this.isMSPSelected == false) {
            employee.MspCategory = "";
        }
        this.employeeService.updateEmployee(employee).subscribe(function (response) {
            console.log(response);
            if (!response.Success) {
                _this.dataSaved = false;
                //this.errorFound = true;
                //this.massage = "Ticket is assigned to Employee " + employee.Type_EmpCode + "  You can not change location and Active";
                _this.ds.ShowHideToasty({
                    title: 'Failure..',
                    msg: response.Message,
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'error',
                    closeOther: true,
                });
                _this.employeeService.edit_empCode = _this.route.snapshot.params.id;
                console.log(_this.employeeService.edit_empCode);
                /*.employeeForm.controls['EmployeeName'].setValue(employee.EmployeeName);
                this.employeeForm.controls['MobileNumber'].setValue(employee.MobileNumber);
                this.employeeForm.controls['EmailId'].setValue(employee.EmailId);
                
                this.employeeForm.controls['RoleCode'].setValue(employee.RoleCode);
                this.employeeForm.controls['RightsCode'].setValue(employee.RightsCode);
                this.employeeForm.controls['Type_EmpCode'].setValue(employee.Type_EmpCode);
                this.employeeForm.controls['IsActive'].setValue(employee.IsActive);*/
                console.log(_this.selected_region);
                //this.loadEmployeeToEdit(this.employeeService.edit_empCode);
                _this.isTicketAvailable = true;
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
                _this.employeeForm.reset();
                _this.router.navigateByUrl('/Employee/EmployeeViewer');
            }
        });
    };
    EditempComponent.prototype.loadEmployeeToEdit = function (employeeId) {
        var _this = this;
        this.employeeService.getEmployeeById(employeeId).subscribe(function (response) {
            console.log(response);
            if (response.Success) {
                _this.massage = null;
                _this.dataSaved = false;
                _this.employeeIdUpdate = response.Entity.Type_EmpCode;
                _this.employeeForm.controls['EmployeeName'].setValue(response.Entity.EmployeeName);
                _this.employeeForm.controls['MobileNumber'].setValue(response.Entity.MobileNumber);
                _this.employeeForm.controls['EmailId'].setValue(response.Entity.EmailID);
                _this.employeeForm.controls['Password'].setValue(response.Entity.Password);
                _this.employeeForm.controls['RoleCode'].setValue(response.Entity.RoleCode);
                _this.employeeForm.controls['RightsCode'].setValue(response.Entity.RightsCode);
                _this.employeeForm.controls['Type_EmpCode'].setValue(response.Entity.Type_EmpCode);
                _this.employeeForm.controls['IsActive'].setValue(response.Entity.IsActive);
                _this.togglebutton(response.Entity.IsActive);
                _this.employeeService.getEmployeeDetails().subscribe(function (res) {
                    res.Entity.forEach(function (element) {
                        //console.log(res);
                        if (element) {
                            _this.Emp_details.push(element.Type_EmpCode + " - ( " + element.EmployeeName + " )");
                            //console.log(this.Emp_details);
                        }
                    });
                    _this.Emp_details = _this.Emp_details.filter(function (el, i, a) { return i === a.indexOf(el); });
                    console.log(response.Entity.MGRCODE);
                    console.log(_this.Emp_details);
                    _this.selected_manager = _this.Emp_details.filter(function (res) { return res.indexOf(response.Entity.MGRCODE + " -") !== -1; });
                    console.log(_this.selected_manager);
                });
                if (response.Entity.RoleCode == "2") {
                    _this.getMSP();
                    _this.employeeForm.controls['MspCategory'].setValue(response.Entity.MspCategory);
                    _this.employeeForm.controls['MspCategory'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                    _this.isMSPSelected = true;
                }
                if (response.Entity.RoleCode == "4" || response.Entity.RoleCode == "6") {
                    _this.isLocationSelected = true;
                    _this.getLocations();
                }
                _this.ds.ShowHideToasty({
                    title: 'Edit Employee Here',
                    msg: '',
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'success',
                    closeOther: true,
                    timeout: 3000
                });
            }
            else {
                _this.ds.ShowHideToasty({
                    title: 'No Employee found',
                    msg: '',
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'success',
                    closeOther: true,
                    timeout: 5000
                });
            }
            // console.log(response.IsActive);
            // this.employeeForm.controls['EmpCode'].setValue(employee.EmpCode);  
        });
    };
    EditempComponent.prototype.getLocations = function () {
        var _this = this;
        this.ds.ShowHideToasty({
            title: 'Getting Locations...',
            msg: '',
            showClose: false,
            theme: 'bootstrap',
            type: 'wait',
            closeOther: true
        });
        this.employeeService.getLocationDetail().subscribe(function (res) {
            _this.Countries = res.Entity;
            console.log(_this.Countries);
            _this.Countries.forEach(function (element) {
                _this.Countries2.push(element.RoName);
            });
            _this.Countries2 = _this.Countries2.filter(function (el, i, a) { return i === a.indexOf(el); });
            _this.employeeService.getEmployeeLocationByID(_this.employeeIdUpdate).subscribe(function (res_loc) {
                console.log(res_loc);
                _this.ds.ShowHideToasty({
                    title: 'Locations are ready to select',
                    msg: '',
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'success',
                    closeOther: true,
                    timeout: 3000
                });
                res_loc.Entity.forEach(function (element) {
                    console.log(_this.selected_region);
                    console.log(element);
                    if (element.EmployeeCode) {
                        console.log(element.RoName);
                        console.log(_this.selected_region);
                        _this.selected_region.push(element.RoName);
                        console.log(element.RoName);
                        _this.selected_loc.push(element.LocationName);
                        console.log(element.LocationName);
                        _this.selected_hub.push(element.HubLocationName);
                        console.log(element.HubLocationName);
                        _this.changeCountry(element.RoName);
                        console.log(element.HubLocationName);
                        _this.changeState(element.LocationName);
                        console.log(element.HubLocationName);
                        console.log(_this.selected_hub);
                        console.log(_this.selected_loc);
                        console.log(_this.selected_region);
                    }
                });
                _this.selected_region = _this.selected_region.filter(function (el, i, a) { return i === a.indexOf(el); });
                _this.selected_loc = _this.selected_loc.filter(function (el, i, a) { return i === a.indexOf(el); });
                _this.selected_hub = _this.selected_hub.filter(function (el, i, a) { return i === a.indexOf(el); });
            });
        });
    };
    EditempComponent.prototype.onFormSubmit = function () {
        this.dataSaved = false;
        var employee = this.employeeForm.value;
        var mgrcode = "";
        console.log(employee.MGRCODE);
        employee.MGRCODE.forEach(function (element) {
            var emp_code = element.split(" ");
            console.log(emp_code);
            console.log(emp_code);
            if (emp_code.length > 1) {
                mgrcode = emp_code[0];
                console.log(mgrcode);
            }
            else {
                mgrcode = "";
            }
        });
        console.log(mgrcode);
        employee.MGRCODE = mgrcode;
        //console.log(employee
        if (employee.IsActive == false) {
            if (confirm("Are you sure to InActive " + employee.Type_EmpCode)) {
                this.UpdateEmployee(employee);
            }
        }
        else {
            //if (confirm("Are you sure to Update " + employee.Type_EmpCode)) {
            this.UpdateEmployee(employee);
            //}
        }
        // this.employeeForm.reset();  
    };
    EditempComponent.prototype.resetForm = function () {
        //this.employeeForm.reset();
        console.log("inreset");
        this.massage = null;
        this.dataSaved = false;
        this.employeeForm.controls['EmailId'].setValue('');
        this.employeeForm.controls['RoleCode'].setValue('');
        this.employeeForm.controls['RightsCode'].setValue('');
        this.employeeForm.controls['MobileNumber'].setValue('');
        this.employeeForm.controls['MspCategory'].setValue('');
        this.employeeForm.controls['MGRCODE'].setValue('');
        this.selected_manager = [];
        this.selected_loc = [];
        this.selected_hub = [];
        this.selected_region = [];
    };
    EditempComponent.prototype.toggleVisibility = function (e) {
        this.active = e.target.checked;
    };
    EditempComponent.prototype.togglebutton = function (evalue) {
        console.log(evalue);
        //this.employeeForm. = !this.filter;
        this.employeeForm.controls['IsActive'].setValue(evalue);
        this.active = evalue;
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
        console.log(country);
        console.log(this.Countries);
        this.states = this.Countries.filter(function (cntry) { return cntry.RoName == country; });
        console.log("Inside country filter");
        this.states.forEach(function (element) {
            //console.log(element.LocationName);
            _this.states2.push(element.LocationName);
            // this.empList.push(customObj);
        });
        this.states2 = this.states2.filter(function (el, i, a) { return i === a.indexOf(el); });
        /*if (confirm("Are you sure to delete " + name)) {
        }*/
        console.log(this.states2);
    };
    EditempComponent.prototype.removeCountry = function (country) {
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
    EditempComponent.prototype.removeState = function (state) {
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
    EditempComponent.prototype.changeState = function (state) {
        var _this = this;
        //console.log(this.states);
        this.cities = this.Countries.filter(function (cntry) { return cntry.LocationName == state; });
        this.cities.forEach(function (element) {
            console.log(element.HubLocationName);
            _this.cities2.push(element.HubLocationName);
            // this.empList.push(customObj);
        });
        this.cities2 = this.cities2.filter(function (el, i, a) { return i === a.indexOf(el); });
        console.log(this.cities2);
    };
    EditempComponent.prototype.RolesInput = function (event) {
        var selected = event.target.value;
        if (selected == "2") {
            this.getMSP();
            this.isMSPSelected = true;
            this.employeeForm.controls['MspCategory'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        }
        else {
            this.isMSPSelected = false;
            this.employeeForm.controls['MspCategory'].setValidators();
            this.employeeForm.controls['MspCategory'].updateValueAndValidity();
        }
        if (selected == "4" || selected == "6") {
            this.getLocations();
            this.isLocationSelected = true;
        }
        else {
            this.isLocationSelected = false;
            this.selected_region = [];
            this.selected_loc = [];
            this.selected_hub = [];
        }
    };
    EditempComponent.prototype.goToPage = function (pageName) {
        console.log(pageName);
        this.router.navigate(["" + pageName]);
    };
    EditempComponent.prototype.goto_update = function () {
        this.router.navigateByUrl('Employee/UpdateTicket/' + this.employeeService.edit_empCode);
    };
    EditempComponent.prototype.getMSP = function () {
        var _this = this;
        this.employeeService.getMSPDetail().subscribe(function (res) {
            res.Entity.forEach(function (element) {
                _this.MSP.push(element.MSP);
            });
            _this.MSP = _this.MSP.filter(function (el, i, a) { return i === a.indexOf(el); });
        });
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
            _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_5__["CommonFunctionality"],
            _Employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], EditempComponent);
    return EditempComponent;
}());



/***/ }),

/***/ "./src/app/Employee/editemp/editemp.module.ts":
/*!****************************************************!*\
  !*** ./src/app/Employee/editemp/editemp.module.ts ***!
  \****************************************************/
/*! exports provided: EditempModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditempModule", function() { return EditempModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _editemp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editemp.component */ "./src/app/Employee/editemp/editemp.component.ts");
/* harmony import */ var _editemp_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editemp.routing */ "./src/app/Employee/editemp/editemp.routing.ts");
/* harmony import */ var _Employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Employee.service */ "./src/app/Employee/Employee.service.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { HttpClientModule } from '@angular/common/http';





var EditempModule = /** @class */ (function () {
    function EditempModule() {
    }
    EditempModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _editemp_routing__WEBPACK_IMPORTED_MODULE_6__["routing"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                // HttpClientModule,
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
            ],
            entryComponents: [],
            declarations: [
                _editemp_component__WEBPACK_IMPORTED_MODULE_5__["EditempComponent"]
            ],
            providers: [_Employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"]],
        })
    ], EditempModule);
    return EditempModule;
}());



/***/ }),

/***/ "./src/app/Employee/editemp/editemp.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/Employee/editemp/editemp.routing.ts ***!
  \*****************************************************/
/*! exports provided: routing, EditempRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditempRoutingModule", function() { return EditempRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editemp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editemp.component */ "./src/app/Employee/editemp/editemp.component.ts");


//import { AuthGuard } from '../shared/Security/auth.guard';
var routes = [
    {
        path: '',
        component: _editemp_component__WEBPACK_IMPORTED_MODULE_1__["EditempComponent"],
        data: {
            breadcrumb: 'EditEmployee',
            icon: 'icofont-dashboard bg-c-blue',
            status: false
        },
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
var EditempRoutingModule = /** @class */ (function () {
    function EditempRoutingModule() {
    }
    return EditempRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-Employee-editemp-editemp-module.js.map