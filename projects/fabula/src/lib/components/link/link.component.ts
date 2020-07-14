import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import LinkStyles from '@fabula/core/styles/components/link/link';

@Component({
    selector: 'fab-link',
    templateUrl: './link.component.html'
})
export class LinkComponent implements OnInit {
    @Input() color: string;
    @Input() label: string;
    @Input() props: any;
    @Input() target = '_blank';
    @Input() underline = true;
    @Input() url: string;

    constructor(public elRef: ElementRef) { }

    ngOnInit() {
        const host = this.elRef.nativeElement;
        const styles = css(LinkStyles({
            framework: 'angular', props: {
                ...this,
                ...this.props
            }
        }));

        host.classList.add(styles);
    }
}
