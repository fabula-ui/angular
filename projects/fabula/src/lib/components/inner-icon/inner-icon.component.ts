import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import InnerIconStyles from '@fabula/core/styles/components/inner-icon/inner-icon';

@Component({
    selector: 'fab-inner-icon',
    templateUrl: './inner-icon.component.html'
})
export class InnerIconComponent implements OnInit {
    @Input() color: string;
    @Input() icon: any;
    @Input() parentProps: any; 

    constructor(public elRef: ElementRef) {}

    ngOnInit() {
        const host = this.elRef.nativeElement;
        const styles = css(InnerIconStyles({
            framework: 'angular', props: {
                parentProps: this.parentProps,
                ...this.icon
            }
        }));

        host.classList.add(styles);
    }
}
