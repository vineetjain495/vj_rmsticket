import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from 'lodash';
import { SessionStorageService } from 'ngx-webstorage';
import { forkJoin } from "rxjs/observable/forkJoin";
import { CommonFunctionality } from '../../../app.commonFunctionality';
import { DataService } from '../../../services/DataService';
import { BaseResponseWithData } from '../../../shared/model/BaseResponseModel';
import { AdminService } from '../../admin.service';
import { EmployeeMasterManageService } from './employeeMasterManage.service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-emp-master-manage',
  templateUrl: './employeeMasterManage.template.html',
  styleUrls: ['./employeeMasterManage.component.css'],
  providers: [EmployeeMasterManageService]
})
export class EmployeeMasterManageComponent implements OnInit {

  private model: AssignRoleRegion;

  private dropDownRegionData: Array<AreaOffice> = [];

  private dropDownLocationData: any = [{
    Locations: [
      //    {
      //    LocationCode: 'L001',
      //    LocationName: 'Noida'
      //},
      //{
      //    LocationCode: 'L002',
      //    LocationName: 'Lajpat Nagar'
      //},
      //{
      //    LocationCode: 'L003',
      //    LocationName: 'Bandra'
      //},
      //{
      //    LocationCode: 'L004',
      //    LocationName: 'Andheri'
      //},
      //{
      //    LocationCode: 'L005',
      //    LocationName: 'Noida 2'
      //},
      //{
      //    LocationCode: 'L006',
      //    LocationName: 'Lajpat Nagar 2'
      //},
      //{
      //    LocationCode: 'L007',
      //    LocationName: 'Bandra 2'
      //},
      //{
      //    LocationCode: 'L008',
      //    LocationName: 'Andheri 2'
      //    }
    ]
  }
  ];

  private rolemasterData: Array<any>;
  private lCompanys: any[];
  private showCompany: boolean = false;
  private loginUserDetails: any;

  private dropDownSettings: any;

  private areaOfficeDropdown: any = {
    AreaOfficeCode: '',
    AreaOfficeName: '',
    Locations: []
  };
  @ViewChild('f') form: FormGroup;

  constructor(private _http: HttpClient, private route: ActivatedRoute, private router: Router, private _commonFunctionality: CommonFunctionality,
    private ds: DataService, private _adminService: AdminService, private _service: EmployeeMasterManageService, private _session: SessionStorageService) {

    this.dropDownSettings = {
      singleSelection: false,
      text: "Select Locations",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      labelKey: 'LocationName',
      primaryKey: 'LocationCode',
      maxHeight: 200
    };
    this.model = {
      EmpCode: '',
      AssignedRoleID: 0,
      EmpFullName: '',
      MappedRegionLocation: [{
        AreaOfficeCode: '',
        AreaOfficeName: '',
        Locations: []
      }],
      CompanyID: 0,
      Email: '',
      MobileNumber: null
    } as AssignRoleRegion;
  }




