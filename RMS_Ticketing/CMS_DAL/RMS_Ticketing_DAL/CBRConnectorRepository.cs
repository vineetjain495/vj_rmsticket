using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMS_Repository.Interface.RMS_Interface;
using CMSDAL.RMS_Ticketing_DAL;
using CMSDTO.Models.Response;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace CMS_DAL.RMS_Ticketing_DAL
{
    public class CBRConnectorRepository : ICBRConnectorRepository, IDisposable
    {
       
        CBRDBContext cbrcontext;

        public static object Constants { get; private set; }

        public CBRConnectorRepository()
        {
            
            cbrcontext = new CBRDBContext();
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

        public List<CBREntryDTO> CBR_DataReader(string atmid, DateTime eoddatetime)
        {
            cbrcontext = new CBRDBContext();
           // string[] typeofloading = { "EOD", "REPLENISH" };
            List<CBREntryDTO> cBREntryDTO = new List<CBREntryDTO>();
            int val = 0;
            cBREntryDTO = (from d in cbrcontext.CBREntry
                           join f in cbrcontext.ATM on d.AtmID equals f.AtmID
                           join g in cbrcontext.Bank on f.BankID equals g.BankID
                           join h in cbrcontext.Indent on d.IndentID equals h.IndentID
                           from trip in cbrcontext.Trip.Where(v => v.TripID == h.TripID && v.RouteCode == h.RouteCode)
                           from emp1 in cbrcontext.CBREmployee.Where(s => s.EmpID == trip.Atmo1)
                           from emp2 in cbrcontext.CBREmployee.Where(s => s.EmpID == trip.Atmo2).DefaultIfEmpty()

                           where f.AtmCode == atmid && d.EODDateTime >= eoddatetime //&& typeofloading.Contains(d.TypeofLoading)
                           && (d.AC_DispenseCash_Total > val || d.SC_IncreaseCash_Total > val || d.SC_RecyclerDepositCash_Total > val || d.AC_RecyclerDepositCash_Total > val
                           || d.PCC_ABOverageCash_Total > val || d.PCC_OverageCash_Total > val || d.PCC_ShortageCash_Total > val  || d.PCC_ABShortageCash_Total > val
                           || d.PCC_RecyclerCashReturnedToBank_Total > val || d.PCC_RecyclerCashReturnedToVault_Total > val || d.AC_ABCounter_Total > val || d.PCC_ABCounter_Total > val)
                           select new CBREntryDTO
                           {
                               AtmID = d.AtmID,
                               AtmCode = f.AtmCode,
                               TypeofLoading = d.TypeofLoading,
                               EntrySource = h.IsEntryDoneSource,
                               EODDateTime = d.EODDateTime,
                               BankCode = g.BankCode,
                               MidCashIncrease = d.SC_IncreaseCash_Total,
                               Shortage_Total = d.PCC_ShortageCash_Total,
                               cash_Return = d.PCC_RecyclerCashReturnedToBank_Total + d.PCC_RecyclerCashReturnedToVault_Total,
                               Overage_Total = d.PCC_ABOverageCash_Total + d.PCC_OverageCash_Total,
                               AC_DispenseCash_Den5 = d.AC_DispenseCash_Den5,
                               AC_DispenseCash_Den10 = d.AC_DispenseCash_Den10,
                               AC_DispenseCash_Den20 = d.AC_DispenseCash_Den20,
                               AC_DispenseCash_Den50 = d.AC_DispenseCash_Den50,
                               AC_DispenseCash_Den100 = d.AC_DispenseCash_Den100,
                               AC_DispenseCash_Den200 = d.AC_DispenseCash_Den200,
                               AC_DispenseCash_Den500 = d.AC_DispenseCash_Den500,
                               AC_DispenseCash_Den1000 = d.AC_DispenseCash_Den1000,
                               AC_DispenseCash_Den2000 = d.AC_DispenseCash_Den2000,
                               FirstCustodianCode = emp1.CardEmpCode,
                               FirstCustodianName = emp1.EmpName,
                               SecondCustodianCode = emp2.CardEmpCode,
                               SecondCustodianName = emp2.EmpName,
                           }
                                   ).OrderBy(x=> x.EODDateTime).Take(3).ToList();

            return cBREntryDTO;
        }

        public DataSet GetLastirstEOD(string ATMID, DateTime IncidentDate)
        {
            cbrcontext = new CBRDBContext();
            DataSet result = null;
            //   var ret = cbrcontext.Database.SqlQuery("EXEC [GetLastandFirstEOD] '" + ATMID + "','" + IncidentDate.ToString("yyyy-MMM-dd") + "'");
            //var result = rmstscontext.Database.ExecuteSqlCommand("Update batch set FinalResponseSent={2},DownloadPath={1} where  BatchID={0}", responseAPIDTO.BatchID, responseAPIDTO.EmailsResponsePath, true);
            //  DataSet result = cbrcontext.Database.SqlQuery<DataSet>("EXEC [GetLastandFirstEOD] '" + ATMID + "','" + IncidentDate.ToString("yyyy-MMM-dd") + "'");
            DataTable retVal = new DataTable();
            DataSet cbrds = new DataSet();
            using (SqlConnection connection = new SqlConnection(cbrcontext.Database.Connection.ConnectionString))
            {
                using (SqlCommand cmd = new SqlCommand("[dbo].[GetLastandFirstEOD]", connection))
                {
                    SqlDataAdapter adapter = new SqlDataAdapter(cmd);
                    adapter.SelectCommand.CommandType = CommandType.StoredProcedure;
                    adapter.SelectCommand.Parameters.Add(new SqlParameter("@ATMCode", ATMID));
                    adapter.SelectCommand.Parameters.Add(new SqlParameter("@EODDateTime", IncidentDate));
                    adapter.Fill(cbrds);
                    
                }
            }
            // return retVal;

            return cbrds;
        }
        public void Dispose()
        {
            cbrcontext.Dispose();
        }


    }
}