using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class TicketViewer
    {
        public int Id { get;set; }

        public string MSP{get;set;}

        public string TicketID{get;set;}

        public string ATMIDs{get;set;}

        public string ATMID { get; set; }

        public string Location{get;set;}

        public string RoCode { get; set; }

        public string LocationCode { get; set; }

        public string Status{get;set;}

        public string AssignedTo{get;set;}

        public string CreatedBy{get;set;}

        public string ModifiedBy{get;set;}

        public string CustCommentsBy{get;set;}

        public string CustComments{get;set;}

        public string Viewcomment { get; set; }

        public DateTime? CreatedDate{get;set;}

        public DateTime? TransactionTime { get; set; }

        public DateTime? ModifiedDate{get;set;}

        public double? TransactionAmount { get; set; }

        public string TransactionNumber { get; set; }

        public double? DisputeAmount { get; set; }

        public string Bank { get; set; }

        public DateTime? IncidentDate { get; set; }

        public string OldTicketId { get; set; }

        public string OldTicketStatus { get; set; }

        

    }
}