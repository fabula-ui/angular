import { Component, OnInit, ElementRef, Input, ContentChildren, QueryList, Output, EventEmitter, AfterViewInit, forwardRef } from '@angular/core';
import { css } from 'emotion';

// Components
import { SegmentComponent } from '../segment/segment.component';

// Styles
import SegmentsStyles from '@fabula/core/styles/components/segments/segments';
import { SelectorComponent } from '../selector/selector.component';

@Component({
  selector: 'fab-segments',
  templateUrl: './segments.component.html'
})
export class SegmentsComponent implements AfterViewInit, OnInit {
  @ContentChildren(SelectorComponent) childComponents: QueryList<SelectorComponent>;

  @Input() activeColor: string;
  @Input() activeFillColor: string;
  @Input() activeSegment: string;
  @Input() activeTextColor: string;
  @Input() clear = false;
  @Input() color: string;
  @Input() expand = false;
  @Input() faded = false;
  @Input() inactiveFillColor: string;
  @Input() inactiveTextColor: string;
  @Input() invert = false;
  @Input() outline = false;
  @Input() rounded = false;
  @Input() scope: string;
  @Input() stacked = false;

  @Output() changeSegment = new EventEmitter();

  host;

  constructor(
    public elRef: ElementRef,
  ) { }

  ngAfterViewInit() {
    this.childComponents.forEach((child: SegmentComponent) => {
      child.activeColor = this.activeColor;
      child.activeFillColor = this.activeFillColor;
      child.activeTextColor = this.activeTextColor;
      child.color = this.color;
      child.clear = this.clear;
      child.expand = this.expand;
      child.faded = this.faded;
      child.inactiveFillColor = this.inactiveFillColor;
      child.inactiveTextColor = this.inactiveTextColor;
      child.invert = this.invert;
      child.outline = this.outline;
      child.rounded = this.rounded;
      child.scope = this.scope;
      child.stacked = this.stacked;

      child.selectedSegment.subscribe(tab => this.handleActiveSegment(tab));
      child.childViewInit();
      child.listen({
        onChangeSegment: this.changeSegment
      });

      if (this.activeSegment) { this.changeSegment.emit(this.activeSegment); }
    });

    if (this.activeSegment && this.scope) { this.toggleContent(); }
  }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(SegmentsStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }

  handleActiveSegment(segment) {
    this.activeSegment = segment;
    this.changeSegment.emit(segment);
    if (segment && this.scope) { this.toggleContent(); }
  }

  toggleContent() {
    const allOtherContent =
      document.querySelectorAll(`.fab-segment-content[data-scope='${this.scope}']:not([data-name='${this.activeSegment}'])`);
    const targetContent =
      document.querySelector(`.fab-segment-content[data-scope='${this.scope}'][data-name='${this.activeSegment}']`);

    if (allOtherContent.length) {
      allOtherContent.forEach(other => {
        other.setAttribute('data-active', 'false');
      });
    }

    if (targetContent) {
      targetContent.setAttribute('data-active', 'true');
    }
  }
}
