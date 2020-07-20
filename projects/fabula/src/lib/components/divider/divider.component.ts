import {
    AfterViewInit,
    Component,
    ElementRef,
    Input
} from '@angular/core';
import { css } from 'emotion';

// Styles
import DividerStyles from '@fabula/core/styles/components/divider/divider';

@Component({
    selector: 'fab-divider',
    templateUrl: './divider.component.html',
})
export class DividerComponent implements AfterViewInit {
    @Input() label: string;
    @Input() textColor: string;

    constructor(public elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;
        const styles = css(DividerStyles({ framework: 'angular', props: this }));
        host.classList.add(styles);
    }
}
