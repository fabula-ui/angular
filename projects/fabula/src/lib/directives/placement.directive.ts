import { AfterViewInit, Directive, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[placement]'
})
export class PlacementDirective implements AfterViewInit {

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const wrapper = host.querySelector('[data-fab-wrapper]');
        const placement = host.getAttribute('placement');
        const parent = host.parentNode;

        host.setAttribute('data-placement', placement);

        console.log('wrapper', wrapper);

        if (wrapper) {
            wrapper.setAttribute('data-placement', placement);
        }

        if (placement === 'start' || placement === 'left') {
            parent.prepend(host);
        } else if (placement === 'end' || placement === 'right') {
            parent.append(host);
        }
    }

}
