///<reference path="../GlobalShareCode.ts"/>
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../services/DataService';
import { ResetPasswordService } from './resetPassword.service';
import { ResetPassword } from './resetPassword.model';
import { BaseResponse } from '../shared/model/BaseResponseModel';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './resetPassword.template.html',
    providers: [ResetPasswordService]
})
export class ResetPasswordComponent implements OnInit {
    @ViewChild('f') form: FormGroup;
    model: ResetPassword = new ResetPassword();

    constructor(private ds: DataService, private _service: ResetPasswordService, private router: Router) {


    }

    ngOnInit() {


    }

    onSubmit() {
        if (this.form.valid) {
            this.ds.ShowHideToasty({
                title: 'Update your password...',
                msg: '',
                showClose: false,
                theme: 'bootstrap',
                type: 'wait',
                closeOther: true
            });

            this._service.resetPassword(this.model).subscribe((res: BaseResponse) => {
                if (res.Success) {
                    this.ds.ShowHideToasty({
                        title: res.Message,
                        msg: '',
                        showClose: false,
                        theme: 'bootstrap',
                        type: 'success',
                        closeOther: true
                    });
                    this.router.navigateByUrl('/Dashboard');
                }
                else {
                    this.ds.ShowHideToasty({
                        title: res.Message,
                        msg: '',
                        showClose: false,
                        theme: 'bootstrap',
                        type: 'error',
                        closeOther: true
                    });
                }

            });
        }
    }
}
