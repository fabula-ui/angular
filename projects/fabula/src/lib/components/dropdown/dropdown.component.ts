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
    @Input() open = false;

    @Output() toggle: EventEmitter<any> = new EventEmitter();

    host;

    constructor(
        private elRef: ElementRef
    ) { }

    ngAfterViewInit() {
        this.dropdownMenu.listen({
            toggle: this.toggle
        });
        this.dropdownToggle.toggle.subscribe(tab => this.handleToggle());
    }

    ngOnInit() {
        let props = {};
        let styles;

        // Get host element
        this.host = this.elRef.nativeElement;

        // Set and apply styles
        styles = css(DropdownStyles({ framework: 'angular', props }));
        this.host.classList.add(styles);

        // Event Listener
        // document.addEventListener('click', this.handleClick);
    }

    handleClick(e) {
        // if (!this.host.contains(e.target) && this.open) {
        //     this.toggle();
        // }
    }

    handleToggle() {
        this.open = !this.open;
        this.toggle.emit(this.open);
    }
}
