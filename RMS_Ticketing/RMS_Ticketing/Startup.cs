using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataHandler.Encoder;
using Microsoft.Owin.Security.Jwt;
using Owin;
using Swashbuckle.Application;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Dependencies;


namespace RMS_Ticketing
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HttpConfiguration config = new HttpConfiguration();

            config.Routes.MapHttpRoute(
                
                name: "swagger_root",
                routeTemplate: "",
                defaults: "",
                constraints: null,
                handler: new RedirectHandler((message => message.RequestUri.ToString()), "swagger"));
            
            ConfigureOAuth(app);
            
            config.MapHttpAttributeRoutes();
            SwaggerConfig.Register(config);
            app.UseWebApi(config);
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            config.MessageHandlers.Add(new Common.CustomLogHandler());
        }

        public void ConfigureOAuth(IAppBuilder app)
        {
            //var issuer = "http://jwtauthzsrv.azurewebsites.net";
            //var audience = "099153c2625149bc8ecb3e85e03f0022";
            //var secret = TextEncodings.Base64Url.Decode("IxrAjDoa2FqElO7IhrSrUJELhUckePEPVpaePlS_Xaw");

            var audience = System.Configuration.ConfigurationManager.AppSettings["ClientId"];
            string Base64Secret = System.Configuration.ConfigurationManager.AppSettings["Base64Secret"];
            var secret = TextEncodings.Base64Url.Decode(Base64Secret);
            var issuer = System.Configuration.ConfigurationManager.AppSettings["URL"];
            // Api controllers with an [Authorize] attribute will be validated with JWT
            app.UseJwtBearerAuthentication(
                new JwtBearerAuthenticationOptions
                {
                    AuthenticationMode = AuthenticationMode.Active,
                    AllowedAudiences = new[] { audience },
                    IssuerSecurityTokenProviders = new IIssuerSecurityTokenProvider[]
                    {
                        new SymmetricKeyIssuerSecurityTokenProvider(issuer, secret)
                    }
                });
        }
        //public void ConfigureServices(IServiceCollection services)
        //{
        //    // ...
        //    services.AddSwaggerGen(config =>
        //    {
        //        config.SwaggerDoc("v1", new Info { Title = "My API", Version = "V1" });

        //        config.OperationFilter<MyHeaderFilter>();
        //    });
        //    // ...
        //}
    }
}