import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Component
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import ColumnStyles from '@fabula/core/styles/components/column/column';

@Component({
  selector: 'fab-column, fab-col',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent extends CommonComponent implements OnInit {
  @Input() col: string;

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngOnInit() {
    this.styles = ColumnStyles;
    this.initStyles();
  }
}
