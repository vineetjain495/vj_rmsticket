using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("mspconfiguration")]
    public class MSP
    {
        public int ID { get; set; }
        public string DomainName { get; set; }
        public string MSPName { get; set; }
        public string ATMID { get; set; }
        public DateTime? Date { get; set; }
        public string Password { get; set; }
        public string ImageLogo { get; set; }
        public bool IsActive { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

    }
}