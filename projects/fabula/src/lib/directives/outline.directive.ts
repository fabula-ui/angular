import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[outline]'
})
export class OutlineDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const component = host.querySelector('[data-fab-component]');
        const wrapper = host.querySelector('[data-fab-wrapper]');

        host.setAttribute('data-outline', true);
        component.setAttribute('data-outline', true);

        if (wrapper) {
            wrapper.setAttribute('data-outline', true);
        }
    }

}
