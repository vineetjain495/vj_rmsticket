//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApp.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class oldrmsticket
    {
        public int Id { get; set; }
        public string accountname { get; set; }
        public string atmid { get; set; }
        public string cardno { get; set; }
        public Nullable<System.DateTime> DispDate { get; set; }
        public Nullable<double> DisputeAmt { get; set; }
        public Nullable<double> RecoveredAmt { get; set; }
        public string RefNo { get; set; }
        public Nullable<double> TargetAmt { get; set; }
        public Nullable<System.DateTime> TranDate { get; set; }
        public string TranNo { get; set; }
        public string cmsstatus { get; set; }
        public string custstatus { get; set; }
        public string errorcode { get; set; }
        public string feasibleid { get; set; }
        public string territorystatus { get; set; }
        public Nullable<double> pendingamount { get; set; }
        public string querycategory { get; set; }
        public string atmtype { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string typecode { get; set; }
        public string type { get; set; }
        public string AlternateCardNo { get; set; }
    }
}
