using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Caching;
using System.Web.Security;

namespace CMSWebApp.App_Start
{
    /// <summary>
    /// Class to generate tokens to be passed between client and server for communication
    /// </summary>
    public class TokenManagement
    {
        private const string ALG = "HmacSHA256"; //algorithm Name
        private const string SALT = "cONa3N3ehlkDqRmHRzzo"; // Generated at https://www.random.org/strings
        private static double ExpirationMinutes = Convert.ToDouble(FormsAuthentication.Timeout.TotalMinutes);

        /// <summary>
        /// Generates token for the user
        /// </summary>
        /// <param name="guid">Unique string</param>
        /// <param name="userAgent">Type of browser used</param>
        /// <param name="userKey">Combination of user and host system id</param>
        /// <param name="tokenKey">Existing token if current request if not the first for the user</param>
        /// <returns>Token string</returns>
        public static string GenerateToken(string guid, string userAgent, string userKey, string tokenKey = null)
        {
            string ip = GetIP();
            long ticks = DateTime.Now.AddMinutes(ExpirationMinutes).Ticks;
            if (string.IsNullOrEmpty(tokenKey))
                tokenKey = Guid.NewGuid().ToString();
            string hash = string.Join(":", new string[] { guid, ip, userAgent, ticks.ToString() });
            string hashLeft = "";
            string hashRight = "";
            using (HMAC hmac = HMACSHA256.Create(ALG))
            {
                hmac.Key = Encoding.UTF8.GetBytes(GetHashedPassword(guid));
                hmac.ComputeHash(Encoding.UTF8.GetBytes(hash));
                hashLeft = Convert.ToBase64String(hmac.Hash);
                hashRight = string.Join(":", new string[] { guid, ticks.ToString(), tokenKey, userKey });
            }

            var token = Convert.ToBase64String(Encoding.UTF8.GetBytes(string.Join(":", hashLeft, hashRight)));
            var currentUserData = HttpContext.Current.Cache[tokenKey];
            if (currentUserData != null)
            {
                UserData sessionData = currentUserData as UserData;
                sessionData.Token = token;
                HttpContext.Current.Cache[tokenKey] = sessionData;
            }
            else
            {
                string existingUser = "";
                foreach (var cObj in HttpContext.Current.Cache)
                {
                    var cacheEntry = (System.Collections.DictionaryEntry)cObj;
                    if (cacheEntry.Value.GetType().Namespace == "DiagnosticPortal.Common.Authorization")
                    {
                        if (((UserData)cacheEntry.Value).UserKey == userKey)
                            existingUser = cacheEntry.Key.ToString();
                    }
                }
                RemoveTokenFromCache(existingUser);
                UserData sessionData = new UserData { Token = token, SessionData = new Dictionary<string, object>() };
                sessionData.UserKey = userKey;
                HttpContext.Current.Cache.Add(tokenKey, sessionData, null, Cache.NoAbsoluteExpiration, TimeSpan.FromMinutes(ExpirationMinutes), CacheItemPriority.NotRemovable, null);
            }
            return token;
        }

        /// <summary>
        /// Checks if the passed token is valid or not
        /// </summary>
        /// <param name="token">User token</param>
        /// <returns>Boolean</returns>
        public static bool IsTokenValid(string token)
        {
            bool result = false;
            try
            {
                string[] parts = GetTokenParts(token);
                if (parts.Length == 5)
                {
                    string hash = parts[0];
                    string guid = parts[1];
                    long ticks = long.Parse(parts[2]);
                    string tokenKey = parts[3];
                    string userId = parts[4];
                    DateTime timeStamp = new DateTime(ticks);
                    bool expired = DateTime.Now.Ticks > timeStamp.Ticks;
                    if (!expired && HttpContext.Current.Cache[tokenKey] != null)
                    {
                        UserData sessionData = HttpContext.Current.Cache[tokenKey] as UserData;
                        result = sessionData.UserKey == userId;
                    }
                }
            }
            catch (Exception ex)
            {
                //VueLogging.LogException(ex);
            }
            return result;
        }

        /// <summary>
        /// Removes user token and associated user data from Http context cache
        /// </summary>
        /// <param name="tokenKey">Token key of the user</param>
        public static void RemoveTokenFromCache(string tokenKey)
        {
            if (HttpContext.Current.Cache[tokenKey] != null)
                HttpContext.Current.Cache.Remove(tokenKey);
        }

        /// <summary>
        /// Gets hashed password to generate the token
        /// </summary>
        /// <param name="password">User password</param>
        /// <returns>String</returns>
        public static string GetHashedPassword(string password)
        {
            string key = string.Join(":", new string[] { password, SALT });
            using (HMAC hmac = HMACSHA256.Create(ALG))
            {
                hmac.Key = Encoding.UTF8.GetBytes(SALT);
                hmac.ComputeHash(Encoding.UTF8.GetBytes(key));
                return Convert.ToBase64String(hmac.Hash);
            }
        }

        /// <summary>
        /// Decrypts the token to get the specific parts
        /// </summary>
        /// <param name="token">User token</param>
        /// <returns>Array of string</returns>
        public static string[] GetTokenParts(string token)
        {
            string key = Encoding.UTF8.GetString(Convert.FromBase64String(token));
            return key.Split(new char[] { ':' });
        }

        /// <summary>
        /// Get IP address of the user machine
        /// </summary>
        /// <returns>String</returns>
        public static string GetIP()
        {
            string ip = HttpContext.Current.Request.Headers["X-Forwarded-For"];
            if (string.IsNullOrEmpty(ip))
            {
                ip = HttpContext.Current.Request.UserHostAddress;
            }
            return ip;
        }
    }
}