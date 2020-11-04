import {
    Component,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import DividerStyles from '@fabula/core/styles/components/divider/divider';

@Component({
    selector: 'fab-divider',
    styleUrls: ['./divider.component.scss'],
    templateUrl: './divider.component.html',
})
export class DividerComponent extends CommonComponent implements OnInit {
    @Input() label: string;
    @Input() textColor: string;

    constructor(public elRef: ElementRef) { super(elRef); }

    ngOnInit() {
        this.styles = DividerStyles;
        this.initStyles();
    }
}
