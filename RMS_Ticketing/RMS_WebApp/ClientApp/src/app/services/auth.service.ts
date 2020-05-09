import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx'
import { CommonFunctionality } from "../app.commonFunctionality";
import { BaseResponseWithData } from "../shared/model/BaseResponseModel";
import { LoginService } from "../login/login.service";
@Injectable()
export class AuthRouteService {


  //public authTokenStale: string = 'stale_auth_token';
  //public authTokenNew: string = 'new_auth_token';
  //public currentToken: string;
  constructor(public _commonFunctionality: CommonFunctionality) {
    //this.currentToken = this.authTokenStale
  }
   
  //getAuthToken() {
  //  return this.currentToken;
  //}

  //refreshToken(): Observable<string> {
  //  /*
  //      The call that goes in here will use the existing refresh token to call
  //      a method on the oAuth server (usually called refreshToken) to get a new
  //      authorization token for the API calls.
  //  */

  //  this.currentToken = this.authTokenNew;

  //  return Observable.of(this.authTokenNew).delay(200);
  //}

  //login(username: string, password: string) {
  //  this._commonFunctionality.GetUserDetails().subscribe((data: BaseResponseWithData<any>) => {
  //    if (data.Success) {

  //      localStorage.setItem('currentUser', JSON.stringify(data.Entity.EmpFullName));

  //    }
  //  });
  //}
  


  public redirectUrl: string;

  //public isLoggedIn(): Observable<any> {
  //  // return this._http.get(process.env.API_URL +'/api/Login/Login').
  //  return this._commonFunctionality.GetSessionUserDetails().catch((error: any) => Observable.throw(error || "Server Error"))
  //  //return 1;
  //}
}
