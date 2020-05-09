import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../shared/Security/auth.guard';
import { AdminComponent } from './admin.component';

//import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    children: [
    //  {
    //    path: 'RoleMaster',
    //    loadChildren: 'src/app/admin/roleMaster/roleMaster.module#RoleMasterModule',
    //    data: {
    //      breadcrumb: 'Admin',
    //      status: false
    //    },
    //    canActivate: [AuthGuard]
    //  },
    //  {
    //    path: 'EmployeeMaster',
    //    loadChildren: 'src/app/admin/employeeMaster/employeeMaster.module#EmployeeMasterModule',
    //    data: {
    //      breadcrumb: 'Admin',
    //      status: false
    //    },
    //    canActivate: [AuthGuard]
    //  },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
