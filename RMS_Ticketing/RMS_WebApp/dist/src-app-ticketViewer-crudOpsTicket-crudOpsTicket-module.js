(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-ticketViewer-crudOpsTicket-crudOpsTicket-module"],{

/***/ "./src/app/ticketViewer/crudOpsTicket/CrudOpsTicket.component.css":
/*!************************************************************************!*\
  !*** ./src/app/ticketViewer/crudOpsTicket/CrudOpsTicket.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textboxheight {\r\n  height: 29px;\r\n}\r\n\r\n.k-chat {\r\n  height: 100vh;\r\n}\r\n\r\n/*.form-control {\r\n  font-size: 12px;\r\n  border-radius: 2px ;\r\n  min-height: 28px;\r\n\r\n}*/\r\n\r\n.custodianClass {\r\n  margin-left: 15px;\r\n  margin-right: -2px;\r\n}\r\n\r\n.textBoxPadding {\r\n  font-size: 13px;\r\n  min-height: 20px;\r\n  height: 20px;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 6px;\r\n}\r\n\r\ntextarea.form-control {\r\n  min-height: 50px !important;\r\n}\r\n\r\n.ngx-dropdown-container[_ngcontent-c8] .ngx-dropdown-button[_ngcontent-c8] {\r\n  width: 100%;\r\n  min-height: 29px;\r\n}\r\n\r\n.ngx-dropdown-container[_ngcontent-c8] button[_ngcontent-c8] span[_ngcontent-c8] {\r\n  font-size: 13px;\r\n}\r\n\r\n.ng-select .ng-select-container {\r\n  min-height: 29px;\r\n}\r\n\r\n.ng-select.ng-select-single .ng-select-container {\r\n  height: 29px;\r\n}\r\n\r\n.ng-select .ng-select-container .ng-value-container {\r\n  /*padding-top: 4px;*/\r\n  padding-left: 8px;\r\n  font-size: 11px;\r\n  font-weight: bold;\r\n}\r\n\r\n.ng-select .ng-clear-wrapper {\r\n  /*padding-top: 4px;*/\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n  width: 100%;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\ntr:nth-child(even) {\r\n  background-color: #f2f2f2\r\n}\r\n\r\nth {\r\n  text-align: center;\r\n  padding: 4px;\r\n}\r\n\r\ntd {\r\n  \r\n  padding: 8px;\r\n}\r\n\r\n.left {\r\n  text-align: left;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGlja2V0Vmlld2VyL2NydWRPcHNUaWNrZXQvQ3J1ZE9wc1RpY2tldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEOzs7OztHQUtHOztBQUVIO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjs7QUFJRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsZ0JBQWdCO0NBQ2pCOztBQUtEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUNEO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25COztBQUlEO0VBQ0UscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0NBQ3hCOztBQUdEO0VBQ0UseUJBQXlCO0NBQzFCOztBQUdEO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDs7QUFFRDs7RUFFRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBR0Q7RUFDRSxtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC90aWNrZXRWaWV3ZXIvY3J1ZE9wc1RpY2tldC9DcnVkT3BzVGlja2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveGhlaWdodCB7XHJcbiAgaGVpZ2h0OiAyOXB4O1xyXG59XHJcblxyXG4uay1jaGF0IHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKi5mb3JtLWNvbnRyb2wge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAycHggO1xyXG4gIG1pbi1oZWlnaHQ6IDI4cHg7XHJcblxyXG59Ki9cclxuXHJcbi5jdXN0b2RpYW5DbGFzcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi50ZXh0Qm94UGFkZGluZyB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG50ZXh0YXJlYS5mb3JtLWNvbnRyb2wge1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5neC1kcm9wZG93bi1jb250YWluZXJbX25nY29udGVudC1jOF0gLm5neC1kcm9wZG93bi1idXR0b25bX25nY29udGVudC1jOF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDI5cHg7XHJcbn1cclxuXHJcbi5uZ3gtZHJvcGRvd24tY29udGFpbmVyW19uZ2NvbnRlbnQtYzhdIGJ1dHRvbltfbmdjb250ZW50LWM4XSBzcGFuW19uZ2NvbnRlbnQtYzhdIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDI5cHg7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAyOXB4O1xyXG59XHJcbi5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciB7XHJcbiAgLypwYWRkaW5nLXRvcDogNHB4OyovXHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuXHJcbi5uZy1zZWxlY3QgLm5nLWNsZWFyLXdyYXBwZXIge1xyXG4gIC8qcGFkZGluZy10b3A6IDRweDsqL1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyXHJcbn1cclxuXHJcblxyXG50aCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG5cclxudGQge1xyXG4gIFxyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4uY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ticketViewer/crudOpsTicket/CrudOpsTicket.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/ticketViewer/crudOpsTicket/CrudOpsTicket.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-card [title]=\"'Ticket Summary'\" [blockClass]=\"'tran-data'\"  [showRightSection]=\"'false'\"  [cardToggle]=\"cardToggleGrid\" [showExternalUpload]=\"'true'\"\r\n          (onExternalUpload)=\"toggle()\">\r\n\r\n  <ng-sidebar-container style=\"height: 200vh\">\r\n\r\n    <ng-sidebar [(opened)]=\"_opened\" position=\"right\" mode=\"push\">\r\n      <div class=\"col-sm-12 float-right\">\r\n        <CommentsComponent [commentTicketID]=\"viewTicketId\" *ngIf=\"childComponentShow\" [showClose]=\"'true'\" (onClose)=\"closeComments()\">\r\n\r\n        </CommentsComponent>\r\n      </div>\r\n    </ng-sidebar>\r\n\r\n\r\n\r\n    <div ng-sidebar-content>\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\">\r\n                <div class=\"col-sm-12\">\r\n                  <a class=\"icofont-2x\" style=\"color:dodgerblue\"></a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <form name=\"form\" [formGroup]=\"ticketSummaryForm\" novalidate (ngSubmit)=\"onSubmit()\">\r\n\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"row\">\r\n\r\n                <!--batchID-->\r\n                <div class=\"col-lg-3\">\r\n                  <label class=\"col-lg-12 col-form-label\">Batch ID</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"batchID\"\r\n                         id=\"batchID\"\r\n                         [(ngModel)]=\"model.BatchID\" />\r\n                </div>\r\n\r\n                <!--ticketID-->\r\n                <div class=\"col-lg-3\">\r\n                  <label class=\"col-lg-12 col-form-label\">Ticket Id</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"ticketID\"\r\n                         id=\"ticketID\"\r\n                         [(ngModel)]=\"model.TicketID\" />\r\n                </div>\r\n\r\n                <!--oldTicketID-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Old Ticket ID</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"oldTicketID\"\r\n                         id=\"oldTicketID\"\r\n                         [(ngModel)]=\"model.OldTicketID\" />\r\n                </div>\r\n\r\n                <!--queryType-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Query Type</label>\r\n                  <ng-select class=\"textboxheight\" [items]=\"queryTypeOptions\"\r\n                             formControlName=\"queryType\"\r\n                             id=\"queryType\"\r\n                             [(ngModel)]=\"model.QueryType\"\r\n                             (change)=\"selectionChangedQT($event)\">\r\n                  </ng-select>\r\n                </div>\r\n\r\n                <!--MSP-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hideATMMasterData\">\r\n                  <label class=\"col-sm-12 col-form-label\">MSP</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"msp\"\r\n                         id=\"msp\"\r\n                         [(ngModel)]=\"model.MSP\" />\r\n                </div>\r\n\r\n                <!--ATMID-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">ATM ID</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"atmID\"\r\n                         id=\"atmID\"\r\n                         [(ngModel)]=\"model.ATMID\" />\r\n                </div>\r\n\r\n                <!--ATMRemarks-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hindATMStatus\">\r\n                  <label class=\"col-sm-12 col-form-label\">ATM Remark</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"atmStatus\"\r\n                         id=\"atmStatus\"\r\n                         [(ngModel)]=\"model.ATMStatus\" />\r\n                </div>\r\n\r\n                <!--ATM TYPE-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hideATMMasterData\">\r\n                  <label class=\"col-sm-12 col-form-label\">ATM Type</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"atmType\"\r\n                         id=\"atmType\"\r\n                         [(ngModel)]=\"model.ATMType\" />\r\n                </div>\r\n\r\n                <!--queryCategory-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Query Category</label>\r\n                  <ng-select class=\"textboxheight\" [items]=\"queryCategoryOptions\"\r\n                             formControlName=\"queryCategory\"\r\n                             id=\"queryCategory\"\r\n                             [(ngModel)]=\"model.QueryCategory\"\r\n                             (change)=\"selectionChangedQC($event)\">\r\n                  </ng-select>\r\n                </div>\r\n\r\n                <!--Bank-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hideATMMasterData\">\r\n                  <label class=\"col-sm-12 col-form-label\">Bank</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"bank\"\r\n                         id=\"bank\"\r\n                         [(ngModel)]=\"model.Bank\" />\r\n                </div>\r\n\r\n                <!--Transaction Date-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Transaction Date</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"incidentDate\"\r\n                         id=\"incidentDate\"\r\n                         [(ngModel)]=\"model.IncidentDate\" />\r\n                </div>\r\n\r\n                <!--Transaction Time-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Transaction Time</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"transactionTime\"\r\n                         id=\"transactionTime\"\r\n                         [(ngModel)]=\"model.TransactionTime\" />\r\n                </div>\r\n\r\n                <!--Dispute Amount-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Disputed Amount</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"disputedAmount\"\r\n                         id=\"disputedAmount\"\r\n                         [(ngModel)]=\"model.DisputedAmount\" />\r\n                </div>\r\n\r\n                <!--Transaction Amount-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Transaction Amount</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"transactionAmount\"\r\n                         id=\"transactionAmount\"\r\n                         [(ngModel)]=\"model.TransAmount\" />\r\n                </div>\r\n\r\n                <!--Transaction Number-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Transaction Number</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"transactionNo\"\r\n                         id=\"transactionNo\"\r\n                         [(ngModel)]=\"model.TransactionNo\" />\r\n                </div>\r\n\r\n                <!--Reference Number-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Reference Number</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"referenceNo\"\r\n                         id=\"referenceNo\"\r\n                         [(ngModel)]=\"model.ReferenceNo\" />\r\n                </div>\r\n\r\n                <!--Account Number-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Account Number</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"accountNumber\"\r\n                         id=\"accountNumber\"\r\n                         [(ngModel)]=\"model.AccountNo\" />\r\n                </div>\r\n\r\n                <!--Card NUmber-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Card Number</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"cardNumber\"\r\n                         id=\"cardNumber\"\r\n                         [(ngModel)]=\"model.CardNo\" />\r\n                </div>\r\n\r\n                <!--Card Exception-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Card Exception</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"cardException\"\r\n                         id=\"cardException\"\r\n                         [(ngModel)]=\"model.CardException\" />\r\n                </div>\r\n\r\n                <!--Atm Exception-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">ATM Exception</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"atmException\"\r\n                         id=\"atmException\"\r\n                         [(ngModel)]=\"model.AtmException\" />\r\n                </div>\r\n\r\n                <!--RouteException-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">Route Exception</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"routeException\"\r\n                         id=\"routeException\"\r\n                         [(ngModel)]=\"model.RouteException\" />\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"row\">\r\n\r\n                <!--Zone-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hideATMMasterData || hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">Zone</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"zone\"\r\n                         id=\"zone\"\r\n                         [(ngModel)]=\"model.Zone\" />\r\n                </div>\r\n\r\n                <!--Region-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hideATMMasterData || hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">Region</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"roCode\"\r\n                         id=\"roCode\"\r\n                         [(ngModel)]=\"model.RoCode\" />\r\n                </div>\r\n\r\n                <!--Location-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hideATMMasterData || hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">Location</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"location\"\r\n                         id=\"location\"\r\n                         [(ngModel)]=\"model.Location\" />\r\n                </div>\r\n\r\n                <!--Hub-Location-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hideATMMasterData || hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">Hub Location</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"hubLocation\"\r\n                         id=\"hubLocation\"\r\n                         [(ngModel)]=\"model.HubLocation\" />\r\n                </div>\r\n\r\n                <!--Email RecivedDate-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenForLocation\">\r\n                  <label class=\"col-sm-12 col-form-label\">Email Received Date</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"emailDate\"\r\n                         id=\"emailDate\"\r\n                         [(ngModel)]=\"model.EmailDate\" />\r\n                </div>\r\n\r\n                <!--Email RecivedTime-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenForLocation\">\r\n                  <label class=\"col-sm-12 col-form-label\">Email Time</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"emailTime\"\r\n                         id=\"emailTime\"\r\n                         [(ngModel)]=\"model.EmailTime\" />\r\n                </div>\r\n\r\n                <!--Email Received From-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenForLocation\">\r\n                  <label class=\"col-sm-12 col-form-label\">Email Received From</label>\r\n                  <textarea placeholder=\"Email Subject\" class=\"form-control withIcon\" style=\"max-height:50px;min-height:50px\"\r\n                            formControlName=\"emailId\"\r\n                            id=\"emailId\"\r\n                            [(ngModel)]=\"model.EmailID\"></textarea>\r\n                </div>\r\n\r\n                <!--Email Subject-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenForLocation\">\r\n                  <label class=\"col-sm-12 col-form-label\">Email Subject</label>\r\n                  <textarea placeholder=\"Email Subject\" class=\"form-control withIcon\" style=\"max-height:50px;min-height:50px\"\r\n                            formControlName=\"subject\"\r\n                            id=\"subject\"\r\n                            [(ngModel)]=\"model.Subject\"></textarea>\r\n                </div>\r\n\r\n                <!--FromDate-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hideFromToDateFields\">\r\n                  <label class=\"col-sm-12 col-form-label\">From Date</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"fromDate\"\r\n                         id=\"fromDate\"\r\n                         [(ngModel)]=\"model.FromDate\" />\r\n                </div>\r\n\r\n                <!--ToDate-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hideFromToDateFields\">\r\n                  <label class=\"col-sm-12 col-form-label\">To Date</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"toDate\"\r\n                         id=\"toDate\"\r\n                         [(ngModel)]=\"model.ToDate\" />\r\n                </div>\r\n\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenforAdmin || hideFromToDateFields\">\r\n\r\n                </div>\r\n\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenforAdmin || hideFromToDateFields\">\r\n\r\n                </div>\r\n\r\n                <!--Error Code-->\r\n                <div class=\"col-sm-6\">\r\n                  <label class=\"col-sm-12 col-form-label\">Error Code<a style=\"color:red\">*</a></label>\r\n                  <ng-select class=\"textboxheight\" [items]=\"errorCodeOptions\"\r\n                             formControlName=\"errorCode\"\r\n                             id=\"errorCode\"\r\n                             [(ngModel)]=\"model.ErrorCode\"\r\n                             (change)=\"selectionChangedEC($event)\">\r\n                  </ng-select>\r\n                </div>\r\n\r\n                <!--Error Type-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Error Type</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"errorType\"\r\n                         id=\"errorType\"\r\n                         [(ngModel)]=\"model.ErrorType\" />\r\n                </div>\r\n\r\n                <!--Error Bucket-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Error Bucket</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"errorBucket\"\r\n                         id=\"errorBucket\"\r\n                         [(ngModel)]=\"model.ErrorBucket\" />\r\n                </div>\r\n\r\n                <!--Customer Status-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hideCustomerDetails\">\r\n                  <label class=\"col-sm-12 col-form-label\">Customer Status</label>\r\n                  <ng-select class=\"textboxheight\" [items]=\"customerActionsOptions\"\r\n                             formControlName=\"customerActions\"\r\n                             id=\"customerActions\"\r\n                             [(ngModel)]=\"model.CustomerActions\"\r\n                             (change)=\"selectionChangedCA($event)\">\r\n                  </ng-select>\r\n                </div>\r\n\r\n                <!--Acceptance and Rejection Justification-->\r\n                <div class=\"col-sm-6\" [hidden]=\"hideCustomerDetails\">\r\n                  <label class=\"col-sm-12 col-form-label\">Acceptance \\ Rejection Justification<a style=\"color:red\">*</a></label>\r\n                  <ng-select class=\"textboxheight\" [items]=\"justificationOptions\"\r\n                             formControlName=\"hoRejectionJustification\"\r\n                             id=\"hoRejectionJustification\"\r\n                             [(ngModel)]=\"model.Justification\"\r\n                             (change)=\"selectionChangedHORJ($event)\">\r\n                  </ng-select>\r\n                </div>\r\n\r\n                <!--BLANK-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenForLocation\">\r\n                </div>\r\n\r\n                <!--CMS Status-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">CMS Status<a style=\"color:red\">*</a></label>\r\n                  <ng-select class=\"textboxheight\" [items]=\"cmsStatusOptions\"\r\n                             formControlName=\"cmsStatus\"\r\n                             id=\"cmsStatus\"\r\n                             [(ngModel)]=\"model.CMSStatus\"\r\n                             (change)=\"selectionChangedCMSStatus($event)\">\r\n                  </ng-select>\r\n                </div>\r\n\r\n                <!--Territory Acceptance \\ Rejection Justification-->\r\n                <div class=\"col-sm-6\" [hidden]=\"hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">Territory Acceptance \\ Rejection Justification</label>\r\n                  <ng-select class=\"textboxheight\" [items]=\"territoryRejectionJustificationOptions\"\r\n                             formControlName=\"territoryRejectionJustification\"\r\n                             id=\"territoryRejectionJustification\"\r\n                             [(ngModel)]=\"model.TerritoryRejectionJustification\"\r\n                             (change)=\"selectionChangedTRJ($event)\">\r\n                  </ng-select>\r\n                </div>\r\n\r\n                <!--Target Amount-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenForLocation || targetAmountFieldHidden || hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">Target Amount<a style=\"color:red\">*</a></label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"targetAmount\"\r\n                         id=\"targetAmount\"\r\n                         [(ngModel)]=\"model.TargetAmount\"\r\n                         [ngClass]=\"{ 'form-control-danger': form.targetAmount.invalid && (form.targetAmount.dirty || form.targetAmount.touched), 'form-control-success': form.targetAmount.valid && form.targetAmount.dirty }\" />\r\n                  <div *ngIf=\"form.targetAmount.invalid && (form.targetAmount.dirty || form.targetAmount.touched)\" class=\"messages text-danger\">\r\n                    <div *ngIf=\"form.targetAmount.errors.required\">Target Amount is required</div>\r\n                    <div *ngIf=\"form.targetAmount.errors.pattern\">Special Characters Or Characters Not Allowed</div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!--Assigned Targeted Amount-->\r\n                <div class=\"col-sm-3\">\r\n                  <label class=\"col-sm-12 col-form-label\">Assigned Target Amount</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"assignedtargetAmount\"\r\n                         id=\"assignedtargetAmount\"\r\n                         [(ngModel)]=\"model.AssignedTargetAmount\" />\r\n                </div>\r\n\r\n                <!--Recovered Amount-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">Recovered Amount</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"recoveredAmount\"\r\n                         id=\"recoveredAmount\"\r\n                         [(ngModel)]=\"model.RecoveredAmount\" />\r\n                </div>\r\n\r\n                <!--Pending Amount-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">Pending Amount</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"pendingAmount\"\r\n                         id=\"pendingAmount\"\r\n                         [(ngModel)]=\"model.PendingAmount\" />\r\n                </div>\r\n\r\n                <!--HO Approved Recovery Amt-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenForHO || hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">HO Approved Recovery Amt</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"hOApprovedRecoveryAmount\"\r\n                         id=\"hOApprovedRecoveryAmount\"\r\n                         [(ngModel)]=\"model.HOApprovedRecoveryAmount\" />\r\n                </div>\r\n\r\n                <!--WO Order-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenForLocation || hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">WO Order</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"woOrder\"\r\n                         id=\"woOrder\"\r\n                         [(ngModel)]=\"model.WoOrder\" />\r\n                </div>\r\n\r\n                <!--HO Overage Date-->\r\n                <div class=\"col-sm-3\" [hidden]=\"overageModel.OverageFlag || hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">HO Overage Date</label>\r\n                  <input class=\"form-control withIcon textboxheight\" autocomplete=\"off\"\r\n                         bsDatepicker [bsValue]=\"bsInlineRangeValue\"\r\n                         [bsConfig]=\"{dateInputFormat: 'D-MMM-YYYY'}\"\r\n                         [maxDate]=\"maxDate\"\r\n                         formControlName=\"overageDate\"\r\n                         id=\"overageDate\"\r\n                         [(ngModel)]=\"overageModel.OverageDate\" />\r\n                </div>\r\n\r\n                <!--HO Overage Amount-->\r\n                <div class=\"col-sm-3\" [hidden]=\"overageModel.OverageFlag || hiddenforMSP\">\r\n                  <label class=\"col-sm-12 col-form-label\">Ho Overage Amount</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"overageAmount\"\r\n                         id=\"overageAmount\"\r\n                         [(ngModel)]=\"overageModel.OverageAmount\"\r\n                         [ngClass]=\"{ 'form-control-danger': form.overageAmount.invalid && (form.overageAmount.dirty || form.overageAmount.touched), 'form-control-success': form.overageAmount.valid && form.overageAmount.dirty }\" />\r\n                  <div *ngIf=\"form.overageAmount.invalid && (form.overageAmount.dirty || form.overageAmount.touched)\" class=\"messages text-danger\">\r\n                    <div *ngIf=\"form.overageAmount.errors.pattern\">Special Characters Or Characters Not Allowed</div>\r\n                    <div *ngIf=\"form.overageAmount.errors.cannotBeZero\">HO Overage Amount Cannot be 0</div>\r\n                    <div *ngIf=\"form.overageAmount.errors.cannotStartAsZero\">HO Overage Amount Cannot start from 0</div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!--Territory Overage Date-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenforMSP || hideDepositfromLocation\">\r\n                  <label class=\"col-sm-12 col-form-label\">Territory Overage Date</label>\r\n                  <input class=\"form-control withIcon textboxheight\" autocomplete=\"off\"\r\n                         bsDatepicker [bsValue]=\"bsInlineRangeValue\"\r\n                         [bsConfig]=\"{dateInputFormat: 'D-MMM-YYYY'}\"\r\n                         [maxDate]=\"maxDate\"\r\n                         formControlName=\"depositDate\"\r\n                         id=\"depositDate\"\r\n                         [(ngModel)]=\"model.DepositDate\" />\r\n                </div>\r\n\r\n                <!--Territory Overage Amount-->\r\n                <div class=\"col-sm-3\" [hidden]=\"hiddenforMSP || hideDepositfromLocation\">\r\n                  <label class=\"col-sm-12 col-form-label\">Territory Overage Amount</label>\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"depositAmount\"\r\n                         id=\"depositAmount\"\r\n                         [(ngModel)]=\"model.DepositAmount\"\r\n                         [ngClass]=\"{ 'form-control-danger': form.depositAmount.invalid && (form.depositAmount.dirty || form.depositAmount.touched), 'form-control-success': form.depositAmount.valid && form.depositAmount.dirty }\" />\r\n                  <div *ngIf=\"form.depositAmount.invalid && (form.depositAmount.dirty || form.depositAmount.touched)\" class=\"messages text-danger\">\r\n                    <div *ngIf=\"form.depositAmount.errors.cannotBeZero\">Deposit Amount Cannot be 0</div>\r\n                    <div *ngIf=\"form.depositAmount.errors.cannotStartAsZero\">Deposit Amount Cannot start from 0</div>\r\n                    <div *ngIf=\"form.depositAmount.errors.pattern\">Special Characters Or Characters Not Allowed</div>\r\n                  </div>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-3\" [hidden]=\"hiddenforMSP || hideDepositfromLocation\">\r\n                    <label class=\"col-sm-12 col-form-label\">Processing Remarks</label>\r\n                    <textarea class=\"form-control withIcon\" style=\"max-height:50px;min-height:50px\"\r\n                              formControlName=\"processingRemarks\"\r\n                              id=\"processingRemarks\"\r\n                              [(ngModel)]=\"model.ProcessingRemarks\"></textarea>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-3\" [hidden]=\"hiddenForLocation\">\r\n                    <label class=\"col-sm-12 col-form-label\">CMS Remarks</label>\r\n                    <textarea class=\"form-control withIcon\" style=\"max-height:50px;min-height:50px\"\r\n                              formControlName=\"cmsRemarks\"\r\n                              id=\"cmsRemarks\"\r\n                              [(ngModel)]=\"model.CMSRemarks\"></textarea>\r\n                  </div>\r\n\r\n\r\n\r\n                  <!--1st Custodian-->\r\n                  <div class=\"col-sm-3\" [hidden]=\"hiddenforMSP || hidefirstCustodian\">\r\n                    <label class=\"col-sm-12 col-form-label\">1<sup>st</sup> Employee Code (Custodian Name)</label>\r\n                    <span class=\"custodianClass\"><b>{{model.FirstCustodianCode}}</b></span> (<span><b>{{model.FirstCustodianName}}</b></span>)\r\n                  </div>\r\n\r\n                  <!--2nd Custodian-->\r\n                  <div class=\"col-sm-3\" [hidden]=\"hiddenforMSP || hideSecondCustodian\">\r\n                    <label class=\"col-sm-12 col-form-label\">2<sup>nd</sup> Employee Code (Custodian Name)</label>\r\n                    <span class=\"custodianClass\"><b>{{model.SecondCustodianCode}}</b></span> (<span><b>{{model.SecondCustodianName}}</b></span>)\r\n                  </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <!--<div class=\"row\" [hidden]=\"hiddenForLocation\">\r\n            \r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-12 col-form-label\">Delay Deposit Issue</label>\r\n                <div class=\"col-sm-12\">\r\n\r\n                  <ng-select class=\"textboxheight\" [items]=\"DelayDepositIssueOptions\"\r\n                             formControlName=\"delayDepositIssue\"\r\n                             id=\"delayDepositIssue\"\r\n                             [(ngModel)]=\"model.DelayDepositIssue\"\r\n                             (change)=\"selectionChangedDDI($event)\">\r\n                  </ng-select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6\" [hidden]=\"reassignReasonFieldHidden\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-12 col-form-label\">Reassign Reason</label>\r\n                <div class=\"col-sm-12\">\r\n\r\n                  <ng-select class=\"textboxheight\" [items]=\"reassigneReasonOptions\"\r\n                             formControlName=\"reassignReason\"\r\n                             id=\"reassignReason\"\r\n                             [(ngModel)]=\"model.ReassignReason\"\r\n                             (change)=\"selectionChangedRR($event)\">\r\n                  </ng-select>\r\n\r\n\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n\r\n          </div>-->\r\n\r\n          <!--<div class=\"row\">\r\n            <div class=\"col-sm-4\" [hidden]=\"hiddenForLocation\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-12 col-form-label\">WO Order</label>\r\n                <div class=\"col-sm-12\">\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"woOrder\"\r\n                         id=\"woOrder\"\r\n                         [(ngModel)]=\"model.WoOrder\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-4\" [hidden]=\"hiddenForHO\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-12 col-form-label\">Territory Deposit Date</label>\r\n                <div class=\"col-sm-12\">\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"territoryDepositDate\"\r\n                         id=\"territoryDepositDate\"\r\n                         [(ngModel)]=\"model.TerritoryDepositDate\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\" [hidden]=\"hiddenForHO\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-12 col-form-label\">Deposit amount</label>\r\n                <div class=\"col-sm-12\">\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"depositAmount\"\r\n                         id=\"depositAmount\"\r\n                         [(ngModel)]=\"model.DepositAmount\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>-->\r\n\r\n          <!--<div class=\"row\" [hidden]=\"hiddenForHO\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-12 col-form-label\">Dispute Target Amount</label>\r\n                <div class=\"col-sm-12\">\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"disputetargetAmount\"\r\n                         id=\"disputetargetAmount\"\r\n                         [(ngModel)]=\"model.DisputeTargetAmount\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-12 col-form-label\">To Be Recovered Amount</label>\r\n                <div class=\"col-sm-12\">\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"toBeRecoveredAmount\"\r\n                         id=\"toBeRecoveredAmount\"\r\n                         [(ngModel)]=\"model.ToBeRecoveredAmount\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-12 col-form-label\">HO Approved Recovery Amt</label>\r\n                <div class=\"col-sm-12\">\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"hOApprovedRecoveryAmount\"\r\n                         id=\"hOApprovedRecoveryAmount\"\r\n                         [(ngModel)]=\"model.HOApprovedRecoveryAmount\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>-->\r\n\r\n          <!--<div class=\"row\" [hidden]=\"hiddenforMSP\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-12 col-form-label\">1<sup>st</sup> Employee Code</label>\r\n                <div class=\"col-sm-12\">\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"firstCustodianCode\"\r\n                         id=\"firstCustodianCode\"\r\n                         [(ngModel)]=\"model.FirstCustodianCode\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-12 col-form-label\">2<sup>nd</sup> Employee Code</label>\r\n                <div class=\"col-sm-12\">\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"secondCustodianCode\"\r\n                         id=\"secondCustodianCode\"\r\n                         [(ngModel)]=\"model.SecondCustodianCode\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-12 col-form-label\">1<sup>st</sup> Employee Name</label>\r\n                <div class=\"col-sm-12\">\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"firstCustodianName\"\r\n                         id=\"firstCustodianName\"\r\n                         [(ngModel)]=\"model.FirstCustodianName\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-12 col-form-label\">2<sup>nd</sup> Employee Name</label>\r\n                <div class=\"col-sm-12\">\r\n                  <input type=\"text\" class=\"form-control withIcon textboxheight\"\r\n                         formControlName=\"secondCustodianName\"\r\n                         id=\"secondCustodianName\"\r\n                         [(ngModel)]=\"model.SecondCustodianName\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>-->\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\" >\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-sm-6 col-form-label\" [hidden]=\"hideAttachment\"><a href=\"javascript:void(0);\" (click)=\"showUploadFile()\"><u>Attach New File</u></a></label>\r\n                <div class=\"col-sm-6\">\r\n                  <input type=\"file\" class=\"form-control withIcon textboxheight\" style=\"padding-top: 1px;padding-left: 0px;\" [hidden]=\"hideUploadFileFlag\"\r\n                         id=\"upload\"\r\n                         (change)=\"onFileChange($event)\"\r\n                         multiple\r\n                         [ngClass]=\"{ 'form-control-danger': form.upload.dirty }\" />\r\n                  <div *ngIf=\" form.upload.dirty\" class=\"messages text-danger\">Upload File is required</div>\r\n                </div>\r\n              </div>  \r\n            </div>\r\n            <!--<div class=\"col-sm-6\" [hidden]=\"hiddenRe_RunRuleEngine\">\r\n                <label class=\"col-form-label float-right\"><a href=\"javascript:void(0);\" (click)=\"RunRuleEngine()\"><u>Re-run RuleEngine</u></a></label>\r\n            </div>-->\r\n            </div>\r\n\r\n\r\n          <div class=\"row\" style=\"margin-top: 10px;\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group row\" style=\"overflow-x:auto;\">\r\n                <div class=\"col-sm-12\">\r\n                  <table>\r\n\r\n                    <tr>\r\n                      <th>File Name</th>\r\n                      <th [hidden]=\"hideFileEditing\">MSP</th>\r\n                      <th [hidden]=\"hideFileEditing\">HO</th>\r\n                      <th [hidden]=\"hideFileEditing\">Location</th>\r\n                      <th></th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let file of files; let i=index;\">\r\n\r\n                      <td>\r\n                        <div class=\"left\">\r\n                          <div [ngSwitch]=\"file.TypeofAttatchent\">\r\n                            <div *ngSwitchCase=\"'EJ'\">\r\n                              {{i+1}}. <a href=\"javascript:void(0);\" (click)=\"onClickEvent(i)\" style=\"color:green\">{{file.FileName}} (EJ File)</a>\r\n                            </div>\r\n                            <div *ngSwitchCase=\"'Log'\">\r\n                              {{i+1}}. <a href=\"javascript:void(0);\" (click)=\"onClickEvent(i)\" style=\"color:brown\">{{file.FileName}} (Justification File)</a>\r\n                            </div>\r\n                            <div *ngSwitchCase=\"'EmailFile'\">\r\n                              {{i+1}}. <a href=\"javascript:void(0);\" (click)=\"onClickEvent(i)\" style=\"color:orangered\">{{file.FileName}} (Email File)</a>\r\n                            </div>\r\n                            <div *ngSwitchCase=\"'EmailResponse'\">\r\n                              {{i+1}}. <a href=\"javascript:void(0);\" (click)=\"onClickEvent(i)\" style=\"color:darkblue\">{{file.FileName}} (Email Response)</a>\r\n                            </div>\r\n                            <div *ngSwitchCase=\"'others'\">\r\n                              {{i+1}}. <a href=\"javascript:void(0);\" (click)=\"onClickEvent(i)\" style=\"color:orchid\">{{file.FileName}} (Other File )</a>\r\n                            </div>\r\n                            <div *ngSwitchCase=\"'added'\">\r\n                              {{i+1}}. <a href=\"javascript:void(0);\" (click)=\"onClickEvent(i)\" style=\"color:orchid\">{{file.FileName}} (New Added)</a>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </td>\r\n                      <td [hidden]=\"hideFileEditing\">\r\n                        <div class=\"center\">\r\n                          <input type=\"checkbox\"\r\n                                 formControlName=\"mspActive\"\r\n                                 id=\"mspActive\"\r\n                                 (change)=\"changeMSPCheckbox(file.FileName)\"\r\n                                 [checked]=\"file.MSPActive\" />\r\n                        </div>\r\n                      </td>\r\n                      <td [hidden]=\"hideFileEditing\">\r\n                        <div class=\"center\">\r\n                          <input type=\"checkbox\"\r\n                                 formControlName=\"hoActive\"\r\n                                 id=\"hoActive\"\r\n                                 (change)=\"changeHOCheckbox(file.FileName)\"\r\n                                 [checked]=\"file.HOActive\" />\r\n                        </div>\r\n                      </td>\r\n                      <td [hidden]=\"hideFileEditing\">\r\n                        <div class=\"center\">\r\n                          <input type=\"checkbox\"\r\n                                 formControlName=\"locationActive\"\r\n                                 id=\"locationActive\"\r\n                                 (change)=\"changeLocationCheckbox(file.FileName)\"\r\n                                 [checked]=\"file.LocationActive\" />\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <div [ngSwitch]=\"file.TypeofAttatchent\">\r\n                          <div *ngSwitchCase=\"'added'\">\r\n                            <a href=\"javascript:void(0);\" (click)=\"removeUploadFile(file.FileName)\" style=\"color:red\"><i class=\"icofont icofont-bin\"></i></a>\r\n                          </div>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </table>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"row\" >\r\n            \r\n              <div class=\"col-sm-12\" >\r\n                <div class=\"row\" [hidden]=\"hideSubmitButton\">\r\n                  <div class=\"col-sm-6\" >\r\n                    <button type=\"submit\" class=\"btn btn-primary float-right \">Submit</button>\r\n                    \r\n                  </div>\r\n                  <div class=\"col-sm-6\">\r\n                    <button class=\"btn btn-primary float-left \" (click)=\"back()\">Back</button>\r\n                  </div>\r\n                </div>\r\n\r\n                <div>\r\n                  <div class=\"col-sm-6\" [hidden]=\"!hideSubmitButton\">\r\n                    <button class=\"btn btn-primary float-right \" (click)=\"back()\">Back</button>\r\n                  </div>\r\n                </div>\r\n\r\n            \r\n            </div>\r\n\r\n            <!--<div class=\"col-sm-12\">\r\n              <div class=\"form-group row\">\r\n                <div class=\"col-sm-12\" style=\"text-align:center\">\r\n                  <button type=\"submit\" class=\"btn btn-primary btntype\">Submit</button>\r\n                </div>\r\n              </div>\r\n            </div>-->\r\n          </div>\r\n\r\n\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n  </ng-sidebar-container>\r\n\r\n\r\n\r\n</app-card>\r\n\r\n\r\n<form style=\"display:none;\" name=\"showFiles\" id=\"showFilesTran\" target=\"_blank\" action={{showFilesURL}} method=\"post\">\r\n  <input name=\"FilePath\" />\r\n  <input name=\"TypeofAttatchent\" />\r\n  <input name=\"FileName\" />\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/ticketViewer/crudOpsTicket/crudOpsTicket.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ticketViewer/crudOpsTicket/crudOpsTicket.component.ts ***!
  \***********************************************************************/
/*! exports provided: CrudOpsTicketComponent, Rights, Roles, TicketModel, Overage, ErrorCodeModel, FileUpload, FileUploading, FinalFileUploading, RunRuleEngine, RunRuleEngineTicket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudOpsTicketComponent", function() { return CrudOpsTicketComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rights", function() { return Rights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketModel", function() { return TicketModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overage", function() { return Overage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCodeModel", function() { return ErrorCodeModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploading", function() { return FileUploading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalFileUploading", function() { return FinalFileUploading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunRuleEngine", function() { return RunRuleEngine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunRuleEngineTicket", function() { return RunRuleEngineTicket; });
/* harmony import */ var _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../GlobalShareCode */ "./src/app/GlobalShareCode.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_DataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DataService */ "./src/app/services/DataService.ts");
/* harmony import */ var _ticketViewer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ticketViewer.service */ "./src/app/ticketViewer/ticketViewer.service.ts");
/* harmony import */ var src_app_app_commonFunctionality__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.commonFunctionality */ "./src/app/app.commonFunctionality.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _crudOpsTicket_crudOpsTicket_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../crudOpsTicket/crudOpsTicket.validator */ "./src/app/ticketViewer/crudOpsTicket/crudOpsTicket.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CrudOpsTicketComponent = /** @class */ (function () {
    function CrudOpsTicketComponent(ticketViewerService, cf, formBuilder, router, ds) {
        var _this = this;
        this.ticketViewerService = ticketViewerService;
        this.cf = cf;
        this.formBuilder = formBuilder;
        this.router = router;
        this.ds = ds;
        this.maxDate = new Date();
        this.finalFileUploadingModel = new FinalFileUploading();
        this._opened = false;
        this.childComponentShow = true;
        this.model = new TicketModel();
        this.runRuleEngineModel = {
            BatchId: "", MSP: "", TicketData: [{ TicketId: "", Txn_No: 0, ATMID: "", Date: "", Disputed_Amount: 0, Ej_File: "" }]
        };
        this.overageModel = new Overage();
        this.errorCodeModel = new ErrorCodeModel();
        this.fileModel = new FileUpload();
        this.fileUploadingModel = new FileUploading();
        this.justificationArraySet = ["OVERAGE REPORTED", "PARTIAL - OVERAGE REPORTED", "SWITCH INCREASED", "PARTIAL - SWITCH INCREASED", "PARTIAL - CASH DEPOSITED", "CASH DEPOSITED"];
        this.rightsParameter = 1;
        this.hideFileEditing = false;
        this.hiddenRe_RunRuleEngine = false;
        this.hiddenForLocation = false;
        this.hiddenForHO = false;
        this.hiddenforMSP = false;
        this.hiddenforAdmin = false;
        this.hideFromToDateFields = false;
        this.hideUploadFileFlag = true;
        this.hideATMMasterData = false;
        this.hindATMStatus = true;
        this.hidefirstCustodian = false;
        this.hideSecondCustodian = false;
        this.hideDepositfromLocation = false;
        this.rolesOptions = ["MSP", "HO", "LOCATION"];
        this.rightsOptions = ["VIEW", "EDIT"];
        this.showAdmin = true;
        this.disableQueryCategory = false;
        this.disableErrorCode = false;
        this.disableRights = true;
        this.disableInternalActions = false;
        this.disableHORejectionJustification = false;
        this.disableAction = false;
        this.disableSubAction = false;
        this.disableReassignReason = false;
        this.disableAcceptanceJustification = false;
        this.disableModeOfRecovery = false;
        this.disableTerritoryRejectionJustification = false;
        this.disableCMSStatus = false;
        this.disableQueryType = false;
        this.showSuccessErrorErrorCode = null;
        this.showSuccessErrorCustomerActions = null;
        this.showSuccessErrorHORejectionJustification = null;
        this.showSuccessErrorTerritoryRejectionJustification = null;
        this.showSuccessActionFiled = null;
        this.showSuccessErrorSubAction = null;
        this.showSuccessDelayDepositIssue = null;
        this.showSuccessErrorReassignReason = null;
        this.showSuccessAcceptanceJustification = null;
        this.showSuccessErrorModeOfRecovery = null;
        this.showSuccessErrorInternalActions = null;
        this.showSuccessErrorCMSStatus = null;
        this.HideCmsStatusFlag = false;
        this.hideCustomerDetails = false;
        //internalActionFieldHidden: boolean = false;
        this.targetAmountFieldHidden = true;
        this.hideHORejectionJustification = false;
        this.hideActionFiled = false;
        this.hideAttachment = false;
        this.hideSubmitButton = false;
        this.reassignReasonFieldHidden = true;
        this.config = {
            displayKey: "name",
            search: true,
            limitTo: 5
        };
        this.errorCodeConfig = {
            displayKey: "name",
            search: true,
            limitTo: 20
        };
        this.showFilesURL = _GlobalShareCode__WEBPACK_IMPORTED_MODULE_0__["baseUrl"] + "TicketViewer/ShowFiles";
        this.ticketViewerService.getQueryType().subscribe(function (result) {
            var index = result.Entity.queryType.indexOf("physical shortage".toUpperCase());
            if (index !== -1) {
                result.Entity.queryType.splice(index, 1);
            }
            _this.queryTypeOptions = result.Entity.queryType;
            _this.queryCategoryOptions = result.Entity.queryCategory;
            _this.customerActionsOptions = result.Entity.customerActions;
            _this.internalActionsOptions = result.Entity.internalActions;
            _this.cmsStatusOptions = result.Entity.cmsStatus;
        });
    }
    Object.defineProperty(CrudOpsTicketComponent.prototype, "form", {
        get: function () { return this.ticketSummaryForm.controls; },
        enumerable: true,
        configurable: true
    });
    CrudOpsTicketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.childOldTicket;
        this.viewTicketId = localStorage.getItem('TicketId');
        if (this.viewTicketId !== undefined) {
            this.ticketViewerService.CallTicketDetails(this.viewTicketId).subscribe(function (result) {
                //console.log(result);
                _this.model = result.Entity;
                _this.overageModel = result.Entity.overageData;
                _this.files = result.Entity.FileUplodedList;
                _this.CountOfFiles = _this.files.length;
                if (_this.model.FirstCustodianCode == null || _this.model.FirstCustodianCode == '') {
                    _this.hidefirstCustodian = true;
                }
                if (_this.model.SecondCustodianCode == null || _this.model.SecondCustodianCode == '') {
                    _this.hideSecondCustodian = true;
                }
                if (_this.model.QueryType == 'customer claim'.toUpperCase() || _this.model.QueryType == 'Customer Claim') {
                    _this.hideFromToDateFields = true;
                }
                else {
                    _this.disableQueryCategory = true;
                }
                if (!_this.model.ATMFlag) {
                    _this.hideATMMasterData = true;
                    _this.hindATMStatus = false;
                }
                //  this.reassignReasonFieldHidden = false;
                //  if (this.model.CMSStatus.toUpperCase() != "Supporting Attached".toUpperCase() && this.rolesParameter != 4 && this.rolesParameter !=2) {
                //    this.targetAmountFieldHidden = false;
                //  } else {
                //    this.targetAmountFieldHidden = true;
                //  }
                //}
                _this.errorCodeType_Bucket(_this.model.ErrorCode);
                //if ((this.model.ErrorRemark != null || this.model.ErrorRemark != 'null') && (this.model.ErrorCode != null || this.model.ErrorCode != 'null')) {
                //  
                //  this.errorCodeType(this.model.ErrorCode, this.model.ErrorRemark);
                //}
                _this.callJustification(_this.model.QueryType, _this.model.CustomerActions);
            });
        }
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
        this.ticketViewerService.getErrorCode({}).subscribe(function (result) {
            _this.errorCodeOptions = result.Entity.errorCodeList;
        });
        this.ticketSummaryForm = this.formBuilder.group({
            batchID: [{ value: '', disabled: true }, []],
            ticketID: [{ value: '', disabled: true }, []],
            oldTicketID: [{ value: '', disabled: true }, []],
            queryType: [{ value: '', }, []],
            atmID: [{ value: '', disabled: true }, []],
            atmType: [{ value: '', disabled: true }, []],
            atmStatus: [{ value: '', disabled: true }, []],
            msp: [{ value: '', disabled: true }, []],
            bank: [{ value: '', disabled: true }, []],
            roCode: [{ value: '', disabled: true }, []],
            location: [{ value: '', disabled: true }, []],
            emailDate: [{ value: '', disabled: true }, []],
            incidentDate: [{ value: '', disabled: true }, []],
            fromDate: [{ value: '', disabled: true }, []],
            toDate: [{ value: '', disabled: true }, []],
            disputedAmount: [{ value: '', disabled: true }, []],
            transactionAmount: [{ value: '', disabled: true }, []],
            referenceNo: [{ value: '', disabled: true }, []],
            transactionNo: [{ value: '', disabled: true }, []],
            cardNumber: [{ value: '', disabled: true }, []],
            queryCategory: [{ value: '' }, []],
            errorCode: [{ value: '' }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            errorBucket: [{ value: '', disabled: true }, []],
            errorType: [{ value: '', disabled: true }, []],
            cardException: [{ value: '', disabled: true }, []],
            atmException: [{ value: '', disabled: true }, []],
            routeException: [{ value: '', disabled: true }, []],
            customerComment: [{ value: '' }, []],
            customerActions: [{ value: '' }, []],
            hoComment: [{ value: '' }, []],
            internalActions: [{ value: '' }, []],
            targetAmount: [{ value: '' }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[0-9]+$')],],
            hoRejectionJustification: [{ value: '' }, []],
            action: [{ value: '' }, []],
            subAction: [{ value: '' }, []],
            assignedtargetAmount: [{ value: '', disabled: true }, []],
            recoveredAmount: [{ value: '', disabled: true }, []],
            pendingAmount: [{ value: '', disabled: true }, []],
            woOrder: [{ value: '', disabled: true }, []],
            territoryDepositDate: [{ value: '', disabled: true }, []],
            depositAmount: [{ value: '', disabled: true }, []],
            delayDepositIssue: [{ value: '' }, []],
            reassignReason: [{ value: '' }, []],
            acceptanceJustification: [{ value: '' }, []],
            modeOfRecovery: [{ value: '' }, []],
            disputetargetAmount: [{ value: '', disabled: true }, []],
            toBeRecoveredAmount: [{ value: '', disabled: true }, []],
            hOApprovedRecoveryAmount: [{ value: '', disabled: true }, []],
            firstCustodianCode: [{ value: '' }, []],
            firstCustodianName: [{ value: '' }, []],
            secondCustodianCode: [{ value: '' }, []],
            secondCustodianName: [{ value: '' }, []],
            territoryComment: [{ value: '' }, []],
            territoryRejectionJustification: [{ value: '' }, []],
            mspActive: [{ value: '' }, []],
            hoActive: [{ value: '' }, []],
            locationActive: [{ value: '' }, []],
            transactionTime: [{ value: '', disabled: true }, []],
            cmsStatus: [{ value: '' }, []],
            emailId: [{ value: '', disabled: true }, []],
            subject: [{ value: '', disabled: true }, []],
            zone: [{ value: '', disabled: true }, []],
            hubLocation: [{ value: '', disabled: true }, []],
            accountNumber: [{ value: '', disabled: true }, []],
            emailTime: [{ value: '', disabled: true }, []],
            overageDate: [{ value: '', disabled: true }, []],
            overageAmount: [{ value: '', disabled: true }, []],
            depositDate: [{ value: '', disabled: true }, []],
            processingRemarks: [{ value: '', disabled: true }, []],
            cmsRemarks: [{ value: '' }, []],
            upload: [{ value: '' }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
        });
    };
    CrudOpsTicketComponent.prototype.filedPopAccRole_Rights = function (Roles, Rights) {
        this.rolesParameter = Roles;
        if (Roles == 1) {
            this.hiddenRe_RunRuleEngine = true;
            this.showAdmin = false;
            this.hiddenforAdmin = true;
            if (Rights == 1) {
                this.ticketSummaryForm.disable();
                this.hideSubmitButton = true;
                this.hideFileEditing = true;
                this.hideAttachment = true;
            }
            else {
                this.ticketSummaryForm.controls['overageDate'].enable();
                this.ticketSummaryForm.controls['overageAmount'].enable();
                this.ticketSummaryForm.controls['depositAmount'].enable();
                this.ticketSummaryForm.controls['depositDate'].enable();
            }
        }
        if (Roles == 2 /*MSP-USER*/) {
            this.hiddenforMSP = true;
            this.hiddenRe_RunRuleEngine = true;
            this.hideAttachment = true;
            this.hideActionFiled = true;
            this.hideFileEditing = true;
            this.ticketSummaryForm.disable();
            this.hideSubmitButton = true;
        }
        if (Roles == 3 /*HO-USER*/) {
            this.hideActionFiled = true;
            this.hiddenForHO = true;
            this.ticketSummaryForm.controls['firstCustodianCode'].disable();
            this.ticketSummaryForm.controls['firstCustodianName'].disable();
            this.ticketSummaryForm.controls['secondCustodianCode'].disable();
            this.ticketSummaryForm.controls['secondCustodianName'].disable();
            this.ticketSummaryForm.controls['territoryComment'].disable();
            this.ticketSummaryForm.controls['delayDepositIssue'].disable();
            this.ticketSummaryForm.controls['territoryRejectionJustification'].disable();
            this.disableTerritoryRejectionJustification = true;
            this.ticketSummaryForm.controls['cardNumber'].disable();
            if (Rights == 1 /*Only-View*/) {
                this.ticketSummaryForm.controls['queryCategory'].disable();
                this.ticketSummaryForm.controls['queryType'].disable();
                this.ticketSummaryForm.controls['customerActions'].disable();
                this.disableQueryCategory = true;
                this.disableErrorCode = true;
                this.disableInternalActions = true;
                this.disableHORejectionJustification = true;
                this.disableReassignReason = true;
                this.hideFileEditing = true;
                this.hideAttachment = true;
                this.hideSubmitButton = true;
                //this.ticketSummaryForm.controls['queryCategory'].disable();
            }
            else {
                this.ticketSummaryForm.controls['cardNumber'].disable();
                //this.disableQueryCategory = false;
                //this.disableErrorCode = false;
                //this.disableInternalActions = false;
                //this.disableHORejectionJustification = false;
                //this.disableReassignReason = false;
                this.hideFileEditing = false;
                this.hideAttachment = false;
                this.hideSubmitButton = false;
            }
            //if (this.model.CustomerActions == "ACCEPT" || this.model.CustomerActions == "REJECT" || this.model.CustomerActions == "MANUAL") {
            //  if (this.model.CMSStatus == "TAKEN UP FOR RECOVERY") {
            //    this.ticketSummaryForm.disable();
            //    this.hideSubmitButton = true;
            //    this.hideFileEditing = true;
            //    this.hideAttachment = true;
            //  }
            //}
            if (this.model.HoSubmitted) {
                this.ticketSummaryForm.disable();
                this.hideSubmitButton = true;
                this.hideFileEditing = true;
                this.hideAttachment = true;
            }
        }
        if (Roles == 4 /*Location-USER*/) {
            this.hiddenRe_RunRuleEngine = true;
            //if (this.model.CustomerActions == "ACCEPT" || this.model.CustomerActions == "REJECT" || this.model.CustomerActions == "MANUAL") {
            //  if (this.model.CMSStatus == "TAKEN UP FOR RECOVERY") {
            //    this.ticketSummaryForm.disable();
            //    this.hideSubmitButton = true;
            //    this.hideFileEditing = true;
            //    this.hideAttachment = true;
            //  }
            //}
            this.ticketSummaryForm.controls['customerComment'].disable();
            this.hideDepositfromLocation = true;
            this.hiddenForLocation = true;
            this.hideCustomerDetails = true;
            this.ticketSummaryForm.controls['cardNumber'].disable();
            this.ticketSummaryForm.controls['hoComment'].disable();
            this.ticketSummaryForm.controls['errorCode'].disable();
            this.ticketSummaryForm.controls['firstCustodianCode'].disable();
            this.ticketSummaryForm.controls['firstCustodianName'].disable();
            this.ticketSummaryForm.controls['secondCustodianCode'].disable();
            this.ticketSummaryForm.controls['secondCustodianName'].disable();
            this.disableErrorCode = true;
            this.ticketSummaryForm.controls['queryCategory'].disable();
            this.ticketSummaryForm.controls['queryType'].disable();
            //this.internalActionFieldHidden = true;
            this.hideHORejectionJustification = true;
            this.hideFileEditing = true;
            //this.ticketSummaryForm.controls['queryCategory'].disable();
            if (Rights == 1 /*Only-View*/) {
                this.disableAction = true;
                this.disableSubAction = true;
                this.disableAcceptanceJustification = true;
                this.ticketSummaryForm.controls['modeOfRecovery'].disable();
                this.hideAttachment = true;
                this.ticketSummaryForm.controls['firstCustodianCode'].disable();
                this.ticketSummaryForm.controls['firstCustodianName'].disable();
                this.ticketSummaryForm.controls['secondCustodianCode'].disable();
                this.ticketSummaryForm.controls['secondCustodianName'].disable();
                this.ticketSummaryForm.controls['delayDepositIssue'].disable();
                this.disableTerritoryRejectionJustification = true;
                this.hideSubmitButton = true;
            }
            else {
                this.disableTerritoryRejectionJustification = false;
                this.disableAction = false;
                this.disableSubAction = false;
                this.disableAcceptanceJustification = false;
                this.ticketSummaryForm.controls['firstCustodianCode'].enable();
                this.ticketSummaryForm.controls['firstCustodianName'].enable();
                this.ticketSummaryForm.controls['secondCustodianCode'].enable();
                this.ticketSummaryForm.controls['secondCustodianName'].enable();
                this.hideSubmitButton = false;
            }
            if (this.model.LocSubmitted) {
                this.ticketSummaryForm.disable();
                this.hideSubmitButton = true;
                this.hideAttachment = true;
            }
        }
        if (Roles == 5 /*HO_Manager-USER*/) {
            this.hiddenRe_RunRuleEngine = true;
            this.ticketSummaryForm.disable();
            this.hideFileEditing = true;
            this.hideAttachment = true;
            this.hideSubmitButton = true;
            this.hiddenForHO = true;
        }
        if (Roles == 6 /*Loc_Manager-User*/) {
            this.hiddenRe_RunRuleEngine = true;
            this.hiddenForLocation = true;
            this.hideHORejectionJustification = true;
            this.hideCustomerDetails = true;
            this.ticketSummaryForm.disable();
            this.hideFileEditing = true;
            this.hideAttachment = true;
            this.hideSubmitButton = true;
        }
        if (JSON.parse(localStorage.getItem('OldTicketIdView'))) {
            this.ticketSummaryForm.disable();
            this.hideSubmitButton = true;
            this.hideFileEditing = true;
            this.hideAttachment = true;
            this.hiddenRe_RunRuleEngine = true;
        }
    };
    CrudOpsTicketComponent.prototype.selectionChangedQT = function ($event) {
        if ($event !== undefined) {
            if ($event == "customer claim".toUpperCase()) {
                this.ticketSummaryForm.controls['queryCategory'].enable();
            }
            else {
                this.model.QueryCategory = null;
                this.ticketSummaryForm.controls['queryCategory'].disable();
            }
        }
        else {
            this.model.QueryCategory = null;
            this.ticketSummaryForm.controls['queryCategory'].disable();
        }
    };
    CrudOpsTicketComponent.prototype.selectionChangedQC = function ($event) {
        if ($event !== undefined) {
            if ($event == "customer claim".toUpperCase()) {
                this.disableQueryCategory = false;
            }
            else {
                this.disableQueryCategory = true;
            }
        }
        else {
        }
    };
    CrudOpsTicketComponent.prototype.selectionChangedEC = function ($event) {
        if ($event !== undefined) {
            this.model.ErrorBucket = null;
            this.model.ErrorType = null;
            this.errorCodeType_Bucket(this.model.ErrorCode);
        }
        else {
            this.model.ErrorBucket = null;
            this.model.ErrorType = null;
        }
    };
    CrudOpsTicketComponent.prototype.selectionChangedCA = function ($event) {
        if ($event !== undefined) {
            //this.model.Justification = null;
            this.callJustification(this.model.QueryType, $event);
        }
        else {
            this.model.Justification = null;
        }
    };
    //selectionChangedIA($event) {
    //  if ($event.value !== undefined) {
    //    this.showSuccessErrorInternalActions = "Success";
    //    if ($event.value == "Forward to Territory") {
    //      this.targetAmountFieldHidden = false;
    //    }
    //  } else {
    //    this.showSuccessErrorInternalActions = "Error";
    //    this.targetAmountFieldHidden = true;
    //  }
    //}
    CrudOpsTicketComponent.prototype.selectionChangedHORJ = function ($event) {
        if ($event !== undefined) {
            if (this.justificationArraySet.some(function (item) { return item == $event.toUpperCase(); })) {
                this.overageModel.OverageFlag = false;
                this.ticketSummaryForm.controls['overageDate'].enable();
                this.ticketSummaryForm.controls['overageAmount'].enable();
                this.ticketSummaryForm.controls['overageAmount'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[0-9]+$'), _crudOpsTicket_crudOpsTicket_validator__WEBPACK_IMPORTED_MODULE_7__["CrudeOpsTicketValidator"].cannotBeZero]);
            }
            else {
                this.overageModel.OverageFlag = true;
                this.ticketSummaryForm.controls['overageDate'].disable();
                this.ticketSummaryForm.controls['overageAmount'].disable();
                this.ticketSummaryForm.controls['overageAmount'].clearValidators();
            }
        }
        else {
            this.overageModel.OverageFlag = true;
            this.ticketSummaryForm.controls['overageDate'].disable();
            this.ticketSummaryForm.controls['overageAmount'].disable();
            this.ticketSummaryForm.controls['overageAmount'].clearValidators();
        }
    };
    CrudOpsTicketComponent.prototype.selectionChangedTRJ = function ($event) {
        if ($event !== undefined) {
            if (this.justificationArraySet.some(function (item) { return item == $event.toUpperCase(); })) {
                this.hideDepositfromLocation = false;
                this.ticketSummaryForm.controls['depositDate'].enable();
                this.ticketSummaryForm.controls['depositAmount'].enable();
                this.ticketSummaryForm.controls['depositAmount'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[0-9]+$'), _crudOpsTicket_crudOpsTicket_validator__WEBPACK_IMPORTED_MODULE_7__["CrudeOpsTicketValidator"].cannotBeZero]);
            }
            else {
                this.hideDepositfromLocation = true;
                this.ticketSummaryForm.controls['depositDate'].disable();
                this.ticketSummaryForm.controls['depositAmount'].disable();
                this.ticketSummaryForm.controls['depositAmount'].clearValidators();
            }
        }
        else {
            this.hideDepositfromLocation = true;
            this.ticketSummaryForm.controls['depositDate'].disable();
            this.ticketSummaryForm.controls['depositAmount'].disable();
            this.ticketSummaryForm.controls['depositAmount'].clearValidators();
        }
    };
    CrudOpsTicketComponent.prototype.selectionChangedAction = function ($event) {
        if ($event.value !== undefined) {
            this.showSuccessActionFiled = "Success";
        }
        else {
            this.showSuccessActionFiled = "Error";
        }
    };
    CrudOpsTicketComponent.prototype.selectionChangedSubAction = function ($event) {
        if ($event.value !== undefined) {
            this.showSuccessActionFiled = "Success";
        }
        else {
            this.showSuccessActionFiled = "Error";
        }
    };
    CrudOpsTicketComponent.prototype.selectionChangedDDI = function ($event) {
        if ($event.value !== undefined) {
            this.showSuccessDelayDepositIssue = "Success";
        }
        else {
            this.showSuccessDelayDepositIssue = "Error";
        }
    };
    CrudOpsTicketComponent.prototype.selectionChangedRR = function ($event) {
        if ($event.value !== undefined) {
            this.showSuccessErrorReassignReason = "Success";
        }
        else {
            this.showSuccessErrorReassignReason = "Error";
        }
    };
    CrudOpsTicketComponent.prototype.selectionChangedAJ = function ($event) {
        if ($event.value !== undefined) {
            this.showSuccessAcceptanceJustification = "Success";
        }
        else {
            this.showSuccessAcceptanceJustification = "Error";
        }
    };
    CrudOpsTicketComponent.prototype.selectionChangedMOR = function ($event) {
        if ($event.value !== undefined) {
            this.showSuccessErrorModeOfRecovery = "Success";
        }
        else {
            this.showSuccessErrorModeOfRecovery = "Error";
        }
    };
    CrudOpsTicketComponent.prototype.selectionChangedCMSStatus = function ($event) {
        if ($event !== undefined) {
            if ($event != "CLOSED") {
                this.targetAmountFieldHidden = false;
                this.reassignReasonFieldHidden = false;
            }
            else {
                this.targetAmountFieldHidden = true;
            }
            if ($event != "Supporting Attached".toUpperCase() && $event != "CLOSED") {
                this.targetAmountFieldHidden = false;
            }
            else {
                this.targetAmountFieldHidden = true;
            }
        }
        else {
            this.reassignReasonFieldHidden = true;
            this.targetAmountFieldHidden = true;
        }
    };
    CrudOpsTicketComponent.prototype.errorCodeType_Bucket = function (ErrorCode) {
        var _this = this;
        this.ticketViewerService.getErrorCode({ errorCode: ErrorCode }).subscribe(function (result) {
            if (result.Entity != null) {
                _this.model.ErrorType = result.Entity.errorType;
                _this.model.ErrorBucket = result.Entity.errorBucket;
            }
            //this.errorCodeRemarkOptions = result.Entity.errorRemarksList;
            //if (result.Entity.errorRemarksList[0] == "" || result.Entity.errorRemarksList[0] == null) {
            //  this.errorCodeType(this.model.ErrorCode, result.Entity.errorRemarksList[0] == "" ? " " : result.Entity.errorRemarksList[0] == null ? "null" :"null");
            //}
        });
    };
    CrudOpsTicketComponent.prototype.showUploadFile = function () {
        this.hideUploadFileFlag = !this.hideUploadFileFlag;
    };
    CrudOpsTicketComponent.prototype.changeMSPCheckbox = function (event) {
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].FileName == event) {
                this.files[i].MSPActive = !this.files[i].MSPActive;
                break;
            }
        }
    };
    CrudOpsTicketComponent.prototype.changeHOCheckbox = function (event) {
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].FileName == event) {
                this.files[i].HOActive = !this.files[i].HOActive;
                break;
            }
        }
    };
    CrudOpsTicketComponent.prototype.changeLocationCheckbox = function (event) {
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].FileName == event) {
                this.files[i].LocationActive = !this.files[i].LocationActive;
                break;
            }
        }
    };
    CrudOpsTicketComponent.prototype.onFileChange = function ($event) {
        if ($event.target.files.length > 0) {
            this.fileUploadingModel.upload.push($event.target.files);
            var file = { Id: this.files.length, TicketID: this.model.TicketID, MSP: this.model.MSP, FileName: $event.target.files[0].name, FilePath: '', MSPActive: false, HOActive: true, LocationActive: true, TypeofAttatchent: 'added', Editingfiles: $event.target.files[0] };
            this.files.push(file);
            this.ticketSummaryForm.controls['upload'].markAsPristine();
        }
    };
    CrudOpsTicketComponent.prototype.removeUploadFile = function (event) {
        for (var i = this.files.length - 1; i >= 0; i--) {
            if (this.files[i].FileName == event) {
                this.files.splice(i, 1);
                break;
            }
        }
        for (var j = this.fileUploadingModel.upload.length - 1; j <= this.fileUploadingModel.upload.length; j--) {
            if (this.fileUploadingModel.upload[j][0].name == event) {
                this.fileUploadingModel.upload.splice(j, 1);
                break;
            }
        }
    };
    CrudOpsTicketComponent.prototype.callJustification = function (queryType, customerAction) {
        var _this = this;
        this.ticketViewerService.CallTicketJustification_Rejection({ QueryType: queryType, Status: customerAction }).subscribe(function (result) {
            _this.justificationOptions = result.Entity.justification;
            _this.territoryRejectionJustificationOptions = result.Entity.territoryRejectionJustificationOptions;
            _this.cmsStatusOptions = result.Entity.cmsStatus;
            if (_this.model.OpenReginRemoveFlag) {
                var index = _this.cmsStatusOptions.indexOf("OPEN REGION".toUpperCase());
                if (index !== -1) {
                    _this.cmsStatusOptions.splice(index, 1);
                }
            }
            //this.acceptanceJustificationOptions = result.Entity.acceptanceJustification;
            //this.hoRejectionJustificationOptions = result.Entity.rejectionJustification;
            //this.territoryRejectionJustificationOptions = result.Entity.rejectionJustification;
        });
    };
    CrudOpsTicketComponent.prototype.back = function () {
        localStorage.removeItem('TicketId');
        localStorage.removeItem('OldTicketIdView');
        this.router.navigateByUrl('/TicketViewer');
    };
    CrudOpsTicketComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.rolesParameter == 4) {
            if (this.CountOfFiles == this.files.length) {
                this.hideUploadFileFlag = false;
                this.ticketSummaryForm.controls['upload'].markAsDirty();
            }
            else {
                if (this.justificationArraySet.some(function (item) { return item == _this.model.TerritoryRejectionJustification.toUpperCase(); })) {
                    if (this.model.DepositAmount.charAt(0) != '0' && this.model.DepositAmount != '' && this.model.DepositAmount != null && this.model.DepositDate != '' && this.model.DepositDate != null) {
                        this.callUpdateService();
                    }
                }
                else {
                    this.callUpdateService();
                }
            }
        }
        else {
            if (this.justificationArraySet.some(function (item) { return item == _this.model.Justification.toUpperCase(); })) {
                if (this.overageModel.OverageAmount.charAt(0) != '0' && this.overageModel.OverageAmount != '' && this.overageModel.OverageAmount != null && this.overageModel.OverageDate != "" && this.overageModel.OverageDate != null) {
                    this.callUpdateService();
                }
            }
            else {
                this.callUpdateService();
            }
        }
    };
    //selectionChangedAdminRoles($event) {
    //  if ($event.value !== undefined) {
    //    this.disableRights = false;
    //    for (let i = 0; i < this.rolesModel.length; i++)
    //      if (this.rolesModel[i].roleName == $event.value) {
    //        this.rolesParameter = this.rolesModel[i].roleId;
    //        this.filedPopAccRole_Rights(this.rolesParameter, this.rightsParameter);
    //      }
    //     } else {
    //    this.rolesParameter = null;
    //    this.rightsParameter = null;
    //    this.disableRights = true;
    //    this.filedPopAccRole_Rights(1, 1);
    //  }
    //}
    //selectionChangedAdminRights($event) {
    //  if ($event.value !== undefined) {
    //    for (let i = 0; i < this.rightsModel.length; i++)
    //      if (this.rightsModel[i].rightsName == $event.value) {
    //        this.rightsParameter = this.rightsModel[i].rightsId;
    //      }
    //    this.filedPopAccRole_Rights(this.rolesParameter, this.rightsParameter);
    //  }
    //  else {
    //    this.rightsParameter = null;
    //    this.filedPopAccRole_Rights(this.rolesParameter, 1);
    //  }
    //}
    CrudOpsTicketComponent.prototype.callUpdateService = function () {
        var _this = this;
        this.model.HORejectionJustification = this.model.Justification;
        this.model.OverageDate = this.overageModel.OverageDate;
        this.model.OverageAmount = this.overageModel.OverageAmount;
        var formData = new FormData();
        for (var key in this.model) {
            formData.append(key, this.model[key]);
        }
        this.ds.ShowHideToasty({
            title: 'Updating Ticket ....Wait!',
            msg: '',
            showClose: false,
            theme: 'bootstrap',
            type: 'wait',
            closeOther: true
        });
        this.ticketViewerService.updateTicket(formData).subscribe(function (response) {
            if (response.Success) {
                _this.finalFileUploadingModel.fileUploadingFinal = _this.files;
                for (var i = 0; i < _this.finalFileUploadingModel.fileUploadingFinal.length; i++) {
                    _this.formDataUpload = new FormData();
                    for (var key in _this.finalFileUploadingModel.fileUploadingFinal[i]) {
                        _this.formDataUpload.append(key, _this.finalFileUploadingModel.fileUploadingFinal[i][key]);
                    }
                    _this.ticketViewerService.editingFileUpload(_this.formDataUpload).subscribe();
                }
                _this.ds.ShowHideToasty({
                    title: 'Updated Ticket Successfully..',
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
                    title: 'Failed to Update Ticket',
                    msg: response.Message,
                    showClose: true,
                    theme: 'bootstrap',
                    type: 'error',
                    closeOther: true,
                });
            }
        });
    };
    CrudOpsTicketComponent.prototype.onClickEvent = function (event) {
        this.showFilesURL;
        this.submitted = true;
        var downaloadformSubmit = document.getElementById('showFilesTran');
        downaloadformSubmit.elements["FilePath"].value = this.files[event].FilePath;
        downaloadformSubmit.elements["TypeofAttatchent"].value = this.files[event].TypeofAttatchent;
        downaloadformSubmit.elements["FileName"].value = this.files[event].FileName;
        downaloadformSubmit.submit();
    };
    CrudOpsTicketComponent.prototype.toggle = function () {
        this._opened = !this._opened;
    };
    CrudOpsTicketComponent.prototype.closeComments = function () {
        this._opened = !this._opened;
    };
    CrudOpsTicketComponent.prototype.RunRuleEngine = function () {
        var _this = this;
        if (this.model != null && this.files.length != 0) {
            this.runRuleEngineModel.BatchId = this.model.BatchID;
            this.runRuleEngineModel.MSP = this.model.MSP;
            this.runRuleEngineModel.TicketData[0].TicketId = this.model.TicketID;
            this.runRuleEngineModel.TicketData[0].Txn_No = Number(this.model.TransactionNo);
            this.runRuleEngineModel.TicketData[0].ATMID = this.model.ATMID;
            this.runRuleEngineModel.TicketData[0].Date = this.model.IncidentDate + " " + this.model.TransactionTime + ":00";
            this.runRuleEngineModel.TicketData[0].Disputed_Amount = Number(this.model.DisputedAmount.replace(",", ""));
            for (var i = 0; i < this.files.length; i++) {
                if (this.files[i].TypeofAttatchent == "EJ") {
                    this.runRuleEngineModel.TicketData[0].Ej_File = this.files[i].FilePath.replace("Z:", "/nfsmount");
                    break;
                }
            }
            this.ds.ShowHideToasty({
                title: 'Rule Engine Called ....Wait!',
                msg: 'For TicketId {' + this.model.TicketID + '}',
                showClose: false,
                theme: 'bootstrap',
                type: 'wait',
                closeOther: true
            });
            this.ticketViewerService.runRuleEngine(this.runRuleEngineModel).subscribe(function (result) {
                if (result.Success) {
                    _this.ds.ShowHideToasty({
                        title: 'RuleEngine Ran Successfully..',
                        msg: result.Message,
                        showClose: true,
                        theme: 'bootstrap',
                        type: 'success',
                        closeOther: true,
                        timeout: 5000
                    });
                    window.location.reload();
                }
                else {
                    _this.ds.ShowHideToasty({
                        title: 'RuleEngine Failed ..',
                        msg: result.Message,
                        showClose: true,
                        theme: 'bootstrap',
                        type: 'error',
                        closeOther: true,
                        timeout: 5000
                    });
                }
            });
        }
    };
    CrudOpsTicketComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crudOpsTicket',
            template: __webpack_require__(/*! ./CrudOpsTicket.component.html */ "./src/app/ticketViewer/crudOpsTicket/CrudOpsTicket.component.html"),
            styles: [__webpack_require__(/*! ./CrudOpsTicket.component.css */ "./src/app/ticketViewer/crudOpsTicket/CrudOpsTicket.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_ticketViewer_service__WEBPACK_IMPORTED_MODULE_4__["TicketViewerServices"], src_app_app_commonFunctionality__WEBPACK_IMPORTED_MODULE_5__["CommonFunctionality"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_DataService__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], CrudOpsTicketComponent);
    return CrudOpsTicketComponent;
}());

