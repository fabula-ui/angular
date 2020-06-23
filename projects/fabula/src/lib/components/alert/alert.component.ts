import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { css } from 'emotion';

// Styles
import AlertStyles from '@fabula/core/styles/components/alert/alert';

@Component({
  selector: 'fab-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
  @Input() clear = false;
  @Input() color: string;
  @Input() faded = false;
  @Input() glow = false;
  @Input() icon: any;
  @Input() invert: boolean;
  @Input() marker: string;
  @Input() outline = false;
  @Input() text: string;
  @Input() textColor: string;
  @Input() title: string;
  @Input() titleColor: string;

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

    // styles = css(AlertStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);

    this.props = props;
  }

  // Methods
  isObject(subject) {
    return typeof subject === 'object';
  }

}
