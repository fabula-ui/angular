import {
    AfterViewInit,
    Component,
    ElementRef,
    Input
} from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import DropdownHeaderStyles from '@fabula/core/styles/components/dropdown-header/dropdown-header';

@Component({
    selector: 'fab-dropdown-header',
    templateUrl: './dropdown-header.component.html',
})
export class DropdownHeaderComponent extends CommonComponent implements AfterViewInit {
    @Input() label: string;
    @Input() textColor: string;

    constructor(
        public elRef: ElementRef,
        public fabulaService: FabulaService
    ) { super(elRef, fabulaService); }

    ngAfterViewInit() {
        this.styles = DropdownHeaderStyles;
        this.initStyles();
    }
}
