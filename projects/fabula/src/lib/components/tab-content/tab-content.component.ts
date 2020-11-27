import { Component, OnInit, ElementRef } from '@angular/core';

// Components
import { ContentComponent } from '../content/content.component';

// Services
import { FabulaService } from '../../services/fabula.service';

@Component({
  templateUrl: '../content/content.component.html',
  selector: 'fab-tab-content',
})
export class TabContentComponent extends ContentComponent implements OnInit {
  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) {
    super(elRef, fabulaService);

    this.contentClass = 'fab-tab-content';
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
