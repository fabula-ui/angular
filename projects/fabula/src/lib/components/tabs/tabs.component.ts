import { Component, OnInit, ElementRef, Input, ContentChildren, QueryList, AfterViewInit, Output, EventEmitter, forwardRef } from '@angular/core';
import { css } from 'emotion';

// Components
import { SegmentsComponent } from '../segments/segments.component';

// Styles
import TabsStyles from '@fabula/core/styles/components/tabs/tabs';

@Component({
  selector: 'fab-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent extends SegmentsComponent implements AfterViewInit, OnInit {
  constructor(public elRef: ElementRef) {
    super(elRef);
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(TabsStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }
}
