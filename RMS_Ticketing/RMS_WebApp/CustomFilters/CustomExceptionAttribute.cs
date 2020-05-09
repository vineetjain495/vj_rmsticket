using CMSWebApp.Utility;
using System;
using System.Web.Mvc;
using System.Web.Routing;

namespace CMSWebApp.CustomFilters
{
    class CMSCallCenterExceptionHandler : HandleErrorAttribute
    {
        /// <summary>
        /// Exception Handling Attribute
        /// </summary>
        /// <param name="exceptionContext"><see cref="ExceptionContext"/></param>
        public override void OnException(System.Web.Mvc.ExceptionContext exceptionContext)
        {
            if (CommonUtility.LogException(exceptionContext.Exception, exceptionContext.HttpContext.Request.RawUrl))
            {
                exceptionContext.Result = new RedirectToRouteResult(new RouteValueDictionary(new { controller = "Exception", action = "Index" }));
            }
            exceptionContext.ExceptionHandled = true;
            base.OnException(exceptionContext);
        }

        private void Log(Exception exception)
        {
            //log exception here..

        }
    }
}