var Rights = /** @class */ (function () {
    function Rights() {
    }
    return Rights;
}());

var Roles = /** @class */ (function () {
    function Roles() {
    }
    return Roles;
}());

var TicketModel = /** @class */ (function () {
    function TicketModel() {
        this.BatchID = null;
        this.TicketID = null;
        this.OldTicketID = null;
        this.QueryType = null;
        this.ATMID = null;
        this.ATMType = null;
        this.ATMFlag = null;
        this.ATMStatus = null;
        this.MSP = null;
        this.Bank = null;
        this.RoCode = null;
        this.Location = null;
        this.EmailDate = null;
        this.IncidentDate = null;
        this.FromDate = null;
        this.ToDate = null;
        this.TransactionTime = null;
        this.DisputedAmount = null;
        this.TransAmount = null;
        this.ReferenceNo = null;
        this.TransactionNo = null;
        this.CardNo = null;
        this.QueryCategory = null;
        this.ErrorCode = null;
        this.ErrorRemark = null;
        this.ErrorType = null;
        this.ErrorBucket = null;
        this.AtmException = null;
        this.CardException = null;
        this.RouteException = null;
        this.CustComments = null;
        this.CustomerActions = null;
        this.HOComments = null;
        this.InternalActions = null;
        this.TargetAmount = null;
        this.Action = null;
        this.SubAction = null;
        this.AssignedTargetAmount = null;
        this.RecoveredAmount = null;
        this.PendingAmount = null;
        this.WoOrder = null;
        this.TerritoryDepositDate = null;
        this.DepositAmount = null;
        this.DelayDepositIssue = null;
        this.ReassignReason = null;
        this.ModeOfRecovery = null;
        this.DisputeTargetAmount = null;
        this.ToBeRecoveredAmount = null;
        this.HOApprovedRecoveryAmount = null;
        this.FirstCustodianCode = null;
        this.SecondCustodianCode = null;
        this.FirstCustodianName = null;
        this.SecondCustodianName = null;
        this.TerritoryComments = null;
        this.TerritoryRejectionJustification = null;
        this.CMSStatus = null;
        this.Justification = null;
        this.EmailID = null;
        this.Subject = null;
        this.Zone = null;
        this.HubLocation = null;
        this.AccountNo = null;
        this.EmailTime = null;
        this.DepositDate = null;
        this.OpenReginRemoveFlag = null;
        this.ProcessingRemarks = null;
        this.OverageDate = null;
        this.OverageAmount = null;
        this.CMSRemarks = null;
        this.HoSubmitted = null;
        this.LocSubmitted = null;
    }
    return TicketModel;
}());

