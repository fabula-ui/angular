import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { css } from 'emotion';

@Component({
  selector: 'fab-component'
})
export class CommonComponent implements OnChanges {
  @Input() props: any;

  host;
  styles;

  constructor(public elRef: ElementRef) { }

  ngOnChanges() {
    if (this.styles) { this.refreshStyles(); }
  }

  applyStyles() {
    const styles = css(this.styles({
      framework: 'angular', props: {
        ...this,
        ...this.props
      }
    }));

    this.host = this.elRef.nativeElement;
    this.host.classList.add(styles);
  }

  initStyles() {
    this.applyStyles();
  }

  refreshStyles() {
    this.host.classList = '';
    this.applyStyles();
  }
}
