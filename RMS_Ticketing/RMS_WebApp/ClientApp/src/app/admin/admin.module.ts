import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { routing } from './admin.routing';
import { SharedModule } from '../shared/shared.module';
import { AdminService } from './admin.service';

@NgModule({
    imports: [
        routing,
        SharedModule,
        CommonModule,
        FormsModule
    ],
    declarations: [AdminComponent],
    providers: [AdminService]

})
export class AdminModule {

}
