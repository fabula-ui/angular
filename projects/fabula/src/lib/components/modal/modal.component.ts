import { Component, OnInit, ElementRef, Renderer2, Input, ContentChild, AfterViewInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { css } from 'emotion';

// Components
import { ModalHeaderComponent } from '../modal-header/modal-header.component';

// Styles
import ModalStyles from '@fabula/core/theme/styles/Modal';

@Component({
  selector: 'fab-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit, OnInit {
  @ContentChild(ModalHeaderComponent) modalHeader: ModalHeaderComponent;

  @Input() glow = true;
  @Input() open = false;
 
  @Output() openChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  appended = false;
  host;
  init;
  isClosing;

  constructor(
    public elRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit() {
    this.modalHeader.clickedClose.subscribe(tab => this.closeModal());
    this.init = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.init &&!this.open) {
      this.handleClose();
    }
  }

  ngOnInit() {
    let props;
    let styles;

    // Get host element
    this.host = this.elRef.nativeElement;

    // Attach to body
    // this.renderer.appendChild(document.body, this.host);

    // Set props
    props = {
      glow: this.glow
    };

    // Set and apply styles
    styles = css(ModalStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);
  }

  closeModal() {
    this.isClosing = true;
    this.emitClose();
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
