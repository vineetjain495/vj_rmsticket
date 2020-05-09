﻿using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
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

        [HttpPost]
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
                    MspCategory = emp.MspCategory

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

                             where RR.Type == "Employees"
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

                /* var query = from RR in objEntity.employee_role
                             where RR.Type == "Employees"
                             join p in objEntity.employee_role on RR.RoleCode equals p.TypeCode
                             select new { RR, RoleName = p.Type_EmpCode };*/
                return Ok(query);
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

    }
}