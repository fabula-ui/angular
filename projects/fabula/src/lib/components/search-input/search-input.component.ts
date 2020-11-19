import {
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';

// Components
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';

// Styles
import SearchInputStyles from '@fabula/core/styles/components/search-input/search-input';

@Component({
    selector: 'fab-search-input',
    styleUrls: ['./search-input.component.scss'],
    templateUrl: './search-input.component.html',
})
export class SearchInputComponent extends InputComponent implements OnInit {
    @Input() button: any = null;
    @Input() placeholder = 'Search...';

    @ViewChild(ButtonComponent) buttonEl: ButtonComponent;
    @ViewChild(InputComponent) inputEl: InputComponent;

    buttonProps;
    inputProps;

    constructor(public elRef: ElementRef) {
        super(elRef);
        
    }

    ngOnInit() {
        if (this.button) { this.handleButton(); }

        this.additionalStyles = SearchInputStyles;
        this.inputProps = this;
        this.initStyles();
    }

    // Methods
    handleButton() {
        this.buttonProps = { ...this.button };
        this.buttonProps.color = 'primary';
        this.buttonProps.compact = true;

        if (typeof this.button === 'string') {
            this.buttonProps.label = this.button;
        } else if (typeof this.button === 'object' && this.button.label) {
            this.buttonProps.label = this.button.label;
        } else if ((typeof this.button === 'object' && !this.button.icon && !this.button.label) || typeof this.button === 'boolean') {
            this.buttonProps.label = 'Search';
        }

        if (this.button && typeof this.button === 'object') {
            for (let key in this.button) {
                this.buttonProps[key] = this.button[key];
            }
        }

        if (this.buttonEl) { this.buttonEl.ngAfterViewInit(); }
    }
}
