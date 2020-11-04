import { Component, ElementRef, Input, OnInit, ContentChildren, QueryList, AfterViewInit } from '@angular/core';

// Components
import { CardImageComponent } from '../card-image/card-image.component';
import { CardSectionComponent } from '../card-section/card-section.component';
import { CommonComponent } from '../common-component/common-component.component';

// Styles
import CardStyles from '@fabula/core/styles/components/card/card';

@Component({
  selector: 'fab-card',
  templateUrl: './card.component.html',
})
export class CardComponent extends CommonComponent implements AfterViewInit, OnInit {
  @ContentChildren(CardImageComponent) cardImageComponents: QueryList<CardImageComponent>;
  @ContentChildren(CardSectionComponent) cardSectionComponents: QueryList<CardSectionComponent>;

  @Input() color: string;
  @Input() glow = false;
  @Input() layout = 'v';
  @Input() padding = false;

  constructor(public elRef: ElementRef) { super(elRef) }

  ngAfterViewInit() {
    this.cardImageComponents.forEach((child: CardImageComponent) => {
      child.layout = this.layout;
      child.ngOnInit();
    });

    this.cardSectionComponents.forEach((child: CardSectionComponent) => {
      child.layout = this.layout;
      child.ngOnInit();
    });
  }

  ngOnInit() {
    this.styles = CardStyles;
    this.initStyles();
  }
}
