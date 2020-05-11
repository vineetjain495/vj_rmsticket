import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './mainLayout/mainLayout.component';
import { ExternalLayoutComponent } from './externalLayout/externalLayout.component';
import { AuthGuard } from './shared/Security/auth.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AddEmployeeComponent } from './Employee/addEmployee/addEmployee.component';
import { ShowemployeeComponent } from './Employee/showemployee/showemployee.component';
import { EditempComponent } from './Employee/editemp/editemp.component';


// Route config let's you map routes to components
const routes: Routes = [

  {
    path: '',
    component: ExternalLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/Login',
        pathMatch: 'full'

      },
      {
        path: 'ResetPassword',
        loadChildren: 'src/app/resetPassword/resetPassword.module#ResetPasswordModule'

      },
      {
        path: 'Login',
        loadChildren: 'src/app/login/login.module#LoginModule'

      },
      {
        path: 'Login/ForgotPassword',
        loadChildren: 'src/app/forgotPassword/forgotPassword.module#ForgotPasswordModule'

      },
    ]
  },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      //{ 
      //    path: '',
      //    redirectTo: 'Dashboard',
      //    pathMatch: 'full'
      //},
      {
        path: 'Dashboard',
        loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'TicketViewer',
        loadChildren: 'src/app/ticketViewer/ticketViewer.module#TicketViewerModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'TicketViewer/CreateTicket',
        loadChildren: 'src/app/ticketViewer/createTicket/createTicket.module#CreateTicketModule',
        canActivate: [AuthGuard],
      },
      {
        path: 'TicketViewer/TicketSummary',
        loadChildren: 'src/app/ticketViewer/crudOpsTicket/crudOpsTicket.module#CrudOpsTicketModule',
        canActivate: [AuthGuard],
      },  
  
      {
        path: 'Employee/CreateEmployee', component: AddEmployeeComponent
      },
      {
        path: 'Employee', component: ShowemployeeComponent
      },
      {
        path: 'Employee/edit_element/:id', component: EditempComponent
      },
]

  }
];

export const appRouterModule = RouterModule.forRoot(routes);

