using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class CreateTicketView
    {
        public string QueryType { get; set; }
        public string QueryCategory { get; set; }
        public string IncidentDate { get; set; }
        public string EmailDate { get; set; }
        public string ATMID { get; set; }
        public string Bank { get; set; }
        public string Account { get; set; }
        public string Location { get; set; }
        public string DisputedAmount { get; set; }
        public string MSP { get; set; }
        public string TransactionNo { get; set; }
        public string TransactionAmount { get; set; }
        public string CardNo { get; set; }
        public string ReferenceNo { get; set; }
        public string AccountNo { get; set; }
        public string DisputeComments { get; set; }
        public string FromDate { get; set; }
        public string ToDate { get; set; }
        public HttpPostedFileBase upload { get; set; }
    }
}