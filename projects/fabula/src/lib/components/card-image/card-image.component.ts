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
  @Input() cover = false;
  @Input() height: any;
  @Input() icon: string;
  @Input() layout: string;
  @Input() src: string;
  @Input() width: any;

  constructor(public elRef: ElementRef) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(CardImageStyles({ framework: 'angular', props: this }));
    host.classList.add(styles);
  }
}
