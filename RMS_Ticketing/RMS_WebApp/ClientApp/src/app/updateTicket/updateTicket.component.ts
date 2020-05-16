import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Employee/addEmployee.service';
import { Router } from '@angular/router';
///import {  Params } from '@angular/router';
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
  last_emp_id_val: string;
  ticket_count: string;
  isTicketAvailable: boolean;
  constructor(private employeeService: EmployeeService,
    private formbulider: FormBuilder,
    private ds: DataService,
   // private route: ActivatedRoute,
    private router: Router,
  ) {

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
    this.updateTicketForm = this.formbulider.group({
      Emp_ID: ['', [Validators.required]],
      Last_Type_EmpCode: [this.last_emp_id_val, [Validators.required]]
    });
    
    this.employeeService.getEmployeeDetails().subscribe((res: any) => {
      res.forEach((element) => {
        //console.log(res);
        if (element) {

          this.Emp_details.push(element.Type_EmpCode + " - ( " + element.EmployeeName + " )");
          console.log(this.Emp_details);
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
  }
  onFormSubmit() {
    console.log("hello");

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
     
        this.ds.ShowHideToasty({
          title: 'Record Updated Successfully',
          msg: '',
          showClose: true,
          theme: 'bootstrap',
          type: 'success',
          closeOther: true,
          timeout: 5000
        });
      

    });

  }
  getTicketCount(employeeID) {
    
    this.employeeService.getEmployeeTicketsByID(employeeID).subscribe((res: any) => {
      this.ticket_count = res;
      console.log(res);
      this.isTicketAvailable = true;
    });
  }
}
