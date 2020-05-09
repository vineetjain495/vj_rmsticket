using AutoMapper;
using CMS_DAL.RMS_Ticketing_DAL;
using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMS_Repository.Interface.RMS_Interface;
using CMSDTO.Models.Response;
using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace RMS_Ticketing.Common
{

    /// <summary>
    /// Common Utility Class Contain global methods
    /// </summary>
    public class CustomLogHandler : DelegatingHandler
    {
        protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
          
            if (!(request.RequestUri.AbsolutePath.Contains("/swagger")) && (request.RequestUri.AbsolutePath != "/") && (!string.IsNullOrEmpty(request.RequestUri.AbsolutePath)))
            {
                var logMetadata = BuildRequestMetadata(request);
                var response = await base.SendAsync(request, cancellationToken);
                logMetadata = BuildResponseMetadata(logMetadata, response);
                await SendToLog(logMetadata);
                return response;
            }
            else
            {
                //HttpRequestMessage httpRequestMessage = new HttpRequestMessage();
                return await base.SendAsync(request, cancellationToken); 
            }
        }
        private LogMetadata BuildRequestMetadata(HttpRequestMessage request)
        {
            LogMetadata log = new LogMetadata();

            log.RequestMethod = request.Method.Method;
            log.RequestTimestamp = DateTime.Now;
            log.RequestUri = request.RequestUri.ToString();
            if(request.Content.Headers.ContentType !=null)
            log.RequestContentType = request.Content.Headers.ContentType.MediaType;
            log.RequestContent = request.Content.ReadAsStringAsync().Result;


            return log;
        }
        private LogMetadata BuildResponseMetadata(LogMetadata logMetadata, HttpResponseMessage response)
        {
            logMetadata.ResponseStatusCode = response.StatusCode;
            logMetadata.ResponseTimestamp = DateTime.Now;
            logMetadata.ResponseContentType = response.Content.Headers.ContentType.MediaType;
            logMetadata.ResponseContent= response.Content.ReadAsStringAsync().Result;
            return logMetadata;
        }
        //private async Task<bool> SendToLog_1(LogMetadata logMetadata)
        //{
        //    IRMSTSConnectorRepository authentication = new RMSTSConnectorRepository();
        //    var config = new MapperConfiguration(cfg =>
        //    {
        //        //Model to DTO
        //        cfg.CreateMap<LogMetadata, APILog>();
        //    });

        //    IMapper iMapper = config.CreateMapper();

        //    APILog aPILog = iMapper.Map<LogMetadata, APILog>(logMetadata);

        //    BaseResponse baseResponse= authentication.SaveAPILogData(aPILog);
        //    // TODO: Write code here to store the logMetadata instance to a pre-configured log store...
        //    return true;
        //}
        private async Task<bool> SendToLog(LogMetadata logMetadata)
        {
            IRMSTSConnectorRepository authentication = new RMSAutomationRepository();
            var config = new MapperConfiguration(cfg =>
            {
                //Model to DTO
                cfg.CreateMap<LogMetadata, APILog>();
            });

            IMapper iMapper = config.CreateMapper();

            APILog aPILog = iMapper.Map<LogMetadata, APILog>(logMetadata);
            
            BaseResponse baseResponse = authentication.SaveAPILogData(aPILog);
            if (logMetadata.RequestContent.Length > 8000)
            {
                string dirval = "C://Log//"; //ConfigurationManager.AppSettings["path"].ToString() + folderval;

                if (!Directory.Exists(dirval))
                {
                    Directory.CreateDirectory(dirval);
                }
                FileStream fs = new FileStream(dirval + aPILog.RequestID + ".txt    ", FileMode.Create);
                // First, save the standard output.
                TextWriter tmp = Console.Out;
                StreamWriter sw = new StreamWriter(fs);
                Console.SetOut(sw);
                Console.WriteLine(logMetadata.RequestContent);
                Console.WriteLine("Response");
                Console.WriteLine(logMetadata.ResponseContent);

                Console.SetOut(tmp);

                sw.Close();
            }
            // TODO: Write code here to store the logMetadata instance to a pre-configured log store...
            return true;
        }
    }
}