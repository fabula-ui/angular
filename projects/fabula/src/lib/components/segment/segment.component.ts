import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { css } from 'emotion';

// Styles
import SegmentStyles from '@fabula/core/theme/styles/Segment';

@Component({
  selector: 'fab-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {
  @Input() active = false;
  @Input() activeColor: string;
  @Input() activeFillColor: string;
  @Input() activeTextColor: string;
  @Input() color: string;
  @Input() expand: boolean;
  @Input() faded: boolean;
  @Input() href: string;
  @Input() invert: boolean;
  @Input() link: string;
  @Input() name: string;
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
    if (this.active && this.scope && this.target) { this.toggleContent(); }

    // Set and apply styles
    styles = css(SegmentStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);
  }

  handleClick() {
    if (this.name) { this.selectedSegment.emit(this.name); }
    if (this.scope && this.target) { this.toggleContent(); }
  }

  listen(events) {
    events.onChangeSegment.subscribe(segment => {
      this.active = segment === this.name;
    });
  }

  toggleContent() {
    const allOtherContent = document.querySelectorAll(`[data-scope='${this.scope}']:not(${this.target})`);
    const targetContent = document.querySelector(`${this.target}[data-scope='${this.scope}']`);

    allOtherContent.forEach(other => {
      other.setAttribute('data-visible', 'false');
    });

    targetContent.setAttribute('data-visible', 'true');
  }

}
