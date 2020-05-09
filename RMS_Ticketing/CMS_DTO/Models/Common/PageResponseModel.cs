using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMSRepository.Models
{
    /// <summary>
    /// Page Response Modal Class
    /// </summary>
    public class PageResponseModel
    {
        /// <summary>
        /// Total count of records in the table
        /// </summary>
        public int TotalCount { get; set; }
        /// <summary>
        /// Page Size info
        /// </summary>
        public int PageSize { get; set; }
        /// <summary>
        /// Page Number info
        /// </summary>
        public int PageNumber { get; set; }
        /// <summary>
        /// Page Count info
        /// </summary>
        public int PageCount { get; set; }
    }
}
