using CMS_DTO.Entity.Logins;
using CMS_DTO.Entity.RMS_Ticketing;
using CMSDTO.Entity;
using LoginWebAPI.Models;
using CMS_DTO.Models.Logins;
//using MySql.Data.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMSDAL
{
    //[DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class CMSUserMasterContext: DbContext
    {
        public CMSUserMasterContext() : base("name=RMSTSUserConnectionString")
        {
            Database.SetInitializer<CMSUserMasterContext>(null);
        }

        public DbSet<Employee_Role> UserMaster { get; set; }
        //public DbSet<Employee_info> Employee_info { get; set; }
        public DbSet<Credential> Credential { get; set; }
        public DbSet<UserLoginHistory> UserLoginHistories { get; set; }
        public DbSet<Atmmaster> atm_master { get; set; }
        public DbSet<Employee_Hierarchy> employee_Hierarchies { get; set; }


    }
}
