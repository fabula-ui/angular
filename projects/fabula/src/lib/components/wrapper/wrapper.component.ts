import { Component, ElementRef, OnInit } from '@angular/core';

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
    constructor(public elRef: ElementRef) {
        super(elRef);
        this.styles = WrapperStyles;
    }

    ngOnInit() {
        this.initStyles();
    }

}
