import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlimScroll } from '../shared/directives/slimscroll.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SlimScroll],
  exports: [SlimScroll]
})
export class ScrollModule { }
