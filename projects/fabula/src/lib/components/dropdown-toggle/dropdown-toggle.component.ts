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
    @Input() direction: string;
    @Input() icon: string;
    @Input() label: string;
    @Input() open = false;

    @Output() toggle: EventEmitter<any> = new EventEmitter();
    
    props;

    constructor(public elRef: ElementRef) {
        super(elRef);
    }

    ngOnInit() {
        const host = this.elRef.nativeElement;
        const styles = css(DropdownToggleStyles({ framework: 'angular', props: this }));
        host.classList.add(styles);

        // Set props
        this.props = {
            ...this,
            label: ''
        };
    }

    handleClick() {
        this.toggle.emit(true);
    }
}
