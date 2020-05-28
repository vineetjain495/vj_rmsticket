import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTicketComponent } from './updateTicket.component';
//import { AuthGuard } from '../shared/Security/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UpdateTicketComponent,
    data: {
      breadcrumb: 'UpdateTicket',
      icon: 'icofont-dashboard bg-c-blue',
      status: false
    },

  }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
export class UpdateTicketRoutingModule { }
