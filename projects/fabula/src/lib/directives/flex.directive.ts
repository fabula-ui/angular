import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { css } from 'emotion';

// Services
import { ThemeService } from '../services/theme.service';

// Styles
import UtilsStyles from '@fabula/core/theme/utils';

@Directive({
    selector: '[alItems], [flex], [flow], [justContent]'
})
export class FlexDirective implements AfterViewInit {
    @Input() alItems: string;
    @Input() flex: any;
    @Input() flow: string;
    @Input() justContent: string;

    constructor(
        private elRef: ElementRef
    ) { }

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const angularElement = !!host.querySelector('[data-fab-component]') || !!host.querySelector('[data-fab-wrapper]');
        const props = {
            alItems: this.alItems,
            flex: host.hasAttribute('flex'),
            flow: this.flow,
            justContent: this.justContent
        };

        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props })));
    }
}
