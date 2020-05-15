import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../addEmployee.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/DataService';
@Component({
  selector: 'app-update-ticket',
  templateUrl: './updateTicket.component.html',
  styleUrls: ['./updateTicket.component.css']
})
export class UpdateTicketComponent implements OnInit {
  searchForm: any;
  Emp_details: Array<any> = [];
  last_emp_id_val: string;
  constructor(private employeeService: EmployeeService,
    private formbulider: FormBuilder,
    private ds: DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    if (this.route.snapshot.params.id) {
      this.last_emp_id_val = this.route.snapshot.params.id
    }
    else {
      this.last_emp_id_val = '';
    }
    this.searchForm = this.formbulider.group({
      Emp_ID: ['', [Validators.required]],
      Last_Type_EmpCode: [this.last_emp_id_val, [Validators.required]]
    });
    
    this.employeeService.getEmployeeDetails().subscribe((res: any) => {
      res.forEach((element) => {
        console.log(res);
        this.Emp_details.push(element.Type_EmpCode + " - ( " + element.EmployeeName + " )");
        console.log(this.Emp_details);

      });
      this.Emp_details = this.Emp_details.filter((el, i, a) => i === a.indexOf(el))
    });
  }

  ngOnInit() {
  }

}
