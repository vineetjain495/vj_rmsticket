import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[myNumberOnly]'
})
export class NumberOnlyDirective {
    // Allow decimal numbers and negative values
    private regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
    // Allow key codes for special events. Reflect :
    // Backspace, tab, end, home
    private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-', 'Control'];

    constructor(private el: ElementRef) {
    }
    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {
        console.log(event.key);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        if (event.ctrlKey && event.key === 'v') {
            return;
        }
        else {
            let current: string = this.el.nativeElement.value;
            let next: string = current.concat(event.key);
            if (next && !String(next).match(this.regex)) {
                event.preventDefault();
            }
        }
    }

    @HostListener('paste', ['$event'])
    onPaste(event: any) {
        let content = event.clipboardData.getData('text/plain');
        if (isNaN(content)) {
            event.preventDefault();
        }
        console.log(content);
        
    }
}