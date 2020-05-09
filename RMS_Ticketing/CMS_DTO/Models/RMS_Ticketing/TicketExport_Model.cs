using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class TicketExport_Model
    {

        public string Batch_ID { get; set; }

        public string Email_Subject { get; set; }

        public string  Email_Adderss { get; set; }

        public string Email_Date { get; set; }

        public string Email_Time { get; set; }

        public string CRA { get; set; }

        public string CMS_DisputeID { get; set; }

        public string Query_Type { get; set; }

        public string Query_Category { get; set; }

        public string ATM_ID { get; set; }

        public string ATM_Type { get; set; }

        public string MSP { get; set; }

        public string Bank_Name { get; set; }

        public string Territory { get; set; }

        public string  Location { get; set; }

        public string Incident_Date { get; set; }

        public string Dispute_Amount { get; set; }

        public string Reference_Number { get; set; }

        public string Card_Number { get; set; }

        public string Account_Number { get; set; }

        public string Transaction_Amount { get; set; }

        public string Transaction_Number { get; set; }

        public string Transaction_Time { get; set; }

        public string Error_Code { get; set; }

        public string Error_Bucket { get; set; }

        public string CMS_JUTIFICATION { get; set; }

        public string CMS_STATUS { get; set; }

        public string Deposited_Date { get; set; }

        public string Deposited_Amount { get; set; }

        public string Liability_Amount { get; set; }

        public string CMS_Closure_Comments { get; set; }

        public string Assigned_To { get; set; }

        public string Employee_Name { get; set; }

        public string Role_Type { get; set; }

        public string OldTicket_ID { get; set; }

        public string Internal_Status { get; set; }

        public string First_Employee_Code { get; set; }

        public string First_Employee_Name { get; set; }

        public string Second_Employee_Code { get; set; }

        public string Second_Employee_Name { get; set; }
    
        public string Created_Date { get; set; }
    }
}