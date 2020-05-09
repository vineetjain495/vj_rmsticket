import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordComponent } from './forgotPassword.component';
import { AuthGuard } from '../shared/Security/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: ForgotPasswordComponent,
        data: {
            breadcrumb: 'Forgot Password',
       
    },
    canActivate: [AuthGuard]
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);  
