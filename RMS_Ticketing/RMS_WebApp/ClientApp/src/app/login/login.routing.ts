import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthGuard } from '../shared/Security/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
            breadcrumb: 'Login',
            //icon: 'icofont-dashboard bg-c-blue',
            //status: false
    },
    //canActivate: [AuthGuard]
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);  
