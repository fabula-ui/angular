import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { css } from 'emotion';

// Styles
import SegmentStyles from '@fabula/core/theme/styles/Segment';

@Component({
  selector: 'fab-segment',
  templateUrl: './segment.component.html'
})
export class SegmentComponent implements OnInit {
  @Input() active = false;
  @Input() activeColor: string;
  @Input() activeFillColor: string;
  @Input() activeTextColor: string;
  @Input() clear: boolean;
  @Input() color: string;
  @Input() expand: boolean;
  @Input() faded: boolean;
  @Input() href: string;
  @Input() inactiveFillColor: string;
  @Input() inactiveTextColor: string;
  @Input() invert: boolean;
  @Input() link: string;
  @Input() name: string;
  @Input() outline: boolean;
  @Input() rounded: boolean;
  @Input() scope: string;
  @Input() stacked: boolean;
  @Input() target: string;

  @Output() selectedSegment = new EventEmitter();

  host;
  props;

  constructor(
    public elRef: ElementRef,
  ) { }

  ngOnInit() {}

  childViewInit() {
    let props;
    let styles;

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set props
    props = {
      activeColor: this.activeColor,
      activeFillColor: this.activeFillColor,
      activeTextColor: this.activeTextColor,
      color: this.color,
      expand: this.expand,
      faded: this.faded,
      invert: this.invert,
      rounded: this.rounded,
      stacked: this.stacked
    };

    // Toggle content
    // if (this.active && this.scope) { this.toggleContent(); }

    // Set and apply styles
    styles = css(SegmentStyles({ framework: 'angular', props: this }));
    this.host.classList.add(styles);
  }

  handleClick() {
    if (this.name) { this.selectedSegment.emit(this.name); }
    // if (this.name && this.scope) { this.toggleContent(); }
  }

  listen(events) {
    events.onChangeSegment.subscribe(segment => {
      this.active = segment === this.name;
    });
  }
}
