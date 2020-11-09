import { Component, ElementRef, Input, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import CloseButtonStyles from '@fabula/core/styles/components/close-button/close-button';

@Component({
    selector: 'fab-close-button',
    templateUrl: './close-button.component.html'
})
export class CloseButtonComponent implements AfterViewInit {
    @Input() color: string;
    @Input() parentColor: string;
    @Input() size: string;

    host;

    constructor(
        public cdRef: ChangeDetectorRef,
        public elRef: ElementRef
    ) { }

    ngAfterViewInit() {
        let props;
        let styles;

        // Get host element
        this.host = this.elRef.nativeElement;

        // Set props
        props = {
            color: this.color || this.parentColor,
            size: this.size
        };

        // Set and apply styles
        styles = css(CloseButtonStyles({ framework: 'angular', props }));
        this.host.classList.add(styles);

        this.cdRef.detectChanges();
    }
}
