import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
//import { HttpClientModule } from '@angular/common/http';
//import { HttpModule } from '@angular/http';
import { UpdateTicketComponent } from './updateTicket.component';
import { routing } from './updateTicket.routing';
import { EmployeeService } from '../Employee.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  imports: [
    routing,   
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    //ToastyModule.forRoot()
  ],
  entryComponents: [
  ],
  declarations: [
    UpdateTicketComponent],
  providers: [EmployeeService],
})
export class UpdateTicketModule { }
