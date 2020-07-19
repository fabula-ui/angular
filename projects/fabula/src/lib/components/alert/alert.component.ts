import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { css } from 'emotion';

// Methods
import getTransitionDuration from '@fabula/core/styles/methods/misc/getTransitionDuration';

// Models
import { Icon } from '../../models/icon.model';

// Styles
import AlertStyles from '@fabula/core/styles/components/alert/alert';

@Component({
  selector: 'fab-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
  @Input() border = true;
  @Input() borderColor: string;
  @Input() clear = false;
  @Input() closeButton = false;
  @Input() color: string;
  @Input() faded = false;
  @Input() glow = false;
  @Input() icon: Icon;
  @Input() invert: boolean;
  @Input() marker: string;
  @Input() outline = false;
  @Input() text: string;
  @Input() textColor: string;
  @Input() title: string;
  @Input() titleColor: string;
  @Input() visible = true;

  @Output() close: EventEmitter<any> = new EventEmitter();

  closing;
  host;
  props;

  constructor(public elRef: ElementRef) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(AlertStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
    this.host = host;
    this.props = this;
  }

  // Methods
  closeAlert() {
    const transitionDuration = getTransitionDuration(this.host.querySelector('.fab-alert'));

    this.closing = true;

    setTimeout(() => {
      this.close.emit();

      this.closing = false;
      this.visible = false;
    }, transitionDuration + 1);
  }

  isObject(subject) {
    return typeof subject === 'object';
  }

}
