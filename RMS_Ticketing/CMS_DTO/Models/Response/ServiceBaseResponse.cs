using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMSDTO.Models.Response
{
    public class ServiceBaseResponse<T>
    {
        public T Body { get; set; }
        public ServiceResponseHeader Header { get; set; }
    }

    public class ServiceResponseHeader
    {
        public string ErrorId { get; set; }
        public string Message { get; set; }
        public string Status { get; set; }
        public int StatusCode { get; set; }
    }
}
