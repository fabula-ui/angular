import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[disabled]'
})
export class DisabledDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const element = host.querySelector('[data-fab-component]');

        if (element) {
            element.setAttribute('disabled', '');
        }
    }

}
