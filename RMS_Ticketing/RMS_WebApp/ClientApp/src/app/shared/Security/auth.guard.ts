import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthRouteService } from "../../services/auth.service";
@Injectable()
export class AuthGuard implements CanActivate {
 
    public isLoggedIn: boolean = false;
    public redirectURl: string;
    constructor(private authservice: AuthRouteService,private Router:Router) {}
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        this.redirectURl = state.url;
        return this.CheckLogin(this.redirectURl)
      
    }

  CheckLogin(url: string): boolean {
   
    if (localStorage.getItem('access_token')) {
      return true;
    }
    this.Router.navigate(['login']);
    return false;

    //return true;

    //if (this.isLoggedIn)
    //{
    //  this.authservice.isLoggedIn().subscribe(
    //    res => {

    //      if (res.Entity != null) {
    //        this.Router.navigateByUrl(url);
    //        this.isLoggedIn = true;
    //        //  this._commonFunctionality.SessionTime();
    //      }
    //      else {
    //        this.Router.navigateByUrl('/Login');
    //        this.isLoggedIn = false;
    //      }
    //    },
    //    err => {
    //      this.isLoggedIn = false;
    //      this.authservice.redirectUrl = url;
    //      this.Router.navigateByUrl('/Login');
    //      return false;
    //      //  this.Router.navigateByUrl(url);
    //    }
    //  )
    //  return true;
    //}
    //else
    //{

    //  this.authservice.isLoggedIn().subscribe(
    //    res => {

    //      if (res.Success) {
    //        this.Router.navigateByUrl(url);
    //        this.isLoggedIn = true;
           
    //      }
    //      else {
    //        this.Router.navigateByUrl('/Login');
    //        this.isLoggedIn = false;
    //      }
    //    },
    //    err => {
    //      this.isLoggedIn = false;
    //      this.authservice.redirectUrl = url;
    //      this.Router.navigateByUrl('/Login');
    //      return false;
    //      //  this.Router.navigateByUrl(url);
    //    }
    //  )
    //};
  }
}
