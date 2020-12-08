import { Component, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';

// Component
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import ListItemStyles from '@fabula/core/styles/components/list-item/list-item';

@Component({
  selector: 'fab-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent extends CommonComponent implements OnInit {
  @Input() button = false;
  @Input() color: string;
  @Input() divider: boolean;
  @Input() href: string;
  @Input() item: any = { button: false };
  @Input() label: string;
  @Input() padding: boolean;
  @Input() props: any;
  @Input() rel: string;
  @Input() striped = false;
  @Input() target = '_blank';

  @Output() clicked = new EventEmitter();

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngOnInit() {
    this.additionalProps = { ...this.item };

    this.styles = ListItemStyles;
    this.initStyles();
  }

  // Methods
  handleClick() {
    this.clicked.emit();
  }
}
