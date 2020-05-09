import { baseUrl } from '../../../GlobalShareCode';
import { Injectable } from '@angular/core';
import { CommonFunctionality } from '../../../app.commonFunctionality';
import { AssignRoleRegion } from './employeeMasterManage.component';



@Injectable()
export class EmployeeMasterManageService {
    
    private addUpdateEmployeeRoleAreaMappingUrl: string;
    private getAreaWithLocationUrl: string;
    private CheckEmployeeExist: string

    constructor(private commonFunc: CommonFunctionality) {

        this.addUpdateEmployeeRoleAreaMappingUrl = baseUrl + '/Admin/EmployeeMaster/AddUpdateEmployeeRoleAreaMapping';
        this.getAreaWithLocationUrl = baseUrl + '/Admin/EmployeeMaster/GetAreaWithLocation';
        this.CheckEmployeeExist = baseUrl + '/Admin/EmployeeMaster/CheckEmployeeExist';
    }

    public GetAreaWithLocation<T>() {
        return this.commonFunc.CallHttp<T>(this.getAreaWithLocationUrl, null, null);
    }

    public AddUpdateEmployeeRoleAreaMapping<T>(item: AssignRoleRegion) {
        return this.commonFunc.CallHttp<T>(this.addUpdateEmployeeRoleAreaMappingUrl, item, null);
    }
    public CheckEmployeeCodeExist<T>(item: any) {
        return this.commonFunc.CallHttp<T>(this.CheckEmployeeExist, item, null);
    }

}

