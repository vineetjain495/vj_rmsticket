import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { routing } from './crudOpsTicket.routing';
import { CrudOpsTicketComponent } from './crudOpsTicket.component';
import { CrudOpsTicketService } from './crudOpsTicket.service';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { TicketViewerServices } from '../ticketViewer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { CommentsComponentComponent } from '../commentsComponent/commentsComponent.component';
import { CrudTicketCommentsModule } from '../commentsComponent/commentsComponent.module';
import { AppModule } from 'src/app/app.module';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule
  ({
  imports: [
    routing,
    SharedModule,
    CommonModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    SidebarModule.forRoot(),
    ReactiveFormsModule,
    CrudTicketCommentsModule,
    SelectDropDownModule,
    NgSelectModule,
    
  ],
   declarations: [    
     CrudOpsTicketComponent,
  ],
  providers: [TicketViewerServices],
})
export class CrudOpsTicketModule { }
