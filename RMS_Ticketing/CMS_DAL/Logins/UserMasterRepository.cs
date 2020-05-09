using CMSDTO.Models.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using CMSDTO.Entity;
using CMSDTO.Models.Request;
using LoginWebAPI.Models;
using CMSRepository.Interface;
using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMS_DTO.Entity.Logins;
using System.Transactions;

namespace CMSDAL
{
    public class UserMasterRepository : IUserMasterRepository, IDisposable
    {
        CMSUserMasterContext context;

        public UserMasterRepository()
        {
            context = new CMSUserMasterContext();
        }

        public void Dispose()
        {
            context.Dispose();
        }

        public BaseResponse<Employee_Role_Model> ValidateUserAuthentication(Credential baseRequest)
        {
            try
            {
                BaseResponse<Employee_Role_Model> baseResponse = new BaseResponse<Employee_Role_Model>();

               
                    
                    baseResponse.Entity = context.UserMaster
                                                 .Where(x => x.Type_EmpCode == baseRequest.UserID
                                                    && x.Password == baseRequest.Password && x.IsActive == true)
                                                 .Select(s => new { ID = s.ID, EmpCode = s.Type_EmpCode, EmployeeName = s.EmployeeName, EmailID = s.EmailID, RoleCode = s.RoleCode.Value, RightsCode = s.RightsCode.Value })
                                                 .GroupJoin(context.UserMaster, outer => outer.RoleCode, inner => inner.TypeCode, (outer, inner) => new Employee_Role_Model
                                                 {
                                                     ID = outer.ID,
                                                     EmpCode = outer.EmpCode,
                                                     EmployeeName = outer.EmployeeName,
                                                     EmailID = outer.EmailID,
                                                     RoleCode = outer.RoleCode,
                                                     RightsCode = outer.RightsCode,
                                                     UserRole = inner.Where(w => w.Type == "Roles" && w.TypeCode == outer.RoleCode).Select(s => s.Type_EmpCode).FirstOrDefault()
                                                 })
                                                 .FirstOrDefault();

                    baseResponse.Success = baseResponse.Entity != null ? true : false;



                    if (baseResponse.Success)
                    {
                        UserLoginHistory history = new UserLoginHistory();

                        history.UserID = baseResponse.Entity.EmpCode;
                        history.LoginFrom = DateTime.Now.Date;  
                        history.IsActive = true;
                        history.CreatedBy = baseResponse.Entity.EmployeeName;
                        history.CreatedOn = DateTime.Now;

                        context.UserLoginHistories.Add(history);
                        context.SaveChanges();
                    }
               
            return baseResponse;
            }
            catch (Exception ex)
            {
                throw;
            }
        }


    }
}
