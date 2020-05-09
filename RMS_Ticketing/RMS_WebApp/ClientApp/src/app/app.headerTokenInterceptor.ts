//import { Observable } from 'rxjs/Observable';
////import { } from 'rxjs/add/operator/do';
////import { } from'rxjs/add/operator/catch';
////import { } from'rxjs/add/observable/throw';
////import { } from'rxjs/add/observable/empty';
//import { Injectable } from '@angular/core';
//import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
////import { AuthService } from './auth.service';

import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,

  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionStorageService } from 'ngx-webstorage'
import * as _ from 'lodash'
import { AuthRouteService } from './services/auth.service';
import { CommonFunctionality } from './app.commonFunctionality';
import { Router } from '@angular/router';
//import { BehaviorSubject } from 'rxjs';

@Injectable()
export class HeaderTokenInterceptor implements HttpInterceptor {
  sessionStorageService: any;
  //    isRefreshingToken: boolean = false;
  //tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  private authService: CommonFunctionality;
  public authLService: AuthRouteService;
  constructor(private injector: Injector) {
  }
  //addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
  //  return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } })
  //}

  //intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //  this.authService = this.injector.get(CommonFunctionality);
  //  this.authLService = this.injector.get(AuthRouteService);

  //  return next.handle(this.addToken(request, this.authLService.getAuthToken())).do((event: HttpEvent<any>) => {
  //    if (event instanceof HttpResponse) {
  //      this.authService.SessionTime();
  //    }
  //  }, (err: any) => {
  //    if (err instanceof HttpErrorResponse) {
  //      if (err.status) {
  //        this.authService.SessionTime();
  //        console.log(err.status)
  //      }
  //    }
  //  });
  //}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).do(event => {
          if (event instanceof HttpResponse) {
              if (event.headers.has('AccessToken')) {
                  var newAccessTokenObj = JSON.parse(event.headers.get('AccessToken'));
                  var storedTokenObj = JSON.parse(this.sessionStorageService.retrieve('servicetoken'));
                  var newItems = _.filter(storedTokenObj, function (o) { return o.ServerID != newAccessTokenObj.ServerID; });
                  newItems.push(newAccessTokenObj);
                  console.log(newItems);
                  this.sessionStorageService.store('servicetoken', JSON.stringify(newItems));
              }
              //console.log(event);
          }
      });
  }


}

