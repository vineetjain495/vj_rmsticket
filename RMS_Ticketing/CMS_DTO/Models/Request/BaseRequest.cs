using CMSRepository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMSDTO.Models.Request
{
   
    /// <summary>
    /// Base Request
    /// </summary>
    public class BaseRequest
    {
        public int CompanyID { get; set; }
        public EmployeeDetails LoginEmployeeDetails { get; set; }

    }
    /// <summary>
    /// Generic Base Request
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class BaseRequest<T> : BaseRequest
    {
        public T Entity { get; set; }
    }
}
