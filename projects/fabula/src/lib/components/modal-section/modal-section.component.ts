import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';

@Component({
  selector: 'fab-modal-section',
  templateUrl: './modal-section.component.html'
})
export class ModalSectionComponent implements OnInit {
  @Input() adaptColor: boolean;
  @Input() color: string;
  @Input() divider: string;
  @Input('dividerColor') dividerColor: string;
  @Input() parentColor: string;
  
  constructor(public elRef: ElementRef) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(ModalSectionStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }

}
