import {
    Component,
    ElementRef,
    Input,
    OnInit,
    ContentChildren,
    QueryList,
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

    @Input() direction = 'down';
    @Input() expand = false;
    @Input() open = false;

    @Output() toggle: EventEmitter<any> = new EventEmitter();

    host;

    constructor(
        private elRef: ElementRef
    ) { }

    ngAfterViewInit() {
        if (this.dropdownMenu) {
            this.dropdownMenu.direction = this.direction;
            this.dropdownMenu.listen({ toggle: this.toggle });
            this.dropdownMenu.closed.subscribe(() => this.handleToggle());
            this.dropdownMenu.ngOnInit();
        }

        if (this.dropdownToggle) {
            this.dropdownToggle.toggle.subscribe(() => this.handleToggle());
        }
    }

    ngOnInit() {
        let props = {};
        let styles;

        // Get host element
        this.host = this.elRef.nativeElement;

        // Set and apply styles
        styles = css(DropdownStyles({ framework: 'angular', props: this }));
        this.host.classList.add(styles);

        // Event Listener
        document.addEventListener('click', e => this.handleClick(e));
    }

    handleClick(e) {
        if (!this.host.contains(e.target) && this.open) {
            this.handleToggle();
        }
    }

    handleToggle() {
        this.open = !this.open;
        this.toggle.emit(this.open);
    }
}
