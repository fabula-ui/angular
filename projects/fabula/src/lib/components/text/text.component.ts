import { Component, ElementRef, Input, OnInit } from '@angular/core';

// Components
import { CommonComponent } from '../common-component/common-component.component';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import TextStyles from '@fabula/core/styles/components/text/text';

@Component({
  selector: 'fab-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent extends CommonComponent implements OnInit {
  @Input() aux: boolean;
  @Input() color: string;
  @Input() content: string;
  @Input() inline = false;
  @Input() props: any;
  @Input() size: string;
  @Input() strong: boolean;
  @Input() weight: any;
  @Input() wrap = true;

  bold;
  italic;
  medium;
  semibold;

  constructor(
    public elRef: ElementRef,
    public fabulaService: FabulaService
  ) { super(elRef, fabulaService); }

  ngOnInit() {
    const host = this.elRef.nativeElement;

    // Get attributes
    this.bold = host.hasAttribute('bold');
    this.italic = host.hasAttribute('italic');
    this.medium = host.hasAttribute('medium');
    this.semibold = host.hasAttribute('semibold');

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
    this.props = {
      aux: this.aux,
      bold: this.bold,
      italic: this.italic,
    };

    this.styles = TextStyles;
    this.initStyles();
  }

}
