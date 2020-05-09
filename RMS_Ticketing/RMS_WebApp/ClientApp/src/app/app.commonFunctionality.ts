import { Injectable } from '@angular/core';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';
import { HttpHeaders, HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { DateType } from './shared/enums/globalEnums';
import { baseUrl } from './GlobalShareCode';
import { Router } from '@angular/router';

@Injectable()
export class CommonFunctionality {


  position = 'top-center';
  title: string;
  msg: string;
  showClose = true;
  timeout = 120000;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;
  private getCompanyActionUrl: string;
  private getAssignedRoleRegionUrl: string;
  private getUserDetailsUrl: string;
  private getSessionUserDetailsUrl: string;
  public loginEmpRoleID: number;
  constructor(private toastyService: ToastyService, private http: HttpClient, private datePipe: DatePipe, private router: Router) {
    this.getCompanyActionUrl = baseUrl + '/Base/GetCompany';
    this.getUserDetailsUrl = baseUrl + '/Base/GetUserDetails';
    this.getSessionUserDetailsUrl = baseUrl + '/Base/GetSessionUserDetails';
    this.getAssignedRoleRegionUrl = baseUrl + '/Admin/EmployeeMaster/GetAssignedRoleRegion';
  }

  public DateType = DateType;

  DisplayDotNetDateToDDMMMYYYY(dateValue, dateType): any {
    if (!dateValue)
      return;

    if (!dateType) {
      dateType = DateType.DotNet;
    }

    switch (dateType) {
      case DateType.DotNet:
        return this.datePipe.transform(this.ConvertDotNetDateToJavaScriptDate(dateValue), 'dd-MMM-yyyy');
      case DateType.StringWithT:
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
  }

  ConvertDotNetDateToJavaScriptDate(dateValue): any {
    if (!dateValue)
      return;
    var results = /Date\(([^)]+)\)/.exec(dateValue);
    return new Date(parseFloat(results[1]));
  }


  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    //this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added removed!');
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }

  closeAllToast() {
    this.toastyService.clearAll();
  }

  public getCompany<T>(): Observable<T> {
    return this.CallHttp<T>(this.getCompanyActionUrl, null, null);
  }

  public GetAssignedRoleRegion<T>(empCodeObj: any) {
    return this.CallHttp<T>(this.getAssignedRoleRegionUrl, empCodeObj, null);
  }

  public GetUserDetails<T>() {
    return this.CallHttp<T>(this.getUserDetailsUrl, null, null);
  }

  public GetSessionUserDetails<T>() {
    return this.CallHttp<T>(this.getSessionUserDetailsUrl, null, null);

  }
  public CallHttp<T>(url: string, itemData: any, headers?: HttpHeaders) : Observable<T> {
    
    
    return this.http.post<T>(url, itemData, {
      headers: headers
    });
  }

  public GetTemplate<T>(url: string) {
    var template: '';
    return this.http.get<T>(url).subscribe((res: any) => { return res; });
  }
  SessionTime() {
    setInterval(() => {
      this.check();
    }, 1200000);
  }
  check() {
    const now = Date.now();
    const timeleft = 1 * 60 * 2400000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;
    if (isTimeout) {
      localStorage.clear();
      this.router.navigate(['/Login']);
    }
  }
}
