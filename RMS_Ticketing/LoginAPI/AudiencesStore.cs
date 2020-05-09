using LoginWebAPI.Entities;
using Microsoft.Owin.Security.DataHandler.Encoder;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Web;

namespace LoginAPI
{
    public static class AudiencesStore
    {
        public static ConcurrentDictionary<string, Audience> AudiencesList = new ConcurrentDictionary<string, Audience>();

         static AudiencesStore()
        {
            string client_id = System.Configuration.ConfigurationManager.AppSettings["ClientId"];
            string Base64Secret = System.Configuration.ConfigurationManager.AppSettings["Base64Secret"];

            //AudiencesList.TryAdd(client_id,
            //                    new Audience
            //                    {
            //                        ClientId = client_id,
            //                        Base64Secret = Base64Secret,
            //                        Name = "RCMConnectorsAPI 1"
            //                    });
        }

        //public AudiencesStore(string argcode)
        //{
        //    string client_id = System.Configuration.ConfigurationManager.AppSettings["ClientId"];
        //    string Base64Secret = System.Configuration.ConfigurationManager.AppSettings["Base64Secret"];

        //    AudiencesList.TryAdd(client_id,
        //                        new Audience
        //                        {
        //                            ClientId = client_id,
        //                            Base64Secret = Base64Secret,
        //                            Name = "RCMConnectorsAPI 1"
        //                        });
        //}
        public static Audience AddAudience(string name,string companycode="",string customercode="")
        {
            string clientId = System.Configuration.ConfigurationManager.AppSettings["ClientId"];
            string base64Secret = System.Configuration.ConfigurationManager.AppSettings["Base64Secret"];

            //var clientId = Guid.NewGuid().ToString("N");

            //var key = new byte[32];
            //RNGCryptoServiceProvider.Create().GetBytes(key);
            //var base64Secret = TextEncodings.Base64Url.Encode(key);

            Audience newAudience = new Audience { ClientId = clientId, Base64Secret = base64Secret, Name = name ,CompanyCode=companycode,CustomerCode=customercode};
            //AudiencesList.Clear();
            AudiencesList.TryAdd(clientId, newAudience);
            return newAudience;
        }

        public static Audience FindAudience(string clientId)
        {
            Audience audience = null;
            if (AudiencesList.TryGetValue(clientId, out audience))
            {
                return audience;
            }
            return null;
        }
    }
}