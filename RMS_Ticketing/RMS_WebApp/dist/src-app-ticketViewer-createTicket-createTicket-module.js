(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-ticketViewer-createTicket-createTicket-module"],{

/***/ "./src/app/ticketViewer/createTicket/createTicket.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/ticketViewer/createTicket/createTicket.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textboxheight {\r\n  height: 30px;\r\n}\r\n\r\n.topTable {\r\n  border: 1px solid #07002A;\r\n}\r\n\r\n.topTable-table {\r\n  width: 100%\r\n}\r\n\r\n.topTable-table-th {\r\n  height: 20px;\r\n  text-align: center;\r\n  background-color: dodgerblue;\r\n  color: white\r\n}\r\n\r\n.topTable-table-td {\r\n  text-align: center;\r\n}\r\n\r\n.ng-select.ng-invalid.ng-touched .ng-select-container {\r\n  border-color: #dc3545;\r\n}\r\n\r\n.ng-select.ng-valid.ng-touched .ng-select-container {\r\n  border-color: #2ecc71;\r\n  color: #2ecc71;\r\n}\r\n\r\n.ng-select .ng-select-container {\r\n  min-height: 29px;\r\n}\r\n\r\n.ng-select.ng-select-single .ng-select-container {\r\n  height: 29px;\r\n}\r\n\r\n.ng-select .ng-select-container .ng-value-container {\r\n  padding-top: 4px;\r\n}\r\n\r\n.ng-select .ng-clear-wrapper {\r\n  padding-top: 4px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0Vmlld2VyL2NyZWF0ZVRpY2tldC9jcmVhdGVUaWNrZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLDBCQUEwQjtDQUMzQjs7QUFFRDtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0NBQ2hCOztBQUlEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvdGlja2V0Vmlld2VyL2NyZWF0ZVRpY2tldC9jcmVhdGVUaWNrZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94aGVpZ2h0IHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi50b3BUYWJsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzA3MDAyQTtcclxufVxyXG5cclxuLnRvcFRhYmxlLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJVxyXG59XHJcblxyXG4udG9wVGFibGUtdGFibGUtdGgge1xyXG4gIGhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICBjb2xvcjogd2hpdGVcclxufVxyXG5cclxuLnRvcFRhYmxlLXRhYmxlLXRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3QubmctaW52YWxpZC5uZy10b3VjaGVkIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICBib3JkZXItY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3QubmctdmFsaWQubmctdG91Y2hlZCAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMmVjYzcxO1xyXG4gIGNvbG9yOiAjMmVjYzcxO1xyXG59XHJcblxyXG5cclxuXHJcbi5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDI5cHg7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAyOXB4O1xyXG59XHJcblxyXG4ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3QgLm5nLWNsZWFyLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/ticketViewer/createTicket/createTicket.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ticketViewer/createTicket/createTicket.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateTicketComponent, CreateTicket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTicketComponent", function() { return CreateTicketComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTicket", function() { return CreateTicket; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ticketViewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ticketViewer.service */ "./src/app/ticketViewer/ticketViewer.service.ts");
/* harmony import */ var src_app_services_DataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/DataService */ "./src/app/services/DataService.ts");
/* harmony import */ var _createTicket_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createTicket.validator */ "./src/app/ticketViewer/createTicket/createTicket.validator.ts");
/* harmony import */ var src_app_app_commonFunctionality__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.commonFunctionality */ "./src/app/app.commonFunctionality.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreateTicketComponent = /** @class */ (function () {
    function CreateTicketComponent(datepipe, service, ds, router, formBuilder, cf) {
        var _this = this;
        this.datepipe = datepipe;
        this.service = service;
        this.ds = ds;
        this.router = router;
        this.formBuilder = formBuilder;
        this.cf = cf;
        this.filetype = ["txt", "doc", "docx"];
        this.submitted = true;
        this.showIncidentDate = false;
        this.model = new CreateTicket();
        this.isSaveButtonDisable = false;
        this.hideCustomerShortagefields = false;
        this.hideShortageQueryfield = true;
        this.hideAccountNumber = false;
        this.hideEmailDate = false;
        this.hideDate = true;
        this.model.QueryCategory = null;
        this.model.QueryType = null;
        this.cf.GetUserDetails().subscribe(function (data) {
            if (data.Success) {
                _this.hideEmailDate = data.Entity.AssignedRoleID == 2 ? true : false;
                _this.hideDate = data.Entity.AssignedRoleID == 2 ? false : true;
                if (_this.hideEmailDate) {
                    _this.createTicketForm.controls['emailDateValidations'].clearValidators();
                    var date = new Date();
                    _this.model.EmailDate = _this.datepipe.transform(date, 'dd-MM-yyyy');
                }
            }
        });
    }
    Object.defineProperty(CreateTicketComponent.prototype, "form", {
        get: function () { return this.createTicketForm.controls; },
        enumerable: true,
        configurable: true
    });
    CreateTicketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dateValue = new Date();
        this.emailDateValue = new Date();
        this.incidentDateValue = new Date();
        this.maxDate = new Date();
        this.incidentMaxDate = new Date();
        this.service.getQueryType().subscribe(function (result) {
            var index = result.Entity.queryType.indexOf("physical shortage".toUpperCase());
            if (index !== -1) {
                result.Entity.queryType.splice(index, 1);
            }
            _this.queryTypeOptions = result.Entity.queryType;
            _this.queryCategoryOptions = result.Entity.queryCategory;
        });
        this.createTicketForm = this.formBuilder.group({
            queryType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            queryCategory: ['', []],
            emailDateValidations: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            incidentDateValidation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            disputedAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[0-9]+$'), _createTicket_validator__WEBPACK_IMPORTED_MODULE_5__["CreateTicketValidator"].cannotBeZero, _createTicket_validator__WEBPACK_IMPORTED_MODULE_5__["CreateTicketValidator"].multiplesOf10]],
            atmID: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            bank: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            account: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            location: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            transactionAmount: ['', []],
            transactionNo: ['', []],
            cardNo: ['', []],
            fromDateValidations: ['', []],
            toDateValidations: ['', []],
            referenceNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[a-z0-9A-Z]+$')]],
            accountNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[0-9]+$')]],
            disputeComments: ['', []],
            upload: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _createTicket_validator__WEBPACK_IMPORTED_MODULE_5__["CreateTicketValidator"].requiredFileType(this.filetype)]],
            dateValidations: [{ value: '', disabled: true }, []],
        }, {
            validator: _createTicket_validator__WEBPACK_IMPORTED_MODULE_5__["CreateTicketValidator"].transactionAmountvalidation('transactionAmount', 'disputedAmount'),
        });
        this.createTicketForm.valueChanges.subscribe(function (valuesChanged) {
            _this.submitted = _this.createTicketForm.valid;
        });
    };
    CreateTicketComponent.prototype.onEmailDatePickerChanged = function (event) {
        if (event) {
            this.incidentMaxDate = new Date(this.model.EmailDate);
            this.fromDateMinDate = new Date(this.model.EmailDate);
        }
        else {
            this.showIncidentDate = true;
        }
    };
    CreateTicketComponent.prototype.onAtmIdEntered = function (event) {
        var _this = this;
        if (event.target.value != null && event.target.value != "") {
            this.ds.ShowHideToasty({
                title: 'Please Wait...',
                msg: '',
                showClose: false,
                theme: 'bootstrap',
                type: 'wait',
                closeOther: true
            });
            this.model.ATMID = event.target.value;
            this.service.getMasterData(this.model).subscribe(function (result) {
                if (result.Success) {
                    _this.ds.ShowHideToasty({
                        title: 'Valid AtmID:(' + event.target.value + ')..',
                        msg: '',
                        showClose: true,
                        theme: 'bootstrap',
                        type: 'success',
                        closeOther: true,
                        timeout: 5000
                    });
                    _this.model.Bank = result.Entity.Bank;
                    _this.model.Account = result.Entity.Account;
                    _this.model.MSP = result.Entity.Account;
                    _this.model.Location = result.Entity.Location;
                }
                else {
                    _this.ds.ShowHideToasty({
                        title: 'Failure..',
                        msg: 'AtmID:(' + event.target.value + ') not Valid, Kindly enter correct ATMID',
                        showClose: true,
                        theme: 'bootstrap',
                        type: 'error',
                        closeOther: true,
                    });
                    _this.model.ATMID = null;
                    _this.model.Account = null;
                    _this.model.MSP = null;
                    _this.model.Location = null;
                }
            });
        }
    };
    CreateTicketComponent.prototype.selectionChanged = function ($event) {
        if ($event !== undefined) {
            if ($event != "Customer Claim".toUpperCase()) {
                this.aCustomerClaim();
            }
            else {
                this.notACustomerClaim();
            }
            if ($event != "Shortage query".toLocaleUpperCase()) {
                this.hideAccountNumber = false;
            }
            else {
                this.hideAccountNumber = true;
            }
        }
        else {
            this.notACustomerClaim();
        }
    };
    CreateTicketComponent.prototype.notACustomerClaim = function () {
        this.hideAccountNumber = false;
        this.hideCustomerShortagefields = false;
        this.hideShortageQueryfield = true;
        this.createTicketForm.controls['transactionAmount'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[0-9]+$'), _createTicket_validator__WEBPACK_IMPORTED_MODULE_5__["CreateTicketValidator"].cannotBeZero, _createTicket_validator__WEBPACK_IMPORTED_MODULE_5__["CreateTicketValidator"].multiplesOf10]);
        this.createTicketForm.controls['transactionNo'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(12)]);
        this.createTicketForm.controls['cardNo'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[0-9]+[xX]+[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(19), _createTicket_validator__WEBPACK_IMPORTED_MODULE_5__["CreateTicketValidator"].CardNo,]);
        this.createTicketForm.controls['queryCategory'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,]);
        this.createTicketForm.setControl('validator', this.createTicketForm.controls['validator']);
        this.createTicketForm.controls['queryCategory'].enable();
    };
    CreateTicketComponent.prototype.aCustomerClaim = function () {
        this.hideCustomerShortagefields = true;
        this.hideShortageQueryfield = false;
        this.model.QueryCategory = null;
        this.createTicketForm.controls['transactionAmount'].clearValidators();
        this.createTicketForm.controls['transactionNo'].clearValidators();
        this.createTicketForm.controls['cardNo'].clearValidators();
        this.createTicketForm.controls['queryCategory'].clearValidators();
        this.createTicketForm.setControl('validator', null);
        this.createTicketForm.controls['queryCategory'].disable();
    };
    CreateTicketComponent.prototype.onToggleFromDatePicker = function () {
        this.fromDate.toggle();
    };
    CreateTicketComponent.prototype.onToggleToDatePicker = function () {
        this.toDate.toggle();
    };
    CreateTicketComponent.prototype.onFromDatePickerChanged = function (event) {
        this.minDate = event;
    };
    CreateTicketComponent.prototype.onFileChange = function ($event) {
        if ($event.target.files.length > 0) {
            this.model.upload = $event.target.files[0];
        }
    };
    CreateTicketComponent.prototype.onSubmit = function () {
        if (this.createTicketForm.invalid) {
            return;
        }
        this.callServiceCreateTicket();
    };
    CreateTicketComponent.prototype.callServiceCreateTicket = function () {
        var _this = this;
        var formData = new FormData();
        for (var key in this.model) {
            formData.append(key, this.model[key]);
        }
        this.ds.ShowHideToasty({
            title: 'Creating Ticket and Uploading File....Wait!',
            msg: '',
            showClose: false,
            theme: 'bootstrap',
            type: 'wait',
            closeOther: true
        });
        this.model.ModifiedDate = this.model.EmailDate;
        this.service.createTicket(formData).subscribe(function (response) {
            if (response.Success) {
                _this.ds.ShowHideToasty({
                    title: 'Ticket Created and File Uploaded Successfully..',
                    msg: '',
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'success',
                    closeOther: true,
                    timeout: 5000
                });
                _this.router.navigateByUrl('/TicketViewer');
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
    CreateTicketComponent.prototype.back = function () {
        this.router.navigateByUrl('/TicketViewer');
    };
    CreateTicketComponent.prototype.Reset = function () {
        this.hideCustomerShortagefields = false;
        this.hideShortageQueryfield = true;
        for (var key in this.model) {
            this.model[key] = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('fromDate'),
        __metadata("design:type", Object)
    ], CreateTicketComponent.prototype, "fromDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('toDate'),
        __metadata("design:type", Object)
    ], CreateTicketComponent.prototype, "toDate", void 0);
    CreateTicketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-createTicket',
            template: __webpack_require__(/*! ./createTicket.template.html */ "./src/app/ticketViewer/createTicket/createTicket.template.html"),
            styles: [__webpack_require__(/*! ./createTicket.component.css */ "./src/app/ticketViewer/createTicket/createTicket.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _ticketViewer_service__WEBPACK_IMPORTED_MODULE_3__["TicketViewerServices"], src_app_services_DataService__WEBPACK_IMPORTED_MODULE_4__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], src_app_app_commonFunctionality__WEBPACK_IMPORTED_MODULE_6__["CommonFunctionality"]])
    ], CreateTicketComponent);
    return CreateTicketComponent;
}());

var CreateTicket = /** @class */ (function () {
    function CreateTicket() {
        this.BatchID = null;
        this.QueryType = null;
        this.QueryCategory = null;
        this.EmailDate = null;
        this.ModifiedDate = null;
        this.IncidentDate = null;
        this.ATMID = null;
        this.DisputedAmount = null;
        this.Bank = null;
        this.Account = null;
        this.AccountNo = null;
        this.MSP = null;
        this.Location = null;
        this.TransactionAmount = null;
        this.TransactionNo = null;
        this.CardNo = null;
        this.ReferenceNo = null;
        this.DisputeComments = null;
        this.FromDate = null;
        this.ToDate = null;
        this.upload = null;
    }
    return CreateTicket;
}());



/***/ }),