var Overage = /** @class */ (function () {
    function Overage() {
        this.OverageDate = null;
        this.OverageAmount = null;
        this.OverageFlag = null;
    }
    return Overage;
}());

var ErrorCodeModel = /** @class */ (function () {
    function ErrorCodeModel() {
        this.errorCode = null;
        this.errorRemarks = null;
        this.errorType = null;
    }
    return ErrorCodeModel;
}());

var FileUpload = /** @class */ (function () {
    function FileUpload() {
    }
    return FileUpload;
}());

var FileUploading = /** @class */ (function () {
    function FileUploading() {
        this.upload = [];
    }
    return FileUploading;
}());

var FinalFileUploading = /** @class */ (function () {
    function FinalFileUploading() {
    }
    return FinalFileUploading;
}());

//export class FileNeedToUpload {
//  Id: number;
//  FileName: string;
//  FilePath: string;
//  MSPActive: boolean;
//  HOActive: boolean;
//  LocationActive: boolean;
//  TypeofAttatchent: string;
//  EditingFiles: File;
//}
//export class EditingFileUpload {
//  needToUpload: FileNeedToUpload[] = [];
//}
var RunRuleEngine = /** @class */ (function () {
    function RunRuleEngine() {
    }
    return RunRuleEngine;
}());

var RunRuleEngineTicket = /** @class */ (function () {
    function RunRuleEngineTicket() {
    }
    return RunRuleEngineTicket;
}());



