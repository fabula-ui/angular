import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

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

    constructor(
        public elRef: ElementRef,
        public fabulaService: FabulaService
    ) { super(elRef, fabulaService); }

    ngAfterViewInit() {
        this.additionalProps = {
            icon: this.icon,
            parentProps: this.parentProps
        };
        this.styles = InnerIconStyles;
        this.initStyles();
    }
}
