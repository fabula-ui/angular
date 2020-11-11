import { Component, ElementRef, Input, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { css } from 'emotion';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import CloseButtonStyles from '@fabula/core/styles/components/close-button/close-button';

@Component({
    selector: 'fab-close-button',
    templateUrl: './close-button.component.html'
})
export class CloseButtonComponent extends CommonComponent implements AfterViewInit {
    @Input() color: string;
    @Input() parentColor: string;
    @Input() size: string;

    constructor(
        public cdRef: ChangeDetectorRef,
        public elRef: ElementRef
    ) {
        super(elRef);
    }

    ngAfterViewInit() {
        // Set and apply styles
        this.styles = CloseButtonStyles;
        this.initStyles();

        // Detect changes
        this.cdRef.detectChanges();
    }
}
