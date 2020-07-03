import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { css } from 'emotion';

// Components
import { ButtonComponent } from '../button/button.component';

// Styles
import DropdownToggleStyles from '@fabula/core/styles/components/dropdown-toggle/dropdown-toggle';

@Component({
    selector: 'fab-dropdown-toggle',
    templateUrl: './dropdown-toggle.component.html',
})
export class DropdownToggleComponent extends ButtonComponent implements OnInit {
    @Input() icon: string;
    @Input() label: string;

    @Output() toggle: EventEmitter<any> = new EventEmitter();

    buttonProps;
    host;

    constructor(public elRef: ElementRef) {
        super(elRef);
    }

    ngOnInit() {
        let props = {};
        let styles;

        // Get host element
        this.host = this.elRef.nativeElement;

        // Set and apply styles
        styles = css(DropdownToggleStyles({ framework: 'angular', props: this }));
        this.host.classList.add(styles);

        // Set button props
        this.buttonProps = this;
    }

    handleClick() {
        this.toggle.emit();
    }
}
