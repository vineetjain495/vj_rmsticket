using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMSDAL;
using CMSDTO.Models.Request;
using CMSDTO.Models.Response;
using CMSRepository.Models;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.SqlServer;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Transactions;
using System.Web;

namespace CMS_DAL.RMS_Ticketing_DAL
{
    public class RMSTicketViewerRepository : IDisposable
    {
        private RMSTSDBContext context;

        public RMSTicketViewerRepository()
        {
            context = new RMSTSDBContext();
            //context.Database.BeginTransaction(IsolationLevel.ReadUncommitted);
        }

        public TableListWithPagingInfo<TicketViewer> GetTicketsLists(BaseRequest<JqxGridPaginationModel> baseRequest)
        {   
            try
            {

                TableListWithPagingInfo<TicketViewer> DsttransactionListWithCount = new TableListWithPagingInfo<TicketViewer>();
                CommonFilterRepository commonFilter = new CommonFilterRepository();
                IEnumerable<TicketViewer> Dstsource = null;
                List<string> statusList = new List<string>() { "M-ACCEPT", "M-REJECT", "MANUAL" };
                //List<string> cmsStatus = new List<string>() { "REJECT", "ACCEPT" };

                List<TicketViewer> ticketViewers = new List<TicketViewer>();

                StringBuilder orderByQuery = new StringBuilder();
                StringBuilder whereQuery = new StringBuilder();


                var Admin_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 1);
                var MSP_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 2);
                var HO_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 3);
                var Location_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 4);
                var HO_Manager = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 5);
                var Loc_Manager = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 6);

                List<string> regionList;
                List<string> locationList;

                if (Admin_User || HO_User || MSP_User || HO_Manager)
                {
                    regionList = new List<string> { "" };
                    locationList = new List<string> { "" };
                }
                else
                {
                    regionList = context.Employee_Hierarchy
                                            .Where(w => w.EmployeeCode == baseRequest.LoginEmployeeDetails.EmpCode && w.IsActive == true)
                                            .Select(s => s.Region_code)
                                            .ToList();

                    locationList = context.Employee_Hierarchy
                                            .Where(w => w.EmployeeCode == baseRequest.LoginEmployeeDetails.EmpCode && w.IsActive == true)
                                            .Select(s => s.Loc_Code)
                                            .ToList();
                    
                }


                using (var t = new TransactionScope(TransactionScopeOption.Required,
                       new TransactionOptions
                       {
                           IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted
                       }))
                {

                    if (baseRequest.Entity.filterGroups != null)
                    {
                        string MSP = string.Empty; bool MSP_Flag = false;
                        string TicketID = string.Empty; bool TicketID_Flag = false;
                        string BatchID = string.Empty; bool BatchID_Flag = false;
                        string AtmID = string.Empty; bool AtmID_Flag = false;
                        DateTime? FromDate = null; DateTime? ToDate = null; bool Date_Flag = false;
                        


                        foreach (var filterGroups in baseRequest.Entity.filterGroups)
                        {
                            foreach (var filter in filterGroups.filters)
                            {
                                switch (filter.field)
                                {
                                    case "MSP": MSP = filter.value; MSP_Flag = true; break;
                                    case "TicketID": TicketID = filter.value; TicketID_Flag = true; break;
                                    case "BatchID": BatchID = filter.value; BatchID_Flag = true; break;
                                    case "AtmID": AtmID = filter.value; AtmID_Flag = true; break;
                                    case "FromDate":FromDate = Convert.ToDateTime(filter.value); Date_Flag=true;break;
                                    case "ToDate": ToDate = Convert.ToDateTime(filter.value).AddDays(1); Date_Flag = true; break;
                                }
                            }
                        }


                        Dstsource = context.Ticket
                                       .Where(ww =>
                                       ((TicketID_Flag == false) || (TicketID_Flag && ww.TicketID == TicketID))
                                        &&
                                       ((MSP_Flag == false) || (MSP_Flag && ww.MSP == MSP))
                                        &&
                                       ((BatchID_Flag == false) || (BatchID_Flag && ww.BatchID == BatchID))
                                       &&
                                       ((AtmID_Flag == false) || (AtmID_Flag && ww.ATMID == AtmID))
                                       &&
                                       ((Date_Flag == false) || (Date_Flag && (ww.CreatedDate >= FromDate && ww.CreatedDate <= ToDate)))
                                       )
                                       .Where(w =>
                                               (Admin_User) ||
                                               ((MSP_User) &&
                                               w.MSP == baseRequest.LoginEmployeeDetails.EmpCode
                                               )
                                               ||
                                               (
                                               (HO_User) &&
                                               w.AssignedTo == baseRequest.LoginEmployeeDetails.EmpCode
                                               ) ||
                                                            (
                                                                (Location_User) &&
                                                                    (regionList.Contains(w.Region)) && locationList.Contains(w.Location)
                                                            && (w.AssignedTo == baseRequest.LoginEmployeeDetails.EmpCode)
                                                            )
                                                  ||
                                                  (
                                                  (HO_Manager)
                                                  )
                                                  ||
                                                  (
                                                  (Loc_Manager) && (regionList.Contains(w.Region)) && locationList.Contains(w.Location)
                                                  )
                                        )
                                       .OrderBy(o => o.Id)
                                       .Skip((baseRequest.Entity.PageNum - 1) * baseRequest.Entity.PageSize).Take(baseRequest.Entity.PageSize)
                                       .GroupJoin(context.Atmmasters, outer => outer.ATMpkid, inner => inner.pkid, (outer, inner) => new TicketViewer
                                       {
                                           Id = outer.Id,
                                           ATMIDs = inner.Where(ww=>ww.pkid == outer.ATMpkid).Select(s => s.atmcode).FirstOrDefault(),
                                           ATMID = outer.ATMID,
                                           TicketID = outer.TicketID,
                                           Location = inner.Select(s => s.LocationName).FirstOrDefault(),
                                           CreatedDate = outer.CreatedDate,
                                           IncidentDate = outer.IncidentDate,
                                           TransactionTime = outer.TransactonTime,
                                           DisputeAmount = outer.DisputedAmount != null ? outer.DisputedAmount : 0,
                                           TransactionNumber = outer.TransactionNo,
                                           Bank = inner.Select(s1 => s1.BankName).FirstOrDefault(),
                                           Status = outer.Status,
                                           MSP = inner.Select(s1 => s1.MSP).FirstOrDefault(),
                                           RoCode = inner.Select(s1 => s1.RoCode).FirstOrDefault(),
                                           LocationCode = inner.Select(s1 => s1.LocationCode).FirstOrDefault(),
                                           AssignedTo = outer.AssignedTo,
                                          OldTicketId = outer.OldTicketId
                                       })
                                       .ToList();

                        DsttransactionListWithCount.PageResponseModelObj.TotalCount = context.Ticket
                                        .Where(ww =>
                                       ((TicketID_Flag == false) || (TicketID_Flag && ww.TicketID == TicketID))
                                        &&
                                       ((MSP_Flag == false) || (MSP_Flag && ww.MSP == MSP))
                                        &&
                                       ((BatchID_Flag == false) || (BatchID_Flag && ww.BatchID == BatchID))
                                       &&
                                       ((AtmID_Flag == false) || (AtmID_Flag && ww.ATMID == AtmID))
                                       &&
                                       ((Date_Flag == false) || (Date_Flag && (ww.CreatedDate >= FromDate && ww.CreatedDate <= ToDate)))
                                       )
                                      .Where(w =>
                                                 (Admin_User) ||
                                                 ((MSP_User) &&
                                                  w.MSP == baseRequest.LoginEmployeeDetails.EmpCode
                                                  )
                                                   ||
                                                 (
                                                 (HO_User) && w.AssignedTo == baseRequest.LoginEmployeeDetails.EmpCode
                                                 ) ||
                                                              (
                                                                  (Location_User) &&
                                                                      (regionList.Contains(w.Region) && locationList.Contains(w.Location)
                                                              && (w.AssignedTo == baseRequest.LoginEmployeeDetails.EmpCode)
                                                              )
                                                              ||
                                                  (
                                                  (HO_Manager)
                                                  )
                                                  ||
                                                  (
                                                  (Loc_Manager) && (regionList.Contains(w.Region) && locationList.Contains(w.Location)
                                                  )
                                                )
                                               )
                                              )
                                      .Count();
                    }
                    else
                    {
                        #region
                               Dstsource = context.Ticket
                                           .Where(w =>
                                               (Admin_User) ||
                                               ((MSP_User) &&
                                               w.MSP == baseRequest.LoginEmployeeDetails.EmpCode
                                               )
                                               ||
                                               (
                                               (HO_User) &&
                                               w.AssignedTo == baseRequest.LoginEmployeeDetails.EmpCode && w.HOSubmitted==false
                                               ) ||
                                                            (
                                                                (Location_User) &&
                                                                    (regionList.Contains(w.Region)) && locationList.Contains(w.Location)
                                                            && (w.AssignedTo == baseRequest.LoginEmployeeDetails.EmpCode) && (w.LocSubmitted == false)
                                                            )
                                                 || ( 
                                                 (HO_Manager) && (false) 
                                                 )
                                                 ||
                                                  (
                                                  (Loc_Manager) && (regionList.Contains(w.Region)) && locationList.Contains(w.Location)
                                                  )
                                               )
                                           .OrderBy(o => o.Id)
                                           .Skip((baseRequest.Entity.PageNum - 1) * baseRequest.Entity.PageSize).Take(baseRequest.Entity.PageSize)
                                           .GroupJoin(context.Atmmasters, outer => outer.ATMpkid, inner => inner.pkid, (outer, inner) => new TicketViewer {
                                               Id = outer.Id,
                                               ATMIDs = inner.Where(ww => ww.pkid == outer.ATMpkid).Select(s => s.atmcode).FirstOrDefault(),
                                               ATMID = outer.ATMID,
                                               TicketID = outer.TicketID,
                                               Location = inner.Select(s => s.LocationName).FirstOrDefault(),
                                               CreatedDate = outer.CreatedDate,
                                               IncidentDate = outer.IncidentDate,
                                               TransactionTime = outer.TransactonTime,
                                               DisputeAmount = outer.DisputedAmount != null ? outer.DisputedAmount : 0,
                                               TransactionNumber = outer.TransactionNo,
                                               Bank = inner.Select(s1 => s1.BankName).FirstOrDefault(),
                                               Status = outer.Status,
                                               MSP = inner.Select(s1 => s1.MSP).FirstOrDefault(),
                                               RoCode = inner.Select(s1 => s1.RoCode).FirstOrDefault(),
                                               LocationCode = inner.Select(s1 => s1.LocationCode).FirstOrDefault(),
                                               AssignedTo = outer.AssignedTo,
                                               OldTicketId = outer.OldTicketId
                                           })
                                           .ToList();

                        DsttransactionListWithCount.PageResponseModelObj.TotalCount = context.Ticket
                                            .Where(w =>
                                               (Admin_User) ||
                                               ((MSP_User) &&
                                               w.MSP == baseRequest.LoginEmployeeDetails.EmpCode 
                                               )
                                               ||
                                               (
                                               (HO_User) && w.AssignedTo == baseRequest.LoginEmployeeDetails.EmpCode && w.HOSubmitted == false
                                               ) ||
                                                            (
                                                                (Location_User) &&
                                                                    (regionList.Contains(w.Region) && locationList.Contains(w.Location))
                                                            && (w.AssignedTo == baseRequest.LoginEmployeeDetails.EmpCode) && w.LocSubmitted == false
                                                                    )
                                                                    || (
                                                 (HO_Manager) && (false)
                                                 )
                                                 ||
                                                  (
                                                  (Loc_Manager) && (regionList.Contains(w.Region) && locationList.Contains(w.Location)
                                                  )
                                                  )
                                               )
                                            .Count();
                        #endregion

                    }

                }
                foreach (var list in Dstsource)
                {
                    string Empty = "NULL";
                    TicketViewer viewer = new TicketViewer();
                    viewer.Id = list.Id;
                    viewer.TicketID = !string.IsNullOrEmpty(list.TicketID) ? list.TicketID : Empty;
                    viewer.OldTicketId = !string.IsNullOrEmpty(list.OldTicketId) ? list.OldTicketId : string.Empty;
                    viewer.Viewcomment = string.Format(
                        "{0}{1}ATMID:{2}{4} {0}{1}Location:{2}{6} {0}{1}Bank:{2}{5}{3}" +
                        "{0}{1}Dispute Amount:{2}{7} {0}{1}Transaction Number:{2}{8} {3}" +
                        "{0}{1}Transaction Date:{2}{9} {10}{0}{1}Created Date:{2}{11}",
                        "&nbsp;", "<b>", "</b>", "<br>",
                        !string.IsNullOrEmpty(list.ATMIDs) ? list.ATMIDs : list.ATMID,
                        !string.IsNullOrEmpty(list.Bank) ? list.Bank : Empty,
                        !string.IsNullOrEmpty(list.Location) ? list.Location : Empty,
                        !string.IsNullOrEmpty(String.Format("{0:n0}",
                        Convert.ToInt64(list.DisputeAmount.Value))) ? String.Format("{0:n0}", Convert.ToInt64(list.DisputeAmount.Value)).ToString() : Empty,
                        list.TransactionNumber,
                        list.IncidentDate.Value.ToString("yyyy-MMM-dd"),
                        list.TransactionTime.Value.ToString("HH:mm"),
                        list.CreatedDate.Value.ToString("yyyy-MMM-dd HH:mm")
                        
                        );
                    viewer.MSP = !string.IsNullOrEmpty(list.MSP) ? list.MSP : Empty;
                    viewer.Status = !string.IsNullOrEmpty(list.Status) ? MSP_User ? (list.Status == "MANUAL" || list.Status == "M-ACCEPT" || list.Status == "M-REJECT") ? "W.I.P" : list.Status : list.Status : Empty ;
                    ticketViewers.Add(viewer);
                }


                DsttransactionListWithCount.PageResponseModelObj.PageNumber = baseRequest.Entity.PageNum;
                DsttransactionListWithCount.PageResponseModelObj.PageSize = baseRequest.Entity.PageSize;
                DsttransactionListWithCount.PageResponseModelObj.PageCount = (int)Math.Ceiling((decimal)(DsttransactionListWithCount.PageResponseModelObj.TotalCount / baseRequest.Entity.PageSize));
                DsttransactionListWithCount.TableList = ticketViewers;

                return DsttransactionListWithCount;
            }
            catch
            {
                throw;
            }

        }

        public TableListWithPagingInfo<TicketsLogView> GetcommentsLists(BaseRequest<TicketsLogView> baseRequest)
        {
            try
            {
                TableListWithPagingInfo<TicketsLogView> TicketCommentList = new TableListWithPagingInfo<TicketsLogView>();
                IEnumerable<TicketsLogView> ticketcommentsource = null;


                List<TicketsLogView> ticketViewers = new List<TicketsLogView>();




                #region
                ticketcommentsource = context.Ticket.Join(context.TicketLog, outer => outer.TicketAttRefId, inner => inner.TicketId, (outer, inner) => new TicketsLogView {
                    ID = inner.ID, TicketID = outer.TicketID, CreatedBy = inner.CreatedBy, CustCommentsView = outer.DisputeComments, CustComments = inner.CustComments, AssignedTo = outer.AssignedTo, CreatedDate = inner.CreatedDate, CustCommentsType = inner.CustCommentsType })
                                    .Where(w => w.TicketID == baseRequest.Entity.TicketID && w.CustComments != "")
                                    .Join(context.Employee_Role, outer1 => outer1.CreatedBy, inner1 => inner1.Type_EmpCode, (outer1, inner1) => new TicketsLogView
                                    {
                                        ID = outer1.ID,
                                        TicketID = outer1.TicketID,
                                        CreatedBy = inner1.EmployeeName,
                                        CustCommentsView = outer1.CustCommentsView,
                                        CustComments = outer1.CustComments,
                                        AssignedTo = outer1.AssignedTo,
                                        CreatedDate = outer1.CreatedDate,
                                        CustCommentsType = context.Employee_Role.Where(ww => ww.TypeCode == inner1.RoleCode && ww.Type == "Roles").Select(s => s.Type_EmpCode).FirstOrDefault()
                                    })
                                    .Join(context.Employee_Role, outer2 => outer2.AssignedTo, inner2 => inner2.Type_EmpCode, (outer2, inner2) => new TicketsLogView
                                    {
                                        ID = outer2.ID,
                                        TicketID = outer2.TicketID,
                                        CreatedBy = outer2.CreatedBy,
                                        CustCommentsView = context.Employee_Role.Where(ww => ww.TypeCode == inner2.RoleCode && ww.Type == "Roles").Select(s => s.Type_EmpCode).FirstOrDefault(),
                                        CustComments = outer2.CustComments,
                                        AssignedTo = inner2.EmployeeName,
                                        CreatedDate = outer2.CreatedDate,
                                        CustCommentsType = outer2.CustCommentsType
                                    })
                                    .OrderByDescending(x => x.ID)
                                    .ToList();
                #endregion


                foreach (var list in ticketcommentsource)
                {
                    string Empty = string.Empty;
                    TicketsLogView viewer = new TicketsLogView();

                    viewer.ID = list.ID;
                    viewer.TicketID = !string.IsNullOrEmpty(list.TicketID) ? list.TicketID : Empty;
                    viewer.CustComments = !string.IsNullOrEmpty(list.CustComments) ? list.CustComments : Empty;
                    viewer.AssignedTo = string.Format("{0}({2}) ==> {1}({3})", list.CreatedBy, list.AssignedTo, list.CustCommentsType,list.CustCommentsView);
                    //viewer.CustCommentsView = string.Format("<div style={7}margin:7px{7}>{0}{0}{4}{3}{0}{0}{1}AssignedTo{0}<i class={7}icofont icofont-long-arrow-right{7} style={7}color:#964B00{7}></i>{0}{0}{2}{5}{3}{0}{0}<i class={7}icofont icofont-ui-clock{7} style={7}color:#65ff65{7}></i>{0}{0}{6}</div>", "&nbsp;", "<b>", "</b>", "<br>", !string.IsNullOrEmpty(list.CustComments) ? list.CustComments : Empty, !string.IsNullOrEmpty(list.AssignedTo) ? list.AssignedTo : Empty ,Convert.ToString(list.CreatedDate), "\"");
                    //viewer.CustCommentsView = string.Format("<div style={7}margin-top:-14px;{7}>{0}{0}{4}{3}{0}{0}{1}AssignedTo{0}<i class={7}icofont icofont-long-arrow-right{7} style={7}color:#964B00{7}></i>{0}{0}{2}{5}{3}{0}{0}<i class={7}icofont icofont-ui-clock{7} style={7}color:#65ff65{7}></i>{0}{0}{6}</div>", "&nbsp;", "<b>", "</b>", "<br>", !string.IsNullOrEmpty(list.CustComments) ? list.CustComments : Empty, !string.IsNullOrEmpty(list.AssignedTo) ? list.AssignedTo : Empty, Convert.ToString(list.CreatedDate), "\"");
                    viewer.CreatedDate = list.CreatedDate;
                    viewer.CustCommentsType = !string.IsNullOrEmpty(list.CustCommentsType) ? list.CustCommentsType : Empty;

                    ticketViewers.Add(viewer);

                }


                TicketCommentList.TableList = ticketViewers;
                return TicketCommentList;
            }
            catch
            {
                throw;
            }
        }

        public BaseResponse<Ticket_ATM_View> GetTicketDetailsView(BaseRequest<Ticket> baseRequest)
        {
            BaseResponse<Ticket_ATM_View> test = new BaseResponse<Ticket_ATM_View>();
            try
            {
                string Empty_string = string.Empty;
                double Empty_number = 0;
                Ticket_ATM_View ticket = new Ticket_ATM_View();
                
                List<string> avoidCardNumbers = new List<string> { "9999999999"};
                List<string> overageJustification = new List<string> { "OVERAGE REPORTED", "PARTIAL - OVERAGE REPORTED" };
                List<string> midCashJustification = new List<string> { "SWITCH INCREASED", "PARTIAL - SWITCH INCREASED" };
                List<string> atmDepositJustification = new List<string> { "PARTIAL - CASH DEPOSITED", "CASH DEPOSITED" };
                List<string> includeErrorCode = new List<string> { "POWER FAILURE", "E* ERROR", "DISPENSER ERROR", "CDM ERROR" };
                List<string> dateNotToConsider = new List<string> { "1", "1900" };

                var admin = baseRequest.LoginEmployeeDetails.AssignedRoleID == 1;
                var MSP = baseRequest.LoginEmployeeDetails.AssignedRoleID == 2;
                var HO = baseRequest.LoginEmployeeDetails.AssignedRoleID == 3;
                var Location = baseRequest.LoginEmployeeDetails.AssignedRoleID == 4;
                var HO_Manager = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 5);
                var Loc_Manager = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 6);


                using (var t = new TransactionScope(TransactionScopeOption.Required,
                      new TransactionOptions
                      {
                          IsolationLevel = System.Transactions.IsolationLevel.ReadUncommitted
                      }))
                {

                    //var a = context.Ticket
                    //                .Where(w => w.TicketID == baseRequest.Entity.TicketID)
                    //                .Join(context.Batch, outer => outer.BatchID, inner => inner.BatchID, (outer, inner) => new Ticket_ATM_View {
                    //                    EmailID = !string.IsNullOrEmpty(inner.FromEmail) ? inner.FromEmail : Empty_string,
                    //                    Subject = !string.IsNullOrEmpty(inner.EmailSubject) ? inner.EmailSubject : Empty_string,
                    //                    BatchID = !string.IsNullOrEmpty(outer.BatchID) ? outer.BatchID : Empty_string,
                    //                    TicketID = !string.IsNullOrEmpty(outer.TicketID) ? outer.TicketID : Empty_string,
                    //                    QueryType = !string.IsNullOrEmpty(outer.QueryType) ? outer.QueryType : Empty_string,
                    //                    QueryCategory = !string.IsNullOrEmpty(outer.QueryCategory) && outer.QueryCategory != "null" ? outer.QueryCategory : Empty_string,
                    //                    ATMID = !string.IsNullOrEmpty(outer.ATMID) ? outer.ATMID : Empty_string,
                    //                    AccountNo = !string.IsNullOrEmpty(outer.AccountNo) ? outer.AccountNo : Empty_string,
                    //                    TransactionNo = !string.IsNullOrEmpty(outer.TransactionNo) ? outer.TransactionNo : Empty_string,
                    //                    CustomerActions = !string.IsNullOrEmpty(outer.Status) ? outer.Status : Empty_string,
                    //                    InternalAction = !string.IsNullOrEmpty(outer.InternalAction) ? outer.InternalAction : Empty_string,
                    //                    Justification = !string.IsNullOrEmpty(outer.Justification) ? outer.Justification : Empty_string,
                    //                    CreatedDate_M = outer.CreatedDate.Value,
                    //                    AssignedTargetAmount = outer.TargetAmount != null ? outer.TargetAmount.ToString() : Empty_number.ToString(),
                    //                    RecoveredAmount = outer.RecoveredAmount != null ? outer.RecoveredAmount.ToString() : Empty_number.ToString(),
                    //                    DisputedAmount = outer.DisputedAmount != null ? outer.DisputedAmount.ToString() : Empty_number.ToString(),
                    //                    TransAmount = outer.TransAmount != null ? outer.TransAmount.ToString() : Empty_number.ToString(),
                    //                    CardNo = !string.IsNullOrEmpty(outer.CardNo) ? s.outer1.outer.CardNo : Empty_string,
                    //                    ErrorCode = !string.IsNullOrEmpty(s.outer1.outer.ErrorCode) ? !string.IsNullOrEmpty(s.outer1.outer.ErrorRemark) ? s.outer1.outer.ErrorCode + " -- " + s.outer1.outer.ErrorRemark : s.outer1.outer.ErrorCode + Empty_string : Empty_string,
                    //                    EmailDate_M = s.outer1.outer.EmailDate.Value,
                    //                    IncidentDate_M = s.outer1.outer.IncidentDate.Value,
                    //                    ReferenceNo = !string.IsNullOrEmpty(s.outer1.outer.ReferenceNo) ? s.outer1.outer.ReferenceNo : Empty_string,
                    //                    CMSStatus = !string.IsNullOrEmpty(s.outer1.outer.CMSStatus) ? s.outer1.outer.CMSStatus : Empty_string,
                    //                    TransactionTime_M = s.outer1.outer.TransactonTime.Value,
                    //                    CardException = s.outer1.outer.QueryType.Equals("CUSTOMER CLAIM") ? avoidCardNumbers.Contains(s.outer1.outer.CardNo) ? 0 : context.Ticket.Where(ww => ww.CardNo == s.outer1.outer.CardNo).Count() : 0,
                    //                    TicketAttRefId = !string.IsNullOrEmpty(s.outer1.outer.TicketAttRefId) ? s.outer1.outer.TicketAttRefId : Empty_string,
                    //                    FirstCustodianCode = !string.IsNullOrEmpty(s.outer1.outer.FirstCustodianCode) ? s.outer1.outer.FirstCustodianCode : Empty_string,
                    //                    FirstCustodianName = !string.IsNullOrEmpty(s.outer1.outer.FirstCustodianName) ? s.outer1.outer.FirstCustodianName : Empty_string,
                    //                    SecondCustodianCode = !string.IsNullOrEmpty(s.outer1.outer.SecondCustodianCode) ? s.outer1.outer.SecondCustodianCode : Empty_string,
                    //                    SecondCustodianName = !string.IsNullOrEmpty(s.outer1.outer.SecondCustodianName) ? s.outer1.outer.SecondCustodianName : Empty_string,

                    //                })
                    
                    ticket = context.Ticket
                                .Where(w => w.TicketID == baseRequest.Entity.TicketID)
                                .Join(context.Batch, outer => outer.BatchID, inner => inner.BatchID, (outer, inner) => new { outer, inner })
                                .GroupJoin(context.Atmmasters, outter1 => outter1.outer.ATMpkid, inner1 => inner1.pkid, (outer1, inner1) => new { outer1, inner1 })
                                .Select(s => new Ticket_ATM_View
                                {
                                    EmailID = !string.IsNullOrEmpty(s.outer1.inner.FromEmail) ? s.outer1.inner.FromEmail : Empty_string,
                                    Subject = !string.IsNullOrEmpty(s.outer1.inner.EmailSubject) ? s.outer1.inner.EmailSubject : Empty_string,
                                    MSP = !string.IsNullOrEmpty(s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.MSP).FirstOrDefault()) ? s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.MSP).FirstOrDefault() : Empty_string,
                                    BatchID = !string.IsNullOrEmpty(s.outer1.outer.BatchID) ? s.outer1.outer.BatchID : Empty_string,
                                    TicketID = !string.IsNullOrEmpty(s.outer1.outer.TicketID) ? s.outer1.outer.TicketID : Empty_string,
                                    OldTicketID = !string.IsNullOrEmpty(s.outer1.outer.OldTicketId) ? s.outer1.outer.OldTicketId : Empty_string,
                                    Account = !string.IsNullOrEmpty(s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.AccountName).FirstOrDefault()) ? s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.AccountName).FirstOrDefault() : Empty_string,
                                    QueryType = !string.IsNullOrEmpty(s.outer1.outer.QueryType) ? s.outer1.outer.QueryType : Empty_string,
                                    QueryCategory = !string.IsNullOrEmpty(s.outer1.outer.QueryCategory) && s.outer1.outer.QueryCategory != "null" ? s.outer1.outer.QueryCategory : Empty_string,
                                    ATMIDs = s.inner1.Where(ww => ww.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.atmcode).FirstOrDefault(),
                                    ATMID = s.outer1.outer.ATMID,
                                    AccountNo = !string.IsNullOrEmpty(s.outer1.outer.AccountNo) ? s.outer1.outer.AccountNo : Empty_string,
                                    Bank = !string.IsNullOrEmpty(s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.BankName).FirstOrDefault()) ? s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.BankName).FirstOrDefault() : Empty_string,
                                    RoCode = !string.IsNullOrEmpty(s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.RoName).FirstOrDefault()) ? s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.RoName).FirstOrDefault() : Empty_string,
                                    Location = !string.IsNullOrEmpty(s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.LocationName).FirstOrDefault()) ? s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.LocationName).FirstOrDefault() : Empty_string,
                                    HubLocation = !string.IsNullOrEmpty(s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.HubLocationName).FirstOrDefault()) ? s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.HubLocationName).FirstOrDefault() : Empty_string,
                                    Zone = !string.IsNullOrEmpty(s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.Zone).FirstOrDefault()) ? s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.Zone).FirstOrDefault() : Empty_string,
                                    TransactionNo = !string.IsNullOrEmpty(s.outer1.outer.TransactionNo) ? s.outer1.outer.TransactionNo : Empty_string,
                                    CustomerActions = !string.IsNullOrEmpty(s.outer1.outer.Status) ? s.outer1.outer.Status : Empty_string,
                                    InternalAction = !string.IsNullOrEmpty(s.outer1.outer.InternalAction) ? s.outer1.outer.InternalAction : Empty_string,
                                    Justification = !string.IsNullOrEmpty(s.outer1.outer.Justification) ? s.outer1.outer.Justification : Empty_string,
                                    CreatedDate_M = s.outer1.outer.CreatedDate.Value,
                                    AssignedTargetAmount = s.outer1.outer.TargetAmount != null ? s.outer1.outer.TargetAmount.ToString() : Empty_number.ToString(),
                                    RecoveredAmount = s.outer1.outer.RecoveredAmount != null ? s.outer1.outer.RecoveredAmount.ToString() : Empty_number.ToString(),
                                    //ModifiedDate_M = s.outer1.outer.ModifiedDate.Value,
                                    DisputedAmount = s.outer1.outer.DisputedAmount != null ? s.outer1.outer.DisputedAmount.ToString() : Empty_number.ToString(),
                                    ATMType = !string.IsNullOrEmpty(s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.AtmType).FirstOrDefault()) ? s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.AtmType).FirstOrDefault() : Empty_string,
                                    TransAmount = s.outer1.outer.TransAmount != null ? s.outer1.outer.TransAmount.ToString() : Empty_number.ToString(),
                                    CardNo = !string.IsNullOrEmpty(s.outer1.outer.CardNo) ? s.outer1.outer.CardNo : Empty_string,
                                    ErrorCode = !string.IsNullOrEmpty(s.outer1.outer.ErrorCode) ? !string.IsNullOrEmpty(s.outer1.outer.ErrorRemark) ? s.outer1.outer.ErrorCode + " -- " + s.outer1.outer.ErrorRemark : s.outer1.outer.ErrorCode + Empty_string : Empty_string,
                                    EmailDate_M = s.outer1.outer.EmailDate.Value,
                                    IncidentDate_M = s.outer1.outer.IncidentDate.Value,
                                    DepositDate_M = s.outer1.outer.DepositDate.Value,
                                    DepositAmount = s.outer1.outer.DepositAmount.ToString(),
                                    ReferenceNo = !string.IsNullOrEmpty(s.outer1.outer.ReferenceNo) ? s.outer1.outer.ReferenceNo : Empty_string,
                                    CMSStatus = !string.IsNullOrEmpty(s.outer1.outer.CMSStatus) ? s.outer1.outer.CMSStatus : Empty_string,
                                    TransactionTime_M = s.outer1.outer.TransactonTime.Value,
                                    //CardException = s.outer1.outer.QueryType.Equals("CUSTOMER CLAIM") ? avoidCardNumbers.Contains(s.outer1.outer.CardNo) ? 0 : context.Ticket.Where(ww => ww.CardNo == s.outer1.outer.CardNo).Count() : 0,
                                    AtmException = context.Ticket.Where(ww => ww.ATMID == s.outer1.outer.ATMID).Count(),
                                    RouteCode = !string.IsNullOrEmpty(s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.RouteCode).FirstOrDefault()) ? s.inner1.Where(w => w.pkid == s.outer1.outer.ATMpkid).Select(ss => ss.RouteCode).FirstOrDefault() : Empty_string,
                                    TicketAttRefId = !string.IsNullOrEmpty(s.outer1.outer.TicketAttRefId) ? s.outer1.outer.TicketAttRefId : Empty_string,
                                    FirstCustodianCode = !string.IsNullOrEmpty(s.outer1.outer.FirstCustodianCode) ? s.outer1.outer.FirstCustodianCode : Empty_string,
                                    FirstCustodianName = !string.IsNullOrEmpty(s.outer1.outer.FirstCustodianName) ? s.outer1.outer.FirstCustodianName : Empty_string,
                                    SecondCustodianCode = !string.IsNullOrEmpty(s.outer1.outer.SecondCustodianCode) ? s.outer1.outer.SecondCustodianCode : Empty_string,
                                    SecondCustodianName = !string.IsNullOrEmpty(s.outer1.outer.SecondCustodianName) ? s.outer1.outer.SecondCustodianName : Empty_string,
                                    ProcessingRemarks = !string.IsNullOrEmpty(s.outer1.outer.ProcessingRemarks) ? s.outer1.outer.ProcessingRemarks : Empty_string,
                                    CMSRemarks = !string.IsNullOrEmpty(s.outer1.outer.CustComments) ? s.outer1.outer.CustComments : Empty_string,
                                    HoSubmitted = s.outer1.outer.HOSubmitted,
                                    LocSubmitted = s.outer1.outer.LocSubmitted,
                                    //AlternateCardNo = s.outer1.outer.AlternateCardNo,
                                }).FirstOrDefault();
                }

                DateTime disputeDate = DateTime.Now.Date.AddYears(-1);  

                ticket.CustomerActions = !string.IsNullOrEmpty(ticket.CustomerActions) ? MSP ? (ticket.CustomerActions == "MANUAL" || ticket.CustomerActions == "M-ACCEPT" || ticket.CustomerActions == "M-REJECT") ? "W.I.P" : ticket.CustomerActions : ticket.CustomerActions : string.Empty;






                //ticket.CardException = ticket.QueryType == "CUSTOMER CLAIM" && !avoidCardNumbers.Contains(ticket.AlternateCardNo) ?
                //    context.Ticket.Where(w => w.AlternateCardNo == ticket.AlternateCardNo)
                //                      .Select(s => new { s.AlternateCardNo, s.ErrorCode, s.ErrorRemark })
                //                      .Join(context.ErrorCodePortals, outer => (outer.ErrorCode + "--" + outer.ErrorRemark), inner => (inner.errorcode + "--" + inner.Remarks), (outer, inner) => new { outer.AlternateCardNo, inner.ErrorBucket })
                //                      .Where(ww => includeErrorCode.Contains(ww.ErrorBucket))
                //                      .Select(s => s.AlternateCardNo)
                //                      .Union(context.OldRMSTickets.Where(w => w.type == "Customer Claim" && w.AlternateCardNo == ticket.AlternateCardNo && w.DispDate > disputeDate).Select(s => s.AlternateCardNo))
                //                      .Count():0 ;





                //ticket.CardException =   ticket.QueryType == "CUSTOMER CLAIM" && ? 
                //    context.Ticket.Where(w => w.QueryType == "CUSTOMER CLAIM" && w.OldTicketId == null && w.CardNo == ticket.CardNo)
                //    .Select(s => s.CardNo)
                //        .Union(
                //            context.OldRMSTickets.Where(w => w.type == "Customer Claim" && w.cardno == ticket.CardNo && w.DispDate > disputeDate)
                //            .Select(s => s.cardno)
                //            ).Count() : 0;

                ticket.CardException = ticket.CardException > 1 ? ticket.CardException : 0;
                ticket.RouteException = context.Ticket.Join(context.Atmmasters, outer => outer.ATMID, inner => inner.atmid, (outer, inner) => new { inner })
                                               .Where(w => w.inner.RouteCode == ticket.RouteCode).Count();
                ticket.ATMID = !string.IsNullOrEmpty(ticket.ATMIDs) ? ticket.ATMIDs : ticket.ATMID;
                ticket.ATMFlag = string.IsNullOrEmpty(ticket.Zone) || string.IsNullOrEmpty(ticket.RoCode) || string.IsNullOrEmpty(ticket.Location) ? false : true;
                ticket.ATMStatus = ticket.ATMFlag ? string.Empty : "ATM Not Available In Master";

                ticket.PendingAmount = ticket.AssignedTargetAmount !="0" || ticket.RecoveredAmount!="0" ? String.Format("{0:n0}", (Convert.ToInt64(Double.Parse(ticket.AssignedTargetAmount,NumberStyles.Float)) - Convert.ToInt64(Double.Parse(ticket.RecoveredAmount,NumberStyles.Float)))) : Empty_string;
                ticket.AssignedTargetAmount = ticket.AssignedTargetAmount!="0" ? String.Format("{0:n0}", Convert.ToInt64(Double.Parse(ticket.AssignedTargetAmount,NumberStyles.Float))) : Empty_string;
                ticket.RecoveredAmount = ticket.RecoveredAmount!="0" ? String.Format("{0:n0}", Convert.ToInt64(Double.Parse(ticket.RecoveredAmount,NumberStyles.Float))) :Empty_string;

                ticket.DepositAmount = ticket.DepositAmount!="0"? String.Format("{0:n0}", Convert.ToInt64(Double.Parse(ticket.DepositAmount, NumberStyles.Float))): Empty_string;
                ticket.DisputedAmount = ticket.DisputedAmount!="0"?String.Format("{0:n0}", Convert.ToInt64(Double.Parse(ticket.DisputedAmount,NumberStyles.Float))): Empty_string;
                ticket.TransAmount = ticket.TransAmount!="0"?String.Format("{0:n0}", Convert.ToInt64(Double.Parse(ticket.TransAmount,NumberStyles.Float))): Empty_string;
                ticket.CreatedDate = ticket.CreatedDate_M != null ? !dateNotToConsider.Contains(ticket.CreatedDate_M.Value.Year.ToString()) ? ticket.CreatedDate_M.Value.ToString("dd-MMM-yyyy") : Empty_string : Empty_string;
                //ticket.ModifiedDate = ticket.ModifiedDate_M!=null ?  ticket.ModifiedDate_M.ToString() != "01-01-0001 00:00:00" ? ticket.ModifiedDate_M.Value.ToShortDateString():Empty_string:Empty_string;
                ticket.DepositDate = ticket.DepositDate_M != null ? !dateNotToConsider.Contains(ticket.DepositDate_M.Value.Year.ToString()) ? ticket.DepositDate_M.Value.ToString("dd-MMM-yyyy") : Empty_string : Empty_string;
                ticket.EmailDate = ticket.EmailDate_M != null ? !dateNotToConsider.Contains(ticket.EmailDate_M.Value.Year.ToString()) ? ticket.EmailDate_M.Value.ToString("dd-MMM-yyyy") : Empty_string : Empty_string;
                ticket.EmailTime = ticket.EmailDate_M != null ? !dateNotToConsider.Contains(ticket.EmailDate_M.Value.Year.ToString()) ? ticket.EmailDate_M.Value.ToShortTimeString() : ticket.EmailDate_M.Value.ToShortTimeString() : "00:00";
                ticket.IncidentDate = ticket.IncidentDate_M != null ? !dateNotToConsider.Contains(ticket.IncidentDate_M.Value.Year.ToString())? ticket.IncidentDate_M.Value.ToString("dd-MMM-yyyy") : Empty_string:Empty_string;
                ticket.TransactionTime = ticket.TransactionTime_M != null ? !dateNotToConsider.Contains(ticket.TransactionTime_M.Value.Year.ToString()) ? ticket.TransactionTime_M.Value.ToShortTimeString() : ticket.TransactionTime_M.Value.ToShortTimeString() : "00:00";


                ticket.OpenReginRemoveFlag = context.TicketLog.Where(w => w.TicketId == ticket.TicketAttRefId && w.InternalAction == "OPEN REGION").Any();

                if (overageJustification.Contains(ticket.Justification.ToUpper()))
                { 
                    ticket.overageData = context.UtilizationData.Where(w => w.BatchID == ticket.BatchID && w.TicketId == ticket.TicketAttRefId && w.ATMID == ticket.ATMID).Select(s => new Overage
                    {
                        ID = s.ID,
                        OverageDate_M = s.EOD_Date,
                        OverageAmount = s.Overage.ToString(),
                        OverageFlag = (admin || HO) ? false : true,
                    }).OrderByDescending(o => o.ID).FirstOrDefault();

                    if (ticket.overageData != null)
                    {
                        ticket.overageData.OverageDate = ticket.overageData.OverageDate_M != null ? !dateNotToConsider.Contains(ticket.overageData.OverageDate_M.Value.Year.ToString()) ? ticket.overageData.OverageDate_M.Value.ToString("dd-MMM-yyyy") : Empty_string : Empty_string;
                        ticket.overageData.OverageAmount = ticket.overageData.OverageAmount !="0"? String.Format("{0:n0}", Convert.ToInt64(Double.Parse(ticket.overageData.OverageAmount,NumberStyles.Float))) : Empty_string;
                    }
                    
                }else if (midCashJustification.Contains(ticket.Justification.ToUpper()))
                {
                    ticket.overageData = context.UtilizationData.Where(w => w.BatchID == ticket.BatchID  && w.TicketId == ticket.TicketAttRefId && w.ATMID == ticket.ATMID).Select(s => new Overage
                    {
                        ID = s.ID,
                        OverageDate_M = s.EOD_Date,
                        OverageAmount = s.Mid_cash.ToString(),
                        OverageFlag = (admin || HO) ? false : true,
                    }).OrderByDescending(o => o.ID).FirstOrDefault();

                    if(ticket.overageData != null)
                    {
                        ticket.overageData.OverageDate = ticket.overageData.OverageDate_M != null ? !dateNotToConsider.Contains(ticket.overageData.OverageDate_M.Value.Year.ToString())  ? ticket.overageData.OverageDate_M.Value.ToString("dd-MMM-yyyy") : Empty_string : Empty_string;
                        ticket.overageData.OverageAmount = ticket.overageData.OverageAmount !="0" ? String.Format("{0:n0}", Convert.ToInt64(Double.Parse(ticket.overageData.OverageAmount, NumberStyles.Float))): Empty_string;
                    }
                    

                }else if (atmDepositJustification.Contains(ticket.Justification.ToUpper()))
                {
                    ticket.overageData = context.UtilizationData.Where(w => w.BatchID == ticket.BatchID  && w.TicketId == ticket.TicketAttRefId && w.ATMID == ticket.ATMID).Select(s => new Overage
                    {
                        ID = s.ID,
                        OverageDate_M = s.EOD_Date,
                        OverageAmount = s.ATM_Deposit.ToString(),
                        OverageFlag = (admin || HO) ? false : true,
                    }).OrderByDescending(o => o.ID).FirstOrDefault();

                    if(ticket.overageData != null)
                    {
                        ticket.overageData.OverageDate = ticket.overageData.OverageDate_M != null ? !dateNotToConsider.Contains(ticket.overageData.OverageDate_M.Value.Year.ToString()) ? ticket.overageData.OverageDate_M.Value.ToString("dd-MMM-yyyy") : Empty_string : Empty_string;
                        ticket.overageData.OverageAmount = ticket.overageData.OverageAmount != "0" ? String.Format("{0:n0}", Convert.ToInt64(Double.Parse(ticket.overageData.OverageAmount, NumberStyles.Float))): Empty_string;
                    }
                    
                }


                if (ticket.overageData == null)
                {
                    ticket.overageData = new Overage { OverageDate = string.Empty, OverageFlag = (admin) ? false : true, OverageAmount = string.Empty };
                }


                if (MSP)
                {
                    ticket.FileUplodedList = context.TicketAttachments.Where(w => w.TicketId == ticket.TicketAttRefId && w.VisibleToMSP == true)
                                .Select(s => new FileUploaded { ID = s.Id, FilePath = s.FilePath, MSPActive = s.VisibleToMSP, HOActive = s.VisibleToHO, LocationActive = s.VisibleToLocation, TypeofAttatchent = s.TypeOfAttachment }).ToList();
                }
                else if (HO || HO_Manager )
                {
                    ticket.FileUplodedList = context.TicketAttachments.Where(w => w.TicketId == ticket.TicketAttRefId && w.VisibleToHO == true)
                                .Select(s => new FileUploaded { ID = s.Id, FilePath = s.FilePath, MSPActive = s.VisibleToMSP, HOActive = s.VisibleToHO, LocationActive = s.VisibleToLocation, TypeofAttatchent = s.TypeOfAttachment }).ToList();
                }
                else if (Location || Loc_Manager)
                {
                    ticket.FileUplodedList = context.TicketAttachments.Where(w => w.TicketId == ticket.TicketAttRefId && w.VisibleToLocation == true)
                                .Select(s => new FileUploaded { ID = s.Id, FilePath = s.FilePath, MSPActive = s.VisibleToMSP, HOActive = s.VisibleToHO, LocationActive = s.VisibleToLocation, TypeofAttatchent = s.TypeOfAttachment }).ToList();
                }
                else
                {
                    ticket.FileUplodedList = context.TicketAttachments.Where(w => w.TicketId == ticket.TicketAttRefId)
                                .Select(s => new FileUploaded { ID = s.Id, FilePath = s.FilePath, MSPActive = s.VisibleToMSP, HOActive = s.VisibleToHO, LocationActive = s.VisibleToLocation, TypeofAttatchent = s.TypeOfAttachment }).ToList();
                }


                foreach (var tick in ticket.FileUplodedList)
                {
                    tick.FileTempPath = tick.FilePath != null ? tick.FilePath.Replace('/', '\\') : Empty_string;
                    tick.FileName = tick.FileTempPath != null ? tick.FileTempPath.Substring(tick.FileTempPath.LastIndexOf('\\') + 1) : Empty_string;
                }

                test.Entity = ticket;
                test.Success = true;
                test.Message = "Success";

                return test;
            }
            catch (Exception ex)
            {
                test.Entity = null;
                test.Success = false;
                test.Message = ex.InnerException.Message;

                return test;
            }
        }

        public QueryandCategoryType GetQueryandCategory(BaseRequest baseRequest)
        {
            try
            {

                QueryandCategoryType type = new QueryandCategoryType();


                type.queryType = context.Masters.Where(w => w.Type == "QueryType" && w.IsActive == true).OrderBy(o=>o.Name).Select(s => s.Name.ToUpper()).ToList();
                type.queryCategory = context.Masters.Where(w => w.Type == "QueryCategory" && w.IsActive == true).OrderBy(o => o.Name).Select(s => s.Name.ToUpper()).ToList();
                type.customerActions = context.Masters.Where(w => w.Type == "CustomerActions" && w.IsActive == true).OrderBy(o => o.Name).Select(s => s.Name.ToUpper()).ToList();
                type.internalActions = context.Masters.Where(w => w.Type == "InternalActions" && w.IsActive == true).OrderBy(o => o.Name).Select(s => s.Name.ToUpper()).ToList();

                type.cmsStatus = context.Masters.Where(w => w.Type == "CMSStatus" && w.IsActive == true).Select(s => new { s.ID, s.Name })
                                        .Join(context.Error_Role_Mappings, outer => outer.ID, inner => inner.ErrorID, (outer, inner) => new
                                        {
                                            outer.Name,
                                            inner.RoleID
                                        }).Where(ww => ww.RoleID == baseRequest.LoginEmployeeDetails.AssignedRoleID).OrderBy(o => o.Name).Select(ss => ss.Name).ToList();



                //type.errorCode = context.ErrorCode.Where(w => w.IsActive == true).GroupBy(gb=>gb.ErrorCode).Select(s=>s.Key).ToList();
                return type;
            }
            catch
            {
                throw;
            }
        }

        public QueryandCategoryType GetErrorCodeType(BaseRequest<QueryandCategoryType> baseRequest)
        {
            try
            {
                string Empty_string = string.Empty;
                QueryandCategoryType type = new QueryandCategoryType();


                if (baseRequest.Entity.errorCode == null)
                {
                    type.errorCodeList = context.ErrorCodePortals
                                                .GroupBy(gb=> new {gb.errorcode,gb.Remarks })
                                                .SelectMany(sm=>sm.Take(1))
                                                .OrderBy(o=>o.errorcode)
                                                .Select(s => !string.IsNullOrEmpty(s.errorcode) ? !string.IsNullOrEmpty(s.Remarks) ? s.errorcode + " -- " + s.Remarks : s.errorcode + Empty_string : Empty_string)
                                                .ToList();
                }
                else
                {
                    type = context.ErrorCodePortals.Where(w => (w.errorcode + " -- " + w.Remarks == baseRequest.Entity.errorCode || w.errorcode + w.Remarks == baseRequest.Entity.errorCode))
                        //.GroupBy(gb => new { gb.Type, gb.ErrorBucket })
                        .Select(s => new QueryandCategoryType { errorType = s.type, errorBucket = s.ErrorBucket }).FirstOrDefault();
                }


                //if(baseRequest.Entity.errorCode == null)
                //{
                //    type.errorCodeList = context.ErrorCode.Where(w => w.IsActive == true).GroupBy(gb => gb.ErrorCode).Select(s => s.Key).ToList();
                //}else if(baseRequest.Entity.errorCode != null && baseRequest.Entity.errorRemarks == null)
                //{
                //    type.errorRemarksList = context.ErrorCode.Where(w => w.ErrorCode == baseRequest.Entity.errorCode && w.IsActive == true).GroupBy(gb=>gb.Remarks).Select(s => s.Key).ToList();
                //}else if(baseRequest.Entity.errorCode !=null && baseRequest.Entity.errorRemarks != null)
                //{
                //    if (baseRequest.Entity.errorRemarks.Equals("null"))
                //    {
                //        baseRequest.Entity.errorRemarks = null;
                //    }
                //    else if (baseRequest.Entity.errorRemarks.Equals(" "))
                //    {
                //        baseRequest.Entity.errorRemarks = "";
                //    }
                //    type = context.ErrorCode.Where(w => w.ErrorCode == baseRequest.Entity.errorCode && w.Remarks == baseRequest.Entity.errorRemarks && w.IsActive == true)
                //        .GroupBy(gb=> new { gb.Type,gb.ErrorBucket} )
                //        .Select(s => new QueryandCategoryType {errorType =s.Key.Type,errorBucket=s.Key.ErrorBucket }).FirstOrDefault();
                //}

                return type;
            }
            catch
            {
                throw;
            }
        }   

        public QueryandCategoryType GetMasterDataDetails(BaseRequest<QueryandCategoryType> baseRequest)
        {
            try
            {
                DateTime incicentDateTime = Convert.ToDateTime(baseRequest.Entity.IncidentDate);
                List<Atmmaster> atmmasters = new List<Atmmaster>();

                atmmasters = context.Atmmasters.Where(w => w.atmcode == baseRequest.Entity.AtmID).Select(s =>s).ToList();

                foreach(var aa in atmmasters)
                {
                    aa.HandOverDate = aa.HandOverDate != null ? aa.HandOverDate : DateTime.Now.Date;
                }

                return atmmasters.Where(ww => incicentDateTime.Date >= ww.TakeOverDate.Value.Date  &&  incicentDateTime <= ww.HandOverDate.Value.Date)
                          .Select(ss => new QueryandCategoryType { Bank = ss.BankName, Account = ss.MSP, Location = ss.LocationName }).FirstOrDefault();
            }
            catch
            {
                throw;
            }
        }

        public QueryandCategoryType GetAcc_RegJustification(BaseRequest<TicketDTO> baseRequest)
        {
            try
            {
                QueryandCategoryType justification = new QueryandCategoryType();
                bool Location_User = baseRequest.LoginEmployeeDetails.AssignedRoleID == 4;


                if (!Location_User)
                {
                    if (baseRequest.Entity.Status == "M-REJECT" || baseRequest.Entity.Status == "REJECT")
                    {
                        justification.justification = context.Masters.Where(w => w.IsActive == true && w.Type == "QueryType" && w.Name == baseRequest.Entity.QueryType).Select(s => new { s.Code })
                        .Join(context.Masters, outer => outer.Code, inner => inner.ParentCode, (outer, inner) => new { inner })
                                           .Where(ww => ww.inner.Type == "RejectionJustification" && ww.inner.IsActive == true)
                                           .OrderBy(o=>o.inner.Name)
                                           .Select(s => s.inner.Name).ToList();

                        justification.cmsStatus = context.Masters.Where(w => w.Type == "CMSStatus" && w.IsActive == true).Select(s => new { s.ID, s.Name })
                                        .Join(context.Error_Role_Mappings, outer => outer.ID, inner => inner.ErrorID, (outer, inner) => new
                                        {
                                            outer.Name,
                                            inner.RoleID
                                        }).Where(ww => ww.RoleID == baseRequest.LoginEmployeeDetails.AssignedRoleID).OrderBy(o=>o.Name).Select(ss => ss.Name).ToList();

                    }
                    else if (baseRequest.Entity.Status == "M-ACCEPT" || baseRequest.Entity.Status == "ACCEPT")
                    {
                        justification.justification = context.Masters.Where(w => w.IsActive == true && w.Type == "QueryType" && w.Name == baseRequest.Entity.QueryType).Select(s => new { s.Code })
                        .Join(context.Masters, outer => outer.Code, inner => inner.ParentCode, (outer, inner) => new { inner })
                                           .Where(ww => ww.inner.Type == "AcceptanceJustification" && ww.inner.IsActive == true)
                                           .OrderBy(o => o.inner.Name)
                                           .Select(s => s.inner.Name).ToList();


                        justification.cmsStatus = context.Masters.Where(w => w.Type == "CMSStatus" && w.IsActive == true).Select(s => new { s.ID, s.Name })
                                        .Join(context.Error_Role_Mappings, outer => outer.ID, inner => inner.ErrorID, (outer, inner) => new
                                        {
                                            outer.Name,
                                            inner.RoleID
                                        }).Where(ww => ww.RoleID == baseRequest.LoginEmployeeDetails.AssignedRoleID && ww.Name == "TAKEN UP FOR RECOVERY").OrderBy(o => o.Name).Select(ss => ss.Name).ToList();
                    }
                    else
                    {
                        justification.justification = context.Masters.Where(w => w.IsActive == true && w.Type == "QueryType" && w.Name == baseRequest.Entity.QueryType).Select(s => new { s.Code })
                                          .Join(context.Masters, outer => outer.Code, inner => inner.ParentCode, (outer, inner) => new { inner })
                                          .Where(ww => (ww.inner.Type == "RejectionJustification" || ww.inner.Type == "AcceptanceJustification") && ww.inner.IsActive == true)
                                          .OrderBy(o => o.inner.Name)
                                          .Select(s => s.inner.Name).ToList();


                        justification.cmsStatus = context.Masters.Where(w => w.Type == "CMSStatus" && w.IsActive == true).Select(s => new { s.ID, s.Name })
                                        .Join(context.Error_Role_Mappings, outer => outer.ID, inner => inner.ErrorID, (outer, inner) => new
                                        {
                                            outer.Name,
                                            inner.RoleID
                                        }).Where(ww => ww.RoleID == baseRequest.LoginEmployeeDetails.AssignedRoleID).OrderBy(o => o.Name).Select(ss => ss.Name).ToList();
                    }
                }
                else
                {
                    justification.territoryRejectionJustificationOptions = context.Masters.Where(w => w.IsActive == true && w.Type == "QueryType" && w.Name == baseRequest.Entity.QueryType).Select(s => new { s.Code })
                                          .Join(context.Masters, outer => outer.Code, inner => inner.ParentCode, (outer, inner) => new { inner })
                                          .Where(ww => (ww.inner.Type == "RejectionJustification" || ww.inner.Type == "AcceptanceJustification") && ww.inner.IsActive == true)
                                          .OrderBy(o => o.inner.Name)
                                          .Select(s => s.inner.Name).ToList();


                    justification.cmsStatus = context.Masters.Where(w => w.Type == "CMSStatus" && w.IsActive == true).Select(s => new { s.ID, s.Name })
                                    .Join(context.Error_Role_Mappings, outer => outer.ID, inner => inner.ErrorID, (outer, inner) => new
                                    {
                                        outer.Name,
                                        inner.RoleID
                                    }).Where(ww => ww.RoleID == baseRequest.LoginEmployeeDetails.AssignedRoleID).OrderBy(o => o.Name).Select(ss => ss.Name).ToList();
                }

                 return justification;
            }
            catch
            {
                throw;
            }
        }

        public BaseResponse UpdateTicket(BaseRequest<UpdateTicketModel> baseRequest)
        {
            try
            {
                CommonFilterRepository common = new CommonFilterRepository();
                UpdateTicketModel ticketDetails = new UpdateTicketModel();
                BaseResponse baseResponse = new BaseResponse();

                var Admin_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 1);
                var MSP_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 2);
                var HO_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 3);
                //var Location_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 4);
                string userToAssign = string.Empty;


                baseRequest.Entity.ErrorCode = baseRequest.Entity.ErrorCode != null ? baseRequest.Entity.ErrorCode : string.Empty;
                baseRequest.Entity.ErrorRemarks = baseRequest.Entity.ErrorRemarks != null ? baseRequest.Entity.ErrorRemarks : string.Empty;

                ticketDetails = TicketDetails(baseRequest.Entity.TicketId);


                if (baseRequest.Entity.CMSStatus.ToUpper() != "closed".ToUpper() && baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") != "TAKENUPFORRECOVERY")
                {
                    //if (Admin_User || HO_User)
                    //{
                    #region Location user on basis of ticket in his bin
                    baseRequest.Entity.AssignedTo = context.Employee_Hierarchy
                                                        .Join(context.Ticket, outer => outer.EmployeeCode, inner => inner.AssignedTo,
                                                        (outer, inner) => new { outer, inner })
                                                        .Join(context.Employee_Role, outer1 => outer1.inner.AssignedTo, inner1 => inner1.Type_EmpCode,
                                                        (outer1, inner1) => new { outer1, inner1 })
                                                        .Where(w => w.outer1.outer.Region_code == ticketDetails.RoCode && w.outer1.outer.Loc_Code == ticketDetails.Location && w.outer1.outer.Hub_Location_Code == ticketDetails.HubLocaation
                                                                   && w.inner1.RoleCode == 4 && w.inner1.RightsCode == 2)
                                                        .GroupBy(gb => gb.outer1.inner.AssignedTo)
                                                        .SelectMany(c => c.Take(1))
                                                        .Select(s => s.outer1.inner.AssignedTo).FirstOrDefault();

                    //baseRequest.Entity.AssignedTo = context.Employee_Hierarchy.Where(w => w.Region_code == ticketDetails.RoCode && w.Loc_Code == ticketDetails.Location && w.IsActive == true)
                    //                                  .GroupJoin(context.Ticket, outer => outer.EmployeeCode, inner => inner.AssignedTo, (outer, inner) => new { outer.EmployeeCode, inner })
                    //                                  .GroupBy(gb => gb.EmployeeCode)
                    //                                  .SelectMany(c => c.Take(1))
                    //                                  .Select(s => new { Emp = s.EmployeeCode, Count = s.inner.Select(ss => ss.TicketID).Count() })
                    //                                  .OrderBy(ob => ob.Count).Select(ss => ss.Emp).FirstOrDefault();

                    baseRequest.Entity.AssignedTo = baseRequest.Entity.AssignedTo == null ? context.Employee_Role.Where(w => w.RoleCode == 4 && w.RightsCode == 2).OrderByDescending(w => w.ID).Select(s => s.Type_EmpCode).FirstOrDefault() : baseRequest.Entity.AssignedTo;
                    //baseRequest.Entity.AssignedTo = "9611247";
                    #endregion
                    //}
                    //else if (Location_User)
                    //{
                    //    baseRequest.Entity.AssignedTo = context.Employee_Hierarchy
                    //                                        .Join(context.Ticket, outer => outer.EmployeeCode, inner => inner.AssignedTo,
                    //                                        (outer, inner) => new { outer, inner })
                    //                                        .Join(context.Employee_Role, outer1 => outer1.inner.AssignedTo, inner1 => inner1.Type_EmpCode,
                    //                                        (outer1, inner1) => new { outer1, inner1 })
                    //                                        .Where(w => w.outer1.outer.Region_code == ticketDetails.RoCode && w.outer1.outer.Loc_Code == ticketDetails.Location && w.outer1.outer.Hub_Location_Code == ticketDetails.HubLocaation
                    //                                                   && w.inner1.RoleCode == 3 && w.inner1.RightsCode == 2)
                    //                                        .GroupBy(gb => gb.outer1.inner.AssignedTo)
                    //                                        .SelectMany(c => c.Take(1))
                    //                                        .Select(s => s.outer1.inner.AssignedTo).FirstOrDefault();

                    //    baseRequest.Entity.AssignedTo = baseRequest.Entity.AssignedTo == null ? context.Employee_Role.Where(w => w.RoleCode == 3 && w.RightsCode == 2).OrderByDescending(w => w.ID).Select(s => s.Type_EmpCode).FirstOrDefault() : baseRequest.Entity.AssignedTo;
                    //}
                }
                else
                {
                    #region Assigne the Ticket to same user itself
                    //Assigne to the respective Bucket

                    baseRequest.Entity.AssignedTo = baseRequest.LoginEmployeeDetails.EmpCode;
                    baseRequest.Entity.AssigneToRecovery = context.Employee_Hierarchy.Where(w => w.Region_code == ticketDetails.RoCode && w.Loc_Code == ticketDetails.Location && w.IsActive == true)
                                                                          .GroupJoin(context.Ticket, outer => outer.EmployeeCode, inner => inner.AssignedTo, (outer, inner) => new { outer, inner })
                                                                          .GroupBy(gb => gb.outer.EmployeeCode)
                                                                          .SelectMany(c => c.Take(1))
                                                                          .Select(s => s.outer.EmployeeCode).FirstOrDefault();


                    //baseRequest.Entity.AssignedTo = context.Employee_Hierarchy.Where(w => w.Region_code == ticketDetails.RoCode && w.Loc_Code == ticketDetails.Location && w.IsActive == true)
                    //                                      .GroupJoin(context.Ticket, outer => outer.EmployeeCode, inner => inner.AssignedTo, (outer, inner) => new { outer, inner })
                    //                                      .GroupBy(gb => gb.outer.EmployeeCode)
                    //                                      .SelectMany(c => c.Take(1))
                    //                                      .Select(s => s.outer.EmployeeCode).FirstOrDefault();


                    baseRequest.Entity.AssigneToRecovery = baseRequest.Entity.AssigneToRecovery == null ? context.Employee_Role.Where(w =>w.RoleCode == 4 && w.RightsCode == 2).OrderByDescending(w=>w.ID).Select(s => s.Type_EmpCode).FirstOrDefault() : baseRequest.Entity.AssigneToRecovery;

                    #endregion
                }



                switch (baseRequest.Entity.CustomerActions.ToUpper())
                {
                    case "ACCEPT":
                    //case "M-ACCEPT":
                        if (baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") == "TAKENUPFORRECOVERY")
                        {
                            baseResponse = SavingAllocationOfTicket(baseRequest, ticketDetails);
                            TakenUpForRecover(baseRequest);
                        }
                        break;

                    case "REJECT":
                    //case "M-REJECT":
                        if (baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") == "TAKENUPFORRECOVERY")
                        {
                            baseResponse = SavingAllocationOfTicket(baseRequest, ticketDetails);
                            TakenUpForRecover(baseRequest);
                        }
                        else if (baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") == "OPENREGION")
                        {
                            baseResponse = SavingAllocationOfTicket(baseRequest, ticketDetails);

                        }
                        else if (baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") == "CLOSED")
                        {
                            baseResponse = SavingAllocationOfTicket(baseRequest, ticketDetails);
                        }
                        break;


                    case "MANUAL":
                        if (baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") == "TAKENUPFORRECOVERY")
                        {
                            baseResponse = SavingAllocationOfTicket(baseRequest, ticketDetails);
                            TakenUpForRecover(baseRequest);
                        }
                        else if (baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") == "OPENREGION")
                        {
                            baseResponse = SavingAllocationOfTicket(baseRequest, ticketDetails);
                        }
                        else if (baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") == "CLOSED")
                        {
                            baseResponse = SavingAllocationOfTicket(baseRequest, ticketDetails);
                        }
                        break;
                }












                //Update_Logs query_Logs = common.Update_Logs(baseRequest, ticketDetails);

                //TicketLog ticketLog = new TicketLog()
                //{
                //    MSP = ticketDetails.MSP,
                //    BatchID = ticketDetails.BatchID,
                //    TicketId = ticketDetails.TicketId,
                //    Status = ticketDetails.CustomerActions,
                //    DisputeRejected = ticketDetails.DisputedRejection,
                //    Justification = ticketDetails.Justification,
                //    InternalAction = ticketDetails.CMSStatus,
                //    CustCommentsType = Admin_User ? "ADMIN" : MSP_User ? "MSP" : HO_User ? "HO" : Location_User ? "LOCATION" : "Others",
                //    CustCommentsBy = baseRequest.LoginEmployeeDetails.EmpCode,
                //    CustComments = query_Logs.UpdateLogs_Value,
                //    CreatedBy = baseRequest.LoginEmployeeDetails.EmpCode,
                //    CreatedDate = DateTime.Now,
                //    ModifiedBy = null,
                //    ModifiedDate = null,
                //    AssignedTo = ticketDetails.AssignedTo,
                //    Source = "WEB"
                //};


                //context.TicketLog.Add(ticketLog);

                //int a = 0;

                //if (!string.IsNullOrEmpty(query_Logs.UpdateQuery_Value))
                //{
                //    context.Database.ExecuteSqlCommand(query_Logs.UpdateQuery_Value);
                //    a = context.SaveChanges();
                //}



                //if (HO_User)
                //{
                //    if (baseRequest.Entity.CMSStatus == "close")
                //    {

                //    }
                //    else
                //    {
                //        //var Locations = context.Atmmasters.Where(w => w.atmcode == baseRequest.Entity.ATMID && w.MSP == baseRequest.Entity.MSP && w.BankName == baseRequest.Entity.Bank)
                //        //                       .Select(s => new { s.RoCode, s.LocationCode, s.HubLocationCode }).FirstOrDefault();

                //        //string query = string.Format("Select AssignedTo from (select DISTINCT t.* from employee_hierarchy b inner join ticket t on b.employeecode = t.assignedto inner join employee_role r on t.AssignedTo = r.Type_EmpCode where r.RoleCode = 4 and b.Region_Code = {0} and b.Loc_Code = {1} and Sub_Location_Code = {2}) as sub GROUP BY sub.AssignedTo LIMIT 1", Locations.RoCode, Locations.LocationCode, Locations.HubLocationCode);

                //        //var a = context.Database.SqlQuery<string>(query).FirstOrDefault();                                   

                //    }


                //}
                //else if(Location_User)
                //{

                //}





                return baseResponse;
            }
            catch
            {
                throw;
            }
        }

        public BaseResponse UpdateTicketLocation(BaseRequest<UpdateTicketModel> baseRequest)
        {
            try
            {
                CommonFilterRepository common = new CommonFilterRepository();
                UpdateTicketModel ticketDetails = new UpdateTicketModel();
                BaseResponse baseResponse = new BaseResponse();

                var Admin_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 1);
                var MSP_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 2);
                var HO_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 3);
                var Location_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 4);
                string userToAssign = string.Empty;

                //baseRequest.Entity.ErrorCode = baseRequest.Entity.ErrorCode != null ? baseRequest.Entity.ErrorCode : string.Empty;
                //baseRequest.Entity.ErrorRemarks = baseRequest.Entity.ErrorRemarks != null ? baseRequest.Entity.ErrorRemarks : string.Empty;

                ticketDetails = TicketDetails(baseRequest.Entity.TicketId);

                //context.Atmmasters.Where(w => w.atmcode == baseRequest.Entity.ATMID && w.AccountName == baseRequest.Entity.MSP && w.BankName == baseRequest.Entity.Bank)
                //                            .Select(s => new { s.RoCode, s.LocationCode, s.HubLocationCode }).FirstOrDefault();

                //string query = string.Format("Select AssignedTo from (select DISTINCT t.* from employee_hierarchy b inner join ticket t on b.employeecode = t.assignedto inner join employee_role r on t.AssignedTo = r.Type_EmpCode where r.RoleCode = 4 and b.Region_Code = '{0}' and b.Loc_Code = '{1}' and b.Hub_Location_Code = '{2}') as sub GROUP BY sub.AssignedTo LIMIT 1", Locations.RoCode, Locations.LocationCode, Locations.HubLocationCode);

                //var a = context.Database.SqlQuery<string>(query).ToList();

                if (baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") != "TAKENUPFORRECOVERY")
                {
                    //if (Admin_User || HO_User)
                    //{
                    #region Location user on basis of ticket in his bin
                    //baseRequest.Entity.AssignedTo = context.Employee_Hierarchy
                    //                                    .Join(context.Ticket, outer => outer.EmployeeCode, inner => inner.AssignedTo,
                    //                                    (outer, inner) => new { outer, inner })
                    //                                    .Join(context.Employee_Role, outer1 => outer1.inner.AssignedTo, inner1 => inner1.Type_EmpCode,
                    //                                    (outer1, inner1) => new { outer1, inner1 })
                    //                                    .Where(w => w.outer1.outer.Region_code == ticketDetails.RoCode && w.outer1.outer.Loc_Code == ticketDetails.Location && w.outer1.outer.Hub_Location_Code == ticketDetails.HubLocaation
                    //                                               && w.inner1.RoleCode == 4 && w.inner1.RightsCode == 2)
                    //                                    .GroupBy(gb => gb.outer1.inner.AssignedTo)
                    //                                    .SelectMany(c => c.Take(1))
                    //                                    .Select(s => s.outer1.inner.AssignedTo).FirstOrDefault();





                    //baseRequest.Entity.AssignedTo = baseRequest.Entity.AssignedTo == null ? context.Employee_Role.Where(w =>w.RoleCode == 4 && w.RightsCode == 2).OrderByDescending(w=>w.ID).Select(s => s.Type_EmpCode).FirstOrDefault() : baseRequest.Entity.AssignedTo;
                    //baseRequest.Entity.AssignedTo = "9611247";
                    //    #endregion
                    //}
                    //else if (Location_User)
                    //{
                    //baseRequest.Entity.AssignedTo = context.Employee_Hierarchy
                    //                                    .Join(context.Ticket, outer => outer.EmployeeCode, inner => inner.AssignedTo,
                    //                                    (outer, inner) => new { outer, inner })
                    //                                    .Join(context.Employee_Role, outer1 => outer1.inner.AssignedTo, inner1 => inner1.Type_EmpCode,
                    //                                    (outer1, inner1) => new { outer1, inner1 })
                    //                                    .Where(w => w.outer1.outer.Region_code == ticketDetails.RoCode && w.outer1.outer.Loc_Code == ticketDetails.Location && w.outer1.outer.Hub_Location_Code == ticketDetails.HubLocaation
                    //                                               && w.inner1.RoleCode == 3 && w.inner1.RightsCode == 2)
                    //                                    .GroupBy(gb => gb.outer1.inner.AssignedTo)
                    //                                    .SelectMany(c => c.Take(1))
                    //                                    .Select(s => s.outer1.inner.AssignedTo).FirstOrDefault();

                    //baseRequest.Entity.AssignedTo = baseRequest.Entity.AssignedTo == null ? context.Employee_Role.Where(w => w.RoleCode == 3 && w.RightsCode == 2).OrderByDescending(w => w.ID).Select(s => s.Type_EmpCode).FirstOrDefault() : baseRequest.Entity.AssignedTo;
                    //}
                    baseRequest.Entity.AssignedTo = context.Ticket.Where(w=>w.TicketID == baseRequest.Entity.TicketId).Select(s => s.HoOwner).FirstOrDefault();
                    baseRequest.Entity.AssignedTo = baseRequest.Entity.AssignedTo == null ? context.Employee_Role.Where(w => w.RoleCode == 3 && w.RightsCode == 2).OrderByDescending(w => w.ID).Select(s => s.Type_EmpCode).FirstOrDefault() : baseRequest.Entity.AssignedTo;
                    #endregion
                }
                else
                {
                    #region
                    //Assigne to the respective Bucket
                    baseRequest.Entity.AssignedTo = context.Ticket.Where(w => w.TicketID == baseRequest.Entity.TicketId).Select(s => s.HoOwner).FirstOrDefault();
                    ////baseRequest.Entity.AssignedTo = context.Employee_Hierarchy
                    ////                                    .Join(context.Ticket, outer => outer.EmployeeCode, inner => inner.AssignedTo,
                    ////                                    (outer, inner) => new { outer, inner })
                    ////                                    .Join(context.Employee_Role, outer1 => outer1.inner.AssignedTo, inner1 => inner1.Type_EmpCode,
                    ////                                    (outer1, inner1) => new { outer1, inner1 })
                    ////                                    .Where(w => w.outer1.outer.Region_code == ticketDetails.RoCode && w.outer1.outer.Loc_Code == ticketDetails.Location && w.outer1.outer.Hub_Location_Code == ticketDetails.HubLocaation
                    ////                                               && w.inner1.RoleCode == 3 && w.inner1.RightsCode == 2)
                    ////                                    .GroupBy(gb => gb.outer1.inner.AssignedTo)
                    ////                                    .SelectMany(c => c.Take(1))
                    ////                                    .Select(s => s.outer1.inner.AssignedTo).FirstOrDefault();

                    ////baseRequest.Entity.AssignedTo = baseRequest.Entity.AssignedTo == null ? context.Employee_Role.Where(w => w.RoleCode == 3 && w.RightsCode == 2).OrderByDescending(w => w.ID).Select(s => s.Type_EmpCode).FirstOrDefault() : baseRequest.Entity.AssignedTo;

                    //baseRequest.Entity.AssignedTo = context.Ticket.Where(w => w.TicketID == baseRequest.Entity.TicketId).Select(s => s.LocOwner).FirstOrDefault();
                    baseRequest.Entity.AssigneToRecovery = baseRequest.LoginEmployeeDetails.EmpCode;
                    #endregion
                }



                switch (baseRequest.Entity.CustomerActions.ToUpper())
                {
                    //case "ACCEPT":
                    //case "M-ACCEPT":
                    //    if (baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") == "TAKENUPFORRECOVERY")
                    //    {
                    //        TakenUpForRecover(baseRequest.Entity);
                    //        baseResponse = SavingAllocationOfTicket(baseRequest, ticketDetails);
                    //    }
                    //    break;

                    case "REJECT":
                    
                        if (baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") == "TAKENUPFORRECOVERY")
                        {
                            baseResponse = SavingAllocationOfTicket(baseRequest, ticketDetails);
                            TakenUpForRecover(baseRequest);
                        }
                        else if (baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") == "SUPPORTINGATTACHED")
                        {
                            baseResponse = SavingAllocationOfTicket(baseRequest, ticketDetails);

                        }
                        else
                        {
                            baseResponse = new BaseResponse { Message = "Select CMS Status Either TAKEN UP FOR RECOVERY Or SUPPORTING ATTACHED", Success = false };
                        }
                        break;



                    case "MANUAL":
                        if (baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") == "TAKENUPFORRECOVERY")
                        {
                            baseResponse = SavingAllocationOfTicket(baseRequest, ticketDetails);
                            TakenUpForRecover(baseRequest);
                        }
                        else if (baseRequest.Entity.CMSStatus.ToUpper().Replace(" ", "") == "SUPPORTINGATTACHED")
                        {
                            baseResponse = SavingAllocationOfTicket(baseRequest, ticketDetails);
                        }
                        else
                        {
                            baseResponse = new BaseResponse { Message = "Select CMS Status Either TAKEN UP FOR RECOVERY Or SUPPORTING ATTACHED", Success = false };
                        }
                        break;
                }

                return baseResponse;
            }
            catch
            {
                throw;
            }
        }

        public List<TicketExport_Model> ExportTickets(BaseRequest<JqxGridPaginationModel> baseRequest)
        {
            List<TicketExport_Model> ticketExports = new List<TicketExport_Model>();

            var Admin_User = baseRequest.LoginEmployeeDetails.AssignedRoleID == 1;
            var MSP_User = baseRequest.LoginEmployeeDetails.AssignedRoleID == 2;
            var HO_User = baseRequest.LoginEmployeeDetails.AssignedRoleID == 3;
            var Location_User = baseRequest.LoginEmployeeDetails.AssignedRoleID == 4;
            var HO_Manager = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 5);
            var Loc_Manager = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 6);
            context.Database.CommandTimeout = 7200;
            List<string> regionList;
            List<string> locationList;
            List<string> Justification = new List<string> { "OVERAGE REPORTED", "PARTIAL - OVERAGE REPORTED", "SWITCH INCREASED", "PARTIAL - SWITCH INCREASED", "PARTIAL - CASH DEPOSITED", "CASH DEPOSITED" };
            List<string> overageJustification = new List<string> { "OVERAGE REPORTED", "PARTIAL - OVERAGE REPORTED" };
            List<string> midCashJustification = new List<string> { "SWITCH INCREASED", "PARTIAL - SWITCH INCREASED" };
            List<string> atmDepositJustification = new List<string> { "PARTIAL - CASH DEPOSITED", "CASH DEPOSITED" };


            if (Admin_User || HO_User || MSP_User || HO_Manager)
            {
                regionList = new List<string> { "" };
                locationList = new List<string> { "" };
            }
            else
            {
                regionList = context.Employee_Hierarchy
                                        .Where(w => w.EmployeeCode == baseRequest.LoginEmployeeDetails.EmpCode && w.IsActive == true)
                                        .Select(s => s.Region_code)
                                        .ToList();

                //if (regionList.Count==0)
                //{
                //    regionList = new List<string> { "" };
                //    Admin_User = true;
                //    MSP_User = false;
                //    Location_User = false;
                //}


                locationList = context.Employee_Hierarchy
                                        .Where(w => w.EmployeeCode == baseRequest.LoginEmployeeDetails.EmpCode && w.IsActive == true)
                                        .Select(s => s.Loc_Code)
                                        .ToList();
                //if (locationList.Count==0){
                //    locationList = new List<string> { "" };
                //    Admin_User = true;
                //    MSP_User = false;
                //    Location_User = false;
                //}
            }

            if (baseRequest.Entity.filterGroups != null)
            {
                string MSP = string.Empty; bool MSP_Flag = false;
                string TicketID = string.Empty; bool TicketID_Flag = false;
                string BatchID = string.Empty; bool BatchID_Flag = false;
                string AtmID = string.Empty; bool AtmID_Flag = false;
                DateTime? FromDate = null; DateTime? ToDate = null; bool Date_Flag = false;
                
                foreach (var filterGroups in baseRequest.Entity.filterGroups)
                {
                    foreach (var filter in filterGroups.filters)
                    {
                        switch (filter.field)
                        {
                            case "MSP": MSP = filter.value; MSP_Flag = true; break;
                            case "TicketID": TicketID = filter.value; TicketID_Flag = true; break;
                            case "BatchID": BatchID = filter.value; BatchID_Flag = true; break;
                            case "AtmID": AtmID = filter.value; AtmID_Flag = true; break;
                            case "FromDate": FromDate = Convert.ToDateTime(filter.value); Date_Flag = true; break;
                            case "ToDate": ToDate = Convert.ToDateTime(filter.value).AddDays(1); Date_Flag = true; break;
                        }
                    }


                }

                ticketExports = context.Ticket
                                       .Where(ww =>
                                       ((TicketID_Flag == false) || (TicketID_Flag && ww.TicketID == TicketID))
                                        &&
                                       ((MSP_Flag == false) || (MSP_Flag && ww.MSP == MSP))
                                        &&
                                       ((BatchID_Flag == false) || (BatchID_Flag && ww.BatchID == BatchID))
                                       &&
                                       ((AtmID_Flag == false) || (AtmID_Flag && ww.ATMID == AtmID))
                                       &&
                                       ((Date_Flag == false) || (Date_Flag && (ww.CreatedDate >= FromDate && ww.CreatedDate <= ToDate)))
                                       )
                                       //.Where(w =>
                                       //        (Admin_User) ||
                                       //        ((MSP_User) &&
                                       //        w.MSP == baseRequest.LoginEmployeeDetails.EmpCode
                                       //        )
                                       //        ||
                                       //        (
                                       //        (HO_User) &&
                                       //        w.AssignedTo == baseRequest.LoginEmployeeDetails.EmpCode
                                       //        ) ||
                                       //                     (
                                       //                         (Location_User) &&
                                       //                             (regionList.Contains(w.Region)) && locationList.Contains(w.Location)
                                       //                     && (w.AssignedTo == baseRequest.LoginEmployeeDetails.EmpCode)
                                       //                     )
                                       //           ||
                                       //           (
                                       //           (HO_Manager)
                                       //           )
                                       //           ||
                                       //           (
                                       //           (Loc_Manager) && (regionList.Contains(w.Region)) && locationList.Contains(w.Location)
                                       //           )
                                       // )
                       .GroupJoin(context.Batch, outer => outer.BatchID, inner => inner.BatchID, (outer, inner) => new { outer, inner })
                       .GroupJoin(context.UtilizationData, outer4 => outer4.outer.TicketAttRefId, inner4 => inner4.TicketId, (outer4, inner4) => new { outer4, inner4 })
                       .GroupJoin(context.Atmmasters, outer1 => outer1.outer4.outer.ATMID, inner1 => inner1.atmcode, (outer1, inner1) => new { outer1, inner1 })
                       .GroupJoin(context.ErrorCodePortals, outer2 => (outer2.outer1.outer4.outer.ErrorCode + "--" + outer2.outer1.outer4.outer.ErrorRemark), inner2 => (inner2.errorcode + "--" + inner2.Remarks), (outer2, inner2) => new { outer2, inner2 })
                       .GroupJoin(context.Employee_Role, outer3 => outer3.outer2.outer1.outer4.outer.AssignedTo, inner3 => inner3.Type_EmpCode, (outer3, inner3) => new { outer3, inner3 })
                       .Select(s => new TicketExport_Model
                       {
                           Batch_ID = s.outer3.outer2.outer1.outer4.outer.BatchID,
                           Email_Subject = s.outer3.outer2.outer1.outer4.inner.Where(ww => ww.BatchID == s.outer3.outer2.outer1.outer4.outer.BatchID).Select(ss => ss.EmailSubject != null ? ss.EmailSubject : string.Empty).FirstOrDefault(),
                           Email_Adderss = s.outer3.outer2.outer1.outer4.inner.Where(ww => ww.BatchID == s.outer3.outer2.outer1.outer4.outer.BatchID).Select(ss => ss.FromEmail != null ? ss.FromEmail : string.Empty).FirstOrDefault(),
                           Email_Date = s.outer3.outer2.outer1.outer4.inner.Where(ww => ww.BatchID == s.outer3.outer2.outer1.outer4.outer.BatchID).Select(ss => ss.Date != null ? ss.Date : null).FirstOrDefault().ToString(),
                           Email_Time = s.outer3.outer2.outer1.outer4.inner.Where(ww => ww.BatchID == s.outer3.outer2.outer1.outer4.outer.BatchID).Select(ss => ss.Date != null ? ss.Date : null).FirstOrDefault().ToString(),
                           CRA = s.outer3.outer2.inner1.Where(w => w.status == "Active").Select(ss => ss.Company).FirstOrDefault(),
                           CMS_DisputeID = s.outer3.outer2.outer1.outer4.outer.TicketID,
                           Query_Type = s.outer3.outer2.outer1.outer4.outer.QueryType,
                           Query_Category = s.outer3.outer2.outer1.outer4.outer.QueryCategory,
                           ATM_ID = s.outer3.outer2.outer1.outer4.outer.ATMID,
                           ATM_Type = s.outer3.outer2.inner1.Where(w => w.status == "Active").Select(ss => ss.AtmType).FirstOrDefault(),
                           MSP = s.outer3.outer2.inner1.Where(w => w.status == "Active").Select(ss => ss.MSP).FirstOrDefault(),
                           Bank_Name = s.outer3.outer2.inner1.Where(w => w.status == "Active").Select(ss => ss.BankName).FirstOrDefault(),
                           Territory = s.outer3.outer2.inner1.Where(w => w.status == "Active").Select(ss => ss.RoName).FirstOrDefault(),
                           Location = s.outer3.outer2.inner1.Where(w => w.status == "Active").Select(ss => ss.LocationName).FirstOrDefault(),
                           Incident_Date = s.outer3.outer2.outer1.outer4.outer.IncidentDate.ToString(),
                           Dispute_Amount = s.outer3.outer2.outer1.outer4.outer.DisputedAmount.ToString(),
                           Reference_Number = s.outer3.outer2.outer1.outer4.outer.ReferenceNo,
                           Card_Number = s.outer3.outer2.outer1.outer4.outer.CardNo,
                           Account_Number = s.outer3.outer2.outer1.outer4.outer.AccountNo,
                           Transaction_Amount = s.outer3.outer2.outer1.outer4.outer.TransAmount.ToString(),
                           Transaction_Number = s.outer3.outer2.outer1.outer4.outer.TransactionNo,
                           Transaction_Time = s.outer3.outer2.outer1.outer4.outer.TransactonTime.ToString(),
                           Error_Code = s.outer3.outer2.outer1.outer4.outer.ErrorCode + " -- " + s.outer3.outer2.outer1.outer4.outer.ErrorRemark,
                           Error_Bucket = s.outer3.inner2.Select(ss => ss.ErrorBucket).FirstOrDefault(),
                           CMS_JUTIFICATION = s.outer3.outer2.outer1.outer4.outer.Justification,
                           CMS_STATUS = s.outer3.outer2.outer1.outer4.outer.Status,
                           Internal_Status = s.outer3.outer2.outer1.outer4.outer.CMSStatus,
                           Deposited_Date = Justification.Contains(s.outer3.outer2.outer1.outer4.outer.Justification.ToUpper()) ?
                    s.outer3.outer2.outer1.inner4.Where(ww => ww.TicketId == s.outer3.outer2.outer1.outer4.outer.TicketAttRefId).Select(ss => ss.EOD_Date.ToString()).FirstOrDefault()
                    : string.Empty,
                           Deposited_Amount = overageJustification.Contains(s.outer3.outer2.outer1.outer4.outer.Justification.ToUpper()) ?
                    s.outer3.outer2.outer1.inner4.Where(ww => ww.TicketId == s.outer3.outer2.outer1.outer4.outer.TicketAttRefId).Select(ss => ss.Overage.ToString()).FirstOrDefault()
                    : midCashJustification.Contains(s.outer3.outer2.outer1.outer4.outer.Justification.ToUpper()) ?
                    s.outer3.outer2.outer1.inner4.Where(ww => ww.TicketId == s.outer3.outer2.outer1.outer4.outer.TicketAttRefId).Select(ss => ss.Mid_cash.ToString()).FirstOrDefault()
                    : atmDepositJustification.Contains(s.outer3.outer2.outer1.outer4.outer.Justification.ToUpper()) ?
                    s.outer3.outer2.outer1.inner4.Where(ww => ww.TicketId == s.outer3.outer2.outer1.outer4.outer.TicketAttRefId).Select(ss => ss.ATM_Deposit.ToString()).FirstOrDefault()
                    : string.Empty,
                           Liability_Amount = s.outer3.outer2.outer1.outer4.outer.Status == "ACCEPT" ? s.outer3.outer2.outer1.outer4.outer.TargetAmount.ToString() : string.Empty,
                           CMS_Closure_Comments = s.outer3.outer2.outer1.outer4.outer.CustComments,
                           Assigned_To = s.outer3.outer2.outer1.outer4.outer.AssignedTo,
                           Employee_Name = s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.EmployeeName).FirstOrDefault(),
                           Role_Type = s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() != null ?
                    s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() == 1 ? "ADMIN"
                   : s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() == 2 ? "MSP"
                   : s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() == 3 ? "HO"
                   : s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() == 4 ? "Location"
                   : s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() == 5 ? "HO_Manager"
                   : s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() == 6 ? "Location_Manager"
                   : null : null,
                           OldTicket_ID = s.outer3.outer2.outer1.outer4.outer.OldTicketId,
                           First_Employee_Code = s.outer3.outer2.outer1.outer4.outer.FirstCustodianCode,
                           First_Employee_Name = s.outer3.outer2.outer1.outer4.outer.FirstCustodianName,
                           Second_Employee_Code = s.outer3.outer2.outer1.outer4.outer.SecondCustodianCode,
                           Second_Employee_Name = s.outer3.outer2.outer1.outer4.outer.SecondCustodianName,
                           Created_Date = s.outer3.outer2.outer1.outer4.outer.CreatedDate.ToString()
                       })
                .ToList();
            }
            else
            {
                #region
                //ticketExports = context.Ticket.GroupJoin(context.Batch, outer => outer.BatchID, inner => inner.BatchID, (outer, inner) => new { outer, inner })
                //                        .GroupJoin(context.UtilizationData, outer4 => outer4.outer.TicketAttRefId, inner4 => inner4.TicketId, (outer4, inner4) => new { outer4, inner4 })
                //                        .GroupJoin(context.Atmmasters, outer1 => outer1.outer4.outer.ATMID, inner1 => inner1.atmcode, (outer1, inner1) => new { outer1, inner1 })
                //                        .GroupJoin(context.ErrorCodePortals, outer2 => (outer2.outer1.outer4.outer.ErrorCode + "--" + outer2.outer1.outer4.outer.ErrorRemark), inner2 => (inner2.errorcode + "--" + inner2.Remarks), (outer2, inner2) => new { outer2, inner2 })
                //                        .GroupJoin(context.Employee_Role, outer3 => outer3.outer2.outer1.outer4.outer.AssignedTo, inner3 => inner3.Type_EmpCode, (outer3, inner3) => new { outer3, inner3 })
                //                        .Where(w =>
                //                               (Admin_User) ||
                //                               ((MSP_User) &&
                //                               w.outer3.outer2.outer1.outer4.outer.MSP == baseRequest.LoginEmployeeDetails.EmpCode
                //                               )
                //                               ||
                //                               (
                //                               (HO_User) &&
                //                               w.outer3.outer2.outer1.outer4.outer.AssignedTo == baseRequest.LoginEmployeeDetails.EmpCode
                //                               ) ||
                //                                            (
                //                                                (Location_User) &&
                //                                                    (regionList.Contains(w.outer3.outer2.outer1.outer4.outer.Region)) && locationList.Contains(w.outer3.outer2.outer1.outer4.outer.Location)
                //                                            && (w.outer3.outer2.outer1.outer4.outer.AssignedTo == baseRequest.LoginEmployeeDetails.EmpCode)
                //                                            )
                //                                  ||
                //                                  (
                //                                  (HO_Manager)
                //                                  )
                //                                  ||
                //                                  (
                //                                  (Loc_Manager) && (regionList.Contains(w.outer3.outer2.outer1.outer4.outer.Region)) && locationList.Contains(w.outer3.outer2.outer1.outer4.outer.Location)
                //                                  )
                //                        )
                //                 .Select(s => new TicketExport_Model
                //                 {
                //                     Batch_ID = s.outer3.outer2.outer1.outer4.outer.BatchID,
                //                     Email_Subject = s.outer3.outer2.outer1.outer4.inner.Where(ww => ww.BatchID == s.outer3.outer2.outer1.outer4.outer.BatchID).Select(ss => ss.EmailSubject != null ? ss.EmailSubject : string.Empty).FirstOrDefault(),
                //                     Email_Adderss = s.outer3.outer2.outer1.outer4.inner.Where(ww => ww.BatchID == s.outer3.outer2.outer1.outer4.outer.BatchID).Select(ss => ss.FromEmail != null ? ss.FromEmail : string.Empty).FirstOrDefault(),
                //                     Email_Date = s.outer3.outer2.outer1.outer4.inner.Where(ww => ww.BatchID == s.outer3.outer2.outer1.outer4.outer.BatchID).Select(ss => ss.Date != null ? ss.Date : null).FirstOrDefault().ToString(),
                //                     CRA = s.outer3.outer2.inner1.Where(w => w.status == "Active").Select(ss => ss.Company).FirstOrDefault(),
                //                     CMS_DisputeID = s.outer3.outer2.outer1.outer4.outer.TicketID,
                //                     Query_Type = s.outer3.outer2.outer1.outer4.outer.QueryType,
                //                     Query_Category = s.outer3.outer2.outer1.outer4.outer.QueryCategory,
                //                     ATM_ID = s.outer3.outer2.outer1.outer4.outer.ATMID,
                //                     ATM_Type = s.outer3.outer2.inner1.Where(w => w.status == "Active").Select(ss => ss.AtmType).FirstOrDefault(),
                //                     Bank_Name = s.outer3.outer2.inner1.Where(w => w.status == "Active").Select(ss => ss.BankName).FirstOrDefault(),
                //                     Territory = s.outer3.outer2.inner1.Where(w => w.status == "Active").Select(ss => ss.RoName).FirstOrDefault(),
                //                     Location = s.outer3.outer2.inner1.Where(w => w.status == "Active").Select(ss => ss.LocationName).FirstOrDefault(),
                //                     Incident_Date = s.outer3.outer2.outer1.outer4.outer.IncidentDate.ToString(),
                //                     Dispute_Amount = s.outer3.outer2.outer1.outer4.outer.DisputedAmount.ToString(),
                //                     Reference_Number = s.outer3.outer2.outer1.outer4.outer.ReferenceNo,
                //                     Card_Number = s.outer3.outer2.outer1.outer4.outer.CardNo,
                //                     Account_Number = s.outer3.outer2.outer1.outer4.outer.AccountNo,
                //                     Transaction_Amount = s.outer3.outer2.outer1.outer4.outer.TransAmount.ToString(),
                //                     Transaction_Number = s.outer3.outer2.outer1.outer4.outer.TransactionNo,
                //                     Transaction_Time = s.outer3.outer2.outer1.outer4.outer.TransactonTime.ToString(),
                //                     Error_Code = s.outer3.outer2.outer1.outer4.outer.ErrorCode + " -- " + s.outer3.outer2.outer1.outer4.outer.ErrorRemark,
                //                     Error_Bucket = s.outer3.inner2.Select(ss => ss.ErrorBucket).FirstOrDefault(),
                //                     CMS_JUTIFICATION = s.outer3.outer2.outer1.outer4.outer.Justification,
                //                     CMS_STATUS = s.outer3.outer2.outer1.outer4.outer.Status,
                //                     Internal_Status = s.outer3.outer2.outer1.outer4.outer.CMSStatus,
                //                     Deposited_Date = Justification.Contains(s.outer3.outer2.outer1.outer4.outer.Justification.ToUpper()) ?
                //    s.outer3.outer2.outer1.inner4.Where(ww => ww.TicketId == s.outer3.outer2.outer1.outer4.outer.TicketAttRefId).Select(ss => ss.EOD_Date.ToString()).FirstOrDefault()
                //    : string.Empty,
                //                     Deposited_Amount = overageJustification.Contains(s.outer3.outer2.outer1.outer4.outer.Justification.ToUpper()) ?
                //    s.outer3.outer2.outer1.inner4.Where(ww => ww.TicketId == s.outer3.outer2.outer1.outer4.outer.TicketAttRefId).Select(ss => ss.Overage.ToString()).FirstOrDefault()
                //    : midCashJustification.Contains(s.outer3.outer2.outer1.outer4.outer.Justification.ToUpper()) ?
                //    s.outer3.outer2.outer1.inner4.Where(ww => ww.TicketId == s.outer3.outer2.outer1.outer4.outer.TicketAttRefId).Select(ss => ss.Mid_cash.ToString()).FirstOrDefault()
                //    : atmDepositJustification.Contains(s.outer3.outer2.outer1.outer4.outer.Justification.ToUpper()) ?
                //    s.outer3.outer2.outer1.inner4.Where(ww => ww.TicketId == s.outer3.outer2.outer1.outer4.outer.TicketAttRefId).Select(ss => ss.ATM_Deposit.ToString()).FirstOrDefault()
                //    : string.Empty,
                //                     Liability_Amount = s.outer3.outer2.outer1.outer4.outer.Status == "ACCEPT" ? s.outer3.outer2.outer1.outer4.outer.TargetAmount.ToString() : string.Empty,
                //                     CMS_Closure_Comments = s.outer3.outer2.outer1.outer4.outer.CustComments,
                //                     Assigned_To = s.outer3.outer2.outer1.outer4.outer.AssignedTo,
                //                     Employee_Name = s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.EmployeeName).FirstOrDefault(),
                //                     Role_Type = s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() != null ?
                //    s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() == 1 ? "ADMIN"
                //   : s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() == 2 ? "MSP"
                //   : s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() == 3 ? "HO"
                //   : s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() == 4 ? "Location"
                //   : s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() == 5 ? "HO_Manager"
                //   : s.inner3.Where(ww => (ww.Type_EmpCode == s.outer3.outer2.outer1.outer4.outer.AssignedTo) && (ww.Type == "Employees")).Select(ss => ss.RoleCode).FirstOrDefault() == 6 ? "Location_Manager"
                //   : null : null,
                //                     OldTicket_ID = s.outer3.outer2.outer1.outer4.outer.OldTicketId,
                //                 }).ToList();

                #endregion

                //string query = string.Format("{0}'{1}'{2}", "select t.BatchID as Batch_ID,b.EmailSubject as Email_Subject,b.FromEmail as Email_Adderss,DATE_FORMAT(b.Date,'%Y-%m-%d') as Email_Date,DATE_FORMAT(b.Date,'%H:%i') as Email_Time,atm.Company as CRA,t.TicketID as CMS_DisputeID,t.QueryType as Query_Type,t.QueryCategory as Query_Category,t.ATMID as ATM_ID,atm.AtmType as ATM_Type,atm.BankName as Bank_Name,atm.RoName as Territory,atm.LocationName as Location,DATE_FORMAT(t.IncidentDate,'%Y-%m-%d') as Incident_Date,t.DisputedAmount as Dispute_Amount,t.ReferenceNo as Reference_Number,t.CardNo as Card_Number,t.AccountNo as Account_Number,t.TransactionNo as Transaction_Number,t.TransAmount as Transaction_Amount,DATE_FORMAT(t.TransactonTime,'%H:%i') as Transaction_Time,CONCAT(t.ErrorCode,",
                //    " -- ",
                //    ",t.ErrorRemark) as Error_Code,e.ErrorBucket as Error_Bucket,t.Justification as CMS_JUTIFICATION,t.Status as CMS_STATUS,t.CMSStatus as Internal_Status,DATE_FORMAT((CASE WHEN t.Justification IN ('OVERAGE REPORTED', 'PARTIAL - OVERAGE REPORTED', 'SWITCH INCREASED', 'PARTIAL - SWITCH INCREASED', 'PARTIAL - CASH DEPOSITED', 'CASH DEPOSITED') THEN u.EOD_Date ELSE NUll END),'%Y-%m-%d') Deposited_Date ,(CASE WHEN t.Justification In  ('OVERAGE REPORTED', 'PARTIAL - OVERAGE REPORTED') THEN u.Overage ELSE CASE WHEN t.Justification IN ('SWITCH INCREASED','PARTIAL - SWITCH INCREASED') THEN u.Mid_cash ELSE CASE WHEN t.Justification IN ('PARTIAL - CASH DEPOSITED','CASH DEPOSITED') THEN u.ATM_Deposit ELSE NUll END END END) Deposited_Amount,(CASE WHEN t.Status='ACCEPT' THEN t.TargetAmount ELSE NULL END) Liability_Amount, t.CustComments as CMS_Closure_Comments,t.AssignedTo as Assigned_To,er.EmployeeName as Employee_Name,err.Type_EmpCode as Role_Type,t.OldTicketId as OldTicket_ID from ticket t left join utilization_data u on u.TicketID = t.TicketAttRefId left join batch b on t.BatchID = b.BatchID left join atmmaster atm on atm.pkid = t.ATMpkid left join errorcodemaster e on e.ErrorCode = t.ErrorCode and e.Remarks = t.ErrorRemark left join employee_role er on er.Type_EmpCode = t.AssignedTo left join employee_role err on er.RoleCode = err.TypeCode and err.Type = 'Roles'"
                //    );





                //ticketExports = context.Database.SqlQuery<TicketExport_Model>(query).ToList();

                //ticketExports = context.Database.SqlQuery<TicketExport_Model>(
                //    "select t.BatchID as Batch_ID,b.EmailSubject as Emai_Subject,b.FromEmail as Email_Address,DATE_FORMAT(b.Date,'%Y-%m-%d') as Email_Date,DATE_FORMAT(b.Date,'%H:%i') as Email_Time,atm.Company as CRA,t.TicketID as CMS_DisputeID,t.QueryType as Query_Type,t.QueryCategory as Query_Category,t.ATMID as ATM_ID,atm.AtmType as ATM_Type,atm.BankName as Bank_Name,atm.RoName as Territory,atm.LocationName as Location,DATE_FORMAT(t.IncidentDate,'%Y-%m-%d') as Incident_Date,t.DisputedAmount as Dispute_Amount,t.ReferenceNo as Reference_Number,t.CardNo as Card_Number,t.AccountNo as Account_Number,t.TransactionNo as Transaction_Number,t.TransAmount as Transaction_Amount,DATE_FORMAT(t.TransactonTime,'%H:%i') as Transaction_Time,CONCAT(t.ErrorCode, " +"--"+ " ,t.ErrorRemark) as Error_Code,e.ErrorBucket as Error_Bucket,t.Justification as CMS_JUTIFICATION,t.Status as CMS_STATUS,t.CMSStatus as Internal_Status,DATE_FORMAT((CASE WHEN t.Justification IN ("+"OVERAGE REPORTED"+", "+"PARTIAL - OVERAGE REPORTED"+", "+"SWITCH INCREASED"+", "+"PARTIAL - SWITCH INCREASED"+", "+"PARTIAL - CASH DEPOSITED"+", "+"CASH DEPOSITED"+") THEN u.EOD_Date ELSE NUll END),'%Y-%m-%d') Deposited_Date ,(CASE WHEN t.Justification In  ("+"OVERAGE REPORTED"+", "+"PARTIAL - OVERAGE REPORTED"+") THEN u.Overage ELSE CASE WHEN t.Justification IN ("+"SWITCH INCREASED"+","+"PARTIAL - SWITCH INCREASED"+") THEN u.Mid_cash ELSE CASE WHEN t.Justification IN ("+"PARTIAL - CASH DEPOSITED"+","+"CASH DEPOSITED"+") THEN u.ATM_Deposit ELSE NUll END END END) Deposited_Amount,(CASE WHEN t.Status="+"ACCEPT"+" THEN t.TargetAmount ELSE NULL END) Liability_Amount, t.CustComments as CMS_Closure_Comments,t.AssignedTo as Assigned_To,er.EmployeeName as Employee_Name,err.Type_EmpCode as Role_Type,t.OldTicketId as OldTicket_ID from ticket t left join utilization_data u on u.TicketID = t.TicketAttRefId left join batch b on t.BatchID = b.BatchID left join atmmaster atm on atm.pkid = t.ATMpkid left join errorcodemaster e on e.ErrorCode = t.ErrorCode and e.Remarks = t.ErrorRemark left join employee_role er on er.Type_EmpCode = t.AssignedTo left join employee_role err on er.RoleCode = err.TypeCode and err.Type = " +"Roles"+""
                //    ).ToList();


                string query = string.Format("{0}'{1}'{2}", "SELECT DISTINCT t.BatchID as Batch_ID,b.EmailSubject as Email_Subject,b.FromEmail as Email_Adderss,FORMAT(b.Date,'dd-MM-yyyy') as Email_Date,FORMAT(b.Date,'dd-MM-yyyy hh:MM:ss') as Email_Time,atm.Company as CRA,t.TicketID as CMS_DisputeID,t.QueryType as Query_Type,t.QueryCategory as Query_Category,t.ATMID as ATM_ID,atm.AtmType as ATM_Type,atm.MSP as MSP,atm.BankName as Bank_Name,atm.RoName as Territory,atm.LocationName as Location,FORMAT(t.IncidentDate,'dd-MM-yyyy') as Incident_Date,CAST(t.DisputedAmount as varchar(45)) as Dispute_Amount,t.ReferenceNo as Reference_Number,t.CardNo as Card_Number,t.AccountNo as Account_Number,t.TransactionNo as Transaction_Number,CAST(t.TransAmount as varchar(45)) as Transaction_Amount,FORMAT(t.TransactonTime,'dd-MM-yyyy hh:MM:ss') as Transaction_Time,CONCAT(t.ErrorCode,",
                    " -- ",
                    ",t.ErrorRemark) as Error_Code,e.ErrorBucket as Error_Bucket,t.Justification as CMS_JUTIFICATION,t.Status as CMS_STATUS,t.CMSStatus as Internal_Status,FORMAT((CASE WHEN t.Justification IN ('OVERAGE REPORTED', 'PARTIAL - OVERAGE REPORTED', 'SWITCH INCREASED', 'PARTIAL - SWITCH INCREASED', 'PARTIAL - CASH DEPOSITED', 'CASH DEPOSITED') THEN u.EOD_Date ELSE NUll END),'dd-MM-yyyy') Deposited_Date,CAST((CASE WHEN t.Justification In  ('OVERAGE REPORTED', 'PARTIAL - OVERAGE REPORTED') THEN u.Overage ELSE CASE WHEN t.Justification IN ('SWITCH INCREASED','PARTIAL - SWITCH INCREASED') THEN u.Mid_cash ELSE CASE WHEN t.Justification IN ('PARTIAL - CASH DEPOSITED','CASH DEPOSITED') THEN u.ATM_Deposit ELSE NUll END END END) as varchar(45)) Deposited_Amount,CAST((CASE WHEN t.Status='ACCEPT' THEN t.TargetAmount ELSE NULL END) as varchar(45)) Liability_Amount,t.CustComments as CMS_Closure_Comments,t.AssignedTo as Assigned_To,er.EmployeeName as Employee_Name,err.Type_EmpCode as Role_Type,t.OldTicketId as OldTicket_ID,t.FirstCustodianCode First_Employee_Code,t.FirstCustodianName First_Employee_Name,t.SecondCustodianCode Second_Employee_Code,t.SecondCustodianName Second_Employee_Name,FORMAT(t.CreatedDate,'dd-MM-yyyy') as Created_Date from ticket t left join utilization_data u on u.TicketID = t.TicketAttRefId left join batch b on t.BatchID = b.BatchID left join atmmaster atm on atm.pkid = t.ATMpkid left join errorcodemasterdistinct e on e.errorcode = t.ErrorCode and e.Remarks = t.ErrorRemark left join employee_role er on er.Type_EmpCode = t.AssignedTo left join employee_role err on er.RoleCode = err.TypeCode and err.Type = 'Roles'"
                    );

                ticketExports = context.Database.SqlQuery<TicketExport_Model>(query).ToList();


            }




            return ticketExports;






        }

        private UpdateTicketModel TicketDetails(string ticketID)
        {
            try
            {
                return context.Ticket
                              .Where(w => w.TicketID == ticketID)
                                              .Select(s => new UpdateTicketModel
                                              {
                                                  BatchID = s.BatchID,
                                                  TicketId = s.TicketID,
                                                  QueryType = s.QueryType,
                                                  QueryCategory = s.QueryCategory,
                                                  EmailDate = s.EmailDate.ToString(),/*need to change through model*/
                                                  IncidentDate = s.IncidentDate.ToString(),/*need to change through model*/
                                                  ATMID = s.ATMID,
                                                  DisputedAmount = s.DisputedAmount.ToString(),
                                                  TransactionTime = s.TransactonTime.ToString(),/*need to change through model*/
                                                  TransactionNo = s.TransactionNo,
                                                  TransAmount = s.TransAmount.ToString(),
                                                  CardNo = s.CardNo,
                                                  ReferenceNo = s.ReferenceNo,
                                                  CustomerActions = s.Status,
                                                  ErrorCode = s.ErrorCode != null ? s.ErrorCode : string.Empty,
                                                  ErrorRemarks = s.ErrorRemark != null ? s.ErrorRemark : string.Empty,
                                                  TerritoryDepositDate = s.DepositDate.ToString(),
                                                  DepositAmount = s.DepositAmount.ToString(),
                                                  AssignedTo = s.AssignedTo,
                                                  FirstCustodianCode = s.FirstCustodianCode,
                                                  FirstCustodianName = s.FirstCustodianName,
                                                  SecondCustodianCode = s.SecondCustodianCode,
                                                  SecondCustodianName = s.SecondCustodianName,
                                                  CMSStatus = s.CMSStatus != null ? s.CMSStatus : string.Empty,
                                                  Justification = s.Justification != null ? s.Justification : string.Empty,
                                                  DisputedRejection = s.DisputeRejected.Value,
                                                  RoCode=s.Region,
                                                  Location=s.Location,
                                                  TicketAttRefId = s.TicketAttRefId,
                                                  TargetAmount = s.TargetAmount.ToString(),
                                                  CMSRemarks = s.CustComments != null ? s.CustComments : string.Empty,
                                              }).FirstOrDefault();
            }
            catch
            {
                throw;
            }
        }

        private void TakenUpForRecover(BaseRequest<UpdateTicketModel> model)
        {
            try
            {
                Recovery recovery;
                List<Recovery> recoveryList = new List<Recovery>();

                var RecoveryTargetAmount = !String.IsNullOrEmpty(model.Entity.FirstCustodianCode) && !String.IsNullOrEmpty(model.Entity.SecondCustodianCode) ?
                                            (Convert.ToInt32(model.Entity.TargetAmount) / 2).ToString() : model.Entity.TargetAmount;



                #region Add Custodians to the List to Insert into table recover
                if (!String.IsNullOrEmpty(model.Entity.FirstCustodianCode) && !String.IsNullOrEmpty(model.Entity.SecondCustodianCode))
                {
                    //Adding two custodians into list
                    recovery = new Recovery()
                    {
                        RecoveryNo = model.Entity.TicketId.Substring(4) + "-" + model.Entity.FirstCustodianCode,
                        BatchId = model.Entity.BatchID,
                        TicketId = model.Entity.TicketId,
                        RecoveryFromEmpId = model.Entity.FirstCustodianCode,
                        EmployeeName = model.Entity.FirstCustodianName,
                        Status = "PENDING FOR RECOVERY",
                        RecoveryAmount = Convert.ToDouble(RecoveryTargetAmount),
                        ReceivedAmount = 0,
                        CreatedBy = model.LoginEmployeeDetails.EmpCode,
                        CreatedDate = DateTime.Now,
                        RecoveryAssignedTo = model.Entity.AssigneToRecovery,
                    };

                    recoveryList.Add(recovery);

                    recovery = new Recovery()
                    {
                        RecoveryNo = model.Entity.TicketId.Substring(4) + "-" + model.Entity.SecondCustodianCode,
                        BatchId = model.Entity.BatchID,
                        TicketId = model.Entity.TicketId,
                        RecoveryFromEmpId = model.Entity.SecondCustodianCode,
                        EmployeeName = model.Entity.SecondCustodianName,
                        Status = "PENDING FOR RECOVERY",
                        RecoveryAmount = Convert.ToDouble(RecoveryTargetAmount),
                        ReceivedAmount = 0,
                        CreatedBy = model.LoginEmployeeDetails.EmpCode,
                        CreatedDate = DateTime.Now.Date,
                        RecoveryAssignedTo = model.Entity.AssigneToRecovery,
                    };

                    recoveryList.Add(recovery);
                }
                else
                {
                    //Adding one Custodians into list
                    recovery = new Recovery()
                    {
                    RecoveryNo = model.Entity.TicketId.Substring(4) + "-" + string.Format("{0}",!String.IsNullOrEmpty(model.Entity.FirstCustodianCode) ? model.Entity.FirstCustodianCode : !String.IsNullOrEmpty(model.Entity.SecondCustodianCode) ? model.Entity.SecondCustodianCode : model.LoginEmployeeDetails.EmpCode),
                    BatchId = model.Entity.BatchID,
                    TicketId = model.Entity.TicketId,
                    RecoveryFromEmpId = !String.IsNullOrEmpty(model.Entity.FirstCustodianCode)? model.Entity.FirstCustodianCode : !String.IsNullOrEmpty(model.Entity.SecondCustodianCode) ? model.Entity.SecondCustodianCode : model.LoginEmployeeDetails.EmpCode ,
                    EmployeeName = !String.IsNullOrEmpty(model.Entity.FirstCustodianName) ? model.Entity.FirstCustodianName : !String.IsNullOrEmpty(model.Entity.SecondCustodianName) ? model.Entity.SecondCustodianName : model.LoginEmployeeDetails.EmpFullName,
                    Status = "PENDING FOR RECOVERY",
                    RecoveryAmount = Convert.ToDouble(RecoveryTargetAmount),
                    ReceivedAmount = 0,
                    CreatedBy = model.LoginEmployeeDetails.EmpCode,
                    CreatedDate = DateTime.Now.Date,
                    RecoveryAssignedTo = model.Entity.AssigneToRecovery,
                    };

                recoveryList.Add(recovery);

                }
                #endregion

                //Addinto the recoverytable
                context.Recoveries.AddRange(recoveryList);
                context.SaveChanges();
            }
            catch
            {
                throw;
            }
        }

        private void OpenRegion()
        {

        }

        private Recovery AddToRecoverModel(Recovery model)
        {
            
            

            return null;
        }

        private BaseResponse SavingAllocationOfTicket(BaseRequest<UpdateTicketModel> baseRequest, UpdateTicketModel ticketDetails)
        {
            CommonFilterRepository common = new CommonFilterRepository();
            BaseResponse baseResponse = new BaseResponse() { Success = false };

            var Admin_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 1);
            var HO_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 3);
            var Location_User = (baseRequest.LoginEmployeeDetails.AssignedRoleID == 4);

            #region Overage Value
            
            if (HO_User || Admin_User)
            {
                List<string> HOJustification = new List<string> { "OVERAGE REPORTED", "PARTIAL - OVERAGE REPORTED", "SWITCH INCREASED", "PARTIAL - SWITCH INCREASED", "PARTIAL - CASH DEPOSITED", "CASH DEPOSITED" };
                if (HOJustification.Contains(baseRequest.Entity.HORejectionJustification.ToUpper()))
                {

                    UtilizationData overageValue = context.UtilizationData.Where(w => w.BatchID == ticketDetails.BatchID && w.TicketId == ticketDetails.TicketAttRefId && w.ATMID == ticketDetails.ATMID)
                                                                            .Select(s=>s).OrderByDescending(o => o.ID).FirstOrDefault();

                    UtilizationDataLogs removeValue = new UtilizationDataLogs();

                    if (overageValue!=null)
                    {
                            removeValue.MSP = overageValue.MSP;
                            removeValue.BatchID = overageValue.BatchID;
                            removeValue.TicketId = overageValue.TicketId;
                            removeValue.CBRID = overageValue.CBRID;
                            removeValue.ATMID = overageValue.ATMID;
                            removeValue.EOD_Date = overageValue.EOD_Date;
                            removeValue.Overage = overageValue.Overage;
                            removeValue.Overage_Usage = overageValue.Overage_Usage;
                            removeValue.Overage_Balance = overageValue.Overage_Balance;
                            removeValue.Mid_cash = overageValue.Mid_cash;
                            removeValue.Mid_cash_Usage = overageValue.Mid_cash_Usage;
                            removeValue.Mid_Cash_Balance = overageValue.Mid_Cash_Balance;
                            removeValue.CreatedBy = overageValue.CreatedBy;
                            removeValue.CreatedDate = overageValue.CreatedDate;
                            removeValue.ModifiedBy = overageValue.ModifiedBy;
                            removeValue.ModifiedDate = overageValue.ModifiedDate;
                            removeValue.ATM_Deposit = overageValue.ATM_Deposit;
                            removeValue.ATM_Usage = overageValue.ATM_Usage;
                            removeValue.ATM_Balance = overageValue.ATM_Balance;
                    }
                    


                    List<string> overageJustification = new List<string> { "OVERAGE REPORTED", "PARTIAL - OVERAGE REPORTED" };
                    List<string> midCashJustification = new List<string> { "SWITCH INCREASED", "PARTIAL - SWITCH INCREASED" };
                    List<string> atmDepositJustification = new List<string> { "PARTIAL - CASH DEPOSITED", "CASH DEPOSITED" };

                    UtilizationData utilizationData = new UtilizationData();
                    utilizationData.MSP = baseRequest.Entity.MSP;
                    utilizationData.BatchID = baseRequest.Entity.BatchID;
                    utilizationData.TicketId = ticketDetails.TicketAttRefId;
                    utilizationData.ATMID= baseRequest.Entity.ATMID;
                    utilizationData.EOD_Date = Convert.ToDateTime(baseRequest.Entity.OverageDate);
                    utilizationData.CreatedDate = DateTime.Now;
                    utilizationData.CreatedBy = baseRequest.LoginEmployeeDetails.EmpCode;

                    if (overageJustification.Contains(baseRequest.Entity.HORejectionJustification.ToUpper()))
                    {
                        if (overageValue != null)
                        {



                            if(overageValue.EOD_Date.Value.Date != utilizationData.EOD_Date.Value.Date && overageValue.Overage != Convert.ToDouble(baseRequest.Entity.OverageAmount))
                            {

                                context.UtilizationDataLogS.Add(removeValue);

                                context.UtilizationData.Remove(overageValue);

                                utilizationData.Overage = Convert.ToDouble(baseRequest.Entity.OverageAmount);
                                context.UtilizationData.Add(utilizationData);
                                ticketDetails.DepositDate = overageValue.EOD_Date.Value.ToString("dd-MMM-yyyy");
                                ticketDetails.DepositAmount = overageValue.Overage.ToString();
                                context.SaveChanges();
                            }
                            
                        }
                        else
                        {
                            utilizationData.Overage = Convert.ToDouble(baseRequest.Entity.OverageAmount);
                            context.UtilizationData.Add(utilizationData);
                            ticketDetails.DepositDate = string.Empty;
                            ticketDetails.DepositAmount = string.Empty;
                            context.SaveChanges();
                        }


                    }
                    else if (midCashJustification.Contains(baseRequest.Entity.HORejectionJustification.ToUpper()))
                    {
                        if (overageValue != null)
                        {
                            if (overageValue.EOD_Date.Value.Date != utilizationData.EOD_Date.Value.Date && overageValue.Mid_cash != Convert.ToDouble(baseRequest.Entity.OverageAmount))
                            {
                                context.UtilizationDataLogS.Add(removeValue);

                                context.UtilizationData.Remove(overageValue);

                                utilizationData.Mid_cash = Convert.ToDouble(baseRequest.Entity.OverageAmount);
                                context.UtilizationData.Add(utilizationData);
                                ticketDetails.DepositDate = overageValue.EOD_Date.Value.ToString("dd-MMM-yyyy");
                                ticketDetails.DepositAmount = overageValue.Mid_cash.ToString();
                                context.SaveChanges();
                            }
                        }
                        else
                        {
                            utilizationData.Mid_cash = Convert.ToDouble(baseRequest.Entity.OverageAmount);
                            context.UtilizationData.Add(utilizationData);
                            ticketDetails.DepositDate = string.Empty;
                            ticketDetails.DepositAmount = string.Empty;
                            context.SaveChanges();
                        }





                       
                    }
                    else if (atmDepositJustification.Contains(baseRequest.Entity.HORejectionJustification.ToUpper()))
                    {

                        if (overageValue != null)
                        {
                            if (overageValue.EOD_Date.Value.Date != utilizationData.EOD_Date.Value.Date && overageValue.ATM_Deposit != Convert.ToDouble(baseRequest.Entity.OverageAmount))
                            {
                                context.UtilizationDataLogS.Add(removeValue);

                                context.UtilizationData.Remove(overageValue);

                                utilizationData.ATM_Deposit = Convert.ToDouble(baseRequest.Entity.OverageAmount);
                                context.UtilizationData.Add(utilizationData);
                                ticketDetails.DepositDate = overageValue.EOD_Date.Value.ToString("dd-MMM-yyyy");
                                ticketDetails.DepositAmount = overageValue.ATM_Deposit.ToString();
                                context.SaveChanges();
                            }
                        }
                        else
                        {
                            utilizationData.ATM_Deposit = Convert.ToDouble(baseRequest.Entity.OverageAmount);
                            context.UtilizationData.Add(utilizationData);
                            ticketDetails.DepositDate = string.Empty;
                            ticketDetails.DepositAmount = string.Empty;
                            context.SaveChanges();
                        }


                        
                    }

                    
                }

            }
            
            #endregion









            Update_Logs query_Logs = common.Update_Logs(baseRequest, ticketDetails);

            TicketLog ticketLog = new TicketLog()
            {
                MSP = ticketDetails.MSP,
                BatchID = ticketDetails.BatchID,
                TicketId = ticketDetails.TicketAttRefId,
                Status = ticketDetails.CustomerActions,
                DisputeRejected = ticketDetails.DisputedRejection,
                Justification = ticketDetails.Justification,
                InternalAction = ticketDetails.CMSStatus,
                CustCommentsType = baseRequest.LoginEmployeeDetails.AssignedRoleID == 1 ? "ADMIN" : baseRequest.LoginEmployeeDetails.AssignedRoleID == 2 ? "MSP" : baseRequest.LoginEmployeeDetails.AssignedRoleID == 3 ? "HO" : baseRequest.LoginEmployeeDetails.AssignedRoleID == 4 ? "LOCATION" : "Others",
                CustCommentsBy = baseRequest.LoginEmployeeDetails.EmpCode,
                CustComments = query_Logs.UpdateLogs_Value,
                CreatedBy = baseRequest.LoginEmployeeDetails.EmpCode,
                CreatedDate = DateTime.Now,
                ModifiedBy = null,
                ModifiedDate = null,
                AssignedTo = ticketDetails.AssignedTo,
                Source = "WEB"
            };


            context.TicketLog.Add(ticketLog);
            

            if (!string.IsNullOrEmpty(query_Logs.UpdateQuery_Value))
            {
                context.Database.ExecuteSqlCommand(query_Logs.UpdateQuery_Value);
                
            }

            int status = context.SaveChanges();

            if (status == 1)
            {
                baseResponse.Message = "Ticket Updated Successfully";
                baseResponse.Success = true;
            }
            else if (status != 1)
            {
                baseResponse.Message = "Ticket Updated Failed while inserting in Ticket Master";
                baseResponse.Success = true;
            }

            return baseResponse;
        }

        public bool LocationFIleUpload(BaseRequest<TicketAttachments> baseRequest)
        {
            try
            {
                TicketAttachments ticketAttachments = new TicketAttachments();

                var ticketAttachRefId = context.Ticket.Where(w => w.TicketID == baseRequest.Entity.TicketId).Select(s => s.TicketAttRefId).FirstOrDefault();

                ticketAttachments.TicketId = ticketAttachRefId;
                ticketAttachments.FilePath = baseRequest.Entity.FilePath;
                ticketAttachments.VisibleToMSP = baseRequest.Entity.VisibleToMSP;
                ticketAttachments.VisibleToHO = baseRequest.Entity.VisibleToHO;
                ticketAttachments.VisibleToLocation = baseRequest.Entity.VisibleToLocation;
                ticketAttachments.TypeOfAttachment = baseRequest.Entity.TypeOfAttachment;
                ticketAttachments.CreatedBy = baseRequest.LoginEmployeeDetails.EmpCode;
                ticketAttachments.CreatedOn = DateTime.Now;

                context.TicketAttachments.Add(ticketAttachments);
                var a= context.SaveChanges();

                return a==1?true:false;
            }
            catch
            {
                throw;
            }
        }
        
        public bool HoAndOthersFIleUpload(BaseRequest<TicketAttachments> baseRequest)
        {
            try
            {
                TicketAttachments ticketAttachments = new TicketAttachments();

                if (baseRequest.Entity.TicketId != null)
                {
                    var ticketAttachRefId = context.Ticket.Where(w => w.TicketID == baseRequest.Entity.TicketId).Select(s => s.TicketAttRefId).FirstOrDefault();

                    ticketAttachments.TicketId = ticketAttachRefId;
                    ticketAttachments.FilePath = baseRequest.Entity.FilePath;
                    ticketAttachments.VisibleToMSP = baseRequest.Entity.VisibleToMSP;
                    ticketAttachments.VisibleToHO = baseRequest.Entity.VisibleToHO;
                    ticketAttachments.VisibleToLocation = baseRequest.Entity.VisibleToLocation;
                    ticketAttachments.TypeOfAttachment = baseRequest.Entity.TypeOfAttachment;
                    ticketAttachments.CreatedBy = baseRequest.LoginEmployeeDetails.EmpCode;
                    ticketAttachments.CreatedOn = DateTime.Now;

                    context.TicketAttachments.Add(ticketAttachments);
                }
                else
                {
                    ticketAttachments = context.TicketAttachments.SingleOrDefault(s => s.Id == baseRequest.Entity.Id);

                    ticketAttachments.VisibleToHO = baseRequest.Entity.VisibleToHO;
                    ticketAttachments.VisibleToMSP = baseRequest.Entity.VisibleToMSP;
                    ticketAttachments.VisibleToLocation = baseRequest.Entity.VisibleToLocation;
                }

                var a = context.SaveChanges();

                return a == 1 ? true : false;
            }
            catch
            {
                throw;
            }
        }

        public BaseResponse CommentToBeUpdated(BaseRequest<TicketsLogView> baseRequest)
        {
            try
            {
                BaseResponse response = new BaseResponse();

                TicketLog ticketLog = new TicketLog();
                Ticket ticket = new Ticket();
                ticket = context.Ticket.Where(w => w.TicketID == baseRequest.Entity.TicketID).Select(s =>s).FirstOrDefault();


                ticketLog.MSP = ticket.MSP;
                ticketLog.BatchID = ticket.BatchID;
                ticketLog.TicketId = ticket.TicketAttRefId;
                ticketLog.CustCommentsType = baseRequest.LoginEmployeeDetails.UserType;
                ticketLog.CustCommentsBy = baseRequest.LoginEmployeeDetails.EmpCode;
                ticketLog.CustComments = baseRequest.Entity.CustComments;
                ticketLog.CreatedBy = baseRequest.LoginEmployeeDetails.EmpCode;
                ticketLog.CreatedDate = DateTime.Now;
                ticketLog.AssignedTo = ticket.AssignedTo;
                ticketLog.Source = "WEB";


                context.TicketLog.Add(ticketLog);

                int a = context.SaveChanges();

                if (a == 1)
                {
                    response = new BaseResponse { Success = true, Message = "Comment Added Successfully" };
                }
                else
                {
                    response = new BaseResponse { Success = false, Message = "Comment Failed To Add" };
                }

                return response;
            }
            catch
            {
                throw;
            }
        }

        public BaseResponse UpdateRuleEngineStatuses(BaseResponse<BaseRequest<RunRuleEngineModel>> baseRequest)
        {
            BaseResponse response = new BaseResponse();
            RuleEngineLogs ruleEngineLogs = new RuleEngineLogs();
            List<RuleEngineLogs> listRuleEngineLogs = new List<RuleEngineLogs>();

            foreach (var logs in baseRequest.Entity.Entity.TicketData)
            {
                ruleEngineLogs.BatchID = baseRequest.Entity.Entity.BatchId;
                ruleEngineLogs.TicketID = logs.TicketId;
                ruleEngineLogs.RanRuleEngineWeb = baseRequest.Success;
                ruleEngineLogs.RuleEngineRemarks = baseRequest.Message;
                ruleEngineLogs.RanRuleEngineWebDate = DateTime.Now;
                ruleEngineLogs.RuleEngineInitiator = baseRequest.Entity.LoginEmployeeDetails.EmpCode;

                listRuleEngineLogs.Add(ruleEngineLogs);
            }

            context.RuleEngineLogS.AddRange(listRuleEngineLogs);
            var a = context.SaveChanges();

            if (a == 1)
            {
                response.Success = true;
                response.Message = "Success";
            }
            else
            {
                response.Success = false;
                response.Message = "RuleEngine Data not saved";
            }


            return response;

        }

        public void Dispose()
        {
            context.Dispose();
        }

    }
}