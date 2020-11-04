import { Component, ElementRef, OnInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

import RowStyles from '@fabula/core/styles/components/row/row';

@Component({
  selector: 'fab-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent extends CommonComponent implements OnInit {
  constructor(public elRef: ElementRef) { super(elRef) }

  ngOnInit() {
    this.styles = RowStyles;
    this.initStyles();
  }
}
