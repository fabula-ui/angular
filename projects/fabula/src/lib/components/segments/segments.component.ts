import { Component, OnInit, ElementRef, Input, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { css } from 'emotion';

// Components
import { SegmentComponent } from '../segment/segment.component';

// Styles
import SegmentsStyles from '@fabula/core/theme/styles/Segments';

@Component({
  selector: 'fab-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.css']
})
export class SegmentsComponent implements OnInit {
  @ContentChildren(SegmentComponent) segmentComponents: QueryList<SegmentComponent>;

  @Input() activeColor: string;
  @Input('active-fill-color') activeFillColor: string;
  @Input('active-text-color') activeTextColor: string;
  @Input() color: string;
  @Input() expand: boolean;
  @Input() scope: string;

  @Output() changeSegment = new EventEmitter();

  activeSegment;
  host;
  props;

  constructor(
    public elRef: ElementRef,
  ) { }

  ngAfterViewInit() {
    this.segmentComponents.forEach((child: SegmentComponent) => {
      child.activeColor = this.props.activeColor;
      child.activeFillColor = this.props.activeFillColor;
      child.activeTextColor = this.props.activeTextColor;
      child.color = this.props.color;
      child.expand = this.props.expand;
      child.faded = this.props.faded;
      child.invert = this.props.invert;
      child.rounded = this.props.rounded;
      child.scope = this.scope;
      child.stacked = this.props.stacked;

      child.selectedSegment.subscribe(tab => this.setActiveSegment(tab));
      child.childViewInit();
      child.listen({
        onChangeSegment: this.changeSegment
      });
    });
  }

  ngOnInit() {
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
      faded: this.host.hasAttribute('faded'),
      invert: this.host.hasAttribute('invert'),
      rounded: this.host.hasAttribute('rounded'),
      stacked: this.host.hasAttribute('stacked'),
    };

    // Set and apply styles
    styles = css(SegmentsStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);

    // Pass props to component
    this.props = props;
  }

  setActiveSegment(segment) {
    this.activeSegment = segment;
    this.changeSegment.emit(segment);
  }

}
