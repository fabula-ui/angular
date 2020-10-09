import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

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

    constructor(public elRef: ElementRef) { super(elRef); }

    ngOnInit() {
        this.styles = WrapperStyles;
        this.initStyles();
    }
}
