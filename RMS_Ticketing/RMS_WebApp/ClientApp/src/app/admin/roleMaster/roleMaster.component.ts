import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { LocalDataSource } from 'ng2-smart-table';
import { CommonFunctionality } from '../../app.commonFunctionality';
import { DataService } from '../../services/DataService';
import { BaseResponse, BaseResponseWithData } from '../../shared/model/BaseResponseModel';
import { EmptyEditorComponent } from '../../shared/smartTableExtention/emptyEditor.component';
import { AdminService } from '../admin.service';
import { RoleMasterService } from './roleMaster.service';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({

  selector: 'app-role-master',
  templateUrl: './roleMaster.template.html',
  styleUrls: ['./roleMaster.component.css'],
  providers: [RoleMasterService]

})

export class RoleMasterComponent implements OnInit {
  ngOnInit(): void {

  }

  source: LocalDataSource;
  companyData: any;
  settings;
  entryCount: number = 0;

  constructor(private _http: HttpClient, private _rmService: RoleMasterService,
    private _adminService: AdminService,
    private _commonFunctionality: CommonFunctionality,
    private _datePipe: DatePipe, private ds: DataService) {

    this.ds.ShowHideToasty({
      title: 'Loading Data...Wait!!',
      msg: '',
      showClose: false,
      theme: 'bootstrap',
      type: 'wait',
      closeOther: true
    });

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
        //actions: false,
        add: {
          confirmCreate: true
        },
        delete: {
          confirmDelete: true
        },
        edit: {
          confirmSave: true
        },
        columns: {
          RoleID: {
            title: 'Role ID',
            editable: false,
            addable: false,
            filter: false
          },
          RoleName: {
            title: 'Role Name',
            filter: false
          },

          Active: {
            title: 'Active',
            filter: false,
            editor: {
              type: 'checkbox',
              config: {
                true: 'true',
                false: 'false',
              }
            }
          },

          CompanyMaster: {
            title: 'Company Name',
            filter: false,
            valuePrepareFunction: (cell, row, additional) => {
              if (additional.row.isInEditing) {
                if (this.entryCount == 0) {
                  additional.newValue = cell.CompanyID;
                  this.entryCount++;
                }
              }
              else {
                this.entryCount = 0;
              }
              return cell == null ? '' : cell.CompanyName;
            },
            editor: {
              type: 'list',
              config: {
                list: data,
              },
            }
          },

          CreatedBy: {
            title: 'Created By',
            filter: false,
            editable: false,
            addable: false,
          },
          CreatedDate: {
            title: 'Created Date',
            valuePrepareFunction: (cell, row) => {
              return cell == null ? '' : this.formatDateValue(cell, row, this._commonFunctionality);
            },
            filter: false,
            editable: false,
            addable: false,
            editor: {
              type: 'custom',
              component: EmptyEditorComponent,
            },

          },
          UpdatedBy: {
            title: 'Updated By',
            filter: false,
            editable: false,
            addable: false,
          },
          UpdatedDate: {
            title: 'Updated Date',
            valuePrepareFunction: (cell, row) => {
              return cell == null ? '' : this.formatDateValue(cell, row, this._commonFunctionality);
            },
            filter: false,
            editable: false,
            addable: false,
            editor: {
              type: 'custom',
              component: EmptyEditorComponent,
            },

          },

        },
        pager: {
          display: true,
          perPage: 20
        },
      };

      this.source = new LocalDataSource();
      this.source.onChanged().subscribe((value: any) => {
        if (value.action == "refresh")
          this.ds.ShowHideToasty();
      });
      this._adminService.GetAllRoleMaster().subscribe((data: BaseResponseWithData<any>) => {
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
    });
  }


  onSaving($event: any) {
    var form = new FormData();
    form.append("RoleID", $event.newData.RoleID);
    form.append("RoleName", $event.newData.RoleName);
    form.append("Active", $event.newData.Active);
    form.append("CompanyID", $event.newData.CompanyMaster);
    this._rmService.AddOrEditRoleMaster(form).subscribe((response: BaseResponseWithData<any>) => {
      if (response.Success) {
        var item = _.find(this.companyData, function (o) { return o.value == $event.newData.CompanyMaster; });
        $event.newData = response.Entity;
        $event.newData.CompanyMaster = {
          CompanyID: item.value,
          CompanyName: item.title
        }
        this.ds.ShowHideToasty({
          title: 'Save data Successfully..',
          msg: '',
          showClose: true,
          theme: 'bootstrap',
          type: 'success',
          closeOther: true,
          timeout: 5000
        });
        $event.confirm.resolve($event.newData);
      }
      else {
        this.ds.ShowHideToasty({
          title: 'Data Saving Error',
          msg: response.Message,
          showClose: true,
          theme: 'bootstrap',
          type: 'error',
          closeOther: true
        });
        $event.confirm.reject($event.newData);
      }
    });

  }

  onDeleting($event: any) {
    var form = new FormData();
    form.append("roleID", $event.data.RoleID);
    this._rmService.DeleteRoleMaster(form).subscribe((response: BaseResponse) => {
      if (response.Success) {
        this.ds.ShowHideToasty({
          title: 'Date Deleted Successfully..',
          msg: '',
          showClose: true,
          theme: 'bootstrap',
          type: 'success',
          closeOther: true,
          timeout: 5000
        });
        $event.confirm.resolve($event.source.data);
      }
      else {
        this.ds.ShowHideToasty({
          title: 'Data Delete Error',
          msg: response.Message,
          showClose: true,
          theme: 'bootstrap',
          type: 'error',
          closeOther: true
        });
        $event.confirm.reject($event.source.data);
      }
    });

  }

  formatDateValue(cell, row, serviceInstance): any {
    var value: any = '';
    if (cell)
      value = serviceInstance.DisplayDotNetDateToDDMMMYYYY(cell);
    return value;
  }

}

