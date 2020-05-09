
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


export class TransactionModel {


    constructor() {
        this.ServerMaster = new ServerMaster();
    }

    public TransactionID: number;
    public ATMID: string;
    public LockID: string;
    public ServerID: number;
    public FirstCustodianName: string;
    public FirstCustodianEmpCode: string;
    public Pin: string;
    public TouchKey: string;
    public Command: string;
    public StartDatePicker: Date;
    public StartDate: string;
    public StartTime: string;
    public StartTimePicker: Date;
    public TimeBlock: string;
    public LockStatus: string;
    public LockMode: string;
    public SecondCustodianName: string;
    public SecondCustodianEmpCode: string;
    public CallCenterPersonName: string;
    public CallCenterPersonEmpCode: string;
    public Purpose: string;
    public Remarks: string;
    public DispatcherPersonName: string;
    public DispatcherEmpCode: string;
    public OperationCode: string;
    public Attachment: File;
    public StartDateRange: Array<string>;
    public TransactionEntryDateRange: Array<string>;
    public ServerMaster: ServerMaster;
}


export class ServerMaster {
    public ServerName: string;
}

export class Commands {
    public Command: string;
}