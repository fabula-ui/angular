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
import { css } from 'emotion';

// Components
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';
import { DropdownToggleComponent } from '../dropdown-toggle/dropdown-toggle.component';

// Styles
import DropdownStyles from '@fabula/core/styles/components/dropdown/dropdown';

@Component({
    selector: 'fab-dropdown',
    templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements AfterViewInit, OnInit {
    @ContentChild(DropdownMenuComponent) dropdownMenu: DropdownMenuComponent;
    @ContentChild(DropdownToggleComponent) dropdownToggle: DropdownToggleComponent;

    @Input() alignment = 'left';
    @Input() direction = 'down';
    @Input() expand = false;
    @Input() isOpen = false;

    @Output() close: EventEmitter<any> = new EventEmitter();
    @Output() open: EventEmitter<any> = new EventEmitter();
    @Output() toggle: EventEmitter<any> = new EventEmitter();

    host;

    constructor(private elRef: ElementRef) { }

    ngAfterViewInit() {
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
        }
    }

    ngOnInit() {
        const host = this.elRef.nativeElement;
        const styles = css(DropdownStyles({ framework: 'angular', props: this }));

        host.classList.add(styles);
        this.host = host;

        // Event Listener
        document.addEventListener('click', e => this.handleClick(e));
    }

    // Methods
    handleClick(e) {
        if (!this.host.contains(e.target) && this.isOpen) { this.handleToggle(); }
    }

    handleToggle() {
        this.isOpen = !this.isOpen;
        this.dropdownToggle.isOpen = this.isOpen;
        this.toggle.emit(this.isOpen);

        if (!this.isOpen) { this.close.emit(); }
        if (this.isOpen) { this.open.emit(); }
    }
}
