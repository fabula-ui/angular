import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import CardSectionStyles from '@fabula/core/styles/components/card-section/card-section';

@Component({
  selector: 'fab-card-section',
  templateUrl: './card-section.component.html'
})
export class CardSectionComponent implements OnInit {
  @Input() color: string;
  @Input() divider: string;
  @Input() expand = false;
  @Input() layout = 'vertical';
  @Input() padding;

  host;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    const host = this.elRef.nativeElement;
    const styles = css(CardSectionStyles({ framework: 'angular', props: this }));

    host.classList.add(styles);
  }

}