/***/ "./src/app/ticketViewer/createTicket/createTicket.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/ticketViewer/createTicket/createTicket.module.ts ***!
  \******************************************************************/
/*! exports provided: CreateTicketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTicketModule", function() { return CreateTicketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var _createTicket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTicket.component */ "./src/app/ticketViewer/createTicket/createTicket.component.ts");
/* harmony import */ var _createTicket_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTicket.routing */ "./src/app/ticketViewer/createTicket/createTicket.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ticketViewer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ticketViewer.service */ "./src/app/ticketViewer/ticketViewer.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CreateTicketModule = /** @class */ (function () {
    function CreateTicketModule() {
    }
    CreateTicketModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_createTicket_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_1__["SelectDropDownModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            ],
            declarations: [_createTicket_component__WEBPACK_IMPORTED_MODULE_2__["CreateTicketComponent"]],
            providers: [_ticketViewer_service__WEBPACK_IMPORTED_MODULE_7__["TicketViewerServices"]]
        })
    ], CreateTicketModule);
    return CreateTicketModule;
}());



/***/ }),

/***/ "./src/app/ticketViewer/createTicket/createTicket.routing.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ticketViewer/createTicket/createTicket.routing.ts ***!
  \*******************************************************************/
/*! exports provided: routing, CreateTicketRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTicketRoutingModule", function() { return CreateTicketRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _createTicket_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTicket.component */ "./src/app/ticketViewer/createTicket/createTicket.component.ts");


