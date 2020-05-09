import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/Security/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Manage/:mode',
        loadChildren: 'src/app/admin/employeeMaster/manage/employeeMasterManage.module#EmployeeMasterManageModule',
        data: {
          breadcrumb: 'Employee Master',
          status: false
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'Manage/:mode/:empCode',
        loadChildren: 'src/app/admin/employeeMaster/manage/employeeMasterManage.module#EmployeeMasterManageModule',
        data: {
          breadcrumb: 'Employee Master',
          status: false
        },
        canActivate: [AuthGuard]
      },
      {
        path: 'Index',
        loadChildren: 'src/app/admin/employeeMaster/index/employeeMasterIndex.module#EmployeeMasterIndexModule',
        data: {
          breadcrumb: 'AssignRoleRegions',
          status: false
        },
        canActivate: [AuthGuard]
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
