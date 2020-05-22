import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit } from '@angular/core';
import 'rxjs/add/operator/filter';
import { state, style, transition, animate, trigger, AUTO_STYLE } from '@angular/animations';
import { MenuItems } from '../shared/menu-items/menu-items';
import { CommonFunctionality } from '../app.commonFunctionality';
import { BaseResponseWithData } from '../shared/model/BaseResponseModel';
import { Router } from '@angular/router';
import { DataService } from '../services/DataService';
import { SessionStorageService } from 'ngx-webstorage';

export interface Options {
  heading?: string;
  removeFooter?: boolean;
  mapHeader?: boolean;
}

@Component({
  selector: 'app-layout',
  templateUrl: './mainLayout.template.html',
  styleUrls: ['./mainLayout.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('mobileMenuTop', [
      state('no-block, void',
        style({
          overflow: 'hidden',
          height: '0px',
        })
      ),
      state('yes-block',
        style({
          height: AUTO_STYLE,
        })
      ),
      transition('no-block <=> yes-block', [
        animate('400ms ease-in-out')
      ])
    ])
  ]
})

export class MainLayoutComponent implements OnInit {
  deviceType = 'desktop';
  verticalNavType = 'expanded';
  verticalEffect = 'shrink';
  innerHeight: string;
  isCollapsedMobile = 'no-block';
  isCollapsedSideBar = 'no-block';
  toggleOn = true;
  windowWidth: number;
  loginEmpRoleID: number;
  empFullName: string;

  constructor(public menuItems: MenuItems, private cf: CommonFunctionality,
    private router: Router, private ds: DataService, private sessionStorageService: SessionStorageService) {
    
    const scrollHeight = window.screen.height - 150;
    this.innerHeight = scrollHeight + 'px';
    this.windowWidth = window.innerWidth;
    this.setMenuAttributs(this.windowWidth);
    var userDetails = JSON.parse(this.sessionStorageService.retrieve('userdetails'));


    //var menu = {
    //  label: '',
    //  main: [
    //    {
    //      state: 'Dashboard',
    //      name: 'Dashboard',
    //      type: 'link',
    //      icon: 'ti-dashboard'
    //    },
    //    {
    //      state: 'TicketViewer',
    //      name: 'Ticket Viewer',
    //      type: 'link',
    //      icon: 'ti-view-grid'
    //    },
    //  ],
    //};

    //this.menuItems.clearAll();
    //this.menuItems.add(menu);


    cf.GetUserDetails().subscribe((data: BaseResponseWithData<any>) => {
      
      if (data.Success) {
        
        //alert(data.Entity.AssignedRoleID);
        //console.log(data.Entity.AssignedRoleID);
        this.loginEmpRoleID = data.Entity.AssignedRoleID;
        this.empFullName = data.Entity.EmpFullName + ' (' + data.Entity.UserType + ')';


        var menu = {
          label: '',
          main: [
            //{
            //  state: 'Dashboard',
            //  name: 'Dashboard',
            //  type: 'link',
            //  icon: 'ti-dashboard'
            //},
            {
              state: 'TicketViewer',
              name: 'Ticket Viewer',
              type: 'link',
              icon: 'ti-view-grid'
            },
            {
               state: 'Employee',
               name: 'Employee Master',
               type: 'sub',
              icon: 'ti-view-grid',
                children: [
                    {
                    state: '',
                    name: 'Employee',
                    type: 'link',
                    icon: 'ti-view-grid'
                    },
                    {
                        state: 'UpdateTicket',
                        name: 'Assign Ticket',
                      type: 'link',
                      icon: 'ti-view-grid'

                    }
                ]
            }
            /*{
              state: 'Employee',
              name: 'Employee',
              type: 'link',
              icon: 'ti-view-grid'
            }*/
          ],
        };

        this.menuItems.clearAll();
        this.menuItems.add(menu);
      }
      else {
        this.ds.ShowHideToasty({
          title: 'Session Expired',
          msg: data.Message,
          showClose: true,
          theme: 'bootstrap',
          type: 'error',
          closeOther: true,
          timeout: 5000
        });
        this.router.navigateByUrl('/Login');
      }
    });
  }

  ngOnInit() {
  }

  onClickedOutside(e: Event) {
    
    //if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
    //    this.toggleOn = true;
    //    this.verticalNavType = 'offcanvas';
    //}
    
      //this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
    

  }

  onResize(event) {
    this.innerHeight = event.target.innerHeight + 'px';
    /*   responsive */
    this.windowWidth = event.target.innerWidth;
    let reSizeFlag = true;
    if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
      reSizeFlag = false;
    } else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
      reSizeFlag = false;
    }

    if (reSizeFlag) {
      this.setMenuAttributs(this.windowWidth);
    }
  }

  setMenuAttributs(windowWidth) {
    if (windowWidth >= 768 && windowWidth <= 1024) {
      this.deviceType = 'tablet';
      this.verticalNavType = 'collapsed';
      this.verticalEffect = 'push';
    } else if (windowWidth < 768) {
      this.deviceType = 'mobile';
      this.verticalNavType = 'offcanvas';
      this.verticalEffect = 'overlay';
    } else {
      this.deviceType = 'desktop';
      this.verticalNavType = 'expanded';
      this.verticalEffect = 'shrink';
    }
  }

  toggleOpened() {
    
    if (this.windowWidth < 768) {
      this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
      this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    } else {
      this.verticalNavType = this.verticalNavType === 'expanded' ? 'collapsed' : 'expanded';
    }
  }

  toggleOpenedSidebar() {
    
    this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
  }

  onMobileMenu() {
    
    this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
  }
}
