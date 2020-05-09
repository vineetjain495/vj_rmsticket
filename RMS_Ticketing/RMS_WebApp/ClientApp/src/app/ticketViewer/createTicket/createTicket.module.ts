import { NgModule } from '@angular/core';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { CreateTicketComponent } from './createTicket.component';
import { routing } from './createTicket.routing';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { TicketViewerServices } from '../ticketViewer.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [routing,
    SharedModule,
    CommonModule,
    FormsModule,
    SelectDropDownModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule,
  ],
  declarations: [CreateTicketComponent],
  providers: [TicketViewerServices]
})
export class CreateTicketModule { }
