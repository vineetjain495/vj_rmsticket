(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-Employee-updateTicket-updateTicket-module"],{

/***/ "./src/app/Employee/updateTicket/updateTicket.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Employee/updateTicket/updateTicket.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0VtcGxveWVlL3VwZGF0ZVRpY2tldC91cGRhdGVUaWNrZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Employee/updateTicket/updateTicket.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Employee/updateTicket/updateTicket.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Update Ticket Assignment'\" [blockClass]=\"'tran-data'\" [showRightSection]=\"'false'\"\r\n          [showBack]=\"mainGridShow\"\r\n          [cardToggle]=\"cardToggleGrid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n      <form [formGroup]=\"updateTicketForm\" (ngSubmit)=\"onFormSubmit()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <label class=\"col-lg-12 col-form-label\">Replacing Employee Code</label>\r\n            <input type=\"text\" formControlName=\"Last_Type_EmpCode\" id=\"Last_Type_EmpCode\"\r\n                   class=\"form-control input-sm\" (blur)=\"getTicketCount2($event)\" placeholder=\"Code *\" required>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <label class=\"col-lg-12 col-form-label\">Employee ID</label>\r\n            <ng-multiselect-dropdown name=\"ticketEmployee\"\r\n                                     [placeholder]=\"'Select Employee'\" [data]=\"Emp_details\" formControlName=\"Emp_ID\"\r\n                                     [settings]=\"dropdownSettings2\">\r\n            </ng-multiselect-dropdown>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"isTicketAvailable\">\r\n          <div class=\"col-lg-8\">\r\n            <div class=\"alert alert-success\">\r\n              Total <strong> {{ ticket_count }} </strong> available for this ID.\r\n            </div>\r\n            <input type=\"hidden\" formControlName=\"ticket_count\" id=\"Last_Type_EmpCode\"\r\n                   class=\"form-control input-sm\" placeholder=\"Code *\" value=\"{{ ticket_count }}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"isTicketEmpty\">\r\n          <div class=\"col-lg-8\">\r\n            <div class=\"alert alert-danger\">\r\n              Please enter Employee ID for whom you have to assign tickets.\r\n            </div>\r\n            <input type=\"hidden\" formControlName=\"ticket_count\" id=\"Last_Type_EmpCode\"\r\n                   class=\"form-control input-sm\" placeholder=\"Code *\" value=\"{{ ticket_count }}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-12 text-center\">\r\n\r\n                <input type=\"submit\" value=\"Update Ticket\" [disabled]=\"!updateTicketForm.valid\"\r\n                       class=\"btn btn-info\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n \r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/Employee/updateTicket/updateTicket.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Employee/updateTicket/updateTicket.component.ts ***!
  \*****************************************************************/
/*! exports provided: UpdateTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTicketComponent", function() { return UpdateTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Employee.service */ "./src/app/Employee/Employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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





var UpdateTicketComponent = /** @class */ (function () {
    function UpdateTicketComponent(employeeService, formbulider, ds, 
    // private route: ActivatedRoute,
    router) {
        var _this = this;
        this.employeeService = employeeService;
        this.formbulider = formbulider;
        this.ds = ds;
        this.router = router;
        this.Emp_details = [];
        this.dropdownSettings = {};
        this.dropdownSettings2 = {};
        // this.ticket_count = 0;
        this.ds.ShowHideToasty({
            title: 'Please Wait...',
            msg: '',
            showClose: false,
            theme: 'bootstrap',
            type: 'wait',
            closeOther: true
        });
        if (this.employeeService.edit_empCode != "") {
            this.last_emp_id_val = this.employeeService.edit_empCode;
            console.log(this.last_emp_id_val);
            this.getTicketCount(this.last_emp_id_val);
        }
        else {
            this.last_emp_id_val = '';
        }
        console.log(this.ticket_count);
        this.updateTicketForm = this.formbulider.group({
            Emp_ID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            Last_Type_EmpCode: [this.last_emp_id_val, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            ticket_count: [this.ticket_count]
        });
        this.employeeService.getEmployeeDetails().subscribe(function (res) {
            res.Entity.forEach(function (element) {
                console.log(res);
                if (element) {
                    _this.Emp_details.push(element.Type_EmpCode + " - ( " + element.EmployeeName + " )");
                    //console.log(this.Emp_details);
                }
            });
            _this.Emp_details = _this.Emp_details.filter(function (el, i, a) { return i === a.indexOf(el); });
        });
        this.ds.ShowHideToasty({
            title: 'Update Ticket Here',
            msg: '',
            showClose: true,
            theme: 'bootstrap',
            type: 'success',
            closeOther: true,
            timeout: 5000
        });
    }
    UpdateTicketComponent.prototype.ngOnInit = function () {
        this.dropdownSettings2 = {
            singleSelection: false,
            // idField: 'item_id',
            // textField: 'item_text',
            enableCheckAll: false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            limitSelection: 0,
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    };
    UpdateTicketComponent.prototype.onFormSubmit = function () {
        //console.log("hello");
        var employeeID = this.updateTicketForm.value;
        console.log(employeeID);
        this.UpdateTicketAssign(employeeID);
        //this.updateTicketForm.reset();
    };
    UpdateTicketComponent.prototype.UpdateTicketAssign = function (employee) {
        var _this = this;
        this.ds.ShowHideToasty({
            title: 'Please Wait...',
            msg: '',
            showClose: false,
            theme: 'bootstrap',
            type: 'wait',
            closeOther: true
        });
        this.employeeService.UpdateTicketAssign(employee).subscribe(function (response) {
            if (response.Success) {
                _this.ds.ShowHideToasty({
                    title: 'Record Updated Successfully',
                    msg: '',
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'success',
                    closeOther: true,
                    timeout: 5000
                });
            }
            else {
                _this.ds.ShowHideToasty({
                    title: 'Failed to Create Ticket and Upload file',
                    msg: response.Message,
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'error',
                    closeOther: true,
                });
            }
        });
    };
    UpdateTicketComponent.prototype.getTicketCount2 = function (event) {
        var _this = this;
        var employeeID = event.target.value;
        if (employeeID != "") {
            console.log(employeeID);
            this.employeeService.getEmployeeTicketsByID(employeeID).subscribe(function (res) {
                _this.ticket_count = res.Entity;
                console.log(_this.ticket_count);
                _this.isTicketAvailable = true;
                _this.isTicketEmpty = false;
                _this.updateTicketForm.controls['ticket_count'].setValue(_this.ticket_count);
                _this.dropdownSettings2 = {
                    singleSelection: false,
                    // idField: 'item_id',
                    // textField: 'item_text',
                    enableCheckAll: false,
                    selectAllText: 'Select All',
                    unSelectAllText: 'UnSelect All',
                    limitSelection: _this.ticket_count,
                    itemsShowLimit: 3,
                    allowSearchFilter: true
                };
            });
        }
        else {
            this.isTicketEmpty = true;
        }
    };
    UpdateTicketComponent.prototype.getTicketCount = function (employeeID) {
        var _this = this;
        console.log(employeeID);
        this.employeeService.getEmployeeTicketsByID(employeeID).subscribe(function (res) {
            _this.ticket_count = res.Entity;
            console.log(_this.ticket_count);
            _this.isTicketAvailable = true;
            _this.isTicketEmpty = false;
            _this.updateTicketForm.controls['ticket_count'].setValue(_this.ticket_count);
            _this.dropdownSettings2 = {
                singleSelection: false,
                // idField: 'item_id',
                // textField: 'item_text',
                enableCheckAll: false,
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                limitSelection: _this.ticket_count,
                itemsShowLimit: 3,
                allowSearchFilter: true
            };
        });
    };
    UpdateTicketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-ticket',
            template: __webpack_require__(/*! ./updateTicket.component.html */ "./src/app/Employee/updateTicket/updateTicket.component.html"),
            styles: [__webpack_require__(/*! ./updateTicket.component.css */ "./src/app/Employee/updateTicket/updateTicket.component.css")]
        }),
        __metadata("design:paramtypes", [_Employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_DataService__WEBPACK_IMPORTED_MODULE_4__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UpdateTicketComponent);
    return UpdateTicketComponent;
}());



/***/ }),

