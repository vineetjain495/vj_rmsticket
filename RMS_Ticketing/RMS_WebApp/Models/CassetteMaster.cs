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
    
    public partial class CassetteMaster
    {
        public int ID { get; set; }
        public string Bank { get; set; }
        public Nullable<System.DateTime> FromDate { get; set; }
        public Nullable<System.DateTime> ToDate { get; set; }
        public Nullable<int> Type1 { get; set; }
        public Nullable<int> Type2 { get; set; }
        public Nullable<int> Type3 { get; set; }
        public Nullable<int> Type4 { get; set; }
        public Nullable<int> Type5 { get; set; }
        public Nullable<int> MixType1 { get; set; }
        public Nullable<int> MixType2 { get; set; }
        public Nullable<int> MixType3 { get; set; }
        public Nullable<int> MixType4 { get; set; }
        public Nullable<int> MixType5 { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
    }
}
