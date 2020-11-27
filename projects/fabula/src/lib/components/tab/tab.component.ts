import { Component, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Components
import { SelectorComponent } from '../selector/selector.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import TabStyles from '@fabula/core/styles/components/tab/tab';

@Component({
  providers: [{ provide: SelectorComponent, useExisting: TabComponent }],
  selector: 'fab-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent extends SelectorComponent {
  @Input() type: string;

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  childViewInit() {
    const host = this.elRef.nativeElement;
    const styles = css(TabStyles({ framework: 'angular', props: this }));
    host.classList.add(styles);
  }
}
