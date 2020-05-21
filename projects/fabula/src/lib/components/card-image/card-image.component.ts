import { Component, ElementRef, OnInit, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import CardImageStyles from '@fabula/core/theme/styles/CardImage';

@Component({
  selector: 'fab-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {
  @Input() color: string;
  @Input() height: any;
  @Input() src: string;
  
  host;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    let props;
    let styles;

    this.host = this.elRef.nativeElement;

    props = {
      color: this.color,
      cover: this.host.hasAttribute('cover'),
      height: this.height
    };
    styles = css(CardImageStyles({ framework: 'angular', props }));

    this.host.classList.add(styles);
  }

}
