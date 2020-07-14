import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { css } from 'emotion';

// Styles
import ToastStyles from '@fabula/core/styles/components/toast/toast';

@Component({
  selector: 'fab-toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent implements OnInit {
  @Input() clear: boolean;
  @Input() closeButton: any;
  @Input() color: string;
  @Input() faded: boolean;
  @Input() glow: boolean;
  @Input() icon: any;
  @Input() link: any;
  @Input() message: string;
  @Input() outline: boolean;

  iconProps;

  constructor(public elRef: ElementRef) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(ToastStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);

    // Icon props
    if (typeof this.icon === 'object') {
      this.iconProps = {
        parentProps: this,
        ...this.icon,
      }
    } else {
      this.iconProps = {
        parentProps: this,
        name: this.icon,
      }
    }
  }

}
