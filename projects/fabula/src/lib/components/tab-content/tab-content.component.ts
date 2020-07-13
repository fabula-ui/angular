import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { css } from 'emotion';

// Components
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'fab-tab-content',
  templateUrl: './tab-content.component.html',
})
export class TabContentComponent extends ContentComponent implements OnInit {
  constructor(public elRef: ElementRef) { 
    super(elRef);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
