import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { routing } from './login.routing';
import { RouterModule, Routes } from '@angular/router';
//import { DashboardComponent } from '../dashboard/dashbkcoard.component';



@NgModule({
    imports: [routing, FormsModule, CommonModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    declarations: [LoginComponent]
})
export class LoginModule { }
