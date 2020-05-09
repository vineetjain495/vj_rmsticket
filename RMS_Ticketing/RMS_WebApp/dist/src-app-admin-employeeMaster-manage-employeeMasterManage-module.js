(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-admin-employeeMaster-manage-employeeMasterManage-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/observable/forkJoin.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/forkJoin.js ***!
  \***************************************************************/
/*! exports provided: forkJoin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"]; });


//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ "./src/app/admin/admin.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
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



var AdminService = /** @class */ (function () {
    function AdminService(commonFunc) {
        this.commonFunc = commonFunc;
        this.getAllRoleMasterUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/Admin/RoleMaster/GetAllRoleMaster';
    }
    AdminService.prototype.GetAllRoleMaster = function () {
        return this.commonFunc.CallHttp(this.getAllRoleMasterUrl, null, null);
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_app_commonFunctionality__WEBPACK_IMPORTED_MODULE_2__["CommonFunctionality"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/admin/employeeMaster/manage/duplicateRegionValidation.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/employeeMaster/manage/duplicateRegionValidation.ts ***!
  \**************************************************************************/
/*! exports provided: DuplicateRegionValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateRegionValidator", function() { return DuplicateRegionValidator; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DuplicateRegionValidator = /** @class */ (function () {
    function DuplicateRegionValidator() {
        this.validator = this.duplicateRegionValidator();
    }
    DuplicateRegionValidator_1 = DuplicateRegionValidator;
    DuplicateRegionValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    DuplicateRegionValidator.prototype.duplicateRegionValidator = function () {
        var _this = this;
        return function (c) {
            var isValid = false;
            if (c.value) {
                var data = lodash__WEBPACK_IMPORTED_MODULE_2__["filter"](_this.model, { 'AreaOfficeCode': c.value });
                if (data.length > 1) {
                    isValid = false;
                }
                else {
                    isValid = true;
                }
            }
            if (isValid) {
                return null;
            }
            else {
                return {
                    duplicateRegionValidator: {
                        valid: false
                    }
                };
            }
        };
    };
    var DuplicateRegionValidator_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('duplicateRegionValidator'),
        __metadata("design:type", Object)
    ], DuplicateRegionValidator.prototype, "model", void 0);
    DuplicateRegionValidator = DuplicateRegionValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[duplicateRegionValidator][ngModel]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return DuplicateRegionValidator_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DuplicateRegionValidator);
    return DuplicateRegionValidator;
}());



/***/ }),

