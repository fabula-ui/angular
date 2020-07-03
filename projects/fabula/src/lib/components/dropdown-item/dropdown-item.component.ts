import {
    Component,
    ElementRef,
    Input,
    OnInit,
    Output,
    EventEmitter
} from '@angular/core';
import { css } from 'emotion';

// Components
import { ButtonComponent } from '../button/button.component';

// Styles
import ButtonStyles from '@fabula/core/styles/components/button/button';
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';

@Component({
    selector: 'fab-dropdown-item',
    templateUrl: './dropdown-item.component.html',
})
export class DropdownItemComponent extends ButtonComponent implements OnInit {
    @Input() button = false;
    @Input() clickToClose = false;
    @Input() item: any;
    @Input() label: string;
    @Input() size = 'sm';

    @Output() clicked = new EventEmitter();

    buttonProps;
    host;

    constructor(public elRef: ElementRef) {
        super(elRef);
    }

    ngOnInit() {
        let styles;

        // Get host element
        this.host = this.elRef.nativeElement;

        // Set and apply styles
        styles = css(DropdownItemStyles({ framework: 'angular', props: this }));
        this.host.classList.add(styles);

        // Set button props
        this.buttonProps = {
            ...this,
            ...this.item
        };
    }

    handleClick() {
        this.clicked.emit();
    }
}
