import {
    Component,
    ElementRef,
    Input,
    OnInit,
    Output,
    EventEmitter,
    AfterViewInit,
    ContentChildren,
    QueryList,
    ViewChildren,
    AfterContentInit,
    forwardRef
} from '@angular/core';
import { css } from 'emotion';

// Components
import { DropdownItemComponent } from '../dropdown-item/dropdown-item.component';
import { ListComponent } from '../list/list.component';

// Styles
import DropdownMenuStyles from '@fabula/core/styles/components/dropdown-menu/dropdown-menu';

@Component({
    selector: 'fab-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent implements AfterViewInit, OnInit {
    @ContentChildren(DropdownItemComponent) dynamicChildren: QueryList<DropdownItemComponent>;
    @ViewChildren(DropdownItemComponent) children: QueryList<DropdownItemComponent>;

    @Input() clickToClose = false;
    @Input() color: string;
    @Input() direction: string;
    @Input() items: Array<any>;
    @Input() padding = true;
    @Input() size: string;
    @Input() toggle: any;

    @Output() clickItem: EventEmitter<any> = new EventEmitter();
    @Output() closed: EventEmitter<any> = new EventEmitter();

    host;
    listProps;
    open = false;

    constructor(public elRef: ElementRef) {}

    ngAfterViewInit() {
        this.children.forEach((item: DropdownItemComponent) => { this.handleDropdownItem(item); });
        this.dynamicChildren.forEach((item: DropdownItemComponent) => { this.handleDropdownItem(item); });
    }

    ngOnInit() {
        const host = this.elRef.nativeElement;
        const styles = css(DropdownMenuStyles({ framework: 'angular', props: this }));

        host.classList.add(styles);
    }

    // Methods
    handleDropdownItem(item) {
        item.clicked.subscribe(() => {
            if (this.clickToClose || item.clickToClose) {
                this.closed.emit();
            }

            this.clickItem.emit();
        });

        if (this.color) { item.parentColor = this.color; }
        if (this.size && !item.size) { item.size = this.size; }

        item.padding = this.padding;

        item.ngAfterViewInit();
    }

    // Listeners
    listen(events) {
        events.toggle.subscribe(open => {
            this.open = open;
        });
    }
}
