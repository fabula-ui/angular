import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnInit,
    Output,
    EventEmitter
} from '@angular/core';
import { css } from 'emotion';

// Styles
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';

@Component({
    selector: 'fab-dropdown-item',
    templateUrl: './dropdown-item.component.html',
})
export class DropdownItemComponent implements AfterViewInit {
    @Input() button = false;
    @Input() color: string;
    @Input() clickToClose = false;
    @Input() invert = false;
    @Input() label: string;
    @Input() parentColor: string;
    @Input() props: any = { button: false };
    @Input() size: string;

    @Output() clicked = new EventEmitter();

    constructor(public elRef: ElementRef) { }

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const styles = css(DropdownItemStyles({
            framework: 'angular', props: {
                ...this,
                ...this.props
            }
        }));
        host.classList.add(styles);

        if (this.props && this.props.clickToClose || this.clickToClose) {
            this.button = true;
            this.props.button = true;
        }
    }

    // Methods
    handleClick() {
        this.clicked.emit();
    }
}