/***/ "./src/app/Employee/updateTicket/updateTicket.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Employee/updateTicket/updateTicket.module.ts ***!
  \**************************************************************/
/*! exports provided: UpdateTicketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTicketModule", function() { return UpdateTicketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _updateTicket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateTicket.component */ "./src/app/Employee/updateTicket/updateTicket.component.ts");
/* harmony import */ var _updateTicket_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateTicket.routing */ "./src/app/Employee/updateTicket/updateTicket.routing.ts");
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




var UpdateTicketModule = /** @class */ (function () {
    function UpdateTicketModule() {
    }
    UpdateTicketModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _updateTicket_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
            ],
            entryComponents: [],
            declarations: [
                _updateTicket_component__WEBPACK_IMPORTED_MODULE_4__["UpdateTicketComponent"]
            ],
            providers: [_Employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]],
        })
    ], UpdateTicketModule);
    return UpdateTicketModule;
}());



/***/ }),

/***/ "./src/app/Employee/updateTicket/updateTicket.routing.ts":
/*!***************************************************************!*\
  !*** ./src/app/Employee/updateTicket/updateTicket.routing.ts ***!
  \***************************************************************/
/*! exports provided: routing, UpdateTicketRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTicketRoutingModule", function() { return UpdateTicketRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _updateTicket_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTicket.component */ "./src/app/Employee/updateTicket/updateTicket.component.ts");


//import { AuthGuard } from '../shared/Security/auth.guard';
var routes = [
    {
        path: '',
        component: _updateTicket_component__WEBPACK_IMPORTED_MODULE_1__["UpdateTicketComponent"],
        data: {
            breadcrumb: 'UpdateTicket',
            icon: 'icofont-dashboard bg-c-blue',
            status: false
        },
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
var UpdateTicketRoutingModule = /** @class */ (function () {
    function UpdateTicketRoutingModule() {
    }
    return UpdateTicketRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-Employee-updateTicket-updateTicket-module.js.map