/***/ "./src/app/admin/employeeMaster/manage/employeeMasterManage.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/admin/employeeMaster/manage/employeeMasterManage.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VtcGxveWVlTWFzdGVyL21hbmFnZS9lbXBsb3llZU1hc3Rlck1hbmFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/employeeMaster/manage/employeeMasterManage.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/employeeMaster/manage/employeeMasterManage.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployeeMasterManageComponent, AssignRoleRegion, AreaOffice, Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeMasterManageComponent", function() { return EmployeeMasterManageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignRoleRegion", function() { return AssignRoleRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaOffice", function() { return AreaOffice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/observable/forkJoin */ "./node_modules/rxjs-compat/_esm5/observable/forkJoin.js");
/* harmony import */ var _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.commonFunctionality */ "./src/app/app.commonFunctionality.ts");
/* harmony import */ var _services_DataService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/DataService */ "./src/app/services/DataService.ts");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _employeeMasterManage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employeeMasterManage.service */ "./src/app/admin/employeeMaster/manage/employeeMasterManage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var EmployeeMasterManageComponent = /** @class */ (function () {
    function EmployeeMasterManageComponent(_http, route, router, _commonFunctionality, ds, _adminService, _service, _session) {
        this._http = _http;
        this.route = route;
        this.router = router;
        this._commonFunctionality = _commonFunctionality;
        this.ds = ds;
        this._adminService = _adminService;
        this._service = _service;
        this._session = _session;
        this.dropDownRegionData = [];
        this.dropDownLocationData = [{
                Locations: [
                //    {
                //    LocationCode: 'L001',
                //    LocationName: 'Noida'
                //},
                //{
                //    LocationCode: 'L002',
                //    LocationName: 'Lajpat Nagar'
                //},
                //{
                //    LocationCode: 'L003',
                //    LocationName: 'Bandra'
                //},
                //{
                //    LocationCode: 'L004',
                //    LocationName: 'Andheri'
                //},
                //{
                //    LocationCode: 'L005',
                //    LocationName: 'Noida 2'
                //},
                //{
                //    LocationCode: 'L006',
                //    LocationName: 'Lajpat Nagar 2'
                //},
                //{
                //    LocationCode: 'L007',
                //    LocationName: 'Bandra 2'
                //},
                //{
                //    LocationCode: 'L008',
                //    LocationName: 'Andheri 2'
                //    }
                ]
            }
        ];
        this.showCompany = false;
        this.areaOfficeDropdown = {
            AreaOfficeCode: '',
            AreaOfficeName: '',
            Locations: []
        };
        this.dropDownSettings = {
            singleSelection: false,
            text: "Select Locations",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            labelKey: 'LocationName',
            primaryKey: 'LocationCode',
            maxHeight: 200
        };
        this.model = {
            EmpCode: '',
            AssignedRoleID: 0,
            EmpFullName: '',
            MappedRegionLocation: [{
                    AreaOfficeCode: '',
                    AreaOfficeName: '',
                    Locations: []
                }],
            CompanyID: 0,
            Email: '',
            MobileNumber: null
        };
    }
    EmployeeMasterManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var paramMode = this.route.snapshot.params["mode"];
        var paramEmpCode = this.route.snapshot.params["empCode"];
        this.loginUserDetails = JSON.parse(this._session.retrieve('userdetails'));
        if (this.loginUserDetails) {
            this.showCompany = this.loginUserDetails.CompanyID == 1;
        }
        Object(rxjs_observable_forkJoin__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([
            this._commonFunctionality.getCompany(),
            this._adminService.GetAllRoleMaster().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (data) {
                if (data.Success) {
                    return data.Entity.map(function (item) {
                        return {
                            RoleID: item.RoleID,
                            RoleName: item.RoleName
                        };
                    });
                }
                else {
                    return null;
                }
            })),
            this._service.GetAreaWithLocation()
        ]).subscribe(function (results) {
            _this.rolemasterData = results[1];
            if (results[0].Success) {
                if (results[0].Entity != null) {
                    _this.lCompanys = results[0].Entity;
                }
            }
            var data = results[2];
            if (data.Success) {
                _this.dropDownRegionData = data.Entity;
                if (paramMode.toLowerCase() === "add") {
                    _this.dropDownLocationData.push(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"]({ 'Locations': [] }));
                    _this.model.CompanyID = _this.loginUserDetails.CompanyID;
                    _this.ds.ShowHideToasty();
                }
                else if (paramMode.toLowerCase() === "edit") {
                    var employee = { ID: paramEmpCode };
                    _this._commonFunctionality.GetAssignedRoleRegion(employee).subscribe(function (data2) {
                        if (data2.Success) {
                            _this.dropDownLocationData = [];
                            lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"](data2.Entity.MappedRegionLocation, function (item) {
                                var regLoc = lodash__WEBPACK_IMPORTED_MODULE_4__["find"](_this.dropDownRegionData, { 'AreaOfficeCode': item.AreaOfficeCode });
                                _this.dropDownLocationData.push(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"]({
                                    Locations: lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](regLoc.Locations)
                                }));
                            });
                            _this.model = data2.Entity;
                            _this.ds.ShowHideToasty();
                        }
                        else {
                            _this.ds.ShowHideToasty({
                                title: 'Data Loading Error',
                                msg: data.Message,
                                showClose: true,
                                theme: 'bootstrap',
                                type: 'error',
                                closeOther: true,
                            });
                        }
                    });
                }
            }
            else {
                _this.ds.ShowHideToasty({
                    title: 'Data Loading Error',
                    msg: data.Message,
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'error',
                    closeOther: true,
                });
            }
        });
    };
    EmployeeMasterManageComponent.prototype.addItem = function () {
        this.dropDownLocationData.push(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"]({ 'Locations': [] }));
        this.model.MappedRegionLocation.push(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"](this.areaOfficeDropdown));
    };
    EmployeeMasterManageComponent.prototype.removeItem = function (item, idx) {
        lodash__WEBPACK_IMPORTED_MODULE_4__(this.model.MappedRegionLocation)
            .splice(idx, 1)
            .value();
        lodash__WEBPACK_IMPORTED_MODULE_4__(this.dropDownLocationData)
            .splice(idx, 1)
            .value();
    };
    EmployeeMasterManageComponent.prototype.onItemSelect = function (item, i) {
        console.log(item);
        console.log(this.model);
    };
    EmployeeMasterManageComponent.prototype.GetLocationData = function (selectedRegion) {
        var data = lodash__WEBPACK_IMPORTED_MODULE_4__["find"](this.dropDownRegionData, { 'AreaOfficeCode': selectedRegion.AreaOfficeCode });
        var response = [];
        if (data) {
            response = data.Locations;
        }
        return response;
    };
    EmployeeMasterManageComponent.prototype.regionChange = function ($event, i) {
        var data = lodash__WEBPACK_IMPORTED_MODULE_4__["find"](this.dropDownRegionData, { 'AreaOfficeCode': this.model.MappedRegionLocation[i].AreaOfficeCode });
        this.model.MappedRegionLocation[i].AreaOfficeName = data.AreaOfficeName;
        this.dropDownLocationData[i] = {
            Locations: lodash__WEBPACK_IMPORTED_MODULE_4__["assign"]([], data.Locations)
        };
    };
    EmployeeMasterManageComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.ds.ShowHideToasty({
                title: 'Mapping Employee in process....Wait!',
                msg: '',
                showClose: false,
                theme: 'bootstrap',
                type: 'wait',
                closeOther: true
            });
            this._service.AddUpdateEmployeeRoleAreaMapping(this.model).subscribe(function (response) {
                if (response.Success) {
                    _this.ds.ShowHideToasty({
                        title: 'Employee updated & Mapping done Successfully..',
                        msg: '',
                        showClose: true,
                        theme: 'bootstrap',
                        type: 'success',
                        closeOther: true,
                        timeout: 5000
                    });
                    _this.router.navigateByUrl('/Admin/EmployeeMaster/Index');
                    //this.router.navigate(['View']); 
                    //this.form.disable();
                }
                else {
                    _this.ds.ShowHideToasty({
                        title: 'Failure while updating..Check the error or contact administrator',
                        msg: response.Message,
                        showClose: true,
                        theme: 'bootstrap',
                        type: 'error',
                        closeOther: true,
                    });
                }
            });
        }
    };
    EmployeeMasterManageComponent.prototype.resetForm = function () {
        this.form.reset();
    };
    var _a;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], EmployeeMasterManageComponent.prototype, "form", void 0);
    EmployeeMasterManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-emp-master-manage',
            template: __webpack_require__(/*! ./employeeMasterManage.template.html */ "./src/app/admin/employeeMaster/manage/employeeMasterManage.template.html"),
            styles: [__webpack_require__(/*! ./employeeMasterManage.component.css */ "./src/app/admin/employeeMaster/manage/employeeMasterManage.component.css")],
            providers: [_employeeMasterManage_service__WEBPACK_IMPORTED_MODULE_10__["EmployeeMasterManageService"]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] !== "undefined" && _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]) === "function" ? _a : Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_7__["CommonFunctionality"],
            _services_DataService__WEBPACK_IMPORTED_MODULE_8__["DataService"], _admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"], _employeeMasterManage_service__WEBPACK_IMPORTED_MODULE_10__["EmployeeMasterManageService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"]])
    ], EmployeeMasterManageComponent);
    return EmployeeMasterManageComponent;
}());

