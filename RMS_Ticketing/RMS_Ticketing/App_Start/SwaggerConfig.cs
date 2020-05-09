using System.Web.Http;
using RMS_Ticketing.Common;
using Swashbuckle.Application;

namespace RMS_Ticketing
{
    public class SwaggerConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var thisAssembly = typeof(SwaggerConfig).Assembly;
            config.EnableSwagger(c =>
            {
                c.SingleApiVersion("v1", "RMS_Ticketing.API");
                c.OperationFilter<AuthorizationOperationFilter>();
                c.RootUrl(req =>
                {

                    var url = req.RequestUri.Scheme + "://" + req.RequestUri.Authority + System.Web.VirtualPathUtility.ToAbsolute("~");
                    return url;

                    //Uncomment below code and comment the above 2 line's  while publishing in live
                    //var url = req.RequestUri.Scheme + "s" + "://" + req.RequestUri.Authority + System.Web.VirtualPathUtility.ToAbsolute("~");
                    //return url;
                }
                );
            })
            .EnableSwaggerUi(c =>
            {
                
            });
        }
    }
}
