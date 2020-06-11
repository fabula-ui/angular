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
  @Input() circle = false;
  @Input() color: string;
  @Input('corner-style') cornerStyle = 'hard';
  @Input() icon = '';
  @Input() label = '';
  @Input() placement = '';
  @Input() placementX = '';
  @Input() placementY = '';
  @Input() rounded = false;
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
      circle: this.circle,
      color: this.color,
      placement: this.placement,
      rounded: this.rounded,
      size: this.size
    }

    styles = css(BadgeStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);
  }

}
