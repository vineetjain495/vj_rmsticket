using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class Employee_Role_Model
    {
        public int ID { get; set; }

        public string EmpCode { get; set; }

        public string EmployeeName { get; set; }

        public string EmailID { get; set; }

        public int RoleCode { get; set; }

        public int RightsCode { get; set; }

        public string UserRole { get; set; }
    }
}