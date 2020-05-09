using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("ticket")]
    public class Ticket
    {
        public int Id { get; set; }
        public string MSP { get; set; }
        public string BatchID { get; set; }
        public string Source { get; set; }
        public string TicketID { get; set; }
        public string Account { get; set; }
        public string QueryType { get; set; }
        public string QueryCategory { get; set; }
        public string EmailID { get; set; }

        public DateTime? EmailDate { get; set; }
        public DateTime? IncidentDate { get; set; }
        public string ATMID { get; set; }
        public string Bank { get; set; }
        public string Region { get; set; }
        public string Location { get; set; }
        public string HubLocation { get; set; }
        public double? DisputedAmount { get; set; }
        public DateTime? TransactonTime { get; set; }
        public string TransactionNo { get; set; }
        public double? TransAmount { get; set; }
        public string CardNo { get; set; }
        public string ReferenceNo { get; set; }
        public string AccountNo { get; set; }
        public string DisputeComments { get; set; }
        public string EJFilePath { get; set; }
        public string UploadFile { get; set; }
        public string Status { get; set; }
        public string RuleErrorCode { get; set; }
        public string ErrorCode { get; set; }
        public string ErrorRemark { get; set; }
        public bool? DisputeRejected { get; set; }
        public string Justification { get; set; }
        public DateTime? DepositDate { get; set; }
        public double? DepositAmount { get; set; }
        public double TargetAmount { get; set; } = 0.00;
        public double RecoveredAmount { get; set; } = 0.00;
        public string InternalAction { get; set; }
        public string HOComments { get; set; }
        public string AssignedTo { get; set; }
        public string FirstCustodianCode { get; set; }
        public string FirstCustodianName { get; set; }
        public string SecondCustodianCode { get; set; }
        public string SecondCustodianName { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string CustCommentsType { get; set; }
        public string CustCommentsBy { get; set; }
        public string CustComments { get; set; }
        public string CMSStatus { get; set; }
        public string CustStatus { get; set; }
        public string OldTicketId { get; set; }

        public string TicketAttRefId { get; set; }


        public string HoOwner { get; set; }

        public string LocOwner { get; set; }

        public int? ATMpkid { get; set; }

        public string ProcessingRemarks { get; set; }

        public bool HOSubmitted { get; set; }

        public bool LocSubmitted { get; set; }

        public DateTime? ShortageFromDate { get; set; }
     
      
        public string AlternateCardNo { get; set; }
        public bool? IsAtmExist { get; set; }

        public DateTime? LastEOD { get; set; }
        public DateTime? FirstEOD { get; set; }
        public string WOORDERNo { get; set; }
    }

    //[Table("oldrmstickets")]
    //public class OldRMSTickets
    //{

    //    public int ID { get; set; }
    //    public string accountname { get; set; }
    //    public string atmid { get; set; }
    //    public string cardno { get; set; }
    //    public DateTime? DispDate { get; set; }
    //    public double DisputeAmt { get; set; }
    //    public double RecoveredAmt { get; set; }
    //    public string RefNo { get; set; }
    //    public double TargetAmt { get; set; }
    //    public DateTime? TranDate { get; set; }
    //    public string TranNo { get; set; }
    //    public string cmsstatus { get; set; }
    //    public string custstatus { get; set; }
    //    public string ErrorCode { get; set; }
    //    public string feasibleid { get; set; }
    //    public string territorystatus { get; set; }
    //    public double pendingamount { get; set; }
    //    public string querycategory { get; set; }
    //    public string atmtype { get; set; }
    //    public DateTime? CreatedDate { get; set; }
    //    public string CreatedBy { get; set; }
    //    public string typecode { get; set; }
    //    public string type { get; set; }
    
    //}

}