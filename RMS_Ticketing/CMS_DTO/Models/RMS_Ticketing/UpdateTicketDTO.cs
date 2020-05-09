using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class UpdateTicketDTO
    {
        public string BatchID { get; set; }
        public string MSP { get; set; }
        public string Link { get; set; }
        public bool RunRuleEngine { get; set; }
        public List<TicketData> TicketsData { get; set; }
    }
     
    public class TicketData
    {
        //public string BatchID { get; set; }
        //public string MSP { get; set; }
        public string TicketID { get; set; }
        public string ATMID { get; set; }
        public string DisputeComments { get; set; }
        public string UploadFile { get; set; }
        public string Status { get; set; }
        public string ErrorCode { get; set; }
        public string ErrorRemark { get; set; }
        public bool DisputeRejected { get; set; }
        public string FirstCustodianCode { get; set; }
        public string FirstCustodianName { get; set; }
        public string SecondCustodianCode { get; set; }
        public string SecondCustodianName { get; set; }
        public string Justification { get; set; }
        public string CMSStatus { get; set; }
        public string InternalAction { get; set; }
        public string CustCommentsType { get; set; }
        public string CustCommentsBy { get; set; }
        public string CustComments { get; set; }
        public string[] EJFilePath { get; set; }
        public string[] OtherAttachments { get; set; }
        public string ModifiedBy { get; set; }
        public string Source { get; set; }
        public string ProcessingRemarks { get; set; }
        public DateTime? LastEOD { get; set; }
        public DateTime? FirstEOD { get; set; }
        public string WOORDERNo { get; set; }
        public DateTime? TransactonTime { get; set; }
        public string AccountNo { get; set; }
        public string CardNo { get; set; }
        //  public DateTime? ShortageFromDate { get; set; }
        // public string[] OtherAttachments { get; set; }
        public UtilizationDataDTO utilizationData { get; set; }
    }

    public class UtilizationDataDTO
    {
        public int ID { get; set; }
        public string ATMID { get; set; }
        public string TicketID { get; set; }
        public DateTime? IncidentDate { get; set; }
        public string TransactionNo { get; set; }
        public string CBRID { get; set; }
        public DateTime? EOD_Date { get; set; }
        public double? Overage { get; set; }
        public double? Overage_Usage { get; set; }
        public double? Overage_Balance { get; set; }
        public double? Mid_cash { get; set; }
        public double? Mid_cash_Usage { get; set; }
        public double? Mid_Cash_Balance { get; set; }
        public double? ATM_Deposit { get; set; }
        public double? ATM_Usage { get; set; }
        public double? ATM_Balance { get; set; }

    }

    public class RunRuleEngineModelDTO
    {

        public string BatchId { get; set; }

        public string MSP { get; set; }

        public string MSP_Domain { get; set; }

        public List<RunRuleEngineTicketDTO> TicketData { get; set; }

    }



    public class RunRuleEngineTicketDTO
    {
        public string TicketId { get; set; }

        public string Txn_No { get; set; }

        public string ATMID { get; set; }

        public string Date { get; set; }

        public double? Disputed_Amount { get; set; }

        public string[] Ej_File { get; set; }
        public double? Transaction_Amount { get; set; }
    }

}