var routes = [
    {
        path: '',
        component: _createTicket_component__WEBPACK_IMPORTED_MODULE_1__["CreateTicketComponent"],
        data: {
            breadcrumb: 'CreateTicket',
        },
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
var CreateTicketRoutingModule = /** @class */ (function () {
    function CreateTicketRoutingModule() {
    }
    return CreateTicketRoutingModule;
}());



/***/ }),

/***/ "./src/app/ticketViewer/createTicket/createTicket.template.html":
/*!**********************************************************************!*\
  !*** ./src/app/ticketViewer/createTicket/createTicket.template.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Create Ticket'\" [blockClass]=\"'tran-data'\" [showBack]=\"true\" [showRightSection]=\"'false'\" (onBack)=\"back()\" [cardToggle]=\"cardToggleGrid\">\r\n  <form name=\"form\" [formGroup]=\"createTicketForm\" novalidate (ngSubmit)=\"onSubmit()\">\r\n\r\n    <!--#queryType #queryCategory #emailDate-->\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Query Type<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-select class=\"textboxheight\" [items]=\"queryTypeOptions\"\r\n                       formControlName=\"queryType\"\r\n                       id=\"queryType\"\r\n                       [(ngModel)]=\"model.QueryType\"\r\n                       (change)=\"selectionChanged($event)\">\r\n            </ng-select>\r\n            <div *ngIf=\"form.queryType.invalid && (form.queryType.dirty || form.queryType.touched)\" class=\"messages text-danger\">\r\n              <div *ngIf=\"form.queryType.errors.required\">Query Type is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Query Category<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <ng-select class=\"textboxheight\" [items]=\"queryCategoryOptions\"\r\n                       formControlName=\"queryCategory\" id=\"queryCategory\"\r\n                       [(ngModel)]=\"model.QueryCategory\">\r\n            </ng-select>\r\n            <div *ngIf=\"form.queryCategory.invalid && (form.queryCategory.dirty || form.queryCategory.touched)\" class=\"messages text-danger\">\r\n              <div *ngIf=\"form.queryCategory.errors.required\">Query Category is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\" [hidden]=\"hideEmailDate\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Email Date<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input class=\"form-control textboxheight\" placeholder=\"Email Date\" autocomplete=\"off\"\r\n                   bsDatepicker [(bsValue)]=\"emailDateValue\"\r\n                   [maxDate]=\"maxDate\"\r\n                   [bsConfig]=\"{dateInputFormat: 'D/MM/YYYY'}\"\r\n                   formControlName=\"emailDateValidations\"\r\n                   id=\"emailDateValidations\"\r\n                   [(ngModel)]=\"model.EmailDate\"\r\n                   (ngModelChange)=\"onEmailDatePickerChanged(showIncidentDate)\"\r\n                   [ngClass]=\"{ 'form-control-danger': form.emailDateValidations.invalid && (form.emailDateValidations.dirty || form.emailDateValidations.touched), 'form-control-success': form.emailDateValidations.valid && form.emailDateValidations.dirty }\" />\r\n\r\n            <div *ngIf=\"form.emailDateValidations.invalid && (form.emailDateValidations.dirty || form.emailDateValidations.touched)\" class=\"messages text-danger\">\r\n              <div *ngIf=\"form.emailDateValidations.errors.required\">Email Date is required</div>\r\n            </div>\r\n            <a class=\"fieldActionIcon datePickerIconRightPos\">\r\n              <i class=\"icofont icofont-ui-calendar\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\" [hidden]=\"hideDate\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Date</label>\r\n          <div class=\"col-sm-12\">\r\n            <input class=\"form-control textboxheight\" placeholder=\"Date\" autocomplete=\"off\"\r\n                   bsDatepicker [(bsValue)]=\"dateValue\"\r\n                   [bsConfig]=\"{dateInputFormat: 'D/MM/YYYY'}\"\r\n                   formControlName=\"dateValidations\"\r\n                   id=\"dateValidations\"\r\n                   [(ngModel)]=\"model.EmailDate\"\r\n                    />\r\n            <!--<a class=\"fieldActionIcon datePickerIconRightPos\">\r\n              <i class=\"icofont icofont-ui-calendar\"></i>\r\n            </a>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!--#incidentDate #disputeAmount #AtmID-->\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">Incident Date<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input class=\"form-control withIcon textboxheight\" placeholder=\"Incident Date\" autocomplete=\"off\"\r\n                   bsDatepicker [(bsValue)]=\"incidentDateValue\"\r\n                   [maxDate]=\"incidentMaxDate\"\r\n                   [bsConfig]=\"{dateInputFormat: 'D/MM/YYYY'}\"\r\n                   id=\"incidentDateValidation\"\r\n                   formControlName=\"incidentDateValidation\"\r\n                   [(ngModel)]=\"model.IncidentDate\"\r\n                   [ngClass]=\"{ 'form-control-danger': form.incidentDateValidation.invalid && (form.incidentDateValidation.dirty || form.incidentDateValidation.touched), 'form-control-success':form.incidentDateValidation.valid && form.incidentDateValidation.dirty }\" />\r\n            <div *ngIf=\"form.incidentDateValidation.invalid && (form.incidentDateValidation.dirty || form.incidentDateValidation.touched)\" class=\"messages text-danger\">Incident Date is required</div>\r\n            <a class=\"fieldActionIcon datePickerIconRightPos\">\r\n              <i class=\"icofont icofont-ui-calendar\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Disputed Amount<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" class=\"form-control withIcon textboxheight\" placeholder=\"Disputed Amount\"\r\n                   formControlName=\"disputedAmount\"\r\n                   id=\"disputedAmount\"\r\n                   [(ngModel)]=\"model.DisputedAmount\"\r\n                   [ngClass]=\"{ 'form-control-danger': form.disputedAmount.invalid && (form.disputedAmount.dirty || form.disputedAmount.touched), 'form-control-success': form.disputedAmount.valid && form.disputedAmount.dirty }\" />\r\n\r\n            <div *ngIf=\"form.disputedAmount.invalid && (form.disputedAmount.dirty || form.disputedAmount.touched)\" class=\"messages text-danger\">\r\n              <div *ngIf=\"form.disputedAmount.errors.required\">Disputed Amount is required</div>\r\n              <div *ngIf=\"form.disputedAmount.errors.pattern\">Special Characters Or Characters Not Allowed</div>\r\n              <div *ngIf=\"form.disputedAmount.errors.cannotBeZero\">Dispute Amount Cannot be 0</div>\r\n              <div *ngIf=\"form.disputedAmount.errors.cannotStartAsZero\">Dispute Amount Cannot start from 0</div>\r\n              <div *ngIf=\"form.disputedAmount.errors.multiplesOf10\">Dispute Amount should be Multiples of 10</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">ATM ID<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" class=\"form-control  textboxheight\" placeholder=\"ATM ID\" (keydown.tab)=\"onAtmIdEntered($event)\"\r\n                   formControlName=\"atmID\"\r\n                   id=\"atmID\"\r\n                   [(ngModel)]=\"model.ATMID\"\r\n                   [ngClass]=\"{ 'form-control-danger': form.atmID.invalid && (form.atmID.dirty || form.atmID.touched), 'form-control-success': form.atmID.valid && form.atmID.dirty }\" />\r\n            <div *ngIf=\"form.atmID.invalid && (form.atmID.dirty || form.atmID.touched)\" class=\"messages text-danger\">\r\n              <div *ngIf=\"form.atmID.errors.required\">ATM ID is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!--#bank #account #location-->\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Bank</label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" class=\"form-control withIcon textboxheight\" placeholder=\"Bank\" \r\n                   formControlName=\"bank\"\r\n                   id=\"bank\"\r\n                   [(ngModel)]=\"model.Bank\"\r\n                   [ngClass]=\"{ 'form-control-danger': form.atmID.invalid && (form.atmID.dirty || form.atmID.touched), 'form-control-success': form.atmID.valid && form.atmID.dirty }\" />\r\n            <!--<div *ngIf=\"form.atmID.invalid && (form.atmID.dirty || form.atmID.touched)\" class=\"messages text-danger\">Bank is required</div>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Account</label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" class=\"form-control withIcon textboxheight\" placeholder=\"Account\"\r\n                   formControlName=\"account\"\r\n                   id=\"account\"\r\n                   [(ngModel)]=\"model.Account\"\r\n                   [ngClass]=\"{ 'form-control-danger': form.atmID.invalid && (form.atmID.dirty || form.atmID.touched), 'form-control-success': form.atmID.valid && form.atmID.dirty }\" />\r\n            <!--<div *ngIf=\"form.atmID.invalid && (form.atmID.dirty || form.atmID.touched)\" class=\"messages text-danger\">Account is required</div>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Location</label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" class=\"form-control withIcon textboxheight\" placeholder=\"Location\"\r\n                   [(ngModel)]=\"model.Location\"\r\n                   formControlName=\"location\"\r\n                   id=\"location\"\r\n                   [ngClass]=\"{ 'form-control-danger': form.atmID.invalid && (form.atmID.dirty || form.atmID.touched), 'form-control-success': form.atmID.valid && form.atmID.dirty }\" />\r\n            <!--<div *ngIf=\"form.atmID.invalid && (form.atmID.dirty || form.atmID.touched)\" class=\"messages text-danger\">Location is required</div>-->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!--#transactionAmount #transactionNumber #cardNumber-->\r\n    <div class=\"row\" [hidden]=\"hideCustomerShortagefields\">\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Transaction Amount<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" class=\"form-control withIcon textboxheight\" placeholder=\"Transaction Amount\"\r\n                   formControlName=\"transactionAmount\"\r\n                   id=\"transactionAmount\"\r\n                   [(ngModel)]=\"model.TransactionAmount\"\r\n                   [ngClass]=\"{ 'form-control-danger': form.transactionAmount.invalid && (form.transactionAmount.dirty || form.transactionAmount.touched), 'form-control-success': form.transactionAmount.valid && form.transactionAmount.dirty }\" />\r\n\r\n            <div *ngIf=\"form.transactionAmount.invalid && (form.transactionAmount.dirty || form.transactionAmount.touched)\" class=\"messages text-danger\">\r\n              <div *ngIf=\"form.transactionAmount.errors.required\">Transaction Amount is required</div>\r\n              <div *ngIf=\"form.transactionAmount.errors.pattern\">Special Characters Or Characters Not Allowed</div>\r\n              <div *ngIf=\"form.transactionAmount.errors.cannotBeZero\">Transaction Amount Cannot be 0</div>\r\n              <div *ngIf=\"form.transactionAmount.errors.cannotStartAsZero\">Transaction Amount Cannot start from 0</div>\r\n              <div *ngIf=\"form.transactionAmount.errors.transactionAmountValidation\">Transaction Amount Cannot be Greater than Disputed Amount</div>\r\n              <div *ngIf=\"form.transactionAmount.errors.multiplesOf10\">Transaction Amount should be Multiples of 10</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Transaction Number<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" class=\"form-control withIcon textboxheight\" placeholder=\"Transaction Number\"\r\n                   [(ngModel)]=\"model.TransactionNo\"\r\n                   formControlName=\"transactionNo\"\r\n                   id=\"transactionNo\"\r\n                   [ngClass]=\"{ 'form-control-danger': form.transactionNo.invalid && (form.transactionNo.dirty || form.transactionNo.touched), 'form-control-success': form.transactionNo.valid && form.transactionNo.dirty }\" />\r\n            <div *ngIf=\"form.transactionNo.invalid && (form.transactionNo.dirty || form.transactionNo.touched)\" class=\"messages text-danger\">\r\n              <div *ngIf=\"form.transactionNo.errors.required\">Transaction Number is required</div>\r\n              <div *ngIf=\"form.transactionNo.errors.pattern\">Special Characters Or Characters Not Allowed</div>\r\n              <div *ngIf=\"form.transactionNo.errors.minlength\" class=\"messages text-danger\">Minimum 4 Characters Allowed</div>\r\n              <div *ngIf=\"form.transactionNo.errors.maxlength\" class=\"messages text-danger\">Maximum 12 Characters Allowed</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label\">Card Number<a style=\"color:red\">*</a></label>\r\n          <div class=\"col-sm-12\">\r\n            <input type=\"text\" class=\"form-control withIcon textboxheight\" placeholder=\"Card Number\"\r\n                   formControlName=\"cardNo\"\r\n                   id=\"cardNo\"\r\n                   [(ngModel)]=\"model.CardNo\"\r\n                   [ngClass]=\"{ 'form-control-danger': form.cardNo.invalid && (form.cardNo.dirty || form.cardNo.touched), 'form-control-success': form.cardNo.valid && form.cardNo.dirty }\" />\r\n            <div *ngIf=\"form.cardNo.invalid &&  (form.cardNo.dirty || form.cardNo.touched)\" class=\"messages text-danger\">\r\n              <div *ngIf=\"form.cardNo.errors.required\">Card Number is required</div>\r\n              <div *ngIf=\"form.cardNo.errors.minlength\" class=\"messages text-danger\">Minimum 16 Characters Allowed</div>\r\n              <div *ngIf=\"form.cardNo.errors.maxlength\" class=\"messages text-danger\">Maximum 19 Characters Allowed</div>\r\n              <div *ngIf=\"form.cardNo.errors.pattern\" class=\"messages text-danger\">Card Number Accepts Numerics and Character X</div>\r\n              <div *ngIf=\"form.cardNo.errors.CardNo\" class=\"messages text-danger\">Card Number Accepts 16 Or 19 Characters</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!--#fromDate #toDate-->\r\n    <div class=\"row\" [hidden]=\"hideShortageQueryfield\">\r\n\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"form-group row\">\r\n          <label class=\"col-sm-12 col-form-label \">From Date</label>\r\n          <div class=\"col-sm-12\">\r\n            <input class=\"form-control withIcon textboxheight\" placeholder=\"From Date\" autocomplete=\"off\"\r\n                   bsDatepicker [bsValue]=\"bsInlineRangeValue\"\r\n                   [bsConfig]=\"{dateInputFormat: 'D/MM/YYYY'}\"\r\n                   formControlName=\"fromDateValidations\"\r\n                   [minDate]=\"fromDateMinDate\"\r\n                   id=\"fromDateValidations\"\r\n                   [(ngModel)]=\"model.FromDate\"\r\n                   (ngModelChange)=\"onFromDatePickerChanged(model.FromDate)\"\r\n                   [ngClass]=\"{'form-control-success': form.fromDateValidations.valid && form.fromDateValidations.dirty}\"/>\r\n            <a class=\"fieldActionIcon datePickerIconRightPos\">\r\n              <i class=\"icofont icofont-ui-calendar\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n      <div class=\"form-group row\" >\r\n        <label class=\"col-sm-12 col-form-label \">To Date</label>\r\n        <div class=\"col-sm-12\">\r\n          <input class=\"form-control withIcon textboxheight\" placeholder=\"To Date\" autocomplete=\"off\"\r\n                 id=\"toDateValidations\"\r\n                 formControlName=\"toDateValidations\"\r\n                 bsDatepicker [bsValue]=\"bsInlineRangeValue\"\r\n                 [bsConfig]=\"{dateInputFormat: 'D/MM/YYYY'}\"\r\n                 [(ngModel)]=\"model.ToDate\"\r\n                 [minDate]=\"minDate\"\r\n                 [ngClass]=\"{'form-control-success': form.toDateValidations.valid && form.toDateValidations.dirty }\" />\r\n          <a class=\"fieldActionIcon datePickerIconRightPos\">\r\n            <i class=\"icofont icofont-ui-calendar\"></i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    </div>\r\n\r\n    <!--#referenceNumber #fileUpload #accountNumber #disputeComments-->\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-4\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-12 col-form-label\">Reference Number</label>\r\n        <div class=\"col-sm-12\">\r\n          <input type=\"text\" class=\"form-control withIcon textboxheight\" placeholder=\"Reference Number\"\r\n                 id=\"referenceNumber\"\r\n                 formControlName=\"referenceNumber\"\r\n                 [(ngModel)]=\"model.ReferenceNo\"\r\n                 [ngClass]=\"{'form-control-danger': form.referenceNumber.errors,'form-control-success': form.referenceNumber.valid && form.referenceNumber.dirty }\" />\r\n            <div *ngIf=\"form.referenceNumber.invalid && (form.referenceNumber.dirty || form.referenceNumber.touched)\" class=\"messages text-danger\">\r\n            <div *ngIf=\"form.referenceNumber.errors.pattern\" class=\"messages text-danger\">Reference Number Accepts Numerics and Character</div>\r\n          </div>\r\n          </div>\r\n        </div>\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-12 col-form-label\">Upload File<a style=\"color:red\">*</a></label>\r\n        <div class=\"col-sm-12\">\r\n          <input type=\"file\" class=\"form-control withIcon textboxheight\" style=\"padding-top: 1px;padding-left: 0px;\"\r\n                 id=\"upload\"\r\n                 formControlName=\"upload\"\r\n                 [ngModel]=\"fileContent\"\r\n                 (change)=\"onFileChange($event)\"\r\n                 [ngClass]=\"{ 'form-control-danger': form.upload.invalid && (form.upload.dirty || form.upload.touched), 'form-control-success': form.upload.valid && form.upload.dirty }\" />\r\n          <div *ngIf=\"form.upload.invalid && (form.upload.dirty || form.upload.touched)\" class=\"messages text-danger\">\r\n            <div *ngIf=\"form.upload.errors.required\">Upload File is required</div>\r\n            <div *ngIf=\"form.upload.errors.requiredFileType\">Only txt,doc,docx files are supported</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n      <div class=\"col-sm-4\" [hidden]=\"hideAccountNumber\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-12 col-form-label\">Account Number</label>\r\n        <div class=\"col-sm-12\">\r\n          <input type=\"text\" class=\"form-control withIcon textboxheight\" placeholder=\"Account Number\"\r\n                 id=\"accountNo\"\r\n                 formControlName=\"accountNo\"\r\n                 [(ngModel)]=\"model.AccountNo\"\r\n                 [ngClass]=\"{ 'form-control-danger':form.accountNo.errors ,'form-control-success': form.accountNo.valid && form.accountNo.dirty }\" />\r\n          <div *ngIf=\"form.accountNo.invalid && (form.accountNo.dirty || form.accountNo.touched)\" class=\"messages text-danger\">\r\n            <div *ngIf=\"form.accountNo.errors.pattern\" class=\"messages text-danger\">Account Number Accepts Numerics Only</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n      <div class=\"col-sm-4\">\r\n      <div class=\"form-group row\">\r\n        <label class=\"col-sm-12 col-form-label\">Dispute Comments</label>\r\n        <div class=\"col-sm-12\">\r\n          <textarea placeholder=\"Dispute Comments\" class=\"form-control withIcon\" style=\"max-height:117px;min-height:117px\"\r\n                    id=\"disputeComments\"\r\n                    formControlName=\"disputeComments\"\r\n                    [(ngModel)]=\"model.DisputeComments\"\r\n                    [ngClass]=\"{ 'form-control-success': form.disputeComments.valid && (form.disputeComments.dirty || form.disputeComments.touched) }\"></textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    </div>\r\n\r\n    <!--#submitButton #resetButton-->\r\n    <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-sm-12\">\r\n          <button type=\"submit\" class=\"btn btn-primary float-left\" [disabled]=\"!submitted\">Submit</button>\r\n          <button type=\"reset\" class=\"btn btn-primary float-right\" (click)=\"Reset()\">Reset</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  </form>\r\n</app-card>\r\n"

/***/ }),

