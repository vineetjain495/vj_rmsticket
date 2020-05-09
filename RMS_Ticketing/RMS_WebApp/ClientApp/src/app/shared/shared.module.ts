import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion/index';
import { CardRefreshDirective } from './card/card-refresh.directive';
import { CardToggleDirective } from './card/card-toggle.directive';
import { CardComponent } from '../shared/card/card.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParentRemoveDirective } from './elements/parent-remove.directive';
import { PaginationModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../spinner/spinner.component';

import { ClickOutsideModule } from 'ng-click-outside';

import { ToastyModule } from 'ng2-toasty';

import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { CountdownPipe } from './pipes/CountdownPipe';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    PaginationModule.forRoot(),
    ToastyModule.forRoot(),
    ClickOutsideModule,
    AngularMultiSelectModule    
   
  ],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardRefreshDirective,
    CardToggleDirective,
    ParentRemoveDirective,
    CardComponent,
    SpinnerComponent,
    CountdownPipe,
    jqxGridComponent,

    

  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardRefreshDirective,
    CardToggleDirective,
    ParentRemoveDirective,
    CardComponent,
    SpinnerComponent,
    CountdownPipe,
    NgbModule,
    PaginationModule,
    ToastyModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule,
    AngularMultiSelectModule,
    jqxGridComponent,
    
    
  ],
  providers: [
    MenuItems,
    
  ]
})
export class SharedModule { }
