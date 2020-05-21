using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMSWebApp.Utility
{
    public class CommonConstant
    {
        public const string ExceptionAddUrl = "/api/Exception/Add";
        public const string AddOrEditRoleMasterUrl = "/api/RoleMaster/AddOrEditRoleMaster";
        public const string GetAllRoleMasterUrl = "/api/RoleMaster/GetAllRoleMaster";
        public const string DeleteRoleMasterUrl = "/api/RoleMaster/DeleteRoleMaster";
        
        public const string GetLoginUrl = "/api/Login/Login";
        public const string GetCompanyUrl = "/api/Company/GetAllCompanyMaster";
        public const string GetTransactionUrl = "/api/DSTransaction/GetTransaction";

       
        public const string ResetPasswordUrl = "/api/Area/ResetPassword";
        public const string ForgotPasswordUrl = "/api/Login/ForgotPassword";
        //public const string DeleteEmployeeUrl = "/api/Area/DeleteEmployee";

        public const string GetCBRActivityImagesUrl = "/api/CBRTransactions/GetCBRActivityImages";

        public const string DownloadFileUrl = "/api/Blob/Download";
        public const string CheckEmployeeExist = "/api/Area/CheckEmployeeExist";

        #region
        public const string GetTicketDetailsUrl = "/api/TicketViewer/GetTicketDetails";
        public const string GetTicketcommentsUrl = "/api/TicketViewer/GetTicketComments";
        public const string GetTicketDetailsViewUrl = "/api/TicketViewer/GetTicketDetailsView";
        public const string GetQueryandCategoryTypeUrl = "/api/TicketViewer/GetQueryandCategoryType";
        public const string GetMasterUrl = "/api/TicketViewer/GetMasterData";
        //public const string CreateTicketsUrl = "/api/Connector/CreateTicket";
        public const string CreateTicketsUrl = "/api/Connector/CreateTicketWeb";
        public const string GetErrorCodeTypeUrl = "/api/TicketViewer/GetErrorCodeandTypes";
        public const string GetJustificationUrl = "/api/TicketViewer/GetJustification";
        public const string UpdateTicketsUrl = "/api/TicketViewer/UpdateTicket";
        public const string GetTicketForExportUrl = "/api/TicketViewer/ExportTickets";
        public const string UpdateTicketsLocationUrl = "/api/TicketViewer/UpdateTicketLocation";
        public const string LocationFileUrl = "/api/TicketViewer/FileLocationInsert";
        public const string HoandOthersFileUrl = "/api/TicketViewer/FileHoAndOthersInsert";
        public const string UpdateTicketcommentsUrl = "/api/TicketViewer/CommentUpdate";
        public const string UpdateRuleEngineStatusUrl = "/api/TicketViewer/UpdateRuleEngineStatus";

        #endregion

        #region
        public const string GetRuleEngineUrl = "/v1/callRuleEngine";
        #endregion

        public const string GetEmployeeLimitedUrl = "api/EmployeeMaster/AllEmployeelimited";
        public const string CreateEmployeeUrl = "api/EmployeeMaster/CreateEmployee";
        public const string CheckEmployeeUrl = "api/EmployeeMaster/CheckEmployee";
        public const string UpdateEmployeeUrl = "api/EmployeeMaster/UpdateEmployeeDetails";
    }
}