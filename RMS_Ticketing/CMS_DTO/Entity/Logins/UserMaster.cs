using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMSDTO.Entity
{
    [Table("UserMaster")]
    public class UserMaster
    {
        [Key]
        public int UserId { get; set; }
        public string LoginID { get; set; }
        public string UserName { get; set; }
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }
        public string EmpCode { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Designation { get; set; }
        public string MobileNo { get; set; }
        public string Sign { get; set; }
        public string LoginDate { get; set; }
        public string LogoutDate { get; set; }
        public bool IsActive { get; set; }
        public int IsEnabled { get; set; }
        public int PasswordCount { get; set; }
        public string CreatedBy { get; set; }
        public string CreatedDate { get; set; }
        public string ModifiedBy { get; set; }
        public string ModifiedDate { get; set; }
        public string IPAddress { get; set; }
        public string SignImgURL { get; set; }
        public int islocked { get; set; }
        public int attemptcount { get; set; }
        public int LoginStatus { get; set; }
        public bool ActiveStatus { get; set; }
        public string InActiveDate { get; set; }
        public bool PassChanged { get; set; }
        public string PasswordValidDate { get; set; }
        public int RoleID { get; set; }
    }
}
