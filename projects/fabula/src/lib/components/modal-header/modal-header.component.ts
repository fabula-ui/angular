import { Component, EventEmitter, OnInit, Input, ElementRef, Output } from '@angular/core';
import { css } from 'emotion';

// Components
import { ModalSectionComponent } from '../modal-section/modal-section.component';

// Styles
import ModalHeaderStyles from '@fabula/core/theme/styles/ModalHeader';

@Component({
  selector: 'fab-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.css']
})
export class ModalHeaderComponent extends ModalSectionComponent implements OnInit {
  @Input() subtitle: string;
  @Input() title: string;

  @Output() clickedClose = new EventEmitter();

  constructor(
    public elRef: ElementRef
  ) {
    super(elRef);
  }

  ngOnInit() {
    let props;
    let styles;

    // Init modal section
    super.ngOnInit();

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set props
    props = {};

    // Set and apply styles
    styles = css(ModalHeaderStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);
  }

  closeModal() {
    this.clickedClose.emit(true);
  }

}
