import { Component, OnInit, Input, ElementRef, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import { css } from 'emotion';

// Components
import { IconComponent } from '../icon/icon.component';

// Styles
import AlertStyles from '@fabula/core/theme/styles/Alert';

@Component({
  selector: 'fab-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements AfterViewInit, OnInit {
  @ContentChildren(IconComponent) iconComponents: QueryList<IconComponent>;
  
  @Input() color: string;
  @Input() marker: string;
  @Input() text: string;
  @Input() title: string;

  host;
  props;

  constructor(
    public elRef: ElementRef
  ) { }

  ngAfterViewInit() {
    this.iconComponents.forEach((icon: IconComponent) => {
      icon.refreshStyles({
        faded: this.props.faded,
        fillColor: this.props.color
      });
    });
  }

  ngOnInit() {
    let props;

    this.host = this.elRef.nativeElement;

    props = {
      color: this.color,
      faded: this.host.hasAttribute('faded'),
      marker: this.marker
    };

    const styles = css(AlertStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);

    this.props = props;
  }

}
