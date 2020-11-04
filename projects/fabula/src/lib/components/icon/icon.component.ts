import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import IconStyles from '@fabula/core/styles/components/icon/icon';

@Component({
  selector: 'fab-icon',
  styleUrls: ['./icon.component.scss'],
  templateUrl: './icon.component.html'
})
export class IconComponent extends CommonComponent implements OnInit {
  @Input() color: string;
  @Input() name: string;
  @Input() size = 'md';

  constructor(public elRef: ElementRef) { super(elRef); }

  ngOnInit() {
    this.styles = IconStyles;
    this.initStyles();
  }
}
