import { baseUrl } from '../GlobalShareCode';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommonFunctionality } from '../app.commonFunctionality';
import { ForgotPassword } from '../forgotPassword/forgotPassword.model';
//import { SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG } from 'constants';


@Injectable()
export class LoginService {

    private getLoginActionUrl: string;
    private forgotPasswordActionUrl: string;

    constructor(private commonFunc: CommonFunctionality) {
        this.getLoginActionUrl = baseUrl + '/Login/Login';
        this.forgotPasswordActionUrl = baseUrl + '/Login/ForgotPassword';
        
    }

  public getLogin<T>(itemName: FormData): Observable<T> {
     return this.commonFunc.CallHttp<T>(this.getLoginActionUrl, itemName, null);
    }
    
    public getCompany<T>(): Observable<T> {
        return this.commonFunc.getCompany<T>();
    }

    public forgotPassword<T>(itemName: ForgotPassword): Observable<T> {
        return this.commonFunc.CallHttp<T>(this.forgotPasswordActionUrl, itemName, null);
    }
    
}

