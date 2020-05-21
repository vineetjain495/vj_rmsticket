using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMSDAL;
using CMSDTO.Entity;
using CMSDTO.Models.Request;
using CMSDTO.Models.Response;
using CMSRepository.Models;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.SqlServer;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Transactions;
using System.Web;

namespace CMS_DAL.RMS_Ticketing_DAL
{
    public class RMSEmployeeMaster
    {
        private CMSUserMasterContext db = new CMSUserMasterContext();
        DateTime now = DateTime.Now;
        string EPassword = "cms.info@2020";
        public RMSEmployeeMaster()
        {
            db = new CMSUserMasterContext();
            //context.Database.BeginTransaction(IsolationLevel.ReadUncommitted);
        }

        public BaseResponse UpdateEmployeeDetails(BaseRequest<Employee_Role> baseRequest)
        {
            BaseResponse response;
            try
            {
                Employee_Role employee = baseRequest.Entity;

                
                    //employee_role objEmp = new employee_role();
                    Employee_Role objEmp = db.UserMaster.Where(e => e.Type_EmpCode == employee.Type_EmpCode).FirstOrDefault<Employee_Role>();
                    if (objEmp != null)
                    {
                        if (objEmp.IsActive != employee.IsActive ||
                            (objEmp.RoleCode != employee.RoleCode && (objEmp.RoleCode == 4 || objEmp.RoleCode == 6)))
                        {
                            var objticket = db.tickets.Where(m => m.AssignedTo == employee.Type_EmpCode).ToList();
                            if (objticket.Count() != 0)
                            {
                                response = new BaseResponse { Success = false, Message = "Ticket is assigned to this ID. Please assigned " + employee.Type_EmpCode + " ID Tickets to other users ." };
                                return response;
                            }
                            else
                            {
                                if (objEmp.IsActive != employee.IsActive)
                                {
                                    if (employee.IsActive)
                                    {
                                        objEmp.FromDate = now;
                                    }
                                    else
                                    {
                                        objEmp.ToDate = now;
                                        var last_location = db.employee_Hierarchies.Where(f => f.EmployeeCode == employee.Type_EmpCode && f.IsActive == true).ToList();
                                        last_location.ForEach(a => {
                                            a.IsActive = false;
                                            a.ModifiedBy = employee.CreatedBy;
                                            a.ModifiedDate = now;
                                            a.ToDate = now;
                                        });
                                    }
                                }

                            }
                            if ((objEmp.RoleCode == 4 || objEmp.RoleCode == 6) && (employee.RoleCode != 4 || employee.RoleCode != 6))
                            {
                                if ((objEmp.RoleCode == 4 && employee.RoleCode != 6) || (objEmp.RoleCode == 6 && employee.RoleCode != 4))
                                {
                                    var last_location = db.employee_Hierarchies.Where(f => f.EmployeeCode == employee.Type_EmpCode && f.IsActive == true).ToList();
                                    last_location.ForEach(a => {
                                        a.IsActive = false;
                                        a.ModifiedBy = employee.CreatedBy;
                                        a.ModifiedDate = now;
                                        a.ToDate = now;
                                    });
                                }
                            }
                        }

                        objEmp.EmployeeName = employee.EmployeeName;
                        objEmp.MobileNumber = employee.MobileNumber;
                        objEmp.EmailID = employee.EmailID;
                        objEmp.Password = employee.Password;
                        objEmp.RoleCode = employee.RoleCode;
                        objEmp.RightsCode = employee.RightsCode;
                        objEmp.ModifiedDate = now;
                        objEmp.ModifiedBy = employee.CreatedBy;
                        objEmp.IsActive = employee.IsActive;
                        objEmp.MspCategory = employee.MspCategory;
                        if (employee.RoleCode == 4 || employee.RoleCode == 6)
                        {
                            /*atmmaster amm = objEntity.atmmasters.Where(e => e.HubLocationCode);*/
                            var result = db.atm_master.Select(m => new
                            {
                                m.RoCode,
                                m.RoName,
                                m.LocationCode,
                                m.LocationName,
                                m.HubLocationCode,
                                m.HubLocationName
                            }).Distinct().Where(k => employee.Hub.Contains(k.HubLocationCode)).ToList();

                            var last_location = db.employee_Hierarchies.Where(f => f.EmployeeCode == employee.Type_EmpCode && !employee.Hub.Contains(f.Hub_Location_Code) && f.IsActive == true).ToList();

                            last_location.ForEach(a => {
                                a.IsActive = false;
                                a.ModifiedBy = employee.CreatedBy;
                                a.ModifiedDate = now;
                                a.ToDate = now;
                            });
                            //db.SaveChanges();

                            foreach (var value in result)
                            {
                                Employee_Hierarchy obj_hier = db.employee_Hierarchies.Where(e => e.Hub_Location_Code == value.HubLocationCode && e.EmployeeCode == employee.Type_EmpCode).FirstOrDefault<Employee_Hierarchy>();
                                //Console.WriteLine(value);
                                if (obj_hier == null)
                                {
                                    db.employee_Hierarchies.Add(new Employee_Hierarchy()
                                    {
                                        EmployeeCode = employee.Type_EmpCode,
                                        Region_code = value.RoCode,
                                        Loc_Code = value.LocationCode,
                                        Hub_Location_Code = value.HubLocationCode,
                                        CreatedBy = employee.CreatedBy,
                                        CreatedDate = now,
                                        FromDate = now,
                                        IsActive = true


                                    });
                                }
                                else
                                {
                                    if (obj_hier.IsActive == false)
                                    {
                                        obj_hier.ModifiedBy = employee.CreatedBy;
                                        obj_hier.ModifiedDate = now;
                                        obj_hier.FromDate = now;
                                        obj_hier.IsActive = true;
                                    }
                                }

                            }


                        }
                        /*else if (employee.RoleCode == 2)
                        {
                            objEmp.MspCategory = employee.MspCategory;
                        }*/
                        int z = this.db.SaveChanges();

                    if (z == 1)
                    {
                        response = new BaseResponse { Success = true, Message = employee.Type_EmpCode + " Employee Added Successfully" };
                    }
                    else
                    {
                        response = new BaseResponse { Success = false, Message = employee.Type_EmpCode + " Employee Failed To Add" };
                    }

                    

                }
                else
                {
                    response = new BaseResponse { Success = false, Message = " No detail found with employee ID " + employee.Type_EmpCode };
                }


                return response;



            }
            catch (Exception ex)
            {

                response = new BaseResponse { Success = false, Message = ex.Message };
                return response;
            }
;
        }

