using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("errorrolemapping")]
    public class ErrorRoleMapping
    {
        [Key]
        public int ID { get; set; }

        public int RoleID{get;set;}

        public int ErrorID{get;set;}

        public string CreatedBy{get;set;}

        public string ModifiedBy{get;set;}

        public DateTime? CreatedDate{get;set;}

        public DateTime? ModifiedDate{get;set;}

        public bool IsActive{get;set;}
    }
}