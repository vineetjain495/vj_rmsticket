import { baseUrl } from '../GlobalShareCode';
import { Component, HostListener, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
/////<reference path="../GlobalShareCode.ts"/>// from '../GlobalShareCode';
import { Headers, RequestOptions, Http } from '@angular/http';
import { DataService } from '../services/DataService';
import { LoginService } from './login.service';
import { FormGroup } from '@angular/forms';
import { Credential } from '../shared/model/Credential';
import { EmployeeMaster } from '../shared/model/EmployeeMaster';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { BaseResponseWithData } from '../shared/model/BaseResponseModel';
import { Company } from '../shared/model/Company';

@Component({
  selector: 'app-login',
  templateUrl: './login.template.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})


export class LoginComponent implements OnInit {

  @ViewChild('f') form: FormGroup;
  model: Credential = new Credential();
  modelEmployeeMaster: EmployeeMaster = new EmployeeMaster();
  lCompanys: any[];
  logo: string; 


  constructor(private _service: LoginService,
    private ds: DataService, private router: Router,
    private sessionStorageService: SessionStorageService) {
    this.logo = baseUrl + "/assets/images/CMS_RMS_logo.jpg";
  }

  ngOnInit() {
    localStorage.removeItem('access_token');
    
    //console.log(baseUrl);
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
      const form = new FormData();
      //form.append("CompanyID", this.model.CompanyID);
      form.append("Entity.UserID", this.model.UserID);
      form.append("Entity.Password", this.model.Password);

      this._service.getLogin(form).subscribe((response: BaseResponseWithData<any>) => {
        
        if (response.Success) {
          localStorage.setItem("access_token", response.UserToken.AccessToken);

          if (response.Entity != null) {
            //this.modelEmployeeMaster = response.Entity;
            
            this.sessionStorageService.store('userdetails', JSON.stringify(response.Entity));
            
            this.ds.ShowHideToasty({
              title: 'Login Successfully..',
              msg: '',
              showClose: true,
              theme: 'bootstrap',
              type: 'success',
              closeOther: true,
              timeout: 5000
            });
           // this.router.navigateByUrl('/TicketViewer');
            this.router.navigateByUrl('/Employee/EmployeeViewer');
          }
          //if (this.modelEmployeeMaster.ResetPassword) {
          //            this.router.navigateByUrl('/ResetPassword');
          //        }
          //        else {
          //            this.router.navigateByUrl('/Dashboard');
          //        }
        }
        else {
          this.ds.ShowHideToasty({
            title: 'Login Failure..',
            msg: 'Incorrect Credentials, Kindly Input Correct Credentials',
            showClose: true,
            theme: 'bootstrap',
            type: 'error',
            closeOther: true,
          });

        }
      });



      //this._service.getLogin(form).subscribe((response: BaseResponseWithData<any>) => {
      //    if (response.Success) {
      //        if (response.Entity != null) {
      //            this.modelEmployeeMaster = response.Entity;
      //            this.sessionStorageService.store('userdetails', JSON.stringify(response.Entity));
      //            this.ds.ShowHideToasty({
      //                title: 'Login Successfully..',
      //                msg: '',
      //                showClose: true,
      //                theme: 'bootstrap',
      //                type: 'success',
      //                closeOther: true,
      //                timeout: 5000
      //            });
      //            if (this.modelEmployeeMaster.ResetPassword) {
      //                this.router.navigateByUrl('/ResetPassword');
      //            }
      //            else {
      //                this.router.navigateByUrl('/Dashboard');
      //            }
      //        } else {
      //            this.ds.ShowHideToasty({
      //                title: 'Login Failure..',
      //                msg: 'Incorrect Credentials, Kindly Input Correct Credentials',
      //                showClose: true,
      //                theme: 'bootstrap',
      //                type: 'error',
      //                closeOther: true,
      //            });

      //        }
      //    }
      //    else {
      //        this.ds.ShowHideToasty({
      //            title: 'Login Failure..',
      //            msg: response.Message,
      //            showClose: true,
      //            theme: 'bootstrap',
      //            type: 'error',
      //            closeOther: true,
      //        });
      //    }
      //});



    }
  }
}
