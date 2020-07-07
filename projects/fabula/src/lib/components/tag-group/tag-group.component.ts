import { Component, ElementRef, OnInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import TagGroupStyles from '@fabula/core/styles/components/tag-group/tag-group';


@Component({
  selector: 'fab-tag-group',
  templateUrl: './tag-group.component.html',
})
export class TagGroupComponent implements OnInit {
  constructor(public elRef: ElementRef) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(TagGroupStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }

}
