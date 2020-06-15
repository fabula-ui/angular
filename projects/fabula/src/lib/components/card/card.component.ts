import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { css } from 'emotion';

import CardStyles from '@fabula/core/styles/components/card/card';

@Component({
  selector: 'fab-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() color: string;
  @Input() flow = 'vertical';
  @Input() glow = false;

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
