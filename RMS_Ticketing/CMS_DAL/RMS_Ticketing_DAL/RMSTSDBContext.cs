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
    //comment while publish
   //[DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class RMSTSDBContext : DbContext
    {
        public RMSTSDBContext() : base("name=RMSTSConnectionString")
        {
            //  DbConfiguration.SetConfiguration(new MySqlEFConfiguration());
          //  type
          //  DbConfiguration.LoadConfiguration();
            Database.SetInitializer<RMSTSDBContext>(null);
            //Database.SetInitializer(new MigrateDatabaseToLatestVersion<CMSDSContext, DSContextMigration>());
        }
      //  public RMSTSDBContext(DbConnection existingConnection, bool contextOwnsConnection)
      //: base(existingConnection, contextOwnsConnection)
      //  {

      //  }
        //protected override void OnModelCreating(DbModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);
        //    modelBuilder.Entity<Batch>().MapToStoredProcedures();
        //}
        public DbSet<Batch> Batch { get; set; }
        public DbSet<Ticket> Ticket { get; set; }
        public DbSet<OldRMSTickets> OldRMSTickets { get; set; }
        public DbSet<UtilizationData> UtilizationData { get; set; }
        public DbSet<TicketLog> TicketLog { get; set; }
       // public DbSet<RMSTS_ATM> RMSTS_ATM { get; set; }
        public DbSet<MSP> MSP { get; set; }
        public DbSet<APILog> APILogs { get; set; }
        public DbSet<Master> Masters { get; set; }
        //public DbSet<ErrorCodeMaster> errorCodeMasters { get; set; }
        //public DbSet<OemErrorCodeList> oemErrorCodeMasters { get; set; }
        public DbSet<Atmmaster> Atmmasters { get; set; }
        public DbSet<Employee_Hierarchy> Employee_Hierarchy { get; set; }
        public DbSet<Employee_Role> Employee_Role { get; set; }
        public DbSet<ErrorCodeMaster> ErrorCodeMaster { get; set; }
        public DbSet<ErrorCodeMasterdistinct> ErrorCodeMasterdistinct { get; set; }
        public DbSet<TicketAttachments> TicketAttachments { get; set; }
        public DbSet<ErrorRoleMapping> Error_Role_Mappings { get; set; }
        public DbSet<Recovery> Recoveries { get; set; }
        public DbSet<UtilizationDataLogs> UtilizationDataLogS { get; set; }
        public DbSet<RuleEngineLogs> RuleEngineLogS { get; set; }
        
        public DbSet<ErrorCodePortal> ErrorCodePortals { get; set; }
    }
}