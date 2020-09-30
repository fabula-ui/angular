import { Component, ElementRef, OnChanges } from '@angular/core';
import { css } from 'emotion';

@Component({
  selector: 'fab-component'
})
export class CommonComponent implements OnChanges {
  styles;
  constructor(public elRef: ElementRef) { }

  ngOnChanges() {
    if (this.styles) { this.refreshStyles(); }
  }

  initStyles() {
    const host = this.elRef.nativeElement;
    const styles = css(this.styles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }

  refreshStyles() {
    const host = this.elRef.nativeElement;
    const styles = css(this.styles({ framework: 'angular', props: this }));

    host.classList = '';
    host.classList.add(styles);
  }
}
