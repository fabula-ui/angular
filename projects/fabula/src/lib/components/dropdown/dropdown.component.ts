import {
    Component,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';
import { css } from 'emotion';

// Styles
import DropdownStyles from '@fabula/core/theme/styles/Dropdown';

@Component({
    selector: 'fab-dropdown',
    styleUrls: ['dropdown.component.scss'],
    templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit {
    @Input() items = [];

    public dropdownToggle;
    public host;
    public isOpen = false;

    constructor(
        private elRef: ElementRef
    ) { }

    ngOnInit() {
        let props = {};
        let styles;

        // Get host element
        this.host = this.elRef.nativeElement;

        // Set and apply styles
        styles = css(DropdownStyles({ framework: 'angular', props }));
        this.host.classList.add(styles);

        // Set toggle
        this.setToggle();
    }

    setToggle() {
        this.dropdownToggle = this.host.querySelector('[dropdown-toggle]');
        this.dropdownToggle.querySelector('[data-fab-component]').setAttribute('data-dropdown-toggle', true);

        this.dropdownToggle.addEventListener('click', () => {
            this.toggle();
        });
    }

    toggle() {
        this.isOpen = !this.isOpen;
        this.dropdownToggle.querySelector('[data-fab-component]').setAttribute('data-active', this.isOpen);
    }

}
