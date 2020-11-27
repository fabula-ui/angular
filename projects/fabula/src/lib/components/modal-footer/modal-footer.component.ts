import { Component, OnInit, ElementRef } from '@angular/core';

// Components
import { ModalSectionComponent } from '../modal-section/modal-section.component';

// Services
import { FabulaService } from '../../services/fabula.service';

@Component({
  selector: 'fab-modal-footer',
  templateUrl: './modal-footer.component.html',
})
export class ModalFooterComponent extends ModalSectionComponent implements OnInit {
  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngOnInit() {
    super.ngOnInit();
  }
}
