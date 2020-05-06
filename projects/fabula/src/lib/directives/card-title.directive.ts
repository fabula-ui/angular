import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[card-title]'
})
export class CardTitleDirective implements AfterViewInit {

    constructor(public elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;

        host.classList.add('fab-card__title');
        host.setAttribute('data-fab-element', 'title');
    }

}
