import { Component, OnInit, ElementRef, Input, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';
import { SegmentComponent } from '../segment/segment.component';

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
    public themeService: ThemeService
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
    this.host = this.elRef.nativeElement;
    this.props = {
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

    this.themeService.attachClasses(this.host, 'segments', this.props);
  }

  setActiveSegment(segment) {
    this.activeSegment = segment;
    this.changeSegment.emit(segment);
  }

}
