using AutoMapper;
using CMS_DAL.RMS_Ticketing_DAL;
using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMS_Repository.Interface.RMS_Interface;
using CMSDTO;
using CMSDTO.Models.Request;
using CMSDTO.Models.Response;
using Newtonsoft.Json;
using RestSharp;
using RMS_Ticketing.Common;
using RMS_Ticketing.Utility;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace RMS_Ticketing.Controller
{
    [RoutePrefix("api/Connector")]
    public class ConnectorController : ApiController
    {
        private ICBRConnectorRepository cBRConnectorRepository;
        private IRMSTSConnectorRepository iRMSTSConnectorRepository;
        // private IRMSConnectorRepository iRMSConnectorRepository;
        private Encryption encryption;

        [Route("GetToken")]
        [HttpPost]
        public BaseResponse GetToken(MSPPassswordConfigDTO argMSP)
        {
            BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
            try
            {
                encryption = new Encryption();
                // string argencryptedtext = encryption.EncryptString(argMSP); //gnpm06/W/7SvJy+Go7CP4A==
               
                string argdecryptedtext = encryption.DecryptString(argMSP.MSP);
                //Check MSP in master and return token
                iRMSTSConnectorRepository = new RMSAutomationRepository();
                var objmsp = iRMSTSConnectorRepository.GetMSPDetails(argdecryptedtext);
                if (objmsp != null)
                {

                    string client_id = System.Configuration.ConfigurationManager.AppSettings["ClientId"];
                    string URL = System.Configuration.ConfigurationManager.AppSettings["URL"];
                    var restClient = new RestClient(URL);
                    var request = new RestRequest(Method.POST) { Resource = "/oauth2/token2" };

                    request.AddParameter("client_id", client_id);
                    request.AddParameter("grant_type", "password");
                    request.AddParameter("username", argMSP);
                    request.AddParameter("password", argMSP);
                    string msg = string.Empty;
                    var response = restClient.Post(request);
                    msg = response.Content;
                    AccessTokenResponse responsetoken = (JsonConvert.DeserializeObject<AccessTokenResponse>(response.Content));
                    baseResponse.Success = true;
                    baseResponse.Message = "Success";
                    baseResponse.UserToken = responsetoken;
                }
                else
                {
                    baseResponse.Success = false;
                    baseResponse.Message = "No Such MSP Found";
                    baseResponse.UserToken = null;
                }

            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
                baseResponse.UserToken = null;
            }
            return baseResponse;
        }

        [Route("CreateTicket")]
        [HttpPost]
        [Authorize]
        public BaseResponse CreateTicket(CreateTicketDTO createTicketDTO)
        {
            // return null;
            BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
            try
            {

                iRMSTSConnectorRepository = new RMSAutomationRepository();


                List<Ticket> tickets = new List<Ticket>();
                Batch batch = new Batch();
                batch.MSP = createTicketDTO.MSP;
                batch.BatchID = batch.ID.ToString();
                batch.Date = createTicketDTO.Date;
                batch.EmailSubject = createTicketDTO.EmailSubject;
                batch.EmailIdentifier = createTicketDTO.EmailIdentifier;
                batch.EmailBody = createTicketDTO.EmailBody;
                batch.message_id = createTicketDTO.message_id;
                batch.DownloadPath = createTicketDTO.DownloadPath;
                batch.FromEmail = createTicketDTO.FromEmail;
                batch.To = createTicketDTO.To;
                batch.cc = createTicketDTO.cc;
                batch.Link = createTicketDTO.Link;
                batch.CreatedBy = createTicketDTO.CreatedBy;
                batch.CreatedDate = DateTime.Now;
                //  var result = true;
                var result = iRMSTSConnectorRepository.CreateBatch(batch);
                int idlen = 8;
                string Idlength = System.Configuration.ConfigurationManager.AppSettings["IDLength"];
                try
                {
                    if (Idlength != null)
                    {
                        idlen = Convert.ToInt32(Idlength);
                    }
                }
                catch
                {
                    idlen = 8;
                }
                batch.BatchID = batch.ID.ToString().PadLeft(idlen, '0');

                var result1 = iRMSTSConnectorRepository.UpdateBatch(batch);
                //   var result = true;
                tempBatchSet tempBatchSet = new tempBatchSet();
                bool saveflag = false;
                if (result == true)
                {
                   // bool saveflag = iRMSTSConnectorRepository.CreateTicket(createTicketDTO, batch.BatchID);
                    try
                    {
                        saveflag = iRMSTSConnectorRepository.CreateTicket(createTicketDTO, batch.BatchID);
                    }
                    catch (Exception ex)
                    {
                        bool deleteflag = iRMSTSConnectorRepository.DeleteBatch(batch);
                        string argmessage = ex.Message;
                        if (ex.InnerException != null)
                        {
                            argmessage += ex.InnerException;
                        }
                        baseResponse.Success = false;
                        baseResponse.Message = argmessage;

                        _ = EmailSenderAsync(batch.EmailSubject, batch.EmailSubject, batch.Date.Value, argmessage);
                        return baseResponse;
                    }

                    bool saveflag1 = false;
                    if (saveflag == true)
                        saveflag1 = iRMSTSConnectorRepository.UpdateTicketID(batch.BatchID, idlen);
                    else
                    {
                        bool deleteflag = iRMSTSConnectorRepository.DeleteBatch(batch);
                        _ = EmailSenderAsync(batch.EmailSubject, batch.EmailSubject, batch.Date.Value, "Error occured");
                    }
                    if (saveflag1 == true)
                    {
                        baseResponse.Success = true;
                        baseResponse.Message = createTicketDTO.TicketsData.Count().ToString() + " Tickets Created Successfully Under Batch ID " + batch.BatchID;
                        _ = EmailSenderAsync(batch.EmailSubject, batch.EmailSubject, batch.Date.Value, baseResponse.Message);
                    }
                }
            }
            catch (Exception ex)
            {
                string argmessage = ex.Message;
                if (ex.InnerException != null)
                {
                    argmessage += ex.InnerException;
                }
                baseResponse.Success = false;
                baseResponse.Message = argmessage;
            }
            return baseResponse;
        }
        public async Task<bool> EmailSenderAsync(string EmailSubect,string EmailFrom,DateTime EmailTime,string argerrormessage)
        {
            EmailData emailData = new EmailData();
            try
            {
                emailData.To = ConfigurationManager.AppSettings["EmailIDForFailedAPI"].ToString();
            }
            catch
            {
                emailData.To = "vrushali.sawant@cms.com";
            }
            emailData.Subject = "Create Ticket API is Failed"; 
            emailData.BodyText = "";
            emailData.BodyHtml = String.Format("Hello, \n\r Create Ticket API has failed for below details, \n EmailDate : {0} , \n EmailFrom:{1}, \nEmailSubject : {2}, \nError:{3} ", EmailTime, EmailFrom, EmailSubect, argerrormessage);
            emailData.CC = "";

            string methodname = ConfigurationManager.AppSettings["EmailApiMethod"].ToString();
            var restClient = new RestClient(ConfigurationManager.AppSettings["EmailApiUrl"].ToString());
            

            var request = new RestRequest(Method.POST) { Resource = methodname, RequestFormat = DataFormat.Json };
            request.AddJsonBody(emailData);

            string msg = string.Empty;
            var response = restClient.Post(request);
            msg = response.Content;

            //var respemail = await SendEmails(emailData, ConfigurationManager.AppSettings["EmailApiUrl"].ToString(), RestSharp.Method.POST);
            //var productResponse = JsonConvert.DeserializeObject<dynamic>(respemail.Content);

            return (response.StatusCode ==HttpStatusCode.OK? false : true);
           // return Task.FromResult(((string)productResponse.success).ToLower() != "true" ? false : true;);
        }
        public async Task<IRestResponse> SendEmails(EmailData emailConfig, string fullUrl, Method methodType)
        {
            Uri serviceUrl = new Uri(fullUrl);
            //var request = CreateRequest(methodType);
            var request = new RestRequest(methodType);
         //   var request = new RestRequest(Method.POST) { Resource = methodname, RequestFormat = DataFormat.Json };
         //   request.AddJsonBody(model);
            string json = JsonConvert.SerializeObject(emailConfig, Formatting.Indented);
            request.AddParameter("application/json", json, ParameterType.RequestBody);
            return new RestClient(fullUrl).Execute(request);
        }


        //[Route("Batch_Source_File_Upload")]
        //[HttpPost]
        //public BaseResponse Batch_Source_File_Upload(Batch_Source_File_UploadDTO batch_Source_File_Upload)
        //{
        //    BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
        //    return baseResponse;
        //}
        //[Route("Ticket_File_Upload")]
        //[HttpPost]
        //public BaseResponse Ticket_File_Upload(Ticket_File_UploadDTO ticket_File_UploadDTO)
        //{
        //    BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
        //    return baseResponse;
        //}
        //[Route("EJ_FileReader")]
        //[HttpPost]
        //public BaseResponse EJ_FileReader(EJ_FileReaderDTO eJ_FileReaderDTO)
        //{
        //    BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
        //    return baseResponse;
        //}

        [Route("CBR_DataReader")]
        [HttpPost]
        [Authorize]
        public BaseResponse<List<CBREntryDTO>> CBR_DataReader(CBR_DataReaderDTO cBR_DataReaderDTO)
        {
            BaseResponse<List<CBREntryDTO>> baseResponse = new BaseResponse<List<CBREntryDTO>>() { Success = false, Message = "" };
            try
            {
                cBRConnectorRepository = new CBRConnectorRepository();
                var result = cBRConnectorRepository.CBR_DataReader(cBR_DataReaderDTO.ATMID, cBR_DataReaderDTO.Date);

                if (result != null)
                {
                    if (result.Count > 0)
                    {
                        baseResponse.Success = true;
                        baseResponse.Entity = result;
                    }
                    else
                    {
                        baseResponse.Entity = result;
                        baseResponse.Message = "No Records Found";
                        baseResponse.Success = true;
                    }
                }
            }
            catch (Exception ex)
            {
                string argmessage = ex.Message;
                if (ex.InnerException != null)
                {
                    argmessage += ex.InnerException;
                }
                baseResponse.Success = false;
                baseResponse.Message = argmessage;
                baseResponse.Entity = null;
            }
            return baseResponse;
        }

        [Route("Utilization_DataReader")]
        [HttpPost]
        [Authorize]
        public BaseResponse<List<UtilizationDataDTO>> Utilization_DataReader(CBR_DataReaderDTO cBR_DataReaderDTO)
        {
            BaseResponse<List<UtilizationDataDTO>> baseResponse = new BaseResponse<List<UtilizationDataDTO>>() { Success = false, Message = "" };
            try
            {
                iRMSTSConnectorRepository = new RMSAutomationRepository();
                var result = iRMSTSConnectorRepository.GetUtilizationData(cBR_DataReaderDTO.ATMID, cBR_DataReaderDTO.Date);
                baseResponse.Success = true;
                baseResponse.Entity = result;
            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
                baseResponse.Entity = null;
            }
            return baseResponse;
        }

        [Route("Update_Ticket_Status")]
        [HttpPost]
        public BaseResponse Update_Ticket_Status(UpdateTicketDTO updateTicketDTO)
        {
        
            BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
            try
            {
                if (updateTicketDTO != null)
                {

                    RunRuleEngineModelDTO model = new RunRuleEngineModelDTO();
                    iRMSTSConnectorRepository = new RMSAutomationRepository();

                    List<Ticket> tickets = new List<Ticket>();

                    bool saveflag = iRMSTSConnectorRepository.UpdateTicket(updateTicketDTO, out model);
                    if (saveflag == true )
                    {
                        if (updateTicketDTO.RunRuleEngine == true)
                        {
                            string methodname = ConfigurationManager.AppSettings["WebApiRuleEngineMethod"].ToString();
                            var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiRuleEngineUrl"].ToString());

                            var request = new RestRequest(Method.POST) { Resource = methodname, RequestFormat = DataFormat.Json };
                            request.AddJsonBody(model);

                            string msg = string.Empty;
                            var response = restClient.Post(request);
                            msg = response.Content;
                            IRMSTSConnectorRepository authentication = new RMSAutomationRepository();
                            APILog aPILog = new APILog
                            {
                                RequestContent = new JavaScriptSerializer().Serialize(model),// model.ToString(),
                                RequestMethod = "POST",
                                RequestTimestamp = DateTime.Now,
                                RequestContentType = "application/json",
                                RequestUri = restClient.BaseUrl + methodname,
                                ResponseContent = response.Content,
                                ResponseContentType = response.ContentType,
                                ResponseStatusCode = response.StatusCode,
                                ResponseTimestamp = DateTime.Now
                            };
                            BaseResponse baseResponse1 = authentication.SaveAPILogData(aPILog);


                            baseResponse.Success = true;
                            baseResponse.Message = "Tickets Updated Successfully" + msg;
                        }
                        else
                        {

                            baseResponse.Success = true;
                            baseResponse.Message = "Tickets Updated Successfully" ;
                        }
                    }
                    else
                    {
                        baseResponse.Success = false;
                        baseResponse.Message = "No Ticket Updated";
                    }
                }
                else
                {
                    baseResponse.Success = false;
                    baseResponse.Message = "Input is not in correct format";
                }

            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = "Error:" + ex.Message;
            }
            return baseResponse;
        }

      

        [Route("CheckAtmExist")]
        [HttpPost]
        [Authorize]
        public BaseResponse<CheckAtmExistResponseDTO> CheckAtmExist(CheckAtmExistDTO checkAtmExistDTO)
        {

            BaseResponse<CheckAtmExistResponseDTO> baseResponse = new BaseResponse<CheckAtmExistResponseDTO>() { Success = false, Message = "" };
            try
            {
                iRMSTSConnectorRepository = new RMSAutomationRepository();
                var objcheckresult = iRMSTSConnectorRepository.CheckAtmExist(checkAtmExistDTO);
                baseResponse.Success = true;
                baseResponse.Entity = objcheckresult;
            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }

        //[Route("GetErrorCodeList")]
        //[HttpGet]
        //public BaseResponse<List<MasterDTO>> GetErrorCodeList(string BatchID)
        //{
        //    BaseResponse<List<MasterDTO>> baseResponse = new BaseResponse<List<MasterDTO>>() { Success = false, Message = "" };
        //    try
        //    {
        //        iRMSTSConnectorRepository = new RMSAutomationRepository();
        //        var objbatch = iRMSTSConnectorRepository.GetBatch(BatchID);
        //        if (objbatch == null)
        //        {
        //            baseResponse.Success = false;
        //            baseResponse.Message = "Batch does not Exist";
        //            return baseResponse;
        //        }

        //        var data = iRMSTSConnectorRepository.GetErrorList();
        //        baseResponse.Success = true;
        //        baseResponse.Entity = data;
        //    }
        //    catch (Exception ex)
        //    {
        //        baseResponse.Success = false;
        //        baseResponse.Message = ex.Message;
        //    }
        //    return baseResponse;
        //}

        [Route("MSPPassswordConfig")]
        [HttpPost]
        [Authorize]
        public BaseResponse<MSPDTO> MSPPassswordConfig(MSPPassswordConfigDTO checkAtmExistDTO)
        {
            encryption = new Encryption();
            BaseResponse<MSPDTO> baseResponse = new BaseResponse<MSPDTO>() { Success = false, Message = "" };
            try
            {
                iRMSTSConnectorRepository = new RMSAutomationRepository();
                var objmsp = iRMSTSConnectorRepository.GetMSPDetails(checkAtmExistDTO.MSP);

                if (objmsp != null)
                {
                    objmsp.Password = objmsp.Password;// encryption.EncryptString(objmsp.Password);
                    baseResponse.Entity = objmsp;
                    baseResponse.Success = true;

                }
                else
                {
                    baseResponse.Success = false;
                    baseResponse.Message = "MSP Details not found";
                }
            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = "Error: " + ex.Message;

            }
            return baseResponse;
        }

        [Route("RepeatCardCheck")]
        [HttpPost]
        [Authorize]
        public BaseResponse<List<RepeatCardCheckResponseDTO>> RepeatCardCheck(List<RepeatCardCheckDTO> repeatCardCheckDTO)
        {

            BaseResponse<List<RepeatCardCheckResponseDTO>> baseResponse = new BaseResponse<List<RepeatCardCheckResponseDTO>>() { Success = false, Message = "" };
            try
            {
                iRMSTSConnectorRepository = new RMSAutomationRepository();
                var objmsp = iRMSTSConnectorRepository.RepeatCardCheck(repeatCardCheckDTO);

                if (objmsp != null)
                {
                    baseResponse.Entity = objmsp;
                    baseResponse.Success = true;

                }
                else
                {
                    baseResponse.Success = false;
                    baseResponse.Message = "Details not found";
                }
            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = "Error: " + ex.Message;

            }
            return baseResponse;
        }

        [Route("ATMWiseCaseCount")]
        [HttpPost]
       // [Authorize]
        public BaseResponse<List<CaseCountATMWiseResponseDTO>> ATMWiseCaseCount(List<CaseCountATMWiseDTO> caseCountATMWiseDTOs)
        {
            BaseResponse<List<CaseCountATMWiseResponseDTO>> baseResponse = new BaseResponse<List<CaseCountATMWiseResponseDTO>>() { Success = false, Message = "" };
            try
            {
                iRMSTSConnectorRepository = new RMSAutomationRepository();
                var objmsp = iRMSTSConnectorRepository.ATMWiseCaseCount(caseCountATMWiseDTOs);

                if (objmsp != null)
                {
                    baseResponse.Entity = objmsp;
                    baseResponse.Success = true;

                }
                else
                {
                    baseResponse.Success = false;
                    baseResponse.Message = "Details not found";
                }
            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = "Error: " + ex.Message;

            }
            return baseResponse;
        }

        [Route("GetMasterData")]
        [HttpGet]
        [Authorize]
        public BaseResponse<List<MasterDTO>> GetMasterData(string argtype)
        {
            BaseResponse<List<MasterDTO>> baseResponse = new BaseResponse<List<MasterDTO>>() { Success = false, Message = "" };
            try
            {
                iRMSTSConnectorRepository = new RMSAutomationRepository();
                var objdata = iRMSTSConnectorRepository.GetMasterData(argtype);
                if (objdata == null)
                {
                    baseResponse.Success = false;
                    baseResponse.Message = "Data does not Exist for this type";
                    return baseResponse;
                }


                baseResponse.Success = true;
                baseResponse.Entity = objdata;
            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }

        public bool IsNumeric(string input)
        {
            int test;
            return int.TryParse(input, out test);
        }

        [Route("GetErrorStatusData")]
        [HttpPost]
        [Authorize]
        public BaseResponse<List<ErrorMasterDTO>> GetErrorStatusData(ErrorListDTO errorListDTO)
        {
           
            BaseResponse<List<ErrorMasterDTO>> baseResponse = new BaseResponse<List<ErrorMasterDTO>>() { Success = false, Message = "" };
            try
            {
                iRMSTSConnectorRepository = new RMSAutomationRepository();
                var objdata = iRMSTSConnectorRepository.GetErrorStatusData(errorListDTO);
                if (objdata == null)
                {
                    baseResponse.Success = false;
                    baseResponse.Message = "Data does not Exist for this type";
                    return baseResponse;
                }


                baseResponse.Success = true;
                baseResponse.Entity = objdata;
            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = ex.InnerException.Message;
            }
            return baseResponse;
        }

        [Route("CreateTicketWeb")]
        [HttpPost]
        //[Authorize]
        public BaseResponse CreateTicketWeb(CreateTicketDTO createTicketDTO)
        {
            // return null;
            BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
            try
            {

                //  BaseResponse batchResponse = new BaseResponse() { Success = false, Message = "" };
                iRMSTSConnectorRepository = new RMSAutomationRepository();
                //var objbatch = iRMSTSConnectorRepository.GetBatch(createTicketDTO.BatchID);
                //if (objbatch != null)
                //{
                //    baseResponse.Success = false;
                //    baseResponse.Message = "Batch Already Exist";
                //    return baseResponse;
                //}


                //iRMSTSConnectorRepository = new RMSAutomationRepository();
                //var objmsp = iRMSTSConnectorRepository.GetMSPDetails(createTicketDTO.MSP);

                //if (objmsp == null)
                //{
                //    baseResponse.Success = false;
                //    baseResponse.Message = "MSP does not exist";
                //    return baseResponse;
                //}

                List<Ticket> tickets = new List<Ticket>();
                Batch batch = new Batch();
                batch.MSP = createTicketDTO.MSP;
                //if (createTicketDTO.BatchID == null)
                //{
                batch.BatchID = batch.ID.ToString();
                //batch.BatchID = new CommonClass().GetBatchID(createTicketDTO.MSP);//createTicketDTO.BatchID; //
                //   createTicketDTO.BatchID = batch.BatchID;
                //}
                //else
                //{
                //    batch.BatchID = createTicketDTO.BatchID;
                //}
                batch.Date = createTicketDTO.Date;
                batch.EmailSubject = createTicketDTO.EmailSubject;
                batch.EmailIdentifier = createTicketDTO.EmailIdentifier;
                batch.EmailBody = createTicketDTO.EmailBody;
                batch.message_id = createTicketDTO.message_id;
                batch.DownloadPath = createTicketDTO.DownloadPath;
                batch.FromEmail = createTicketDTO.FromEmail;
                batch.To = createTicketDTO.To;
                batch.cc = createTicketDTO.cc;
                batch.Link = createTicketDTO.Link;
                batch.CreatedBy = createTicketDTO.CreatedBy;
                batch.CreatedDate = DateTime.Now;
                //   var result = true;
                var result = iRMSTSConnectorRepository.CreateBatch(batch);
                int idlen = 8;
                string Idlength = System.Configuration.ConfigurationManager.AppSettings["IDLength"];
                try
                {
                    if (Idlength != null)
                    {
                        idlen = Convert.ToInt32(Idlength);
                    }
                }
                catch
                {
                    idlen = 8;
                }
                batch.BatchID = batch.ID.ToString().PadLeft(idlen, '0');
                var result1 = iRMSTSConnectorRepository.UpdateBatch(batch);
                //   var result = true;
                tempBatchSet tempBatchSet = new tempBatchSet();
                if (result == true)
                {
                    bool saveflag = iRMSTSConnectorRepository.CreateTicket(createTicketDTO, batch.BatchID);
                    bool saveflag1 = iRMSTSConnectorRepository.UpdateTicketID(batch.BatchID, idlen);
                    string argticketid= iRMSTSConnectorRepository.GetTicketFromBatch(batch.BatchID); 
                    if (saveflag1 == true)
                    {
                      //  baseResponse.Entity = ticket;
                        baseResponse.Success = true;
                        baseResponse.Message = argticketid;
                    }

                }

            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = "Error:" + ex.Message;
            }
            return baseResponse;
        }

        [Route("UpdateEmailResponse")]
        [HttpPost]
        //[Authorize]
        public BaseResponse UpdateEmailResponse(EmailResponseAPIDTO errorListDTO)
        {
            BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
            try
            {
                iRMSTSConnectorRepository = new RMSAutomationRepository();
                var objdata = iRMSTSConnectorRepository.UpdateBatchEmailResponse(errorListDTO);
                baseResponse.Success = objdata;
                return baseResponse;
                
            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = ex.InnerException.Message;
            }
            return baseResponse;
        }


        [Route("GetBatchDetails")]
        [HttpPost]
      //  [Authorize]
        public BaseResponse<List<GetBatchDetailsResponseDTO>> GetBatchDetails(GetBatchDetailsRequestDTO Batch)
        {

            BaseResponse<List<GetBatchDetailsResponseDTO>> baseResponse = new BaseResponse<List<GetBatchDetailsResponseDTO>>() { Success = false, Message = "" };
            try
            {
                List<GetBatchDetailsResponseDTO> getBatchDetailsResponseList = new List<GetBatchDetailsResponseDTO>();
                iRMSTSConnectorRepository = new RMSAutomationRepository();
                var objticketdetails = iRMSTSConnectorRepository.GetTicketDataFromBatch(Batch.BatchID);
                DataSet cbrds = null;
                foreach (Ticket objtkt in objticketdetails)
                {
                    GetBatchDetailsResponseDTO getBatchDetailsResponse = new GetBatchDetailsResponseDTO();
                    getBatchDetailsResponse.ATMID = objtkt.ATMID;
                    getBatchDetailsResponse.IncidentDate = objtkt.IncidentDate;
                    getBatchDetailsResponse.TicketID = objtkt.TicketID;
                    getBatchDetailsResponse.WOORDERNo = objtkt.WOORDERNo;
                    //if (objtkt.Justification.Contains("NO DIFFERENCE-REQUIRE EOD TO EOD EJ"))
                    //{
                    if (objtkt.LastEOD == null)
                    {
                        cBRConnectorRepository = new CBRConnectorRepository();
                        cbrds = cBRConnectorRepository.GetLastirstEOD(objtkt.ATMID, objtkt.IncidentDate.Value);

                        if (cbrds != null)
                        {
                            if (cbrds.Tables.Count > 0)
                            {
                                if (cbrds.Tables[0].Rows.Count > 0)
                                {
                                    getBatchDetailsResponse.LastEOD = Convert.ToDateTime(cbrds.Tables[0].Rows[0][0].ToString());
                                }
                            }
                            if (cbrds.Tables.Count > 1)
                            {
                                if (cbrds.Tables[1].Rows.Count > 0)
                                {
                                    getBatchDetailsResponse.FirstEOD = Convert.ToDateTime(cbrds.Tables[1].Rows[0][0].ToString());
                                }
                            }

                        }
                    }
                    //  }

                    getBatchDetailsResponseList.Add(getBatchDetailsResponse);

                }
                if (getBatchDetailsResponseList != null && getBatchDetailsResponseList.Count > 0)
                {
                    baseResponse.Entity = getBatchDetailsResponseList;
                    baseResponse.Success = true;
                    baseResponse.Message = "Batch exist";
                }
                else
                {
                    baseResponse.Success = false;
                    baseResponse.Message = "Batch does not exist";
                }
            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = "Error: " + ex.Message;

            }
            return baseResponse;
        }
    }
}
