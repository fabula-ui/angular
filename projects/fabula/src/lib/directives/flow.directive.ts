import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Services
import { ThemeService } from '../services/theme.service';

// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';

@Directive({
    selector: '[flow]'
})
export class FlowDirective implements AfterViewInit {
    @Input() flow: any;

    constructor(
        private elRef: ElementRef
    ) { }

    ngAfterViewInit() {
        const element = this.elRef.nativeElement;
        const props = {
            flow: this.flow,
        };

        element.classList.add(css(UtilsStyles({ framework: 'angular', props })));
    }
}
