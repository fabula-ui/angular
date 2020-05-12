import {
    Component,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';

// Styles
import { ThemeService } from '../../services/theme.service';

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
        private elRef: ElementRef,
        private themeService: ThemeService,
    ) { }

    ngOnInit() {
        const props = {};

        this.host = this.elRef.nativeElement;
        this.themeService.attachClasses(this.host, 'dropdown', props);
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
