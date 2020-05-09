import { baseUrl } from '../../GlobalShareCode';
import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import * as Handsontable from 'handsontable';
import { HotTableRegisterer } from '@handsontable/angular';
import { Router } from "@angular/router"; 
import { BsModalRef, BsModalService} from 'ngx-bootstrap';
import { CrudOpsTicketService } from './crudOpsTicket.service';
import { DataService } from 'src/app/services/DataService';
import { TicketViewerServices } from '../ticketViewer.service';
import { CommonFunctionality } from 'src/app/app.commonFunctionality';
import { BaseResponseWithData } from 'src/app/shared/model/BaseResponseModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material';
import { CrudeOpsTicketValidator } from '../crudOpsTicket/crudOpsTicket.validator'
import { Key } from 'selenium-webdriver';



@Component({
  selector: 'app-crudOpsTicket',
  templateUrl: './CrudOpsTicket.component.html',
  styleUrls: ['./CrudOpsTicket.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class CrudOpsTicketComponent implements OnInit
{
  CountOfFiles: number;
  formDataUpload: FormData;
  showFilesURL: string;
  private showFilePathName: string;
  public submitted: boolean;
  maxDate: Date = new Date();
  public childOldTicket: boolean;
   

  finalFileUploadingModel: FinalFileUploading = new FinalFileUploading();
  viewTicketId: any;
  ticketSummaryForm: FormGroup;
  _opened: boolean= false;
  childComponentShow: boolean = true;
  model: TicketModel = new TicketModel();
  runRuleEngineModel: RunRuleEngine = {
    BatchId: "", MSP: "", TicketData: [{TicketId:"",Txn_No:0,ATMID:"",Date:"",Disputed_Amount:0,Ej_File:""}]}; 
  overageModel: Overage = new Overage();
  errorCodeModel: ErrorCodeModel = new ErrorCodeModel();
  fileModel: FileUpload = new FileUpload();
  fileUploadingModel: FileUploading = new FileUploading();
  files: FileUpload[];
  


  justificationArraySet: any = ["OVERAGE REPORTED", "PARTIAL - OVERAGE REPORTED", "SWITCH INCREASED", "PARTIAL - SWITCH INCREASED", "PARTIAL - CASH DEPOSITED", "CASH DEPOSITED"];

  queryt: any;
  rightsParameter: number=1;
  rolesParameter: number;

  hideFileEditing: boolean = false;

  hiddenRe_RunRuleEngine: boolean = false;
  hiddenForLocation: boolean = false;
  hiddenForHO: boolean = false;
  hiddenforMSP: boolean = false;
  hiddenforAdmin: boolean = false;
  hideFromToDateFields: boolean = false;
  hideUploadFileFlag: boolean = true;
  hideATMMasterData: boolean = false;
  hindATMStatus: boolean = true;
  hidefirstCustodian: boolean = false;
  hideSecondCustodian: boolean = false;
  hideDepositfromLocation: boolean = false;

  queryCategoryOptions: any;
  errorCodeOptions: any;
  errorCodeRemarkOptions: any;
  customerActionsOptions: any;
  internalActionsOptions: any;
  hoRejectionJustificationOptions: any;
  justificationOptions: any;
  cmsStatusOptions: any;
  queryTypeLoading: any;

  actionOptions: any;
  subActionOptions: any;
  DelayDepositIssueOptions: any;
  acceptanceJustificationOptions: any;
  territoryRejectionJustificationOptions: any;
  rolesOptions: any=["MSP","HO","LOCATION"];
  rightsOptions: any = ["VIEW", "EDIT"];
  queryTypeOptions: any;
  showAdmin: boolean = true;

  disableQueryCategory: boolean = false;
  disableErrorCode: boolean = false;
  

  disableRights: boolean = true;

  disableInternalActions: boolean = false;
  disableHORejectionJustification: boolean = false;
  disableAction: boolean = false;
  disableSubAction: boolean = false;
  
  disableReassignReason: boolean = false;
  disableAcceptanceJustification: boolean = false;
  disableModeOfRecovery: boolean = false;
  disableTerritoryRejectionJustification: boolean = false;
  disableCMSStatus: boolean = false;
  disableQueryType: boolean = false;




  showSuccessErrorErrorCode: string = null;
  showSuccessErrorCustomerActions: string = null;
  showSuccessErrorHORejectionJustification: string = null;
  showSuccessErrorTerritoryRejectionJustification: string = null;
  showSuccessActionFiled: string = null;
  showSuccessErrorSubAction: string = null;
  showSuccessDelayDepositIssue: string = null;
  showSuccessErrorReassignReason: string = null;
  showSuccessAcceptanceJustification: string = null;
  showSuccessErrorModeOfRecovery: string = null;
  showSuccessErrorInternalActions: string = null
  showSuccessErrorCMSStatus: string = null;

  HideCmsStatusFlag: boolean = false;


  hideCustomerDetails: boolean = false;
  //internalActionFieldHidden: boolean = false;
  targetAmountFieldHidden: boolean = true;
  hideHORejectionJustification: boolean = false;
  hideActionFiled: boolean = false;
  hideAttachment: boolean= false;
  hideSubmitButton: boolean = false;
  reassignReasonFieldHidden: boolean = true;

  config = {
    displayKey: "name",
    search: true,
    limitTo: 5
  };

  errorCodeConfig = {
    displayKey: "name",
    search: true,
    limitTo: 20
  };


  get form() { return this.ticketSummaryForm.controls; }


  ngOnInit(): void {
    
    this.childOldTicket;

    this.viewTicketId = localStorage.getItem('TicketId');
    if (this.viewTicketId !== undefined) {
      this.ticketViewerService.CallTicketDetails(this.viewTicketId).subscribe((result: any) => {
        
        //console.log(result);
        this.model = result.Entity;
        this.overageModel = result.Entity.overageData;
        this.files = result.Entity.FileUplodedList;
        this.CountOfFiles = this.files.length;
        if (this.model.FirstCustodianCode == null || this.model.FirstCustodianCode == '') {
          this.hidefirstCustodian = true;
        }

        if (this.model.SecondCustodianCode == null || this.model.SecondCustodianCode == '') {
          this.hideSecondCustodian = true;
        }

        if (this.model.QueryType == 'customer claim'.toUpperCase() || this.model.QueryType == 'Customer Claim') {
          this.hideFromToDateFields = true;

        } else {
          this.disableQueryCategory = true;
        }

        if (!this.model.ATMFlag) {
          this.hideATMMasterData = true;
          this.hindATMStatus = false;
        }


        
        //  this.reassignReasonFieldHidden = false;
        //  if (this.model.CMSStatus.toUpperCase() != "Supporting Attached".toUpperCase() && this.rolesParameter != 4 && this.rolesParameter !=2) {
        //    this.targetAmountFieldHidden = false;
        //  } else {
        //    this.targetAmountFieldHidden = true;
        //  }

        //}

        


        this.errorCodeType_Bucket(this.model.ErrorCode);





        //if ((this.model.ErrorRemark != null || this.model.ErrorRemark != 'null') && (this.model.ErrorCode != null || this.model.ErrorCode != 'null')) {
        //  
        //  this.errorCodeType(this.model.ErrorCode, this.model.ErrorRemark);
        //}

        this.callJustification(this.model.QueryType, this.model.CustomerActions);

       


      });
    }

    this.cf.GetUserDetails().subscribe((data: BaseResponseWithData<any>) => {

      if (data.Success) {
        this.filedPopAccRole_Rights(data.Entity.AssignedRoleID, data.Entity.AssignedRightsID);

        //if (this.rolesParameter != 1) {
        //  if ((this.model.CustomerActions == "ACCEPT" || this.model.CustomerActions == "REJECT") && this.model.CMSStatus == "CLOSED") {
        //    this.ticketSummaryForm.disable();
        //    this.hideSubmitButton = true;
        //    this.hideAttachment = true;
        //    this.hideFileEditing = true;
        //  }
        //}
      }
    });

    
    


    this.ticketViewerService.getErrorCode({}).subscribe((result: any) => {
      
      this.errorCodeOptions = result.Entity.errorCodeList;
    });

    this.ticketSummaryForm = this.formBuilder.group({
      batchID: [{value:'',disabled:true},[]],
      ticketID: [{ value: '', disabled: true }, []],
      oldTicketID: [{ value: '', disabled: true }, []],
      queryType: [{ value: '',}, []],
      atmID: [{ value: '', disabled: true }, []],
      atmType: [{ value: '', disabled: true }, []],
      atmStatus:[{ value: '', disabled: true }, []],
      msp: [{ value: '', disabled: true }, []],
      bank: [{ value: '', disabled: true }, []],
      roCode: [{ value: '', disabled: true }, []],
      location: [{ value: '', disabled: true }, []],
      emailDate: [{ value: '', disabled: true }, []],
      incidentDate: [{ value: '', disabled: true }, []],
      fromDate: [{ value: '', disabled: true }, []],
      toDate: [{ value: '', disabled: true }, []],
      disputedAmount: [{ value: '', disabled: true }, []],
      transactionAmount: [{ value: '', disabled: true }, []],
      referenceNo: [{ value: '', disabled: true }, []],
      transactionNo: [{ value: '', disabled: true }, []],
      cardNumber: [{ value: '', disabled:true },[]],
      queryCategory: [{ value: '' }, []],
      errorCode: [{ value: '' }, [Validators.required]],
      errorBucket: [{ value: '', disabled: true }, []],
      errorType: [{ value: '', disabled: true }, []],
      cardException: [{ value: '', disabled: true }, []],
      atmException: [{ value: '', disabled: true }, []],
      routeException: [{ value: '', disabled: true }, []],
      customerComment: [{ value: '' }, []],
      customerActions: [{ value: '' }, []],
      hoComment: [{ value: '' }, []],
      internalActions: [{ value: '' }, []],
      targetAmount: [{ value: '' }, [Validators.required, Validators.pattern('[0-9]+$')],],
      hoRejectionJustification: [{ value: '' }, []],
      action: [{ value: '' }, []],
      subAction: [{ value: '' }, []],
      assignedtargetAmount: [{ value: '', disabled: true }, []],
      recoveredAmount: [{ value: '', disabled: true }, []],
      pendingAmount: [{ value: '', disabled: true }, []],
      woOrder: [{ value: '', disabled: true }, []],
      territoryDepositDate: [{ value: '', disabled: true }, []],
      depositAmount: [{ value: '', disabled: true }, []],
      delayDepositIssue: [{ value: '' }, []],
      reassignReason: [{ value: '' }, []],
      acceptanceJustification: [{ value: '' }, []],
      modeOfRecovery: [{ value: '' }, []],
      disputetargetAmount: [{ value: '', disabled: true }, []],
      toBeRecoveredAmount: [{ value: '', disabled: true }, []],
      hOApprovedRecoveryAmount: [{ value: '', disabled: true }, []],
      firstCustodianCode: [{ value: '' }, []],
      firstCustodianName: [{ value: '' }, []],
      secondCustodianCode: [{ value: '' }, []],
      secondCustodianName: [{ value: '' }, []],
      territoryComment: [{ value: '' }, []],
      territoryRejectionJustification: [{ value: '' }, []],
      mspActive: [{ value: '' }, []],
      hoActive: [{ value: '' }, []],
      locationActive: [{ value: '' }, []],
      transactionTime: [{ value: '', disabled: true }, []],
      cmsStatus: [{ value: '' }, []],
      emailId: [{ value: '', disabled: true }, []],
      subject: [{ value: '', disabled: true }, []],
      zone: [{ value: '', disabled: true }, []],
      hubLocation: [{ value: '', disabled: true }, []],
      accountNumber: [{ value: '', disabled: true }, []],
      emailTime: [{ value: '', disabled: true }, []],
      overageDate: [{ value: '', disabled: true }, []],
      overageAmount: [{ value: '', disabled: true }, []],
      depositDate: [{ value: '', disabled: true }, []],
      processingRemarks: [{ value: '', disabled: true }, []],
      cmsRemarks: [{ value: '' }, []],
      upload: [{ value: '' }, [Validators.required]],
    });


  }

  filedPopAccRole_Rights(Roles: number, Rights: number) {
    this.rolesParameter = Roles;
    
    

      if (Roles == 1) {
        this.hiddenRe_RunRuleEngine = true;
        this.showAdmin = false;
        this.hiddenforAdmin = true;
        if (Rights == 1) {
          this.ticketSummaryForm.disable();
          this.hideSubmitButton = true;
          this.hideFileEditing = true;
          this.hideAttachment = true;
        } else {
          this.ticketSummaryForm.controls['overageDate'].enable();
          this.ticketSummaryForm.controls['overageAmount'].enable();
          this.ticketSummaryForm.controls['depositAmount'].enable();
          this.ticketSummaryForm.controls['depositDate'].enable();


        }

      }
      if (Roles == 2 /*MSP-USER*/) {
        this.hiddenforMSP = true;
        this.hiddenRe_RunRuleEngine = true;
        this.hideAttachment = true;
        this.hideActionFiled = true;
        this.hideFileEditing = true;
        this.ticketSummaryForm.disable();
        this.hideSubmitButton = true;

      }
      if (Roles == 3 /*HO-USER*/) {


        this.hideActionFiled = true;
        this.hiddenForHO = true;

        this.ticketSummaryForm.controls['firstCustodianCode'].disable();
        this.ticketSummaryForm.controls['firstCustodianName'].disable();
        this.ticketSummaryForm.controls['secondCustodianCode'].disable();
        this.ticketSummaryForm.controls['secondCustodianName'].disable();
        this.ticketSummaryForm.controls['territoryComment'].disable();
        this.ticketSummaryForm.controls['delayDepositIssue'].disable();
        this.ticketSummaryForm.controls['territoryRejectionJustification'].disable();
        this.disableTerritoryRejectionJustification = true;
        this.ticketSummaryForm.controls['cardNumber'].disable();
        if (Rights == 1 /*Only-View*/) {
          this.ticketSummaryForm.controls['queryCategory'].disable();
          this.ticketSummaryForm.controls['queryType'].disable();
          this.ticketSummaryForm.controls['customerActions'].disable();
          this.disableQueryCategory = true;
          this.disableErrorCode = true;
          this.disableInternalActions = true;
          this.disableHORejectionJustification = true;
          this.disableReassignReason = true;


          this.hideFileEditing = true;
          this.hideAttachment = true;
          this.hideSubmitButton = true;

          //this.ticketSummaryForm.controls['queryCategory'].disable();
        } else {
          this.ticketSummaryForm.controls['cardNumber'].disable();
          //this.disableQueryCategory = false;
          //this.disableErrorCode = false;

          //this.disableInternalActions = false;
          //this.disableHORejectionJustification = false;
          //this.disableReassignReason = false;

          this.hideFileEditing = false;
          this.hideAttachment = false;
          this.hideSubmitButton = false;
        }

        //if (this.model.CustomerActions == "ACCEPT" || this.model.CustomerActions == "REJECT" || this.model.CustomerActions == "MANUAL") {
        //  if (this.model.CMSStatus == "TAKEN UP FOR RECOVERY") {
        //    this.ticketSummaryForm.disable();
        //    this.hideSubmitButton = true;
        //    this.hideFileEditing = true;
        //    this.hideAttachment = true;
        //  }
        //}

        if (this.model.HoSubmitted) {
          this.ticketSummaryForm.disable();
          this.hideSubmitButton = true;
          this.hideFileEditing = true;
          this.hideAttachment = true;
        }


      }
      if (Roles == 4 /*Location-USER*/) {
        this.hiddenRe_RunRuleEngine = true;
        //if (this.model.CustomerActions == "ACCEPT" || this.model.CustomerActions == "REJECT" || this.model.CustomerActions == "MANUAL") {
        //  if (this.model.CMSStatus == "TAKEN UP FOR RECOVERY") {
        //    this.ticketSummaryForm.disable();
        //    this.hideSubmitButton = true;
        //    this.hideFileEditing = true;
        //    this.hideAttachment = true;

        //  }
        //}

        this.ticketSummaryForm.controls['customerComment'].disable();
        this.hideDepositfromLocation = true;
        this.hiddenForLocation = true;
        this.hideCustomerDetails = true;
        this.ticketSummaryForm.controls['cardNumber'].disable();
        this.ticketSummaryForm.controls['hoComment'].disable();
        this.ticketSummaryForm.controls['errorCode'].disable();
        this.ticketSummaryForm.controls['firstCustodianCode'].disable();
        this.ticketSummaryForm.controls['firstCustodianName'].disable();
        this.ticketSummaryForm.controls['secondCustodianCode'].disable();
        this.ticketSummaryForm.controls['secondCustodianName'].disable();
        this.disableErrorCode = true;
        this.ticketSummaryForm.controls['queryCategory'].disable();
        this.ticketSummaryForm.controls['queryType'].disable();

        //this.internalActionFieldHidden = true;
        this.hideHORejectionJustification = true;
        this.hideFileEditing = true;
        //this.ticketSummaryForm.controls['queryCategory'].disable();
        if (Rights == 1 /*Only-View*/) {
          this.disableAction = true;
          this.disableSubAction = true;
          this.disableAcceptanceJustification = true;

          this.ticketSummaryForm.controls['modeOfRecovery'].disable();
          this.hideAttachment = true;
          this.ticketSummaryForm.controls['firstCustodianCode'].disable();
          this.ticketSummaryForm.controls['firstCustodianName'].disable();
          this.ticketSummaryForm.controls['secondCustodianCode'].disable();
          this.ticketSummaryForm.controls['secondCustodianName'].disable();
          this.ticketSummaryForm.controls['delayDepositIssue'].disable();
          this.disableTerritoryRejectionJustification = true;
          this.hideSubmitButton = true;
        } else {
          this.disableTerritoryRejectionJustification = false;
          this.disableAction = false;
          this.disableSubAction = false;
          this.disableAcceptanceJustification = false;
          this.ticketSummaryForm.controls['firstCustodianCode'].enable();
          this.ticketSummaryForm.controls['firstCustodianName'].enable();
          this.ticketSummaryForm.controls['secondCustodianCode'].enable();
          this.ticketSummaryForm.controls['secondCustodianName'].enable();
          this.hideSubmitButton = false;
        }

        if (this.model.LocSubmitted) {
          this.ticketSummaryForm.disable();
          this.hideSubmitButton = true;
          this.hideAttachment = true;
        }

      }
      if (Roles == 5 /*HO_Manager-USER*/) {
        this.hiddenRe_RunRuleEngine = true;
        this.ticketSummaryForm.disable();
        this.hideFileEditing = true;
        this.hideAttachment = true;
        this.hideSubmitButton = true;
        this.hiddenForHO = true;
      }
      if (Roles == 6 /*Loc_Manager-User*/) {
        this.hiddenRe_RunRuleEngine = true;
        this.hiddenForLocation = true;
        this.hideHORejectionJustification = true;
        this.hideCustomerDetails = true;
        this.ticketSummaryForm.disable();
        this.hideFileEditing = true;
        this.hideAttachment = true;
        this.hideSubmitButton = true;

      }

    if (JSON.parse(localStorage.getItem('OldTicketIdView'))) {
      this.ticketSummaryForm.disable();
      this.hideSubmitButton = true;
      this.hideFileEditing = true;
      this.hideAttachment = true;
      this.hiddenRe_RunRuleEngine = true;
    }

  }

  constructor(private ticketViewerService: TicketViewerServices, private cf: CommonFunctionality, private formBuilder: FormBuilder, private router: Router, private ds: DataService)
  {
    this.showFilesURL = baseUrl + "TicketViewer/ShowFiles";
    
    

    this.ticketViewerService.getQueryType().subscribe((result: any) => {
      const index: number = result.Entity.queryType.indexOf("physical shortage".toUpperCase());
      if (index !== -1) {
        result.Entity.queryType.splice(index, 1);
      } 
      this.queryTypeOptions = result.Entity.queryType;
      this.queryCategoryOptions = result.Entity.queryCategory;
      this.customerActionsOptions = result.Entity.customerActions;
      this.internalActionsOptions = result.Entity.internalActions;
      this.cmsStatusOptions = result.Entity.cmsStatus;
    });

  }



  selectionChangedQT($event) {
    
    if ($event !== undefined) {
      
      if ($event == "customer claim".toUpperCase()) {
        this.ticketSummaryForm.controls['queryCategory'].enable();
      }
      else {
        this.model.QueryCategory = null;
        this.ticketSummaryForm.controls['queryCategory'].disable();
  
        
      }
    } else {
      this.model.QueryCategory = null;
      this.ticketSummaryForm.controls['queryCategory'].disable();

    }
  }


  selectionChangedQC($event) {
    
    if ($event !== undefined) {
    
      if ($event == "customer claim".toUpperCase()) {
        this.disableQueryCategory = false;
      }
      else {

        this.disableQueryCategory = true;
      }
    } else {



    }
  }


  selectionChangedEC($event) {
    if ($event !== undefined) {
      this.model.ErrorBucket = null;
      this.model.ErrorType = null;
      this.errorCodeType_Bucket(this.model.ErrorCode);
    } else {
      this.model.ErrorBucket = null;
      this.model.ErrorType = null;
    }
  }


  selectionChangedCA($event) {
    if ($event !== undefined) {
      //this.model.Justification = null;
      this.callJustification(this.model.QueryType, $event);
     } else {
      this.model.Justification = null;
    }
  }

  //selectionChangedIA($event) {
  //  if ($event.value !== undefined) {
  //    this.showSuccessErrorInternalActions = "Success";
  //    if ($event.value == "Forward to Territory") {
  //      this.targetAmountFieldHidden = false;
        
  //    }
  //  } else {
  //    this.showSuccessErrorInternalActions = "Error";
  //    this.targetAmountFieldHidden = true;
  //  }
  //}



  selectionChangedHORJ($event) {
    
    if ($event !== undefined) { 
      if (this.justificationArraySet.some((item) => item == $event.toUpperCase())) {
        this.overageModel.OverageFlag = false;
        this.ticketSummaryForm.controls['overageDate'].enable();
        this.ticketSummaryForm.controls['overageAmount'].enable();
        this.ticketSummaryForm.controls['overageAmount'].setValidators([Validators.pattern('[0-9]+$'), CrudeOpsTicketValidator.cannotBeZero]);


      } else {
        this.overageModel.OverageFlag = true;
        this.ticketSummaryForm.controls['overageDate'].disable();
        this.ticketSummaryForm.controls['overageAmount'].disable();
        this.ticketSummaryForm.controls['overageAmount'].clearValidators();
      }
      
      
    } else {
      this.overageModel.OverageFlag = true;
      this.ticketSummaryForm.controls['overageDate'].disable();
      this.ticketSummaryForm.controls['overageAmount'].disable();
      this.ticketSummaryForm.controls['overageAmount'].clearValidators();
    }
  }


  selectionChangedTRJ($event) {
    
    if ($event !== undefined) {
      
      if (this.justificationArraySet.some((item) => item == $event.toUpperCase())) {
        this.hideDepositfromLocation = false;
        this.ticketSummaryForm.controls['depositDate'].enable();
        this.ticketSummaryForm.controls['depositAmount'].enable();
        this.ticketSummaryForm.controls['depositAmount'].setValidators([Validators.pattern('[0-9]+$'), CrudeOpsTicketValidator.cannotBeZero]);
      } else {
        this.hideDepositfromLocation = true;
        this.ticketSummaryForm.controls['depositDate'].disable();
        this.ticketSummaryForm.controls['depositAmount'].disable();
        this.ticketSummaryForm.controls['depositAmount'].clearValidators();
      }

    } else {
      this.hideDepositfromLocation = true;
      this.ticketSummaryForm.controls['depositDate'].disable();
      this.ticketSummaryForm.controls['depositAmount'].disable();
      this.ticketSummaryForm.controls['depositAmount'].clearValidators();
    }


  }




  selectionChangedAction($event) {
    if ($event.value !== undefined) {
      this.showSuccessActionFiled = "Success";

    } else {
      this.showSuccessActionFiled = "Error";
    }
  }


  selectionChangedSubAction($event) {
    if ($event.value !== undefined) {
      this.showSuccessActionFiled = "Success";

    } else {
      this.showSuccessActionFiled = "Error";
    }
  }

  selectionChangedDDI($event) {
    if ($event.value !== undefined) {
      this.showSuccessDelayDepositIssue = "Success";

    } else {
      this.showSuccessDelayDepositIssue = "Error";
    }
  }

  selectionChangedRR($event) {
    if ($event.value !== undefined) {
      this.showSuccessErrorReassignReason = "Success";

    } else {
      this.showSuccessErrorReassignReason = "Error";
    }
  }

  selectionChangedAJ($event) {
    if ($event.value !== undefined) {
      this.showSuccessAcceptanceJustification = "Success";

    } else {
      this.showSuccessAcceptanceJustification = "Error";
    }
  }

  selectionChangedMOR($event) {
    if ($event.value !== undefined) {
      this.showSuccessErrorModeOfRecovery = "Success";

    } else {
      this.showSuccessErrorModeOfRecovery = "Error";
    }
  }

  
  selectionChangedCMSStatus($event) {
    if ($event !== undefined) {
      
      if ($event != "CLOSED") { 
        this.targetAmountFieldHidden = false;
        this.reassignReasonFieldHidden = false;
      } else {
          this.targetAmountFieldHidden = true;
      }

      if ($event != "Supporting Attached".toUpperCase() && $event != "CLOSED" ) {
        this.targetAmountFieldHidden = false;
      } else {
        this.targetAmountFieldHidden = true;
      }

    } else {
      this.reassignReasonFieldHidden = true;
      this.targetAmountFieldHidden = true;
    }


  }

  errorCodeType_Bucket(ErrorCode: string) {  

    this.ticketViewerService.getErrorCode({ errorCode: ErrorCode }).subscribe((result: any) => {
      if (result.Entity != null) {
        this.model.ErrorType = result.Entity.errorType;
        this.model.ErrorBucket = result.Entity.errorBucket;

      }
      //this.errorCodeRemarkOptions = result.Entity.errorRemarksList;
      //if (result.Entity.errorRemarksList[0] == "" || result.Entity.errorRemarksList[0] == null) {
       
      //  this.errorCodeType(this.model.ErrorCode, result.Entity.errorRemarksList[0] == "" ? " " : result.Entity.errorRemarksList[0] == null ? "null" :"null");
      //}
    });

  }

  showUploadFile() {
    this.hideUploadFileFlag = !this.hideUploadFileFlag;
  }

  changeMSPCheckbox(event:string) {
    
    for (let i =0; i < this.files.length; i++) {
      if (this.files[i].FileName == event) {
        this.files[i].MSPActive = !this.files[i].MSPActive;
        break;
      }
    }
  }

  changeHOCheckbox(event:string) {
    
    for (let i = 0; i < this.files.length; i++) {
      if (this.files[i].FileName == event) {
        this.files[i].HOActive = !this.files[i].HOActive;
        break;
      }
    }
  }

  changeLocationCheckbox(event:string) {
    
    for (let i =0; i < this.files.length; i++) {
      if (this.files[i].FileName == event) {
        this.files[i].LocationActive = !this.files[i].LocationActive;
        break;
      }
    }
  }

  onFileChange($event) {
    
    if ($event.target.files.length > 0) {
      this.fileUploadingModel.upload.push($event.target.files);
      let file = { Id: this.files.length,TicketID:this.model.TicketID,MSP:this.model.MSP,FileName: $event.target.files[0].name, FilePath: '', MSPActive: false, HOActive: true, LocationActive: true, TypeofAttatchent: 'added', Editingfiles: $event.target.files[0]}
      this.files.push(file);
      this.ticketSummaryForm.controls['upload'].markAsPristine();
    }
  }

  removeUploadFile(event: string) {
   for (let i = this.files.length-1; i >= 0; i--) {
      if (this.files[i].FileName == event) {
        this.files.splice(i, 1);
        break;
      }
    }
    
    for (let j = this.fileUploadingModel.upload.length-1; j <= this.fileUploadingModel.upload.length ; j--) {
      if (this.fileUploadingModel.upload[j][0].name == event) {
        this.fileUploadingModel.upload.splice(j, 1);
        break;
      }
    }
    
  }


  callJustification(queryType:string, customerAction:string) {
    this.ticketViewerService.CallTicketJustification_Rejection({ QueryType: queryType, Status: customerAction }).subscribe((result: any) => {
      this.justificationOptions = result.Entity.justification;
      this.territoryRejectionJustificationOptions = result.Entity.territoryRejectionJustificationOptions;
      this.cmsStatusOptions = result.Entity.cmsStatus;

      if (this.model.OpenReginRemoveFlag) {
        const index: number = this.cmsStatusOptions.indexOf("OPEN REGION".toUpperCase());
        if (index !== -1) {
          this.cmsStatusOptions.splice(index, 1);
        }
      }

      //this.acceptanceJustificationOptions = result.Entity.acceptanceJustification;
      //this.hoRejectionJustificationOptions = result.Entity.rejectionJustification;
      //this.territoryRejectionJustificationOptions = result.Entity.rejectionJustification;
    });
  }

  back() {
    localStorage.removeItem('TicketId');
    localStorage.removeItem('OldTicketIdView');
    this.router.navigateByUrl('/TicketViewer');
  }

  onSubmit() {
    

    if (this.rolesParameter == 4) {
    
      if (this.CountOfFiles == this.files.length) {
        this.hideUploadFileFlag = false;
        this.ticketSummaryForm.controls['upload'].markAsDirty();
        
      } else {
        if (this.justificationArraySet.some((item) => item == this.model.TerritoryRejectionJustification.toUpperCase())) {
          if (this.model.DepositAmount.charAt(0) != '0' && this.model.DepositAmount != '' && this.model.DepositAmount != null && this.model.DepositDate!='' && this.model.DepositDate!=null) {
            this.callUpdateService();
          }
        } else {
          this.callUpdateService();
        }
        
      }

    } else {

      if (this.justificationArraySet.some((item) => item == this.model.Justification.toUpperCase())) {
        if (this.overageModel.OverageAmount.charAt(0) != '0' && this.overageModel.OverageAmount != '' && this.overageModel.OverageAmount!=null && this.overageModel.OverageDate!="" && this.overageModel.OverageDate!=null) {
          this.callUpdateService();
        }
      } else {
        this.callUpdateService();
      }
      

    }

    

  }

  //selectionChangedAdminRoles($event) {
    
  //  if ($event.value !== undefined) {
  //    this.disableRights = false;
  //    for (let i = 0; i < this.rolesModel.length; i++)
  //      if (this.rolesModel[i].roleName == $event.value) {
  //        this.rolesParameter = this.rolesModel[i].roleId;
  //        this.filedPopAccRole_Rights(this.rolesParameter, this.rightsParameter);
  //      }
  //     } else {
  //    this.rolesParameter = null;
  //    this.rightsParameter = null;
  //    this.disableRights = true;
  //    this.filedPopAccRole_Rights(1, 1);
  //  }
    

  //}

  //selectionChangedAdminRights($event) {
    
  //  if ($event.value !== undefined) {
  //    for (let i = 0; i < this.rightsModel.length; i++)
  //      if (this.rightsModel[i].rightsName == $event.value) {
  //        this.rightsParameter = this.rightsModel[i].rightsId;
  //      }
  //    this.filedPopAccRole_Rights(this.rolesParameter, this.rightsParameter);
  //  }
  //  else {
  //    this.rightsParameter = null;
  //    this.filedPopAccRole_Rights(this.rolesParameter, 1);
  //  }

  //}

  callUpdateService() {
    


    this.model.HORejectionJustification = this.model.Justification;

    this.model.OverageDate = this.overageModel.OverageDate;
    this.model.OverageAmount = this.overageModel.OverageAmount;

    const formData: FormData = new FormData();
    
    
    for (var key in this.model) {
      formData.append(key, this.model[key]);
    }

    this.ds.ShowHideToasty({
      title: 'Updating Ticket ....Wait!',
      msg: '',
      showClose: false,
      theme: 'bootstrap',
      type: 'wait',
      closeOther: true
    });

    this.ticketViewerService.updateTicket(formData).subscribe((response: any) => {

      if (response.Success) {
        
        

        
       this.finalFileUploadingModel.fileUploadingFinal=this.files;

        for (let i = 0; i < this.finalFileUploadingModel.fileUploadingFinal.length; i++) {

          this.formDataUpload = new FormData();


          for (var key in this.finalFileUploadingModel.fileUploadingFinal[i]) {
            this.formDataUpload.append(key, this.finalFileUploadingModel.fileUploadingFinal[i][key]);
          }


          this.ticketViewerService.editingFileUpload(this.formDataUpload).subscribe();
          
        }
        

        


        this.ds.ShowHideToasty({
          title: 'Updated Ticket Successfully..',
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
          title: 'Failed to Update Ticket',
          msg: response.Message,
          showClose: true,
          theme: 'bootstrap',
          type: 'error',
          closeOther: true,
        });



      }
    });
}

  onClickEvent(event:number) {
    
    this.showFilesURL; 
    this.submitted = true;
    
    
    let downaloadformSubmit: HTMLFormElement = document.getElementById('showFilesTran') as HTMLFormElement;
    downaloadformSubmit.elements["FilePath"].value = this.files[event].FilePath;
    downaloadformSubmit.elements["TypeofAttatchent"].value = this.files[event].TypeofAttatchent;
    downaloadformSubmit.elements["FileName"].value = this.files[event].FileName;
    downaloadformSubmit.submit();
  }

  toggle() {
    this._opened = !this._opened;
  }

  closeComments() {
    this._opened = !this._opened;
  }  


  RunRuleEngine() {
    
    if (this.model != null && this.files.length != 0) {
      this.runRuleEngineModel.BatchId = this.model.BatchID;
      this.runRuleEngineModel.MSP = this.model.MSP;
      this.runRuleEngineModel.TicketData[0].TicketId = this.model.TicketID;
      this.runRuleEngineModel.TicketData[0].Txn_No = Number(this.model.TransactionNo);
      this.runRuleEngineModel.TicketData[0].ATMID = this.model.ATMID;
      this.runRuleEngineModel.TicketData[0].Date = this.model.IncidentDate + " " + this.model.TransactionTime + ":00" ;
      this.runRuleEngineModel.TicketData[0].Disputed_Amount = Number(this.model.DisputedAmount.replace(",",""));

      for (let i = 0; i < this.files.length; i++) {
        if (this.files[i].TypeofAttatchent == "EJ") {
          this.runRuleEngineModel.TicketData[0].Ej_File = this.files[i].FilePath.replace("Z:","/nfsmount");
          break;
        }
      }

      this.ds.ShowHideToasty({
        title: 'Rule Engine Called ....Wait!',
        msg: 'For TicketId {' + this.model.TicketID + '}',
        showClose: false,
        theme: 'bootstrap',
        type: 'wait',
        closeOther: true
      });

      this.ticketViewerService.runRuleEngine(this.runRuleEngineModel).subscribe((result:any) => {
        if (result.Success) {

          this.ds.ShowHideToasty({
            title: 'RuleEngine Ran Successfully..',
            msg: result.Message,
            showClose: true,
            theme: 'bootstrap',
            type: 'success',
            closeOther: true,
            timeout: 5000
          });

          window.location.reload()

        } else {
          this.ds.ShowHideToasty({
            title: 'RuleEngine Failed ..',
            msg: result.Message,
            showClose: true,
            theme: 'bootstrap',
            type: 'error',
            closeOther: true,
            timeout: 5000
          });

        }



      })



    }
    


  }


}


export class Rights {
  rightsId: number;
  rightsName: string;
}

export class Roles {
  roleId: number;
  roleName: string;
}

export class TicketModel {
  BatchID: string = null;
  TicketID: string = null;
  OldTicketID: string = null;
  QueryType: string = null;
  ATMID: string = null;
  ATMType: string = null;
  ATMFlag: boolean = null;
  ATMStatus: string= null;
  MSP: string = null;
  Bank: string = null;
  RoCode: string = null;
  Location: string = null;
  EmailDate: string = null;
  IncidentDate: string = null;
  FromDate: string = null;
  ToDate: string = null;
  TransactionTime: string = null;
  DisputedAmount:string = null;
  TransAmount: string = null;
  ReferenceNo: string = null;
  TransactionNo: string = null;
  CardNo: string = null;
  QueryCategory: string = null;
  ErrorCode: string = null;
  ErrorRemark: string = null;
  ErrorType: string = null;
  ErrorBucket: string = null;
  AtmException: number = null;
  CardException: number = null;
  RouteException: number = null;
  CustComments: string = null;
  CustomerActions: string = null;
  HOComments: string = null;
  InternalActions: string = null;
  TargetAmount: string= null;
  HORejectionJustification: string;
  Action: string = null;
  SubAction: string = null;
  AssignedTargetAmount: string = null;
  RecoveredAmount: string = null;
  PendingAmount: string = null;
  WoOrder: string = null;
  TerritoryDepositDate: string = null;
  DepositAmount: string = null;
  DelayDepositIssue: string = null;
  ReassignReason: string = null;
  ModeOfRecovery: string = null;
  DisputeTargetAmount: string = null;
  ToBeRecoveredAmount: string = null;
  HOApprovedRecoveryAmount: string = null;
  FirstCustodianCode: string = null;
  SecondCustodianCode: string = null;
  FirstCustodianName: string = null;
  SecondCustodianName: string = null;
  TerritoryComments: string = null;
  TerritoryRejectionJustification: string = null;
  CMSStatus: string = null;
  Justification: string = null;
  EmailID: string = null;
  Subject: string = null;
  Zone: string = null;
  HubLocation: string = null;
  AccountNo: string = null;
  EmailTime: string = null;
  DepositDate: string = null;
  OpenReginRemoveFlag: boolean = null;
  ProcessingRemarks: string = null;
  OverageDate: string = null;
  OverageAmount: string = null;
  CMSRemarks: string = null;
  HoSubmitted: boolean = null;
  LocSubmitted: boolean = null;

}

export class Overage {
  OverageDate: string= null;
  OverageAmount: string =null;
  OverageFlag: boolean =null;
}



export class ErrorCodeModel {
  errorCode: string = null;
  errorRemarks: string = null;
  errorType: string = null;
}




export class FileUpload {
   Id: number;
   FileName: string;
   FilePath: string;
   MSPActive: boolean;
   HOActive: boolean;
   LocationActive: boolean;
   TypeofAttatchent: string;
   Editingfiles: File;
   MSP: string;
  TicketID: string;
}


export class FileUploading {
  public upload: File[] = [];
  public fileuUploadingWithRights: FileUpload[];
}

export class FinalFileUploading {
  public fileUploadingFinal: FileUpload[];
}
//export class FileNeedToUpload {
//  Id: number;
//  FileName: string;
//  FilePath: string;
//  MSPActive: boolean;
//  HOActive: boolean;
//  LocationActive: boolean;
//  TypeofAttatchent: string;
//  EditingFiles: File;
//}


//export class EditingFileUpload {
//  needToUpload: FileNeedToUpload[] = [];
//}


export class RunRuleEngine {
  BatchId: string;
  MSP: string;
  TicketData: RunRuleEngineTicket [];

}

export class RunRuleEngineTicket {
  TicketId: string;
  Txn_No: number;
  ATMID: string;
  Date: string;
  Disputed_Amount: number;
  Ej_File: string;
}
