using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CMS_DTO.Entity.RMS_Ticketing
{
    [Table("ATM.CBREntry")]
    public class CBREntry
    {

        public Int64 CBREntryID { get; set; }
        public Int64 IndentID { get; set; }
        public Int64 AtmID { get; set; }
        public string TypeofLoading { get; set; }
        public Int64 SC_IncreaseCash_Total { get; set; }
        public DateTime EODDateTime { get; set; }
        public Int64 PCC_ShortageCash_Total { get; set; }
        public Int64 PCC_RecyclerCashReturnedToBank_Total { get; set; }
        public Int64 PCC_RecyclerCashReturnedToVault_Total { get; set; }
        public Int64 PCC_ABOverageCash_Total { get; set; }
        public Int64 PCC_OverageCash_Total { get; set; }
        public Int64 AC_DispenseCash_Total { get; set; }
        public Int64 SC_RecyclerDepositCash_Total { get; set; }
        public Int64 AC_RecyclerDepositCash_Total { get; set; }
        public Int64 PCC_ABShortageCash_Total { get; set; }
        public Int64 AC_ABCounter_Total { get; set; }
        public Int64 PCC_ABCounter_Total { get; set; }
        public Int64 BankID { get; set; }
        public Int64 AC_DispenseCash_Den5 { get; set; }
        public Int64 AC_DispenseCash_Den10 { get; set; }
        public Int64 AC_DispenseCash_Den20 { get; set; }
        public Int64 AC_DispenseCash_Den50 { get; set; }
        public Int64 AC_DispenseCash_Den100 { get; set; }
        public Int64 AC_DispenseCash_Den200 { get; set; }
        public Int64 AC_DispenseCash_Den500 { get; set; }
        public Int64 AC_DispenseCash_Den1000 { get; set; }
        public Int64 AC_DispenseCash_Den2000 { get; set; }
        public string ReferenceNo { get; set; }
        public decimal Longitude { get; set; }
        public decimal Latitude { get; set; }
        public string Location { get; set; }

    }

    [Table("ATM.ATM")]
    public class ATM
    {
        public Int64 AtmID { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string AtmCode { get; set; }
        public string AtmName { get; set; }
        public int SensitivityID { get; set; }
        public Int64 MspID { get; set; }
        public Int64 SwitchID { get; set; }
        public Int64 BankID { get; set; }
        public string LocationCode { get; set; }
        public string RouteCode { get; set; }
        public Int64 FeederBranchID { get; set; }
        public string AtmTypeCode { get; set; }
        public int AtmGroupID { get; set; }
        public string Address { get; set; }
        public string LandMark { get; set; }
        public string MachineSerialNumber { get; set; }
        public int DistanceFromLocation { get; set; }
        public int IsLongDistance { get; set; }
        public int IsGuarded { get; set; }
        public int IsMOF { get; set; }
        public string WorkingDays { get; set; }
        public int FollowHolidayMaster { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public int HoursOfAccess { get; set; }
        public string SiteCode { get; set; }
        public int EscalationID { get; set; }
        public int TAT { get; set; }
        public string Remarks { get; set; }
        public string ATMO1 { get; set; }
        public string ATMO1Mobile { get; set; }
        public DateTime TakeOverDate { get; set; }
        public string ATMO2 { get; set; }
        public string ATMO2Mobile { get; set; }
        public DateTime HandOverDate { get; set; }
        public string LockType { get; set; }
        public string VaultLockTypeCode { get; set; }
        public int LockActivated { get; set; }
        public DateTime LockActivatedDate { get; set; }
        public string LockSerialNumber { get; set; }
        public string AtmOpType { get; set; }
        public Int64 OemId { get; set; }
        public Int64 SlmId { get; set; }
        public string MachineFunction { get; set; }
        public string AdminCardRecd { get; set; }
        public string HoodKeyRecd { get; set; }
        public string CombinationKeyRecd { get; set; }
        public string CassetteKeyRecd { get; set; }
        public string DepositKeyRecd { get; set; }
        public int IsAdminCardRecd { get; set; }
        public int IsCombinationKeyRecd { get; set; }
        public int IsCassetteKeyRecd { get; set; }
        public int IsDepositKeyRecd { get; set; }
        public int IsHoodKeyRecd { get; set; }
        public string CityLimit { get; set; }
        public string BGLAccountNo { get; set; }
        public string CRABranch { get; set; }
        public Int64 SponsorBank { get; set; }
        public int AtmSequenceNo { get; set; }
        public Int64 FirstATMId { get; set; }
        public string SAPIOCode { get; set; }
        public string AGSSAPIOCode { get; set; }
        public string OLDATMCode { get; set; }
        public string DropBoxAvailable { get; set; }
        public string HandoverRemarks { get; set; }
        public string BillingSlab { get; set; }
        public int BillingSlabRangeFrom { get; set; }
        public int BillingSlabRangeTo { get; set; }
        public int CorporateTAT { get; set; }
        public string Esc1 { get; set; }
        public string FLMOEmpID { get; set; }
        public string ATMO1EmpID { get; set; }
        public string ATMO2EmpID { get; set; }
        public string BillingStateId { get; set; }
        public float DistanceFromSpokeToFBinKms { get; set; }
        public string EODPattern { get; set; }
        public string ZoneCode { get; set; }
        public string City { get; set; }
        public string PinCode { get; set; }
        public string CashLoadingMethod { get; set; }
        public string GLNumber { get; set; }
        public DateTime CashTakeOverDateTime { get; set; }
        public string CardReaderType { get; set; }
        public string JpType { get; set; }
        public string RpType { get; set; }
        public string Ribbon { get; set; }
        public int Deposit { get; set; }
        public int Vaulting { get; set; }
        public string AtmSubStatus { get; set; }
        public decimal Longitude { get; set; }
        public decimal Latitude { get; set; }
        public string GeoUpdatedBy { get; set; }
        public DateTime GeoUpdatedDate { get; set; }
        public string SubLocationCode { get; set; }

    }

    [Table("ATM.Bank")]
    public class Bank
    {
        public Int64 BankID { get; set; }
        public string BankCode { get; set; }
        public string BankGroupCode { get; set; }
        public Int64 MspID { get; set; }
        public Int64 SwitchID { get; set; }
        public string BankName { get; set; }
        public string Address { get; set; }
        public string CityCode { get; set; }
        public string PinCode { get; set; }
        public int TAT { get; set; }
        public int AvoidSMS { get; set; }
        public int AvoidNightSMS { get; set; }
        public string AvoidNightSMSStartTime { get; set; }
        public string AvoidNightSMSEndTime { get; set; }
        public int CustodianRequired { get; set; }
        public string Remarks { get; set; }
        public int IsActive { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }

    }

    [Table("common.Indent")]
    public class Indent
    {
        public Int64 IndentID { get; set; }
        public string IsEntryDoneSource { get; set; }
        public string TripID { get; set; }
        public string RouteCode { get; set; }
    }

    [Table("common.Employee")]
    public class CBREmployee
    {
        [Key]
        public string EmpID { get; set; }
        public string CardEmpCode { get; set; }
        public string EmpName { get; set; }
        public int DesignationID { get; set; }
        public string Address { get; set; }
        public string LocationCode { get; set; }
        public string TelephoneDirect { get; set; }
        public string TelephoneBoard { get; set; }
        public string TelephoneBoardExt { get; set; }
        public string PhoneResidence { get; set; }
        public string Mobile { get; set; }
        public string DOB { get; set; }
        public string DOJ { get; set; }
        public string DOL { get; set; }
        public string Email { get; set; }
        public string Import_Grade { get; set; }
        public string Import_Designation { get; set; }
        public string Import_Location { get; set; }
        public string Import_Status { get; set; }
        public bool IsDummy { get; set; }
        public bool IsContract { get; set; }
        public bool IsActive { get; set; }
        public string OldCardEmpCode { get; set; }
        public int ModifiedBy { get; set; }
        public string ModifiedDate { get; set; }
        public string AuthorizedSignatory { get; set; }
        public string WithDrawalOfficer { get; set; }
        public string Manager { get; set; }
        public string Director { get; set; }
        public string StateHead { get; set; }
        public string DirectorNo { get; set; }
        public string PicturePath { get; set; }
        public string SignaturePath { get; set; }
        public int EMPDesignationRoleId { get; set; }


    }

    [Table("common.Trip")]
    public class Trip
    {
        public string TripID { get; set; }
        public string RouteCode { get; set; }
        public int VehicleID { get; set; }
        public string EffectiveFromDate { get; set; }
        public string Atmo1 { get; set; }
        public string Atmo2 { get; set; }
        public string Atmo3 { get; set; }
        public string Guard1 { get; set; }
        public string Guard2 { get; set; }
        public string Guard3 { get; set; }
        public string Driver1 { get; set; }
        public string Driver2 { get; set; }
        public string ParentTripID { get; set; }
        public string TripStartDateTime { get; set; }
        public int TripStartKMs { get; set; }
        public int TripStartNoBigTrunks { get; set; }
        public int TripStartNoBigTrunkLocks { get; set; }
        public int TripStartNoSmallTrunks { get; set; }
        public int TripStartNoSmallTrunkLock { get; set; }
        public int TripStartNoCasseteBoxs { get; set; }
        public int TripStartNoCasseteBoxLocks { get; set; }
        public int NoWaistChain { get; set; }
        public int TripStartBy { get; set; }
        public string TripEndDateTime { get; set; }
        public int TripEndKMs { get; set; }
        public int TripEndNoBigTrunks { get; set; }
        public int TripEndNoBigTrunkLocks { get; set; }
        public int TripEndNoSmallTrunks { get; set; }
        public int TripEndNoSmallTrunkLock { get; set; }
        public int TripEndNoCasseteBoxs { get; set; }
        public int TripEndNoCasseteBoxLocks { get; set; }
        public string IsTripClosed { get; set; }
        public string TripClosedRemarks { get; set; }
        public int TripClosedBy { get; set; }
        public string TripClosedDateTime { get; set; }
        public string AssignToField { get; set; }
        public int CreatedBy { get; set; }
        public string CreatedDate { get; set; }


    }


}