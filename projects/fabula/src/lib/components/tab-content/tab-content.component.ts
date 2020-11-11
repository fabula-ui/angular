import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { css } from 'emotion';

// Components
import { ContentComponent } from '../content/content.component';

@Component({
  templateUrl: '../content/content.component.html',
  selector: 'fab-tab-content',
})
export class TabContentComponent extends ContentComponent implements OnInit {
  constructor(public elRef: ElementRef) { 
    super(elRef);

    this.contentClass = 'fab-tab-content';
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
