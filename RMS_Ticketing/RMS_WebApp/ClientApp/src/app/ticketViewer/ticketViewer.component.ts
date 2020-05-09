///<reference path="../GlobalShareCode.ts"/>
import { Component, OnInit, ViewChild, Input, ViewEncapsulation, ElementRef, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import * as _ from 'lodash'; import { DatePipe } from '@angular/common';
import { generate } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { DataService } from 'src/app/services/DataService';
import { baseUrl } from '../GlobalShareCode';
import { TicketViewerServices } from './ticketViewer.service';

import { FormGroup } from '@angular/forms';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Route } from '@angular/compiler/src/core';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material';
import { debug } from 'util';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { debounce } from 'rxjs/operators';
import { BaseResponseWithData } from '../shared/model/BaseResponseModel';
import { CommonFunctionality } from '../app.commonFunctionality';
import { findLast } from '@angular/compiler/src/directive_resolver';



@Component({
  selector: 'app-ticketViewer',
  templateUrl: './ticketViewer.template.html',
  styleUrls: ['./ticketViewer.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TicketViewerComponent implements OnInit {

  

  private _opened: boolean = false;
  private childComponentShow: boolean = false;
  modalRef: BsModalRef;
  public filterDataExport: any = []
  private downloadUrl: string;
  public submitted: boolean;
  public showDownload: boolean = false;

  maxDate: Date = new Date();
  viewTicketDetails: any;
  @ViewChild('gridReference') myGrid: jqxGridComponent;
  @ViewChild('commentgridReference') commentmyGrid: jqxGridComponent;
  @ViewChild('f') form: FormGroup;
  model: ticketFilterModel = new ticketFilterModel()
  private getTicketActionUrl: string = baseUrl + 'TicketViewer/GetTicketDetails';
  cardToggleFilter: string = 'collapsed';
  cardToggleGrid: string = 'expanded';
  source: any;
  dataAdapter: any;
  localdataAdapter: any;
  commentdataAdapter: any;
  columngroups: any[];
  columns: any[];
  commentsSource: any;
  localcolumns: any[];
  public filterData: any = [];
  rendergridrows: any;
  ticketIdCellrenderer: any;
  public mainGridShow: boolean = false;
  public SubGridShow: boolean = true;
  public ticketIDParent: string='';
  requestTicketId: string;
  paginationcount: number = 0;
  firstRequest: boolean = true;
  secondtimeRequest: boolean = true;
  mainGridrequest: boolean = true;
  subGridrequest: boolean = false;
  localdata: any = {};
  rendergridrowsSubGrid: any;
  rendered: any;
  hidefromLocation: boolean = false;


  ngOnInit() {
}




  constructor(public datepipe: DatePipe,private _eref: ElementRef, private router: Router, private modalService: BsModalService, private ds: DataService,
    private service: TicketViewerServices,  private cf: CommonFunctionality,) {

    this.cf.GetUserDetails().subscribe((data: BaseResponseWithData<any>) => {
      if (data.Success) {
        this.showDownload = data.Entity.AssignedRoleID != 1 ? false : true;
        this.hidefromLocation = (data.Entity.AssignedRoleID != 4 && data.Entity.AssignedRoleID != 6) ? false : true;
      }
    });



    this.downloadUrl = baseUrl + '/TicketViewer/ExportTickets';

    this.source =
      {
        cache: false,
        totalrecords: 0,
        PageNum: null,
        PageSize: null,
        root: 'TableList',
        datafields:
          [
            { name:'Id',type:'number'},
            { name: 'TicketID', type: 'string' },
            { name: 'Viewcomment', type: 'string' },
            { name: 'Status', type: 'string' },
            { name: 'MSP', type: 'string' },
            { name: 'Edit', type: 'string' },
            { name: 'OldTicketId', type: 'string' },
          ],
      beforeprocessing: (data) => {
        
          this.source.totalrecords = data.Entity.PageResponseModelObj.TotalCount;
          this.source.PageNum = data.Entity.PageResponseModelObj.PageNumber;
          this.source.PageSize = data.Entity.PageResponseModelObj.PageSize;
        },

        dataType: 'json',
        type: 'POST',
        id: 'Id',
        url: this.getTicketActionUrl

      };

    this.dataAdapter = new jqx.dataAdapter(this.source,
    {
      //beforeSend: (jqXHR, settings) => {
      //  jqXHR.setRequestHeader('Authorization', localStorage.getItem('access_token'));
      //},
      formatData: (Parameter) => {


        

            Parameter.pagenum = Parameter.pagenum + 1;

        if (!(this.model.MSP == null && this.model.TicketID == null && this.model.BatchID == null && this.model.AtmID == null && this.model.Date == null)) {
          let incrementCount: number = 0;
          let filtercount: number = 0;
          if (!(this.model.MSP == null)) {
            incrementCount = incrementCount + 1;
            filtercount = filtercount + 1;
          }
          if (!(this.model.TicketID == null)) {
            incrementCount = incrementCount + 1;
            filtercount = filtercount + 1;
          }
          if (!(this.model.BatchID == null)) {
            incrementCount = incrementCount + 1;
            filtercount = filtercount + 1;
          }
          if (!(this.model.AtmID == null)) {
            incrementCount = incrementCount + 1;
            filtercount = filtercount + 1;
          }
          if (!(this.model.Date == null)) {
            incrementCount = incrementCount + 1;
            filtercount = filtercount + 1;
          }

          let filterGroups = null;
          
          switch (incrementCount) {
            case 1:
              filterGroups = [{ filters: [] },];
              if (!(this.model.MSP == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'MSP', 'value': this.model.MSP, 'condition': 'CONTAINS', 'operator': 'and' });
              }
              if (!(this.model.TicketID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'TicketID', 'value': this.model.TicketID, 'condition': 'CONTAINS', 'operator': 'and' });
              }
              if (!(this.model.BatchID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'BatchID', 'value': this.model.BatchID, 'condition': 'CONTAINS', 'operator': 'and' });
              }
              if (!(this.model.AtmID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'AtmID', 'value': this.model.AtmID, 'condition': 'CONTAINS', 'operator': 'and' });
              }
              if (!(this.model.Date == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'FromDate', 'value': this.datepipe.transform(this.model.Date[0], 'yyyy-MM-dd'), 'condition': 'CONTAINS', 'operator': 'and' }, { 'field': 'ToDate', 'value': this.datepipe.transform(this.model.Date[1], 'yyyy-MM-dd'), 'condition': 'CONTAINS', 'operator': 'and' });
              }
              break;

            case 2:
              filterGroups = [{ filters: [] }, { filters: [] },];
              if (!(this.model.MSP == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'MSP', 'value': this.model.MSP, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.TicketID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'TicketID', 'value': this.model.TicketID, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.BatchID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'BatchID', 'value': this.model.BatchID, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.AtmID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'AtmID', 'value': this.model.AtmID, 'condition': 'CONTAINS', 'operator': 'and' });
              }
              if (!(this.model.Date == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'FromDate', 'value': this.datepipe.transform(this.model.Date[0], 'yyyy-MM-dd'), 'condition': 'CONTAINS', 'operator': 'and' }, { 'field': 'ToDate', 'value': this.datepipe.transform(this.model.Date[1], 'yyyy-MM-dd'), 'condition': 'CONTAINS', 'operator': 'and' });
              }
              break;

            case 3:
              filterGroups = [{ filters: [] }, { filters: [] }, { filters: [] },];
              if (!(this.model.MSP == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'MSP', 'value': this.model.MSP, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.TicketID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'TicketID', 'value': this.model.TicketID, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.BatchID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'BatchID', 'value': this.model.BatchID, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.AtmID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'AtmID', 'value': this.model.AtmID, 'condition': 'CONTAINS', 'operator': 'and' });
              }
              if (!(this.model.Date == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'FromDate', 'value': this.datepipe.transform(this.model.Date[0], 'yyyy-MM-dd'), 'condition': 'CONTAINS', 'operator': 'and' }, { 'field': 'ToDate', 'value': this.datepipe.transform(this.model.Date[1], 'yyyy-MM-dd'), 'condition': 'CONTAINS', 'operator': 'and' });
              }
              break;

            case 4:
              filterGroups = [{ filters: [] }, { filters: [] }, { filters: [] }, { filters: [] },];
              if (!(this.model.MSP == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'MSP', 'value': this.model.MSP, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.TicketID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'TicketID', 'value': this.model.TicketID, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.BatchID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'BatchID', 'value': this.model.BatchID, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.AtmID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'AtmID', 'value': this.model.AtmID, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.Date == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'FromDate', 'value': this.datepipe.transform(this.model.Date[0], 'yyyy-MM-dd'), 'condition': 'CONTAINS', 'operator': 'and' }, { 'field': 'ToDate', 'value': this.datepipe.transform(this.model.Date[1], 'yyyy-MM-dd'), 'condition': 'CONTAINS', 'operator': 'and' });
              }
              break;

            case 5:
              filterGroups = [{ filters: [] }, { filters: [] }, { filters: [] }, { filters: [] }, { filters: [] },];
              if (!(this.model.MSP == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'MSP', 'value': this.model.MSP, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.TicketID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'TicketID', 'value': this.model.TicketID, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.BatchID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'BatchID', 'value': this.model.BatchID, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.AtmID == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'AtmID', 'value': this.model.AtmID, 'condition': 'CONTAINS', 'operator': 'and' });
                filtercount = filtercount - 1
              }
              if (!(this.model.Date == null)) {
                filterGroups[incrementCount - filtercount].filters.push({ 'field': 'FromDate', 'value': this.datepipe.transform(this.model.Date[0], 'yyyy-MM-dd'), 'condition': 'CONTAINS', 'operator': 'and' }, { 'field': 'ToDate', 'value': this.datepipe.transform(this.model.Date[1], 'yyyy-MM-dd'), 'condition': 'CONTAINS', 'operator': 'and' });
              }
              break;
          }

          Object.assign(Parameter, { "filterGroups": filterGroups });
          this.filterDataExport.push(_.cloneDeep(Parameter.filterGroups));
        } else {
          this.filterDataExport = [];
        }
        
        
      },

      loadError: function (one, two, third) { }
      });

    this.localdataAdapter = this.dataAdapter;

    this.rendergridrows = (params: any): any[] => {
      return params.data;
    }

    this.rendergridrowsSubGrid = (params: any): any[] => {
      return params.data;
    }
    this.rendered = (params: any) => {
      
    }

    

    let ticketIdCellrenderer = (row, column, value, defaulthtml, columnproperties, rowselect): any => {
      
      if (value != "") {
        switch (rowselect.Status) {
          case 'M-REJECT': case 'REJECT': return '<a style="color:dodgerblue;margin: 10px; font-size: small;margin-left: 8px; float: left; position: relative;cursor:pointer;"> ' + value + '<br><i class="icofont icofont-square" style="font-size: 15px;color:limegreen">&nbsp;' + rowselect.Status +'</i></a>'; break;
          case 'MANUAL': case 'M-MANUAL': return '<a style="color:dodgerblue;margin: 10px; font-size: small;margin-left: 8px; float: left; position: relative;cursor:pointer;"> ' + value + '<br><i class="icofont icofont-square" style="font-size: 15px;color:saddlebrown">&nbsp;' + rowselect.Status +'</i></a>'; break;
          case 'M-ACCEPT': case 'ACCEPT': return '<a style="color:dodgerblue;margin: 10px; font-size: small;margin-left: 8px; float: left; position: relative;cursor:pointer;"> ' + value + '<br><i class="icofont icofont-square" style="font-size: 15px;color:red">&nbsp;' + rowselect.Status +'</i></a>'; break;
          case 'W.I.P': return '<a style="color:dodgerblue;margin: 10px; font-size: small;margin-left: 8px; float: left; position: relative;cursor:pointer;"> ' + value + '<br><i class="icofont icofont-square" style="font-size: 15px;color:#FF8C00">&nbsp;' + rowselect.Status + '</i></a>'; break;
          default: return '<a style="color:dodgerblue;margin: 10px; font-size: small;margin-left: 8px; float: left; position: relative;cursor:pointer;"> ' + value + '<br><i class="icofont icofont-square" style="font-size: 15px;color:white;visibility: hidden;">&nbsp;' + rowselect.Status + '</i></a>'; break;
        }
        
      }
    };

    let mspCellrenderer = (row, column, value, defaulthtml, columnproperties, rowselect): any => {
      
      switch (value.toLowerCase()) {
        case 'icici':   return '<img width="50" height="55" src="data:image/png;base64,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">'; break;
        case 'diebold': case 'diebold_cms': case 'diebold_sipl': return '<img width="50" height="55" src="data:image/jpeg;base64,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">'; break;
        case 'hitachi': case 'hitachi_cms': case 'hitachi_sipl': return '<img width="50" height="55" src="data:image/png;base64,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">'; break;
        case 'ags': case 'ags_cms': case 'ags_sipl': return '<img width="50" height="55" src="data:image/jpeg;base64,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">'; break;
        case 'fis': case 'fis_cms': case 'fis_sipl': return '<img width="50" height="55" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVsAAACRCAMAAABaFeu5AAAAdVBMVEX///+Nxj/l8dTP5a652Ymjz2KJxDax14O22Y6IxDLM5LCazFeGwyzm8tj7/fer1HaWylHy+Orw9+f2+vCEwibM46i12YqgzlzZ68SRyEa73JSm0m/S57nG4aLt9eLX6sHA352o03Lg7syn0Wiz1n7B3Zfk8dXexvQLAAAKBklEQVR4nO2d6WKiMBCApUoQDYoCnkittX3/R1xEq2QyXDEHuvl+7mIln2HIORkMapktgo+P32A5q7kk2KTDYXpa1vyZYPIzGv1MPuouSc7f7n6cRtWXLJOvrbPdH7L6e34NZrnYG0GV3VOSDAuSSVWZTyNvVOCNPisuCb6mazdnvZ7uKr5p8RX7xMkh8TroWJD+EX2UWaCXDG9mC7sb9M8cz6M7Hm7uELp31ri5lBZinavdg3Ch+sHigwV56KOS2YtcrFruRiyI3N3ULRMisSONnTLx7unimST6gPChcAhITtwlP0DtiLcyZNW67pR7Rj5YtbncVFIxjcCp/eCq0yd0O0ygldMZuvVg5V6EQK27nsNvcjj8mpde34ER4QJ4WYGIUACrEzR7kQuiwmgN3bpT8DNOfN7tWHqRtYGohRX3xKsdJmx1Crhqm7tlA0cEI8Kl4nrsN4V8vXWIilJrYYa6ZWsconaYsP6HSL0dsS/5DeLWXTOXLCjilta1lnsN/ybj2mEzJCQMh2w7DDYSrjCXHPiQkAcFJvxsMLf+RFXZVYOFW9AMw8ItDLgeppYNuDvULVMpUz7c5jHhZZthuFumNrVxi4Rb6HaMumViMvIqe2W3wjGBbWGhIYF9Uf2gbpm+2Sfm1n/Zvhn+LmMbAZhb0HtIMLdshUtRt8w3Zei7DO9hvwKoW/YSvuuQu2V7xics4LJhI8PaCV/sNyFqHfq6nYesKdzml2AVl71khrg9g77bHKm2oAuyI5xaspdfZl1gQQEOs0z4agvHsCa8XBgnT1yfFzRv8+gPhxMcJ37lccZlU7XNGxNcxeVHUPhqyz3LHoy4ITfkk8CI66+kFdQEAVCLVJQAyuUHEJegGXbm/8zsm5U7RVoAc7apQGDNfjWyJrWDwW9ZboKozf/KuUFtLndflhuijat5ueZS95ly9YJyB6JiOmwxudutmHYYRIe73fMPOntxmXj4szt1+THggtT/q7p+fOxclB6yuAaG35qJxixNLgxP1W2iLBmdc7xD9ftncXCnF+ZVM2qXvkpIL2yPr9v6AsxmNZO8V6JF1HRNlGVNRqIsyBr+TJT9Bm8j1mKxWCwWi8VisVgsFovFYrFYLBaLxWKxWP4Dot9NzVT9CzPLTmly3I1XnjxWu8/GGfo7wTelPqXTpxbeLk6To9QisOVJOm/kXn7u9ts4L5lPZEP9pOVNjOPbStGY29rXkiidOzGVX4YSfrzv8GDNNt72cj/Y+mIp0HaqvMeCMP9bxOxmT311pbhD/LZV93MeU9U31Gq9J7NZmh47m023ysvxB2kT5pY7ouWG4ha/NHsfcfsoXfAbYlsmFNGirgTzWNMvTbzGmzmxbjpu3Fvx685V4jf88kttZnO2jXaO7M2QLq+zZYjtoVIIrVjmemOn0WyuqvHdOge3M22v9qS30joNT9XJ0ftLNz1EvNuwtdqNdrWOX5M4w9N9O80xQditAbU1MWGhOzy1eZeJug00tg/uVD6GJ23twDst2mCCbiPtZXFqUpKk+p8h2iI9iqDbbxNunYpqmxhQ26Y9JeZ2YiAiEFKx8aZZrezBDUpadQOE3M4qXhyyy1DCj+cV7clJjVriU0q27ny1Gkvk2HLAUMjtCosI+a/57cksQpndpGIDXU0rm1BnPsHTBupBxC2WQojQlZFN1suqR4iSneld3yJukcwA9NvQtMUWNxt/9yDDhohbXq2xHJkeWm2pa7rKFgi45TNfxcPmTykB7RwSpwd19oKAW/gRxzeWmQl7p9JzxzFoZQi45R7D9uM7klkhEYH2J3Vcd7dccib6q+E+W92J0zjEq5XubmEyPGIsn8WeDwl+L15iN7q7hS0wvzozg1qCvicy6u72C7o1tSCHr7bU1M+M093t2un6CTXw0dZcewWnu1uQj7jT7KVMxly1NdZeqaC7W9DLJIZyaPNjcbRvZ38879ZQsrZPGBJM/cjVPB8TDOVv5N5ktC/dsTvd3bqgTM1zySqYcckOj0buo47ubuEnqJHRZy4tcg9Ty3Z3e4TtWyMdeA/cRYvlAtrp7parMUaaPnBM3NigRg3d3S65sRoDR/AsuP6u/ntoRGCMEZaq3ZpjucCHp38NsIGQW65DZKAZ9gNfqD0aWrwj4PaD78hrf5HAdT1d17trQWQukp9b9XUPKsBHp8OyYX2IuE34qRTiaH0oYc+hjy0wMbfokiUapvo6EXB80S9PNM8m86lMXO7UvZYIrVk6oKsC/JiEkoqz3s93aeURsIPBL3RbmjWf+LJ3uxG6FWo9i61jxFezyCwOIT71Xe4oxxtwzq40vLhTsmA0FlnyIOZW1zYSP3bR5xEeYPUY01C1zDmuO4Jaqlt0ZYAS8ucR6fbBt+mj96JqzTX54u9CkdvBVN/CcRpys7dwvOh+xiU3Yi6NuPs4m6hbrRseuBOZuZWUf//BT6LJQuDoMeE9UFULX5Xgs+eu8QqriiPxFroPpYrv3csUpifgIISZaKx0C4d15VG3b1C620G01RkXaDnoVro9KnuaBI7WfcItOOdINeUp8kq3yDomSQgcCf2U27wNrzMuPGJupVtlG99ETih9zu0g8vTtqyePwa5qt+hR2RK+W2Ti6km3+SttTnW1GB7rvardDgIVr1h/KjI+/LTbvKocw1hPbLgvAa1xmz9Kl7xVMqGCRxZLcDu4HKT2RajMIlX8VH9Roc7tYDA7TaTSvYUg0+2FKNikskqTrKZoHP+bUq532xfkuZXMcozZvS2Qsm6fJHL5l+StV2/dPs2Ka1Ddpuut2+cZczX3OtRn3UqAW2V7HTKxbiUQwYp73V5h3cqAm1IuxkysWxlwayGKaUfrVgpwtLtYVWfdSmEDKm7xMrNupQAHDYtxE+tWCjM4Xf4zsG5lASwWK8StWzlAt5cBcutWCrD3YOOtPGAy2GINhnUrBdgxK5baWrdSmAKLxTIF61YG3KYgevlX61YGMIPLdTrSupUAl8T4upXfun0ePmP8dYmCdfs0GT8ZeZ3otW6fBVlgf1vhYt0+xwJbgXrL7vEfuJ0pI0u/sKUff0md3t1t4G3VZcWvOMnvLynNm7vVuPD2zv0IzPd2i6wnUs/95t7a7c6E2sfxQO/sNjJxClT82IX0zm6HBqot/Xl8/zu7Vbf9sBJazqn5zm6RTN+KYc8Lg3ulzeSEbAIuW1m3+hTMi62cmD2AHOSmMJbfuB6QiaBlNlt1WztRCAE5TSJ2+6OJzHotyMBdtkuXpG5rJ0bMnzRyZh4cgf2gWmA3abYNXBoDLg2RPUhM+gahZDI6YFJXxm23UkWaNviTeI2LCx5dbmOHUDVTyusTt8+/sNgqD7nEp2RXmZ99OS3OjSU+6dehDixZeL1L2i033WEbU3XEJJxP6hPfn1ZTZzvv52vswcYLnfDc+S4XgTKyqGZz8j+YVNXRxcTY5QAAAABJRU5ErkJggg==">'; break;
        case 'fss': case 'fss_cms': case 'fss_sipl': return '<img width="50" height="55" src="data:image/png;base64,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">'; break;
        case 'ncr': case 'ncr_cms': case 'ncr_sipl': return '<img width="50" height="55" src="data:image/png;base64,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">'; break;
        case 'euronet': case 'euronet_cms': case 'euronet_sipl': return '<img width="50" height="55" src="data:image/png;base64,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">'; break;
        case 'ccsl': case 'ccsl_cms': case 'ccsl_sipl': return '<img width="50" height="55" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcIAAABcCAMAAADK3UXwAAABg1BMVEX///8Are/KzdaWnK3X2uDl5ury8/WwtMGjqLe9wcz8/PyJkKP5+fj5+Pj+/v////z4+fX09vjv7uvd3tnz7/L///epprLz8/Du7evw7uy3trnWz9Hb39PAw8nk494+SVTj4s3Ow8bh594uOFPz8+qXlpi2u8Lo5uje39/Nzcn+/vHLysq9wLvd3ubP0t3f4ei4v6muqaiuuaqOm5+Ii5bU3Md+jJRSXVKalaKUoIBMTF1gbVuGf4jAycBLX2ONkZE4Rl16gJFze2SttJQ7PlRfaXk1R1ydlZGOn5B8hYBDUGJqdH5lYnc4R1CKjnZVaGG9v65phGxycoe9yaman4w+TklWWXOprpcoNVairapGUVppgXVKXW5KVUSAim5mZWQyQktyd3ZVbW9DRGZ3bX5EU3HPz7HFs8JTWmdgZlVacoNbdnPHyK1pboxRT1v6+9zX3LJ8g52UoJh9jriInamynKqVo8KruNBvh62vq5PA0L3k48Ld3JfHx5q2sImXkKwvSHunZYmCAAAV/UlEQVR4nO1dCWMaR5au5migaExDyzTikoRAgGhLQkYe4hgdiaSRhJ1oHR+Dkh1bk8TW7HqTWJN1duydyfz0rfeqqi9AR2w5G6e/xOqjqqu76+v36r1XB4QECBDgA0Iqurx8I6KchaXlzK/9lAHGgWbGENc6i8qoSn/thw4gQKMuYopG1jRTE8ihNJXNGx4ibwQi+SsjZctesaJd4jqqZ0sOj8uZa1f2hAHOgC19fvLSrTYTw5UO2/u0RUhttSVTSje7vYg7q5aVNIYCcXzPyIjWbtqtM9duFWCj/2G+R8lHt1NE+/gO6a/3GiJ99aje2diMMfb7t7bC8izRq1Iag9bxPeGa0J55fkjzrRbSkf7y6+052H6y+ShHPt3OE/3znVu7c/K60gwTTLLyR5reO6h39g+YPFYXpFBKcYy+55f5HeJadAGrOiWOSzcHJ3dPviuy3dl7hZUZIPOz28bnhcPdZVL7w+ZgNycvXdlt8p3Xuyw7/bf7hOzN36WkWubnaTVg8eqgJni9cv5aJh6ULKb4Pt0uqKTyEOTri+0G2b87RciD7enq+lebRVJ72KOv7z0Xhaw8BaKr02TvEWjM1RNS+/zgPhPV+SQhBm8M9VLA4hVADaG9QVK4bavsFM0SoIxRUn3YW7g52Kyzsw/mu92d+SQlj1nC7MM/zbFEJoJfzBR4G1f7fKfcHh4Vyd4JM4Dol1vk9UF9QPe+2i2T2vrmTnIJs9FKwOK7RWbB5cZ1pvFc+sFMt0Fq//4N4+bPu3c6ReOoy6TpUd0qHs7MkWdPGLeznQrRDyss94tTLrWktrGzM4Ck9a1I5PSgQfbuWwPrZLibJyubzfxw8waptVFDY8u4FFg37wKqi79cxa7TF0/nH+W0L0AzvmAiR42j+2R2Bg2XEmNNm1T5lKdUHx/vdJukdu/54cFBa+8OoX/5OqL1NyNMxzIKwUmhGAIISHxbRJKKUh9yAgtTcKbSwlrVP7nd3h8MH36TIrWjnVs7d3tTpFa5RIVToKn2wHzxNJd9WCClza3Bzrc5Up0ps49gnSvRGtxWffdv9TsC+A49lbdMOW6BPjva3UIH4tnT52TlyeY8E7y/1wvNlH0RTamNSMgfEHXQbjWjqhOB05qp6v40/fI+1SoNQvfvg29yN0VW48CdDldkCGUu43t+9w8CES55aCEWpCy8mOns3cuxpk3/mGm82uM7ttNHaKY5mbixaNqBbv2QuxUl8DbW7rE/pf1HcZBF3ckeKNXLAYJnBSZba2xbt+MoTGs+J2tHJ8zEfDbjsGd6QtfFRk3XaDo9Wiilmm5mK95AdyjqcNPfXiLmX7Zgd/XgeCcBO1knaxBJvThUQSB5DZSwrdkqoKmY/us3zdOTwb2tPK1w5Wk64epG6qwyR6DlXQLJI6T63ldb//EIvpi13TYxsjVsgKsBiZdFKsYIRD+gJJg8PLr95DZK3UfzB/UKLVnoXAgPTlEqk7qXzoeWlb2KKI3VQwtYqx31oPz9b3egTaSYnjKVwFu8GBLMeBFtH6MQNivbvbyWRZY+nS+IbJoQv/w7aKNsTTwljv9zwL4cuvHtVGXjPlgyKIh88/Z3+9ABjaDT9j2Gff3jr1FFzp5Ok7X1IiZw5dYcqzrpdY01eOWFhUKul9wS5Lzc6t68GY/HyuVIVB3nN4pPAuNstQfwCKsHd3tRUpomJjdr4JwSGKfnICPaPgkd4tnpP8/juRfzz4lmEmkmjriBNFVpl4f17ljz04eXvVy5mfGXwE0X0Xmxsrusre6wO/cPfp5C8uAscxaXrubdPwyAP+f1pUvKcyZ+f/26nKKVT26jeKLHbXgNTqoa1s2LUOdDMr6w5LGCeFAG+kHo6qNwg5gaKZ3EO4MQPApyCw1j4F9MAFRO03/yAeiv2mczj+5ufgMMgk3h0rQA0xj+AvZc6JXdGlnDc0yfVvYe5ShZ2/wvygTxBsghz1DC1ACjiIz9vHU8Sdce1OdSQoW6adaq1sbb8SfQTTScm2OzyA5bHa30bXj/fujmQYO5qLIVZHrgxtXWxW8SLhHU1LxRtMfDrCnP7UxQsy4J1EpvKX4+xJ2ywVwCmvT9GCF7u70GOxOyU+FLurqq+I0CnPmGO8riaDbb1C95CKz16++UP46YfQOIC7F2WQcaB6jA3c8bcOiH6qnHKcOpIDReQMVBI2gbq3rp9Ar4Q4QjIgQDegGNz5XvGiB33icOOPRBXc6kVDUjRc8my+TVOsd1qGyssqtXxR+H1JhVfk+9ArcXN6808zwUFHB4JoQexcBWM32dD62fFomzD66WQCSRSyIYpw3+QFP2o3Esa4GDeAZEu4N2Iex8rzg6tLp39QQyvBTW5xpaNa5WmO217VxBoGYSsL5QhwrN+oMUwex7kECBMI8xgDLNK4ohH6YqZI8PJX//dfMbAVSNorjMT9H5d/0LUb1/vGr+MEjHm8QapwqUOkRnNBdvNOi3mABWSx7zU2Lxo6tmTqCgciXOBZEK0sAZpE6MJsAZsMOUXry5cuqaTH0/Zm0dkV2EPAiTlmGGEiiGgMILQNlWlIr3lJZqrE2qeMOoNLJmStO0VErXUzC6QoMDOAZMT+fzFUTTMEqtlmVZhWGnU6/XN255SyoUi81V6P1nwtbnp0Kex8gyZRpQeAEoTi1perY5Z/nCaEbenDhQ9NKgmlnLl0qt/uFwuNGVHVXdnOz38HKIwvmubv3hwlSgT5CahtXxdP3VR2ZWUyZj2UbTaLfKC4VCoZPLDYfxHCAez4Xj8TDsFmKxRDsSaTaj0WijkZ9WQTI1SifOBNbMitGyVoeCxETU060YUHgBLNaypcKY7geKIpNvFttWoXDBnt2zsZVM1us9xnU8tpAIRaINVfOKt5bl+vTlz/HEkpicH1B4DuhyeVL0OvcOSLsQsUx4Y4lQKNIAzl67k8KJJZVeZkL47w6ZUHi0RuudToFtup2OdeXshdp9f/dV0p/nZSIaDEUcDxr60V1TdzqFVmWaR5SZd11nm9mJVT8quHNqdky+cwB9ytgDUk4xlZ1lTWIhDgp7hMafZI9vAo5ibCeO4xNjCnRQKWi3IiITkuBP3F0CD/ao2O+t8NwSEfsKe22IiHcb5g+DjymvlMIQieOtnOcJuwsIizsRfkt4Ezs56tq3ZzjEvFuPsVd2nrleMExPk/QRxrhdY+N9mBtNasCQjW5u4iXjAEG8PflGNjSglmr5Zr/g0hF/wzBbDKsozF9cvH+YhNibsaw4EmhCEuHn7BJUBf8pvIZ53eFfPBnmCWF2IoH/4xlVbMOiLLaNxjFTmIgtfBjcAIuzPMg1LzMkc7FnDAk/Sb63zBbH78l+lTB3qCCX2KoeDjVbAudGx2Qzgv6bbV5Mqvo7MCnCf7KIHvllGMRwXhX7sabct1919UhkmgtSJF+pUHySVV2ISOHB+0VdPCkTksJSckQJcciSEBWmJFSbQuKhMByCKg+F+ZmofZuwoECFh8HDUBS3kB4H4eMqIAxPkyDRcFTmUiAxFhtHoYJize/BroBNLCbeKULsB5SQ00CL40z9WR5smxheg4HXNf9JHhefHRlZszWuhKHiBGRBDj2DsF4LgZHIyjZZxfpAJF08KS4pTIxPislXlyVgFlVUOhOACRTiGL8QlzgiZBZ0sKQA06DXGnYUlERMj6uS6rgcIihySfU5jkKuQvndidzAe4sM+G52tUhHegyBhKzw+n08iUIl1xhpKO05M9R7WZtWPceFFvsEKKmeugZcLJj5lutTei15skG5zfMqZCsSruEET2EhTJK6sUn8OlmCzAoUSjG3dch4ChVBYVgWprqvCsmr+U6MP0FYEuHLpY5SiE+RHEuhYlMYdjEmwllKctz47Mdcsz2bSKGrexHRLboGo7pWeVJgSSHi6XBkzVyV00UNqcL1oUeVro527XIKf7IpTGBNJuHFVF41sgEZn6RI8R1HYUTh1oKorig5WwoVW4zwKOaSQsGOowc8FPJc3J4apRBLDp0jhW4KXdZMrzjl06Z/51KY/mwyhe70pvdyl4rloumxfZIyW5XXL2Z4bbkHqo7M9I1yOfkJvvu4bHakGYL16GoLxyapiihUlpAUrSak2laMXanjKZRtoSyLPUdEEeaMeKgY7ifEe4ovKkLUkCpzsVZNdVMo21K8NjmewvFtISFNt0PWKxQbjlH6QnQ8jbR3DnKQuQY6MzcixnZ8XPZeeVSrOMldkLL/Wrxr0n2YL3MC/+eGeJ8Q2pLcIJQ9nSFpMioTkhKK/cljCSGgMsnz4tZTQwluQiZ8FAoVG7fNGd4scqbCsi1EqwtnZMEJFdgMC4sUBVCVt1HwucKSQhWtr7EUquIBE/4Qsup33buduWKz0ZhizRUfSnqGKt1CT602O01G8ZmXQVLzjH7jpyEI0xsZSg5YtYf9atnIwkt+0SuuW7l7FVY4RULxwB+5PFxkfFIc/oRdJQj3LMJtjxDUHffFopJop54VOWSApSrcVEF2RaY434ZhG7VdFIL+KSsOaVNCcU/tqfzjcK4DXzYSIvY9+C3jdi7pKPqtBKLPjvgGEly2zhr5BIO9CW1YLX+p0tJxiWfaJYhb/NYtsR7RyDNBzKa8sBBPvrQvSTjj8SMhprJCIaaZ2B9W9eyI7akqHIUiZEJSROWpdgmwuA6eEJsoXBHBixH8aoLlhTAXghcjE0O4jfAkcTVmj2K6LA43MhfsROQtsMiI+COyinsQsRG5ItGQ8wY+1H74x9/HESRnFeqGNZHGHg+iNkYK/chPIbaH3Tz6gB7lmR1Z4MI/3jEZxNfOxVpLX3zzbMSDcIhJT5bEEao4sBHNeU71oXNe31cst+xBNp8p1XeXnIw1qa8vOsAYtJReilxPE2269GzFFfy0zfwzrBpPPheq4P97u5H2gC13rwOf0KR4lYPdT2EZlWn4NvrBxLTzAUuPNNOLuJ8mi9+/eWENu27pmkihSlfGDJpCVPupmjfmoq92BBk6Xwqz6pd2gmJZbkcaqmQaRmW9q/f8gIFLIMx9D8MOnWmg6R8U5aWQr0kU4uIU2YnlTqp9bYOZYZ0FlfsVeXeKXysDyyES4DyYGLLs6bB/3T57HcxKbt3TUfZynULrvBVLPBTWDLmnCX8Uu348ShI+Fc+JEowIDgZwnw8YawveuMGEEClMz2JFwqh8vhLGp34GxzmDI0hXXXwcKjm+Koo9uztvthd+ZHpUE7EYe6DTrDB4QEhZQx2Yo+eDgkqsMc8hpwODafJGOPaL/1R4U1fyMTh3ZnljwVRiFxo46aA0RaG5rBC9qtDMRBzrmIkETeGFcIoKkwsiw6IUB5L+X7bXvTHSC3i5RZ84gLuK+BqSTS17U5gyJaRMl/e8jnEI7lsAkzaFqWgiWAvKQSIRcf90i8XFCgTx5ylgUG0IiVhchBBbr+n9FZjchGLPBNqf9QKMBWaWKff+wFKBVVJ0266pgehxbwPjH6ayRDPRJXHjYL69DdHfm3wVC0WW1UwZ+3AJF8S5BwdUtEOIxX/4G8KLtYQjEItwK7ioFC4bJD4FzSYMYgigbSs2W7ajH2oGK5V6ADFTzxAjUTv6C1mzmmL77IveYHdvNJ52QVRblVLBdiLyfC/LW0aArcAd9QniHwGFkQ/WLfGBr9qlZStNo9W2rILduj1TpAOedxq9xWdOmLT3lnc2+0Z+ejrfaLbaoSLX0PybAC9eBt80vxWjBO3gCFLJsU6zZ5ECBQYH8t3FN/8UFI4Lp10G/rFvC1wBaI4I8lu7taYZiOBYsAbx55HWxdvQgSDOoVCmma34BkXxeeMtY5buWE9BFIYTjD3l+j6lgMGxWB618Zix4T3RABJVEUAltTVksTdm3OLFYYthuXFN3lUZcVSozWEQJj0DKlOmCc+vaI3p+gMSlZp9qM+KXqnnxfyll5XVzIpY+SBX0mWBilShpkcnSFKVwBI9EzDixmFt1j9PlAOXY17S7An4es3p688ttIuNi3CpZQ05zKMwW5P5uQeI3RJGZ3DSdfoSI87yRb/05X4nAMtUWjW1MbVFW2D6U5QdQ0/bXRnpxcXa2orHLoklipFGfjolARN/NbNWNSx7iE6u3HQN/BerFPGD0/W2mt8fyE4m5V+vCA+bBiJ4HmjM9vRmRyk0j09O8PeXKI/PtGreVUk1c/ZNy7rA0lC5dtE9YNXu+4CDVIs1wK0j9q1kZ9qYHP0RGTSCtYIuBhDEhFwhy9cWHm6bxlMxvInKJfekdSjWNYGdNKEaztXt9w8ta7g6HBYK1gJDud1saN75gU7XFRzpTIEOIDS7ccy+mCc4rqasKH/j+jvosL8YaEiapopvGAStzHTIJ0wySkKCVDnHyvkt0everuIzoTliydcLo2Rlu5BPgRlsHnWs4w5jO6UAg1qgQy8F/K00MYsi6XSj147N0kxHp6S0PSg7AmH/Rkwlu6hLf+NsUNOlVEX3YMWqM/ErzRQ6xzCXkfRP6iCNMMr8FUhgoEMvBxjdmpviXUJ20CY7Y5HT25ToT6zWk2OP40YbvsZO9S+C72FNQuhgWOxw/2T+LqzXvj/fyRMTCgd9a+cMCLw8cLxyg6s6OWzpcGYAv8Z7Ot/Na4ZGsnXDc4k6hqRJ8PgdG20mhOaXO7Df325bt06wvU05BAaN4C8CtnMFrEK54HLFajE1etLeOAHyhifHd0Y9Rwo/Ucj+S/lZU5lopfwuozFkJZ2i5lzdBJ2tf35wC+NseM01+JQCCfzlcIlV3LFr9k9MUmG1rT1pkX1W+Vrnl4XXDNbmaet/YiVYd+C4dA97mqvY+OJNMVsQDn07ZHD2RTyKc1EFU6XjgzqETYztHTBASG1mmvSZ5jNFPFXLj58cAdANXohVYP/mNw1z/WTAhHsHp2Ps10Uu1SEwwDtAJA4TIDM4/5CLIu0/gbbqtN46gkqvfEeNI6ZQT4eYaJ3MHGxkYSZuvV6Hn9zO1rttWVhrlzef9S78yv3+sTEYHmhEO0ZFnQX5u6YIDRrg3QNFcQHVHAZo9ivkGH4KvXKSXYdJM/tog1jMojSebjBXfH6rXj9NEf24fvpUGkTGU87m8BaT2nvW8WCjtc3Yr0hvn8tf4ABeGa4tYw0L28ZkrSHIVPYJakBzHRQpPWLsEcMCtgoN4LvytEUNqVqzT/kMKYupT7reMebr2YEwa2WUJmj7rhgZnOFYFv4+Sk9lG6PRrQHIZmtbTi+0tnd2duBguHsgB28Q82kHt60ddmZokRYviKoBf+8T3MSJRaTy0+tox5yC+BFjnglgpcDSTnd4cjZrWvOSV21mYMW7FqkMbefCdj4C3+99grOoLLiXxm6hQqT789369gajcH/35s0ho251pmntSveRHh8Mujl7hlNA36+JTJRPGo/Hyk3VtWCoOTy+BXYo6Xdv3TrusxMbJwNn7rYIu1GXy/m+nzyAG2rC5fwnGhN6652zNKNlXOSNLFEb4FcBzSwn3Ms3xMv5lKapU4oKmJpSpvyRNiAvsFv+/4Gq0aVE/NUYutzI0MBnDxAgwAeI/wPJA/CC7CA/DQAAAABJRU5ErkJggg==">'; break;
        case 'tsi': case 'tsi_cms': case 'tsi_sipl': return '<img width="50" height="55" src="data:image/png;base64,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">'; break;
        default: return '<img width="50" height="55" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAALVBMVEX////+/v40NDTp6ek6Ojrn5+fr6+swMDAMDAwGBgbY2Ng3NzfX19c9PT0zMzPkhO84AAABV0lEQVR4nO3Si1EDMRAFQd3HZ2Nh8g8XDFG0mK5NYOrt+Jived9XNc/HmM/ruB0rut6e+3hd21jYNcc8xrb93Hr+Cs9xv401A3+NY479GGPhPz32d+FWIaxCX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0LfPyicyxeuv+E/KVzZNcd8HrdjWdfnPh7n6/zaVzX3xzdSWxXL9dgV8wAAAABJRU5ErkJggg==">'; break;
      }
    };

    let contentCellrenderer = (row, column, value, defaulthtml, columnproperties, rowselect): any => {
      if (value != "") {
        return '<a style="color:black;margin: 5px; font-size:12px;margin-left: 11px; float: left; position: relative;"> ' + value + ' </a>';
      }
    };

    let oldTicketIdCellrenderer = (row, column, value, defaulthtml, columnproperties, rowselect): any => {
      
      if (value != "") {
        return '<a style="color:orange;margin: 20px; font-size: small;margin-left: 12px; float: left; position: relative;cursor:pointer;"> ' + value + '</a>';
        }else {
        return '<a style="color:orange;margin: 20px; font-size: small;margin-left: 12px; float: left; position: relative;cursor:pointer;"> ' + value + '</a>';
      }

    };

    this.columns =
      [
        {
        text: 'MSP', datafield: 'MSP', align: 'centre', cellsalign: 'centre', cellsrenderer: mspCellrenderer, width: 50
        },
        {
          text: 'Ticket', datafield: 'TicketID', align: 'centre', cellsalign: 'centre', width: 200, cellsrenderer: ticketIdCellrenderer
        },
        {
          text: 'View Comment', datafield: 'Viewcomment', align: 'centre', cellsalign: 'centre', width: 650, cellsrenderer: contentCellrenderer
        },
        {
          text: 'Old TicketId', datafield: 'OldTicketId', align: 'centre', cellsalign: 'centre', width: 200, cellsrenderer: oldTicketIdCellrenderer
        },
      
      ];

    this.localcolumns =
      [
        {
        text: 'Comments', datafield: 'CustCommentsView', align: 'centre', cellsalign: 'centre', width: 500,
        }
      ];

  }

  myGridOnCellSelect(event: any): any {
    
    if (event.args.datafield == "Viewcomment") {

      this.requestTicketId = this.myGrid.getcellvalue(event.args.rowindex, 'TicketID');
      
      this._opened = !this._opened;
      this.childComponentShow = !this.childComponentShow;
    }
    else if (event.args.datafield == "TicketID"){
      this.ticketViewDetailsCallBack(this.myGrid.getcellvalue(event.args.rowindex, 'TicketID'));
      localStorage.setItem('OldTicketIdView', 'false'); 
    }
    else if (event.args.datafield == "OldTicketId") {
      
      if (this.myGrid.getcellvalue(event.args.rowindex, 'OldTicketId') != "") {
        this.ticketViewDetailsCallBack(this.myGrid.getcellvalue(event.args.rowindex, 'OldTicketId'));
        localStorage.setItem('OldTicketIdView', 'true'); 
      } 
    }
  }

  ticketViewDetailsCallBack(requestTicketId: string) {
    
    
    this.router.navigateByUrl('/TicketViewer/TicketSummary'); 
    localStorage.setItem('TicketId', requestTicketId);    
  }



 

  onPageSizeChanged(): void {

  }

  onPageChanged(): void {
  }

  onPageChangedSub() {
    
    this.subGridrequest = true;
  }

  toggleCardfilter(a:boolean)  {
    
  }

  resetForm() {
    
    this.form.reset();
    this.model.MSP = null;
    this.model.TicketID = null;
    this.model.BatchID = null;
    this.model.AtmID = null;
    

    if (!(this.mainGridShow)) {
      this.myGrid.updatebounddata('cell');
    }
    
    
  }

  onSubmit() {
    
    if (!(this.model.MSP == null && this.model.TicketID == null && this.model.BatchID == null && this.model.AtmID == null && this.model.Date == null)) {
      
      this.model.MSP = (this.model.MSP != null && this.model.MSP != "") ? this.model.MSP : null;
      this.model.TicketID = (this.model.TicketID != null && this.model.TicketID!="") ? this.model.TicketID : null;
      this.model.BatchID = (this.model.BatchID != null && this.model.BatchID != "") ? this.model.BatchID : null;
      this.model.AtmID = (this.model.AtmID != null && this.model.AtmID != "") ? this.model.AtmID : null;
      this.model.Date = (this.model.Date != null && this.model.Date != "") ? this.model.Date  : null;
      this.myGrid.updatebounddata('cell');
    }
  }


  addTicket() {
    this.router.navigateByUrl('/TicketViewer/CreateTicket');
  }

  getWidth(): any {
      return '98%';
  }

  closeComments() {
    this._opened = !this._opened;
    this.childComponentShow = false;
  }

  downloadFile() {
    this.downloadUrl;
    let downaloadformSubmit: HTMLFormElement = document.getElementById('downloadExportTickets') as HTMLFormElement;
    this.submitted = true;
    downaloadformSubmit.submit();
  }

}

export class ticketFilterModel {
  public MSP: string = null;
  public TicketID: string = null;
  public BatchID: string = null;
  public FromDate: string = null;
  public ToDate: string = null;
  public AtmID: string = null;
  public Date: string = null;
}
