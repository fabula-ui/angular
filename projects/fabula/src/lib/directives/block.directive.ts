import { AfterViewInit, Directive, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[block]'
})
export class BlockDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const component = host.querySelector('[data-fab-component]');
        const wrapper = host.querySelector('[data-fab-wrapper]');

        host.setAttribute('data-block', true);
        component.setAttribute('data-block', true);

        if (wrapper) {
            wrapper.setAttribute('data-block', true);
        }
    }

}
