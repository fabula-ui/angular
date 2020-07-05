import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { css } from 'emotion';

// Services
import { ThemeService } from '../services/theme.service';

// Styles
import UtilsStyles from '@fabula/core/theme/utils';


@Directive({
    selector: '[grow]'
})
export class GrowDirective implements AfterViewInit {
    @Input() grow: any;

    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2,
        private themeService: ThemeService
    ) { }

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const angularElement = !!host.querySelector('[data-fab-component]') || !!host.querySelector('[data-fab-wrapper]');
        const props = {
            grow: this.grow
        };

        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props })));

    }

}
