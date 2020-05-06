import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[subtitle]'
})
export class SubtitleDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;

        host.setAttribute('data-fab-element', 'subtitle');
    }

}
