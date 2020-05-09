using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.Logins
{
    [Table("employee_role")]
    public class Employee_info
    {
        [Key]
        public int ID { get; set; }
        public string Type { get; set; }
        public Nullable<int> TypeCode { get; set; }
        public string Type_EmpCode { get; set; }
        public string EmployeeName { get; set; }
        public string MobileNumber { get; set; }
        public string Password { get; set; }
        public string EmailId { get; set; }
        public Nullable<int> RoleCode { get; set; }
        public Nullable<int> RightsCode { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public Nullable<System.DateTime> FromDate { get; set; }
        public Nullable<System.DateTime> ToDate { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public string EncryptOtp { get; set; }
        public Nullable<bool> PassChangeFlag { get; set; }
        public Nullable<bool> UserNotAllocation { get; set; }
        public string MspCategory { get; set; }
        //public List<string> Hub { get; set; }
    }
}