using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace CMSDTO.Models.Response
{
    /// <summary>
    /// Base Response
    /// </summary>
    public class BaseResponse 
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        // public string UserToken { get; set; }
        [DataMember(Name = "access_token")]
        public AccessTokenResponse UserToken { get; set; }

    }
    /// <summary>
    /// Generic Base Response
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class BaseResponse<T> : BaseResponse
    {
        public T Entity { get; set; }

    }

}
