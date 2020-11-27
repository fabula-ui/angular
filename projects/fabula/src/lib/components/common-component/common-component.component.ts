import { Component, ElementRef, Input, OnChanges } from '@angular/core';
import { css } from 'emotion';

// Responsiveness
import ResponsiveStyles from '@fabula/core/styles/responsive/responsive';

// Services
import { FabulaService } from '../../services/fabula.service';

@Component({
  selector: 'fab-component'
})
export class CommonComponent implements OnChanges {
  @Input() props: any = {};

  // Responsiveness
  @Input() down: any = {};
  @Input() on: any = {};
  @Input() up: any = {};

  additionalProps;
  additionalStyles;
  callbacks;
  host;
  styles;

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { }

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
    let responsiveStyles;

    this.host = this.elRef.nativeElement;
    this.host.classList.add(styles);

    if (this.fabulaService.responsiveness) {
      responsiveStyles = css(ResponsiveStyles({
        framework: 'angular',
        props: {
          ...this,
          ...this.props,
          ...this.additionalProps
        },
        styles: stylesFn,
        utils: this.fabulaService.utils
      }));

      this.host.classList.add(responsiveStyles);
    }
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
