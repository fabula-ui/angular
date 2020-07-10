import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import SegmentContentStyles from '@fabula/core/styles/components/segment-content/segment-content';

@Component({
  selector: 'fab-segment-content',
  templateUrl: './segment-content.component.html',
})
export class SegmentContentComponent implements OnInit {
  @Input() active = false;
  @Input() name: string;
  @Input() scope: string;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(SegmentContentStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }

}
