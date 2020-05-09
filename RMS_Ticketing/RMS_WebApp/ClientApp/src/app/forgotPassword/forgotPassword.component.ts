///<reference path="../GlobalShareCode.ts"/>
import { Component, OnInit, ViewChild } from '@angular/core';
import { ForgotPassword } from './forgotPassword.model';
import { DataService } from '../services/DataService';
import { Router } from '@angular/router';
import { BaseResponse, BaseResponseWithData } from '../shared/model/BaseResponseModel';
import { LoginService } from '../login/login.service';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './forgotPassword.template.html',
    styleUrls: ['./forgotPassword.component.css'],
    providers: [LoginService]
})
export class ForgotPasswordComponent implements OnInit {

    model: ForgotPassword = new ForgotPassword();
    @ViewChild('f') form: FormGroup;
    lCompanys: any[];
    constructor(private _service: LoginService, private ds: DataService, private router: Router) {
    }

    ngOnInit() {
        //this.ds.ShowHideToasty({
        //    title: 'Loading Data...Wait!!',
        //    msg: '',
        //    showClose: false,
        //    theme: 'bootstrap',
        //    type: 'wait',
        //    closeOther: true
        //});
        //this._service.getCompany().subscribe((response: BaseResponseWithData<any>) => {
        //    if (response.Success) {
        //        if (response.Entity != null) {
        //            this.lCompanys = response.Entity;
        //        }
        //    }
        //    this.ds.ShowHideToasty();
        //});
    }

    onSubmit() {

        if (this.form.valid) {
            this.ds.ShowHideToasty({
                title: 'Please Wait...',
                msg: '',
                showClose: false,
                theme: 'bootstrap',
                type: 'wait',
                closeOther: true
            });

            this._service.forgotPassword(this.model).subscribe((response: BaseResponse) => {
                if (response.Success) {
                    this.ds.ShowHideToasty({
                        title: response.Message,
                        msg: '',
                        showClose: false,
                        theme: 'bootstrap',
                        type: 'success',
                        closeOther: true,
                        timeout: 5000
                    });
                    this.router.navigateByUrl('/Login');
                }
                else {
                    this.ds.ShowHideToasty({
                        title: response.Message,
                        msg: response.Message,
                        showClose: true,
                        theme: 'bootstrap',
                        type: 'error',
                        closeOther: true,
                    });
                }
            });

        }
    }
}
