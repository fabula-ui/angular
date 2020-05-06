import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[title]'
})
export class TitleDirective implements AfterViewInit {

    constructor(public elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;

        host.setAttribute('data-fab-element', 'title');
    }

}
