import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

// Services
import { ThemeService } from '../services/theme.service';

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
        private themeService: ThemeService
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

        // this.themeService.attachUtils(host, 'padding', props);
    }

}
