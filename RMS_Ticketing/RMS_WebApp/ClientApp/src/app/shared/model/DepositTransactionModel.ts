
export class PagingRequestModel<T> {
    /// <summary>
    /// Page number info
    /// </summary>
    public PageNumber: number;
    /// <summary>
    /// Page size info
    /// </summary>
    public PageSize: number;
    /// <summary>
    /// Search Parameter using Modal Object
    /// </summary>
    public SearchEntity: T;
}


export class DepositTransactionModel {


    constructor() {
       
    }

    public ID: number;
    public LoadingDate: Date;
    public AreaOffice: string;
    public Location: number;
    public HubLocation: string;
    public SubLocation: string;
    public MSP: string;
    public Bank: string;
    public ATMID: string;
    public ATMReturns10: number;
    public ATMReturns20: number;
    public ATMReturns50: number;
    public ATMReturns100: number;
    public ATMReturns200: number;
    public ATMReturns500: number;
    public ATMReturns1000: number;
    public ATMReturns2000: number;
    public ATMReturnsTotal: number;
    public EntryDate: Date;
    public Attachment: File;
    public Status: string;
    public Remark: string;
  public ATMType: string;
  public ReferrenceID: string
     
}

export class UploadModel
{
    public upload: File;

}



