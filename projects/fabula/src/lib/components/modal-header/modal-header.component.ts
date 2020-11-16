import { AfterViewChecked, Component, EventEmitter, ElementRef, Output, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { css } from 'emotion';

// Components
import { ModalSectionComponent } from '../modal-section/modal-section.component';

// Styles
import ModalHeaderStyles from '@fabula/core/styles/components/modal-header/modal-header';
import { CloseButtonComponent } from '../close-button/close-button.component';

@Component({
  selector: 'fab-modal-header',
  templateUrl: './modal-header.component.html'
})
export class ModalHeaderComponent extends ModalSectionComponent implements AfterViewChecked, AfterViewInit {
  @Output() clickedClose = new EventEmitter();

  @ViewChild(CloseButtonComponent) closeButton: CloseButtonComponent;

  init = false;

  constructor(
    public cdRef: ChangeDetectorRef,
    public elRef: ElementRef
  ) {
    super(elRef);
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  ngAfterViewInit() {
    // Init modal section
    super.ngOnInit();

    // Set and apply styles
    this.styles = ModalHeaderStyles;
    this.initStyles();

    this.cdRef.detectChanges();
    this.init = true;
  }

  closeModal() {
    this.clickedClose.emit(true);
  }
}
