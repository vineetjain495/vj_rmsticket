import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/DataService';

@Component({
  selector: 'app-picklist',
  templateUrl: './picklist.template.html',
  styleUrls: ['./picklist.component.css']
})
export class PicklistComponent implements OnInit {
  settings: any;
  dataSourceConfig: any;
  title: string;
  public event: EventEmitter<any> = new EventEmitter();
  source: ServerDataSource;
  selectedRowItem: any;
  token: string;
  serverID: number;
  closeLoading: any
  @ViewChild('grdTags') grdTags: any;
  constructor(public bsModalRef: BsModalRef, private http: HttpClient,
    private ds: DataService) {

  }

  isRowSelected() {
    return true;
  }
  selectItem() {
    this.event.emit(this.selectedRowItem);
    this.bsModalRef.hide()
  }
  onRowSelect(smTbObject: any) {
    this.selectedRowItem = smTbObject.isSelected ? smTbObject.data : undefined;
  }
  ngOnInit() {
    if (this.token && this.serverID) {
      //const headers = new Headers();
      //headers.append('AccessToken', `${this.token}`);
      //headers.append('ServerID', `${this.serverID}`);
      //const options = new RequestOptions({
      //  headers: headers
      //});
      //const connection = new XHRBackend(new BrowserXhr(), new ResponseOptions(), new CookieXSRFStrategy());
      //this.http = new Http(connection, options);
    }

    this.source = new ServerDataSource(this.http, this.dataSourceConfig);
    this.source.onChanged().subscribe(() => {
      try {
        this.ds.ShowHideToasty();
        setTimeout(() => {
          var row = this.grdTags.grid.dataSet;
          row.willSelect = "";
          row.deselectAll();
        }, 1000);
      } catch{ }
    });

  }
}
