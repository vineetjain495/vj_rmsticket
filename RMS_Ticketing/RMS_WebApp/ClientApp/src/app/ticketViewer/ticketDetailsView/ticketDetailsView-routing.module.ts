import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from 'src/app/shared/Security/auth.guard';
import { TicketDetailsViewComponent } from './ticketDetailsView.component';


//const routes: Routes = [];
const routes: Routes = [
  {
    path: '/ticketDetailsView',
    component: TicketDetailsViewComponent,
    data: {
      breadcrumb: 'Ticketing Details',
      //icon: 'icofont-dashboard bg-c-blue',
      //status: false
    },
    canActivate: [AuthGuard]
  }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class TicketDetailsViewRoutingModule { }
