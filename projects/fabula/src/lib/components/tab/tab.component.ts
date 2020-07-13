import { Component, ElementRef, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import TabStyles from '@fabula/core/theme/styles/Tab';
import { SegmentComponent } from '../segment/segment.component';
import { SelectorComponent } from '../selector/selector.component';

@Component({
  providers: [{ provide: SelectorComponent, useExisting: TabComponent }],
  selector: 'fab-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent extends SelectorComponent {
  @Input() type: string;
  
  constructor(
    public elRef: ElementRef,
  ) {
    super(elRef);
  }

  childViewInit() {
    const host = this.elRef.nativeElement;
    const styles = css(TabStyles({ framework: 'angular', props: this }));
    host.classList.add(styles);
  }

}
