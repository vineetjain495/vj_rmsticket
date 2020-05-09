//using CMSRepository.Models;
//using CMSRepository.Models.Response;
//using CMSWebApp.App_Start;
//using CMSWebApp.CustomFilters;
using System;
using System.Web.Mvc;

namespace CMSWebApp.Controllers
{
    //[CMSCallCenterExceptionHandler]
    //[CMSToken]
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index(bool renderPartial = false)
        {
            if (renderPartial)
            {
                string userName = string.Empty;

                //if (System.Web.HttpContext.Current != null && System.Web.HttpContext.Current.User.Identity.IsAuthenticated)
                {
                    try
                    {
                        //UserPrincipalExtended user = UserPrincipalExtended.FindByIdentity(new PrincipalContext(ContextType.Domain), User.Identity.Name);
                        ////MembershipUser usr = Membership.GetUser(System.Web.HttpContext.Current.User.Identity.Name);
                        //if (user != null)
                        //{
                        //    serviceUser.FirstName = user.DisplayName;
                        //    serviceUser.EmployeeId = user.PostOfficeBox;
                        //    //var a = user.Description;
                        //    //userName = user.PostOfficeBox; //user.POBox;
                        //}
                    }
                    catch (Exception ex)
                    {
                        throw ex;
                    }
                }
                return PartialView();
            }
            else
            {
                return View("~/Views/Shared/_appPlaceHolder.cshtml");
            }
        }

    }
}