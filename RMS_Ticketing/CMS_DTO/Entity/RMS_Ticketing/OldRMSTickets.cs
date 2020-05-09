using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("oldrmstickets")]
    public class OldRMSTickets
    {
        public int ID { get; set; }

        public string accountname { get; set; }

        public string atmid { get; set; }

        public string cardno { get; set; }

        public string RefNo { get; set; }

        public string TranNo { get; set; }

        public string cmsstatus { get; set; }

        public string custstatus { get; set; }

        public string errorcode { get; set; }

        public string feasibleid { get; set; }

        public string territorystatus { get; set; }

        public string querycategory { get; set; }

        public string atmtype { get; set; }

        public string CreatedBy { get; set; }

        public string typecode { get; set; }

        public string type { get; set; }

        public DateTime? DispDate { get; set; }

        public DateTime? TranDate { get; set; }

        public DateTime? CreatedDate { get; set; }

        public double? DisputeAmt { get; set; }

        public double? RecoveredAmt { get; set; }

        public double? TargetAmt { get; set; }

        public double? pendingamount { get; set; }
        public string AlternateCardNo { get; set; }
    }
}