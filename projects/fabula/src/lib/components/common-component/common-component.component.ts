import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { css } from 'emotion';

@Component({
  selector: 'fab-component'
})
export class CommonComponent implements OnChanges {
  @Input() props: any = {};

  additionalProps;
  additionalStyles;
  callbacks;
  host;
  styles;

  constructor(public elRef: ElementRef) { }

  ngOnChanges() {
    if (this.callbacks && typeof this.callbacks === 'function') { this.callbacks(); }
    if (this.styles) { this.refreshStyles(); }
  }

  applyStyles(stylesFn) {
    const styles = css(stylesFn({
      framework: 'angular', props: {
        ...this,
        ...this.props,
        ...this.additionalProps
      }
    }));

    this.host = this.elRef.nativeElement;
    this.host.classList.add(styles);
  }

  initStyles() {
    if (this.additionalStyles) { this.applyStyles(this.additionalStyles); }
    if (this.styles) { this.applyStyles(this.styles); }
  }

  refreshStyles() {
    this.host.classList = '';
    this.initStyles();
  }
}
