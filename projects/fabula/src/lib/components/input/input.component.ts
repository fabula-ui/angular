import {
    Component,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';
import { css } from 'emotion';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import InputStyles from '@fabula/core/styles/components/input/input';

@Component({
    selector: 'fab-input',
    styleUrls: ['input.component.scss'],
    templateUrl: './input.component.html',
})
export class InputComponent extends CommonComponent implements OnInit {
    @Input() color: string;
    @Input() disabled = false;
    @Input() expand = false;
    @Input() glow = false;
    @Input() has: string;
    @Input() icon: any;
    @Input() iconEnd: any;
    @Input() iconStart: any;
    @Input() message: string;
    @Input() messageColor: string;
    @Input() passwordToggle = false;
    @Input() placeholder = '';
    @Input() props: any;
    @Input() rounded = false;
    @Input() size = 'md';
    @Input() status: string;
    @Input() textarea = false;
    @Input() type = 'text';
    @Input() variant: string;

    hasFocus = false;
    host;

    constructor(public elRef: ElementRef) { super(elRef) }

    ngOnInit() {
        this.props = this;
        this.styles = InputStyles;
        this.initStyles();
    }

    // Methods
    handleFocus(hasFocus: boolean) {
        this.hasFocus = hasFocus;
    }

    isObject(subject) {
        return typeof subject === 'object';
    }

    toggleType() {
        this.type = this.type === 'text' ? 'password' : 'text';
    }

}
