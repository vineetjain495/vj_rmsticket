using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMSRepository.Models
{
    public class EmployeeDetails
    {
        public int ID { get; set; }
        public string EmpCode { get; set; }
        public string EmpFullName { get; set; }
        public List<string> Zone { get; set; }
        public List<string> Region { get; set; }
        public List<string> Location { get; set; }
        public List<string> HubLocation { get; set; }
        public int AssignedRoleID { get; set; }
        public int AssignedRightsID { get; set; }
        public int CompanyID { get; set; }
        public string Email { get; set; }
        public int MobileNumber { get; set; }
        public bool  ResetPassword { get; set; }
        public string UserType { get; set; }
        //public string Region { get; set; }
        //public string Location { get; set; }
        //public string HubLocation { get; set; }
        //public string SubLocation { get; set; }
        //public HubLocation HubLocationMaster { get; set; }
        //// [ForeignKey("SubLocation")]
        //public SubLocation SubLocations { get; set; }
        //// [ForeignKey("Location")]
        //public Location Locations { get; set; }
        //// [ForeignKey("Region")]
        //public Region Regions { get; set; }
    }
}
