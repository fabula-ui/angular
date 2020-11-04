import { Component, OnInit, ElementRef, Input } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import ModalSectionStyles from '@fabula/core/styles/components/modal-section/modal-section';

@Component({
  selector: 'fab-modal-section',
  templateUrl: './modal-section.component.html'
})
export class ModalSectionComponent extends CommonComponent implements OnInit {
  @Input() adaptColor: boolean;
  @Input() color: string;
  @Input() darken: boolean;
  @Input() divider: string;
  @Input() dividerColor: string;
  @Input() lighten: boolean;
  @Input() padding = true;
  @Input() parentColor: string;
  
  constructor(public elRef: ElementRef) { super(elRef) }

  ngOnInit() {
    this.styles = ModalSectionStyles;
    this.initStyles();
  }
}
