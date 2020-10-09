import { Component, OnInit, ElementRef, Input } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import LinkStyles from '@fabula/core/styles/components/link/link';

@Component({
    selector: 'fab-link',
    styleUrls: ['./link.component.scss'],
    templateUrl: './link.component.html'
})
export class LinkComponent extends CommonComponent implements OnInit {
    @Input() color: string;
    @Input() label: string;
    @Input() props: any;
    @Input() size = 'md';
    @Input() target = '_blank';
    @Input() underline = true;
    @Input() url: string;

    constructor(public elRef: ElementRef) { super(elRef) }

    ngOnInit() {
        this.styles = LinkStyles;
        this.initStyles();
    }
}
