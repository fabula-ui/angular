import { Component, Input, OnInit, ElementRef, Renderer2, Renderer } from '@angular/core';
import { css } from 'emotion';

// Styles
import BadgeStyles from '@fabula/core/styles/components/badge/badge';

@Component({
  selector: 'fab-badge',
  templateUrl: './badge.component.html',
  styles: []
})
export class BadgeComponent implements OnInit {
  @Input() circle = false;
  @Input() clear = false;
  @Input() color: string;
  @Input() faded = false;
  @Input() icon = '';
  @Input() invert = false;
  @Input() label = '';
  @Input() outline = false;
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
      clear: this.clear,
      color: this.color,
      faded: this.faded,
      invert: this.invert,
      outline: this.outline,
      placement: this.placement,
      rounded: this.rounded,
      size: this.size
    }

    styles = css(BadgeStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);
  }

}
