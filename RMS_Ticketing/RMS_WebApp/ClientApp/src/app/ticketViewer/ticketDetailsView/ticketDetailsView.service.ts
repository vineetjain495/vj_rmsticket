import { Injectable, Output, EventEmitter  } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { baseUrl } from 'src/app/GlobalShareCode';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable()

export class TicketDetailsViewService
{

  

  @Output() commentrefresh: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient)
    {
  
    }


  //public addTicketComments<T>(itemName: any): Observable<T> {
   
  //}


  public refreshCommentGrid(): void {
    this.commentrefresh.emit();

  }


  private CallHttp<T>(url: string, itemData: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, itemData, {
      headers: headers
    });
  }



}
