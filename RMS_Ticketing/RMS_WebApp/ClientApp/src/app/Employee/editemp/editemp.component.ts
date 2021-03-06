import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, fromEventPattern } from 'rxjs';
//import { HttpClient } from '@angular/common/http';  
import { EmployeeService } from '../Employee.service';
import { Employee } from '../addEmployee/addEmployee';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/DataService';
import { BaseResponseWithData } from '../../shared/model/BaseResponseModel';
import { CommonFunctionality } from '../../app.commonFunctionality';
@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
  //Decalaration
  dataSaved = false;
  employeeForm: any;
  allEmployees: Observable<Employee[]>;
  employeeIdUpdate = null;
  massage = null;
  active = true;
  Emp_details: Array<any> = [];
  Countries: Array<any>;
  Countries2: Array<any> = [];
  selected_region: Array<any> = [];
  selected_loc: Array<any> = [];
  selected_hub: Array<any> = [];
  selected_manager: Array<any> = [];
  selectedCountry: String = "--Choose Country--";
  states: Array<any>;
  states2: Array<any> = [];
  cities: Array<any>;
  cities2: Array<any> = [];
  roles: Array<any>[] = [];
  rights: Array<any> = [];
  MSP: Array<any> = [];
  dropdownSettings: any = {};
  dropdownSettings2: any = {};
  dropdownSettings3: any = {};
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  errorFound = false;
  isLocationSelected: boolean;
  isMSPSelected: boolean;
  isTicketAvailable: boolean;
  hideSubmitButton: boolean = false;
  constructor(private formbulider: FormBuilder,
    //   private httpService: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private ds: DataService,
    private cf: CommonFunctionality,
    private employeeService: EmployeeService) {
    this.isLocationSelected = false;
    this.isMSPSelected = false;
    this.isTicketAvailable = false;

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

  }

  ngOnInit() {
    // alert(this.route.snapshot.params.id);
    this.employeeForm = this.formbulider.group({
      Type_EmpCode: ['', [Validators.required]],
      EmployeeName: ['', [Validators.required]],
      MobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      EmailId: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      RoleCode: ['', [Validators.required]],
      RightsCode: ['', [Validators.required]],
      MGRCODE: ['', Validators.required],
      IsActive: [true],
      MspCategory: [''],
      Region: [''],
      Location: [''],
      Hub: ['']
    });
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
    this.loadEmployeeToEdit(this.route.snapshot.params.id);
    // console.log(res);
    this.cf.GetUserDetails().subscribe((data: BaseResponseWithData<any>) => {

      if (data.Success) {
        this.filedPopAccRole_Rights(data.Entity.AssignedRoleID, data.Entity.AssignedRightsID);

        //if (this.rolesParameter != 1) {
        //  if ((this.model.CustomerActions == "ACCEPT" || this.model.CustomerActions == "REJECT") && this.model.CMSStatus == "CLOSED") {
        //    this.ticketSummaryForm.disable();
        //    this.hideSubmitButton = true;
        //    this.hideAttachment = true;
        //    this.hideFileEditing = true;
        //  }
        //}
      }
    });

  }
  filedPopAccRole_Rights(Roles: number, Rights: number) {
    //this.rolesParameter = Roles;



    if (Rights == 1) {
      this.employeeForm.disable();
      this.hideSubmitButton = true;

    }
    else {
      this.hideSubmitButton = false;

    }
    

    
  }
  UpdateEmployee(employee: Employee) {
    console.log(employee);
    this.ds.ShowHideToasty({
      title: 'Please Wait...',
      msg: '',
      showClose: false,
      theme: 'bootstrap',
      type: 'wait',
      closeOther: true
    });
    employee.createdBy = this.employeeService.empCode;
    if (this.isMSPSelected == false) {
      employee.MspCategory = ""
    }
    this.employeeService.updateEmployee(employee).subscribe((response: any) => {
      console.log(response);
      if (!response.Success) {
        this.dataSaved = false;
        //this.errorFound = true;
        //this.massage = "Ticket is assigned to Employee " + employee.Type_EmpCode + "  You can not change location and Active";
        this.ds.ShowHideToasty({
          title: 'Failure..',
          msg: response.Message,
          showClose: true,
          theme: 'bootstrap',
          type: 'error',
          closeOther: true,
        });
        this.employeeService.edit_empCode = this.route.snapshot.params.id;
        console.log(this.employeeService.edit_empCode);
        /*.employeeForm.controls['EmployeeName'].setValue(employee.EmployeeName);
        this.employeeForm.controls['MobileNumber'].setValue(employee.MobileNumber);
        this.employeeForm.controls['EmailId'].setValue(employee.EmailId);
        
        this.employeeForm.controls['RoleCode'].setValue(employee.RoleCode);
        this.employeeForm.controls['RightsCode'].setValue(employee.RightsCode);
        this.employeeForm.controls['Type_EmpCode'].setValue(employee.Type_EmpCode);
        this.employeeForm.controls['IsActive'].setValue(employee.IsActive);*/
        console.log(this.selected_region);
        //this.loadEmployeeToEdit(this.employeeService.edit_empCode);
        this.isTicketAvailable = true;
      }
      else {
        this.ds.ShowHideToasty({
          title: 'Record Updated Successfully',
          msg: '',
          showClose: true,
          theme: 'bootstrap',
          type: 'success',
          closeOther: true,
          timeout: 5000
        });
        this.dataSaved = true;
        this.massage = 'Record Updated Successfully';
        // this.loadAllEmployees();  
        this.employeeIdUpdate = null;
        this.employeeForm.reset();
        this.router.navigateByUrl('/Employee/EmployeeViewer');
      }

    });

  }
  loadEmployeeToEdit(employeeId: string) {
    this.employeeService.getEmployeeById(employeeId).subscribe((response: any) => {
      console.log(response);
      if (response.Success) {

        this.massage = null;
        this.dataSaved = false;
        this.employeeIdUpdate = response.Entity.Type_EmpCode;
        this.employeeForm.controls['EmployeeName'].setValue(response.Entity.EmployeeName);
        this.employeeForm.controls['MobileNumber'].setValue(response.Entity.MobileNumber);
        this.employeeForm.controls['EmailId'].setValue(response.Entity.EmailID);
        this.employeeForm.controls['Password'].setValue(response.Entity.Password);
        this.employeeForm.controls['RoleCode'].setValue(response.Entity.RoleCode);
        this.employeeForm.controls['RightsCode'].setValue(response.Entity.RightsCode);
        this.employeeForm.controls['Type_EmpCode'].setValue(response.Entity.Type_EmpCode);
        this.employeeForm.controls['IsActive'].setValue(response.Entity.IsActive);
        this.togglebutton(response.Entity.IsActive);
        this.employeeService.getEmployeeDetails().subscribe((res: any) => {
          res.Entity.forEach((element) => {
            //console.log(res);
            if (element) {

              this.Emp_details.push(element.Type_EmpCode + " - ( " + element.EmployeeName + " )");
              //console.log(this.Emp_details);
            }

          });
          this.Emp_details = this.Emp_details.filter((el, i, a) => i === a.indexOf(el));
          console.log(response.Entity.MGRCODE);
          console.log(this.Emp_details);
          this.selected_manager = this.Emp_details.filter(res => res.indexOf(response.Entity.MGRCODE + " -") !== -1);
          console.log(this.selected_manager);
        });

        if (response.Entity.RoleCode == "2") {
          this.getMSP();

          this.employeeForm.controls['MspCategory'].setValue(response.Entity.MspCategory);
          this.employeeForm.controls['MspCategory'].setValidators([Validators.required]);
          this.isMSPSelected = true;
                  }
        if (response.Entity.RoleCode == "4" || response.Entity.RoleCode == "6") {
          this.isLocationSelected = true;

          this.getLocations();
        }
        this.ds.ShowHideToasty({
          title: 'Edit Employee Here',
          msg: '',
          showClose: true,
          theme: 'bootstrap',
          type: 'success',
          closeOther: true,
          timeout: 3000
        });
      }
      else {
        this.ds.ShowHideToasty({
          title: 'No Employee found',
          msg: '',
          showClose: true,
          theme: 'bootstrap',
          type: 'success',
          closeOther: true,
          timeout: 5000
        });

      }
      // console.log(response.IsActive);
      // this.employeeForm.controls['EmpCode'].setValue(employee.EmpCode);  
    });
  }
  getLocations() {
    this.ds.ShowHideToasty({
      title: 'Getting Locations...',
      msg: '',
      showClose: false,
      theme: 'bootstrap',
      type: 'wait',
      closeOther: true
    });

    this.employeeService.getLocationDetail().subscribe((res: any) => {

      this.Countries = res.Entity;
      console.log(this.Countries);
      this.Countries.forEach((element) => {
        this.Countries2.push(element.RoName);
      });
      this.Countries2 = this.Countries2.filter((el, i, a) => i === a.indexOf(el));


      this.employeeService.getEmployeeLocationByID(this.employeeIdUpdate).subscribe((res_loc: any) => {
        console.log(res_loc);

        this.ds.ShowHideToasty({
          title: 'Locations are ready to select',
          msg: '',
          showClose: true,
          theme: 'bootstrap',
          type: 'success',
          closeOther: true,
          timeout: 3000
        });
        res_loc.Entity.forEach((element) => {
          console.log(this.selected_region);
          console.log(element);


          if (element.EmployeeCode) {
            console.log(element.RoName);
            console.log(this.selected_region);
            this.selected_region.push(element.RoName);
            console.log(element.RoName);
            this.selected_loc.push(element.LocationName);
            console.log(element.LocationName);
            this.selected_hub.push(element.HubLocationName);
            console.log(element.HubLocationName);
            this.changeCountry(element.RoName);
            console.log(element.HubLocationName);
            this.changeState(element.LocationName);
            console.log(element.HubLocationName);
            console.log(this.selected_hub);
            console.log(this.selected_loc);
            console.log(this.selected_region);
          }

        });


        this.selected_region = this.selected_region.filter((el, i, a) => i === a.indexOf(el));
        this.selected_loc = this.selected_loc.filter((el, i, a) => i === a.indexOf(el));
        this.selected_hub = this.selected_hub.filter((el, i, a) => i === a.indexOf(el));

      });
    });
  }
  onFormSubmit() {
    this.dataSaved = false;
    const employee = this.employeeForm.value;
    var mgrcode = "";
    console.log(employee.MGRCODE);
    employee.MGRCODE.forEach((element) => {

      var emp_code = element.split(" ");
      console.log(emp_code);
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
    //console.log(employee

    if (employee.IsActive == false) {
      if (confirm("Are you sure to InActive " + employee.Type_EmpCode)) {
        this.UpdateEmployee(employee);
      }
    }
    else {
      //if (confirm("Are you sure to Update " + employee.Type_EmpCode)) {
        this.UpdateEmployee(employee);
      //}
    }


    // this.employeeForm.reset();  
  }
  resetForm() {
    //this.employeeForm.reset();
    console.log("inreset");
    this.massage = null;
    this.dataSaved = false;
   
    this.employeeForm.controls['EmailId'].setValue('');
    this.employeeForm.controls['RoleCode'].setValue('');
    this.employeeForm.controls['RightsCode'].setValue('');
    this.employeeForm.controls['MobileNumber'].setValue('');
    this.employeeForm.controls['MspCategory'].setValue('');
    this.employeeForm.controls['MGRCODE'].setValue('');
    this.selected_manager = [];
    this.selected_loc = [];
    this.selected_hub = [];
    this.selected_region = [];
    }
  
  toggleVisibility(e) {
    this.active = e.target.checked;
  }
  togglebutton(evalue) {
    console.log(evalue);
    //this.employeeForm. = !this.filter;
    this.employeeForm.controls['IsActive'].setValue(evalue);
    this.active = evalue;
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
    console.log(country);
    console.log(this.Countries);
    this.states = this.Countries.filter(cntry => cntry.RoName == country);
    console.log("Inside country filter");
    this.states.forEach((element) => {
      //console.log(element.LocationName);
      this.states2.push(element.LocationName);
      // this.empList.push(customObj);

    });
    this.states2 = this.states2.filter((el, i, a) => i === a.indexOf(el))
    /*if (confirm("Are you sure to delete " + name)) {
    }*/
    console.log(this.states2);
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
    //console.log(this.states);
    this.cities = this.Countries.filter(cntry => cntry.LocationName == state);
    this.cities.forEach((element) => {
      console.log(element.HubLocationName);
      this.cities2.push(element.HubLocationName);
      // this.empList.push(customObj);

    });
    this.cities2 = this.cities2.filter((el, i, a) => i === a.indexOf(el))
    console.log(this.cities2);
  }
  RolesInput(event) {
    let selected = event.target.value;
    if (selected == "2") {
      this.getMSP();
      this.isMSPSelected = true;
      this.employeeForm.controls['MspCategory'].setValidators([Validators.required]);
    } else {
      this.isMSPSelected = false;
      this.employeeForm.controls['MspCategory'].setValidators();
      this.employeeForm.controls['MspCategory'].updateValueAndValidity();

    }
    if (selected == "4" || selected == "6") {
      this.getLocations();
      this.isLocationSelected = true;

    } else {
      this.isLocationSelected = false;
      this.selected_region = [];
      this.selected_loc = [];
      this.selected_hub = [];
    }
  }
  goToPage(pageName: string) {
    console.log(pageName);
    this.router.navigate([`${pageName}`]);
  }
  goto_update() {
    this.router.navigateByUrl('Employee/UpdateTicket/' + this.employeeService.edit_empCode);
  }
  getMSP() {
    this.employeeService.getMSPDetail().subscribe((res: any) => {

      res.Entity.forEach((element) => {
        this.MSP.push(element.MSP);
      });
      this.MSP = this.MSP.filter((el, i, a) => i === a.indexOf(el));

    });
  }
}
