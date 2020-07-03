import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import ListStyles from '@fabula/core/styles/components/list/list';

@Component({
  selector: 'fab-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() color: string;
  @Input() divider = true;
  @Input() padding: any;
  @Input() props: any;
  @Input() striped = false;

  host;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    let styles;

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set and apply styles
    styles = css(ListStyles({ framework: 'angular', props: {
      ...this,
      ...this.props
    } }));
    this.host.classList.add(styles);
  }

}
