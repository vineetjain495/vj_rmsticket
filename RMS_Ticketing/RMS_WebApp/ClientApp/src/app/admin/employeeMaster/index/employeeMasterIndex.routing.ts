import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeMasterIndexComponent } from './employeeMasterIndex.component';
import { AuthGuard } from '../../../shared/Security/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: EmployeeMasterIndexComponent,
        data: {
            breadcrumb: 'View',
            status: false
    },
    canActivate: [AuthGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
