using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CMS_DTO.Models.RMS_Ticketing
{
    public class RunRuleEngineModel
    {

        public string BatchId { get; set; }

        public string MSP { get; set; }

        public string MSP_Domain { get; set; }

        public List<RunRuleEngineTicket> TicketData { get; set; }

    }



    public class RunRuleEngineTicket
    {
        public string TicketId { get; set; }

        public int Txn_No { get; set; }

        public string ATMID { get; set; }

        public string Date { get; set; }

        public int Disputed_Amount { get; set; }

        public string Ej_File {get;set; }
    }

        



}