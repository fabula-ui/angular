import { Component, ElementRef, OnInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import TagGroupStyles from '@fabula/core/theme/styles/TagGroup';


@Component({
  selector: 'fab-tag-group',
  templateUrl: './tag-group.component.html',
  styleUrls: ['./tag-group.component.css']
})
export class TagGroupComponent implements OnInit {
  host;
  props;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    let props;
    let styles;

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set props
    props = {}

    // Set and apply styles
    styles = css(TagGroupStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);
  }

}
