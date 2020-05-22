import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Employee } from './addEmployee/addEmployee';  
import { baseUrl } from '../GlobalShareCode';
import { CommonFunctionality } from '../app.commonFunctionality';
import { BaseResponseWithData } from '../shared/model/BaseResponseModel';
import { UpdateCallback } from '@angular/core/src/testability/testability';
import { UpdateTicket } from './updateTicket/UpdateTicket';
/*After that we write all methods related to consume web in employee.service.ts  */
 @Injectable({  
  providedIn: 'root'    
})  
  
 export class EmployeeService {
   empCode: string;
   edit_empCode: string;
  //url = 'https://localhost:44315/Api/Employee';  
   constructor(private http: HttpClient,
     private cf: CommonFunctionality, ) {
     this.empCode = "";
     this.edit_empCode = "";
     this.getUserDetail();
   }  
 /* getAllEmployee(): Observable< Employee[]> {  
    return this.http.get<Employee[]>(baseUrl + '/AllEmployeeDetails');  
  }  */
   getEmployeeDetails() {  
     return this.http.get(baseUrl + '/Employee/EmployeeDetails');  
  }
   getRolesDetail() {
     return this.http.get(baseUrl + 'Employee/RolesDetail');
   }
  getLocationDetail() {
     return this.http.get(baseUrl + 'Employee/LocationDetail');
  }
  getEmployeeLimited() {
    return this.http.get(baseUrl + 'Employee/Employeelimited');
   }
   getEmployeeLimitedByID(employee_code: string) {
     return this.http.get(baseUrl + 'Employee/EmployeelimitedById/?employeeId=' + employee_code);
   }
   getEmployeeLocationByID(employee_code: string) {
     return this.http.get(baseUrl + 'Employee/EmployeeLocationById/?employeeId=' + employee_code);
   }
   getEmployeeTicketsByID(employee_code: string) {
     return this.http.get(baseUrl + 'Employee/EmployeeTicketsById/?employeeId=' + employee_code);
   }

   public getEmployeeById(employee_code: string){  
   // return this.http.get<Employee>(this.url + '/GetEmployeeDetailsById/' + employeeId);
    // return this.http.get(baseUrl + 'Employee/CheckEmployee/?employeeId=' + employee_code);
     console.log("ser " + employee_code);
     return this.http.get(baseUrl + 'Employee/CheckEmployee/?employeeId=' + employee_code);
   //return this.http.post(baseUrl + 'Employee/CheckEmployee', employee_code);
  // return this.CallHttpGet<T>(baseUrl + 'Employee/CheckEmployee', employee_code, null);
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
 
  createEmployee(employee: Employee) {  
    console.log(employee);
    return this.http.post(baseUrl + 'Employee/CreateEmployee',   employee);  
  }  
  
  updateEmployee(employee: Employee) {  
    return this.http.post(baseUrl + 'Employee/UpdateEmployeeDetails',   employee);  
   }
   UpdateTicketAssign(employee: UpdateTicket) {
    // console.log(employee);
    return this.http.post('../Employee/UpdateTicketAssign', employee);
   }  
  deleteEmployeeById(employeeid: string){  
   // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete(baseUrl + '/DeleteEmployeeDetails?emp_code=' + employeeid);  
   }
   private CallHttpPost<T>(url: string, itemData: any, headers?: HttpHeaders): Observable<T> {
     return this.http.post<T>(url, itemData, {
       headers: headers
     });
   }
   private CallHttpGet<T>(url: string, itemData: any, headers?: HttpHeaders): Observable<T> {

     if (itemData != null) {
       return this.http.get<T>(url, {
         headers: headers,
         params: { 'Value': itemData }
       });
     }
     else {
       return this.http.get<T>(url, {
         headers: headers
       });
     }


   }
}  
