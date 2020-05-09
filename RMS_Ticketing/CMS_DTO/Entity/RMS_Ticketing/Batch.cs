using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("batch")]
    public class Batch
    {
        [Key]
        public int ID { get; set; }
        public string BatchID { get; set; }
        public string MSP { get; set; }
        public DateTime? Date { get; set; }
        public string FromEmail { get; set; }
        public string EmailSubject { get; set; }
        public string EmailContentType { get; set; }
        public string EmailBody { get; set; }
        public string Link { get; set; }
        public string To { get; set; }
        public string cc { get; set; }
        public string EmailIdentifier { get; set; }
        public string message_id { get; set; }
        public string DownloadPath { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
   public class tempBatchSet
    {
        public int ID { get; set; }
        public string BatchID { get; set; }
        public string MSP { get; set; }
        public DateTime Date { get; set; }
        public string FromEmail { get; set; }
        public string EmailSubject { get; set; }
        public string EmailBody { get; set; }
        public string Link { get; set; }
        public string cc { get; set; }
        public string EmailIdentifier { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public List<Ticket> tickets;
    }
}