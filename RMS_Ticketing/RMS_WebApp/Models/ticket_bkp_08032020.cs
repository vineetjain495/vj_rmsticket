//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApp.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class ticket_bkp_08032020
    {
        public int Id { get; set; }
        public string MSP { get; set; }
        public string BatchID { get; set; }
        public string TicketID { get; set; }
        public string Account { get; set; }
        public string Type { get; set; }
        public string QueryType { get; set; }
        public string QueryCategory { get; set; }
        public string EmailID { get; set; }
        public Nullable<System.DateTime> EmailDate { get; set; }
        public Nullable<System.DateTime> IncidentDate { get; set; }
        public string ATMID { get; set; }
        public string Bank { get; set; }
        public string Region { get; set; }
        public string Location { get; set; }
        public string HubLocation { get; set; }
        public Nullable<double> DisputedAmount { get; set; }
        public Nullable<System.DateTime> TransactonTime { get; set; }
        public string TransactionNo { get; set; }
        public Nullable<double> TransAmount { get; set; }
        public string CardNo { get; set; }
        public string ReferenceNo { get; set; }
        public string AccountNo { get; set; }
        public string DisputeComments { get; set; }
        public string UploadFile { get; set; }
        public string EJFilePath { get; set; }
        public string Status { get; set; }
        public string ErrorCode { get; set; }
        public string ErrorRemark { get; set; }
        public Nullable<bool> DisputeRejected { get; set; }
        public string Justification { get; set; }
        public Nullable<System.DateTime> DepositDate { get; set; }
        public Nullable<double> DepositAmount { get; set; }
        public string InternalAction { get; set; }
        public string HOComments { get; set; }
        public string AssignedTo { get; set; }
        public string FirstCustodianCode { get; set; }
        public string FirstCustodianName { get; set; }
        public string SecondCustodianCode { get; set; }
        public string SecondCustodianName { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string CustCommentsType { get; set; }
        public string CustCommentsBy { get; set; }
        public string CustComments { get; set; }
        public string Source { get; set; }
        public string RuleErrorCode { get; set; }
        public string CMSStatus { get; set; }
        public string CustStatus { get; set; }
        public string OldTicketId { get; set; }
        public Nullable<double> TargetAmount { get; set; }
        public Nullable<double> RecoveredAmount { get; set; }
        public string TicketAttRefId { get; set; }
        public Nullable<bool> IsAtmExist { get; set; }
        public string ShortageFromDate { get; set; }
        public string HoOwner { get; set; }
        public string LocOwner { get; set; }
        public string ProcessingRemarks { get; set; }
        public Nullable<int> ATMpkid { get; set; }
        public Nullable<System.DateTime> HOInitialAssignedDT { get; set; }
        public Nullable<bool> HOSubmitted { get; set; }
        public Nullable<System.DateTime> AssignedToLocationDT { get; set; }
        public Nullable<bool> LocSubmitted { get; set; }
        public Nullable<System.DateTime> LocationCompletionDT { get; set; }
        public string AlternateCardNo { get; set; }
    }
}
