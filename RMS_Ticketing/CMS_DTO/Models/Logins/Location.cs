using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMSRepository.Models
{
  
    public class Location
    {

        public int ID { get; set; }
        public string LocationName { get; set; }
        public string LocationCode { get; set; }
        public string RegionCode { get; set; }
        public int CompanyID { get; set; }
    }
}
