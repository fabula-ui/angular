import { Component, ElementRef, OnInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import ElementStyles from '@fabula/core/styles/components/element/element';

@Component({
  selector: 'fab-element',
  styleUrls: ['./element.component.scss'],
  templateUrl: './element.component.html'
})
export class ElementComponent extends CommonComponent implements OnInit {
  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngOnInit() {
    this.styles = ElementStyles;
    this.initStyles();
  }
}
