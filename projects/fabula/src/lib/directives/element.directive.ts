import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[element]'
})
export class ElementDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;

        host.setAttribute('data-element', host.getAttribute('element'));
    }

}
