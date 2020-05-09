import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketViewerComponent } from './ticketViewer.component';
import { AuthGuard } from '../shared/Security/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: TicketViewerComponent,
        data: {
            breadcrumb: 'Ticket Viewer',
            icon: 'icofont-dashboard bg-c-blue',
            status: false
    },
    canActivate: [AuthGuard]
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);  
