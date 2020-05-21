import { AfterViewInit, Component, ElementRef, OnInit, Input } from '@angular/core';
import { css } from 'emotion';

// Styles
import IconStyles from '@fabula/core/theme/styles/Icon';

@Component({
  selector: 'fab-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  @Input() name: string;
  @Input() parentProps: {};

  host;
  props;

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
      name: this.name
    };

    // Set and apply styles
    styles = css(IconStyles({ framework: 'angular', props }));
    this.host.classList.add(styles);

    // Pass props to component
    this.props = props;
  }

  refreshStyles(parentProps) {
    let props = {
      ...this.props,
      ...parentProps
    };
    let styles = css(IconStyles({ framework: 'angular', props }));

    this.host.classList.add(styles);
  }

}
