import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[size]'
})
export class SizeDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;

        host.setAttribute('data-size', host.getAttribute('size'));
    }

}
