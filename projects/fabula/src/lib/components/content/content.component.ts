import { Component, OnInit, ElementRef, Input } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import ContentStyles from '@fabula/core/styles/components/content/content';

@Component({
  selector: 'fab-content',
  templateUrl: './content.component.html',
})
export class ContentComponent extends CommonComponent implements OnInit {
  @Input() active = false;
  @Input() name: string;
  @Input() scope: string;

  contentClass: string;

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngOnInit() {
    this.styles = ContentStyles;
    this.initStyles();
  }
}
