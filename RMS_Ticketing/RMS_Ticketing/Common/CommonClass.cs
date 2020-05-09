using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RMS_Ticketing.Common
{
    public class CommonClass
    {
        public string GetBatchID(string argMSP)
        {
            if (argMSP == null) argMSP = "";
            string day = DateTime.Now.Day.ToString();
            string month = DateTime.Now.Month.ToString();
            string year = DateTime.Now.Year.ToString();
            string hour = DateTime.Now.Hour.ToString();
            string minute = DateTime.Now.Minute.ToString();
            string sec = DateTime.Now.Second.ToString();
            string BatchID = argMSP + year + month.PadLeft(2, '0') + day.PadLeft(2, '0') + hour.PadLeft(2, '0') + minute.PadLeft(2, '0') + sec.PadLeft(2, '0');
            return BatchID;
        }
        //public string GetTicketID(string argMSP,int index)
        //{
        //    if (argMSP == null) argMSP = "";
        //    string day = DateTime.Now.Day.ToString();
        //    string month = DateTime.Now.Month.ToString();
        //    string year = DateTime.Now.Year.ToString();
        //    string hour = DateTime.Now.Hour.ToString();
        //    string minute = DateTime.Now.Minute.ToString();
        //    string TicketID ="tkt_"+ argMSP + year + month.PadLeft(2, '0') + day.PadLeft(2, '0') + hour.PadLeft(2, '0') + minute.PadLeft(2, '0') + index.ToString();
        //    return null;
        //}
        //public string GetFeasibleID(string argMSP)
        //{
        //    if (argMSP == null) argMSP = "";
        //    string day = DateTime.Now.Day.ToString();
        //    string month = DateTime.Now.Month.ToString();
        //    string year = DateTime.Now.Year.ToString();
        //    string hour = DateTime.Now.Hour.ToString();
        //    string minute = DateTime.Now.Minute.ToString();
        //    string BatchID = argMSP + year + month.PadLeft(2, '0') + day.PadLeft(2, '0') + hour.PadLeft(2, '0') + minute.PadLeft(2, '0');
        //    return null;
        //}
    }
}