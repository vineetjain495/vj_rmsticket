using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class AssignTicket
    {
        public List<string> Emp_ID { get; set; }
        public string Last_Type_EmpCode { get; set; }
        public string ticket_count { get; set; }
   
    }
}