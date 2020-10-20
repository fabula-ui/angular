import { Component, AfterViewInit, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import TooltipStyles from '@fabula/core/styles/components/tooltip/tooltip';

@Component({
  selector: 'fab-tooltip',
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent implements AfterViewInit {
  @Input() color: string;
  @Input() label: string;
  @Input() offset: any;
  @Input() placement = 'top';

  constructor(public elRef: ElementRef) { }

  ngAfterViewInit() {
    const host = this.elRef.nativeElement;
    const styles = css(TooltipStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }
}
