using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class CBREntryDTO
    {
        public Int64 AtmID { get; set; }
        public string AtmCode { get; set; }
        public string TypeofLoading { get; set; }
        public string EntrySource { get; set; }
        public DateTime EODDateTime { get; set; }
        public string BankCode { get; set; }
        public double MidCashIncrease { get; set; }

        public double Shortage_Total { get; set; }
        public double cash_Return { get; set; }

        public double Overage_Total { get; set; }
        public double AC_DispenseCash_Den5 { get; set; }
        public double AC_DispenseCash_Den10 { get; set; }
        public double AC_DispenseCash_Den20 { get; set; }
        public double AC_DispenseCash_Den50 { get; set; }
        public double AC_DispenseCash_Den100 { get; set; }
        public double AC_DispenseCash_Den200 { get; set; }
        public double AC_DispenseCash_Den500 { get; set; }
        public double AC_DispenseCash_Den1000 { get; set; }
        public double AC_DispenseCash_Den2000 { get; set; }
        public string FirstCustodianCode { get; set; }
        public string FirstCustodianName { get; set; }
        public string SecondCustodianCode { get; set; }
        public string SecondCustodianName { get; set; }


        //public Int64 PCC_RecyclerCashReturnedToBank_Total { get; set; }
        //public Int64 PCC_RecyclerCashReturnedToVault_Total { get; set; }
        //public Int64 PCC_ABOverageCash_Total { get; set; }
        //public Int64 PCC_OverageCash_Total { get; set; }
    }
}