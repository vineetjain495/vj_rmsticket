import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TicketViewerComponent } from './ticketViewer.component';
import { routing } from './ticketViewer.routing';
import { MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BsModalService, ModalModule, DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap';
import { TicketViewerServices } from './ticketViewer.service';
import { TicketDetailsViewComponent } from './ticketDetailsView/ticketDetailsView.component';
import { TicketDetailsViewService } from './ticketDetailsView/ticketDetailsView.service';
import { SidebarModule } from 'ng-sidebar';
import { CommentsComponentComponent } from './commentsComponent/commentsComponent.component';
import { CommentsComponentService } from './commentsComponent/commentsComponent.service';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { CrudOpsTicketComponent } from './crudOpsTicket/crudOpsTicket.component'; 
import { CrudOpsTicketService } from './crudOpsTicket/crudOpsTicket.service';
import { CrudTicketCommentsModule } from './commentsComponent/commentsComponent.module';
import { AppModule } from '../app.module';


@NgModule({
  imports: [
    routing,
    MatCardModule,
    SharedModule,
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SidebarModule.forRoot(),
    ReactiveFormsModule,
    ChatModule,
    CrudTicketCommentsModule,
    BsDatepickerModule.forRoot(),
  ],
  entryComponents: [
  ],
  declarations: [TicketViewerComponent],
  providers: [TicketViewerServices, CrudOpsTicketService],
})
export class TicketViewerModule { }
