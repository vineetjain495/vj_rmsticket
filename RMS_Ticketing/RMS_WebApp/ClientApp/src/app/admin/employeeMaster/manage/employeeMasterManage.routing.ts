import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeMasterManageComponent } from './employeeMasterManage.component';
import { AuthGuard } from '../../../shared/Security/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: EmployeeMasterManageComponent,
        data: {
            breadcrumb: 'Manage',
            status: false
    },
    canActivate: [AuthGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
