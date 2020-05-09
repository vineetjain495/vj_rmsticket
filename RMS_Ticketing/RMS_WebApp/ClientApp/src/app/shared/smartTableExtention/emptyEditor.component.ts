import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Cell, DefaultEditor, Editor } from 'ng2-smart-table';

@Component({
    template: ``,
})
export class EmptyEditorComponent extends DefaultEditor implements AfterViewInit {

    @ViewChild('name') name: ElementRef;
    @ViewChild('url') url: ElementRef;
    @ViewChild('htmlValue') htmlValue: ElementRef;

    constructor() {
        super();
    }

    ngAfterViewInit() {
        //if (this.cell.newValue !== '') {
        //    this.name.nativeElement.value = this.getUrlName();
        //    this.url.nativeElement.value = this.getUrlHref();
        //}
    }

    //updateValue() {
    //    const href = this.url.nativeElement.value;
    //    const name = this.name.nativeElement.value;
    //    this.cell.newValue = `<a href='${href}'>${name}</a>`;
    //}

    //getUrlName(): string {
    //    return this.htmlValue.nativeElement.innerText;
    //}

    //getUrlHref(): string {
    //    return this.htmlValue.nativeElement.querySelector('a').getAttribute('href');
    //}
}