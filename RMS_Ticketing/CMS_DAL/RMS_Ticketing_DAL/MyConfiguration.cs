using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.SqlServer;
using System.Linq;
using System.Web;

namespace CMS_DAL.RMS_Ticketing_DAL
{
    public class MyConfiguration : DbConfiguration
    {
        //public MyConfiguration()
        //{
        //    this.SetDefaultConnectionFactory(new System.Data.Entity.Infrastructure.SqlConnectionFactory());
        //    this.SetProviderServices("System.Data.SqlClient",
        //        System.Data.Entity.SqlServer.SqlProviderServices.Instance);
        //    //SetExecutionStrategy("System.Data.SqlClient", () => new SqlAzureExecutionStrategy());
        //    //SetDefaultConnectionFactory(new LocalDbConnectionFactory("mssqllocaldb"));
        //}
    }
}