import { Component, ElementRef, OnInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import CardFooterStyles from '@fabula/core/theme/styles/CardFooter';

@Component({
  selector: 'fab-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css']
})
export class CardFooterComponent implements OnInit {
  host;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    let props;
    let styles;

    this.host = this.elRef.nativeElement;

    props = {
      padding: this.host.hasAttribute('padding')
    };

    styles = css(CardFooterStyles({ framework: 'angular', props }));
  }

}
