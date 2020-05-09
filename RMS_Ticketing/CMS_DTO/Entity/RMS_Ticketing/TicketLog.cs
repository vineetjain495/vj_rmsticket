using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("ticketlog")]
    public class TicketLog
    {
        public int ID { get; set; }
        public string MSP { get; set; }
        public string BatchID { get; set; }      
        public string TicketId { get; set; }
        public string Status { get; set; }
        public bool DisputeRejected { get; set; }
        public string Justification { get; set; }
        public string InternalAction { get; set; }
        public string UploadedFileName { get; set; }
        public string UploadedFile { get; set; }
        public string CustCommentsType { get; set; }
        public string CustCommentsBy { get; set; }
        public string CustComments { get; set; }      
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string Source { get; set; }
        public string AssignedTo { get; set; }

    }
}