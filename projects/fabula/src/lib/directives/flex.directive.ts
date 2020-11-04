import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';

@Directive({
    selector: '[basis], [flex], [flow], [grow], [shrink], [wrap]'
})
export class FlexDirective implements AfterViewInit {
    @Input() basis: any;
    @Input() direction: string;
    @Input() flex: any;
    @Input() flow: string;
    @Input() grow: any;
    @Input() shrink: any;
    @Input() wrap: string;

    constructor(private elRef: ElementRef) { }

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const angularElement = !!host.children[0].hasAttribute('data-fab-component') || !!host.children[0].hasAttribute('data-fab-wrapper');
        const props = {
            basis: this.basis,
            direction: this.direction,
            flex: host.hasAttribute('flex') || this.flex,
            flow: this.flow,
            grow: this.grow,
            shrink: this.shrink,
            wrap: this.wrap
        };

        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props })));
    }
}
