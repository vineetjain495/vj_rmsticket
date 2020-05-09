import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable, fromEventPattern } from 'rxjs';  
import { HttpClient } from '@angular/common/http';  
import { EmployeeService } from '../addEmployee/addEmployee.service';  
import { Employee } from '../addEmployee/addEmployee';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {

    dataSaved = false;  
    employeeForm: any;  
    allEmployees: Observable<Employee[]>;  
    employeeIdUpdate = null;  
    massage = null;  
    active = true;
    errorFound = false;
    constructor(private formbulider: FormBuilder,
      private httpService: HttpClient,
      private route: ActivatedRoute,
       private employeeService:EmployeeService) { }  
    
    ngOnInit() {  
      // alert(this.route.snapshot.params.id);
      this.employeeForm = this.formbulider.group({  
        Type_EmpCode : ['', [Validators.required]],
        EmployeeName : ['', [Validators.required]],
        MobileNumber : ['', [Validators.required, Validators.min(6000000000), Validators.max(9999999999)]],
        EmailId : ['', [Validators.required,Validators.email]],
        Password : ['', [Validators.required,Validators.minLength(6)]],
        RoleCode : ['', [Validators.required]],
        RightsCode : ['', [Validators.required]],
        IsActive : [true]
      });  
      this.loadEmployeeToEdit(this.route.snapshot.params.id);
    }  
    UpdateEmployee(employee: Employee) {  
    //  console.log("1");
    //     employee.Type_EmpCode = this.employeeIdUpdate;  
    //     console.log("1");
        this.employeeService.updateEmployee(employee).subscribe((response : any) => {  
          console.log(response);
          if (response == 0) {
            this.dataSaved = false;
            this.errorFound = true;
            this.massage = "Ticket is assigned to Employee " + employee.Type_EmpCode +"  You can not change location and Active";
            // this.loadEmployeeToEdit(this.route.snapshot.params.id);
          }else{
          this.dataSaved = true;  
          this.massage = 'Record Updated Successfully';  
          // this.loadAllEmployees();  
          this.employeeIdUpdate = null;  
          // this.employeeForm.reset();  
        }

        });  
      
    }
    loadEmployeeToEdit(employeeId: string) {  
      this.httpService.get('../Employee/EmployeeDetailsById/?employeeId='+employeeId).subscribe(( response : any) => {  
        this.massage = null;  
        this.dataSaved = false;  
        this.employeeIdUpdate = response.Type_EmpCode;  
        this.employeeForm.controls['EmployeeName'].setValue(response.EmployeeName);  
       this.employeeForm.controls['MobileNumber'].setValue(response.MobileNumber);  
        this.employeeForm.controls['EmailId'].setValue(response.EmailId);  
        this.employeeForm.controls['Password'].setValue(response.Password);  
        this.employeeForm.controls['RoleCode'].setValue(response.RoleCode);  
        this.employeeForm.controls['RightsCode'].setValue(response.RightsCode); 
        this.employeeForm.controls['Type_EmpCode'].setValue(response.Type_EmpCode); 
        this.employeeForm.controls['IsActive'].setValue(response.IsActive); 
        // console.log(response.IsActive);
        // this.employeeForm.controls['EmpCode'].setValue(employee.EmpCode);  
      });  
    }
    onFormSubmit() {  
      this.dataSaved = false;  
      const employee = this.employeeForm.value;  
      
      this.UpdateEmployee(employee);  
      
      this.employeeForm.reset();  
    }  
    resetForm() {  
      this.employeeForm.reset();  
      this.massage = null;  
      this.dataSaved = false;  
    }  
    toggleVisibility(e){
      this.active= e.target.checked;
    }
    deleteEmployee(employeeId: string) {  
      if (confirm("Are you sure you want to delete this ?")) {   
        console.log(employeeId);
      this.employeeService.deleteEmployeeById(employeeId).subscribe(() => {  
        this.dataSaved = true;  
        this.massage = 'Record Deleted Succefully';  
        // this.loadAllEmployees();  
        this.employeeIdUpdate = null;  
        this.employeeForm.reset();  
    
      });  
    }  
  }  
  }
