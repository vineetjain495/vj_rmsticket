using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("employee_hierarchy")]
    public class Employee_Hierarchy
    {
        [Key]
        public int ID { get; set; }

        public string EmployeeCode{get;set;}

        public string Region_code { get; set; }

        public string Loc_Code{get;set;}

        public string Hub_Location_Code { get; set; }

        public string Sub_Location_Code { get; set; }

        public string CreatedBy{get;set;}

        public string ModifiedBy{get;set;}

        public DateTime? CreatedDate{get;set;}

        public DateTime? ModifiedDate{get;set;}

        public DateTime? FromDate{get;set;}

        public DateTime? ToDate{get;set;}

        public bool IsActive{get;set;}

        public string Zone { get; set; }
    }
}