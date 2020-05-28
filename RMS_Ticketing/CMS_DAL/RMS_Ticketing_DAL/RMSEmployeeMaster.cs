using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMSDAL;
using CMSDTO.Models.Request;
using CMSDTO.Models.Response;
using CMSRepository.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;

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
                                if ((objEmp.RoleCode != employee.RoleCode) && 
                                    ((objEmp.RoleCode == 4 && employee.RoleCode != 6) || (objEmp.RoleCode == 6 && employee.RoleCode != 4)))
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
                        objEmp.MGRCODE = employee.MGRCODE;
                        objEmp.MspCategory = employee.MspCategory;
                     
                        if ((employee.RoleCode == 4 || employee.RoleCode == 6) && employee.IsActive == true)
                        {
                        if (employee.Hub != null)
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

                            last_location.ForEach(a =>
                            {
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
                        else
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
                        /*else if (employee.RoleCode == 2)
                        {
                            objEmp.MspCategory = employee.MspCategory;
                        }*/
                        int z = this.db.SaveChanges();

                   
                        response = new BaseResponse { Success = true, Message = employee.Type_EmpCode + " Employee Updated Successfully" };
                   

                    

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
                        checkEmp.Success = false;
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
                        CreatedBy = emp.CreatedBy,
                        MGRCODE = emp.MGRCODE
                    }); ;

                    int a = ctx.SaveChanges();

                    if (emp.RoleCode == 4 || emp.RoleCode == 6)
                    {
                        if (emp.Hub != null)
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
                    }
                        if (a == 1)
                        {
                            response = new BaseResponse { Success = true, Message = emp.Type_EmpCode + " Employee Added Successfully" };
                        }
                        else
                        {
                            response = new BaseResponse { Success = false, Message = emp.Type_EmpCode + " Employee Failed To Add" };
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
        public BaseResponse<IEnumerable<ATM_Master_model>> GetLocationDetailByID(BaseRequest<string> baseRequest)
        {
            try
            {
                string employeeID = baseRequest.Entity;
                BaseResponse<IEnumerable<ATM_Master_model>> response = new BaseResponse<IEnumerable<ATM_Master_model>>();
                IEnumerable<ATM_Master_model> result = null;
                List<ATM_Master_model> employeeLocation = new List<ATM_Master_model>();
                var objLoc = db.employee_Hierarchies.Where(i => i.EmployeeCode == employeeID && i.IsActive == true).ToList();
                List<string> hubs = new List<string>();
                foreach (var list in objLoc)
                {
                    hubs.Add(list.Hub_Location_Code);
                    
                }
                result = db.atm_master.Select(m => new ATM_Master_model
                {
                    EmployeeCode = employeeID,
                    RoCode = m.RoCode,
                    RoName = m.RoName,
                    LocationCode = m.LocationCode,
                    LocationName = m.LocationName,
                    HubLocationCode = m.HubLocationCode,
                    HubLocationName = m.HubLocationName
                }).Where(e => hubs.Contains(e.HubLocationCode)).Distinct().ToList();

                /*.Select(m => new ATM_Master_model
                 {

                     Loc_detail = db.atm_master.Select(n => new {
                         EmployeeCode = m.EmployeeCode,
                         RoCode = n.RoCode,
                         RoName = n.RoName,
                         LocationCode = n.LocationCode,
                         LocationName = n.LocationName,
                         HubLocationCode = n.HubLocationCode,
                         HubLocationName = n.HubLocationName
                     }).Where(e => m.Hub_Location_Code == e.HubLocationCode).Distinct()
                     */


                 
                


                if (result != null)
                {
                    response.Success = true;
                    response.Message = "Location fetched successfully";
                    response.Entity = result;
                }
                else
                {
                    response.Success = false;
                    response.Message = "Location Not Loaded";
                    response.Entity = null;
                    // response = new BaseResponse { Success = true, Message = employeeID + " Employee not Exist" };
                }
                return response;
                //return Ok(result);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public BaseResponse<IEnumerable<ATM_Master_model>> GetLocationDetail(BaseRequest baseRequest)
        {
            try
            {
                BaseResponse<IEnumerable<ATM_Master_model>> response = new BaseResponse<IEnumerable<ATM_Master_model>>();
                IEnumerable<ATM_Master_model> result = null;
                result = db.atm_master.Select(m => new ATM_Master_model
                {
                  RoCode =   m.RoCode,
                  RoName =  m.RoName,
                  LocationCode =  m.LocationCode,
                    LocationName =  m.LocationName,
                    HubLocationCode =   m.HubLocationCode,
                    HubLocationName =   m.HubLocationName
                }).Distinct().OrderBy(e => new { e.RoName, e.LocationCode, e.HubLocationCode }).ToList();

               
                    if (result != null)
                {
                    response.Success = true;
                    response.Message = "Location fetched successfully";   
                    response.Entity = result;
                }
                else
                {
                    response.Success = false;
                    response.Message = "Location Not Loaded";
                    response.Entity = null;
                    // response = new BaseResponse { Success = true, Message = employeeID + " Employee not Exist" };
                }
                return response;
                //return Ok(result);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public BaseResponse<IEnumerable<ATM_Master_model>> GetMSPDetail(BaseRequest baseRequest)
        {
            try
            {
                BaseResponse<IEnumerable<ATM_Master_model>> response = new BaseResponse<IEnumerable<ATM_Master_model>>();
                IEnumerable<ATM_Master_model> result = null;
                result = db.atm_master.Select(m => new ATM_Master_model
                {
                   MSP = m.MSP
                }).Distinct().ToList();


                if (result != null)
                {
                    response.Success = true;
                    response.Message = "MSP Detail fetched successfully";
                    response.Entity = result;
                }
                else
                {
                    response.Success = false;
                    response.Message = "MSP Detail Not Loaded";
                    response.Entity = null;
                    // response = new BaseResponse { Success = true, Message = employeeID + " Employee not Exist" };
                }
                return response;
                //return Ok(result);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public BaseResponse<IEnumerable<Employee_Role>> GetRolesDetail(BaseRequest baseRequest)
        {
            try
            {
                BaseResponse<IEnumerable<Employee_Role>> response = new BaseResponse<IEnumerable<Employee_Role>>();
                IEnumerable<Employee_Role> result = null;
                  result = db.UserMaster.Where(e => e.Type == "Roles" || e.Type == "Rights").OrderBy(e => new { e.ID, e.Type }).ToList();

                if (result != null)
                {
                    response.Success = true;
                    response.Message = "Roles fetched successfully";
                    response.Entity = result;
                }
                else
                {
                    response.Success = false;
                    response.Message = "Roles Not Loaded";
                    response.Entity = null;
                    // response = new BaseResponse { Success = true, Message = employeeID + " Employee not Exist" };
                }
                return response;
                //return Ok(result);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public BaseResponse<int> GetEmployeeTicketsById(BaseRequest<string> baseRequest)
        {
            try
            {
                string employeeID = baseRequest.Entity;
                BaseResponse<int> response = new BaseResponse<int>();
                //IEnumerable<ATM_Master_model> result = null;
                var objticket = db.tickets.Where(m => m.AssignedTo == employeeID).ToList();
                
                if (objticket != null)
                {
                    response.Success = true;
                    response.Message = "Ticket Available";
                    response.Entity = objticket.Count();
                }
                else
                {
                    response.Success = false;
                    response.Message = "Ticket Not Available";
                    response.Entity = 0;
                    // response = new BaseResponse { Success = true, Message = employeeID + " Employee not Exist" };
                }
                return response;

            }
            catch (Exception)
            {
                throw;
            }
            //return null;
        }
        public BaseResponse<IEnumerable<Employee_Role>> GetEmployeeDetail(BaseRequest baseRequest)
        {
            try
            {
                BaseResponse<IEnumerable<Employee_Role>> response = new BaseResponse<IEnumerable<Employee_Role>>();
                IEnumerable<Employee_Role> result = null;
                result =  db.UserMaster.Where(e => e.Type == "Employees" && (e.IsActive == true || e.IsActive == false)).ToList();
                if (result != null)
                {
                    response.Success = true;
                    response.Message = "Employee ID fetched successfully";
                    response.Entity = result;
                }
                else
                {
                    response.Success = false;
                    response.Message = "Employee ID Not Loaded";
                    response.Entity = null;
                    // response = new BaseResponse { Success = true, Message = employeeID + " Employee not Exist" };
                }
                return response;
            }
            catch (Exception)
            {
                throw;

            }
        }

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
                        MspCategory = RR.MspCategory

                    }).Where(i => i.Type == "Employees"
                     && (Type_EmpCode_Flag && i.Type_EmpCode == Type_EmpCode)
                     && (i.IsActive == true || i.IsActive == false))
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
                        string RoleFinal = "";
                        if (list.RoleCode == 2 && list.MspCategory != Empty && list.MspCategory != "")
                        {
                            RoleFinal = list.RoleName + " " + list.MspCategory + " ";
                        }
                        else
                        {
                            RoleFinal = list.RoleName;
                        }
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
                             !string.IsNullOrEmpty(RoleFinal) ? RoleFinal : Empty,
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
                       MspCategory = RR.MspCategory

                   }).Where(i => i.Type == "Employees" && (i.IsActive == true || i.IsActive == false))
                .OrderByDescending(o =>  o.IsActive )
                .Skip((baseRequest.Entity.PageNum - 1) * baseRequest.Entity.PageSize).Take(baseRequest.Entity.PageSize)
                .ToList();

                    EmployeeDetail.PageResponseModelObj.TotalCount = db.UserMaster
                        .Where(i => i.Type == "Employees" && (i.IsActive == true || i.IsActive == false)).Count();
                   
                    foreach (var list in objEmp)
                    {
                       
                        string Empty = "NULL";
                        string RoleFinal = "";
                        if (list.RoleCode == 2 && list.MspCategory != Empty && list.MspCategory != "" )
                        {
                            RoleFinal = list.RoleName + " ( " + list.MspCategory + " ) ";
                        }
                        else
                        {
                            RoleFinal = list.RoleName;
                        }
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
                            !string.IsNullOrEmpty(RoleFinal) ? RoleFinal : Empty,
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
        public BaseResponse UpdateTicketAssign(BaseRequest<AssignTicket> baseRequest)
        {
            BaseResponse response;
            try
            {
                AssignTicket employeeID = baseRequest.Entity;

                var total_ticket = Int32.Parse(employeeID.ticket_count);
                var total_emp = employeeID.Emp_ID.Count();
                int ind = (int)Math.Ceiling((decimal)total_ticket / total_emp);
                var total_ticket_left = total_ticket;
                foreach (var value in employeeID.Emp_ID)
                {
                    var emp_code = value.Split(' ');
                    var emp_role = db.UserMaster.Where(e => e.Type_EmpCode == employeeID.Last_Type_EmpCode).Select(i => i.RoleCode).FirstOrDefault();


                    var partial_ticket = db.tickets.Where(f => f.AssignedTo == employeeID.Last_Type_EmpCode).OrderByDescending(u => u.Id).Take(ind).ToList();
                    if (emp_code.Length > 0)
                    {
                        if (emp_role == 3)
                        {
                            partial_ticket.ForEach(a => {
                                a.AssignedTo = emp_code[0];
                                a.HoOwner = emp_code[0];
                            });
                        }
                        else if (emp_role == 4)
                        {
                            partial_ticket.ForEach(a => {
                                a.AssignedTo = emp_code[0];
                                a.LocOwner = emp_code[0];
                            });
                        }
                        else
                        {
                            partial_ticket.ForEach(a => {
                                a.AssignedTo = emp_code[0];
                                a.HoOwner = "";
                                a.LocOwner = "";
                            }
                            );
                        }
                        //total_ticket_left = total_ticket_left - ind;
                        db.SaveChanges();
                    }

                }


                response = new BaseResponse { Success = true, Message = employeeID.Last_Type_EmpCode + " Successfully Assigned" };


                return response;

        }
            catch (Exception)
            {
                throw;
            }
           
        }

    }
}