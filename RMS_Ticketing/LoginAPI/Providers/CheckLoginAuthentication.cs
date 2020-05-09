using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMSDAL;
using CMSDTO.Entity;
using CMSDTO.Models;
using CMSDTO.Models.Response;
using CMSRepository.Models;
using LoginWebAPI.Models;
using System;

namespace ConnectorsAPI
{
    public class CheckLoginAuthentication
    {
        public BaseResponse<Employee_Role_Model> CheckUserLogin(string UserID, string Password)
        {
            BaseResponse<Employee_Role_Model> baseResponse = new BaseResponse<Employee_Role_Model>();

            Credential Credential = new Credential() { UserID = UserID, Password = Password };
            //Credential.UserID = UserID;
            //Credential.Password = Password;

            baseResponse = new UserMasterRepository().ValidateUserAuthentication(Credential);
            return baseResponse;

        }


    }
}