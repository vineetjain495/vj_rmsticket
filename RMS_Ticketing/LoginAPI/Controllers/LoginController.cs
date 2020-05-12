using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMS_DTO.Models.Logins;
using CMSDAL;
using CMSDTO;
using CMSDTO.Entity;
using CMSDTO.Models.Response;
using ConnectorsAPI;
using LoginWebAPI.Entities;
using LoginWebAPI.Models;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Web.Http;

namespace LoginAPI.Controllers
{
    [RoutePrefix("api/Login")]
    public class LoginController : ApiController
    {
        private CMSUserMasterContext db = new CMSUserMasterContext();
        DateTime now = DateTime.Now;
        string EPassword = "cms.info@2020";
        [Route("Login")]
        [HttpPost]

        public BaseResponse<Employee_Role_Model> Login(Credential data)
        {
            BaseResponse<Employee_Role_Model> baseResponse = new BaseResponse<Employee_Role_Model>();
            //{"CompanyCode":"CSL","CustomerCode":"C00234","ApiKey":"XyMUWdOm4DeYfVJt+QbIO9/UqTeX2GFF3R5+zrAB6fA="}
            string msg = string.Empty;
            try
            {
                string UserID = data.UserID;
                
                string Password = data.Password;
              
                string client_id = System.Configuration.ConfigurationManager.AppSettings["ClientId"];
                string URL = System.Configuration.ConfigurationManager.AppSettings["URL"];
                Credential credential = new Credential {UserID=UserID,Password=Password};
                //baseResponse.Success = true;
                baseResponse = new UserMasterRepository().ValidateUserAuthentication(credential);
                
                if (!baseResponse.Success)
                {
                    baseResponse.Success = false;
                    baseResponse.Message = "Invalid Authentication";
                    return baseResponse;
                }

                var restClient = new RestClient(URL);
                var request = new RestRequest(Method.POST) { Resource= "/oauth2/token2" };
               
                request.AddParameter("client_id", client_id);
                request.AddParameter("grant_type", "password");
                request.AddParameter("username", UserID);
                request.AddParameter("password", Password);
         
                var response = restClient.Post(request);
                
                //var content = response.Content;
                msg = response.Content;
                AccessTokenResponse responsetoken = (JsonConvert.DeserializeObject<AccessTokenResponse>(response.Content));
                baseResponse.Success = true;
                baseResponse.Message = "Success";
                baseResponse.UserToken = responsetoken;

                return baseResponse;
            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = string.Format("{0}/n{1}", ex.Message, msg);
                return baseResponse;
            }

        }

       /* [HttpPost]
        [Route("PostNewEmployee")]
        //Get action methods of the previous section
        public IHttpActionResult PostNewEmployee(Employee_Role emp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid data.");
            }
            DateTime now = DateTime.Now;
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

                             where RR.Type == "Employees" && RR.IsActive == true
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
                    viewer.Viewcomment = string.Format(
                        "{0}{1}Employee Name:{2}{4} {0}{1}Mobile Number:{2}{5}{3}" +
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
          

            try
            {
               var objEmp = db.UserMaster.Where(e => e.Type_EmpCode == employeeId).FirstOrDefault();
                return Ok(objEmp);
            }
            catch (Exception ex)
            {
                return NotFound();
                 

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
        }*/
    }
}
