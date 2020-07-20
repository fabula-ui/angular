import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { css } from 'emotion';

// Styles
import InputStyles from '@fabula/core/styles/components/input/input';

@Component({
    selector: 'fab-input',
    styleUrls: ['input.component.scss'],
    templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
    @Input() color = '';
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

    hasFocus = false;
    host;

    constructor(
        public elRef: ElementRef
    ) { }

    ngOnInit() {
        const host = this.elRef.nativeElement;
        const styles = css(InputStyles({
            framework: 'angular', props: {
                ...this,
                ...this.props
            }
        }));

        host.classList.add(styles);
        this.host = host;
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
