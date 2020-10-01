import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { css } from 'emotion';

// Styles
import TextStyles from '@fabula/core/styles/components/text/text';

@Component({
  selector: 'fab-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() aux: boolean;
  @Input() color: string;
  @Input() inline = false;
  @Input() props: any;
  @Input() size: string;
  @Input() strong: boolean;
  @Input() weight: string;
  @Input() wrap = true;

  @ViewChild('component') component: ElementRef;

  block;
  bold;
  flex;
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
    this.block = this.host.hasAttribute('block');
    this.bold = this.host.hasAttribute('bold');
    this.flex = this.host.hasAttribute('flex');
    this.inline = this.host.hasAttribute('inline');
    this.italic = this.host.hasAttribute('italic');
    this.medium = this.host.hasAttribute('medium');
    this.semibold = this.host.hasAttribute('semibold');

    if (!this.weight && (this.bold || this.strong)) {
      this.weight = '700';
    }

    if (!this.weight && this.semibold) {
      this.weight = '600';
    }

    if (!this.weight && this.medium) {
      this.weight = '500';
    }

    // Set props
    props = {
      aux: this.aux,
      block: this.block,
      bold: this.bold,
      color: this.color,
      flex: this.flex,
      inline: this.inline,
      italic: this.italic,
      size: this.size,
      weight: this.weight,
      wrap: this.wrap,
      ...this.props
    };

    styles = css(TextStyles({
      framework: 'angular', props: {
        ...props,
        ...this
      }
    }));

    // Attach classes to host
    this.host.classList.add(styles);
  }

}
