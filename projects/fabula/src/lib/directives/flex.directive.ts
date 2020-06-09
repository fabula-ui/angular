import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { css } from 'emotion';

// Services
import { ThemeService } from '../services/theme.service';

// Styles
import UtilsStyles from '@fabula/core/theme/utils';

@Directive({
    selector: '[flex]'
})
export class FlexDirective implements AfterViewInit {
    @Input() flex: any;

    constructor(
        private elRef: ElementRef,
        private themeService: ThemeService
    ) { }

    ngAfterViewInit() {
        const element = this.elRef.nativeElement;
        const props = {
            flex: element.hasAttribute('flex'),
        };

        element.classList.add(css(UtilsStyles({ framework: 'angular', props })));
    }

}
