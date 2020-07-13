import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Components
import { ContentComponent } from '../content/content.component';

// Styles
import SegmentContentStyles from '@fabula/core/styles/components/segment-content/segment-content';

@Component({
  selector: 'fab-segment-content',
  templateUrl: './segment-content.component.html',
})
export class SegmentContentComponent extends ContentComponent implements OnInit {
  constructor(public elRef: ElementRef) { 
    super(elRef);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
