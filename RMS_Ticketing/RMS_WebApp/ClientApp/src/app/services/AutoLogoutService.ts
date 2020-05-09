import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

const MINUTES_UNITL_AUTO_LOGOUT = 1 // in mins
const CHECK_INTERVAL = 15000 // in ms
const STORE_KEY = 'lastAction';
@Injectable()
export class AutoLogoutService {

  public getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY));
  }
  public setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }

  constructor(private router: Router) {
    console.log('object created');
    this.check();
    this.initListener();
    this.initInterval();
  }

  initListener() {
    console.log('event updated');
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover', () => this.reset());
    document.body.addEventListener('mouseout', () => this.reset());
    document.body.addEventListener('keydown', () => this.reset());
    document.body.addEventListener('keyup', () => this.reset());
    document.body.addEventListener('keypress', () => this.reset());
  }

  reset() {
    console.log('reset updated');
    this.setLastAction(Date.now());
  }

  initInterval() {
    setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  check() {
    console.log('check');
    const now = Date.now();
    const timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    if (isTimeout) {
      localStorage.clear();
      this.router.navigate(['/Login']);
    }
  }
}
