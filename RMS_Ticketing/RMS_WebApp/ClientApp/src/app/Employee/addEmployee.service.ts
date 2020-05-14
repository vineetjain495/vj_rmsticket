import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Employee } from './addEmployee/addEmployee';  
import { baseUrl } from '../GlobalShareCode';
import { CommonFunctionality } from '../app.commonFunctionality';
import { BaseResponseWithData } from '../shared/model/BaseResponseModel';
/*After that we write all methods related to consume web in employee.service.ts  */
 @Injectable({  
  providedIn: 'root'  
})  
  
 export class EmployeeService {
   empCode: string;
  //url = 'https://localhost:44315/Api/Employee';  
   constructor(private http: HttpClient,
     private cf: CommonFunctionality, ) {
     this.empCode = "";
     this.getUserDetail();
   }  
 /* getAllEmployee(): Observable< Employee[]> {  
    return this.http.get<Employee[]>(baseUrl + '/AllEmployeeDetails');  
  }  
  getAllEmployee2() {  
    return this.http.get(baseUrl + '/AllEmployeelimited');  
  }*/
   getRolesDetail() {
     return this.http.get(baseUrl + 'Employee/RolesDetail');
   }
  getLocationDetail() {
     return this.http.get(baseUrl + 'Employee/LocatioDetail');
  }
  getEmployeeLimited() {
    return this.http.get(baseUrl + 'Employee/Employeelimited');
   }
   getEmployeeLimitedByID(employee_code: string) {
     return this.http.get(baseUrl + 'Employee/EmployeelimitedById/?employeeId=' + employee_code);
   }

  getEmployeeById(employee_code: string) {  
   // return this.http.get<Employee>(this.url + '/GetEmployeeDetailsById/' + employeeId);
    return this.http.get(baseUrl + 'Employee/EmployeeDetailsById/?employeeId=' + employee_code);
   }
  getUserDetail() {
     //console.log("user");
     this.cf.GetUserDetails().subscribe((data: BaseResponseWithData<any>) => {
       
       if (data.Success) {
        // console.log(data + " " + data.Entity + " " + data.Entity.EmpCode);
         this.empCode = data.Entity.EmpCode;
         console.log(this.empCode);
       }
     });
       }
  // getEmployeeById2(employeeId: string){  
  //   console.log(this.url + '/GetEmployeeDetailsById/' + employeeId);
  //   return this.http.get(this.url + '/GetEmployeeDetailsById/' + employeeId);  
  // }  
  createEmployee(employee: Employee) {  
    console.log(employee);
   // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    //console.log(employee.MspCategory)
    // return this.http.post<Employee>(this.url + '/InsertEmployeeDetails',   employee, httpOptions); 
    return this.http.post(baseUrl + 'Employee/NewEmployee',   employee);  
  }  
  
  updateEmployee(employee: Employee) {  
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    // return this.http.put<Employee>(this.url + '/UpdateEmployeeDetails/',  
    // employee, httpOptions);  
    //console.log(employee);
    return this.http.put('../Employee/UpdateEmployeeDetails',   employee);  
  }  
  deleteEmployeeById(employeeid: string){  
   // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete(baseUrl + '/DeleteEmployeeDetails?emp_code=' + employeeid);  
  }  
}  
