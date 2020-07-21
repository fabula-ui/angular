import { Component, OnInit, ElementRef } from '@angular/core';

// Components
import { ModalSectionComponent } from '../modal-section/modal-section.component';

@Component({
  selector: 'fab-modal-body',
  templateUrl: './modal-body.component.html',
})
export class ModalBodyComponent extends ModalSectionComponent implements OnInit {

  constructor(public elRef: ElementRef) { 
    super(elRef);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
