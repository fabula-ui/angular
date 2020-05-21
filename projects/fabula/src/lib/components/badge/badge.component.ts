import { Component, Input, OnInit, ElementRef, Renderer2, Renderer } from '@angular/core';
import { css } from 'emotion';

// Styles
import BadgeStyles from '@fabula/core/theme/styles/Badge';

@Component({
  selector: 'fab-badge',
  templateUrl: './badge.component.html',
  styles: []
})
export class BadgeComponent implements OnInit {
  @Input() color: string;
  @Input('corner-style') cornerStyle = 'hard';
  @Input() icon = '';
  @Input('placement-x') placementX = 'right';
  @Input('placement-y') placementY = 'bottom';
  @Input() size = 'md';

  className;
  host;

  constructor(
    public elRef: ElementRef
    ) { }

  ngOnInit() {
    let props
    let styles;

    this.host = this.elRef.nativeElement;

    props = {
        color: this.color,
        rounded: this.host.hasAttribute('rounded'),
        size: this.size
    }
    
    styles = css(BadgeStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);
  }

}
