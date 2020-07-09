import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import SegmentContentStyles from '@fabula/core/styles/components/segment-content/segment-content';

@Directive({
    selector: '[segmentIsActive], [segmentName], [segmentScope]'
})
export class SegmentsDirective implements AfterViewInit {
    @Input() segmentIsActive = false;
    @Input() segmentName: string;
    @Input() segmentScope: string;

    constructor(private elRef: ElementRef) {}

    ngAfterViewInit() {
        const host = this.elRef.nativeElement;

        host.setAttribute('data-segment-is-active', this.segmentIsActive);
        host.setAttribute('data-segment-name', this.segmentName);
        host.setAttribute('data-segment-scope', this.segmentScope);

        host.classList.add(css(SegmentContentStyles({ framework: 'angular', props: {} })));
    }

}
