import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { css } from 'emotion';

// Styles
import ToastStackStyles from '@fabula/core/theme/styles/ToastStack';

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

}
