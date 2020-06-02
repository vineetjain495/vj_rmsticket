import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditempComponent } from './editemp.component';
//import { AuthGuard } from '../shared/Security/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: EditempComponent,
        data: {
          breadcrumb: 'EditEmployee',
            icon: 'icofont-dashboard bg-c-blue',
            status: false
    },
    
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);  
export class EditempRoutingModule { }
