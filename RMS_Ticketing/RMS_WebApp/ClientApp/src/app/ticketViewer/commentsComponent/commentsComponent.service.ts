import { Injectable, Output, EventEmitter  } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { baseUrl } from 'src/app/GlobalShareCode';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable()

export class CommentsComponentService
{
  private commentUpdateActionUrl: string;

constructor(private http: HttpClient)
    {
      this.commentUpdateActionUrl = baseUrl + '/TicketViewer/CommentUpdate';
    }

  public CallUpdateComments<T>(itemName: any): Observable<T> {
    return this.CallHttpPost<T>(this.commentUpdateActionUrl, itemName, null);
  }


  private CallHttpPost<T>(url: string, itemData: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, itemData, {
      headers: headers
    });
  }


  //conversation = new BehaviorSubject<Message[]>([]);


  //update(msg: Message) {
  //  this.conversation.next([msg]);
  //}

  //converse(msg:string) {
  //  const userMessage = new Message(msg, 'user')

  //  this.update(userMessage);
  //}


} 

//export class Message {
//constructor(public content:string,public sentBy:string) {}
//}
