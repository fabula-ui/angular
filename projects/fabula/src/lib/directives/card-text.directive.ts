import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[card-text]'
})
export class CardTextDirective implements AfterViewInit {

    constructor(public elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;

        host.classList.add('fab-card__text');
        host.setAttribute('data-fab-element', 'text');
    }

}
