import { baseUrl } from '../GlobalShareCode';
import { Injectable } from '@angular/core';
import { CommonFunctionality } from '../app.commonFunctionality';
import { Observable } from 'rxjs/Observable';
import { ResetPassword } from './resetPassword.model';

@Injectable()
export class ResetPasswordService {
    private resetPasswordActionUrl: string;
    constructor(private commonFunc: CommonFunctionality) {
        this.resetPasswordActionUrl = baseUrl + '/ResetPassword/Index';
    }

    public resetPassword<T>(itemName: ResetPassword): Observable<T> {
        return this.commonFunc.CallHttp<T>(this.resetPasswordActionUrl, itemName, null);
    }
}

