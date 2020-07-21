import { Component, ElementRef, OnInit } from '@angular/core';

// Components
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'fab-segment-content',
  templateUrl: './segment-content.component.html',
})
export class SegmentContentComponent extends ContentComponent implements OnInit {
  constructor(public elRef: ElementRef) { super(elRef) }

  ngOnInit() {
    super.ngOnInit();
  }
}
