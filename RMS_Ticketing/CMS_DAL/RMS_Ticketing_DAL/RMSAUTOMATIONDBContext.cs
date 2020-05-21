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

    public class RMSAUTOMATIONDBContext : DbContext
    {
        public RMSAUTOMATIONDBContext() : base("name=RMSTSUserConnectionString")
        {
            Database.SetInitializer<RMSAUTOMATIONDBContext>(null);
            // this.Database.CommandTimeout = 900;
            this.Database.CommandTimeout = 900;
        }
      
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
    }
}