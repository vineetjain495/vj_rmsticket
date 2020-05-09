using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("utilization_data")]
    public class UtilizationData
    {
        public int ID { get; set; }
        public string BatchID { get; set; }
        public string MSP { get; set; }        
        public string TicketId { get; set; }
      //  public DateTime Date { get; set; }
        public string CBRID { get; set; }
        public string ATMID { get; set; }
        public DateTime? EOD_Date { get; set; }
        public double? Overage { get; set; }
        public double? Overage_Usage { get; set; }
        public double? Overage_Balance { get; set; }
        public double? Mid_cash { get; set; }
        public double? Mid_cash_Usage { get; set; }
        public double? Mid_Cash_Balance { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public double? ATM_Deposit { get; set; }
        public double? ATM_Usage { get; set; }
        public double? ATM_Balance { get; set; }


    }
}