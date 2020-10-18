import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import ToastStyles from '@fabula/core/styles/components/toast/toast';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'fab-toast',
  templateUrl: './toast.component.html'
})
export class ToastComponent implements AfterViewInit {
  @Input() clear: boolean;
  @Input() color: string;
  @Input() faded: boolean;
  @Input() glow: boolean;
  @Input() hideButton: any;
  @Input() hiding = false;
  @Input() icon: any;
  @Input() index: any;
  @Input() link: any;
  @Input() message: string;
  @Input() outline: boolean;
  @Input() stack: string;
  @Input() stacked = false;

  iconProps;
  props;

  constructor(
    public elRef: ElementRef,
    public toastService: ToastService
  ) { }

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

    this.props = this;
  }

  hideToast() {
    const stack = this.toastService.stacks[this.stack];

    this.toastService.hideToast({
      index: this.index,
      stack
    });
  }
}