/***/ }),

/***/ "./src/app/ticketViewer/crudOpsTicket/crudOpsTicket.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/ticketViewer/crudOpsTicket/crudOpsTicket.module.ts ***!
  \********************************************************************/
/*! exports provided: CrudOpsTicketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudOpsTicketModule", function() { return CrudOpsTicketModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _crudOpsTicket_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crudOpsTicket.routing */ "./src/app/ticketViewer/crudOpsTicket/crudOpsTicket.routing.ts");
/* harmony import */ var _crudOpsTicket_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crudOpsTicket.component */ "./src/app/ticketViewer/crudOpsTicket/crudOpsTicket.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ticketViewer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ticketViewer.service */ "./src/app/ticketViewer/ticketViewer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _commentsComponent_commentsComponent_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../commentsComponent/commentsComponent.module */ "./src/app/ticketViewer/commentsComponent/commentsComponent.module.ts");
/* harmony import */ var ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-select-dropdown */ "./node_modules/ngx-select-dropdown/dist/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select-ng-select.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var CrudOpsTicketModule = /** @class */ (function () {
    function CrudOpsTicketModule() {
    }
    CrudOpsTicketModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _crudOpsTicket_routing__WEBPACK_IMPORTED_MODULE_1__["routing"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng_sidebar__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _commentsComponent_commentsComponent_module__WEBPACK_IMPORTED_MODULE_9__["CrudTicketCommentsModule"],
                ngx_select_dropdown__WEBPACK_IMPORTED_MODULE_10__["SelectDropDownModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
            ],
            declarations: [
                _crudOpsTicket_component__WEBPACK_IMPORTED_MODULE_2__["CrudOpsTicketComponent"],
            ],
            providers: [_ticketViewer_service__WEBPACK_IMPORTED_MODULE_4__["TicketViewerServices"]],
        })
    ], CrudOpsTicketModule);
    return CrudOpsTicketModule;
}());



