using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMSWebApp.App_Start
{
    /// <summary>
    /// VUE user data for a given session
    /// </summary>
    public class UserData
    {
        /// <summary>
        /// Ctor
        /// </summary>
        public UserData()
        {
            SessionData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Generated user token
        /// </summary>
        public string Token { get; set; }
        /// <summary>
        /// Unique user key (a combination of user name and host system id)
        /// </summary>
        public string UserKey { get; set; }
        /// <summary>
        /// User specific data for the current session
        /// </summary>
        public Dictionary<string, object> SessionData { get; set; }
    }
}