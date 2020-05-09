using CMS_DTO.Entity.RMS_Ticketing;
using CMSDTO.Models.Response;
using CMSRepository.Models;
using CMSWebApp.CustomFilters;
using CMSWebApp.Utility;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace CMSWebApp.Controllers
{
    //[CMSCallCenterExceptionHandler]

    public class BaseController : Controller
    {
        ///// <summary>
        ///// Will return template for AppComponent with routing & loading tag
        ///// </summary>
        ///// <returns></returns>
        //[AllowAnonymous]
        //public PartialViewResult AppComponent()
        //{
        //    return PartialView();
        //}

        ///// <summary>
        ///// Will return template for Spinner/loading when page navigates
        ///// </summary>
        ///// <returns></returns>
        //[AllowAnonymous]
        //public PartialViewResult Spinner()
        //{
        //    return PartialView();
        //}

        ///// <summary>
        ///// Will return template for Picklist
        ///// </summary>
        ///// <returns></returns>
        //[AllowAnonymous]
        //public PartialViewResult Picklist()
        //{
        //    return PartialView();
        //}

        ///// <summary>
        ///// Will return template for main UI layout with nested routing if any
        ///// </summary>
        ///// <returns></returns>
        //[AllowAnonymous]
        //public PartialViewResult MainLayout()
        //{


        //    return PartialView();
        //}

        ///// <summary>
        ///// Will return template for bredcrumbs of the page
        ///// </summary>
        ///// <returns></returns>
        //[AllowAnonymous]
        //public PartialViewResult BreadCrumbs()
        //{
        //    return PartialView();
        //}

        ///// <summary>
        ///// Will return template for the card/widget or inner content placeholder
        ///// </summary>
        ///// <returns></returns>
        //[AllowAnonymous]
        //public PartialViewResult Card()
        //{
        //    return PartialView();
        //}

        //[HttpPost]
        //public JsonResult GetCompany()
        //{
        //    BaseResponse<IEnumerable<CompanyMaster>> baseResponse = new BaseResponse<IEnumerable<CompanyMaster>>();
        //    baseResponse = CommonUtility.ConsumeAPIService<BaseResponse<IEnumerable<CompanyMaster>>, string>(CommonConstant.GetCompanyUrl, "");
        //    return Json(baseResponse, JsonRequestBehavior.AllowGet);
        //}

        [HttpPost]
        public JsonResult GetUserDetails()
        {
            BaseResponse<EmployeeDetails> baseResponse = new BaseResponse<EmployeeDetails> { Success = true };
            try
            {
                baseResponse.Entity = (EmployeeDetails)Session["EmployeeDetails"];
                if (baseResponse.Entity == null)
                {

                    baseResponse.Success = false;
                }
            }
            catch (Exception ex)
            {
                CommonUtility.LogException(ex, Request.Url.AbsoluteUri);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return Json(baseResponse);
        }

        [HttpPost]
        public JsonResult GetSessionUserDetails()
        {
            BaseResponse<EmployeeDetails> baseResponse = new BaseResponse<EmployeeDetails> { Success = true };
            try
            {
                baseResponse.Entity = (EmployeeDetails)Session["EmployeeDetails"];
            }
            catch (Exception ex)
            {
                CommonUtility.LogException(ex, Request.Url.AbsoluteUri);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return Json(baseResponse, JsonRequestBehavior.AllowGet);
        }


    }
}