using AutoMapper;
using CMS_DAL.RMS_Ticketing_DAL;
using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMS_Repository.Interface.RMS_Interface;
using CMSDTO;
using CMSDTO.Models.Response;
using Newtonsoft.Json;
using RestSharp;
using RMS_Ticketing.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RMS_Ticketing.Controller
{
   // [RoutePrefix("api/Connector1")]
    //public class Connector_oldController : ApiController
    //{
    //    private ICBRConnectorRepository cBRConnectorRepository;
    //    private IRMSTSConnectorRepository iRMSTSConnectorRepository;
    //    // private IRMSConnectorRepository iRMSConnectorRepository;
    //    private Encryption encryption;

    //    [Route("GetToken")]
    //    [HttpPost]
    //    public BaseResponse GetToken(MSPPassswordConfigDTO argMSP)
    //    {
    //        BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
    //        try
    //        {
    //            encryption = new Encryption();
    //            // string argencryptedtext = encryption.EncryptString(argMSP); //gnpm06/W/7SvJy+Go7CP4A==
    //            string argdecryptedtext = encryption.DecryptString(argMSP.MSP);
    //            //Check MSP in master and return token
    //            iRMSTSConnectorRepository = new RMSTSConnectorRepository();
    //            var objmsp = iRMSTSConnectorRepository.GetMSPDetails(argdecryptedtext);

    //            if (objmsp != null)
    //            {

    //                string client_id = System.Configuration.ConfigurationManager.AppSettings["ClientId"];
    //                string URL = System.Configuration.ConfigurationManager.AppSettings["URL"];
    //                var restClient = new RestClient(URL);
    //                var request = new RestRequest(Method.POST) { Resource = "/oauth2/token2" };

    //                request.AddParameter("client_id", client_id);
    //                request.AddParameter("grant_type", "password");
    //                request.AddParameter("username", argMSP);
    //                request.AddParameter("password", argMSP);
    //                string msg = string.Empty;
    //                var response = restClient.Post(request);
    //                msg = response.Content;
    //                AccessTokenResponse responsetoken = (JsonConvert.DeserializeObject<AccessTokenResponse>(response.Content));
    //                baseResponse.Success = true;
    //                baseResponse.Message = "Success";
    //                baseResponse.UserToken = responsetoken;
    //            }
    //            else
    //            {
    //                baseResponse.Success = false;
    //                baseResponse.Message = "No Such MSP Found";
    //                baseResponse.UserToken = null;
    //            }

    //        }
    //        catch (Exception ex)
    //        {
    //            baseResponse.Success = false;
    //            baseResponse.Message = ex.Message;
    //            baseResponse.UserToken = null;
    //        }
    //        return baseResponse;
    //    }

    //    [Route("CreateTicket")]
    //    [HttpPost]
    //   // [Authorize]
    //    public BaseResponse CreateTicket(CreateTicketDTO createTicketDTO)
    //    {
    //        // return null;
    //        BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
    //        try
    //        {

    //            iRMSTSConnectorRepository = new RMSTSConnectorRepository();
            

    //            List<Ticket> tickets = new List<Ticket>();
    //            Batch batch = new Batch();
    //            batch.MSP = createTicketDTO.MSP;
    //            batch.BatchID = batch.ID.ToString();      
    //            batch.Date = createTicketDTO.Date;
    //            batch.EmailSubject = createTicketDTO.EmailSubject;
    //            batch.EmailIdentifier = createTicketDTO.EmailIdentifier;
    //            batch.EmailBody = createTicketDTO.EmailBody;
    //            batch.message_id = createTicketDTO.message_id;
    //            batch.DownloadPath = createTicketDTO.DownloadPath;
    //            batch.FromEmail = createTicketDTO.FromEmail;
    //            batch.To = createTicketDTO.To;
    //            batch.cc = createTicketDTO.cc;
    //            batch.Link = createTicketDTO.Link;
    //            batch.CreatedBy = createTicketDTO.CreatedBy;
    //            batch.CreatedDate = DateTime.Now;
    //            //   var result = true;
    //            var result = iRMSTSConnectorRepository.CreateBatch(batch);
    //            int idlen = 8;
    //            string Idlength = System.Configuration.ConfigurationManager.AppSettings["IDLength"];
    //            try
    //            {
    //                if (Idlength != null)
    //                {
    //                    idlen = Convert.ToInt32(Idlength);
    //                }
    //            }
    //            catch
    //            {
    //                idlen = 8;
    //            }
    //            batch.BatchID = batch.ID.ToString().PadLeft(idlen, '0');
    //            var result1 = iRMSTSConnectorRepository.UpdateBatch(batch);
    //            //   var result = true;
    //            tempBatchSet tempBatchSet = new tempBatchSet();
    //            if (result == true)
    //            {
    //                bool saveflag = iRMSTSConnectorRepository.CreateTicket(createTicketDTO, batch.BatchID);
    //                bool saveflag1 = iRMSTSConnectorRepository.UpdateTicketID(batch.BatchID, idlen);
    //                if (saveflag1 == true)
    //                {
    //                    baseResponse.Success = true;
    //                    baseResponse.Message = createTicketDTO.TicketsData.Count().ToString() + " Tickets Created Successfully Under Batch ID " + batch.BatchID;
    //                }

    //            }

    //        }
    //        catch (Exception ex)
    //        {
    //            string argmessage = ex.Message;
    //            if (ex.InnerException != null)
    //            {
    //                argmessage += ex.InnerException;
    //            }
    //            baseResponse.Success = false;
    //            baseResponse.Message = argmessage;
            
    //        }
    //        return baseResponse;
    //    }
    //    //[Route("Batch_Source_File_Upload")]
    //    //[HttpPost]
    //    //public BaseResponse Batch_Source_File_Upload(Batch_Source_File_UploadDTO batch_Source_File_Upload)
    //    //{
    //    //    BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
    //    //    return baseResponse;
    //    //}
    //    //[Route("Ticket_File_Upload")]
    //    //[HttpPost]
    //    //public BaseResponse Ticket_File_Upload(Ticket_File_UploadDTO ticket_File_UploadDTO)
    //    //{
    //    //    BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
    //    //    return baseResponse;
    //    //}
    //    //[Route("EJ_FileReader")]
    //    //[HttpPost]
    //    //public BaseResponse EJ_FileReader(EJ_FileReaderDTO eJ_FileReaderDTO)
    //    //{
    //    //    BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
    //    //    return baseResponse;
    //    //}

    //    [Route("CBR_DataReader")]
    //    [HttpPost]
    //    [Authorize]
    //    public BaseResponse<List<CBREntryDTO>> CBR_DataReader(CBR_DataReaderDTO cBR_DataReaderDTO)
    //    {
    //        BaseResponse<List<CBREntryDTO>> baseResponse = new BaseResponse<List<CBREntryDTO>>() { Success = false, Message = "" };
    //        try
    //        {
    //            cBRConnectorRepository = new CBRConnectorRepository();
    //            var result = cBRConnectorRepository.CBR_DataReader(cBR_DataReaderDTO.ATMID, cBR_DataReaderDTO.Date);

    //            if (result != null)
    //            {
    //                if (result.Count > 0)
    //                {
    //                    baseResponse.Success = true;
    //                    baseResponse.Entity = result;
    //                }
    //                else
    //                {
    //                    baseResponse.Entity = result;
    //                    baseResponse.Message = "No Records Found";
    //                    baseResponse.Success = true;
    //                }
    //            }
    //        }
    //        catch (Exception ex)
    //        {
    //            string argmessage = ex.Message;
    //            if (ex.InnerException != null)
    //            {
    //                argmessage += ex.InnerException;
    //            }
    //            baseResponse.Success = false;
    //            baseResponse.Message = argmessage;
    //            baseResponse.Entity = null;
    //        }
    //        return baseResponse;
    //    }

    //    [Route("Utilization_DataReader")]
    //    [HttpPost]
    //    [Authorize]
    //    public BaseResponse<List<UtilizationDataDTO>> Utilization_DataReader(CBR_DataReaderDTO cBR_DataReaderDTO)
    //    {
    //        BaseResponse<List<UtilizationDataDTO>> baseResponse = new BaseResponse<List<UtilizationDataDTO>>() { Success = false, Message = "" };
    //        try
    //        {
    //            iRMSTSConnectorRepository = new RMSTSConnectorRepository();
    //            var result = iRMSTSConnectorRepository.GetUtilizationData(cBR_DataReaderDTO.ATMID, cBR_DataReaderDTO.Date);
    //            baseResponse.Success = true;
    //            baseResponse.Entity = result;
    //        }
    //        catch (Exception ex)
    //        {
    //            baseResponse.Success = false;
    //            baseResponse.Message = ex.Message;
    //            baseResponse.Entity = null;
    //        }
    //        return baseResponse;
    //    }

    //    [Route("Update_Ticket_Status")]
    //    [HttpPost]
    //    public BaseResponse Update_Ticket_Status(UpdateTicketDTO updateTicketDTO)
    //    {
    //        BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
    //        try
    //        {
    //            iRMSTSConnectorRepository = new RMSTSConnectorRepository();
    //            var objbatch = iRMSTSConnectorRepository.GetBatch(updateTicketDTO.BatchID);
    //            if (objbatch == null)
    //            {
    //                baseResponse.Success = false;
    //                baseResponse.Message = "Batch does not exist";
    //                return baseResponse;
    //            }
    //            List<Ticket> tickets = new List<Ticket>();

    //            bool saveflag = iRMSTSConnectorRepository.UpdateTicket(updateTicketDTO);
    //            if (saveflag == true)
    //            {
    //                baseResponse.Success = true;
    //                baseResponse.Message = "Ticket Updated Successfully";
    //            }

    //        }
    //        catch (Exception ex)
    //        {
    //            baseResponse.Success = false;
    //            baseResponse.Message = "Error:" + ex.Message;
    //        }
    //        return baseResponse;
    //    }

    //    //[Route("Resolution_Log_Update")]
    //    //[HttpPost]
    //    //public BaseResponse Resolution_Log_Update(Resolution_Log_UpdateDTO resolution_Log_UpdateDTO)
    //    //{
    //    //    BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
    //    //    return baseResponse;
    //    //}
    //    //[Route("DuplicateCheck_ticket")]
    //    //[HttpPost]
    //    //[Authorize]
    //    //public BaseResponse DuplicateCheck_ticket(DuplicateCheck_ticketDTO duplicateCheck_TicketDTO)
    //    //{
    //    //    BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
    //    //    return baseResponse;
    //    //}

    //    [Route("CheckAtmExist")]
    //    [HttpPost]
    //    [Authorize]
    //    public BaseResponse<CheckAtmExistResponseDTO> CheckAtmExist(CheckAtmExistDTO checkAtmExistDTO)
    //    {

    //        BaseResponse<CheckAtmExistResponseDTO> baseResponse = new BaseResponse<CheckAtmExistResponseDTO>() { Success = false, Message = "" };
    //        try
    //        {
    //            iRMSTSConnectorRepository = new RMSTSConnectorRepository();
    //            var objcheckresult = iRMSTSConnectorRepository.CheckAtmExist(checkAtmExistDTO);
    //            baseResponse.Success = true;
    //            baseResponse.Entity = objcheckresult;
    //        }
    //        catch (Exception ex)
    //        {
    //            baseResponse.Success = false;
    //            baseResponse.Message = ex.Message;
    //        }
    //        return baseResponse;
    //    }

    //    //[Route("GetErrorCodeList")]
    //    //[HttpGet]
    //    //public BaseResponse<List<MasterDTO>> GetErrorCodeList(string BatchID)
    //    //{
    //    //    BaseResponse<List<MasterDTO>> baseResponse = new BaseResponse<List<MasterDTO>>() { Success = false, Message = "" };
    //    //    try
    //    //    {
    //    //        iRMSTSConnectorRepository = new RMSTSConnectorRepository();
    //    //        var objbatch = iRMSTSConnectorRepository.GetBatch(BatchID);
    //    //        if (objbatch == null)
    //    //        {
    //    //            baseResponse.Success = false;
    //    //            baseResponse.Message = "Batch does not Exist";
    //    //            return baseResponse;
    //    //        }

    //    //        var data = iRMSTSConnectorRepository.GetErrorList();
    //    //        baseResponse.Success = true;
    //    //        baseResponse.Entity = data;
    //    //    }
    //    //    catch (Exception ex)
    //    //    {
    //    //        baseResponse.Success = false;
    //    //        baseResponse.Message = ex.Message;
    //    //    }
    //    //    return baseResponse;
    //    //}

    //    [Route("MSPPassswordConfig")]
    //    [HttpPost]
    //    [Authorize]
    //    public BaseResponse<MSPDTO> MSPPassswordConfig(MSPPassswordConfigDTO checkAtmExistDTO)
    //    {
    //        encryption = new Encryption();
    //        BaseResponse<MSPDTO> baseResponse = new BaseResponse<MSPDTO>() { Success = false, Message = "" };
    //        try
    //        {
    //            iRMSTSConnectorRepository = new RMSTSConnectorRepository();
    //            var objmsp = iRMSTSConnectorRepository.GetMSPDetails(checkAtmExistDTO.MSP);

    //            if (objmsp != null)
    //            {
    //                objmsp.Password = objmsp.Password;// encryption.EncryptString(objmsp.Password);
    //                baseResponse.Entity = objmsp;
    //                baseResponse.Success = true;

    //            }
    //            else
    //            {
    //                baseResponse.Success = false;
    //                baseResponse.Message = "MSP Details not found";
    //            }
    //        }
    //        catch (Exception ex)
    //        {
    //            baseResponse.Success = false;
    //            baseResponse.Message = "Error: " + ex.Message;

    //        }
    //        return baseResponse;
    //    }

    //    [Route("RepeatCardCheck")]
    //    [HttpPost]
    //  //  [Authorize]
    //    public BaseResponse<List<RepeatCardCheckResponseDTO>> RepeatCardCheck(List<RepeatCardCheckDTO> repeatCardCheckDTO)
    //    {

    //        BaseResponse<List<RepeatCardCheckResponseDTO>> baseResponse = new BaseResponse<List<RepeatCardCheckResponseDTO>>() { Success = false, Message = "" };
    //        try
    //        {
    //            iRMSTSConnectorRepository = new RMSTSConnectorRepository();
    //            var objmsp = iRMSTSConnectorRepository.RepeatCardCheck(repeatCardCheckDTO);

    //            if (objmsp != null)
    //            {
    //                baseResponse.Entity = objmsp;
    //                baseResponse.Success = true;

    //            }
    //            else
    //            {
    //                baseResponse.Success = false;
    //                baseResponse.Message = "Details not found";
    //            }
    //        }
    //        catch (Exception ex)
    //        {
    //            baseResponse.Success = false;
    //            baseResponse.Message = "Error: " + ex.Message;

    //        }
    //        return baseResponse;
    //    }

    //    [Route("ATMWiseCaseCount")]
    //    [HttpPost]
    //   // [Authorize]
    //    public BaseResponse<List<CaseCountATMWiseResponseDTO>> ATMWiseCaseCount(List<CaseCountATMWiseDTO> caseCountATMWiseDTOs)
    //    {
    //        BaseResponse<List<CaseCountATMWiseResponseDTO>> baseResponse = new BaseResponse<List<CaseCountATMWiseResponseDTO>>() { Success = false, Message = "" };
    //        try
    //        {
    //            iRMSTSConnectorRepository = new RMSTSConnectorRepository();
    //            var objmsp = iRMSTSConnectorRepository.ATMWiseCaseCount(caseCountATMWiseDTOs);

    //            if (objmsp != null)
    //            {
    //                baseResponse.Entity = objmsp;
    //                baseResponse.Success = true;

    //            }
    //            else
    //            {
    //                baseResponse.Success = false;
    //                baseResponse.Message = "Details not found";
    //            }
    //        }
    //        catch (Exception ex)
    //        {
    //            baseResponse.Success = false;
    //            baseResponse.Message = "Error: " + ex.Message;

    //        }
    //        return baseResponse;
    //    }

    //    [Route("GetMasterData")]
    //    [HttpGet]
    //    [Authorize]
    //    public BaseResponse<List<MasterDTO>> GetMasterData(string argtype)
    //    {
    //        BaseResponse<List<MasterDTO>> baseResponse = new BaseResponse<List<MasterDTO>>() { Success = false, Message = "" };
    //        try
    //        {
    //            iRMSTSConnectorRepository = new RMSTSConnectorRepository();
    //            var objdata = iRMSTSConnectorRepository.GetMasterData(argtype);
    //            if (objdata == null)
    //            {
    //                baseResponse.Success = false;
    //                baseResponse.Message = "Data does not Exist for this type";
    //                return baseResponse;
    //            }


    //            baseResponse.Success = true;
    //            baseResponse.Entity = objdata;
    //        }
    //        catch (Exception ex)
    //        {
    //            baseResponse.Success = false;
    //            baseResponse.Message = ex.Message;
    //        }
    //        return baseResponse;
    //    }

    //    public bool IsNumeric(string input)
    //    {
    //        int test;
    //        return int.TryParse(input, out test);
    //    }

    //    [Route("GetErrorStatusData")]
    //    [HttpPost]
    //    [Authorize]
    //    public BaseResponse<List<ErrorMasterDTO>> GetErrorStatusData(ErrorListDTO errorListDTO)
    //    {
           
    //        BaseResponse<List<ErrorMasterDTO>> baseResponse = new BaseResponse<List<ErrorMasterDTO>>() { Success = false, Message = "" };
    //        try
    //        {
    //            iRMSTSConnectorRepository = new RMSTSConnectorRepository();
    //            var objdata = iRMSTSConnectorRepository.GetErrorStatusData(errorListDTO);
    //            if (objdata == null)
    //            {
    //                baseResponse.Success = false;
    //                baseResponse.Message = "Data does not Exist for this type";
    //                return baseResponse;
    //            }


    //            baseResponse.Success = true;
    //            baseResponse.Entity = objdata;
    //        }
    //        catch (Exception ex)
    //        {
    //            baseResponse.Success = false;
    //            baseResponse.Message = ex.InnerException.Message;
    //        }
    //        return baseResponse;
    //    }

    //    [Route("CreateTicketWeb")]
    //    [HttpPost]
    //    //[Authorize]
    //    public BaseResponse CreateTicketWeb(CreateTicketDTO createTicketDTO)
    //    {
    //        // return null;
    //        BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
    //        try
    //        {

    //            //  BaseResponse batchResponse = new BaseResponse() { Success = false, Message = "" };
    //            iRMSTSConnectorRepository = new RMSTSConnectorRepository();
    //            //var objbatch = iRMSTSConnectorRepository.GetBatch(createTicketDTO.BatchID);
    //            //if (objbatch != null)
    //            //{
    //            //    baseResponse.Success = false;
    //            //    baseResponse.Message = "Batch Already Exist";
    //            //    return baseResponse;
    //            //}


    //            //iRMSTSConnectorRepository = new RMSTSConnectorRepository();
    //            //var objmsp = iRMSTSConnectorRepository.GetMSPDetails(createTicketDTO.MSP);

    //            //if (objmsp == null)
    //            //{
    //            //    baseResponse.Success = false;
    //            //    baseResponse.Message = "MSP does not exist";
    //            //    return baseResponse;
    //            //}

    //            List<Ticket> tickets = new List<Ticket>();
    //            Batch batch = new Batch();
    //            batch.MSP = createTicketDTO.MSP;
    //            //if (createTicketDTO.BatchID == null)
    //            //{
    //            batch.BatchID = batch.ID.ToString();
    //            //batch.BatchID = new CommonClass().GetBatchID(createTicketDTO.MSP);//createTicketDTO.BatchID; //
    //            //   createTicketDTO.BatchID = batch.BatchID;
    //            //}
    //            //else
    //            //{
    //            //    batch.BatchID = createTicketDTO.BatchID;
    //            //}
    //            batch.Date = createTicketDTO.Date;
    //            batch.EmailSubject = createTicketDTO.EmailSubject;
    //            batch.EmailIdentifier = createTicketDTO.EmailIdentifier;
    //            batch.EmailBody = createTicketDTO.EmailBody;
    //            batch.message_id = createTicketDTO.message_id;
    //            batch.DownloadPath = createTicketDTO.DownloadPath;
    //            batch.FromEmail = createTicketDTO.FromEmail;
    //            batch.To = createTicketDTO.To;
    //            batch.cc = createTicketDTO.cc;
    //            batch.Link = createTicketDTO.Link;
    //            batch.CreatedBy = createTicketDTO.CreatedBy;
    //            batch.CreatedDate = DateTime.Now;
    //            //   var result = true;
    //            var result = iRMSTSConnectorRepository.CreateBatch(batch);
    //            int idlen = 8;
    //            string Idlength = System.Configuration.ConfigurationManager.AppSettings["IDLength"];
    //            try
    //            {
    //                if (Idlength != null)
    //                {
    //                    idlen = Convert.ToInt32(Idlength);
    //                }
    //            }
    //            catch
    //            {
    //                idlen = 8;
    //            }
    //            batch.BatchID = batch.ID.ToString().PadLeft(idlen, '0');
    //            var result1 = iRMSTSConnectorRepository.UpdateBatch(batch);
    //            //   var result = true;
    //            tempBatchSet tempBatchSet = new tempBatchSet();
    //            if (result == true)
    //            {
    //                bool saveflag = iRMSTSConnectorRepository.CreateTicket(createTicketDTO, batch.BatchID);
    //                bool saveflag1 = iRMSTSConnectorRepository.UpdateTicketID(batch.BatchID, idlen);
    //                string argticketid= iRMSTSConnectorRepository.GetTicketFromBatch(batch.BatchID); 
    //                if (saveflag1 == true)
    //                {
    //                  //  baseResponse.Entity = ticket;
    //                    baseResponse.Success = true;
    //                    baseResponse.Message = argticketid;
    //                }

    //            }

    //        }
    //        catch (Exception ex)
    //        {
    //            baseResponse.Success = false;
    //            baseResponse.Message = "Error:" + ex.Message;
    //        }
    //        return baseResponse;
    //    }

    //    [Route("UpdateEmailResponse")]
    //    [HttpPost]
    //    //[Authorize]
    //    public BaseResponse UpdateEmailResponse(EmailResponseAPIDTO errorListDTO)
    //    {
    //        BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
    //        try
    //        {
    //            iRMSTSConnectorRepository = new RMSTSConnectorRepository();
    //            var objdata = iRMSTSConnectorRepository.UpdateBatchEmailResponse(errorListDTO);
    //            baseResponse.Success = objdata;
    //            return baseResponse;
                
    //        }
    //        catch (Exception ex)
    //        {
    //            baseResponse.Success = false;
    //            baseResponse.Message = ex.InnerException.Message;
    //        }
    //        return baseResponse;
    //    }
    //}
}
