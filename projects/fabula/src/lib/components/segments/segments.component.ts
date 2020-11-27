import { Component, OnInit, ElementRef, Input, ContentChildren, QueryList, Output, EventEmitter, AfterViewInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';
import { SegmentComponent } from '../segment/segment.component';
import { SelectorComponent } from '../selector/selector.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import SegmentsStyles from '@fabula/core/styles/components/segments/segments';

@Component({
  selector: 'fab-segments',
  styleUrls: ['./segments.component.scss'],
  templateUrl: './segments.component.html'
})
export class SegmentsComponent extends CommonComponent implements AfterViewInit, OnInit {
  @ContentChildren(SelectorComponent) childComponents: QueryList<SelectorComponent>;

  @Input() active: string;
  @Input() activeColor: string;
  @Input() activeTextColor: string;
  @Input() border = true;
  @Input() clear = false;
  @Input() color: string;
  @Input() expand = false;
  @Input() faded = false;
  @Input() inactiveColor: string;
  @Input() inactiveTextColor: string;
  @Input() invert = false;
  @Input() layout = 'horizontal';
  @Input() outline = false;
  @Input() rounded = false;
  @Input() scope: string;
  @Input() stacked = false;
  @Input() type: string;

  @Output() changeSegment = new EventEmitter();

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngAfterViewInit() {
    this.childComponents.forEach((child: SegmentComponent) => {
      child.activeColor = this.activeColor;
      child.activeTextColor = this.activeTextColor;
      child.color = this.color;
      child.clear = this.clear;
      child.expand = this.expand;
      child.faded = this.faded;
      child.inactiveColor = this.inactiveColor;
      child.inactiveTextColor = this.inactiveTextColor;
      child.invert = this.invert;
      child.layout = this.layout;
      child.outline = this.outline;
      child.rounded = this.rounded;
      child.scope = this.scope;
      child.stacked = this.stacked;
      child.type = this.type;

      child.selectedSegment.subscribe(tab => this.handleActiveSegment(tab));

      child.childViewInit();
      child.listen({
        onChangeSelector: this.changeSegment
      });

      if (this.active) { this.changeSegment.emit(this.active); }
    });

    if (this.active && this.scope) { this.toggleContent(); }
  }

  ngOnInit() {
    this.styles = SegmentsStyles;
    this.initStyles();
  }

  handleActiveSegment(segment) {
    this.active = segment;
    this.changeSegment.emit(segment);
    if (segment && this.scope) { this.toggleContent(); }
  }

  toggleContent() {
    const allOtherContent =
      document.querySelectorAll(`.fab-content[data-scope='${this.scope}']:not([data-name='${this.active}'])`);
    const targetContent =
      document.querySelector(`.fab-content[data-scope='${this.scope}'][data-name='${this.active}']`);

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
