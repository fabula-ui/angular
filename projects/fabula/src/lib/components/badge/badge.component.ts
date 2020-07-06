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
  @Input() darken = false;
  @Input() faded = false;
  @Input() icon = '';
  @Input() invert = false;
  @Input() label = '';
  @Input() lighten = false;
  @Input() outline = false;
  @Input() placement = '';
  @Input() placementX = '';
  @Input() placementY = '';
  @Input() rounded = false;
  @Input() size = 'md';

  className;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(BadgeStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }

}
