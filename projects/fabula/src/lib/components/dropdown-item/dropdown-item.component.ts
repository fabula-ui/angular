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

// Components
import { ButtonComponent } from '../button/button.component';
import { ListItemComponent } from '../list-item/list-item.component';

// Styles
import DropdownItemStyles from '@fabula/core/styles/components/dropdown-item/dropdown-item';

@Component({
    selector: 'fab-dropdown-item',
    templateUrl: './dropdown-item.component.html',
})
export class DropdownItemComponent extends ListItemComponent implements AfterViewInit, OnInit {
    @Input() button = false;
    @Input() clickToClose = false;
    @Input() item: any = { button: false };
    @Input() label: string;
    @Input() listItem = false;
    @Input() size = 'sm';

    @Output() clicked = new EventEmitter();

    buttonProps;
    host;

    constructor(public elRef: ElementRef) {
        super(elRef);
    }

    ngAfterViewInit() {
        this.init();
        super.ngOnInit();
    }

    ngOnInit() {
        let styles;

        // Get host element
        this.host = this.elRef.nativeElement;

        // Set and apply styles
        styles = css(DropdownItemStyles({ framework: 'angular', props: this }));
        this.host.classList.add(styles);
    }

    handleClick() {
        this.clicked.emit();
    }

    init() {
        // Set props
        this.buttonProps = {
            ...this,
            ...this.item,
        };
    }
}
