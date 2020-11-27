import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import InputGroupStyles from '@fabula/core/styles/components/input-group/input-group';

@Component({
  selector: 'fab-input-group',
  templateUrl: './input-group.component.html'
})
export class InputGroupComponent extends CommonComponent implements OnInit {
  @Input() layout = 'horizontal';

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngOnInit() {
    this.styles = InputGroupStyles;
    this.initStyles();
  }
}
