import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import WrapperStyles from '@fabula/core/styles/components/wrapper/wrapper';

@Component({
    selector: 'fab-wrapper',
    styleUrls: ['./wrapper.component.scss'],
    templateUrl: './wrapper.component.html'
})
export class WrapperComponent extends CommonComponent implements OnInit {
    @Input() bgColor: string;
    @Input() color: string;

    constructor(
        public elRef: ElementRef,
        public fabulaService: FabulaService
    ) { super(elRef, fabulaService); }

    ngOnInit() {
        this.styles = WrapperStyles;
        this.initStyles();
    }
}
