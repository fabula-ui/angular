import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { css } from 'emotion';

// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';


@Directive({
    selector: '[grow]'
})
export class GrowDirective implements AfterViewInit {
    @Input() grow: any;

    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2,
    ) { }

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const angularElement = !!host.querySelector('[data-fab-component]') || !!host.querySelector('[data-fab-wrapper]');
        const props = {
            grow: this.grow
        };

        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props })));

    }

}
