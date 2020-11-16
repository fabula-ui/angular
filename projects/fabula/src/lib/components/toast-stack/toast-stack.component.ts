import { Component, OnInit, Input, ElementRef } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import ToastStackStyles from '@fabula/core/styles/components/toast-stack/toast-stack';

@Component({
  selector: 'fab-toast-stack',
  templateUrl: './toast-stack.component.html'
})
export class ToastStackComponent extends CommonComponent implements OnInit {
  @Input() placement: any = {
    x: 'left',
    y: 'bottom'
  };
  @Input() toasts: Array<any>;

  constructor(public elRef: ElementRef) { super(elRef); }

  ngOnInit() {
    this.styles = ToastStackStyles;
    this.initStyles();
  }

  get visibleToasts() {
    if (this.toasts) {
      const toasts = this.toasts.map((toast, index) => {
        toast.index = index;
        return toast;
      });
  
      return toasts.filter(toast => !toast.hidden);
    } else {
      return [];
    }
  }
}
