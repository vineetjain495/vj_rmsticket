using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMSDTO.Models.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMS_Repository.Interface.RMS_Interface
{
    public interface IRMSTSConnectorRepository
    {
        bool CreateBatch(Batch batch);
        bool UpdateBatch(Batch batch);
        bool DeleteBatch(Batch batch);
        bool UpdateTicketID(string BatchId,int idlen);
        Batch GetBatch(string batchid);
        Ticket GetTicket(string ticketid);
        bool  CreateTicket(CreateTicketDTO tickets,string BatchId);
        //MSPPassswordResponseDTO GetMspPassword(string argMSP);
        BaseResponse SaveAPILogData(APILog aPILog);
        MSPDTO GetMSPDetails(string domainname);
        List<MasterDTO> GetErrorList();
        bool UpdateTicket(UpdateTicketDTO tickets, out RunRuleEngineModelDTO model);
        CheckAtmExistResponseDTO CheckAtmExist(CheckAtmExistDTO checkAtmExistDTO);
        List<RepeatCardCheckResponseDTO> RepeatCardCheck(List<RepeatCardCheckDTO> repeatCardCheckDTO);
        List<CaseCountATMWiseResponseDTO> ATMWiseCaseCount(List<CaseCountATMWiseDTO> caseCountATMWiseDTOs);
        List<MasterDTO> GetMasterData(string argtype);
        List<UtilizationDataDTO> GetUtilizationData(string argatmid, DateTime eoddate);
        List<ErrorMasterDTO> GetErrorStatusData(ErrorListDTO errorListDTO);
        bool UpdateBatchEmailResponse(EmailResponseAPIDTO responseAPIDTO);
        string GetTicketFromBatch(string argBatchID);
        List<Ticket> GetTicketDataFromBatch(string batchid);
    }
}
