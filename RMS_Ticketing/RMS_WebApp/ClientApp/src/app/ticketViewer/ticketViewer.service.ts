import { baseUrl } from '../GlobalShareCode';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonFunctionality } from '../app.commonFunctionality';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';




@Injectable()
export class TicketViewerServices {

  private commentActionUrl: string;
  private ticketDetailsActionUrl: string;
  private queryandCategoryTypeActionUrl: string;
  private errorCodeTypeActionUrl: string;
  //private queryCategoryActionUrl: string;
  private getEmailAdressActionUrl: string;
  private getMasterDataActionUrl: string;
  private createTicketActionUrl: string;
  private getJustificationTicketActionUrl: string;
  private updateTicketActionUrl: string;
  private runRuleEngineActionUrl: string;
  private fileUploadActionUrl: string;
  private subject = new Subject<any>();

  private options = { headers: new HttpHeaders().set('Content-Type', 'multipart/form-data') };

  


  constructor(private commonFunc: CommonFunctionality, private http: HttpClient) {
    this.commentActionUrl = baseUrl + '/TicketViewer/GetTicketComments';
    this.ticketDetailsActionUrl = baseUrl + '/TicketViewer/GetTicketDetailsView';
    this.queryandCategoryTypeActionUrl = baseUrl + '/TicketViewer/GetQueryandCategoryType';
    this.errorCodeTypeActionUrl = baseUrl + '/TicketViewer/GetErrorCodeandTypes';
    //this.queryCategoryActionUrl = baseUrl + '/TicketViewer/GetQueryCategory';
    this.getEmailAdressActionUrl = baseUrl + '/TicketViewer/GetEmailAdress';
    this.getMasterDataActionUrl = baseUrl + '/TicketViewer/GetMasterData';
    this.createTicketActionUrl = baseUrl + '/TicketViewer/CreateTicket';
    this.getJustificationTicketActionUrl = baseUrl + '/TicketViewer/GetJustification';
    this.updateTicketActionUrl = baseUrl + '/TicketViewer/UpdateTicket';
    this.runRuleEngineActionUrl = baseUrl + '/TicketViewer/RunRuleEngine';
    this.fileUploadActionUrl = baseUrl + '/TicketViewer/EditingFileUpload';
   }


  

  public CallComments<T>(itemName: string): Observable<T> {
    return this.CallHttpGet<T>(this.commentActionUrl, itemName, null);
  }

  public getQueryType<T>(): Observable<T> {
    return this.CallHttpGet<T>(this.queryandCategoryTypeActionUrl, null, null);
  }


  public editingFileUpload<T>(itemName: FormData): Observable<T> {
    
    return this.CallHttpPost<T>(this.fileUploadActionUrl, itemName, null);
  }

  //public getQueryCategory<T>(): Observable<T> {
  //  return this.CallHttpGet<T>(this.queryCategoryActionUrl, null, null);
  //}

  //public getEmailAdress<T>(): Observable<T> {
  //  return this.CallHttpGet<T>(this.getEmailAdressActionUrl, null, null);
  //}

  public getMasterData<T>(itemName: any): Observable<T> {
    
    return this.CallHttpPost<T>(this.getMasterDataActionUrl, itemName, null);
  }

  public getErrorCode<T>(itemName: any): Observable<T> {
    
    return this.CallHttpPost<T>(this.errorCodeTypeActionUrl, itemName, null);
  }


  public createTicket<T>(itemName: FormData): Observable<T> {
    
    return this.CallHttpPost<T>(this.createTicketActionUrl, itemName, null);
  }

  public updateTicket<T>(itemName: FormData): Observable<T> {
    
    return this.CallHttpPost<T>(this.updateTicketActionUrl, itemName, null);
  }


  public runRuleEngine<T>(itemName: any): Observable<T> {

    return this.CallHttpPost<T>(this.runRuleEngineActionUrl, itemName, null);
  }

  public CallTicketDetails<T>(itemName: string): Observable<T> {
    
    return this.CallHttpGet<T>(this.ticketDetailsActionUrl, itemName, null );
  }

  public CallTicketJustification_Rejection<T>(itemName: any): Observable<T> {

    return this.CallHttpPost<T>(this.getJustificationTicketActionUrl, itemName, null);

  }

  private CallHttpPost<T>(url: string, itemData: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, itemData, {
      headers: headers
    });
  }

  private CallHttpGet<T>(url: string, itemData: any, headers?: HttpHeaders): Observable<T> {
    
    if (itemData != null) {
      return this.http.get<T>(url, {
        headers: headers,
        params: { 'Value': itemData }
      });
    }
    else {
      return this.http.get<T>(url, {
        headers: headers});
    }
    

  }
}

