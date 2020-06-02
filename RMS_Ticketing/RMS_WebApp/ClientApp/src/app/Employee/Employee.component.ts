import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid'
import { EmployeeService } from './Employee.service';
import * as _ from 'lodash'; import { DatePipe } from '@angular/common';
import { baseUrl } from '../GlobalShareCode';
//import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/DataService';
import { BaseResponseWithData } from '../shared/model/BaseResponseModel';
import { CommonFunctionality } from '../app.commonFunctionality';
@Component({
  selector: 'app-showemployee',
  templateUrl: './Employee.component.html',
  styleUrls: ['./Employee.component.css'],
})

export class EmployeeComponent implements OnInit {

  @ViewChild('myGrid') myGrid: jqxGridComponent;
  searchForm: any;
  public filterDataExport: any = [];
  roles: Array<any>[] = [];
  public showCreate: boolean = false;
  private getEmployeeLimitedUrl: string = baseUrl + 'Employee/GetEmployeelimited';
  constructor(private employeeService: EmployeeService,
    private formbulider: FormBuilder,
    private ds: DataService,
    private router: Router,
    private cf: CommonFunctionality
  ) {

    this.searchForm = this.formbulider.group({
      Type_EmpCode: [null, [Validators.required]],
      RoleCode: [null],
    });
    this.cf.GetUserDetails().subscribe((data: BaseResponseWithData<any>) => {
      if (data.Success) {
        this.showCreate = data.Entity.AssignedRoleID != 1 ? true : false;
        //this.hidefromLocation = (data.Entity.AssignedRoleID != 4 && data.Entity.AssignedRoleID != 6) ? false : true;
      }
    });
  }

  onFormSubmit() {
    const employeeID = this.searchForm.value;
    if (!(employeeID.Type_EmpCode == null && employeeID.RoleCode == null)) {

      employeeID.Type_EmpCode = (employeeID.Type_EmpCode != null && employeeID.Type_EmpCode != "") ? employeeID.Type_EmpCode : null;
      employeeID.RoleCode = (employeeID.RoleCode != null && employeeID.RoleCode != "") ? employeeID.RoleCode : null;
      this.myGrid.updatebounddata('cell');
      this.myGrid.gotopage(0);
    }

  }
  /* onFormSubmit() {
     this.ds.ShowHideToasty({
       title: 'Searching..',
       msg: '',
       showClose: false,
       theme: 'bootstrap',
       type: 'wait',
       closeOther: true,
     });
     const employeeID = this.searchForm.value;
     //console.log(employeeID.Type_EmpCode);
     if (employeeID.Type_EmpCode == "") {
       this.employeeService.getEmployeeLimited().subscribe((res: any) => {
         // console.log(res)
         this.source.localdata = res;
         this.myGrid.updatebounddata();
         this.ds.ShowHideToasty({
           title: 'Search Completed',
           msg: '',
           showClose: true,
           theme: 'bootstrap',
           type: 'success',
           closeOther: true,
           timeout: 5000
         });
 
       });
 
     }
     else {
       this.employeeService.getEmployeeLimitedByID(employeeID.Type_EmpCode).subscribe((res: any) => {
         // console.log(res)
         this.source.localdata = res;
         this.myGrid.updatebounddata();
          this.ds.ShowHideToasty({
           title: 'Search Completed',
           msg: '',
           showClose: true,
           theme: 'bootstrap',
           type: 'success',
           closeOther: true,
           timeout: 5000
         });
 
       });
 
     }
   }  */
  ngOnInit() {
    this.employeeService.getRolesDetail().subscribe((res: any) => {
      //res;
      res.Entity.forEach((element) => {

        if (element.Type == "Roles") {
          //console.log(element);

          this.roles.push([element.TypeCode, element.Type_EmpCode]);

        }
        
      });
    });
    
  }

  /*ngAfterViewInit() {
    
      this.myGrid.showloadelement();
      // this.getData();
      // console.log(this.employeeService.getAllEmployee2());
      this.employeeService.getEmployeeLimited().subscribe((res: any) => {
       // console.log(res)
        this.source.localdata = res;
        this.myGrid.updatebounddata();
  
  
      });
    }*/

  source: any = {
    //localdata: null,
    cache: false,
    totalrecords: 0,
    PageNum: null,
    PageSize: null,
    root: 'TableList',
    datafields: [
      { name: 'ID', type: 'number' },
      { name: 'Type_EmpCode', type: 'string' },
      { name: 'IsActive', type: 'boolean' },
      { name: 'Viewcomment', type: 'string' },

      /*    { name: 'MobileNumber', type: 'int' },
          { name: 'EmailID', type: 'string' },
          { name: 'RoleName', type: 'string' },
          { name: 'RightsName', type: 'string' } */
    ],

    beforeprocessing: (data) => {
      //console.log(data.Entity.PageResponseModelObj.TotalCount);
      this.source.totalrecords = data.Entity.PageResponseModelObj.TotalCount; //data.Entity.PageResponseModelObj.TotalCount;
      this.source.PageNum = data.Entity.PageResponseModelObj.PageNumber;
      this.source.PageSize = data.Entity.PageResponseModelObj.PageSize;
    },

    dataType: 'json',
    type: 'POST',
    id: 'Id',
    url: this.getEmployeeLimitedUrl
  };

