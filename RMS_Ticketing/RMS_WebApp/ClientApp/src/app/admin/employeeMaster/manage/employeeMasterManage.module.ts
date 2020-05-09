import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EmployeeMasterManageComponent } from './employeeMasterManage.component';
import { routing } from './employeeMasterManage.routing';
import { SharedModule } from '../../../shared/shared.module';
import { DatePipe } from '@angular/common';
import { DuplicateRegionValidator } from './duplicateRegionValidation';
import { NumberOnlyDirective } from '../../../shared/directives/numberOnly.directive';
import { UniqueCodeValidatorDirective } from '../../../shared/directives/UniqueCodeValidator.directive';

//import { DuplicateRegionValidator } from './duplicateRegionValidation';

@NgModule({
    providers: [DatePipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    imports: [
        routing,
        //Ng2SmartTableModule,
        SharedModule,
        CommonModule
    ],
    declarations: [EmployeeMasterManageComponent, DuplicateRegionValidator, NumberOnlyDirective, UniqueCodeValidatorDirective],
    
    
})
export class EmployeeMasterManageModule {



}
