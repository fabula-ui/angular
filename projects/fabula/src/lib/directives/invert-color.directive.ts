import { AfterViewInit, Directive, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[invert-color]'
})
export class InvertColorDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const component = host.querySelector('[data-fab-component]');
        const wrapper = host.querySelector('[data-fab-wrapper]');

        host.setAttribute('data-invert-color', true);
        component.setAttribute('data-invert-color', true);

        if (wrapper) {
            wrapper.setAttribute('data-invert-color', true);
        }
    }

}
