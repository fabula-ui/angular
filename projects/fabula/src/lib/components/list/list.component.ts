import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import ListStyles from '@fabula/core/theme/styles/List';

@Component({
  selector: 'fab-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() color: string;
  @Input() padding: any;
  @Input() striped = false;

  host;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    let props;
    let styles;

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set props
    props = {
      color: this.color,
      padding: this.padding,
      striped: this.striped
    };

    // Set and apply styles
    styles = css(ListStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);
  }

}
