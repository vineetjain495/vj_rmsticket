import { Component, OnInit, ViewEncapsulation, Sanitizer, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { Message, SendMessageEvent, User } from '@progress/kendo-angular-conversational-ui';
import { from, merge, Observable, Subject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { CommentsComponentService } from './commentsComponent.service';
import { TicketViewerServices } from '../ticketViewer.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';
import { CommonFunctionality } from 'src/app/app.commonFunctionality';
import { BaseResponseWithData } from '../../shared/model/BaseResponseModel';

@Component({
  selector: 'CommentsComponent',
  templateUrl: './CommentsComponent.component.html',
  styleUrls: ['./CommentsComponent.component.css'],
  encapsulation: ViewEncapsulation.None,
  //host: {
  //  '(document:click)': 'onClick($event)',
  //},
})

export class CommentsComponentComponent implements OnInit
{


  onClick(event) {
    
    //if (!this._eref.nativeElement.contains(event.target)) // or some similar check
    //{
    //}
  }

  @Input() commentTicketID: string;
  @Input() showClose: boolean = false;

  @Output() onClose: EventEmitter<any> = new EventEmitter();
  public feed: Observable<Message[]>;
  public commentsModel: commentsView = new commentsView();
  

  public user: User = {
    id: 1,
    name: '',
  };

  public readonly bot: User = {
    id: 0,
    name: '',
  };

  private local: Subject<Message> = new Subject<Message>();
  private EmployeeName: string;

  
  //private usersMSP: User = { id : null,name: null };
  //private messageMSP: Message = { author: null, text: null, timestamp: null };
  //private userAdmin: User = { id: null, name: null };
  //private messageAdmin: Message = { author: null, text: null, timestamp: null };

  private users: UserCustome;
  private usersArray: UserCustome[] = [];
  private messages: MessageCustome;
  private messagesArray: MessageCustome[] = [];


  
  ngOnInit():void {
    

    this.commentsServices.CallComments(this.commentTicketID).subscribe((result: any) => {
      
      let length = result.Entity.TableList.length;

      for (let i = 0; i < length; i++) {
        
        this.users = new UserCustome();
        this.messages = new MessageCustome();

        switch (result.Entity.TableList[i].CustCommentsType) {
            case 'MSP': case 'msp': case 'Msp':
            this.users.id = 0;
            this.users.name = result.Entity.TableList[i].AssignedTo;
            this.usersArray.push(this.users);
            //console.log('MSP User Pusing=>');
            //console.log(this.usersArray)
            this.messages.author = this.usersArray[i];
            this.messages.text = result.Entity.TableList[i].CustComments;
            this.messages.timestamp = new Date(result.Entity.TableList[i].CreatedDate);
            //this.messagePosting(this.messages);
            this.messagesArray.push(this.messages);
            //console.log('MSP messageArray Pusing=>');
            //console.log(this.messagesArray);
            break;
            case 'ADMIN': case 'admin': case 'Admin':
            this.users.id = 0;
            this.users.name = result.Entity.TableList[i].AssignedTo;
            this.usersArray.push(this.users);
            //console.log('MSP User Pusing=>');
            //console.log(this.usersArray)
            this.messages.author = this.usersArray[i];
            this.messages.text = result.Entity.TableList[i].CustComments;
            this.messages.timestamp = new Date(result.Entity.TableList[i].CreatedDate);
            //this.messagePosting(this.messages);
            this.messagesArray.push(this.messages);
            //console.log('MSP messageArray Pusing=>');
            //console.log(this.messagesArray);
            break;
            case 'HO': case 'ho': case 'Ho':
            this.users.id = 0;
            this.users.name = result.Entity.TableList[i].AssignedTo;
            this.usersArray.push(this.users);
            //console.log('HO User Pusing=>');
            //console.log(this.usersArray)
            this.messages.author = this.usersArray[i];
            this.messages.text = result.Entity.TableList[i].CustComments;
            this.messages.timestamp = new Date(result.Entity.TableList[i].CreatedDate);
            //this.messagePosting(this.messages);
            this.messagesArray.push(this.messages);
            //console.log('HO messageArray Pusing=>');
            //console.log(this.messagesArray);
            break;
          default:
            this.users.id = 0;
            this.users.name = result.Entity.TableList[i].AssignedTo;
            this.usersArray.push(this.users);
            //console.log('HO User Pusing=>');
            //console.log(this.usersArray)
            this.messages.author = this.usersArray[i];
            this.messages.text = result.Entity.TableList[i].CustComments;
            this.messages.timestamp = new Date(result.Entity.TableList[i].CreatedDate);
            //this.messagePosting(this.messages);
            this.messagesArray.push(this.messages);
            //console.log('HO messageArray Pusing=>');
            //console.log(this.messagesArray);
            break;
         }
      }

      //console.log(this.messageArray);

      this.feed = merge(
        from(this.messagesArray),
        this.local,
      ).pipe(
        // ... and emit an array of all messages
        scan((acc: Message[], x: Message) => [...acc, x], [])
      );

    })
}


  messagePosting(messages: Message) {
    
    //this.feed = merge(
    //  from([messages]),
    //  this.local,
    //).pipe(
    //  // ... and emit an array of all messages
    //  scan((acc: Message[], x: Message) => [...acc, x], [])
    //);

  }

  //sendMessage() {
  //  this.services.converse(this.formValue);
  //  this.formValue = '';
  //}

 

  constructor(private _eref: ElementRef, private services: CommentsComponentService, private commentsServices: TicketViewerServices, private sanitize: DomSanitizer, private cf: CommonFunctionality )
  {

    this.cf.GetUserDetails().subscribe((data: BaseResponseWithData<any>) => {
      if (data.Success) {
        this.EmployeeName = data.Entity.EmpFullName;
      }
    });


    //const hello: Message = {
    //  author: this.bot,
    //  text: 'Hello, this is a demo bot.I dont do much, but I can count symbols!',
    //  timestamp: new Date(),
    //};


    //this.feed = merge(
    //  this.local,
    //).pipe(
    //  // ... and emit an array of all messages
    //  scan((acc: Message[], x: Message) => [...acc, x], [])
    //);

  }


  sendMessage(e: SendMessageEvent): void {
    
    this.user.id = 0;
    this.user.name = this.EmployeeName
    this.local.next(e.message);

    this.commentsModel.TicketID = this.commentTicketID;
    this.commentsModel.CustComments = e.message.text;

    this.services.CallUpdateComments(this.commentsModel).subscribe();


  }





  onCloseClickEvent():void {
    this.onClose.emit();
  }
}





export class MessageCustome {

  public author: User;
  
  public status?: string;
  
  public text?: string;
  
  public timestamp?: Date;
  
  public typing?: boolean;
}


export class UserCustome {
  id: any;
  name?: string;
  avatarUrl?: string;
}


export class AddCommentsModel{
  public Id: number
  public TicketId: string
  public Comments: string
}

export class commentsView {
  public ID: number
  public TicketID: string
  public CustCommentsType: string
  public CustComments: string
  public AssignedTo: string
  public CreatedDate: string
  public CreatedBy: string
}

