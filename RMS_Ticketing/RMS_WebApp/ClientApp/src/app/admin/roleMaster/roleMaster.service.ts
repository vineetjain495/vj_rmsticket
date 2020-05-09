import { baseUrl } from '../../GlobalShareCode';
import { Injectable } from '@angular/core';
import { CommonFunctionality } from '../../app.commonFunctionality';

@Injectable()
export class RoleMasterService {

    private addOrEditActionUrl: string;
    private deleteActionUrl: string;
    //private getAllActionUrl: string;


    constructor(private commonFunc: CommonFunctionality) {
        this.addOrEditActionUrl = baseUrl + '/Admin/RoleMaster/AddOrEditRoleMaster';
        this.deleteActionUrl = baseUrl + '/Admin/RoleMaster/DeleteRoleMaster';
    }

    public AddOrEditRoleMaster<T>(inputParam: FormData) {
        return this.commonFunc.CallHttp<T>(this.addOrEditActionUrl, inputParam, null);
    }
    public DeleteRoleMaster<T>(inputParam: FormData) {
        return this.commonFunc.CallHttp<T>(this.deleteActionUrl, inputParam, null);
    }
}

