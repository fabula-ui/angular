import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import CardImageStyles from '@fabula/core/styles/components/card-image/card-image';

@Component({
  selector: 'fab-card-image',
  templateUrl: './card-image.component.html'
})
export class CardImageComponent implements OnInit {
  @Input() adaptColor = false;
  @Input() color: string;
  @Input() height: any;
  @Input() icon: string;
  @Input() layout: string;
  @Input() src: string;
  @Input() width: string;

  host;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    let props;
    let styles;

    this.host = this.elRef.nativeElement;

    props = {
      adaptColor: this.adaptColor,
      color: this.color,
      cover: this.host.hasAttribute('cover'),
      height: this.height,
      icon: this.icon,
      layout: this.layout,
      width: this.width
    };
    styles = css(CardImageStyles({ framework: 'angular', props }));

    this.host.classList.add(styles);
  }

}