  dataAdapter: any = new jqx.dataAdapter(this.source,
    {


      formatData: (Parameter) => {
        Parameter.pagenum = Parameter.pagenum + 1;

        if (!(this.searchForm.value.Type_EmpCode == null && this.searchForm.value.RoleCode == null)) {
          let incrementCount: number = 0;
          let filtercount: number = 0;
          if (!(this.searchForm.value.Type_EmpCode == null)) {
            incrementCount = incrementCount + 1;
            filtercount = filtercount + 1;

          }
          if (!(this.searchForm.value.RoleCode == null)) {
            incrementCount = incrementCount + 1;
            filtercount = filtercount + 1;
          }

          let filterGroups = null;

          switch (incrementCount) {
            case 1:
              filterGroups = [{ filters: [] },];
              if (!(this.searchForm.value.Type_EmpCode == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'Type_EmpCode', 'value': this.searchForm.value.Type_EmpCode, 'condition': 'CONTAINS', 'operator': 'and' });
              }
              if (!(this.searchForm.value.RoleCode == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'RoleCode', 'value': this.searchForm.value.RoleCode, 'condition': 'CONTAINS', 'operator': 'and' });
              }
              break;
            case 2:
              filterGroups = [{ filters: [] }, { filters: [] },];
              if (!(this.searchForm.value.Type_EmpCode == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'Type_EmpCode', 'value': this.searchForm.value.Type_EmpCode, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.searchForm.value.RoleCode == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'RoleCode', 'value': this.searchForm.value.RoleCode, 'condition': 'CONTAINS', 'operator': 'and' });
                 filtercount = filtercount - 1
              }
          }

          Object.assign(Parameter, { "filterGroups": filterGroups });
          this.filterDataExport.push(_.cloneDeep(Parameter.filterGroups));
        } else {
          this.filterDataExport = [];
         // Parameter.pagenum = 1;
        }
      },

      loadError: function (one, two, third) { }
    });
  localdataAdapter = this.dataAdapter;

  rendergridrows = (params: any): any[] => {
    return params.data;
  }

  rendergridrowsSubGrid = (params: any): any[] => {
    return params.data;
  }
  rendered = (params: any) => {

  }
  onPageSizeChanged(): void {

  }

  onPageChanged(): void {
  }

  onPageChangedSub() {

    //  this.subGridrequest = true;
  }


  getWidth(): any {
    return '98%';
  }

  myGridOnCellSelect(event: any): any {

    if (event.args.datafield == "Type_EmpCode") {
      this.ticketViewDetailsCallBack(this.myGrid.getcellvalue(event.args.rowindex, 'Type_EmpCode'));
      // localStorage.setItem('OldTicketIdView', 'false'); 
    }

  }
  codeCellrenderer = (row, column, value, defaulthtml, columnproperties, rowselect): any => {
    return '<a style="color:dodgerblue;margin: 10px; font-size: small;margin-left: 8px; float: left; position: relative;cursor:pointer;"> ' + value + '<br></a>';
  };
  ticketViewDetailsCallBack(requestEmpId: string) {
    // console.log();

    this.router.navigateByUrl('/Employee/EditEmployee/' + requestEmpId);
    // localStorage.setItem('TicketId', requestTicketId);    
  }
  detailCellrenderer = (row, column, value, defaulthtml, columnproperties, rowselect): any => {
    //console.log(rowselect + " " + rowselect.IsActive);
    if (value != "") {
      switch (rowselect.IsActive) {
        case true: return value + '<br>&nbsp;<i class="icofont icofont-square" style="font-size: 15px;color:limegreen">&nbsp;Active</i></a>'; break;
        default: return value + '<br>&nbsp;<i class="icofont icofont-square" style="font-size: 15px;color:red">&nbsp;InActive</i></a>'; break;
      }

    }
  };
  columns: any[] = [
    //{ text: 'ID', datafield: 'ID', align: 'centre', cellsalign: 'centre', width: 50 },
    { text: 'Employee Code', datafield: 'Type_EmpCode', align: 'centre', cellsalign: 'centre', cellsrenderer: this.codeCellrenderer, width: 200 },
    { text: 'Details', datafield: 'Viewcomment', align: 'centre', cellsalign: 'centre', cellsrenderer: this.detailCellrenderer },
    /*      { text: 'MobileNumber', datafield: 'MobileNumber' },
          { text: 'Email', datafield: 'EmailID' },
          { text: 'Role', datafield: 'RoleName' },
          { text: 'Rights', datafield: 'RightsName' }*/


  ];

  resetForm() {

    this.searchForm.reset();
    this.searchForm.value.Type_EmpCode = null;
    this.searchForm.value.RoleCode = null;
    this.myGrid.updatebounddata('cell');
    this.myGrid.gotopage(0);
  }
  goToPage(pageName: string) {
    //console.log(pageName);
    this.router.navigate([`${pageName}`]);
  }
}
