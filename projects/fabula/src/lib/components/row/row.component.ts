import { Component, ElementRef, OnInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import RowStyles from '@fabula/core/styles/components/row/row';

@Component({
  selector: 'fab-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent extends CommonComponent implements OnInit {
  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngOnInit() {
    this.styles = RowStyles;
    this.initStyles();
  }
}
