using System;
using System.Net.Http;
using CMS_DTO.Models.Logins;
using System.Web.Mvc;
//using Newtonsoft.Json;
using RestSharp;
using System.Configuration;
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
using System.Web.Script.Serialization;
using System.Net.Http.Headers;
//using CMS

namespace WebApp.Controllers
{
    public class EmployeeController : Controller
    {

        [HttpPost]
        public ActionResult NewEmployee(Employee_Role employee_Role)
        {

            try
            {
               
                var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());

                var serviceUrl = "Api/Login/PostNewEmployee";
                /* var request = new RestRequest(Method.POST) { Resource = serviceUrl, RequestFormat = DataFormat.Json };
                 //request.AddJsonBody(requestInput);  
                 UserMaster customers = JsonConvert.DeserializeObject<UserMaster>(restClient.Post(request).Content);
                 return View(customers);*/
                HttpClient client = new HttpClient();
                client.BaseAddress = new Uri("http://localhost:59390/");
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
        }
        [HttpPut]
        public ActionResult UpdateEmployeeDetails(Employee_Role employee_Role)
        {

            try
            {

                var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());

                var serviceUrl = "Api/Login/UpdateEmployeeDetails";
                /* var request = new RestRequest(Method.POST) { Resource = serviceUrl, RequestFormat = DataFormat.Json };
                 //request.AddJsonBody(requestInput);  
                 UserMaster customers = JsonConvert.DeserializeObject<UserMaster>(restClient.Post(request).Content);
                 return View(customers);*/
                HttpClient client = new HttpClient();
                client.BaseAddress = new Uri("http://localhost:59390/");
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
        }
        [HttpGet]
        public JsonResult  Employeelimited()
        {
            try
            {

                var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());

                var serviceUrl = "Api/Login/AllEmployeelimited";
                /* var request = new RestRequest(Method.POST) { Resource = serviceUrl, RequestFormat = DataFormat.Json };
                 //request.AddJsonBody(requestInput);  
                 UserMaster customers = JsonConvert.DeserializeObject<UserMaster>(restClient.Post(request).Content);
                 return View(customers);*/
                HttpClient client = new HttpClient();
                client.BaseAddress = new Uri("http://localhost:59390/");
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
        }
        
        [HttpGet]
        public ActionResult EmployeeDetailsById(string employeeId)
        {
            try
            {

                var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());

                var serviceUrl = "Api/Login/GetEmployeeDetailsById";
                /* var request = new RestRequest(Method.POST) { Resource = serviceUrl, RequestFormat = DataFormat.Json };
                 //request.AddJsonBody(requestInput);  
                 UserMaster customers = JsonConvert.DeserializeObject<UserMaster>(restClient.Post(request).Content);
                 return View(customers);*/
                HttpClient client = new HttpClient();
                client.BaseAddress = new Uri("http://localhost:59390/");
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
        }
    }
}
