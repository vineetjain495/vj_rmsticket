import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable, fromEventPattern } from 'rxjs';  
//import { HttpClient } from '@angular/common/http';  
import { EmployeeService } from '../addEmployee.service';  
import { Employee } from '../addEmployee/addEmployee';
import {ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
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
  Countries: Array<any>;
  Countries2: Array<any> = [];
  selectedCountry: String = "--Choose Country--";
  states: Array<any>;
  states2: Array<any> = [];
  cities: Array<any>;
  cities2: Array<any> = [];
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  errorFound = false;
  isLocationSelected: boolean;
  isMSPSelected: boolean;
    constructor(private formbulider: FormBuilder,
   //   private httpService: HttpClient,
      private route: ActivatedRoute,
      private router: Router,
      private employeeService: EmployeeService) {
      this.isLocationSelected = false;
      this.isMSPSelected = false;
      this.employeeService.getLocationDetail().subscribe((res: any) => {
        console.log(res);
        this.Countries = res;
        this.Countries.forEach((element) => {
          this.Countries2.push(element.RoName);
        });
        this.Countries2 = this.Countries2.filter((el, i, a) => i === a.indexOf(el));
      });
    }  
    
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
          if (response == "0") {
            this.dataSaved = false;
            this.errorFound = true;
            this.massage = "Ticket is assigned to Employee " + employee.Type_EmpCode +"  You can not change location and Active";
            // this.loadEmployeeToEdit(this.route.snapshot.params.id);
          }
          if (response == null) {
            this.dataSaved = false;
            this.errorFound = true;
            this.massage = "Error in update";

          }
          else {
          this.dataSaved = true;  
          this.massage = 'Record Updated Successfully';  
          // this.loadAllEmployees();  
          this.employeeIdUpdate = null;  
          // this.employeeForm.reset();  
        }

        });  
      
    }
    loadEmployeeToEdit(employeeId: string) {  
      this.employeeService.getEmployeeById(employeeId).subscribe((response: any) => {
        console.log(response);
        this.massage = null;  
        this.dataSaved = false;  
        this.employeeIdUpdate = response.Type_EmpCode;  
        this.employeeForm.controls['EmployeeName'].setValue(response.EmployeeName);  
       this.employeeForm.controls['MobileNumber'].setValue(response.MobileNumber);  
        this.employeeForm.controls['EmailId'].setValue(response.EmailID);  
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
  changeCountry(country) {
    this.states = this.Countries.filter(cntry => cntry.RoName == country);
    this.states.forEach((element) => {
      // console.log(element.LocationName);
      this.states2.push(element.LocationName);
      // this.empList.push(customObj);

    });
    this.states2 = this.states2.filter((el, i, a) => i === a.indexOf(el))
    // console.log(this.states);
  }
  removeCountry(country) {
    this.states = this.Countries.filter(cntry => cntry.RoName == country);
    this.states.forEach((element) => {
      console.log("remove" + element.LocationName);
      const index = this.states2.indexOf(element.LocationName);
      if (index > -1) {
        this.states2.splice(index, 1);
      }
      // this.states2.pop(element.LocationName);
      // this.empList.push(customObj);

    });
    this.states2 = this.states2.filter((el, i, a) => i === a.indexOf(el))
  }
  removeState(state) {
    this.cities = this.states.filter(cntry => cntry.LocationName == state);
    this.cities.forEach((element) => {
      console.log("remove" + element.HubLocationName);
      const index = this.cities2.indexOf(element.HubLocationName);
      if (index > -1) {
        this.cities2.splice(index, 1);
      }
      // this.states2.pop(element.LocationName);
      // this.empList.push(customObj);

    });
    this.cities2 = this.cities2.filter((el, i, a) => i === a.indexOf(el))
  }
  changeState(state) {
    this.cities = this.states.filter(cntry => cntry.LocationName == state);
    this.cities.forEach((element) => {
      //console.log(element.HubLocationName);
      this.cities2.push(element.HubLocationName);
      // this.empList.push(customObj);

    });
    this.cities2 = this.cities2.filter((el, i, a) => i === a.indexOf(el))
    console.log(this.cities2);
  }
  RolesInput(event) {
    let selected = event.target.value;
    if (selected == "3") {
      this.isMSPSelected = true;
    } else {
      this.isMSPSelected = false;
    }
    if (selected == "4" || selected == "6") {
      this.isLocationSelected = true;
    } else {
      this.isLocationSelected = false;
    }
  }
  goToPage(pageName: string) {
    console.log(pageName);
    this.router.navigate([`${pageName}`]);
  }
  }
