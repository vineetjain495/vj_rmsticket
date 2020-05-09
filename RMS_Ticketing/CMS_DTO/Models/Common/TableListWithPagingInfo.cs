using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMSRepository.Models
{
    /// <summary>
    /// Table List with total count
    /// </summary>
    public class TableListWithPagingInfo<T>
    {
        public TableListWithPagingInfo()
        {
            PageResponseModelObj = new PageResponseModel();
            TableList = new List<T>().AsEnumerable();
        }

        /// <summary>
        /// Table List
        /// </summary>
        public IEnumerable<T> TableList { get; set; }
        /// <summary>
        /// Page Response Modal 
        /// </summary>
        public PageResponseModel PageResponseModelObj { get; set; }

    }
}
