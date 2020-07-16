import { Component, EventEmitter, OnInit, Input, ElementRef, Output, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { css } from 'emotion';

// Components
import { ModalSectionComponent } from '../modal-section/modal-section.component';

// Styles
import ModalHeaderStyles from '@fabula/core/styles/components/modal-header/modal-header';
import { CloseButtonComponent } from '../close-button/close-button.component';

@Component({
  selector: 'fab-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.css']
})
export class ModalHeaderComponent extends ModalSectionComponent implements AfterViewInit {
  @Input() subtitle: string;
  @Input() title: string;
  @Output() clickedClose = new EventEmitter();
  @ViewChild(CloseButtonComponent) closeButton: CloseButtonComponent;

  init = false;

  constructor(
    public cdRef: ChangeDetectorRef,
    public elRef: ElementRef
  ) {
    super(elRef);
  }

  ngAfterViewInit() {
    const host = this.elRef.nativeElement;
    let styles;

    // Init modal section
    super.ngOnInit();

    // Set and apply styles
    styles = css(ModalHeaderStyles({ framework: 'angular', props: this }));
    host.classList.add(styles);

    this.cdRef.detectChanges();
    this.init = true;
  }

  closeModal() {
    this.clickedClose.emit(true);
  }

}
