using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("apilog")]
    public class APILog
    {
        [Key]
        public int RequestID { get; set; }
        public string RequestContentType { get; set; }
        public string RequestContent { get; set; }
        public string RequestUri { get; set; }
        public string RequestMethod { get; set; }
        public DateTime? RequestTimestamp { get; set; }
        public string ResponseContentType { get; set; }
        public string ResponseContent { get; set; }
        public HttpStatusCode ResponseStatusCode { get; set; }
        public DateTime? ResponseTimestamp { get; set; }

    }

}
