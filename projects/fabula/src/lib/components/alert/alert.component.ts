import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { css } from 'emotion';

// Styles
import AlertStyles from '@fabula/core/styles/components/alert/alert';

@Component({
  selector: 'fab-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
  @Input() border: string;
  @Input() clear = false;
  @Input() closeButton = false;
  @Input() color: string;
  @Input() faded = false;
  @Input() glow = false;
  @Input() icon: any;
  @Input() invert: boolean;
  @Input() marker: string;
  @Input() outline = false;
  @Input() text: any;
  @Input() textColor: string;
  @Input() title: any;
  @Input() titleColor: string;

  @Output() close: EventEmitter<any> = new EventEmitter();

  host;
  props;

  constructor(
    public elRef: ElementRef
  ) {}

  ngOnInit() {
    let props;
    let styles;

    this.host = this.elRef.nativeElement;

    props = {
      border: this.border,
      clear: this.clear,
      color: this.color,
      faded: this.faded,
      glow: this.glow,
      invert: this.invert,
      marker: this.marker,
      outline: this.outline,
      textColor: this.textColor,
      titleColor: this.titleColor
    };

    styles = css(AlertStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);

    this.props = props;
  }

  // Methods
  handleClose() {
    this.close.emit();
  }

  isObject(subject) {
    return typeof subject === 'object';
  }

}
