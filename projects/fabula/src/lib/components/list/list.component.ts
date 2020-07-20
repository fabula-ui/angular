import { Component, ElementRef, OnInit, Input, QueryList, ContentChildren, ViewChildren, Output, EventEmitter } from '@angular/core';
import { css } from 'emotion';

// Styles
import ListStyles from '@fabula/core/styles/components/list/list';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'fab-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ContentChildren(ListItemComponent) contentItems: QueryList<ListItemComponent>;
  @ViewChildren(ListItemComponent) viewItems: QueryList<ListItemComponent>;

  @Input() color: string;
  @Input() divider = true;
  @Input() padding = false;
  @Input() props: any;
  @Input() striped = false;

  @Output() clickItem: EventEmitter<any> = new EventEmitter();

  constructor(public elRef: ElementRef) { }

  ngAfterViewInit() {
    this.contentItems.forEach((item: ListItemComponent) => { this.handleItem(item); });
    this.viewItems.forEach((item: ListItemComponent) => { this.handleItem(item); });
  }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(ListStyles({
      framework: 'angular', props: {
        ...this,
        ...this.props
      }
    }));
    host.classList.add(styles);
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
