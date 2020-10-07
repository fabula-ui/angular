import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { css } from 'emotion';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';

@Component({
    selector: 'fab-dropdown-item',
    templateUrl: './dropdown-item.component.html',
})
export class DropdownItemComponent extends CommonComponent implements AfterViewInit {
    @Input() button = false;
    @Input() color: string;
    @Input() clickToClose = false;
    @Input() invert = false;
    @Input() label: string;
    @Input() parentColor: string;
    @Input() props: any = { button: false };
    @Input() size: string;

    @Output() clicked = new EventEmitter();

    constructor(public elRef: ElementRef) { super(elRef); }

    ngAfterViewInit() {
        if (this.props && this.props.clickToClose || this.clickToClose) {
            this.button = true;
            this.props.button = true;
        }

        // this.props
        this.styles = DropdownItemStyles;
        this.initStyles();
    }

    // Methods
    handleClick() {
        this.clicked.emit();
    }
}
