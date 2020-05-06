import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';

// Services
import { FabulaService } from '../../services/fabula.service';

// Styles
import { CardStyles } from './card.styles';

@Component({
  providers: [CardStyles],
  selector: 'fab-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() color = 'default';
  @Input('corner-style') cornerStyle = 'hard';
  @Input() flow = 'vertical';

  props: object;

  private element: any;
  constructor(
    private elRef: ElementRef,
    private fabulaService: FabulaService,
    private styles: CardStyles
  ) { }

  ngOnInit() {
    this.element = this.elRef.nativeElement;
    this.props = {
      color: this.color,
      cornerStyle: this.cornerStyle,
      flow: this.flow
    };

    this.setStyles();
  }

  // Methods
  setStyles() {
    this.fabulaService.setStyles(this.element, this.styles, this.props);
  }

}
