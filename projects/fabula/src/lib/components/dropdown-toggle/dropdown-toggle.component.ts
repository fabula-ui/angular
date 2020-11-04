import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';

// Components
import { ButtonComponent } from '../button/button.component';

// Styles
import DropdownToggleStyles from '@fabula/core/styles/components/dropdown-toggle/dropdown-toggle';

@Component({
    selector: 'fab-dropdown-toggle',
    templateUrl: './dropdown-toggle.component.html',
})
export class DropdownToggleComponent extends ButtonComponent implements OnInit {
    @Input() direction: string;
    @Input() icon: string;
    @Input() label: string;
    @Input() isOpen = false;

    @Output() toggle: EventEmitter<any> = new EventEmitter();

    constructor(public elRef: ElementRef) { super(elRef) }

    ngOnInit() {
        // Set props
        this.props = {
            ...this,
        };
        this.styles = DropdownToggleStyles;
        this.initStyles();
    }

    handleClick() {
        this.toggle.emit(true);
    }
}
