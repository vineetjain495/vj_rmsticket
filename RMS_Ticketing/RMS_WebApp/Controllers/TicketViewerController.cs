using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMSDTO.Models.Request;
using CMSDTO.Models.Response;
using CMSRepository.Models;
using CMSWebApp.Utility;
using Ionic.Zip;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using System.Web.Mvc;
using System.Runtime.InteropServices.ComTypes;
using iTextSharp.text.pdf;
using iTextSharp.text.pdf.parser;
using Excel = Microsoft.Office.Interop.Excel;
using System.Runtime.InteropServices;
using System.Net;
using WebApp.Utility;
using System.Text;
using System.Data;

namespace WebApp.Controllers
{
    public class TicketViewerController : Controller
    {
        // GET: TicketViewer
        public ActionResult Index()
        {
            return View("~/Views/Shared/_appPlaceHolder.cshtml", null);
        }

        //GET:TicketViewer/CreateTicket
        public ActionResult CreateTicket()
        {
            return View("~/Views/Shared/_appPlaceHolder.cshtml", null);
        }

        //GET:TicketViewer/TicketSummary
        public ActionResult TicketSummary()
        {
            return View("~/Views/Shared/_appPlaceHolder.cshtml", null);
        }

        [HttpPost]
        public ContentResult GetTicketDetails(JqxGridPaginationModel pagingRequestModel)
        {
            {
                BaseResponse<TableListWithPagingInfo<TicketViewer>> baseResponse = new BaseResponse<TableListWithPagingInfo<TicketViewer>>();

                BaseRequest<JqxGridPaginationModel> baseReq = new BaseRequest<JqxGridPaginationModel>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                    Entity = pagingRequestModel
                };

                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<TableListWithPagingInfo<TicketViewer>>, BaseRequest<JqxGridPaginationModel>>
                (CommonConstant.GetTicketDetailsUrl, baseReq);

                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });


