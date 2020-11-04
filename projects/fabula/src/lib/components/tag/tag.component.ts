import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import TagStyles from '@fabula/core/styles/components/tag/tag';

interface Placement {
  x: string;
  y: string;
}

@Component({
  selector: 'fab-tag',
  templateUrl: './tag.component.html',
})
export class TagComponent extends CommonComponent implements AfterViewInit {
  @Input() color: string;
  @Input() clear = false;
  @Input() faded = false;
  @Input() glow = false;
  @Input() invert = false;
  @Input() link: string;
  @Input() outline = false;
  @Input() placement: Placement;
  @Input() rounded = false;
  @Input() size = 'md';

  inline = true;

  constructor(public elRef: ElementRef) { super(elRef); }

  ngAfterViewInit() {
    this.styles = TagStyles;
    this.initStyles();
  }
}
