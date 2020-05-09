import { Component, OnInit, Input, ViewChild } from '@angular/core';
import * as Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';
import { Router } from "@angular/router"; 
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { TicketDetailsViewService } from './ticketDetailsView.service';
import { DataService } from 'src/app/services/DataService';


@Component({
  selector: 'Ticketing',
  templateUrl: './TicketDetailsView.component.html',
  styleUrls: ['./TicketDetailsView.component.css']
})

export class TicketDetailsViewComponent implements OnInit
{
  @Input() model: any;
  pendingStatus: boolean = false;
  newStatus: boolean = false;
  closeStatus: boolean = false;
  

  ngOnInit():void {
    

    switch (this.model.Status)
    {
      case 'M-ACCEPT': case 'new': this.newStatus = true; break;
      case 'MANUAL': case 'M-MANUAL': this.pendingStatus = true; break;
      case 'M-REJECT': case 'closed': this.closeStatus = true; break;
    }

    


    console.log(this.model);




  }


  constructor(private ds: DataService, public bsModalRef: BsModalRef)
  {
    
  }
 
  Submit() 
  {
        
   
    
  }
 
  Reset()
    {
   
    }

}




