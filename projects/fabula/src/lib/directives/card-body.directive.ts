import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[card-body]'
})
export class CardBodyDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const avatar = host.querySelector('fab-avatar');
        const elements = host.querySelectorAll(':not(fab-avatar)');

        host.classList.add('fab-card__body');

        if (avatar) {
            host.setAttribute('data-has-avatar', true);
            host.setAttribute('data-avatar-size', avatar.getAttribute('size'));
        }
    }

}
