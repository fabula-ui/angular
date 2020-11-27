import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import HeadingStyles from '@fabula/core/styles/components/heading/heading';

@Component({
  selector: 'fab-heading',
  styleUrls: ['./heading.component.scss'],
  templateUrl: './heading.component.html'
})
export class HeadingComponent extends CommonComponent implements OnInit {
  @Input() color = '';
  @Input() level = 1;
  @Input() weight: any;

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngOnInit() {
    this.styles = HeadingStyles;
    this.initStyles();
  }
}
