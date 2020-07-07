import {
    Component,
    ElementRef,
    Input,
    OnInit
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
    @Input() icon: string;
    @Input() iconEnd: any;
    @Input() iconStart: any;
    @Input() message: string;
    @Input() messageColor: string;
    @Input() placeholder = '';
    @Input() size: string;
    @Input() status: string;
    @Input() type = 'text';

    focus = false;

    constructor(
        public elRef: ElementRef
    ) { }

    ngOnInit() {
        const host = this.elRef.nativeElement;
        const styles = css(InputStyles({ framework: 'angular', props: this }));

        host.classList.add(styles);
    }

    handleFocus(hasFocus: boolean) {
        this.focus = hasFocus;
    }

}
