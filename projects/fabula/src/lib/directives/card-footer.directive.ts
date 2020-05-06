import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[card-footer]'
})
export class CardFooterDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;

        host.classList.add('fab-card__footer');
    }

}
