import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid'
import { EmployeeService } from '../addEmployee.service';
//import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-showemployee',
  templateUrl: './showemployee.component.html',
  styleUrls: ['./showemployee.component.css']
})

export class ShowemployeeComponent implements  AfterViewInit {
  
  @ViewChild('myGrid') myGrid: jqxGridComponent;
  searchForm: any;
  constructor(private employeeService: EmployeeService,
    private formbulider: FormBuilder,
      private router: Router,
  ) {

    this.searchForm = this.formbulider.group({
      Type_EmpCode: ['', [Validators.required]],

    });
  }
  onFormSubmit() {
   
    const employeeID = this.searchForm.value;
    console.log(employeeID.Type_EmpCode);
    if (employeeID.Type_EmpCode == "") {
      this.employeeService.getEmployeeLimited().subscribe((res: any) => {
        // console.log(res)
        this.source.localdata = res;
        this.myGrid.updatebounddata();


      });

    }
    else {
      this.employeeService.getEmployeeLimitedByID(employeeID.Type_EmpCode).subscribe((res: any) => {
        // console.log(res)
        this.source.localdata = res;
        this.myGrid.updatebounddata();


      });

    }
  }  

  
  ngAfterViewInit() {
    
      this.myGrid.showloadelement();
      // this.getData();
      // console.log(this.employeeService.getAllEmployee2());
      this.employeeService.getEmployeeLimited().subscribe((res: any) => {
       // console.log(res)
        this.source.localdata = res;
        this.myGrid.updatebounddata();
  
  
      });
    }
  
    source: any = {
      localdata: null,
      datafields: [
        { name: 'ID', type: 'number' },
        { name: 'Type_EmpCode', type: 'string' },
        { name: 'Viewcomment', type: 'string' }
    /*    { name: 'MobileNumber', type: 'int' },
        { name: 'EmailID', type: 'string' },
        { name: 'RoleName', type: 'string' },
        { name: 'RightsName', type: 'string' } */
      ],
  
      datatype: 'json'
    };
  
    dataAdapter: any = new jqx.dataAdapter(this.source);
    getWidth() : any {
      if (document.body.offsetWidth < 1350) {
        return '90%';
      }
      
      return 1050;
  }
  
    myGridOnCellSelect(event: any): any {
      
    if (event.args.datafield == "Type_EmpCode"){
      this.ticketViewDetailsCallBack(this.myGrid.getcellvalue(event.args.rowindex, 'Type_EmpCode'));
      // localStorage.setItem('OldTicketIdView', 'false'); 
    }
    
  }
  codeCellrenderer = (row, column, value, defaulthtml, columnproperties, rowselect): any => {
  return '<a style="color:dodgerblue;margin: 10px; font-size: small;margin-left: 8px; float: left; position: relative;cursor:pointer;"> ' + value + '<br></a>';
    };
  ticketViewDetailsCallBack(requestEmpId: string) {
      // console.log();
      
    this.router.navigateByUrl('/Employee/edit_element/' + requestEmpId); 
    // localStorage.setItem('TicketId', requestTicketId);    
  }
  detailCellrenderer = (row, column, value, defaulthtml, columnproperties, rowselect): any => {

  if (value != "") {
    switch (rowselect.IsActive) {
      case true : case 1: return  value + '<br><i class="icofont icofont-square" style="font-size: 15px;color:limegreen">&nbsp;Active</i></a>'; break;
      default: return  value + '<br><i class="icofont icofont-square" style="font-size: 15px;color:red;visibility: hidden;">&nbsp;InActive</i></a>'; break;
    }

  }
};
    columns: any[] = [  
      //{ text: 'ID', datafield: 'ID', align: 'centre', cellsalign: 'centre', width: 50 },
      { text: 'Employee Code', datafield: 'Type_EmpCode', align: 'centre', cellsalign: 'centre', cellsrenderer: this.codeCellrenderer, width: 200},
      { text: 'Details', datafield: 'Viewcomment',align: 'centre', cellsalign: 'centre', cellsrenderer: this.detailCellrenderer },
/*      { text: 'MobileNumber', datafield: 'MobileNumber' },
      { text: 'Email', datafield: 'EmailID' },
      { text: 'Role', datafield: 'RoleName' },
      { text: 'Rights', datafield: 'RightsName' }*/
  
  
    ];
  
  
  goToPage(pageName:string){
    console.log(pageName);
    this.router.navigate([`${pageName}`]);
  }
  }
