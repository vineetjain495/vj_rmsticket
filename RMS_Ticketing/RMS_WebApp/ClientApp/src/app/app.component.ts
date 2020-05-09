///<reference path="GlobalShareCode.ts"/>
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonFunctionality } from './app.commonFunctionality';
import { DataService } from './services/DataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
})
export class AppComponent {
  position: string = "top-center";
  public name = 'Angular';
  dataPassed: any;
  subscription: Subscription;
  constructor(private ds: DataService, private commonFunctionality: CommonFunctionality) {
    this.subscription = this.ds.getToastyData().subscribe(x => {
      if (!x) {
        this.commonFunctionality.closeAllToast();
      }
      else {
        this.commonFunctionality.addToast(x);
      }
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
