using System;
using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMS_DTO.Models.Logins;
using LoginWebAPI.Models;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CMSDAL;

namespace LoginAPI.Controllers
{
    [RoutePrefix("Api/Employee")]
    public class EmployeeController : ApiController
    {
        private CMSUserMasterContext db = new CMSUserMasterContext();
        DateTime now = DateTime.Now;
        string EPassword = "cms.info@2020";
        // GET: api/Employee
        public IQueryable<Employee_Role> GetUserMaster()
        {
            return db.UserMaster;
        }
        [HttpPost]
        [Route("PostNewEmployee")]
        //Get action methods of the previous section
        public IHttpActionResult PostNewEmployee(Employee_Role emp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid data.");
            }
           // DateTime now = DateTime.Now;
            using (var ctx = new CMSUserMasterContext())
            {
                ctx.UserMaster.Add(new Employee_Role()
                {
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
                });

                ctx.SaveChanges();

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
                        Console.WriteLine(value);
                        ctx.employee_Hierarchies.Add(new Employee_Hierarchy()
                        {
                            EmployeeCode = emp.Type_EmpCode,
                            Region_code = value.RoCode,
                            Loc_Code = value.LocationCode,
                            Hub_Location_Code = value.HubLocationCode,
                            CreatedDate = now,
                            FromDate = now,
                            IsActive = true


                        });
                        ctx.SaveChanges();
                    }

                }

            }

            return Ok();
        }


        [HttpGet]
        [Route("AllEmployeelimited")]
        public IHttpActionResult GetEmaployeelimited()
        {
            try
            {
                var query = (from RR in db.UserMaster
                             from M in db.UserMaster
                             where RR.RoleCode == M.TypeCode
                                   && M.Type == "Roles"
                             from N in db.UserMaster
                             where RR.RoleCode == N.TypeCode
                                   && N.Type == "Rights"

                             where RR.Type == "Employees" && (RR.IsActive == true || RR.IsActive == false)
                             select new
                             {
                                 ID = RR.ID,
                                 Type_EmpCode = RR.Type_EmpCode,
                                 EmployeeName = RR.EmployeeName,
                                 MobileNumber = RR.MobileNumber,
                                 Password = RR.Password,
                                 EmailID = RR.EmailID,
                                 RoleCode = RR.RoleCode,
                                 RightsCode = RR.RightsCode,
                                 IsActive = RR.IsActive,
                                 RoleName = M.Type_EmpCode,
                                 RightsName = N.Type_EmpCode,

                             }
                    ).ToList();
                List<Employee_info> employeeViewers = new List<Employee_info>();
                foreach (var list in query)
                {
                    string Empty = "NULL";
                    Employee_info viewer = new Employee_info();
                    viewer.ID = list.ID;
                    viewer.Type_EmpCode = list.Type_EmpCode;
                    viewer.IsActive = list.IsActive;
                    viewer.Viewcomment = string.Format(
                        "{1}Employee Name:{2}{4} {0}{1}Mobile Number:{2}{5}{3}" +
                        "{0}{1}Email ID:{2}{6} {0}{1}Role:{2}{7} {3}" +
                        "{0}{1}Rights:{2}{8}",
                        "&nbsp;", "<b>", "</b>", "<br>",
                        !string.IsNullOrEmpty(list.EmployeeName) ? list.EmployeeName : list.EmployeeName,
                        !string.IsNullOrEmpty(list.MobileNumber) ? list.MobileNumber : Empty,
                        !string.IsNullOrEmpty(list.EmailID) ? list.EmailID : Empty,
                        !string.IsNullOrEmpty(list.RoleName) ? list.RoleName : Empty,
                        !string.IsNullOrEmpty(list.RightsName) ? list.RightsName : Empty
                        );

                    employeeViewers.Add(viewer);
                }
                /* var query = from RR in objEntity.employee_role
                             where RR.Type == "Employees"
                             join p in objEntity.employee_role on RR.RoleCode equals p.TypeCode
                             select new { RR, RoleName = p.Type_EmpCode };*/
                return Ok(employeeViewers);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        [HttpGet]
        [Route("GetEmployeelimitedById/{employeeId}")]
        public IHttpActionResult GetEmployeelimitedById(string employeeId)
        {
            //Employee_Role objEmp = new Employee_Role();
            /*int ID = Convert.ToInt32(employeeId);*/

            try
            {
                var query = (from RR in db.UserMaster
                             from M in db.UserMaster
                             where RR.RoleCode == M.TypeCode
                                   && M.Type == "Roles"
                             from N in db.UserMaster
                             where RR.RoleCode == N.TypeCode
                                   && N.Type == "Rights"

                             where RR.Type == "Employees" && RR.Type_EmpCode == employeeId && (RR.IsActive == true || RR.IsActive == false)
                             select new
                             {
                                 ID = RR.ID,
                                 Type_EmpCode = RR.Type_EmpCode,
                                 EmployeeName = RR.EmployeeName,
                                 MobileNumber = RR.MobileNumber,
                                 Password = RR.Password,
                                 EmailID = RR.EmailID,
                                 RoleCode = RR.RoleCode,
                                 RightsCode = RR.RightsCode,
                                 IsActive = RR.IsActive,
                                 RoleName = M.Type_EmpCode,
                                 RightsName = N.Type_EmpCode,
                                 
                             }
                    ).ToList();
                List<Employee_info> employeeViewers = new List<Employee_info>();
                foreach (var list in query)
                {
                    string Empty = "NULL";
                    Employee_info viewer = new Employee_info();
                    viewer.ID = list.ID;
                    viewer.Type_EmpCode = list.Type_EmpCode;
                    viewer.IsActive = list.IsActive;
                    viewer.Viewcomment = string.Format(
                        "{1}Employee Name:{2}{4} {0}{1}Mobile Number:{2}{5}{3}" +
                        "{0}{1}Email ID:{2}{6} {0}{1}Role:{2}{7} {3}" +
                        "{0}{1}Rights:{2}{8}",
                        "&nbsp;", "<b>", "</b>", "<br>",
                        !string.IsNullOrEmpty(list.EmployeeName) ? list.EmployeeName : list.EmployeeName,
                        !string.IsNullOrEmpty(list.MobileNumber) ? list.MobileNumber : Empty,
                        !string.IsNullOrEmpty(list.EmailID) ? list.EmailID : Empty,
                        !string.IsNullOrEmpty(list.RoleName) ? list.RoleName : Empty,
                        !string.IsNullOrEmpty(list.RightsName) ? list.RightsName : Empty
                        );

                    employeeViewers.Add(viewer);
                }
                /* var query = from RR in objEntity.employee_role
                             where RR.Type == "Employees"
                             join p in objEntity.employee_role on RR.RoleCode equals p.TypeCode
                             select new { RR, RoleName = p.Type_EmpCode };*/
                return Ok(employeeViewers);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetEmployeeDetailsById/{employeeId}")]
        public IHttpActionResult GetEmaployeeById(string employeeId)
        {
            //Employee_Role objEmp = new Employee_Role();
            /*int ID = Convert.ToInt32(employeeId);*/

            try
            {
                var objEmp = db.UserMaster.Where(e => e.Type_EmpCode == employeeId).FirstOrDefault();
                return Ok(objEmp);
            }
            catch (Exception ex)
            {
                return NotFound();
                /* throw;*/

            }

            //return null;
        }
        [HttpGet]
        [Route("GetLocatioDetail")]
        public IHttpActionResult GetLocatioDetail()
        {
            try
            {
                var result = db.atm_master.Select(m => new
                {
                    m.RoCode,
                    m.RoName,
                    m.LocationCode,
                    m.LocationName,
                    m.HubLocationCode,
                    m.HubLocationName
                }).Distinct().OrderBy(e => new { e.RoName, e.LocationCode, e.HubLocationCode });

                return Ok(result);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPut]
        [Route("UpdateEmployeeDetails")]
        public IHttpActionResult PutEmaployeeMaster(Employee_Role employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                //employee_role objEmp = new employee_role();
                var objEmp = db.UserMaster.Where(e => e.Type_EmpCode == employee.Type_EmpCode).FirstOrDefault<Employee_Role>();
                if (objEmp != null)
                {
                    if (objEmp.IsActive != employee.IsActive || (objEmp.RoleCode != employee.RoleCode && objEmp.RoleCode == 4))
                    {
                        var objticket = db.tickets.Where(m => m.AssignedTo == employee.Type_EmpCode).ToList();
                        if (objticket.Count() != 0)
                        {
                            return Ok(0);
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
                }
                int i = this.db.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(employee);
        }
        [HttpDelete]
        [Route("DeleteEmployeeDetails")]
        public IHttpActionResult DeleteEmaployeeDelete(string emp_code)
        {
            //int empId = Convert.ToInt32(id);  
            Employee_Role emaployee = db.UserMaster.Where(e => e.Type_EmpCode == emp_code).FirstOrDefault<Employee_Role>();
            if (emaployee == null)
            {
                return NotFound();
            }

            db.UserMaster.Remove(emaployee);
            db.SaveChanges();

            return Ok(emaployee);
        }
    }
}