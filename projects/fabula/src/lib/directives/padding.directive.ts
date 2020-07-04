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

    constructor(
        private elRef: ElementRef,
    ) { }

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const props = {
            p: this.p,
            pb: this.pb,
            pl: this.pl,
            pr: this.pr,
            pt: this.pt,
            px: this.px,
            py: this.py
        };

        console.log('padding');

        host.classList.add(css(UtilsStyles({ framework: 'angular', props })));
    }

}
