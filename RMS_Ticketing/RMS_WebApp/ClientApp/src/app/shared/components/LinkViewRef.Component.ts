import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { DataService } from '../../services/DataService';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { debug } from 'util';
@Component({
    selector: 'link-view',
    template: `
    <a (click)="onClick()" class="link">{{ renderValue }}</a>
  `,
})
export class LinkViewRefComponent implements ViewCell, OnInit {
    loginEmpRoleID: any;
    
    modalRef:  BsModalRef;

    renderValue: string;
    pathvalue: boolean = false;

    @Input() value: string | number;
    @Input() rowData: any;

    //@Output() save: EventEmitter<any> = new EventEmitter();
    constructor(private ds: DataService, private modalService: BsModalService) {
    
}
      
   ngOnInit() {
        this.renderValue = this.value.toString().toUpperCase();
    }

    onClick() {
        this.openUploadModel(this.rowData);
        //this.save.emit(this.rowData);
    }

    openUploadModel(data) {
      
        this.ds.ShowHideToasty({
            title: 'Loading Data...Wait!!',
            msg: '',
            showClose: false,
            theme: 'bootstrap',
            type: 'wait',
            closeOther: true
        });
        var config = {
            class: 'modal-lg',
            backdrop: true,
            ignoreBackdropClick: true,
            initialState: {
                title: 'Upload Deposit Slip',
                closeLoading: () => {
                    this.ds.ShowHideToasty();
                },
                model: data,
            //    loginEmpRoleID: parseInt(this.loginEmpRoleID.nativeElement.value)
            }
        };
        this.modalRef = this.modalService.show(null, config);

    }

    //onCustom(event) {
    //    this.openUploadModel(event.data)

    //}
}
