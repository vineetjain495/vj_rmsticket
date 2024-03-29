﻿using CMS_DTO.Entity.RMS_Ticketing;
using CMS_DTO.Models.RMS_Ticketing;
using CMSDTO.Models.Response;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMS_Repository.Interface.RMS_Interface
{
    public interface ICBRConnectorRepository
    {
        cslsipl_atmmaster CheckATMExist(string atmid);
        List<CBREntryDTO> CBR_DataReader (string atmid, DateTime eoddatetime);
        DataSet GetLastirstEOD(string ATMID, DateTime IncidentDate);
    }
}
