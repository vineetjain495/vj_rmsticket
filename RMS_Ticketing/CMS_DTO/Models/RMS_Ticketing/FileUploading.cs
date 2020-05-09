using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace CMS_DTO.Models.RMS_Ticketing
{
    public class FileUploading
    {
       public List<FileUploadingFinal> FileUploadingFinal { get; set; }
    }



    public class FileUploadingFinal
    {
        public int ID { get; set; }

        public string FilePath { get; set; }

        public string FileName { get; set; }

        public string TicketID{ get; set; }

        public string MSP { get; set; }

        public bool MspActive { get; set; }

        public bool HoActive { get; set; }

        public bool LocationActive { get; set; }

        public string TypeofAttatchent { get; set; }

        public HttpPostedFileBase Editingfiles { get; set; }
    }
}