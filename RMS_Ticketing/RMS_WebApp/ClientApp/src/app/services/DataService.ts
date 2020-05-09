//reference https://stackblitz.com/edit/passing-data-between-components-in-router-outlet-to-outside?file=app%2Fdata.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
    private subject = new Subject<any>();

    ShowHideToasty(message?: any) {
        this.subject.next(message);
    }

    //clearData() {
    //    this.subject.next();
    //}

    getToastyData(): Observable<any> {
        return this.subject.asObservable();
    }
}
