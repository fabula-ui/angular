import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

import { css } from 'emotion';

// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';

@Directive({
    selector: '[expand], [height], [width]'
})
export class SizeDirective implements AfterViewInit {
    @Input() expand: boolean;
    @Input() height: any;
    @Input() width: any;

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const angularElement = !!host.children[0].hasAttribute('data-fab-component') || !!host.children[0].hasAttribute('data-fab-wrapper');

        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props: this })));
    }

}
