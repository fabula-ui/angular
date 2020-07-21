import { Component, ElementRef } from '@angular/core';
import { css } from 'emotion';

// Styles
import SegmentStyles from '@fabula/core/styles/components/segment/segment';
import { SelectorComponent } from '../selector/selector.component';

@Component({
  providers: [{ provide: SelectorComponent, useExisting: SegmentComponent }],
  selector: 'fab-segment',
  templateUrl: './segment.component.html'
})
export class SegmentComponent extends SelectorComponent {
  constructor(public elRef: ElementRef) { super(elRef); }

  childViewInit() {
    const host = this.elRef.nativeElement;
    const styles = css(SegmentStyles({ framework: 'angular', props: this }));
    host.classList.add(styles);
  }
}
