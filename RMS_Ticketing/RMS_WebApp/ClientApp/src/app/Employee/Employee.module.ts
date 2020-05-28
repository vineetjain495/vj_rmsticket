import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
//import { routing } from './ticketViewer.routing';
import { MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { EmployeeComponent } from './Employee.component';
import { routing } from './Employee.routing';
import { EmployeeService } from './Employee.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  imports: [
    routing,
    SharedModule,
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    //ToastyModule.forRoot()
  ],
  entryComponents: [
  ],
  declarations: [
    EmployeeComponent],
  providers: [EmployeeService],
})
export class EmployeeModule { }