                return Content(result, "application/json"); 


            }

        }

        [HttpGet]
        public ContentResult GetTicketComments(string Value)
        {
            {
                BaseResponse<TableListWithPagingInfo<TicketsLogView>> baseResponse = new BaseResponse<TableListWithPagingInfo<TicketsLogView>>();

                BaseRequest<TicketsLogView> baseReq = new BaseRequest<TicketsLogView>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                    Entity = new TicketsLogView { TicketID = Value }
                };

                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<TableListWithPagingInfo<TicketsLogView>>, BaseRequest<TicketsLogView>>
                (CommonConstant.GetTicketcommentsUrl, baseReq);

                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });


                return Content(result, "application/json");


            }

        }

        //[HttpGet]
        //public ContentResult GetTicketComments(string Value)
        //{
        //    {
        //        BaseResponse<TableListWithPagingInfo<TicketsLogView>> baseResponse = new BaseResponse<TableListWithPagingInfo<TicketsLogView>>();

        //        BaseRequest<TicketsLogView> baseReq = new BaseRequest<TicketsLogView>
        //        {

        //            LoginEmployeeDetails = null/*(EmployeeDetails)Session["EmployeeDetails"]*/,
        //            CompanyID = 2/*(int)Session["CompanyID"]*/,
        //            Entity = new TicketsLogView {TicketID= Value }
        //        };

        //        baseResponse = CommonUtility.
        //        ConsumeAPIService<BaseResponse<TableListWithPagingInfo<TicketsLogView>>, BaseRequest<TicketsLogView>>
        //        (CommonConstant.GetTicketcommentsUrl, baseReq);

        //        var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
        //                        new JsonSerializerSettings
        //                        {
        //                            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
        //                        });


        //        return Content(result, "application/json");


        //    }

        //}

        [HttpGet]
        public ContentResult GetTicketDetailsView(string Value)
        {
            {
                BaseResponse<Ticket_ATM_View> baseResponse = new BaseResponse<Ticket_ATM_View>();

                BaseRequest<Ticket> baseReq = new BaseRequest<Ticket>
                {

                    LoginEmployeeDetails =(EmployeeDetails)Session["EmployeeDetails"],
                    Entity = new Ticket { TicketID = Value }
                };

                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<Ticket_ATM_View>, BaseRequest<Ticket>>
                (CommonConstant.GetTicketDetailsViewUrl, baseReq);

                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });


                return Content(result, "application/json");


            }

        }

        [HttpGet]
        public ContentResult GetQueryandCategoryType()
        {
            {
                BaseResponse<QueryandCategoryType> baseResponse = new BaseResponse<QueryandCategoryType>();

                BaseRequest baseReq = new BaseRequest
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                };

                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<QueryandCategoryType>, BaseRequest>
                (CommonConstant.GetQueryandCategoryTypeUrl, baseReq);

                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });


                return Content(result, "application/json");


            }

        }

        [HttpPost]
        public ContentResult GetJustification(TicketDTO requestModel)
        {
            {
                BaseResponse<QueryandCategoryType> baseResponse = new BaseResponse<QueryandCategoryType>();

                BaseRequest<TicketDTO> baseReq = new BaseRequest<TicketDTO>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                    Entity = requestModel,
                };

                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<QueryandCategoryType>, BaseRequest<TicketDTO>>
                (CommonConstant.GetJustificationUrl, baseReq);

                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });


                return Content(result, "application/json");


            }

        }

        [HttpPost]
        public ContentResult GetErrorCodeandTypes(QueryandCategoryType request)
        {
            {
                BaseResponse<QueryandCategoryType> baseResponse = new BaseResponse<QueryandCategoryType>();

                BaseRequest<QueryandCategoryType> baseReq = new BaseRequest<QueryandCategoryType>
                {
                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                    Entity=request
                };

                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<QueryandCategoryType>, BaseRequest<QueryandCategoryType>>
                (CommonConstant.GetErrorCodeTypeUrl, baseReq);

                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });


                return Content(result, "application/json");


            }

        }

        [HttpPost]
        public ContentResult GetMasterData(QueryandCategoryType Value)
        {
            {
                BaseResponse<QueryandCategoryType> baseResponse = new BaseResponse<QueryandCategoryType>();

                BaseRequest<QueryandCategoryType> baseReq = new BaseRequest<QueryandCategoryType>
                {

                    LoginEmployeeDetails =(EmployeeDetails)Session["EmployeeDetails"],
                    Entity = new QueryandCategoryType {AtmID= Value.AtmID,IncidentDate=Convert.ToDateTime(Value.IncidentDate).ToString("yyyy-MM-dd") },
                };

                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse<QueryandCategoryType>, BaseRequest<QueryandCategoryType>>
                (CommonConstant.GetMasterUrl, baseReq);

                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });


                return Content(result, "application/json");


            }

        }

        [HttpPost]
        public ContentResult CreateTicket(CreateTicketView requestModel)
        {
            {

                BaseResponse baseResponse = new BaseResponse();
                BaseRequest baseRequest = new BaseRequest() { LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"], };
                TicketDTO ticket = new TicketDTO();
                List<TicketDTO> ticketList = new List<TicketDTO>();

                if (requestModel.upload != null && requestModel.upload.ContentLength > 0)
                {
                  //  ticket.EJFilePath = CommonUtility.FileUpload(requestModel.upload, requestModel.MSP,true).Replace("\\\\", @"\").Replace(@"\sharedfilescms.file.core.windows.net\filesharecmstest", "Z:").Replace(@"\172.19.100.157\Volume6\NFSRMSUAT", "Z:");


                }

                ticket.QueryType = requestModel.QueryType;
                ticket.QueryCategory = requestModel.QueryCategory;
                ticket.IncidentDate = Convert.ToDateTime(requestModel.IncidentDate.Replace(" GMT+0530 (India Standard Time)", ""));
                ticket.DisputedAmount =float.Parse(requestModel.DisputedAmount);
                ticket.ATMID = requestModel.ATMID;
                ticket.Bank = requestModel.Bank;
                ticket.Account = requestModel.Account;
                ticket.Location = requestModel.Location;
                ticket.TransactionNo = requestModel.TransactionNo == "null" ? null: requestModel.TransactionNo;
                ticket.TransactionAmount = requestModel.TransactionAmount =="null" ? (float?)0 : float.Parse(requestModel.TransactionAmount);
                ticket.TransactonTime = DateTime.UtcNow.ToLocalTime();
                ticket.CardNo = requestModel.CardNo=="null"?null: requestModel.CardNo;
                ticket.ReferenceNo = requestModel.ReferenceNo;
                ticket.AccountNo = requestModel.AccountNo;
                ticket.DisputeComments = requestModel.DisputeComments;
                ticket.CustComments = requestModel.DisputeComments;
                ticket.FromDate = (string.IsNullOrEmpty(requestModel.FromDate) && requestModel.FromDate=="null") ? Convert.ToDateTime(requestModel.FromDate.Replace(" GMT+0530 (India Standard Time)", "")) : (DateTime?)null;
                ticket.ToDate = (string.IsNullOrEmpty(requestModel.ToDate) && requestModel.ToDate == "null") ? Convert.ToDateTime(requestModel.ToDate.Replace(" GMT+0530 (India Standard Time)", "")) : (DateTime?)null;
                ticket.Source = "Web";
                ticket.Status = "MANUAL";
                ticket.CreatedBy = baseRequest.LoginEmployeeDetails.EmpCode;
                ticket.CreatedDate = DateTime.Now;
                ticket.CustCommentsBy = baseRequest.LoginEmployeeDetails.EmpCode;
                ticket.CustCommentsType = baseRequest.LoginEmployeeDetails.UserType;
                ticketList.Add(ticket);



                CreateTicketDTO baseReq = new CreateTicketDTO
                {      Date = Convert.ToDateTime(requestModel.EmailDate.Replace(" GMT+0530 (India Standard Time)", "")), TicketsData = ticketList ,MSP=requestModel.Account,
                       
                };

                baseResponse = CommonUtility.
                ConsumeAPIServiceRestClientCreateTicket<BaseResponse, CreateTicketDTO>
                (CommonConstant.CreateTicketsUrl, baseReq);


                //if (baseResponse.Success)
                //{
                //    BaseResponse<Ticket_ATM_View> ticket_ATM_View = new BaseResponse<Ticket_ATM_View>();

                //    BaseRequest<Ticket> baseTicketRequest = new BaseRequest<Ticket>
                //    {

                //        LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                //        Entity = new Ticket { TicketID = baseResponse.Message }
                //    };

                //    ticket_ATM_View = CommonUtility.
                //    ConsumeAPIService<BaseResponse<Ticket_ATM_View>, BaseRequest<Ticket>>
                //    (CommonConstant.GetTicketDetailsViewUrl, baseTicketRequest);

                //    List<RunRuleEngineTicket> engineTicketsList = new List<RunRuleEngineTicket>();

                //    RunRuleEngineTicket engineTicket = new RunRuleEngineTicket()
                //    {
                //        TicketId = ticket_ATM_View.Entity.TicketID,
                //        Txn_No = Convert.ToInt32(ticket_ATM_View.Entity.TransactionNo),
                //        ATMID = ticket_ATM_View.Entity.ATMID,
                //        Disputed_Amount = Convert.ToInt32(ticket_ATM_View.Entity.DisputedAmount.Replace(",", "")),
                //        Date = ticket_ATM_View.Entity.IncidentDate + " " + (string.IsNullOrEmpty(ticket_ATM_View.Entity.TransactionTime) ? "00:00" : ticket_ATM_View.Entity.TransactionTime) + ":00",
                //        Ej_File = ticket_ATM_View.Entity.FileUplodedList.Where(w => w.TypeofAttatchent == "EJ").Select(s => s.FilePath.Replace(@"\","/").Replace("Z:", "/nfsmount")).FirstOrDefault()
                //    };

                //    engineTicketsList.Add(engineTicket);

                //    RunRuleEngineModel engineModel = new RunRuleEngineModel()
                //    {
                //        BatchId = ticket_ATM_View.Entity.BatchID,
                //        MSP = ticket_ATM_View.Entity.MSP,
                //        MSP_Domain = ConfigurationManager.AppSettings["DomainNameMSP"].ToString(),
                //        TicketData = engineTicketsList
                //    };


                //    BaseRequest<RunRuleEngineModel> baseRuleEnguneTicketRequest = new BaseRequest<RunRuleEngineModel>
                //    {

                //        LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                //        Entity = engineModel
                //    };

                //    var a = CallingRuleEngine(baseRuleEnguneTicketRequest);

                //}



                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });


                return Content(result, "application/json");



            }

        }
            
        [HttpPost]
        public ContentResult UpdateTicket(UpdateTicketModel requestModel)
        {
            {
                try
                {
                    BaseResponse baseResponse = new BaseResponse();
                    UpdateTicketModel ticket = new UpdateTicketModel();

                    string[] seperator = { " -- " };

                    string[] error;

                    ticket.ATMID = (requestModel.ATMID != "undefined" && requestModel.ATMID != null && requestModel.ATMID != "null") ? requestModel.ATMID : null;
                    ticket.MSP = (requestModel.MSP != "undefined" && requestModel.MSP != null && requestModel.MSP != "null") ? requestModel.MSP : null;
                    ticket.Bank = (requestModel.Bank != "undefined" && requestModel.Bank != null && requestModel.Bank != "null") ? requestModel.Bank : null;
                    //ticket.Action = (requestModel.Action != "undefined" || requestModel.Action != null || requestModel.Action != "null") ? requestModel.Action : null;
                    ticket.AssignedTargetAmount = (requestModel.AssignedTargetAmount != "undefined" && requestModel.AssignedTargetAmount != null && requestModel.AssignedTargetAmount != "null") ? requestModel.AssignedTargetAmount : null;
                    ticket.CardNo = (requestModel.CardNo != "undefined" && requestModel.CardNo != null && requestModel.CardNo != "null") ? requestModel.CardNo : null;
                    ticket.CMSStatus = (requestModel.CMSStatus != "undefined" && requestModel.CMSStatus != null && requestModel.CMSStatus != "null") ? requestModel.CMSStatus : null;
                    //ticket.CustComments = (requestModel.ATMID != "undefined" && requestModel.ATMID != null && requestModel.ATMID != "null") ? requestModel.ATMID : null;
                    ticket.CustomerActions = (requestModel.CustomerActions != "undefined" && requestModel.CustomerActions != null && requestModel.CustomerActions != "null") ? requestModel.CustomerActions : null;
                    ticket.DelayDepositIssue = (requestModel.DelayDepositIssue != "undefined" && requestModel.DelayDepositIssue != null && requestModel.DelayDepositIssue != "null") ? requestModel.DelayDepositIssue : null;
                    ticket.DepositAmount = (requestModel.DepositAmount != "undefined" && requestModel.DepositAmount != null && requestModel.DepositAmount != "null") ? requestModel.DepositAmount : null;
                    ticket.DisputeTargetAmount = (requestModel.DisputeTargetAmount != "undefined" && requestModel.DisputeTargetAmount != null && requestModel.DisputeTargetAmount != "null") ? requestModel.DisputeTargetAmount : null;
                    ticket.ErrorBucket = (requestModel.ErrorBucket != "undefined" && requestModel.ErrorBucket != null && requestModel.ErrorBucket != "null") ? requestModel.ErrorBucket : null;
                    error = (requestModel.ErrorCode != "undefined" && requestModel.ErrorCode != null && requestModel.ErrorCode != "null") ? requestModel.ErrorCode.Split(seperator, StringSplitOptions.RemoveEmptyEntries) : null;
                    ticket.ErrorCode = error.Count() >= 1 ? error[0] : null;
                    ticket.ErrorRemarks = error.Count() > 1 ? error[1] : null;
                    ticket.ErrorType = (requestModel.ErrorType != "undefined" && requestModel.ErrorType != null && requestModel.ErrorType != "null") ? requestModel.ErrorType : null;
                    ticket.FirstCustodianCode = (requestModel.FirstCustodianCode != "undefined" && requestModel.FirstCustodianCode != null && requestModel.FirstCustodianCode != "null") ? requestModel.FirstCustodianCode : null;
                    ticket.FirstCustodianName = (requestModel.FirstCustodianName != "undefined" && requestModel.FirstCustodianName != null && requestModel.FirstCustodianName != "null") ? requestModel.FirstCustodianName : null;
                    ticket.FromDate = (requestModel.FromDate != "undefined" && requestModel.FromDate != null && requestModel.FromDate != "null") ? requestModel.FromDate : null;
                    ticket.HOApprovedRecoveryAmount = (requestModel.HOApprovedRecoveryAmount != "undefined" && requestModel.HOApprovedRecoveryAmount != null && requestModel.HOApprovedRecoveryAmount != "null") ? requestModel.HOApprovedRecoveryAmount : null;
                    //ticket.HOComments= (requestModel.ATMID != "undefined" && requestModel.ATMID != null && requestModel.ATMID != "null") ? requestModel.ATMID : null;
                    ticket.HORejectionJustification = (requestModel.HORejectionJustification != "undefined" && requestModel.HORejectionJustification != null && requestModel.HORejectionJustification != "null") ? requestModel.HORejectionJustification : null;
                    ticket.PendingAmount = (requestModel.PendingAmount != "undefined" && requestModel.PendingAmount != null && requestModel.PendingAmount != "null") ? requestModel.PendingAmount : null;
                    ticket.QueryType = (requestModel.QueryType != "undefined" && requestModel.QueryType != null && requestModel.QueryType != "null") ? requestModel.QueryType : null;
                    ticket.QueryCategory = (requestModel.QueryCategory != "undefined" && requestModel.QueryCategory != null && requestModel.QueryCategory != "null") ? requestModel.QueryCategory : null;
                    //ticket.ReassignReason= (requestModel.ATMID != "undefined" && requestModel.ATMID != null && requestModel.ATMID != "null") ? requestModel.ATMID : null;
                    ticket.RecoveredAmount = (requestModel.RecoveredAmount != "undefined" && requestModel.RecoveredAmount != null && requestModel.RecoveredAmount != "null") ? requestModel.RecoveredAmount : null;
                    ticket.SecondCustodianCode = (requestModel.SecondCustodianCode != "undefined" && requestModel.SecondCustodianCode != null && requestModel.SecondCustodianCode != "null") ? requestModel.SecondCustodianCode : null;
                    ticket.SecondCustodianName = (requestModel.SecondCustodianName != "undefined" && requestModel.SecondCustodianName != null && requestModel.SecondCustodianName != "null") ? requestModel.SecondCustodianName : null;
                    ticket.TargetAmount = (requestModel.TargetAmount != "undefined" && requestModel.TargetAmount != null && requestModel.TargetAmount != "null") ? requestModel.TargetAmount : null;
                    //ticket.TerritoryComments= (requestModel.ATMID != "undefined" && requestModel.ATMID != null && requestModel.ATMID != "null") ? requestModel.ATMID : null;
                    ticket.TerritoryDepositDate = (requestModel.TerritoryDepositDate != "undefined" && requestModel.TerritoryDepositDate != null && requestModel.TerritoryDepositDate != "null") ? requestModel.TerritoryDepositDate : null;
                    ticket.TerritoryRejectionJustification = (requestModel.TerritoryRejectionJustification != "undefined" && requestModel.TerritoryRejectionJustification != null && requestModel.TerritoryRejectionJustification != "null") ? requestModel.TerritoryRejectionJustification : null;
                    ticket.TicketId = (requestModel.TicketId != "undefined" && requestModel.TicketId != null && requestModel.TicketId != "null") ? requestModel.TicketId : null;
                    ticket.BatchID = (requestModel.BatchID != "undefined" && requestModel.BatchID != null && requestModel.BatchID != "null") ? requestModel.BatchID : null;
                    ticket.ToBeRecoveredAmount = (requestModel.ToBeRecoveredAmount != "undefined" && requestModel.ToBeRecoveredAmount != null && requestModel.ToBeRecoveredAmount != "null") ? requestModel.ToBeRecoveredAmount : null;
                    ticket.ToDate = (requestModel.ToDate != "undefined" && requestModel.ToDate != null && requestModel.ToDate != "null") ? requestModel.ToDate : null;
                    ticket.WoOrder = (requestModel.WoOrder != "undefined" && requestModel.WoOrder != null && requestModel.WoOrder != "null") ? requestModel.WoOrder : null;
                    ticket.CMSRemarks = (requestModel.CMSRemarks != "undefined" && requestModel.CMSRemarks != null && requestModel.CMSRemarks != "null") ? requestModel.CMSRemarks : null;



                    BaseRequest<UpdateTicketModel> baseRequest = new BaseRequest<UpdateTicketModel>()
                    {
                        LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                        Entity = ticket,
                    };

                    var Admin_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 1);
                    var MSP_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 2);
                    var HO_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 3);
                    var Location_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 4);


                    if (Location_User)
                    {
                        ticket.TerritoryRejectionJustification = (requestModel.TerritoryRejectionJustification != "undefined" && requestModel.TerritoryRejectionJustification != null && requestModel.TerritoryRejectionJustification != "null") ? requestModel.TerritoryRejectionJustification : null;
                        ticket.DepositDate = (requestModel.DepositDate != "undefined" && requestModel.DepositDate != null && requestModel.DepositDate != "null") ? requestModel.DepositDate.Replace(" GMT+0530 (India Standard Time)", "") : null;
                        ticket.DepositAmount = (requestModel.DepositAmount != "undefined" && requestModel.DepositAmount != null && requestModel.DepositAmount != "null") ? requestModel.DepositAmount : null;
                    }
                    else if (Admin_User || HO_User)
                    {

                        ticket.OverageDate = (requestModel.OverageDate != "undefined" && requestModel.OverageDate != null && requestModel.OverageDate != "null") ? requestModel.OverageDate.Replace(" GMT+0530 (India Standard Time)", "") : null;
                        ticket.OverageAmount = (requestModel.OverageAmount != "undefined" && requestModel.OverageAmount != null && requestModel.OverageAmount != "null") ? requestModel.OverageAmount : null;

                    }



                    if (Admin_User || MSP_User || HO_User)
                    {
                        baseResponse = CommonUtility.
                                                    ConsumeAPIService<BaseResponse, BaseRequest<UpdateTicketModel>>
                                                    (CommonConstant.UpdateTicketsUrl, baseRequest);
                    }
                    else if (Location_User)
                    {
                        baseResponse = CommonUtility.
                                                       ConsumeAPIService<BaseResponse, BaseRequest<UpdateTicketModel>>
                                                       (CommonConstant.UpdateTicketsLocationUrl, baseRequest);
                    }





                    var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                    new JsonSerializerSettings
                                    {
                                        ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                    });


                    return Content(result, "application/json");
                }
                catch (Exception ex)
                {
                    var result = JsonConvert.SerializeObject(new { Success = false, Message = ex.Message }, Formatting.None,
                                    new JsonSerializerSettings
                                    {
                                        ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                    });

                    return Content(result, "application/json"); 
                }
            }

        }

        [HttpPost]
        public ActionResult ShowFiles(FileUploaded requestModel)
        {
                string text = string.Empty;
                string myNetworkPath = string.Empty;

            //uncomment for LocalDrive TESTING
            myNetworkPath = requestModel.FilePath;

            //uncomment for uat     
            //myNetworkPath = @"\\172.19.100.157\Volume6\NFSRMSUAT" + requestModel.FilePath.Replace("C:", "").Replace("Z:", "").Replace("/", @"\");

            //uncomment for PRODUCTIONS     
            //myNetworkPath = @"\\sharedfilescms.file.core.windows.net\filesharecmstest" + requestModel.FilePath.Replace("C:", "").Replace("Z:", "").Replace("/", @"\");



            if (System.IO.File.Exists(myNetworkPath))
            {
                switch (requestModel.FilePath.Substring(requestModel.FilePath.LastIndexOf('.') + 1).ToLower())
                       {
                    case "txt":
                        return Content(System.IO.File.ReadAllText(myNetworkPath), "text/css");
                    case "html":
                        return Content(System.IO.File.ReadAllText(myNetworkPath), "text/html");
                    case "xlsx":
                        return File(myNetworkPath, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", requestModel.FileName);
                    case "xls":
                        return File(myNetworkPath, "application/vnd.ms-excel", requestModel.FileName);
                    case "csv":
                        return File(myNetworkPath, "text/csv", requestModel.FileName);
                    //Excel.Application xlApp = new Excel.Application();
                    //Excel.Workbook xlWorkbook = xlApp.Workbooks.Open(myNetworkPath);
                    //Excel._Worksheet xlWorksheet = xlWorkbook.Sheets[1];
                    //Excel.Range xlRange = xlWorksheet.UsedRange;

                    //int rowCount = xlRange.Rows.Count;
                    //int colCount = xlRange.Columns.Count;


                    //for (int i = 1; i <= rowCount; i++)
                    //{
                    //    for (int j = 1; j <= colCount; j++)
                    //    {
                    //        //new line
                    //        if (j == 1)
                    //            text += Environment.NewLine;

                    //        if (xlRange.Cells[i, j] != null && xlRange.Cells[i, j].Value2 != null)

                    //            text += xlRange.Cells[i, j].Value2.ToString() + "\t";


                    //    }
                    //}

                    //GC.Collect();
                    //GC.WaitForPendingFinalizers();

                    //Marshal.ReleaseComObject(xlRange);
                    //Marshal.ReleaseComObject(xlWorksheet);

                    //xlWorkbook.Close();
                    //Marshal.ReleaseComObject(xlWorkbook);


                    //xlApp.Quit();
                    //Marshal.ReleaseComObject(xlApp);

                    //return Content(text, "text/css");
                    case "docx":
                        return File(myNetworkPath, "application/vnd.openxmlformats-officedocument.wordprocessingml.document", requestModel.FileName);
                    case "doc":
                        return File(myNetworkPath, "application/msword", requestModel.FileName);
                    //Microsoft.Office.Interop.Word.Application word = new Microsoft.Office.Interop.Word.Application();
                    //object miss = System.Reflection.Missing.Value;
                    //object readOnly = true;
                    //object wordPath = myNetworkPath;
                    //Microsoft.Office.Interop.Word.Document docs = word.Documents.Open(
                    //    ref wordPath,
                    //    ref miss,
                    //    ref readOnly,
                    //    ref miss, ref miss, ref miss,
                    //    ref miss, ref miss, ref miss,
                    //    ref miss, ref miss, ref miss,
                    //    ref miss, ref miss, ref miss, ref miss);
                    //for (int i = 0; i < docs.Paragraphs.Count; i++)
                    //{
                    //    text += " \r\n " + docs.Paragraphs[i + 1].Range.Text.ToString();
                    //}

                    //return Content(text, "text/css");
                    case "pdf":
                        return File(myNetworkPath, "application/pdf", requestModel.FileName);
                    //PdfReader reader = new PdfReader(requestModel.FilePath);
                    //for (int page = 1; page <= reader.NumberOfPages; page++)
                    //{
                    //    text += PdfTextExtractor.GetTextFromPage(reader, page);
                    //}
                    //reader.Close();

                    //return Content(text, "text/css");
                    case "jpe":
                    case "jpeg":
                    case "jpg":
                        return File(myNetworkPath, "image/jpeg", requestModel.FileName);
                    case "png":
                        return File(myNetworkPath, "image/png", requestModel.FileName);
                    case "zip":
                        return File(myNetworkPath, "application/zip", requestModel.FileName);
                    case "7z":
                        return File(myNetworkPath, "application/x-7z-compressed", requestModel.FileName);
                    case "rar":
                        return File(myNetworkPath, "application/x-rar-compressed", requestModel.FileName);
                    default:
                        return File(myNetworkPath, "application/unknown", requestModel.FileName);
                }
            }
            else
            {
                return Content("File Does Not Exist In the Path", "text/css");
            }
        }

        [HttpPost]
        public ActionResult ExportTickets(JqxGridPaginationModel pagingRequestModel)
        {
            BaseRequest<JqxGridPaginationModel> baseReq = new BaseRequest<JqxGridPaginationModel>
            {
                LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                Entity = pagingRequestModel
            };
            BaseResponse<List<TicketExport_Model>> baseResponse = CommonUtility.ConsumeAPIService
                <BaseResponse<List<TicketExport_Model>>, BaseRequest<JqxGridPaginationModel>>
                (CommonConstant.GetTicketForExportUrl, baseReq);

            DataTable dt = CommonUtility.ConvertToDataTable(baseResponse.Entity);
       
            dt.AcceptChanges();
            CommonUtility.ExportExcel(dt, "Ticket_Details", Response);
            return View();
        }

        [HttpPost]
        public ContentResult RunRuleEngine(RunRuleEngineModel model)
        {


            BaseRequest<RunRuleEngineModel> baseReq = new BaseRequest<RunRuleEngineModel>
            {
                LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                Entity = new RunRuleEngineModel() {BatchId=model.BatchId,MSP=model.MSP,MSP_Domain= ConfigurationManager.AppSettings["DomainNameMSP"].ToString(), TicketData=model.TicketData }
            };

              

            var result =  JsonConvert.SerializeObject(CallingRuleEngine(baseReq), Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });


            return Content(result, "application/json");

        }

        [HttpPost]
        public ContentResult EditingFileUpload(FileUploadingFinal fileUploading)
       {

            BaseRequest<TicketAttachments> baseRequest = new BaseRequest<TicketAttachments>()
            {
                LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"]                
            };

            var Admin_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 1);
            var MSP_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 2);
            var HO_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 3);
            var Location_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 4);

            TicketAttachments ticketAttachments = new TicketAttachments();

            if (Location_User)
            {
                if (fileUploading.Editingfiles != null)
                {
                    ticketAttachments.FilePath = CommonUtility.FileUpload(fileUploading.Editingfiles, fileUploading.MSP,false).Replace("\\\\", @"\").Replace(@"\sharedfilescms.file.core.windows.net\filesharecmstest","Z:").Replace(@"\172.19.100.157\Volume6\NFSRMSUAT", "Z:");
                    ticketAttachments.TicketId = fileUploading.TicketID;
                    ticketAttachments.VisibleToHO = true;
                    ticketAttachments.VisibleToLocation = true;
                    ticketAttachments.VisibleToMSP = false;
                    ticketAttachments.TypeOfAttachment = "others";

                    baseRequest.Entity = ticketAttachments;

                    CommonUtility.ConsumeAPIService<BaseResponse<bool>, BaseRequest<TicketAttachments>>
                                                    (CommonConstant.LocationFileUrl, baseRequest);



                }

            }
            else
            {
                if (fileUploading.Editingfiles != null)
                {
                    ticketAttachments.FilePath = CommonUtility.FileUpload(fileUploading.Editingfiles, fileUploading.MSP,false).Replace("\\\\", @"\").Replace(@"\sharedfilescms.file.core.windows.net\filesharecmstest", "Z:").Replace(@"\172.19.100.157\Volume6\NFSRMSUAT", "Z:");
                    ticketAttachments.TicketId = fileUploading.TicketID;
                    ticketAttachments.VisibleToHO = fileUploading.HoActive;
                    ticketAttachments.VisibleToLocation = fileUploading.LocationActive;
                    ticketAttachments.VisibleToMSP = fileUploading.MspActive;
                    ticketAttachments.TypeOfAttachment = "others";

                    baseRequest.Entity = ticketAttachments;

                    CommonUtility.ConsumeAPIService<BaseResponse<bool>, BaseRequest<TicketAttachments>>
                                                    (CommonConstant.HoandOthersFileUrl, baseRequest);
                }
                else
                {
                    ticketAttachments.Id = fileUploading.ID;
                    ticketAttachments.VisibleToMSP = fileUploading.MspActive;
                    ticketAttachments.VisibleToHO = fileUploading.HoActive;
                    ticketAttachments.VisibleToLocation = fileUploading.LocationActive;
                    ticketAttachments.TicketId = null;

                    baseRequest.Entity = ticketAttachments;

                    CommonUtility.ConsumeAPIService<BaseResponse<bool>, BaseRequest<TicketAttachments>>
                                                    (CommonConstant.HoandOthersFileUrl, baseRequest);
                }


            }
            
            return null;
        }

        [HttpPost]
        public ContentResult CommentUpdate(TicketsLogView Value)
        {
            {
                BaseResponse baseResponse = new BaseResponse<TicketsLogView>();

                BaseRequest<TicketsLogView> baseReq = new BaseRequest<TicketsLogView>
                {

                    LoginEmployeeDetails = (EmployeeDetails)Session["EmployeeDetails"],
                    Entity = Value
                };

                baseResponse = CommonUtility.
                ConsumeAPIService<BaseResponse, BaseRequest<TicketsLogView>>
                (CommonConstant.UpdateTicketcommentsUrl, baseReq);

                var result = JsonConvert.SerializeObject(baseResponse, Formatting.None,
                                new JsonSerializerSettings
                                {
                                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                                });


                return Content(result, "application/json");


            }

        }


        public BaseResponse CallingRuleEngine(BaseRequest<RunRuleEngineModel> model)
        {
            BaseResponse baseResponse = new BaseResponse();

            baseResponse = CommonUtility.ConsumeAPIServiceRunRuleEngine<BaseResponse, RunRuleEngineModel>(CommonConstant.GetRuleEngineUrl, model.Entity);

            if (baseResponse == null)
            {
                baseResponse = new BaseResponse { Success = false, Message = "Failed While Calling RuleEngine as the response was NULL" };
            }

            CommonUtility.ConsumeAPIService<BaseResponse, BaseResponse<BaseRequest<RunRuleEngineModel>>>(CommonConstant.UpdateRuleEngineStatusUrl, 
                new BaseResponse<BaseRequest<RunRuleEngineModel>> {Success = baseResponse.Success, Message = baseResponse.Message,
                    Entity = new BaseRequest<RunRuleEngineModel> {Entity=model.Entity,LoginEmployeeDetails=model.LoginEmployeeDetails}});

            
                


            return  baseResponse;
        }


    }

}   

