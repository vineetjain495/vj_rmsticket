using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMS_Repository.Interface.RMS_Interface;
using CMSDAL.RMS_Ticketing_DAL;
using CMSDTO.Models.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DAL.RMS_Ticketing_DAL
{
    public class RMSConnectorRepository : IRMSConnectorRepository, IDisposable
    {
        RMSDBContext context;
       

        public static object Constants { get; private set; }

        public RMSConnectorRepository()
        {
            context = new RMSDBContext();
        
        }

        public cslsipl_atmmaster CheckATMExist(string atmid)
        {
            return null;
            //context = new RMSDBContext();
            //var query = from it in context.cslsipl_atmmaster
            //            where (it.atmid == atmid)
            //            orderby it.atmid
            //            select it;
            //return query.FirstOrDefault();
        }

      
        public void Dispose()
        {
            context.Dispose();
        }


    }
}