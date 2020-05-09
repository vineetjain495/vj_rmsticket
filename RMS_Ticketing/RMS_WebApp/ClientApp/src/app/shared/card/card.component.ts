import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { cardToggle, cardClose } from './card-animation';

@Component({
    selector: 'app-card',
    templateUrl: './card.template.html',
    styleUrls: ['./card.component.css'],
    animations: [cardToggle, cardClose],
    encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {
    @Input() headerContent: string;
    @Input() title: string;
    @Input() blockClass: string;
    @Input() cardClass: string;
    @Input() classHeader = false;
    @Input() showRightSection: boolean = true;
    @Input() showClose: boolean = false;
    @Input() showRefresh: boolean = false;
    @Input() showBack: boolean = false;
    @Input() cardToggle: string = 'expanded';
    @Input() showExternalUpload: boolean=false

    @Input() showDownload: boolean = false;
    
    @Output() onDownload: EventEmitter<any> = new EventEmitter();
    @Output() onUpload: EventEmitter<any> = new EventEmitter();
    @Output() onRefresh: EventEmitter<any> = new EventEmitter();
    @Output() onBack: EventEmitter<any> = new EventEmitter();
    @Output() onExternalUpload: EventEmitter<any> = new EventEmitter();  

    private _showUpload: boolean = false;

    @Input() set showUpload(value: boolean) {
        this._showUpload = value;
    }

    get showUpload(): boolean {
        return this._showUpload;
    }
    
    cardClose = 'open';
    constructor() {
    }




    ngOnInit() {
        //console.log(this.showUpload);
    }

    onRefreshClickEvent(): void {
        this.onRefresh.emit();
    };

    onBackClickEvent(): void {
    this.onBack.emit();
    };

    onDownloadClickEvent(): void {
        this.onDownload.emit();
    };

    onUploadClickEvent(): void {
        this.onUpload.emit();
    };

    externalUploadClickEvent(): void {
      this.onExternalUpload.emit();
    };
    
    toggleCard(): void {
      this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
    }

  closeCard() {
    this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
    }
}
