import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { css } from 'emotion';

// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';

@Directive({
    selector: 'commonDirective'
})
export class CommonDirective implements AfterViewInit {
    constructor(public elRef: ElementRef) { }

    ngAfterViewInit() {
        const element = this.elRef.nativeElement;
        element.classList.add(css(UtilsStyles({ framework: 'angular', props: this })));
    }
}
