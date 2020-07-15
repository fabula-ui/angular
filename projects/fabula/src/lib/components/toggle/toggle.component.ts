import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { css } from 'emotion';

// Styles
import ToggleStyles from '@fabula/core/styles/components/toggle/toggle';

@Component({
  selector: 'fab-toggle',
  templateUrl: './toggle.component.html'
})
export class ToggleComponent implements OnInit {
  @Input() active = false;
  @Input() activeColor: string;
  @Input() color: string;
  @Input() disabled = false;
  @Input() inactiveColor: string;
  @Input() rounded = false;
  @Input() size: string;

  constructor(public elRef: ElementRef) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(ToggleStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }

  handleClick() {
    if (!this.disabled) { this.active = !this.active; }
}
}
