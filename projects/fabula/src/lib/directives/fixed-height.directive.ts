import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[fixed-height]'
})
export class FixedHeightDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const height = host.getAttribute('fixed-height');
        let div;
        let heightValue;
        let nextSibling;
        let parent;
        let src;

        host.setAttribute('data-fixed-height', true);

        if (height) {
            heightValue = +height ? `${height}px` : height;

            parent = host.parentNode;
            nextSibling = host.nextSibling;
            div = document.createElement('div');
            src = host.getAttribute('src');

            div.classList.add('fab-card__image');
            div.style.backgroundImage = `url(${src})`;
            div.style.height = heightValue;

            parent.insertBefore(div, nextSibling);
            parent.removeChild(host);
        }
    }

}
