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
    
    public partial class recoverycollection
    {
        public int CollectionId { get; set; }
        public string CollectionNumber { get; set; }
        public string RecoveryNumber { get; set; }
        public Nullable<double> RecoveryAmount { get; set; }
        public Nullable<System.DateTime> TransDate { get; set; }
        public Nullable<double> ReceivedAmount { get; set; }
        public string TransactionMode { get; set; }
        public string TransactionNumber { get; set; }
        public string TransDetails { get; set; }
        public string Status { get; set; }
        public string Status2 { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string OwnerOfCollection { get; set; }
        public string CreationComments { get; set; }
        public string ApproverComments { get; set; }
    }
}
