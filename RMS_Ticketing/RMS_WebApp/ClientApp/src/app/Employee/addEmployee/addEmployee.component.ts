import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeService } from '../Employee.service';
import { Employee } from './addEmployee';
////import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/DataService';
import { forEach } from '@angular/router/src/utils/collection';
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
  Emp_details: Array<any> = [];
  data_exist: any;
  Countries: Array<any>;
  Countries2: Array<any> = [];
  selected_region: Array<any> = [];
  selected_loc: Array<any> = [];
  selected_hub: Array<any> = [];
  selectedCountry: String = "--Choose Country--";
  states: Array<any>;
  states2: Array<any> = [];
  cities: Array<any>;
  cities2: Array<any> = [];
  roles: Array<any>[] = [];
  rights: Array<any> = [];
  MSP: Array<any> = [];
  //roles2: Array<any> = [];
  //rights2: Array<any> = [];
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  errorFound = false;
  codeAvailable = false;
  selectedItems: Array<any> = [];
  dropdownSettings: any = {};
  dropdownSettings2: any = {};
  dropdownSettings3:any = {};
  emp_code = "";
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
    this.ds.ShowHideToasty({
      title: 'Loading...',
      msg: '',
      showClose: false,
      theme: 'bootstrap',
      type: 'wait',
      closeOther: true
    });
    this.employeeService.getRolesDetail().subscribe((res: any) => {
      //res;
      res.Entity.forEach((element) => {

        if (element.Type == "Roles") {
          //console.log(element);

          this.roles.push([element.TypeCode, element.Type_EmpCode]);

        }
        if (element.Type == "Rights") {
          //console.log(element);

          this.rights.push([element.TypeCode, element.Type_EmpCode]);

        }
      });
    });
    this.employeeService.getEmployeeDetails().subscribe((res: any) => {
      res.Entity.forEach((element) => {
        //console.log(res);
        if (element) {

          this.Emp_details.push(element.Type_EmpCode + " - ( " + element.EmployeeName + " )");
          //console.log(this.Emp_details);
        }

      });
      this.Emp_details = this.Emp_details.filter((el, i, a) => i === a.indexOf(el));
    });
    this.employeeService.getMSPDetail().subscribe((res: any) => {
      
      res.Entity.forEach((element) => {
         this.MSP.push(element.MSP);
      });
      this.MSP = this.MSP.filter((el, i, a) => i === a.indexOf(el));
    
    });
  
    // console.log(this.roles)
    this.employeeService.getLocationDetail().subscribe((res: any) => {
     // console.log(res);
      this.ds.ShowHideToasty({
        title: 'Create Employee Here',
        msg: '',
        showClose: true,
        theme: 'bootstrap',
        type: 'success',
        closeOther: true,
        timeout: 3000
      });
      this.Countries = res.Entity;
      //console.log(" add " + this.Countries);
      this.Countries.forEach((element) => {
        this.Countries2.push(element.RoName);
      });
      this.Countries2 = this.Countries2.filter((el, i, a) => i === a.indexOf(el));
      //this.employeeService.getUserDetail();
    });
  }

  ngOnInit() {
    this.employeeForm = this.formbulider.group({
      Type_EmpCode: ['', [Validators.required]],
      EmployeeName: ['', [Validators.required]],
      MobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      EmailId: ['', [Validators.required, Validators.email]],
      MGRCODE: ['', Validators.required],
      MspCategory: [''],
      RoleCode: [''],
      RightsCode: [''],
      Region: [''],
      Location: [''],
      Hub: ['']
    });
    this.loadAllEmployees();
    //console.log("user " + this.employeeService.getUserDetail());
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
      enableCheckAll: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: this.ShowFilter
    };
    this.dropdownSettings3 = {
      singleSelection: false,
      enableCheckAll: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      limitSelection: 1,
      itemsShowLimit: 3,
      allowSearchFilter: true
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
    var mgrcode = "";
    console.log(employee.MGRCODE);
    employee.MGRCODE.forEach((element) => {
      
      var emp_code = element.split(" ");
     // console.log(emp_code);
      console.log(emp_code);
      if (emp_code.length > 1) {
        mgrcode = emp_code[0];
        console.log(mgrcode);
      }

      else {
        mgrcode = "";
      }
    });
    console.log(mgrcode);
    employee.MGRCODE = mgrcode;
    console.log(employee);
    this.CreateEmployee(employee);

    
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
      //console.log("remove" + element.LocationName);
      const index = this.states2.indexOf(element.LocationName);
      if (index > -1) {
        this.states2.splice(index, 1);
        const index_selection = this.selected_loc.indexOf(element.LocationName);
        console.log("index" + index_selection);
        if (index_selection > -1) {
          this.selected_loc.splice(index_selection, 1);
        }
        // console.log(this.selected_loc);
        this.removeState(element.LocationName);

      }
      // this.states2.pop(element.LocationName);
      // this.empList.push(customObj);

    });

    this.states2 = this.states2.filter((el, i, a) => i === a.indexOf(el));
    this.selected_loc = this.selected_loc.filter((el, i, a) => i === a.indexOf(el));
  }
  removeState(state) {
    this.cities = this.states.filter(cntry => cntry.LocationName == state);
    this.cities.forEach((element) => {
      console.log("remove" + element.HubLocationName);
      const index = this.cities2.indexOf(element.HubLocationName);
      if (index > -1) {
        this.cities2.splice(index, 1);

        const index_selection = this.selected_hub.indexOf(element.HubLocationName);
        if (index_selection > -1) {
          this.selected_hub.splice(index_selection, 1);
        }
        console.log(this.selected_hub);
        //this.removeState(element.LocationName);

      }
      // this.states2.pop(element.LocationName);
      // this.empList.push(customObj);

    });
    this.selected_hub = this.selected_hub.filter((el, i, a) => i === a.indexOf(el));
    this.cities2 = this.cities2.filter((el, i, a) => i === a.indexOf(el))
  }
  changeState(state) {
    this.cities = this.Countries.filter(cntry => cntry.LocationName == state);
    this.cities.forEach((element) => {
      //console.log(element.HubLocationName);
      this.cities2.push(element.HubLocationName);
      // this.empList.push(customObj);

    });
    this.cities2 = this.cities2.filter((el, i, a) => i === a.indexOf(el))
    //console.log(this.cities2);
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

    //console.log(this.employeeService.getUserDetail());
    employee.createdBy = this.employeeService.empCode;
    this.employeeService.createEmployee(employee).subscribe((response: any) => {
      if (response.Success) {
        // console.log("sec");
        this.dataSaved = true;
        this.massage = 'Record saved Successfully';
        console.log("sec");
        this.ds.ShowHideToasty({
          title: response.Message,
          msg: '',
          showClose: true,
          theme: 'bootstrap',
          type: 'success',
          closeOther: true,
          timeout: 5000
        });

        console.log(this.massage);
        // this.loadAllEmployees();  
        this.employeeIdUpdate = null;
        // this.employeeForm.reset();
        this.router.navigateByUrl('/Employee/EmployeeViewer');
      }

      else {
        this.codeAvailable = true;
        this.errorFound = true;

        this.massage = response.Message;
        this.ds.ShowHideToasty({
          title: 'Failure..',
          msg: response.Message,
          showClose: true,
          theme: 'bootstrap',
          type: 'error',
          closeOther: true,
        });

      }
    });

  }
  checkCode(event) {
    console.log(event.target.value);
    if (event.target.value != "") {
      this.employeeService.getEmployeeById(event.target.value).subscribe((response: any) => {
        this.massage = null;

        // console.log(response)
        if (response.Success) {
          this.codeAvailable = true;

          this.ds.ShowHideToasty({
            title: 'Note..',
            msg: response.Message,
            showClose: true,
            theme: 'bootstrap',
            type: 'error',
            closeOther: true,
            timeout: 5000
          });
          this.massage = "This code is already available";

          this.employeeForm.setErrors({ 'incorrect': true });
        }
        else {
          this.codeAvailable = false;
          this.employeeForm.setErrors(null);
        }
      });
    }
  }
  RolesInput(event) {
    let selected = event.target.value;
    if (selected == "2") {
      this.isMSPSelected = true;
      this.employeeForm.controls['MspCategory'].setValidators([Validators.required]);

    } else {
      this.isMSPSelected = false;
      this.employeeForm.controls['MspCategory'].setValidators();
      this.employeeForm.controls['MspCategory'].updateValueAndValidity();

    }
    if (selected == "4" || selected == "6") {
      this.isLocationSelected = true;
    } else {
      this.isLocationSelected = false;
      this.selected_region = [];
      this.selected_loc = [];
      this.selected_hub = [];
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
