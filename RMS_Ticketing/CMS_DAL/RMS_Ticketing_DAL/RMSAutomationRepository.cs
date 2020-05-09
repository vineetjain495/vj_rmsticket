﻿using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMS_Repository.Interface.RMS_Interface;
using CMSDAL.RMS_Ticketing_DAL;
using CMSDTO.Models.Response;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace CMS_DAL.RMS_Ticketing_DAL
{
    public class RMSAutomationRepository : IRMSTSConnectorRepository, IDisposable
    {

        RMSAUTOMATIONDBContext rmstscontext;
        private ICBRConnectorRepository cBRConnectorRepository;
        public static object Constants { get; private set; }

        public RMSAutomationRepository()
        {
            rmstscontext = new RMSAUTOMATIONDBContext();
        }
   
        public Batch GetBatch(string batchid)
        {
            rmstscontext = new RMSAUTOMATIONDBContext();
            Batch batch = rmstscontext.Batch.Where(d => d.BatchID == batchid).FirstOrDefault();
            return batch;
        }
        public MSPDTO GetMSPDetails(string domainname)
        {
            rmstscontext = new RMSAUTOMATIONDBContext();
            MSP mspdata = rmstscontext.MSP.Where(d => d.DomainName == domainname).FirstOrDefault();
            if (mspdata != null)
            {
                MSPDTO mSPDTO = new MSPDTO();
                mSPDTO.DomainName = mspdata.DomainName;
                mSPDTO.MSPName = mspdata.MSPName;
                mSPDTO.ImageLogo = mspdata.ImageLogo;
                mSPDTO.ID = mspdata.ID;
                mSPDTO.Password = mspdata.Password;
                return mSPDTO;
            }
            else return null;
        }
        public Ticket GetTicket(string argticketid)
        {
            rmstscontext = new RMSAUTOMATIONDBContext();
            Ticket ticket = rmstscontext.Ticket.Where(d => d.TicketID == argticketid).FirstOrDefault();
            return ticket;
        }
        public string GetTicketFromBatch(string argBatchID)
        {
            rmstscontext = new RMSAUTOMATIONDBContext();
            Ticket tickets = rmstscontext.Ticket.Where(d => d.BatchID == argBatchID).FirstOrDefault();
            return tickets.TicketID;
            //List<Ticket> tickets = rmstscontext.Ticket.Where(d => d.BatchID == argBatchID).ToList();
            //return tickets;
        }
        public Ticket CheckDuplicateTicket(string argatmid, string argtranstype, string argtransNo, double argtransamount, DateTime argtransdate)
        {
           rmstscontext = new RMSAUTOMATIONDBContext();
            Ticket ticket = new Ticket();
            if (argtranstype == "CC")
            {
                ticket = rmstscontext.Ticket.Where(d => d.ATMID == argatmid && d.TransactionNo == argtransNo && d.TransAmount == argtransamount && d.IncidentDate == argtransdate).FirstOrDefault();
            }
            else
            {
                ticket = rmstscontext.Ticket.Where(d => d.ATMID == argatmid && d.TransAmount == argtransamount && d.IncidentDate == argtransdate).FirstOrDefault();
            }
            return ticket;
        }
        public bool CreateBatch(Batch batch)
        {

            try
            {
                rmstscontext = new RMSAUTOMATIONDBContext();
                rmstscontext.Batch.Add(batch);
                rmstscontext.SaveChanges();
                return true;
            }
            catch { throw; }

        }
        public bool UpdateBatch(Batch batch)
        {

            try
            {
                rmstscontext = new RMSAUTOMATIONDBContext();
                var result = rmstscontext.Database.ExecuteSqlCommand("Update batch set BatchID={0} where ID={1}", batch.BatchID, batch.ID);
                return true;

            }
            catch { throw; }

        }
        public bool DeleteBatch(Batch batch)
        {

            try
            {
                rmstscontext = new RMSAUTOMATIONDBContext();
                var result = rmstscontext.Database.ExecuteSqlCommand("Delete From batch where  BatchID={0} and ID={1}", batch.BatchID, batch.ID);
                return true;

            }
            catch { throw; }

        }
        public bool UpdateTicketID(string BatchId,int idlen)
        {
            rmstscontext = new RMSAUTOMATIONDBContext();
            var result = rmstscontext.Database.ExecuteSqlCommand("Update ticket set ticketid=CONCAT(SUBSTRING(MSP,1,3),'-',BatchID,'-' , dbo.LPAD(Id,{1},'0') ) where BatchID={0}", BatchId, idlen);
            return true;
        }
        public bool IsNumeric(string input)
        {
            int test;
            return int.TryParse(input, out test);
        }
        public bool CreateTicket(CreateTicketDTO tickets, string BatchId)
        {
           
            rmstscontext = new RMSAUTOMATIONDBContext();
            Ticket ticket1 = new Ticket();
            int indexvalue = 0;
            foreach (var ticket in tickets.TicketsData)
            {
                indexvalue++;
                ticket1 = new Ticket();
                ticket1.MSP = tickets.MSP;
                ticket1.BatchID = BatchId;
                ticket1.EmailID = tickets.FromEmail;
                string argtypecode = ticket.QueryType;
                string argQueryCategorycode = ticket.QueryCategory;

                var objdata = GetMasterDataByName("QueryType", ticket.QueryType).FirstOrDefault();
                string argtypecode1 = "NA";
                if (objdata != null)
                {
                    argtypecode1 = objdata.Code;
                }
                //var objQueryCategorydata = GetMasterDataByName("QueryCategory", ticket.QueryCategory).FirstOrDefault();
                //string argQueryCategorycode = "NA";
                //if (objQueryCategorydata != null)
                //{
                //    argQueryCategorycode = objQueryCategorydata.Code;
                //}
                CheckAtmExistDTO checkAtmExistDTO = new CheckAtmExistDTO();

                var objaltlist = new List<CheckAtmExistChildDTO>();
                var objatmdata = new CheckAtmExistResponseDTO();

                objaltlist.Add(new CheckAtmExistChildDTO() { ATMID = ticket.ATMID, Date = ticket.IncidentDate });
                //  checkAtmExistDTO.MSP = tickets.MSP;
                checkAtmExistDTO.ATMList = objaltlist;

                var iRMSTSConnectorRepository = new RMSAutomationRepository();
                objatmdata = iRMSTSConnectorRepository.CheckAtmExist(checkAtmExistDTO);

                string bank = "NA";
                string region = "NA";
                string location = "NA";
                string hublocation = "NA";
                string company = "NA";
                //  string argatmid ="";
                ticket1.ATMID = ticket.ATMID;
                if (objatmdata.ATMList != null)
                {
                    if (!string.IsNullOrEmpty(objatmdata.ATMList[0].ATMCode))
                    {
                        ticket1.ATMpkid = Convert.ToInt32(objatmdata.ATMList[0].ATMID);
                    }

                    if (string.IsNullOrEmpty(objatmdata.ATMList[0].CompanyName))
                    {
                        company = "NA";
                    }
                    else
                    {
                        company = objatmdata.ATMList[0].CompanyName;
                    }
                    if (string.IsNullOrEmpty(objatmdata.ATMList[0].Bank))
                    {
                        bank = "NA";
                    }
                    else
                    {
                        bank = objatmdata.ATMList[0].Bank;
                    }
                    //  company =objatmdata.ATMList[0].CompanyName;
                    //   bank = objatmdata.ATMList[0].Bank;
                    region = objatmdata.ATMList[0].Region;
                    location = objatmdata.ATMList[0].Location;
                    hublocation = objatmdata.ATMList[0].HubLocation;
                }

                //if (ticket.TicketID == null)
                //{
                ticket1.TicketID = GetTicketID(tickets.MSP, BatchId) + ticket1.Id; // ticket.TicketID; //
                ticket.TicketID = ticket1.TicketID;
                //}
                //else
                //{
                //    ticket1.TicketID = ticket.TicketID;
                //}
                ticket1.TicketAttRefId = GetRefTicketID(tickets.MSP, BatchId, argtypecode1, indexvalue.ToString());
                ticket1.IsAtmExist = ticket.IsAtmExist;
                ticket1.EmailDate = tickets.Date;

                ticket1.QueryType = argtypecode;// ticket.QueryType;

                ticket1.QueryCategory = argQueryCategorycode;// ticket.QueryCategory;
                if (ticket.IncidentDate > Convert.ToDateTime("01-01-1900 00:00:00"))
                    ticket1.IncidentDate = ticket.IncidentDate;
                else
                {
                    ticket1.IncidentDate = Convert.ToDateTime("1900-01-01");
                }
                /*ticket1.ATMID = argatmid;*/// ticket.ATMID;
                ticket1.Bank = bank;// ticket.Bank;
                ticket1.Region = region;// ticket.Bank;
                ticket1.Account = company;// ticket.Account;
                ticket1.Location = location;// ticket.Location;
                ticket1.HubLocation = hublocation;// ticket.Location;
                ticket1.DisputedAmount = ticket.DisputedAmount;
                if (ticket.TargetAmount != null && ticket.TargetAmount > 0 && ticket.DisputedAmount != null)
                {
                    ticket1.TargetAmount = ticket.TargetAmount;
                }
                else
                {
                    ticket1.TargetAmount = ticket.DisputedAmount;
                }
                if (ticket.TransactonTime != null)
                {
                    ticket1.TransactonTime = ticket.TransactonTime;
                }
                else
                {
                    ticket1.TransactonTime = Convert.ToDateTime("01-01-1900 00:00:00");
                }
                ticket1.TransactionNo = ticket.TransactionNo;
                ticket1.TransAmount = ticket.TransactionAmount;
                if (ticket.CardNo.IndexOf(".") > -1)
                {
                    ticket.CardNo = ticket.CardNo.Substring(0, ticket.CardNo.IndexOf("."));
                }

                ticket1.CardNo = ticket.CardNo;
                ticket1.ReferenceNo = ticket.ReferenceNo;
                ticket1.DisputeComments = ticket.DisputeComments;
                if (ticket.EJFilePath != null)
                {
                    if (ticket.EJFilePath.Count() > 0)
                        ticket1.EJFilePath = ticket.EJFilePath[0].ToString();
                }
                ticket1.UploadFile = ticket.UploadFile;
                ticket1.Status = ticket.Status;
                //   ticket1.RuleErrorCode = ticket.RuleErrorCode;
                ticket1.ErrorCode = ticket.ErrorCode;
                ticket1.ErrorRemark = ticket.ErrorRemark;
                ticket1.DisputeRejected = ticket.DisputeRejected;
                ticket1.Justification = ticket.Justification;
                ticket1.DepositDate = ticket.DepositDate;
                ticket1.DepositAmount = ticket.DepositAmount;
                ticket1.InternalAction = ticket.InternalAction;
                ticket1.HOComments = ticket.HOComments;
                ticket1.AssignedTo = ticket.AssignedTo;
                ticket1.FirstCustodianCode = ticket.FirstCustodianCode;
                ticket1.FirstCustodianName = ticket.FirstCustodianName;
                ticket1.SecondCustodianCode = ticket.SecondCustodianCode;
                ticket1.SecondCustodianName = ticket.SecondCustodianName;
                ticket1.CreatedBy = ticket.CreatedBy;
                ticket1.CreatedDate = DateTime.Now;
                // ticket1.ModifiedBy = ticket.ModifiedBy;
                //ticket1.ModifiedDate = DateTime.Now;
                ticket1.CustCommentsType = ticket.CustCommentsType;
                ticket1.CustCommentsBy = ticket.CustCommentsBy;
                ticket1.CustComments = ticket.CustComments;
                ticket1.Source = ticket.Source;
                ticket1.CMSStatus = ticket.CMSStatus;
                ticket1.CustStatus = ticket.CustStatus;
                ticket1.ShortageFromDate = ticket.ShortageFromDate;
                ticket1.ProcessingRemarks = ticket.ProcessingRemarks;
                    
                DataSet cbrds = null;
                cBRConnectorRepository = new CBRConnectorRepository();
                cbrds = cBRConnectorRepository.GetLastirstEOD(ticket.ATMID, ticket1.IncidentDate.Value);

                if (cbrds != null)
                {
                    if (cbrds.Tables.Count > 0)
                    {
                        if (cbrds.Tables[0].Rows.Count > 0)
                        {
                            //  Console.WriteLine(cbrds.Tables[0].Rows[0][0].ToString());
                            ticket1.LastEOD = Convert.ToDateTime(cbrds.Tables[0].Rows[0][0].ToString());
                        }
                    }
                    if (cbrds.Tables.Count > 1)
                    {
                        if (cbrds.Tables[1].Rows.Count > 0)
                        {
                            ticket1.FirstEOD = Convert.ToDateTime(cbrds.Tables[1].Rows[0][0].ToString());
                        }
                    }

                }
                iRMSTSConnectorRepository = new RMSAutomationRepository();
                if (ticket.TransactionAmount == null) { ticket.TransactionAmount = 0; }
                if (ticket1.IncidentDate != null && ticket.TransactionAmount > 0 && ticket.TransactionNo != "00" && ticket.TransactionNo != "0" && ticket.TransactionNo != null) 
                {
                    var objduptkt = iRMSTSConnectorRepository.CheckDuplicateTicket(ticket.ATMID, argtypecode1, ticket.TransactionNo, ticket.TransactionAmount.Value, ticket1.IncidentDate.Value);
                    if (objduptkt != null)
                    {
                        ticket1.OldTicketId = objduptkt.TicketID;
                    }
                }
                if (ticket.CardNo != null && ticket.CardNo.Length > 10)
                {
                    string preno, postno, cardno;
                    int precardno, postcardno;
                    precardno = 0;
                    postcardno = 0;
                    cardno = ticket.CardNo;
                    if (cardno.IndexOf(".") > -1)
                    {
                        cardno=cardno.Substring(0, cardno.IndexOf("."));
                    }
                    preno = cardno.Substring(0, 6);
                    if (!IsNumeric(preno))
                    {
                        preno = cardno.Substring(0, 4);
                        if (IsNumeric(preno))
                        {
                            precardno = Convert.ToInt32(preno);
                        }
                    }
                    else
                    {
                        precardno = Convert.ToInt32(preno);
                    }

                    postno = cardno.Substring(cardno.Length - 4, 4);
                    if (IsNumeric(postno))
                    {
                        postcardno = Convert.ToInt32(postno);
                    }

                    if (precardno != 0 && postcardno != 0)
                    {
                        ticket1.AlternateCardNo = preno + postcardno;
                    }
                }
            

                rmstscontext.Ticket.Add(ticket1);

                TicketLog ticketLog = new TicketLog();

                ticketLog.MSP = tickets.MSP;
                ticketLog.BatchID = BatchId;// tickets.BatchID;
                ticketLog.TicketId = ticket1.TicketAttRefId;
                ticketLog.Status = ticket.Status;
                ticketLog.UploadedFileName = ticket.UploadFile;
                ticketLog.UploadedFile = ticket.UploadFile;
                ticketLog.DisputeRejected = ticket.DisputeRejected;
                ticketLog.Justification = ticket.Justification;
                ticketLog.InternalAction = ticket.InternalAction;
                ticketLog.CustCommentsType = ticket.CustCommentsType;
                ticketLog.CustCommentsBy = ticket.CustCommentsBy;
                if (!string.IsNullOrEmpty(ticket.CustComments))
                    ticketLog.CustComments = ticket.CustComments;
                else
                    ticketLog.CustComments = ticket.DisputeComments;
                ticketLog.CreatedBy = ticket.CreatedBy;
                ticketLog.CreatedDate = DateTime.Now;

                rmstscontext.TicketLog.Add(ticketLog);

                // Save Email file in TicketAttachments
                if (ticket.AttachmentsVisibleToLocation == null)
                {
                    ticket.AttachmentsVisibleToLocation = true;
                }
                if (!string.IsNullOrEmpty(tickets.Link))
                {
                    TicketAttachments Emailfileattachments = new TicketAttachments()
                    {
                        TicketId = ticket1.TicketAttRefId,
                        VisibleToHO = true,
                        VisibleToLocation = true,
                        VisibleToMSP = true,
                        CreatedBy = ticket.CreatedBy,
                        CreatedOn = DateTime.Now,
                        TypeOfAttachment = "EmailFile",
                        FilePath = tickets.Link
                    };

                    rmstscontext.TicketAttachments.Add(Emailfileattachments);
                }
                // Save EJ file in TicketAttachments

                //if (!string.IsNullOrEmpty(ticket.EJFilePath))
                //{
                //    TicketAttachments Ejfileattachments = new TicketAttachments()
                //    {
                //        TicketId = ticket1.TicketAttRefId,
                //        VisibleToHO = true,
                //        VisibleToLocation = false,
                //        VisibleToMSP = true,
                //        CreatedBy = ticket.CreatedBy,
                //        CreatedOn = DateTime.Now,
                //        TypeOfAttachment = "EJ",
                //        FilePath = ticket.EJFilePath
                //    };
                //    rmstscontext.TicketAttachments.Add(Ejfileattachments);
                //}

                if (ticket.EJFilePath != null)
                {
                    foreach (string Ejfilename in ticket.EJFilePath)
                    {
                        // Save other file in TicketAttachments
                        if (!string.IsNullOrEmpty(Ejfilename))
                        {
                            TicketAttachments Ejfileattachments = new TicketAttachments()
                            {
                                TicketId = ticket1.TicketAttRefId,
                                VisibleToHO = true,
                                VisibleToLocation = true,
                                VisibleToMSP = true,
                                CreatedBy = ticket.CreatedBy,
                                CreatedOn = DateTime.Now,
                                TypeOfAttachment = "EJ",
                                FilePath = Ejfilename
                            };
                            rmstscontext.TicketAttachments.Add(Ejfileattachments);
                        }
                    }
                }

                // Save log file in TicketAttachments
                if (!string.IsNullOrEmpty(ticket.UploadFile))
                {
                    TicketAttachments logfileattachments = new TicketAttachments()
                    {
                        TicketId = ticket1.TicketAttRefId,
                        VisibleToHO = true,
                        VisibleToLocation = true,
                        VisibleToMSP = true,
                        CreatedBy = ticket.CreatedBy,
                        CreatedOn = DateTime.Now,
                        TypeOfAttachment = "Log",
                        FilePath = ticket.UploadFile
                    };

                    rmstscontext.TicketAttachments.Add(logfileattachments);
                }
                if (ticket.OtherAttachments != null)
                {
                    foreach (string filename in ticket.OtherAttachments)
                    {
                        // Save other file in TicketAttachments
                        if (!string.IsNullOrEmpty(filename))
                        {
                            TicketAttachments logfileattachments = new TicketAttachments()
                            {
                                TicketId = ticket1.TicketAttRefId,
                                VisibleToHO = true,
                                VisibleToLocation = true,
                                VisibleToMSP = true,
                                CreatedBy = ticket.CreatedBy,
                                CreatedOn = DateTime.Now,
                                TypeOfAttachment = "others",
                                FilePath = filename
                            };

                            rmstscontext.TicketAttachments.Add(logfileattachments);
                        }
                    }
                }

                if (ticket.utilizationData != null)
                {
                    UtilizationData utilizationData = new UtilizationData();

                    utilizationData.MSP = tickets.MSP;
                    utilizationData.BatchID = BatchId;
                    utilizationData.TicketId = ticket1.TicketAttRefId;
                    utilizationData.CBRID = ticket.utilizationData.CBRID;
                    utilizationData.ATMID = ticket.ATMID;
                    if (ticket.utilizationData.EOD_Date != null)
                    {
                        if (ticket.utilizationData.EOD_Date > Convert.ToDateTime("01-01-1900 00:00:00"))
                            utilizationData.EOD_Date = ticket.utilizationData.EOD_Date.Value;
                        else
                        {
                            utilizationData.EOD_Date = Convert.ToDateTime("1900-01-01");
                        }
                    }
                    else
                    {
                        utilizationData.EOD_Date = Convert.ToDateTime("1900-01-01");
                    }
                    utilizationData.Overage = ticket.utilizationData.Overage;
                    utilizationData.Overage_Usage = ticket.utilizationData.Overage_Usage;
                    utilizationData.Overage_Balance = ticket.utilizationData.Overage_Balance;
                    utilizationData.Mid_cash = ticket.utilizationData.Mid_cash;
                    utilizationData.Mid_cash_Usage = ticket.utilizationData.Mid_cash_Usage;
                    utilizationData.Mid_Cash_Balance = ticket.utilizationData.Mid_Cash_Balance;
                    utilizationData.CreatedBy = ticket.ModifiedBy;
                    utilizationData.CreatedDate = DateTime.Now;
                    utilizationData.ModifiedBy = ticket.ModifiedBy;
                    utilizationData.ModifiedDate = DateTime.Now;
                    utilizationData.ATM_Balance = ticket.utilizationData.ATM_Balance;
                    utilizationData.ATM_Deposit = ticket.utilizationData.ATM_Deposit;
                    utilizationData.ATM_Usage = ticket.utilizationData.ATM_Usage;
                    rmstscontext.UtilizationData.Add(utilizationData);
                }
            }

            var objres = rmstscontext.SaveChanges();
            return true;
        }

        public string GetRefTicketID(string argMSP, string argBatchID,string argquerytype,string index)
        {
            if (argMSP == null) argMSP = "";
            else
            {
                if (argMSP.Length > 2)
                    argMSP = argMSP.Substring(0, 3);
            }
          
            string day = DateTime.Now.Day.ToString();
            string month = DateTime.Now.Month.ToString();
            string year = DateTime.Now.Year.ToString();
            string hour = DateTime.Now.Hour.ToString();
            string minute = DateTime.Now.Minute.ToString();
            string sec = DateTime.Now.Second.ToString();
            string TicketID = argMSP + "-" + argBatchID +"-"+ argquerytype + "-" + year + month.PadLeft(2, '0') + day.PadLeft(2, '0') + hour.PadLeft(2, '0') + minute.PadLeft(2, '0') + sec.PadLeft(2, '0') + index.ToString();
          //  string TicketID = argMSP + "-" + argBatchID;
            return TicketID;
        }


        public string GetTicketID(string argMSP, string argBatchID)
        {
            if (argMSP == null) argMSP = "";
            else
            {
                if(argMSP.Length > 2)
                argMSP = argMSP.Substring(0, 3);
            }
            //if (argbank.Length > 2) 
            //argbank = argbank.Substring(0, 2);
            //string day = DateTime.Now.Day.ToString();
            //string month = DateTime.Now.Month.ToString();
            //string year = DateTime.Now.Year.ToString();
            //string hour = DateTime.Now.Hour.ToString();
            //string minute = DateTime.Now.Minute.ToString();
            //string sec = DateTime.Now.Second.ToString();
            // string TicketID = argMSP + argbank+ argquerytype + "-" + year + month+ day + hour + minute + sec + index.ToString();
            string TicketID = argMSP + "-" + argBatchID;
            return TicketID;
        }
    
        public BaseResponse SaveAPILogData(APILog aPILog)
        {
            BaseResponse baseResponse = new BaseResponse() { Success = true, Message = "Success" };
            try
            {

                rmstscontext.APILogs.Add(aPILog);
                rmstscontext.SaveChanges();

            }
            catch (Exception ex)
            {
                throw;
            }
            return baseResponse;
        }

        //   where d.Type == "WNErrorCodes"
        public List<MasterDTO> GetErrorList()
        {
            MasterDTO masterDTO = new MasterDTO();
            List<MasterDTO> masterobj = (from d in rmstscontext.Masters
                                         where d.Type.Contains("error")
                                         select new MasterDTO
                                         {
                                             ID = d.ID,
                                             Type = d.Type,
                                             Code = d.Code,
                                             Name = d.Name
                                         }
                                       ).ToList();
            //rmstscontext.Masters.Where(d => d.Type == "WNErrorCodes").ToList();
            return masterobj;
        }

        public bool UpdateTicket(UpdateTicketDTO tickets,out RunRuleEngineModelDTO model)
        {

            rmstscontext = new RMSAUTOMATIONDBContext();
            Ticket ticket1;
            string argmspname = "";
            int indexvalue = 0;
            model = new RunRuleEngineModelDTO();
            if (!string.IsNullOrEmpty(tickets.Link))
            {
                var batch = rmstscontext.Batch.SingleOrDefault(i => i.BatchID == tickets.BatchID);
                batch.Link = tickets.Link;
                //argmspname = batch.FromEmail;
                //string firststr = "";
                //firststr = argmspname.Substring(0, argmspname.IndexOf("@")+1);
                //argmspname= argmspname.Remove(0, firststr.Count());
                //argmspname = argmspname.Replace(">","");
            }
            model.BatchId = tickets.BatchID;
            model.MSP = tickets.MSP;
            
            model.MSP_Domain = "agile@cms.com";
            
            List<RunRuleEngineTicketDTO> runRuleEngineTickets = new List<RunRuleEngineTicketDTO>();
            foreach (var ticket in tickets.TicketsData)
            {
                RunRuleEngineTicketDTO runRuleEngineTicketDTO  = new RunRuleEngineTicketDTO();

                ticket1 = rmstscontext.Ticket.SingleOrDefault(i => i.TicketID == ticket.TicketID);
                if (ticket1 == null)
                {
                    break;
                }
                if (!string.IsNullOrEmpty(ticket.DisputeComments))
                    ticket1.DisputeComments = ticket.DisputeComments;
                if (!string.IsNullOrEmpty(ticket.Status))
                    ticket1.Status = ticket.Status;
                if (!string.IsNullOrEmpty(ticket.ErrorCode))
                    ticket1.ErrorCode = ticket.ErrorCode;
                if (!string.IsNullOrEmpty(ticket.ErrorRemark))
                    ticket1.ErrorRemark = ticket.ErrorRemark;
                if (!string.IsNullOrEmpty(ticket.Justification))
                    ticket1.Justification = ticket.Justification;
                if (!string.IsNullOrEmpty(ticket.InternalAction))
                    ticket1.InternalAction = ticket.InternalAction;
                if (!string.IsNullOrEmpty(ticket.CMSStatus))
                    ticket1.CMSStatus = ticket.CMSStatus;
                if (!string.IsNullOrEmpty(ticket.FirstCustodianCode))
                    ticket1.FirstCustodianCode = ticket.FirstCustodianCode;
                if (!string.IsNullOrEmpty(ticket.FirstCustodianName))
                    ticket1.FirstCustodianName = ticket.FirstCustodianName;
                if (!string.IsNullOrEmpty(ticket.SecondCustodianCode))
                    ticket1.SecondCustodianCode = ticket.SecondCustodianCode;
                if (!string.IsNullOrEmpty(ticket.SecondCustodianName))
                    ticket1.SecondCustodianName = ticket.SecondCustodianName;
                if (!string.IsNullOrEmpty(ticket.ProcessingRemarks))
                    ticket1.ProcessingRemarks = ticket.ProcessingRemarks;
                if (!string.IsNullOrEmpty(ticket.WOORDERNo))
                    ticket1.WOORDERNo = ticket.WOORDERNo;

                if (ticket1.LastEOD == null && ticket.LastEOD != null)
                {
                    ticket1.LastEOD = ticket.LastEOD;
                }
                if (ticket1.FirstEOD == null && ticket.FirstEOD != null)
                {
                    ticket1.FirstEOD = ticket.FirstEOD;
                }

                ticket1.ModifiedBy = ticket.ModifiedBy;
                ticket1.ModifiedDate = DateTime.Now;
                if (ticket1.AccountNo == null && ticket.AccountNo != null)
                    ticket1.AccountNo = ticket.AccountNo;
                if (ticket1.CardNo == null && ticket.CardNo != null)
                    ticket1.CardNo = ticket.CardNo;
                if (ticket.TransactonTime != null)
                {
                    ticket1.TransactonTime = ticket.TransactonTime;
                }
                else
                {
                    ticket1.TransactonTime = Convert.ToDateTime("01-01-1900 00:00:00");
                }

                if (ticket.utilizationData != null)
                {
                    UtilizationData utilizationData = new UtilizationData();
                    utilizationData = rmstscontext.UtilizationData.SingleOrDefault(i => i.TicketId == ticket1.TicketAttRefId);
                    if (utilizationData != null)
                    {
                        utilizationData.EOD_Date = ticket.utilizationData.EOD_Date.Value;
                        utilizationData.Overage = ticket.utilizationData.Overage;
                        utilizationData.Overage_Usage = ticket.utilizationData.Overage_Usage;
                        utilizationData.Overage_Balance = ticket.utilizationData.Overage_Balance;
                        utilizationData.Mid_cash = ticket.utilizationData.Mid_cash;
                        utilizationData.Mid_cash_Usage = ticket.utilizationData.Mid_cash_Usage;
                        utilizationData.Mid_Cash_Balance = ticket.utilizationData.Mid_Cash_Balance;
                    }
                    else
                    {
                        utilizationData = new UtilizationData();
                        utilizationData.MSP = tickets.MSP;
                        utilizationData.BatchID = tickets.BatchID;
                        utilizationData.TicketId = ticket1.TicketAttRefId;
                        utilizationData.CBRID = ticket.utilizationData.CBRID;
                        utilizationData.ATMID = ticket.ATMID;
                        // utilizationData.EOD_Date = ticket.utilizationData.EOD_Date.Value;
                        if (ticket.utilizationData.EOD_Date != null)
                        {
                            if (ticket.utilizationData.EOD_Date > Convert.ToDateTime("01-01-1900 00:00:00"))
                                utilizationData.EOD_Date = ticket.utilizationData.EOD_Date.Value;
                            else
                            {
                                utilizationData.EOD_Date = Convert.ToDateTime("1900-01-01");
                            }
                        }
                        else
                        {
                            utilizationData.EOD_Date = Convert.ToDateTime("1900-01-01");
                        }

                        utilizationData.Overage = ticket.utilizationData.Overage;
                        utilizationData.Overage_Usage = ticket.utilizationData.Overage_Usage;
                        utilizationData.Overage_Balance = ticket.utilizationData.Overage_Balance;
                        utilizationData.Mid_cash = ticket.utilizationData.Mid_cash;
                        utilizationData.Mid_cash_Usage = ticket.utilizationData.Mid_cash_Usage;
                        utilizationData.Mid_Cash_Balance = ticket.utilizationData.Mid_Cash_Balance;
                        utilizationData.CreatedBy = ticket.ModifiedBy;
                        utilizationData.CreatedDate = DateTime.Now;
                        utilizationData.ModifiedBy = ticket.ModifiedBy;
                        utilizationData.ModifiedDate = DateTime.Now;
                        rmstscontext.UtilizationData.Add(utilizationData);
                    }
                }

                TicketLog ticketLog = new TicketLog();
                ticketLog.MSP = tickets.MSP;
                ticketLog.BatchID = tickets.BatchID;
                ticketLog.TicketId = ticket1.TicketAttRefId;
                ticketLog.Status = ticket.Status;
                ticketLog.UploadedFileName = ticket.UploadFile;
                ticketLog.UploadedFile = ticket.UploadFile;
                ticketLog.DisputeRejected = ticket.DisputeRejected;
                ticketLog.Justification = ticket.Justification;
                ticketLog.InternalAction = ticket.InternalAction;
                ticketLog.CustCommentsType = ticket.CustCommentsType;
                ticketLog.CustCommentsBy = ticket.CustCommentsBy;
                if (!string.IsNullOrEmpty(ticket.CustComments))
                    ticketLog.CustComments = ticket.CustComments;
                else
                    ticketLog.CustComments = ticket.DisputeComments;
                ticketLog.CreatedBy = ticket.ModifiedBy;
                ticketLog.CreatedDate = DateTime.Now;
                ticketLog.Source = ticket.Source;
                rmstscontext.TicketLog.Add(ticketLog);

                if (!string.IsNullOrEmpty(tickets.Link))
                {
                    TicketAttachments Emailfileattachments = new TicketAttachments()
                    {
                        TicketId = ticket1.TicketAttRefId,
                        VisibleToHO = true,
                        VisibleToLocation = true,
                        VisibleToMSP = true,
                        CreatedBy = ticket.ModifiedBy,
                        CreatedOn = DateTime.Now,
                        TypeOfAttachment = "EmailFile",
                        FilePath = tickets.Link
                    };

                    rmstscontext.TicketAttachments.Add(Emailfileattachments);
                }
                // Save Email file in TicketAttachments
                if (!string.IsNullOrEmpty(ticket.UploadFile))
                {
                    TicketAttachments logfileattachments = new TicketAttachments()
                    {
                        TicketId = ticket1.TicketAttRefId,
                        VisibleToHO = true,
                        VisibleToLocation = true,
                        VisibleToMSP = true,
                        CreatedBy = ticket.ModifiedBy,
                        CreatedOn = DateTime.Now,
                        TypeOfAttachment = "Log",
                        FilePath = ticket.UploadFile
                    };

                    rmstscontext.TicketAttachments.Add(logfileattachments);
                }

                if (ticket.EJFilePath != null)
                {
                    foreach (string Ejfilename in ticket.EJFilePath)
                    {
                        // Save other file in TicketAttachments
                        if (!string.IsNullOrEmpty(Ejfilename))
                        {
                            TicketAttachments Ejfileattachments = new TicketAttachments()
                            {
                                TicketId = ticket1.TicketAttRefId,
                                VisibleToHO = true,
                                VisibleToLocation = false,
                                VisibleToMSP = true,
                                CreatedBy = ticket.ModifiedBy,
                                CreatedOn = DateTime.Now,
                                TypeOfAttachment = "EJ",
                                FilePath = Ejfilename
                            };
                            rmstscontext.TicketAttachments.Add(Ejfileattachments);
                        }
                    }
                }

                if (ticket.OtherAttachments != null)
                {
                    foreach (string filename in ticket.OtherAttachments)
                    {
                        // Save other file in TicketAttachments
                        if (!string.IsNullOrEmpty(filename))
                        {
                            TicketAttachments logfileattachments = new TicketAttachments()
                            {
                                TicketId = ticket1.TicketAttRefId,
                                VisibleToHO = true,
                                VisibleToLocation = true,
                                VisibleToMSP = true,
                                CreatedBy = ticket.ModifiedBy,
                                CreatedOn = DateTime.Now,
                                TypeOfAttachment = "others",
                                FilePath = filename
                            };

                            rmstscontext.TicketAttachments.Add(logfileattachments);
                        }
                    }
                }
                if (tickets.RunRuleEngine == true)
                {
                    runRuleEngineTicketDTO.TicketId = ticket.TicketID;
                    runRuleEngineTicketDTO.ATMID = ticket.ATMID;
                    runRuleEngineTicketDTO.Date = ticket1.IncidentDate.Value.ToString("dd-MMM-yyyy");
                    runRuleEngineTicketDTO.Txn_No = ticket1.TransactionNo;
                    string[] items = ticket.EJFilePath;
                    if (items != null)
                        try
                        {
                            items = items.Select(x => x.Replace("Z:", "nfsmount")).ToArray();
                        }
                        catch { }
                    runRuleEngineTicketDTO.Ej_File = items;
                    runRuleEngineTicketDTO.Disputed_Amount = ticket1.DisputedAmount;
                    runRuleEngineTicketDTO.Transaction_Amount = ticket1.TransAmount;
                 
                    runRuleEngineTickets.Add(runRuleEngineTicketDTO);
                }
                indexvalue++;
            }
            model.TicketData = runRuleEngineTickets;
            rmstscontext.SaveChanges();
            if (indexvalue > 0)
                return true;
            else
                return false;
        }

        public CheckAtmExistResponseDTO CheckAtmExist(CheckAtmExistDTO checkAtmExistDTO)
        {
            rmstscontext = new RMSAUTOMATIONDBContext();
            CheckAtmExistResponseDTO checkAtmExistResponseDTO = new CheckAtmExistResponseDTO();
            checkAtmExistResponseDTO.ATMList = new List<ChildAtmRepsponse>();
            foreach (var atmval in checkAtmExistDTO.ATMList)
            {
                Atmmaster atmobj = rmstscontext.Atmmasters.Where(i => i.atmcode == atmval.ATMID// && i.MSP == checkAtmExistDTO.MSP//.FirstOrDefault();
                                                    && ( i.HandOverDate == null || i.HandOverDate >= atmval.Date) && i.TakeOverDate <= atmval.Date).FirstOrDefault();
                if (atmobj != null)
                {
                    checkAtmExistResponseDTO.ATMList.Add(new ChildAtmRepsponse() { ATMID = atmobj.pkid.ToString(), CompanyName = atmobj.Company,MSP= atmobj.MSP, ATMCode= atmobj.atmcode,Bank= atmobj.BankName,Type= atmobj.AtmType, Region= atmobj.RoCode, Location= atmobj.LocationCode,HubLocation = atmobj.HubLocationCode, Flag = true });
                }

                //  rmstscontext.Atmmasters.Where(i => i.atmcode = atmval.ATMID)
                else
                {
                    checkAtmExistResponseDTO.ATMList.Add(new ChildAtmRepsponse() { ATMID = atmval.ATMID, Flag = false });
                }
            }
            return checkAtmExistResponseDTO;
        }
        public List<RepeatCardCheckResponseDTO> RepeatCardCheck(List<RepeatCardCheckDTO> repeatCardCheckDTO)
        {
            string[] errorcodelist = { "Power Failure", "CDM Error", "E * Error", "Dispenser Error" }; //E* Error,Dispenser Error

            List<RepeatCardCheckResponseDTO> cardCheckResponseDTO = new List<RepeatCardCheckResponseDTO>();
            foreach (var cardval in repeatCardCheckDTO)
            {
                string preno, postno, cardno,alternatecardno;
                int precardno, postcardno;
                precardno = 0;
                postcardno = 0;
                cardno = cardval.CardNo;
                if (cardno.IndexOf(".") > -1)
                {
                    cardno= cardno.Substring(0, cardno.IndexOf("."));
                }
                preno = cardno.Substring(0, 6);
                if (!IsNumeric(preno))
                {
                    preno = cardno.Substring(0, 4);
                    if (IsNumeric(preno))
                    {
                        precardno = Convert.ToInt32(preno);
                    }
                }
                else
                {
                    precardno = Convert.ToInt32(preno);
                }

                postno = cardno.Substring(cardno.Length - 4, 4);
                if (IsNumeric(postno))
                {
                    postcardno = Convert.ToInt32(postno);
                }
                alternatecardno = "";
                if (precardno != 0 && postcardno != 0)
                {
                    alternatecardno = preno + postcardno;
                }
                int totalticketsoncard = 0;

                DateTime filterdate = cardval.TransDate.AddDays(-365);
                List<Ticket> Ticketdata = new List<Ticket>();
                List<OldRMSTickets> OldTicketdata = new List<OldRMSTickets>();
                //if (!string.IsNullOrEmpty(alternatecardno))
                //    {
                //    Ticketdata = rmstscontext.Ticket
                //         .Where(i => i.AlternateCardNo == alternatecardno
                //                        && i.IncidentDate >= filterdate)
                //                        .Join(rmstscontext.ErrorCodeMasterdistinct, outer => outer.ErrorCode, inner => inner.ErrorCode , (outer, inner) => new { outer, inner })

                //                        && errorcodelist.Contains(i.ErrorCode)
                //                        .ToList();
                //     OldTicketdata = rmstscontext.OldRMSTickets.Where(i => i.AlternateCardNo == alternatecardno
                //                    && errorcodelist.Contains(i.errorcode)).ToList();


                //     totalticketsoncard = Ticketdata.Count() + OldTicketdata.Count();
                //}
                //else
                //{
                //     Ticketdata = rmstscontext.Ticket.Where(i => i.CardNo == cardval.CardNo
                //                   && i.IncidentDate >= filterdate //cardval.TransDate
                //                   && errorcodelist.Contains(i.ErrorCode)).ToList();
                //     OldTicketdata = rmstscontext.OldRMSTickets.Where(i => i.cardno == cardval.CardNo
                //                    && errorcodelist.Contains(i.errorcode)).ToList();
                //     totalticketsoncard = Ticketdata.Count() + OldTicketdata.Count();
                //}
                // var result = rmstscontext.Database.ExecuteSqlCommand("EXEC [dbo].[GetDataForRepeatCardCheck] {0}, {1}, {2}", cardval.CardNo, alternatecardno, cardval.TransDate.ToString("yyyy-MM-dd"));
                //  var result = rmstscontext.Database.ExecuteSqlCommand("exec [GetDataForRepeatCardCheck] '652160XXXXXX2159','6521602159','2020-04-06'");

              //  var CardNo = new SqlParameter("@CardNo", "652160XXXXXX2159");
                var CardNo = new SqlParameter("@CardNo", cardno);
               
              //  var AlternateCardNo = new SqlParameter("@AlternateCardNo", "6521602159");
                var AlternateCardNo = new SqlParameter("@AlternateCardNo", alternatecardno);
              //  var IncidentDate = new SqlParameter("@IncidentDate","2020-04-06");
                var IncidentDate = new SqlParameter("@IncidentDate", cardval.TransDate.ToString("yyyy-MM-dd"));

                var returnCode = new SqlParameter("@ReturnCode", SqlDbType.Int);
                returnCode.Direction = ParameterDirection.Output;

                var outParam = new SqlParameter("@StatusLog", SqlDbType.Int);
                outParam.Direction = ParameterDirection.Output;

                var sql = "exec @ReturnCode = [GetDataForRepeatCardCheck] @CardNo,@AlternateCardNo,@IncidentDate, @StatusLog OUT";
                var data = rmstscontext.Database.SqlQuery<object>(sql, returnCode, CardNo, AlternateCardNo, IncidentDate, outParam);

                // Read the results so that the output variables are accessible
                var item = data.FirstOrDefault();

                int returnCodeValue = (int)returnCode.Value;
                var outParamValue = (int)outParam.Value;

                //var data = rmstscontext.Database.SqlQuery<int>(@"declare @num int
                //                    exec  @num = [GetDataForRepeatCardCheck] '652160XXXXXX2159','6521602159','2020-04-06',@num 
                //                    select @num");

                //var result = data.First();

                if (outParamValue > 2)
                {
                    cardCheckResponseDTO.Add(new RepeatCardCheckResponseDTO() { CardNo = cardval.CardNo, IsRepeatCard = true, RepeatCount = outParamValue });
                }
                else
                {
                    cardCheckResponseDTO.Add(new RepeatCardCheckResponseDTO() { CardNo = cardval.CardNo, IsRepeatCard = false, RepeatCount = outParamValue});
                }
            }
            return cardCheckResponseDTO;
        }

        public List<CaseCountATMWiseResponseDTO> ATMWiseCaseCount(List<CaseCountATMWiseDTO> caseCountATMWiseDTOs)
        {
            List<CaseCountATMWiseResponseDTO> checkAtmExistResponseDTO = new List<CaseCountATMWiseResponseDTO>();

            foreach (var atmval in caseCountATMWiseDTOs)
            {
                DateTime filterdate = atmval.TransDate.AddDays(-30);
                string[] AcceptedStatus = { "7", "8" };
                string[] AcceptedStatusNew = { "M-ACCEPT", "ACCEPT" };
                List<Ticket> atmobj = rmstscontext.Ticket.Where(i => i.ATMID == atmval.ATMId && i.IncidentDate >= filterdate).ToList();
                List<Ticket> atmaccobj = rmstscontext.Ticket.Where(i => i.ATMID == atmval.ATMId && i.IncidentDate >= filterdate && AcceptedStatusNew.Contains(i.Status)).ToList();
                List<OldRMSTickets> old_atmobj = rmstscontext.OldRMSTickets.Where(i => i.atmid == atmval.ATMId && i.TranDate >= filterdate).ToList();
                List<OldRMSTickets> old_atmaccobj = rmstscontext.OldRMSTickets.Where(i => i.atmid == atmval.ATMId && i.TranDate >= filterdate && AcceptedStatus.Contains(i.custstatus)).ToList();

                int argTotalCaseCount = 0;
                int argAcceptedCaseCount = 0;

                if (atmobj != null)
                {
                    argTotalCaseCount = atmobj.Count;
                }
                if (old_atmobj != null)
                {
                    argTotalCaseCount += old_atmobj.Count;
                }

                if (atmaccobj != null)
                {
                    argAcceptedCaseCount = atmaccobj.Count;
                }
                if (old_atmaccobj != null)
                {
                    argAcceptedCaseCount += old_atmaccobj.Count;
                }
                checkAtmExistResponseDTO.Add(new CaseCountATMWiseResponseDTO() { ATMId = atmval.ATMId, TotalCaseCount = argTotalCaseCount, AcceptedCaseCount = argAcceptedCaseCount });

                //if (atmobj != null)
                //{
                //    if (atmobj != null)
                //    {
                //        checkAtmExistResponseDTO.Add(new CaseCountATMWiseResponseDTO() { ATMId = atmval.ATMId, TotalCaseCount = atmobj.Count, AcceptedCaseCount = atmaccobj.Count() });
                //    }
                //    else
                //    {
                //        checkAtmExistResponseDTO.Add(new CaseCountATMWiseResponseDTO() { ATMId = atmval.ATMId, TotalCaseCount = atmobj.Count, AcceptedCaseCount = 0 });
                //    }
                //}
                //else
                //{
                //    checkAtmExistResponseDTO.Add(new CaseCountATMWiseResponseDTO() { ATMId = atmval.ATMId,TotalCaseCount=0, AcceptedCaseCount = 0 });
                //}
            }
            return checkAtmExistResponseDTO;
        }

        [Obsolete]
        public List<UtilizationDataDTO> GetUtilizationData(string argatmid, DateTime eoddate)
        {
            eoddate = eoddate.Date;
            DateTime eoddate1 = eoddate.AddDays(1);
            // ticketid,transnumber ,incident date 

            List<UtilizationDataDTO> objUtilizationDataDTO = (from d in rmstscontext.UtilizationData
                                                              join f in rmstscontext.Ticket on d.TicketId equals f.TicketAttRefId
                                                              where d.ATMID.Equals(argatmid) && d.EOD_Date  >= eoddate && d.EOD_Date < eoddate1
                                                              select new UtilizationDataDTO
                                                              {
                                                                  ID = d.ID,
                                                                  ATMID = d.ATMID,
                                                                  TicketID = f.TicketID,
                                                                  IncidentDate = f.IncidentDate,
                                                                  TransactionNo = f.TransactionNo,
                                                                  CBRID = d.CBRID,
                                                                  EOD_Date = d.EOD_Date.Value,
                                                                  Overage = d.Overage.Value,
                                                                  Overage_Usage = d.Overage_Usage.Value,
                                                                  Overage_Balance = d.Overage_Balance.Value,
                                                                  Mid_cash = d.Mid_cash.Value,
                                                                  Mid_cash_Usage = d.Mid_cash_Usage.Value,
                                                                  Mid_Cash_Balance = d.Mid_Cash_Balance.Value,
                                                                  ATM_Balance = d.ATM_Balance,
                                                                  ATM_Deposit = d.ATM_Deposit,
                                                                  ATM_Usage = d.ATM_Usage
                                                              }
                                  ).OrderByDescending(i => i.ID).ToList();
            return objUtilizationDataDTO;
        }
        public List<MasterDTO> GetMasterData(string argtype)
        {           
            List<MasterDTO> masterobj = (from d in rmstscontext.Masters
                                         where d.Type.Equals(argtype)
                                         select new MasterDTO
                                         {
                                             ID = d.ID,
                                             Type = d.Type,
                                             Code = d.Code,
                                             Name = d.Name
                                         }
                                  ).ToList();
            return masterobj;
           }
        public List<MasterDTO> GetMasterDataByName(string argtype,string argname)
        {
            List<MasterDTO> masterobj = (from d in rmstscontext.Masters
                                         where d.Type.Equals(argtype) && d.Name.Equals(argname)
                                         select new MasterDTO
                                         {
                                             ID = d.ID,
                                             Type = d.Type,
                                             Code = d.Code,
                                             Name = d.Name
                                         }
                                  ).ToList();
            return masterobj;
        }
        public List<MasterDTO> GetMasterDataByCode(string argtype, string argcode)
        {
            List<MasterDTO> masterobj = (from d in rmstscontext.Masters
                                         where d.Type.Equals(argtype) && d.Code.Equals(argcode) 
                                         select new MasterDTO
                                         {
                                             ID = d.ID,
                                             Type = d.Type,
                                             Code = d.Code,
                                             Name = d.Name
                                         }
                                  ).ToList();
            return masterobj;
        }
        public List<ErrorMasterDTO> GetErrorStatusData(ErrorListDTO errorListDTO)
        {
            List<ErrorMasterDTO> masterobj = new List<ErrorMasterDTO>();
            if (errorListDTO != null&&  !string.IsNullOrEmpty(errorListDTO.modulecode))
            {
               masterobj = (from d in rmstscontext.ErrorCodeMaster where d.Module_code== errorListDTO.modulecode 
                                && (d.TD_status == errorListDTO.td_status || string.IsNullOrEmpty(errorListDTO.td_status))
                                && (d.M_status_error== errorListDTO.M_status_error || string.IsNullOrEmpty(errorListDTO.M_status_error))

                            select new ErrorMasterDTO
                                                  {
                                                      SNo = d.ID,
                                                      MachineMake = d.Machine_Make,
                                                      Modulecode = d.Module_code,
                                                      Module_Discreption = d.Module_Discreption,
                                                      TD_status = d.TD_status,
                                                      TD_status_Discreption = d.TD_status_Discreption,
                                                      M_status_error = d.M_status_error,
                                                      M_status_error_Discreption = d.M_status_error_Discreption,
                                                      Type = d.Type,
                                                      Category = d.Category,
                                                      ErrorBucket = d.ErrorBucket,
                                                      ErrorCode = d.ErrorCode,
                                                      Remarks = d.Remarks,
                                                      NextTrans_Flag=d.NextTrans_Flag
                                                  }
                                      ).ToList();
            }
            else
            {
                {
                    masterobj = (from d in rmstscontext.ErrorCodeMaster where d.Category=="CC"

                                 select new ErrorMasterDTO
                                 {
                                     SNo = d.ID,
                                     MachineMake = d.Machine_Make,
                                     Modulecode = d.Module_code,
                                     Module_Discreption = d.Module_Discreption,
                                     TD_status = d.TD_status,
                                     TD_status_Discreption = d.TD_status_Discreption,
                                     M_status_error = d.M_status_error,
                                     M_status_error_Discreption = d.M_status_error_Discreption,
                                     Type = d.Type,
                                     Category = d.Category,
                                     ErrorBucket = d.ErrorBucket,
                                     ErrorCode = d.ErrorCode,
                                     Remarks = d.Remarks,
                                     NextTrans_Flag = d.NextTrans_Flag
                                 }
                                           ).ToList();
                }
            }

            return masterobj;
        }

        public bool UpdateBatchEmailResponse(EmailResponseAPIDTO responseAPIDTO)
        {

            if (responseAPIDTO.Flag == true)
            {
                rmstscontext = new RMSAUTOMATIONDBContext();
                //var result = rmstscontext.Database.ExecuteSqlCommand("Update batch set FinalResponseSent={2},DownloadPath={1} where  BatchID={0}", responseAPIDTO.BatchID, responseAPIDTO.EmailsResponsePath, true);
                var result = rmstscontext.Database.ExecuteSqlCommand("EXEC [dbo].[SaveEmailReponse] {0}, {1}, {2},{3}", responseAPIDTO.BatchID, responseAPIDTO.EmailsResponsePath, responseAPIDTO.Flag, responseAPIDTO.CompleteBatchResponse);
                return true;
            }
            else
            {
                return false;
            }
        }

        public List<Ticket> GetTicketDataFromBatch(string batchid)
        {
            rmstscontext = new RMSAUTOMATIONDBContext();
            List<Ticket> objtickets = rmstscontext.Ticket.Where(d => d.BatchID == batchid).ToList();
            return objtickets;
        }
        public void Dispose()
        {
           // context.Dispose();
            rmstscontext.Dispose();
           // cbrcontext.Dispose();
        }                                                                                                                                           


    }
}