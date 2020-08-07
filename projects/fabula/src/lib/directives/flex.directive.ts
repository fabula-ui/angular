import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';

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
        const angularElement = !!host.children[0].hasAttribute('data-fab-component') || !!host.children[0].hasAttribute('data-fab-wrapper');
        const props = {
            alItems: this.alItems,
            flex: host.hasAttribute('flex'),
            flow: this.flow,
            justContent: this.justContent
        };

        host.classList.add(css(UtilsStyles({ angularElement, framework: 'angular', props })));
    }
}
