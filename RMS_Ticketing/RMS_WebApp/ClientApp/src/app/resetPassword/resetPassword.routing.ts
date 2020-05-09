import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPasswordComponent } from './resetPassword.component';
import { AuthGuard } from '../shared/Security/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: ResetPasswordComponent,
        data: {
            breadcrumb: 'Reset Password',
            //icon: 'icofont-dashboard bg-c-blue',
            //status: false
    },
    canActivate: [AuthGuard]
  },
  

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);  
