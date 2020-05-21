import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { css } from 'emotion';

import CardStyles from '@fabula/core/theme/styles/Card';

@Component({
  selector: 'fab-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() color: string;
  @Input() flow = 'vertical';
  @Input() glow = !this.color;

  host;

  constructor(
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    let props;
    let styles;

    this.host = this.elRef.nativeElement;

    props = {
      color: this.color,
      glow: this.glow,
      padding: this.host.hasAttribute('padding')
    };
    styles = css(CardStyles({ framework: 'angular', props }));

    this.host.classList.add(styles);
  }

}
