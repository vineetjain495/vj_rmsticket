import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './Employee.component';
import { AuthGuard } from '../shared/Security/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: EmployeeComponent,
        data: {
            breadcrumb: 'Employee',
            icon: 'icofont-dashboard bg-c-blue',
            status: false
    },
    canActivate: [AuthGuard]
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);  
