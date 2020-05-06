import { Component, Input, OnInit, ElementRef, Renderer2, Renderer } from '@angular/core';
// const styles = require('@fabula/core/css/badge.css');
import { BadgeStyles } from './badge.styles';

// Services
import { FabulaService } from '../../services/fabula.service';

@Component({
  selector: 'fab-badge',
  providers: [BadgeStyles],
  templateUrl: './badge.component.html',
  styles: []
})
export class BadgeComponent implements OnInit {
  className;
  @Input() color: string;
  @Input('corner-style') cornerStyle = 'hard';
  @Input() icon = '';
  @Input('placement-x') placementX = 'right';
  @Input('placement-y') placementY = 'bottom';
  @Input() size = 'md';

  constructor(
    public elRef: ElementRef,
    private fabulaService: FabulaService,
    public styles: BadgeStyles,
    ) { }

  ngOnInit() {
    // Set styles
    this.fabulaService.setStyles(this.elRef.nativeElement, this.styles);
  }

}