var AssignRoleRegion = /** @class */ (function () {
    function AssignRoleRegion() {
    }
    return AssignRoleRegion;
}());

var AreaOffice = /** @class */ (function () {
    function AreaOffice() {
    }
    return AreaOffice;
}());

var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());



/***/ }),

/***/ "./src/app/admin/employeeMaster/manage/employeeMasterManage.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/employeeMaster/manage/employeeMasterManage.module.ts ***!
  \****************************************************************************/
/*! exports provided: EmployeeMasterManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeMasterManageModule", function() { return EmployeeMasterManageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employeeMasterManage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employeeMasterManage.component */ "./src/app/admin/employeeMaster/manage/employeeMasterManage.component.ts");
/* harmony import */ var _employeeMasterManage_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employeeMasterManage.routing */ "./src/app/admin/employeeMaster/manage/employeeMasterManage.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _duplicateRegionValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./duplicateRegionValidation */ "./src/app/admin/employeeMaster/manage/duplicateRegionValidation.ts");
/* harmony import */ var _shared_directives_numberOnly_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/directives/numberOnly.directive */ "./src/app/shared/directives/numberOnly.directive.ts");
/* harmony import */ var _shared_directives_UniqueCodeValidator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/UniqueCodeValidator.directive */ "./src/app/shared/directives/UniqueCodeValidator.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { Ng2SmartTableModule } from 'ng2-smart-table';







