import {
    AfterViewInit,
    Component,
    ElementRef,
    Input
} from '@angular/core';
import { css } from 'emotion';

// Styles
import DropdownHeaderStyles from '@fabula/core/styles/components/dropdown-header/dropdown-header';

@Component({
    selector: 'fab-dropdown-header',
    templateUrl: './dropdown-header.component.html',
})
export class DropdownHeaderComponent implements AfterViewInit {
    @Input() label: string;
    @Input() textColor: string;

    constructor(public elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const styles = css(DropdownHeaderStyles({ framework: 'angular', props: this }));
        host.classList.add(styles);
    }
}
