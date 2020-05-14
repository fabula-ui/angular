import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

// Services
import { ThemeService } from '../services/theme.service';

@Directive({
    selector: '[m],[mb],[ml],[mr],[mt],[mx],[my]'
})
export class MarginDirective implements AfterViewInit {
    @Input() m: any;
    @Input() mb: any;
    @Input() ml: any;
    @Input() mr: any;
    @Input() mt: any;
    @Input() mx: any;
    @Input() my: any;

    constructor(
        private elRef: ElementRef,
        private themeService: ThemeService
    ) { }

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const props = {
            m: this.m,
            mb: this.mb,
            ml: this.ml,
            mr: this.mr,
            mt: this.mt,
            mx: this.mx,
            my: this.my
        };

        this.themeService.attachUtils(host, 'margin', props);
        // host.setAttribute('data-float', host.getAttribute('float'));
    }

}
