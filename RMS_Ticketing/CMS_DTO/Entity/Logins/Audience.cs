using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LoginWebAPI.Entities
{
    public class Audience
    {
        [Key]
        [MaxLength(32)]
        public string ClientId { get; set; }

        [MaxLength(80)]
        [Required]
        public string Base64Secret { get; set; }

        [MaxLength(100)]
        [Required]
        public string Name { get; set; }

        [MaxLength(100)]
        [Required]
        public string grant_type { get; set; }
        

        [MaxLength(100)]
        [Required]
        public string CompanyCode { get; set; }

        [MaxLength(100)]
        [Required]
        public string CustomerCode { get; set; }

        [MaxLength(500)]
        [Required]
        public string ApiKey { get; set; }


    }
}