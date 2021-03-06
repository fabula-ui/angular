import { Component, OnInit, ElementRef, Input, ContentChildren, QueryList, AfterViewInit, Output, EventEmitter, forwardRef } from '@angular/core';
import { css } from 'emotion';

// Components
import { SegmentsComponent } from '../segments/segments.component';
import { TabComponent } from '../tab/tab.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import TabsStyles from '@fabula/core/styles/components/tabs/tabs';

@Component({
  selector: 'fab-tabs',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html'
})
export class TabsComponent extends SegmentsComponent implements AfterViewInit, OnInit {
  @ContentChildren(TabComponent) tabComponents: QueryList<TabComponent>;
  @Input() alignment: string;
  @Input() props: any;

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngAfterViewInit() {
    super.ngAfterViewInit();

    this.tabComponents.forEach((child: TabComponent) => {
      if (!child.type) { child.type = this.type; }
    });
  }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(TabsStyles({
      framework: 'angular', props: {
        ...this,
        ...this.props
      }
    }));

    host.classList.add(styles);
  }
}
