import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import ModalSectionStyles from '@fabula/core/theme/styles/ModalSection';

@Component({
  selector: 'fab-modal-section',
  templateUrl: './modal-section.component.html',
  styleUrls: ['./modal-section.component.css']
})
export class ModalSectionComponent implements OnInit {
  @Input() color: string;
  @Input() divider: string;
  @Input('divider-color') dividerColor: string;

  host;
  
  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    let props;
    let styles;

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set props
    props = {
      color: this.color,
      divider: this.divider,
      dividerColor: this.dividerColor
    };

    // Set and apply styles
    styles = css(ModalSectionStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);
  }

}
