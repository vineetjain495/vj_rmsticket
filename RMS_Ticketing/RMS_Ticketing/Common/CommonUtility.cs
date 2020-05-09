using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMSDTO.Entity;
using CMSDTO.Models.Response;
//using Ionic.Zip;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace RMS_Ticketing.Utility
{
    public class CommonUtility
    {
        //public static bool LogException(Exception exception, string applicationUrl)
        //{
        //    //CMSException cMSException = new CMSException
        //    //{
        //    //    Controller = exception.TargetSite.DeclaringType.ToString(),
        //    //    Action = exception.TargetSite.Name.ToString(),
        //    //    Message = exception.Message,
        //    //    InnerException = exception.InnerException?.Message,
        //    //    Source = exception.Source,
        //    //    StackTrace = exception.StackTrace,
        //    //    IPAddress = GlobalUtility.GetIp(),
        //    //    Url = applicationUrl,
        //    //    MacAddress = GlobalUtility.GetMACAddress()
        //    //};
        //    //BaseResponse obj = ConsumeAPIService<BaseResponse, CMSException>(CommonConstant.ExceptionAddUrl, cMSException);
        //    //return obj.Success;
        //    return true;
        //}

        //public static V ConsumeAPIService<V, T>(string serviceUrl, T requestInput,
        //    Dictionary<string, string> headerCollection = null, HttpResponseBase httpBaseResponse = null) where V : new()
        //{
        //    V resp;
        //    try
        //    {
        //      using (var httpClient = new HttpClient())
        //        {
        //            if (headerCollection != null && headerCollection.Count > 0)
        //            {
        //                foreach (var item in headerCollection)
        //                {
        //                    httpClient.DefaultRequestHeaders.Add(item.Key, item.Value);
        //                }
        //            }

        //            //string tokenContent = "null";
        //            httpClient.BaseAddress = new Uri(string.Format("{0}{1}", ConfigurationManager.AppSettings["WebApiUrl"].ToString(), serviceUrl));
        //            httpClient.Timeout = TimeSpan.FromMinutes(30);
        //            //object model = requestInput.GetType().GetProperty("Entity").GetValue(requestInput);
        //            //if (!model.GetType().Name.Equals("String[][]"))
        //            //{
        //            // tokenContent = String.IsNullOrEmpty((string)model.GetType().GetProperty("Token").GetValue(model)) ? "null" : model.GetType().GetProperty("Token").GetValue(model).ToString();
        //            //}

        //            //httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", string.Format("{0}", tokenContent.Equals("null")? HttpContext.Current.Request.Headers["Authorization"] : tokenContent));
        //            var postTask = httpClient.PostAsJsonAsync("", requestInput);
        //            postTask.Wait();
        //            postTask.Result.EnsureSuccessStatusCode();

        //            if (httpBaseResponse != null && postTask.Result.Headers.Contains("AccessToken"))
        //            {
        //                httpBaseResponse.Headers.Add("AccessToken", postTask.Result.Headers.GetValues("AccessToken").First());
        //            }
                  
        //            var response = postTask.Result.Content.ReadAsAsync(typeof(V));
        //            resp = (V)response.Result;
        //        }
        //    }

        //    catch (Exception ex)
        //    {
        //        resp = new V();
        //        Type t = resp.GetType();
        //        int count = 0;
        //        foreach (var propInfo in t.GetProperties())
        //        {
        //            if (propInfo.Name == "Success")
        //            {
        //                propInfo.SetValue(resp, false, null);
        //                count++;
        //            }
        //            if (propInfo.Name == "Message")
        //            {
        //                propInfo.SetValue(resp, ex.Message, null);
        //                count++;
        //            }
        //            if (count == 2)
        //                break;
        //        }
        //        LogException(ex, HttpContext.Current.Request.RawUrl);
        //    }

        //    return resp;
        //}

        //public static V ConsumeExternalAPIService<V, T>(string serviceUrl, T requestInput,
        //  Dictionary<string, string> headerCollection = null, HttpResponseBase httpBaseResponse = null) where V : new()
        //{
        //    V resp;
        //    try
        //    {
        //        using (var httpClient = new HttpClient())
        //        {
        //            if (headerCollection != null && headerCollection.Count > 0)
        //            {
        //                foreach (var item in headerCollection)
        //                {
        //                    httpClient.DefaultRequestHeaders.Add(item.Key, item.Value);
        //                }
        //            }
        //            httpClient.BaseAddress = new Uri(serviceUrl);

        //            var postTask = httpClient.PostAsJsonAsync("", requestInput);
        //            postTask.Wait();
        //            postTask.Result.EnsureSuccessStatusCode();

        //            if (httpBaseResponse != null && postTask.Result.Headers.Contains("AccessToken"))
        //            {
        //                httpBaseResponse.Headers.Add("AccessToken", postTask.Result.Headers.GetValues("AccessToken").First());
        //            }
        //            var response = postTask.Result.Content.ReadAsAsync(typeof(V));

        //            resp = (V)response.Result;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        resp = new V();
        //        Type t = resp.GetType();
        //        int count = 0;
        //        foreach (var propInfo in t.GetProperties())
        //        {
        //            if (propInfo.Name == "Success")
        //            {
        //                propInfo.SetValue(resp, false, null);
        //                count++;
        //            }
        //            if (propInfo.Name == "Message")
        //            {
        //                propInfo.SetValue(resp, ex.Message, null);
        //                count++;
        //            }
        //            if (count == 2)
        //                break;
        //        }
        //        LogException(ex, HttpContext.Current.Request.RawUrl);
        //    }

        //    return resp;
        //}

        //public static DataTable ConvertToDataTable<T>(IEnumerable<T> list)
        //{
        //    PropertyDescriptorCollection properties =
        //    TypeDescriptor.GetProperties(typeof(T));
        //    DataTable table = new DataTable();
        //    List<string> Datetime = new List<string> { "Incident_Date", "Email_Date" };
        //    List<string> time = new List<string> { "Transaction_Time", "Email_Time" };
        //    foreach (PropertyDescriptor prop in properties)
        //    {
            
        //        if (prop.Name == "ServerMaster")
        //        {
        //            table.Columns.Add("ServerName");
        //        }
        //        else
        //        {
        //            table.Columns.Add(prop.Name, Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType);
        //        }

        //    }

        //    if (list != null)
        //    {
        //        foreach (T item in list)
        //        {
        //            DataRow row = table.NewRow();
        //            foreach (PropertyDescriptor prop in properties)
        //            {
        //                if (Datetime.Contains(prop.Name))
        //                {
        //                    row[prop.Name] = prop.GetValue(item) != null ? Convert.ToDateTime(prop.GetValue(item).ToString()).ToShortDateString() : string.Empty;
        //                }
        //                else if (time.Contains(prop.Name))
        //                {
        //                    row[prop.Name] = prop.GetValue(item) != null ? Convert.ToDateTime(prop.GetValue(item).ToString()).ToShortTimeString() : string.Empty;
        //                }
        //                else
        //                {
        //                    row[prop.Name] = prop.GetValue(item) ?? DBNull.Value;
        //                }

        //            }
        //            table.Rows.Add(row);
        //        }
        //    }
        //    return table;
        //}

        //public static void ExportExcel(DataTable dt, string filename, HttpResponseBase Response)
        //{
        //    //string attachment = "attachment; filename=" + filename + ".csv";
        //    var cd = new System.Net.Mime.ContentDisposition
        //    {
        //        FileName = filename + ".xls",
        //        Inline = false,
        //    };
        //    Response.ClearContent();
        //    Response.AddHeader("content-disposition", cd.ToString());
        //    Response.Cache.SetCacheability(HttpCacheability.NoCache);
        //    Response.ContentType = "application/vnd.ms-excel";
        //    string tab = "";
        //    foreach (DataColumn dc in dt.Columns)
        //    {
        //        Response.Write(tab + dc.ColumnName);
        //        tab = "\t";
        //    }
        //    Response.Write("\n");
        //    int i;
        //    List<string> str = new List<string> {
        //        "TT5769",
        //        "TT147",
        //        "TT5862",
        //        "TT5891",
        //        "TT146",
        //        "TT121",
        //        "TT145",
        //        "TT144",
        //        "TT143",
        //        "TT124",
        //        "TT5732",
        //        "TT142",
        //        "TT123"
        //    };

        //    foreach (DataRow dr in dt.Rows)
        //    {
        //        tab = "";
        //        for (i = 0; i < dt.Columns.Count; i++)
        //        {
        //            if (str.Contains(dr[i].ToString()))
        //            {
        //                var a = 1;
        //            }
        //            Response.Write(tab + dr[i].ToString().Replace("\r", " | ").Replace("\n", " | ").Replace("\t", " | ").Replace(",", " : "));
        //            tab = "\t";
        //        }
        //        Response.Write("\n");
        //    }
        //    Response.Flush();
        //    Response.End();
        //}

        //public static string Encrypt(string clearText)
        //{
        //    string EncryptionKey = "MAKV2SPBNI99212";
        //    byte[] clearBytes = Encoding.Unicode.GetBytes(clearText);
        //    using (Aes encryptor = Aes.Create())
        //    {
        //        Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
        //        encryptor.Key = pdb.GetBytes(32);
        //        encryptor.IV = pdb.GetBytes(16);
        //        using (MemoryStream ms = new MemoryStream())
        //        {
        //            using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
        //            {
        //                cs.Write(clearBytes, 0, clearBytes.Length);
        //                cs.Close();
        //            }
        //            clearText = Convert.ToBase64String(ms.ToArray());
        //        }
        //    }
        //    return clearText;
        //}

        //public static V ConsumeAPIServiceRestClient<V, T>(string serviceUrl, T requestInput,
        //  Dictionary<string, string> headerCollection = null, HttpResponseBase httpBaseResponse = null) where V : new()
        //{
        //    V resp;
        //    try
        //    {
        //        var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiLoginUrl"].ToString());
        //        if (headerCollection != null && headerCollection.Count > 0)
        //        {
        //            foreach (var item in headerCollection)
        //            {
        //                restClient.AddDefaultHeader(item.Key, item.Value);
        //            }
        //        }

        //        var request = new RestRequest(Method.POST) { Resource = serviceUrl, RequestFormat = DataFormat.Json };
        //        request.AddJsonBody(requestInput);

        //        resp = (V)Convert.ChangeType(JsonConvert.DeserializeObject<BaseResponse<Employee_Role_Model>>(restClient.Post(request).Content), typeof(V));

        //    }
        //    catch (Exception ex)
        //    {
        //        resp = new V();
        //        Type t = resp.GetType();
        //        int count = 0;
        //        foreach (var propInfo in t.GetProperties())
        //        {
        //            if (propInfo.Name == "Success")
        //            {
        //                propInfo.SetValue(resp, false, null);
        //                count++;
        //            }
        //            if (propInfo.Name == "Message")
        //            {
        //                propInfo.SetValue(resp, ex.Message, null);
        //                count++;
        //            }
        //            if (count == 2)
        //                break;
        //        }
        //      LogException(ex, HttpContext.Current.Request.RawUrl);
        //    }

        //    return resp;
        //}

        //public static V ConsumeAPIServiceRestClientCreateTicket<V, T>(string serviceUrl, T requestInput,
        //  Dictionary<string, string> headerCollection = null, HttpResponseBase httpBaseResponse = null) where V : new()
        //{
        //    V resp;
        //    try
        //    {
        //        var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiCreateTicketUrl"].ToString());
        //        if (headerCollection != null && headerCollection.Count > 0)
        //        {
        //            foreach (var item in headerCollection)
        //            {
        //                restClient.AddDefaultHeader(item.Key, item.Value);
        //            }
        //        }

        //        var request = new RestRequest(Method.POST) { Resource = serviceUrl, RequestFormat = DataFormat.Json };
        //        request.AddJsonBody(requestInput);

        //        resp = (V)Convert.ChangeType(JsonConvert.DeserializeObject<BaseResponse>(restClient.Post(request).Content), typeof(V));

        //    }
        //    catch (Exception ex)
        //    {
        //        resp = new V();
        //        Type t = resp.GetType();
        //        int count = 0;
        //        foreach (var propInfo in t.GetProperties())
        //        {
        //            if (propInfo.Name == "Success")
        //            {
        //                propInfo.SetValue(resp, false, null);
        //                count++;
        //            }
        //            if (propInfo.Name == "Message")
        //            {
        //                propInfo.SetValue(resp, ex.Message, null);
        //                count++;
        //            }
        //            if (count == 2)
        //                break;
        //        }
        //        LogException(ex, HttpContext.Current.Request.RawUrl);
        //    }

        //    return resp;
        //}


        //public static string FileUpload(HttpPostedFileBase upload,string Value,bool Flag)
        //{
        //        string FileName = Path.GetFileName(upload.FileName.Replace(" ","_"));
        //        string Extension = Path.GetExtension(upload.FileName);
        //    //string path = @"\\sharedfilescms.file.core.windows.net\filesharecmstest\EJ_Files\";
        //    //string path = @"Z:\EJ_Files\";
        //    string path =string.Empty;

        //    if (Flag)
        //    {
        //        ////Dev
        //        path = ConfigurationManager.AppSettings["FilesUploadFolderPath"].ToString();

        //        ////UAT
        //        //path = @"\\172.19.100.157\Volume6\NFSRMSUAT\EJ_Files\";

        //        ////PROD
        //        //path = @"\\sharedfilescms.file.core.windows.net\filesharecmstest\EJ_Files\";
        //    }
        //    else
        //    {
        //        ////Dev
        //        path = ConfigurationManager.AppSettings["FilesUploadFolderPath"].ToString();

        //        ////UAT
        //        //path = @"\\172.19.100.157\Volume6\NFSRMSUAT\Others_Files\";

        //        ////PROD
        //        //path = @"\\sharedfilescms.file.core.windows.net\filesharecmstest\Others_Files\";

        //    }


        //    //string path =ConfigurationManager.AppSettings["FilesUploadFolderPath"].ToString();


        //    if (!Directory.Exists(path))
        //        {
        //            Directory.CreateDirectory(path);
        //        }

        //        string Subfoder = string.Format(@"{0}{1}_{2}\", path, Value, DateTime.Now.ToString("yyyy'-'MM'-'dd"));
        //        DirectoryInfo info = new DirectoryInfo(Subfoder);
        //        {
        //            if (!info.Exists)
        //            {
        //                DirectoryInfo subDirectoryInfo = new DirectoryInfo(path);
        //                subDirectoryInfo.CreateSubdirectory(string.Format("{0}_{1}", Value, DateTime.Now.ToString("yyyy'-'MM'-'dd")));
        //            }

        //        }
        //        string FileCreate = string.Format(@"{0}\{1}_{2}", Subfoder, string.Format("{0}_{1}", Value, DateTime.Now.ToString("yyyy'-'MM'-'dd'_'HH'-'mm'-'ss")), FileName);
        //        upload.SaveAs(FileCreate);
        //    //using (ZipFile zip = new ZipFile())
        //    //{
        //    //    zip.Password = string.Format("{0}{1}", Value.ToLower(), DateTime.Now.ToString("yyyyMMdd"));
        //    //    zip.AddFile(FileCreate, "File");
        //    //    zip.Save(string.Format("{0}\\{1}.zip", Subfoder, string.Format("{0}_{1}", Value, DateTime.Now.ToString("yyyy'-'MM'-'dd'T'HH'-'mm'-'ss"))));

        //    //}
        //    //System.IO.File.Delete(FileCreate);

        //        FileCreate = FileCreate.Replace(@"\\172.19.100.157\Volume6\NFSRMSUAT\",@"Z:\");
        //        return FileCreate;
            
        //}


        public static V ConsumeAPIServiceRunRuleEngine<V, T>(string serviceUrl, T requestInput,
          Dictionary<string, string> headerCollection = null, HttpResponseBase httpBaseResponse = null) where V : new()
        {
            V resp;
            try
            {
                var restClient = new RestClient(ConfigurationManager.AppSettings["WebApiRuleEngineUrl"].ToString());
                if (headerCollection != null && headerCollection.Count > 0)
                {
                    foreach (var item in headerCollection)
                    {
                        restClient.AddDefaultHeader(item.Key, item.Value);
                    }
                }

                var request = new RestRequest(Method.POST) { Resource = serviceUrl, RequestFormat = DataFormat.Json };
                request.AddJsonBody(requestInput);

                resp = (V)Convert.ChangeType(JsonConvert.DeserializeObject<BaseResponse>(restClient.Post(request).Content), typeof(V));

            }
            catch (Exception ex)
            {
                resp = new V();
                Type t = resp.GetType();
                int count = 0;
                foreach (var propInfo in t.GetProperties())
                {
                    if (propInfo.Name == "Success")
                    {
                        propInfo.SetValue(resp, false, null);
                        count++;
                    }
                    if (propInfo.Name == "Message")
                    {
                        propInfo.SetValue(resp, ex.Message, null);
                        count++;
                    }
                    if (count == 2)
                        break;
                }
               // LogException(ex, HttpContext.Current.Request.RawUrl);
            }

            return resp;
        }

        //public static string FileUploadPassProtected(HttpPostedFileBase upload, string Value)
        //{
        //    string FileName = Path.GetFileName(upload.FileName.Replace(" ", "_"));
        //    string Extension = Path.GetExtension(upload.FileName);
        //    string path = ConfigurationManager.AppSettings["FilesUploadFolderPath"].ToString();


        //    if (!Directory.Exists(path))
        //    {
        //        Directory.CreateDirectory(path);
        //    }

        //    string Subfoder = string.Format("{0}{1}_{2}\\", path, Value, DateTime.Now.ToString("yyyy'-'MM'-'dd"));
        //    DirectoryInfo info = new DirectoryInfo(Subfoder);
        //    {
        //        if (!info.Exists)
        //        {
        //            DirectoryInfo subDirectoryInfo = new DirectoryInfo(path);
        //            subDirectoryInfo.CreateSubdirectory(string.Format("{0}_{1}", Value, DateTime.Now.ToString("yyyy'-'MM'-'dd")));
        //        }

        //    }
        //    string FileCreate = string.Format("{0}\\{1}_{2}", Subfoder, string.Format("{0}_{1}", Value, DateTime.Now.ToString("yyyy'-'MM'-'dd'T'HH'-'mm'-'ss")), FileName);
        //    upload.SaveAs(FileCreate);
        //    using (ZipFile zip = new ZipFile())
        //    {
        //        zip.Password = string.Format("{0}{1}", Value.ToLower(), DateTime.Now.ToString("yyyyMMdd"));
        //        zip.AddFile(FileCreate, "File");
        //        zip.Save(string.Format("{0}\\{1}.zip", Subfoder, string.Format("{0}_{1}", Value, DateTime.Now.ToString("yyyy'-'MM'-'dd'T'HH'-'mm'-'ss"))));

        //    }
        //    System.IO.File.Delete(FileCreate);


        //    return string.Format("{0}\\{1}\\File\\{1}_{2}", Subfoder, string.Format("{0}_{1}", Value, DateTime.Now.ToString("yyyy'-'MM'-'dd'T'HH'-'mm'-'ss")), FileName);

        //}

    }
}