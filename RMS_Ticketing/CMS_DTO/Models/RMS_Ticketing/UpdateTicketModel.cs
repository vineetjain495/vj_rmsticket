using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class UpdateTicketModel
    {

        public string BatchID { get; set; }

        public string TicketId { get; set; }

        public string TicketAttRefId { get; set; }

        public string QueryType { get; set; }

        public string ATMID { get; set; }

        public string ATMType { get; set; }

        public string MSP { get; set; }

        public string Bank { get; set; }

        public string RoCode { get; set; }

        public string Location { get; set; }

        public string HubLocaation { get; set; }

        public string EmailDate { get; set; }

        public string IncidentDate { get; set; }

        public string FromDate { get; set; }

        public string ToDate { get; set; }

        public string TransactionTime { get; set; }

        public string DisputedAmount { get; set; }

        public bool DisputedRejection { get; set; }

        public string TransAmount { get; set; }

        public string ReferenceNo { get; set; }

        public string TransactionNo { get; set; }

        public string CardNo { get; set; }

        public string QueryCategory { get; set; }

        public string ErrorCode { get; set; }

        public string ErrorType { get; set; }

        public string ErrorBucket { get; set; }

        public string ErrorRemarks { get; set; }

        public int CardException { get; set; }


        public string CustComments { get; set; }

        public string CustomerActions { get; set; }

        public string HOComments { get; set; }

        public string InternalActions { get; set; }

        public string TargetAmount { get; set; }

        public string HORejectionJustification { get; set; }

        public string Justification { get; set; }

        

        public string Action { get; set; }


        public string SubAction { get; set; }

        public string AssignedTargetAmount { get; set; }

        public string RecoveredAmount { get; set; }

        public string PendingAmount { get; set; }

        public string WoOrder { get; set; }

        public string TerritoryDepositDate { get; set; }

        public string DepositAmount { get; set; }

        public string DelayDepositIssue { get; set; }

        public string AssignedTo { get; set; }

        public string ReassignReason { get; set; }

        public string ModeOfRecovery { get; set; }

        public string DisputeTargetAmount { get; set; }

        public string ToBeRecoveredAmount { get; set; }

        public string HOApprovedRecoveryAmount { get; set; }

        public string FirstCustodianCode { get; set; }

        public string SecondCustodianCode { get; set; }

        public string FirstCustodianName { get; set; }

        public string SecondCustodianName { get; set; }

        public string TerritoryComments { get; set; }

        public string TerritoryRejectionJustification { get; set; }

        public string CMSStatus { get; set; }

        public string AssigneToRecovery { get; set; }

        public string OverageDate { get; set; }

        public string OverageAmount { get; set; }

        public string DepositDate { get; set; }

        public string CMSRemarks { get; set; }

    }


    public class Update_Logs {
        public string UpdateLogs_Value { get; set; }

        public string UpdateQuery_Value { get; set; }
    } 
}