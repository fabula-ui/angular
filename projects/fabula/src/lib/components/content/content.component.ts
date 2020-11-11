import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import ContentStyles from '@fabula/core/styles/components/content/content';

@Component({
  selector: 'fab-content',
  templateUrl: './content.component.html',
})
export class ContentComponent extends CommonComponent implements OnInit {
  @Input() active = false;
  @Input() name: string;
  @Input() scope: string;

  contentClass: string;

  constructor(public elRef: ElementRef) { super(elRef); }

  ngOnInit() {
    this.styles = ContentStyles;
    this.initStyles();
  }
}
