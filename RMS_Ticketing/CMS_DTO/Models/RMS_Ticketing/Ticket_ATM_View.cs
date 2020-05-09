using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class Ticket_ATM_View
    {
        public int Id { get; set; }

        public string MSP { get; set; }

        public string BatchID { get; set; }

        public string TicketID { get; set; }

        public string OldTicketID { get; set; }

        public string Account { get; set; }

        public string QueryType { get; set; }

        public string QueryCategory { get; set; }

        public string EmailID { get; set; }

        public string Subject { get; set; }

        public string ATMIDs { get; set; }

        public string ATMID { get; set; }

        public string Bank { get; set; }

        public string Zone { get; set; }

        public string RoCode { get; set; }

        public string Location { get; set; }

        public string HubLocation { get; set; }

        public string TransAmount { get; set; }

        public string TransactionNo { get; set; }

        public string CardNo { get; set; }

        public string ReferenceNo { get; set; }

        public string AccountNo { get; set; }

        public string EJFilePath { get; set; }

        public string Status { get; set; }

        public string RuleErrorCode { get; set; }

        public string ErrorCodeView { get; set; }

        public string ErrorCode { get; set; }

        public string ErrorRemark { get; set; }

        public string AssignedTo { get; set; }

        public string AssignedTargetAmount { get; set; }

        public string TargetAmount { get; set; }

        public string RecoveredAmount { get; set; }
        
        public string PendingAmount { get; set; }

        public string FirstCustodianCode { get; set; }

        public string FirstCustodianName { get; set; }

        public string SecondCustodianCode { get; set; }

        public string SecondCustodianName { get; set; }

        public string CreatedBy { get; set; }

        public string ModifiedBy { get; set; }

        public string CustCommentsBy { get; set; }

        public string DisputeComments { get; set; }

        public string UploadFile { get; set; }

        public string Justification { get; set; }

        public string HORejectionJustification { get; set; }

        public string HOComments { get; set; }

        public string CustComments { get; set; }

        public DateTime? EmailDate_M { get; set; }

        public DateTime? IncidentDate_M { get; set; }

        public DateTime? TransactionTime_M { get; set; }

        public string EmailDate { get; set; }

        public string EmailTime { get; set; }

        public string IncidentDate { get; set; }

        public string TransactionTime { get; set; }


        public string DepositDate { get; set; }

        public DateTime? DepositDate_M { get; set; }

        public DateTime? CreatedDate_M { get; set; }

        public DateTime? ModifiedDate_M { get; set; }

        public string CreatedDate { get; set; }

        public string ModifiedDate { get; set; }


        public int? DisputeRejected { get; set; }

        public string DisputedAmount { get; set; }

        

        public string DepositAmount { get; set; }

        public string ATMType { get; set; }

        public int CardException { get; set; }

        public int AtmException { get; set; }

        public int RouteException { get; set; }

        public string RouteCode { get; set; }

        public List<FileUploaded> FileUplodedList { get; set; }

        public string CustomerActions { get; set; }

        public string InternalAction { get; set; }

        public string TerritoryRejectionJustification { get; set; }

        public string CMSStatus { get; set; }

        public string AcceptanceJustification { get; set; }

        public bool ATMFlag { get; set; }

        public string ATMStatus { get; set; }

        public string TicketAttRefId { get; set; }

        public Overage overageData { get; set; }

        public bool OpenReginRemoveFlag { get; set; }

        public string ProcessingRemarks { get; set; }

        public string CMSRemarks { get; set; }

        public bool HoSubmitted { get; set; }

        public bool LocSubmitted { get; set; }
    }


    public class Overage
    {
        public int ID { get; set; }

        public DateTime? OverageDate_M { get; set; }

        public string OverageDate { get; set; }

        public string OverageAmount { get; set; }

        public bool OverageFlag { get; set; }
    }

    public class FileUploaded
    {
        public int ID { get; set; }
        public string FilePath { get; set; }
        public string FileName { get; set; }
        public string FileTempPath { get; set; }
        public bool MSPActive { get; set; }
        public bool HOActive { get; set; }
        public bool LocationActive { get; set; }
        public string TypeofAttatchent { get; set; }
    }

}