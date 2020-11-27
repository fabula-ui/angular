import { Component, ElementRef, Input, OnInit, ContentChildren, QueryList, AfterViewInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';
import { TagComponent } from '../tag/tag.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import TagGroupStyles from '@fabula/core/styles/components/tag-group/tag-group';

@Component({
  selector: 'fab-tag-group',
  templateUrl: './tag-group.component.html',
})
export class TagGroupComponent extends CommonComponent implements AfterViewInit, OnInit {
  @ContentChildren(TagComponent) tagComponents: QueryList<TagComponent>;

  @Input() color: string;
  @Input() spacing: any;

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngAfterViewInit() {
    this.tagComponents.forEach((tag: TagComponent) => {
      if (this.color && !tag.color) { tag.color = this.color; }
      tag.ngAfterViewInit();
    });
  }

  ngOnInit() {
    this.styles = TagGroupStyles;
    this.initStyles();
  }
}
