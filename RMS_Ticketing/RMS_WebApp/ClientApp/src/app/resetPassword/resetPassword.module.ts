import { NgModule } from '@angular/core';


import { ResetPasswordComponent } from './resetPassword.component';
import { routing } from './resetPassword.routing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EqualValidator } from '../shared/directives/equalValidator.directive';

@NgModule({
    imports: [routing, FormsModule, CommonModule],
    declarations: [ResetPasswordComponent, EqualValidator]
})
export class ResetPasswordModule { }
