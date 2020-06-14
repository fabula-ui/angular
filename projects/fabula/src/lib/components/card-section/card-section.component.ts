import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { css } from 'emotion';

// Styles
import CardSectionStyles from '@fabula/core/theme/styles/CardSection';

@Component({
  selector: 'fab-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.css']
})
export class CardSectionComponent implements OnInit {
  @Input() color: string;
  @Input() divider: string;
  @Input() padding: any;

  host;

  constructor(
    public elRef: ElementRef
  ) { }

  ngOnInit() {
    let props;
    let styles;

    // Get host element
    this.host = this.elRef.nativeElement;

    // Set props
    props = {
      color: this.color,
      divider: this.divider,
      padding: this.padding
    };

    // Set and apply styles
    styles = css(CardSectionStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);
  }

}
