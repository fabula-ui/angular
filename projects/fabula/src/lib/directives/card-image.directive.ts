import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[card-image]'
})
export class CardImageDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const float = host.getAttribute('float');
        let parent = host.parentNode;
        let div;
        let src;

        if (float) {
            parent = host.parentNode;
            div = document.createElement('div');
            src = host.getAttribute('src');

            div.classList.add('fab-card__image');
            div.setAttribute('data-float', float);
            div.style.backgroundImage = `url(${src})`;

            parent.removeChild(host);

            parent.prepend(div);
        } else {
            host.classList.add('fab-card__image');
        }
    }

}
