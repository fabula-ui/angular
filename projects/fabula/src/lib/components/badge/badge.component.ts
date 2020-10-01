import { Component, Input, OnInit, ElementRef } from '@angular/core';

// Styles
import BadgeStyles from '@fabula/core/styles/components/badge/badge';
import { CommonComponent } from '../common-component/common-component.component';

@Component({
  selector: 'fab-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent extends CommonComponent implements OnInit {
  @Input() circle = false;
  @Input() clear = false;
  @Input() color: string;
  @Input() darken = false;
  @Input() faded = false;
  @Input() glow = false;
  @Input() invert = false;
  @Input() label = '';
  @Input() lighten = false;
  @Input() outline = false;
  @Input() placement = '';
  @Input() placementX = '';
  @Input() placementY = '';
  @Input() rounded = false;
  @Input() size = 'md';

  constructor(public elRef: ElementRef) { super(elRef) }

  ngOnInit() {
    this.styles = BadgeStyles;
    this.initStyles();
  }

}
