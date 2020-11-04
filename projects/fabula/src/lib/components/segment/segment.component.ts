import { Component, ElementRef } from '@angular/core';

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
    this.styles = SegmentStyles;
    this.initStyles();
  }
}
