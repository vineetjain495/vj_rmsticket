using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class MSPDTO
    {
        public int ID { get; set; }
        public string DomainName { get; set; }
        public string MSPName { get; set; }
        public string Password { get; set; }
        public string ImageLogo { get; set; }
        public int IsActive { get; set; }

    }
}