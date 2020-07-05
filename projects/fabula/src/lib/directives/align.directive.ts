import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Services
import { ThemeService } from '../services/theme.service';

// Styles
import UtilsStyles from '@fabula/core/theme/utils';

@Directive({
    selector: '[align],[alH],[alV],[alignH],[alignV]'
})
export class AlignDirective implements AfterViewInit {
    @Input('al') al: any;
    @Input('alH') alH: any;
    @Input('alV') alV: any;
    @Input() align: any;
    @Input('alignH') alignH: any;
    @Input('alignV') alignV: any;

    constructor(
        private elRef: ElementRef,
        private themeService: ThemeService
    ) { }

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const props = {
            al: this.al,
            alH: this.alH,
            alV: this.alV,
            align: this.align,
            alignH: this.alignH,
            alignV: this.alignV
        };
        const angularElement = !!host.querySelector('[data-fab-component]') || !!host.querySelector('[data-fab-wrapper]');

        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props })));
    }

}
