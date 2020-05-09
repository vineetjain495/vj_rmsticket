using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("recovery")]
    public class Recovery
    {
        [Key]
        public int RecoveryId { get; set; }

        public string RecoveryNo{get;set;}

        public string BatchId{get;set;}

        public string TicketId{get;set;}

        public string RefTicketId{get;set;}

        public string RecoveryFromEmpId{get;set;}

        public string EmployeeName{get;set;}

        public string Status{get;set;}

        public string Status2{get;set;}

        public string Comments{get;set;}

        public string CreatedBy{get;set;}

        public string ModifiedBy{get;set;}

        public DateTime? CreatedDate{get;set;}

        public DateTime? ModifiedDate{get;set;}

        public double? RecoveryAmount{get;set;}

        public double? ReceivedAmount{get;set;}

        public string RecoveryAssignedTo { get; set; }
    }

}