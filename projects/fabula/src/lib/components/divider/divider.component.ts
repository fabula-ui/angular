import {
    Component,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

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

    constructor(
        public elRef: ElementRef,
        public fabulaService: FabulaService
    ) { super(elRef, fabulaService); }

    ngOnInit() {
        this.styles = DividerStyles;
        this.initStyles();
    }
}
