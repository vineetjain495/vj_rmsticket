import { NgModule } from '@angular/core';

import { ForgotPasswordComponent } from './forgotPassword.component';
import { routing } from './forgotPassword.routing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [routing, FormsModule, CommonModule],
    declarations: [ForgotPasswordComponent]
})
export class ForgotPasswordModule { }
