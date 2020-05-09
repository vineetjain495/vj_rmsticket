import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EmployeeMasterIndexComponent } from './employeeMasterIndex.component';
import { routing } from './employeeMasterIndex.routing';
import { SharedModule } from '../../../shared/shared.module';
import { DatePipe } from '@angular/common';

@NgModule({
    providers: [DatePipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    imports: [
        routing, Ng2SmartTableModule,
        SharedModule,
        CommonModule
    ],
    declarations: [EmployeeMasterIndexComponent],
    
})
export class EmployeeMasterIndexModule {



}
