using CMS_DTO.Entity.RMS_Ticketing;
using MySql.Data.Entity;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CMS_DAL.RMS_Ticketing_DAL
{
    //[DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class RMSDBContext : DbContext
    {
        public RMSDBContext() : base("name=RMSConnectionString")
        {
            Database.SetInitializer<RMSDBContext>(null);
            //Database.SetInitializer(new MigrateDatabaseToLatestVersion<CMSDSContext, DSContextMigration>());
        }
        public RMSDBContext(DbConnection existingConnection, bool contextOwnsConnection)
      : base(existingConnection, contextOwnsConnection)
        {

        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<cslsipl_atmmaster>().MapToStoredProcedures();
        }
        public DbSet<cslsipl_atmmaster> cslsipl_atmmaster { get; set; }

    }
}