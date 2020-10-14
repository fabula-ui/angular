import { Component, ElementRef, OnInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import ContainerStyles from '@fabula/core/styles/components/container/container';

@Component({
  selector: 'fab-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent extends CommonComponent implements OnInit {

  constructor(public elRef: ElementRef) { super(elRef); }

  ngOnInit() {
    this.styles = ContainerStyles;
    this.initStyles();
  }
}
