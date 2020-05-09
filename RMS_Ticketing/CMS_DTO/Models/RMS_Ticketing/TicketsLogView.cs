using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class TicketsLogView
    {
        public int ID { get; set; }

        public string TicketID { get; set; }

        public string CustCommentsType { get; set; }

        public string CustComments { get; set; }

        public string CustCommentsView { get; set; }

        public string AssignedTo { get; set; }

        public DateTime? CreatedDate { get; set; }

        public string CreatedBy { get; set; }
    }
}