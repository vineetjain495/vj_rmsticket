using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMSRepository.Models
{
    public class JqxGridPaginationModel
    {
        /// <summary>
        /// Page number info
        public int PageNum { get; set; }
        /// <summary>
        /// Page size info
        /// </summary>
        public int PageSize { get; set; }
        /// <summary>
        /// Search Parameter using Modal Object
        /// <summary>
        /// Sort Column
        /// </summary>
        public string Prefix { get; set; }
        /// <summary>
        /// Sort Order
        public string Sortdatafield { get; set; }

        public string SortOrder { get; set; }

        public filterGroups[] filterGroups { get; set; }

        public int TotalCount { get; set; }

        public int PageCount { get; set; }  

    }

    public class filterGroups
    {

        public filters[] filters { get; set; }

    }

    public class filters
    {
        public string field { get; set; }
        public string label { get; set; }
        public string condition { get; set; }
        public string value { get; set; }
        public string @operator { get; set; }
    }

}