//import { DuplicateRegionValidator } from './duplicateRegionValidation';
var EmployeeMasterManageModule = /** @class */ (function () {
    function EmployeeMasterManageModule() {
    }
    EmployeeMasterManageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]],
            imports: [
                _employeeMasterManage_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                //Ng2SmartTableModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_employeeMasterManage_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeMasterManageComponent"], _duplicateRegionValidation__WEBPACK_IMPORTED_MODULE_5__["DuplicateRegionValidator"], _shared_directives_numberOnly_directive__WEBPACK_IMPORTED_MODULE_6__["NumberOnlyDirective"], _shared_directives_UniqueCodeValidator_directive__WEBPACK_IMPORTED_MODULE_7__["UniqueCodeValidatorDirective"]],
        })
    ], EmployeeMasterManageModule);
    return EmployeeMasterManageModule;
}());



/***/ }),

/***/ "./src/app/admin/employeeMaster/manage/employeeMasterManage.routing.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/employeeMaster/manage/employeeMasterManage.routing.ts ***!
  \*****************************************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employeeMasterManage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employeeMasterManage.component */ "./src/app/admin/employeeMaster/manage/employeeMasterManage.component.ts");
/* harmony import */ var _shared_Security_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/Security/auth.guard */ "./src/app/shared/Security/auth.guard.ts");



