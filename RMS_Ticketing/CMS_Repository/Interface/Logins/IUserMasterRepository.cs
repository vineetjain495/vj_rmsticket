using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMSDTO.Entity;
using CMSDTO.Models.Response;
using LoginWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMSRepository.Interface
{
    public interface IUserMasterRepository : IDisposable
    {
        BaseResponse<Employee_Role_Model> ValidateUserAuthentication(Credential baseRequest);


    }
}
