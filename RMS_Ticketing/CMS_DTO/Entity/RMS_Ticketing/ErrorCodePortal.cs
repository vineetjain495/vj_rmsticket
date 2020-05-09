using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("errorcodemasterdistinct")]
    public class ErrorCodePortal
    {
        [Key]
        public int ID { get; set; }

        public string errorcode { get; set; }

        public string Remarks { get; set; }

        public string type { get; set; }

        public string ErrorBucket { get; set; }
    }
}