var routes = [
    {
        path: '',
        component: _employeeMasterManage_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeMasterManageComponent"],
        data: {
            breadcrumb: 'Manage',
            status: false
        },
        canActivate: [_shared_Security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/admin/employeeMaster/manage/employeeMasterManage.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/employeeMaster/manage/employeeMasterManage.service.ts ***!
  \*****************************************************************************/
/*! exports provided: EmployeeMasterManageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeMasterManageService", function() { return EmployeeMasterManageService; });
/* harmony import */ var _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../GlobalShareCode */ "./src/app/GlobalShareCode.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_commonFunctionality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.commonFunctionality */ "./src/app/app.commonFunctionality.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeMasterManageService = /** @class */ (function () {
    function EmployeeMasterManageService(commonFunc) {
        this.commonFunc = commonFunc;
        this.addUpdateEmployeeRoleAreaMappingUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/Admin/EmployeeMaster/AddUpdateEmployeeRoleAreaMapping';
        this.getAreaWithLocationUrl = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/Admin/EmployeeMaster/GetAreaWithLocation';
        this.CheckEmployeeExist = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + '/Admin/EmployeeMaster/CheckEmployeeExist';
    }
    EmployeeMasterManageService.prototype.GetAreaWithLocation = function () {
        return this.commonFunc.CallHttp(this.getAreaWithLocationUrl, null, null);
    };
    EmployeeMasterManageService.prototype.AddUpdateEmployeeRoleAreaMapping = function (item) {
        return this.commonFunc.CallHttp(this.addUpdateEmployeeRoleAreaMappingUrl, item, null);
    };
    EmployeeMasterManageService.prototype.CheckEmployeeCodeExist = function (item) {
        return this.commonFunc.CallHttp(this.CheckEmployeeExist, item, null);
    };
    EmployeeMasterManageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_app_commonFunctionality__WEBPACK_IMPORTED_MODULE_2__["CommonFunctionality"]])
    ], EmployeeMasterManageService);
    return EmployeeMasterManageService;
}());



/***/ }),

