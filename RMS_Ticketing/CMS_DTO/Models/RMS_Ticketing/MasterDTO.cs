using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class MasterDTO
    {
        public int ID { get; set; }
        public string Type { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
                  
    }
    public class ErrorMasterDTO
    {
        public int SNo { get; set; }
        public string MachineMake { get; set; }
        public string Modulecode { get; set; }
        public string Module_Discreption { get; set; }
        public string TD_status { get; set; }
        public string TD_status_Discreption { get; set; }
        public string M_status_error { get; set; }
        public string M_status_error_Discreption { get; set; }
        public string Errortype { get; set; }
        public string Type { get; set; }
        public string ErrorBucket { get; set; }
        public string Category { get; set; }
        public string ErrorCode { get; set; }
        public string Remarks { get; set; }
        public bool NextTrans_Flag { get; set; }
    }
}