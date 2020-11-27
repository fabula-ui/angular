import {
    Component,
    ElementRef,
    Input,
    OnInit,
    ContentChild,
    AfterViewInit,
    Output,
    EventEmitter
} from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { DropdownToggleComponent } from '../dropdown-toggle/dropdown-toggle.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import DropdownStyles from '@fabula/core/styles/components/dropdown/dropdown';

@Component({
    selector: 'fab-dropdown',
    styleUrls: ['./dropdown.component.scss'],
    templateUrl: './dropdown.component.html',
})
export class DropdownComponent extends CommonComponent implements AfterViewInit, OnInit {
    @ContentChild(DropdownMenuComponent) dropdownMenu: DropdownMenuComponent;
    @ContentChild(DropdownToggleComponent) dropdownToggle: DropdownToggleComponent;

    @Input() alignment = 'left';
    @Input() direction = 'down';
    @Input() expand = false;
    @Input() isOpen = false;

    @Output() close: EventEmitter<any> = new EventEmitter();
    @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() toggle: EventEmitter<any> = new EventEmitter();

    inline = true;

    constructor(
        public elRef: ElementRef,
        public fabulaService: FabulaService
      ) { super(elRef, fabulaService); }

    ngAfterViewInit() {
        this.handleChildren();
    }

    ngOnInit() {
        this.styles = DropdownStyles;
        this.initStyles();
        this.callbacks = () => { this.handleChildren(); };

        // Event Listener
        document.addEventListener('click', e => this.handleClick(e));
    }

    // Methods
    handleChildren() {
        if (this.dropdownMenu) {
            this.dropdownMenu.alignment = this.alignment;
            this.dropdownMenu.direction = this.direction;
            this.dropdownMenu.listen({ toggle: this.toggle });
            this.dropdownMenu.closed.subscribe(() => this.handleToggle());
            this.dropdownMenu.ngOnInit();
        }

        if (this.dropdownToggle) {
            this.dropdownToggle.direction = this.direction;
            this.dropdownToggle.toggle.subscribe(() => this.handleToggle());

            if (this.expand) { this.dropdownToggle.expand = true; }
            this.dropdownToggle.ngOnInit();
        }

        this.refreshStyles();
    }

    handleClick(e) {
        const host = this.elRef.nativeElement;
        if (!host.contains(e.target) && this.isOpen) { this.handleToggle(); }
    }

    handleToggle() {
        this.isOpen = !this.isOpen;
        this.dropdownToggle.isOpen = this.isOpen;
        this.toggle.emit(this.isOpen);

        if (!this.isOpen) { this.close.emit(); }
        if (this.isOpen) { this.open.emit(); }
    }
}
