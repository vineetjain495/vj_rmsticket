import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { TicketDetailsViewRoutingModule } from './ticketDetailsView-routing.module';
import { TicketDetailsViewComponent } from './ticketDetailsView.component';
import { TicketDetailsViewService } from './ticketDetailsView.service';

@NgModule
({
   declarations: [
     TicketDetailsViewComponent,
    ],
   
   imports: [
     TicketDetailsViewRoutingModule
  ],

  providers: [TicketDetailsViewService],
})
export class TicketDetailsViewModule { }