/***/ "./src/app/admin/employeeMaster/manage/employeeMasterManage.template.html":
/*!********************************************************************************!*\
  !*** ./src/app/admin/employeeMaster/manage/employeeMasterManage.template.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card [title]=\"'Employee Master'\" [showRightSection]=\"false\">\r\n      <form novalidate #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"row\">\r\n          <div [ngClass]=\"{'col-sm-3':showCompany,'col-sm-4':!showCompany}\">\r\n            <div class=\"form-group row\"\r\n                 [ngClass]=\"{ 'has-danger': empCode.invalid && empCode.dirty, 'has-success': empCode.valid && empCode.dirty }\">\r\n\r\n              <label class=\"col-sm-12 col-form-label\">Emp. Code*</label>\r\n              <div class=\"col-sm-12\">\r\n                <input type=\"text\" class=\"form-control withIcon\" placeholder=\"Emp. Code\"\r\n                       name=\"empCode\"\r\n                       [(ngModel)]=\"model.EmpCode\"\r\n                       required\r\n                       [empCodeExists]=\"model.CompanyID\"\r\n                       #empCode=\"ngModel\"\r\n                       [ngClass]=\"{ 'form-control-danger': empCode.invalid && empCode.dirty, 'form-control-success': empCode.valid && empCode.dirty }\" />\r\n                <div *ngIf=\"empCode.errors?.empCodeExists\" class=\"messages text-danger\">EmployeeCode exists already</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div [ngClass]=\"{'col-sm-3':showCompany,'col-sm-4':!showCompany}\">\r\n            <div class=\"form-group row\"\r\n                 [ngClass]=\"{ 'has-danger': empFullName.invalid && empFullName.dirty, 'has-success': empFullName.valid && empFullName.dirty }\">\r\n              <label class=\"col-sm-12 col-form-label\">Emp. Full Name*</label>\r\n              <div class=\"col-sm-12\">\r\n                <input type=\"text\" class=\"form-control withIcon\" placeholder=\"Emp. Full Name\"\r\n                       name=\"empFullName\"\r\n                       [(ngModel)]=\"model.EmpFullName\"\r\n                       required\r\n                       #empFullName=\"ngModel\"\r\n                       [ngClass]=\"{ 'form-control-danger': empFullName.invalid && empFullName.dirty, 'form-control-success': empFullName.valid && empFullName.dirty }\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div [ngClass]=\"{'col-sm-3':showCompany,'col-sm-4':!showCompany}\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-12 col-form-label\">Role</label>\r\n              <div class=\"col-sm-12\">\r\n                <select class=\"form-control\"\r\n                        name=\"tokenKey\"\r\n                        required\r\n                        [(ngModel)]=\"model.AssignedRoleID\"\r\n                        #role=\"ngModel\"\r\n                        [ngClass]=\"{ 'form-control-danger': role.invalid && role.dirty, 'form-control-success': role.valid && role.dirty }\">\r\n                  <option value=\"0\">Select</option>\r\n                  <option *ngFor=\"let key of rolemasterData\" value=\"{{key.RoleID}}\">{{key.RoleName}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-sm-3\" *ngIf=\"showCompany\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-12 col-form-label\">Company</label>\r\n              <div class=\"col-sm-12\">\r\n                <select class=\"form-control\"\r\n                        [(ngModel)]=\"model.CompanyID\"\r\n                        name=\"companyID\"\r\n                        #companyID=\"ngModel\">\r\n                  <option value=\"0\">Select</option>\r\n                  <option *ngFor=\"let company of lCompanys\" [value]=\"company.CompanyID\">\r\n                    {{company.CompanyName}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group row\"\r\n                 [ngClass]=\"{ 'has-danger': email.invalid && email.dirty, 'has-success': email.valid && email.dirty }\">\r\n              <label class=\"col-sm-12 col-form-label\">Emp. Email*</label>\r\n              <div class=\"col-sm-12\">\r\n                <input type=\"text\" class=\"form-control withIcon\" placeholder=\"Emp. Email\"\r\n                       name=\"email\"\r\n                       [(ngModel)]=\"model.Email\"\r\n                       #email=\"ngModel\"\r\n                       pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                       [ngClass]=\"{ 'form-control-danger': email.invalid && email.dirty, 'form-control-success': email.valid && email.dirty }\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-12 col-form-label\">Emp. Mobile No.</label>\r\n              <div class=\"col-sm-12\">\r\n                <input type=\"text\" class=\"form-control withIcon\" placeholder=\"Emp. Mobile no.\"\r\n                       name=\"mobileNumber\"\r\n                       [(ngModel)]=\"model.MobileNumber\"\r\n                       #mobileNumber=\"ngModel\"\r\n                       myNumberOnly />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group row\">\r\n              <label class=\"col-sm-12 col-form-label\">Active.</label>\r\n              <div class=\"col-sm-12\">\r\n                <input type=\"checkbox\" class=\"form-control withIcon\"\r\n                       name=\"active\"\r\n                       [(ngModel)]=\"model.Active\"\r\n                       #active=\"ngModel\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"form-group row\">\r\n              <div class=\"col-sm-12\">\r\n                <table class=\"table table-bordered\">\r\n                  <thead>\r\n                    <tr>\r\n                      <td colspan=\"3\">\r\n                        <a href=\"javascript:void(0);\" (click)=\"addItem();\">Add</a>\r\n                        <a href=\"javascript:void(0);\">Reset</a>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td style=\"width:30%; min-width:100px;\">AreaOffice</td>\r\n                      <td style=\"width:70%\">Location</td>\r\n                      <td>&nbsp;</td>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let area of model.MappedRegionLocation; let i = index\">\r\n                      <td>\r\n                        <select class=\"form-control\"\r\n                                (change)=\"regionChange($event, i);\"\r\n                                name=\"area{{i}}\"\r\n                                #area{{i}}=\"ngModel\"\r\n                                [(ngModel)]=\"model.MappedRegionLocation[i].AreaOfficeCode\"\r\n                                [duplicateRegionValidator]=\"model.MappedRegionLocation\">\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let area1 of dropDownRegionData\"\r\n                                  [ngValue]=\"area1.AreaOfficeCode\">\r\n                            {{area1.AreaOfficeName}}\r\n                          </option>\r\n                        </select>\r\n                      </td>\r\n                      <td>\r\n                        <angular2-multiselect [data]=\"dropDownLocationData[i].Locations\"\r\n                                              [(ngModel)]=\"model.MappedRegionLocation[i].Locations\"\r\n                                              [settings]=\"dropDownSettings\"\r\n                                              (onSelect)=\"onItemSelect($event, i)\"\r\n                                              name=\"location{{i}}\" #location{{i}}=\"ngModel\">\r\n                        </angular2-multiselect>\r\n                      </td>\r\n                      <td><a href=\"javascript:void(0);\" (click)=\"removeItem(area, i)\">Remove</a></td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <div class=\"clear\" style=\"height:150px;\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"form-group row\">\r\n\r\n              <div class=\"col-sm-12 button-page\">\r\n\r\n                <button class=\"btn btn-inverse float-right\" (click)=\"resetForm()\">Reset</button>\r\n\r\n                <button type=\"submit\" class=\"btn btn-primary float-right\"\r\n                        [ngClass]=\"{ 'disabled': !f.form.valid }\"\r\n                        [disabled]=\"!f.form.valid\">\r\n                  Submit\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/directives/UniqueCodeValidator.directive.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/directives/UniqueCodeValidator.directive.ts ***!
  \********************************************************************/
