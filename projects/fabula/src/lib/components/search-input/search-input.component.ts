import {
    Component,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';
import { css } from 'emotion';

// Components
import { InputComponent } from '../input/input.component';

// Styles
import SearchInputStyles from '@fabula/core/styles/components/search-input/search-input';

@Component({
    selector: 'fab-search-input',
    templateUrl: './input.component.html',
})
export class SearchInputComponent extends InputComponent implements OnInit {
    @Input() placeholder = 'Search...';

    focus = false;
    inputProps;

    constructor(public elRef: ElementRef) { 
        super(elRef);
    }

    ngOnInit() {
        const host = this.elRef.nativeElement;
        const styles = css(SearchInputStyles({ framework: 'angular', props: this }));

        host.classList.add(styles);

        // Set props
        this.inputProps = this;
    }

}
