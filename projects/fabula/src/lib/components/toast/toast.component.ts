import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import ToastStyles from '@fabula/core/styles/components/toast/toast';

@Component({
  selector: 'fab-toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent implements AfterViewInit {
  @Input() clear: boolean;
  @Input() closeButton: any;
  @Input() color: string;
  @Input() faded: boolean;
  @Input() glow: boolean;
  @Input() hiding = false;
  @Input() icon: any;
  @Input() link: any;
  @Input() message: string;
  @Input() outline: boolean;
  @Input() stacked = false;

  iconProps;

  constructor(public elRef: ElementRef) { }

  ngAfterViewInit() {
    const host = this.elRef.nativeElement;
    const height = host.offsetHeight;
    const styles = css(ToastStyles({
      framework: 'angular', props: {
        ...this,
        height
      }
    }));

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
