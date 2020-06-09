import { Component, OnInit, Input, ElementRef, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import { css } from 'emotion';

// Components
import { IconComponent } from '../icon/icon.component';

// Styles
import AlertStyles from '@fabula/core/theme/styles/Alert';

@Component({
  selector: 'fab-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent implements AfterViewInit, OnInit {
  @Input() color: string;
  @Input() glow = false;
  @Input() icon: any;
  @Input() marker: string;
  @Input() text: string;
  @Input() title: string;

  host;
  props;

  constructor(
    public elRef: ElementRef
  ) {}

  ngAfterViewInit() {
    // this.iconComponents.forEach((icon: IconComponent) => {
    //   icon.refreshStyles({
    //     faded: this.props.faded,
    //     fillColor: this.props.color
    //   });
    // });
  }

  ngOnInit() {
    let props;
    let styles;

    this.host = this.elRef.nativeElement;

    props = {
      color: this.color,
      faded: this.host.hasAttribute('faded'),
      glow: this.glow,
      marker: this.marker
    };

    styles = css(AlertStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);

    this.props = props;
  }

  // Methods
  isObject(subject) {
    console.log(subject, typeof subject);
    return typeof subject === 'object';
  }

}
