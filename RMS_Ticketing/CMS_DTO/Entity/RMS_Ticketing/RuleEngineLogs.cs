using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("runruleenginelogs")]
    public class RuleEngineLogs
    {
        [Key]
        public int ID { get; set; }

        public string BatchID { get; set; }

        public string TicketID { get; set; }

        public bool RanRuleEngineWeb { get; set; }

        public DateTime? RanRuleEngineWebDate { get; set; }

        public string RuleEngineRemarks { get; set; }

        public string RuleEngineInitiator { get; set; }
    }
}