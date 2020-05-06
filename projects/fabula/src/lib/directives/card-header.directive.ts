import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[card-header]'
})
export class CardHeaderDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;

        host.classList.add('fab-card__header');
    }

}
