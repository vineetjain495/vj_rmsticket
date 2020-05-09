using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Script.Serialization;

namespace CMSWebApp.App_Start
{
    /// <summary>
    /// Class for encrypting strings
    /// </summary>
    public class Security
    {
        private static byte[] Key
        {
            get
            {
                byte[] theKey = { 254, 42, 130, 61, 50, 55, 46, 186, 16, 126,
                         106, 117, 69, 19, 101, 152, 67, 171, 137, 47,
                         173, 213, 135, 106, 118, 125, 87, 13, 201, 4,
                         118, 51 };

                return theKey;
            }
        }

        private static byte[] Vector
        {
            get
            {
                byte[] theVector = { 214, 11, 221, 108, 210, 71, 14, 15, 151, 57, 241, 174, 177, 142, 115, 137 };


                return theVector;
            }
        }

        /// <summary>
        /// Encrypts a string using the Rijndael two-way algorithm
        /// </summary>
        /// <param name="valueToEncrypt">the value to be encrypted</param>
        /// <returns>
        /// Returns a UTF8 (URL safe) encrypted string
        /// </returns>
        public static string Encrypt(string valueToEncrypt)
        {
            return ByteArrayToString(EncryptToByteArray(valueToEncrypt));
        }

        /// <summary>
        /// Decrypts a string using the Rijndael two-way algorithm
        /// </summary>
        /// <param name="encryptedValue">The value to be decrypted</param>
        /// <returns>
        /// Returns a UTF8 (URL safe) decrypted string
        /// </returns>
        public static string Decrypt(string encryptedValue)
        {
            return Decrypt(System.Web.HttpServerUtility.UrlTokenDecode(encryptedValue));
        }

        private static byte[] EncryptToByteArray(string valueToEncrypt)
        {
            UTF8Encoding encoding = new UTF8Encoding();
            Rijndael rijndael = RijndaelManaged.Create();
            rijndael.Key = Key;
            rijndael.IV = Vector;

            var encrypted = new byte[1];
            var bytes = encoding.GetBytes(valueToEncrypt);
            using (var encryptor = rijndael.CreateEncryptor())
            {
                var stream = new MemoryStream();
                using (var crypto = new CryptoStream(stream, encryptor, CryptoStreamMode.Write))
                {

                    crypto.Write(bytes, 0, bytes.Length);
                    crypto.FlushFinalBlock();
                    stream.Position = 0;
                    encrypted = new byte[stream.Length];
                    stream.Read(encrypted, 0, encrypted.Length);
                }
            }
            return encrypted;
        }

        private static string Decrypt(byte[] encryptedValue)
        {
            UTF8Encoding encoding = new UTF8Encoding();
            Rijndael rijndael = RijndaelManaged.Create();
            rijndael.Key = Key;
            rijndael.IV = Vector;

            var decryptedBytes = new Byte[1];
            using (var decryptor = rijndael.CreateDecryptor())
            {
                var stream = new MemoryStream();

                using (var crypto = new CryptoStream(stream, decryptor, CryptoStreamMode.Write))
                {
                    crypto.Write(encryptedValue, 0, encryptedValue.Length);
                    crypto.FlushFinalBlock();
                    stream.Position = 0;
                    decryptedBytes = new Byte[stream.Length];
                    stream.Read(decryptedBytes, 0, decryptedBytes.Length);
                }
            }

            return encoding.GetString(decryptedBytes);

        }

        /// <summary>
        /// Converts a byte array to a string
        /// </summary>
        /// <param name="byteArr">the byte array to be converted to a string.</param>
        /// <returns>
        /// Converts a byte array to a string
        /// </returns>
        public static string ByteArrayToString(byte[] byteArr)
        {
            string tempStr = "";
            tempStr = System.Web.HttpServerUtility.UrlTokenEncode(byteArr);
            return tempStr;
        }

        /// <summary>
        /// Encrypts a dictionary object
        /// </summary>
        /// <param name="queryParameters">The query parameters to be encrypted.</param>
        /// <returns>
        /// And encrypted string
        /// </returns>
        public static string EncryptQueryString(Dictionary<string, string> queryParameters)
        {
            JavaScriptSerializer serializer = new JavaScriptSerializer();

            string jsonDictionary = serializer.Serialize(queryParameters);

            string encryptedQS = Security.Encrypt(jsonDictionary);

            return encryptedQS;
        }
        /// <summary>
        /// Encrypt a RouteValueDictionary of route parameters used in 
        /// </summary>
        /// <param name="routeParams">The query parameters to be encrypted.</param>
        /// <returns>An encrypted query string.</returns>
        public static string EncryptQueryString(RouteValueDictionary routeParams)
        {
            Dictionary<string, string> routeParamDict = routeParams.ToDictionary(k => k.Key, k => k.Value == null ? null : k.Value.ToString());
            return EncryptQueryString(routeParamDict);
        }

        /// <summary>
        /// Encrypts a name/value pair
        /// </summary>
        /// <param name="key">The query string key for the item being encrypted</param>
        /// <param name="value">the value of the item being encrypted.</param>
        /// <returns>
        /// And encrypted string
        /// </returns>
        public static string EncryptQueryString(string key, string value)
        {
            return EncryptQueryString(new Dictionary<string, string>() { { key, value } });
        }

        /// <summary>
        /// Decrypts an encrypted query string
        /// </summary>
        /// <param name="queryString">The query string to be decrypted</param>
        /// <returns>
        /// A collection of name/value pairs
        /// </returns>
        public static Dictionary<string, string> DecryptQueryString(string queryString)
        {
            queryString = queryString.TrimStart('?');

            string decryptedQS = Security.Decrypt(queryString);

            JavaScriptSerializer serializer = new JavaScriptSerializer();

            Dictionary<string, string> returnCollection = serializer.Deserialize<Dictionary<string, string>>(decryptedQS);

            return returnCollection;
        }
    }
    /// <summary>
    /// Extension helpers for views used in DxP 
    /// </summary>
    public static class PortalHtmlHelpers
    {

        /// <summary>
        /// Creates an anchor tag with encrypted query parameters. 
        /// </summary>
        /// <param name="ajaxHelper">Extension method helper.</param>
        /// <param name="linkText">The link text to be displayed.</param>
        /// <param name="controllerName">The controller to navigate to</param>
        /// <param name="actionName">The action to navigate to in the specified controller.</param>
        /// <param name="htmlAttributes">Any CSS styling that should be applied to this link</param>
        /// <param name="routeParams">Any route parameters that should be encrypted.</param>
        /// <returns>MVC HTML string with an anchor tag</returns>
        //public static MvcHtmlString PortalSecureLink(this AjaxHelper ajaxHelper, string linkText, string actionName, string controllerName, object routeParams, object htmlAttributes)
        //{
        //    string queryString = DiagnosticPortal.Common.Security.EncryptQueryString(new RouteValueDictionary(routeParams));

        //    System.Web.Mvc.TagBuilder anchorTag = new TagBuilder("a")
        //    {
        //        InnerHtml = linkText
        //    };

        //    anchorTag.MergeAttributes(HtmlHelper.AnonymousObjectToHtmlAttributes(htmlAttributes));
        //    anchorTag.MergeAttribute("rel", string.Format("{0}/{1}/{2}", controllerName, actionName, queryString));
        //    anchorTag.MergeAttribute("href", "javascript:void(0);");

        //    return MvcHtmlString.Create(anchorTag.ToString(TagRenderMode.Normal));
        //}


    }
}