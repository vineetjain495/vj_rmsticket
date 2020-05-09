using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class QueryandCategoryType
    {
        public List<string> queryType { get; set; }

        public List<string> queryCategory { get; set; }

        public List<string> errorCodeList { get; set; }

        public List<string> customerActions { get; set; }

        public List<string> internalActions { get; set; }

        public List<string> acceptanceJustification { get; set; }

        public List<string> territoryRejectionJustificationOptions { get; set; }

        public List<string> justification { get; set; }

        public List<string> cmsStatus { get; set; }

        public string errorBucket { get; set; }

        public string errorType { get; set; }

        public string errorCode { get; set; }

        public string errorRemarks { get; set; }

        public string Bank { get; set; }

        public string Account { get; set; }

        public string Location { get; set; }

        public string AtmID { get; set; }

        public string IncidentDate { get; set; }
    }
}