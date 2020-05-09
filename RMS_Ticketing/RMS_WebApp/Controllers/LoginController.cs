//using CMSDTO.Entity;
//using CMSDTO.Models.Request;
//using CMSDTO.Models.Response;
//using CMSRepository.Models;
using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMSDTO.Entity;
using CMSDTO.Models.Request;
using CMSDTO.Models.Response;
using CMSRepository.Models;
using CMSWebApp.App_Start;
using CMSWebApp.Utility;
using LoginWebAPI.Models;
//using LoginWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApp.Controllers
{
    public class LoginController : Controller
    {


        public ActionResult Index(bool renderPartial = false)
        {
            if (renderPartial)
            {
                return PartialView();
            }
            else
            {
                Session["CompanyID"] = null;
                Session["EmployeeDetails"] = null;
                Session.Clear();
                Session.Abandon();
                return View("~/Views/Shared/_appPlaceHolder.cshtml", null);
            }
        }

        [HttpPost]
        public JsonResult Login(BaseRequest<Credential> baseRequest)
        {
            BaseResponse<Employee_Role_Model> baseResponse = new BaseResponse<Employee_Role_Model>();
            BaseResponse<EmployeeDetails> baseResponseEmpDetails = new BaseResponse<EmployeeDetails>();
            //baseRequest.Entity.Password = CommonUtility.Encrypt(baseRequest.Entity.Password);
            baseRequest.Entity.Password = baseRequest.Entity.Password;
            baseResponse = CommonUtility.ConsumeAPIServiceRestClient<BaseResponse<Employee_Role_Model>, Credential>(CommonConstant.GetLoginUrl, baseRequest.Entity);

            if (baseResponse.Success)
            {
                string userToken = string.Empty;
                //string userKey = Security.Encrypt(string.Format("{0}:{1}", baseRequest.Entity.UserID, baseRequest.CompanyID));
                baseResponseEmpDetails.UserToken = baseResponse.UserToken;

                EmployeeDetails employeeDetails = new EmployeeDetails
                {
                    ID = baseResponse.Entity.ID,
                    EmpCode = baseResponse.Entity.EmpCode,
                    EmpFullName = baseResponse.Entity.EmployeeName,
                    UserType = baseResponse.Entity.UserRole,
                    AssignedRoleID = baseResponse.Entity.RoleCode,
                    AssignedRightsID = baseResponse.Entity.RightsCode,
                };

                Session["EmployeeDetails"] = employeeDetails;
                
                baseResponseEmpDetails.Entity = employeeDetails;
            }

            baseResponseEmpDetails.Success = baseResponse.Success;
            baseResponseEmpDetails.Message = baseResponse.Message;

            return Json(baseResponseEmpDetails, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ForgotPassword()
        {
            return View("~/Views/Shared/_appPlaceHolder.cshtml");
        }

        //[HttpPost]
        //public ActionResult ForgotPassword(ForgotPassword forgotPassword)
        //{

        //    var baseResponse = CommonUtility.ConsumeAPIService<BaseResponse, ForgotPassword>(
        //            CommonConstant.ForgotPasswordUrl, forgotPassword);
        //    return Json(baseResponse);
        //}
    }
}