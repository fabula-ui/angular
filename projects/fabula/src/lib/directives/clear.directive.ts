import { AfterViewInit, Directive, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[clear]'
})
export class ClearDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const component = host.querySelector('[data-fab-component]');
        const wrapper = host.querySelector('[data-fab-wrapper]');

        host.setAttribute('data-clear', true);
        component.setAttribute('data-clear', true);

        if (wrapper) {
            wrapper.setAttribute('data-clear', true);
        }
    }

}
