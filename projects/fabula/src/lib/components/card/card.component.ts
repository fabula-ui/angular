import { Component, ElementRef, Input, OnInit, ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { css } from 'emotion';

// Components
import { CardImageComponent } from '../card-image/card-image.component';
import { CardSectionComponent } from '../card-section/card-section.component';

// Styles
import CardStyles from '@fabula/core/styles/components/card/card';

@Component({
  selector: 'fab-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements AfterViewInit, OnInit {
  @ContentChildren(CardImageComponent) cardImageComponents: QueryList<CardImageComponent>;
  @ContentChildren(CardSectionComponent) cardSectionComponents: QueryList<CardSectionComponent>;

  @Input() color: string;
  @Input() glow = false;
  @Input() layout = 'vertical';

  host;

  constructor(
    private elRef: ElementRef
  ) { }

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
    let props;
    let styles;

    this.host = this.elRef.nativeElement;

    props = {
      color: this.color,
      glow: this.glow,
      layout: this.layout,
      padding: this.host.hasAttribute('padding')
    };
    styles = css(CardStyles({ framework: 'angular', props }));

    this.host.classList.add(styles);
  }

}
