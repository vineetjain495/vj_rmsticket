import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, Input, ViewEncapsulation} from '@angular/core';
import { TicketViewerServices } from '../ticketViewer.service';
import { DataService } from 'src/app/services/DataService';
import { CreateTicketValidator } from './createTicket.validator';
import { BaseResponseWithData } from '../../shared/model/BaseResponseModel';
import { CommonFunctionality } from 'src/app/app.commonFunctionality';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-createTicket',
  templateUrl: './createTicket.template.html',
  styleUrls: ['./createTicket.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateTicketComponent implements OnInit {

  @ViewChild('fromDate') fromDate: any;
  @ViewChild('toDate') toDate: any;


  filetype: any = ["txt", "doc", "docx"];
  submitted: boolean = true;  
  showIncidentDate: boolean = false;
  fileContent: any;
  dateValue: Date;
  emailDateValue: Date;
  maxDate: Date;
  incidentMaxDate: Date;
  incidentDateValue: Date;
  fromDateMinDate: Date;
  minDate: Date;
  model: CreateTicket = new CreateTicket();
  queryTypeOptions: any;
  queryCategoryOptions: any;
  isSaveButtonDisable: boolean = false;
  hideCustomerShortagefields: boolean = false;
  hideShortageQueryfield: boolean = true;
  hideAccountNumber: boolean = false;
  hideEmailDate: boolean = false;
  hideDate: boolean = true;

  createTicketForm: FormGroup;

 

  get form() { return this.createTicketForm.controls;}
  constructor(public datepipe: DatePipe,private service: TicketViewerServices, private ds: DataService, private router: Router, private formBuilder: FormBuilder, private cf: CommonFunctionality) {
    
    this.model.QueryCategory = null;
    this.model.QueryType = null;
    
    this.cf.GetUserDetails().subscribe((data: BaseResponseWithData<any>) => {
      if (data.Success) {
        this.hideEmailDate = data.Entity.AssignedRoleID == 2 ? true : false;
        this.hideDate = data.Entity.AssignedRoleID == 2 ? false : true;
        
        if (this.hideEmailDate) {
          this.createTicketForm.controls['emailDateValidations'].clearValidators();
          let date = new Date();
          this.model.EmailDate = this.datepipe.transform(date, 'dd-MM-yyyy');
          
        }
      }
    });


  }

  ngOnInit() {
    this.dateValue = new Date();
    this.emailDateValue = new Date();
    this.incidentDateValue = new Date();
    this.maxDate = new Date();
    this.incidentMaxDate = new Date();
    this.service.getQueryType().subscribe((result: any) => {
      
      const index: number = result.Entity.queryType.indexOf("physical shortage".toUpperCase());
      if (index !== -1) {
        result.Entity.queryType.splice(index, 1);
      } 
      this.queryTypeOptions = result.Entity.queryType;
      this.queryCategoryOptions = result.Entity.queryCategory;
    });

    this.createTicketForm = this.formBuilder.group({
      queryType:['', [Validators.required]],
      queryCategory: ['', []],
      emailDateValidations:['', [Validators.required]],
      incidentDateValidation:['', [Validators.required]],
      disputedAmount:['', [Validators.required, Validators.pattern('[0-9]+$'), CreateTicketValidator.cannotBeZero,CreateTicketValidator.multiplesOf10]],
      atmID: ['', [Validators.required]],
      bank: [{ value: '', disabled: true }, [Validators.required]],
      account: [{ value: '', disabled: true }, [Validators.required]],
      location: [{ value: '', disabled: true }, [Validators.required]],
      transactionAmount: ['',[]],
      transactionNo: ['',[]],
      cardNo: ['', []],
      fromDateValidations: ['', []],
      toDateValidations: ['', []],
      referenceNumber: ['', [Validators.pattern('[a-z0-9A-Z]+$')]],
      accountNo: ['', [Validators.pattern('[0-9]+$')]],
      disputeComments: ['', []],
      upload: ['', [Validators.required, CreateTicketValidator.requiredFileType(this.filetype)]],
      dateValidations: [{ value: '', disabled: true },[]],
    },
      {
        validator: CreateTicketValidator.transactionAmountvalidation('transactionAmount', 'disputedAmount'),
      }
    )

    this.createTicketForm.valueChanges.subscribe((valuesChanged: any) => {
      this.submitted = this.createTicketForm.valid
    })
  }

  onEmailDatePickerChanged(event:boolean) {
    if (event) {
      this.incidentMaxDate = new Date(this.model.EmailDate);
      this.fromDateMinDate = new Date(this.model.EmailDate);
    } else {
      this.showIncidentDate = true;
    }
  }

  onAtmIdEntered(event: any) {
    if (event.target.value != null && event.target.value != "") {

      this.ds.ShowHideToasty({
        title: 'Please Wait...',
        msg: '',
        showClose: false,
        theme: 'bootstrap',
        type: 'wait',
        closeOther: true
      });

      this.model.ATMID = event.target.value;

      this.service.getMasterData(this.model).subscribe((result: any) => {
        if (result.Success) {
          this.ds.ShowHideToasty({
            title: 'Valid AtmID:('+event.target.value+')..',
            msg: '',
            showClose: true,
            theme: 'bootstrap',
            type: 'success',
            closeOther: true,
            timeout: 5000
          });

          this.model.Bank = result.Entity.Bank;
          this.model.Account = result.Entity.Account;
          this.model.MSP = result.Entity.Account;
          this.model.Location = result.Entity.Location;

        } else {

          this.ds.ShowHideToasty({
            title: 'Failure..',
            msg: 'AtmID:('+ event.target.value+') not Valid, Kindly enter correct ATMID',
            showClose: true,
            theme: 'bootstrap',
            type: 'error',
            closeOther: true,
          });
          this.model.ATMID = null;
          this.model.Account = null;
          this.model.MSP = null;
          this.model.Location = null;
        }
      });
    }
  }

  selectionChanged($event) {
    if ($event !== undefined) {
      if ($event != "Customer Claim".toUpperCase()) {
        this.aCustomerClaim();
      } else {
        this.notACustomerClaim();
      }
      
      if ($event != "Shortage query".toLocaleUpperCase()) {
        this.hideAccountNumber = false;
      } else {
        this.hideAccountNumber = true;
      }

    } else {
        this.notACustomerClaim();
    }
  }

  notACustomerClaim() {
    this.hideAccountNumber = false;
    this.hideCustomerShortagefields = false;
    this.hideShortageQueryfield = true;
    this.createTicketForm.controls['transactionAmount'].setValidators([Validators.required, Validators.pattern('[0-9]+$'), CreateTicketValidator.cannotBeZero, CreateTicketValidator.multiplesOf10]);
    this.createTicketForm.controls['transactionNo'].setValidators([Validators.required, Validators.pattern('[0-9]+$'), Validators.minLength(4), Validators.maxLength(12)]);
    this.createTicketForm.controls['cardNo'].setValidators([Validators.required, Validators.pattern('[0-9]+[xX]+[0-9]+$'), Validators.minLength(16), Validators.maxLength(19), CreateTicketValidator.CardNo,]);
    this.createTicketForm.controls['queryCategory'].setValidators([Validators.required,]);
    this.createTicketForm.setControl('validator', this.createTicketForm.controls['validator']);
    this.createTicketForm.controls['queryCategory'].enable();
  }

  aCustomerClaim() {
    this.hideCustomerShortagefields = true;
    this.hideShortageQueryfield = false;
    this.model.QueryCategory = null;
    this.createTicketForm.controls['transactionAmount'].clearValidators();
    this.createTicketForm.controls['transactionNo'].clearValidators();
    this.createTicketForm.controls['cardNo'].clearValidators();
    this.createTicketForm.controls['queryCategory'].clearValidators();
    this.createTicketForm.setControl('validator', null)
    this.createTicketForm.controls['queryCategory'].disable();
  }

  onToggleFromDatePicker() {
    this.fromDate.toggle();
  }

  onToggleToDatePicker() {
    this.toDate.toggle();
  }

  onFromDatePickerChanged(event:Date) {
    this.minDate = event;
  }

  onFileChange($event) {
    if ($event.target.files.length > 0) {
      this.model.upload = $event.target.files[0];
    }
  }

  onSubmit() {
    if (this.createTicketForm.invalid) {
      return;
    }
    this.callServiceCreateTicket()
  }

  callServiceCreateTicket() {
    const formData: FormData = new FormData();
    for (var key in this.model) {
      formData.append(key, this.model[key]);
    }
    this.ds.ShowHideToasty({
      title: 'Creating Ticket and Uploading File....Wait!',
      msg: '',
      showClose: false,
      theme: 'bootstrap',
      type: 'wait',
      closeOther: true
    });
    this.model.ModifiedDate = this.model.EmailDate;
    this.service.createTicket(formData).subscribe((response: any) => {
      if (response.Success) {

        this.ds.ShowHideToasty({
          title: 'Ticket Created and File Uploaded Successfully..',
          msg: '',
          showClose: true,
          theme: 'bootstrap',
          type: 'success',
          closeOther: true,
          timeout: 5000
        });

        this.router.navigateByUrl('/TicketViewer')

      } else {
        this.ds.ShowHideToasty({
          title: 'Failed to Create Ticket and Upload file',
          msg: response.Message,
          showClose: true,
          theme: 'bootstrap',
          type: 'error',
          closeOther: true,
        });
      }
    })
  }

  back() {
    this.router.navigateByUrl('/TicketViewer');
  }

  Reset() {
    this.hideCustomerShortagefields = false;
    this.hideShortageQueryfield = true;
    for (var key in this.model) {
      this.model[key]=null;
    }
  }


  
}




export class CreateTicket {
  public BatchID: string = null
  public QueryType: string = null
  public QueryCategory: string = null
  public EmailDate: string = null
  public ModifiedDate: string = null
  public IncidentDate: string =null
  public ATMID: string = null
  public DisputedAmount: number = null
  public Bank: string = null
  public Account: string = null
  public AccountNo: string = null
  public MSP: string = null
  public Location: string = null
  public TransactionAmount: number = null
  public TransactionNo: string = null
  public CardNo: string = null
  public ReferenceNo: string = null
  public DisputeComments: string = null
  public FromDate: string = null
  public ToDate: string =null
  public upload:File = null
}

