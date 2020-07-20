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
    @Input() item: any = { button: false };
    @Input() label: string;
    @Input() parentColor: string;
    @Input() size: string;

    @Output() clicked = new EventEmitter();

    constructor(public elRef: ElementRef) { }

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const styles = css(DropdownItemStyles({
            framework: 'angular', props: {
                ...this,
                ...this.item
            }
        }));
        host.classList.add(styles);
    }

    // Methods
    handleClick() {
        this.clicked.emit();
    }
}
