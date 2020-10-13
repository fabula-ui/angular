import { Component, OnInit, ElementRef } from '@angular/core';

// Components
import { ModalSectionComponent } from '../modal-section/modal-section.component';

// Styles
import ModalBodyStyles from '@fabula/core/styles/components/modal-body/modal-body';

@Component({
  selector: 'fab-modal-body',
  templateUrl: './modal-body.component.html',
})
export class ModalBodyComponent extends ModalSectionComponent implements OnInit {

  constructor(public elRef: ElementRef) { 
    super(elRef);
  }

  ngOnInit() {
    this.additionalStyles = ModalBodyStyles
    super.ngOnInit();
  }
}
