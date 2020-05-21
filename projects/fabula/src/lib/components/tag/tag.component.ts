import { Component, ElementRef, Input, OnInit, AfterViewInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import TagStyles from '@fabula/core/theme/styles/Tag';

@Component({
  selector: 'fab-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements AfterViewInit, OnInit {
  @Input() color: string;
  @Input() link: string;
  @Input() size: string;

  host;
  props;

  constructor(
    public elRef: ElementRef
  ) { }

  ngAfterViewInit() {
    let props;
    let styles;

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set props
    props = {
      anchor: !!this.host.querySelector('a'),
      button: !!this.host.querySelector('button'),
      color: this.color,
      size: this.size
    };

    // Set and apply styles
    styles = css(TagStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);
  }

  ngOnInit() {}

}