        public BaseResponse CreateEmployee(BaseRequest<Employee_Role> baseRequest)
        {
            BaseResponse response;
            try
            {
                Employee_Role emp = baseRequest.Entity;
               
                using (var ctx = new CMSUserMasterContext())
                {
                    BaseRequest<string> baseReq = new BaseRequest<string>
                    {
                        Entity = emp.Type_EmpCode
                    };
                    var checkEmp = this.checkEmployee(baseReq);

                    if(checkEmp.Success)
                    {
                        response = checkEmp;
                        return response;
                    }
                    var iTypeCode = ctx.UserMaster.Where(e => e.Type == "Employees" && e.TypeCode != null).OrderByDescending(u => u.ID).Select(i => i.TypeCode).FirstOrDefault() + 1;
                    ctx.UserMaster.Add(new Employee_Role()
                    {
                        TypeCode = iTypeCode,
                        Type_EmpCode = emp.Type_EmpCode,
                        EmployeeName = emp.EmployeeName,
                        MobileNumber = emp.MobileNumber,
                        Type = "Employees",
                        Password = EPassword,
                        EmailID = emp.EmailID,
                        RoleCode = emp.RoleCode,
                        RightsCode = emp.RightsCode,
                        CreatedDate = now,
                        FromDate = now,
                        IsActive = true,
                        MspCategory = emp.MspCategory,
                        CreatedBy = emp.CreatedBy
                    }); ;

                    int a = ctx.SaveChanges();

                    if (emp.RoleCode == 4 || emp.RoleCode == 6)
                    {
                        /*atmmaster amm = objEntity.atmmasters.Where(e => e.HubLocationCode);*/
                        var result = db.atm_master.Select(m => new
                        {
                            m.RoCode,
                            m.RoName,
                            m.LocationCode,
                            m.LocationName,
                            m.HubLocationCode,
                            m.HubLocationName
                        }).Distinct().Where(i => emp.Hub.Contains(i.HubLocationCode)).ToList();

                        foreach (var value in result)
                        {
                            //Console.WriteLine(value);
                            ctx.employee_Hierarchies.Add(new Employee_Hierarchy()
                            {
                                EmployeeCode = emp.Type_EmpCode,
                                Region_code = value.RoCode,
                                Loc_Code = value.LocationCode,
                                Hub_Location_Code = value.HubLocationCode,
                                CreatedBy = emp.CreatedBy,
                                CreatedDate = now,
                                FromDate = now,
                                IsActive = true


                            });
                           ctx.SaveChanges();

                           

                        }

                    }
                    if (a == 1)
                    {
                        response = new BaseResponse { Success = true, Message = emp.Type_EmpCode + " Employee Added Successfully" };
                    }
                    else
                    {
                        response = new BaseResponse { Success = false, Message = emp.Type_EmpCode +  " Employee Failed To Add" };
                    }

                    return response;


                }

            }
            catch(Exception ex)
            {
               
                response = new BaseResponse { Success = false, Message = ex.Message };
                return response;
            }
;
        }
       /* public BaseResponse<ATM_Master> GetLocatioDetail()
        {
            try
            {
                BaseResponse<ATM_Master> response = new BaseResponse<ATM_Master>();
                var result = db.atm_master.Select(m => new
                {
                    m.RoCode,
                    m.RoName,
                    m.LocationCode,
                    m.LocationName,
                    m.HubLocationCode,
                    m.HubLocationName
                }).Distinct().OrderBy(e => new { e.RoName, e.LocationCode, e.HubLocationCode });
                if (result != null)
                {
                    response.Success = true;
                    response.Message = " Employee already Exist";
                    response.Entity = result;
                }
                else
                {
                    response.Success = false;
                    response.Message = employeeID + " Employee not Exist";
                    response.Entity = null;
                    // response = new BaseResponse { Success = true, Message = employeeID + " Employee not Exist" };
                }
                return response;
                return Ok(result);
            }
            catch (Exception)
            {
                throw;
            }
        }*/
        public BaseResponse<Employee_Role> checkEmployee(BaseRequest<string> baseRequest)
        {
            BaseResponse<Employee_Role> response = new BaseResponse<Employee_Role>();
            string employeeID = baseRequest.Entity;
            Employee_Role checkEmployee = db.UserMaster.Where(e => e.Type == "Employees" && e.Type_EmpCode == employeeID).FirstOrDefault<Employee_Role>();

            if (checkEmployee != null)
            {
                response.Success = true;
                response.Message = employeeID + " Employee already Exist";
                response.Entity = checkEmployee;
            }
            else
            {
                response.Success = false;
                response.Message = employeeID + " Employee not Exist";
                response.Entity = null;
               // response = new BaseResponse { Success = true, Message = employeeID + " Employee not Exist" };
            }
            return response;
        }
        public TableListWithPagingInfo<Employee_info> GetEmployeeLists(BaseRequest<JqxGridPaginationModel> baseRequest)
        {
            try
            {
                TableListWithPagingInfo<Employee_info> EmployeeDetail = new TableListWithPagingInfo<Employee_info>();
                List<Employee_info> employeeViewers = new List<Employee_info>();

                if (baseRequest.Entity.filterGroups != null)
                {
                    string Type_EmpCode = string.Empty; bool Type_EmpCode_Flag = false;
                    foreach (var filterGroups in baseRequest.Entity.filterGroups)
                    {
                        foreach (var filter in filterGroups.filters)
                        {
                            switch (filter.field)
                            {
                                case "Type_EmpCode": Type_EmpCode = filter.value; Type_EmpCode_Flag = true; break;
                               
                            }
                        }
                    }
                    var objEmp = db.UserMaster.Select(RR => new
                    {
                        ID = RR.ID,
                        Type = RR.Type,
                        Type_EmpCode = RR.Type_EmpCode,
                        EmployeeName = RR.EmployeeName,
                        MobileNumber = RR.MobileNumber,
                        Password = RR.Password,
                        EmailID = RR.EmailID,
                        RoleCode = RR.RoleCode,
                        RightsCode = RR.RightsCode,
                        IsActive = RR.IsActive,
                        RoleName = db.UserMaster.Where(e => e.TypeCode == RR.RoleCode
                                       && e.Type == "Roles").Select(M => M.Type_EmpCode).FirstOrDefault(),
                        RightsName = db.UserMaster.Where(e => e.TypeCode == RR.RightsCode
                                       && e.Type == "Rights").Select(M => M.Type_EmpCode).FirstOrDefault(),

                    }).Where(i => i.Type == "Employees"
                     && (Type_EmpCode_Flag && i.Type_EmpCode == Type_EmpCode)
                     && (i.IsActive == true))
               .OrderBy(o => o.ID)
               .Take(baseRequest.Entity.PageSize)
               .ToList();
                 EmployeeDetail.PageResponseModelObj.TotalCount = db.UserMaster
                      .Where(i => i.Type == "Employees"
                      && Type_EmpCode_Flag && i.Type_EmpCode == Type_EmpCode
                      && (i.IsActive == true || i.IsActive == false)).Count();

                    foreach (var list in objEmp)
                    {
                        string Empty = "NULL";
                        Employee_info viewer = new Employee_info();
                        viewer.ID = list.ID;
                        viewer.Type_EmpCode = list.Type_EmpCode;
                        viewer.IsActive = list.IsActive;
                        viewer.Viewcomment = string.Format(
                            "{0}{1}Employee Name:{2}{0}{4} {0}{1}Mobile Number:{2}{0}{5}{3}" +
                            "{0}{1}Email ID:{2}{0}{6} {0}{1}Role:{2}{0}{7} {3}" +
                            "{0}{1}Rights:{2}{0}{8}",
                            "&nbsp;", "<b>", "</b>", "<br>",
                            !string.IsNullOrEmpty(list.EmployeeName) ? list.EmployeeName : list.EmployeeName,
                            !string.IsNullOrEmpty(list.MobileNumber) ? list.MobileNumber : Empty,
                            !string.IsNullOrEmpty(list.EmailID) ? list.EmailID : Empty,
                            !string.IsNullOrEmpty(list.RoleName) ? list.RoleName : Empty,
                            !string.IsNullOrEmpty(list.RightsName) ? list.RightsName : Empty
                            );

                        employeeViewers.Add(viewer);
                    }

                }
                else
                {
                   var objEmp = db.UserMaster.Select(RR => new
                    {
                        ID = RR.ID,
                        Type = RR.Type,
                        Type_EmpCode = RR.Type_EmpCode,
                        EmployeeName = RR.EmployeeName,
                        MobileNumber = RR.MobileNumber,
                        Password = RR.Password,
                        EmailID = RR.EmailID,
                        RoleCode = RR.RoleCode,
                        RightsCode = RR.RightsCode,
                        IsActive = RR.IsActive,
                        RoleName = db.UserMaster.Where(e => e.TypeCode == RR.RoleCode
                                       && e.Type == "Roles").Select(M => M.Type_EmpCode).FirstOrDefault(),
                        RightsName = db.UserMaster.Where(e => e.TypeCode == RR.RightsCode
                                       && e.Type == "Rights").Select(M => M.Type_EmpCode).FirstOrDefault(),

                    }).Where(i => i.Type == "Employees" && (i.IsActive == true))
                .OrderBy(o => o.ID)
                .Skip((baseRequest.Entity.PageNum - 1) * baseRequest.Entity.PageSize).Take(baseRequest.Entity.PageSize)
                .ToList();

                    EmployeeDetail.PageResponseModelObj.TotalCount = db.UserMaster
                        .Where(i => i.Type == "Employees" && (i.IsActive == true)).Count();
                   
                    foreach (var list in objEmp)
                    {
                        string Empty = "NULL";
                        Employee_info viewer = new Employee_info();
                        viewer.ID = list.ID;
                        viewer.Type_EmpCode = list.Type_EmpCode;
                        viewer.IsActive = list.IsActive;
                        viewer.Viewcomment = string.Format(
                            "{0}{1}Employee Name:{2}{0}{4} {0}{1}Mobile Number:{2}{0}{5}{3}" +
                            "{0}{1}Email ID:{2}{0}{6} {0}{1}Role:{2}{0}{7} {3}" +
                            "{0}{1}Rights:{2}{0}{8}",
                            "&nbsp;", "<b>", "</b>", "<br>",
                            !string.IsNullOrEmpty(list.EmployeeName) ? list.EmployeeName : list.EmployeeName,
                            !string.IsNullOrEmpty(list.MobileNumber) ? list.MobileNumber : Empty,
                            !string.IsNullOrEmpty(list.EmailID) ? list.EmailID : Empty,
                            !string.IsNullOrEmpty(list.RoleName) ? list.RoleName : Empty,
                            !string.IsNullOrEmpty(list.RightsName) ? list.RightsName : Empty
                            );

                        employeeViewers.Add(viewer);
                    }
                }
               
                EmployeeDetail.PageResponseModelObj.PageNumber = baseRequest.Entity.PageNum;
                EmployeeDetail.PageResponseModelObj.PageSize = baseRequest.Entity.PageSize;
                EmployeeDetail.PageResponseModelObj.PageCount = (int)Math.Ceiling((decimal)(EmployeeDetail.PageResponseModelObj.TotalCount / baseRequest.Entity.PageSize));
                EmployeeDetail.TableList = employeeViewers;

                return EmployeeDetail;
            }
            catch (Exception ex)
            {

            }
            return null;
        }
    }
}