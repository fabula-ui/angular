import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { css } from 'emotion';

// Styles
import ListItemStyles from '@fabula/core/styles/components/list-item/list-item';

@Component({
  selector: 'fab-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() button = false;
  @Input() color: string;
  @Input() item: any = { button: false };
  @Input() props: any;

  host;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    let styles;

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set and apply styles
    styles = css(ListItemStyles({ framework: 'angular', props: {
      ...this,
      ...this.item,
      ...this.props
    } }));

    this.host.classList.add(styles);
  }

}