/*! exports provided: ExistingCode, UniqueCodeValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExistingCode", function() { return ExistingCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueCodeValidatorDirective", function() { return UniqueCodeValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _admin_employeeMaster_manage_employeeMasterManage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin/employeeMaster/manage/employeeMasterManage.service */ "./src/app/admin/employeeMaster/manage/employeeMasterManage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






function ExistingCode(AssignRoleRegionsManageService, route, companyID) {
    return function (control) {
        var empID = route.snapshot.params["empCode"] ? route.snapshot.params["empCode"] : 0;
        var debounceTime = 1000;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].timer(debounceTime).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return AssignRoleRegionsManageService.CheckEmployeeCodeExist({
                "EmpCode": control.value, "Id": empID, "CompanyID": companyID
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                return (data.Success) ? { "empCodeExists": true } : null;
            }));
        }));
    };
}
var UniqueCodeValidatorDirective = /** @class */ (function () {
    function UniqueCodeValidatorDirective(_AssignRoleRegionsManageService, route) {
        this._AssignRoleRegionsManageService = _AssignRoleRegionsManageService;
        this.route = route;
    }
    UniqueCodeValidatorDirective_1 = UniqueCodeValidatorDirective;
    UniqueCodeValidatorDirective.prototype.validate = function (control) {
        console.log("companyID", this.model);
        return ExistingCode(this._AssignRoleRegionsManageService, this.route, this.model)(control);
    };
    var UniqueCodeValidatorDirective_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('empCodeExists'),
        __metadata("design:type", Object)
    ], UniqueCodeValidatorDirective.prototype, "model", void 0);
    UniqueCodeValidatorDirective = UniqueCodeValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[empCodeExists][ngModel]',
            //selector: '[EmpCodeExists]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"], useExisting: UniqueCodeValidatorDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [_admin_employeeMaster_manage_employeeMasterManage_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeMasterManageService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], UniqueCodeValidatorDirective);
    return UniqueCodeValidatorDirective;
}());



/***/ }),

/***/ "./src/app/shared/directives/numberOnly.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/numberOnly.directive.ts ***!
  \***********************************************************/
/*! exports provided: NumberOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function() { return NumberOnlyDirective; });
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

var NumberOnlyDirective = /** @class */ (function () {
    function NumberOnlyDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-', 'Control'];
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        console.log(event.key);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        if (event.ctrlKey && event.key === 'v') {
            return;
        }
        else {
            var current = this.el.nativeElement.value;
            var next = current.concat(event.key);
            if (next && !String(next).match(this.regex)) {
                event.preventDefault();
            }
        }
    };
    NumberOnlyDirective.prototype.onPaste = function (event) {
        var content = event.clipboardData.getData('text/plain');
        if (isNaN(content)) {
            event.preventDefault();
        }
        console.log(content);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onKeyDown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('paste', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onPaste", null);
    NumberOnlyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[myNumberOnly]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-admin-employeeMaster-manage-employeeMasterManage-module.js.map