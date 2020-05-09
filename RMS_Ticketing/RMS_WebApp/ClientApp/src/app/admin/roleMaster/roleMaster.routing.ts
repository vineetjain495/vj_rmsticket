import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleMasterComponent } from './roleMaster.component';
import { AuthGuard } from '../../shared/Security/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: RoleMasterComponent,
        data: {
            breadcrumb: 'Role Master',
            status: false
    },
    canActivate: [AuthGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
