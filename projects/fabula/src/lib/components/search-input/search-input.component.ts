import {
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
import { css } from 'emotion';

// Components
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';

// Styles
import SearchInputStyles from '@fabula/core/styles/components/search-input/search-input';

@Component({
    selector: 'fab-search-input',
    templateUrl: './search-input.component.html',
})
export class SearchInputComponent extends InputComponent implements OnInit {
    @Input() button: any;
    @Input() placeholder = 'Search...';

    @ViewChild(ButtonComponent) buttonEl: ButtonComponent;

    inputProps;

    constructor(public elRef: ElementRef) { super(elRef); }

    ngOnInit() {
        const host = this.elRef.nativeElement;
        const styles = css(SearchInputStyles({ framework: 'angular', props: this }));
        host.classList.add(styles);

        this.inputProps = this;
        this.handleButton();
    }

    // Methods
    handleButton() {
        this.buttonEl.color = 'primary';
        this.buttonEl.compact = true;

        if (typeof this.button === 'object' && !this.button.icon && !this.button.label || typeof this.button !== 'object') { this.buttonEl.label = 'Search'; }

        if (this.button && typeof this.button === 'object') {
            for (let key in this.button) {
                this.buttonEl[key] = this.button[key];
            }
        }

        this.buttonEl.ngAfterViewInit();
    }
}