/***/ }),

/***/ "./src/app/ticketViewer/crudOpsTicket/crudOpsTicket.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ticketViewer/crudOpsTicket/crudOpsTicket.routing.ts ***!
  \*********************************************************************/
/*! exports provided: routing, CrudOpsTicketRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudOpsTicketRoutingModule", function() { return CrudOpsTicketRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crudOpsTicket_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crudOpsTicket.component */ "./src/app/ticketViewer/crudOpsTicket/crudOpsTicket.component.ts");


//const routes: Routes = [];
var routes = [
    {
        path: '',
        component: _crudOpsTicket_component__WEBPACK_IMPORTED_MODULE_1__["CrudOpsTicketComponent"],
        data: {
            breadcrumb: 'TicketSummary',
        },
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
var CrudOpsTicketRoutingModule = /** @class */ (function () {
    function CrudOpsTicketRoutingModule() {
    }
    return CrudOpsTicketRoutingModule;
}());



/***/ }),

/***/ "./src/app/ticketViewer/crudOpsTicket/crudOpsTicket.validator.ts":
/*!***********************************************************************!*\
  !*** ./src/app/ticketViewer/crudOpsTicket/crudOpsTicket.validator.ts ***!
  \***********************************************************************/
/*! exports provided: CrudeOpsTicketValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudeOpsTicketValidator", function() { return CrudeOpsTicketValidator; });
var CrudeOpsTicketValidator = /** @class */ (function () {
    function CrudeOpsTicketValidator() {
    }
    CrudeOpsTicketValidator.cannotBeZero = function (controller) {
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
    //static transactionAmountvalidation(transactionAmount:string, disputeAmount:string){
    //  return (formGroup: FormGroup) => {
    //    
    //    const tranxAmount = formGroup.controls[transactionAmount];
    //    const dispAmount = formGroup.controls[disputeAmount];
    //    if (tranxAmount.value != null) {
    //      
    //      if (tranxAmount.errors && !tranxAmount.errors.transactionAmountValidation) {
    //        // return if another validator has already found an error on the matchingControl
    //        return;
    //      }
    //      if (Number(tranxAmount.value) > Number(dispAmount.value)) {
    //        return tranxAmount.setErrors({ transactionAmountValidation: true });
    //      } else {
    //        return tranxAmount.setErrors(null);
    //      } 
    //      }
    //    return tranxAmount.setErrors(null);  
    //    }
    //}
    CrudeOpsTicketValidator.CardNo = function (controller) {
        if (controller.value != null) {
            if ((controller.value.length) == 18 || (controller.value.length) == 17) {
                return { CardNo: true };
            }
        }
        return null;
    };
    return CrudeOpsTicketValidator;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-ticketViewer-crudOpsTicket-crudOpsTicket-module.js.map