import { baseUrl } from '../../../GlobalShareCode';
import { Injectable } from '@angular/core';
import { CommonFunctionality } from '../../../app.commonFunctionality';


@Injectable()
export class EmployeeMasterIndexService {

    private getAllAssignedRoleRegionUrl: string;
    private deleteEmployeeUrl: string;

    constructor(private commonFunc: CommonFunctionality) {

        this.getAllAssignedRoleRegionUrl = baseUrl + '/Admin/EmployeeMaster/GetAllAssignedRoleRegion';
        //this.deleteEmployeeUrl = baseUrl + '/Area/DeleteEmployee';
    }

    public GetAllAssignedRoleRegion<T>() {
        return this.commonFunc.CallHttp<T>(this.getAllAssignedRoleRegionUrl, null, null);
    }
    
}

