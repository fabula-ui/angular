import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import HeadingStyles from '@fabula/core/styles/components/heading/heading';

@Component({
  selector: 'fab-heading',
  styleUrls: ['./heading.component.scss'],
  templateUrl: './heading.component.html'
})
export class HeadingComponent extends CommonComponent implements OnInit {
  @Input() color = '';
  @Input() level = 1;
  @Input() weight: any;

  constructor(public elRef: ElementRef) { super(elRef); }

  ngOnInit() {
    this.styles = HeadingStyles;
    this.initStyles();
  }
}
