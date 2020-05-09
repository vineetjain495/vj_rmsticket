using CMS_DAL.RMS_Ticketing_DAL;
using CMS_DTO.Entity.RMS_Ticketing;
using LoginWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace CMSDAL.RMS_Ticketing_DAL
{
  //  [DbConfigurationType(typeof(MyConfiguration))]
      [DbConfigurationType(typeof(MyConfiguration))]
    //  [DbConfigurationType("MyNamespace.MyConfiguration, MyAssemblyFullyQualifiedName")]
    public class CBRDBContext : DbContext
    {
        public CBRDBContext() : base("name=CBRConnectionString")
        {
            //DbConfiguration.SetConfiguration(new MyConfiguration());
            Database.SetInitializer<CBRDBContext>(null);
        }
       // public CBRDBContext(DbConnection dbConnection, bool dbContextOwnsObjectContext) { Database.SetInitializer<CBRDBContext>(null); }
        public DbSet<CBREntry> CBREntry { get; set; }
        public DbSet<ATM> ATM { get; set; }
        public DbSet<Bank> Bank { get; set; }
        public DbSet<Indent> Indent { get; set; }
        public DbSet<Trip> Trip { get; set; }
        public DbSet<CBREmployee> CBREmployee { get; set; }
    }
}
