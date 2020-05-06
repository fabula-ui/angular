import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[card-subtitle]'
})
export class CardSubtitleDirective implements AfterViewInit {

    constructor(public elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;

        host.classList.add('fab-card__subtitle');
        host.setAttribute('data-fab-element', 'subtitle');
    }

}
