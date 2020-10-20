import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
import { css } from 'emotion';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import InnerIconStyles from '@fabula/core/styles/components/inner-icon/inner-icon';

@Component({
    selector: 'fab-inner-icon',
    templateUrl: './inner-icon.component.html'
})
export class InnerIconComponent extends CommonComponent implements AfterViewInit {
    @Input() color: string;
    @Input() icon: any;
    @Input() parentProps: any;

    constructor(public elRef: ElementRef) { super(elRef); }

    ngAfterViewInit() {
        this.additionalProps = {
            icon: this.icon,
            parentProps: this.parentProps
        };
        this.styles = InnerIconStyles;
        this.initStyles();
    }
}
