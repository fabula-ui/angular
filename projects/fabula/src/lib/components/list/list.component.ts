import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  OnInit,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';
import { ListItemComponent } from '../list-item/list-item.component';

// Styles
import ListStyles from '@fabula/core/styles/components/list/list';

@Component({
  selector: 'fab-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends CommonComponent implements OnInit {
  @ContentChildren(ListItemComponent) contentItems: QueryList<ListItemComponent>;
  @ViewChildren(ListItemComponent) viewItems: QueryList<ListItemComponent>;

  @Input() color: string;
  @Input() divider = true;
  @Input() padding = false;
  @Input() props: any;
  @Input() striped = false;

  @Output() clickItem: EventEmitter<any> = new EventEmitter();

  constructor(public elRef: ElementRef) { super(elRef) }

  ngAfterViewInit() {
    this.contentItems.forEach((item: ListItemComponent) => { this.handleItem(item); });
    this.viewItems.forEach((item: ListItemComponent) => { this.handleItem(item); });
  }

  ngOnInit() {
    this.styles = ListStyles;
    this.initStyles();
  }

  // Methods
  handleItem(item) {
    if (this.color && !item.color) { item.color = this.color; }

    item.clicked.subscribe(() => {
      this.clickItem.emit();
    });

    item.divider = this.divider;
    item.padding = this.padding;
    item.striped = this.striped;

    item.ngOnInit();
  }
}
