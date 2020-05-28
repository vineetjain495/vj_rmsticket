using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("employee_role")]
    public class Employee_Role
    {
        [Key]
        public int ID { get; set; }

        public string Type{get;set;}

        public string Type_EmpCode{get;set;}

        public string EmployeeName{get;set;}

        public string Password{get;set;}

        public string EmailID { get; set; }

        public string MobileNumber { get; set; }

        public string CreatedBy{get;set;}

        public string ModifiedBy{get;set;}

        public DateTime? CreatedDate{get;set;}

        public DateTime? ModifiedDate{get;set;}

        public DateTime? FromDate{get;set;}

        public DateTime? ToDate{get;set;}

        public bool IsActive{get;set;}

        public int? TypeCode{get;set;}

        public int? RoleCode{get;set;}

        public int? RightsCode{get;set;}
        public string MspCategory { get; set; }
        public List<string> Hub { get; set; }
        public string MGRCODE { get; set; }
    }
}