/***/ "./src/app/ticketViewer/createTicket/createTicket.validator.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ticketViewer/createTicket/createTicket.validator.ts ***!
  \*********************************************************************/
/*! exports provided: CreateTicketValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTicketValidator", function() { return CreateTicketValidator; });
var CreateTicketValidator = /** @class */ (function () {
    function CreateTicketValidator() {
    }
    CreateTicketValidator.cannotBeZero = function (controller) {
        if (controller.value != null) {
            if (controller.value.indexOf('0') == 0) {
                if (controller.value == 0) {
                    return { cannotStartAsZero: true, cannotBeZero: true };
                }
                return { cannotStartAsZero: true, cannotBeZero: false };
            }
        }
        return null;
    };
    CreateTicketValidator.multiplesOf10 = function (controller) {
        if (controller.value != null) {
            if ((controller.value % 10) != 0) {
                return { multiplesOf10: true };
            }
        }
        return null;
    };
    CreateTicketValidator.transactionAmountvalidation = function (transactionAmount, disputeAmount) {
        return function (formGroup) {
            var tranxAmount = formGroup.controls[transactionAmount];
            var dispAmount = formGroup.controls[disputeAmount];
            if (tranxAmount.value != null) {
                if ((tranxAmount.value % 10) != 0) {
                    // return if another validator has already found an error on the matchingControl
                    return tranxAmount.setErrors({ multiplesOf10: true });
                }
                if (Number(tranxAmount.value) > Number(dispAmount.value)) {
                    return tranxAmount.setErrors({ transactionAmountValidation: true });
                }
                else {
                    return tranxAmount.setErrors(null);
                }
            }
            return tranxAmount.setErrors(null);
        };
    };
    CreateTicketValidator.CardNo = function (controller) {
        if (controller.value != null) {
            if ((controller.value.length) == 18 || (controller.value.length) == 17) {
                return { CardNo: true };
            }
        }
        return null;
    };
    CreateTicketValidator.requiredFileType = function (type) {
        return function (control) {
            var file = control.value;
            if (file) {
                var extension = file.split('.')[1].toLowerCase();
                if (!(type.indexOf(extension.toLowerCase()) > -1)) {
                    return {
                        requiredFileType: true
                    };
                }
                return null;
            }
            return null;
        };
    };
    return CreateTicketValidator;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-ticketViewer-createTicket-createTicket-module.js.map