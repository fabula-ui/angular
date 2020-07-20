import { Component, ElementRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Input() divider: boolean;
  @Input() item: any = { button: false };
  @Input() link: string;
  @Input() padding: boolean;
  @Input() props: any;
  @Input() target = '_blank';

  @Output() clicked = new EventEmitter();

  constructor(public elRef: ElementRef) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(ListItemStyles({
      framework: 'angular', props: {
        ...this,
        ...this.item,
        ...this.props,
      }
    }));

    host.classList.add(styles);
  }

  // Methods
  handleClick() {
    this.clicked.emit();
  }
}
