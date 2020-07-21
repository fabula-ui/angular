import { Component, OnInit, ElementRef } from '@angular/core';

// Components
import { ModalSectionComponent } from '../modal-section/modal-section.component';

@Component({
  selector: 'fab-modal-footer',
  templateUrl: './modal-footer.component.html',
})
export class ModalFooterComponent extends ModalSectionComponent implements OnInit {
  constructor(public elRef: ElementRef) {
    super(elRef);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
