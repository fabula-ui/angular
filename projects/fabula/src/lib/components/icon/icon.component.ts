import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { css } from 'emotion';

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
    const props = {
      color: this.color,
      name: this.name,
      size: this.size,
      ...this.props,
    };

    this.props = props;
    this.styles = IconStyles;
    this.initStyles();
  }
}
