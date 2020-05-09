using CMS_DTO.Models.RMS_Ticketing;
using CMSDTO.Models.Request;
using CMSRepository.Interface;
using CMSRepository.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CMSDAL
{
   public class CommonFilterRepository 
    {
        public StringBuilder orderBy(JqxGridPaginationModel baseRequest)
        {
            StringBuilder orderBy = new StringBuilder();
            orderBy.Append(string.Format("{0}{1}",baseRequest.Prefix,baseRequest.Sortdatafield));
            return orderBy;
        }

        public StringBuilder where(JqxGridPaginationModel baseRequest)
        {
            StringBuilder where = new StringBuilder("");
            StringBuilder field = new StringBuilder("");
            StringBuilder openBrak = new StringBuilder("(");
            StringBuilder closeBrak = new StringBuilder(")");
            int filterGroupLen = baseRequest.filterGroups.Length;
            field.Append(openBrak);
            for (int filterGroup = 0; filterGroup < filterGroupLen; filterGroup++)
            {
                if (filterGroup > 0)
                {
                    field.Append(" && ");
                }
                int filterLen = baseRequest.filterGroups[filterGroup].filters.Length;
                if (filterLen > 1)
                {
                    field.Append(openBrak);
                }
                
                for (int filter = 0; filter < filterLen; filter++)
                {
                    if (filter > 0)
                    {
                        field.Append(" || ");
                    }
                    
                    switch (baseRequest.filterGroups[filterGroup].filters[filter].condition)
                    {
                        case "EQUAL":
                            field.AppendFormat("{0}", (baseRequest.filterGroups[filterGroup].filters[filter].value.Equals("true") || baseRequest.filterGroups[filterGroup].filters[filter].value.Equals("false")) ? string.Format("{0} == {1}", baseRequest.filterGroups[filterGroup].filters[filter].field, baseRequest.filterGroups[filterGroup].filters[filter].value) : string.Format("{0}.Equals('{1}')", baseRequest.filterGroups[filterGroup].filters[filter].field, baseRequest.filterGroups[filterGroup].filters[filter].value));
                            //field.AppendFormat("{0} == {1}", baseRequest.filterGroups[filterGroup].filters[filter].field, baseRequest.filterGroups[filterGroup].filters[filter].value);
                            break;
                        case "NOT_EQUAL":
                            field.AppendFormat("{0} != {1}", baseRequest.filterGroups[filterGroup].filters[filter].field, baseRequest.filterGroups[filterGroup].filters[filter].value);
                            break;
                        case "CONTAINS":
                            field.AppendFormat(" {0}.Contains('{1}') ",  baseRequest.filterGroups[filterGroup].filters[filter].field, baseRequest.filterGroups[filterGroup].filters[filter].value);
                            break;
                        case "DOES_NOT_CONTAIN":
                            field.AppendFormat(" !{0}.Contains('{1}') ",  baseRequest.filterGroups[filterGroup].filters[filter].field, baseRequest.filterGroups[filterGroup].filters[filter].value);
                            break;
                        case "STARTS_WITH":
                            field.AppendFormat(" {0}.StartsWith('{1}') ",  baseRequest.filterGroups[filterGroup].filters[filter].field, baseRequest.filterGroups[filterGroup].filters[filter].value);
                            break;
                        case "NULL":
                            field.AppendFormat(" string.IsNullOrEmpty({0}) ",  baseRequest.filterGroups[filterGroup].filters[filter].field);
                            break;
                        case "NOT_NULL":
                            field.AppendFormat(" !string.IsNullOrEmpty({0}) ",  baseRequest.filterGroups[filterGroup].filters[filter].field);
                            break;
                    }
                    if (baseRequest.filterGroups[filterGroup].filters[filter].condition.Equals("GREATER_THAN_OR_EQUAL") || baseRequest.filterGroups[filterGroup].filters[filter].condition.Equals("LESS_THAN_OR_EQUAL"))
                    {
                        field.Append(")");
                        break;
                    }
                    if (filter > 0 && filter == (filterLen-1))
                    {
                        field.Append(")");
                    }
                }
            }
           field.Append(closeBrak);

        return where.Append(field);
        }

        public Update_Logs Update_Logs(BaseRequest<UpdateTicketModel> needToUpdate,UpdateTicketModel ticketAvailable)
        {
            Update_Logs final_Value = new Update_Logs();
            StringBuilder updateQuery = new StringBuilder("Update ticket set ");
            string character = "Update ticket set ";
            StringBuilder Value = new StringBuilder();

            bool Admin_User = (needToUpdate.LoginEmployeeDetails.AssignedRoleID == 1);
            bool HO_User = (needToUpdate.LoginEmployeeDetails.AssignedRoleID == 3);
            bool Location_User = (needToUpdate.LoginEmployeeDetails.AssignedRoleID == 4);

            List<string> CMSStatusAssignment = new List<string> { "CLOSED", "TAKEN UP FOR RECOVERY" };
            List<string> CMSStatus = new List<string> { "OPEN REGION", "TAKEN UP FOR RECOVERY" };
            List<string> TeritoryJustification = new List<string> { "OVERAGE REPORTED", "PARTIAL - OVERAGE REPORTED", "SWITCH INCREASED", "PARTIAL - SWITCH INCREASED", "PARTIAL - CASH DEPOSITED", "CASH DEPOSITED" };
            List<string> overageJustification = new List<string> { "OVERAGE REPORTED", "PARTIAL - OVERAGE REPORTED" };
            List<string> midCashJustification = new List<string> { "SWITCH INCREASED", "PARTIAL - SWITCH INCREASED" };
            List<string> atmDepositJustification = new List<string> { "PARTIAL - CASH DEPOSITED", "CASH DEPOSITED" };




            Value.AppendFormat("{0}:{1}{2},", "UpdatedBy", needToUpdate.LoginEmployeeDetails.EmpFullName,"@");





            if(!(String.IsNullOrEmpty(needToUpdate.Entity.QueryType) && needToUpdate.Entity.QueryType == ""))
            {
                if(ticketAvailable.QueryType.ToLower() != needToUpdate.Entity.QueryType.ToLower())
                {

                    if (updateQuery.ToString().ToLower() != character.ToLower())
                    {
                        updateQuery.Append(" , ");
                    }
                    Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldQueryType", ticketAvailable.QueryType, "NewQueryType", needToUpdate.Entity.QueryType, "@");
                    updateQuery.AppendFormat("{0}='{1}'", "QueryType", needToUpdate.Entity.QueryType);

                    if (needToUpdate.Entity.QueryType.ToLower() == "CUSTOMER CLAIM")
                    {
                        if (ticketAvailable.QueryCategory.ToLower() != needToUpdate.Entity.QueryCategory.ToLower())
                        {
                            if (updateQuery.ToString().ToLower() != character.ToLower())
                            {
                                updateQuery.Append(" , ");
                            }
                            Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldQueryCategory", ticketAvailable.QueryCategory, "NewQueryCategory", needToUpdate.Entity.QueryCategory, "@");
                            updateQuery.AppendFormat("{0}='{1}'", "QueryCategory", needToUpdate.Entity.QueryCategory);
                        }
                    }
                    else
                    {
                        if (updateQuery.ToString().ToLower() != character.ToLower())
                        {
                            updateQuery.Append(" , ");
                        }
                        Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldQueryCategory", ticketAvailable.QueryCategory, "NewQueryCategory", "null" , "@");
                        updateQuery.AppendFormat("{0}='{1}'", "QueryCategory", string.Empty);

                    }

                }
                

            }
                


                //if(ticketAvailable.TargetAmount != needToUpdate.Entity.TargetAmount && ticketAvailable.CMSStatus.ToUpper() != "CLOSED" &&  !Location_User)
                //{
                //if (updateQuery.ToString().ToLower() != character.ToLower())
                //{
                //    updateQuery.Append(" , ");
                //}



                //}

                //if (ticketAvailable.CardNo.ToLower() != needToUpdate.Entity.CardNo.ToLower())
                //{
                //    if (updateQuery.ToString().ToLower() != character.ToLower())
                //    {
                //        updateQuery.Append(" , ");
                //    }
                //    Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldCardNumber", ticketAvailable.CardNo, "NewCardNumber", needToUpdate.Entity.CardNo, "@");
                //    updateQuery.AppendFormat("{0}='{1}'", "CardNo", needToUpdate.Entity.CardNo);

                //}

                if ((ticketAvailable.ErrorCode.ToLower() + ticketAvailable.ErrorRemarks.ToLower()) != (needToUpdate.Entity.ErrorCode.ToLower() + (String.IsNullOrEmpty(needToUpdate.Entity.ErrorRemarks)?"":needToUpdate.Entity.ErrorRemarks.ToLower())))
                {
                    if (updateQuery.ToString().ToLower() != character.ToLower())
                    {
                        updateQuery.Append(" , ");
                    }
                    Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldErrorCode", ticketAvailable.ErrorCode + ticketAvailable.ErrorRemarks, "NewErrorCode", needToUpdate.Entity.ErrorCode, "@");
                    Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldErrorType", ticketAvailable.ErrorType, "NewErrorType", needToUpdate.Entity.ErrorType, "@");
                    Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldErrorBucket", ticketAvailable.ErrorBucket, "NewErrorBucket", needToUpdate.Entity.ErrorBucket, "@");
                    updateQuery.AppendFormat("{0}='{1}' , {2}='{3}'", "ErrorCode", needToUpdate.Entity.ErrorCode, "ErrorRemark", needToUpdate.Entity.ErrorRemarks);
                }
                if (ticketAvailable.CustomerActions.ToLower() != needToUpdate.Entity.CustomerActions.ToLower())
                {
                    if (updateQuery.ToString().ToLower() != character.ToLower())
                    {
                        updateQuery.Append(" , ");
                    }
                    Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldCustomerStatus", ticketAvailable.CustomerActions, "NewCustomerStatus", needToUpdate.Entity.CustomerActions, "@");
                    updateQuery.AppendFormat("{0}='{1}' , {2}='{3}'", "Status", needToUpdate.Entity.CustomerActions, "CustStatus", ticketAvailable.CustomerActions);
                }

                if (ticketAvailable.Justification.ToLower() != needToUpdate.Entity.HORejectionJustification.ToLower())
                {
                    if (updateQuery.ToString().ToLower() != character.ToLower())
                    {
                        updateQuery.Append(" , ");
                    }
                    Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldHORejectionJustification", ticketAvailable.Justification, "NewHORejectionJustification", needToUpdate.Entity.HORejectionJustification, "@");
                    updateQuery.AppendFormat("{0}='{1}'", "Justification", needToUpdate.Entity.HORejectionJustification);

                if (HO_User)
                {
                    if (overageJustification.Contains(needToUpdate.Entity.HORejectionJustification.ToUpper()))
                    {

                        Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldHOOverage", ticketAvailable.DepositDate, "NewHOOverage", Convert.ToDateTime(needToUpdate.Entity.OverageDate).ToString("dd-MMM-yyyy"), "@");
                        Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldHOOverageAmount", ticketAvailable.DepositAmount, "NewHOOverageAmount", needToUpdate.Entity.DepositAmount, "@");

                    }
                    else if (midCashJustification.Contains(needToUpdate.Entity.HORejectionJustification.ToUpper()))
                    {

                        Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldHOOverageDate", ticketAvailable.DepositDate, "NewHOOverageDate", Convert.ToDateTime(needToUpdate.Entity.OverageDate).ToString("dd-MMM-yyyy"), "@");
                        Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldHOOverageAmount", ticketAvailable.DepositAmount, "NewHOOverageAmount", needToUpdate.Entity.OverageAmount, "@");

                    }
                    else if (atmDepositJustification.Contains(needToUpdate.Entity.HORejectionJustification.ToUpper()))
                    {

                        Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldHOOverage", ticketAvailable.DepositDate, "NewHOOverage", Convert.ToDateTime(needToUpdate.Entity.OverageDate).ToString("dd-MMM-yyyy"), "@");
                        Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldHOOverageAmount", ticketAvailable.DepositAmount, "NewHOOverageAmount", needToUpdate.Entity.OverageAmount, "@");
                    }
                }

            }


            if (HO_User)
            {
                if (CMSStatus.Contains(needToUpdate.Entity.CMSStatus.ToUpper()) && needToUpdate.Entity.TargetAmount!=null)
                {

                    if (updateQuery.ToString().ToLower() != character.ToLower())
                    {
                        updateQuery.Append(" , ");
                    }
                    Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldTargetAmount", ticketAvailable.TargetAmount, "NewTargetAmount", needToUpdate.Entity.TargetAmount, "@");
                    updateQuery.AppendFormat("{0}={1}", "TargetAmount", needToUpdate.Entity.TargetAmount);


                }

                if(needToUpdate.Entity.CMSRemarks != null)
                {
                   if(ticketAvailable.CMSRemarks.ToLower() != needToUpdate.Entity.CMSRemarks.ToLower())
                    {

                        if (updateQuery.ToString().ToLower() != character.ToLower())
                        {
                            updateQuery.Append(" , ");
                        }
                        Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldCMSRemarks", ticketAvailable.TargetAmount, "NewCMSRemarks", needToUpdate.Entity.TargetAmount, "@");
                        updateQuery.AppendFormat("{0}='{1}'", "CustComments", needToUpdate.Entity.CMSRemarks);

                    }

               }
            }

           


            if (ticketAvailable.CMSStatus.ToLower() != needToUpdate.Entity.CMSStatus.ToLower())
            {
                if (updateQuery.ToString().ToLower() != character.ToLower())
                {
                    updateQuery.Append(" , ");
                }
                Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldCMSStatus", ticketAvailable.CMSStatus, "NewCMSStatus", needToUpdate.Entity.CMSStatus, "@");
                updateQuery.AppendFormat("{0}='{1}'", "CMSStatus", needToUpdate.Entity.CMSStatus);
            }

            //if (ticketAvailable.TransAmount.ToLower() != needToUpdate.Entity.TransAmount.ToLower())
            //{
            //    if (updateQuery.ToString().ToLower() != character.ToLower())
            //    {
            //        updateQuery.Append(" , ");
            //    }
            //    Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldTransactionAmount", ticketAvailable.TransAmount, "NewTransactionAmount", needToUpdate.Entity.TransAmount, "@");
            //    updateQuery.AppendFormat("{0}='{1}'", "CMSStatus", needToUpdate.Entity.TransAmount);
            //}


            //if (needToUpdate.Entity.CMSStatus.ToLower() != "CLOSED".ToLower())
            //{
            if (updateQuery.ToString().ToLower() != character.ToLower())
            {
                updateQuery.Append(" , ");
            }
            updateQuery.AppendFormat("{0}='{1}' , {2}='{3}' , {4}=CAST('{5}' as Datetime)", "AssignedTo", needToUpdate.Entity.AssignedTo, "ModifiedBy", needToUpdate.LoginEmployeeDetails.EmpCode, "ModifiedDate", DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));

            //}

            


            if (Location_User)
            {
                if (updateQuery.ToString().ToLower() != character.ToLower())
                {
                    updateQuery.Append(" , ");
                }
                updateQuery.AppendFormat(" {0}='{1}' ", "LocOwner", needToUpdate.Entity.AssigneToRecovery);


                if (TeritoryJustification.Contains(needToUpdate.Entity.TerritoryRejectionJustification.ToUpper()))
                {
                    if (updateQuery.ToString().ToLower() != character.ToLower())
                    {
                        updateQuery.Append(" , ");
                    }
                    Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldDepositDate", ticketAvailable.DepositDate, "NewDepositDate", Convert.ToDateTime(needToUpdate.Entity.DepositDate).ToString("dd-MMM-yyyy"), "@");
                    Value.AppendFormat("{0}:{1},  {2}:{3},{4}", "OldDepositAmount", ticketAvailable.DepositAmount, "NewDepositAmount", needToUpdate.Entity.DepositAmount, "@");
                    updateQuery.AppendFormat("{0}='{1}' ,{2}=CAST('{3}' as Datetime) ", "DepositAmount", needToUpdate.Entity.DepositAmount,"DepositDate", Convert.ToDateTime(needToUpdate.Entity.DepositDate).ToString("yyyy-MM-dd"));

                }



            }



            if (HO_User) {
                if (updateQuery.ToString().ToLower() != character.ToLower())
                {
                    updateQuery.Append(" , ");
                }

                if (CMSStatusAssignment.Contains(needToUpdate.Entity.CMSStatus.ToUpper()))
                {
                    updateQuery.AppendFormat("{0}={1} , {2}={3}", "HOSubmitted", '1', "LocSubmitted", '0');
                }
                else
                {
                    updateQuery.AppendFormat("{0}={1} , {2}={3} , {4}=CAST('{5}' as Datetime)", "HOSubmitted", '1', "LocSubmitted", '0' , "AssignedToLocationDT" , DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
                }
                

               

            }
            else
            {

                if (updateQuery.ToString().ToLower() != character.ToLower())
                {
                    updateQuery.Append(" , ");
                }

                updateQuery.AppendFormat("{0}={1} , {2}={3} , {4}=CAST('{5}' as Datetime)", "HOSubmitted", '0', "LocSubmitted", '1' , "LocationCompletionDT" , DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));



            }


            final_Value.UpdateLogs_Value = Value.ToString().Replace("@"," " + Environment.NewLine);
            
            if(updateQuery.ToString().ToLower() != character.ToLower())
            {
                updateQuery.AppendFormat(" Where TicketID='{0}' && BatchId='{1}'", ticketAvailable.TicketId, ticketAvailable.BatchID);
                final_Value.UpdateQuery_Value = updateQuery.ToString();
            }
            else
            {
                updateQuery.Clear();
                final_Value.UpdateQuery_Value = updateQuery.ToString();
            }

            return final_Value;
        }


        public string FetchRecords(BaseRequest<JqxGridPaginationModel> gridPaginationModel, List<string> regionList,List<string> locationList)
        {

            var Admin_User = (gridPaginationModel.LoginEmployeeDetails.AssignedRoleID == 1);
            var MSP_User = (gridPaginationModel.LoginEmployeeDetails.AssignedRoleID == 2);
            var HO_User = (gridPaginationModel.LoginEmployeeDetails.AssignedRoleID == 3);
            var Location_User = (gridPaginationModel.LoginEmployeeDetails.AssignedRoleID == 4);
            var HO_Manager = (gridPaginationModel.LoginEmployeeDetails.AssignedRoleID == 5);
            var Loc_Manager = (gridPaginationModel.LoginEmployeeDetails.AssignedRoleID == 6);

            StringBuilder Where = new StringBuilder("WHERE ");

            StringBuilder regionWhere = new StringBuilder("t.Region IN (");

            StringBuilder locationWhere = new StringBuilder("t.Location IN (");

            StringBuilder stringBuilder = new StringBuilder(" SELECT t.Id as Id,a.atmcode as ATMIDs,a.RoName as RoCode,a.LocationName as Location,a.BankName as Bank,a.MSP as MSP,t.ATMID as ATMID,t.TicketID as TicketID,t.CreatedDate as CreatedDate,t.IncidentDate as IncidentDate,t.TransactonTime as TransactonTime,(CASE WHEN t.DisputedAmount IS NULL THEN 0 ELSE t.DisputedAmount END) as DisputeAmount,t.TransactionNo as TransactionNumber,t.Status as Status,t.AssignedTo as AssignedTo from ticket t left join atmmaster a on t.ATMpkid = a.pkid ORDER BY t.Id ");

            if(regionList !=null  && locationList != null)
            {

                for(int i=0;i<=regionList.Count();i++)
                {
                    regionWhere.Append(string.Format(" {0}{1}{0} ","'",regionList[i]));
                    
                    if(i < regionList.Count())
                    {
                        regionWhere.Append(" , ");
                    }
                }

                for (int j = 0; j <= locationList.Count(); j++)
                {
                    locationWhere.Append(string.Format(" {0}{1}{0} ", "'", locationList[j]));

                    if (j < locationList.Count())
                    {
                        locationWhere.Append(" , ");
                    }
                }
            }

            string MSP = string.Empty; bool MSP_Flag = false;
            string TicketID = string.Empty; bool TicketID_Flag = false;
            string BatchID = string.Empty; bool BatchID_Flag = false;
            string AtmID = string.Empty; bool AtmID_Flag = false;
            int filterCount=0;

            if (gridPaginationModel.Entity.filterGroups != null)
            {

                foreach (var filterGroups in gridPaginationModel.Entity.filterGroups)
                {
                    foreach (var filter in filterGroups.filters)
                    {
                        switch (filter.field)
                        {
                            case "MSP": MSP = filter.value; MSP_Flag = true; break;
                            case "TicketID": TicketID = filter.value; TicketID_Flag = true; break;
                            case "BatchID": BatchID = filter.value; BatchID_Flag = true; break;
                            case "AtmID": AtmID = filter.value; AtmID_Flag = true; break;
                        }

                        filterCount = filterCount++;
                    }
                }



            }





                stringBuilder.Append(string.Format("LIMIT 10 OFFSET {0}", gridPaginationModel.Entity.PageNum * 10));



            return null;
        } 

    }

}
