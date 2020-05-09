using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("errorcodemaster")]
    public class ErrorCodeMaster
    {
        [Key]
        public int ID { get; set; }
        public string ErrorCode { get; set; }
        public string Remarks { get; set; }
        public string Type { get; set; }
        public string ErrorBucket { get; set; }
        public string Category { get; set; }
        public bool IsActive { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? ModifiedOn { get; set; }
        public string Machine_Make { get; set; }
        public string Module_code { get; set; }
        public string Module_Discreption { get; set; }
        public string TD_status  { get; set; }
        public string TD_status_Discreption { get; set; }
        public string M_status_error { get; set; }
        public string M_status_error_Discreption { get; set; }
        public bool NextTrans_Flag { get; set; }
        
    }
    [Table("errorcodemasterdistinct")]
    public class ErrorCodeMasterdistinct
    {
        [Key]
        public int ID { get; set; }
        public string ErrorCode { get; set; }
        public string Remarks { get; set; }
        public string Type { get; set; }
        public string ErrorBucket { get; set; }
       
    }
}