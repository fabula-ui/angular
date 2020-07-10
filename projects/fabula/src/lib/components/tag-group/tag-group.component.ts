import { Component, ElementRef, Input, OnInit, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { css } from 'emotion';

// Components
import { TagComponent } from '../tag/tag.component';

// Styles
import TagGroupStyles from '@fabula/core/styles/components/tag-group/tag-group';

@Component({
  selector: 'fab-tag-group',
  templateUrl: './tag-group.component.html',
})
export class TagGroupComponent implements AfterViewInit, OnInit {
  @ContentChildren(TagComponent) tagComponents: QueryList<TagComponent>;

  @Input() color: string;
  @Input() spacing: any;

  constructor(public elRef: ElementRef) { }

  ngAfterViewInit() {
    this.tagComponents.forEach((tag: TagComponent) => {
      if (this.color && !tag.color) { tag.color = this.color; }

      tag.ngAfterViewInit();
    });
  }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(TagGroupStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }

}
