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

  constructor(
    public elRef: ElementRef,
  ) { }

  ngOnInit() {}

  childViewInit() {
    const host = this.elRef.nativeElement;
    const styles = css(SegmentStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }

  handleClick() {
    if (this.name) { this.selectedSegment.emit(this.name); }
  }

  listen(events) {
    events.onChangeSegment.subscribe(segment => {
      this.active = segment === this.name;
    });
  }
}
