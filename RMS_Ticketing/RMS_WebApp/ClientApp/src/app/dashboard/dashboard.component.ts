///<reference path="../GlobalShareCode.ts"/>
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.template.html',
})
export class DashboardComponent implements OnInit {
    name = 'Dashboard';

  constructor() { }//(private _dataService: DashboardService) { }

    ngOnInit() {
        //this.name = this._dataService.GetDashboardData('From Dashboard');
      
    }
}
