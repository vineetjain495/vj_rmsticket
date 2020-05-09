import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Employee } from './addEmployee';  
  
/*After that we write all methods related to consume web in employee.service.ts  */
 @Injectable({  
  providedIn: 'root'  
})  
  
export class EmployeeService {  
  url = 'https://localhost:44315/Api/Employee';  
  constructor(private http: HttpClient) { }  
  getAllEmployee(): Observable< Employee[]> {  
    return this.http.get<Employee[]>(this.url + '/AllEmployeeDetails');  
  }  
  getAllEmployee2() {  
    return this.http.get(this.url + '/AllEmployeelimited');  
  }  
  getEmployeeById(employeeId: string): Observable<Employee> {  
    return this.http.get<Employee>(this.url + '/GetEmployeeDetailsById/' + employeeId);  
  }  
  // getEmployeeById2(employeeId: string){  
  //   console.log(this.url + '/GetEmployeeDetailsById/' + employeeId);
  //   return this.http.get(this.url + '/GetEmployeeDetailsById/' + employeeId);  
  // }  
  createEmployee(employee: Employee) {  
    console.log(employee);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    console.log(employee.MspCategory)
    // return this.http.post<Employee>(this.url + '/InsertEmployeeDetails',   employee, httpOptions); 
    return this.http.post('../Employee/NewEmployee',   employee);  
  }  
  
  updateEmployee(employee: Employee) {  
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    // return this.http.put<Employee>(this.url + '/UpdateEmployeeDetails/',  
    // employee, httpOptions);  
    console.log(employee);
    return this.http.put('../Employee/UpdateEmployeeDetails',   employee);  
  }  
  deleteEmployeeById(employeeid: string){  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete(this.url + '/DeleteEmployeeDetails?emp_code=' + employeeid);  
  }  
}  
