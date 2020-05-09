using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("ticketattachments")]
    public class TicketAttachments
    {
        [Key]
        public int Id { get; set; }

        public string TicketId{get;set;}

        public string TypeOfAttachment{get;set;}

        public string FilePath{get;set;}

        public string CreatedBy{get;set;}

        public DateTime? CreatedOn{get;set;}

        public bool VisibleToMSP{get;set;}

        public bool VisibleToHO{get;set;}

        public bool VisibleToLocation{get;set;}
    }
}