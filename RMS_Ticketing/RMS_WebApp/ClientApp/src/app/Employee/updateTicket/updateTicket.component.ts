import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Employee.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/DataService';
@Component({
  selector: 'app-update-ticket',
  templateUrl: './updateTicket.component.html',
  styleUrls: ['./updateTicket.component.css']
})
export class UpdateTicketComponent implements OnInit {
  updateTicketForm: any;
  Emp_details: Array<any> = [];
  dropdownSettings: any = {};
  dropdownSettings2: any = {};
  last_emp_id_val: string;
  ticket_count: string;
  isTicketAvailable: boolean;
  isTicketEmpty: boolean;
  constructor(private employeeService: EmployeeService,
    private formbulider: FormBuilder,
    private ds: DataService,
   // private route: ActivatedRoute,
    private router: Router,
  ) {
   // this.ticket_count = 0;
    this.ds.ShowHideToasty({
      title: 'Please Wait...',
      msg: '',
      showClose: false,
      theme: 'bootstrap',
      type: 'wait',
      closeOther: true
    });

    if (this.employeeService.edit_empCode != "") {
      this.last_emp_id_val = this.employeeService.edit_empCode;
      console.log(this.last_emp_id_val);
      this.getTicketCount(this.last_emp_id_val);
     
    }
    else {
      this.last_emp_id_val = '';
    }
    console.log(this.ticket_count);
    this.updateTicketForm = this.formbulider.group({
      Emp_ID: ['', [Validators.required]],
      Last_Type_EmpCode: [this.last_emp_id_val, [Validators.required]],
      ticket_count:[this.ticket_count]
    });
    
    this.employeeService.getEmployeeDetails().subscribe((res: any) => {
      res.Entity.forEach((element) => {
        console.log(res);
        if (element) {

          this.Emp_details.push(element.Type_EmpCode + " - ( " + element.EmployeeName + " )");
          //console.log(this.Emp_details);
        }

      });
      this.Emp_details = this.Emp_details.filter((el, i, a) => i === a.indexOf(el));
    });
    this.ds.ShowHideToasty({
      title: 'Update Ticket Here',
      msg: '',
      showClose: true,
      theme: 'bootstrap',
      type: 'success',
      closeOther: true,
      timeout: 5000
    });
    
  }

  ngOnInit() {
    
    this.dropdownSettings2 = {
      singleSelection: false,
      // idField: 'item_id',
      // textField: 'item_text',
      enableCheckAll: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      limitSelection: 0,
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
   
  }
  onFormSubmit() {
    //console.log("hello");

    const employeeID = this.updateTicketForm.value;
    console.log(employeeID);
    this.UpdateTicketAssign(employeeID);

    //this.updateTicketForm.reset();
  }
  UpdateTicketAssign(employee) {
  
    this.ds.ShowHideToasty({
      title: 'Please Wait...',
      msg: '',
      showClose: false,   
      theme: 'bootstrap',
      type: 'wait',
      closeOther: true
    });
   
    this.employeeService.UpdateTicketAssign(employee).subscribe((response: any) => {
      if (response.Success) {
        this.ds.ShowHideToasty({
          title: 'Record Updated Successfully',
          msg: '',
          showClose: true,
          theme: 'bootstrap',
          type: 'success',
          closeOther: true,
          timeout: 5000
        });
      }
      else {
        this.ds.ShowHideToasty({
          title: 'Failed to Create Ticket and Upload file',
          msg: response.Message,
          showClose: true,
          theme: 'bootstrap',
          type: 'error',
          closeOther: true,
        });
      }
      

    });

  }
  getTicketCount2(event) {
    var employeeID = event.target.value;
    if (employeeID != "") {
      console.log(employeeID);
      this.employeeService.getEmployeeTicketsByID(employeeID).subscribe((res: any) => {
        this.ticket_count = res.Entity;
        console.log(this.ticket_count);
        this.isTicketAvailable = true;
        this.isTicketEmpty = false;
        this.updateTicketForm.controls['ticket_count'].setValue(this.ticket_count);
        this.dropdownSettings2 = {
          singleSelection: false,
          // idField: 'item_id',
          // textField: 'item_text',
          enableCheckAll: false,
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          limitSelection: this.ticket_count,
          itemsShowLimit: 3,
          allowSearchFilter: true
        };
      });
    } else {
      this.isTicketEmpty = true;
    }
  }
  getTicketCount(employeeID) {
    console.log(employeeID);
    this.employeeService.getEmployeeTicketsByID(employeeID).subscribe((res: any) => {
      this.ticket_count = res.Entity;
      console.log(this.ticket_count);
      this.isTicketAvailable = true;
      this.isTicketEmpty = false;

      this.updateTicketForm.controls['ticket_count'].setValue(this.ticket_count);
      this.dropdownSettings2 = {
        singleSelection: false,
        // idField: 'item_id',
        // textField: 'item_text',
        enableCheckAll: false,
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        limitSelection: this.ticket_count,
        itemsShowLimit: 3,
        allowSearchFilter : true
      };
    });
  }
}
