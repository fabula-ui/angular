import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { css } from 'emotion';

// Styles
import ToastStackStyles from '@fabula/core/styles/components/toast-stack/toast-stack';

@Component({
  selector: 'fab-toast-stack',
  templateUrl: './toast-stack.component.html'
})
export class ToastStackComponent implements OnInit {
  @Input() placement: any;
  @Input() toasts: Array<any>;

  constructor(public elRef: ElementRef) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(ToastStackStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }

  get visibleToasts() {
    return this.toasts.filter(toast => !toast.hidden);
  }

}
