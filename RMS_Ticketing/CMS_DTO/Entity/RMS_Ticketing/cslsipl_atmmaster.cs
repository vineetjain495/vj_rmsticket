using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("cslsipl_atmmaster")]
    public class cslsipl_atmmaster
    {
        public string atmid { get; set; }
        public string RoCode { get; set; }
        public string LocationCode { get; set; }
        public string AccountName { get; set; }
        public string BankName { get; set; }
        public string CityName { get; set; }
        public string HubLocationCode { get; set; }
        public string SubLocationCode { get; set; }
        public string State { get; set; }
        public string Address { get; set; }
        public DateTime TakeOverDate { get; set; }
        public DateTime HandOverDate { get; set; }
        public string Company { get; set; }
        public string status { get; set; }
        public string AtmType { get; set; }



    }
}