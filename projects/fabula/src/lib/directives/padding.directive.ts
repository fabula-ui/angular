import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import UtilsStyles from '@fabula/core/theme/utils';

@Directive({
    selector: '[p],[pb],[pl],[pr],[pt],[px],[py]'
})
export class PaddingDirective implements AfterViewInit {
    @Input() p: any;
    @Input() pb: any;
    @Input() pl: any;
    @Input() pr: any;
    @Input() pt: any;
    @Input() px: any;
    @Input() py: any;

    constructor(private elRef: ElementRef) { }

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const angularElement = !!host.children[0].hasAttribute('data-fab-component') || !!host.children[0].hasAttribute('data-fab-wrapper');
        const props = {
            p: this.p,
            pb: this.pb,
            pl: this.pl,
            pr: this.pr,
            pt: this.pt,
            px: this.px,
            py: this.py
        };

        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props })));
    }

}
