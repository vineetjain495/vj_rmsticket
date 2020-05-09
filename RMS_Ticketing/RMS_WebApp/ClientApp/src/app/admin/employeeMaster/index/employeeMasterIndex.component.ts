import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { CommonFunctionality } from '../../../../app/app.commonFunctionality';
import { DataService } from '../../../services/DataService';
import { BaseResponseWithData } from '../../../shared/model/BaseResponseModel';
import { EmployeeMasterIndexService } from '../index/employeeMasterIndex.service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-emp-master-view',
  templateUrl: './employeeMasterIndex.template.html',
  styleUrls: ['./employeeMasterIndex.component.css'],
  providers: [EmployeeMasterIndexService]
})

export class EmployeeMasterIndexComponent implements OnInit {

  ngOnInit(): void {

  }
  AddData() {
    this.router.navigateByUrl('/Admin/EmployeeMaster/Manage/Add');
    //window.location.href = baseUrl + '/Admin/EmployeeMaster/Manage/Add';
  }
  source: LocalDataSource;
  companyData: any;
  empcode: any;
  settings;
  entryCount: number = 0;

  constructor(private _http: HttpClient,
    private _service: EmployeeMasterIndexService,
    private _commonFunctionality: CommonFunctionality,
    private _datePipe: DatePipe, private ds: DataService, private route: ActivatedRoute, private router: Router) {

    this.ds.ShowHideToasty({
      title: 'Loading Data...Wait!!',
      msg: '',
      showClose: false,
      theme: 'bootstrap',
      type: 'wait',
      closeOther: true
    });
    var paramEmpCode = this.route.snapshot.params["empCode"];
    _commonFunctionality.getCompany().pipe(map((data: BaseResponseWithData<any>) => {
      if (data.Success) {
        return data.Entity.map((item: any) => {
          return {
            value: item.CompanyID,
            title: item.CompanyName
          }
        });
      }
    })).subscribe((data) => {
      this.companyData = data;
      this.settings = {
        //mode:'external',
        actions: {

          edit: false,
          delete: false,
          add: false,
          custom: [

            {
              name: 'edit',
              title: 'Edit ',

            }
            //,
            //{
            //    name: 'delete',
            //    title: 'Delete'
            //}

          ],
        },
        columns: {
          EmpCode: {
            title: 'Emp Code',
          },
          EmpFullName: {
            title: 'Employee Name',
          },
          Rolename: {
            title: 'Role Name',
          },
          CompanyName: {
            title: 'Company Name',
          }

        },
        pager: {
          display: true,
          perPage: 100
        },
      };
      this.source = new LocalDataSource();
      this.source.onChanged().subscribe((value: any) => {
        if (value.action == "refresh")
          this.ds.ShowHideToasty();
      });
      this.getData();
    });
  }

  getData() {
    this._service.GetAllAssignedRoleRegion().subscribe((data: BaseResponseWithData<any>) => {

      if (data.Success) {
        this.source.load(data.Entity);
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
  };

  onCustom(event) {
    //alert(`Custom event '${event.action}' fired on row ?: ${event.data.id}`),
    //this.router.navigateByUrl('/Admin/EmployeeMaster/Manage/Edit/' + event.data.EmpCode);
    if (event.action === 'edit') {
      this.router.navigateByUrl('/Admin/EmployeeMaster/Manage/Edit/' + event.data.ID);
      //window.location.href = baseUrl + '/Admin/EmployeeMaster/Manage/Edit/' + event.data.ID;
    }
  }
  formatDateValue(cell, row, serviceInstance): any {
    var value: any = '';
    if (cell)
      value = serviceInstance.DisplayDotNetDateToDDMMMYYYY(cell);
    return value;
  }

}
