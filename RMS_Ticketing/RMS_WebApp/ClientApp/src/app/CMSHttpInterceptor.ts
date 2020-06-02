import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, filter, tap } from 'rxjs/operators';


import { AuthRouteService } from './services/auth.service';
import { CommonFunctionality } from './app.commonFunctionality';
//import { ErrorDialogService } from './services/ErrorDialogService';

@Injectable()
export class CMSHttpInterceptor implements HttpInterceptor {
    //    isRefreshingToken: boolean = false;
    //tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    private authService: CommonFunctionality;
    public authLService: AuthRouteService;
  constructor(private injector: Injector, /*private errorDialogService: ErrorDialogService*/) {

    }
   
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('access_token');
    
    if (token) {
     
      //if (request.headers.has('content-type')) {
        request = request.clone({
          setHeaders: {
            //'content-type': 'application/json',
            Authorization: `${token}`
          }
        });

      }
      //else {
      //  request = request.clone({
      //    setHeaders: {
      //      'content-type': 'application/json',
      //      Authorization: `${token}`
      //    }
      //  });

      //}

      
      //request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    //}

    //if (!request.headers.has('Content-Type')) {
    //  request = request.clone({ headers: request.headers.set('Content-Type', 'application/x-www-form-urlencoded;application/json') });
    //}

    //request = request.clone({ headers: request.headers.set('Accept', 'application/json, text / plain' ) });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        
        //if (event instanceof HttpResponse) {
        //  console.log('event--->>>', event);
        //}
        return event;
      }));
  }

  

    //intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //    this.authService = this.injector.get(CommonFunctionality);
    //    this.authLService = this.injector.get(AuthRouteService);

    //    return next.handle(request).do((event: HttpEvent<any>) => {
    //        if (event instanceof HttpResponse) {
    //            this.authService.SessionTime();
    //        }
    //    }, (err: any) => {
    //        if (err instanceof HttpErrorResponse) {
    //            if (err.status) {
    //                this.authService.SessionTime();
    //                console.log(err.status)
    //            }
    //        }
    //    });
    //}


  //intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  //  const started = Date.now();
  //  return next.handle(req).pipe(
  //    tap(event => {
  //      if (event instanceof HttpResponse) {
  //        const elapsed = Date.now() - started;
  //        console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
  //      }
  //    }, error => {
  //      console.error('NICE ERROR', error)
  //    })
  //  )
  //}


}
