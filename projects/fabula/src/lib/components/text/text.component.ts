import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { css } from 'emotion';

// Styles
import TextStyles from '@fabula/core/theme/styles/Text';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'fab-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() color: string;
  @Input('inherit-color') inheritColor: boolean;
  @Input() size: string;
  @Input() weight: string;

  @ViewChild('component') component: ElementRef;

  aux;
  block;
  bold;
  flex;
  hasChildren;
  host;
  italic;
  medium;
  semibold;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    let props;
    let styles;

    this.host = this.elRef.nativeElement;

    // Get attributes
    this.aux = this.host.hasAttribute('aux');
    this.block = this.host.hasAttribute('block');
    this.bold = this.host.hasAttribute('bold');
    this.flex = this.host.hasAttribute('flex');
    this.italic = this.host.hasAttribute('italic');
    this.medium = this.host.hasAttribute('medium');
    this.semibold = this.host.hasAttribute('semibold');

    if (!this.weight && this.bold) {
      this.weight = '700';
    }

    if (!this.weight && this.semibold) {
      this.weight = '600';
    }

    if (!this.weight && this.medium) {
      this.weight = '500';
    }

    // Has children
    this.hasChildren = this.host.querySelector('.fab-text').children.length > 1;

    // Set props
    props = {
      aux: this.aux,
      block: this.block,
      bold: this.bold,
      color: this.color,
      flex: this.flex,
      italic: this.italic,
      size: this.size,
      weight: this.weight
    };

    styles = css(TextStyles({ framework: 'angular', props }));

    // Attach classes to host
    this.host.classList.add(styles);
  }

}
