import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CrudOpsTicketComponent } from './crudOpsTicket.component';


//const routes: Routes = [];
const routes: Routes = [
  {
    path: '',
    component: CrudOpsTicketComponent,
    data: {
      breadcrumb: 'TicketSummary',
    },
    
  }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);  

export class CrudOpsTicketRoutingModule { }
