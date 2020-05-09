using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.Logins
{
    [Table("userloginhistory")]
    public class UserLoginHistory
    {
        [Key]
        public int ID { get; set; }

        public string UserID { get; set; }

        public DateTime? LoginFrom { get; set; }

        public DateTime? LoginTo { get; set; }

        public bool IsActive { get; set; }

        public string CreatedBy { get; set; }

        public DateTime? CreatedOn { get; set; }

        public string ModifiedBy { get; set; }

        public DateTime? ModifiedOn { get; set; }
    }
}