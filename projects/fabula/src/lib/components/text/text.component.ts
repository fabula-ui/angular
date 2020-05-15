import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

// Services
import { ThemeService } from '../../services/theme.service';

@Component({
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
    public elRef: ElementRef,
    public themeService: ThemeService
  ) { }

  ngOnInit() {
    let props;

    this.host = this.elRef.nativeElement;

    // Get attributes
    this.aux = this.host.hasAttribute('aux');
    this.block = this.host.hasAttribute('block');
    this.bold = this.host.hasAttribute('bold');
    this.flex = this.host.hasAttribute('flex');
    this.italic = this.host.hasAttribute('italic');
    this.medium = this.host.hasAttribute('medium');
    this.semibold = this.host.hasAttribute('semibold');

    if (!this.color && this.aux) {
      this.color = 'aux';
    }

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
      block: this.block,
      bold: this.bold,
      color: this.color,
      flex: this.flex,
      italic: this.italic,
      size: this.size,
      weight: this.weight
    };

    // Attach classes to host
    this.themeService.attachClasses(this.host, 'text', props);
  }

}
