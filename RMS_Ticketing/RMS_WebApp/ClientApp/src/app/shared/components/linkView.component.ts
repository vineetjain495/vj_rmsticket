import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
@Component({
    selector: 'link-view',
    template: `
 <a href="{{value}}" *ngIf="value?.length > 0" target="_blank" class="icofont icofont-download-alt"> <span *ngIf="rowData?.Count > 0">({{rowData.Count}})</span></a>
  `,
})
export class LinkViewComponent implements ViewCell, OnInit {
    //renderValue: string;
    pathvalue: boolean = false;
  
    @Input() value: string | number;
    @Input() rowData: any;

    //@Output() save: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        //this.renderValue = this.value.toString().toUpperCase();
    }

    //onClick() {
    //    this.save.emit(this.rowData);
    //}
}
