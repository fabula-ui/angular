import { Component, OnInit, ElementRef, Input } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import LinkStyles from '@fabula/core/styles/components/link/link';

@Component({
    selector: 'fab-link',
    styleUrls: ['./link.component.scss'],
    templateUrl: './link.component.html'
})
export class LinkComponent extends CommonComponent implements OnInit {
    @Input() color: string;
    @Input() href: string;
    @Input() label: string;
    @Input() props: any;
    @Input() rel: string;
    @Input() size: string;
    @Input() target = '_blank';
    @Input() underline = true;

    constructor(
        public elRef: ElementRef,
        public fabulaService: FabulaService
    ) { super(elRef, fabulaService); }

    ngOnInit() {
        this.styles = LinkStyles;
        this.initStyles();
    }
}
