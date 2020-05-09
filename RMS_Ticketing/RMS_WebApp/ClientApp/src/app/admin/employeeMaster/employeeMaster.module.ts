import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeMasterComponent } from './employeeMaster.component';
import { routing } from './employeeMaster.routing';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    imports: [
        routing,
        SharedModule,
        CommonModule,
        FormsModule
    ],
    //schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    declarations: [EmployeeMasterComponent],
    
    
})
export class EmployeeMasterModule {



}
