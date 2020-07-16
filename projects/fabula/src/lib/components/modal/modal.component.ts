import { Component, OnInit, ElementRef, Renderer2, Input, ContentChild, AfterViewInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { css } from 'emotion';

// Components
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

// Services
import { ModalService } from '../../services/modal.service';

// Styles
import ModalStyles from '@fabula/core/styles/components/modal/modal';

@Component({
  selector: 'fab-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements AfterViewInit, OnInit {
  @ContentChild(ModalHeaderComponent) modalHeader: ModalHeaderComponent;

  @Input() glow = true;
  @Input() open = true;

  @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  appended = false;
  host;
  init;
  isClosing = false;

  constructor(
    public elRef: ElementRef,
    private modalService: ModalService,
  ) {}

  ngAfterViewInit() {
    if (this.modalHeader) { this.modalHeader.clickedClose.subscribe(() => this.closeModal()); }
    this.init = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.init && !this.open) {
      this.handleClose();
    }
  }

  ngOnInit() {
    let props;
    let styles;

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set props
    props = {
      glow: this.glow
    };

    // Set and apply styles
    styles = css(ModalStyles({ framework: 'angular', props: this }));
    this.host.classList.add(styles);
  }

  closeModal() {
    this.modalService.closeModal();
    this.isClosing = true;
    // this.emitClose();
  }

  emitClose() {
    setTimeout(() => {
      this.isClosing = false;
      this.open = false;
      this.openChange.emit(this.open);
    }, 250);
  }

  handleClose() {
    if (!this.isClosing) {
      console.log('don\'t close, do animation first');
      this.open = true;
      this.closeModal();
    } else {
      
    }
  }

}
