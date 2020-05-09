///<reference path="../GlobalShareCode.ts"/>
import { Component, OnInit } from '@angular/core';
import { AutoLogoutService } from './AutoLogoutService';
@Component({
  selector: 'app-auto-logout',
  template: `<expire></expire>`,
  providers: [AutoLogoutService]
})
export class AutoLogoutComponent implements OnInit {

  constructor(private autoLogoutService: AutoLogoutService) { }

  ngOnInit() {
    console.log('lastAction updated');
    localStorage.setItem('lastAction', Date.now().toString());
  }

}
