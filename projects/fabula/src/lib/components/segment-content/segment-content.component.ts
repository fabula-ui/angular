import { Component, ElementRef, OnInit } from '@angular/core';

// Components
import { ContentComponent } from '../content/content.component';

@Component({
  templateUrl: '../content/content.component.html',
  selector: 'fab-segment-content'
})
export class SegmentContentComponent extends ContentComponent implements OnInit {
  constructor(public elRef: ElementRef) {
    super(elRef);
    this.contentClass = 'fab-segment-content';
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
