import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import CardSectionStyles from '@fabula/core/styles/components/card-section/card-section';

@Component({
  selector: 'fab-card-section',
  templateUrl: './card-section.component.html'
})
export class CardSectionComponent extends CommonComponent implements OnInit {
  @Input() color: string;
  @Input() darken = false;
  @Input() divider: string;
  @Input() expand = false;
  @Input() faded = false;
  @Input() layout = 'vertical';
  @Input() lighten = false;
  @Input() padding;

  constructor(public elRef: ElementRef) { super(elRef) }

  ngOnInit() {
    this.styles = CardSectionStyles;
    this.initStyles();
  }
}
