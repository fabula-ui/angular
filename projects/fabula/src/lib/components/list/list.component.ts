import { Component, ElementRef, OnInit, Input, QueryList, ContentChildren, ViewChildren } from '@angular/core';
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
  @ContentChildren(ListItemComponent) dynamicChildren: QueryList<ListItemComponent>;
  @ViewChildren(ListItemComponent) chidren: QueryList<ListItemComponent>;

  @Input() color: string;
  @Input() divider = true;
  @Input() padding: any;
  @Input() props: any;
  @Input() striped = false;

  host;

  constructor(
    public elRef: ElementRef
  ) { }

  ngAfterViewInit() {
    this.chidren.forEach((item: ListItemComponent) => { this.handleItem(item); });
    this.dynamicChildren.forEach((item: ListItemComponent) => { this.handleItem(item); });
  }

  ngOnInit() {
    let styles;

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set and apply styles
    styles = css(ListStyles({
      framework: 'angular', props: {
        ...this,
        ...this.props
      }
    }));
    this.host.classList.add(styles);
  }

  // Methods
  handleItem(item) {
    if (this.color && !item.color) { item.color = this.color; }
    item.divider = this.divider;
    item.padding = this.padding;
    item.striped = this.striped;

    item.ngOnInit();
  }

}
