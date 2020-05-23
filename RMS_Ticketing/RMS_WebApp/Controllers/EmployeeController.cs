using System;
using System.Net.Http;
using System.Web.Mvc;
using Newtonsoft.Json;
using RestSharp;
using System.Configuration;
using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMSDTO.Models.Request;
using CMSDTO.Models.Response;
using CMSRepository.Models;
using CMSWebApp.Utility;
using System.Collections.Generic;
/*using System.Data;
 * using System;
using System.Collections.Generic;
using System.Collections.Generic;
using System.Linq;
using CMS_DTO.Models.RMS_Ticketing;
using System.Net;
using System.ComponentModel;
using CMSDTO.Entity;
using CMSDTO.Models.Request;
using CMSDTO.Models.Response;
using CMSRepository.Models;
using CMSWebApp.App_Start;
using CMSWebApp.Utility;
using LoginWebAPI.Models;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Web;*/
using CMS_DTO.Entity.RMS_Ticketing;
//using CMS_DTO.Models.Logins;
using System.Web.Script.Serialization;
using System.Net.Http.Headers;
using CMS_DTO.Models.RMS_Ticketing;
//using CMS

namespace WebApp.Controllers
{
    public class EmployeeController : Controller
    {
        RestClient restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());
        HttpClient client = new HttpClient();
       /* [HttpPost]
        public ActionResult NewEmployee(Employee_Role employee_Role)
        {

            try
            {
               
                //var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());

                var serviceUrl = "Api/Employee/PostNewEmployee";
               
                //HttpClient client = new HttpClient();
                //client.BaseAddress = new Uri("http://localhost:59390/");
                client.BaseAddress = new Uri(restClient.BaseUrl.ToString());
                // Add an Accept header for JSON format.    
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                // List all Names.    
                HttpResponseMessage response = client.PostAsJsonAsync(serviceUrl, employee_Role).Result;  // Blocking call!    
               
                if (response.IsSuccessStatusCode)
                {
                   
                    return Json("success");
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {

            }

            return null;


            //return null;
        }*/
        [HttpPost]
        public ContentResult CreateEmployee(Employee_Role employee_Role)
        {
            {

                BaseResponse baseResponse = new BaseResponse();
                BaseRequest<Employee_Role> baseReq = new BaseRequest<Employee_Role>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                    Entity = employee_Role
                };
                employee_Role.CreatedBy = baseReq.LoginEmployeeDetails.EmpCode;
                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse, BaseRequest<Employee_Role>>
                (CommonConstant.CreateEmployeeUrl, baseReq);
                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });
                return Content(result, "application/json");
            }

        }
        [HttpPost]
        public ContentResult UpdateEmployeeDetails(Employee_Role employee_Role)
        {
            {
                //employee_Role.ModifiedBy = 
                BaseResponse baseResponse = new BaseResponse();
                BaseRequest<Employee_Role> baseReq = new BaseRequest<Employee_Role>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                    Entity = employee_Role
                };
                employee_Role.ModifiedBy = baseReq.LoginEmployeeDetails.EmpCode;
                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse, BaseRequest<Employee_Role>>
                (CommonConstant.UpdateEmployeeUrl, baseReq);
                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });
                return Content(result, "application/json");
            }

        }
        [HttpGet]
        public ContentResult CheckEmployee(string employeeID)
        {
            {

                BaseResponse<Employee_Role> baseResponse = new BaseResponse<Employee_Role>();
                BaseRequest<string> baseReq = new BaseRequest<string>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                    Entity = employeeID
                };
                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<Employee_Role>, BaseRequest<string>>
                (CommonConstant.CheckEmployeeUrl, baseReq);
                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });
                return Content(result, "application/json");
            }

        }

        /*[HttpPut]
        public ActionResult UpdateEmployeeDetails(Employee_Role employee_Role)
        {

            try
            {

                //var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());

                var serviceUrl = "Api/Employee/UpdateEmployeeDetails";
                client.BaseAddress = new Uri(restClient.BaseUrl.ToString());
                // Add an Accept header for JSON format.    
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                // List all Names.    
                HttpResponseMessage response = client.PutAsJsonAsync(serviceUrl, employee_Role).Result;  // Blocking call!    

                if (response.IsSuccessStatusCode)
                {
                    var jsonString = response.Content.ReadAsStringAsync().Result;
                    //var jsonOb = JsonConvert.DeserializeObject(jsonString);
                    JavaScriptSerializer j = new JavaScriptSerializer();
                    if (jsonString == "0")
                    {
                        //object a = j.Deserialize(jsonString, typeof(object));
                        return Json(jsonString, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("success");
                    }
                   

                   
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {

            }

            return null;


            //return null;
        }*/
        [HttpPost]
        public ContentResult UpdateTicketAssign(AssignTicket employeeID)
        {
            {

                BaseResponse baseResponse = new BaseResponse();
                BaseRequest<AssignTicket> baseReq = new BaseRequest<AssignTicket>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                    Entity = employeeID
                };
                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse, BaseRequest<AssignTicket>>
                (CommonConstant.UpdateTicketAssignUrl, baseReq);
                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });
                return Content(result, "application/json");
            }

        }
        /*[HttpPut]
        public ActionResult UpdateTicketAssign(AssignTicket employeeID)
        {

            try
            {

                //var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());

                var serviceUrl = "Api/Employee/UpdateTicketAssign";
                
                client.BaseAddress = new Uri(restClient.BaseUrl.ToString());
                // Add an Accept header for JSON format.    
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                // List all Names.    
                HttpResponseMessage response = client.PutAsJsonAsync(serviceUrl, employeeID).Result;  // Blocking call!    

                if (response.IsSuccessStatusCode)
                {
                    var jsonString = response.Content.ReadAsStringAsync().Result;
                    //var jsonOb = JsonConvert.DeserializeObject(jsonString);
                    JavaScriptSerializer j = new JavaScriptSerializer();
                    if (jsonString == "0")
                    {
                        //object a = j.Deserialize(jsonString, typeof(object));
                        return Json(jsonString, JsonRequestBehavior.AllowGet);
                    }
                    else
                    {
                        return Json("success");
                    }



                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {

            }

            return null;


            //return null;
        }*/

        //EmployeelimitedById
       /* [HttpGet]
        public ActionResult EmployeelimitedById(string employeeId)
        {
            try
            {

                //var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());

                var serviceUrl = "Api/Employee/GetEmployeelimitedById";

                //HttpClient client = new HttpClient();
                client.BaseAddress = new Uri(restClient.BaseUrl.ToString());
                // Add an Accept header for JSON format.    
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                // List all Names.    
                HttpResponseMessage response = client.GetAsync(serviceUrl + "/" + employeeId).Result;  // Blocking call!    
                if (response.IsSuccessStatusCode)
                {
                    var jsonString = response.Content.ReadAsStringAsync().Result;
                    //var jsonOb = JsonConvert.DeserializeObject(jsonString);
                    JavaScriptSerializer j = new JavaScriptSerializer();
                    object a = j.Deserialize(jsonString, typeof(object));
                    return Json(a, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {

            }
            return null;
        }
        [HttpGet]
        public JsonResult  Employeelimited()
        {
            try
            {

                //var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());

                var serviceUrl = "Api/Employee/AllEmployeelimited";
                
                //HttpClient client = new HttpClient();
                client.BaseAddress = new Uri(restClient.BaseUrl.ToString());
                // Add an Accept header for JSON format.    
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                // List all Names.    
                HttpResponseMessage response = client.GetAsync(serviceUrl).Result;  // Blocking call!    
                if (response.IsSuccessStatusCode)
                {
                    var jsonString = response.Content.ReadAsStringAsync().Result;
                    //var jsonOb = JsonConvert.DeserializeObject(jsonString);
                    JavaScriptSerializer j = new JavaScriptSerializer();
                    object a = j.Deserialize(jsonString, typeof(object));
                    return Json(a, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {

            }
            return null;
        }*/
        [HttpPost]
        public ContentResult GetEmployeelimited(JqxGridPaginationModel pagingRequestModel)
        {
            {
                BaseResponse<TableListWithPagingInfo<Employee_info>> baseResponse = new BaseResponse<TableListWithPagingInfo<Employee_info>>();

                BaseRequest<JqxGridPaginationModel> baseReq = new BaseRequest<JqxGridPaginationModel>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                    Entity = pagingRequestModel
                };

                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<TableListWithPagingInfo<Employee_info>>, BaseRequest<JqxGridPaginationModel>>
                (CommonConstant.GetEmployeeLimitedUrl, baseReq);

                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });


                return Content(result, "application/json");


            }

        }


        /*[HttpGet]
        public JsonResult EmployeeDetails()
        {
            try
            {

                //var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());

                var serviceUrl = "Api/Employee/GetEmployeeDetails";

                //HttpClient client = new HttpClient();
                client.BaseAddress = new Uri(restClient.BaseUrl.ToString());
                // Add an Accept header for JSON format.    
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                // List all Names.    
                HttpResponseMessage response = client.GetAsync(serviceUrl).Result;  // Blocking call!    
                if (response.IsSuccessStatusCode)
                {
                    var jsonString = response.Content.ReadAsStringAsync().Result;
                    //var jsonOb = JsonConvert.DeserializeObject(jsonString);
                    JavaScriptSerializer j = new JavaScriptSerializer();
                    object a = j.Deserialize(jsonString, typeof(object));
                    return Json(a, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {

            }
            return null;
        }*/

       /* [HttpGet]
        public JsonResult LocatioDetail()
        {
            try
            {

               // var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());

                var serviceUrl = "Api/Employee/GetLocatioDetail";
              
                //HttpClient client = new HttpClient();
                client.BaseAddress = new Uri(restClient.BaseUrl.ToString());
               
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                
                HttpResponseMessage response = client.GetAsync(serviceUrl).Result;  // Blocking call!    
                if (response.IsSuccessStatusCode)
                {
                    var jsonString = response.Content.ReadAsStringAsync().Result;
                    //var jsonOb = JsonConvert.DeserializeObject(jsonString);
                    JavaScriptSerializer j = new JavaScriptSerializer();
                    object a = j.Deserialize(jsonString, typeof(object));
                    return Json(a, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {

            }
            return null;
        }*/
       /* [HttpGet]
        public JsonResult RolesDetail()
        {
            try
            {

               // var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());

                var serviceUrl = "Api/Employee/GetRolesDetail";

                
                client.BaseAddress = new Uri(restClient.BaseUrl.ToString());

                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage response = client.GetAsync(serviceUrl).Result;  // Blocking call!    
                if (response.IsSuccessStatusCode)
                {
                    var jsonString = response.Content.ReadAsStringAsync().Result;
                    //var jsonOb = JsonConvert.DeserializeObject(jsonString);
                    JavaScriptSerializer j = new JavaScriptSerializer();
                    object a = j.Deserialize(jsonString, typeof(object));
                    return Json(a, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {

            }
            return null;
        }*/
        /*[HttpGet]
        public ActionResult EmployeeDetailsById(string employeeId)
        {
            try
            {

               

                var serviceUrl = "Api/Employee/GetEmployeeDetailsById";
              
                //HttpClient client = new HttpClient();
                client.BaseAddress = new Uri(restClient.BaseUrl.ToString());
                // Add an Accept header for JSON format.    
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                // List all Names.    
                HttpResponseMessage response = client.GetAsync(serviceUrl+"/"+employeeId).Result;  // Blocking call!    
                if (response.IsSuccessStatusCode)
                {
                    var jsonString = response.Content.ReadAsStringAsync().Result;
                    //var jsonOb = JsonConvert.DeserializeObject(jsonString);
                    JavaScriptSerializer j = new JavaScriptSerializer();
                    object a = j.Deserialize(jsonString, typeof(object));
                    return Json(a, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {

            }
            return null;
        }*/
        [HttpGet]
        public ContentResult LocationDetail()
        {
            {

                BaseResponse<IEnumerable<ATM_Master_model>> baseResponse = new BaseResponse<IEnumerable<ATM_Master_model>>();
                BaseRequest<string> baseReq = new BaseRequest<string>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],

                };
                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<IEnumerable<ATM_Master_model>>, BaseRequest<string>>
                (CommonConstant.LocationDetailUrl, baseReq);
                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });
                return Content(result, "application/json");
            }

        }
        [HttpGet]
        public ContentResult RolesDetail()
        {
            {

                BaseResponse<IEnumerable<Employee_Role>> baseResponse = new BaseResponse<IEnumerable<Employee_Role>>();
                BaseRequest<string> baseReq = new BaseRequest<string>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],

                };
                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<IEnumerable<Employee_Role>>, BaseRequest<string>>
                (CommonConstant.RolesDetailUrl, baseReq);
                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });
                return Content(result, "application/json");
            }

        }
        [HttpGet]
        public ContentResult EmployeeDetails()
        {
            {

                BaseResponse<IEnumerable<Employee_Role>> baseResponse = new BaseResponse<IEnumerable<Employee_Role>>();
                BaseRequest<string> baseReq = new BaseRequest<string>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],

                };
                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<IEnumerable<Employee_Role>>, BaseRequest<string>>
                (CommonConstant.EmployeeDetailsUrl, baseReq);
                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });
                return Content(result, "application/json");
            }

        }
        [HttpGet]
        public ContentResult EmployeeTicketsById(string employeeID)
        {
            {

                BaseResponse<int> baseResponse = new BaseResponse<int>();
                BaseRequest<string> baseReq = new BaseRequest<string>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                    Entity = employeeID
                };
                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<int>, BaseRequest<string>>
                (CommonConstant.EmployeeTicketsByIdUrl, baseReq);
                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });
                return Content(result, "application/json");
            }

        }
        [HttpGet]
        public ContentResult EmployeeLocationById(string employeeID)
        {
            {

                BaseResponse<IEnumerable<ATM_Master_model>> baseResponse = new BaseResponse<IEnumerable<ATM_Master_model>>();
                BaseRequest<string> baseReq = new BaseRequest<string>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                    Entity = employeeID
                };
                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<IEnumerable<ATM_Master_model>>, BaseRequest<string>>
                (CommonConstant.EmployeeLocationByIdUrl, baseReq);
                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });
                return Content(result, "application/json");
            }

        }
        /*[HttpGet]
        public ActionResult EmployeeLocationById(string employeeId)
        {
            try
            {
                var serviceUrl = "Api/Employee/GetEmployeeLocationById";

                //HttpClient client = new HttpClient();
                client.BaseAddress = new Uri(restClient.BaseUrl.ToString());
                // Add an Accept header for JSON format.    
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                // List all Names.    
                HttpResponseMessage response = client.GetAsync(serviceUrl + "/" + employeeId).Result;  // Blocking call!    
                if (response.IsSuccessStatusCode)
                {
                    var jsonString = response.Content.ReadAsStringAsync().Result;
                    //var jsonOb = JsonConvert.DeserializeObject(jsonString);
                    JavaScriptSerializer j = new JavaScriptSerializer();
                    object a = j.Deserialize(jsonString, typeof(object));
                    return Json(a, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
            return null;
        }*/
        /*[HttpGet]
        public ActionResult EmployeeTicketsById(string employeeId)
        {
            try
            {
                var serviceUrl = "Api/Employee/GetEmployeeTicketsById";

                //HttpClient client = new HttpClient();
                client.BaseAddress = new Uri(restClient.BaseUrl.ToString());
                // Add an Accept header for JSON format.    
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                // List all Names.    
                HttpResponseMessage response = client.GetAsync(serviceUrl + "/" + employeeId).Result;  // Blocking call!    
                if (response.IsSuccessStatusCode)
                {
                    var jsonString = response.Content.ReadAsStringAsync().Result;
                    //var jsonOb = JsonConvert.DeserializeObject(jsonString);
                    JavaScriptSerializer j = new JavaScriptSerializer();
                    object a = j.Deserialize(jsonString, typeof(object));
                    return Json(a, JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                return null;
            }
            return null;
        }*/
    }
}