  ngOnInit(): void {
    var paramMode = this.route.snapshot.params["mode"];
    var paramEmpCode = this.route.snapshot.params["empCode"];

    this.loginUserDetails = JSON.parse(this._session.retrieve('userdetails'));
    if (this.loginUserDetails) {
      this.showCompany = this.loginUserDetails.CompanyID == 1;

    }

    forkJoin([
      this._commonFunctionality.getCompany(),
      this._adminService.GetAllRoleMaster().pipe(map((data: BaseResponseWithData<any>) => {
        if (data.Success) {
          return data.Entity.map((item: any) => {
            return {
              RoleID: item.RoleID,
              RoleName: item.RoleName
            }
          });
        }
        else {
          return null;
        }
      })),
      this._service.GetAreaWithLocation()
    ]).subscribe((results: any) => {
      
      this.rolemasterData = results[1];
      if (results[0].Success) {
        if (results[0].Entity != null) {
          this.lCompanys = results[0].Entity;

        }
      }
      var data = results[2];
      if (data.Success) {
        this.dropDownRegionData = data.Entity;

        if (paramMode.toLowerCase() === "add") {
          this.dropDownLocationData.push(_.cloneDeep({ 'Locations': [] }));
          this.model.CompanyID = this.loginUserDetails.CompanyID;
          this.ds.ShowHideToasty();
        }
        else if (paramMode.toLowerCase() === "edit") {
          var employee = { ID: paramEmpCode };
          this._commonFunctionality.GetAssignedRoleRegion(employee).subscribe((data2: BaseResponseWithData<any>) => {
            if (data2.Success) {
              this.dropDownLocationData = [];
              _.forEach(data2.Entity.MappedRegionLocation, (item) => {
                var regLoc = _.find(this.dropDownRegionData, { 'AreaOfficeCode': item.AreaOfficeCode });
                this.dropDownLocationData.push(_.cloneDeep(
                  {
                    Locations: _.cloneDeep(regLoc.Locations)
                  }
                ));
              });

              this.model = data2.Entity;

              this.ds.ShowHideToasty();
            }
            else {
              this.ds.ShowHideToasty({
                title: 'Data Loading Error',
                msg: data.Message,
                showClose: true,
                theme: 'bootstrap',
                type: 'error',
                closeOther: true,
              });
            }
          });
        }
      }
      else {
        this.ds.ShowHideToasty({
          title: 'Data Loading Error',
          msg: data.Message,
          showClose: true,
          theme: 'bootstrap',
          type: 'error',
          closeOther: true,
        });
      }
    });





  }

  addItem() {
    this.dropDownLocationData.push(_.cloneDeep({ 'Locations': [] }));
    this.model.MappedRegionLocation.push(_.cloneDeep(this.areaOfficeDropdown));

  }

  removeItem(item, idx) {
    _(this.model.MappedRegionLocation)
      .splice(idx, 1)
      .value();
    _(this.dropDownLocationData)
      .splice(idx, 1)
      .value();
  }

  onItemSelect(item: any, i: any) {
    console.log(item);
    console.log(this.model)
  }

  GetLocationData(selectedRegion) {
    var data = _.find(this.dropDownRegionData, { 'AreaOfficeCode': selectedRegion.AreaOfficeCode });
    var response = [];
    if (data) {
      response = data.Locations
    }
    return response;
  }

  regionChange($event, i) {
    var data = _.find(this.dropDownRegionData, { 'AreaOfficeCode': this.model.MappedRegionLocation[i].AreaOfficeCode });
    this.model.MappedRegionLocation[i].AreaOfficeName = data.AreaOfficeName;
    this.dropDownLocationData[i] = {
      Locations: _.assign([], data.Locations)
    };
  }

  onSubmit() {
    if (this.form.valid) {
      this.ds.ShowHideToasty({
        title: 'Mapping Employee in process....Wait!',
        msg: '',
        showClose: false,
        theme: 'bootstrap',
        type: 'wait',
        closeOther: true
      });
      this._service.AddUpdateEmployeeRoleAreaMapping(this.model).subscribe((response: BaseResponseWithData<any>) => {

        if (response.Success) {

          this.ds.ShowHideToasty({
            title: 'Employee updated & Mapping done Successfully..',
            msg: '',
            showClose: true,
            theme: 'bootstrap',
            type: 'success',
            closeOther: true,
            timeout: 5000
          });
          this.router.navigateByUrl('/Admin/EmployeeMaster/Index');
          //this.router.navigate(['View']); 
          //this.form.disable();
        }
        else {
          this.ds.ShowHideToasty({
            title: 'Failure while updating..Check the error or contact administrator',
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

  resetForm() {
    this.form.reset();
  }
}

export class AssignRoleRegion {
  public EmpCode: string;
  public EmpFullName: string;
  public MappedRegionLocation: Array<AreaOffice>;
  public AssignedRoleID: number;
  public CompanyID: number;
  public Email: string;
  public MobileNumber: number;
  public Active: boolean;
}

export class AreaOffice {
  public AreaOfficeName: string;
  public AreaOfficeCode: string;
  public Locations: Array<Location>;
}

export class Location {
  public LocationName: string;
  public LocationCode: string;
}

