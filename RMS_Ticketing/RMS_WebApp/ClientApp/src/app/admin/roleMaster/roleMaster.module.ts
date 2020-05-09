import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RoleMasterComponent } from './roleMaster.component';
import { routing } from './roleMaster.routing';
import { SharedModule } from '../../shared/shared.module';
import { DatePipe } from '@angular/common';
import { EmptyEditorComponent } from '../../shared/smartTableExtention/emptyEditor.component';

@NgModule({
    providers: [DatePipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    imports: [
        routing, Ng2SmartTableModule,
        SharedModule,
        CommonModule,
        FormsModule
    ],
    declarations: [RoleMasterComponent, EmptyEditorComponent],
    entryComponents: [EmptyEditorComponent]

})
export class RoleMasterModule {



}
