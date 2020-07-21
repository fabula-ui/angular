import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
import { css } from 'emotion';

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
export class TagComponent implements AfterViewInit {
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

  constructor(public elRef: ElementRef) { }

  ngAfterViewInit() {
    const host = this.elRef.nativeElement;
    const styles = css(TagStyles({ framework: 'angular', props: this }));
    host.classList.add(styles);
  }
}
