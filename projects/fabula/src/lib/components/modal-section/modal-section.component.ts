import { Component, OnInit, ElementRef, Input } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

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

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngOnInit() {
    this.styles = ModalSectionStyles;
    this.initStyles();
  }
}
