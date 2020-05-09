import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTicketComponent } from './createTicket.component';


const routes: Routes = [
    {
        path: '',
        component: CreateTicketComponent,
        data: {
          breadcrumb: 'CreateTicket',
            //icon: 'icofont-dashboard bg-c-blue',
            //status: false
    },
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

export class CreateTicketRoutingModule { }
