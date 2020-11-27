import { Component, ElementRef } from '@angular/core';

// Components
import { SelectorComponent } from '../selector/selector.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import SegmentStyles from '@fabula/core/styles/components/segment/segment';

@Component({
  providers: [{ provide: SelectorComponent, useExisting: SegmentComponent }],
  selector: 'fab-segment',
  templateUrl: './segment.component.html'
})
export class SegmentComponent extends SelectorComponent {
  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  childViewInit() {
    this.styles = SegmentStyles;
    this.initStyles();
  }
}
