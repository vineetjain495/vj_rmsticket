import { baseUrl } from '../GlobalShareCode';
import { Injectable } from '@angular/core';
import { CommonFunctionality } from '../app.commonFunctionality';

@Injectable()
export class AdminService {

    private getAllRoleMasterUrl: string;

    constructor(private commonFunc: CommonFunctionality) {
        
        this.getAllRoleMasterUrl = baseUrl + '/Admin/RoleMaster/GetAllRoleMaster';
    }

    public GetAllRoleMaster<T>() {
        return this.commonFunc.CallHttp<T>(this.getAllRoleMasterUrl, null, null);
    }

}

