import { Component, ElementRef, OnInit } from '@angular/core';

// Components
import { ContentComponent } from '../content/content.component';

// Services
import { FabulaService } from '../../services/fabula.service';

@Component({
  templateUrl: '../content/content.component.html',
  selector: 'fab-segment-content'
})
export class SegmentContentComponent extends ContentComponent implements OnInit {
  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) {
    super(elRef, fabulaService);
    this.contentClass = 'fab-segment-content';
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
