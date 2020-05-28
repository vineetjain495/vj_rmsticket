import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEmployeeComponent } from './addEmployee.component';
//import { AuthGuard } from '../shared/Security/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AddEmployeeComponent,
    data: {
      breadcrumb: 'CreateEmployee',
      icon: 'icofont-dashboard bg-c-blue',
      status: false
    },

  }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
export class AddEmployeeRoutingModule { }
