import {
    Component,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';
import { css } from 'emotion';

// Styles
import InputStyles from '@fabula/core/theme/styles/Input';

@Component({
    selector: 'fab-input',
    styleUrls: ['input.component.scss'],
    templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
    @Input() color = '';
    @Input() disabled = false;
    @Input() expand: boolean;
    @Input() has: string;
    @Input() message: string;
    @Input('message-color') messageColor: string;
    @Input() placeholder = '';
    @Input() size: string;

    hasFocus = false;
    host;
    props;

    constructor(
        public elRef: ElementRef
    ) { }

    ngOnInit() {
        let props;
        let styles;

        // Get host element
        this.host = this.elRef.nativeElement;

        // Set props
        props = {
            color: this.color,
            expand: this.expand,
            glow: this.host.hasAttribute('glow'),
            has: this.has,
            message: this.message,
            messageColor: this.messageColor,
            size: this.size
        };

        // Set and apply styles
        styles = css(InputStyles({ framework: 'angular', props }));
        this.host.classList.add(styles);
    }

    onFocus(hasFocus: boolean) {
        this.hasFocus = hasFocus;
    }

}
