import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeService } from '../addEmployee.service';
import { Employee } from './addEmployee';
////import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/DataService';
@Component({
  selector: 'app-addEmployee',
  templateUrl: './addEmployee.component.html',
  styleUrls: ['./addEmployee.component.css']
})

export class AddEmployeeComponent implements OnInit {
  dataSaved = false;
  employeeForm: any;  
  allEmployees: Observable<Employee[]>;
  employeeIdUpdate = null;
  massage = null;
  submitted = false;
  isLocationSelected: boolean;
  isMSPSelected: boolean;
  data_exist: any;
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

selectedItems: Array<any> = [];
dropdownSettings: any = {};
  dropdownSettings2: any = {};
  // cities2: Array<any>;
  getLocation() {

  }
  constructor(private formbulider: FormBuilder,
  //  private httpService: HttpClient,
    private router: Router,
    private ds: DataService,
    private employeeService: EmployeeService
  ) {
    //console.log("addemp");
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
    this.employeeForm = this.formbulider.group({
      Type_EmpCode: ['', [Validators.required]],
      EmployeeName: ['', [Validators.required]],
      MobileNumber: ['', [Validators.required, Validators.min(6000000000), Validators.max(9999999999)]],
      EmailId: ['', [Validators.required, Validators.email]],
      MspCategory: [''],
      RoleCode: [''],
      RightsCode: [''],
      Region: [''],
      Location: [''],
      Hub: ['']
    });
    this.loadAllEmployees();
    this.dropdownSettings = {
      singleSelection: false,
      // idField: 'item_id',
      // textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: this.ShowFilter
    };

    this.dropdownSettings2 = {
      singleSelection: false,
      // idField: 'item_id',
      // textField: 'item_text',
      enableCheckAll : false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: this.ShowFilter
    };
  }
  get f() { return this.employeeForm.controls; }
  loadAllEmployees() {
  //  this.allEmployees = this.employeeService.getAllEmployee();
  }
  onFormSubmit() {
    console.log("sec");
    this.submitted = true;
    this.dataSaved = false;
    const employee = this.employeeForm.value;
    console.log(employee);
    this.CreateEmployee(employee);

    this.employeeForm.reset();
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
  CreateEmployee(employee: Employee) {
    this.ds.ShowHideToasty({
      title: 'Please Wait...',
      msg: '',
      showClose: false,
      theme: 'bootstrap',
      type: 'wait',
      closeOther: true
    });
    console.log("sec");
    if (this.employeeIdUpdate == null) {
      this.employeeService.getEmployeeById(employee.Type_EmpCode).subscribe((response: any) => {
        this.massage = null;
        this.dataSaved = false;
        // console.log(response)
        if (response != null) {
          this.dataSaved = false;
            this.errorFound = true;
          this.massage = "This code is already available";
          this.cities = [];
          this.cities2 = [];
          this.Countries = [];
          this.Countries2 = [];
          this.states = [];
          this.states2 = [];
        }
        else {
          
          this.employeeService.createEmployee(employee).subscribe(() => {
            // console.log("sec");
            this.dataSaved = true;
            console.log("sec");
            this.massage = 'Record saved Successfully';
            console.log(this.massage);
            // this.loadAllEmployees();  
            this.employeeIdUpdate = null;
            // this.employeeForm.reset();  
          }
          );
        }

      });
      // console.log(this.data_exist + "dfcds");

    } else {
      employee.Type_EmpCode = this.employeeIdUpdate;
     /* this.employeeService.updateEmployee(employee).subscribe(() => {
        this.dataSaved = true;
        this.massage = 'Record Updated Successfully';
        this.loadAllEmployees();
        this.employeeIdUpdate = null;
        // this.employeeForm.reset();  
      });*/
    }
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
  // maps the local data column to fields property
  public localFields: Object = { text: 'Name', value: 'Code' };
  // set the placeholder to MultiSelect Dropdown input element
  public localWaterMark: string = 'Select countries';

  resetForm() {
    this.employeeForm.reset();
    this.massage = null;
    this.dataSaved = false;
  }
  onItemSelect(item: any) {
    console.log('onItemSelect', item);
}
onSelectAll(items: any) {
    console.log('onSelectAll', items);
}
  goToPage(pageName: string) {
    console.log(pageName);
    this.router.navigate([`${pageName}`]);
  }
}
