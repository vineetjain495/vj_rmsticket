import { NgModule } from '@angular/core';
// import { CommentsComponentRoutingModule } from './commentsComponent-routing.module';
import { CommentsComponentComponent } from './commentsComponent.component';
import { CommentsComponentService } from './commentsComponent.service';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { TicketViewerServices } from '../ticketViewer.service';
import { CommonModule } from '@angular/common';


@NgModule
({
   declarations: [
     CommentsComponentComponent
    ],
   
   imports: [
     //CommentsComponentRoutingModule,
     ChatModule,
     CommonModule,
     
  ],
  exports: [CommentsComponentComponent],
  providers: [CommentsComponentService, TicketViewerServices],
  bootstrap: [CommentsComponentComponent]
})
export class CrudTicketCommentsModule { }
