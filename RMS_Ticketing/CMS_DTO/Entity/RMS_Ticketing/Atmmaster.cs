using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("atmmaster")]
    public class Atmmaster
    {
        [Key]
        public int pkid { get; set; }
        public string atmid { get; set; }
        public string atmcode { get; set; }
        public string Zone { get; set; }
        public string MSP { get; set; }
        public string RoCode { get; set; }
        public string RoName { get; set; }
        public string LocationCode { get; set; }
        public string LocationName { get; set; }
        public string AccountName { get; set; }
        public string BankName { get; set; }
        public string CityName { get; set; }
        public string HubLocationCode { get; set; }
        public string HubLocationName { get; set; }
        public string SubLocationCode { get; set; }
        public string SubLocationName { get; set; }
        public string State { get; set; }
        public string Address { get; set; }
        public DateTime? TakeOverDate { get; set; }
        public DateTime? HandOverDate { get; set; }
        public string Company { get; set; }
        public string status { get; set; }
        public string AtmType { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string RouteCode { get; set; }
        public string RouteName { get; set; }


    }
}