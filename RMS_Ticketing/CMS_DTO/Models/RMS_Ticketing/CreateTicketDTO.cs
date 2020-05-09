using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class CreateTicketDTO
    {
     //   public string BatchID { get; set; }
        public string MSP { get; set; }
        public DateTime Date { get; set; }
        public string FromEmail { get; set; }
        public string EmailSubject { get; set; }
        public string EmailContentType { get; set; } 
        public string EmailBody { get; set; }
        public string Link { get; set; }
        public string To { get; set; }
        public string cc { get; set; }
        public string EmailIdentifier { get; set; }
        public string message_id { get; set; }
        public string DownloadPath { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public List<TicketDTO>  TicketsData { get; set; }
    }
    public class TicketDTO
    {
        public string TicketID { get; set; }
        public string Type { get; set; }
        public string QueryType { get; set; }
        public string QueryCategory { get; set; }
        public DateTime IncidentDate { get; set; }
        public string ATMID { get; set; }
        public string Bank { get; set; }
        public string Account { get; set; }
        public string Location { get; set; }
        public double DisputedAmount { get; set; }
        public DateTime? TransactonTime { get; set; }
        public string TransactionNo { get; set; }
        public double? TransactionAmount { get; set; }
        public string AccountNo { get; set; }
        public string CardNo { get; set; }
        public string ReferenceNo { get; set; }
        //public string AccountNo { get; set; }
        public string DisputeComments { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string UploadFile { get; set; }
        public string[] EJFilePath { get; set; }
        public string Status { get; set; }
        public string ErrorCode { get; set; }
        public string ErrorRemark { get; set; }
        public bool DisputeRejected { get; set; }
        public string Justification { get; set; }
        public DateTime? DepositDate { get; set; }
        public float DepositAmount { get; set; }        
        public string FirstCustodianCode { get; set; }
        public string FirstCustodianName { get; set; }
        public string SecondCustodianCode { get; set; }
        public string SecondCustodianName { get; set; }
        public string InternalAction { get; set; }
        public string HOComments { get; set; }
        public string AssignedTo { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }       
        public string ModifiedBy { get; set; }      
        public string Source { get; set; }
        public string CustCommentsType { get; set; }
        public string CustCommentsBy { get; set; }
        public string CustComments { get; set; }     
        public string CMSStatus { get; set; }
        public string CustStatus { get; set; }
        public string OldTicketId { get; set; }
        public bool? AttachmentsVisibleToLocation { get; set; }
        public double TargetAmount { get; set; } = 0.00;
        public double RecoveredAmount { get; set; } = 0.00;
        public bool IsAtmExist { get; set; } = true;
        public string ProcessingRemarks { get; set; }
        public DateTime? ShortageFromDate { get; set; }
        public string[] OtherAttachments { get; set; }
        //public string[] EJAttachments { get; set; }
        public UtilizationDataDTO utilizationData { get; set; }
    }

   

    //public class Batch_Source_File_UploadDTO
    //{
    //    public string BatchID { get; set; }
    //    public string FIleName { get; set; }
    //    public string FileBase64string { get; set; }
    //}   

    public class Ticket_File_UploadDTO
    {
        public string MSP { get; set; }
        public string BatchID { get; set; }
        public List<Ticket_File_UploadChildDTO>  ticket_File_UploadChild { get; set; }
        //public string EJName { get; set; }
        //public string FileBase64string { get; set; }

    }
    public class Ticket_File_UploadChildDTO
    {
     
        public string TicketID { get; set; }
        public string EJName { get; set; }
        public string FileType { get; set; }
        public string Ejfile { get; set; }

    }
    public class EJ_FileReaderDTO
    {
        public string MSP { get; set; }
        public string BatchID { get; set; }
        public string TicketID { get; set; }
        public string EJName { get; set; }
    }
    public class CBR_DataReaderDTO
    {
        public string ATMID { get; set; }
        public DateTime Date { get; set; }
    }

    //public class Update_Ticket_StatusDTO
    //{
    //    public string MSP { get; set; }
    //    public string BatchID { get; set; }
    //    public List<Update_Ticket_ChildDTO>  update_Ticket_ChildDTO { get; set; }
  
    //}
    //public class Update_Ticket_ChildDTO
    //{
    //    public string TicketID { get; set; }
    //    public string Date { get; set; }
    //    public string Username { get; set; }
    //    public string Status { get; set; }
    //    public string Justification { get; set; }
    //    public UtilizationDataDTO utilizationData { get; set; }
    //}

    public class Resolution_Log_UpdateDTO
    {
        public string MSP { get; set; }
        public string BatchID { get; set; }
        public List<Resolution_Log_UpdateChildDTO> resolution_Log_UpdateChildDTO { get; set; }
    }
    public class Resolution_Log_UpdateChildDTO
    {
        public string TicketID { get; set; }
        public string LogFile { get; set; }

    }
    public class DuplicateCheck_ticketDTO
    {
        public string MSP { get; set; }
        public string BatchID { get; set; }
        public List<DuplicateCheck_ticketChildDTO>  TicketList    { get; set; }
     
    }
    public class DuplicateCheck_ticketChildDTO
    {
        public string ATMID { get; set; }
        public string QueryType { get; set; }
        public DateTime DisputeDate { get; set; }
        public string TransNo { get; set; }
        public decimal TransAmount { get; set; }
    }
    public class CheckAtmExistDTO
    {
        public string MSP { get; set; }
        public List<CheckAtmExistChildDTO> ATMList { get; set; }
              
    }
    public class CheckAtmExistChildDTO
    {
        public string ATMID { get; set; }
        public DateTime Date { get; set; }
    }
    public class CheckAtmExistResponseDTO
    {    
        public List<ChildAtmRepsponse> ATMList { get; set; }

    }
    public class ChildAtmRepsponse
    {
        public string ATMCode { get; set; }
        public string ATMID { get; set; }
        public string Type { get; set; }
        public string MSP { get; set; }
        public string CompanyName { get; set; }
        public string AccountName { get; set; }
        public string Bank { get; set; }
        public string Region { get; set; }
        public string Location { get; set; }
        public string HubLocation { get; set; }
        public bool Flag { get; set; }
    }
    public class MSPPassswordConfigDTO
    {
        public string MSP { get; set; }
    //    public string ATMID { get; set; }
    //    public DateTime Date { get; set; }

    }

    public class RepeatCardCheckDTO
    {
        public string CardNo { get; set; }
        public DateTime TransDate { get; set; }

    }
    public class RepeatCardCheckResponseDTO
    {
        public string CardNo { get; set; }
        public bool IsRepeatCard { get; set; }
        public int RepeatCount { get; set; }

    }
    public class CaseCountATMWiseDTO
    {
        public string ATMId { get; set; }
        public DateTime TransDate { get; set; }

    }
    public class CaseCountATMWiseResponseDTO
    {
        public string ATMId { get; set; }
        public int TotalCaseCount { get; set; }
        public int AcceptedCaseCount { get; set; }

    }
    public class ErrorListDTO
    {
        public string modulecode { get; set; }
        public string td_status { get; set; }
        public string M_status_error { get; set; }

    }
    public class EmailResponseAPIDTO
    {
        public string BatchID { get; set; }
        public bool Flag { get; set; }
        public string CompleteBatchResponse { get; set; }
        public string EmailsResponsePath { get; set; }

    }

    public class GetBatchDetailsRequestDTO
    {
        public string BatchID { get; set; }
    }
        public class GetBatchDetailsResponseDTO
    {
        public string TicketID { get; set; }
        public string ATMID { get; set; }
        public DateTime? IncidentDate { get; set; }
        public DateTime? LastEOD { get; set; }
        public DateTime? FirstEOD { get; set; }
        public string WOORDERNo { get; set; }

    }

    public class EmailData
    {
        public string To { get; set; }
        public string Subject { get; set; }
        public string BodyText { get; set; }
        public string BodyHtml { get; set; }
        public string CC { get; set; }
        public DateTime? IncidentDate { get; set; }
        public DateTime? LastEOD { get; set; }
        public DateTime? FirstEOD { get; set; }
        public string WOORDERNo { get; set; }

    }


}

