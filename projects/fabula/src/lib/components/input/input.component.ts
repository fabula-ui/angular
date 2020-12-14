import {
    Component,
    ElementRef,
    HostBinding,
    Input,
    OnInit
} from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Models
import type { Icon } from '../../models/icon.model';
import type { Message } from '../../models/message.model';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import InputStyles from '@fabula/core/styles/components/input/input';

@Component({
    selector: 'fab-input',
    styleUrls: ['input.component.scss'],
    templateUrl: './input.component.html',
})
export class InputComponent extends CommonComponent implements OnInit {
    @HostBinding('attr.data-focus') focused = false;

    @Input() color: string;
    @Input() disabled = false;
    @Input() expand = false;
    @Input() glow = false;
    @Input() has: string;
    @Input() icon: Icon;
    @Input() iconEnd: Icon;
    @Input() iconStart: Icon;
    @Input() message: Message;
    @Input() passwordToggle = false;
    @Input() placeholder = '';
    @Input() rounded = false;
    @Input() size = 'md';
    @Input() status: string;
    @Input() textarea = false;
    @Input() type = 'text';
    @Input() value = '';
    @Input() variant: string;

    hasFocus = false;
    host;

    constructor(
        public elRef: ElementRef,
        public fabulaService: FabulaService
    ) { super(elRef, fabulaService); }

    ngOnInit() {
        this.styles = InputStyles;
        this.initStyles();
    }

    // Methods
    handleFocus(hasFocus: boolean) {
        this.focused = hasFocus;
        this.hasFocus = hasFocus;
    }

    isObject(subject) {
        return typeof subject === 'object';
    }

    toggleType() {
        this.type = this.type === 'text' ? 'password' : 'text';
    }

    get toggleIcon(): string {
        return this.type === 'text' ? 'eye-off' : 'eye';
    }

}
