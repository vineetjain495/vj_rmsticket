using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
   public class ATM_Master_model
    {
        [Key]
       
        public string RoCode{get;set;}
        public string RoName { get; set; }
        
        public string LocationCode{get;set;}
        public string LocationName { get; set; }

        public string HubLocationCode{get;set;}
        public string HubLocationName { get; set; }
       
      

}

}