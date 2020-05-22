using CMS_DAL.RMS_Ticketing_DAL;
using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMSDTO.Models.Request;
using CMSDTO.Models.Response;
using CMSRepository.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApp.Controllers
{
    public class EmployeeMasterController : ApiController
    {
        [Route("api/EmployeeMaster/AllEmployeelimited")]
        [HttpPost]
        public BaseResponse<TableListWithPagingInfo<Employee_info>> GetEmployeeDetails(BaseRequest<JqxGridPaginationModel> pagingRequestModel)
        {
            BaseResponse<TableListWithPagingInfo<Employee_info>> baseResponse = new BaseResponse<TableListWithPagingInfo<Employee_info>>();
            try
            {
                RMSEmployeeMaster employeeRepository = new RMSEmployeeMaster();
                baseResponse.Entity = employeeRepository.GetEmployeeLists(pagingRequestModel);
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

        [Route("api/EmployeeMaster/CreateEmployee")]
        [HttpPost]
        public BaseResponse CreateEmployee(BaseRequest<Employee_Role> employee)
        {
            BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
            try
            {
                RMSEmployeeMaster employeeRepository = new RMSEmployeeMaster();
                var resp = employeeRepository.CreateEmployee(employee);
                baseResponse = resp;
                
            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }
        [Route("api/EmployeeMaster/UpdateEmployeeDetails")]
        [HttpPost]
        public BaseResponse UpdateEmployeeDetails(BaseRequest<Employee_Role> employee)
        {
            BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
            try
            {
                RMSEmployeeMaster employeeRepository = new RMSEmployeeMaster();
                var resp = employeeRepository.UpdateEmployeeDetails(employee);
                baseResponse = resp;

            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }

        [Route("api/EmployeeMaster/CheckEmployee")]
        [HttpPost]
        public BaseResponse CheckEmployee(BaseRequest<string> employeeID)
        {
            BaseResponse<Employee_Role> baseResponse = new BaseResponse<Employee_Role>() { Success = false, Message = "" };
            try
            {
                RMSEmployeeMaster employeeRepository = new RMSEmployeeMaster();
                var resp = employeeRepository.checkEmployee(employeeID);
                baseResponse = resp;

            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }
        [Route("api/EmployeeMaster/LocationDetail")]
        [HttpPost]
        public BaseResponse<IEnumerable<ATM_Master_model>> LocationDetail(BaseRequest baseRequest)
        {
            BaseResponse<IEnumerable<ATM_Master_model>> baseResponse = new BaseResponse<IEnumerable<ATM_Master_model>>() { Success = false, Message = "" };
            try
            {
                RMSEmployeeMaster employeeRepository = new RMSEmployeeMaster();
                var resp = employeeRepository.GetLocationDetail(baseRequest);
                baseResponse = resp;

            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }
        [Route("api/EmployeeMaster/RolesDetail")]
        [HttpPost]
        public BaseResponse<IEnumerable<Employee_Role>> RolesDetail(BaseRequest baseRequest)
        {
            BaseResponse<IEnumerable<Employee_Role>> baseResponse = new BaseResponse<IEnumerable<Employee_Role>>() { Success = false, Message = "" };
            try
            {
                RMSEmployeeMaster employeeRepository = new RMSEmployeeMaster();
                var resp = employeeRepository.GetRolesDetail(baseRequest);
                baseResponse = resp;

            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }
        [Route("api/EmployeeMaster/EmployeeDetails")]
        [HttpPost]
        public BaseResponse<IEnumerable<Employee_Role>> EmployeeDetail(BaseRequest baseRequest)
        {
            BaseResponse<IEnumerable<Employee_Role>> baseResponse = new BaseResponse<IEnumerable<Employee_Role>>() { Success = false, Message = "" };
            try
            {
                RMSEmployeeMaster employeeRepository = new RMSEmployeeMaster();
                var resp = employeeRepository.GetEmployeeDetail(baseRequest);
                baseResponse = resp;

            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }
        [Route("api/EmployeeMaster/UpdateTicketAssign")]
        [HttpPost]
        public BaseResponse UpdateTicketAssign(BaseRequest<AssignTicket> employee)
        {
            BaseResponse baseResponse = new BaseResponse() { Success = false, Message = "" };
            try
            {
                RMSEmployeeMaster employeeRepository = new RMSEmployeeMaster();
                var resp = employeeRepository.UpdateTicketAssign(employee);
                baseResponse = resp;

            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }

        [Route("api/EmployeeMaster/EmployeeTicketsById")]
        [HttpPost]
        public BaseResponse<int> EmployeeTicketsById(BaseRequest<string> baseRequest)
        {
            BaseResponse<int> baseResponse = new BaseResponse<int>() { Success = false, Message = "" };
            try
            {
                RMSEmployeeMaster employeeRepository = new RMSEmployeeMaster();
                var resp = employeeRepository.GetEmployeeTicketsById(baseRequest);
                baseResponse = resp;

            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }
        [Route("api/EmployeeMaster/LocationDetailByID")]
        [HttpPost]
        public BaseResponse<IEnumerable<ATM_Master_model>> LocationDetailByID(BaseRequest<string> baseRequest)
        {
            BaseResponse<IEnumerable<ATM_Master_model>> baseResponse = new BaseResponse<IEnumerable<ATM_Master_model>>() { Success = false, Message = "" };
            try
            {
                RMSEmployeeMaster employeeRepository = new RMSEmployeeMaster();
                var resp = employeeRepository.GetLocationDetailByID(baseRequest);
                baseResponse = resp;

            }
            catch (Exception ex)
            {
                //CommonUtility.AddException(ex);
                baseResponse.Success = false;
                baseResponse.Message = ex.Message;
            }
            return baseResponse;
        }
    }
}
