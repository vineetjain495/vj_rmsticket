using CMS_DAL.RMS_Ticketing_DAL;
using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMSDTO.Models.Request;
using CMSDTO.Models.Response;
using CMSRepository.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RMS_Ticketing.Controller
{

    public class TicketViewerController : ApiController
    {
        [Route("api/TicketViewer/GetTicketDetails")]
        [HttpPost]
        public BaseResponse<TableListWithPagingInfo<TicketViewer>> GetTicketDetails(BaseRequest<JqxGridPaginationModel> pagingRequestModel)
        {
            BaseResponse<TableListWithPagingInfo<TicketViewer>> baseResponse = new BaseResponse<TableListWithPagingInfo<TicketViewer>>();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse.Entity = ticketRepository.GetTicketsLists(pagingRequestModel);
                baseResponse.Success = true;
            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }

        [Route("api/TicketViewer/GetTicketComments")]
        [HttpPost]
        public BaseResponse<TableListWithPagingInfo<TicketsLogView>> GetTicketComments(BaseRequest<TicketsLogView> pagingRequestModel)
        {
            BaseResponse<TableListWithPagingInfo<TicketsLogView>> baseResponse = new BaseResponse<TableListWithPagingInfo<TicketsLogView>>();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse.Entity = ticketRepository.GetcommentsLists(pagingRequestModel);
                baseResponse.Success = true;
            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }

        [Route("api/TicketViewer/GetTicketDetailsView")]
        [HttpPost]
        public BaseResponse<Ticket_ATM_View> GetTicketDetailsView(BaseRequest<Ticket> pagingRequestModel)
        {
            BaseResponse<Ticket_ATM_View> baseResponse = new BaseResponse<Ticket_ATM_View>();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse = ticketRepository.GetTicketDetailsView(pagingRequestModel);
                //baseResponse.Success = true;
            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.StackTrace;
            }
            return baseResponse;
        }

        [Route("api/TicketViewer/GetQueryandCategoryType")]
        [HttpPost]
        public BaseResponse<QueryandCategoryType> GetQueryandCategoryType(BaseRequest pagingRequestModel)
        {
            BaseResponse<QueryandCategoryType> baseResponse = new BaseResponse<QueryandCategoryType>();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse.Entity = ticketRepository.GetQueryandCategory(pagingRequestModel);
                baseResponse.Success = true;
            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }

        [Route("api/TicketViewer/GetErrorCodeandTypes")]
        [HttpPost]
        public BaseResponse<QueryandCategoryType> GetErrorCodeandTypes(BaseRequest<QueryandCategoryType> pagingRequestModel)
        {
            BaseResponse<QueryandCategoryType> baseResponse = new BaseResponse<QueryandCategoryType>();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse.Entity = ticketRepository.GetErrorCodeType(pagingRequestModel);
                baseResponse.Success = true;
            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }

        [Route("api/TicketViewer/GetJustification")]
        [HttpPost]
        public BaseResponse<QueryandCategoryType> GetJustification(BaseRequest<TicketDTO> pagingRequestModel)
        {
            BaseResponse<QueryandCategoryType> baseResponse = new BaseResponse<QueryandCategoryType>();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse.Entity = ticketRepository.GetAcc_RegJustification(pagingRequestModel);
                baseResponse.Success = true;
            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }

        [Route("api/TicketViewer/GetMasterData")]
        [HttpPost]
        public BaseResponse<QueryandCategoryType> GetMasterData(BaseRequest<QueryandCategoryType> pagingRequestModel)
        {
            BaseResponse<QueryandCategoryType> baseResponse = new BaseResponse<QueryandCategoryType>();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse.Entity = ticketRepository.GetMasterDataDetails(pagingRequestModel);
                if(baseResponse.Entity != null)
                {
                    baseResponse.Success = true;
                }
                else
                {
                    baseResponse.Success = false;
                }
            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }

        [Route("api/TicketViewer/UpdateTicket")]
        [HttpPost]
        public BaseResponse UpdateTicket(BaseRequest<UpdateTicketModel> pagingRequestModel)
        {
            BaseResponse baseResponse = new BaseResponse();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse = ticketRepository.UpdateTicket(pagingRequestModel);
                
            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }

        [Route("api/TicketViewer/UpdateTicketLocation")]
        [HttpPost]
        public BaseResponse UpdateTicketLocation(BaseRequest<UpdateTicketModel> pagingRequestModel)
        {
            BaseResponse baseResponse = new BaseResponse();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse = ticketRepository.UpdateTicketLocation(pagingRequestModel);

            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }


        [Route("api/TicketViewer/ExportTickets")]
        [HttpPost]
        public BaseResponse<List<TicketExport_Model>> ExportTickets(BaseRequest<JqxGridPaginationModel> pagingRequestModel)
        {
            BaseResponse<List<TicketExport_Model>> baseResponse = new BaseResponse<List<TicketExport_Model>>();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse.Entity = ticketRepository.ExportTickets(pagingRequestModel);
                baseResponse.Success = true;
                baseResponse.Message = "Success";
            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }


        [Route("api/TicketViewer/FileLocationInsert")]
        [HttpPost]
        public BaseResponse<bool> FileLocationInsert(BaseRequest<TicketAttachments> baseRequest)
        {
            BaseResponse<bool> baseResponse = new BaseResponse<bool>();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse.Entity = ticketRepository.LocationFIleUpload(baseRequest);
                baseResponse.Success = true;
                baseResponse.Message = "Success";
            }
            catch(Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }

            return baseResponse;
        }

        [Route("api/TicketViewer/FileHoAndOthersInsert")]
        [HttpPost]
        public BaseResponse<bool> FileHoAndOthersInsert(BaseRequest<TicketAttachments> baseRequest)
        {
            BaseResponse<bool> baseResponse = new BaseResponse<bool>();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse.Entity = ticketRepository.HoAndOthersFIleUpload(baseRequest);
                baseResponse.Success = true;
                baseResponse.Message = "Success";
            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }

            return baseResponse;
        }


        [Route("api/TicketViewer/CommentUpdate")]
        [HttpPost]
        public BaseResponse CommentUpdate(BaseRequest<TicketsLogView> baseRequest)
        {
            BaseResponse baseResponse = new BaseResponse();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse = ticketRepository.CommentToBeUpdated(baseRequest);
                
            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }

            return baseResponse;
        }

        [Route("api/TicketViewer/UpdateRuleEngineStatus")]
        [HttpPost]
        public BaseResponse UpdateRuleEngineStatus(BaseResponse<BaseRequest<RunRuleEngineModel>> baseRequest)
        {
            BaseResponse baseResponse = new BaseResponse();
            try
            {
                RMSTicketViewerRepository ticketRepository = new RMSTicketViewerRepository();
                baseResponse = ticketRepository.UpdateRuleEngineStatuses(baseRequest);
            }
            catch (Exception ex)
            {
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }

            return baseResponse;
        }

    }
}
