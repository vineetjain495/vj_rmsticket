import { Directive, Input, forwardRef } from '@angular/core';
import { AsyncValidatorFn, AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, pipe } from "rxjs";
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { BaseResponse } from '../model/BaseResponseModel';
import { EmployeeMasterManageService } from '../../admin/employeeMaster/manage/employeeMasterManage.service';
import { ActivatedRoute } from '@angular/router';

export function ExistingCode(AssignRoleRegionsManageService: EmployeeMasterManageService, route: ActivatedRoute, companyID: number): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    var empID = route.snapshot.params["empCode"] ? route.snapshot.params["empCode"] : 0;
    let debounceTime = 1000;
    return Observable.timer(debounceTime).pipe(switchMap(() => {

      return AssignRoleRegionsManageService.CheckEmployeeCodeExist({
        "EmpCode": control.value, "Id": empID, "CompanyID": companyID
      }).pipe(map((data: BaseResponse) => {
        return (data.Success) ? { "empCodeExists": true } : null;
      }));

    }));
  };
}
@Directive({
  selector: '[empCodeExists][ngModel]',
  //selector: '[EmpCodeExists]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueCodeValidatorDirective, multi: true }]
})

export class UniqueCodeValidatorDirective implements AsyncValidator {
  @Input('empCodeExists') model: any;
  constructor(private _AssignRoleRegionsManageService: EmployeeMasterManageService, private route: ActivatedRoute) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    console.log("companyID", this.model);
    return ExistingCode(this._AssignRoleRegionsManageService, this.route, this.model)(control);

  }
}
