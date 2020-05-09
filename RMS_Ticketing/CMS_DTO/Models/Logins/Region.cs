using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace CMSRepository.Models
{

    public class AreaOffice
    {
        public int ID { get; set; }
        public string AreaOfficeName { get; set; }
        public string AreaOfficeCode { get; set; }
        public int CompanyID { get; set; }
        public List<Location> Locations { get; set; }
    }
}
