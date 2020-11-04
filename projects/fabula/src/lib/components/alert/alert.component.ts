import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { css } from 'emotion';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Methods
import getTransitionDuration from '@fabula/core/styles/methods/misc/getTransitionDuration';

// Models
import { Icon } from '../../models/icon.model';

// Styles
import AlertStyles from '@fabula/core/styles/components/alert/alert';

@Component({
  selector: 'fab-alert',
  styleUrls: ['./alert.component.scss'],
  templateUrl: './alert.component.html'
})
export class AlertComponent extends CommonComponent implements OnInit {
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
  @Input() type: string;
  @Input() visible = true;

  @Output() close: EventEmitter<any> = new EventEmitter();

  closing;
  host;
  props;

  constructor(public elRef: ElementRef) { 
    super(elRef);
  }

  ngOnInit() {
    this.host = this.elRef.nativeElement;
    this.props = this;
    this.styles = AlertStyles;
    this.initStyles();
    
    if (this.type) { this.handleType(); }
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

  handleType() {
    switch (this.type) {
      case 'danger':
        this.icon = {
          color: 'danger',
          name: 'alert-triangle'
        };
        break;
      case 'success':
        this.icon = {
          color: 'success',
          name: 'check'
        };
        break;
      case 'warning':
        this.icon = {
          color: 'warning',
          name: 'alert-circle'
        };
        break;
      default:
        this.icon = {
          color: 'cold',
          name: 'info'
        };
    }
  }

  isObject(subject) {
    return typeof subject === 'object';
  }

}
