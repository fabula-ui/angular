import { Component, ElementRef, Input, ContentChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { css } from 'emotion';

// Components
import { ModalBodyComponent } from '../modal-body/modal-body.component';
import { ModalFooterComponent } from '../modal-footer/modal-footer.component';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';
import { ModalSectionComponent } from '../modal-section/modal-section.component';

// Services
import { ModalService } from '../../services/modal.service';

// Styles
import ModalStyles from '@fabula/core/styles/components/modal/modal';

@Component({
  selector: 'fab-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements AfterViewInit {
  @ContentChild(ModalBodyComponent) modalBody: ModalBodyComponent;
  @ContentChild(ModalFooterComponent) modalFooter: ModalFooterComponent;
  @ContentChild(ModalHeaderComponent) modalHeader: ModalHeaderComponent;
  @ContentChild(ModalSectionComponent) modalSection: ModalSectionComponent;

  @Input() color: string;
  @Input() glow = true;
  @Input() isOpen = true;
  @Input() size = 'lg';

  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() open: EventEmitter<any> = new EventEmitter();

  constructor(
    public elRef: ElementRef,
    private modalService: ModalService,
  ) { }

  ngAfterViewInit() {
    const host = this.elRef.nativeElement;
    let styles;

    if (this.modalBody) {
      this.modalBody.parentColor = this.color;
      this.modalBody.ngOnInit();
    }

    if (this.modalFooter) {
      this.modalFooter.parentColor = this.color;
      this.modalFooter.ngOnInit();
    }

    if (this.modalHeader) {
      this.modalHeader.clickedClose.subscribe(() => this.closeModal());
      this.modalHeader.parentColor = this.color;
      this.modalHeader.ngAfterViewInit();
    }

    if (this.modalSection) {
      this.modalSection.parentColor = this.color;
      this.modalSection.ngOnInit();
    }

    styles = css(ModalStyles({ framework: 'angular', props: this }));
    host.classList.add(styles);

    this.open.emit();
  }

  closeModal() {
    this.modalService.closeModal();
    this.close.emit();
  }
}
