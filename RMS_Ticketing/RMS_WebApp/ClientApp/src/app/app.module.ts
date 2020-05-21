
  import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { FormsModule } from '@angular/forms';
  import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
  import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
  //import { HeaderTokenInterceptor } from './app.headerTokenInterceptor';
  import { AppComponent } from './app.component';
  import { SharedModule } from './shared/shared.module';
  import { MainLayoutComponent } from './mainLayout/mainLayout.component';
import { ExternalLayoutComponent } from './externalLayout/externalLayout.component';
import { ReactiveFormsModule } from '@angular/forms';
  import { appRouterModule } from "./app.routes";
  import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
  import { TitleComponent } from './shared/title/title.component';
  import { ScrollModule } from './scroll/scroll.module';
  import { LocationStrategy, PathLocationStrategy } from '@angular/common';
  import { Ng2Webstorage } from 'ngx-webstorage';
  import { CommonFunctionality } from './app.commonFunctionality';
  import { DataService } from './services/DataService'
  import { DatePipe } from '@angular/common';
  import { AuthGuard } from './shared/Security/auth.guard';
import { AuthRouteService } from './services/auth.service';

  import { CMSHttpInterceptor } from './CMSHttpInterceptor';
  import { AutoLogoutService } from './services/AutoLogoutService';
  import { AutoLogoutComponent } from './services/AutoLogoutComponent';
  import { HttpModule } from '@angular/http';
  import { BsModalService } from 'ngx-bootstrap';
  import { HeaderTokenInterceptor } from './app.headerTokenInterceptor';
  import { SidebarModule } from 'ng-sidebar';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { CommentsComponentComponent } from './ticketViewer/commentsComponent/commentsComponent.component';
import { CrudTicketCommentsModule } from './ticketViewer/commentsComponent/commentsComponent.module';
import { jqxFormComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxform';
import { PicklistComponent } from './picklist/picklist.component';
import { LinkViewRefComponent } from './shared/components/LinkViewRef.Component';
import { LinkViewComponent } from './shared/components/linkView.component';
/*import { AddEmployeeComponent } from './Employee/addEmployee/addEmployee.component';
//import { ShowemployeeComponent } from './Employee/showemployee/showemployee.component';
import { EditempComponent } from './Employee/editemp/editemp.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ToastyModule } from 'ng2-toasty';*/
//import { UpdateTicketComponent } from './Employee/updateTicket/updateTicket.component';
//import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

  @NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    providers: [
     //HeaderTokenInterceptor,
     //   {
     //     provide: HTTP_INTERCEPTORS,
     //     useClass: HeaderTokenInterceptor,
     //     multi: true
     //   },
  
      //  {provide: LocationStrategy, useClass: HashLocationStrategy},
        CMSHttpInterceptor, {
        provide: HTTP_INTERCEPTORS,
          useClass: CMSHttpInterceptor,
          multi: true
        },
      DatePipe,  
      DataService, CommonFunctionality, AuthGuard, AuthRouteService,
      AutoLogoutService],//[Configuration],
    imports: [
      BrowserModule, BrowserAnimationsModule, appRouterModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      ScrollModule,
      SharedModule,
      Ng2Webstorage,
      HttpModule,
      SidebarModule.forRoot(),
      ChatModule,
      CrudTicketCommentsModule,
     
   ],
    exports: [ScrollModule ],
    declarations: [
      AppComponent,
      MainLayoutComponent,
      ExternalLayoutComponent,
      BreadcrumbsComponent,
      TitleComponent,
      AutoLogoutComponent,
      jqxFormComponent,
      PicklistComponent,
      LinkViewRefComponent,
      LinkViewComponent,
    //  UpdateTicketComponent

    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {
  }
