import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../shared/Security/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        data: {
            breadcrumb: 'Dashboard',
            icon: 'icofont-dashboard bg-c-blue',
            status: false
    },
    canActivate: [AuthGuard]
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);  
