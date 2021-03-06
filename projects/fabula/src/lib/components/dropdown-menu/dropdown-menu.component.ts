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
} from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';
import { DividerComponent } from '../divider/divider.component';
import { DropdownHeaderComponent } from '../dropdown-header/dropdown-header.component';
import { DropdownItemComponent } from '../dropdown-item/dropdown-item.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import DropdownMenuStyles from '@fabula/core/styles/components/dropdown-menu/dropdown-menu';

@Component({
    selector: 'fab-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent extends CommonComponent implements AfterViewInit, OnInit {
    @ContentChildren(DropdownHeaderComponent) contentHeader: QueryList<DropdownHeaderComponent>;
    @ContentChildren(DropdownItemComponent) contentItems: QueryList<DropdownItemComponent>;
    @ContentChildren(DividerComponent) divider: QueryList<DividerComponent>;
    @ViewChildren(DropdownHeaderComponent) viewHeader: QueryList<DropdownHeaderComponent>;
    @ViewChildren(DropdownItemComponent) viewItems: QueryList<DropdownItemComponent>;

    @Input() alignment: string;
    @Input() clickToClose = false;
    @Input() color: string;
    @Input() direction: string;
    @Input() items: Array<any>;
    @Input() padding = true;
    @Input() size: string;

    @Output() clickItem: EventEmitter<any> = new EventEmitter();
    @Output() closed: EventEmitter<any> = new EventEmitter();

    isOpen = false;

    constructor(
        public elRef: ElementRef,
        public fabulaService: FabulaService
    ) { super(elRef, fabulaService); }

    ngAfterViewInit() {
        this.contentHeader.forEach((header: DropdownHeaderComponent) => { this.handleDropdownHeader(header); });
        this.contentItems.forEach((item: DropdownItemComponent) => { this.handleDropdownItem(item); });
        this.divider.forEach((divider: DividerComponent) => { this.handleDivider(divider); });
        this.viewHeader.forEach((header: DropdownHeaderComponent) => { this.handleDropdownHeader(header); });
        this.viewItems.forEach((item: DropdownItemComponent) => { this.handleDropdownItem(item); });
    }

    ngOnInit() {
        this.styles = DropdownMenuStyles;
        this.initStyles();
    }

    // Methods
    handleDivider(divider) {
        if (this.color) { divider.parentColor = this.color; }

        divider.refreshStyles();
    }

    handleDropdownHeader(header) {
        if (this.color) { header.parentColor = this.color; }

        header.ngAfterViewInit();
    }

    handleDropdownItem(item) {
        item.clicked.subscribe(() => {
            if (this.clickToClose || item.clickToClose || item.props.clickToClose) {
                this.closed.emit();
            }

            this.clickItem.emit();
        });

        if (this.color) { item.parentColor = this.color; }
        if (this.clickToClose) { item.clickToClose = this.clickToClose; }
        if (this.size && !item.size) { item.size = this.size; }

        item.padding = this.padding;

        item.ngAfterViewInit();
        this.refreshStyles();
    }

    // Listeners
    listen(events) {
        events.toggle.subscribe(isOpen => {
            this.isOpen = isOpen;
        });
    }
}
