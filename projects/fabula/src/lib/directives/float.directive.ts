import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[float]'
})
export class FloatDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;

        host.setAttribute('data-float', host.getAttribute('float'));
    }

}
