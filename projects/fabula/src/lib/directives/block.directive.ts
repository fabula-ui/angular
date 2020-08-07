import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { css } from 'emotion';

// Styles
import UtilsStyles from '@fabula/core/styles/utils/utils';

@Directive({
    selector: '[block]'
})
export class BlockDirective implements AfterViewInit {
    @Input() block: any;

    constructor(
        private elRef: ElementRef
    ) { }

    ngAfterViewInit() {
        const element = this.elRef.nativeElement;
        const props = {
            block: element.hasAttribute('block')
        };

        element.classList.add(css(UtilsStyles({ framework: 'angular', props })));
    }
}
